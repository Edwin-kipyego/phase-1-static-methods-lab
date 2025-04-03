class Formatter {
  // Capitalizes the first letter of a string
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Removes non-alphanumeric characters except for dash, single quote, and space
  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  // Capitalizes all words except small words, but always capitalizes the first word
  static titleize(sentence) {
    const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return sentence
      .split(' ')
      .map((word, index) => {
        if (index === 0 || !smallWords.includes(word.toLowerCase())) {
          return this.capitalize(word);
        }
        return word.toLowerCase();
      })
      .join(' ');
  }
}

module.exports = Formatter;