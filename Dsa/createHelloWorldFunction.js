/**
 * @return {Function}
 */
export const createHelloWorld = function () {
    let obj = "Hello World"
	return function (...args) {
          return obj
    }
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
