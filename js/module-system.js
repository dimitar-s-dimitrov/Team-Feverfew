"use strict";

var definedModules = {};

/*  Defines module with given name as first parameter
 *  The second parameter must be a function that returns object.
 */
function define(name, module) {
    definedModules[name] = module;
}

// Returns the result of the defined function
function require(name) {
    return definedModules[name]();
}