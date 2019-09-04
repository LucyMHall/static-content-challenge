describe('visitingValves', function () {
  it('returns a 200 HTTP status code when a request is made', function() {
    cy.request('http://localhost:5000/valves').its('status').should('equal', 200);
  });

  it('displays the contents of the template file e.g. the title', function() {
    cy.visit('http://localhost:5000/jobs')
    cy.get('title').should('have.text', 'Welcome to Acme');
  });

  it('displays the header of correct markdown file in the body', function() {
    cy.visit('http://localhost:5000/valves');
    const mdHeaderForValves = 'Valves'
    cy.get('h1').contains(mdHeaderForValves)
  });

  it('displays the paragraph of correct markdown file in the body', function() {
    cy.visit('http://localhost:5000/valves');
    const mdParaForValves = "Acme Co. valves are amongst the highest quality in the industry. Whether it's for industrial, commercial, medical or space exploration, you can always count on an Acme Co. valve."
    cy.get('p').contains(mdParaForValves)
  });
});
