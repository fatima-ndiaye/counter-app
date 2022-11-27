// grab the count-el element, store it in a countEl variable
let countEl = document.getElementById("count-el");
//Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
// intialize the count as 0
let count = 0;
// increment the count variable when the button is clicked
function increment() 
{
    count += 1;
    // set countEl's innerText to the count
    countEl.textContent = count ;
}
function save()
{
    //Create a variable that contains both the count and the dash separator"
    let entry = count + " - "
    //Render the variable in the saveEl using innerText
    saveEl.textContent += entry;
    count = 0;
    countEl.textContent = count;
}
function reset ()
{
    count = 0;
    countEl.innerText = 0;
    saveEl.innerText = "Previous entries:"
}


