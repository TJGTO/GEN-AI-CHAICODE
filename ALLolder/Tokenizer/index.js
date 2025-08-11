class SubstringTokenizer {
  constructor() {
    this.vocab = []; // Stores [token, id] pairs
    this.token2id = Object.fromEntries(this.vocab); // Maps token to its id
    this.nextId = this.vocab.length; // Next available id for new tokens
  }

  // Adds a token to the vocabulary if not already present
  _addToken(token) {
    if (!(token in this.token2id)) {
      this.token2id[token] = this.nextId; // Assign new id
      this.vocab.push([token, this.nextId]); // Add to vocab list
      this.nextId++; // Increment id counter
    }
  }

  // Generates all possible substrings of a word
  _generateSubstrings(word) {
    const substrings = [];
    for (let len = 1; len <= word.length; len++) {
      for (let start = 0; start <= word.length - len; start++) {
        substrings.push(word.slice(start, start + len)); // Add substring
      }
    }
    return substrings;
  }

  // Encodes text into token ids
  encode(text) {
    const words = text.split(/\s+/); // Split text into words
    const tokens = [];

    for (let word of words) {
      // Generate all substrings of the word
      const substrings = this._generateSubstrings(word);

      // Add each substring to vocab if missing
      substrings.forEach((sub) => this._addToken(sub));

      // Store the id of the full word
      tokens.push(this.token2id[word]);
    }

    return tokens;
  }

  // Decodes token ids back to tokens (words)
  decode(ids) {
    return ids
      .map((id) => {
        // Find token by id, or return <UNK> if not found
        const token = this.vocab.find(([, tid]) => tid === id)?.[0] || "<UNK>";
        return token;
      })
      .join(" "); // Join tokens into a string
  }
}

// Example usage:
const tokenizer = new SubstringTokenizer();
