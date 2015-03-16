/*
 * File: app/store/functionListStore/ApplyManageStore.js
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

Ext.define('BqeApp.store.functionListStore.ApplyManageStore', {
    extend: 'Ext.data.Store',

    requires: [
        'BqeApp.model.FunctionListModel'
    ],

    config: {
        data: [
            {
                functionId: 'applicationUpload',
                xtype: 'commitapply',
                iconPath: 'resources/img/icon_application_upload.svg',
                title: '提交申请',
                moreIcon: false
            },
            {
                functionId: 'applicationQuery',
                xtype: '',
                iconPath: 'resources/img/icon_application_query.svg',
                title: '申请查询',
                moreIcon: false
            }
        ],
        model: 'BqeApp.model.FunctionListModel',
        storeId: 'applyManageStore'
    }
});