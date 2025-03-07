# Bitcoin Payment Tracker

This project consists of two main directories: **API** (backend) and **Client** (frontend). The **API** is responsible for managing user authentication, transaction tracking, and address validation, while the **Client** provides the user interface for interacting with the application.

## Directory Structure

```
bitcoin-payment-tracker/
│
├── api/       # Backend (Node.js, MongoDB)
└── client/    # Frontend (React.js)
```

## Requirements

To run the application locally, you need the following tools installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/) (for development)
- [Rust](https://www.rust-lang.org/tools/install) (for validating BTC addresses)

## Running the Project

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/bitcoin-payment-tracker.git
cd bitcoin-payment-tracker
```

### Step 2: Set Up Docker Containers

The project uses Docker Compose to run both the backend and frontend services. Follow the steps below to start both parts of the application:

```bash
# Start the backend (API)
./api/environment/manage.sh start
```

### Step 3: Access the Application

After the containers are up and running, you can access the frontend application in your browser:

[http://localhost:3000](http://localhost:3000)

### Step 4: Manage the Application

You can manage the Docker containers with the following commands:

- **Start containers**:

  ```bash
  ./api/environment/manage.sh start
  ```

- **Stop containers and remove volumes**:

  ```bash
  ./api/environment/manage.sh stop
  ```

- **View real-time status**:

  ```bash
  ./api/environment/manage.sh status
  ```

## API Endpoints

### Authentication

- **POST /api/login**: Log in with email and password, receiving a JWT token.
- **GET /api/auth/me**: Retrieve logged-in user information (requires valid JWT token).

### Bitcoin Transactions

- **GET /api/transactions?address=BTC_ADDRESS**: Retrieve transactions for a given BTC address.

### Address Validation (Rust Integration)

- **POST /api/validate-address**: Validate if a BTC address is valid.

## UI Components

- **Transaction Table**: Displays Bitcoin transactions with pagination or infinite scroll.
- **Address Form**: Allows users to input and validate BTC addresses in real-time.

## Technologies Used

- **Frontend**: React.js, React Table, Recharts, Storybook
- **Backend**: Node.js, Express.js, MongoDB, JWT Authentication
- **Blockchain API**: Blockchain.com API for transaction tracking
- **Rust**: Used for validating BTC addresses
- **DevOps**: Docker, Docker Compose

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.
