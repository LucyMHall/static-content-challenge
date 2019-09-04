describe('visitingJobsPage', function () {

  it('returns a 200 HTTP status code when a request is made', function() {
    cy.request('http://localhost:5000/jobs').its('status').should('equal', 200);
  });

  it('displays the contents of the template file e.g. the title', function() {
    cy.visit('http://localhost:5000/jobs')
    cy.get('title').should('have.text', 'Welcome to Acme');
  });

  it('displays the header of correct markdown file in the body', function() {
    cy.visit('http://localhost:5000/jobs');
    const mdHeaderForValves = 'Jobs at Acme Co.'
    cy.get('h1').contains(mdHeaderForValves)
  });

  it('displays the paragraph of correct markdown file in the body', function() {
    cy.visit('http://localhost:5000/jobs');
    const mdPara1Jobs = "Acme Co. is often seeking candidates in the areas of marketing, finance, customer support and sales. If you are an enthusiastic go-getter, you don't need to look any further for your next step up the corporate career ladder.";
    const mdPara2Jobs = "Send us an email at careers@acme.com for more information."
    cy.get('p').first().contains(mdPara1Jobs);
    cy.get('p').last().contains(mdPara2Jobs);
  });

});
