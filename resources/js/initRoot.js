"use strict";
Chart.defaults.global.defaultFontColor = "#999";

var rootView = null;
try {
	rootView = new RootViewModel();
	rootView.init();
	ko.applyBindings(rootView);
	setTimeout(()=>GH.showLoader(false), 1000);
} catch (e) {
	GH.clearLocalStorage(
		'Something is wrong with the local data?<br>' +
		'Maybe the developer changed something?<br>' +
		'Clear local data and try again?<br><br>' +
		'Dev: "Sorry..."'
	);
	throw e;
}

$(window).bind('beforeunload', ()=>'Are you sure you want to leave?');
// $(window).unload(()=>GH.saveData());

$(`[href="${GH.getLast('tab')}"]`).tab('show');
$('a[data-toggle="tab"]').on('shown.bs.tab', e=>
	GH.setLast('tab', $(e.currentTarget).attr('href'))
);
