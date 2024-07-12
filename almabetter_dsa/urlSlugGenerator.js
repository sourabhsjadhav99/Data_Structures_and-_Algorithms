// function generateSlug(title) {
//     // Replace spaces with hyphens and convert text to lowercase
//     const slug = title.toLowerCase().replace(/\s+/g, '-');
//     return slug + '.com'; // Append ".com" to the slug
// }

function generateSlug(title) {
    // Convert the title to lowercase
    const lowercaseTitle = title.toLowerCase();
    // Split the lowercase title into an array of words
    const words = lowercaseTitle.split(' ');
    // Join the words with hyphens to create the slug
    const slug = words.join('-');
    return slug + '.com'; // Append ".com" to the slug
}

// Approach:
// Converts the input title to lowercase.
// Splits the lowercase title into an array of words.
// Joins the words with hyphens to create the slug.

// Space Complexity:
// Creates an array to store words extracted from the title.
// Space complexity is O(n), where n is the length of the input title.

// Time Complexity:
// Converts the title to lowercase in O(n) time, where n is the length of the title.
// Splits the lowercase title into an array in O(n) time.
// Joins the array elements with hyphens in O(n) time.
// Overall time complexity is O(n).

// Example usage
console.log(generateSlug("Hello World")); // Output: "hello-world.com"
console.log(generateSlug("AlmaBetter Web Dev"));