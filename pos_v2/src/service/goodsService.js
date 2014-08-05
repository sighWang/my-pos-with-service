function GoodsService (){

}
GoodsService.prototype.listGoods = function(barcAndNumList){
    var subTotalList = [];

    for (var i = 0;i < barcAndNumList.length; i++){
      var itemInfo = getItemInfo(barcAndNumList[i]);
      var promotionInfo = getPromotion(barcAndNumList[i]);

      var custItem = new CustItem(itemInfo, promotionInfo);
      subTotalList.push(custItem);
    }
  return subTotalList;
}
