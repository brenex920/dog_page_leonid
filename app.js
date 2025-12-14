'use strict'

const botaoPesquisar = document.getElementById('btn')

async function buscarImagens (raca){
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    return imagens.message
}

async function criarTela(urlImagem){
    const container = document.getElementById('container') 

    let img = document.createElement('img')
    img.src = urlImagem

    
    container.appendChild(img)

}
async function carregarTela() {
    const raca = document.getElementById('nome').value
    const imagens = await buscarImagens(raca) 
    container.replaceChildren()
    imagens.forEach(criarTela)
}


botaoPesquisar.addEventListener('click', carregarTela)

document.getElementById('nome').addEventListener('keydown', async function(event){
    if (event.key === 'Enter') {
    
        event.preventDefault();
       
        await carregarTela();}
})