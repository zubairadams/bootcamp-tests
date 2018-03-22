/*describe('the findItemsOver function', function(){

  it('return 2 items over ', function(){
    assert.deepEqual(findItemsOver('apples'),true);
  });

})*/

describe('the findItemsOver function', function(){
  var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 50},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 30},
];

  it('should return three items over 20', function(){
    assert.deepEqual(findItemsOver(itemList),3);
  })

  var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 5},
    {name : 'bananas', qty : 7},
    {name : 'apples', qty : 3},
];
  it('should return no items over 20 ', function(){
    assert.deepEqual(findItemsOver(itemList2),0)
  })

})
