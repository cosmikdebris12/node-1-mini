let books = []; //will keep track of all our books. A book will be an object that has a id,title,and author property.

let id = 0; //after a creation of a book we will increment this by 1 to ensure no books share the same id

module.exports = {
    read:(req,res)=>{
        res.status(200).send(books);
    }, //this method will return or get all books 

    create:(req,res)=>{
        const {title,author} = req.body; //title and author are objects being returned that we need to destructure
        let book ={
            id: id,
            title: title,
            author:author
        } //the book variable is taking the information that was returned to us and packaging it together to place in the books array
        books.push(book); //pushing the book object into the books array
        id++ //incrementing the id variable
        res.status(200).send(books)//if information is returned then it will send the new information to books
    }, //this method will add a new book from the request body to the books array

    update:(req,res)=>{
        let index=null; //starts index out as a blank value
        books.forEach((book,i)=>{
            if(book.id===Number(req.params.id)) index=i;
        }) //this is searching for a book by its id
        books[index]={
            id: books[index].id,
            title: req.body.title || books[index].title,
            author: req.body.author || books[index].author 
        } //once the book is found by the if statement, the books[index] object will update the book object with the new information from the req.body
        res.status(200).send(books); //this is returning all the books
    },

    delete:(req,res)=>{
        let index=null; //starts index out as a blank value
        books.forEach((book,i)=>{
            if(book.id===Number(req.params.id)) index=i //searches for books by their id then assigns the id to the index variable
        }) 
        books.splice(index,1) //splices or removes the book from the index location, the 1 is how many places to go. In this instance we only want to delete the specific book
        res.status(200).send(books);
    }

} //this is exporting an object with nested methods
