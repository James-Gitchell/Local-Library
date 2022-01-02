const { getBorrowersForBook } = require("./books");
const { getMostPopularBooks } = require("./home");


function findAccountById(accounts, id) {
  
  // returns a single result for given condition
  return accounts.find(account  => account.id === id);



}

function sortAccountsByLastName(accounts) {
 //uses sort method to arrange account name alphabetically
     return accounts.sort((nameA, nameB) => {
      let nameAToLower = nameA.name.last.toLowerCase();
      let nameBToLower = nameB.name.last.toLowerCase();

      //uses ternery operator to condense code
      //condition for alphabetical order
       return nameAToLower < nameBToLower ? -1 : 1;
   }
  
);
}


function getTotalNumberOfBorrows(account, books) {

   // initialize variable for account.id for easier reading
  const accId = account.id;

  // assign a variable for my counter
  let totalBorrowed = 0;

  //loop through books borrowed array 
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
          for (let j = 0; j < book.borrows.length; j++) {
            const bookBorrows = book.borrows[j];

            //conditional statement to increase counter
            if (bookBorrows.id === accId){
              totalBorrowed++;
            }
        }
     }// final return of count total
     return totalBorrowed;
  }
  
function getBooksPossessedByAccount(account, books, authors) {

  //initialized an array for return
  const booksCheckedOut = [];

    // use for each method to assign condition
    books.forEach((book) => {
 
      // assign a variable equal to most recently checked out
      let borrows = book.borrows[0];
    
        // checks if an book is currently checked out by account
        if (borrows.returned === false && borrows.id === account.id) {

          // uses destructuring of books to use in find method
         let { id, title, genre, authorId, author, borrows } = book;

      //finds and reassigns our var with deconstructed array of
     //     books properties and values still possessed
      author = authors.find((author) => author.id === book.authorId);
      booksCheckedOut.push({ id, title, genre, authorId, author, borrows });
    }
  });
  
  //final return of all books possessed
  return booksCheckedOut;
}
   






module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
