describe("audio flattener", () => {
	var abcMultiple = `K:C
Q:1/4=60
L:1/4
V:1
G/| (3c/d/c/ "C"z d .e| {f}g !tenuto!a [gb] !style=rhythm!B|"D"A2"E"^G2|
V:2
x/|C4|D4|^F2B2|
`;

	var expectedMultiple = {
		"tempo": 60,
		"instrument": 0,
		"tracks": [
			[
				{
					"cmd": "program",
					"channel": 0,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 67,
					"volume": 85,
					"start": 0,
					"duration": 0.125,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 72,
					"volume": 105,
					"start": 0.125,
					"duration": 0.08333333333333333,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 74,
					"volume": 85,
					"start": 0.20833333333333331,
					"duration": 0.08333333333333333,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 72,
					"volume": 85,
					"start": 0.29166666666666663,
					"duration": 0.08333333333333336,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 74,
					"volume": 95,
					"start": 0.625,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 76,
					"volume": 95,
					"start": 0.875,
					"duration": 0.25,
					"instrument": 0,
					"endType": "staccato",
					"gap": 0.1
				},
				{
					// TODO-PER: this should be the gracenote
					"cmd": "note",
					"pitch": 77,
					"volume": 70,
					"start":0,
					"duration":0.125,
					"gap":0
				},
				{
					"cmd": "note",
					"pitch": 79,
					"volume": 105,
					"start": 1.125,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 81,
					"volume": 95,
					"start": 1.375,
					"duration": 0.25,
					"instrument": 0,
					"endType": "tenuto",
					"gap": -0.001
				},
				{
					"cmd": "note",
					"pitch": 79,
					"volume": 95,
					"start": 1.625,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 83,
					"volume": 95,
					"start": 1.625,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 60,
					"volume": 95,
					"start": 1.875,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 64,
					"volume": 95,
					"start": 1.875,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 67,
					"volume": 95,
					"start": 1.875,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 105,
					"start": 2.125,
					"duration": 0.5,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 68,
					"volume": 95,
					"start": 2.625,
					"duration": 0.5,
					"instrument": 0,
					"gap": 0
				}
			],
			[
				{
					"cmd": "program",
					"channel": 1,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 60,
					"volume": 105,
					"start": 0.125,
					"duration": 1,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 62,
					"volume": 105,
					"start": 1.125,
					"duration": 1,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 66,
					"volume": 105,
					"start": 2.125,
					"duration": 0.5,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 95,
					"start": 2.625,
					"duration": 0.5,
					"instrument": 0,
					"gap": 0
				}
			],
			[
				{
					"cmd": "program",
					"channel": 2,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 60,
					"volume": 48,
					"start": 0.375,
					"duration": 0.125,
					"instrument": 0
				}, // m1 b2 chick
				{
					"cmd": "note",
					"pitch": 64,
					"volume": 48,
					"start": 0.375,
					"duration": 0.125,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 67,
					"volume": 48,
					"start": 0.375,
					"duration": 0.125,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 43,
					"volume": 64,
					"start": 0.625,
					"duration": 0.125,
					"instrument": 0
				}, // m1 b3 boom
				{
					"cmd": "note",
					"pitch": 60,
					"volume": 48,
					"start": 0.875,
					"duration": 0.125,
					"instrument": 0
				}, // m1 b4 chick
				{
					"cmd": "note",
					"pitch": 64,
					"volume": 48,
					"start": 0.875,
					"duration": 0.125,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 67,
					"volume": 48,
					"start": 0.875,
					"duration": 0.125,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 50,
					"volume": 64,
					"start": 2.125,
					"duration": 0.125,
					"instrument": 0
				}, // m3 b1 boom
				{
					"cmd": "note",
					"pitch": 62,
					"volume": 48,
					"start": 2.375,
					"duration": 0.125,
					"instrument": 0
				}, // m3 b2 chick
				{
					"cmd": "note",
					"pitch": 66,
					"volume": 48,
					"start": 2.375,
					"duration": 0.125,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 48,
					"start": 2.375,
					"duration": 0.125,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 40,
					"volume": 64,
					"start": 2.625,
					"duration": 0.125,
					"instrument": 0
				}, // m3 b3 boom
				{
					"cmd": "note",
					"pitch": 52,
					"volume": 48,
					"start": 2.875,
					"duration": 0.125,
					"instrument": 0
				}, // m3 b4 chick
				{
					"cmd": "note",
					"pitch": 56,
					"volume": 48,
					"start": 2.875,
					"duration": 0.125,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 59,
					"volume": 48,
					"start": 2.875,
					"duration": 0.125,
					"instrument": 0
				},
			]
		],
		"totalDuration": 3.125
	}

	//////////////////////////////////////////////////////////

	var abcDynamics = `X:1
M:4/4
L:1/4
Q:1/4=120
K:C
!crescendo(! EFGA| GAB !crescendo)!c | !diminuendo(! EFGA| GAB !diminuendo)!c |
!pppp! A B !ppp!A B |!pp! A B !p!A B | !mp! AB !sfz! AB|
!mf! AB !f! AB | !ff! AB !fff! AB | !ffff! ABAB|]
`;

	var expectedDynamics = {
		"tempo": 120,
		"instrument": 0,
		"tracks": [
			[
				{
					"cmd": "program",
					"channel": 0,
					"instrument": 0
				},
				{
					"cmd": "note",
					"pitch": 64,
					"volume": 105,
					"start": 0,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 65,
					"volume": 98,
					"start": 0.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 67,
					"volume": 101,
					"start": 0.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 104,
					"start": 0.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 67,
					"volume": 117,
					"start": 1,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 110,
					"start": 1.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 113,
					"start": 1.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 72,
					"volume": 116,
					"start": 1.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 64,
					"volume": 126,
					"start": 2,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 65,
					"volume": 116,
					"start": 2.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 67,
					"volume": 116,
					"start": 2.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 116,
					"start": 2.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 67,
					"volume": 126,
					"start": 3,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 116,
					"start": 3.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 116,
					"start": 3.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 72,
					"volume": 116,
					"start": 3.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 15,
					"start": 4,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 10,
					"start": 4.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 20,
					"start": 4.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 20,
					"start": 4.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 45,
					"start": 5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 35,
					"start": 5.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 50,
					"start": 5.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 50,
					"start": 5.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 75,
					"start": 6,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 65,
					"start": 6.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 65,
					"start": 6.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 65,
					"start": 6.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 90,
					"start": 7,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 80,
					"start": 7.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 95,
					"start": 7.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 95,
					"start": 7.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 120,
					"start": 8,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 110,
					"start": 8.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 125,
					"start": 8.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 125,
					"start": 8.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 127,
					"start": 9,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 125,
					"start": 9.25,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 69,
					"volume": 125,
					"start": 9.5,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				},
				{
					"cmd": "note",
					"pitch": 71,
					"volume": 125,
					"start": 9.75,
					"duration": 0.25,
					"instrument": 0,
					"gap": 0
				}
			]
		],
		"totalDuration": 10
	}

	//////////////////////////////////////////////////////////

	var abcSixHuit = `X:1
M:6/8
L:1/8
Q:3/8=60
K:G
"G"GAB cde|"D7"fga DEF|
`;

	var expectedSixHuit = {
		"tempo": 60,
		"instrument": 0,
		"tracks": [
			[
				{
					"cmd": "program",
					"channel": 0,
					"instrument": 0
				},
				{"cmd":"note","pitch":67,"volume":105,"start":0,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":85,"start":0.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":85,"start":0.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":95,"start":0.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":85,"start":0.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":0.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":105,"start":0.75,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":79,"volume":85,"start":0.875,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":81,"volume":85,"start":1,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":95,"start":1.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":1.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":66,"volume":85,"start":1.375,"duration":0.125,"instrument":0,"gap":0},
			],
			[
				{
					"cmd": "program",
					"channel": 1,
					"instrument": 0
				},
				{"cmd":"note","pitch":43,"volume":64,"start":0,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":38,"volume":64,"start":0.375,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":0.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":0.625,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":50,"volume":64,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":66,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":69,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":72,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":45,"volume":64,"start":1.125,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":1.375,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":66,"volume":48,"start":1.375,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":69,"volume":48,"start":1.375,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":72,"volume":48,"start":1.375,"duration":0.125,"instrument":0},
			],
		],
		"totalDuration": 1.5
	}

	//////////////////////////////////////////////////////////

	var abcDrum = `X:1
T: metronome
L:1/4
Q:1/4=60
%%MIDI drum dddd 76 77 77 77 50 50 50 50
N:The drum beat should start on the first full measure.
N:The drum beat should drop out in the second line.
N:The drum beat pattern should change for the third line.
K:A
V:1
%%MIDI drumon
e|a/g/ f/e/ c3/2 B/|Azzz|z4|z/c/ z/d/ z/e/ z/f/|
%%MIDI drumoff
|a/g/ f/e/ c3/2 B/|Azzz|[I:MIDI drumon]z4|z/c/ z/d/ z/e/ z/f/|
%%MIDI drum d2z/d/d 35 38 38 100 50 50 
|a/g/ f/e/ c3/2 B/|Azzz|z4|z/c/ z/d/ z/e/ z/f/|
`;

	var expectedDrum = {
		"tempo": 0,
		"instrument": 0,
		"totalDuration": 1.5,
		"tracks": [
			// TODO-PER
		]
	};

	//////////////////////////////////////////////////////////

	var abcTranspose = `X: 1
M: 4/4
L: 1/4
K: Em
V: 1 transpose=-2
"Em"EGAB|
V: 2
"Em"EGAB|
V: 3 transpose=4
"Em"EGAB|
`;

	var expectedTranspose = {
		"tempo":180,"instrument":0,"totalDuration":1,"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":62,"volume":105,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":95,"start":0.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":95,"start":0.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":95,"start":0.75,"duration":0.25,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":64,"volume":105,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":95,"start":0.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":95,"start":0.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":95,"start":0.75,"duration":0.25,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":2,"instrument":0},
				{"cmd":"note","pitch":68,"volume":105,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":95,"start":0.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":95,"start":0.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":75,"volume":95,"start":0.75,"duration":0.25,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":3,"instrument":0},
				{"cmd":"note","pitch":38,"volume":64,"start":0,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":53,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":33,"volume":64,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":50,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":53,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":0.75,"duration":0.125,"instrument":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcTempo = `X:1
L:1/4
M:C|
Q:1/2=60
K:D
"D"DEFG| [Q:1/2=90] DEFG |	
`;

	var expectedTempo = {
		"tempo":60,
		"instrument":0,
		"totalDuration":1.9166666666666667,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":62,"volume":105,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":0.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":66,"volume":95,"start":0.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":0.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":105,"start":1,"duration":0.16666666666666666,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":1.16666666666666666,"duration":0.16666666666666666,"instrument":0,"gap":0},
				{"cmd":"note","pitch":66,"volume":95,"start":1.33333333333333333,"duration":0.16666666666666666,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":1.5,"duration":0.16666666666666666,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":50,"volume":64,"start":0,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":66,"volume":48,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":69,"volume":48,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":50,"volume":64,"start":1,"duration":0.08333333333333333,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":1.33333333333333333,"duration":0.08333333333333333,"instrument":0},
				{"cmd":"note","pitch":66,"volume":48,"start":1.33333333333333333,"duration":0.08333333333333333,"instrument":0},
				{"cmd":"note","pitch":69,"volume":48,"start":1.33333333333333333,"duration":0.08333333333333333,"instrument":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcDecoration = `X:1
M:4/4
L:1/4
Q:1/4=90
K:C
%%MIDI program 3
!trill! e !lowermordent! d !uppermordent! c !mordent! B | !accent!A .G !turn! g !roll! a | !slide! d  !/! G  !//! G   !///! G |
[Q:1/4=180] !trill! e !lowermordent! d !uppermordent! c !mordent! B | !accent!A .G !turn! g !roll! a | !slide! d  !/! G  !//! G   !///! G |
[Q:1/4=60] !trill! e !lowermordent! d !uppermordent! c !mordent! B | !accent!A .G !turn! g !roll! a | !slide! d  !/! G  !//! G   !///! G |
`;

	var expectedDecoration = {
		"tempo": 0,
		"instrument": 0,
		"totalDuration": 1.5,
		"tracks": [
			// TODO-PER
		]
	};

	//////////////////////////////////////////////////////////

	var abcMeterChange = `X:1
T: chords meter change
L:1/4
Q:1/4=40
M:3/4
K:F
"F"F2A|[M:4/4]"Bb"Bd2f|
`;

	var expectedMeterChange = {
		"tempo":40,
		"instrument":0,
		"totalDuration":1.75,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":65,"volume":105,"start":0,"duration":0.5,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":95,"start":0.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":70,"volume":105,"start":0.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":1,"duration":0.5,"instrument":0,"gap":0},
				{"cmd":"note","pitch":77,"volume":95,"start":1.5,"duration":0.25,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":41,"volume":64,"start":0,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":53,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":60,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":53,"volume":48,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":60,"volume":48,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":46,"volume":64,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":58,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":65,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":41,"volume":64,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":58,"volume":48,"start":1.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":1.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":65,"volume":48,"start":1.5,"duration":0.125,"instrument":0},
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcBreak = `X:1
L:1/4
Q:1/4=40
K:A
"E7"Bcde|"A"f"^break"efe|"E7"Bc"^ignore"de|
`;

	var expectedBreak = {
		"tempo": 60,
		"instrument": 0,
		"totalDuration": 3,
		"tracks": [
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":71,"volume":105,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":95,"start":0.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":0.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":95,"start":0.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":105,"start":1,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":95,"start":1.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":78,"volume":95,"start":1.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":95,"start":1.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":105,"start":2,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":73,"volume":95,"start":2.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":2.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":95,"start":2.75,"duration":0.25,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":40,"volume":64,"start":0,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":56,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":35,"volume":64,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":56,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":61,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":64,"volume":48,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":40,"volume":64,"start":2,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":2.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":56,"volume":48,"start":2.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":2.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":2.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":35,"volume":64,"start":2.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":52,"volume":48,"start":2.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":56,"volume":48,"start":2.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":59,"volume":48,"start":2.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":2.75,"duration":0.125,"instrument":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcMidMeasureChordChange = `X:1
K: Gmin
|: "Gm" GFDF GFDF | GF D2 "F" C4 |
`;

	var expectedMidMeasureChordChange = {
		"tempo":180,
		"instrument":0,
		"totalDuration":2,
		"tracks":
		[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":67,"volume":105,"start":0,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":0.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":95,"start":0.25,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":0.375,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":95,"start":0.5,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":0.625,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":95,"start":0.75,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":0.875,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":105,"start":1,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":1.125,"duration":0.125,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":95,"start":1.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":95,"start":1.5,"duration":0.5,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":43,"volume":64,"start":0,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":58,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":0.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":38,"volume":64,"start":0.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":58,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":0.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":43,"volume":64,"start":1,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":55,"volume":48,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":58,"volume":48,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":62,"volume":48,"start":1.25,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":41,"volume":64,"start":1.5,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":53,"volume":48,"start":1.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":57,"volume":48,"start":1.75,"duration":0.125,"instrument":0},
				{"cmd":"note","pitch":60,"volume":48,"start":1.75,"duration":0.125,"instrument":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcGrace = `X:1
T: midi-grace-notes
L:1/4
Q:1/4=40
K:A
{e}a|:{e}gz{e}ag|{efg}ag{ABcdefg}ag:|
{B}e{B2c/d/}fef|[K:Bb]{Bcde}f2{Bcde}f2|]
`;

	var expectedGrace = {
		"tempo":0,
		"instrument":0,
		"totalDuration":4.5,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":76,"volume":56.666666666666664,"start":0,"duration":0.125,"gap":0},
				{"cmd":"note","pitch":81,"volume":85,"start":0.125,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":76,"volume":63.333333333333336,"start":0.25,"duration":0.125,"gap":0},
				{"cmd":"note","pitch":80,"volume":95,"start":0.375,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":76,"volume":63.333333333333336,"start":0.75,"duration":0.125,"gap":0},
				{"cmd":"note","pitch":81,"volume":95,"start":0.875,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":80,"volume":95,"start":1,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":76,"volume":70,"start":1.25,"duration":0.041666666666667,"gap":0},
				{"cmd":"note","pitch":78,"volume":70,"start":1.291666666666667,"duration":0.041666666666667,"gap":0},
				{"cmd":"note","pitch":80,"volume":70,"start":1.333333333333334,"duration":0.041666666666666,"gap":0},
				{"cmd":"note","pitch":81,"volume":105,"start":1.375,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":80,"volume":105,"start":1.5,"duration":null,"instrument":0,"gap":0},

				{"cmd":"note","pitch":69,"volume":70,"start":1.75,"duration":0.017857142857143,"gap":0},
				{"cmd":"note","pitch":71,"volume":70,"start":1.7678,"duration":0.017857142857143,"gap":0},
				{"cmd":"note","pitch":73,"volume":70,"start":1.7857,"duration":0.017857142857143,"gap":0},
				{"cmd":"note","pitch":74,"volume":70,"start":1.8035,"duration":0.017857142857143,"gap":0},
				{"cmd":"note","pitch":76,"volume":70,"start":1.8214,"duration":0.017857142857143,"gap":0},
				{"cmd":"note","pitch":78,"volume":70,"start":1.8393,"duration":0.017857142857143,"gap":0},
				{"cmd":"note","pitch":80,"volume":70,"start":1.8571,"duration":0.017857142857143,"gap":0},
				{"cmd":"note","pitch":81,"volume":105,"start":1.875,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":80,"volume":105,"start":2,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":76,"volume":63.333333333333336,"start":2.25,"duration":0.125,"gap":0},
				{"cmd":"note","pitch":80,"volume":95,"start":2.375,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":76,"volume":63.333333333333336,"start":2.75,"duration":0.125,"gap":0},
				{"cmd":"note","pitch":81,"volume":95,"start":2.875,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":80,"volume":95,"start":3,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":76,"volume":70,"start":3.25,"duration":0.041666666666667,"gap":0},
				{"cmd":"note","pitch":78,"volume":70,"start":3.291666666666667,"duration":0.041666666666667,"gap":0},
				{"cmd":"note","pitch":80,"volume":70,"start":3.333333333333334,"duration":0.041666666666666,"gap":0},
				{"cmd":"note","pitch":81,"volume":105,"start":3.375,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":80,"volume":105,"start":3.5,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":69,"volume":70,"start":3.75,"duration":0.017857142857143,"gap":0},
				{"cmd":"note","pitch":71,"volume":70,"start":3.7678,"duration":0.017857142857143,"gap":0},
				{"cmd":"note","pitch":73,"volume":70,"start":3.7857,"duration":0.017857142857143,"gap":0},
				{"cmd":"note","pitch":74,"volume":70,"start":3.8035,"duration":0.017857142857143,"gap":0},
				{"cmd":"note","pitch":76,"volume":70,"start":3.8214,"duration":0.017857142857143,"gap":0},
				{"cmd":"note","pitch":78,"volume":70,"start":3.8393,"duration":0.017857142857143,"gap":0},
				{"cmd":"note","pitch":80,"volume":70,"start":3.8571,"duration":0.017857142857143,"gap":0},
				{"cmd":"note","pitch":81,"volume":105,"start":3.875,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":80,"volume":105,"start":4,"duration":null,"instrument":0,"gap":0},


				{"cmd":"note","pitch":71,"volume":70,"start":4.25,"duration":0.125,"gap":0},
				{"cmd":"note","pitch":76,"volume":105,"start":4.375,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":71,"volume":63.333333333333336,"start":4.5,"duration":0.0625,"gap":0},
				{"cmd":"note","pitch":73,"volume":63.333333333333336,"start":4.5625,"duration":0.03125,"gap":0},
				{"cmd":"note","pitch":74,"volume":63.333333333333336,"start":4.59375,"duration":0.03125,"gap":0},
				{"cmd":"note","pitch":78,"volume":95,"start":4.625,"duration":0.125,"instrument":0,"gap":0},

				{"cmd":"note","pitch":76,"volume":95,"start":4.75,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":78,"volume":95,"start":5,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":71,"volume":70,"start":5.25,"duration":0.0625,"gap":0},
				{"cmd":"note","pitch":73,"volume":70,"start":5.28125,"duration":0.0625,"gap":0},
				{"cmd":"note","pitch":74,"volume":70,"start":5.3125,"duration":0.0625,"gap":0},
				{"cmd":"note","pitch":76,"volume":70,"start":5.34375,"duration":0.0625,"gap":0},
				{"cmd":"note","pitch":78,"volume":105,"start":5.375,"duration":0.25,"instrument":0,"gap":0},

				{"cmd":"note","pitch":71,"volume":63.333333333333336,"start":5.5,"duration":0.0625,"gap":0},
				{"cmd":"note","pitch":73,"volume":63.333333333333336,"start":5.5625,"duration":0.0625,"gap":0},
				{"cmd":"note","pitch":74,"volume":63.333333333333336,"start":5.625,"duration":0.0625,"gap":0},
				{"cmd":"note","pitch":76,"volume":63.333333333333336,"start":5.6875,"duration":0.0625,"gap":0},
				{"cmd":"note","pitch":78,"volume":95,"start":5.75,"duration":0.25,"instrument":0,"gap":0}
				]
		]
	};

	//////////////////////////////////////////////////////////

	var abcMidiOptions = `X:1
%%MIDI program 40
%%MIDI channel 4
%%MIDI transpose -2
L:1/4
Q:1/4=40
K:A
ABcd|
`;

	var expectedMidiOptions = {
		"tempo":40,
		"instrument":40,
		"totalDuration":1,
		"tracks":
			[
				[
					{"cmd":"program","channel":4,"instrument":40},
					{"cmd":"note","pitch":67,"volume":105,"start":0,"duration":0.25,"instrument":40,"gap":0},
					{"cmd":"note","pitch":69,"volume":95,"start":0.25,"duration":0.25,"instrument":40,"gap":0},
					{"cmd":"note","pitch":71,"volume":95,"start":0.5,"duration":0.25,"instrument":40,"gap":0},
					{"cmd":"note","pitch":72,"volume":95,"start":0.75,"duration":0.25,"instrument":40,"gap":0}
					]
			]
	};

	//////////////////////////////////////////////////////////

	var abcMultiMeasureRest = `X:1
M:4/4
L:1/4
Q:1/4=130
K:Bb
cdef|Z4|fedc|
`;

	var expectedMultiMeasureRest = {
		"tempo":130,
		"instrument":0,
		"totalDuration":6,
		"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":72,"volume":85,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":85,"start":0.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":75,"volume":85,"start":0.50,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":77,"volume":85,"start":0.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":77,"volume":105,"start":5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":75,"volume":85,"start":5.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":5.50,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":5.75,"duration":0.25,"instrument":0,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcOctaveClefs = `X:1
M:4/4
K:C
[K: treble+8]{B}A4 [CE^F]4 | [K: treble-8]G8| G,2B,2 c'2e'2 | [K: bass-8]C8| [K: bass+8]B,8|
`;

	var expectedOctaveClefs = {
		"tempo": 180,
		"instrument": 0,
		"totalDuration": 5,
		"tracks": [
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":95,"volume":70,"start":0,"duration":0.125,"gap":0},
				{"cmd":"note","pitch":93,"volume":105,"start":0,"duration":0.5,"instrument":0,"gap":0},
				{"cmd":"note","pitch":84,"volume":95,"start":0.5,"duration":0.5,"instrument":0,"gap":0},
				{"cmd":"note","pitch":88,"volume":95,"start":0.5,"duration":0.5,"instrument":0,"gap":0},
				{"cmd":"note","pitch":90,"volume":95,"start":0.5,"duration":0.5,"instrument":0,"gap":0},
				{"cmd":"note","pitch":43,"volume":105,"start":1,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":31,"volume":105,"start":2,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":35,"volume":95,"start":2.25,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":95,"start":2.5,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":95,"start":2.75,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":36,"volume":105,"start":3,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":83,"volume":105,"start":4,"duration":1,"instrument":0,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcOverlay = `X:1
M: 4/4
L: 1/4
K:C
C4 | D4 |
G4 & E4 | A4 & F4 |
B4 & d4 & f4 | c4 & e4 & g4 |
a4 | b4 & d'4 |
C4 | D4 | E4 & G4 | A4 | B4 & d4 |
`;

	var expectedOverlay = {
		"tempo": 180,
		"instrument": 0,
		"totalDuration": 13,
		"tracks": [
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":60,"volume":105,"start":0,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":105,"start":1,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":105,"start":2,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":105,"start":3,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":105,"start":4,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":72,"volume":105,"start":5,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":81,"volume":105,"start":6,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":83,"volume":105,"start":7,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":60,"volume":105,"start":8,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":62,"volume":105,"start":9,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":64,"volume":105,"start":10,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":69,"volume":105,"start":11,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":71,"volume":105,"start":12,"duration":1,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":1,"instrument":0},
				{"cmd":"note","pitch":64,"volume":95,"start":2,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":65,"volume":105,"start":3,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":105,"start":4,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":76,"volume":105,"start":5,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":86,"volume":105,"start":7,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":67,"volume":105,"start":10,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":105,"start":12,"duration":1,"instrument":0,"gap":0}
			],
			[
				{"cmd":"program","channel":2,"instrument":0},
				{"cmd":"note","pitch":77,"volume":95,"start":4,"duration":1,"instrument":0,"gap":0},
				{"cmd":"note","pitch":79,"volume":105,"start":5,"duration":1,"instrument":0,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcPercMap = `X:1
%%percmap D  pedal-hi-hat x
%%percmap E  bass-drum-1
%%percmap F  acoustic-bass-drum
%%percmap G  low-floor-tom
%%percmap A  high-floor-tom
%%percmap B  low-tom
%%percmap ^B tambourine   triangle
%%percmap c  acoustic-snare
%%percmap _c electric-snare
%%percmap ^c low-wood-block   triangle
%%percmap =c side-stick
%%percmap d  low-mid-tom
%%percmap ^d high-wood-block    triangle
%%percmap e  high-mid-tom
%%percmap ^e cowbell      triangle
%%percmap f  high-tom
%%percmap ^f ride-cymbal-1
%%percmap g  closed-hi-hat
%%percmap ^g open-hi-hat
%%percmap a  crash-cym-1  x
%%percmap ^a open-triangle     triangle
Q:1/4=50
K:C perc
DEFG AB^Bc _c^c=cd ^de^ef ^fg^ga ^a
`;

	var expectedPercMap = {
		"tempo":50,"instrument":128,"totalDuration":2.625,"tracks":[
			[
				{"cmd":"program","channel":0,"instrument":128},
				{"cmd":"note","pitch":62,"volume":85,"start":0,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":64,"volume":85,"start":0.125,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":65,"volume":85,"start":0.25,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":67,"volume":85,"start":0.375,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":69,"volume":85,"start":0.5,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":71,"volume":85,"start":0.625,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":72,"volume":95,"start":0.75,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":72,"volume":85,"start":0.875,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":71,"volume":95,"start":1,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":73,"volume":85,"start":1.125,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":72,"volume":95,"start":1.25,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":74,"volume":85,"start":1.375,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":75,"volume":95,"start":1.5,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":76,"volume":85,"start":1.625,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":77,"volume":95,"start":1.75,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":77,"volume":85,"start":1.875,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":78,"volume":95,"start":2,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":79,"volume":85,"start":2.125,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":80,"volume":95,"start":2.25,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":81,"volume":85,"start":2.375,"duration":0.125,"instrument":128,"gap":0},
				{"cmd":"note","pitch":82,"volume":95,"start":2.5,"duration":0.125,"instrument":128,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	var abcLongTie = `X:1
L:1/4
Q:80
K:A
cd-d2-|d2-dz|
`;

	var expectedLongTie = {
		"tempo": 80,
		"instrument": 0,
		"totalDuration": 2,
		"tracks": [
			[
				{"cmd":"program","channel":0,"instrument":0},
				{"cmd":"note","pitch":73,"volume":105,"start":0,"duration":0.25,"instrument":0,"gap":0},
				{"cmd":"note","pitch":74,"volume":95,"start":0.25,"duration":1.5,"instrument":0,"gap":0}
			]
		]
	};

	//////////////////////////////////////////////////////////

	it("flatten-pickup-triplet-chords-rhythmhead", () => {
		doFlattenTest(abcMultiple, expectedMultiple);
	})

	it("flatten-dynamics", () => {
		doFlattenTest(abcDynamics, expectedDynamics);
	})

	it("flatten-jig", () => {
		doFlattenTest(abcSixHuit, expectedSixHuit);
	})

	it("flatten-drum", () => {
		doFlattenTest(abcDrum, expectedDrum);
	})

	it("flatten-transpose", () => {
		doFlattenTest(abcTranspose, expectedTranspose);
	})

	it("flatten-tempo-change", () => {
		doFlattenTest(abcTempo, expectedTempo);
	})

	it("flatten-decorations", () => {
		doFlattenTest(abcDecoration, expectedDecoration);
	})

	it("flatten-meter-change", () => {
		doFlattenTest(abcMeterChange, expectedMeterChange);
	})

	it("flatten-break", () => {
		doFlattenTest(abcBreak, expectedBreak);
	})

	it("flatten-mid-measure", () => {
		doFlattenTest(abcMidMeasureChordChange, expectedMidMeasureChordChange);
	})

	it("flatten-grace", () => {
		doFlattenTest(abcGrace, expectedGrace);
	})

	it("flatten-midi-options", () => {
		doFlattenTest(abcMidiOptions, expectedMidiOptions);
	})

	it("flatten-multi-measure-rest", () => {
		doFlattenTest(abcMultiMeasureRest, expectedMultiMeasureRest);
	})

	it("flatten-octave-clefs", () => {
		doFlattenTest(abcOctaveClefs, expectedOctaveClefs);
	})

	it("flatten-overlay", () => {
		doFlattenTest(abcOverlay, expectedOverlay);
	})

	it("flatten-perc-map", () => {
		doFlattenTest(abcPercMap, expectedPercMap);
	})

	it("flatten-long-tie", () => {
		doFlattenTest(abcLongTie, expectedLongTie);
	})
})

//////////////////////////////////////////////////////////

function doFlattenTest(abc, expected) {
	var visualObj = abcjs.renderAbc("*", abc, {});
	var flatten = visualObj[0].setUpAudio();
	console.log(JSON.stringify(flatten))
	chai.assert.equal(flatten.tempo, expected.tempo, "Tempo")
	chai.assert.equal(flatten.tracks.length, expected.tracks.length, "Number of Tracks")
	chai.assert.equal(flatten.totalDuration, expected.totalDuration, "Total Duration")
	for (var i = 0; i < expected.tracks.length; i++) {
		chai.assert.equal(flatten.tracks[i].length, expected.tracks[i].length, "length of track "+i)
		for (var j = 0; j < expected.tracks[i].length; j++) {
			var msg = "trk: " + i + " ev: " + j + "\nrcv: " + JSON.stringify(flatten.tracks[i][j]) + "\n" +
				"exp: " + JSON.stringify(expected.tracks[i][j]) + "\n";
			chai.assert.deepStrictEqual(flatten.tracks[i][j],expected.tracks[i][j], msg)
		}
	}
}
