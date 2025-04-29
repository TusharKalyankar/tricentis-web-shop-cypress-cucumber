"#Cypress Web Automation for Tricentis Webshop" 

## Project Overview
This project automates Tricentis website using Cypress Cucumber framework with Javascript, covering:
- Login to the application.
- Search and add a product into Shopping Cart & Checkout process with all validations and assertions.
- Includes video evidences in the videos folder under cypress folder.

## How to Run the Tests
1. Install dependencies:
   ```sh
   npm install

2. Run Cypress tests (Headless Mode):
   ```sh
   npx cypress run --browser <browser_name>
Note: If not included browser it will default run on Electron browser

3. Run Cypress tests (Headless Mode):
   ```sh
   npx cypress run --browser <browser_name> --headed
Note: If not included browser it will default run on Electron browser

4. Run Manually via Cypress Runner:
   ```sh
   npx cypress open

## Project Structure

```
cypress/
  ├── tests/features/          # Test cases for Magento website in form of features
  ├── fixtures/testData.json    # Stores Test data
  ├── support/pageObjects      # Page Objects for respective pages
  ├── support/step_definitions # Step definitions for respective features
  ├── videos/                  # Contains videos of the test execution
  ├── cypress.config.js        # Cypress configuration
```
Note: If you dont see any file, It might be under gitignore

