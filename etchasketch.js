

//variables for the script
const grid = document.getElementById("sketchContainer");
const resetButton = document.getElementById("resetButton");
let gridSize = 16;



function createTheGrid(sizeForGrid)
{
    let rows = sizeForGrid;
    let columns = sizeForGrid;
    
    grid.style.setProperty('--grid-rows', rows)
    grid.style.setProperty('--grid-columns', columns)

    for(let i = 0; i < (rows * columns); i++)
    {
        let newDiv = document.createElement("div");
        grid.appendChild(newDiv).className = 'divForGrid';
    }
    
    document.querySelectorAll(".divForGrid").forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.backgroundColor = "black";
    })
})

}

function reset()
{
    grid.textContent = "";
    createTheGrid(gridSize);    
}

resetButton.addEventListener("click", reset)

createTheGrid(gridSize);