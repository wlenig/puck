import { generateHTML } from "@tiptap/react";
import { defaultExtensions } from "./extensions";
import "./editor-styles.css";

export function Render({ content }: { content: string | JSONContent }) {
  let html: string;

  if (typeof content === "string") {
    // fallback: assume HTML
    html = content;
  } else {
    // assume JSON
    html = generateHTML(content, defaultExtensions);
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
