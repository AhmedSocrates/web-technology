// --- Step 1: Greeting Function ---
function greetUser() {
    alert("Welcome to SECJ3483 Web Technology!");
}

// --- Step 3: Search Function ---
function searchKeyword() {
    const input = document.querySelector(".srch").value;
    alert("You searched for: " + input);
}

// --- Step 2 & 4: DOM Manipulation & JSON Simulation ---
// It is best to run this once the window has loaded
window.onload = function() {
    // Step 2: Update the announcement text
    const announcementBox = document.getElementById("announcement");
    if (announcementBox) {
        announcementBox.innerText = " Midterm assessment is on Week 7!";
    }

    // Step 4: JSON Data Rendering
    const resources = [
        { title: "Lecture 1", link: "lecture1.pdf" },
        { title: "Lecture 2", link: "lecture2.pdf" }
    ];

    resources.forEach(item => {
        // This adds links to the announcement container
        announcementBox.innerHTML += `<p><a href="${item.link}">${item.title}</a></p>`;
    });
};