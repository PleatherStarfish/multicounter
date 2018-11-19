// This function returns the size of an object.
// I got a little help here from StackOverflow user SnnSnn at
// https://stackoverflow.com/questions/5223/length-of-a-javascript-object
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};


inlets = 1;
outlets = 2;

var cues = {0:  [100, 101, 102, 103, 104],
			1:  [200, 201, 202, 203, 204],
			2:  [300, 301, 302, 303, 304],
			3:  [400, 401, 402, 403, 404],
			4:  [500, 501, 502, 503, 504],
			5:  [600, 601, 602, 603, 604],
			6:  [700, 701, 702, 703, 704],
			7:  [800, 801, 802, 803, 804],
			8:  [900, 901, 902, 903, 904],
			9:  [1000, 1001, 1002, 1003, 1004],
			10: [1100, 1101, 1102, 1103, 1104],
			11: [1200, 1201, 1202, 1203, 1204],
			12: [1300, 1301, 1302, 1303, 1304],
			13: [1400, 1401, 1402, 1403, 1404],
			14: [1500, 1501, 1502, 1503, 1504],
			15: [1600, 1601, 1602, 1603, 1604],
			16: [1700, 1701, 1702, 1703, 1704],
			17: [1800, 1801, 1802, 1803, 1804],
			18: [1900, 1901, 1902, 1903, 1904]
			};

var counter = 0;
var subcounter = 0;

// This is used to reset the counter to 0
function anything() {
	if (messagename == 'reset') {
		counter = 0;
		subcounter = 0;
		outlet(1, 'counter reset');
	}
}

// This is used to set the counter to a specific value
function list() {
	var a = arrayfromargs(arguments);
	if (a[0] >= 0 && a[0] <= Object.size(cues)) {
		counter = a[0];
		subcounter = a[1];

		outlet(1, counter, subcounter);
	}
}

// Count through each subsection within each section
function bang() {
	outlet(1, counter + "." + subcounter);

	if (subcounter+1 < cues[counter].length) {
		outlet(0, cues[counter][subcounter]);
		subcounter += 1;
	}
	else {
		outlet(0, cues[counter][subcounter]);
		counter += 1;
		subcounter = 0;
		}

}
