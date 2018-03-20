function totalPhoneBill(cost){
 //console.log(cost);
  var price = cost.split(', ');


  var mtn = 0

  for (var i=0;i<price.length;i++){
  	if (price[i] =='call'){
    mtn += 2.75;
  	}
    else if (price[i]=='sms'){
  	mtn += 0.65;
    }
  }
  return 'R'+mtn.toFixed(2) ;
}
