describe('the transportFee function', function(){

  it('should return transport cost of morningShift', function(){
    assert.equal(transportFee('morning'),'R20');
  });
  it('should return transport cost nightShift', function(){
    assert.equal(transportFee('nightshift'),'free');
  });
  it('should return transport cost afternoon', function(){
    assert.equal(transportFee('afternoon'),'R10');
  });
});
