 //Variavel com escopo de bloco
 //let e const
 if(true){//escopo do bloco
    let blocoEscopo = "Eu fico só nesse if";
    let numero = 10;
 }
 //sout
 console.log("eu sou print");
 console.log(numero);

 //DECLARAÇÃO DE OBJETO
 const meuObjeto = {name:"Randerson"};//Criamos o objeto
 meuObjeto.name = "Bora codificar!";//Atribuição de valor
 //Estamos modificando a propiedade de um objeto 
 //E não a constante em si

 //Funções nas antiga
 function hello(name){
    return "Olá," + name + "!";
 }

 //Funções atuais Arrow Function
 const hello = nome => "Olá," + nome + "!";
 //Função sem parametro
 const hellow = () => "Olá," + nome + "!";

 //Exemplo
 
 //Desestruturando objetos 
 const pessoa = {
    firstName: 'Randerson',
    lastName: 'Silva',
    age:19
 };
 //Declarar que constantes firtName e age são = pessoa
 const {firstName, age} = pessoa;
 console.log(firstName);//Randerson
 console.log(age);//19

 //Criar um Array
 const colors = ['vermelho','azul','verde','amarelo'];
 //atribuir os valores quando array for usa []
 const[firtsColor,secondColor] = colors;
 console.log(firtsColor);//vermelho
 console.log(secondColor);//azul
 //e se quisesse pegar a terceira cor?
 const [ , ,thirdColor] = colors;
 console.log(thirdColor);//verde

 //Destruturando as funções 
 function displayInfo ({firstName,age}){
    //quando usamos `` conseguimos usar texto e variavel
 console.log(`${firstName} tem ${age } anos.`);
 }
 const pessoaInfo = {
    firstName: 'Maria',
    lastName: 'Fernandes',
    age: 25
 }
 displayInfo(pessoaInfo);//Maria tem 25 anos                              

 //componente funcional em react 
 function Welcome({firstName,age}){
    return
    <div>
        Bem Vindo, (firstName), você tem {age} anos.
    </div>
 }

 //Promisses - uma promessa a ser cumprida
 //Estados das prmisses
 // Pending (Oendente) é o estado inicial 
 // Fullfilled (Realizada) operção concluida 
 // Rejected (Rejeitada) operação falhou
 // async/await
 async function fetchData(){
    try{
        let response = await fetch("https://sc.senai.br/alunos/1");
        let data = await response.json();
        console,log(data);
    }catch(errpr){
        console.log("Houve um erro.", error)
    }
 }
 fetchData();

 //1 - declare 2 variaveis: nome com valor "react" e versao com valor "1.0.0"
 //em seguida, exiba uma mensagem que diz `estudando ${nome} na versao${versao}

 //2- crie um arrow function que receba dois numeros e retorne a soma de uma delas

 const nome = "react"
 const versao = "1.0.0"
 
 console.log(`estudando ${nome} na versao${versao}`)

 const num1= 6
 const num2= 5
 
 const soma = (num1 + num2)
 console.log(soma)