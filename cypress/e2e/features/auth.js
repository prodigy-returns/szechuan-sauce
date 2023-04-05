const loginDashboard = name => {
  cy.session(name, () => {
    cy.visit('/login');
    cy.get('input[type=text]').type(Cypress.env('email'));
    cy.get('input[type=password]').type(Cypress.env('password'));
    cy.get('#submit').click();
    cy.url().should('contain', '/dashboard');
  });
  cy.visit('/dashboard');
};

export { loginDashboard };
