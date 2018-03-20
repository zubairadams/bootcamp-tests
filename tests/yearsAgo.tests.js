describe('the yearsAgo function', function(){

  it('should give how many yearsAgo', function(){
    assert.equal(yearsAgo('1998'),20);
  });

  it('should give a incorrect anount of yearsAgo', function(){
    assert.equal(yearsAgo('1997'),21);
  });
});
