sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "jquery.sap.global",
    "sap/ui/model/json/JSONModel"
], function (CoreController, MessageToast, Filter, FilterOperator, jQuery, JSONModel) {
	"use strict";
 
	var Controller = CoreController.extend("nrg.winback.controller.App");

        Controller.prototype.onInit = function () {
        	this._initRoutingInfo();
        	/*
        	1. Route -- setup route, target...
        	2. var sObjectid = this.getObjectid();(URL Parameter) var oUriParameters = jQuery.sap.getUriParameters();
        	*/
        };

        Controller.prototype.onBeforeRendering = function () {
        	//sap.ui.core.BusyIndicator.show();
        	this._initUAN();
        	this._initUANInfo();
        	this._initAgentsList();
			
			var oModel = this.getOwnerComponent().getModel("Winbacks");
			this.getView().setModel(oModel, "Winbacks");

           /* this.getView().setModel(this.getOwnerComponent().getModel('oStateListModel'), 'oUSStateList');

            this.getOwnerComponent().getCcuxApp().setTitle('BUSINESS PARTNER');

            this.getView().setModel(this.getOwnerComponent().getModel('comp-bupa'), 'oODataSvc');

            //Model to hold CA accounts and mailing address short form
            this.getView().setModel(new sap.ui.model.json.JSONModel(), 'oDataCAs');*/

        };
        
        /* =========================================================== */
		/* lifecycle method- After Rendering                          */
		/* =========================================================== */
        Controller.prototype.onAfterRendering = function () {

        };
        
        Controller.prototype._initRoutingInfo = function () {
            /*
            var sObjectid = this.getObjectid();
			this.getView().byId("idQuotation").setValue(sObjectid);
            */
        };
        
        Controller.prototype._initUAN = function () {
			/*
			Bind aggregation
			*/
			
        };
        
        Controller.prototype._initUANInfo = function () {
			/*
			OData read
			*/
			//Model to hold UAN Info
           /* this.getView().setModel(new sap.ui.model.json.JSONModel(), "oUANInfo");
            
            var url = "/sap/opu/odata/sap/ZE_QUOTATION_SRV/";
			var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		
			var oBindingInfo = {
		         success : function (oData) {
                 jQuery.sap.log.info("UpdateStatusSet Odata Read ");
                      var modelStatus = this.getView().getModel("comp-status");
                      modelStatus.setData(oData);
                      
             }.bind(this),
             error: function (oError) {
                 jQuery.sap.log.info("Eligibility Error occured");
             }.bind(this)
        	};
			var sPath = "/UpdateStatusSet";
			oModel.read(sPath,oBindingInfo);	*/	
		
        };
        
        Controller.prototype._initAgentsList = function () {
			/*
			Bind aggregation
			*/
        };
        
        return Controller;
 
});