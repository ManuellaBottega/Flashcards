function atualizar(prompt, menu, Baralhos, Flashcards, escolha) {
    let escolhaAtualizar
    if (escolha === '4') {
        Baralhos.forEach( baralho => {
            console.log(`ID: ${baralho.id}, Nome: ${baralho.titulo}`)
        });
        escolhaAtualizar = prompt ("Digite o ID do baralho que deseja atualizar: ")

        const indexBaralho = Baralhos.findIndex(baralho => baralho.id === parseInt(escolhaAtualizar, 10))
        if (indexBaralho !== -1) {
            let novoTitulo = prompt ("Digite o nome do baralho: ")
            if (novoTitulo.trim() === '') {
                console.log('Erro! Nome invalido.')
                atualizar(prompt, menu, Baralhos, Flashcards, escolha)
            } else {
                Baralhos[indexBaralho].titulo = novoTitulo
                console.log('Baralho atualizado com sucesso!')
                console.log ('Pressione enter para retornar ao menu, ou s para atualizar outro baralho. ')
                let voltarMenu = prompt ('')
                if (voltarMenu == '') {
                    menu()
                } else if (voltarMenu.toLowerCase() == 's'){
                    atualizar(prompt, menu, Baralhos, Flashcards, escolha)
                }
        }
        } else {
            console.log("ID inválido! Nenhum baralho encontrado com este ID.")
            atualizar(prompt, menu, Baralhos, Flashcards, escolha)
        }
    } else {
        Flashcards.forEach(flashcard => {
            console.log(`ID: ${flashcard.id}, Pergunta: ${flashcard.pergunta}, Resposta: ${flashcard.resposta}`)
        })
        escolhaAtualizar = prompt ("Digite o ID do flashcard que deseja atualizar: ")

        const indexFlashcard = Flashcards.findIndex(flashcard => flashcard.id === parseInt(escolhaAtualizar, 10))
        if (indexFlashcard !== -1) {
            let novaPergunta = prompt ("Digite a pergunta do flashcard: ")
            if (novaPergunta.trim() === '') {
                console.log('Erro! Pergunta invalida.')
                atualizar(prompt, menu, Baralhos, Flashcards, escolha)
            } else {
                let novaResposta = prompt ("Digite a resposta do flashcard: ")
                if (novaResposta.trim() === '') {
                    console.log('Erro! Resposta invalida.')
                    atualizar(prompt, menu, Baralhos, Flashcards, escolha)
                } else {
                    Flashcards[indexFlashcard].pergunta = novaPergunta
                    Flashcards[indexFlashcard].resposta = novaResposta
                    console.log('Flashcard atualizado com sucesso!')
                    console.log ('Pressione enter para retornar ao menu, ou s para atualizar outro flashcard. ')
                    let voltarMenu = prompt ('')
                    if (voltarMenu == '') {
                        menu()
                    } else if (voltarMenu.toLowerCase() == 's'){
                        atualizar(prompt, menu, Baralhos, Flashcards, escolha)
                    }
                }
        }
        } else {
            console.log("ID inválido! Nenhum flashcard encontrado com este ID.")
            atualizar(prompt, menu, Baralhos, Flashcards, escolha)
        }
    }
}
module.exports = atualizar