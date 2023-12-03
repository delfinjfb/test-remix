var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_react2 = require("@remix-run/react");

// app/app.css
var app_default = "/build/_assets/app-CTZRIXWO.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: app_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { id: "sidebar", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { children: "Remix Contacts" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.Form, { id: "search-form", role: "search", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                id: "q",
                "aria-label": "Search contacts",
                placeholder: "Search",
                type: "search",
                name: "q"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { id: "search-spinner", "aria-hidden": !0, hidden: !0 })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "submit", children: "New" }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/contacts/1", children: "Your Name" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { to: "/contacts/2", children: "Your Friend" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { id: "detail", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/contacts.$contactId.tsx
var contacts_contactId_exports = {};
__export(contacts_contactId_exports, {
  default: () => Contact
});
var import_react3 = require("@remix-run/react"), import_jsx_runtime3 = require("react/jsx-runtime");
function Contact() {
  let contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: !0
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { id: "contact", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "img",
      {
        alt: `${contact.first} ${contact.last} avatar`,
        src: contact.avatar
      },
      contact.avatar
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("h1", { children: [
        contact.first || contact.last ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
          contact.first,
          " ",
          contact.last
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", { children: "No Name" }),
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Favorite, { contact })
      ] }),
      contact.twitter ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "a",
        {
          href: `https://twitter.com/${contact.twitter}`,
          children: contact.twitter
        }
      ) }) : null,
      contact.notes ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: contact.notes }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Form, { action: "edit", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "submit", children: "Edit" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_react3.Form,
          {
            action: "destroy",
            method: "post",
            onSubmit: (event) => {
              confirm(
                "Please confirm you want to delete this record."
              ) || event.preventDefault();
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "submit", children: "Delete" })
          }
        )
      ] })
    ] })
  ] });
}
var Favorite = ({ contact }) => {
  let favorite = contact.favorite;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "button",
    {
      "aria-label": favorite ? "Remove from favorites" : "Add to favorites",
      name: "favorite",
      value: favorite ? "false" : "true",
      children: favorite ? "\u2605" : "\u2606"
    }
  ) });
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WHBRHAVV.js", imports: ["/build/_shared/chunk-YWIE3CDL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-B7FFWIK5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/contacts.$contactId": { id: "routes/contacts.$contactId", parentId: "root", path: "contacts/:contactId", index: void 0, caseSensitive: void 0, module: "/build/routes/contacts.$contactId-RGGQM6UQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "ffde7509", hmr: void 0, url: "/build/manifest-FFDE7509.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/contacts.$contactId": {
    id: "routes/contacts.$contactId",
    parentId: "root",
    path: "contacts/:contactId",
    index: void 0,
    caseSensitive: void 0,
    module: contacts_contactId_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
