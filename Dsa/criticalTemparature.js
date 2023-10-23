/**
 * Returns a boolean value for whether the owner should be alerted
 * @param {number} durationInWarehouse
 * @param {number} temperature
 * @returns {Boolean}
 */
export function shouldAlertOwner(durationInWarehouse, temperature) {
	const CRITICAL_TEMPERATURE = 30; // °C
	const SECONDARY_TEMPERATURE = 25; // °C
	const CRITICAL_DURATION = 7; // Days

	
		if(temperature > CRITICAL_TEMPERATURE ||temperature > SECONDARY_TEMPERATURE 
			 && durationInWarehouse > CRITICAL_DURATION) {
				return true
			} else if(temperature > CRITICAL_TEMPERATURE 
				) {
                 return true
				} else {
					return false
				}
	
}

// Sample Tests

console.log(shouldAlertOwner(5, 26)); // Expected Output: false
console.log(shouldAlertOwner(8, 26)); // Expected Output: true
console.log(shouldAlertOwner(8, 32)); // Expected Output: true
