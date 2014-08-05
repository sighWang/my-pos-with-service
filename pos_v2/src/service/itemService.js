function ItemService(){
    this.allItems = loadAllItems();
//    console.log('ItemService');
}
ItemService.prototype.getItemByBarc = function(barcode){
    allItems = this.allItems;
    for (var i = 0; i<allItems.length; i++){
      if(allItems[i].barcode === barcode){
        return allItems[i];
      }
    }
}
