//CAPTURA DOS ELEMENTOS 
const btnEnd = document.querySelector("#btnEnd");
const resultEstado = document.querySelector("#estado");
const resultCidade = document.querySelector("#cidade");
const resultRua = document.querySelector("#rua");  
const ufsBrasileira = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT","MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

const codigoRegex = /^[A-Z]{2}$/;

const mensgErroUf = document.querySelector(".erroEnd");
const mensagemErro = document.querySelector(".erroEndMensg");

const mensgErrocid = document.querySelector(".erroCidade");
const mensagemErroCid = document.querySelector(".erroCidMensg");

const mensgErroRua = document.querySelector(".erroRua");
const mensagemErroRua = document.querySelector(".erroRuaMensg");





btnEnd.addEventListener('click',(event)=>{

    event.preventDefault();
    

        const estadoValor = resultEstado.value.trim().toUpperCase();
       
        
         if ( estadoValor === ""){

            mensgErroUf.style.display="flex"
            mensagemErro.textContent = "O UF é obrigatório!" ;
            return
        }

        if(!codigoRegex.test(estadoValor)){
            mensgErroUf.style.display="flex"
            mensagemErro.textContent = "A UF deve conter exatamente duas letras.";
            return
        }

      
        if(!ufsBrasileira.includes(estadoValor)){

            mensgErroUf.style.display="flex"
            mensagemErro.textContent = "Não é um UF válido.";
            return
        }
       

        const cidadeValor = resultCidade.value.trim();

        if (cidadeValor === ""){

            mensgErrocid.style.display="flex";
            mensagemErroCid.textContent = "O campo cidade é obrigatório";
            return
         
        }

        if (cidadeValor.length < 3){

            mensgErrocid.style.display="flex";
            mensagemErroCid.textContent="A cidade deve conter pelo menos 3 caracteres.";
            return
          
        }

    const ruaValor = resultRua.value.trim();

    if (ruaValor === ""){

        mensgErroRua.style.display = "flex";
        mensagemErroRua.textContent = "O campo rua é obrigatório!";
        return
    }

    if (ruaValor.length < 3){

        mensgErroRua.style.display = "flex";
        mensagemErroRua.textContent = "O campo deve conter no minimo 3 caracteres";
        return
    }
        
})

resultEstado.addEventListener("input",()=>{

    if(resultEstado.value.trim() !== ""){
        mensgErroUf.style.display ="none";
    }
})

resultCidade.addEventListener("input",()=>{

    if (resultCidade.value.trim() !==""){
        mensgErrocid.style.display ="none";

    }
})

resultRua.addEventListener("input",()=>{
    if(resultRua.value.trim() !== ""){
        mensgErroRua.style.display ="none"

    }

})