# RamUsage - Monitor de uso de memória RAM.

## Script em Node.js para monitoramento de memória RAM.
Começa importando módulo "os" que fornece várias funções para interagir com o sistema operacional.
É definido um intervalo usando a função "setInterval", que executa o bloco de código dentro do intervalo especificado (1000 milissegundos, ou 1 segundo, no caso).
Dentro do intervalo, algumas informações do sistema são obtidas utilizando a desestruturação do objeto "os". As informações são: arquitetura (arch), plataforma (platform), memória RAM total (totalmem) e memória RAM livre (freemem).
As informações de memória RAM são convertidas para MB dividindo por 1024 duas vezes (para converter bytes para MB).
Calcula-se o percentual de uso da memória RAM utilizando a fórmula: (memória livre / memória total) * 100.
Todas as informações coletadas são colocadas em um objeto status.
O console é limpo usando "console.clear()" para que a tabela seja exibida em tempo real no terminal.
Por fim, a tabela de informações sobre o uso da memória RAM é exibida usando "console.table(status)".
## Por exemplo:
![image](https://user-images.githubusercontent.com/85138285/224115842-991a8912-74e5-4e61-838f-d429198ef230.png)

## Como usar

Certifique-se de ter o Node.js instalado em seu sistema, no seu terminal execute o comando: 
`` node -v`` 

1. Clone este repositório:

```bash
git clone https://github.com/romulotgh21/RamUsage.git
cd RamUsage
````

Instale as dependências:
```
 npm install
 ```
Execute o script para monitorar a memória RAM:

```
node ramusage.js
 ```
Isso iniciará o monitoramento da memória RAM e exibirá os resultados no terminal.

# Comandos disponíveis
```` npm install```` : Instala as dependências do projeto. <br>
```node ramusage.js```: Executa o script de monitoramento de memória RAM.

