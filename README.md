

# My React ToDo App With Calendar

Welcome to my React ToDo app! This application allows users to manage their tasks and notes efficiently. Below is an overview of the app's key features and functionalities:

## Features

1. **User Login and Registration:**
   - Users can register with a unique email and password.
   - Passwords are securely hashed and stored.
   - User authentication is implemented using Firebase Authentication for secure communication between the client and server.
   - Registration and login forms include validation to ensure proper data entry.

2. **Notes Creation:**
   - Users can create new notes using a user-friendly interface.
   - Each note includes a title and content section.
   - Each note is saved on that particular day and is visible on the calendar.
   - Notes are associated with the user who created them for proper organization.

3. **Notes Fetching:**
   - Users can view a list of their existing notes on their dashboard.
   - Notes are fetched from the server and displayed in a visually appealing way.
   - Pagination or infinite scrolling may be implemented if there are a large number of notes.
   - User can see notes by clicking on Notes Icon on Calendar present on only the days with notes already present for the user

4. **Custom Calendar:**
   - A custom calendar component is developed from scratch to provide a unique user experience.
   - Users can view a monthly calendar layout.
   - Events, including notes, can be associated with specific dates on the calendar.
   - Clicking on a date reveals a popup or detailed view showing events for that date.
   - User can even go forward or backward in time to save notes.
  
5. **Dark Mode:**
    - App also offers the functionality of changing between Dark and Light Mode. Default is Dark Mode.

## Additional Details

- **Authentication Flow:**
   - Registration form: Users provide their desired email and password, which is sent to the server. Email and password are scored securely on Firebase Server.
   - Login form: Users enter their credentials, and the server verifies them. Upon successful login, User is sent to Home Page
   - User Management: Each user is uniquely stored by their email and password. Only verified user are allowed to Login and See their respective data.
   - Logout: Users can log out, clearing their data.

- **Notes Storage:**
   - Notes are stored in a firebase firestore database with fields like `Topic`, `Details`, `email`, and `Day`.
   - RESTful API endpoints handle CRUD operations for notes.
   - Authorization: API endpoints are protected to ensure users can only access their own notes.

- **Custom Calendar Implementation:**
   - The calendar component can be built using React and tailwindCSS.
   - It involves handling date calculations and rendering days, weeks, and months appropriately.
   - Click events on dates trigger actions like adding or viewing events.
   - Events associated with dates are fetched from the server and displayed on the calendar.
   - It also involves navigating between years and months at once instead of going there by forward or backward button
 

# Screenshots

Login Page


![Screenshot 2023-08-19 020025](https://github.com/akshat231/CalendarTodo/assets/56781907/7382f140-67de-4625-b909-74758690d0f0)


Register Page


![Screenshot 2023-08-19 020056](https://github.com/akshat231/CalendarTodo/assets/56781907/a6e94287-1078-4185-a74f-2f47b6a0f523)


Home Page/ Calendar Page


![Screenshot 2023-08-19 020131](https://github.com/akshat231/CalendarTodo/assets/56781907/11e35ced-6ae3-4b51-aad8-ac734bb05300)


Home Page/ Calendar Page(Light-Mode)


![Screenshot 2023-08-19 020152](https://github.com/akshat231/CalendarTodo/assets/56781907/d9f38ab2-e573-4e11-811c-c1fe918fcfaa)


Fetch Notes Page


![Screenshot 2023-08-19 020212](https://github.com/akshat231/CalendarTodo/assets/56781907/739e6b99-4dc6-406d-9f50-2294a917a430)


CreateNotes Page


![Screenshot 2023-08-19 020226](https://github.com/akshat231/CalendarTodo/assets/56781907/19fd8be0-167e-455a-9716-4ca825ed056c)


Navigating in Years


![Screenshot 2023-08-19 020250](https://github.com/akshat231/CalendarTodo/assets/56781907/27567efd-a312-43e4-8523-023fe1efdc5f)



Navigating in Months



![Screenshot 2023-08-19 020308](https://github.com/akshat231/CalendarTodo/assets/56781907/576f94d6-4707-4c12-97f1-5e22cfd7026a)



# Deployed

App is being deployed on https://todoapp-e2257.firebaseapp.com/




## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/akshat231/CalendarTodo.git`
2. Navigate to the project directory: `cd todo-react-app`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`



## License

This project is licensed under the [MIT License](LICENSE).


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
