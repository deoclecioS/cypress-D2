
const nomelogin = require('faker');

const elementos = require('./elementos').ELEMENTOS


class Cadastro{

    preencherCadastro(){
        cy.get(elementos.nomeNovoUsuario).type(nomelogin.name.firstName())
        cy.get(elementos.emailNovoUsuario).type(nomelogin.internet.exampleEmail())
        cy.get(elementos.senhaNovoUsuario).type('12345678')
    }
    clicarCadastrar(){
        cy.get(elementos.botaoCadastroNovoUsuario).click()
    }
   
}

export default new Cadastro()