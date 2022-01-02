function findAuthorById(authors, id) {

  // uses find method for a single return for condition
 return authors.find(author => author.id === id);




}

function findBookById(books, id) {

 // uses find method for a single return for condition
return books.find(book => book.id === id);




}


function partitionBooksByBorrowedStatus(books) {
   
 // uses filter method to return books borrowed and books returned to seperate arrays
        let returnedBooks = books.filter((book) =>
           book.borrows.every((borrow) => borrow.returned === true)
       
    );    
        let checkedOut = books.filter((book) => 
          book.borrows.some((borrow) => borrow.returned === false)
 );
   //return an array of the separated books checked out or returned
   return [[...checkedOut],[ ...returnedBooks]];
}




function getBorrowersForBook(book, accounts) {
 
 //deconstruct book for map method
 const { borrows } = book;
 const borrowers = borrows.map(({ id, returned}) => {

    //find the account that matches the id of borrowed
    const account = accounts.find(account => account.id === id);

    //use the spread operator to combine and return arrays
    return {
      ...account,
      returned,
    };
 });

   //sorts and returns the maped value
   return borrowers 
     .sort((borrowerA, borrowerB) => {
       const companyA = borrowerA.company;
       const companyB = borrowerB.company;
          return companyA.localeCompare(companyB);
   
   })
   //limits the return to 10
  .slice(0,10);
}

module.exports = {
 findAuthorById,
 findBookById,
 partitionBooksByBorrowedStatus,
 getBorrowersForBook,
};
