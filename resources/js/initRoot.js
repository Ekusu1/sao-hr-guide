"use strict";
GH.showLoader(false);
var rootView = null;
try {
	rootView = new RootViewModel();
	rootView.init();
	ko.applyBindings(rootView);
} catch (e) {
	GH.clearLocalStorage(
		'Something is wrong with the local data?<br>' +
		'Maybe the developer changed something?<br>' +
		'Clear local data and try again?<br><br>' +
		'Dev: "Sorry..."'
	);
	throw e;
}

$(`[href="${GH.getLast('tab')}"]`).tab('show');
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	GH.setLast('tab', $(e.currentTarget).attr('href'));
	GH.saveData();
});
