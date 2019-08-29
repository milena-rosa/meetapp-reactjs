# MeetApp Frontend

MeetApp is an event aggregator app for developers (an acronym for Meetup + App).
This is the MeetApp frontend created using ReactJS, Redux and Redux Saga. It uses the [MeetApp API server](https://github.com/milena-rosa/meetapp-api).

This application is designed for use by meetup organizers and will not feature meetup subscriptions functionality.


## Features

Following are the features available in MeetApp Web app.


### Authentication

The user can authenticate using *email* and *password*.


### User registration

New users can register in the application using *name*, *email* and *password*.


### Reset password feature

The user can recover or restart his/her password using an *email*. A key is generated internally and sent to the user by email. Using that *key*, and a new *password* he/she can reset the password.


### Dashboard

The user can list the meetups he organizes and click to see details of each one. There is also a button that redirects the user to the meetup creation screen.


### Meetup Details

The user can view details of a previously registered meetup. In this screen, the user can cancel the meetup or can redirect to the meetup edition screen.


### New/Edition

The user can register or edit information of meetups that organizes. When he/she selects an image for the meetup banner, a preview is displayed.


### Profile

The user can edit his/her information data and avatar.


## Setup

Clone the repo and run `npm install` or `yarn`.
The server must be running so the application works correctly. Its default address is set to `http://localhost` on port `3333`. If you want to change it, you have to edit the file `services/api.js`.

After all set, run `yarn start`.
