# React-Native-App
#This is a React Native mobile application that displays a list of movies fetched from an external API, allowing users to search for movies, view details, and navigate between different screens.

#Features:
Splash Screen: Displayed on app startup.
Home Screen: Shows a list of movies with their title, thumbnail, and summary.
Search Screen: Allows users to search for movies by title.
Details Screen: Displays detailed information about the selected movie.
Navigation: Includes bottom navigation to switch between Home and Search screens.

#Technologies Used:
React Native
React Navigation (Bottom Tabs & Stack Navigation)
Fetch API (for fetching movie data)
React Native Gesture Handler

#How to run the code
1. Clone the Repository (if not done already)
If you haven't cloned the repo yet, use the following command:

bash
Copy code
git clone https://github.com/your-username/MovieApp.git
cd MovieApp
Replace your-username with your actual GitHub username.

2. Install Dependencies
Once you're in the project directory (MovieApp), run the following command to install the dependencies:

bash
Copy code
npm install
This will install all the required libraries and dependencies for the project.

3. Start Metro Bundler
Start the Metro Bundler (JavaScript bundler for React Native):

bash
Copy code
npx react-native start
Keep this terminal window open, as the bundler needs to be running.

4. Run the App on an Android Emulator or Device
To build and run the app on an Android emulator or a physical Android device, use the following command:

bash
Copy code
npx react-native run-android
