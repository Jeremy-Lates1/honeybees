#
#    Title: lates_console_app.py
#    Author: Jeremy Lates
#    Date: 02/29/2024
#
#    Code is adapted from Professor Krasso Python Guide
#    Code is adapted from https://kb.objectrocket.com/mongo-db/how-to-access-and-parse-mongodb-documents-in-python-364 
#    Code is adapted from https://www.w3schools.com/python/python_conditions.asp
#    Code is adapted from https://www.mongodb.com/developer/languages/python/python-quickstart-aggregation/

# Import the MongoClient
from pymongo import MongoClient

#Connection string
conn = "mongodb+srv://web335_user:s3cret@bellevueuniversity.gxluysn.mongodb.net/web335DBretryWrites=true&w=majority"

#Create client
client = MongoClient(conn,tls=True,tlsAllowInvalidCertificates=True)

# configure a variable to access the web335DB
db = client['web335DB']

#Display a list of books
for book in db.books.find({}):
  print("Book Id: " + book["bookId"] + " Title: " + book["title"] + " Author: " + book["author"] + " Genre: " + book["genre"])
 
#Display a list of genres. Prompt user to select genre. List the books that are associate with that genre
genres = ["drama","action","romance"]

print("Select the genre of books you would like listed")
for genre in genres:
  print(genre)

selection = input("Enter genre:")

for book in db.books.find({"genre":selection}):
  print("Book Id: " + book["bookId"] + " Title: " + book["title"] + " Author: " + book["author"] + " Genre: " + book["genre"])

#Display a customers wishlist by customerId
mycustomerid = input("Enter customer id:")

if mycustomerid == "c1007" or mycustomerid == "c1008" or mycustomerid == "c1009":
  pipeline = [{"$match":{"customerId": mycustomerid}}]
  results = db.customers.aggregate(pipeline)
  for customer in results:
    print("Customer Id: " + customer["customerId"] + " Name: " + customer["firstName"] + " " + customer["lastName"])
    print("The wishlist:")
    for x in customer["wishListItems"]:
      print(x)
else:
  print("Invalid customer account ID!")
  

