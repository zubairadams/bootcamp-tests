describe('the countAllPaarl function', function(){

  it('should count that 1 vehicle  is from Paarl', function(){
    assert.equal(countAllPaarl('CJ 3123,CJ 2345,CL 123-546'),1);
  });

  it('should show that no vehicle is from Paarl', function(){
    assert.equal(countAllPaarl('CD 3123','CD 2345','CCD 123-546','CD 97979'),0);
  });
});
