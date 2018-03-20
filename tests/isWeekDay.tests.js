describe('the isWeekDay function', function(){

  it('should confirm if the day is a Weekday', function(){
    assert.equal(isWeekDay('monday'),true);
  });
  it('should fail if the day is not a Weekday', function(){
    assert.equal(isWeekDay('sunday'),true);
  });

});