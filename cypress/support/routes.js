class Routes{

    as = {
        PostArticles : 'PostArticles',
        GetArticlesTitle: 'GetArticlesTitle',
        GetArticlesComments:'GetArticlesComments',
        PostUsers:'Postusuario',
        Gettags:'Gettags',
        PostLogin:'PostLogin'
    }

    init(){
        cy.server()

        //artigos
        cy.route('POST', '**/api/articles').as(this.as.PostArticles)
        cy.route('GET', '**/api/articles/**').as(this.as.GetArticlesTitle)
        cy.route('GET', '**/api/articles/**/comments').as(this.as.GetArticlesComments)

        //cadastro
        cy.route('POST','**/api/users').as(this.as.PostUsers)
        cy.route('GET','**/api/tags').as(this.as.Gettags)

        //login
        cy.route('POST','**/api/users/login').as(this.as.PostLogin)
    }

}
export default new Routes();