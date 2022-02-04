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

