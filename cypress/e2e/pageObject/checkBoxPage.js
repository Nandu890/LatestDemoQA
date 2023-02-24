export class CheckBox{
navigateToHomePage(){
    cy.visit('https://demoqa.com/')
    cy.waitUntil(()=>cy.get('title'))
}

selectCardByName(Name){
    cy.get('.top-card').children().contains(Name).click()
}
selectElementGroupByName(Name){
    cy.get('.menu-list').children('.btn-light').contains(Name).scrollIntoView().click()
}
selectHomeCheckBox(){
    
    cy.get('input[id="tree-node-home"]').check({force:true}).scrollIntoView()
    cy.get('button[title="Toggle"]').click()
    if(cy.get('input[id="tree-node-home"]').should('be.checked')){
    cy.get('label[for="tree-node-downloads"]').children('.rct-checkbox').click()
    }
    cy.get('title').scrollIntoView()
}

}