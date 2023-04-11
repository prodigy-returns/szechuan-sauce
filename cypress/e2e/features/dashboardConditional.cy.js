// cy.get('body').then((body) => {
//     if (body.find('[data-jsl10n="wikivoyage.name"]').length > 0) {
//         cy.get('[data-jsl10n="wikivoyage.name"]').click()
//     }
//     else {
//         cy.get('[data-jsl10n="wiktionary.name"]').click()
//     }
// })

describe('Example test scenario dashboard', () => {
  // Get rid of after initial test of the session
  // beforeEach(() => {
  //   //use login_to_Admin
  // });

  it('Should find workspace', () => {
    const workspace = cy.get('div.workspace');
    cy.log('hello');
    // if (
    //   workspace.find('[data-testid="list-icon"]') &&
    //   workspace.find('[data-testid="list-icon"]').hasClass('isActive')
    // ) {
    //   cy.log('found');
    // } else {
    //   cy.log('found');
    // }
  });
});

const openModal =
  (lookupId, actionableId) =>
  (callback = () => {}) => {
    cy.get('body').then(el => {
      if (el.find(lookupId).length) {
        el.find(`[data-testid="${actionableId}"]`).trigger('click');
      } else {
        cy.log('not found');
        callback();
      }
    });
  };

/**
 * Returns an conditional action or callback
 *
 * @param parentSelector The selector in which is parent
 * @param lookupSelector The selector in which is a child of the parent
 * @param actionableSelector The selector in which is a child of the parent and will be clicked
 * @param config The configuration object (optional)
 * @returns {undefined}
 */

const runConditionalAction = ({
  parentSelector = 'body',
  lookupSelector,
  actionableSelector,
  showLogs = true,
  callback = () => {},
}) => {
  cy.get(parentSelector).then(el => {
    if (el.find(lookupSelector).length) {
      el.find(actionableSelector).trigger('click');
      showLogs && cy.log('clicked');
    } else {
      showLogs && cy.log('not found');
      callback();
    }
  });
};

runConditionalAction('modal-save-button', 'modal-save-button')();
export { loginAdmin, runConditionalAction };
