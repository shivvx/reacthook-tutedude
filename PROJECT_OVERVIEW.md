# Project Overview – Assignment 5

## Introduction

In this assignment, I worked on creating a custom React hook called `useFetch` to handle API requests. The purpose of this task was to understand how logic can be reused across multiple components in React and how to properly manage loading and error states when fetching data from an API.

## My Approach

1. **Custom Hook Creation**
   I created a file called `useFetch.js` inside a `hooks` folder. This hook uses the `useEffect` hook to fetch data from an API whenever the URL changes.

2. **State Management**
   I used `useState` to manage three different states:

   * `data` – to store the fetched API data
   * `loading` – to track whether the data is still being fetched
   * `error` – to handle any errors that might occur during the request

3. **Using the Hook in a Component**
   I then used the `useFetch` hook inside the `ProductList` component to retrieve product data from the Escuela JS API.

4. **Code Simplification**
   After receiving feedback, I simplified the code to make it more readable. I also used a basic CSS Flexbox layout for styling to keep the UI clean and easy to understand.

## Key Learnings

Through this assignment, I learned:

* How to create a reusable custom hook in React.
* How to manage loading and error states while fetching API data.
* How reusable hooks can help keep components clean and reduce repeated code.
