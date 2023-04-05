const getToTogglePage = instanceName => {
  //assertions
  cy.get('.core-layout__content__right-section').contains('NEON Instances');
  //click demo
  cy.get('.core-layout__content__right-section').contains(instanceName).click();
  cy.location('pathname').should('include', instanceName);
  //click customise
  cy.get('.core-layout__content__right-section')
    .find('.instance-info__paper__upper__customise')
    .click();

  cy.location('pathname').should('include', '/setting');
  cy.get('.panel').contains('Features').click();
  //assertion
  cy.location('pathname').should('include', '/features');
  cy.get('svg[data-testid="toggle-icon"]').should('not.exist');
};

describe.only('toggle on Setting/Features in Admin', () => {
  beforeEach(() => {
    login('dreamtraveler0822+11@gmail.com', 'qweasdzxc!~123');
  });

  it('[NEON-1362]Customer Profiles enable ', () => {
    cy.visit('https://admin.dev.au.cw-neon.com/instances');

    const lookUp = type =>
      ({
        feature: { path: '/features', label: 'Features' },
        integrations: { path: '/integrations', label: 'Integrations' },
      }[type || 'feature']);

    lookUp('feature');

    cy.location('pathname', { timeout: 10000 }).should('include', '/instances');

    getToTogglePage('demo');

    cy.get('span[data-testid="customer-profile-toggle"]').then($span => {
      cy.log($span.hasClass('Mui-checked'), 'this passes');

      if ($span.hasClass('Mui-checked')) {
        cy.log(1);
        //toggle off
        cy.get($span).click();
        cy.get('svg[data-testid="toggle-icon"]').should('not.exist');
        cy.get($span).should('not.have.class', 'Mui-checked');
        //toggle on
        cy.get($span).click();
        cy.get('svg[data-testid="toggle-icon"]').should('not.exist');
      } else {
        cy.log(2);
        //toggle on
        cy.get($span).click();
        cy.get('svg[data-testid="toggle-icon"]').should('not.exist');
        //assertions
        cy.get($span).should('have.class', 'Mui-checked');
        cy.log($span);
        cy.get('[data-testid="customer-profile-write-toggle"]').should('exist');
        cy.get('.next-to-centered > p').should(
          'contain.text',
          'Allow agents to create, update and delete profiles'
        );
      }
    });
  });

  it('[NEON-1363]Call History enable', () => {
    // cy.visit(
    //   "https://admin.dev.au.cw-neon.com/instances/demo/settings/features"
    // );
    cy.visit('https://admin.dev.au.cw-neon.com/instances');

    cy.location('pathname', { timeout: 10000 }).should('include', '/instances');

    //assertions
    cy.get('.core-layout__content__right-section').contains('NEON Instances');
    cy.get('button[data-testid="button-primary"]');
    //click demo
    cy.get('.core-layout__content__right-section').contains('demo').click();
    cy.location('pathname').should('include', '/demo');
    //click customise
    cy.get('.core-layout__content__right-section')
      .find('.instance-info__paper__upper__customise')
      .click();

    cy.location('pathname').should('include', '/setting');
    cy.get('.panel').contains('Features').click();
    //assertion
    cy.location('pathname').should('include', '/features');
    cy.get('svg[data-testid="toggle-icon"]').should('not.exist');
    cy.get('svg[data-testid="toggle-icon"]').should('not.exist');
    cy.get('span[data-testid="call-history-toggle"]').then($span => {
      if ($span.hasClass('Mui-checked')) {
        cy.log(1);
        //toggle off
        cy.get($span).click();
        cy.get('svg[data-testid="toggle-icon"]').should('not.exist');
        cy.get($span).should('not.have.class', 'Mui-checked');

        //toggle on
        cy.get($span).click();
        cy.get('svg[data-testid="toggle-icon"]').should('not.exist');
        cy.get($span).should('have.class', 'Mui-checked');
      } else {
        cy.log(2);
        //toggle on
        cy.get($span).click();
        cy.get('svg[data-testid="toggle-icon"]').should('not.exist');
        cy.get($span).should('have.class', 'Mui-checked');
      }
    });
  });

  it('[NEON-1365]Wallboard enable', () => {
    cy.get('svg[data-testid="toggle-icon"]').should('not.exist');

    cy.get('.MuiGrid-root > :nth-child(3)')
      .find('span[data-testid="wallboard-toggle"]')
      .then($span => {
        if ($span.hasClass('Mui-checked')) {
          cy.log(1);

          //toggle off
          cy.get($span).click();
          cy.get('svg[data-testid="toggle-icon"]').should('not.exist');

          cy.get($span).should('not.have.class', 'Mui-checked');

          //toggle on
          cy.get($span).click();
          cy.get('svg[data-testid="toggle-icon"]').should('not.exist');
          cy.get($span).should('have.class', 'Mui-checked');
        } else {
          cy.log(2);

          //toggle on
          cy.get($span).click();
          cy.get('svg[data-testid="toggle-icon"]').should('not.exist');
          cy.get($span).should('have.class', 'Mui-checked');
        }
      });
  });

  it('[NEON-1882]Whole Reports enable', () => {
    cy.get('svg[data-testid="toggle-icon"]').should('not.exist');

    cy.get('span[data-testid="reports-toggle"]').then($span => {
      if ($span.hasClass('Mui-checked')) {
        cy.log(1);

        //toggle off
        cy.get($span).click();

        cy.get('svg[data-testid="toggle-icon"]').should('not.exist');
        cy.get($span).should('not.have.class', 'Mui-checked');

        //assertion performance should be off
        cy.get('span[data-testid="performance-today-toggle"]').should(
          'not.have.class',
          'Mui-checked'
        );
        //assertion analytics should be off
        cy.get('span[data-testid="analytics-toggle"]').should(
          'not.have.class',
          'Mui-checked'
        );
        // assertion wallboard should be off
        cy.get('.reports-permission')
          .find('span[data-testid="wallboard-toggle"]')
          .should('not.have.class', 'Mui-checked');

        //assertion custom reports should be off
        cy.get('span[data-testid="custom-reports-toggle"]').should(
          'not.have.class',
          'Mui-checked'
        );

        //toggle on
        cy.get($span).click();
        cy.get('svg[data-testid="toggle-icon"]').should('not.exist');
      } else {
        cy.log(2);

        //toggle on
        cy.get($span).click();
        cy.get('svg[data-testid="toggle-icon"]').should('not.exist');
        //performance toggle
        cy.get($span).should('have.class', 'Mui-checked');
        cy.get('span[data-testid="performance-today-toggle"]').should(
          'have.class',
          'Mui-checked'
        );

        //analytics toggle
        cy.get('span[data-testid="analytics-toggle"]').should(
          'have.class',
          'Mui-checked'
        );

        //wallboard
        cy.get('.reports-permission')
          .find('span[data-testid="wallboard-toggle"]')
          .should('have.class', 'Mui-checked');

        //custom
        cy.get('span[data-testid="custom-reports-toggle"]').should(
          'have.class',
          'Mui-checked'
        );
      }
    });
  });
});
