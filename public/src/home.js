function _sliceToFith(arr){
  return arr.slice(0,5);
}

function getTotalBooksCount(books) {
 
  //returns total amount of books  
   return books.length;



}

function getTotalAccountsCount(accounts) {

  //returns total amount of accounts
  return accounts.length;


}
function getBooksBorrowedCount(books) {

  //assign borrowed books variable
  const totalBorrowed = books.reduce((count, book) => {
      
    //conditional statement if !returned increases counter
      if(book.borrows[0].returned === false){
       count++;
  }
    //returns the total count or 0 as a default perameter to totalBorrowed
    return count;
    
  }, 0)

  //final return of total books borrowed
  return totalBorrowed;
}


function getMostCommonGenres(books) {

    //declared variable for returning the reduced value of genres 
    const getCommonGenres = books.reduce((acc, book) => {

      //destructured book for logical callback function
      let { genre } = book;
      
        // if genre does not exist, creates genre and count , else increases genre.count
        if (acc[genre] === undefined) {
        acc[genre] = { name: `${genre}`, count: 1 };
      } else {
        acc[genre].count++;
      }

       //retrns the reduced acc value or default perameter
       return acc;
      }, {});

    // returns an array of object values to sort
    const allTotalGenres = Object.values(getCommonGenres);

    //sorts genres from most common to least
    allTotalGenres.sort((a, b) => (a.count > b.count ? -1 : 1));

  
  // uses helper function to return an array with a given length
     return _sliceToFith(allTotalGenres);
 

}
                                

function getMostPopularBooks(books) {

   // use map() to count create an array of books and amounts borrowed
   const borrows = books.map((book) => {
     return (mostPopular = {
       name: book.title,
       count: book.borrows.length,
     });
  });
  
  //sorts through new maped array of borrowed books; highest to lowest
  borrows.sort((a,b) => (a.count < b.count ? 1 : -1));

  // uses helper function to return an array of popular books limited to 5 indexes
  return _sliceToFith(borrows);
}
    



function getMostPopularAuthors(books, authors) {
 
  let result = [];

for (let book of books){
  for (let author of authors){
    let { borrows, authorId } = book;
      let authorsName = `${author.name.first} ${author.name.last}`;
        if (authorId === author.id) {
          result.push({ name: `${authorsName}`, count: borrows.length})
        }
      }
    }
    result.sort((a,b) => a.count > b.count ? -1 : 1);
    
    return _sliceToFith(result);
}
 
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
