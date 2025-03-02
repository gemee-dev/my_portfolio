let tablinks = document.getElementsByClassName("tab-links");
let tabcontent = document.getElementsByClassName("tab-contents");

function openTab(tabname) {
    // Remove 'active-link' from all tab links
    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
    }

    // Remove 'active-tab' from all tab contents
    for (let tab of tabcontent) {
        tab.classList.remove('active-tab');
    }

    // Add 'active-link' to clicked tab
    event.currentTarget.classList.add('active-link');

    // Add 'active-tab' to the corresponding tab content
    document.getElementById(tabname).classList.add('active-tab');
}

    let text = "Hi, I am Gemechu Bonsa, a full-stack web developer. Welcome to my portfolio website.";
    let index = 0;
    let isDeleting = false; // Track whether we are deleting

    function typeWriter() {
        let textElement = document.getElementById("text");

        if (!isDeleting) {
            // Typing phase
            if (index < text.length) {
                textElement.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100); // Adjust typing speed
            } else {
                isDeleting = true; // Start deleting after typing is done
                setTimeout(typeWriter, 1000); // Wait before deleting
            }
        } else {
            // Deleting phase
            if (index > 0) {
                textElement.innerHTML = text.substring(0, index - 1);
                index--;
                setTimeout(typeWriter, 150); // Adjust deleting speed
            } else {
                isDeleting = false; // Start typing again after deleting
                setTimeout(typeWriter, 500); // Wait before typing again
            }
        }
    }

    typeWriter(); // Start the effect
document.addEventListener("DOMContentLoaded", function () {
const toggle = document.querySelector("nav span");
const navMenu = document.querySelector("nav ul");

toggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
});
});
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.createElement("button");
    toggleButton.classList.add("toggle");
    toggleButton.innerHTML = "☰";
    
    const nav = document.querySelector("nav");
    const navList = document.querySelector("nav ul");
    nav.prepend(toggleButton);
    
    toggleButton.addEventListener("click", function () {
        navList.classList.toggle("show");
    });
});   