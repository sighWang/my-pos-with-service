function Cart(inputs){
  this.inputs = inputs;
}
Cart.prototype.countsGoods= function(){
    inputs =this.inputs;
    var barcAndNumList = [];
    for (var i = 0; i < inputs.length; ){

    var num = 0;
    var idx = inputs.indexOf(inputs[i]);
    while(idx != -1){
      num++;
      idx = inputs.indexOf( inputs[i] , idx + 1 );
    }
    var goods = inputs[i].split('-');
    num = goods[1] * num || num;
    var barcAndNum = new BarcAndNum(goods[0], num);

    function isElement(element){
      return element != inputs[i];
   }
   inputs = inputs.filter(isElement);

   barcAndNumList.push(barcAndNum);
 }
 return barcAndNumList;
}
