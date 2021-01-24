/// <reference types="cypress" />
const nomelogin = require('faker');

const elementos = require('./elementos').ELEMENTOS
import Routes from '../../routes'


class Cadastro {

    preencherCadastro() {
        cy.get(elementos.nomeNovoUsuario).type(nomelogin.name.firstName())
        cy.get(elementos.emailNovoUsuario).type(nomelogin.internet.exampleEmail())
        cy.get(elementos.senhaNovoUsuario).type('12345678')
    }
    clicarCadastrar() {
        cy.get(elementos.botaoCadastroNovoUsuario).click()
    }

    verificacadastro() {
        cy.wait(`@${Routes.as.GetArticlesTitle}`).then((getArticlesResponse) => {
            expect(getArticlesResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.PostUsers}`).then((postUsuarioResponse) => {
            expect(postUsuarioResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.Gettags}`).then((getTags) => {
            expect(getTags.status).to.eq(200)
        })

    }
}
export default new Cadastro()