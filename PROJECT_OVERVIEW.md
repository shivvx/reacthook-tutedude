# Project Overview - Assignment 5

## Introduction
In this assignment, I created a custom React hook called `useFetch` to handle API requests. The main goal was to learn how to reuse logic across different components and handle loading and error states properly.

## My Approach
1. **Custom Hook**: I built `useFetch.js` in a separate `hooks` folder. It uses `useEffect` to fetch data whenever the URL changes.
2. **State Management**: I used `useState` three times to keep track of the `data`, the `loading` status, and any `error` that might happen.
3. **Component Integration**: I used the hook in the `ProductList` component to get real product data from the Escuela JS API.
4. **Simplification**: After getting feedback, I simplified the code to make it easier to read and followed a more basic styling approach using simple CSS flexbox.

## Key Learnings
- How to create a reusable hook to avoid writing the same fetch code multiple times.
- How to show different things on the screen based on if the data is still loading or if there was an error.
- How to manage API data in a React component using clean and simple code.
