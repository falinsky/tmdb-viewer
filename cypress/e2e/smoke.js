describe('App', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.findByRole('tab', { selected: true, name: /popular/i });
    cy.findByRole('tab', { selected: false, name: /favorites/i }).click();
    cy.findByText(/no movies found/i);
    cy.findByRole('tab', { selected: true, name: /favorites/i });
    cy.findByRole('tab', { selected: false, name: /popular/i });
  });
});
