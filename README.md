# SOCIAL NETWORK API

  ### [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description

MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. This application is the backend of one social media app that has been built with technologies mentioned below. you will be able to create, update, get and delete users, thoughts, friends and reactions with help of Mongoose which is a JavaScript framework that is commonly used in a Node. js application with a MongoDB database.

This app has been built with the follwoing technologies:
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* Mongoose


## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Mock-Up](#mock-up)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

The Package json is already added in this project, so you should only have to install it in your terminal typing the following 'npm i'.

## Usage

1. You will need to have MongoDB installed in your devices before running this application.

2. Install the package json with `npm i`.
   
3. Run in your terminal `npm start`.

4. Post a new user and thought in format json respectively as the following:

Route: `/api/users`.

`
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
`

Route: `/api/thoughts`.

`
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
`

## Mock-Up

We can see below how our method GET it´s pulling the data stored in users and thoughts.

![users](./Assets/api%3Ausers.png)
![thoughts](./Assets/api%3Athoughts.png)
## License

### MIT License (https://opensource.org/licenses/MIT)

      MIT License Copyright (c) [year] [fullname]
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.

## Contribution

Jorge Cardenas

## Tests

No tests.

## Questions

My GitHub: https://github.com/Jorgecdl96

You can send an e-mail to Jorgecdl96@gmail.com for any additional question.

## Walkthrough Video

You can see in the video how to use the routes .

This Video [run server](https://drive.google.com/file/d/1l7Sg6vImtYYvpdqR26Kf2TEj9vaJEjLz/view?usp=sharing) demonstrate how to start the application’s server.

The [Social Network API insomnia Video](https://drive.google.com/file/d/1yWbxwYAkBbn6J0WJ38U7-nImQF6O4A_m/view?usp=sharing) demonstrate the following: 

* GET routes for all users and all thoughts being tested in Insomnia.

* GET routes for a single user and a single thought being tested in Insomnia.

* POST, PUT, and DELETE routes for users and thoughts being tested in Insomnia.

* POST and DELETE routes for a user’s friend list being tested in Insomnia.

* POST and DELETE routes for reactions to thoughts being tested in Insomnia.


