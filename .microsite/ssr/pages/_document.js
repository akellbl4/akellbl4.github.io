import { h } from 'preact';
import { defineDocument, Html, Head, Main, MicrositeScript } from 'microsite/document';

const Document = () => /* @__PURE__ */ h(Html, null, /* @__PURE__ */ h(Head, null, /* @__PURE__ */ h("meta", {
  charset: "UTF-8"
}), /* @__PURE__ */ h("title", null, "Pavel Mineev"), /* @__PURE__ */ h("link", {
  rel: "canonical",
  href: "https://pavel.mineev.me"
}), /* @__PURE__ */ h("meta", {
  name: "viewport",
  content: "width=device-width, minimum-scale=1, initial-scale=1"
}), /* @__PURE__ */ h("meta", {
  name: "author",
  content: "Pavel Mineev"
}), /* @__PURE__ */ h("meta", {
  name: "description",
  content: "My personal page"
}), /* @__PURE__ */ h("meta", {
  name: "keywords",
  content: "\u041F\u0430\u0432\u0435\u043B \u041C\u0438\u043D\u0435\u0435\u0432, Pavel Mineev, akellbl4"
})), /* @__PURE__ */ h("body", null, /* @__PURE__ */ h(Main, null), /* @__PURE__ */ h(MicrositeScript, null)));
var _document = defineDocument(Document, {
  async prepare({renderPage}) {
    const page = await renderPage();
    return {...page};
  }
});

export default _document;
