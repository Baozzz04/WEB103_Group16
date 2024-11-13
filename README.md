# Cameo Clone

CodePath WEB103 Final Project

Designed and developed by: Sheng-Kai Wen, Bao Ngoc Nguyen, Christian Michael Dela Cruz

🔗 Link to deployed app:

## About

### Description and Purpose

The project aims to create an interactive website for users to purchased videos from their favorite celebrities, content creators, etc. The platform will serve for 3 main types of users: normal users, celebrities, and administrations. Normal users can sign up and log in to the website to see all of the interative videos that their favorite content creators have. Celebrities can upload their video through the website, make their own introduction, and chose which video they would have as private videos, so only subscribed users are permitted to watch the videos. Normal users are allowed to leave comments and reviews for the videos. Admin roles can manage all users and celebrities, and change the account type from user to celebrity if the person is a real celebrity. Admin also manage a healthy and fair space on Cameo Clone so that all users and celebrities can have a good time using the app!

Our platform allows you to order personalized video messages from your favorite celebrities, offering a unique and heartfelt way to connect with those you care about.

### Inspiration

As the year ends, it's the perfect time to express gratitude and celebrate special moments with loved ones. Our platform allows you to order personalized video messages from your favorite celebrities, offering a unique and heartfelt way to connect with those you care about. Whether it's for a birthday, holiday, or just to make someone's day, these customized messages create lasting memories, making every occasion more meaningful and unforgettable. With an easy-to-use interface and a wide selection of celebrities, you can give a truly thoughtful gift that speaks from the heart.

## Tech Stack

Frontend: React, Javascript

Backend: NodeJS, Express, Railway

## Features

### Authentication

✅ User can sign in or Sign up through the webpage authentication stage. If the user forgot their password, they can request a renew password email through their email address.

Link: https://www.loom.com/share/92e47b175eae400eb23d6688927a3e68?sid=106d20e3-20cc-447a-94c1-8a97892576f1

### Admin:

[ ] Approve (edit the user state) the creation of a celebrity account.

[ ] Delete content that violates the code of conduct

### User Profile Pages (Purchased Customer)

[ ] View purchased content

[ ] Add a review or comments on the page

[ ] Delete/Edit the review or comments that they made

### User Profile Pages (Non-Purchased Customer)

✅ View default videos that celebrities allow

✅ Read through comments that purchased users have

Link: https://www.loom.com/share/d01a4a90aa46435cbb1b04a9541f449b?sid=82bc10a0-3ec0-4e10-9138-3d4f48c4b9eb

### Celebrity

[ ] Add (POST) videos onto the main page and add the title and introduction

[ ] Delete (DELETE) videos that they post

[ ] Edit (PUT) videos and edit the title and introduction

[ ] Add/Edit the price of the account

### Purchase request

✅ Form to fill in the form to submit an order

Link: https://www.loom.com/share/4d6e09cb4dcd46fa805454f6d179a0d0?sid=29720082-3ac8-47af-abcd-55bc6cdce3e2

## Additional features

### Filter

✅ Celebrity’s category

✅ Price range

✅ User’s reviews

Link: https://www.loom.com/share/87b0cb53792b4f689a7a8c88ea9370ad?sid=4135bd8c-0e29-4dd0-9ed4-eddb34a7a3ee

## Installation Instructions

npm install express dotenv cors

npm install pg

npm install nodemon --save-dev

npm install react-icons

## Running instructions:

cd client

npm start
