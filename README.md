# 🚀 JavaScript String Methods Explorer

<div align="center">

![JavaScript String Methods](https://img.shields.io/badge/JavaScript-String%20Methods-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

**An interactive, comprehensive guide to JavaScript string manipulation methods with live code playground**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Now-4CAF50?style=for-the-badge)](https://js-string-methods.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/DevTwitter/js-string-methods)

</div>

---

## ✨ Features

### 🔍 **Comprehensive Method Coverage**
- **40+ JavaScript string methods** organized by category
- **Search & Test**: `charAt`, `includes`, `indexOf`, `match`, `search`, and more
- **Transform**: `toLowerCase`, `toUpperCase`, `trim`, `normalize`, and more  
- **Extract**: `slice`, `substring`, `split`, `substr`, and more
- **Modify**: `concat`, `replace`, `padStart`, `repeat`, and more
- **Creation**: Static methods like `String.fromCharCode`, `String.raw`

### 🎮 **Interactive Code Playground**
- **Live code editor** with syntax highlighting
- **Real-time execution** with instant feedback
- **Copy & run functionality** for easy experimentation
- **Error handling** with clear error messages
- **Output visualization** for better understanding

### 🎨 **Modern UI/UX**
- **Dark/Light theme** support with smooth transitions
- **Responsive design** that works on all devices
- **Beautiful animations** and hover effects
- **Intuitive navigation** with categorized method lists
- **Search functionality** to quickly find methods

### 🌍 **Internationalization Ready**
- **Multi-language support** infrastructure
- **Currently supports English** with easy expansion
- **Context-aware translations** for all UI elements

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/DevTwitter/js-string-methods.git

# Navigate to the project directory
cd js-string-methods

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 🏗️ Project Structure

```
js-string-methods/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── code-playground.tsx      # Interactive code editor
│   ├── string-methods-explorer.tsx # Main explorer component
│   └── theme-toggle.tsx         # Theme switcher
├── lib/                         # Utility libraries
│   ├── i18n/                    # Internationalization
│   │   ├── config.ts
│   │   ├── context.tsx
│   │   └── translations/
│   └── string-methods.ts        # String methods data
├── styles/                      # Global styles
│   ├── globals.css
│   └── highlight.css
└── public/                      # Static assets
```

---

## 🛠️ Tech Stack

### **Frontend**
- **[Next.js 15.2.4](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 3.4.17](https://tailwindcss.com/)** - Styling

### **UI Components**
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Class Variance Authority](https://cva.style/)** - Component variant management

### **Code Highlighting**
- **[Highlight.js](https://highlightjs.org/)** - Syntax highlighting
- **[react-simple-code-editor](https://github.com/react-simple-code-editor/react-simple-code-editor)** - Code editor component

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **next-themes** - Theme management

---

## 📚 String Methods Categories

### 🔍 **Search & Test Methods**
Methods for searching and testing string content:
- `charAt()` - Get character at specific index
- `charCodeAt()` - Get Unicode value of character
- `codePointAt()` - Get code point value
- `at()` - Get character with negative index support
- `includes()` - Check if string contains substring
- `indexOf()` - Find first occurrence index
- `lastIndexOf()` - Find last occurrence index
- `startsWith()` - Check if string starts with substring
- `endsWith()` - Check if string ends with substring
- `match()` - Match against regular expression
- `matchAll()` - Get all regex matches
- `search()` - Search for regex pattern

### 🔄 **Transform Methods**
Methods for transforming string format and appearance:
- `toLowerCase()` - Convert to lowercase
- `toLocaleLowerCase()` - Locale-aware lowercase
- `toUpperCase()` - Convert to uppercase
- `toLocaleUpperCase()` - Locale-aware uppercase
- `trim()` - Remove whitespace from both ends
- `trimStart()` - Remove leading whitespace
- `trimEnd()` - Remove trailing whitespace
- `normalize()` - Unicode normalization

### ✂️ **Extract Methods**
Methods for extracting parts of strings:
- `slice()` - Extract substring by indices
- `substring()` - Extract substring between indices
- `substr()` - Extract substring from position
- `split()` - Split string into array

### ✏️ **Modify Methods**
Methods for modifying and combining strings:
- `concat()` - Concatenate strings
- `replace()` - Replace first occurrence
- `replaceAll()` - Replace all occurrences
- `padStart()` - Pad string at start
- `padEnd()` - Pad string at end
- `repeat()` - Repeat string multiple times

### 🏗️ **Creation Methods**
Static methods for creating strings:
- `String.fromCharCode()` - Create from character codes
- `String.fromCodePoint()` - Create from code points
- `String.raw()` - Raw template literal

---

## 🎯 Usage Examples

### Interactive Learning
1. **Browse Methods**: Use the categorized sidebar to explore different string methods
2. **Search**: Type in the search box to quickly find specific methods
3. **Learn**: Read syntax, examples, and descriptions for each method
4. **Experiment**: Use the code playground to modify examples and see results
5. **Practice**: Copy code snippets and run them in your own environment

### Code Playground Features
- **Syntax Highlighting**: JavaScript code is highlighted for better readability
- **Live Execution**: Click "Run" to execute code and see output
- **Error Handling**: Clear error messages help debug issues
- **Copy Functionality**: Easy copying of code examples

---

## 🌟 Key Features in Detail

### **Smart Search**
- **Real-time filtering** as you type
- **Case-insensitive** search
- **Category-based** organization
- **No results** state with helpful suggestions

### **Responsive Design**
- **Mobile-first** approach
- **Adaptive layouts** for different screen sizes
- **Touch-friendly** interface elements
- **Optimized** for both desktop and mobile

### **Accessibility**
- **Keyboard navigation** support
- **Screen reader** friendly
- **High contrast** mode support
- **Focus management** for better UX

### **Performance**
- **Code splitting** for faster loading
- **Optimized** bundle size
- **Lazy loading** of components
- **Efficient** re-renders

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### **Bug Reports**
- Use the GitHub issue tracker
- Provide clear reproduction steps
- Include browser and OS information

### **Feature Requests**
- Open an issue with the "enhancement" label
- Describe the feature and its benefits
- Consider implementation complexity

### **Code Contributions**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Adding New String Methods**
1. Add method data to `lib/string-methods.ts`
2. Include syntax, example, and expected result
3. Add description to `lib/i18n/translations/en.ts`
4. Test in the playground
5. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **JavaScript Community** - For the amazing string methods
- **MDN Web Docs** - For comprehensive documentation
- **Next.js Team** - For the excellent framework
- **Radix UI** - For accessible components
- **Tailwind CSS** - For the utility-first CSS framework

---

## 🔗 Related Projects

### **JavaScript String Methods Explorer**
Check out our companion project for JavaScript string manipulation:

[![JavaScript Array Methods](https://img.shields.io/badge/JavaScript-Array%20Methods-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://github.com/DevTwitter/js-array-methods)

## 💖 Support DevTwitter

If you find this dataset useful or enjoy the content from the DevTwitter channel, please consider supporting us:

<p align="center">
  <a href="https://hamibash.com/devtwitter">
    <img src="https://img.shields.io/badge/Support_us_on-HamiBash-E44D26?style=for-the-badge" alt="Support on HamiBash"/>
  </a>
  &nbsp;&nbsp;
  <a href="https://buymeacoffee.com/devtwitter">
    <img src="https://img.shields.io/badge/Buy_me_a-Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me A Coffee"/>
  </a>
</p>

Your support helps us maintain the channel and continue sharing valuable programming content with the community.

## 📞 Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/DevTwitter/js-string-methods/issues)
- **Discussions**: [Join the community](https://github.com/DevTwitter/js-string-methods/discussions)
- **Contact**: [DevTwitter](https://t.me/devtwitter)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [DevTwitter](https://t.me/devtwitter)

</div>

