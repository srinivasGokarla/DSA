export function arithmeticOperators(a, b) {
	return {
		sum: a + b,
		difference: a - b,
		product: a * b,
		quotient: a / b,
		remainder: a % b,
	}
}

export function comparisonOperators(a, b) {
	return {
		equal: a == b,
		strictEqual: a === b,
		notEqual: a != b,
		strictNotEqual: a !== b,
		greater: a > b,
		less: a < b,
		greaterEqual: a >= b,
		lessEqual: a <= b,
	}
}

export function logicalOperators(conditionA, conditionB) {
	return conditionA && conditionB
}

console.log('Operators Lab')
