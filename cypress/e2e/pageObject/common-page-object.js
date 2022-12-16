export class Common{
    constructor(){}
    
        assertText(locator,text){
        cy.get(locator).should('contain.text',text)
         }

        clickOnCategoryCard(CardName){
            cy.get(".category-cards .card").contains(CardName).click();
        }
        clickButtonByName(name,index=0){
            cy.get("button.btn.btn-primary").contains(name).eq(index).click();
        }
        waitForModal(){
            return cy.waitUntil(() => cy.get(".modal-content")).wait(500);
        }
       inputValueToTextBoxByPlaceHolderName(PlaceHolderName,value){
        cy.get("input[placeholder='"+PlaceHolderName+"']").eq(0).type(value);
       }
       getTableRowByString(name) {
        return cy.get(`.rt-tbody .rt-td`).contains(new RegExp(`\\b${name}\\b`, "g")).parents(".rt-tr-group");
        }
        getTableRowByIndex(index=0){
            return cy.get(`.rt-table .rt-tr-group`).eq(index);
        }
        inputTextBoxByLabel(LabelName,value){
            cy.get("label").contains(LabelName).parent().siblings().eq(0).clear().find("input").type(value);
        }
        cardBoardButtonToClick(name){
            cy.get('div[class="card-body"]').contains(name).click();
        }
        sideBarNavigationButtonToClick(name){
          cy.get('li[class="btn btn-light "]').contains(name).click();
        }

    
}