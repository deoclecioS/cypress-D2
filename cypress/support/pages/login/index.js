
const elementos = require('./elementos').ELEMENTOS
import Routes from '../../routes'

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

    verificaSucessoLogin(){
        cy.wait(`@${Routes.as.PostLogin}`).then((PostLoginResponse) => {
            expect(PostLoginResponse.status).to.eq(200)
        })
    }
}

export default new Login()