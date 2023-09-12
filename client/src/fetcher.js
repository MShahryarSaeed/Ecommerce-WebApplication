// Define the base URL for API requests (db.json)
const BASE_URL = 'http://localhost:3001';

// Function to perform API requests and handle responses...
export const fetcher = async (url) => {
    // Create a response object with initial values
    let responseObject = { errorMessage: '', data: [] };
    try {
        // Fetch data from the specified URL
        const response = await fetch(BASE_URL + url);
        if (!response.ok) {
            // If the response is not OK (e.g., HTTP error), throw an error
            throw new Error(`HTTP Error ${response.status}`);
        }
        // Parse response data as JSON
        const responseData = await response.json();
        // Update the response object with the fetched data
        responseObject.errorMessage = '';
        responseObject.data = responseData;

        // Return the response object containing the data
        return responseObject;
    } catch (err) {
        // If an error occurs during fetching or processing, handle it
        responseObject.errorMessage = err.message;
        // Return the response object with error information
        return responseObject;
    }
}

// Function to fetch categories using the fetcher functions
export const getCategories = () => {
    return fetcher('/categories');
}

// Function to fetch products based on category ID using the fetcher function
export const getProducts = (id) => {
    return fetcher('/products?catId=' + id);
}

export const getProductById = (id) => {
    return fetcher('/products/' + id);
}