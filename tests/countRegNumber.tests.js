describe('the countRegNumber', function(){

  it('should return 3', function(){
    assert.equal(countRegNumber('CA 787,CA 8787,CJ 465'),true);
  });
  it('should return 1', function(){
    assert.equal(countRegNumber('CA 787,CA 8787,'),1);
  });

});
