import "cypress-localstorage-commands";

const name = "philiphultgren@gmail.com";

describe("toggle on Setting/Features in Admin", () => {
  // Get rid of after initial test of the session
  // beforeEach(() => {
  //   //use login_to_Admin
  // });

  it("Should login", () => {
    // cy.log("see next page");
    cy.session(name, () => {
      cy.visit("http://localhost:3000/");
      cy.get("[data-test=name-input]").type(name);
      cy.get("[data-test=password-input]").type("s3cr3t");
      cy.get("div").contains("Log In").click();
    });
    cy.log("it worked");
  });
  it("Should see the next page", () => {
    cy.visit("http://localhost:3000/#/account");
    cy.log("it is viewing the next page");
    cy.get("div.isActive").contains("Active");
  });
});
