const auth = () => {
  cy.get("input[type=text]").type(Cypress.env("email"));
  cy.get("input[type=password]").type(Cypress.env("password"));
  //submit the form
  cy.get("button").contains("Sign In").click();
};

export { auth };
