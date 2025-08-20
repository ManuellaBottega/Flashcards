function listar(prompt, menu, Baralhos, Flashcards) {
    console.log(`
        1. listar Baralhos
        2. listar flashcards
        3. listar flashcards de um baralho especifico
        `)

    let escolhaListar = prompt('Digite sua escolha: ')
    let voltarMenu
    
    switch (escolhaListar) {
        case '1':
            if (Baralhos.length === 0) {
                console.log ('Nenhum baralho foi criado')
                console.log ('Pressione enter para retornar ao menu. ')
                voltarMenu = prompt ('')
                if (voltarMenu == '') {
                    menu()
                }
            } else {
                Baralhos.forEach( baralho => {
                console.log(`ID: ${baralho.id}, Nome: ${baralho.titulo}`)
                });
                console.log ('Pressione enter para retornar ao menu. ')
                voltarMenu = prompt ('')
                if (voltarMenu == '') {
                    menu()
                }
            }
            break
        case '2':
            if (Flashcards.length === 0) {
                console.log ('Nenhum flashcard foi criado')
                console.log ('Pressione enter para retornar ao menu. ')
                voltarMenu = prompt ('')
                if (voltarMenu == '') {
                    menu()
                }
            } else {
                Flashcards.forEach(flashcard => {
                    console.log(`ID: ${flashcard.id}, Pergunta: ${flashcard.pergunta}, Resposta: ${flashcard.resposta}`)
                })
                console.log ('Pressione enter para retornar ao menu.')
                voltarMenu = prompt ('')
                if (voltarMenu == '') {
                    menu()
                }
            }
            break
        case '3':
            Baralhos.forEach( baralho => {
                console.log(`ID: ${baralho.id}, Nome: ${baralho.titulo}`)
            });
            let escolhaBaralhos = prompt ("Digite o ID do baralho: ")

            const baralhoListar = Baralhos.find(baralho => baralho.id === parseInt(escolhaBaralhos, 10))

            if (baralhoListar) {
                const flashcardsDoBaralho = Flashcards.filter(flashcard => flashcard.idBaralho === escolhaBaralhos)
                        if (flashcardsDoBaralho) {
                            if (flashcardsDoBaralho.length > 0) {
                                console.log(`\nFlashcards do baralho "${baralhoListar.titulo}":`)
                                flashcardsDoBaralho.forEach(flashcard => {
                                    console.log(`ID: ${flashcard.id}, Pergunta: ${flashcard.pergunta}, Resposta: ${flashcard.resposta}`)
                                })
                            } else {
                                console.log("Este baralho não contém flashcards.")
                            }
                        }
            } else {
                console.log("ID inválido. tente novamente")
                listar(prompt, menu, Baralhos, Flashcards)
            }
            console.log ('Pressione enter para retornar ao menu. ')
            voltarMenu = prompt ('')
            if (voltarMenu == '') {
                menu()
            }
        default:
            console.log('Esta opção é inválida, tente novamente!\n')
            listar(prompt, menu, Baralhos, Flashcards)
            break
    }

}

module.exports = listar