import "./buscaCep.js";


const botoesAbas = document.querySelectorAll(".abas button");
const sectionCep = document.querySelector(".sectionCep");
const sectionEndereco = document.querySelector(".sectionEndereco");





botoesAbas.forEach((botao) => {

   botao.addEventListener('click',() =>{
        botoesAbas.forEach((item)=>{
      
            item.classList.remove("ativo");
         })

    botao.classList.add("ativo"); 

    if( botao.textContent ==="Busca por Endereço"){

        sectionCep.style.display="none";
        sectionEndereco.style.display="block";
    }else {
        sectionCep.style.display="block";
        sectionEndereco.style.display="none";

    }
    })
      
})

