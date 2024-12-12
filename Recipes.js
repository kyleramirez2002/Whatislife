/*<!--Date Started: Dec 5, 2024-->
<!--Date Finished: Dec 11, 2024-->
<!--Programmer: Kyle Matthew Ramirez-->*/

const pages = [
    { title: "Home", url: "ProjectFinal.html" },
    { title: "Events", url: "Events.html" },
    { title: "Catering", url: "catering.html" },
    { title: "History", url: "Mission.html" },
    { title: "Mission", url: "History.html" },
    { title: "About Us", url: "about.html" },
    { title: "Contact", url: "contact.html" },
    { title: "Inspiration", url: "inspo.html" },
    { title: "Recipes", url: "Recipes.html" },
];

// Search function that filters and displays the search results
function search() {
    const query = document.getElementById("searchQuery").value.toLowerCase();
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; // Clear previous results

    // Check if the query matches any page titles
    const filteredPages = pages.filter(page => page.title.toLowerCase().includes(query));

    if (filteredPages.length > 0) {
        filteredPages.forEach(page => {
            const resultDiv = document.createElement("div");
            resultDiv.classList.add("result");

            const resultLink = document.createElement("a");
            resultLink.href = page.url;
            resultLink.textContent = page.title;

            resultDiv.appendChild(resultLink);
            resultsContainer.appendChild(resultDiv);
        });
        resultsContainer.style.display = "block"; // Show the results container
    } else {
        resultsContainer.innerHTML = "<p>No results found.</p>";
        resultsContainer.style.display = "block"; // Show the results container even when no results
    }
}

// Function to hide results when clicking outside
function hideResults(event) {
    const resultsContainer = document.getElementById("searchResults");
    const searchBox = document.getElementById("searchQuery");

    // Check if the click is outside the search box or results container
    if (!searchBox.contains(event.target) && !resultsContainer.contains(event.target)) {
        resultsContainer.style.display = "none"; // Hide the results
    }
}

// Event listener to close results when clicking outside
document.addEventListener("click", hideResults);

// Optionally, show results container if search is active (when focus is on search input)
document.getElementById("searchQuery").addEventListener("focus", () => {
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.style.display = "block"; // Show results when focused on the search box
});

// Function to redirect when a button is clicked
function redirectToPage(pageUrl) {
    window.location.href = pageUrl; // Redirects to the given URL
}

// Example usage: Add event listener to the button(s)
document.getElementById("myButton").addEventListener("click", function() {
    redirectToPage("JoinUs.html"); // Redirects to somepage.html when the button is clicked
});