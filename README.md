# WEEKEND CHALLENGE: REDUX FEEDBACK LOOP

## Description

This feedback form (modeled after Prime's feedback system) is an application that users can use to submit their reflections of the day. There are four pieces of information the form collects on: feeling, understanding, support, and comments. The first three inputs are required while the comments input is optional. After entering each input, the user is taken to a Review page where a summary of their inputs is shown. After clicking the `Submit` button on this page, the form data is sent to the database where it is stored and the user then taken to a Submission Success page. Here, the user can click the `Leave New Feedback` button and is then redirected to the starting (Feeling) page. 

## Screenshot


## Installation
To get this application up and functionally working, follow these steps:

1. Git clone this project to your computer and open in editor of your choice (i.e. VS Code).
2. The database for this project was built using PostgreSQL. Open database app (i.e., Postico) to run the provided queries. Create a new database in your localhost. Name the database 'prime_feedback'.
3. Copy all query found in the database.sql file and paste it into your 'prime_feedback' database in order to populate all required information for the table data.
4. In terminal, run `npm install` to install all dependencies.
5. To start backend server, run this command in terminal:
```shell
`npm run server`
```
6. In another terminal window, run this to start the frontend vite server:
```shell
`npm run client` 
```
7. Get localhost url provided in vite server terminal and open it in a new browser tab.

## Built With

- React
- Redux
- Postgres
- Node.js

