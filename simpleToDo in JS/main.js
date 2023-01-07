let addTask = document.getElementById('addTask');
let todoContainer = document.getElementById('todoContainer');
let inputField = document.getElementById('inputField');
let clickCounter = 0;

addTask.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    todoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
        paragraph.style.color = "gray";

        clickCounter++; //this counter variable increments the no. of clicks
        if (clickCounter % 2 === 0) { //This condition is used to perform the second action (by checking the clickCounter) on every second click, % 2 === 0 checks whether the no. of clicks are even and divisible by 2 with no remainder
    // Action to occur on second click goes here
        paragraph.style.textDecoration = ""; //this removes the line-through text-decoration
        paragraph.style.color = ""; //this removes the text color from gray and change back to the default color i.e, black
  }
    })
    paragraph.addEventListener('dblclick', function(){
        todoContainer.removeChild(paragraph);
    })    
})
