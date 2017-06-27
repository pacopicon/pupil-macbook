export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  // \B = Find a match not at the beginning/end of a word
  // ?=n = Matches any string followed by a specific string n [here: ?=(...)]
  // \d{3} = Find and match a digit string sequence of 3 characters
  // ?!\d = Find and match a string that is NOT [!] followed by a digit string.
  // g = Perform a global match (find all matches rather than stopping after the first match)
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/s+/g, '-') // /s+ = Find at least one whitespace character.  Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Find and match anyt character that is not a word character {[^] = Find anything not in the brackets, \w = find a word character }.  Remov all non-word chars
    .replace(/\-\-+/g, '-')  // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

export function getFunName() {
  const adjectives = ['adorable', 'beautiful', 'clean', 'drab', 'elegant', 'fancy', 'glamorous', 'handsome', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'angry', 'bewildered', 'clumsy', 'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless', 'itchy', 'jealous', 'lazy', 'mysterious', 'nervous', 'obnoxious', 'panicky', 'repulsive', 'scary', 'thoughtless', 'uptight', 'worried'];

  const nouns = ['women', 'men', 'children', 'teeth', 'feet', 'people', 'leaves', 'mice', 'geese', 'halves', 'knives', 'wives', 'lives', 'elves', 'loaves', 'potatoes', 'tomatoes', 'cacti', 'foci', 'fungi', 'nuclei', 'syllabuses', 'analyses', 'diagnoses', 'oases', 'theses', 'crises', 'phenomena', 'criteria', 'data'];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}
