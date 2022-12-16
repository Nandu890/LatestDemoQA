import { CreateForm } from "../pageObject/create-form-page-object";
import { Common } from "../pageObject/common-page-object";
import { Image } from "../pageObject/broken-img-page-object";
var createForm = new CreateForm();
var com = new Common();
var img=new Image()

describe("Testcase on broken image", function () {
  before(function () {
    cy.visit("/");
    createForm.clickOnCategoryCard("Elements");
    createForm.navigateToOption("Elements", "Broken Links");
    cy.fixture('example.json').then((data)=>{
        this.data=data
    })
  });

  it(" TC02 - Verify broken image",function(){
    img.verifyBrokenImg()
  })
})