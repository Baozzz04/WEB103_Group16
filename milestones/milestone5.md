# Milestone 5

This document should be completed and submitted during **Unit 9** of this course. You **must** check off all completed tasks in this document in order to receive credit for your work.

## Checklist

This unit, be sure to complete all tasks listed below. To complete a task, place an `x` between the brackets.

- [x] Deploy your project on Railway
  - [x] In `readme.md`, add the link to your deployed project
- [x] Update the status of issues in your project board as you complete them
- [x] In `readme.md`, check off the features you have completed in this unit by adding a ✅ emoji in front of their title
  - [x] Under each feature you have completed, **include a GIF** showing feature functionality
- [x] In this document, complete the **Reflection** section below
- [x] 🚩🚩🚩**Complete the Final Project Feature Checklist section below**, detailing each feature you completed in the project (ONLY include features you implemented, not features you planned)
- [x] 🚩🚩🚩**Record a GIF showing a complete run-through of your app** that displays all the components included in the **Final Project Feature Checklist** below
  - [x] Include this GIF in the **Final Demo GIF** section below

## Final Project Feature Checklist

Complete the checklist below detailing each baseline, custom, and stretch feature you completed in your project. This checklist will help graders look for each feature in the GIF you submit.

### Baseline Features

👉🏾👉🏾👉🏾 Check off each completed feature below.

- [x] The project includes an Express backend app and a React frontend app
- [x] The project includes these backend-specific features:
  - [x] At least one of each of the following database relationship in Postgres
    - [x] one-to-many (one users table - many orders purchases)
    - [ ] many-to-many with a join table
  - [x] A well-designed RESTful API
    - [x] The API can respond to at least one of each type of request: GET, POST, PATCH, and DELETE (all 4 are implemented)
    - [x] Routes follow proper naming conventions (Yes)
  - [x] The ability to reset the database to its default state (reset in the reset.js in config backend)
- [x] The project includes these frontend-specific features:
  - [x] At least one redirection (redirection between main page - detail page - order page - payment page)
  - [x] At least one interaction that the user can initiate and complete on the same page without navigating to a new page
  - [x] Dynamic frontend routes created with React Router
  - [x] Hierarchically designed React components
    - [x] Components broken down into categories, including Page and Component types
    - [x] Corresponding container components and presenter components as appropriate
- [x] The project includes dynamic routes for both frontend and backend apps
- [x] The project is deployed on Railway with all pages and features working

### Custom Features

👉🏾👉🏾👉🏾 Check off each completed feature below.

- [x] The project gracefully handles errors
- [x] The project includes a one-to-one database relationship
- [x] The project includes a slide-out pane or modal as appropriate for your use case
- [x] The project includes a unique field within the join table
- [x] The project includes a custom non-RESTful route with corresponding controller actions
- [x] The project allows filtering and/or sorting as appropriate for your use case
- [x] Data is automatically generated in response to a certain event or user action. Examples include generating a default inventory for a new user starting a game or creating a starter set of tasks for a user creating a new task app account
- [x] Data submitted via a POST or PATCH request is validated before the database is updated

### Stretch Features

👉🏾👉🏾👉🏾 Check off each completed feature below.

- [x] A subset of pages require the user to log in before accessing the content
  - [ ] Users can log in and log out via GitHub OAuth with Passport.js
- [ ] Restrict available user options dynamically, such as restricting available purchases based on a user's currency
- [ ] Show a spinner while a page or page element is loading
- [ ] Disable buttons and inputs during the form submission process
- [ ] Disable buttons after they have been clicked
- [ ] Users can upload images to the app and have them be stored on a cloud service
- [ ] 🍞 [Toast messages](https://www.patternfly.org/v3/pattern-library/communication/toast-notifications/index.html) deliver simple feedback in response to user events

## Final Demo GIF

Link: https://www.loom.com/share/4ad26d5b4c454a78a5a9ac2f08edc2cf?sid=ca46e0d3-2713-4cc2-aad5-b56d633273ed

## Reflection

### 1. What went well during this unit?

For this unit, we completed the payment page, the order page, etc. We all colaborated on most of the features and fixed a lot of minor bugs that appears on the code. We also implemented the video display on our webpage easier than we thought, as we thought that the feature is going to be harder, but turned out to be really easy.

### 2. What were some challenges your group faced in this unit?

For this week, our code has a lot of bugs, and we need to do a lot of tests of the features completed. Additionally, we also need to restructure our backend schema to be more reasonable because some sudden variables need to be added to the backend schema. Also, we also need to redesign our frontend page for the payment page, which took a bit of time.

### 3. What were some of the highlights or achievements that you are most proud of in this project?

We completed all of our objectives when we started doing this. We learnt a lot more about web developement along the way, and applied it to our project. We also learnt a new backend language SQL, which is a very powerful tool to store data.

### 4. Reflecting on your web development journey so far, how have you grown since the beginning of the course?

Since the beginning of the course, my growth as a web developer has been substantial. I have transitioned from understanding basic HTML, CSS, and JavaScript to building dynamic, interactive web applications using frameworks and libraries. I've developed a stronger grasp of backend development, working with databases, APIs, and authentication systems. Debugging and problem-solving have become second nature as I tackle increasingly complex challenges, like optimizing code for performance and scalability. Additionally, I’ve embraced the MVC model, ensuring clean and maintainable code. Beyond technical skills, I’ve grown in collaboration and project management, gaining confidence to contribute to real-world projects.

### 5. Looking ahead, what are your goals related to web development, and what steps do you plan to take to achieve them?

My primary goal is to become a full-stack web developer proficient in building scalable, user-centric applications. To achieve this, I plan to deepen my expertise in frontend frameworks like React and backend technologies like Node.js and Django. I aim to master database management, focusing on both SQL and NoSQL databases, while also improving my skills in version control systems like Git. Additionally, I will work on creating a portfolio of diverse projects to showcase my abilities. To stay current, I’ll participate in coding challenges, contribute to open-source projects, and continually learn emerging technologies such as AI integration and cloud computing.
