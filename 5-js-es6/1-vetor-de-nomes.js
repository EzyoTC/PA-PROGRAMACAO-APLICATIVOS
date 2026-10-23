//fazendo uma desgraça ai

const listanomes = ["Marta", "Jose", "Nigger"]

console.log(`\n Exibindo todos os elementos do vetor: `)
console.log(listanomes)

console.log(`\n Exibindo primeiro elemento do vetor: `)
console.log(listanomes[0])

console.log(`\n Exibindo um elemento do vetor: `)
listanomes.push('Marilia')
console.log(listanomes)

//foda-se

console.log(`\n Removendo um elemento do vetor: `)
listanomes.shift()
console.log(listanomes)

console.log(`\n Removendo um elemento especifico do vetor: `)
listanomes.splice(2, 1)
console.log(listanomes)

console.log(`\n Removendo o ultimo elemento do vetor: `)
listanomes.pop()
console.log(listanomes)