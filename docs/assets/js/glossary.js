!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    "use strict";
    n.r(t),
      window.$docsify || (window.$docsify = {}),
      (window.$docsify.plugins = (window.$docsify.plugins || []).concat(
        function (e, t) {
          e.beforeEach(function (e, t) {
            if (window.location.hash.match(/Glossary/g)) return void t(e);
            let n = function (e, t, n) {
              for (let t in n) {
                console.log(t);
                let o = ` [$1](/Glossary?id=${n[t]}) `,
                  r = new RegExp(`\\s(${t})\\s`, "ig");
                e = e.replace(r, o);
              }
              t(e);
            };
            window.$docsify.terms
              ? n(e, t, window.$docsify.terms)
              : fetch("Glossary.md").then(function (o) {
                  o.text().then(function (o) {
                    (window.$docsify.terms = {}),
                      o.split("\n").forEach(function (e) {
                        if (e.match(/###/g)) {
                          let t = e.replace("###", "").trim(),
                            n = t.toLowerCase().replace(" ", "-");
                          window.$docsify.terms[t] = n;
                        }
                      }),
                      n(e, t, window.$docsify.terms);
                  });
                });
          });
        }
      ));
  },
]);
