class Routes{

    as = {
        PostArticles : 'PostArticles',
        GetArticlesTitle: 'GetArticlesTitle',
        GetArticlesComments:'GetArticlesComments'
    }

    init(){
        cy.server()
        cy.route('POST', '**/api/articles').as(this.as.PostArticles)
        cy.route('GET', '**/api/articles/**').as(this.as.GetArticlesTitle)
        cy.route('GET', '**/api/articles/**/comments').as(this.as.GetArticlesComments)
    }
}
export default new Routes();