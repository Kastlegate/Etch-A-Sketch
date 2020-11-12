

//variables for the script
const grid = document.getElementById("sketchContainer");
const resetButton = document.getElementById("resetButton");
const invisibleGridButton = document.getElementById("invisibleGridButton");
let gridSize = 16;
let gridToggle = false;


// function to create the grid
function createTheGrid(sizeForGrid)
{
    gridToggle = true;
    let rows = sizeForGrid;
    let columns = sizeForGrid;
    //borderstyle = "1px";  WHY IS THIS HERE, KASEY?
    grid.style.setProperty('--grid-rows', rows)
    grid.style.setProperty('--grid-columns', columns)

    //for loop to append new divs onto the sketchcontainer depending on sizeForGrid (the default is 16 rows and 16 columns)
    for(let i = 0; i < (rows * columns); i++)
    {   
        //creating a new div element and appending it to the sketchContainer 
        let newDiv = document.createElement("div");
        newDiv.id = "divForGrid";
        grid.appendChild(newDiv).className = 'divForGrid';
    }
    
    //adding an event listener to each div with the divForGrid classname to change the color to black after being moused over 
    document.querySelectorAll(".divForGrid").forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.backgroundColor = "black";
        })
    })
}

//function to reset the entire grid
function reset()
{
    grid.textContent = "";
    createTheGrid(gridSize);    
}


//function to toggle the outline of the grid off and on.
function invisibleGrid()
{
    divForGrid = document.getElementById("divForGrid");
    
    //if statement that checks the current toggle state, flip it on or off, and turn the outline on and off
    if (gridToggle == true)
    {
        gridToggle = false;        
        document.querySelectorAll(".divForGrid").forEach(item => {
                item.style.border = "none";
            })        
    }

    else if (gridToggle == false)
    {
        gridToggle = true;        
        document.querySelectorAll(".divForGrid").forEach(item => {            
                item.style.border = "1px solid lightgrey";
            })        
    }
}

//adds listeners to each button and the functions that enact on the event
resetButton.addEventListener("click", reset)
invisibleGridButton.addEventListener("click", invisibleGrid)

//calls the create the initial grid with the default gridSize
createTheGrid(gridSize);
