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
    "firstName": "Jason",
    "lastName": "Miller",
    "customerId": "c1001",
    "password": "s3cret",
    "wishListItems": [
        {
            "bookId": "1111",
            "title": "The Hobbit",
            "author": "J.R.R. Tolkien",
            "genre": "Fantasy"
        },
        {
            "bookId": "2222",
            "title": "Dune",
            "author": "Frank Herbert",
            "genre": "Science Fiction"
        },
        {
            "bookId": "3333",
            "title": "The Giver",
            "author": "Lois Lowry",
            "genre": "Dystopian Fiction"
        },
        {
            "bookId": "4444",
            "title": "Gone with the Wind",
            "author": "Margaret Mitchell",
            "genre": "Historical Fiction"
        },
        {
            "bookId": "5555",
            "title": "Midnight Shadows",
            "author": "Nora Roberts",
            "genre": "Romance"
        }
    ]
}

bollenger = {
    
}