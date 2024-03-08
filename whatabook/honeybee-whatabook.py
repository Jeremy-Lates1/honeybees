
#	Title: zepeda-honeybee-whatabook.js
#    Author: Evelyn Zepeda
#    Date: 2/29/24
#    Description: Python script for whatabook

#To import MongoClient from pymongo
from pymongo import MongoClient


#A string to connect to the database
conn = "mongodb+srv://web335_user:s3cret@bellevueuniversity.8vzftv7.mongodb.net/web335DBretryWrites=true&w=majority&appName=BellevueUniversity"

#To create a client
client = MongoClient(conn, tls=True, tlsAllowInvalidCertificates=True)

#Creating a variable to access the collection
db = client['web335DB']

#A label for the displayed books
print('The following is a list of books:')
print('')

#Display a list of books
for book in db.books.find({}):
    print(f"{book['title']}")

print('')

# A variable to store the user's choice
choice = input('''Select a genre:
        Fantasy
        Fiction
        Romance
        Drama
        Aviation
''')

# Prints the selected choice
print('You selected ' + choice)

# A blank line
print('')

# A loop that prints the books by genre based on choice
for book in db.books.find({"genre": choice}):
    print('Title:', book.get("title"))

print('')
def find_id(id):
    for customer in db.customer.find({'customerId': id}):
        print('Wishlist:', customer.get('wishListItems'))
           



entered_id = input('Enter you customer ID number to see your wishlist: ')


if entered_id == 'c1006':
    find_id(entered_id)
elif entered_id == 'c1007':
    find_id(entered_id)
elif entered_id == 'c1008':
    find_id(entered_id)
else:
    print('Incorrect ID: No customer found.')
    