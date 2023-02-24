import { WebTable } from "../pageObject/web-table-page-object";
import {Common} from "../pageObject/common-page-object";   

const common=new Common();
const webTable=new WebTable(); 

beforeEach(function(){
    cy.fixture('webTable_TD').then(function(formData){
        this.formData=formData;
     })
    cy.visitBaseUrl("/");
    common.clickOnCategoryCard("Elements");
    webTable.navigateTosideBarMenu("Web Tables");
})

it("TC01- Scenario A - Verify user can enter new data into the table",function(){
    common.clickButtonByName("Add");
    common.waitForModal().within(()=>{
        common.inputValueToTextBoxByPlaceHolderName("First Name",this.formData.FirstName);
        common.inputValueToTextBoxByPlaceHolderName("Last Name",this.formData.LastName);
        webTable.inputEmailAdress(this.formData.Email);
        common.inputValueToTextBoxByPlaceHolderName("Age",this.formData.Age);
        common.inputValueToTextBoxByPlaceHolderName("Salary",this.formData.Salary);
        common.inputValueToTextBoxByPlaceHolderName("Department",this.formData.Department);
        common.clickButtonByName("Submit");
    })

    common.getTableRowByString(this.formData.FirstName).invoke("text").then(function(row){
        expect(row).to.include(this.formData.FirstName);
        expect(row).to.include(this.formData.LastName);
        expect(row).to.include(this.formData.Email);
        expect(row).to.include(this.formData.Age);
        expect(row).to.include(this.formData.Salary);
        expect(row).to.include(this.formData.Department);
      });
})
it("TC01- Scenario B - Verify user can edit the row in a table",function(){
    common.getTableRowByIndex(1).within(()=>{
        webTable.clickOnEdit();
    })
    common.waitForModal().within(function(){
        common.inputTextBoxByLabel("First Name",this.formData.Edit.FirstName);
        common.inputTextBoxByLabel("Last Name",this.formData.Edit.LastName);
        common.clickButtonByName("Submit");
    })
    common.getTableRowByIndex(1).invoke("text").then(function(row){
        expect(row).to.include(this.formData.Edit.FirstName);
        expect(row).to.include(this.formData.Edit.LastName);
    })
})