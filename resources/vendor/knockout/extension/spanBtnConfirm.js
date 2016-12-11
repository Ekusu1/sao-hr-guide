// ko.bindingHandlers.keyboardConfirm = {
// 	init: function (element, valueAccessor, allBindings, viewModel) {
// 		var callback = valueAccessor();
// 		$(element).keypress(function (event) {
// 			var keyCode = (event.which ? event.which : event.keyCode);
// 			if ([0, 13, 32].includes(keyCode)) {
// 				callback.call(viewModel);
// 				return false;
// 			}
// 			return true;
// 		});
// 	}
// };

ko.bindingHandlers['spanBtnConfirm'] = {
	'init': function(element, valueAccessor, allBindings, viewModel, bindingContext) {
		var newValueAccessor = function () {
			var result = {};
			result['click'] = valueAccessor();
			result['keyup'] = (element, event)=>{
				if ([0, 13, 32].includes(event.which ? event.which : event.keyCode)) {
					event.currentTarget.click();
					return false;
				}
				return true;
			}
			return result;
		};
		return ko.bindingHandlers['event']['init'].call(this, element, newValueAccessor, allBindings, viewModel, bindingContext);
	}
}