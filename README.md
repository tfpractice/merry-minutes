# Merry Minutes

Everything here should be coded in HTML and Javascript (ReactJS). You can use any package manager and/or boilerplate you'd like. Please send all source code files in an email (zipped/compressed) with instructions on how to run them.

Create an input to take a start time. The input should be in hh:mm:ss format, which represents: hour, minute and seconds, respectively. The input should be a valid input.

Create an input to take an end time. The input should be in hh:mm:ss format. The end time should be a valid input and should represent a time later than the start time.

Create an output div/text/span to represent the countdown counter (in seconds).

Create a button with "Start Countdown" text on it. When user clicks the button, it should:

Verify both inputs' validity, and throw error message if there is a problem, e.g. input format, intervals, etc

Reset the countdown counter output div/text/span

Calculate the number of seconds difference between start time and end time, and display it as the output's initial state

Start decreasing the output by one for every second (behave like a countdown timer)

All time inputs, output and button should be rendered in ReactJS.

Bonus point if you can use Redux for button action and state transition.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode
