describe('the yearsAgo function', function(){

  it('should return 20 years differncebetween dates', function(){
    assert.equal(yearsAgo('1998'),20);
  });

  it('should return 40 years differncebetween dates', function(){
    assert.equal(yearsAgo('1978'),40,);
  });
});
