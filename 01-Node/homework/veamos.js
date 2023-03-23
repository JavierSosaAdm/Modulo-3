

//let josefina = texto.toString().trim();






let obj = {
    prop: 'cmd',
    adm: 'no se'
}
const ejecutar = () => {
for (prop in obj) {
    if(obj.prop === 'cmd') {
        return obj.prop;
} else {
    return 'no hay nada'
}
}
}

console.log(ejecutar())
