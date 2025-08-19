function listar(prompt, menu, Baralhos, Flashcards) {
    console.log(`
        1. listar Baralhos
        2. listar flashcards
        3. listar flashcards de um baralho especifico
        `)

    let escolhaListar = prompt('Digite sua escolha: ')

    switch (escolhaListar) {
        case '1':
            Baralhos.forEach( baralho => {
            console.log(`ID: ${baralho.id}, Nome: ${baralho.titulo}`)
            });
            break
        case '2':
            Flashcards.forEach(flashcard => {
                console.log(`ID: ${flashcard.id}, Pergunta: ${flashcard.pergunta}, Resposta: ${flashcard.resposta}`)
            })
            break
        case '3':
            Baralhos.forEach( baralho => {
                console.log(`ID: ${baralho.id}, Nome: ${baralho.titulo}`)
                });
            let escolhaBaralhos = prompt ("Digite o ID do baralho: ")
            Baralhos.forEach(baralho => {
                if (baralho.id === parseInt(escolhaBaralhos, 10)) {
                    Flashcards.forEach(flashcard => {
                        if (flashcard.idBaralho === parseInt(escolhaBaralhos, 10))
                            console.log(`ID: ${flashcard.id}, Pergunta: ${flashcard.pergunta}, Resposta: ${flashcard.resposta}`)
                    })
                }
            })
            break
        default:
            console.log('Esta opção é inválida, tente novamente!\n')
            listar(prompt, menu, Baralhos, Flashcards)
            break
    }

}

module.exports = listar