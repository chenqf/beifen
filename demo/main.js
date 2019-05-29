// @flow Created by 陈其丰 on 2019/4/16.

let order = {
        "id": 60021908,
        "fkMemberId": 7461639,
        "totalAmount": 30,
        "productAmount": 30,
        "state": "Shipped",
        "createTime": 1559108897000,
        "memberPhone": "13942047342",
        "payMethod": "302",
        "receiveAmount": 30,
        "shipTime": 1559109223000,
        "storeId": 1669,
        "requestLock": 0,
        "source": 1,
        "counterId": 135006,
        "fixedTags": "00400130061",
        "receiveType": "10",
        "vegetable": false,
        "deliveryAddress": {
            "id": 1690377,
            "version": 0,
            "fkTgouOrderId": 60021908,
            "provinceId": 48,
            "province": "辽宁省",
            "cityId": 2554,
            "city": "大连市",
            "districtId": 945,
            "district": "甘井子区",
            "address": "大有饭店",
            "receiver": "瀚声",
            "phone": "13942047342",
            "addressLng": 121.512691,
            "addressLat": 38.88203
        },
        "paymentList": [{
            "id": 4722083,
            "version": 0,
            "amount": 30,
            "handlingCharge": 0.17,
            "comment": "测试支付回调流程",
            "paymentTime": 1559108902000,
            "createTime": 1559108902000,
            "payMethod": "302",
            "transactionId": "a256a692-eb8c-4cc3-a683-c61defc70697",
            "type": "付款",
            "payFlag": true,
            "fkTgouOrderId": 60021908,
            "exchangeRate": 1,
            "currencyCode": "CNY",
            "accountBear": 0,
            "paidPaymentId": 4220655
        }],
        "orderPreferentialList": [{
            "id": 2136427,
            "amount": 6,
            "fkTgouOrderId": 60021908,
            "type": 1,
            "excuteTime": 1559108897000,
            "name": "运费",
            "source": 0,
            "offline": true
        }, {
            "id": 2136428,
            "amount": -6,
            "fkTgouOrderId": 60021908,
            "type": 5,
            "excuteTime": 1559108897000,
            "name": "运费优惠",
            "source": 0,
            "offline": true
        }],
        "store": {
            "id": 1669,
            "name": "5025",
            "inventedName": "5025",
            "code": "5025",
            "isOn": true,
            "type": 1,
            "contacts": "5025",
            "phone": "18242030463",
            "closed": false,
            "fkAreaId": 1,
            "storeAddress": {
                "fkStoreId": 1669,
                "fkProvinceId": 48,
                "fkCityId": 2554,
                "address": "5025详细地址",
                "longitude": 0.000049,
                "dimension": -0.000167,
                "contacts": "5025",
                "phone": "18242030463"
            },
            "freeShipping": false,
            "isDashang": true,
            "sortOrder": 0,
            "openTime": "0:00",
            "closeTime": "23:25",
            "storeId": "1669",
            "fkMerchantId": 1,
            "storeType": 1,
            "merchant": {"merchantName": "大商集团", "type": 1},
            "storeImages": [],
            "state": "onshelf",
            "storeToBrand": [],
            "areaName": "大连地区",
            "firstImage": "seller/201811/19/62102411-4DA6-4DA2-8D46-56AD42E9D9E3.png",
            "newSupplier": false,
            "international": 0,
            "decoration": 0,
            "sweepMemberCode": 1,
            "recommend": false,
            "on": true
        },
        "counter": {
            "id": 135006,
            "name": "自动化测试专柜_050201003-植村秀",
            "fkStoreId": 1669,
            "floor": "7",
            "fkBrandId": 23509,
            "fkSoldAreaId": 5156,
            "state": 1,
            "fkCounterCategoryId": 2,
            "businessType": 0,
            "settleType": 1,
            "attentionCount": 0,
            "description": "",
            "soldAreaName": "自动化测试卖区",
            "brandName": "植村秀（SHU UEMURA）",
            "counterCategoryName": "女装",
            "brandList": [{"fkBrandId": 23509, "brandName": "植村秀（SHU UEMURA）"}],
            "storeName": "5025",
            "soldTypeName": "自动化测试业种",
            "soldTypeId": 1905,
            "deliveryRule": 2,
            "pickUpRule": "0,1",
            "freeShipping": false,
            "type": 1,
            "contractNumber": "000148",
            "fkMerchantId": 1,
            "isUsePoint": true,
            "counterGroupCodes": [{"id": 393935, "groupCode": "050201003", "groupName": "植村秀", "type": 1}],
            "kongDaoTask": false,
            "haveScene": false
        },
        "returnRequestIds": [],
        "hasReturn": false,
        "shipAmount": 0,
        "couponReduceAmount": 0,
        "activityReduceAmount": 0,
        "pointReductAmount": 0,
        "realPayAmount": 30,
        "pointCost": 0,
        "splitOrder": {"type": 0},
        "groupPurchaseOder": {
            "fkActivityId": 115721,
            "fkActivityProductId": 1880520,
            "fkItemId": 12469481,
            "state": 2,
            "groupCount": 2,
            "groupSurplusCount": 0,
            "startTime": 1559108724000,
            "endTime": 1559115924000,
            "groupTime": 1559108903000,
            "orderId": 60021908,
            "activityName": "拼团528",
            "orderState": 3,
            "type": 3
        },
        "usePromotion": false,
        "displayState": "Shipped",
        "son": false,
        "parent": false,
        "needPay": true,
        "hasPaid": true,
        "groupBuying": false,
        "groupPurchase": true,
        "receiveMethod": 1,
        "pickupRule": 0,
        "validateState": 3,
        "needQingQuan": false,
        "finishPay": true,
        "isCashCoupon": false,
        "isCrowd": false,
        "isPointPayCoupon": false,
        "stateStr": "已出库",
        "crowdTotalAmount": 30,
        "packageList": [[{
            "id": 22917196,
            "version": 4,
            "fkTgouOrderId": 60021908,
            "productId": 7652413,
            "quantity": 1,
            "price": 30,
            "state": "Shipped",
            "activityId": 115721,
            "activityToProductId": 12469481,
            "skuId": "29449653",
            "attrSku": "颜色分类：宝蓝色",
            "barcode": "w20190325001",
            "source": 1,
            "fkTgouPackageId": 2812023,
            "imageUrl": "seller/201903/25/0B5DC799-3471-4F29-916D-B7C67743D097.jpg",
            "originalPrice": 300,
            "categoryCode": "1Y0202",
            "misMerCode": "633009",
            "onshelfType": 0,
            "canReturn": true,
            "name": "新建无基础品商品",
            "specialCat": false,
            "isExtremeOrderProduct": false,
            "fenTanAmount": 30,
            "misAmount": 30
        }]],
        "giftList": [[]],
        "showChengTuan": false,
        "showTuanGou": false,
        "orderItemList": [{
            "id": 22917196,
            "version": 4,
            "fkTgouOrderId": 60021908,
            "productId": 7652413,
            "quantity": 1,
            "price": 30,
            "state": "Shipped",
            "activityId": 115721,
            "activityToProductId": 12469481,
            "skuId": "29449653",
            "attrSku": "颜色分类：宝蓝色",
            "barcode": "w20190325001",
            "source": 1,
            "fkTgouPackageId": 2812023,
            "imageUrl": "seller/201903/25/0B5DC799-3471-4F29-916D-B7C67743D097.jpg",
            "originalPrice": 300,
            "categoryCode": "1Y0202",
            "misMerCode": "633009",
            "onshelfType": 0,
            "canReturn": true,
            "name": "新建无基础品商品",
            "specialCat": false,
            "isExtremeOrderProduct": false,
            "fenTanAmount": 30,
            "misAmount": 30
        }],
        "buttonGroups": [],
        "serverTime": 1559112220378}



let util = {
    //订单类型
    orderType:{
        //拼多多
        isPDD:function (item) {
            return item.fixedTags[9] === "6";
        },
        isNotPDD:function (item) {
            return item.fixedTags[9] !== "6";
        }
    },
    //订单状态
    orderState: {
        //待支付
        isWaitPay: function (item) {
            return ['Waiting'].indexOf(item.state) >= 0;
        },
        //待发货
        isWaitSend: function (item) {
            return ['Pending', 'Processing', 'Shipping'].indexOf(item.state) >= 0;
        },
        //待发货-待审核
        isPending:function(item){
            return item.state === 'Pending';
        },
        //待发货-待分拣
        isWaitSendWaitProcess:function (item) {
            return item.state === 'Processing' && item.packageState === 'Pending';
        },
        //待发货-分拣中
        isWaitSendProcessing:function(item){
            return item.state === 'Processing' && item.packageState !== 'Pending';
        },
        //待发货-分拣完成
        isWaitSendShipping:function (item) {
            return item.state === 'Shipping';
        },
        //待收货
        isWaitReceive: function (item) {
            return ['Shipped', 'PointShipped'].indexOf(item.state) >= 0;
        },
        //待收货-分拣完成
        isPointShipped:function (item) {
            return item.state === 'PointShipped';
        },
        //已完成
        isOver: function (item) {
            return ['End'].indexOf(item.state) >= 0;
        },
        //已退货
        isReturn: function (item) {
            return ['Returned'].indexOf(item.state) >= 0;
        },
        //已取消
        isCanceled: function (item) {
            return ['Canceled'].indexOf(item.state) >= 0;
        },
        //已经核销
        isVerification:function (item) {
            return item.orderCoupon && item.orderCoupon.useTag === 2;
        },
        //未核销
        isNotVerification:function (item) {
            return !item.orderCoupon || item.orderCoupon.useTag !== 2;
        }
    },
    //衍生状态
    orderDeriveState: {
        //售后中
        // isCustomIng: function (item) {
        //     return item.requestLock === 2;
        // },
        //非售后中
        // isNotCustomIng: function (item) {
        //     return item.requestLock !== 2;
        // },
        //申请过售后
        // hasCustom:function (item) {
        //     var orderItemList = item.orderItemList || [];
        //     var flg = false;
        //     orderItemList.forEach(function (item) {
        //         var state = item.state;
        //         if(state === 'Returned' || state === 'Returning' || state === 'Rejected' ){
        //             flg = true;
        //         }
        //     })
        //     return flg;
        // },
        //全部没有申请过售后
        hasAllNotCustom:function (item) {
            var orderItemList = item.orderItemList || [];
            return orderItemList.every(function(item){ return item.hasApplyReturned === false;}) && orderItemList.every(function (item) {return item.state !== 'Returning'})
        },
        //申请过售后---通过 订单级别 来判断
        hasOrderCustom:function (item) {
            return item.hasReturn;
        },
        //申请过售后 ---通过 品级别 来判断
        hasSomeCustom:function (item) {
            var orderItemList = item.orderItemList || [];
            return orderItemList.some(function(item){
                return item.hasApplyReturned === true;
            })
        },
        //非售后中
        isNotCustomIng:function (item) {
            var orderItemList = item.orderItemList || [];
            return orderItemList.every(function(item){
                return item.state !== 'Returning';
            })
        },
        //售后中
        isCustomIng:function (item) {
            var orderItemList = item.orderItemList || [];
            return orderItemList.some(function(item){
                return item.state === 'Returning';
            })
        },
        //有可申请售后的商品
        canCustomIng:function (item) {
            var orderItemList = item.orderItemList || [];
            return orderItemList.some(function (item) {
                return item.returnQuantity && (!item.hasRefunded || item.source !== 4);
            })
        },
        //没有可售后的商品
        canNotCustomIng:function (item) {
            var orderItemList = item.orderItemList || [];
            return orderItemList.every(function (item) {
                return !item.returnQuantity || (item.hasRefunded && item.source === 4);
            })
        },

        //所有均已申请过售后
        // hasAllCustom:function (item) {
        //     var orderItemList = item.orderItemList || [];
        //     var num = orderItemList.length;
        //     var n = 0;
        //     orderItemList.forEach(function (item) {
        //         var state = item.state;
        //         if(state === 'Returned' || state === 'Returning' || state === 'Rejected' ){
        //             n = n + 1;
        //         }
        //     })
        //     return num === n;
        // },
        //申请过售后且已完成
        hasCustomAndOver:function (item) {
            var orderItemList = item.orderItemList || [];
            var flg = true;
            orderItemList.forEach(function (item) {
                var state = item.state;
                if(state === 'Returning'){
                    flg = false;
                }
            })
            return (this.hasSomeCustom(item) || this.hasOrderCustom(item)) && flg;
        },
        //取消中
        isCancelIng: function (item) {
            return item.requestLock === 1;
        },
        //非取消中
        isNotCancelIng: function (item) {
            return item.requestLock !== 1;
        },
        //是专柜团
        isGroupBuyIng: function (item) {
            return item.groupBuying;
        },
        //不是专柜团
        isNotGroupBuyIng: function (item) {
            return !item.groupBuying;
        },
        //是扫码购
        isScanBuy: function (item) {
            return item.fixedTags[9] === '1';
        },
        //不是扫码购
        isNotScanBuy: function (item) {
            return item.fixedTags[9] !== '1';
        },
        //是买当券订单
        isCashCoupon: function (item) {
            return item.fixedTags[0] === '1';
        },
        //不是买当券订单
        isNotCashCoupon: function (item) {
            return item.fixedTags[0] !== '1';
        },
        //有未用的券
        hasUnUseCashCoupon: function (item) {
            var couponCodeList = item.couponCodeList || [];
            return couponCodeList.some(function (i) {
                return i.useTag === 1 || i.useTag === 3 || i.useTag === 4;
            });
        },
        // TODO
        isCrowd: function (item) {
            return item.fixedTags[0] === '3';
        },
        // TODO
        isNotCrowd: function (item) {
            return item.fixedTags[0] !== '3';
        },
        //可以申请售后
        canApply: function (item) {
            var now = new Date().getTime();
            if(this.isCashCoupon(item)){
                return this.hasUnUseCashCoupon(item);
            }else{
                return item.shipTime + 2592000000 > now;
            }
        },
        //是否一年内
        isCurrentYear: function (item) {
            var current = new Date().getTime();
            var createTime = item.createTime;
            return current - createTime <= 365 * 24 * 60 * 60 * 1000;
        },
        //是否30天内
        isThirtyDay: function (item) {
            var current = new Date().getTime();
            var createTime = item.createTime;
            return current - createTime <= 30 * 24 * 60 * 60 * 1000;
        }
    },
    //收货类型
    receiveType: {
        //门店自提
        isOneselfByStore: function (item) {
            return item.receiveType === '00'
        },
        //服务台自提 01 || 社区自提 02
        isOneselfBySite: function (item) {
            return item.receiveType === '01' || item.receiveType === '02'
        },
        //普通配送 10 || 极速达配送 11
        isDelivery: function (item) {
            return item.receiveType === '10' || item.receiveType === '11'
        }
    },
    //支付方式
    payType: {
        isOnline: function (item) {
            return item.payMethod !== '000';
        },
        isOffline: function (item) {
            return item.payMethod === '000';
        }
    },
    //团购状态
    groupBuyType: {
        //已成团
        isOk: function (item) {
            return item.state !== 'Pending' && item.state !== 'Waiting';
        },
        //未成团
        isNotOk: function (item) {
            return item.state === 'Pending' || item.state === 'Waiting';
        }
    },
    //商品类型
    itemType: {
        //百货
        isMall: function (item) {
            return item.source === 1;
        },
        //超市
        isMarket: function (item) {
            return item.source === 2;
        },
        //供应链
        isSupplier: function (item) {
            return item.source === 4;
        },
        //不需要认证
        isNormalSupplier: function (item) {
            // return item.source === 4 && item.fixedTags && ['2','3','8'].indexOf(item.fixedTags['2']) < 0;
            return item.source === 4 && item.store && !item.store.isAuthentication
        },
        //需要认证
        isOverseas: function (item) {
            // return item.source === 4 && item.fixedTags && ['2','3','8'].indexOf(item.fixedTags['2']) >= 0;
            return item.source === 4 && item.store && item.store.isAuthentication
        }
    },
    //用户认证状态
    userAuthType: {
        //已认证
        isOk: function (item) {
            return item.validateState !== 1 && item.validateState !== 5 && item.validateState !== 4
        },
        //未认证
        isNotOk: function (item) {
            return item.validateState === 1 || item.validateState === 5 || item.validateState === 4
        }
    },
    /**
     * 获取列表所有的按钮
     * 立即支付： pay
     * 核销码： scan
     * 团购详情： group
     * 提醒发货： remind
     * 订单跟踪： follow
     * 实名认证： auth
     * 撤销申请： revoke
     * 确认收货： agree
     * 查看售后： check
     * 再次购买： again
     * 团购详情： pinDetail
     * 团购状态： pin_state
     */
    getListButtonGroups: function (order) {
        if(!order.orderItemList){
            var packageList = order.packageList || [];
            var list = [];
            packageList.forEach(function(l){
                list = list.concat(l)
            })
            order.orderItemList = list;
        }
        if (this.orderDeriveState.isCashCoupon(order)) {
            return this.getListButtonGroupsForCoupon(order);
        }
        var groups = [];
        //待支付
        if (this.orderState.isWaitPay(order)) {
            //到店自提
            if (this.receiveType.isOneselfByStore(order)) {
                // 专柜团，未成团
                if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isNotOk(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                }
                //百货拼团
                else if(this.itemType.isMall(order) && this.orderType.isPDD(order)){
                    this.pushButtonToGroup(groups,order, 'pay');
                }
                //不是专柜团，百货，线上支付
                else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.itemType.isMall(order) && this.payType.isOnline(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                }
                //不是专柜团，百货，线下支付
                else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.itemType.isMall(order) && this.payType.isOffline(order)) {
                    //未核销
                    if(this.orderState.isNotVerification(order)){
                        this.pushButtonToGroup(groups,order, 'scan');
                    }
                }
                //超市
                else if (this.itemType.isMarket(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                }
                //供应链
                else if (this.itemType.isSupplier(order)){
                    this.pushButtonToGroup(groups,order, 'pay');
                }
            }
            //服务台自提
            else if (this.receiveType.isOneselfBySite(order)) {
                //超市 拼团
                if(this.itemType.isMarket(order) && this.orderType.isPDD(order)){
                    this.pushButtonToGroup(groups,order, 'pay');
                }
                //超市 非扫码购
                else if (this.itemType.isMarket(order) && this.orderDeriveState.isNotScanBuy(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                }
            }
            //送货到门
            else if (this.receiveType.isDelivery(order)) {
                // 专柜团，未成团
                if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isNotOk(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                }
                // 百货 拼团
                if(this.itemType.isMall(order) && this.orderType.isPDD(order)){
                    this.pushButtonToGroup(groups,order, 'pay');
                }
                //不是专柜团，百货，线上支付
                else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.itemType.isMall(order) && this.payType.isOnline(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                }
                //超市 拼团
                else if(this.itemType.isMarket(order) && this.orderType.isPDD(order)){
                    this.pushButtonToGroup(groups,order, 'pay');
                }
                //超市 非扫码购
                else if (this.itemType.isMarket(order) && this.orderDeriveState.isNotScanBuy(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                }
                //供应链 拼团
                if(this.itemType.isSupplier(order) && this.orderType.isPDD(order)){
                    this.pushButtonToGroup(groups,order, 'pay');
                }
                //供应链
                else if (this.itemType.isSupplier(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                }
            }
        }
        //待发货
        else if (this.orderState.isWaitSend(order)) {
            //取消中
            if(this.orderDeriveState.isCancelIng(order)){
                //百货
                if(this.itemType.isMall(order)){
                    //拼团
                    if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'revoke');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                    //非专柜团 线上支付
                    else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)){
                        this.pushButtonToGroup(groups,order, 'revoke');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                }
                //超市
                else if(this.itemType.isMarket(order)){
                    //拼团
                    if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'revoke');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                    // 非扫码购 线上支付
                    else if(this.orderDeriveState.isNotScanBuy(order) && this.payType.isOnline(order)){
                        this.pushButtonToGroup(groups,order, 'revoke');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                }
                //供应链
                else if(this.itemType.isSupplier(order)){
                    //拼团
                    if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'revoke');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                    //线上支付
                    else if(this.payType.isOnline(order)){
                        this.pushButtonToGroup(groups,order, 'revoke');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }

                }
            }
            //待审核
            else if(this.orderState.isPending(order)){
                //百货
                if(this.itemType.isMall(order)){
                    //专柜团
                    if(this.orderDeriveState.isGroupBuyIng(order)){
                        this.pushButtonToGroup(groups,order, 'group');
                    }
                    //拼团
                    else if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'pin_state');
                    }
                }
                //超市
                else if(this.itemType.isMarket(order)){
                    //拼团
                    if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'pin_state');
                    }
                }
                //普通供应链
                else if(this.itemType.isNormalSupplier(order)){
                    //拼团
                    if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'pin_state');
                    }
                }
                //海外购
                else if(this.itemType.isOverseas(order)){
                    //拼团
                    if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pin_state');
                        //已认证
                        if(this.userAuthType.isOk(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                        }
                        //未认证
                        else if(this.userAuthType.isNotOk(order)){
                            this.pushButtonToGroup(groups,order, 'auth');
                        }
                    }
                    //非拼团
                    else if(this.orderType.isNotPDD(order)){
                        this.pushButtonToGroup(groups,order, 'follow');
                        //未认证
                        if(this.userAuthType.isNotOk(order)){
                            this.pushButtonToGroup(groups,order, 'auth');
                        }
                    }
                }
            }
            //非待审核
            else {
                //百货
                if(this.itemType.isMall(order)){
                    //专柜团
                    if(this.orderDeriveState.isGroupBuyIng(order)){
                        this.pushButtonToGroup(groups,order, 'group');
                    }
                    //拼团
                    else if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'pin_state');
                    }
                    //非专柜团 线上支付
                    else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)){
                        this.pushButtonToGroup(groups,order, 'remind');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                }
                //超市
                else if(this.itemType.isMarket(order)){
                    //拼团
                    if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'pin_state');
                    }
                    //线上支付 非扫码购
                    else if(this.payType.isOnline(order) && this.orderDeriveState.isNotScanBuy(order)){
                        this.pushButtonToGroup(groups,order, 'remind');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                }
                //普通供应链
                else if(this.itemType.isNormalSupplier(order)){
                    //拼团
                    if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'pin_state');
                    }
                    //线上支付
                    else if(this.payType.isOnline(order)){
                        this.pushButtonToGroup(groups,order, 'remind');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                }
                //海外购
                else if(this.itemType.isOverseas(order)){
                    //拼团
                    if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pin_state');
                        //已认证
                        if(this.userAuthType.isOk(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                        }
                        //未认证
                        else if(this.userAuthType.isNotOk(order)){
                            this.pushButtonToGroup(groups,order, 'auth');
                        }
                    }
                    //非拼团
                    else if(this.orderType.isNotPDD(order)){
                        this.pushButtonToGroup(groups,order, 'follow');
                        //未认证
                        if(this.userAuthType.isNotOk(order)){
                            this.pushButtonToGroup(groups,order, 'auth');
                        }
                    }
                }
            }
        }
        //待收货
        else if (this.orderState.isWaitReceive(order)) {
            //到店自提
            if (this.receiveType.isOneselfByStore(order)) {
                //取消中
                if(this.orderDeriveState.isCancelIng(order)){
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团 成团
                        if(this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)){
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                        //非专柜团 线上支付
                        else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                    }
                    //超市
                    else if(this.itemType.isMarket(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                        //非扫码购线上支付
                        else if(this.orderDeriveState.isNotScanBuy(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                        //线上支付
                        else if(this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                    }
                }
                //待审核
                else if(this.orderState.isPending(order)){
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团
                        if(this.orderDeriveState.isGroupBuyIng(order)){
                            this.pushButtonToGroup(groups,order, 'group');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'pin_state');
                        }
                    }
                    //超市
                    else if(this.itemType.isMarket(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'pin_state');
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'pin_state');
                        }
                    }
                }
                //非待审核
                else {
                    //百货
                    if (this.itemType.isMall(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            //未核销
                            if(this.orderState.isNotVerification(order)){
                                this.pushButtonToGroup(groups,order, 'scan');
                            }
                            this.pushButtonToGroup(groups,order, 'pin_state');
                        }
                        //非拼团
                        else if(this.orderType.isNotPDD(order)){
                            //未核销
                            if(this.orderState.isNotVerification(order)){
                                this.pushButtonToGroup(groups,order, 'scan');
                            }
                        }
                    }
                    //超市
                    else if(this.itemType.isMarket(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            //未核销
                            if(this.orderState.isNotVerification(order)){
                                this.pushButtonToGroup(groups,order, 'scan');
                            }
                            this.pushButtonToGroup(groups,order, 'pin_state');
                        }
                        //非拼团
                        else if(this.orderType.isNotPDD(order)){
                            //未核销
                            if(this.orderState.isNotVerification(order)){
                                this.pushButtonToGroup(groups,order, 'scan');
                            }
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            //未核销
                            if(this.orderState.isNotVerification(order)){
                                this.pushButtonToGroup(groups,order, 'scan');
                            }
                            this.pushButtonToGroup(groups,order, 'pin_state');
                        }
                        //非拼团
                        else if(this.orderType.isNotPDD(order)){
                            //未核销
                            if(this.orderState.isNotVerification(order)){
                                this.pushButtonToGroup(groups,order, 'scan');
                            }
                        }
                    }
                }
            }
            //服务台自提
            else if (this.receiveType.isOneselfBySite(order)) {
                //取消中
                if(this.orderDeriveState.isCancelIng(order)){
                    //超市
                    if(this.itemType.isMarket(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                        //非扫码购 线上支付
                        else if(this.orderDeriveState.isNotScanBuy(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                    }
                }
                //待审核
                else if(this.orderState.isPending(order)){
                    //超市
                    if(this.itemType.isMarket(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'pin_state');
                        }
                    }
                }
                //非待审核
                else {
                    //超市
                    if(this.itemType.isMarket(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pin_state');
                            if(this.orderState.isNotVerification(order)){
                                this.pushButtonToGroup(groups,order, 'scan');
                            }
                        }
                        //非扫码购 线上支付
                        else if(this.orderDeriveState.isNotScanBuy(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                        }
                    }
                }
            }
            //送货到门
            else if (this.receiveType.isDelivery(order)) {
                //未申请过售后
                if (this.orderDeriveState.hasAllNotCustom(order)) {
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团 成团
                        if(this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                        }
                        //非专柜团 线上支付
                        else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                        }
                    }
                    //超市
                    else if(this.itemType.isMarket(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                        }
                        //非扫码购线上支付
                        else if(this.orderDeriveState.isNotScanBuy(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'agree');
                    }
                }
                //申请过售后
                else if (this.orderDeriveState.hasOrderCustom(order)) {
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团 成团
                        if(this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //非专柜团 线上支付
                        else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                    //超市
                    else if(this.itemType.isMarket(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //非扫码购线上支付
                        else if(this.orderDeriveState.isNotScanBuy(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'agree');
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                }
            }
        }
        //已完成
        else if (this.orderState.isOver(order)) {
            //到店自提
            if (this.receiveType.isOneselfByStore(order)) {
                //未申请过售后
                if (this.orderDeriveState.hasAllNotCustom(order)) {
                    //百货
                    if (this.itemType.isMall(order)) {
                        //非专柜团 非拼团
                        if(this.orderDeriveState.isNotGroupBuyIng(order) && this.orderType.isNotPDD(order)){
                            this.pushButtonToGroup(groups,order, 'delete');
                        }
                    }
                    //超市
                    else if(this.itemType.isMarket(order)){
                        //扫码购
                        if(this.orderDeriveState.isScanBuy(order)){
                            this.pushButtonToGroup(groups,order, 'delete');
                            if(this.orderState.isNotVerification(order)){
                                this.pushButtonToGroup(groups,order, 'scan');
                            }
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'delete');
                        }
                        //其他
                        else {
                            this.pushButtonToGroup(groups,order, 'delete');
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        this.pushButtonToGroup(groups,order, 'delete');
                    }
                }
                //申请过售后
                else if (this.orderDeriveState.hasOrderCustom(order)) {
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团 成团
                        if(this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)){
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //非专柜团 线上支付
                        else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                    //超市
                    else if(this.itemType.isMarket(order)){
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                }
            }
            //服务台自提
            else if (this.receiveType.isOneselfBySite(order)) {
                //未申请过售后
                if (this.orderDeriveState.hasAllNotCustom(order)) {
                    //超市
                    if (this.itemType.isMarket(order)) {
                        this.pushButtonToGroup(groups,order, 'delete');
                    }
                }
                //申请过售后
                else if (this.orderDeriveState.hasOrderCustom(order)) {
                    //超市
                    if (this.itemType.isMarket(order)) {
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                }
            }
            //送货到门
            else if (this.receiveType.isDelivery(order)) {
                //未申请过售后
                if (this.orderDeriveState.hasAllNotCustom(order)) {
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团 成团
                        if(this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                        }
                        //非专柜团 线上支付
                        else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'delete');
                            this.pushButtonToGroup(groups,order, 'follow');
                        }
                    }
                    //超市
                    else if(this.itemType.isMarket(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'delete');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'again');
                        }
                        //非扫码购 线上支付
                        else if(this.orderDeriveState.isNotScanBuy(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'delete');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'again');
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        this.pushButtonToGroup(groups,order, 'delete');
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'again');
                    }
                }
                //申请过售后
                else if (this.orderDeriveState.hasOrderCustom(order)) {
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团 成团
                        if(this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //非专柜团 线上支付
                        else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'follow');
                        }
                    }
                    //超市
                    else if(this.itemType.isMarket(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'again');
                        }
                        //非扫码购 线上支付
                        else if(this.orderDeriveState.isNotScanBuy(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'again');
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        this.pushButtonToGroup(groups,order, 'check');
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'again');
                    }
                }

            }
        }
        //已退货
        else if (this.orderState.isReturn(order)) {
            //到店自提
            if (this.receiveType.isOneselfByStore(order)) {
                //百货
                if (this.itemType.isMall(order)) {
                    //专柜团 已成团
                    if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                        this.pushButtonToGroup(groups,order, 'check');
                        this.pushButtonToGroup(groups,order, 'delete');
                    }
                    //拼团
                    else if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'check');
                        this.pushButtonToGroup(groups,order, 'delete');
                    }
                    //非专柜团 线上支付
                    else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)) {
                        this.pushButtonToGroup(groups,order, 'check');
                        this.pushButtonToGroup(groups,order, 'delete');
                    }
                }
                //超市
                if (this.itemType.isMarket(order)) {
                    this.pushButtonToGroup(groups,order, 'check');
                }
                //供应链
                if (this.itemType.isSupplier(order)) {
                    this.pushButtonToGroup(groups,order, 'check');
                }
            }
            //服务台自提
            else if (this.receiveType.isOneselfBySite(order)) {
                //超市 非扫码购 非拼团
                if (this.itemType.isMarket(order) && this.orderDeriveState.isNotScanBuy(order) && this.orderType.isNotPDD(order)) {
                    this.pushButtonToGroup(groups,order, 'delete');
                    this.pushButtonToGroup(groups,order, 'check');
                }
            }
            //送货到门
            else if (this.receiveType.isDelivery(order)) {
                //百货
                if (this.itemType.isMall(order)) {
                    //专柜团 已成团
                    if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                        this.pushButtonToGroup(groups,order, 'delete');
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                    //拼团
                    else if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'delete');
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                    //非专柜团 线上支付
                    else if (this.orderDeriveState.isNotGroupBuyIng(ordr) && this.payType.isOnline(order)) {
                        this.pushButtonToGroup(groups,order, 'delete');
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                }
                //超市
                if (this.itemType.isMarket(order)) {
                    //拼团
                    if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'delete');
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                    //非扫码购
                    else if (this.orderDeriveState.isNotScanBuy(order)) {
                        this.pushButtonToGroup(groups,order, 'delete');
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                }
                //供应链
                if (this.itemType.isSupplier(order)) {
                    this.pushButtonToGroup(groups,order, 'delete');
                    this.pushButtonToGroup(groups,order, 'check');
                }
            }
        }
        //已失效
        else if (this.orderState.isCanceled(order)) {
            this.pushButtonToGroup(groups,order, 'delete');
            //超市
            if (this.itemType.isMarket(order)) {
                //拼团
                if(this.orderType.isPDD(order)){
                    this.pushButtonToGroup(groups,order, 'again');
                }
                //非扫码购
                else if (this.orderDeriveState.isNotScanBuy(order)) {
                    this.pushButtonToGroup(groups,order, 'again');
                }
            }
            //供应商
            if (this.itemType.isSupplier(order)) {
                this.pushButtonToGroup(groups,order, 'again');
            }
        }
        return groups;
    },
    getListButtonGroupsForCoupon: function (order) {
        var groups = [];
        //待支付
        if (this.orderState.isWaitPay(order)) {
            this.pushButtonToGroup(groups,order, 'pay');
        }
        //已完成
        else if (this.orderState.isOver(order)) {
            //申请过售后
            if(this.orderDeriveState.hasOrderCustom(order)){
                this.pushButtonToGroup(groups,order, 'check');
            }
        }
        //已退货
        else if (this.orderState.isReturn(order)) {
            //申请过售后
            if(this.orderDeriveState.hasOrderCustom(order)){
                this.pushButtonToGroup(groups,order, 'check');
            }
        }
        return groups;
    },
    /**
     * 获取详情所有的按钮
     * ok 立即支付： pay
     * ok 核销码： scan
     * ok 团购详情： group
     * ok 提醒发货： remind
     * ok 订单跟踪： follow
     * ok 实名认证： auth
     * ok 撤销申请： revoke
     * ok 确认收货： agree
     * ok 查看售后： check
     * ok 再次购买： again
     * ok 取消订单： cancel
     * ok 申请售后： apply
     * ok 评价   ：evaluate
     * ok 拼团详情   ：pinDetail
     */
    getDetailButtonGroups: function (order) {
        if (this.orderDeriveState.isCashCoupon(order)) {
            return this.getDetailButtonGroupsForCoupon(order);
        }
        var groups = [];
        //待支付
        if (this.orderState.isWaitPay(order)) {
            //到店自提
            if (this.receiveType.isOneselfByStore(order)) {
                // 专柜团，未成团
                if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isNotOk(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                    this.pushButtonToGroup(groups,order, 'cancel');
                    this.pushButtonToGroup(groups,order, 'scan');
                }
                // 百货 拼团
                else if(this.itemType.isMall(order) && this.orderType.isPDD(order)){
                    this.pushButtonToGroup(groups,order, 'pay');
                    this.pushButtonToGroup(groups,order, 'cancel');
                    this.pushButtonToGroup(groups,order, 'scan');
                }
                //不是专柜团，百货，线上支付
                else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.itemType.isMall(order) && this.payType.isOnline(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                    this.pushButtonToGroup(groups,order, 'cancel');
                    this.pushButtonToGroup(groups,order, 'scan');
                }
                //不是专柜团，百货，线下支付
                else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.itemType.isMall(order) && this.payType.isOffline(order)) {
                    this.pushButtonToGroup(groups,order, 'scan');
                    this.pushButtonToGroup(groups,order, 'cancel');
                }
                //超市
                else if (this.itemType.isMarket(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                    this.pushButtonToGroup(groups,order, 'cancel');
                    this.pushButtonToGroup(groups,order, 'scan');
                }
                //供应链
                else if (this.itemType.isSupplier(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                    this.pushButtonToGroup(groups,order, 'cancel');
                    this.pushButtonToGroup(groups,order, 'scan');
                }
            }
            //服务台自提
            else if (this.receiveType.isOneselfBySite(order)) {
                //超市 非扫码购
                if (this.itemType.isMarket(order) && this.orderDeriveState.isNotScanBuy(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                    this.pushButtonToGroup(groups,order, 'cancel');
                    this.pushButtonToGroup(groups,order, 'scan');
                }
            }
            //送货到门
            else if (this.receiveType.isDelivery(order)) {
                // 专柜团，未成团
                if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isNotOk(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                    this.pushButtonToGroup(groups,order, 'cancel');
                }
                // 百货 拼团
                else if(this.itemType.isMall(order) && this.orderType.isPDD(order)){
                    this.pushButtonToGroup(groups,order, 'pay');
                    this.pushButtonToGroup(groups,order, 'cancel');
                }
                //不是专柜团，百货，线上支付
                else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.itemType.isMall(order) && this.payType.isOnline(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                    this.pushButtonToGroup(groups,order, 'cancel');
                }
                //超市 非扫码购
                else if (this.itemType.isMarket(order) && this.orderDeriveState.isNotScanBuy(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                    this.pushButtonToGroup(groups,order, 'cancel');
                }
                //供应链
                else if (this.itemType.isSupplier(order)) {
                    this.pushButtonToGroup(groups,order, 'pay');
                    this.pushButtonToGroup(groups,order, 'cancel');
                }
            }
        }
        //待发货
        else if (this.orderState.isWaitSend(order)) {
            //取消中
            if(this.orderDeriveState.isCancelIng(order)){
                //百货
                if (this.itemType.isMall(order)) {
                    //拼团
                    if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'revoke');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                    //非专柜团 线上支付
                    else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)){
                        this.pushButtonToGroup(groups,order, 'revoke');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                }
                //超市
                else if(this.itemType.isMarket(order)){
                    //拼团
                    if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'revoke');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                    //非扫码购 线上支付
                    else if(this.orderDeriveState.isNotScanBuy(order) && this.payType.isOnline(order)){
                        this.pushButtonToGroup(groups,order, 'revoke');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                }
                //供应链
                else if(this.itemType.isSupplier(order)){
                    //拼团
                    if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'revoke');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                    //非拼团
                    else{
                        this.pushButtonToGroup(groups,order, 'revoke');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                }
            }
            //非取消中
            else if(this.orderDeriveState.isNotCancelIng(order)){
                //待审核
                if(this.orderState.isPending(order)){
                    // 百货 专柜团，未成团
                    if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isNotOk(order)) {
                        this.pushButtonToGroup(groups,order, 'group');
                    }
                    //百货 拼团
                    else if(this.itemType.isMall(order) && this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                    //超市 拼团
                    else if(this.itemType.isMarket(order) && this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                    //普通供应链
                    else if(this.itemType.isNormalSupplier(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'remind');
                            this.pushButtonToGroup(groups,order, 'follow');
                        }
                    }
                    //海外购供应链
                    else if(this.itemType.isOverseas(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            //未认证
                            if (this.userAuthType.isNotOk(order)) {
                                this.pushButtonToGroup(groups,order, 'pinDetail');
                                this.pushButtonToGroup(groups,order, 'auth');
                                this.pushButtonToGroup(groups,order, 'follow');
                            }
                            //已认证
                            if (this.userAuthType.isOk(order)) {
                                this.pushButtonToGroup(groups,order, 'pinDetail');
                                this.pushButtonToGroup(groups,order, 'follow');
                            }
                        }
                        //非拼团
                        else {
                            //未认证
                            if (this.userAuthType.isNotOk(order)) {
                                this.pushButtonToGroup(groups,order, 'auth');
                                this.pushButtonToGroup(groups,order, 'follow');
                            }
                            //已认证
                            if (this.userAuthType.isOk(order)) {
                                this.pushButtonToGroup(groups,order, 'follow');
                            }
                        }
                    }
                }
                //待分拣
                if(this.orderState.isWaitSendWaitProcess(order)){
                    //专柜团 已成团
                    if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                        this.pushButtonToGroup(groups,order, 'group');
                        this.pushButtonToGroup(groups,order, 'cancel');
                    }
                    //百货 拼团
                    else if(this.itemType.isMall(order) && this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                    }
                    //专柜团 未成团
                    else if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isNotOk(order)) {
                        this.pushButtonToGroup(groups,order, 'group');
                    }
                    //不是专柜团，百货，线上支付
                    else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.itemType.isMall(order) && this.payType.isOnline(order)) {
                        this.pushButtonToGroup(groups,order, 'remind');
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'cancel');
                    }
                    //超市 拼团
                    else if(this.itemType.isMarket(order) && this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'cancel');
                        this.pushButtonToGroup(groups,order, 'remind');
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                    }
                    //超市 非扫码购
                    else if (this.itemType.isMarket(order) && this.orderDeriveState.isNotScanBuy(order)) {
                        this.pushButtonToGroup(groups,order, 'remind');
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'cancel');
                    }
                    //普通供应链
                    else if (this.itemType.isNormalSupplier(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'cancel');
                            this.pushButtonToGroup(groups,order, 'remind');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                        }else{
                            this.pushButtonToGroup(groups,order, 'remind');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'cancel');
                        }
                    }
                    //海外购供应链
                    else if (this.itemType.isOverseas(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'remind');
                            this.pushButtonToGroup(groups,order, 'follow');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'follow');
                        }
                    }
                }
                //分拣中
                if(this.orderState.isWaitSendProcessing(order)){
                    //专柜团 已成团
                    if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                        this.pushButtonToGroup(groups,order, 'group');
                        this.pushButtonToGroup(groups,order, 'cancel');
                    }
                    //专柜团 未成团
                    else if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isNotOk(order)) {
                        this.pushButtonToGroup(groups,order, 'group');
                    }
                    //百货 拼团
                    else if(this.itemType.isMall(order) && this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'cancel');
                        this.pushButtonToGroup(groups,order, 'remind');
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                    }
                    //不是专柜团，百货，线上支付
                    else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.itemType.isMall(order) && this.payType.isOnline(order)) {
                        this.pushButtonToGroup(groups,order, 'remind');
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'cancel');
                    }
                    //超市 拼团
                    else if(this.itemType.isMarket(order) && this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'remind');
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                    }
                    //超市 非扫码购
                    else if (this.itemType.isMarket(order) && this.orderDeriveState.isNotScanBuy(order)) {
                        this.pushButtonToGroup(groups,order, 'remind');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                    //普通供应链
                    else if (this.itemType.isNormalSupplier(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'cancel');
                            this.pushButtonToGroup(groups,order, 'remind');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'remind');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'cancel');
                        }
                    }
                    //海外购供应链
                    else if (this.itemType.isOverseas(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'remind');
                            this.pushButtonToGroup(groups,order, 'follow');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'follow');
                        }
                    }
                }
                //分拣完成
                if(this.orderState.isWaitSendShipping(order)){
                    //专柜团
                    if (this.orderDeriveState.isGroupBuyIng(order)) {
                        this.pushButtonToGroup(groups,order, 'group');
                    }
                    //百货 拼团
                    else if(this.itemType.isMall(order) && this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'remind');
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                    }
                    //不是专柜团，百货，线上支付
                    else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.itemType.isMall(order) && this.payType.isOnline(order)) {
                        this.pushButtonToGroup(groups,order, 'remind');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                    //超市 拼团
                    else if(this.itemType.isMarket(order) && this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'remind');
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                    }
                    //超市 非扫码购
                    else if (this.itemType.isMarket(order) && this.orderDeriveState.isNotScanBuy(order)) {
                        this.pushButtonToGroup(groups,order, 'remind');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                    //普通供应链
                    else if (this.itemType.isNormalSupplier(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'cancel');
                            this.pushButtonToGroup(groups,order, 'remind');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'remind');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'cancel');
                        }
                    }
                    //海外购供应链
                    else if (this.itemType.isOverseas(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'remind');
                            this.pushButtonToGroup(groups,order, 'follow');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'follow');
                        }
                    }
                }
            }
        }
        //待收货
        else if (this.orderState.isWaitReceive(order)) {
            //到店自提
            if (this.receiveType.isOneselfByStore(order)) {
                //取消中
                if(this.orderDeriveState.isCancelIng(order)){
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团 成团
                        if(this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)){
                            this.pushButtonToGroup(groups,order, 'group');
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                        //非专柜团 线上支付
                        else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                    }
                    //超市
                    else if(this.itemType.isMarket(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                        //非扫码购 线上支付
                        else if(this.orderDeriveState.isNotScanBuy(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                        //非拼团
                        else {
                            this.pushButtonToGroup(groups,order, 'revoke');
                        }
                    }
                }
                //待审核
                else if(this.orderState.isPending(order)){
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团 未成团
                        if(this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isNotOk(order)){
                            this.pushButtonToGroup(groups,order, 'group');
                            this.pushButtonToGroup(groups,order, 'scan');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                        }
                    }
                    //超市
                    else if(this.itemType.isMarket(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                        }
                    }
                }
                //非待审核
                else {
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团 成团
                        if(this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)){
                            this.pushButtonToGroup(groups,order, 'cancel');
                            this.pushButtonToGroup(groups,order, 'group');
                            // if(this.orderState.isNotVerification(order)){
                            this.pushButtonToGroup(groups,order, 'scan');
                            // }
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'cancel');
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            // if(this.orderState.isNotVerification(order)){
                            this.pushButtonToGroup(groups,order, 'scan');
                            // }
                        }
                        //非专柜团 线上支付
                        else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'cancel');
                            // if(this.orderState.isNotVerification(order)){
                            this.pushButtonToGroup(groups,order, 'scan');
                            // }
                        }
                        //非专柜团 线下支付
                        else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOffline(order) ){
                            this.pushButtonToGroup(groups,order, 'scan');
                        }
                    }
                    //超市
                    else if(this.itemType.isMarket(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'cancel');
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            // if(this.orderState.isNotVerification(order)){
                            this.pushButtonToGroup(groups,order, 'scan');
                            // }
                        }
                        //非扫码购 线上支付
                        else if(this.orderDeriveState.isNotScanBuy(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'cancel');
                            // if(this.orderState.isNotVerification(order)){
                            this.pushButtonToGroup(groups,order, 'scan');
                            // }
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        //普通供应链
                        if(this.itemType.isNormalSupplier(order)){
                            //拼团
                            if(this.orderType.isPDD(order)){
                                this.pushButtonToGroup(groups,order, 'cancel');
                                this.pushButtonToGroup(groups,order, 'pinDetail');
                                // if(this.orderState.isNotVerification(order)){
                                this.pushButtonToGroup(groups,order, 'scan');
                                // }
                            }
                            //非拼团
                            else{
                                this.pushButtonToGroup(groups,order, 'cancel');
                                // if(this.orderState.isNotVerification(order)){
                                this.pushButtonToGroup(groups,order, 'scan');
                                // }
                            }
                        }
                    }
                }
            }
            //服务台自提
            else if (this.receiveType.isOneselfBySite(order)) {
                //未取消
                if (this.orderDeriveState.isNotCancelIng(order)) {
                    //待审核
                    if(this.orderState.isPending(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                        }

                    }
                    //待分拣
                    if(this.orderState.isWaitSendWaitProcess(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'cancel');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'cancel');
                        }
                    }
                    //分拣中
                    if(this.orderState.isWaitSendProcessing(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'follow');
                        }
                    }
                    //分拣完成
                    if(this.orderState.isPointShipped(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'scan');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'scan');
                        }
                    }
                }
                //取消中
                else if (this.orderDeriveState.isCancelIng(order)) {
                    //拼团
                    if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'revoke');
                    }
                    //非拼团
                    else if(this.orderType.isNotPDD(order)){
                        this.pushButtonToGroup(groups,order, 'revoke');
                    }
                }
            }
            //送货到门
            else if (this.receiveType.isDelivery(order)) {
                //没有过售后申请
                if (this.orderDeriveState.hasAllNotCustom(order)) {
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团，已成团
                        if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                            this.pushButtonToGroup(groups,order, 'group');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                        }
                        //非专柜团，线上支付
                        else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)) {
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                        }
                    }
                    //超市
                    else if (this.itemType.isMarket(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                        }
                        //非扫码购
                        else if (this.orderDeriveState.isNotScanBuy(order)) {
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                        }
                    }
                    //供应链
                    else if (this.itemType.isSupplier(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                        }
                    }
                }

                //有申请过售后，非售后中，有可申请售后的商品
                if (this.orderDeriveState.hasSomeCustom(order) && this.orderDeriveState.isNotCustomIng(order) && this.orderDeriveState.canCustomIng(order)){
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团，已成团
                        if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'group');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非专柜团，线上支付
                        else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)) {
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                    }
                    //超市
                    else if (this.itemType.isMarket(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非扫码购
                        else if (this.orderDeriveState.isNotScanBuy(order)) {
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                    }
                    //供应链
                    else if (this.itemType.isSupplier(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非拼团
                        else {
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }

                    }
                }

                //有正在申请售后的状态 || 已无可售后的商品
                if(this.orderDeriveState.isCustomIng(order) || this.orderDeriveState.canNotCustomIng(order)){
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团，已成团
                        if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                            this.pushButtonToGroup(groups,order, 'group');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //非专柜团，线上支付
                        else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)) {
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                    //超市
                    else if (this.itemType.isMarket(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //非扫码购
                        else if (this.orderDeriveState.isNotScanBuy(order)) {
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                    //供应链
                    else if (this.itemType.isSupplier(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //非拼团
                        else {
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'agree');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                }
            }
        }
        //已完成
        else if (this.orderState.isOver(order)) {
            //到店自提
            if (this.receiveType.isOneselfByStore(order)) {
                //没有过售后申请
                if (this.orderDeriveState.hasAllNotCustom(order)){
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团，已成团
                        if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'group');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'apply');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非专柜团，线上支付
                        else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)) {
                            this.pushButtonToGroup(groups,order, 'apply');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非专柜团，线下支付
                        else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOffline(order)) {
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                        }
                    }
                    //超市
                    else if (this.itemType.isMarket(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'apply');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'apply');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'apply');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'apply');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                    }
                }

                //有申请过售后，非售后中，有可申请售后的商品
                if (this.orderDeriveState.hasSomeCustom(order) && this.orderDeriveState.isNotCustomIng(order) && this.orderDeriveState.canCustomIng(order)){
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团，已成团
                        if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'group');
                            this.pushButtonToGroup(groups,order, 'check');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非专柜团，线上支付
                        else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)) {
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                    }
                    //超市
                    else if (this.itemType.isMarket(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'scan');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                    }
                }
                //有正在申请售后的状态
                if(this.orderDeriveState.isCustomIng(order)){
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团，已成团
                        if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                            this.pushButtonToGroup(groups,order, 'group');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //非专柜团，线上支付
                        else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)) {
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                    //超市
                    else if (this.itemType.isMarket(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                }

                //已无可售后的商品
                if(this.orderDeriveState.canNotCustomIng(order)){
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团，已成团
                        if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                            this.pushButtonToGroup(groups,order, 'group');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //非专柜团，线上支付
                        else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)) {
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                    //超市
                    else if (this.itemType.isMarket(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                    //供应链
                    else if(this.itemType.isSupplier(order)){
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                }
            }
            //服务台自提
            else if (this.receiveType.isOneselfBySite(order)) {
                //没有过售后申请
                if (this.orderDeriveState.hasAllNotCustom(order)){
                    //超市 拼团
                    if(this.itemType.isMarket(order) && this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'apply');
                        // this.pushButtonToGroup(groups,order, 'evaluate');
                        this.pushButtonToGroup(groups,order, 'scan');
                        this.pushButtonToGroup(groups,order, 'item_apply');
                    }
                    //超市 && 非扫码购
                    else if (this.itemType.isMarket(order) && this.orderDeriveState.isNotScanBuy(order)) {
                        this.pushButtonToGroup(groups,order, 'apply');
                        // this.pushButtonToGroup(groups,order, 'evaluate');
                        this.pushButtonToGroup(groups,order, 'scan');
                        this.pushButtonToGroup(groups,order, 'item_apply');
                    }
                }

                //有申请过售后，非售后中，有可申请售后的商品
                if (this.orderDeriveState.hasSomeCustom(order) && this.orderDeriveState.isNotCustomIng(order) && this.orderDeriveState.canCustomIng(order)){
                    //超市 拼团
                    if(this.itemType.isMarket(order) && this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'apply');
                        this.pushButtonToGroup(groups,order, 'check');
                        // this.pushButtonToGroup(groups,order, 'evaluate');
                        this.pushButtonToGroup(groups,order, 'scan');
                        this.pushButtonToGroup(groups,order, 'item_apply');
                    }
                    //超市 && 非扫码购
                    else if (this.itemType.isMarket(order) && this.orderDeriveState.isNotScanBuy(order)) {
                        this.pushButtonToGroup(groups,order, 'apply');
                        this.pushButtonToGroup(groups,order, 'check');
                        // this.pushButtonToGroup(groups,order, 'evaluate');
                        this.pushButtonToGroup(groups,order, 'scan');
                        this.pushButtonToGroup(groups,order, 'item_apply');
                    }
                }
                //有正在申请售后的状态
                if(this.orderDeriveState.isCustomIng(order)){
                    //超市 拼团
                    if(this.itemType.isMarket(order) && this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                    //超市 && 非扫码购
                    else if (this.itemType.isMarket(order) && this.orderDeriveState.isNotScanBuy(order)) {
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                }

                //已无可售后的商品
                if(this.orderDeriveState.canNotCustomIng(order)){
                    //超市 拼团
                    if(this.itemType.isMarket(order) && this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'pinDetail');
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                    //超市 && 非扫码购
                    else if (this.itemType.isMarket(order) && this.orderDeriveState.isNotScanBuy(order)) {
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                }
            }
            //送货到门
            else if (this.receiveType.isDelivery(order)) {
                //没有过售后申请
                if (this.orderDeriveState.hasAllNotCustom(order)){
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团，已成团
                        if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'group');
                            this.pushButtonToGroup(groups,order, 'follow');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非专柜团，百货，线上支付
                        else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.itemType.isMall(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'follow');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                    }
                    //超市
                    else if (this.itemType.isMarket(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'again');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非扫码购
                        else if (this.orderDeriveState.isNotScanBuy(order)) {
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'follow');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'again');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                    }
                    //供应链
                    else if (this.itemType.isSupplier(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'again');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'follow');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'again');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                    }
                }

                //有申请过售后，非售后中，有可申请售后的商品
                if (this.orderDeriveState.hasSomeCustom(order) && this.orderDeriveState.isNotCustomIng(order) && this.orderDeriveState.canCustomIng(order)){
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团，已成团
                        if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'group');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非专柜团，百货，线上支付
                        else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.itemType.isMall(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'follow');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                    }
                    //超市
                    else if (this.itemType.isMarket(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'again');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非扫码购
                        else if (this.orderDeriveState.isNotScanBuy(order)) {
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'again');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                    }
                    //供应链
                    else if (this.itemType.isSupplier(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'again');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                        //非拼团
                        else{
                            this.pushButtonToGroup(groups,order, 'apply');
                            this.pushButtonToGroup(groups,order, 'check');
                            // this.pushButtonToGroup(groups,order, 'evaluate');
                            this.pushButtonToGroup(groups,order, 'again');
                            this.pushButtonToGroup(groups,order, 'item_apply');
                        }
                    }
                }

                //有正在申请售后的状态
                if(this.orderDeriveState.isCustomIng(order)){
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团，已成团
                        if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                            this.pushButtonToGroup(groups,order, 'group');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                        }
                        //非专柜团，百货，线上支付
                        else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.itemType.isMall(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                    //超市
                    else if (this.itemType.isMarket(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'again');
                        }
                        //非扫码购
                        else if (this.orderDeriveState.isNotScanBuy(order)) {
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'again');
                        }
                    }
                    //供应链
                    else if (this.itemType.isSupplier(order)) {
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'check');
                        this.pushButtonToGroup(groups,order, 'again');
                    }
                }

                //已无可售后的商品
                if(this.orderDeriveState.canNotCustomIng(order)){
                    //百货
                    if (this.itemType.isMall(order)) {
                        //专柜团，已成团
                        if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                            this.pushButtonToGroup(groups,order, 'group');
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //拼团
                        else if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'check');
                            this.pushButtonToGroup(groups,order, 'pinDetail');
                        }
                        //非专柜团，百货，线上支付
                        else if(this.orderDeriveState.isNotGroupBuyIng(order) && this.itemType.isMall(order) && this.payType.isOnline(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                    //超市
                    else if (this.itemType.isMarket(order)) {
                        //拼团
                        if(this.orderType.isPDD(order)){
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                        //非扫码购
                        else if (this.orderDeriveState.isNotScanBuy(order)) {
                            this.pushButtonToGroup(groups,order, 'follow');
                            this.pushButtonToGroup(groups,order, 'check');
                        }
                    }
                    //供应链
                    else if (this.itemType.isSupplier(order)) {
                        this.pushButtonToGroup(groups,order, 'follow');
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                }
            }
        }
        //已退货
        else if (this.orderState.isReturn(order)) {
            //到店自提
            if (this.receiveType.isOneselfByStore(order)) {
                //百货
                if (this.itemType.isMall(order)) {
                    //专柜团 已成团
                    if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                    //拼团
                    else if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                    //非专柜团 线上支付
                    else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)) {
                        this.pushButtonToGroup(groups,order, 'check');
                    }
                }
                //超市
                if (this.itemType.isMarket(order)) {
                    this.pushButtonToGroup(groups,order, 'check');
                }
                //供应链
                if (this.itemType.isSupplier(order)) {
                    this.pushButtonToGroup(groups,order, 'check');
                }
            }
            //服务台自提
            else if (this.receiveType.isOneselfBySite(order)) {
                //超市 拼团
                if(this.itemType.isMarket(order) && this.orderType.isPDD(order)){
                    this.pushButtonToGroup(groups,order, 'check');
                }
                //超市 非扫码购
                else if (this.itemType.isMarket(order) && this.orderDeriveState.isNotScanBuy(order)) {
                    this.pushButtonToGroup(groups,order, 'check');
                }
            }
            //送货到门
            else if (this.receiveType.isDelivery(order)) {
                //百货
                if (this.itemType.isMall(order)) {
                    //专柜团 已成团
                    if (this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)) {
                        this.pushButtonToGroup(groups,order, 'check');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                    //拼团
                    else if(this.orderType.isPDD(order)){
                        this.pushButtonToGroup(groups,order, 'check');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                    //非专柜团 线上支付
                    else if (this.orderDeriveState.isNotGroupBuyIng(order) && this.payType.isOnline(order)) {
                        this.pushButtonToGroup(groups,order, 'check');
                        this.pushButtonToGroup(groups,order, 'follow');
                    }
                }
                //超市 拼团
                else if(this.itemType.isMarket(order) && this.orderType.isPDD(order)){
                    this.pushButtonToGroup(groups,order, 'check');
                    this.pushButtonToGroup(groups,order, 'follow');
                }
                //超市 非扫码购
                else if (this.orderDeriveState.isNotScanBuy(order)) {
                    this.pushButtonToGroup(groups,order, 'check');
                    this.pushButtonToGroup(groups,order, 'follow');
                }
                //供应链
                else if (this.itemType.isSupplier(order)) {
                    this.pushButtonToGroup(groups,order, 'check');
                    this.pushButtonToGroup(groups,order, 'follow');
                }
            }
        }
        //已失效
        else if (this.orderState.isCanceled(order)) {
            //百货
            if(this.itemType.isMall(order)){
                //专柜团 成团
                if(this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isOk(order)){
                    this.pushButtonToGroup(groups,order, 'delete');
                }
                //专柜团 未成团
                else if(this.orderDeriveState.isGroupBuyIng(order) && this.groupBuyType.isNotOk(order)){
                    this.pushButtonToGroup(groups,order, 'delete');
                    this.pushButtonToGroup(groups,order, 'group');
                }
                //拼团
                else if(this.orderType.isPDD(order)){
                    this.pushButtonToGroup(groups,order, 'delete');
                    this.pushButtonToGroup(groups,order, 'pinDetail');
                }
                //非专柜团 线上支付
                else if(this.payType.isOnline(order)){
                    this.pushButtonToGroup(groups,order, 'delete');
                }
                //非专柜团 线下支付
                else if(this.payType.isOffline(order) ){
                    this.pushButtonToGroup(groups,order, 'delete');
                }
            }
            //超市
            else if(this.itemType.isMarket(order)){
                //扫码购
                if(this.orderDeriveState.isScanBuy(order)){
                    this.pushButtonToGroup(groups,order, 'delete');
                }
                //拼团
                else if(this.orderType.isPDD(order)){
                    this.pushButtonToGroup(groups,order, 'delete');
                    this.pushButtonToGroup(groups,order, 'again');
                }
                //线上支付
                else if(this.payType.isOnline(order)){
                    this.pushButtonToGroup(groups,order, 'delete');
                    this.pushButtonToGroup(groups,order, 'again');
                }
            }
            //供应链
            else if(this.itemType.isSupplier(order)){
                this.pushButtonToGroup(groups,order, 'delete');
                this.pushButtonToGroup(groups,order, 'again');
            }
        }
        this.pushButtonToGroup(groups,order, 'evaluate'); // 评价依赖后端字段 evaluateCount
        this.pushButtonToGroup(groups,order, 'cancel'); // 取消依赖后端字段 cancelAble
        return groups;
    },
    getDetailButtonGroupsForCoupon: function (order) {
        var groups = [];
        //待支付
        if (this.orderState.isWaitPay(order)) {
            this.pushButtonToGroup(groups,order, 'cancel');
            this.pushButtonToGroup(groups,order, 'pay');
        }
        //已完成
        else if (this.orderState.isOver(order)) {
            //没申请过售后
            if(this.orderDeriveState.hasAllNotCustom(order)){
                this.pushButtonToGroup(groups,order, 'apply');
                this.pushButtonToGroup(groups,order, 'coupon_code');
            }
            //部分已申请售后完成 && 部分未使用
            else if(this.orderDeriveState.hasCustomAndOver(order) && this.orderDeriveState.hasUnUseCashCoupon(order)){
                this.pushButtonToGroup(groups,order, 'apply');
                this.pushButtonToGroup(groups,order, 'check');
                this.pushButtonToGroup(groups,order, 'coupon_code');
            }
            //有正在申请的售后 || 所有都已申请售后(没有可售后的商品)
            else if(this.orderDeriveState.isCustomIng(order) || this.orderDeriveState.canNotCustomIng(order)){
                this.pushButtonToGroup(groups,order, 'check');
                this.pushButtonToGroup(groups,order, 'coupon_code');
            }
        }
        //已退货
        else if (this.orderState.isReturn(order)) {
            this.pushButtonToGroup(groups,order, 'check');
            this.pushButtonToGroup(groups,order, 'coupon_code');
        }

        return groups;
    },
    //添加按钮，排除已存在的
    pushButtonToGroup: function (groups,order, button) {
        if (groups.indexOf(button) < 0) {
            if(button === 'apply' || button === 'item_apply'){
                this.orderDeriveState.canApply(order) && groups.push(button);
            }else if(button === 'follow'){
                this.orderDeriveState.isCurrentYear(order) && groups.push(button);
            }else if(button === 'evaluate'){
                order.evaluateCount && this.orderDeriveState.isThirtyDay(order) && groups.push(button);
            }else if(button === 'revoke'){
                !order.cancelException && groups.push(button);
            }else if(button === 'cancel'){
                order.cancelAble && groups.push(button);
            }else{
                groups.push(button);
            }
        }
    }
}


debugger
console.log(util.getListButtonGroups(order))











