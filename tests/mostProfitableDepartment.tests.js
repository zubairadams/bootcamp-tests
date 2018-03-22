describe('the mostProfitableDepartment function', function(){

var data1 = [
    {department : 'hardware', sales : 4500, day : 'Monday'},
    {department : 'outdoor', sales : 1500, day : 'Monday'},
    {department : 'carpentry', sales : 5500, day : 'Monday'},
    {department : 'hardware', sales : 7500, day : 'Tuesday'},
    {department : 'outdoor', sales : 2505, day : 'Tuesday'},
    {department : 'carpentry', sales : 1540, day : 'Tuesday'},
    {department : 'hardware', sales : 1500, day : 'Wednesday'},
    {department : 'outdoor', sales : 8507, day : 'Wednesday'},
    {department : 'carpentry', sales : 8009, day : 'Wednesday'},
    {department : 'hardware', sales : 12000, day : 'Thursday'},
    {department : 'outdoor', sales : 18007, day : 'Thursday'},
    {department : 'carpentry', sales : 6109, day : 'Thursday'},
    {department : 'hardware', sales : 7005, day : 'Friday'},
    {department : 'outdoor', sales : 120061, day : 'Friday'},
    {department : 'carpentry', sales : 16109, day : 'Friday'},
];
  it('should return outdoor department as most mostProfitableDepartment', function(){
    assert.equal(mostProfitableDepartment(data1),'outdoor');
  })


  var data2 = [
      {department : 'hardware', sales : 4500, day : 'Monday'},
      {department : 'outdoor', sales : 1500, day : 'Monday'},
      {department : 'carpentry', sales : 5500, day : 'Monday'},
      {department : 'hardware', sales : 7500, day : 'Tuesday'},
      {department : 'outdoor', sales : 2505, day : 'Tuesday'},
      {department : 'carpentry', sales : 1540, day : 'Tuesday'},
      {department : 'hardware', sales : 1500, day : 'Wednesday'},
      {department : 'outdoor', sales : 8507, day : 'Wednesday'},
      {department : 'carpentry', sales : 8009, day : 'Wednesday'},
      {department : 'hardware', sales : 12000, day : 'Thursday'},
      {department : 'outdoor', sales : 18007, day : 'Thursday'},
      {department : 'carpentry', sales : 6109, day : 'Thursday'},
      {department : 'hardware', sales : 7007005, day : 'Friday'},
      {department : 'outdoor', sales : 120061, day : 'Friday'},
      {department : 'carpentry', sales : 16109, day : 'Friday'},
  ];
  it('should return hardware as most mostProfitableDepartment', function(){
    assert.equal(mostProfitableDepartment(data2),'hardware',);
  })
})
