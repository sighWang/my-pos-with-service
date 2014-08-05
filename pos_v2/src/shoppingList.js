function ShoppingList(){
}
ShoppingList.prototype.getShoppingList = function (preAccountList){
    dateDigitToString = function (num) {
        return num < 10 ? '0' + num : num;
    };
      var currentDate = new Date(),
      year = dateDigitToString(currentDate.getFullYear()),
      month = dateDigitToString(currentDate.getMonth() + 1),
      date = dateDigitToString(currentDate.getDate()),
      hour = dateDigitToString(currentDate.getHours()),
      minute = dateDigitToString(currentDate.getMinutes()),
      second = dateDigitToString(currentDate.getSeconds()),
      formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;

      var shoppingList = '***<没钱赚商店>购物清单***\n' +
      '打印时间：' + formattedDateString + '\n' ;
      var custList = this.getCustList(preAccountList);
      var freeList = this.getFreeList(preAccountList);
      var subtotalAndSave = this.getSubtotalAndSave(preAccountList);
      return shoppingList + custList + freeList + subtotalAndSave;

}
ShoppingList.prototype.getCustList = function (preAccountList){
     var custList = '----------------------\n';
     for(var i= 0; i < preAccountList.length; i++){
       custList += '名称：' + preAccountList[i].item.item.name +
       '，数量：' + preAccountList[i].item.num + preAccountList[i].item.item.unit +
       '，单价：' + (preAccountList[i].item.item.price).toFixed(2) + '(元)，小计：' +
      this.getTotal(preAccountList[i]) + '(元)\n';
     }
     return custList + '----------------------\n';
}

ShoppingList.prototype.getFreeList = function (preAccountList){
    var shoppingList = '挥泪赠送商品：\n';
    for(var i= 0; i < preAccountList.length; i++){
      if(preAccountList[i].promotion.type !== 'no')
      shoppingList += '名称：' + preAccountList[i].item.item.name +
      '，数量：' + preAccountList[i].promotion.num + preAccountList[i].item.item.unit + '\n';
    }
    return shoppingList;
}
ShoppingList.prototype.getTotal = function(preAccount){
  var preAccount = preAccount.item.item.price * (preAccount.item.num - preAccount.promotion.num);
  return preAccount.toFixed(2);
}
ShoppingList.prototype.getSubtotalAndSave = function (preAccountList){
  var subtotal = 0;
  var saveUp = 0;
  for(var i= 0; i < preAccountList.length; i++){
    subtotal += preAccountList[i].item.item.price * (preAccountList[i].item.num - preAccountList[i].promotion.num);
    saveUp += preAccountList[i].item.item.price * preAccountList[i].promotion.num;
    }
  return '----------------------\n' +
  '总计：' + subtotal.toFixed(2) + '(元)\n' +
  '节省：' + saveUp.toFixed(2) + '(元)\n' +
  '**********************';;
}
