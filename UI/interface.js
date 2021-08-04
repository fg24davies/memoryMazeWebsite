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
  const playButton = document.getElementById("createMaze");
  const container = document.getElementById("gridContainer");

  function createMaze(maze) {
    let size = Math.sqrt(maze.length);

    container.style.setProperty("--grid-rows", size);
    container.style.setProperty("--grid-cols", size);

    for (c = 0; c < maze.length; c++) {
      let cell = document.createElement("div");

      if (maze[c] === 1) {
        cell.style.backgroundColor = "brown";
      } else if (maze[c] === 2) {
        cell.style.backgroundColor = "green";
      } else if (maze[c] === 3) {
        cell.style.backgroundColor = "light blue";
      }

      container.appendChild(cell).className = "cell";
    }
  }

  function hideEverythingButMaze() {
    document.getElementById("instructions").style.visibility = "hidden";
    document.getElementById("newMaze").style.visibility = "hidden";
  }
  function hideMaze() {
    container.style.visibility = "hidden";
  }

  function showDirectionsField() {
    document.getElementById("directions").style.visibility = "visible";
  }

  function showResult(result) {
    console.log(result);
    document.getElementById("directions").style.visibility = "hidden";
    let outcome = document.createElement("p");
    outcome.innerHTML = "You are..." + result;
    document.getElementById("resultContainer").appendChild(outcome).className =
      "outcome";
  }

  playButton.addEventListener("click", function () {
    //createMaze(maze1);
    hideEverythingButMaze();
    // Maze will appear after 1s
    setTimeout(() => {
      createMaze(maze1);
    }, 1000);

    setTimeout(() => {
      hideMaze();
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
