/// <reference types="cypress" />
const cards = [
  { cardNo: '9756727274784834', cvv: '222', cardHolder: 'Abolarin Olanrewaju', expires: '10/22', id: 'xs39Ydh' },
  {
    cardNo: '9759300033334883',
    cvv: '333',
    cardHolder: 'Adekunle Chukwuma Ciroma-Bala-Hassan',
    expires: '11/23',
    id: 'dfs7fLsy',
  },
]
context('Card Visibility toggling', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('best practices - selecting elements', () => {
    cy.get('article.card__wrapper').each(($el, index) => {
      cy.wrap($el).within(() => {
        cy.get('[aria-label="card number"]')
          .should('have.attr', 'aria-hidden', 'true')
          .and('not.contain.text', cards[index].cardNo)
          .and('contain.text', cards[index].cardNo.slice(cards[index].cardNo.length - 4))

        cy.get('[aria-label="card cvv"]')
          .should('have.attr', 'aria-hidden', 'true')
          .and('not.contain.text', cards[index].cvv)
          .and('contain.text', '')

        cy.get('button[aria-label="toggle card number"]').click()

        cy.get('[aria-label="card number"]')
          .should('have.attr', 'aria-hidden', 'false')
          .and('contain.text', cards[index].cardNo)

        cy.get('[aria-label="card cvv"]')
          .should('have.attr', 'aria-hidden', 'false')
          .and('contain.text', cards[index].cvv)
      })
    })
  })
})
