// can define the types of objects also
var obj: {id: number, name: string} = {id: 1, name: "rohit"};


// can declare the optional property by adding the "?" before colon in type annotations
var obj1: {id: number, name?: string} = {id: 2, name: "rohit_"};
obj1 = {id: 3};


// we can give a name to a type. This is called type aliases.
type Id = number | string;

type ObjType = {
    id: Id,
    name: string
}

var obj3: ObjType = obj;
obj3.id = "1";


// interface is a another way to give name to the type
interface ObjType1 {
    id: Id;
    name: string
}

var obj4: ObjType1 = {id: 1, name: "rohit"}

obj3 = obj4;  // example of duck typing


