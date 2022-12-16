
export class Widgets {
    constructor() {}
    toolTip(){
        cy.get('#toolTipButton').trigger('mouseover');
        cy.get('.playgound-header').scrollIntoView()
        cy.get('[class="tooltip-inner"]').contains('You hovered over the Button').should('have.text','You hovered over the Button'); 
    }
    progressBar(){
        cy.get('#startStopButton').click();
        cy.get('.playgound-header').scrollIntoView()
        cy.get(".progress-bar.bg-success",{timeout:30000})
            .should('have.text','100%')
            .wait(2000)
            .should('have.css', 'background-color')
            .and('eq', 'rgb(40, 167, 69)');
            cy.get('.playgound-header').scrollIntoView()
    }
    dragDrop(){
        cy.get('[class="simple-drop-container"] #draggable').drag('[class="simple-drop-container"] #droppable','{force:true}')
        cy.get('.playgound-header').scrollIntoView()
        cy.get('[class="simple-drop-container"] #droppable p').wait(2000).should('have.text','Dropped!');
    }
}