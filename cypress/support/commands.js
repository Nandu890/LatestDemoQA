// ***********************************************
import '@4tw/cypress-drag-drop'
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("visitBaseUrl", () => {
    cy.visit("/");
    cy.waitUntil(() => cy.get("#app"));
  });

 
  Cypress.Commands.add('createUser',function (userName, password){
    cy.request({
    method:'POST',
    url:`/Account/v1/User`,
    body:
       {
        "userName":userName,
        "password": password
       },
    failOnStatusCode:false  
    }).then(function(res){
       return res;
    })
  })

  Cypress.Commands.add('generateToken',function (userName, password){
    cy.request({
    method:'POST',
    url:`/Account/v1/GenerateToken`,
    body:
       {
        "userName":userName,
        "password": password
       },
    }).then(function(res){
       expect(res.status).to.be.equal(200);
       return res;
    })
  })

  Cypress.Commands.add('addBooks',function (token,userId,booksList){
    cy.request({
    method:'POST',
    url:`/BookStore/v1/Books`,
    headers:{
      "Authorization":"Bearer "+token
    },
    failOnStatusCode:false ,
    body:{
      "userId":userId,
      "collectionOfIsbns":booksList
    },
    }).then(function(res){
       return res;
    })
  })
  Cypress.Commands.add('removeTheParticularBookFromList',function (token,userId,bookToBeRemoved){
    cy.request({
    method:'DELETE',
    url:`/BookStore/v1/Book`,
    headers:{
      "Authorization":"Bearer "+token
    },
    failOnStatusCode:false ,
    body:{
      "userId":userId,
      "isbn":bookToBeRemoved
    }
    }).then(function(res){
       return res;
    })
  })