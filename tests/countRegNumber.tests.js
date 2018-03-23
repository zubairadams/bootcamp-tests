describe('the countRegNumber', function(){

  it('should return 3 registraion numbers', function(){
    assert.equal(countRegNumber('CA 787','CA 8787','CJ 465'),true);
  });
  it('excepted to count 1 regNumber ', function(){
    assert.equal(countRegNumber('CA 787'),1);
  });

});
