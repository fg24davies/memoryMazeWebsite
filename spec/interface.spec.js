test("A maze is created when the new maze button is clicked", () => {
  document.body.innerHTML = `<div id="newMaze">
    <button type="button" id="createMaze"> New Maze </button>
    </div>
    <div id="gridContainer">
  `;

  require("../UI/interface");

  const container = document.getElementById("gridContainer");
  const createMaze = document.getElementById("createMaze");

  createMaze.click();
  expect(container.childElementCount).toEqual(49);
});
