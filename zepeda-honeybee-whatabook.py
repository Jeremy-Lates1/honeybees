
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

#Display all documents in the customers collection
for customer in db.customer.find({}, {"wishListItems"}):
    print(customer)