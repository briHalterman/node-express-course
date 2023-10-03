// MongoDB Notes (from Frank)

// Organization => Project => Cluster => Database
// Database => Collection => Schema => Model +> Document (BSON)

// MongoDB Atlas:
// A fully-managed cloud database developed by the same people that built MongoDB
// Handles deploying, managing, and deployments on cloud service providers (AWS, Azure & GCP)

// Organization:
// Highest level of grouping for managing MongoDB resources
// Container for multiple projects & organizing/managing different MongoDB deployments
// Provides administrative controll over projects

// Project:
// A container for your MongoDB deployments
// Configures clusters, manages users & monitors performance

// Cluster:
// A group of servers that store your data
// Each is deployed in a single cloud provider region
// Houses the databases and collections that make up your application's data model

// Mongoose:
// An Object Data Modeling (ODM) library for MongoDB & Node.js
// Manages relationships between data, provides schema validation
// Used to translate between objects in code & the representation of those objects in MongoDB
// Built on top of the official MongoDB Node.js driver

// Database:
// Conatainer for collections
// Mongoose interacts with a MongoDB database through a connection
// mongoose.connect() returns a connection object

// Schema:
// Defines the structure & validation rules for a specific model
// Used to create a model and remains constant throughout the application's lifecycle
// Specifies the fields (properties) that a document can have, their data types, default values, and any additional validation constraints

// Document (e.g. rows in a relational database):
// Created based on the model's schema & are stored in a collection within the database
// Represents an instance of a data model, a specific record in a collection, a single entity
// the data is stored in the form of key-value pairs (i.e. BSON)

// BSON:
// Documents are stored in MongoDB in BSON format
// Binary representation of JSON documents
// Supports additional data types (e.g. Date, ObjectId, etc.) that are not supported in JSON

// Just so you don't forget the setup...
const mongoose = require('mongoose');

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
