
describe('The isFromBellville function', function(){

    it('return CY', function(){
        assert.equal('should confrim that vechicle is from bellville ', isFromBellville('CY'));
    });
    it('return CY', function(){
        // this test will fail - can you fix it?
        assert.equal('should confrim that vechicle is from bellville', isFromBellville('CA'));
    });
});
