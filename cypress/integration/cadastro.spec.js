/// <reference types="cypress" />

import cadastro from "../support/pages/cadastro"

context('cadastro', () => {
    it('cadastrar um novo usuário', () => {
        cy.visit('register')
        cadastro.preencherCadastro()
        cadastro.clicarCadastrar()
        cadastro.verificacadastro()
    });
});