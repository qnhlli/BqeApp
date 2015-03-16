/*
 * File: app/view/fastOperate/FastOperationMain.js
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

Ext.define('BqeApp.view.fastOperate.FastOperationMain', {
    extend: 'Ext.dataview.DataView',
    alias: 'widget.fastoperationmain',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        height: '100%',
        id: 'fastOperationMain',
        inline: true,
        itemCls: 'fastItemCls',
        store: 'fastOperationStore',
        itemTpl: [
            '<ul class="functionList">',
            '    <li><img class="photo" src="{iconPath}"/></li>',
            '    <li class="title">{title}</li>',
            '</ul>'
        ]
    }

});