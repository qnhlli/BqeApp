/*
 * File: app/view/dailyOffice/attendance/query/AttendanceQueryDetail.js
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

Ext.define('BqeApp.view.dailyOffice.attendance.query.AttendanceQueryDetail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.attendancequerydetail',

    requires: [
        'Ext.field.Text'
    ],

    config: {
        id: 'attendanceQueryDetail',
        items: [
            {
                xtype: 'textfield',
                disabled: true,
                itemId: 'address',
                label: '位置:',
                name: 'address'
            },
            {
                xtype: 'textfield',
                disabled: true,
                itemId: 'attendTime',
                label: '打卡时间:',
                labelWidth: '35%',
                name: 'attendTime'
            },
            {
                xtype: 'textfield',
                disabled: true,
                itemId: 'attendType',
                label: '打卡类型:',
                labelWidth: '45%',
                name: 'attendType'
            }
        ]
    }

});