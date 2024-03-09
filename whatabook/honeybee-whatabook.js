/* 
  Name: Jeremy Lates / Devonte Ellis/ Evelyn Zepeda
  Date: 02/25/2024
  Code Attributions:  Professor Krasso class documentation 
  Code adapted from : https://www.mongodb.com/docs/v4.0/reference/operator/meta/orderby/
  Code adapted from : https://stackoverflow.com/questions/26967525/insert-an-embedded-document-to-a-new-field-in-mongodb-document
  Code adapted from : https://www.mongodb.com/docs/manual/reference/operator/update/pull/
  COde adapted from : https://github.com/buwebdev/web-335/blob/master/week_6/houses.js
  */

//To drop database collections
db.books.drop()
db.customer.drop()


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
            },
            wishListItems: {
                bsonType: "array"
            }
        }
    }}
})

// Users
miller = {
    firstName: "Jason",
    lastName: "Miller",
    customerId: "c1006",
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
            genre: "Fiction"
        },
        {
            bookId: "3333",
            title: "The Giver",
            author: "Lois Lowry",
            genre: "Fiction"
        },
        {
            bookId: "4444",
            title: "Gone with the Wind",
            author: "Margaret Mitchell",
            genre: "Fiction"
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
    customerId: "c1007",
    password: "s3cret",
    wishListItems: [
        {
            bookId: "6666",
            title: "Wuthering Heights",
            author: "Emily Bronte",
            genre: "Fiction"
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

freeman = {
    firstName: "Joy",
    lastName: "Freeman",
    customerId: "c1008",
    password: "s3cret",
    wishListItems: [
      {
        bookId: "1112",
        title: "My Dog Kobe",
        author: "Jeremy Lates",
        genre: "Drama",
      },
      {
        bookId: "1113",
        title: "How to fly",
        author: "Jordan Lates",
        genre: "Aviation",
      }
    ]
  }

//Inserting the customers
db.customer.insertMany([miller, bollenger, freeman])

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
    genre: "Fiction"
}

let book3 = {
    bookId: "3333",
    title: "The Giver",
    author: "Lois Lowry",
    genre: "Fiction"
}

let book4 = {
    bookId: "4444",
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    genre: "Fiction"
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
    genre: "Fiction"
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

let book9 = {
    bookId: "1112",
    title: "My Dog Kobe",
    author: "Jeremy Lates",
    genre: "Drama",
}

let book10 = {
    bookId: "1113",
    title: "How to Fly",
    author: "Jordan Lates",
    genre: "Aviation",
  };

//Inserting the books into the collection
db.books.insertMany([book1, book2, book3, book4, book5, book6, book7, book8, book9, book10])

//Query to display a list of books
db.books.find()

//A query to list books by genre
db.books.find().sort({ genre: 1 })

//A query to list books by author
db.books.find().sort({ author: 1})

//A query to display a book by bookId
db.books.find({bookId: "7777"})

//Display a wishlist by customerId
db.customer.aggregate([
    {
      //Find the customer
      $match: {
        customerId: "c1007",
      },
    },
    {
      $project: {
        _id: 0,
        customerId: 1,
        "wishListItems.bookId": 1,
        "wishListItems.title": 1,
        "wishListItems.author": 1,
        "wishListItems.genre": 1,
      },
    },
  ]);
  
  //Add books to a customers wishlist
  db.customer.updateOne(
    { customerId: "c1007" },
    {
      $push: {
        wishListItems: {
          bookId: "9999",
          title: "In Good Faith",
          author: "Scott Pratt",
          genre: "Action",
        },
      },
    }
  );
  //Remove book from customer wishlist
  db.customer.updateOne(
    { customerId: "c1007" },
    { $pull: { wishListItems: { bookId: "9999" } } }
  );
  