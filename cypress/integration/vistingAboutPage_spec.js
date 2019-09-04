describe('visitingAboutPage', function () {
  it('returns a 200 HTTP status code when a request is made', function() {
    cy.request('http://localhost:5000/about-page').its('status').should('equal', 200);
  });

  it('displays the contents of the template file e.g. the title', function() {
    cy.visit('http://localhost:5000/jobs')
    cy.get('title').should('have.text', 'Welcome to Acme');
  });
  
  it('displays the placeholder text The About Page when about page is visited', function() {
    cy.visit('http://localhost:5000/about-page');
    cy.get('h1').should('have.text', 'The About Page');
  });
});
