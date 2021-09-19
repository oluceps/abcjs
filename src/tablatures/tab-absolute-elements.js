/**
 * Tablature Absolute elements factory
 */
var AbsoluteElement = require('../write/abc_absolute_element');
var RelativeElement = require('../write/abc_relative_element');

function isObject(a) { return a != null && a.constructor === Object; }
function cloneObject(dest, src) {
  for (var prop in src) {
    if (src.hasOwnProperty(prop)) {
      if (!(Array.isArray(src[prop]) || isObject(src[prop]))) {
        dest[prop] = src[prop];
      }
    }
  }
}

function cloneAbsolute(absSrc) {
  var returned = new AbsoluteElement('', 0, 0, '', 0);
  cloneObject(returned, absSrc);
  returned.top = 0;
  returned.bottom = -1;
  if (absSrc.abcelem) {
    returned.abcelem = {};
    cloneObject(returned.abcelem, absSrc.abcelem);
    returned.abcelem.el_type = 'tabNumber';
  }
  return returned;
}

function cloneAbsoluteAndRelatives(absSrc, plugin) {
  var returned = cloneAbsolute(absSrc);
  if (plugin) {
    var children = absSrc.children;
    // proceed with relative as well
    var first = true;
    for (var ii = 0; ii < children.length; ii++) {
      var child = children[ii];
      var relative = new RelativeElement('', 0, 0, 0, '');
      cloneObject(relative, child);
      first = plugin.tablature.setRelative(child, relative, first);
      returned.children.push(relative);
    }
  }
  return returned;
}

function buildTabAbsolute(plugin, absX, relX) {
  var tabIcon = 'tab.tiny';
  var tabYPos = 7.5;
  if (plugin.isTabBig) {
    tabIcon = 'tab.big';
    tabYPos = 10;
  }
  var element = {
    el_type: "tab",
    icon: tabIcon,
    Ypos: tabYPos
  };
  var tabAbsolute = new AbsoluteElement(element, 0, 0, "symbol", 0);
  tabAbsolute.x = absX;
  var tabRelative = new RelativeElement(tabIcon, 0, 0, 7.5, "tab");
  tabRelative.x = relX;
  tabAbsolute.children.push(tabRelative);
  if (tabAbsolute.abcelem.el_type == 'tab') {
    tabRelative.pitch = tabYPos;
  }
  return tabAbsolute;
}

function lyricsDim(abs) {
  if (abs.extra) {
    for (var ii = 0; ii < abs.extra.length; ii++) {
      var extra = abs.extra[ii];
      if (extra.type == 'lyric') {
        return {
          bottom: extra.bottom,
          height: extra.height
        };
      }
    }
  }
  return null;
}

function TabAbsoluteElements() { }

/**
 * Build tab absolutes by scanning current staff line absolute array
 * @param {*} staffAbsolute
 */
TabAbsoluteElements.prototype.build = function (plugin, staffAbsolute, tabVoice) {
  var source = staffAbsolute[0];
  var dest = staffAbsolute[1];
  for (var ii = 0; ii < source.children.length; ii++) {
    var absChild = source.children[ii];
    var absX = absChild.x;
    var relX = absChild.children[0].x;
    if (absChild.isClef) {
      dest.children.push(buildTabAbsolute(plugin, absX, relX));
    }
    switch (absChild.type) {
      case 'bar':
        tabVoice.push({
          el_type: absChild.abcelem.el_type,
          type: absChild.abcelem.type,
          endChar: absChild.abcelem.endChar,
          startChar: absChild.abcelem.startChar,
        });
        dest.children.push(cloneAbsoluteAndRelatives(absChild, plugin));
        break;
      case 'note':
        var abs = cloneAbsolute(absChild);
        abs.lyricDim = lyricsDim(absChild);
        var pitches = absChild.abcelem.pitches;
        var graceNotes = absChild.gracenotes;
        var tabPos = plugin.semantics.notesToNumber(pitches, graceNotes);
        if (tabPos.error) {
          plugin._super.setError(tabPos.error);
        } else {
          abs.type = 'tabNumber';
          // convert note to number
          var def = { el_type: "note", startChar: absChild.abcelem.startChar, endChar: absChild.abcelem.endChar, notes: [] };
          for (var jj = 0; jj < tabPos.notes.length; jj++) {
            var curNote = tabPos.notes[jj];
            var pitch = plugin.semantics.stringToPitch(curNote.str);
            var acc = curNote.note.isFlat ? '_' : (curNote.note.isSharp ? '^' : '');
            def.notes.push({ num: curNote.num, str: curNote.str, pitch: acc + curNote.note.name });
            var opt = {
              type: 'tabNumber'
            };
            var tabNoteRelative = new RelativeElement(
              curNote.num.toString(), 0, 0, pitch, opt);
            tabNoteRelative.x = relX;
            tabNoteRelative.isAltered = curNote.note.isAltered;
            abs.children.push(tabNoteRelative);
          }
          dest.children.push(abs);
          tabVoice.push(def);
        }
        break;
    }
  }
};

module.exports = TabAbsoluteElements;