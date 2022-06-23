const json = require ('./dados.json');
const data = JSON.stringify(json);
console.log(data);

//soma total do faturamento
var soma = json.reduce(function(sum, data) {
    return sum + data.valor;
  }, 0);
  console.log("Soma do Faturamento: ",soma);


// dia com maior faturamento
const maximo = json.reduce(function(prev, current) {
    return (prev.valor > current.valor) ? prev : current
})
console.log("O dia com maior faturamento: ")
console.log(maximo) 


//dia com menor faturamento

const MaioresQueZero = json.filter((vendas)=>vendas.valor> 0);

const minimo = MaioresQueZero.reduce(function(prev, current) {  
       return (prev.valor < current.valor) ? prev : current 
})
console.log("O dia com menor faturamento: ")
console.log(minimo) 

//media de faturamento
var media = soma/30;
console.log("Média: ", media);


// dias maiores que a media
const MaioresQueMedia = json.filter((vendas)=>vendas.valor> media);
console.log("Dias maiores que a Média: ")
console.log(MaioresQueMedia);