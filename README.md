# FoxBit - Test Rover (NodeJS)

# Decisão técnica
O desenvolvimento do teste utilizou-se como premissa arquitetura Hexagonal, possibilitando ponto de entrada e ponto de saida, input e output.
Como o input do teste deu-se utilizando um arquivo texto, foi criado a leitura do arquivo fora da regra de negócio, no arquivo app.js.
Toda a leitura e direcionamento dessa porta de entrada, é feita no Controlador, considerando que entre um array de comandos e linhas para mapear quais comportamentos devem ser realizado com base nos comandos, e a partir dai, preenchido uma variavel interna com o resultado.
Não mantive o retorno do texto como retorno padrão, acabei modificando, devido a melhorar a manipulação do dado caso necessário, e no pior das hipoteses, printar o array de posições do output na tela não apresenta custo computacional considerado.

# Testes
Aplicação utilizou-se da biblioteca JEST para automação dos testes e facilitar a implementação de asserts.
Possui testes unitarios, realizados no comportamento do Rover para locomoção, ou seja, em funções relacionadas a andar e rotacionar.
Foi aplicado um teste basico que mapeia a entrada de texto conforme o teste pede.

!IMPORTANTE!
A leitura do arquivo passado no exercicio, input.js, se dá apenas quando executado na pasta raiz do projeto: node app.js, mantive a leitura sendo apenas para o app.js e no teste mantive sendo em string, ambos consumindo o controlador.
Fiz desta forma com o intuito de validar o desacoplamento da fonte de dados/input de informação, importando apenas os comandos e as sequencias conforme pede o teste.

# Como executar
Para executar o sistema, realizando a leitura e o caso do teste, vá a pasta raiz com o comando:
node app.js

Para executar os testes, utilizando JEST no caso, execute:
cd .\tests\
npm install
npm test