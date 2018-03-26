describe('the regCheck function', function(){

  it('should confirm location is bellville', function(){
    assert.equal(regCheck('787894 CA','CA'),true);
  });
  it('should deny location is bellville', function(){
    assert.equal(regCheck('CS 895541','CA'),false);
  });


});
