describe('the totalPhoneBill function', function(){

  it('should calculate costs of sms', function(){
    assert.equal(totalPhoneBill('sms'),'R0.65');
  });
  it('should calculate costs phone calls', function(){
    assert.equal(totalPhoneBill('call'),'R2.75');
  });
});
