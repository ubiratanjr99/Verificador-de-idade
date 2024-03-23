function verificar() {
    //data e hoje serve pra pegar o ano atual.
    var data = new Date()
    var hoje = data.getFullYear()
    //variável para armazenar o valor digitado na caixa que pede o ano de nasc.
    var nasc = document.getElementById('iptano').value
    //Fórmula para calcular o ano de nascimento.
    var idade = hoje - nasc
    //Váriavel para armazenar a div "resultado" para depois mostrar o texto nela.
    var res = document.getElementById('resultado')
    //A referência aqui no caso é "name" não "id".
    var fsex = document.getElementsByName('radsex')
    //Váriável para armazenar o sexo com base em qual caixa foi marcada.
    var genero = ''
    //Vai pegar o elemento "img" atráves do id que eu criei manualmente para ela. Essa imagem vai ser alterada com base na idade e sexo selecionado.
    var imagem = document.getElementById('img1')

    //Esse "if" tem o objetivo de não aceitar valores iguais a zero ou maiores que o ano atual.
    if (nasc.length == 0 || Number(nasc.value) > hoje || nasc == 0) {
        alert('[ERRO]! Verifique os dados digitados e tente novamente.')
        //"fsex[0]" corresponde à 1° opção das caixas, no caso o masculino.
    } else if (fsex[0].checked) {
        //Neste momento a variável "genero" ganha um valor.
        genero = 'masculino'
        if (idade < 10) {
            res.innerHTML = `Detectamos uma criança de ${idade} anos de idade e do sexo ${genero}.`
            //Neste momento foi alterado a "src" da imagem para coincidir com a idade e sexo selecionados.
            imagem.src = 'crianca_homem.jpg'
        } else if (idade > 10 && idade < 18) {
            res.innerHTML = `Detectamos um adolescente de ${idade} anos de idade e do sexo ${genero}.`
            imagem.src = 'jovem_homem.jpg'
        } else if (idade >= 18 && idade <= 50) {
            res.innerHTML = `Detectamos uma pessoa adulta com ${idade} anos de idade e do sexo ${genero}.`
            imagem.src = 'adulto_homem.jpg'
        } else {
            res.innerHTML = `Detectamos um senhor de ${idade} anos de idade e do sexo ${genero}.`
            imagem.src = 'idoso_homem.jpg'
        }
        //O else seria o mesmo que "else if (fsex[1].checked), ou seja, feminino."
    } else {
        genero = 'feminino'
        if (idade < 10) {
            res.innerHTML = `Detectamos uma criança de ${idade} anos de idade e do sexo ${genero}.`
            imagem.src = 'crianca_mulher.jpg'
        } else if (idade > 10 && idade < 18) {
            res.innerHTML = `Detectamos uma adolescente de ${idade} anos de idade e do sexo ${genero}.`
            imagem.src = 'jovem_mulher.jpg'
        } else if (idade >= 18 && idade <= 50) {
            res.innerHTML = `Detectamos uma pessoa adulta com ${idade} anos de idade e do sexo ${genero}.`
            imagem.src = 'adulto_mulher.jpg'
        } else {
            res.innerHTML = `Detectamos uma senhora de ${idade} anos de idade e do sexo ${genero}.`
            imagem.src = 'idoso_mulher.jpg'
        }
    }
}