/// <reference types="cypress" />

const faker = require('faker');
const elementos = require('./elementos').ELEMENTOS

import Routes from '../../routes'

class Articles {

    preencherFormulario() {
        cy.get(elementos.campotitulo).type(faker.name.title())
        cy.get(elementos.campodescricao).type(faker.company.companyName())
        cy.get(elementos.textoarea).type(faker.lorem.paragraph())
        cy.get(elementos.campotag).type(faker.company.companySuffix())
    }
    clicarSubmeter() {
        cy.get(elementos.botaocriar).click()
    }

    verificarpublicacaoCriada() {
        cy.wait(`@${Routes.as.PostArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.GetArticlesTitle}`).then((getArticlesResponse) => {
            expect(getArticlesResponse.status).to.eq(200)
        })
        cy.wait(`@${Routes.as.GetArticlesComments}`).then((getArticlesComments) => {
            expect(getArticlesComments.status).to.eq(200)
        })
    }
}

export default new Articles()