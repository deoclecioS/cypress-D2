
const elementos = require('./elementos').ELEMENTOS

class Login {

    acessarLogin() {
        cy.visit('login')
    }

    preencherCamposLogin() {
        cy.get(elementos.campoEmail).type(Cypress.config().user.email)
        cy.get(elementos.campoSenha).type(Cypress.config().user.senha)
    }

    clicarSubmeterLogin() {
        cy.get(elementos.botaoLogin).click()
    }
}

export default new Login()