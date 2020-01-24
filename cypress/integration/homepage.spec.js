describe('TGAM home page', function() {

  it('Visits all the links in the home page', function() {
    cy.visit('https://www.theglobeandmail.com').get('.c-card__grid').should('have.class','c-card__link').each(function ($a) {
       
        const href = $a.prop('href')

        cy.visit(href)
	cy.visit('https://www.theglobeandmail.com')
    })
  })
})
