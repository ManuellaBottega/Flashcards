function buscar(prompt, menu, Baralhos, Flashcards) {
    console.log(`
        1. Buscar por pergunta
        2. Buscar por baralho
        `)

    let escolhaBuscar = prompt('Digite sua escolha: ')
    let voltarMenu
    
    switch (escolhaBuscar) {
        case '1':
            let buscaPergunta = prompt('Por qual pergunta deseja buscar? ')
            const perguntaEncontrada = Flashcards.filter(flashcard => 
                flashcard.pergunta.toLowerCase().includes(buscaPergunta.toLowerCase())
            )
                if (perguntaEncontrada.length > 0) {
                    perguntaEncontrada.forEach(flashcard => {
                    console.log(`ID: ${flashcard.id}, Pergunta: ${flashcard.pergunta}, Resposta: ${flashcard.resposta}`)
                    })
                    console.log ('Pressione enter para retornar ao menu.')
                    let voltarMenu = prompt ('')
                    if (voltarMenu == '') {
                        menu()
                    } 
                } else {
                    console.log("Nenhum flashcard encontrado com essa pergunta.")
                    console.log ('Pressione enter para retornar ao menu.')
                    let voltarMenu = prompt ('')
                    if (voltarMenu == '') {
                        menu()
                    } 
                }
            break
        case '2':
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
            break
        default:
            console.log('Esta opção é inválida, tente novamente!\n')
            listar(prompt, menu, Baralhos, Flashcards)
            break
    }
}

module.exports = buscar