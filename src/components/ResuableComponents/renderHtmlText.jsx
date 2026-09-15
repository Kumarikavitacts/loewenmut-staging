import React from "react";

export const renderHtmlText = (html) => {
  if (!html) return null;

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const convertTextNode = (text, key) => {
    // Convert literal "\n" into actual line breaks
    const parts = text.split(/\r?\n/);

    return parts.map((part, index) => (
      <React.Fragment key={`${key}-${index}`}>
        {part}

        {index < parts.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  const convertNode = (node, index) => {
    // Text node
    if (node.nodeType === Node.TEXT_NODE) {
      return convertTextNode(
        node.textContent,
        index
      );
    }

    // Ignore comments / unsupported node types
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }

    const children = Array.from(node.childNodes).map(
      (child, childIndex) =>
        convertNode(
          child,
          `${index}-${childIndex}`
        )
    );

    switch (node.tagName.toLowerCase()) {
      // Paragraph
      case "p":
        return (
          <p key={index}>
            {children}
          </p>
        );

      // Headings
      case "h1":
        return <h1 key={index}>{children}</h1>;

      case "h2":
        return <h2 key={index}>{children}</h2>;

      case "h3":
        return <h3 key={index}>{children}</h3>;

      case "h4":
        return <h4 key={index}>{children}</h4>;

      case "h5":
        return <h5 key={index}>{children}</h5>;

      case "h6":
        return <h6 key={index}>{children}</h6>;

      // Span
      case "span":
        return (
          <span key={index}>
            {children}
          </span>
        );

      // Bold
      case "strong":
      case "b":
        return (
          <strong key={index}>
            {children}
          </strong>
        );

      // Italic
      case "em":
      case "i":
        return (
          <em key={index}>
            {children}
          </em>
        );

      // Underline
      case "u":
        return (
          <u key={index}>
            {children}
          </u>
        );

      // Strikethrough
      case "s":
      case "del":
      case "strike":
        return (
          <del key={index}>
            {children}
          </del>
        );

      // Highlight
      case "mark":
        return (
          <mark key={index}>
            {children}
          </mark>
        );

      // Small text
      case "small":
        return (
          <small key={index}>
            {children}
          </small>
        );

      // Subscript
      case "sub":
        return (
          <sub key={index}>
            {children}
          </sub>
        );

      // Superscript
      case "sup":
        return (
          <sup key={index}>
            {children}
          </sup>
        );

      // Line break
      case "br":
        return <br key={index} />;

      // Horizontal line
      case "hr":
        return <hr key={index} />;

      // Links
      case "a":
        return (
          <a
            key={index}
            href={
              node.getAttribute("href") || "#"
            }
            target={
              node.getAttribute("target") ||
              undefined
            }
            rel={
              node.getAttribute("target") === "_blank"
                ? "noopener noreferrer"
                : undefined
            }
          >
            {children}
          </a>
        );

      // Unordered list
      case "ul":
        return (
          <ul key={index}>
            {children}
          </ul>
        );

      // Ordered list
      case "ol":
        return (
          <ol key={index}>
            {children}
          </ol>
        );

      // List item
      case "li":
        return (
          <li key={index}>
            {children}
          </li>
        );

      // Blockquote
      case "blockquote":
        return (
          <blockquote key={index}>
            {children}
          </blockquote>
        );

      // Code
      case "code":
        return (
          <code key={index}>
            {children}
          </code>
        );

      // Preformatted code
      case "pre":
        return (
          <pre key={index}>
            {children}
          </pre>
        );

      // Generic div
      case "div":
        return (
          <div key={index}>
            {children}
          </div>
        );

      // Section
      case "section":
        return (
          <section key={index}>
            {children}
          </section>
        );

      // Article
      case "article":
        return (
          <article key={index}>
            {children}
          </article>
        );

      // Unknown HTML tags
      default:
        return (
          <React.Fragment key={index}>
            {children}
          </React.Fragment>
        );
    }
  };

  return Array.from(doc.body.childNodes).map(
    (node, index) =>
      convertNode(node, index)
  );
};