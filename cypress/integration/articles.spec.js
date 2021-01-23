/// <reference types="cypress" />

import articles from "../support/pages/articles"
import routes from "../support/routes"

context('Publicação', () => {

    beforeEach(() => {
        
        cy.backgroundLogin()
    })

    it('Criar uma nova publicação', () => {
        articles.preencherFormulario()
        articles.clicarSubmeter()
        articles.verificarpublicacaoCriada()
    });
});