![image](https://user-images.githubusercontent.com/30720508/131891305-6915a002-5083-44f2-aa22-fdace2d0ff46.png)

---- 
### ⁉️ Why

For fun and practise! Based on the Codewars Kata [Maze Runner](https://www.codewars.com/kata/58663693b359c4a6560001d6) and the code I had written to solve the kata, I built a single page front end app which tests the users memory by showing a maze for 4 seconds and then asking for the directions to escape, with the aim to practise my JavaScript DOM, HTML and CSS.


---- 
### 🧭  What can you do on Memory Maze Game:

Test your memory of course! 

- On the web page you have an animated title, instructions and a play button
- Click Play! and a maze will appear for 4s
- The maze then disappears and a text field asking for direction comes up 
- You have to remember the way out and input the directions to escape
- If you don't escape you can try again, if you do, you can play again!

To play please visit: https://memory-maze.herokuapp.com/

----
### 🛠  TechStack

Pipeline: [![Build Status](https://app.travis-ci.com/fg24davies/memoryMazeWebsite.svg?branch=main)](https://app.travis-ci.com/fg24davies/memoryMazeWebsite) [![Coverage Status](https://coveralls.io/repos/github/fg24davies/memoryMazeWebsite/badge.svg?branch=main)](https://coveralls.io/github/fg24davies/memoryMazeWebsite?branch=main)

- JavaScript, HTML and CSS 
- Node.js
- Express for the server and then hosted on Heroku
- Travis CI: automatically builds and tests code changes, for immediate feedback on the success of the change
- Coveralls: integrated with Travis CI to provide test coverage report

##### 🏃🏼‍♀️ How to run the test suite 

- Clone repository
- Run ```npm install```
- Run ```npm run test ```

----
### ✏️ Things to do

- There is only one, hardcoded maze so 'playing again' is a bit meaningless
- Following user stories to be implemented

Extra user stories:
```
As a player
So that I am always improving me memory
I would like lots of different mazes
```

```
As a player with a variable memory
So that I can choose a level appropriate to how I'm feeling
I would like the option small, medium and large maze
```

```
As a developer
So I do not have to store lots of mazes waste memory
I would like to generate the maze on click of the 'Play' button
```

- [] Won't let you press escape or an alert comes up if you press enter without entering anything
- [] Direction input doesn't have to be in capitals
- [] Invalid characters/non nsew letters to have an alert?
- [] Test the front end

----
### 🕵🏼 What I've learnt

- more CSS including animating frames
- how to integrate Travis CI and Coveralls to create a simple pipeline
- mocking in Jest
- strengthened DOM skills, through timeouts, creating elements
---- 

### 🌍 Useful links from the www

- Integrating Travis CI/Coveralls
  - https://www.youtube.com/watch?v=bt1iOy9lv0U
  - https://docs.travis-ci.com/user/for-beginners/
   
- Deploying a server on Heroku 
  - https://devcenter.heroku.com/articles/getting-started-with-ruby#prepare-the-app

---- 
