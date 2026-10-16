import React from "react";
import Link from "next/link";

/*
 * Strapi titles can contain HTML (<br>, <span>...). A breadcrumb must be
 * plain single-line text, so strip tags and collapse whitespace.
 */
const toPlainText = (value) => {
  if (value === null || value === undefined) return "";
  if (typeof value !== "string") return "";

  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
};

/*
 * items = [{ label: "Leistungen", href: "/leistungen" }, { label: "Marke & Kommunikation" }]
 * The Home pill is always added in front. The LAST item is the current page.
 */
const Breadcrumb = ({ items = [] }) => {
  const cleanItems = items
    .map((item) => ({ ...item, label: toPlainText(item?.label) }))
    .filter((item) => item.label);

  if (cleanItems.length === 0) return null;

  const lastIndex = cleanItems.length - 1;

  return (
    <nav className="breadcrumb_nav" aria-label="Breadcrumb">
      <ol className="breadcrumb_list">
        <li className="breadcrumb_item breadcrumb_item_home">
          <Link href="/" className="breadcrumb_home" aria-label="Startseite">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="var(--bs-themetext)"
                d="M12 3.1 2.6 11.3a1 1 0 0 0 .66 1.75H5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-6.95h1.74a1 1 0 0 0 .66-1.75L12 3.1Z"
              />
            </svg>
          </Link>
        </li>

        {cleanItems.map((item, index) => {
          const isCurrent = index === lastIndex;

          return (
            <li
              key={`${item.label}-${index}`}
              className={`breadcrumb_item ${
                isCurrent ? "breadcrumb_item_current" : "breadcrumb_item_parent"
              }`}
            >
              {isCurrent || !item.href ? (
                <span
                  className="breadcrumb_pill breadcrumb_pill_current"
                  aria-current={isCurrent ? "page" : undefined}
                  title={item.label}
                >
                  <span className="breadcrumb_text">{item.label}</span>
                </span>
              ) : (
                <Link href={item.href} className="breadcrumb_pill breadcrumb_pill_link">
                  <span className="breadcrumb_text">{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
