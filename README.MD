# Country Info Application

This project is a comprehensive Country Info Application that allows users to search for countries and view detailed information about them. It consists of a React frontend and a Node.js backend, providing a seamless user experience for exploring country data.
API documentation available at http://localhost:5000/api-docs

If you are running project locally both frontend and backend then even upon refreshing the page you will get the data it will not be lost. 
But in deployed version it will be lost because I have not deployed the backend frontend again.
So you just can take idea of deployed one from vercel url but proper all workings are there in local version.


You Will get Detailed Information for that Particular Company By Clicking on the Box of Searched Company
![image](https://github.com/user-attachments/assets/5c00a796-c39a-4fc4-b79b-637f933569bf)

## Features

- Search for countries by name
- View a list of countries based on search query
- See detailed information about a selected country
- Responsive design for various screen sizes
- Error handling and loading states

## Project Structure

- `frontend/`: React application
- `backend/`: Node.js server

## Docker Support

This project includes Docker support for the backend, allowing you to run the server in a containerized environment. Run below command at root of backend folder.

 Build the Docker image:  docker build -t countryinfobackend .
 
This command builds a Docker image named `countryinfobackend` based on the Dockerfile in the current directory.

### Running the Backend with Docker: docker run -p 5000:5000 -d countryinfobackend

To run the backend using the Docker image: docker run -p 5000:5000 -d countryinfobackend


## Technologies Used

### Frontend
- React (Create React App)
- Redux Toolkit for state management
- Axios for API requests
- CSS for styling

### Backend
- Node.js with Express
- Axios for external API requests
- Docker

## Setup Instructions

### Frontend

1. Navigate to the frontend directory:


2. Install dependencies:

3. Start the development server: npm start

4. The React application will be available at `http://localhost:3000`

### Backend



1. Navigate to the backend directory:

2. Install dependencies:

## Installation Backend

Install the dependencies: npm install and npm install dotenv and then you can start backend server by npm run dev or npm start

API documentation available at http://localhost:5000/api-docs

3. Create a `.env` file in the backend directory and add necessary environment variables (if any).

4. Start the server:  npm run dev

5. The backend server will be running on `http://localhost:5000` (or the specified port)

## API Endpoints

- `GET /api/countries?name={country_name}`: Search for countries
- `GET /api/countries/{country_code}`: Get detailed information about a specific country

## Components

- `CountrySearch`: Search input for country names
- `CountryList`: Displays list of countries based on search
- `CountryCard`: Shows basic country details
- `CountryDetail`: Displays detailed country information
- `LoadingSpinner`: Indicates loading state
- `ErrorNotification`: Displays error messages

## State Management

Redux Toolkit is used for state management, with slices for:
- Country search results
- Detailed country information
- Loading and error states

## Error Handling

The application includes comprehensive error handling on both frontend and backend, with meaningful error messages displayed to the user.

## Styling

The application is styled using CSS, ensuring a visually appealing and user-friendly interface.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

