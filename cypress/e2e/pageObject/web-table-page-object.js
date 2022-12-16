export class WebTable{
    navigateTosideBarMenu(subMenu){
        cy.get("li span").contains(subMenu).click();
    } 
    inputEmailAdress(email){
        cy.get("#userEmail").type(email)
    }
    clickOnEdit(){
        cy.get(".action-buttons [title=Edit]").click();
    }

}
