// Example 1: Using Promise.all() with then() and catch()

// Array of promises
const promises = [
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 1 resolved');
        }, 1000);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 2 resolved');
        }, 1500);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Promise 3 rejected'));
        }, 2000);
    })
];

// Using Promise.all()///
Promise.all(promises)
    .then((results) => {
        console.log('All promises resolved:', results);
    })
    .catch((error) => {
        console.error('One of the promises was rejected:', error);
    });
// Simulated API functions
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: 'John', age: 30 });
        }, 2000);
    });
}

function fetchProductData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 123, name: 'Product A', price: 50 });
        }, 1500);
    });
}

function fetchWeatherData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ temperature: 25, conditions: 'Sunny' });
        }, 3000);
    });
}

// Fetching data from multiple APIs using Promise.all()
Promise.all([fetchUserData(), fetchProductData(), fetchWeatherData()])
    .then(([userData, productData, weatherData]) => {
        console.log('User data:', userData);
        console.log('Product data:', productData);
        console.log('Weather data:', weatherData);
        // Process the data further here
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
