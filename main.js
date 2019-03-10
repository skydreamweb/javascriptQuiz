// Define a function
function submitAnswers() {
  let total = 5; // Total num of questions
  let score = 0; // Total score

  // Get user input value
  let q1 = document.forms["quizForm"]["q1"].value;
  let q2 = document.forms["quizForm"]["q2"].value;
  let q3 = document.forms["quizForm"]["q3"].value;
  let q4 = document.forms["quizForm"]["q4"].value;
  let q5 = document.forms["quizForm"]["q5"].value;

  // Get div's for Display results
  let results = document.getElementById('results');
  let result1 = document.getElementById('result1');
  let result2 = document.getElementById('result2');
  let result3 = document.getElementById('result3');
  let result4 = document.getElementById('result4');
  let result5 = document.getElementById('result5');

  // Form validation - if there is a unchecked radio button
  for (let i = 1; i <= total; i++) {
    if (eval('q' + i) == null || eval('q' + i) == '') { // eval() function evaluates or executes an argument.
      results.innerHTML = '<h3 style="background: red">You have to choose something on question number ' + i + '</h3>';
      return false;
    }
  }

  // Correct Answers
  let answers = ["b", "a", "c", "b", "c"]

  // Check the answers
  for (let i = 1; i <= total; i++) {
    if (eval('q' + i) == answers[i - 1]) {
      score++;
    }
  }

  // Display socre on the top
  results.innerHTML = '<h3 style="background-color: orange">You score <span>' + score + '</span> out of <span>' + total + '</span></h3>';

  // Add question description if the answer was incorrect and green color if it was correct
  if (q1 !== answers[0]) {
    result1.innerHTML = '<h3>I/O Event Handler</h3><p>Every action on a computer is an event. An Event Handler is a callback function that will be called when an event is triggered.A Main Loop listens for event triggers and calls the associated event handler for that event.</p>';
  } else {
    result1.innerHTML = '<h3>Correct answer!</h3>';
    result1.style.backgroundColor = "green";
  }

  if (q2 !== answers[1]) {
    result2.innerHTML = '<h3>Error object</h3><p>Node.js core modules, as well as most of the community-published ones, follow a pattern whereby the first argument to any callback handler is an optional error object. If there is no error, the argument will be null or undefined.</p>';
  } else {
    result2.innerHTML = '<h3>Correct answer!</h3>';
    result2.style.backgroundColor = "green";
  }

  if (q3 !== answers[2]) {
    result3.innerHTML = '<h3>Stubs</h3><p>Stubs are functions/programs that simulate the behaviours of components/modules. Stubs provide canned answers to function calls made during test cases. Also, you can assert on with what these stubs were called. This question helps to get some clue on ones testing 	knowledge - if she/he dont know what stubs are you can ask how she/he does unit testing.</p>';
  } else {
    result3.innerHTML = '<h3>Correct answer!</h3>';
    result3.style.backgroundColor = "green";
  }

  if (q4 !== answers[3]) {
    result4.innerHTML = "<h3>Callback hell </h3><p>Callback hell is caused by poor coding practices. Luckily writing better code isn't that hard! You only need to follow three rules: Keep your code shallow, Modularize and Handle every single error. Dont nest functions. Give them names and place them at the top level of your program. Use function hoisting to your advantage to move functions below the fold. Create reusable functions and place them in a module to reduce the cognitive load required to understand your code. Splitting your code into small pieces like this also helps you handle errors, write tests, forces you to create a stable and documented public API for your code, and helps with refactoring.</p>";
  } else {
    result4.innerHTML = '<h3>Correct answer!</h3>';
    result4.style.backgroundColor = "green";
  }

  if (q5 !== answers[4]) {
    result5.innerHTML = '<h3>Promises</h3><p>Promises are a way to write async code that still appears as though it is executing in a top-down way, and handles more types of errors due to encouraged use of try/catch style error handling.</p>';
    return false;
  } else {
    result5.innerHTML = '<h3>Correct answer!</h3>';
    result5.style.backgroundColor = "green";
  }
}
