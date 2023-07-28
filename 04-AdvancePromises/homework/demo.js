const promesa1 = new Promise ((resolve, _reject) => {
    resolve('resuelto'); 
})

const promesa2 = new Promise ((_resolve, reject) => {
    reject('rechazado'); 
})

const promesa3 = new Promise((resolve, reject) => {
    resolve('Resuelto 2')
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
// La promesa se resuelve A

promesa1
    .then(
        (value) => {return 'te paso info'}, // esta promesa se resuelve al valor de 'te paso info'
        (error) => console.log(error)
        )  
    .then((value) => console.log('este es el segundo then: ', value)) // aqui se resuelve la promesa1 porque el 'te paso info se guarda en el value' 

// la promesa se resuelve B
promesa1
    .then(
        (value) => 'te paso info', // esta promesa se resuelve al valor de 'te paso info'
        (error) => console.log(error)
        )  
    .then((value) => console.log('este es el segundo then: ', value)) // esta promesa se resuelve al valor de 'te paso info' por el mismo motivo del caso anterior

// la promesa se resuelve C
promesa1
    .then(
        (value) => console.log('te paso info'), // esta promesa se resuelve al valor de 'te paso info' y se loguea
        (error) => console.log(error)
        )  
    .then((value) => console.log('este es el segundo then: ', value)) // esta promesa se resuelve al valor de 'undefined' puesto que en el primer then la promesa ya logueo el 'te paso info' por lo tanto el value del segundo then no tiene un valor definido.

// CASO 6 
// promesa se rechaza

promesa2
        .then(
            (value) => {return 'otro value'},
            (error) => {return 'error'} // tenemos una promesa que se rechaza y el 'rechazado'  esta guardado en el error
            )
        .then((value) => console.log('caso 6: ', value)) // se muestra el caso 6 porque el error no tiene manejador yt se soluciona así: 

promesa2
        .then(
            (value) => {return 'otro value'}, // successHandler
            (error) => {throw error} // errorHandler NO USAR return       
        )
        .then(
            (value) => console.log('caso 6: ', value),
            (error) => console.log('errorHandler: ', error) // especificar errorHandler
        )

// CASO 7:

promesa1
        .then(
            (value) => {return promesa3}, // retorna otra promesa que en este caso es la promesa 3 que se resuelve a 'Resuelto2'
            (error) => {throw error} // los 'throw' lanzan errores hasta que alguien los maneja
            )
        .then(
            (value) => console.log('successHandler: ', value), // se resuelve a 'successHandler: Resuelto2 (el resultado de promesa3)' 
            (error) => console.log('errorHandler: ', error) // 
        )
// si se rechaza A

promesa1
        .then(
            (value) => {return promesa2}, // retorna otra promesa que en este caso se rechaza, por lo tanto se resuelve al 'rechazado
            (error) => {throw error} // lanza error
        )
        .then(
            (value) => console.log('successHandler: ', value),
            (error) => console.log('errorHandler: ', error) // se resuelve a 'errorHandler: Rechazado' porque promesa2 se resuelve a ese valor
        )

// si se rechaza B

promesa1
        .then(
            (value) => {return promesa2}, // retorna otra promesa que en este caso se rechaza, por lo tanto se resuelve al 'rechazado
            (error) => {throw error} // lanza error
        )
        .then(
            (value) => console.log('successHandler: ', value),
            (error) => {throw error} // lanza error nuevamente 
        )
        .catch((error) => console.log('errorHandlerB: ', error)) // recibe el error y se resuelve a 'errorHandlerB: Rechazado' porque promesa2 se resuelve a ese valor
