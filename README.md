
# Football Betting Application Setup

This guide will walk you through the process of setting up the Football Betting Application on your local machine.

## Prerequisites

Before you start, ensure you have Node.js and npm installed on your system. You can download and install them from [Node.js official website](https://nodejs.org/).

## Installation

### Step 1: Download the dataset .csv file (The dataset file is too large and cannot be uploaded on GitHub)

1. Go to the following site: [Male Soccer Players Dataset](https://www.kaggle.com/datasets/stefanoleone992/fifa-23-complete-player-dataset?select=male_players.csv)
   
2. Download male_player.csv
   
3. Put male_player.csv inside the folder football-betting

### Step 2: Install Required Dependencies

1. Navigate to your project directory:
   ```
   cd football-betting
   ```

2. Install the necessary npm packages:
   ```
   npm install
   npm install react-router-dom
   
   ```

### Step 3: Run Data Structure Scripts

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
   Ensure that your working directory is still `football-betting`. The script execution will take approximately 1-2 minutes, and you should expect to see files named `batch{number}.json` and `tree_structure.json` in your directory afterward.

## Running the Application

1. Open terminal in your project directory.

2. Run the following commands:
   ```
   npm run dev
   ```

4. Open the URL provided by `npm run dev` in a web browser to access the local interface of the website.

## Important Notes

- The search engine can only be searched by typing out the correct full name of a player as we do not have enough resource to make it more viable.

## Additional Notes

- Make sure all paths and environment variables are set correctly for Node.js and Python.
- If you encounter any permission issues, recheck the execution policy steps provided in Step 1.
- For troubleshooting, check the console for any errors, or consult the documentation for each package used.
