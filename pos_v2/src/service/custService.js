function CustService(){
    var itemService = new ItemService();
    var proService = new ProService();
}
CustService.prototype.getPreAccountList = function (barcAndNumList){
    var subTotalList = [];

    for (var i = 0;i < barcAndNumList.length; i++){
      var itemInfo = this.getCustGoods(barcAndNumList[i]);
      var promotionInfo = this.getCustPromotion(barcAndNumList[i]);

      var custItem = new CustItem(itemInfo, promotionInfo);
      subTotalList.push(custItem);
     }
    return subTotalList;
}
CustService.prototype.getCustGoods = function (barcAndNum){
    var itemService = new ItemService();

    var item = itemService.getItemByBarc(barcAndNum.barcode);
    return custItem = new ItemInfo(item, barcAndNum.num);
}
CustService.prototype.getCustPromotion = function(barcAndNum){
  var proService = new ProService();
  return promotion = proService.getProBybarc(barcAndNum);
}
/*
CustService.prototype.getCustGoodsList = function(barcAndNumList){
    var subTotalList = [];

    for (var i = 0;i < barcAndNumList.length; i++){
      var itemInfo = getItemInfo(barcAndNumList[i]);
      var promotionInfo = getPromotion(barcAndNumList[i]);

      var custItem = new CustItem(itemInfo, promotionInfo);
      subTotalList.push(custItem);
    }
  return subTotalList;
}
CustService.prototype.getCoustPro = function(barcAndNum){
    var promotionInfo;
    var promotions = loadPromotions();

    for (var i = 0; i < promotions.length; i++){
      for(var j = 0; j < promotions[i].barcodes.length; j++){
        if(promotions[i].barcodes[j] === barcAndNum.barcode && promotions[i].type === 'BUY_TWO_GET_ONE_FREE'){
          promotionInfo = new Promotion(promotions[i].type, parseInt(barcAndNum.num / 3));
          break;
         }
       else{
         promotionInfo = new PromotionInfo('no', 0);
       }
     }
    }
    return custPro;
}
*/
