**Buttermilk's Bodega**
----
This is a full-stack e-commerce site built. The backend is built with Node.js and Express. The frontend is built with React and Redux. The live site is launched through Heroku. 

To view the site, head over to [here](https://buttermilks-bodega.herokuapp.com/)

In order to use on your local machine, follow these steps: 
1. Clone down the repo
2. `cd` into the frontend directory and run `npm i`
3. `cd` back into the root directory and run `npm i` again. 
4. At this point you have installed all of the necessary dependencies and you may run the command, `npm run dev`. 

## File structure
#### `frontend` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
    - #### `actions` - This folder holds the actions for Redux.
    - #### `components` - This folder holds all of the different components that will make up our views.
    - #### `constants` - This folder holds any constants used on the frontend.
    - #### `images` - This folder holds images that are used for background display. 
    - #### `reducers` - This folder holds the reducers for Redux.
    - #### `screens` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `App.js` - This is what renders all of our browser routes and different views.
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change.
    - #### `store.js` - This is where the Redux store is defined.
- #### `package.json` - Defines npm behaviors and packages for the client
#### `backend` - Holds the server application.
- #### `config` - This holds our configuration files, like mongoDB uri.
- #### `controllers` - These hold all of the callback functions that each route will call.
- #### `data` - This holds seeding data.
- #### `models` - This holds all of our data models.
- #### `middleware` - This holds all of our any middleware the application is using.
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url.
- #### `tests` - This holds all of our server tests that we have defined.
- #### `utils` - This holds any utility functions the application uses, such as user authentication.
- #### `server.js` - Defines npm behaviors and packages for the client.
#### `uploads` - Contains images relevant to the site.
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!

