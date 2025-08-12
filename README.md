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

### Encoding a Word

When you call:

```js
tokenizer.encode("hello");
```

All substrings are generated:

- Length 1: `"h"`, `"e"`, `"l"`, `"o"`
- Length 2: `"he"`, `"el"`, `"ll"`, `"lo"`
- Length 3: `"hel"`, `"ell"`, `"llo"`
- Length 4: `"hell"`, `"ello"`
- Length 5: `"hello"`

**Map Storage After "hello":**
| ID | Token |
|-----|---------|
| 0 | h |
| 1 | e |
| 2 | l |
| 3 | o |
| 4 | he |
| 5 | el |
| 6 | ll |
| 7 | lo |
| 8 | hel |
| 9 | ell |
| 10 | llo |
| 11 | hell |
| 12 | ello |
| 13 | hello |

**Output:**  
`[13]`

---

### Encoding "hello world"

- `"hello"` is already present, so only substrings of `"world"` are added.

Substrings for `"world"`:

- Length 1: `"w"`, `"o"`, `"r"`, `"l"`, `"d"`
- Length 2: `"wo"`, `"or"`, `"rl"`, `"ld"`
- Length 3: `"wor"`, `"orl"`, `"rld"`
- Length 4: `"worl"`, `"orld"`
- Length 5: `"world"`

**Output:**  
`[13, 26]`

**Updated Memory Map After "hello world":**
| ID | Token |
|-----|---------|
| 0 | h |
| 1 | e |
| 2 | l |
| 3 | o |
| 4 | he |
| 5 | el |
| 6 | ll |
| 7 | lo |
| 8 | hel |
| 9 | ell |
| 10 | llo |
| 11 | hell |
| 12 | ello |
| 13 | hello |
| 14 | w |
| 15 | r |
| 16 | d |
| 17 | wo |
| 18 | or |
| 19 | rl |
| 20 | ld |
| 21 | wor |
| 22 | orl |
| 23 | rld |
| 24 | worl |
| 25 | orld |
| 26 | world |

> **Note:**  
> `"o"` and `"l"` are reused from the previous map and not duplicated.

---

## API Usage

### 1. Encode Text

**URL:**  
`POST /encode`

**Request Body:**

```json
{
  "text": "hello world"
}
```

**Response:**

```json
{
  "ids": [13, 26]
}
```

---

### 2. Decode IDs

**URL:**  
`POST /decode`

**Request Body:**

```json
{
  "ids": [13, 26]
}
```

**Response:**

```json
{
  "text": "hello world"
}
```

---
