//assignment 8.2

//populate with data
Miller = { firstName: "Jason", lastName: "Miller", customerId:"hb0001", password: "HoneyB33",
    wishListItems: [
        {
            bookId: "10001",
            title: "Dune",
            author: "Frank Herbert",
            genre: "Science Fiction"
        },
        {
            bookId: "10002",
            title: "Don Quixote",
            author: "Miguel de Cervantes",
            genre: "Adventure"
        },
        {
            bookId: "100003",
            title: "Atlas Shrugged",
            author: "Ayn Rand",
            genre: "Adventure"
        },
        {
            bookId: "112233",
            title: "Treasure Island",
            author: "Robert Louis Stevenson",
            genre: "Adventure"
        },
        {
            bookId: "123456",
            title: "The Luminares",
            author: "Eleanor Catton",
            genre: "Historical"
        },
    ],
};
db.customers.insertOne(Miller);

Bollenger = { firstName: "Cassandra", lastName: "Bollenger", customerId:"hb0002", password:"butterscotch22",
    wishListItems: [
        {
            bookId: "200001",
            title: "The Love Songs of W.E.B. Du Bois",
            author: "Honoree Fanonne Jeffers",
            genre: "Historical"
        },
        {
            bookId: "222111",
            title: "The Invisible Man",
            author: "H.G. Wells",
            genre: "Romance"
        },
        {
            bookId: "654321",
            title: "The Remains of the Day",
            author: "Kazuo Ishiguro",
            genre: "Romance"
        },
    ] ,
};
db.customers.insertOne(Bollenger);

Jones = { firstName:"Amy", lastName: "Jones", customerId:"hb0003", password:"b00kr3ader",
    wishListItems: [
        {
            bookId: "333444",
            title: "Emma",
            author: "Jane Austen",
            genre: "Romance",
        },
        {
            bookId: "555666",
            title: "Gaudy Night",
            author: "Dorothy L. Sayers",
            genre: "Mystery" 
        },
    ],
};
db.customers.insertOne(Jones);

//populate data (books)
db.books.insertMany([   { bookId:"100001", title:"Dune", author:"Frank Herbert", genre:"Science Fiction" },
                        { bookId:"100002", title:"Don Quixote", author:"Miguel De Cervantes", genre:"Adventure" },
                        { bookId:"100003", title:"Atlas Shrugged", author:"Ayn Rand", genre:"Adventure" },
                        { bookId:"112233", title:"Treasure Island", author:"Robert Louis Stevenson", genre:"Adventure" },
                        { bookId:"123456", title:"The Luminares", author:"Eleanor Catton", genre:"Historical" },
                        { bookId:"200001", title:"The Love Songs of W.E.B. Du Bois", author:"Honoree Fanonne Jeffers", genre:"Romance" },
                        { bookId:"222111", title:"The Invisible Man", author:"H.G. Wells", genre:"Romance" },
                        { bookId:"654321", title:"The Remains of the Day", author:"Kazuo Ishiguro", genre:"Romance" },
                        { bookId:"333444", title:"Emma", author:"Jane Austen", genre:"Romance" },
                        { bookId:"555666", title:"Gaudy Night", author:"Dorothy L. Sayers", genre:"Mystery" }]);

//populate books individually in case insertMany does not work. 
let book1 = { bookId:"100001", title:"Dune", author:"Frank Herbert", genre:"Science Fiction" };
db.books.insertOne(book1);

let book2 = { bookId:"100002", title:"Don Quixote", author:"Miguel De Cervantes", genre:"Adventure" };
db.books.insertOne(book2);

let book3 = { bookId:"100003", title:"Atlas Shrugged", author:"Ayn Rand", genre:"Adventure" };
db.books.insertOne(book3);

let book4 = { bookId:"112233", title:"Treasure Island", author:"Robert Louis Stevenson", genre:"Adventure" };
db.books.insertOne(book4);

let book5 = { bookId:"123456", title:"The Luminares", author:"Eleanor Catton", genre:"Historical" };
db.books.insertOne(book5);

let book6 = { bookId:"200001", title:"The Love Songs of W.E.B. Du Bois", author:"Honoree Fanonne Jeffers", genre:"Romance" };
db.books.insertOne(book6);

let book7 = { bookId:"222111", title:"The Invisible Man", author:"H.G. Wells", genre:"Romance" };
db.books.insertOne(book7);

let book8 = { bookId:"654321", title:"The Remains of the Day", author:"Kazuo Ishiguro", genre:"Romance" };
db.books.insertOne(book8);

let book9 = { bookId:"333444", title:"Emma", author:"Jane Austen", genre:"Romance" };
db.books.insertOne(book9);

let book10 = { bookId:"555666", title:"Gaudy Night", author:"Dorothy L. Sayers", genre:"Mystery" };
db.books.insertOne(book10);


//display a list of books
db.books.find();

//display a list of books by genre
db.books.find().sort({ genre: 1 });

//display a list of books by author
db.books.find().sort({ author: 1 });

//display a book by book id
db.books.find({ bookId: "112233"});