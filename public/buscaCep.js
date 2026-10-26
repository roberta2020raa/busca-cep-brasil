import "./buscaEndereco.js";
const erroCep = document.querySelector(".erroCep");
const mensagemErro = document.querySelector(".erroSenha");
const btnCep = document.querySelector("#btnCep");
const numeroCep = document.getElementById("cep");
const resultCep = document.querySelector(".resultCep span");
const logradouro = document.querySelector(".logradouro span");
const bairro = document.querySelector(".bairro span");
const cidadeUf = document.querySelector(".cidade span");

btnCep.addEventListener('click',(event)=>{
    event.preventDefault();
    const cepLimpo = numeroCep.value.trim().replace("-","");
     if (cepLimpo === ""){

        erroCep.style.display = "flex";
        mensagemErro.textContent = "O CEP é obrigatório!" ;
        return

     }
    let url = `https://viacep.com.br/ws/${cepLimpo}/json`;
    const somenteNumeros = /^\d+$/;



        if(!somenteNumeros.test(cepLimpo)){

            erroCep.style.display = "flex";
            mensagemErro.textContent = "O CEP deve conter apenas números!" ;
            return
        }
 

        if (cepLimpo.length !== 8 ){

            erroCep.style.display = "flex";
            mensagemErro.textContent="O CEP deve conter 8 dígitos!";
            return

        }

   
        

    async function consultarCep(){
        const resposta = await fetch(url);
        const dados = await resposta.json();
        
        if (dados.erro ==="true"){
            erroCep.style.display = "flex";
            mensagemErro.textContent = "CEP não encontrado!"
            return
        }
     

        
        resultCep.textContent = dados.cep;
        logradouro.textContent = dados.logradouro;
        bairro.textContent =dados.bairro;
        cidadeUf.textContent = dados.localidade +"/"+ dados.uf;

           
    
        
    }


erroCep.style.display ="none";
consultarCep();

});

numeroCep.addEventListener("input",()=>{
    if(numeroCep.value ===""){
        resultCep.textContent = "";
        logradouro.textContent = "";
        bairro.textContent = "";
        cidadeUf.textContent = "";
        erroCep.style.display ="none";
        
    }
   
});
