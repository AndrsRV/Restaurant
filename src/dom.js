/*
  dom.js — one small helper, used by every view file.

  Writing markup as a template string is much easier to read than fifty
  document.createElement calls, but a string is not a DOM node. This turns
  one into the other: put the HTML inside a <template>, then hand back the
  single element it produced.

  Note: only ever pass your own markup to this. Never build the string from
  something a visitor typed, or you have opened the door to injected scripts.
*/
export default function el(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}
