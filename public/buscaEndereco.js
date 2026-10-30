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
const resultCepEnd = document.querySelector(".resultaCepEnd");
const resultEndRua = document.querySelector(".resultEndRua");
const resulEndBairro = document.querySelector(".resulEndBairro");
const resulEndCidade = document.querySelector(".resultEndCidade");
const listaEnderecos = document.querySelector(".listaEnderecos");




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

        let cidadeValorCodificado = encodeURIComponent(cidadeValor);
        let  ruaValorCodificado= encodeURIComponent(ruaValor);
        let urlEndereco = `https://viacep.com.br/ws/${estadoValor}/${cidadeValorCodificado}/${ruaValorCodificado}/json`;
  
   
    async function buscaEndereco() {
        const respostaBusca = await fetch(urlEndereco);
        const dadosBusca = await respostaBusca.json();
        const dadosSlice = dadosBusca.slice(0,3);

        if (dadosBusca.length === 0){
            mensgErroRua.style.display = "flex";
            mensagemErroRua.textContent = "CEP não encontrado";
            return
        }

        listaEnderecos.replaceChildren();
        if (dadosBusca.length ===1){
            resultCepEnd.textContent = dadosBusca[0].cep;
            resultEndRua.textContent = dadosBusca[0].logradouro;
            resulEndBairro.textContent = dadosBusca[0].bairro;
            resulEndCidade.textContent = dadosBusca[0].localidade + "/" + dadosBusca[0].uf;

        }else {
            listaEnderecos.replaceChildren();
            dadosSlice.forEach((endereco) => {
            const cardEndereco = document.createElement("button");
                cardEndereco.addEventListener('click',()=>{
                resultCepEnd.textContent = endereco.cep;
                resultEndRua.textContent = endereco.logradouro;
                resulEndBairro.textContent = endereco.bairro;
                resulEndCidade.textContent = endereco.localidade + "/" + endereco.uf;
            });
                cardEndereco.classList.add("cardEndereco");
                cardEndereco.textContent = endereco.cep;
                listaEnderecos.appendChild(cardEndereco);
                console.log(endereco);
            });    
        }    


    };

    buscaEndereco();
    
});


resultEstado.addEventListener("input",()=>{

    if(resultEstado.value.trim() !== ""){
        mensgErroUf.style.display ="none";
    }

    listaEnderecos.replaceChildren();
    resultCepEnd.textContent = "";
    resultEndRua.textContent="";
    resulEndBairro.textContent ="";
    resulEndCidade.textContent = "";
    
});

resultCidade.addEventListener("input",()=>{

    if (resultCidade.value.trim() !==""){
        mensgErrocid.style.display ="none";

    }
    listaEnderecos.replaceChildren();
    resultCepEnd.textContent = "";
    resultEndRua.textContent="";
    resulEndBairro.textContent ="";
    resulEndCidade.textContent = "";
});

resultRua.addEventListener("input",()=>{
    if(resultRua.value.trim() !== ""){
        mensgErroRua.style.display ="none"

    }
    listaEnderecos.replaceChildren();
    resultCepEnd.textContent = "";
    resultEndRua.textContent="";
    resulEndBairro.textContent ="";
    resulEndCidade.textContent = "";

});
