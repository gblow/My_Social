Social Network API

## Table of Contents:
- [Overview](#Overview)
- [The Challenge](#The-Challenge)
- [Usage Information](#Usage-Information)
- [Installation Process](#Installation-Process)
- [Built With](#Built-With)
- [What I Learned](#What-I-Learned)
- [Continued Development](#Continued-Development)
- [License](#License)
- [Author](#Author)
- [Acknowledgments](#Acknowledgments)

# Overview

The Social Network API is a Node.js application programming interface (API) designed for CRUD operations on social networking data models using a NoSQL database. These data models encompass friends, users, thoughts, and reaction data, accessible either by ID or collectively. Developed with Node.js and Mongoose, this API offers a straightforward and scalable approach to managing social networking data, free from the constraints typically associated with traditional relational databases.

## The Challenge:

The task involved creating a RESTful API for a social media startup, enabling CRUD operations on users, thoughts, and reactions data models using a NoSQL database. The API had to be developed with Node.js and Mongoose, providing endpoints capable of handling substantial amounts of unstructured data.

The API needed to allow users to:

- Create and delete user accounts.
- Perform CRUD operations on thoughts (create, read, update, delete).
- Add or remove reactions to thoughts.
- Manage a user's friend list by adding or removing friends.

To test the API, Insomnia or a similar tool was used to send HTTP requests to the API endpoints and verify the accuracy of the responses.

## User Story:

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria:

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list



## Usage Instructions:

1. Clone the repository and run 'npm i', then update the '.env' file.
2. In the root directory of the project, create a '.env' file and include the necessary variables.
3. After starting the server, utilize a tool such as Insomnia to test the API endpoints.
4. Use Insomnia to test the routes at http://localhost:3002, including API GET, POST, PUT, and DELETE routes for categories, products, and tags. Ensure successful creation, updating, and deletion of data in the database.

## Built With:
- JSON
- Dynamic JavaScript
- Mongoose 
- Express 
- Node.js 
- Insomnia 
- MongoDB
- Nodemon

 ## Questions
  
 Have questions? Contact me using the following links:

  [GitHub](https://github.com/gblow)
  
  [Email: giovanniblow@gmail.com](mailto:giovanniblow@gmail.com)

