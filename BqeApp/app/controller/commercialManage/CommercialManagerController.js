/*
 * File: app/controller/commercialManage/CommercialManagerController.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('BqeApp.controller.commercialManage.CommercialManagerController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "customermanagelist": {
                initialize: 'onCustomerManageListInitialize'
            }
        }
    },

    /*
        客户列表初始化

    */
    onCustomerManageListInitialize: function(component, eOpts) {
        var customerStore = Ext.getStore('CustomerContactJsonPStore');

        customerStore.load({
            callback: function(records, operation, success) {
        //         console.log(records);
            },
            scope: this
        });
    }

});