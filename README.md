# arweave-retrieve
Retrieve data from an Arweave hash. 
# Retrieve Data from Arweave

This is a simple Node.js script to retrieve and display the content of a transaction stored on the Arweave blockchain.

## Features
- Connects to the Arweave network via `https://arweave.net`.
- Retrieves and decodes transaction data using the transaction ID.
- Displays the data directly in the terminal.

## Requirements
- Node.js (version 12 or higher).
- `arweave` JavaScript library installed via npm.

## Installation
1. **Install Node.js**  
   Download and install Node.js from [https://nodejs.org](https://nodejs.org).

2. **Install the `arweave` Library**  
   Run the following command to install the library globally:
   ```bash
   npm install arweave
   ```

3. **Create the Script File**  
   - Create a file named `get_arweave_data.js` in your preferred directory.
   - Paste the script code into the file.

## Usage
1. Edit the `get_arweave_data.js` file and replace the `transactionId` variable with the desired Arweave transaction ID.

2. Run the script:
   ```bash
   node get_arweave_data.js
   ```

The script will connect to the Arweave network and display the retrieved data in the terminal.

## Example Output
```bash
Data retrieved from Arweave:
Hello, Arweave!
```

## Notes
- Ensure your internet connection is active.
- You only need the `transactionId` to fetch publicly accessible data.
