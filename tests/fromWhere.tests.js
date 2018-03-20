describe('the fromWhere function', function(){

  it('should state if the car comes from Bellville', function(){
    assert.equal(fromWhere('CY 8524'),'Bellville');
  });

  it('should state if the car comes from Paarl', function(){
    assert.equal(fromWhere('CJ 8524'),'Paarl');
  });

  it('should state if the car comes from cpt', function(){
    assert.equal(fromWhere('CA 8524'),'Cape Town');
  });
});
