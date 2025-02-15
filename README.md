# Player Management App

This is a React-based application designed for managing player data, including details such as status, position, nationality, and physical data. Players can be added, edited, and stored locally for persistence.

## About the Project

This project was created as a challenge to practice React and TypeScript, with minimal usage of artificial intelligence. The code utilized was refactored to ensure better organization and maintainability. The main objective was to build a user-friendly interface for managing player details, with features like sorting by name and filtering by position, while also utilizing `localStorage` for persistent data.


## Features

- Add new players with detailed information (name, position, nationality, etc.)
- Edit player details, including status and position
- Filter players by name or position
- Persistent storage with `localStorage`
- Display sorted player list by name
- Status management with predefined values ("Active", "Injured", "Suspended")

## Requirements

- Node.js (version 14 or higher)
- React (v17+)
- TypeScript
- LocalStorage support (for storing player data)

## Installation

1. Clone this repository:
 ```sh
 git clone https://github.com/your-username/player-management-app.git
 cd player-management-app
 ```
2.Install dependencies:
  ```sh
    npm install
  ```
3.Start the development server
   ```sh
   npm run dev
   ```

## Usage

### Adding a new player:
- Fill out the form with the player's details and click "Add Player" to add them to the list.

### Editing a player's information:
- Click on the player in the list to open the edit form, make changes, and save them.

### Filtering players:
- Use the search bar to filter players by name.
- Use the dropdown menu to filter players by position.

### Sorting players:
- The player list is automatically sorted alphabetically by name.

## Storage

- Player data is stored in the browser's `localStorage`, allowing the data to persist even after the page is reloaded.
- The data is updated whenever a player is added or edited.

## Improvements

- Implement search functionality for filtering players by other attributes, such as nationality or jersey number.
- Add more customization options for managing player data.
- Implement a user authentication system to secure player data.

## Contribution

If you'd like to suggest improvements or report issues, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
