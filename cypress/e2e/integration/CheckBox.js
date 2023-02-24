
import {CheckBox} from "../pageObject/checkBoxPage";

const checkbox=new CheckBox()
describe('Demoqa Application',()=>{
    before('setup configuration',()=>{
    checkbox.navigateToHomePage()
    })

    it("Select 2 check box out of 3 checkbox at a time ",()=>{
        checkbox.selectCardByName('Elements')
        checkbox.selectElementGroupByName('Check Box')
        checkbox.selectHomeCheckBox()
    })
})