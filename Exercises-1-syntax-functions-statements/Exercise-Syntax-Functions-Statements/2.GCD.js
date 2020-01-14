function solve(x, y) {
    
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    
    while(y) {
      var z = y;
      y = x % y;
      x = z;
    }
    return x;
  }
  
  console.log(solve(15, 5));
  console.log(solve(2154, 458));