# React Custom Hook - useFetch

This project is a React application that demonstrates the use of a custom hook called `useFetch` to fetch data from an API.

## Project Description
The app fetches a list of products from a dummy API and displays them in a grid layout. It handles loading states and error handling using the custom hook.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shivvx/reacthook-tutedude.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

## Custom Hook: useFetch

The `useFetch` hook is designed to simplify data fetching. It takes a URL as a parameter and returns:
- `data`: The fetched JSON data.
- `loading`: A boolean state indicating if the fetch is in progress.
- `error`: Any error message if the fetch fails.

Example usage:
```javascript
const { data, loading, error } = useFetch(URL);
```

## API Endpoint
The data is fetched from: `https://api.escuelajs.co/api/v1/products`

## What I Learned
- Creating reusable logic using React Custom Hooks.
- Managing asynchronous operations with `async/await` and `fetch`.
- Handling different UI states (loading, error, success).
