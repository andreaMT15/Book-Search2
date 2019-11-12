# Book Search

### Developer: Andrea Minhas

This app is designed to use the Google Books API to obtain information for a particular book title that is searched by the user. Once the user has searched for a book title, the app will then display a list of results which will include the book title, author, publishing company. The user will also have the option to add the book results to a reading list.

<img width="1437" alt="Screen Shot 2019-11-11 at 5 40 53 PM" src="https://user-images.githubusercontent.com/44379703/68637723-212eb900-04c5-11ea-9553-d6497bd3b5d5.png">
<img width="1438" alt="Screen Shot 2019-11-11 at 5 41 07 PM" src="https://user-images.githubusercontent.com/44379703/68637701-0fe5ac80-04c5-11ea-97b1-4159279ca8d0.png">
<img width="1428" alt="Screen Shot 2019-11-11 at 5 41 17 PM" src="https://user-images.githubusercontent.com/44379703/68637702-11af7000-04c5-11ea-8954-54bb588345bb.png">

## Setup

Please complete the following steps to run the code locally.

1. Make sure you have the latest version of Node and NPM installed on your local machine. You can download Node at https://nodejs.org/en/. To install NPM run `npm install npm@latest -g` in your terminal.

2. Obtain an API key for Google Books from the Google Developers Console. You can log in and request one here. https://console.developers.google.com

3. Clone the repo to your local machine.

4. `cd` into the client folder and run `npm install` in your terminal.

5. Open the Google-Books-Challenge folder in your text editor.

6. Once you have the code open in your text editor, create an .env file in the root directory.

7. Paste the following line into the env and insert your API Key.
   `REACT_APP_API_KEY=YOUR API KEY HERE`

8. To start the development server enter `npm start` in your terminal and vist http://localhost:3000 in the browser.

**Technlogies Used:**

- React
- Create-React-App
- Node 8.11.4
- NPM 6.9.0

