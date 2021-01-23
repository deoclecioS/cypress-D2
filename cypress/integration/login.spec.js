/// <reference types="cypress" />

import login from "../support/pages/login"

context('Login',{ browser:'firefox'}, () => {
    it('realizar o login', () => {

        //Prepara
        login.acessarLogin()
        //ações
        login.preencherCamposLogin()
        //sumbeter
        login.clicarSubmeterLogin()
        //Verificar
        cy.get('[class="nav navbar-nav pull-xs-right"] li').should('contain', 'pipoca')
    });
});