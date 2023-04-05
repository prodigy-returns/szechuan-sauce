import 'cypress-localstorage-commands';

const name = 'philiphultgren@gmail.com';

describe('toggle on Setting/Features in Admin', () => {
  // Get rid of after initial test of the session
  // beforeEach(() => {
  //   //use login_to_Admin
  // });

  it('Should login', () => {
    // cy.log("see next page");
    cy.session(name, () => {
      cy.visit('http://localhost:3000/');
      cy.get('[data-test=name-input]').type(name);
      cy.get('[data-test=password-input]').type('s3cr3t');
      cy.get('div').contains('Log In').click();
    });
    cy.log('it worked');
  });
  it('Should see the next page', () => {
    cy.visit('http://localhost:3000/#/account');
    cy.log('it is viewing the next page');
    cy.get('div.isActive').contains('Active');
  });
  it('Should close modal', () => {
    cy.contains('h2', 'Your Queues')
      .parent()
      .parent()
      .find('[data-testid="clickable-icon-xmark"]')
      .click();
  });
});

// it.only("[NEON-1891]check settings/Queues/hidden_queues display correctly in the NEON app", () => {
//   //check if "your queues" is disabled
//   cy.get(".header__agent-stats-icon").click();
//   //wait for "your queues" to be displayed
//   cy.contains("Total (All Your Queues)", { timeout: 20000 }).should("exist");
//   cy.contains("XX_", { timeout: 20000 }).should("exist");

//   //how to select this modal??????????
//   //close the modal
//   // cy.get(".draggable-overlay__header").each(($el) => {
//   //   if ($el.text().includes("Your Queues")) {
//   //     cy.get('[data-testid="clickable-icon-xmark"]').click();
//   //   }
//   // });
//   cy.get('h2[data-testid="draggable-overlay-drag-title"]')
//     .should("have.text", "Your Queues")
//     .parent()
//     .find('[data-testid="clickable-icon-xmark"]')
//     .click();
