const quoteContainer = document.querySelector("#quote-container");
const quoteElement = document.querySelector("#quote");
const newQuoteButton = document.querySelector("#new-quote-button");

// Function to fetch a random quote from an external API
async function getQuote() {
    try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];

        quoteElement.textContent = randomQuote.text;
    } catch (error) {
        console.error("Error fetching a quote:", error);
    }
}

// Event listener
newQuoteButton.addEventListener("click", getQuote);


// Initial call to get a random quote when the page loads
getQuote();