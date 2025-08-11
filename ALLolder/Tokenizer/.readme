# Substring Tokenizer

A simple **custom tokenizer** in JavaScript that stores **all possible substrings** of the words it encounters.  
The tokenizer is **stateful** — once it learns a token, it remembers it for all future encodings.

---

## Features

- 🔄 **Stateful Encoding** – Vocabulary grows dynamically with new input text.
- 🧩 **Substring Storage** – Every substring of a word (length 1 to full length) gets its own token ID.
- 🔍 **Easy Decoding** – Can decode a sequence of IDs back into text.

---

## How It Works

**Encoding a word**  
 When you call:
tokenizer.encode("hello");
All Substrings are
Length 1: "h", "e", "l", "o"
Length 2: "he", "el", "ll", "lo"
Length 3: "hel", "ell", "llo"
Length 4: "hell", "ello"
Length 5: "hello"

    Our Map Storage Would be
    1: "h"
    2: "e"
    3: "l"
    4: "o"
    5: "he"
    6: "el"
    7: "ll"
    8: "lo"
    9: "hel"
    10: "ell"
    11: "llo"
    12: "hell"
    13: "ello"
    14: "hello"

Output : [14]

** Encoding "hello world" **

<span style="color: orange; font-weight: bold;">hello is already present</span>

Length 1: "w", "o", "r", "l", "d"
Length 2: "wo", "or", "rl", "ld"
Length 3: "wor", "orl", "rld"
Length 4: "worl", "orld"
Length 5: "world"

Output : [14, 27]
