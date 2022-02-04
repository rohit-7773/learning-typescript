// the process of refining types to more specific types than declared is called narrowing.

/**
 * @function
 * function padLeft(padding: number | string, input: string) {
 *     return " ".repeat(padding) + input;
 * }
 * 
 * the above function will give an error that "string | number" is not assignable to "number"
 */

function padLeft (padding: number | string, input: string) {
    // narrowing down the type of variable padding
    if (typeof padding === "string") {  
        return padding + input;
    }

    return " ".repeat(padding) + input;
}


function printAll(strs: string | string[] | null) {
    // typeof defines null and undefined as object so have to check for them separately
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    } else{
        console.log("null")
    }
}


function printAll1(strs: string | string[] | null) {
    // will give false on empty string also and will not handle the case of empty string
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}

