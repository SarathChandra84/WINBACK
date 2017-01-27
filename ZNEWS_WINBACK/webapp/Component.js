/*global sap*/
/*jslint nomen:true*/

sap.ui.define(
    [
        "jquery.sap.global",
        "sap/ui/core/UIComponent",
        "sap/ui/model/resource/ResourceModel",
        "sap/ui/core/UIComponent",
        "sap/ui/model/json/JSONModel"
    ],

    function (jQuery, Component, ResourceModel, UIComponent, JSONModel) {
        "use strict";

        var CustomComponent = Component.extend("nrg.winback.Component", {
            metadata: {
                manifest: "json"
            }
        });

        CustomComponent.prototype.init = function () {
        	 Component.prototype.init.apply(this);
        	 
        	 // set i18n model
        	var i18nModel = new ResourceModel({
            	bundleName : "nrg.winback.i18n.i18n"
        	});
        	this.setModel(i18nModel, "i18n");
        	
			//this.getRouter().initialize();
        };

        CustomComponent.prototype.destroy = function () {

        };

        return CustomComponent;
    }
);