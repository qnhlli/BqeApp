/*
 * File: app/view/resourceManager/ResourceManageMain.js
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

Ext.define('BqeApp.view.resourceManager.ResourceManageMain', {
    extend: 'Ext.dataview.List',
    alias: 'widget.resourcemanagemain',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        id: 'resourceManageMain',
        disableSelection: true,
        store: 'resourcesManagementStore',
        itemTpl: [
            '<ul class="functionList">',
            '    <li><img  src="{iconPath}"/></li>',
            '    <li class="title">{title}</li>',
            '    <tpl if="moreIcon">',
            '        <li class="icon_more"><img src="resources/img/iocn_more.svg"/></li>',
            '    </tpl>',
            '</ul>'
        ]
    }

});