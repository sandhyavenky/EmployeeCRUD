# Employee - CRUD Operations

Simple Employee Record maintaining details with React.js,Node.js with ExpressJS and AWS Dynamo DB with IDE being VScode

## Table of Contents

1 Synopsis

2 Technologies

3 Setup

4 Launch

5 Description


## Synopsis

Employee-Crud operation is a small basic application which revolves around the 4 basic operations namely Create, Read, Update and Delete followed by some validations making it quite a real web application.

## Technologies
###### Project is created with

* ExpressJS
* AWS DynamoDB
* Visual Studio Code

## Client-side 
###### Libraries/Dependencies

* React Bootstrap
* React DOM
* React Router DOM
* Axios

## Set up

Install VS code

###### Terminal commands

$ npm install

$ npm run node --version

version -> v13.1.0 (npm v6.14.4)

$ npm yarn

###### Run commands for the backend service rendereing by ExpressJS

$ cd myapplication

$ npm init

###### Run command to add Axios Dependency to connect Express and React application

$ npm install --save axios

###### Run command to add libraries 

$ npm install 'react-bootstrap'

$ npm install 'react-router-dom'


## Launch
###### To create react app, run following commands in terminal

$ npx create-react-app myapplication

$ cd myapplication

$ npm start (this will start the created react application and VS code will open where we start playing with our creativity)

###### To run this project, install it locally using npm or using yarn

$ yarn start

Will run the application in the port 3000

## Server-side

###### Libraries/Dependencies

* AWS-SDK
* Body-parser
* Express

## Set up

VS code
AWS account (online Dynamo DB)

###### Run command to add libraries 

$ npm install 'body-parser'

$ npm install --save 'express'


## Launch
###### Commands to create folder and run express

$ npx create-react-app myapplication

$ cd myapplication

$ npm start (this will start the created react application and VS code will open where we start playing with our creativity)

###### To run, install it locally using npm or using yarn

$ node index.js

## Description

* Connect the Dynamo DB to the Express JS by mentioning the connection keys and URL
* In VS code of Express application, create a table "CreateEmployee" in AWS Dynamo Db
* Create main index.js in Express application and use the http methods to perform CRUD operations from React frontend to store and make changes in AWS
* Design the front end in React.js in the IDE VScode
* Use API calls which connects to the Express which is inturn connected to AWS Dynamo DB
