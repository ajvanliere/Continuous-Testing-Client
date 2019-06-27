
### `continuous student testing`

This is a group project to aggregate student test results in real time. This is the client side, based on React.

This app shows student progress in data transformation exercises in real time. It compiles the latest submission by each student for each question she/he attempted using Jest tests in their local computers. Test results are sent to a database by a server. This is the front end, where the client pulls and displays data.

Four charts are available: 

### `number of students passing each question`

Shows how many students had a passing result for each of the question. When you hover over each bar, a tooltip will show a short description of the question.

### `number of passed questions by student`

Shows, for every student, how many questions she/he had a passing result.

### `% of questions passed by students`

Shows, for all questions submitted by all students, what is the percentage of passing and failed.

### `number of passed and failed questions by student`

Shows, for every student, how many questions she/he had a passing result, and how many are being attempted but not passing.

### `other relevant repos`

[Server](https://github.com/rafaelrolivares/continuous-student-testing-server) and [Exercises](https://github.com/kerenKi/dataTransFormationExercises).


### `installation`

To install and run this app:
```
$ git clone git@github.com:ajvanliere/Continuous-Testing-Client.git
$ cd Continuous-Testing-Client
$ npm install
$ npm start
```

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
