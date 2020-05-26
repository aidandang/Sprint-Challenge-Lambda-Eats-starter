/* eslint-disable no-undef */
describe('My First Test', function() {
  beforeEach(function () {
    cy.visit('http://localhost:3000/pizza')
  })
  it('Visit User Onboarding', function() {
    cy
      .get('#name')
      .type('Aidan Dang')
      .should('have.value', 'Aidan Dang')
    cy
      .get('#size')
      .select('Small Pizza: 8-10 inches with 6 slices')
      .should('have.value', 'sm')
    cy
      .get('#pepperoni')
      .check()
      .should('be.checked')
    cy
      .get('#saugage')
      .check()
      .should('be.checked')
    cy
      .get('#dicedtomatos')
      .check()
      .should('be.checked')
    cy
      .get('#blackolives')
      .check()
      .should('be.checked')
    cy
      .get('[data-cy=submit]')
      .click()
      .should('not.be.disabled')
  })
})