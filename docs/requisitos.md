# Documento de Requisitos — BuscaCEP Brasil

## Requisitos Funcionais
**RF01 — Consulta por CEP**

O sistema deve permitir que o usuário informe um CEP e consulte o endereço correspondente.

**RF02 — Consulta por endereço**

O sistema deve permitir que o usuário informe a UF, a cidade e o logradouro para consultar os CEPs correspondentes.

**RF03 — Exibir resultados**

O sistema deve exibir, após uma consulta bem-sucedida, as seguintes informações: CEP, logradouro, bairro, cidade e UF, permitindo que o usuário confira os dados retornados pela API.

**RF04 — CEP não encontrado**

O sistema deve informar ao usuário quando o CEP consultado não for encontrado, exibindo uma mensagem clara e removendo da interface os resultados de consultas anteriores.

**RF05 — Validação do CEP**

O sistema deve verificar, antes de realizar a consulta à API, se o campo CEP está preenchido e contém exatamente oito dígitos numéricos, permitindo o uso opcional de hífen no formato XXXXX-XXX.

Caso o CEP seja inválido, o sistema deve apresentar uma mensagem de erro ao usuário e impedir o envio da requisição.

**RNF01 — Responsividade**

O sistema deve possuir uma interface responsiva, adaptando seus elementos a diferentes tamanhos de tela, como computadores, tablets e celulares, sem prejudicar a leitura ou a utilização das funcionalidades.

**RNF02 — Acessibilidade e usabilidade**

O sistema deve possuir uma interface acessível, permitindo a navegação por teclado e a utilização de leitores de tela, com campos devidamente identificados, textos legíveis e mensagens de erro claras.


