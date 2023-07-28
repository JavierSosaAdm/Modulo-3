const express = require("express");

let publications = [];

const server = express();

server.use(express.json()); //este es el middleware es por eso que se usa use

let id = 1;

server.post('/posts', (req, res) => {
    const { author, title, contents } = req.boby;

    // if (!author || !title || !contents) {
    //     return res.status(400).json({error: 'No se recibieron los parámetros necesarios para crear la publicación'})
    // }
    if (author&&title&&contents) {
        const publication = {
            author,
            title,
            contents,
            id: id++
        }
        publications.push(publication);

        res.status(200).json(publication)
    } else {
        return res.status(400).json({error: 'No se recibieron los parámetros necesarios para crear la publicación'})
    }
});

server.get('/posts', (req, res) => {
    const { author, title } = req.query
    
        if(author && title) {
            const filterPublication = publications.filter(publi = publi.author === author && publi.title === title);
    
            filterPublication.length
            ?res.status(200).json(filterPublication)
            :res.status(404).json({error: 'No existe ninguna publicación con dicho título y autor indicad'})
            
        } else {
            return res.status(400).json({error: 'No existe ninguna publicación con dicho título y autor indicad'})
        }
});

server.get('/posts/:author', (req, res) => {
    const author = req.params;
    
    if (author) {
        const filterPublication = publications.filter(publi = publi.author === author);
        
        if (filterPublication.length) {
            return res.status(200).json(filterPublication)
        }
    } else {
       return res.status(400).json({error: 'No existe ninguna publicación del autor indicado'})
    }
}); 

server.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    const {title, contents} = req.body;

    if(title&&contents&&id) {
        let publicationId = publications.find(publi => publi.id === Number(id))


    if (!publicationId) res.status(400).json({error: 'No se recibió el id correcto necesario para modificar la publicación'})
     else {
        publicationId = {...publicationId, title, contents} 
        return res.status(200).json(publicationId)
    }
 }
    else {
        return res.status(400).json({error: 'No se recibió el id correcto necesario para modificar la publicación'})
    }
});

server.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).json({error: 'No se recibió el id correcto necesario para eliminar la publicación'})
    } else {
        let filterPublication = publications.filter(publi => publi.id !== Numbre(id))

        if(publications.length === filterPublication) {
            return res.status(400).json({ error: 'No se recibió el id correcto necesario para eliminar la publicación' })
        }

        publications = filterPublication;

        res.status(200).json({ succes: true })
    }
})


//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
