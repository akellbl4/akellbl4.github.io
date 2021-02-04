import { h } from 'preact';
import { definePage } from 'microsite/page';

function Home() {
  return /* @__PURE__ */ h("div", {
    className: "pm--content"
  }, /* @__PURE__ */ h("div", {
    className: "pm--me"
  }, /* @__PURE__ */ h("h1", {
    className: "pm--my-name-is"
  }, "Pavel Mineev"), /* @__PURE__ */ h("p", {
    className: "pm--my-job"
  }, "Team Lead at", " ", /* @__PURE__ */ h("a", {
    rel: "nofollow",
    href: "https://junehomes.com"
  }, "June Homes"))), /* @__PURE__ */ h("div", {
    className: "pm--my-links"
  }, /* @__PURE__ */ h("a", {
    className: "pm--link pm--link_email",
    href: "mailto:pavel@mineev.me",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Email"), /* @__PURE__ */ h("a", {
    className: "pm--link pm--link_telegram",
    href: "https://t.me/akellbl4",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Telegram"), /* @__PURE__ */ h("a", {
    className: "pm--link pm--link_facebook",
    href: "https://facebook.com/akellbl4",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Facebook"), /* @__PURE__ */ h("a", {
    className: "pm--link pm--link_instagram",
    href: "https://www.instagram.com/akellbl4",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Instagram"), /* @__PURE__ */ h("a", {
    className: "pm--link pm--link_github",
    href: "https://github.com/akellbl4",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Github"), /* @__PURE__ */ h("a", {
    className: "pm--link pm--link_linkedin",
    href: "https://www.linkedin.com/in/akellbl4",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "LinkedIn"), /* @__PURE__ */ h("a", {
    className: "pm--link pm--link_solvery",
    href: "https://solvery.io/mentor/pavel_mineev",
    target: "_blank",
    rel: "noopener"
  }, "Solvery")));
}
var index = definePage(Home);

export default index;
