import type { Translation } from "../types"

export const en: Translation = {
  common: {
    search: "Search methods...",
    run: "Run",
    copy: "Copy",
    copied: "Copied",
    syntax: "Syntax",
    example: "Example",
    result: "Result",
    output: "Output",
    noMethodsFound: "No methods found",
    tryDifferentSearch: "Try a different search term",
    runCodeToSeeOutput: "Run the code to see the output",
    error: "Error",
  },
  header: {
    title: "JavaScript String Methods",
    subtitle: "Interactive guide to JavaScript string manipulation",
  },
  footer: {
    createdWith: "Made By",
    creatorLink: "https://t.me/devtwitter",
    creatorLinkText: "DevTwitter",
  },
  playground: {
    title: "String Methods",
    interactivePlayground: "Interactive Playground",
  },
  categories: {
    searchAndTest: {
      name: "Search & Test",
      description: "Methods for searching and testing string content",
    },
    transform: {
      name: "Transform",
      description: "Methods for transforming string format and appearance",
    },
    extract: {
      name: "Extract",
      description: "Methods for extracting parts of strings",
    },
    modify: {
      name: "Modify",
      description: "Methods for modifying and combining strings",
    },
  },
  methods: {
    charAt: {
      description: "Returns the character at the specified index in a string.",
    },
    charCodeAt: {
      description: "Returns the Unicode value of the character at the specified index.",
    },
    codePointAt: {
      description: "Returns the non-negative integer code point value of the character at the specified position.",
    },
    concat: {
      description: "Combines two or more strings and returns a new string.",
    },
    includes: {
      description: "Determines whether a string contains the specified characters.",
    },
    endsWith: {
      description: "Determines whether a string ends with the characters of a specified string.",
    },
    indexOf: {
      description: "Returns the index of the first occurrence of the specified value in a string.",
    },
    lastIndexOf: {
      description: "Returns the index of the last occurrence of the specified value in a string.",
    },
    localeCompare: {
      description: "Compares two strings in the current locale and returns a number indicating their relative order.",
    },
    match: {
      description: "Retrieves the result of matching a string against a regular expression.",
    },
    matchAll: {
      description: "Returns an iterator of all matched results against a regular expression, including capturing groups.",
    },
    normalize: {
      description: "Returns the Unicode normalization form of the string.",
    },
    padEnd: {
      description: "Pads the current string with a given string until the resulting string reaches the given length.",
    },
    padStart: {
      description: "Pads the current string with another string until the resulting string reaches the given length.",
    },
    repeat: {
      description: "Returns a new string which contains the specified number of copies of the original string.",
    },
    replace: {
      description: "Returns a new string with some or all matches of a pattern replaced by a replacement.",
    },
    replaceAll: {
      description: "Returns a new string with all matches of a pattern replaced by a replacement.",
    },
    search: {
      description: "Executes a search for a match between a regular expression and this string.",
    },
    slice: {
      description: "Extracts a section of a string and returns it as a new string.",
    },
    split: {
      description: "Splits a string into an array of substrings based on a specified separator.",
    },
    startsWith: {
      description: "Determines whether a string begins with the characters of a specified string.",
    },
    substring: {
      description: "Returns the part of the string between the start and end indexes.",
    },
    toLowerCase: {
      description: "Returns the calling string value converted to lowercase.",
    },
    toUpperCase: {
      description: "Returns the calling string value converted to uppercase.",
    },
    toString: {
      description: "Returns a string representing the specified object.",
    },
    trim: {
      description: "Removes whitespace from both ends of a string.",
    },
    trimStart: {
      description: "Removes whitespace from the beginning of a string.",
    },
    trimEnd: {
      description: "Removes whitespace from the end of a string.",
    },
    valueOf: {
      description: "Returns the primitive value of a String object.",
    },    
  },
}
