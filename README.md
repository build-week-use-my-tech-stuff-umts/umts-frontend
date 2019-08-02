# Use My Tech -- Readme --- RenTech
# Canvas
## Proposal

* What problem does your app solve?
    * Reduces upfront cost of creative design projects
    * Allows people to generate income with equipment that they do not use.
    * It takes the retail entity out of acquiring new equipment; in turn, reducing the cost.
    *  Person to person rentals introduce competitivly priced equipment to the market.
* How does your app solve the problem
    * It allows people to generate income from electronic equipment they have that is just collecting dust.
    * It connects people that need equipment for projects.
* What is your mission statement?
    * To connect tech users in your area who need equipment with people who have equipment.

## Features
* What features are required for your minimum viable product?
    * Users can Log in and create a profile
    * Set up items for rent
    * Users can Create, Read, Update and Delete Rental Data
    * 2nd User login can see items and rent items available or ask for rent on an item
* What features may you wish to put in a future release?
    * A review system
    * Person to person rental comparison
* What do the top 3 similar apps do for their users?
    * Airbnb
        * Allows people to rent vacation properties.
    * Freelancer
        * Allows people to hire people to do projects.
    * Turo
        * Allows people to rent cars from other people.
## Frameworks / Libraries
* What 3rd party frameworks/libraries are you considering using?
    * Semantic-UI
    * Formik
    * GreenSock Animation
    * React
## Target Audience
* Who is your target audience? Be specific.
	* Content Creators on Video and Audio
    * Event coordinators
* What feedback have you gotten from potential users?
	* None so far
* Have you validated the problem and your solution with your target audience? How?

# Project Title - RenTech - Build Week Project from Front End Unit 2 & 3 - Web21,20.75

This project repo focuses on the Front end portion of RenTech. All of rendering, backend pulls & pushes, forms and routing components are in this repo

## Getting Started

To get started, clone the project if you have access or just forked it. Use your favorite code editor and compiler for `yarn` or `npm`

### Prerequisites

Make sure to change directory to `rentech/` before installing all the dependencies via `yarn` or `npm` and starting a deployment/building of the React app.

### Repo Structure Breakdown

All the source code is location `src`.

Inside `src`, `components` have `forms` and `render`. `forms` has components build via `formik` You may check out additional info on [Formik](https://github.com/jaredpalmer/formik)

`render` has all of rendering components that either render dynamically based on available data, renders designated forms and some additional routing is implemented in `AppRouter.js`

The top parent rendering call component starts at `App.js` and you may follow how it chains up to all the relevant child components as stated above.

State was managed using Redux through a global store, all axios calls were managed through a withAuth component `umtsApiWithAuth` in the `actions` file, `authActions` and `equipmentActions`

### And coding style tests

All the styling components were integrated from Semantic UI React and styled further using SASS. Refer `scss` folder for all additional styling.

The color pallet consisted of  #0d0630, #18314f, #18314f, and #8bbeb2. Flexbox was used for the layout of the pages. Modals are used to

display information from within the site for convenience and aesthetics.


## Deployment

`public` folder has \_redirect config for netlify deployment.

## Authors

- **Adnan Chowdhury** -Front End(Lambda School Web21) [Adnan's Github](https://github.com/AdnanWebDev)

- **Skyler Dowdy** -Front End(Lambda School Web21) [Skyler's Github](https://github.com/skyler2440)

- **Deejay Easter** -Front End(Lambda School Web21) [Deejay's Github](https://github.com/DeejayEaster)

- **Wes Jonke** -Front End Framework (Lambda School Web20.75) [Wes's Github](https://github.com/Wjonke)
