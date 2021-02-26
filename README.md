# MEETUP

## Link to Github: 
https://github.com/farahm20/Meetup-2

## Publishing Service: 

The code is deployed using heroku. It can be found on the following link: https://meetup-project-vue.herokuapp.com/


## Application information: 
Meetup is a web application that allows user to see different meetups. User can click on an event, register for an event and add a review for an event. All this data is saved in an API for each event. 

## Level ups: 

1. System tests and integration tests : 
Tests are available for 
Routing: checks if can go to a particular event.
Mounting: checks if all the events are fetched from API. 
Filter: checks if search works, when searching for a particular event.

2. API - A private API is created using jsonbin which is then fetched from store. 


## Reflection: 

It was good to work on Vue again. But I believe I need more practice with vue to get things to work smooth. 
TDD has been very interesting. For me its a new way of thinking and writing "test-able" code. However, it gets really complicated when working with routers and Vuex. It would have been great if we had practiced this more during the lectures. 
Heroku was very hard to set up in teh beginning with backend. But when switched to jsonapi things got easier.    


## Setting up the project: 

1. Build project with Vue cli 2, vue-router, vuex, jest, eslint och babel.

2. Install http-server. 

3. Create docker file: 

    FROM node:lts-alpine
    RUN npm install
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    RUN npm run build
    EXPOSE 8080
    CMD [ "http-server", "dist" ]

4. Create heroku.yml: 
    build:
     docker:
      web: ./Dockerfile

5. Upload project on Github. 

6. Go to heroku.com and connect it to your github repository. 
