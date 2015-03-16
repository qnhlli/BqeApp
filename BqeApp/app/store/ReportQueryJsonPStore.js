/*
 * File: app/store/ReportQueryJsonPStore.js
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

Ext.define('BqeApp.store.ReportQueryJsonPStore', {
    extend: 'Ext.data.Store',

    requires: [
        'BqeApp.model.WorkReportModel',
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json'
    ],

    config: {
        model: 'BqeApp.model.WorkReportModel',
        storeId: 'ReportQueryJsonPStore',
        proxy: {
            type: 'jsonp',
            url: 'http://192.168.0.100/appserver/server.php/work/workReports/query',
            reader: {
                type: 'json'
            }
        }
    }
});