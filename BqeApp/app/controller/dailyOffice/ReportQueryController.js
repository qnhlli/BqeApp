/*
 * File: app/controller/dailyOffice/ReportQueryController.js
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

Ext.define('BqeApp.controller.dailyOffice.ReportQueryController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            workReportTitle: '#workReportTitle',
            workReportCheckPerson: '#workReportCheckPerson'
        },

        control: {
            "workreport": {
                initialize: 'onWorkReportInitialize'
            }
        }
    },

    onWorkReportInitialize: function(component, eOpts) {
        console.log('初始化工作上报');


        var WorkReportJsonPStore=Ext.getStore('ReportQueryJsonPStore');

        WorkReportJsonPStore.load({
            callback: function(records, operation, success) {
                console.log(records);
                this.getWorkReport().setValues({
                    workReportTitle:records[0].get('workReportCheckPerson')
                });
            },
            scope: this
        });
    }

});