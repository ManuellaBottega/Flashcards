function excluir(prompt, menu, Baralhos, Flashcards, escolha) {
    let escolhaExcluir
    let certeza

    if (escolha === '7') {
        Baralhos.forEach( baralho => {
            console.log(`ID: ${baralho.id}, Nome: ${baralho.titulo}`)
        });
        escolhaExcluir = prompt ("Digite o ID do baralho que deseja excluir: ")

        const indexBaralho = Baralhos.findIndex(baralho => baralho.id === parseInt(escolhaExcluir, 10))
        if (indexBaralho !== -1) {
            certeza = prompt(`Tem certeza de que quer excluir este baralho? (s/n)`)
            if (certeza.toLowerCase() === 's') {
                const [removido] = Baralhos.splice(indexBaralho, 1)
                const idParaExcluir = parseInt(escolhaExcluir, 10)
                const flashcardsRestantes = Flashcards.filter(flashcard => flashcard.idBaralho !== idParaExcluir.toString())
                Flashcards.length = 0
                Flashcards.push(...flashcardsRestantes)
                console.log('Baralho exluido com sucesso.')
                console.log ('Pressione enter para retornar ao menu, ou s para excluir outro baralho. ')
                let voltarMenu = prompt ('')
                if (voltarMenu == '') {
                    menu()
                } else if (voltarMenu.toLowerCase() == 's'){
                    excluir(prompt, menu, Baralhos, Flashcards, escolha)
                }
            } else {
                console.log('Operação cancelada.')
                console.log ('Pressione enter para retornar ao menu, ou s para excluir outro baralho. ')
                let voltarMenu = prompt ('')
                if (voltarMenu == '') {
                    menu()
                } else if (voltarMenu.toLowerCase() == 's'){
                    excluir(prompt, menu, Baralhos, Flashcards, escolha)
                }
            }
        } else {
            console.log("ID inválido! Nenhum baralho encontrado com este ID.")
            excluir(prompt, menu, Baralhos, Flashcards, escolha)
        }
    } else {
        Flashcards.forEach(flashcard => {
            console.log(`ID: ${flashcard.id}, Pergunta: ${flashcard.pergunta}, Resposta: ${flashcard.resposta}`)
        })
        escolhaExcluir = prompt ("Digite o ID do flashcard que deseja excluir: ")

        const indexFlashcard = Flashcards.findIndex(flashcard => flashcard.id === parseInt(escolhaExcluir, 10))
        if (indexFlashcard !== -1) {
            certeza = prompt(`Tem certeza de que quer excluir este flashcard? (s/n)`)
            if (certeza.toLowerCase() === 's') {
                const [flashcardRemovido] = Flashcards.splice(indexFlashcard, 1)
                console.log('Flashcard exluido com sucesso.')
                console.log ('Pressione enter para retornar ao menu, ou s para excluir outro flashcard. ')
                let voltarMenu = prompt ('')
                if (voltarMenu == '') {
                    menu()
                } else if (voltarMenu.toLowerCase() == 's'){
                    excluir(prompt, menu, Baralhos, Flashcards, escolha)
                }
            } else {
                console.log('Operação cancelada.')
                console.log ('Pressione enter para retornar ao menu, ou s para excluir outro flashcard. ')
                let voltarMenu = prompt ('')
                if (voltarMenu == '') {
                    menu()
                } else if (voltarMenu.toLowerCase() == 's'){
                    excluir(prompt, menu, Baralhos, Flashcards, escolha)
                }
            }
        } else {
            console.log("ID inválido! Nenhum baralho encontrado com este ID.")
            excluir(prompt, menu, Baralhos, Flashcards, escolha)
        }
    }
}
module.exports = excluir