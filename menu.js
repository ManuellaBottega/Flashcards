const prompt = require ('prompt-sync')()

const criar = require ('./criar')
const listar = require ('./listar')
const atualizar = require ('./atualizar')
const buscar = require ('./buscar')
const excluir = require ('./excluir')

let Baralhos = []
let Flashcards = []

function menu () {
    console.log(`
        ----- URNA -----
        1. Criar Baralho.
        2. Criar Flashcard.
        3. Listar Baralhos e Flashcards.
        4. Atualizar informações de Baralhos.
        5. Atualizar informações de Flashcard.
        6. Buscar Flashcards.
        7. Excluir Baralhos.
        8. Excluir Flashcards.
        9. Sair.
    `)

    let escolha = prompt('Digite a opção escolhida: ')
    switch (escolha) {
        case '1':
            criar(prompt, menu, Baralhos, Flashcards, escolha)
            break
        case '2':
            criar(prompt, menu, Baralhos, Flashcards, escolha)
            break
        case '3':
            listar(prompt, menu, Baralhos, Flashcards)
            break
        case '4':
            atualizar(prompt, menu, Baralhos, Flashcards, escolha)
            break
        case '5':
            atualizar(prompt, menu, Baralhos, Flashcards, escolha)
            break
        case '6':
            buscar(prompt, menu, Baralhos, Flashcards)
            break
        case '7':
            excluir(prompt, menu, Baralhos, Flashcards, escolha)
            break
        case '8':
            excluir(prompt, menu, Baralhos, Flashcards, escolha)
            break
        case '9':
            console.log('Obrigado por usar nosso sistema de consultas. Até mais!')
            break
        default:
            console.log('Esta opção é inválida, tente novamente!\n')
            menu()
    }
}

menu()