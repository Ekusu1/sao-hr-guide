ko.cachedTemplateEngine = function () {
	this['cached'] = {};
}
ko.cachedTemplateEngine.prototype = ko.utils.extend(new ko.nativeTemplateEngine(), {
	makeTemplateSource: function(template, templateDocument) {
		// Named template
		if (typeof template == "string") {
			if (this.cached[template] == undefined) {
				templateDocument = templateDocument || document;
				var elem = templateDocument.getElementById(template);
				if (!elem) throw new Error("Cannot find template with ID " + template);
				this.cached[template] = elem;
			}
			return new ko.templateSources.domElement(this.cached[template]);
		} else if ((template.nodeType == 1) || (template.nodeType == 8)) {
			// Anonymous template
			return new ko.templateSources.anonymousTemplate(template);
		} else
			throw new Error("Unknown template type: " + template);
	}
});