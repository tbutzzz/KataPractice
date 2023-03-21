// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits 
// that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


const duplicateCount = text => {
    let arrStr = text.toLowerCase().split('');
    return [...new Set (arrStr.filter((item, index) => arrStr.indexOf(item) !== index))].length;
};