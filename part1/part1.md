part 1a:

1- 20
2- 20
3- 20
4- error becasue let has block scope. 
5- error, result is a const variable
6- error, result is a const variable

part 1b:

1- 3
2- error because variable is not defined
3- 150
4- array of discounted prices
5- error becuase i is not defined
6- error because variable is not defined
7- 150
8- array of discounted prices
9- error becuase i is not defined
10- 3
11- array of discounted prices
12- a) student.name
    b) student['grad year']
    c) student.greeting()
    d) student['Favorite Teacher'].name
    e) student['courseLoad'][0]

13- a) 32 as a string 2 convert to a string
    b) 1 since 3 convert to number
    c) 3 because null convert to 0
    d) 3null since null convert to a string
    e) 4 since true convert to 1
    f) 0 since false and null both convert to 0
    g) 3undefined since undefined convert to a string
    h) NaN, since conversion failed

14- a) true '2' converts to 2
    b) fale, dictionary comparison
    c) true, '2' converts to 2
    d) false, no conversion with ===
    e) false, true convert to 1
    f) true, Boolean(2) is true



15- === is a strict equality checker. It check equality without conversion whereas == does conversion

17- We are calling modifyArray with parameters ([1,2,3], doSomething). [1,2,3] will be used as array, and doSomething will be used as callback for function modifyArray. 
In modifyArray, it will iterate through the array and call doSomething which returns value * 2, and it will push the returned value to newArr and return. As a result, newArr will be an array with same length as [1,2,3] but doubled, [2,4,6]

19- It will print out 1 then 4 since there is no timeout for those. Then it will wait 0 sec and print 3, and it wait 1 second then print 2