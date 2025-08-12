class SubstringTokenizer {
  constructor() {
    this.token2id = {}; // Maps token to id
    this.id2token = []; // Maps id to token
    this.nextId = 0; // Next available id
  }

  // Adds a token to the vocabulary if not already present
  _addToken(token) {
    if (!(token in this.token2id)) {
      this.token2id[token] = this.nextId;
      this.id2token[this.nextId] = token;
      this.nextId++;
    }
  }

  // Generates all possible substrings of a word
  _generateSubstrings(word) {
    const substrings = [];
    for (let len = 1; len <= word.length; len++) {
      for (let start = 0; start <= word.length - len; start++) {
        substrings.push(word.slice(start, start + len));
      }
    }
    return substrings;
  }

  // Encodes text into token ids (full word ids)
  encode(text) {
    const words = text.split(/\s+/);
    const tokens = [];
    for (let word of words) {
      // Add all substrings to vocab
      this._generateSubstrings(word).forEach((sub) => this._addToken(sub));
      // Store the id of the full word
      tokens.push(this.token2id[word]);
    }
    return tokens;
  }

  // Decodes token ids back to tokens (words)
  decode(ids) {
    return ids.map((id) => this.id2token[id] || "").join(" ");
  }
}

module.exports = { SubstringTokenizer };
