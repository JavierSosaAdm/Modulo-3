const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

const pwd = (print, _args) => {
    print(process.cwd())
}

const date = (print, _args) => { // el _ es para iluminar el parámetro que no vamos a utilizar de momento
    print(Date())
}

const echo = (print, args) => {
    print(args)
}

const ls = (print, args) => {
    fs.readdir('.', (error, files) => {
        if (error) throw Error(error)
        print(files.join(' '))
    })
}

// const printFile = (print, filename, lines) => {
//     fs.readFile(filename, 'utf-8', (error, data) => {
//         if (error) throw Error('Error en el contenido');
//         !lines && print(data);
//         lines === 'head' && print (data.split('\n').slice(0, 8).join('\n'));
//         lines === 'tail' && print (data.split('\n').at(-1));
//     } )
// }

const cat = (print, args) => {
    fs.readFile(args, 'utf-8', (error, data) => {
        if (error) throw Error('Error en el contenido');
        print(data)
    })
}

const head = (print, args) => {
    fs.readFile(args.join(''), 'utf-8', (error, data) =>{
        if (error) throw Error('Error en el contenido');
        print(data.split('\n').at(0).join(''));
    })
}

const tail = (print, args) => {
    fs.readFile(args.join(''), 'utf-8', (error, data) =>{
        if (error) throw Error('Error en el contenido');
        print(data.split('\n').at(-1));
    })
}
    
const curl = (print, args) => {
    request(args, (error, response) => {
        if (error) throw Error('Error en el contenido');
        print(response)
    })
}

module.exports = {
    pwd,
    date,
    echo,
    ls,
    cat,
    head,
    tail,
    curl
};
