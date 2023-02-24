// import { slowCypressDown } from "cypress-slow-down";
// slowCypressDown(100)
describe("",()=>{
    before("",()=>{
        cy.visit('https://ng-select.github.io/ng-select#/virtual-scroll')
    })
    
        it("",()=>{
        
        cy.get('ng-select').click();                    // open the dropdown panel
        cy.get('.ng-option').should('have.length.gt', 1); 


        
        for(var i=0;i<5000;i++){
        cy.waitUntil(()=>cy.get('.ng-option'))
        cy.get('.ng-option').as('scroll').each(($el)=>{
            cy.waitUntil(()=>cy.get('.ng-option'))
            cy.wrap($el).scrollIntoView().wait(1500)

            if(i==100){
                cy.wrap($el).click();
           
               
            }
            else{

            }
        })
        cy.waitUntil(()=>cy.get('.ng-option'))
    }
        })})