describe('the regCheck function', function(){

  it('should return location', function(){
    assert.equal(regCheck('787894 CA','CA'),true);
  });
  it('should return location', function(){
    assert.equal(regCheck('CS 895541','bellville'),false);
  });


});
