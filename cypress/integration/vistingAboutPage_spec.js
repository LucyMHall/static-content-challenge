describe('visitingAboutPage', function () {
  it('displays the placeholder text The About Page when about page is visited', function() {
    cy.visit('http://localhost:5000/about-page');
    cy.get('h1').should('have.text', 'The About Page');
  });
});
