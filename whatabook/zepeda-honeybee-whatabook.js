/**
	Title: zepeda-honeybee-whatabook.js
    Author: Evelyn Zepeda
    Date: 2/29/24
    Description: Python script for 
 */


//Create the collection for books
db.createCollection("books", {
    validator: { $jsonSchema: {
        bsonType: "object",
        properties: {
            bookId: {
                bsonType: "string"
            },
            title: {
                bsonType: "string"
            },
            author: {
                bsonType: "string"
            },
            genre: {
                bsonType: "string"
            }
        }
    }}
})

//Create the collection for customer
db.createCollection("customer", {
    validator: { $jsonSchema: {
        bsonType: "object",
        properties: {
            firstName: {
                bsonType: "string"
            },
            lastName: {
                bsonType: "string"
            },
            customerId: {
                bsonType: "string"
            },
            password: {
                bsonType: "string"
            }
        }
    }}
})

// Users
miller = {
    firstName: "Jason",
    lastName: "Miller",
    customerId: "c1001",
    password: "s3cret",
    wishListItems: [
        {
            bookId: "1111",
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            genre: "Fantasy"
        },
        {
            bookId: "2222",
            title: "Dune",
            author: "Frank Herbert",
            genre: "Science Fiction"
        },
        {
            bookId: "3333",
            title: "The Giver",
            author: "Lois Lowry",
            genre: "Dystopian Fiction"
        },
        {
            bookId: "4444",
            title: "Gone with the Wind",
            author: "Margaret Mitchell",
            genre: "Historical Fiction"
        },
        {
            bookId: "5555",
            title: "Midnight Shadows",
            author: "Nora Roberts",
            genre: "Romance"
        }
    ]
}

bollenger = {
    firstName: "Cassandra",
    lastName: "Bollenger",
    customerId: "c1002",
    password: "s3cret",
    wishListItems: [
        {
            bookId: "6666",
            title: "Wuthering Heights",
            author: "Emily Bronte",
            genre: "Gothic Fiction"
        },
        {
            bookId: "7777",
            title: "Sense and Sensibility",
            author: "Jane Austen",
            genre: "Romance"
        },
        {
            bookId: "8888",
            title: "Anna Karenina",
            author: "Leo Tolstoy",
            genre: "Fiction"
        }
    ]
}


jones = {
    firstName: "Amy",
    lastName: "Jones",
    customerId: "c1003",
    password: "s3cret"
}


//Inserting the customers
db.customer.insertMany([miller, bollenger, jones])

//Creating the books
let book1 = {
    bookId: "1111",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy"
}

let book2 = {
    bookId: "2222",
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction"
}

let book3 = {
    bookId: "3333",
    title: "The Giver",
    author: "Lois Lowry",
    genre: "Dystopian Fiction"
}

let book4 = {
    bookId: "4444",
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    genre: "Historical Fiction"
}

let book5 = {
    bookId: "5555",
    title: "Midnight Shadows",
    author: "Nora Roberts",
    genre: "Romance"
}

let book6 = {
    bookId: "6666",
    title: "Wuthering Heights",
    author: "Emily Bronte",
    genre: "Gothic Fiction"
}

let book7 = {
    bookId: "7777",
    title: "Sense and Sensibility",
    author: "Jane Austen",
    genre: "Romance"
}

let book8 = {
    bookId: "8888",
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    genre: "Fiction"
}

//Inserting the books into the collection
db.books.insertMany([book1, book2, book3, book4, book5, book6, book7, book8])

//Query to display a list of books
db.books.find()

//A query to list books by genre
db.books.find().sort({ genre: 1 })

//A query to list books by author
db.books.find().sort({ author: 1})

//A query to display a book by bookId
db.books.find({bookId: "7777"})