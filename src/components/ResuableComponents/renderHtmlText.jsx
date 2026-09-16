import React from "react";

export const renderHtmlText = (html) => {
  if (html === null || html === undefined || html === "") {
    return null;
  }

  // If React element / Fragment / number etc.
  // return it directly instead of passing it to DOMParser.
  if (typeof html !== "string") {
    return html;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const convertTextNode = (text, key) => {
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
      return convertTextNode(node.textContent, index);
    }

    // Ignore comments / unsupported node types
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }

    const children = Array.from(node.childNodes).map(
      (child, childIndex) =>
        convertNode(child, `${index}-${childIndex}`)
    );

    switch (node.tagName.toLowerCase()) {
      case "p":
        return <p key={index}>{children}</p>;

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

      case "span":
        return <span key={index}>{children}</span>;

      case "strong":
      case "b":
        return <strong key={index}>{children}</strong>;

      case "em":
      case "i":
        return <em key={index}>{children}</em>;

      case "u":
        return <u key={index}>{children}</u>;

      case "s":
      case "del":
      case "strike":
        return <del key={index}>{children}</del>;

      case "mark":
        return <mark key={index}>{children}</mark>;

      case "small":
        return <small key={index}>{children}</small>;

      case "sub":
        return <sub key={index}>{children}</sub>;

      case "sup":
        return <sup key={index}>{children}</sup>;

      case "br":
        return <br key={index} />;

      case "hr":
        return <hr key={index} />;

      case "a":
        return (
          <a
            key={index}
            href={node.getAttribute("href") || "#"}
            target={node.getAttribute("target") || undefined}
            rel={
              node.getAttribute("target") === "_blank"
                ? "noopener noreferrer"
                : undefined
            }
          >
            {children}
          </a>
        );

      case "ul":
        return <ul key={index}>{children}</ul>;

      case "ol":
        return <ol key={index}>{children}</ol>;

      case "li":
        return <li key={index}>{children}</li>;

      case "blockquote":
        return <blockquote key={index}>{children}</blockquote>;

      case "code":
        return <code key={index}>{children}</code>;

      case "pre":
        return <pre key={index}>{children}</pre>;

      case "div":
        return <div key={index}>{children}</div>;

      case "section":
        return <section key={index}>{children}</section>;

      case "article":
        return <article key={index}>{children}</article>;

      default:
        return (
          <React.Fragment key={index}>
            {children}
          </React.Fragment>
        );
    }
  };

  return Array.from(doc.body.childNodes).map(
    (node, index) => convertNode(node, index)
  );
};