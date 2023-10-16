/**
 * Returns a 6 digit hexCode prepended with '#' as a valid color code
 * @returns {string} hexCode
 */
export function generateRandomHexCode() {
	let hexCode = "#";

	for (let i = 0; i < 3; i++) {
		let hexDigits = Math.floor(Math.random() * 256).toString(16);
		if (hexDigits.length === 0) {
            hexDigits = "00"
        } else if (hexDigits.length === 1) {
            hexDigits = "0" + hexDigits
        }

        hexCode += hexDigits
	}

	return hexCode;
}

// You can log the results of the function to debug
// Sample Strings
for (let i = 0; i < 100; i++) {
	console.log(generateRandomHexCode());
}
