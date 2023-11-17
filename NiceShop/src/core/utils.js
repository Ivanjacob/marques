function log(){
    // Much better console.log function that formats/indents
    // objects for better readability
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        // Stringfy and indent object
        if (typeof arg === 'object') {
            arg = JSON.stringify(arg, null, 2)
        }
        // Log the argument
        console.log(arg)
    }
}

export default { log }