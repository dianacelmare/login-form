**React Sign Up / Sign In Form**
This project is a simple Sign Up / Sign In form built using React. The form allows users to register with their name, email, and password, and to log in with their email and password. It stores the users in a state array (in-memory) and validates users during the login process. If a user attempts to log in without an existing account, they are prompted to sign up.

**Features**
Sign Up: Users can create an account by providing a name, email, and password.
Sign In: Registered users can log in by providing their email and password.
State Management: Uses React's useState and useEffect hooks to manage and update user data in real-time.
Validation: Checks if the user is already registered when signing up, and verifies credentials during login.

**Project Structure**
src/: The source code for the React app.
components/: Contains the reusable components.
Form.js: Main form component for Sign Up / Sign In functionality.
Button.js: A reusable button component.
assets/: Contains icons and other static files.
App.js: The main app component where the form is rendered.
index.js: The entry point of the React app.

**How It Works**
Sign Up
The user fills out the name, email, and password fields.
When the Sign Up button is pressed:
The form checks if the email is already registered.
If the email is not registered, a new user object is created and added to the newUsers array.
The useEffect hook monitors changes in the newUsers array and logs updates to the console.
Sign In
The user enters their email and password.
When the Sign In button is pressed:
The form checks if the email and password match any existing user in the newUsers array.
If the credentials match, a welcome message is shown.
If the credentials don't match or the user doesn't exist, a message is displayed prompting the user to sign up.
Using the Sign In/Sign Up buttons we can also switch between forms

**Technologies Used**
React: For building the UI components and managing the application state.
CSS: For basic styling of the form and buttons.
JavaScript: For handling logic related to user input and form submission.

**Known Issues**
The user data is stored in-memory using React state. This means the data will be lost on a page refresh or app restart. A future enhancement could involve using localStorage or integrating a backend for persistent storage.
No form validation for the email format or password strength.

**Future Enhancements**
Persistent Storage: Use localStorage or a backend (e.g., Firebase, Node.js API) to store user data permanently.
Form Validation: Add validation to check for valid email formats and enforce password complexity.
Error Handling: Improve error handling and provide clearer feedback for users during form submission.
Responsive Design: Enhance the layout to work better on mobile devices.
License
This project is open-source and available under the MIT License.

**Contributing**
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request. For major changes, please open an issue to discuss what you'd like to change.
