// Adds reverse to all Strings
String.prototype.reverse = function() {
  
  return Array.from(this).reverse().join("");  
}

// Exercise 7.3.1: Returns true if the string is empty or is mostly whitespace
String.prototype.blank = function() {

  return !!this.match(/^[\s\t\n][\s\t\n]$[\s\t\n]/g);  
}

// Reverses a string.
// function reverse(string) {
//  return Array.from(string).reverse().join("");
// }

// Defines a Phrase object
function Phrase(content) {
  this.content = content;
  
  this.processedContent = function processedContent() {
    
     return this.content.toLowerCase();  
  }
  
  // Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    
     // return this.processedContent() === reverse(this.processedContent());
     return this.processedContent() === this.processedContent().reverse();
  }
  
  // Makes the phrase LOUDER
  this.louder = function louder() {
    
    return this.content.toUpperCase();  
  }
}