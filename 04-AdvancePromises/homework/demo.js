const promesa1 = new Promise ((resolve, _reject) => {
    resolve('resuelto'); 
})

const promesa2 = new Promise ((_resolve, reject) => {
    reject('rechazado'); 
})

// CASO 1 
// // La promesa se resuelve
promesa1.then((value) => console.log('caso 1: ', value));

// CASO 2
// La promesa se rechaza 
promesa2.then(
    (value) => console.log(value),
    (reason) => console.log('caso 2: ', reason)
)

// CASO 3
// La promesa se resuelve y no tengo un successHandler
promesa1
.then()
.then((value) => console.log('caso 3: ', value));

//CASO 4
// La promesa se resuelve y no tengo un errorHandler
promesa2 // se rechaza
.then((value) => console.log(value)) // promesa reject (error) =>
.then((value) => console.log(value)) // promesa reject (error) =>
.then((value) => console.log(value)) // promesa reject (error) =>
.then((value) => console.log(value)) // promesa reject (error) =>
.catch((error) => console.log('caso 4: ', error)) // 'caso 4: Rechazado'

// CASO 5
//
