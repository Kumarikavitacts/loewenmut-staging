import React from "react";
import parse, { domToReact } from "html-react-parser";

export const renderHtmlText = (html) => {
  // Handle empty values
  if (html === null || html === undefined || html === "") {
    return null;
  }

  // If it's already a React element, Fragment, number, etc.
  // return it directly.
  if (typeof html !== "string") {
    return html;
  }

  return parse(html, {
    replace: (node) => {
      // ----------------------------------------
      // TEXT NODE
      // ----------------------------------------
      if (node.type === "text") {
        const text = node.data || "";

        const parts = text.split(/\r?\n/);

        // No line breaks
        if (parts.length === 1) {
          return text;
        }

        // Preserve line breaks using <br />
        return parts.map((part, index) => (
          <React.Fragment key={`text-${index}`}>
            {part}

            {index < parts.length - 1 && <br />}
          </React.Fragment>
        ));
      }

      // ----------------------------------------
      // ELEMENT NODE
      // ----------------------------------------
      if (node.type === "tag") {
        const children = node.children
          ? domToReact(node.children)
          : null;

        const attrs = node.attribs || {};

        switch (node.name.toLowerCase()) {
          // ------------------------------------
          // HEADINGS
          // ------------------------------------
          case "h1":
            return <h1>{children}</h1>;

          case "h2":
            return <h2>{children}</h2>;

          case "h3":
            return <h3>{children}</h3>;

          case "h4":
            return <h4>{children}</h4>;

          case "h5":
            return <h5>{children}</h5>;

          case "h6":
            return <h6>{children}</h6>;

          // ------------------------------------
          // TEXT FORMATTING
          // ------------------------------------
          case "p":
            return <p>{children}</p>;

          case "span":
            return <span>{children}</span>;

          case "strong":
          case "b":
            return <strong>{children}</strong>;

          case "em":
          case "i":
            return <em>{children}</em>;

          case "u":
            return <u>{children}</u>;

          case "s":
          case "del":
          case "strike":
            return <del>{children}</del>;

          case "mark":
            return <mark>{children}</mark>;

          case "small":
            return <small>{children}</small>;

          case "sub":
            return <sub>{children}</sub>;

          case "sup":
            return <sup>{children}</sup>;

          // ------------------------------------
          // LINE / SEPARATOR
          // ------------------------------------
          case "br":
            return <br />;

          case "hr":
            return <hr />;

          // ------------------------------------
          // LINKS
          // ------------------------------------
          case "a": {
            const href = attrs.href || "#";
            const target = attrs.target || undefined;

            return (
              <a
                href={href}
                target={target}
                rel={
                  target === "_blank"
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {children}
              </a>
            );
          }

          // ------------------------------------
          // LISTS
          // ------------------------------------
          case "ul":
            return <ul>{children}</ul>;

          case "ol":
            return <ol>{children}</ol>;

          case "li":
            return <li>{children}</li>;

          // ------------------------------------
          // QUOTE
          // ------------------------------------
          case "blockquote":
            return <blockquote>{children}</blockquote>;

          // ------------------------------------
          // CODE
          // ------------------------------------
          case "code":
            return <code>{children}</code>;

          case "pre":
            return <pre>{children}</pre>;

          // ------------------------------------
          // LAYOUT ELEMENTS
          // ------------------------------------
          case "div":
            return <div>{children}</div>;

          case "section":
            return <section>{children}</section>;

          case "article":
            return <article>{children}</article>;

          // ------------------------------------
          // DEFAULT
          // ------------------------------------
          default:
            return <React.Fragment>{children}</React.Fragment>;
        }
      }

      // Keep other nodes unchanged
      return undefined;
    },
  });
};
