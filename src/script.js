let submitBtns = document.getElementsByClassName("submitBtn");
let inputBoxes = document.getElementsByTagName("textarea"); 

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

// Event listener for all buttons
for (var i = 0; i < submitBtns.length; i++) {
    submitBtns[i].addEventListener("click", addComment);
}
for (var i = 0; i < inputBoxes.length; i++) {
    inputBoxes[i].addEventListener("keypress", addCommentEnter);
}
