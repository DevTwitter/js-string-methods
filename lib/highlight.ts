import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css'; // You can choose a different theme

// Initialize highlight.js
hljs.configure({
  languages: ['javascript', 'typescript', 'html', 'css', 'jsx', 'tsx'], // Add more languages as needed
});

export const highlightCode = (code: string, language?: string) => {
  if (language) {
    return hljs.highlight(code, { language }).value;
  }
  return hljs.highlightAuto(code).value;
}; 