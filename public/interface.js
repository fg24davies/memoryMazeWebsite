document.addEventListener("DOMContentLoaded", function () {
  let newGame = new Maze([
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1],
  ]);

  maze1 = newGame.maze.flat();

  const submitDirections = document.getElementById("submitDirections");
  const playButton = document.getElementById("playButton");
  const container = document.getElementById("gridContainer");

  function createMaze(maze) {
    let size = Math.sqrt(maze.length);

    container.style.setProperty("--grid-rows", size);
    container.style.setProperty("--grid-cols", size);

    for (c = 0; c < maze.length; c++) {
      let cell = document.createElement("div");

      if (maze[c] === 1) {
        cell.style.backgroundColor = "rgb(130, 79, 3)";
      } else if (maze[c] === 2) {
        cell.style.backgroundColor = "red";
      } else if (maze[c] === 3) {
        cell.style.backgroundColor = "white";
        cell.innerHTML = "EXIT";
      } else if (maze[c] === 0) {
        cell.style.backgroundColor = "rgb(186, 245, 135)";
      }

      container.appendChild(cell).className = "cell";
    }
  }

  function hideEverythingButMaze() {
    document.getElementById("instructions").style.visibility = "hidden";
    document.getElementById("newMaze").style.visibility = "hidden";
  }
  function removeMaze() {
    container.remove();
  }

  function showDirectionsField() {
    document.getElementById("directions").style.visibility = "visible";
  }

  function showResult(result) {
    console.log(result);
    document.getElementById("directions").style.visibility = "hidden";
    let outcome = document.createElement("p");
    document.getElementById("resultContainer").appendChild(outcome).className =
      "outcome";
    let playAgainButton = document.createElement("button");
    document
      .getElementById("resultContainer")
      .appendChild(playAgainButton).className = "playAgainButton";
    playAgainButton.innerHTML = "Play again!";
    if (result === "Finish") {
      outcome.innerHTML = "Congratulations, you are free!";
    } else {
      outcome.innerHTML = "Unlucky! You are " + result;
    }

    playAgainButton.addEventListener("click", function () {
      window.location.reload();
    });
  }

  playButton.addEventListener("click", function () {
    hideEverythingButMaze();
    // Maze will appear after 1s
    setTimeout(() => {
      createMaze(maze1);
    }, 1000);

    setTimeout(() => {
      removeMaze();
      showDirectionsField();
    }, 5000);
    // setTimeout(hideMaze, 6000);
    // setTimeout(showDirectionsField, 6000);
  });

  submitDirections.addEventListener("click", function () {
    let directionString = document.getElementById("solution").value;
    let directions = directionString.split("");
    let result = newGame.attemptWith(directions);

    showResult(result);
  });
});
