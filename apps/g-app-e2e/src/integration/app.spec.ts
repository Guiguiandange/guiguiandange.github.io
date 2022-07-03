describe('g-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // cy.login('my-email@something.com', 'myPassword');
    cy.get('h1').contains('Welcome g-app');
  });
});
