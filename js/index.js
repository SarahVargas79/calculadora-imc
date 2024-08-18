var calcular = document.getElementById("calcular"); //getElementById - Pega elemento pelo id

//addEventListener - Adiciona um evento (click)
calcular.addEventListener("click", () => {

    //obter altura
    /* 
    value - Valor que vai ser digitado pelo usuário na caixa de texto
    document.getElementById("altura") - Caixa de Texto
    + - Valor não vai ser por padrão texto
    */
    var altura = +document.getElementById("altura").value;

    //obter peso
    var peso = +document.getElementById("peso").value;

    //calcular o IMC
    var imc = peso / (altura * altura);


    //Encontrar a situação na tabela. Se o resultado for:
    var situacao = "";

    if (imc < 17)
        situacao = "Muito abaixo do peso";
    else if (imc >=17 && imc <= 18.49)
        situacao = "Abaixo do Peso";
    else if (imc >= 18.5 && imc <= 24.99)
        situacao = "Peso normal";
    else if (imc >= 25 && imc <= 29.99)
        situacao = "Acima do peso";
    else if (imc >= 30 && imc <= 34.99)
        situacao = "Obesidade I";
    else if (imc >= 35 && imc <= 39.99)
        situacao = "Obesidade II (severa)";
    else 
        situacao = "Obesidade III (morbida)";

    alert(situacao);
});
