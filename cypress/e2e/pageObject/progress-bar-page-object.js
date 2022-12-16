export class bar{

    hoverMeToSee(){
    cy.get('button').contains('Hover me to see').trigger('mouseover')
    }
   
}