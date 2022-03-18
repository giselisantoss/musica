

const musica= require("../model/musica.json")
const fs = require("fs");

const getAll=(req,res)=>{
    console.log(req.url)
    res.status(200).send(musica)
}

const getByID=(req,res)=>{
    const id = req.params.id

    const musicafiltrado=musicas.find(
        (musica)=>musica.id == id)
        res.status(200).send
        (musicafiltrado)
}

const getbyTitle =(req,res)=>{
    const titulo = req.params.titulo

    const musicafiltradoportitulo= musicas.find((musica)=>musica.titulo==titulo)

    res.status(200).sed(musicafiltradoportitulo)
}

const Postmusicas =(req,res)=>{
    console.log(req.body);

   const { id, artista, genero, nomedamusica, Ano}= req.body;
   musica.push({id, artista, genero, nomedamusica, Ano});

   fs.writeFile("./SRC/model.musicas.json", JSON.stringify(musica), 'utf8', function(err){
       if(err){
           return res.status(424).send({message:err});
       }
       console.log("Arquivo Atualizado Com Sucesso!");
   })
    res.status(200).send(musica);
}

const deleteMusica=(req,res)=>{
    try{
        const id=req.params.id;
        const musicaFiltrado = musica.find((musicas) => musicas.id ==id );
        const index = musica.indexOf(musicaFiltrado);
        musica.splice(index,1)

        fs.writeFile("./src/model/musica.json",JSON.stringify(musica),'utf8',function(err){
            if(err){
                return res.status(424).send({message:err});

            }
            console.log("Arquivo excluido com sucesso!");
        });

        res.status(200).send(musica)
    }catch(err){
        console.log(err)
        return res.status(424).send({message:"Erro ao deletar o registro"})

    }
}

const putMusica=(req,res)=>{
    try{
        //pega on id que foi passado
        const id=req.params.id;

        // filtra meu array de objetos pra encrontrar o objeto requerido
        const musicaASermodificado=musica.find((musicas)=>musica.id == id);
        console.log(musicaASermodificado);

        //pega o corpo da requisição com as alteraçoes
        const musicaAtualizado = req.body;
        console.log(musicaAtualizado)
         
        //index
        const index=musica.indexOf(musicaASermodificado)
        console.log(index);

        //buscando no array o endereço, excluindo o registro antigo e substituindo pelo novo
        musica.splice(index,1,musicaAtualizado);
        console.log(musica);

        fs.writeFile("./src/model/musica.json",JSON).stringify(musica), 'utf8', function(err){
            if (err){
                return res.status(424).send({message:err});
            }
            console.log("Arquivo atualizado com sucesso!");
        }

        res.status(200).send(musica);
    }catch(err){
        return res.status(424).send({message:err})
    
}
}

   const patchMusica=(req,res)=>{
    const id=req.params.id;
    const atualizacao=req.body;
    console.log(atualizacao)

    try{
        const musicaASermodificado=musica.find((musica)=> musica.id == id);

        //Ele vai busca dentro do objeto tarefas a ser modificado os atributos em que o nome coicinda com os do objeto atualizaçao, e vaib substituir o valor
        Object.keys(atualizacao).forEach((chave)=>{
            musicaASermodificado[chave]=atualizacao[chave]
        })
        fs.writeFile("./src/model/musica.json", JSON.stringify(musica), 'utf8', function (err){
            if (err){
                return res.status(424).send({message: err});
            }
            console.log("Arquivo atualizado com sucesso!");
        });
        return res.status(200).send(musica);
    }catch(err){
        return res.status(424).send({message:err});
    }
   }


module.exports={getAll, getByID, getbyTitle, Postmusicas, deleteMusica, putMusica, patchMusica }
