sap.ui.require(
    [
        "sap/ui/core/mvc/XMLView",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel",
    ],
    function (XMLView, JSONModel, ResourceModel) {
        "use strict";

        // Attach an anonymous function to the SAPUI5 'init' event
        sap.ui.getCore().attachInit(function () {
            var oProductModel = new JSONModel();
            oProductModel.loadData("./model/Products.json");
            sap.ui.getCore().setModel(oProductModel, "products");

            //Create a JSON model froman object literal
            var oModel = new JSONModel({
                firstName: "Arif",
                lastName: "Hassan",
                enabled: true,
                address: {
                    street: "Modan Saha Lane",
                    city: "Dhaka",
                    zip: "1100",
                    country: "Bangladesh",
                },
                salesAmount: 213.234,
                priceThreshold: 20,
                currencyCode: "USD",
            });
            //oModel.setDefaultBindingMode(BindingMode.OneWay);
            //Assign the model object to the SAPUI5 core
            sap.ui.getCore().setModel(oModel);
            var oResourceModel = new ResourceModel({
                bundleName: "sap.ui.demo.db.i18n.i18n",
                supportedLocales: ["", "de"],
                fallbackLocale: "",
            });

            // Assign the model object to the SAPUI5 core using the name "i18n"
            sap.ui.getCore().setModel(oResourceModel, "i18n");
            //Display the XML view called "App"
            var oView = new XMLView({
                viewName: "sap.ui.demo.db.view.App",
            });
            // Register the view with the message manager
            sap.ui.getCore().getMessageManager().registerObject(oView, true);
            oView.placeAt("content");
        });
    }
);
