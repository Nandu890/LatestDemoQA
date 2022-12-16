import { CreateForm } from "../pageObject/create-form-page-object";
import { Common } from "../pageObject/common-page-object";

var creatForm = new CreateForm();
var com = new Common();

describe("Test case on form", function () {
  before(function () {
    cy.visit("/");
    creatForm.clickOnCategoryCard("Form");
    creatForm.navigateToOption("Forms", "Practice Form");
    cy.fixture('example.json').then((data)=>{
        this.data=data
    })
  });
  

  it("TC03 - Verify user can submit the form.", function () {
    cy.get('.practice-form-wrapper').within(()=>{
        creatForm.inputTextById("firstName",this.data.firstName);
        creatForm.inputTextById("lastName",this.data.lastName);
        creatForm.inputTextById("userEmail",this.data.email);
        creatForm.selectButton(this.data.gender);
        creatForm.inputTextById("userNumber",this.data.mblno);
        creatForm.selectDOB(this.data.dob.date,this.data.dob.month,this.data.dob.year);
        creatForm.inputsubject(this.data.subject);
        creatForm.selectButton(this.data.hobbies);
        creatForm.selectPicture(this.data.image);
        creatForm.enterCurrentAddress(this.data.currentAddress);
        creatForm.clickOnSubmit()
    })

    creatForm.assertRow().invoke('text').then((row)=>{
        expect(row).to.include(this.data.firstName)
        expect(row).to.include(this.data.lastName)
        expect(row).to.include(this.data.email)
        expect(row).to.include(this.data.gender)
        expect(row).to.include(this.data.mblno)
        expect(row).to.include(this.data.currentAddress)
        expect(row).to.include(`${this.data.dob.date} ${this.data.dob.month},${this.data.dob.year}`)
    })

  });
});