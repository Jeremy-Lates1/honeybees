"use strict";
/* 
  Name: Jeremy Lates / Devonte Ellis/ Evelyn Zapeda
  Date: 02/25/2024
  Code Attributions:  Professor Krasso class documentation 
  Code adapted from : https://www.mongodb.com/docs/v4.0/reference/operator/meta/orderby/
  Code adapted from : https://stackoverflow.com/questions/26967525/insert-an-embedded-document-to-a-new-field-in-mongodb-document
  Code adapted from : https://www.mongodb.com/docs/manual/reference/operator/update/pull/
  COde adapted from : https://github.com/buwebdev/web-335/blob/master/week_6/houses.js
  */

/* Drop Database Collections  */
db.books.drop();
db.customers.drop();

/* Create Database collections */

//Create the books collection
db.createCollection("books", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        bookId: {
          bsonType: "string",
        },
        title: {
          bsonType: "string",
        },
        author: {
          bsonType: "string",
        },
        genre: {
          bsonType: "string",
        },
      },
    },
  },
});

//Create the customers collection
db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        firstName: {
          bsonType: "string",
        },
        lastName: {
          bsonType: "string",
        },
        customerId: {
          bsonType: "string",
        },
        password: {
          bsonType: "string",
        },
        password: {
          bsonType: "string",
        },
        wishListItems: {
          bsonType: "array",
        },
      },
    },
  },
});
/* Populate customers collection  */
//Add 2 new users to the customer collection
miller = {
  _id: "12345",
  firstName: "Jason",
  lastName: "Miller",
  customerId: "c1007",
  password: "s3cret",
  wishListItems: [
    {
      bookId: "11223344",
      title: "Gone with the wind",
      author: "Margaret Mitchell",
      genre: "drama",
    },
    {
      bookId: "55667788",
      title: "Midnight Shadows",
      author: "Nora Roberts",
      genre: "romance",
    },
  ],
};
db.customers.insertOne(miller);

freeman = {
  _id: "67891",
  firstName: "Joy",
  lastName: "Freeman",
  customerId: "c1008",
  password: "s3cret",
  wishListItems: [
    {
      bookId: "12121212",
      title: "My Dog Kobe",
      author: "Jeremy Lates",
      genre: "drama",
    },
    {
      bookId: "77777777",
      title: "How to fly",
      author: "Jordan Lates",
      genre: "aviation",
    },
  ],
};
db.customers.insertOne(freeman);

/* Populate books collection  */

//Add 2 books to the books collection
let book1 = {
  bookId: "11223344",
  title: "Gone with the wind",
  author: "Margaret Mitchell",
  genre: "drama",
};

db.books.insertOne(book1);

let book2 = {
  bookId: "55667788",
  title: "Midnight Shadows",
  author: "Nora Roberts",
  genre: "romance",
};

db.books.insertOne(book2);

let book3 = {
  bookId: "12121212",
  title: "My Dog Kobe",
  author: "Jeremy Lates",
  genre: "drama",
};

db.books.insertOne(book3);

let book4 = {
  bookId: "77777777",
  title: "How to fly",
  author: "Jordan Lates",
  genre: "aviation",
};

db.books.insertOne(book4);

/* Assignment queries */

//Display a list of books
db.books.find();

//Display a list of books by genre. I interpreted this as listing the books by genre. $orderby is deprecated...
db.books.find().sort({ genre: 1 });

//Display a list of books by author. I interpreted this as listing the books by author. $orderby is deprecated...
db.books.find().sort({ author: 1 });

//Display a book by book id.
db.books.find({ bookId: "11223344" });

//Display a wishlist by customerId
db.customers.aggregate([
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
db.customers.update(
  { customerId: "c1007" },
  {
    $push: {
      wishListItems: {
        bookId: "11111111",
        title: "In good Faith",
        author: "Scott Pratt",
        genre: "action",
      },
    },
  }
);
//Remove book from customer wishlist
db.customers.update(
  { customerId: "c1007" },
  { $pull: { wishListItems: { bookId: "11111111" } } }
);
