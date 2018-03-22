function findItemsOver(item,amount){
var amount = 20; 
  var man = [];
  for(var i = 0; i < item.length; i++){
  var theitem = item[i];
    if(theitem.qty > amount){
    man.push(theitem)
    }
  }
  return man.length;
};
