This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `continuous student testing`

This app shows student progress in data transformation exercises in real time. It compiles the latest submission by each student for each question she/he attempted using Jest tests in their local computers. Test results are sent to a database by a server. This is where this app collects its information.

Four charts are available: 

### `number of students passing each question`

Shows how many students had a passing result for each of the question. When you hover over each bar, a tooltip will show a short description of the question.

### `number of passed questions by student`

Shows, for every student, how many questions she/he had a passing result.

### `% of questions passed by students`

Shows, for all questions submitted by all students, what is the percentage of passing and failed.

### `number of passed and failed questions by student`

Shows, for every student, how many questions she/he had a passing result, and how many are being attempted but not passing.

### `installation`

To install this app, run git clone and npm install.

### `server`

The server side of this project is available [here](https://github.com/rafaelrolivares/continuous-student-testing-server)

### `tests`

The exercises and jest tests are available [here](https://github.com/kerenKi/dataTransFormationExercises)
