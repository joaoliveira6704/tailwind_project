// Function to fetch and parse JSON data
async function fetchPlayers() {
  try {
    const response = await fetch("json/player_card.json"); // Path to your JSON file
    const players = await response.json(); // Parse JSON data

    // Get the grid container
    const gridContainer = document.querySelector(".grid");

    // Clear existing content (if any)
    gridContainer.innerHTML = "";

    // Loop through each player and create a card
    players.forEach((player) => {
      const { name, team, age, height, position, image } = player;

      // Create the card HTML
      const card = `
            <div id="player-card" class="w-full max-w-sm border border-amber-500 rounded-lg shadow-sm">
              <div class="flex flex-col items-center py-5 px-8">
                <img class="w-29 h-29 mb-10 mx-10 rounded-full shadow-lg" src="${image}" alt="${name}" />
                <h3 class="mb-3 text-xl font-large text-gray-900 sm:text-md dark:text-white">
                  ${name}
                </h3>
                <div class="w-full text-center"> 
                  <p class="text-sm text-gray-300 mb-2">
                    ${team}
                  </p>
                  <p class="text-sm text-gray-200 mb-2">
                    ${age} Years
                  </p>
                  <p class="text-sm text-gray-200 mb-2">
                    ${height} cm
                  </p>
                  <p class="text-sm text-gray-200 mb-2">
                    ${position}
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
    console.error("Error fetching or parsing JSON:", error);
  }
}

// Call the function to fetch and display players
fetchPlayers();
