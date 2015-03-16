/*
 * File: app/controller/dailyOffice/AttendanceManageController.js
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

Ext.define('BqeApp.controller.dailyOffice.AttendanceManageController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.pushdetailctr',

    requires: [
        'Ext.device.Geolocation'
    ],

    config: {
        refs: {
            obtainPositionBtn: 'pushcarddetail #obtainPositionBtn'
        },

        control: {
            "obtainPositionBtn": {
                tap: 'obtainPosition'
            },
            "attendancequerydetail": {
                initialize: 'onAttendanceQueryDetailInitialize'
            }
        }
    },

    /*
        点击处理定位位置

    */
    obtainPosition: function(button, e, eOpts) {
        var me = this;

        Ext.device.Geolocation.getCurrentPosition({
            success: function(position) {
                me.showPosition(position);
            },
            failure: function(error) {
                alert('定位失败,请检查设置');
            }
        });
    },

    /*
        考勤查询界面初始化

    */
    onAttendanceQueryDetailInitialize: function(component, eOpts) {
        console.log('考勤查询界面初始化');
        var attendanceQueryJsonPStore=Ext.getStore('attendanceQueryJsonPStore');

        attendanceQueryJsonPStore.load({
            callback: function(records, operation, success) {
                console.log(success);
                console.log(operation);

                component.setValues({
                    address:records[0].get('address'),
                    attendType:records[0].get('attendType'),
                    attendTime:records[0].get('attendTime')
                });
            },
            scope: this
        });
    },

    /*
        定位成功

    */
    showPosition: function(position) {
        var me = this;
        var myGeo = new BMap.Geocoder();
        // 获取定位信息
        var LngLat = position.coords.longitude+','+position.coords.latitude;

        Ext.data.JsonP.request({
            url: 'http://api.map.baidu.com/geoconv/v1/?',
            callbackKey: 'callback',
            params: {
                coords: LngLat,
                from: 1,
                to: 5,
                ak: 'xV1DRkUZPnUNZui4inZMUDnt'
            },
            success: function(result, request) {
                if(result.status===0){
                    // 根据坐标得到地址描述
                    myGeo.getLocation(
                        //将转换后的经纬度传给百度，根据经纬度获取详细地址信息
                        new BMap.Point(result.result[0].x, result.result[0].y),
                        //请求返回的参数
                        function(result){
                            if (result){
                                me.getObtainPositionBtn().setText(result.address);
                                me.uploadData(position,result.address,'in');
                            }else{
                                me.getObtainPositionBtn().setText('获取详细信息失败');
                            }
                        });
                }
            }
        });
    },

    /*
        上传数据到服务器

    */
    uploadData: function(position,address,attendType) {
        console.log('上传考勤信息');
        var me = this;

        Ext.data.JsonP.request({
            url: 'http://192.168.0.100/appserver/server.php/work/attendance/sign',
            callbackKey: 'callback',
            params: {
                longitude : position.coords.longitude,		//经度
                latitude : position.coords.latitude,		//纬度
                accuracy : position.coords.accuracy,		//位置精度
                gpsTimestamp : me.msecFormat(position.timestamp),	//时间
                address : address,	//地址
                attendType : attendType	//考勤类型（in:签到,out:签出）
            },
            success: function(result) {
                if(result.result=='success'){
                    alert('成功');
                }else{
                    alert('上传失败');
                }

            },
            failure: function() {
                alert('失败');
            }
        });
    },

    /* 将毫秒转换成时间格式 */
    msecFormat: function(msec) {
        var formatTime = new Date(msec);
        return formatTime;
    }

});