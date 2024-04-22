
# Football Betting Application Setup

This guide will walk you through the process of setting up the Football Betting Application on your local machine.

## Prerequisites

Before you start, ensure you have Node.js and npm installed on your system. You can download and install them from [Node.js official website](https://nodejs.org/).

## Installation

### Step 1: Install Required Dependencies

1. Navigate to your project directory:
   ```
   cd football-betting
   ```

2. Install the necessary npm packages:
   ```
   npm install
   npm install react-router-dom
   npm install -g serve
   npm install axios
   ```

3. To ensure scripts can run, execute the following command in your terminal:
   ```
   Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser
   ```

   **Note:** This command is for PowerShell and is required to allow the execution of scripts on your system.

### Step 2: Run Data Structure Scripts

1. Compile and run the C++ script:
   ```
   g++ main.cpp -o main
   ./main
   ```
   If the compilation is successful, you should see a file named `final_player.csv` in your directory.

2. Run the Python script:
   ```
   python name.py
   ```
   Ensure that your working directory is still `football-betting`. The script execution will take approximately 1-2 minutes, and you should expect to see files named `batch{number}.json` in your directory afterward.

## Running the Application

1. Open two terminals in your project directory.

2. In the first terminal, start the local server:
   ```
   serve -l 8080
   ```

3. In the second terminal, launch the development server:
   ```
   npm run dev
   ```

4. Open the URL provided by `npm run dev` in a web browser to access the local interface of the website.

## Additional Notes

- Make sure all paths and environment variables are set correctly for Node.js and Python.
- If you encounter any permission issues, recheck the execution policy steps provided in Step 1.
- For troubleshooting, check the console for any errors, or consult the documentation for each package used.
