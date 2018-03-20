
describe('the isFromBellville function', function(){


  it('should confirm that vechicle is from bellville', function(){
    assert.equal(isFromBellville('CY 48488'),true);
});
    it('should confirm the vechicle is from bellville', function(){
    assert.equal(isFromBellville('CA 989898'),false);
    });
});
