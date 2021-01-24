/// <reference types="cypress" />

import login from "../support/pages/login"


context('Login', () => {
    it('realizar o login', () => {

        //Prepara
        login.acessarLogin()
        //ações
        login.preencherCamposLogin()
        //sumbeter
        login.clicarSubmeterLogin()
        //Verificar
        login.verificaSucessoLogin()
    });
});