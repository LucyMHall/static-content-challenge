describe('visitingAboutPage', function () {
  it('returns a 200 HTTP status code when a request is made', function() {
    cy.request('http://localhost:5000/about-page').its('status').should('equal', 200);
  });

  it('displays the contents of the template file e.g. the title', function() {
    cy.visit('http://localhost:5000/about-page')
    cy.get('title').should('have.text', 'Welcome to Acme');
  });

  it('displays the header of correct markdown file in the body', function() {
    cy.visit('http://localhost:5000/about-page');
    const mdHeaderForAboutPage = 'This is the About page'
    cy.get('h1').contains(mdHeaderForAboutPage);
  });

  it('displays the paragraph of correct markdown file in the body', function() {
    cy.visit('http://localhost:5000/about-page');
    const mdPara1AboutPage = "Acme Co. is a reputable maker of widgets and is an international brand.";
    const mdPara2AboutPage = "Thank you for your interest in our services. Please contact us at enquiries@acme.com."
    cy.get('p').first().contains(mdPara1AboutPage);
    cy.get('p').last().contains(mdPara2AboutPage);
  });

});
