1- What are the four steps of mergesort?

    I-Split array in half.
    II-Mergesort left half.
    III-Mergesort right half.
    IV-Join the two arrays.

2- Using JavaScript, generate a random number between 50 and 100.

    Math.random()*50 + 50;

3- Using Javascript, generate a random number between -100 and 100.

    -100 + Math.random()*200;

4- Write a coin flip function. It should return the string "heads" half the time and the string "tails" the other half

  function coinFlip(){
      let num = Math.random();
      if(num > 0.5)return "heads";
      return "tails";
  }
5- Re-state the following expression without using negation: !(10 > x)

    (10 <= x)

6- Re-state the following expression without using negation: !(a > 10 && b <= 5)

    (a <= 10 || b > 5)

7- Re-state the following expression without repeating variable a: (a && x <= 10) || (a && y < 0)



8- Re-state the following expression without negations: !( (a > 10) || (b > 10) || (c > 10) || (isAdmin) )

    (a < 10) && (b > 10) && (c > 10) && (isAdmin)

9- Write a function which, given a 2-d array of strings, returns the concatenation of all the strings.

  function twodconcat(array){
      var string = '';
      for(var i = 0; i < array.length; i++){
          for(var j = 0; j < array[i].length; j++){
              string += string.concat(array[i][j]);
          }
      }
      return string;
  }

10- Write a function which, given a 2-d array and another value x, returns true if x is present in the 2-d array, and false otherwise.

  function result(array, num){
      for(var i = 0; i < array.length; i++){
          for(var j = 0; j < array[i].length; j++){
              if(array[i][j] == num) return true;
          }
      }
      return false;
  }

11- Write a "function" which, given an two sorted arrays of sizes m and n, returns a larger sorted array of size m+n. This "function" must work in O(m+n) time.

function Sort(arr){
  for(var i =0; i < arr.length-1; i++){
    for(var j = 0; j < arr.length-1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
     }
  }
 }
 return arr;
}

12- Given the following edge list, draw the graph. Use MS Paint and include the file in your repo.

E = [[1,2], [2,3], [4,5], [2,4], [1,5]]

13- Given the following adjacency Matrix, determine whether the graph is directed or undirected and draw it.
        //Is Directed.
M = [
  [0,0,1,0,1],
  [0,0,0,0,1],
  [0,1,0,0,0],
  [0,1,0,0,0],
  [0,0,0,0,1],
]
14- For exercises 9 and 10, if you assume that n is the size of one side of the matrix, what is the time complexity (Big Oh) of the algorithms you wrote?
    9- O(n^2)
    10- O(n^2)
15- What is the time complexity of the following function?
    O(n)
  function thugPop(arr){
    var ret = [];
    for (var i === 0; i < arr.length; i++){
      if (arr[i] % 15 == 0) ret.push('thugPop');
      else if (arr[i] % 5 == 0) ret.push('thug');
      else if (arr[i] %3 == 0 ) ret.push('pop');
      else ret.push(arr[i]);
    }
    return ret;
  }

16- What is the time complexity of the following function?
    O(n^2)
  function thugify(schoolList){
    return schoolList.map(function(schoolObj){
      var school = Object.assign({}, schoolObj);
      school.students.forEach(function(student){
        if (Math.random() > 0.5){
          student.lastName += 'dogg';
        }
        else {
          student.firstName = "lil' "+ student.firstName;
        }
      });
    });
  }

17- What is the time complexity of the following function?
    O(n)
  function countRepeats(strArr){
    var repeats = 0;
    strArr.forEach(function(str, index){
      var currentRepeats = strArr.filter(function(innerStr, idx){
        return (innerStr === str && index != idx)
      });
      if (currentRepeats.length > 0){
        repeats++;
      }
    });
    return repeats;
  }

18- What are the main operations of a stack?
    I-Push
    II-Pop
    III-Size
    IV-Peek
19- What are the main operations of a queue?
    I-Enqueue
    II-Dequeue
20- What is the runtime of bubblesort? How does it work?
 The bubble sort works by comparing adjacent pairs of objects in the array.
 If the objects are not in the correct ordered, they are swapped so that the largest of the two moves up.
 This process continues until the largest of the objects, eventually "bubbles" up to the highest position in the array.
 After this occurs, the search for the  next largest object begins.
 The swapping continues until the whole array is in the correct order.
