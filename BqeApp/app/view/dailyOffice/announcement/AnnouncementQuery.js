/*
 * File: app/view/dailyOffice/announcement/AnnouncementQuery.js
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

Ext.define('BqeApp.view.dailyOffice.announcement.AnnouncementQuery', {
    extend: 'Ext.form.Panel',
    alias: 'widget.announcementquery',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Button',
        'Ext.Spacer'
    ],

    config: {
        id: 'announcementQuery',
        items: [
            {
                xtype: 'fieldset',
                itemId: 'announcementQuerySet',
                title: '',
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'announcementQueryType',
                        label: '公告类型:',
                        name: 'announcementQueryType'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'announcementQueryPerson',
                        label: '发布者:',
                        name: 'announcementQueryPerson'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'announcementQueryStartTime',
                        label: '起始时间:',
                        name: 'announcementQueryStartTime'
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'announcementQueryEndTime',
                        label: '终止时间:',
                        name: 'announcementQueryEndTime'
                    },
                    {
                        xtype: 'container',
                        padding: '6 0 6 0',
                        layout: {
                            type: 'hbox',
                            pack: 'center'
                        },
                        items: [
                            {
                                xtype: 'button',
                                itemId: 'BtnConfirmAnnouncementQuery',
                                text: '确定'
                            },
                            {
                                xtype: 'spacer',
                                width: 20
                            },
                            {
                                xtype: 'button',
                                itemId: 'BtnCancelAnnouncementQuery',
                                text: '取消'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});