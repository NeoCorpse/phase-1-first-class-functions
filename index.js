function receivesAFunction(fun) {
    fun()
}

function returnsANamedFunction() {
    const fun = function(){}
    return fun
}

function returnsAnAnonymousFunction() {
    return function(){}
}