/*
 * File: app/store/functionListStore/ResourcesManagementStore.js
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

Ext.define('BqeApp.store.functionListStore.ResourcesManagementStore', {
    extend: 'Ext.data.Store',

    requires: [
        'BqeApp.model.FunctionListModel'
    ],

    config: {
        data: [
            {
                functionId: 'photographUpload',
                xtype: 'photographupload',
                iconPath: 'resources/img/icon_upload_photograph.svg',
                title: '拍照上传',
                moreIcon: false
            },
            {
                functionId: 'businessopportunityQuery',
                xtype: '',
                iconPath: 'resources/img/icon_businessopportunity_query.svg',
                title: '商机查询',
                moreIcon: false
            },
            {
                functionId: 'businessopportunityUpload',
                xtype: 'businessopportunityupload',
                iconPath: 'resources/img/icon_upload_businessopportunity.svg',
                title: '商机上报',
                moreIcon: false
            }
        ],
        model: 'BqeApp.model.FunctionListModel',
        storeId: 'resourcesManagementStore'
    }
});