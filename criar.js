function criar(prompt, menu, Baralhos, Flashcards, escolha) {
    if (escolha === '1') {
        let titulo = prompt ("Digite o nome do baralho: ")
        if (titulo.trim() === '') {
            console.log('Erro! Nome invalido.')
            criar(prompt, menu, Baralhos, Flashcards, escolha)
        } else {
            const baralho = {
                titulo,
                id: Date.now()
            }

            Baralhos.push(baralho)
            console.log ('Pressione enter para retornar ao menu, ou s para criar outro baralho. ')
            let voltarMenu = prompt ('')
            if (voltarMenu == '') {
                menu()
            } else if (voltarMenu.toLowerCase() == 's'){
                criar(prompt, menu, Baralhos, Flashcards, escolha)
            }
        }

    } else {
        Baralhos.forEach(baralho => {
        console.log(`ID: ${baralho.id}, Nome: ${baralho.titulo}`)
        })

        let escolhaBaralho = prompt ("Digite o ID do baralho no qual deseja adicionar seu flashcard: ")
        Baralhos.forEach(baralho => {
            if (baralho.id === parseInt(escolhaBaralho, 10)) {
                let pergunta = prompt ("Digite a pergunta do seu flashcard: ")
                if (pergunta.trim() === '') {
                    console.log('Erro! Pergunta invalida.')
                    criar(prompt, menu, Baralhos, Flashcards, escolha)
                }
                let resposta = prompt ("Digite a resposta do seu flashcard: ")
                if (resposta.trim() === '') {
                    console.log('Erro! Resposta invalida.')
                    criar(prompt, menu, Baralhos, Flashcards, escolha)
                }

                const flashcard = {
                    id: Date.now(),
                    pergunta,
                    resposta,
                    idBaralho: escolhaBaralho
                }
                Flashcards.push(flashcard)
                console.log ('Pressione enter para retornar ao menu, ou s para criar outro flashcard. ')
                let voltarMenu = prompt ('')
                if (voltarMenu == '') {
                    menu()
                } else if (voltarMenu.toLowerCase() == 's'){
                    criar(prompt, menu, Baralhos, Flashcards, escolha)
                }
            }

            })
                console.log("ID invalido!")
                criar(prompt, menu, Baralhos, Flashcards, escolha)
}
}

module.exports = criar