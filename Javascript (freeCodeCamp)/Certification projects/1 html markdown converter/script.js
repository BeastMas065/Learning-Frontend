const markdownInput = document.getElementById("markdown-input");
const HTMLOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

const h1regex = /^\s*#\s(.*)$/gm;
const h2regex = /^\s*#{2}\s(.*)$/gm;
const h3regex = /^\s*#{3}\s(.*)$/gm;

const imgRegex = /!\[(.*?)\]\((.*?)\)/g;
const linkRegex = /\[(.*?)\]\((.*?)\)/g;

const boldRegex = /\*\*(.*?)\*\*|__(.*?)__/g;
const italicRegex = /(?<!\*)\*(?!\*)(.*?)\*(?!\*)|(?<!_)_(?!_)(.*?)_(?!_)/g;

const quoteRegex = /^\s*>\s(.*)$/gm;

function convertMarkdown() {
    let content = markdownInput.value;

    content = content.replace(h3regex, "<h3>$1</h3>");
    content = content.replace(h2regex, "<h2>$1</h2>");
    content = content.replace(h1regex, "<h1>$1</h1>");

    content = content.replace(quoteRegex, "<blockquote>$1</blockquote>");

    content = content.replace(imgRegex, '<img alt="$1" src="$2">');

    content = content.replace(linkRegex, '<a href="$2">$1</a>');

    content = content.replace(
        boldRegex,
        (match, asteriskText, underscoreText) =>
            `<strong>${asteriskText || underscoreText}</strong>`
    );

    content = content.replace(
        italicRegex,
        (match, asteriskText, underscoreText) =>
            `<em>${asteriskText || underscoreText}</em>`
    );

    content = content.replace(/\r?\n/g, "");

    HTMLOutput.textContent = content;
    preview.innerHTML = content;

    return content;
}

markdownInput.addEventListener("input", convertMarkdown);