/*
 * File: app/view/dailyOffice/attendance/pushcard/PushCardType.js
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

Ext.define('BqeApp.view.dailyOffice.attendance.pushcard.PushCardType', {
    extend: 'Ext.Container',
    alias: 'widget.pushcardtype',

    requires: [
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        id: 'pushCardType',
        items: [
            {
                xtype: 'label',
                html: '考勤时段:08:30-17:30',
                itemId: 'timeBucket'
            },
            {
                xtype: 'list',
                height: '100%',
                hidden: false,
                itemId: 'attendanceTypeList',
                itemTpl: [
                    '<div>',
                    '    {title} ',
                    '</div>'
                ],
                store: 'PushCardTypeStore',
                onItemDisclosure: false
            }
        ]
    }

});