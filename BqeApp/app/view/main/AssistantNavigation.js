/*
 * File: app/view/main/AssistantNavigation.js
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

Ext.define('BqeApp.view.main.AssistantNavigation', {
    extend: 'Ext.navigation.View',
    alias: 'widget.assistantnavigation',

    requires: [
        'BqeApp.view.main.HomeTabPanel',
        'Ext.navigation.Bar',
        'Ext.Img',
        'Ext.tab.Panel'
    ],

    config: {
        id: 'assistantNavigation',
        defaultBackButtonText: '',
        navigationBar: {
            border: 0,
            docked: 'top',
            hidden: false,
            id: 'assistantNavBar',
            items: [
                {
                    xtype: 'image',
                    height: 24,
                    itemId: 'imgMenu',
                    width: 36,
                    src: 'resources/img/iocn_meun.svg'
                },
                {
                    xtype: 'image',
                    align: 'right',
                    height: 32,
                    itemId: 'imgSetting',
                    width: 40,
                    src: 'resources/img/settings.svg'
                }
            ]
        },
        items: [
            {
                xtype: 'hometabpanel'
            }
        ]
    }

});