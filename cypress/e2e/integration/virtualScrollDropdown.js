
describe("",()=>{
before("",()=>{
    cy.visit('https://ng-select.github.io/ng-select#/virtual-scroll')
})

    it("",()=>{
    cy.get('ng-select').click();                    // open the dropdown panel
    cy.get('.ng-option').should('have.length.gt', 1);                 // wait for the option list to populate
    function searchForOption(searchFor, level = 0) {
      if (level > 100) {                                         // max options to scan
        throw 'Exceeded recursion level'                         // only useful for 100's
      }                                                          // not 1000's of options
      return cy.get('ng-select input')
        .then($input => {
          const activeOptionId = $input.attr('aria-activedescendant') // highlighted option
          const text = Cypress.$(`#${activeOptionId}`).text() // get it's text
cy.log(Cypress.$(`#${activeOptionId}`).text())
          if (!text.includes(searchFor)) {                            // not the one?
            cy.wrap($input).type('{downarrow}')                       // move the list
            return searchForOption(searchFor, level + 1)              // try the next
          }
          return cy.wrap(Cypress.$(`#${activeOptionId}`))
        })
    }
    searchForOption(58).click();             // select the matching option
    cy.get('.ng-value').should('contain', 'modi totam dolor eaque et ipsum est cupiditate');                // confirm the value

    })
}) 