
#	Title: zepeda-honeybee-whatabook.js
#    Author: Evelyn Zepeda
#    Date: 2/29/24
#    Description: Python script for whatabook

#To import MongoClient from pymongo
from pymongo import MongoClient


#A string to connect to the database
conn = "mongodb+srv://whatabook_admin:s3cret@bellevueuniversity.8vzftv7.mongodb.net/whatabookDBretryWrites=true&w=majority&appName=BellevueUniversity"

#To create a client
client = MongoClient(conn, tls=True, tlsAllowInvalidCertificates=True)

#Creating a variable to access the collection
db = client['whatabookDB']

#Display a list of books
for book in db.books.find({}):
    print(f"{book['title']}")

#print('Available Genres:')

#for genres in genre:
 #   print(genres)

# A variable to store the user's choice
choice = input('''Select a genre:
        Fantasy
        Fiction
        Romance
        History
''')

# Prints the selected choice
print('You selected ' + choice)

# A blank line
print('')

# A loop that prints the books by genre based on choice
for book in db.books.find({"genre": choice}):
    print('Title:', book.get("title"))


