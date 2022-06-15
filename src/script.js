let submitBtns = document.getElementsByClassName("submitBtn");
let inputBoxes = document.getElementsByTagName("textarea"); 
let likeBtns = document.getElementsByClassName("like"); 
let bookmarkBtns = document.getElementsByClassName("bookmark"); 
let searchBox = document.getElementById("search"); 
let clearBtns = document.getElementsByClassName("clearOne"); 
let clearAllBtn = document.getElementById("clearAll") 
// Functions for event listeners 

let addComment = (e) => {
    e.preventDefault(); 
    // Previous element sibling will be the text box 
    let comment = e.target.previousElementSibling;
    const commentValue = comment.value; 

    // On empty comment, do nothing 
    if (commentValue == ''){
        return;
    }

    // Create div containing username and comment
    // For purposes of this mock, we assume username is nico.atsume 
    let newDiv = document.createElement('div'); 
    newDiv.className = 'comment';

    let newSpan = document.createElement('span'); 
    newSpan.className = 'username';

    const username = document.createTextNode('nico.atsume');
    newSpan.appendChild(username);
    newDiv.appendChild(newSpan);
    const commentValueNode = document.createTextNode(' ' + commentValue);
    newDiv.appendChild(commentValueNode);

    // Get the comments div and post
    let comments = e.target.parentElement.previousElementSibling; 
    comments.appendChild(newDiv);
    // Reset comment value
    comment.value = '';
}

let addCommentEnter = (e) => {
    // If the user presses the "Enter" key on the keyboard
    if (e.key === "Enter") {
        // Cancel the default action, if needed
        e.preventDefault();
        // Trigger the button element with a click
        e.target.nextElementSibling.click();
    }
}

let bookmarkPost = (e) => {
    (e.target.src === "https://freepngimg.com/thumb/instagram/60239-like-icons-bookmark-button-computer-facebook-instagram.png")?
        e.target.src = "https://cdn-icons-png.flaticon.com/128/102/102279.png" : e.target.src = "https://freepngimg.com/thumb/instagram/60239-like-icons-bookmark-button-computer-facebook-instagram.png"
 
}

let likePost = (e) => {
    const heartURL = "https://cdn-icons-png.flaticon.com/128/1077/1077035.png";
    const likedHeartURL = "https://cdn-icons-png.flaticon.com/128/833/833472.png";
    let numLikes = e.target.parentElement.nextElementSibling.innerText.split(" ")[0];
    console.log(numLikes) 
    if (e.target.src === heartURL) {
        e.target.src = likedHeartURL; 
        numLikes++; 
    }
    else {
        e.target.src = heartURL; 
        numLikes--;
    }
    e.target.parentElement.nextElementSibling.innerText = `${numLikes} likes`;
}

let enableDropdown = (e) => {
   e.target.nextElementSibling.classList.toggle("showDropdown");
}
let disableDropdown = (e) => {
    // First check that the user isn't clicking in the dropdown itself
    if (e.target === searchBox){
        return;
    }
    else {
        searchBox.nextElementSibling.classList.toggle("showDropdown"); 

    }
}

let clearAll = (e) => {
    e.target.parentElement.parentElement.innerHTML = `<div class="recent">
    <h3>Recent</h3>
    <p id="clearAll">Clear all</p>
    </div>`

}

let clearOne = (e) => {
    e.target.parentElement.parentElement.remove();
}
// EVENT LISTENERS // 
// Event listeners for all buttons
for (let i = 0; i < submitBtns.length; i++) {
    submitBtns[i].addEventListener("click", addComment);
}
for (let i = 0; i < inputBoxes.length; i++) {
    inputBoxes[i].addEventListener("keypress", addCommentEnter);
}

// Change heart/bookmark icons 
for (let i = 0; i < likeBtns.length; i++) {
    likeBtns[i].addEventListener("click", likePost);
}
for (let i = 0; i < bookmarkBtns.length; i++) {
    bookmarkBtns[i].addEventListener("click", bookmarkPost);
}

// Enable dropdown
searchBox.addEventListener("focus", enableDropdown);
searchBox.addEventListener("blur", disableDropdown);
// Dropdown clearAll and clearOne 
clearAllBtn.addEventListener("click", clearAll); 
for (let i = 0; i < clearBtns.length; i++) {
    clearBtns[i].addEventListener("click", clearOne);
}