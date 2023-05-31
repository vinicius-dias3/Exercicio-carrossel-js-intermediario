const imagens = document.querySelectorAll('.slide')
const setaVoltar = document.getElementById('seta-voltar')
const setaAvancar = document.getElementById('seta-avancar')

let imagemAtual = 0

setaAvancar.addEventListener('click', function(event){
    event.preventDefault();
            
    if(imagemAtual === imagens.length -1) {
        return
    }
    
    imagemAtual++;
    
    esconderImagemAberta ();
    
    mostrarImagem();
    
    mostrarOuEsconderSetas();
})

setaVoltar.addEventListener('click', function (event){
    event.preventDefault();

    if(imagemAtual === 0) { //ADICIONEI ESTA PARTE POR MIM MESMO
        return
    }
    
    imagemAtual--;

    esconderImagemAberta ();
    
    mostrarImagem()
    
    mostrarOuEsconderSetas();
})


function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar')
}

function esconderImagemAberta(){
    const imagemAberta = document.querySelector('.mostrar');
    imagemAberta.classList.remove('mostrar');
}

function mostrarOuEsconderSetas(){
    const naoEhAPrimeiraImagem = imagemAtual !== 0;
    if (naoEhAPrimeiraImagem){
        setaVoltar.classList.remove('opacidade');
    }else{
        setaVoltar.classList.add('opacidade');
    }

    const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length -1;
    if(chegouNaUltimaImagem){
        setaAvancar.classList.add('opacidade');
    }else{
        setaAvancar.classList.remove('opacidade');
    }
}



// function 

// let setaAvancar = document.getElementById('seta-avancar')
// let imagensSlider = document.getElementsByClassName('imagens-slider')

// console.log(document.getElementsByClassName('slide'))
// setaAvancar.addEventListener('click', function (){
//     // alert('mudar imagem do slider')
    
// })




// let setaEsquerda = document.getElementsByClassName('seta-esquerda')

// let setaDireita = document.getElementsByClassName('seta-direita')

// console.log(setaEsquerda, setaDireita);

// setaDireita.addEventListener('click', function (){
    
// })