// Uses the default activity 'roller-skate' when no arguments are passed
function saturdayFun(defaultActivity = 'roller-skate'){
	return `This Saturday, I want to ${defaultActivity}!`;
}

// Defined mondayWork function expression that uses the default activity 'go to the office' when no arguments are passed.
let mondayWork = function(defaultActivity = 'go to the office') {
	return `This Monday, I will ${defaultActivity}.`
}