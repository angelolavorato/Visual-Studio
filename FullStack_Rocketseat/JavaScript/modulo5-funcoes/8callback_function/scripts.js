//CALLBACK FUNCTION: é uma função passada para outra como um argumento.

function execute(taskName, callback) {
  //Nesse momento estamos passando um parametro para a função como texto;
  console.log('Iniciando a tarefa:', taskName)

  callback() //Aqui estamos chamando a função callback, ou seja, a função de retorno, ou seja, ela é chamada depois que a função execute é executada.
}
function callback(params) {
  console.log('Tarefa concluída..')
}

execute('Download do arquivo...', callback) //Aqui estamos passando a função como argumento, ou seja, a função callback é a função de retorno, ou seja, ela é chamada depois que a função execute é executada.

//Outra forma de fazer: Criando a função no próprio parâmetro.
execute('Upload do arquivo...', function () {
  console.log('Função de callback executada de forma anônima..')
})

//Utilizando arrow function:
execute('Excluindo arquivo...', () => {
  console.log('Arquivo excluído..')
})

//Por fim, podemos fazer de outra forma
execute('Salvando dados...', () => console.log('Arquivo salvo..'))
