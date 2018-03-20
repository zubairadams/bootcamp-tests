describe('the countAllPaarl function', function(){

  it('should count how many from Paarl', function(){
    assert.equal(countAllPaarl('CJ 3123,CJ 2345,CL 123-546'),1);
  });

  it('should count an incorrect amount from Paarl', function(){
    assert.equal(countAllPaarl('CJ 3123','CJ 2345','CJ 123-546','CL 97979'),1);
  });
});
