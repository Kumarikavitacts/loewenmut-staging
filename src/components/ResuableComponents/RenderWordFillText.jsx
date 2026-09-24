import React from "react";
import parse, { domToReact } from "html-react-parser";

/**
 * ---------------------------------------------------------
 * RenderWordFillText
 * ---------------------------------------------------------
 * Parses `html` the same way renderHtmlText.jsx does (same tag
 * support: headings, inline formatting, links, lists, etc.), but
 * every individual WORD of text is wrapped in its own
 * <span className="sf-fill-word" data-word-index={N}>.
 *
 * Word indices are assigned in document order — which is the same
 * order the browser lays the words out in when text wraps onto a
 * new line. That's what makes the "fill line 1 completely, then
 * start line 2" behavior work: ScrollFillText.jsx reads these
 * data-word-index attributes at scroll time and sets each word's
 * clip-path directly in JS (see the ANIMATION FIX note there for
 * why — a pure-CSS calc()/clamp() version turned out to silently
 * fail in some browsers, always rendering the fill layer fully
 * visible instead of clipped).
 *
 * Returns { content, totalWords } — `content` is rendered directly,
 * `totalWords` tells the caller how many word-units the fill
 * progress should be measured against.
 * ---------------------------------------------------------
 */

const splitIntoWordNodes = (text, counter) => {
  // Preserve explicit line breaks (\n) as <br /> the same way
  // renderHtmlText.jsx does, then split each line into words.
  const lines = text.split(/\r?\n/);

  return lines.map((line, lineIndex) => {
    // Keep whitespace runs as their own segments so multiple spaces
    // still render normally; only non-whitespace segments become
    // indexed word spans.
    const segments = line.split(/(\s+)/).filter((seg) => seg.length > 0);

    return (
      <React.Fragment key={`line-${lineIndex}`}>
        {segments.map((seg, segIndex) => {
          if (/^\s+$/.test(seg)) {
            return seg;
          }

          const i = counter.current++;

          return (
            <span
              key={`w-${lineIndex}-${segIndex}`}
              className="sf-fill-word"
              data-word-index={i}
            >
              {seg}
            </span>
          );
        })}

        {lineIndex < lines.length - 1 && <br />}
      </React.Fragment>
    );
  });
};

// `counter` is a plain mutable ref object ({ current: 0 }) shared
// across the whole parse, including recursive calls for nested tags,
// so word indices stay sequential no matter how deeply nested.
const buildOptions = (counter) => ({
  replace: (node) => {
    // ----------------------------------------
    // TEXT NODE — split into indexed word spans
    // ----------------------------------------
    if (node.type === "text") {
      const text = node.data || "";
      if (!text) return null;

      return <>{splitIntoWordNodes(text, counter)}</>;
    }

    // ----------------------------------------
    // ELEMENT NODE — same tag support as renderHtmlText.jsx
    // ----------------------------------------
    if (node.type === "tag") {
      const children = node.children
        ? domToReact(node.children, buildOptions(counter))
        : null;

      const attrs = node.attribs || {};

      switch (node.name.toLowerCase()) {
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
        case "br":
          return <br />;
        case "hr":
          return <hr />;
        case "a": {
          const href = attrs.href || "#";
          const target = attrs.target || undefined;

          return (
            <a
              href={href}
              target={target}
              rel={target === "_blank" ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          );
        }
        case "ul":
          return <ul>{children}</ul>;
        case "ol":
          return <ol>{children}</ol>;
        case "li":
          return <li>{children}</li>;
        case "blockquote":
          return <blockquote>{children}</blockquote>;
        case "code":
          return <code>{children}</code>;
        case "pre":
          return <pre>{children}</pre>;
        case "div":
          return <div>{children}</div>;
        case "section":
          return <section>{children}</section>;
        case "article":
          return <article>{children}</article>;
        default:
          return <React.Fragment>{children}</React.Fragment>;
      }
    }

    return undefined;
  },
});

export const RenderWordFillText = (html) => {
  if (html === null || html === undefined || html === "") {
    return { content: null, totalWords: 0 };
  }

  if (typeof html !== "string") {
    return { content: html, totalWords: 0 };
  }

  const counter = { current: 0 };
  const content = parse(html, buildOptions(counter));

  return { content, totalWords: counter.current };
};