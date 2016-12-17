"use strict";
var initialRenderTime
GH.timer.start('initial render time')
var rootView = null;
try {
	rootView = new RootViewModel();
	rootView.init();
	GH.timer.start('render time only (applyBindings)');
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

$(()=>{
	GH.timer.get('initial render time');
	GH.timer.get('render time only (applyBindings)');
	console.log('displaying: '+rootView.displayAmountSum());
})