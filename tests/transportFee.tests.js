describe('the transportFee function', function(){

  it('should return transport cost', function(){
    assert.equal(transportFee('morning'),'R20');
  });
  it('should return transport cost', function(){
    assert.equal(transportFee('nightshift'),'free');
  });
});
