function printInventory(inputs){
    var cart = new Cart(inputs);
    var barcAndNumList = cart.countsGoods();
    var custService = new CustService();
    var preAccountList = custService.getPreAccountList(barcAndNumList);
    var shoppingList = new ShoppingList();
    var shoppingList = shoppingList.getShoppingList(preAccountList);
    console.log(shoppingList);
}
