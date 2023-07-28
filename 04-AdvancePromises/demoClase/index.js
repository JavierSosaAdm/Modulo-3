const promiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(flag) resolve('todo ok');
        else reject('todo mal')
    }, 1000)

})

promiseA // => se resuelve al valor 'todo ok'
.then((value) => 'tukis') // => resuelve la promesa A al valor 'tukis' (succes handler)
.then((value) => 'hola') // => resuelve la promesa B al valor undefined (succes handler)
.then((value) => console.log(value)); // => resuelve a la promesa C (succes handler)
// .catch((error) => console.log(error))

// ? Un then es una promesa que: 
// * se resuelve al valor de su succes handler. 