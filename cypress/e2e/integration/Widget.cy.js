import {Common } from "../pageObject/common-page-object";
import {Widgets} from "../pageObject/widget-page-object"

const common = new Common();
const widgets = new Widgets();

describe('Test cases on widget menu', () => {
  it('TC04 - Verify the progress bar', () => {
    cy.visit('/')
    common.cardBoardButtonToClick('Widgets');
    common.sideBarNavigationButtonToClick('Progress Bar');
    widgets.progressBar()
  
  })
  it('TC05 - Verify the tooltip', () => {
    cy.visit('/')
    common.cardBoardButtonToClick('Widgets');
    common.sideBarNavigationButtonToClick('Tool Tips');
    widgets.toolTip();
  
  })
  it('TC06 - Verify user can drag and drop', () => {
    cy.visit('/')
    common.cardBoardButtonToClick('Interactions');
    common.sideBarNavigationButtonToClick('Droppable');
    widgets.dragDrop();
    
  })

})