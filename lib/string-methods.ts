export interface StringMethod {
  name: string
  type: string
  category: string
  syntax: string
  example: string
  result: string
}

export const stringMethods: StringMethod[] = [
  // Search & Test Methods
  {
    name: "charAt",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "string.charAt(index)",
    example: `const str = "JavaScript";
const char = str.charAt(4);
console.log(char);`,
    result: `S`,
  },
  {
    name: "charCodeAt",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "string.charCodeAt(index)",
    example: `const str = "JavaScript";
const code = str.charCodeAt(0);
console.log(code);`,
    result: `74`,
  },
  {
    name: "codePointAt",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "string.codePointAt(index)",
    example: `const str = "😀ABC";
const code = str.codePointAt(0);
console.log(code);`,
    result: `128512`,
  },
  {
    name: "at",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "string.at(index)",
    example: `const str = "JavaScript";
const char = str.at(-1);
console.log(char);`,
    result: `t`,
  },
  {
    name: "endsWith",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "string.endsWith(searchString, length)",
    example: `const str = "JavaScript";
const ends = str.endsWith("Script");
console.log(ends);`,
    result: `true`,
  },
  {
    name: "includes",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "string.includes(searchString, position)",
    example: `const str = "JavaScript is amazing";
const hasScript = str.includes("Script");
const hasType = str.includes("Type");
console.log(hasScript);
console.log(hasType);`,
    result: `true
false`,
  },
  {
    name: "indexOf",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "string.indexOf(searchValue, fromIndex)",
    example: `const str = "JavaScript";
const index = str.indexOf("Script");
console.log(index);`,
    result: `4`,
  },
  {
    name: "lastIndexOf",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "string.lastIndexOf(searchValue, fromIndex)",
    example: `const str = "JavaScript Script";
const index = str.lastIndexOf("Script");
console.log(index);`,
    result: `11`,
  },
  {
    name: "localeCompare",
    type: "Instance Method",
    category: "comparison",
    syntax: "string.localeCompare(compareString, locales, options)",
    example: `const str1 = "apple";
const str2 = "banana";
const result = str1.localeCompare(str2);
console.log(result);`,
    result: `-1`,
  },
  {
    name: "match",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "string.match(regexp)",
    example: `const str = "The year is 2024";
const matches = str.match(/\\d+/);
console.log(matches[0]);`,
    result: `2024`,
  },
  {
    name: "matchAll",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "string.matchAll(regexp)",
    example: `const str = "test1 test2 test3";
const matches = [...str.matchAll(/test(\\d)/g)];
console.log(matches.length);`,
    result: `3`,
  },
  {
    name: "search",
    type: "Instance Method",
    category: "searchAndTest",
    syntax: "string.search(regexp)",
    example: `const str = "JavaScript is great";
const index = str.search(/is/);
console.log(index);`,
    result: `11`,
  },

  // Extract Methods
  {
    name: "slice",
    type: "Instance Method",
    category: "extract",
    syntax: "string.slice(beginIndex, endIndex)",
    example: `const str = "JavaScript";
const sliced = str.slice(4, 10);
console.log(sliced);`,
    result: `Script`,
  },
  {
    name: "substring",
    type: "Instance Method",
    category: "extract",
    syntax: "string.substring(indexStart, indexEnd)",
    example: `const str = "JavaScript";
const sub = str.substring(0, 4);
console.log(sub);`,
    result: `Java`,
  },
  {
    name: "split",
    type: "Instance Method",
    category: "extract",
    syntax: "string.split(separator, limit)",
    example: `const str = "apple,banana,orange";
const fruits = str.split(",");
console.log(fruits);`,
    result: `["apple", "banana", "orange"]`,
  },
  {
    name: "substr",
    type: "Instance Method",
    category: "extract",
    syntax: "string.substr(start, length)",
    example: `const str = "JavaScript";
const sub = str.substr(4, 6);
console.log(sub);`,
    result: `Script`,
  },

  // Modification / Transform
  {
    name: "concat",
    type: "Instance Method",
    category: "modify",
    syntax: "string.concat(string1, string2, ...)",
    example: `const str1 = "Hello";
const str2 = "World";
const result = str1.concat(" ", str2);
console.log(result);`,
    result: `Hello World`,
  },
  {
    name: "normalize",
    type: "Instance Method",
    category: "modify",
    syntax: "string.normalize(form)",
    example: `const str = "café";
const normalized = str.normalize("NFD");
console.log(normalized.length);`,
    result: `5`,
  },
  {
    name: "padEnd",
    type: "Instance Method",
    category: "modify",
    syntax: "string.padEnd(targetLength, padString)",
    example: `const str = "Hello";
const padded = str.padEnd(10, ".");
console.log(padded);`,
    result: `Hello.....`,
  },
  {
    name: "padStart",
    type: "Instance Method",
    category: "modify",
    syntax: "string.padStart(targetLength, padString)",
    example: `const str = "5";
const padded = str.padStart(3, "0");
console.log(padded);`,
    result: `005`,
  },
  {
    name: "repeat",
    type: "Instance Method",
    category: "modify",
    syntax: "string.repeat(count)",
    example: `const str = "Ha";
const repeated = str.repeat(3);
console.log(repeated);`,
    result: `HaHaHa`,
  },
  {
    name: "replace",
    type: "Instance Method",
    category: "modify",
    syntax: "string.replace(searchValue, replaceValue)",
    example: `const str = "Hello World";
const replaced = str.replace("World", "JavaScript");
console.log(replaced);`,
    result: `Hello JavaScript`,
  },
  {
    name: "replaceAll",
    type: "Instance Method",
    category: "modify",
    syntax: "string.replaceAll(searchValue, replaceValue)",
    example: `const str = "Hello Hello";
const replaced = str.replaceAll("Hello", "Hi");
console.log(replaced);`,
    result: `Hi Hi`,
  },

  // Transform Methods
  {
    name: "toLowerCase",
    type: "Instance Method",
    category: "transform",
    syntax: "string.toLowerCase()",
    example: `const str = "JAVASCRIPT";
const lower = str.toLowerCase();
console.log(lower);`,
    result: `javascript`,
  },
  {
    name: "toLocaleLowerCase",
    type: "Instance Method",
    category: "transform",
    syntax: "string.toLocaleLowerCase(locale)",
    example: `const str = "JAVASCRIPT";
const lower = str.toLocaleLowerCase();
console.log(lower);`,
    result: `javascript`,
  },
  {
    name: "toUpperCase",
    type: "Instance Method",
    category: "transform",
    syntax: "string.toUpperCase()",
    example: `const str = "javascript";
const upper = str.toUpperCase();
console.log(upper);`,
    result: `JAVASCRIPT`,
  },
  {
    name: "toLocaleUpperCase",
    type: "Instance Method",
    category: "transform",
    syntax: "string.toLocaleUpperCase(locale)",
    example: `const str = "javascript";
const upper = str.toLocaleUpperCase();
console.log(upper);`,
    result: `JAVASCRIPT`,
  },
  {
    name: "trim",
    type: "Instance Method",
    category: "transform",
    syntax: "string.trim()",
    example: `const str = "  JavaScript  ";
const trimmed = str.trim();
console.log(\`"\${trimmed}"\`);`,
    result: `"JavaScript"`,
  },
  {
    name: "trimStart",
    type: "Instance Method",
    category: "transform",
    syntax: "string.trimStart()",
    example: `const str = "   Hello World";
const trimmed = str.trimStart();
console.log(trimmed);`,
    result: `Hello World`,
  },
  {
    name: "trimEnd",
    type: "Instance Method",
    category: "transform",
    syntax: "string.trimEnd()",
    example: `const str = "Hello World   ";
const trimmed = str.trimEnd();
console.log(trimmed);`,
    result: `Hello World`,
  },

  // Conversion Methods
  {
    name: "toString",
    type: "Instance Method",
    category: "conversion",
    syntax: "string.toString()",
    example: `const str = new String("Hello");
const primitive = str.toString();
console.log(typeof primitive);`,
    result: `string`,
  },
  {
    name: "valueOf",
    type: "Instance Method",
    category: "conversion",
    syntax: "string.valueOf()",
    example: `const str = new String("Hello");
const primitive = str.valueOf();
console.log(typeof primitive);`,
    result: `string`,
  },

  // Static Methods
  {
    name: "fromCharCode",
    type: "Static Method",
    category: "creation",
    syntax: "String.fromCharCode(num1, num2, ...)",
    example: `const str = String.fromCharCode(72, 101, 108, 108, 111);
console.log(str);`,
    result: `Hello`,
  },
  {
    name: "fromCodePoint",
    type: "Static Method",
    category: "creation",
    syntax: "String.fromCodePoint(num1, num2, ...)",
    example: `const str = String.fromCodePoint(128512, 128513);
console.log(str);`,
    result: `😀😁`,
  },
  {
    name: "raw",
    type: "Static Method",
    category: "creation",
    syntax: "String.raw(template, ...substitutions)",
    example: `const str = String.raw\`Hello\\nWorld\`;
console.log(str);`,
    result: `Hello\\nWorld`,
  },
];
