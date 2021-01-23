// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.Commands.add('backgroundLogin', () => {
    // 1 - realizar uma requisição tipo post com email e senha
    //2 - capturar o token recebida da requisição
    //3 - usar o token recebido para salvar no local storage
    //hooks -> momentos antes e depois do teste
    // before -antes de todos | beforeEach - antes de cada teste
    // after  -depois de todos | afterEach - depois de cada teste
    cy.request({
        method: 'POST',
        url: `${Cypress.config().apiUrl}users/login`,
        body: {
            user: {
                email: "com@milho.com.us",
                password: "12345678"
            }
        }
    }).then((loginResponse) => {
        console.log(loginResponse.body)
        cy.log(loginResponse.body.user.token)

        cy.visit('editor/', {
            onBeforeLoad: (win) => {
                win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
            }
        })
    })
})

import routes from "./routes"

before(() =>{
    routes.init()
});
