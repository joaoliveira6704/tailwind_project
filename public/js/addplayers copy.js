// Function to fetch and parse XML data
async function fetchPlayers() {
  try {
    const response = await fetch("../xml/players.xml"); // Path to your XML file
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    // Get all player nodes
    const players = xmlDoc.querySelectorAll("player");

    // Get the grid container
    const gridContainer = document.querySelector(".grid");

    // Clear existing content (if any)
    gridContainer.innerHTML = "";

    // Loop through each player and create a card
    players.forEach((player) => {
      const name = player.querySelector("name").textContent;
      const team = player.querySelector("team").textContent;
      const age = player.querySelector("age").textContent;
      const height = player.querySelector("height").textContent;
      const position = player.querySelector("position").textContent;
      const image = player.querySelector("image").textContent;

      // Create the card HTML
      const card = `
            <div class="w-full max-w-sm border border-amber-500 rounded-lg shadow-sm">
              <div class="flex flex-col items-center py-5 px-8">
                <img class="w-29 h-29 mb-10 mx-10 rounded-full shadow-lg" src="${image}" alt="${name}" />
                <h3 class="mb-3 text-xl font-large text-gray-900 sm:text-md dark:text-white">
                  ${name}
                </h3>
                <div class="w-full text-left"> 
                  <p class="text-sm text-gray-300 mb-2">
                    Team: ${team}
                  </p>
                  <p class="text-sm text-gray-200 mb-2">
                    Age: ${age} Years
                  </p>
                  <p class="text-sm text-gray-200 mb-2">
                    Height: ${height} cm
                  </p>
                  <p class="text-sm text-gray-200 mb-2">
                    Position: ${position}
                  </p>
                </div>
                <div class="flex mt-4 md:mt-6">
                  <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-tr from-amber-500 to-yellow-200 rounded-lg hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300">
                    View Player
                  </a>
                </div>
              </div>
            </div>
          `;

      // Append the card to the grid container
      gridContainer.insertAdjacentHTML("beforeend", card);
    });
  } catch (error) {
    console.error("Error fetching or parsing XML:", error);
  }
}

// Call the function to fetch and display players
fetchPlayers();
