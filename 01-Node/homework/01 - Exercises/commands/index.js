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

const cat = (print, args) => {}

const head = (print, args) => {}

const tail = (print, args) => {}

const curl = (print, args) => {}

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
