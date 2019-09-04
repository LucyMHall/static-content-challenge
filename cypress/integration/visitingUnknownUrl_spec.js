describe('unknownPage', function () {
  it('returns a 404 HTTP status code when a request is made', function () {
    cy.request({url: 'http://localhost:5000/', failOnStatusCode: false}).its('status').should('equal', 404);
  });
});
