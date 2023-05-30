describe('Display on page load', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('successfully loads the page', () => {
    cy.url().should('include', 'http://localhost:3000')
  });

})