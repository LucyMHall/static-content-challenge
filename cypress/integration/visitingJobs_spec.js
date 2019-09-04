describe('visitingJobsPage', function () {
  it('returns a 200 HTTP status code when a request is made', function() {
    cy.request('http://localhost:5000/jobs').its('status').should('equal', 200);
  });
  it('displays the placeholder text The Jobs Page when jobs is visited', function() {
    cy.visit('http://localhost:5000/jobs')
    cy.get('h1').should('have.text', 'The Jobs Page');
  });
});
