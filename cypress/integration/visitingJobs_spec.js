describe('visitingJobsPage', function () {
  it('displays the placeholder text The Jobs Page when jobs is visited', function() {
    cy.visit('http://localhost:5000/jobs')
    cy.get('h1').should('have.text', 'The Jobs Page');
  })
})
