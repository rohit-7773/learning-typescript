// can define the types of variables while declaring them
var num: number = 1;
var str: string = "rohit";
var bool: boolean = true;
var anyVar: any = "rohit";
var unionTypes: string | number = num;


// typescript infers the type of variable when we initialise the variable while declarating
// no need to define the type externally
var num1 = 1;
var str1 = "rohit";
var bool1 = false;


// can create homogenous array by defining the type of array elements
var arr: number[] = [1, 2, 3];

// array types can also be inferred while initialising
var arr1 = [1, 2, 3]

// tuples
var tuple: [number, string] = [1, "rohit"];
var tupleArr: [number, string][] = [[1, "rohit"], [2, "rohit gupta"]]