'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

class $Promise {
    constructor(executor) {
        
            if (typeof executor !== 'function') throw typeError('Executor must be a function');
            this._state = 'pending';
            this._value = undefined;
            this._handlerGroups = [];
        
            resolve = (value) => {
                this._internalResolve(value);
            };
    
            reject = (reason) => {
                this._internalReject(reason);
            };
    
            executor(resolve, reject)
        }

        _internalResolve = (value) => {
            if (this._state = 'pending') 
            this.state = 'fulfilled';
            this._value = value;
        }

        _internalReject = (reason) => {
            if (this._state = 'pending') 
            this._state = 'rejected';
            this._value = reason;
        }
         
        then = (successCb, errorCb) => { 
            const handlerGroup = {
                successCb: typeof successCb === 'function' ? successCb : 'false',
                errorCb: typeof errorCb === 'function' ? errorCb : 'false'
            }
            this._handlerGroups.push(handlerGroup)
            this._state !== 'pending' && this._callHandlers
            (this._value)
            this._callHandlers(this._value)
        }

        catch = (errorCb) => {
            this.then(null, errorCb)
        }

        _callHandlers = () => {
            while(this._handlerGroups.length) {
                const currentHandler = this._handlerGroups.shift();

                this._state === 'fulfilled' 
                && currentHandler.successCb 
                && currentHandler.successCb(value)

                this._state === 'rejectrd' 
                && currentHandler.errorCb 
                && currentHandler.errorCb(reason)
            }
        }
} 

// const promise = new Promise((resolve, reject) => {

// })

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
