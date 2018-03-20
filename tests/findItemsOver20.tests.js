describe('the findItemsOver20 function', function(){
  var itemList = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3},
  ];
  it('return 2 items over 20', function(){
    assert.deepEqual(findItemsOver20(itemList),2);
  });
  var itemList2 = [
    {name : 'pears', qty : 3},
    {name : 'bananas', qty : 3},
];
  it('return 0 items over 20', function(){
    assert.deepEqual(findItemsOver20(itemList2),0);
  });

});
