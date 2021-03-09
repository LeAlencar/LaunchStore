// Sem realizar nenhum tratamento, 
// é fácil perceber que a ordem dos valores mostrados no console ao chamar a função printAll() 
// é aleatória e não respeita a ordem de chamada das funções. Portanto, para resolver esse problema, 
// trate o assincronismo do setTimeout utilizando callback, Promise e async/await.
// (Dica: no tratamento com Promise, faça o retorno de uma nova Promise e utilize o parâmetro resolve). 

// Callback PIOR MÉTODO CRIADO
function printDoubleCallback(number,callback){
    setTimeout(
      () => {
          return callback(number * 2)
      }, 
      Math.floor(Math.random() * 100) + 1
    )

  }

  function printAllCallback(){
    printDoubleCallback(5,function(result){
        console.log(result + " vaiiii")
        printDoubleCallback(2, function(result){
            console.log(result + " vaiiii")
            printDoubleCallback(10, function(result){
                console.log(result + " vaiiii")
                printDoubleCallback(22, function(result){
                    console.log(result + " vaiiii")
                    printDoubleCallback(89, function(result){
                        console.log(result + " vaiiii")
                        pri'ntDoubleCallback(3, function(result){
                            console.log(result + " vaiiii")
                        })
                    })
                })
            })
        })
    })
  }
// printAllCallback()

// Async / Await
function printDouble(number){
    return new Promise((resolve)=>{
        setTimeout(
        () => resolve(console.log(number * 2)),
        Math.floor(Math.random() * 100) + 1
        )
    })
}

async function printAll(){
    await printDouble(5)
    await printDouble(10)
    await printDouble(22)
    await printDouble(1)
    await printDouble(89)
}
printAll()


/* PROMISE FUNCTION ONLY

function printAll(){
    printDouble(5)
    .then(()=>{
        return printDouble(10)
    }).then(()=>{
        return printDouble(22)
    }).then(()=>{
        return printDouble(1)
    }).then(()=>{
        return printDouble(89)
    }).then()
}
*/

// Promise 
function doubleSum(number, sum){
    return new Promise(resolve => {
        setTimeout(
          () => {
            resolve((number * 2) + sum)
          }, 1000)

    })
}

function printSum(){

    doubleSum(5,10)
    .then((result)=>{
        console.log(result)
        return doubleSum(10,result)
    }).then((result)=>{
        console.log(result)
        return doubleSum(22,result)
    }).then((result)=>{
        console.log(result)
        return doubleSum(1,result)
    }).then((result)=>{
        console.log(result)
        return doubleSum(89, result)
    }).then((result)=>{
        console.log(result)
    })
}
printSum()


