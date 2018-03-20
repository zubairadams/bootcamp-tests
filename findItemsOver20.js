/*function findItemsOver20(item){
  var man = [];
  for(var i = 0; i < item.length; i++){
  var theitem = item[i];
    if(theitem.qty > 20){
    man.push(theitem)

    }
  }
  return man.length;
};*/

function findItemsOver20(item){
  var man = [];
  for(var i = 0; i < item.length; i++){
  var theitem = item[i];
    if(theitem.qty > 20){
    man.push(theitem)
    }
  }
  return man.length;
}
