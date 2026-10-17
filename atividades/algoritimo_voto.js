const idade = Number(prompt("Digite sua idade: "))

if (isNaN(idade) || idade < 0) {
    console.log("Digite uma idade válida!")
} else if (idade < 16) {
    console.log("Você não pode votar!")
} else if (idade < 18 || idade >= 70) {
    console.log("O voto é facultativo!")
} else {
   console.log("O voto é obrigatório!")
}