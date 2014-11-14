"use strict";

var definedModules = {};
var initializedModules = {};

/*  Defines module with given name as first parameter
 *  The second parameter is the module constructor
 */
function define(name, module) {
    definedModules[name] = module;
}

/*
 *  Returns the module object.
 *  As second parameter accepts arguments as array
 *  that is passed directly to the module constructor
*/
function require(name, args) {
    if (!initializedModules[name]) {
        initializedModules[name] = definedModules[name].apply({}, args);
    }

    return initializedModules[name];
}