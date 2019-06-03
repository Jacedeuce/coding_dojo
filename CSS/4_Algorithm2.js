#Algorithm II

## 1
Output: 
Dojo

## 2 
Output: 
hello
x is 15

## 3 
Output: 
n is 3
x is 18

## 4
Output: 
n is 3
n is 5
x is 16

## 5
function op(a,b){
  c = a+b;
  console.log('c is', c);
  return c;
}
x = op(2,3) + op(3,5);
console.log('x is', x);

Output: 
c is 5
c is 8
x is 13

## 6
function op(a,b){
  c = a+b;
  console.log('c is', c);
  return c;
}
x = op(2,3) + op(3,op(2,1)) + op(op(2,1),op(2,3));
console.log('x is', x)

Output:
c is 5
c is 3
c is 6
c is 3
c is 5
c is 8
x is 19

## 7
var x = 15;
function a(){
  var x = 10;
}
console.log(x);
a();
console.log(x);

Output:
15
15

## 8
function multiply(x,y){
  console.log(x);
  console.log(y);
}
b = multiply(2,3);
console.log(b);

2
3
undefined

## 9
function multiply(x,y){
  return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));

Output:
6
10

## 10
var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}

Output:
3
7

## 11
var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);

Output:
15
15
10
15

## 12
for(var i=0; i<15; i+=2){
  console.log(i);
}

Output:
0
2
4
6
8
10
12
14

## 13
for(var i=0; i<3; i++){
  for(var j=0; j<2; j++){       
      console.log(i*j);
  }
}

Output:
0
0
0
1
0
2

## 14
function looping(x,y){
  for(var i=0; i<x; i++){
     for(var j=0; j<x; j++){         
         console.log(i*j);
     } 
  }
}
z = looping(3,3);
console.log(z);

Output:
0
0
0
0
1
2
0
2
4

## 15
function looping(x,y){
  for(var i=0; i<x; i++){
     for(var j=0; j<y; j++){         
        console.log(i*j);
     } 
  }
  return x*y;
}
z = looping(3,5);
console.log(z);

Output:
0
0
0
0
0
0
1
2
3
4
0
2
4
6
8
15

# Part 2

## Print 1 to x
function printUpTo(x){
  if(x>=0)
  {
    for(var i=1;i <= x;i++)
    {
      console.log(i)
    }
  }
  else
  {
    return false
  }
}
printUpTo(1000); // should print all the integers from 1 to 1000
y = printUpTo(-10); // should return false
console.log(y); // should print false

## PrintSum
function printSum(x){
  var sum = 0;
  for(var i=1;i<=x;i++)
    {
      console.log(i);
      sum += i;
      console.log(sum)
    }
  return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32640

## PrintSumArray
function printSumArray(x){
  var sum = 0;
  for(var i=0; i<x.length; i++) {
    sum += x[i]
  }
  return sum;
}
console.log( printSumArray([1,2,3]) ); // should log 6

## Bonus
function LargestElement(x){
  var ele = 0
  for (var i=0; i<x.length; i++)
    { 
      if(ele<x[i])
        {
          ele = x[i]
        }
    }
  return ele
}
y = LargestElement([1,30,5,7]);
console.log(y);