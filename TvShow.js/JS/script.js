// Select input elements

let movie = document.querySelector("#movies-movie");
let year = document.querySelector("#movies-year");
let rating = document.querySelector("#movies-rating");


// Select body of table for include table data
let tableBody = document.querySelector("tbody");

// Creat new array for push all objects
let moviesObjectList = [];

// Id for list
let _id = 1;


// // Constructor function for Get Value and push array 
function ratingListArray(_movies, _years, _ratings) {

    moviesObjectList.push({
        _iD: _id,
        _movieS: _movies,
        _yearS: _years,
        _ratingS: _ratings
    });

    _id++;
}

// Clear input data after push array
function clearInputData() {
    movie.value = "";
    year.value = "";
    rating.value = "";


}

// Show object data in Table list
function showObjectData() {
    // Declare  template variables for store html element value
    let tr = `<tr scope="row">
    <th class="id_data" >${moviesObjectList[moviesObjectList.length-1]._iD}</th>
    <td class="movies_data" >${moviesObjectList[moviesObjectList.length-1]._movieS}</td>
    <td class="years_data" >${moviesObjectList[moviesObjectList.length-1]._yearS}</td>
    <td class="ratings_data" >${moviesObjectList[moviesObjectList.length-1]._ratingS}</td>
    
    <td>
    <button type="button" class="table-btn" onclick=deleteData(this,${moviesObjectList[moviesObjectList.length-1]._iD},event)> 
    Delete</button>
    </td>
    <td>
    <button type="button"   class="table-btn" onclick=updateData(this,${moviesObjectList[moviesObjectList.length-1]._iD},event)> 
  Edit </button>
    </td>
            </tr>`


    // Display data  in Table  when  you klik button
    tableBody.innerHTML += tr;

}
// // Get value from input push array
function displayMoviesList(e) {

    // Prevent all default properties in Button
    e.preventDefault();

    // Push inputs value to array
    ratingListArray(movie.value, year.value, rating.value);

    // Show data on Table
    showObjectData();

    // Clear input data
    clearInputData();


}

// Delete data from Table List
function deleteData(item, id, e) {

    //  When klik button : Prevent Default properties
    e.preventDefault();

    for (let i in moviesObjectList) {

        if (moviesObjectList[i]._iD == id) {
            moviesObjectList.splice(i, 1)
        }
        tableBody.removeChild(item.parentElement.parentElement);
    }

}

// Update data from Table List
let editData ;

function updateData(item, id, e) {
    e.preventDefault();

    //  If You want edit data
    if (editData = true) {

        // Select  parent element of Button (tr)
         tr = item.parentElement.parentElement;
        // Select children classes of tr and allow it  edit data 

        tr.querySelector(".movies_data").contentEditable = true;
        tr.querySelector(".years_data").contentEditable = true;
        tr.querySelector(".ratings_data").contentEditable = true;

        // When something change in data - Also Button name change
        item.innerHTML = "Update";

        // When change data 
        editData = false;
        console.log(editData);

    } else {
        // Select children classes of tr and  Don't allow it  edit data 

        tr.querySelector(".movies_data").contentEditable = false;
        tr.querySelector(".years_data").contentEditable = false;
        tr.querySelector(".ratings_data").contentEditable = false;
        // After change data
        item.innerHTML = "Edit";
        // Display update data in list
        for (let i in moviesObjectList) {

            if (moviesObjectList[i]._iD == id) {

                // Select children classes of tr and display data in html
                moviesObjectList[i]._movieS = tr.querySelector(".movies_data").innerHTML;
                moviesObjectList[i]._yearS = tr.querySelector(".years_data").innerHTML;
                moviesObjectList[i]._ratingS = tr.querySelector(".ratings_data").innerHTML;

            }

        }

        editData = true;
  

    }


}