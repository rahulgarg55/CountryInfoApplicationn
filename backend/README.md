The server will run on `http://localhost:5000` by default.
First make a .env file in the root directory and add the following line:   
PORT = 5000 
## Installation Backend
Install the dependencies: npm install and npm install dotenv and then you can start backend server by npm run dev or npm start
API documentation available at http://localhost:5000/api-docs
## API Endpoints

- `GET /api/countries/search/:name`: Search for countries by name
- `GET /api/countries/:countryCode`: Get detailed information about a specific country by its country code

## Technologies Used

- Node.js
- Express
- Axios
- CORS

