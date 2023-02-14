# Frontend-event-planner-in-spanish
## Table of Contents 
1. Description of the application
2. Technologies 
3. List of dependencies
4. Setup
 
## Description of the application
The frontend-event-planner-in-Spanish application is displayed in Spanish, but the code is written in English.  A calendar is displayed, the image of the space needle is shown as the background, and if the user is interested in subscribing to the newsletter they can input their information. 

The calendar allows users to pick a date. If the user picks a date and there is information in the event information [database](https://backend-event-planner-spanish.herokuapp.com/event_info) from the [backend-event-planner-in-spanish](https://github.com/nancy-lee89/backend-event-planner-in-spanish)
the application. Then the application will display information about an event on that date. Once the user clicks a date, the user can access the event or events on the date picked. Each Event listed will have the date, time, and type of event (free, for adults, for families, a concert, or a sport). As well as the address of the event and the location of the event on a map. 

If the user is interested in subscribing to the newsletter, they can input their information, which will be stored in the contact information [database](https://backend-event-planner-spanish.herokuapp.com/contact_info). 


## Technologies

- Google maps javascript api
- Google font
- REACT JS (Javascript, HTML, CSS) 
- Heroku

## List of dependencies 
- "@testing-library/jest-dom"
- "@testing-library/react"
- "@testing-library/user-event"
- "Axios"
- "Google-map-react"
- "React"
- "React-calendar"
- "React-dom"
- "React-scripts"
- "Web-vitals"
- "@iconify/icons-mdi"   
- "@iconify/react"


## Setup 
In order to set this application you need to run `yarn install` in the project directory.  Once this has successfully run then you will need to run run `yarn start` to begin the local development server. 

## Deployment 
- The front-end here https://frontend-event-planner-spanish.herokuapp.com/.




