// variable to hold sum
var num = 0;

//iterate through numbers to 1000
for (i=0;i<1000;i++) {

  // determine multiples of 3 or 5 and add to sum
  if ( i% 3 === 0 || i % 5 === 0) {
    num += i;
  }
}

//output final sum of multiples
console.log("Sum of multiples is " + num);
