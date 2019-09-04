describe('visitingValves', function () {
  it('returns a 200 HTTP status code when a request is made', function() {
    cy.request('http://localhost:5000/valves').its('status').should('equal', 200);
  });
  it('displays the placeholder text The Valves Page when about page is visited', function() {
    cy.visit('http://localhost:5000/valves');
    cy.get('h1').should('have.text', 'The Valves Page');
  });
});
