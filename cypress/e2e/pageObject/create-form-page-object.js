

export class CreateForm {
  constructor() {}

  clickOnCategoryCard(name) {
    cy.get(".category-cards").contains(name).click();
    cy.get(".main-header").should("contain.text", name);
  }

  navigateToOption(menulist, option) {
    cy.get(".group-header").contains(menulist).click().then(() => {
        cy.get("li").contains(option).click({force:true});
      });
  }
  inputTextById(locator,name) {

    cy.get(`#${locator}`).type(name);
  }

  selectButton(value) {
    cy.get(`[value=${value}]`).click({ force: true });
  }
  selectDOB(date,month,year) {
    cy.get("#dateOfBirthInput").click().then(() => {
        cy.get(`[aria-label="Choose Friday, ${month} ${date}rd, ${year}"]`).click({force:true});
      });
  }
  inputsubject(content) {
    cy.get(".subjects-auto-complete__value-container").type(content);
  }
  selectPicture(image) {
    cy.get("#uploadPicture").wait(2000).selectFile(image);
  }
  enterCurrentAddress(address) {
    cy.get("#currentAddress").type(address);
  }

  selectStateAndCity(state, city) {
    cy.get("#state").click({ force: true }).then(() => {
        cy.contains(state).click({ force: true });
      });
    cy.wait(2000);
    cy.get("#city").click({ force: true }).then(() => {
        cy.contains(city).click({ force: true });
      });
  }
  clickOnSubmit(){
    cy.contains('Submit').click({force:true})
  }
  verifyingSubmit(){
    cy.get('example-modal-sizes-title-lg').should('contain.text','submitting the form')
  }

  assertRow(){
   return cy.get('tbody>tr').find('td:last')
    }
   


  }

