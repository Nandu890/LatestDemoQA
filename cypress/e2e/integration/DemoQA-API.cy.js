var booksList=[
  {
    "isbn": "java"
  },
  {
    "isbn": "js"
  },
  {
    "isbn": "python"
  }
];
describe('demoQA API suite',function(){
  it('TC_08_01 - should create a user account',function(){
      this.userName="user"+Date.now();
      this.password="User12@345";
      cy.createUser(this.userName,this.password).then(function(res) {
          if(res.status==201){
              expect(res.status).to.be.equal(201);
              expect(res.body.userID).to.be.not.null;
              expect(res.body.username).to.be.equal(this.userName);
              this.userId=res.body.userID; 
              cy.log("Succefully created user account with userId "+this.userId);
          } 
     })
  })
  it('TC_08_02- should not create a user account if user already exists',function(){
      cy.createUser(this.userName,this.password).then(function(res) {
          if(res.status==406){
           cy.log("Successfully verified that cannot create a user account if username already exist");
           expect(res.status).to.be.equal(406);
          }
         
     })
  })
  
  it('TC_09_01 - add list of books',function(){
   cy.generateToken(this.userName,this.password).then(function(res){
      this.token=res.body.token;
      cy.addBooks(this.token,this.userId,booksList).then(function(res){
          if(res.status==201){
              expect(res.status).to.be.equal(201);
              for(var i=0;i<3;i++){
                  expect(res.body.books[i].isbn).to.be.equal(booksList[i].isbn);
              }
          }else{
              expect(res.status).to.be.equal(201);
              throw 'received invalid status code';
          }
       })
   })
  })
  it('TC_09_02 - Should not be able to add list of books if token is incorrect',function(){
    var token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlVzZXIyMCIsInBhc3N3b3JkIjoiVXNlcjEwQDEyMyIsImlhdCI6MTY3MTE3MTczNn0.TsMTCPCarbrBFfItuqubZzRuzNYWB0sXUyksrfnFi32";   
    cy.addBooks(token,this.userId,booksList).then(function(res){
          if(res.status==401){
              expect(res.status).to.be.equal(401);
              cy.log("Successfully verified that cannot add book with invalid token");
          }else{
              expect(res.status).to.be.equal(401);
              throw 'received invalid status code';
          }
          })
     })
     it('TC_10_01 - Should be able to remove particular book from the list of books if book exists',function(){
          this.bookToBeRemoved=booksList[0].isbn;
          cy.removeTheParticularBookFromList(this.token,this.userId,this.bookToBeRemoved).then(function(res){
           if(res.status==204){
               expect(res.status).to.be.equal(204);
               cy.log("Successfully removed particular book from the list of books");
           }else{
               throw 'received invalid status code';
           }
           })
      })
      it('TC_10_02 - Should not be able to remove the book from the list of books if that book is already removed',function(){
          this.bookToBeRemoved=booksList[0].isbn;
          cy.removeTheParticularBookFromList(this.token,this.userId,this.bookToBeRemoved).then(function(res){
           if(res.status==400){
               expect(res.status).to.be.equal(400);
               cy.log("Successfully verified that cannot remove a book from the list of book if that book doesn't exist");
           }else{
               throw 'received invalid status code';
           }
           })
      })
  })
        
