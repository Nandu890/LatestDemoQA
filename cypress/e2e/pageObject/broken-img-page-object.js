export class Image{
    verifyBrokenImg(){
        cy.get('img[src="/images/Toolsqa_1.jpg"]').should('be.visible').and($img=>expect($img[0].naturalWidth).not.to.be.greaterThan(0))
        cy.log("This image is broken because height and width is not greater than zero")
}
}

