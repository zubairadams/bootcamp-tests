describe('the regCheck function', function(){

  it('should confirm location is bellville', function(){
    assert.equal(regCheck('DV 23 NB GP','GP'),true);
  });
  it('should deny location is bellville', function(){
    assert.equal(regCheck('MP 895541','CA'),false);
  });


})
