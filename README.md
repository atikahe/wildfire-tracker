# wildfire-tracker
A React app to visualize recent wildfire occurence based on data from NASA API.

## TODO
* [x] Setup project/ dependencies
    * [x] npx create-react-app .
    * [x] npm install google-map-react @iconify/react @iconify/icons-mdi
* [ ] Setup eslint
    * [ ] npm install -D eslint
    * [ ] npx eslint --init
* [ ] Clean up bootsrapped code
* [ ] Create and configure Map component
* [ ] Add hooks to fetch data from NASA API
* [ ] Add loader component
* [ ] Mark location using Location Marker component
* [ ] Create information box
* [ ] Enhancements 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Resources
* [NASA EONET API v2.1](https://eonet.sci.gsfc.nasa.gov/docs/v2.1)
    * [NASA Natural Events Endpoint](https://eonet.sci.gsfc.nasa.gov/api/v2.1/events)
* [Google Map React](https://github.com/google-map-react/google-map-react)
* [Iconify](https://github.com/iconify/iconify)
    