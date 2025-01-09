var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a;
function t(t2) {
  return t2 && t2.__esModule && Object.prototype.hasOwnProperty.call(t2, "default") ? t2.default : t2;
}
var e, n = { exports: {} };
/*!
 * Quill Editor v1.3.7
 * https://quilljs.com/
 * Copyright (c) 2014, Jason Chen
 * Copyright (c) 2013, salesforce.com
 */
var r, o = e ? n.exports : (e = 1, "undefined" != typeof self && self, r = function() {
  return function(t2) {
    var e2 = {};
    function n2(r2) {
      if (e2[r2])
        return e2[r2].exports;
      var o2 = e2[r2] = {
        /******/
        i: r2,
        /******/
        l: false,
        /******/
        exports: {}
        /******/
      };
      return t2[r2].call(o2.exports, o2, o2.exports, n2), /******/
      /******/
      // Flag the module as loaded
      /******/
      o2.l = true, o2.exports;
    }
    return n2.m = t2, /******/
    /******/
    // expose the module cache
    /******/
    n2.c = e2, /******/
    /******/
    // define getter function for harmony exports
    /******/
    n2.d = function(t3, e3, r2) {
      n2.o(t3, e3) || /******/
      Object.defineProperty(t3, e3, {
        /******/
        configurable: false,
        /******/
        enumerable: true,
        /******/
        get: r2
        /******/
      });
    }, /******/
    /******/
    // getDefaultExport function for compatibility with non-harmony modules
    /******/
    n2.n = function(t3) {
      var e3 = t3 && t3.__esModule ? (
        /******/
        function() {
          return t3.default;
        }
      ) : (
        /******/
        function() {
          return t3;
        }
      );
      return n2.d(e3, "a", e3), e3;
    }, /******/
    /******/
    // Object.prototype.hasOwnProperty.call
    /******/
    n2.o = function(t3, e3) {
      return Object.prototype.hasOwnProperty.call(t3, e3);
    }, /******/
    /******/
    // __webpack_public_path__
    /******/
    n2.p = "", n2(n2.s = 109);
  }([
    /* 0 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = n2(17), o2 = n2(18), i2 = n2(19), l2 = n2(45), a2 = n2(46), s2 = n2(47), u = n2(48), c = n2(49), f = n2(12), h = n2(32), d = n2(33), p = n2(31), y = n2(1), v = { Scope: y.Scope, create: y.create, find: y.find, query: y.query, register: y.register, Container: r2.default, Format: o2.default, Leaf: i2.default, Embed: u.default, Scroll: l2.default, Block: s2.default, Inline: a2.default, Text: c.default, Attributor: { Attribute: f.default, Class: h.default, Style: d.default, Store: p.default } };
      e2.default = v;
    },
    /* 1 */
    /***/
    function(t2, e2, n2) {
      var r2, o2 = this && this.__extends || (r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
        t3.__proto__ = e3;
      } || function(t3, e3) {
        for (var n3 in e3) e3.hasOwnProperty(n3) && (t3[n3] = e3[n3]);
      }, function(t3, e3) {
        function n3() {
          this.constructor = t3;
        }
        r2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i2 = (
        /** @class */
        function(t3) {
          function e3(e4) {
            var n3 = this;
            return e4 = "[Parchment] " + e4, (n3 = t3.call(this, e4) || this).message = e4, n3.name = n3.constructor.name, n3;
          }
          return o2(e3, t3), e3;
        }(Error)
      );
      e2.ParchmentError = i2;
      var l2, a2 = {}, s2 = {}, u = {}, c = {};
      function f(t3, e3) {
        var n3;
        if (void 0 === e3 && (e3 = l2.ANY), "string" == typeof t3) n3 = c[t3] || a2[t3];
        else if (t3 instanceof Text || t3.nodeType === Node.TEXT_NODE) n3 = c.text;
        else if ("number" == typeof t3) t3 & l2.LEVEL & l2.BLOCK ? n3 = c.block : t3 & l2.LEVEL & l2.INLINE && (n3 = c.inline);
        else if (t3 instanceof HTMLElement) {
          var r3 = (t3.getAttribute("class") || "").split(/\s+/);
          for (var o3 in r3) if (n3 = s2[r3[o3]]) break;
          n3 = n3 || u[t3.tagName];
        }
        return null == n3 ? null : (
          // @ts-ignore
          e3 & l2.LEVEL & n3.scope && e3 & l2.TYPE & n3.scope ? n3 : null
        );
      }
      e2.DATA_KEY = "__blot", function(t3) {
        t3[t3.TYPE = 3] = "TYPE", t3[t3.LEVEL = 12] = "LEVEL", t3[t3.ATTRIBUTE = 13] = "ATTRIBUTE", t3[t3.BLOT = 14] = "BLOT", t3[t3.INLINE = 7] = "INLINE", t3[t3.BLOCK = 11] = "BLOCK", t3[t3.BLOCK_BLOT = 10] = "BLOCK_BLOT", t3[t3.INLINE_BLOT = 6] = "INLINE_BLOT", t3[t3.BLOCK_ATTRIBUTE = 9] = "BLOCK_ATTRIBUTE", t3[t3.INLINE_ATTRIBUTE = 5] = "INLINE_ATTRIBUTE", t3[t3.ANY = 15] = "ANY";
      }(l2 = e2.Scope || (e2.Scope = {})), e2.create = function(t3, e3) {
        var n3 = f(t3);
        if (null == n3) throw new i2("Unable to create " + t3 + " blot");
        var r3 = n3, o3 = (
          // @ts-ignore
          t3 instanceof Node || t3.nodeType === Node.TEXT_NODE ? t3 : r3.create(e3)
        );
        return new r3(o3, e3);
      }, e2.find = function t3(n3, r3) {
        return void 0 === r3 && (r3 = false), null == n3 ? null : (
          // @ts-ignore
          null != n3[e2.DATA_KEY] ? n3[e2.DATA_KEY].blot : r3 ? t3(n3.parentNode, r3) : null
        );
      }, e2.query = f, e2.register = function t3() {
        for (var e3 = [], n3 = 0; n3 < arguments.length; n3++) e3[n3] = arguments[n3];
        if (e3.length > 1) return e3.map(function(e4) {
          return t3(e4);
        });
        var r3 = e3[0];
        if ("string" != typeof r3.blotName && "string" != typeof r3.attrName) throw new i2("Invalid definition");
        if ("abstract" === r3.blotName) throw new i2("Cannot register abstract class");
        return c[r3.blotName || r3.attrName] = r3, "string" == typeof r3.keyName ? a2[r3.keyName] = r3 : (null != r3.className && (s2[r3.className] = r3), null != r3.tagName && (Array.isArray(r3.tagName) ? r3.tagName = r3.tagName.map(function(t4) {
          return t4.toUpperCase();
        }) : r3.tagName = r3.tagName.toUpperCase(), (Array.isArray(r3.tagName) ? r3.tagName : [r3.tagName]).forEach(function(t4) {
          null != u[t4] && null != r3.className || (u[t4] = r3);
        }))), r3;
      };
    },
    /* 2 */
    /***/
    function(t2, e2, n2) {
      var r2 = n2(51), o2 = n2(11), i2 = n2(3), l2 = n2(20), a2 = String.fromCharCode(0), s2 = function(t3) {
        Array.isArray(t3) ? this.ops = t3 : null != t3 && Array.isArray(t3.ops) ? this.ops = t3.ops : this.ops = [];
      };
      s2.prototype.insert = function(t3, e3) {
        var n3 = {};
        return 0 === t3.length ? this : (n3.insert = t3, null != e3 && "object" == typeof e3 && Object.keys(e3).length > 0 && (n3.attributes = e3), this.push(n3));
      }, s2.prototype.delete = function(t3) {
        return t3 <= 0 ? this : this.push({ delete: t3 });
      }, s2.prototype.retain = function(t3, e3) {
        if (t3 <= 0) return this;
        var n3 = { retain: t3 };
        return null != e3 && "object" == typeof e3 && Object.keys(e3).length > 0 && (n3.attributes = e3), this.push(n3);
      }, s2.prototype.push = function(t3) {
        var e3 = this.ops.length, n3 = this.ops[e3 - 1];
        if (t3 = i2(true, {}, t3), "object" == typeof n3) {
          if ("number" == typeof t3.delete && "number" == typeof n3.delete) return this.ops[e3 - 1] = { delete: n3.delete + t3.delete }, this;
          if ("number" == typeof n3.delete && null != t3.insert && (e3 -= 1, "object" != typeof (n3 = this.ops[e3 - 1]))) return this.ops.unshift(t3), this;
          if (o2(t3.attributes, n3.attributes)) {
            if ("string" == typeof t3.insert && "string" == typeof n3.insert) return this.ops[e3 - 1] = { insert: n3.insert + t3.insert }, "object" == typeof t3.attributes && (this.ops[e3 - 1].attributes = t3.attributes), this;
            if ("number" == typeof t3.retain && "number" == typeof n3.retain) return this.ops[e3 - 1] = { retain: n3.retain + t3.retain }, "object" == typeof t3.attributes && (this.ops[e3 - 1].attributes = t3.attributes), this;
          }
        }
        return e3 === this.ops.length ? this.ops.push(t3) : this.ops.splice(e3, 0, t3), this;
      }, s2.prototype.chop = function() {
        var t3 = this.ops[this.ops.length - 1];
        return t3 && t3.retain && !t3.attributes && this.ops.pop(), this;
      }, s2.prototype.filter = function(t3) {
        return this.ops.filter(t3);
      }, s2.prototype.forEach = function(t3) {
        this.ops.forEach(t3);
      }, s2.prototype.map = function(t3) {
        return this.ops.map(t3);
      }, s2.prototype.partition = function(t3) {
        var e3 = [], n3 = [];
        return this.forEach(function(r3) {
          (t3(r3) ? e3 : n3).push(r3);
        }), [e3, n3];
      }, s2.prototype.reduce = function(t3, e3) {
        return this.ops.reduce(t3, e3);
      }, s2.prototype.changeLength = function() {
        return this.reduce(function(t3, e3) {
          return e3.insert ? t3 + l2.length(e3) : e3.delete ? t3 - e3.delete : t3;
        }, 0);
      }, s2.prototype.length = function() {
        return this.reduce(function(t3, e3) {
          return t3 + l2.length(e3);
        }, 0);
      }, s2.prototype.slice = function(t3, e3) {
        t3 = t3 || 0, "number" != typeof e3 && (e3 = 1 / 0);
        for (var n3 = [], r3 = l2.iterator(this.ops), o3 = 0; o3 < e3 && r3.hasNext(); ) {
          var i3;
          o3 < t3 ? i3 = r3.next(t3 - o3) : (i3 = r3.next(e3 - o3), n3.push(i3)), o3 += l2.length(i3);
        }
        return new s2(n3);
      }, s2.prototype.compose = function(t3) {
        var e3 = l2.iterator(this.ops), n3 = l2.iterator(t3.ops), r3 = [], i3 = n3.peek();
        if (null != i3 && "number" == typeof i3.retain && null == i3.attributes) {
          for (var a3 = i3.retain; "insert" === e3.peekType() && e3.peekLength() <= a3; ) a3 -= e3.peekLength(), r3.push(e3.next());
          i3.retain - a3 > 0 && n3.next(i3.retain - a3);
        }
        for (var u = new s2(r3); e3.hasNext() || n3.hasNext(); ) if ("insert" === n3.peekType()) u.push(n3.next());
        else if ("delete" === e3.peekType()) u.push(e3.next());
        else {
          var c = Math.min(e3.peekLength(), n3.peekLength()), f = e3.next(c), h = n3.next(c);
          if ("number" == typeof h.retain) {
            var d = {};
            "number" == typeof f.retain ? d.retain = c : d.insert = f.insert;
            var p = l2.attributes.compose(f.attributes, h.attributes, "number" == typeof f.retain);
            if (p && (d.attributes = p), u.push(d), !n3.hasNext() && o2(u.ops[u.ops.length - 1], d)) {
              var y = new s2(e3.rest());
              return u.concat(y).chop();
            }
          } else "number" == typeof h.delete && "number" == typeof f.retain && u.push(h);
        }
        return u.chop();
      }, s2.prototype.concat = function(t3) {
        var e3 = new s2(this.ops.slice());
        return t3.ops.length > 0 && (e3.push(t3.ops[0]), e3.ops = e3.ops.concat(t3.ops.slice(1))), e3;
      }, s2.prototype.diff = function(t3, e3) {
        if (this.ops === t3.ops) return new s2();
        var n3 = [this, t3].map(function(e4) {
          return e4.map(function(n4) {
            if (null != n4.insert) return "string" == typeof n4.insert ? n4.insert : a2;
            throw new Error("diff() called " + (e4 === t3 ? "on" : "with") + " non-document");
          }).join("");
        }), i3 = new s2(), u = r2(n3[0], n3[1], e3), c = l2.iterator(this.ops), f = l2.iterator(t3.ops);
        return u.forEach(function(t4) {
          for (var e4 = t4[1].length; e4 > 0; ) {
            var n4 = 0;
            switch (t4[0]) {
              case r2.INSERT:
                n4 = Math.min(f.peekLength(), e4), i3.push(f.next(n4));
                break;
              case r2.DELETE:
                n4 = Math.min(e4, c.peekLength()), c.next(n4), i3.delete(n4);
                break;
              case r2.EQUAL:
                n4 = Math.min(c.peekLength(), f.peekLength(), e4);
                var a3 = c.next(n4), s3 = f.next(n4);
                o2(a3.insert, s3.insert) ? i3.retain(n4, l2.attributes.diff(a3.attributes, s3.attributes)) : i3.push(s3).delete(n4);
            }
            e4 -= n4;
          }
        }), i3.chop();
      }, s2.prototype.eachLine = function(t3, e3) {
        e3 = e3 || "\n";
        for (var n3 = l2.iterator(this.ops), r3 = new s2(), o3 = 0; n3.hasNext(); ) {
          if ("insert" !== n3.peekType()) return;
          var i3 = n3.peek(), a3 = l2.length(i3) - n3.peekLength(), u = "string" == typeof i3.insert ? i3.insert.indexOf(e3, a3) - a3 : -1;
          if (u < 0) r3.push(n3.next());
          else if (u > 0) r3.push(n3.next(u));
          else {
            if (false === t3(r3, n3.next(1).attributes || {}, o3)) return;
            o3 += 1, r3 = new s2();
          }
        }
        r3.length() > 0 && t3(r3, {}, o3);
      }, s2.prototype.transform = function(t3, e3) {
        if (e3 = !!e3, "number" == typeof t3) return this.transformPosition(t3, e3);
        for (var n3 = l2.iterator(this.ops), r3 = l2.iterator(t3.ops), o3 = new s2(); n3.hasNext() || r3.hasNext(); ) if ("insert" !== n3.peekType() || !e3 && "insert" === r3.peekType()) if ("insert" === r3.peekType()) o3.push(r3.next());
        else {
          var i3 = Math.min(n3.peekLength(), r3.peekLength()), a3 = n3.next(i3), u = r3.next(i3);
          if (a3.delete)
            continue;
          u.delete ? o3.push(u) : (
            // We retain either their retain or insert
            o3.retain(i3, l2.attributes.transform(a3.attributes, u.attributes, e3))
          );
        }
        else o3.retain(l2.length(n3.next()));
        return o3.chop();
      }, s2.prototype.transformPosition = function(t3, e3) {
        e3 = !!e3;
        for (var n3 = l2.iterator(this.ops), r3 = 0; n3.hasNext() && r3 <= t3; ) {
          var o3 = n3.peekLength(), i3 = n3.peekType();
          n3.next(), "delete" !== i3 ? ("insert" === i3 && (r3 < t3 || !e3) && (t3 += o3), r3 += o3) : t3 -= Math.min(o3, t3 - r3);
        }
        return t3;
      }, t2.exports = s2;
    },
    /* 3 */
    /***/
    function(t2, e2) {
      var n2 = Object.prototype.hasOwnProperty, r2 = Object.prototype.toString, o2 = Object.defineProperty, i2 = Object.getOwnPropertyDescriptor, l2 = function(t3) {
        return "function" == typeof Array.isArray ? Array.isArray(t3) : "[object Array]" === r2.call(t3);
      }, a2 = function(t3) {
        if (!t3 || "[object Object]" !== r2.call(t3)) return false;
        var e3, o3 = n2.call(t3, "constructor"), i3 = t3.constructor && t3.constructor.prototype && n2.call(t3.constructor.prototype, "isPrototypeOf");
        if (t3.constructor && !o3 && !i3) return false;
        for (e3 in t3) ;
        return void 0 === e3 || n2.call(t3, e3);
      }, s2 = function(t3, e3) {
        o2 && "__proto__" === e3.name ? o2(t3, e3.name, { enumerable: true, configurable: true, value: e3.newValue, writable: true }) : t3[e3.name] = e3.newValue;
      }, u = function(t3, e3) {
        if ("__proto__" === e3) {
          if (!n2.call(t3, e3)) return;
          if (i2)
            return i2(t3, e3).value;
        }
        return t3[e3];
      };
      t2.exports = function t3() {
        var e3, n3, r3, o3, i3, c, f = arguments[0], h = 1, d = arguments.length, p = false;
        for (
          // Handle a deep copy situation
          "boolean" == typeof f && (p = f, f = arguments[1] || {}, // skip the boolean and the target
          h = 2), (null == f || "object" != typeof f && "function" != typeof f) && (f = {});
          h < d;
          ++h
        )
          if (null != (e3 = arguments[h]))
            for (n3 in e3) r3 = u(f, n3), // Prevent never-ending loop
            f !== (o3 = u(e3, n3)) && // Recurse if we're merging plain objects or arrays
            (p && o3 && (a2(o3) || (i3 = l2(o3))) ? (i3 ? (i3 = false, c = r3 && l2(r3) ? r3 : []) : c = r3 && a2(r3) ? r3 : {}, // Never move original objects, clone them
            s2(f, { name: n3, newValue: t3(p, c, o3) })) : void 0 !== o3 && s2(f, { name: n3, newValue: o3 }));
        return f;
      };
    },
    /* 4 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.default = e2.BlockEmbed = e2.bubbleFormats = void 0;
      var r2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), o2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, i2 = f(n2(3)), l2 = f(n2(2)), a2 = f(n2(0)), s2 = f(n2(16)), u = f(n2(6)), c = f(n2(7));
      function f(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      function h(t3, e3) {
        if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
      }
      function d(t3, e3) {
        if (!t3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e3 || "object" != typeof e3 && "function" != typeof e3 ? t3 : e3;
      }
      function p(t3, e3) {
        if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function, not " + typeof e3);
        t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (Object.setPrototypeOf ? Object.setPrototypeOf(t3, e3) : t3.__proto__ = e3);
      }
      var y = function(t3) {
        function e3() {
          return h(this, e3), d(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return p(e3, t3), r2(e3, [{ key: "attach", value: function() {
          o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "attach", this).call(this), this.attributes = new a2.default.Attributor.Store(this.domNode);
        } }, { key: "delta", value: function() {
          return new l2.default().insert(this.value(), (0, i2.default)(this.formats(), this.attributes.values()));
        } }, { key: "format", value: function(t4, e4) {
          var n3 = a2.default.query(t4, a2.default.Scope.BLOCK_ATTRIBUTE);
          null != n3 && this.attributes.attribute(n3, e4);
        } }, { key: "formatAt", value: function(t4, e4, n3, r3) {
          this.format(n3, r3);
        } }, { key: "insertAt", value: function(t4, n3, r3) {
          if ("string" == typeof n3 && n3.endsWith("\n")) {
            var i3 = a2.default.create(v.blotName);
            this.parent.insertBefore(i3, 0 === t4 ? this : this.next), i3.insertAt(0, n3.slice(0, -1));
          } else o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "insertAt", this).call(this, t4, n3, r3);
        } }]), e3;
      }(a2.default.Embed);
      y.scope = a2.default.Scope.BLOCK_BLOT;
      var v = function(t3) {
        function e3(t4) {
          h(this, e3);
          var n3 = d(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4));
          return n3.cache = {}, n3;
        }
        return p(e3, t3), r2(e3, [{ key: "delta", value: function() {
          return null == this.cache.delta && (this.cache.delta = this.descendants(a2.default.Leaf).reduce(function(t4, e4) {
            return 0 === e4.length() ? t4 : t4.insert(e4.value(), b(e4));
          }, new l2.default()).insert("\n", b(this))), this.cache.delta;
        } }, { key: "deleteAt", value: function(t4, n3) {
          o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "deleteAt", this).call(this, t4, n3), this.cache = {};
        } }, { key: "formatAt", value: function(t4, n3, r3, i3) {
          n3 <= 0 || (a2.default.query(r3, a2.default.Scope.BLOCK) ? t4 + n3 === this.length() && this.format(r3, i3) : o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "formatAt", this).call(this, t4, Math.min(n3, this.length() - t4 - 1), r3, i3), this.cache = {});
        } }, { key: "insertAt", value: function(t4, n3, r3) {
          if (null != r3) return o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "insertAt", this).call(this, t4, n3, r3);
          if (0 !== n3.length) {
            var i3 = n3.split("\n"), l3 = i3.shift();
            l3.length > 0 && (t4 < this.length() - 1 || null == this.children.tail ? o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "insertAt", this).call(this, Math.min(t4, this.length() - 1), l3) : this.children.tail.insertAt(this.children.tail.length(), l3), this.cache = {});
            var a3 = this;
            i3.reduce(function(t5, e4) {
              return (a3 = a3.split(t5, true)).insertAt(0, e4), e4.length;
            }, t4 + l3.length);
          }
        } }, { key: "insertBefore", value: function(t4, n3) {
          var r3 = this.children.head;
          o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "insertBefore", this).call(this, t4, n3), r3 instanceof s2.default && r3.remove(), this.cache = {};
        } }, { key: "length", value: function() {
          return null == this.cache.length && (this.cache.length = o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "length", this).call(this) + 1), this.cache.length;
        } }, { key: "moveChildren", value: function(t4, n3) {
          o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "moveChildren", this).call(this, t4, n3), this.cache = {};
        } }, { key: "optimize", value: function(t4) {
          o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "optimize", this).call(this, t4), this.cache = {};
        } }, { key: "path", value: function(t4) {
          return o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "path", this).call(this, t4, true);
        } }, { key: "removeChild", value: function(t4) {
          o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "removeChild", this).call(this, t4), this.cache = {};
        } }, { key: "split", value: function(t4) {
          var n3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (n3 && (0 === t4 || t4 >= this.length() - 1)) {
            var r3 = this.clone();
            return 0 === t4 ? (this.parent.insertBefore(r3, this), this) : (this.parent.insertBefore(r3, this.next), r3);
          }
          var i3 = o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "split", this).call(this, t4, n3);
          return this.cache = {}, i3;
        } }]), e3;
      }(a2.default.Block);
      function b(t3) {
        var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return null == t3 ? e3 : ("function" == typeof t3.formats && (e3 = (0, i2.default)(e3, t3.formats())), null == t3.parent || "scroll" == t3.parent.blotName || t3.parent.statics.scope !== t3.statics.scope ? e3 : b(t3.parent, e3));
      }
      v.blotName = "block", v.tagName = "P", v.defaultChild = "break", v.allowedChildren = [u.default, a2.default.Embed, c.default], e2.bubbleFormats = b, e2.BlockEmbed = y, e2.default = v;
    },
    /* 5 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.default = e2.overload = e2.expandConfig = void 0;
      var r2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
        return typeof t3;
      } : function(t3) {
        return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
      }, o2 = function(t3, e3) {
        if (Array.isArray(t3)) return t3;
        if (Symbol.iterator in Object(t3)) return function(t4, e4) {
          var n3 = [], r3 = true, o3 = false, i3 = void 0;
          try {
            for (var l3, a3 = t4[Symbol.iterator](); !(r3 = (l3 = a3.next()).done) && (n3.push(l3.value), !e4 || n3.length !== e4); r3 = true) ;
          } catch (t5) {
            o3 = true, i3 = t5;
          } finally {
            try {
              !r3 && a3.return && a3.return();
            } finally {
              if (o3) throw i3;
            }
          }
          return n3;
        }(t3, e3);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }, i2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }();
      n2(50);
      var l2 = v(n2(2)), a2 = v(n2(14)), s2 = v(n2(8)), u = v(n2(9)), c = v(n2(0)), f = n2(15), h = v(f), d = v(n2(3)), p = v(n2(10)), y = v(n2(34));
      function v(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      function b(t3, e3, n3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: n3, enumerable: true, configurable: true, writable: true }) : t3[e3] = n3, t3;
      }
      var g = (0, p.default)("quill"), m = function() {
        function t3(e3) {
          var n3 = this, r3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, t3), this.options = _(e3, r3), this.container = this.options.container, null == this.container) return g.error("Invalid Quill container", e3);
          this.options.debug && t3.debug(this.options.debug);
          var o3 = this.container.innerHTML.trim();
          this.container.classList.add("ql-container"), this.container.innerHTML = "", this.container.__quill = this, this.root = this.addContainer("ql-editor"), this.root.classList.add("ql-blank"), this.root.setAttribute("data-gramm", false), this.scrollingContainer = this.options.scrollingContainer || this.root, this.emitter = new s2.default(), this.scroll = c.default.create(this.root, { emitter: this.emitter, whitelist: this.options.formats }), this.editor = new a2.default(this.scroll), this.selection = new h.default(this.scroll, this.emitter), this.theme = new this.options.theme(this, this.options), this.keyboard = this.theme.addModule("keyboard"), this.clipboard = this.theme.addModule("clipboard"), this.history = this.theme.addModule("history"), this.theme.init(), this.emitter.on(s2.default.events.EDITOR_CHANGE, function(t4) {
            t4 === s2.default.events.TEXT_CHANGE && n3.root.classList.toggle("ql-blank", n3.editor.isBlank());
          }), this.emitter.on(s2.default.events.SCROLL_UPDATE, function(t4, e4) {
            var r4 = n3.selection.lastRange, o4 = r4 && 0 === r4.length ? r4.index : void 0;
            O.call(n3, function() {
              return n3.editor.update(null, e4, o4);
            }, t4);
          });
          var i3 = this.clipboard.convert(`<div class='ql-editor' style="white-space: normal;">` + o3 + "<p><br></p></div>");
          this.setContents(i3), this.history.clear(), this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder), this.options.readOnly && this.disable();
        }
        return i2(t3, null, [{ key: "debug", value: function(t4) {
          true === t4 && (t4 = "log"), p.default.level(t4);
        } }, { key: "find", value: function(t4) {
          return t4.__quill || c.default.find(t4);
        } }, { key: "import", value: function(t4) {
          return null == this.imports[t4] && g.error("Cannot import " + t4 + ". Are you sure it was registered?"), this.imports[t4];
        } }, { key: "register", value: function(t4, e3) {
          var n3 = this, r3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if ("string" != typeof t4) {
            var o3 = t4.attrName || t4.blotName;
            "string" == typeof o3 ? (
              // register(Blot | Attributor, overwrite)
              this.register("formats/" + o3, t4, e3)
            ) : Object.keys(t4).forEach(function(r4) {
              n3.register(r4, t4[r4], e3);
            });
          } else null == this.imports[t4] || r3 || g.warn("Overwriting " + t4 + " with", e3), this.imports[t4] = e3, (t4.startsWith("blots/") || t4.startsWith("formats/")) && "abstract" !== e3.blotName ? c.default.register(e3) : t4.startsWith("modules") && "function" == typeof e3.register && e3.register();
        } }]), i2(t3, [{ key: "addContainer", value: function(t4) {
          var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if ("string" == typeof t4) {
            var n3 = t4;
            (t4 = document.createElement("div")).classList.add(n3);
          }
          return this.container.insertBefore(t4, e3), t4;
        } }, { key: "blur", value: function() {
          this.selection.setRange(null);
        } }, { key: "deleteText", value: function(t4, e3, n3) {
          var r3 = this, i3 = w(t4, e3, n3), l3 = o2(i3, 4);
          return t4 = l3[0], e3 = l3[1], n3 = l3[3], O.call(this, function() {
            return r3.editor.deleteText(t4, e3);
          }, n3, t4, -1 * e3);
        } }, { key: "disable", value: function() {
          this.enable(false);
        } }, { key: "enable", value: function() {
          var t4 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.scroll.enable(t4), this.container.classList.toggle("ql-disabled", !t4);
        } }, { key: "focus", value: function() {
          var t4 = this.scrollingContainer.scrollTop;
          this.selection.focus(), this.scrollingContainer.scrollTop = t4, this.scrollIntoView();
        } }, { key: "format", value: function(t4, e3) {
          var n3 = this, r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s2.default.sources.API;
          return O.call(this, function() {
            var r4 = n3.getSelection(true), o3 = new l2.default();
            if (null == r4) return o3;
            if (c.default.query(t4, c.default.Scope.BLOCK)) o3 = n3.editor.formatLine(r4.index, r4.length, b({}, t4, e3));
            else {
              if (0 === r4.length) return n3.selection.format(t4, e3), o3;
              o3 = n3.editor.formatText(r4.index, r4.length, b({}, t4, e3));
            }
            return n3.setSelection(r4, s2.default.sources.SILENT), o3;
          }, r3);
        } }, { key: "formatLine", value: function(t4, e3, n3, r3, i3) {
          var l3, a3 = this, s3 = w(t4, e3, n3, r3, i3), u2 = o2(s3, 4);
          return t4 = u2[0], e3 = u2[1], l3 = u2[2], i3 = u2[3], O.call(this, function() {
            return a3.editor.formatLine(t4, e3, l3);
          }, i3, t4, 0);
        } }, { key: "formatText", value: function(t4, e3, n3, r3, i3) {
          var l3, a3 = this, s3 = w(t4, e3, n3, r3, i3), u2 = o2(s3, 4);
          return t4 = u2[0], e3 = u2[1], l3 = u2[2], i3 = u2[3], O.call(this, function() {
            return a3.editor.formatText(t4, e3, l3);
          }, i3, t4, 0);
        } }, { key: "getBounds", value: function(t4) {
          var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n3 = void 0;
          n3 = "number" == typeof t4 ? this.selection.getBounds(t4, e3) : this.selection.getBounds(t4.index, t4.length);
          var r3 = this.container.getBoundingClientRect();
          return { bottom: n3.bottom - r3.top, height: n3.height, left: n3.left - r3.left, right: n3.right - r3.left, top: n3.top - r3.top, width: n3.width };
        } }, { key: "getContents", value: function() {
          var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t4, n3 = w(t4, e3), r3 = o2(n3, 2);
          return t4 = r3[0], e3 = r3[1], this.editor.getContents(t4, e3);
        } }, { key: "getFormat", value: function() {
          var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getSelection(true), e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return "number" == typeof t4 ? this.editor.getFormat(t4, e3) : this.editor.getFormat(t4.index, t4.length);
        } }, { key: "getIndex", value: function(t4) {
          return t4.offset(this.scroll);
        } }, { key: "getLength", value: function() {
          return this.scroll.length();
        } }, { key: "getLeaf", value: function(t4) {
          return this.scroll.leaf(t4);
        } }, { key: "getLine", value: function(t4) {
          return this.scroll.line(t4);
        } }, { key: "getLines", value: function() {
          var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
          return "number" != typeof t4 ? this.scroll.lines(t4.index, t4.length) : this.scroll.lines(t4, e3);
        } }, { key: "getModule", value: function(t4) {
          return this.theme.modules[t4];
        } }, { key: "getSelection", value: function() {
          return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0];
        } }, { key: "getText", value: function() {
          var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.getLength() - t4, n3 = w(t4, e3), r3 = o2(n3, 2);
          return t4 = r3[0], e3 = r3[1], this.editor.getText(t4, e3);
        } }, { key: "hasFocus", value: function() {
          return this.selection.hasFocus();
        } }, { key: "insertEmbed", value: function(e3, n3, r3) {
          var o3 = this, i3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t3.sources.API;
          return O.call(this, function() {
            return o3.editor.insertEmbed(e3, n3, r3);
          }, i3, e3);
        } }, { key: "insertText", value: function(t4, e3, n3, r3, i3) {
          var l3, a3 = this, s3 = w(t4, 0, n3, r3, i3), u2 = o2(s3, 4);
          return t4 = u2[0], l3 = u2[2], i3 = u2[3], O.call(this, function() {
            return a3.editor.insertText(t4, e3, l3);
          }, i3, t4, e3.length);
        } }, { key: "isEnabled", value: function() {
          return !this.container.classList.contains("ql-disabled");
        } }, { key: "off", value: function() {
          return this.emitter.off.apply(this.emitter, arguments);
        } }, { key: "on", value: function() {
          return this.emitter.on.apply(this.emitter, arguments);
        } }, { key: "once", value: function() {
          return this.emitter.once.apply(this.emitter, arguments);
        } }, { key: "pasteHTML", value: function(t4, e3, n3) {
          this.clipboard.dangerouslyPasteHTML(t4, e3, n3);
        } }, { key: "removeFormat", value: function(t4, e3, n3) {
          var r3 = this, i3 = w(t4, e3, n3), l3 = o2(i3, 4);
          return t4 = l3[0], e3 = l3[1], n3 = l3[3], O.call(this, function() {
            return r3.editor.removeFormat(t4, e3);
          }, n3, t4);
        } }, { key: "scrollIntoView", value: function() {
          this.selection.scrollIntoView(this.scrollingContainer);
        } }, { key: "setContents", value: function(t4) {
          var e3 = this, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s2.default.sources.API;
          return O.call(this, function() {
            t4 = new l2.default(t4);
            var n4 = e3.getLength(), r3 = e3.editor.deleteText(0, n4), o3 = e3.editor.applyDelta(t4), i3 = o3.ops[o3.ops.length - 1];
            return null != i3 && "string" == typeof i3.insert && "\n" === i3.insert[i3.insert.length - 1] && (e3.editor.deleteText(e3.getLength() - 1, 1), o3.delete(1)), r3.compose(o3);
          }, n3);
        } }, { key: "setSelection", value: function(e3, n3, r3) {
          if (null == e3) this.selection.setRange(null, n3 || t3.sources.API);
          else {
            var i3 = w(e3, n3, r3), l3 = o2(i3, 4);
            e3 = l3[0], n3 = l3[1], r3 = l3[3], this.selection.setRange(new f.Range(e3, n3), r3), r3 !== s2.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer);
          }
        } }, { key: "setText", value: function(t4) {
          var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s2.default.sources.API, n3 = new l2.default().insert(t4);
          return this.setContents(n3, e3);
        } }, { key: "update", value: function() {
          var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s2.default.sources.USER, e3 = this.scroll.update(t4);
          return this.selection.update(t4), e3;
        } }, { key: "updateContents", value: function(t4) {
          var e3 = this, n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s2.default.sources.API;
          return O.call(this, function() {
            return t4 = new l2.default(t4), e3.editor.applyDelta(t4, n3);
          }, n3, true);
        } }]), t3;
      }();
      function _(t3, e3) {
        if ((e3 = (0, d.default)(true, { container: t3, modules: { clipboard: true, keyboard: true, history: true } }, e3)).theme && e3.theme !== m.DEFAULTS.theme) {
          if (e3.theme = m.import("themes/" + e3.theme), null == e3.theme) throw new Error("Invalid theme " + e3.theme + ". Did you register it?");
        } else e3.theme = y.default;
        var n3 = (0, d.default)(true, {}, e3.theme.DEFAULTS);
        [n3, e3].forEach(function(t4) {
          t4.modules = t4.modules || {}, Object.keys(t4.modules).forEach(function(e4) {
            true === t4.modules[e4] && (t4.modules[e4] = {});
          });
        });
        var r3 = Object.keys(n3.modules).concat(Object.keys(e3.modules)).reduce(function(t4, e4) {
          var n4 = m.import("modules/" + e4);
          return null == n4 ? g.error("Cannot load " + e4 + " module. Are you sure you registered it?") : t4[e4] = n4.DEFAULTS || {}, t4;
        }, {});
        return null != e3.modules && e3.modules.toolbar && e3.modules.toolbar.constructor !== Object && (e3.modules.toolbar = { container: e3.modules.toolbar }), e3 = (0, d.default)(true, {}, m.DEFAULTS, { modules: r3 }, n3, e3), ["bounds", "container", "scrollingContainer"].forEach(function(t4) {
          "string" == typeof e3[t4] && (e3[t4] = document.querySelector(e3[t4]));
        }), e3.modules = Object.keys(e3.modules).reduce(function(t4, n4) {
          return e3.modules[n4] && (t4[n4] = e3.modules[n4]), t4;
        }, {}), e3;
      }
      function O(t3, e3, n3, r3) {
        if (this.options.strict && !this.isEnabled() && e3 === s2.default.sources.USER) return new l2.default();
        var o3 = null == n3 ? null : this.getSelection(), i3 = this.editor.delta, a3 = t3();
        if (null != o3 && (true === n3 && (n3 = o3.index), null == r3 ? o3 = x(o3, a3, e3) : 0 !== r3 && (o3 = x(o3, n3, r3, e3)), this.setSelection(o3, s2.default.sources.SILENT)), a3.length() > 0) {
          var u2, c2, f2 = [s2.default.events.TEXT_CHANGE, a3, i3, e3];
          (u2 = this.emitter).emit.apply(u2, [s2.default.events.EDITOR_CHANGE].concat(f2)), e3 !== s2.default.sources.SILENT && (c2 = this.emitter).emit.apply(c2, f2);
        }
        return a3;
      }
      function w(t3, e3, n3, o3, i3) {
        var l3 = {};
        return "number" == typeof t3.index && "number" == typeof t3.length ? (
          // Allow for throwaway end (used by insertText/insertEmbed)
          "number" != typeof e3 ? (i3 = o3, o3 = n3, n3 = e3, e3 = t3.length, t3 = t3.index) : (e3 = t3.length, t3 = t3.index)
        ) : "number" != typeof e3 && (i3 = o3, o3 = n3, n3 = e3, e3 = 0), // Handle format being object, two format name/value strings or excluded
        "object" === (void 0 === n3 ? "undefined" : r2(n3)) ? (l3 = n3, i3 = o3) : "string" == typeof n3 && (null != o3 ? l3[n3] = o3 : i3 = n3), [
          t3,
          e3,
          l3,
          // Handle optional source
          i3 = i3 || s2.default.sources.API
        ];
      }
      function x(t3, e3, n3, r3) {
        if (null == t3) return null;
        var i3 = void 0, a3 = void 0;
        if (e3 instanceof l2.default) {
          var u2 = [t3.index, t3.index + t3.length].map(function(t4) {
            return e3.transformPosition(t4, r3 !== s2.default.sources.USER);
          }), c2 = o2(u2, 2);
          i3 = c2[0], a3 = c2[1];
        } else {
          var h2 = [t3.index, t3.index + t3.length].map(function(t4) {
            return t4 < e3 || t4 === e3 && r3 === s2.default.sources.USER ? t4 : n3 >= 0 ? t4 + n3 : Math.max(e3, t4 + n3);
          }), d2 = o2(h2, 2);
          i3 = d2[0], a3 = d2[1];
        }
        return new f.Range(i3, a3 - i3);
      }
      m.DEFAULTS = { bounds: null, formats: null, modules: {}, placeholder: "", readOnly: false, scrollingContainer: null, strict: true, theme: "default" }, m.events = s2.default.events, m.sources = s2.default.sources, // eslint-disable-next-line no-undef
      m.version = "1.3.7", m.imports = { delta: l2.default, parchment: c.default, "core/module": u.default, "core/theme": y.default }, e2.expandConfig = _, e2.overload = w, e2.default = m;
    },
    /* 6 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), o2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, i2 = a2(n2(7)), l2 = a2(n2(0));
      function a2(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      var s2 = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), r2(e3, [{ key: "formatAt", value: function(t4, n3, r3, i3) {
          if (e3.compare(this.statics.blotName, r3) < 0 && l2.default.query(r3, l2.default.Scope.BLOT)) {
            var a3 = this.isolate(t4, n3);
            i3 && a3.wrap(r3, i3);
          } else o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "formatAt", this).call(this, t4, n3, r3, i3);
        } }, { key: "optimize", value: function(t4) {
          if (o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "optimize", this).call(this, t4), this.parent instanceof e3 && e3.compare(this.statics.blotName, this.parent.statics.blotName) > 0) {
            var n3 = this.parent.isolate(this.offset(), this.length());
            this.moveChildren(n3), n3.wrap(this);
          }
        } }], [{ key: "compare", value: function(t4, n3) {
          var r3 = e3.order.indexOf(t4), o3 = e3.order.indexOf(n3);
          return r3 >= 0 || o3 >= 0 ? r3 - o3 : t4 === n3 ? 0 : t4 < n3 ? -1 : 1;
        } }]), e3;
      }(l2.default.Inline);
      s2.allowedChildren = [s2, l2.default.Embed, i2.default], // Lower index means deeper in the DOM tree, since not found (-1) is for embeds
      s2.order = [
        "cursor",
        "inline",
        // Must be lower
        "underline",
        "strike",
        "italic",
        "bold",
        "script",
        "link",
        "code"
      ], e2.default = s2;
    },
    /* 7 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2, o2 = n2(0), i2 = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), e3;
      }(((r2 = o2) && r2.__esModule ? r2 : { default: r2 }).default.Text);
      e2.default = i2;
    },
    /* 8 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), o2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, i2 = l2(n2(54));
      function l2(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      var a2 = (0, l2(n2(10)).default)("quill:events");
      ["selectionchange", "mousedown", "mouseup", "click"].forEach(function(t3) {
        document.addEventListener(t3, function() {
          for (var t4 = arguments.length, e3 = Array(t4), n3 = 0; n3 < t4; n3++) e3[n3] = arguments[n3];
          [].slice.call(document.querySelectorAll(".ql-container")).forEach(function(t5) {
            var n4;
            t5.__quill && t5.__quill.emitter && (n4 = t5.__quill.emitter).handleDOM.apply(n4, e3);
          });
        });
      });
      var s2 = function(t3) {
        function e3() {
          !function(t5, e4) {
            if (!(t5 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3);
          var t4 = function(t5, e4) {
            if (!t5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t5 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this));
          return t4.listeners = {}, t4.on("error", a2.error), t4;
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), r2(e3, [{ key: "emit", value: function() {
          a2.log.apply(a2, arguments), o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "emit", this).apply(this, arguments);
        } }, { key: "handleDOM", value: function(t4) {
          for (var e4 = arguments.length, n3 = Array(e4 > 1 ? e4 - 1 : 0), r3 = 1; r3 < e4; r3++) n3[r3 - 1] = arguments[r3];
          (this.listeners[t4.type] || []).forEach(function(e5) {
            var r4 = e5.node, o3 = e5.handler;
            (t4.target === r4 || r4.contains(t4.target)) && o3.apply(void 0, [t4].concat(n3));
          });
        } }, { key: "listenDOM", value: function(t4, e4, n3) {
          this.listeners[t4] || (this.listeners[t4] = []), this.listeners[t4].push({ node: e4, handler: n3 });
        } }]), e3;
      }(i2.default);
      s2.events = { EDITOR_CHANGE: "editor-change", SCROLL_BEFORE_UPDATE: "scroll-before-update", SCROLL_OPTIMIZE: "scroll-optimize", SCROLL_UPDATE: "scroll-update", SELECTION_CHANGE: "selection-change", TEXT_CHANGE: "text-change" }, s2.sources = { API: "api", SILENT: "silent", USER: "user" }, e2.default = s2;
    },
    /* 9 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = function t3(e3) {
        var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        !function(t4, e4) {
          if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
        }(this, t3), this.quill = e3, this.options = n3;
      };
      r2.DEFAULTS = {}, e2.default = r2;
    },
    /* 10 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = ["error", "warn", "log", "info"], o2 = "warn";
      function i2(t3) {
        if (r2.indexOf(t3) <= r2.indexOf(o2)) {
          for (var e3, n3 = arguments.length, i3 = Array(n3 > 1 ? n3 - 1 : 0), l3 = 1; l3 < n3; l3++) i3[l3 - 1] = arguments[l3];
          (e3 = console)[t3].apply(e3, i3);
        }
      }
      function l2(t3) {
        return r2.reduce(function(e3, n3) {
          return e3[n3] = i2.bind(console, n3, t3), e3;
        }, {});
      }
      i2.level = l2.level = function(t3) {
        o2 = t3;
      }, e2.default = l2;
    },
    /* 11 */
    /***/
    function(t2, e2, n2) {
      var r2 = Array.prototype.slice, o2 = n2(52), i2 = n2(53), l2 = t2.exports = function(t3, e3, n3) {
        return n3 || (n3 = {}), t3 === e3 || (t3 instanceof Date && e3 instanceof Date ? t3.getTime() === e3.getTime() : !t3 || !e3 || "object" != typeof t3 && "object" != typeof e3 ? n3.strict ? t3 === e3 : t3 == e3 : function(t4, e4, n4) {
          var u, c;
          if (a2(t4) || a2(e4)) return false;
          if (t4.prototype !== e4.prototype) return false;
          if (i2(t4)) return !!i2(e4) && (t4 = r2.call(t4), e4 = r2.call(e4), l2(t4, e4, n4));
          if (s2(t4)) {
            if (!s2(e4)) return false;
            if (t4.length !== e4.length) return false;
            for (u = 0; u < t4.length; u++) if (t4[u] !== e4[u]) return false;
            return true;
          }
          try {
            var f = o2(t4), h = o2(e4);
          } catch (t5) {
            return false;
          }
          if (f.length != h.length) return false;
          for (f.sort(), h.sort(), u = f.length - 1; u >= 0; u--) if (f[u] != h[u]) return false;
          for (u = f.length - 1; u >= 0; u--) if (c = f[u], !l2(t4[c], e4[c], n4)) return false;
          return typeof t4 == typeof e4;
        }(t3, e3, n3));
      };
      function a2(t3) {
        return null == t3;
      }
      function s2(t3) {
        return !(!t3 || "object" != typeof t3 || "number" != typeof t3.length || "function" != typeof t3.copy || "function" != typeof t3.slice || t3.length > 0 && "number" != typeof t3[0]);
      }
    },
    /* 12 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = n2(1), o2 = (
        /** @class */
        function() {
          function t3(t4, e3, n3) {
            void 0 === n3 && (n3 = {}), this.attrName = t4, this.keyName = e3;
            var o3 = r2.Scope.TYPE & r2.Scope.ATTRIBUTE;
            null != n3.scope ? (
              // Ignore type bits, force attribute bit
              this.scope = n3.scope & r2.Scope.LEVEL | o3
            ) : this.scope = r2.Scope.ATTRIBUTE, null != n3.whitelist && (this.whitelist = n3.whitelist);
          }
          return t3.keys = function(t4) {
            return [].map.call(t4.attributes, function(t5) {
              return t5.name;
            });
          }, t3.prototype.add = function(t4, e3) {
            return !!this.canAdd(t4, e3) && (t4.setAttribute(this.keyName, e3), true);
          }, t3.prototype.canAdd = function(t4, e3) {
            return null != r2.query(t4, r2.Scope.BLOT & (this.scope | r2.Scope.TYPE)) && (null == this.whitelist || ("string" == typeof e3 ? this.whitelist.indexOf(e3.replace(/["']/g, "")) > -1 : this.whitelist.indexOf(e3) > -1));
          }, t3.prototype.remove = function(t4) {
            t4.removeAttribute(this.keyName);
          }, t3.prototype.value = function(t4) {
            var e3 = t4.getAttribute(this.keyName);
            return this.canAdd(t4, e3) && e3 ? e3 : "";
          }, t3;
        }()
      );
      e2.default = o2;
    },
    /* 13 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.default = e2.Code = void 0;
      var r2 = function(t3, e3) {
        if (Array.isArray(t3)) return t3;
        if (Symbol.iterator in Object(t3)) return function(t4, e4) {
          var n3 = [], r3 = true, o3 = false, i3 = void 0;
          try {
            for (var l3, a3 = t4[Symbol.iterator](); !(r3 = (l3 = a3.next()).done) && (n3.push(l3.value), !e4 || n3.length !== e4); r3 = true) ;
          } catch (t5) {
            o3 = true, i3 = t5;
          } finally {
            try {
              !r3 && a3.return && a3.return();
            } finally {
              if (o3) throw i3;
            }
          }
          return n3;
        }(t3, e3);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, l2 = f(n2(2)), a2 = f(n2(0)), s2 = f(n2(4)), u = f(n2(6)), c = f(n2(7));
      function f(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      function h(t3, e3) {
        if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
      }
      function d(t3, e3) {
        if (!t3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e3 || "object" != typeof e3 && "function" != typeof e3 ? t3 : e3;
      }
      function p(t3, e3) {
        if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function, not " + typeof e3);
        t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (Object.setPrototypeOf ? Object.setPrototypeOf(t3, e3) : t3.__proto__ = e3);
      }
      var y = function(t3) {
        function e3() {
          return h(this, e3), d(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return p(e3, t3), e3;
      }(u.default);
      y.blotName = "code", y.tagName = "CODE";
      var v = function(t3) {
        function e3() {
          return h(this, e3), d(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return p(e3, t3), o2(e3, [{ key: "delta", value: function() {
          var t4 = this, e4 = this.domNode.textContent;
          return e4.endsWith("\n") && // Should always be true
          (e4 = e4.slice(0, -1)), e4.split("\n").reduce(function(e5, n3) {
            return e5.insert(n3).insert("\n", t4.formats());
          }, new l2.default());
        } }, { key: "format", value: function(t4, n3) {
          if (t4 !== this.statics.blotName || !n3) {
            var o3 = this.descendant(c.default, this.length() - 1), l3 = r2(o3, 1)[0];
            null != l3 && l3.deleteAt(l3.length() - 1, 1), i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "format", this).call(this, t4, n3);
          }
        } }, { key: "formatAt", value: function(t4, n3, r3, o3) {
          if (0 !== n3 && null != a2.default.query(r3, a2.default.Scope.BLOCK) && (r3 !== this.statics.blotName || o3 !== this.statics.formats(this.domNode))) {
            var i3 = this.newlineIndex(t4);
            if (!(i3 < 0 || i3 >= t4 + n3)) {
              var l3 = this.newlineIndex(t4, true) + 1, s3 = i3 - l3 + 1, u2 = this.isolate(l3, s3), c2 = u2.next;
              u2.format(r3, o3), c2 instanceof e3 && c2.formatAt(0, t4 - l3 + n3 - s3, r3, o3);
            }
          }
        } }, { key: "insertAt", value: function(t4, e4, n3) {
          if (null == n3) {
            var o3 = this.descendant(c.default, t4), i3 = r2(o3, 2), l3 = i3[0], a3 = i3[1];
            l3.insertAt(a3, e4);
          }
        } }, { key: "length", value: function() {
          var t4 = this.domNode.textContent.length;
          return this.domNode.textContent.endsWith("\n") ? t4 : t4 + 1;
        } }, { key: "newlineIndex", value: function(t4) {
          if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) return this.domNode.textContent.slice(0, t4).lastIndexOf("\n");
          var e4 = this.domNode.textContent.slice(t4).indexOf("\n");
          return e4 > -1 ? t4 + e4 : -1;
        } }, { key: "optimize", value: function(t4) {
          this.domNode.textContent.endsWith("\n") || this.appendChild(a2.default.create("text", "\n")), i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "optimize", this).call(this, t4);
          var n3 = this.next;
          null != n3 && n3.prev === this && n3.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === n3.statics.formats(n3.domNode) && (n3.optimize(t4), n3.moveChildren(this), n3.remove());
        } }, { key: "replace", value: function(t4) {
          i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "replace", this).call(this, t4), [].slice.call(this.domNode.querySelectorAll("*")).forEach(function(t5) {
            var e4 = a2.default.find(t5);
            null == e4 ? t5.parentNode.removeChild(t5) : e4 instanceof a2.default.Embed ? e4.remove() : e4.unwrap();
          });
        } }], [{ key: "create", value: function(t4) {
          var n3 = i2(e3.__proto__ || Object.getPrototypeOf(e3), "create", this).call(this, t4);
          return n3.setAttribute("spellcheck", false), n3;
        } }, { key: "formats", value: function() {
          return true;
        } }]), e3;
      }(s2.default);
      v.blotName = "code-block", v.tagName = "PRE", v.TAB = "  ", e2.Code = y, e2.default = v;
    },
    /* 14 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
        return typeof t3;
      } : function(t3) {
        return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
      }, o2 = function(t3, e3) {
        if (Array.isArray(t3)) return t3;
        if (Symbol.iterator in Object(t3)) return function(t4, e4) {
          var n3 = [], r3 = true, o3 = false, i3 = void 0;
          try {
            for (var l3, a3 = t4[Symbol.iterator](); !(r3 = (l3 = a3.next()).done) && (n3.push(l3.value), !e4 || n3.length !== e4); r3 = true) ;
          } catch (t5) {
            o3 = true, i3 = t5;
          } finally {
            try {
              !r3 && a3.return && a3.return();
            } finally {
              if (o3) throw i3;
            }
          }
          return n3;
        }(t3, e3);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }, i2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), l2 = b(n2(2)), a2 = b(n2(20)), s2 = b(n2(0)), u = b(n2(13)), c = b(n2(24)), f = n2(4), h = b(f), d = b(n2(16)), p = b(n2(21)), y = b(n2(11)), v = b(n2(3));
      function b(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      var g = /^[ -~]*$/, m = function() {
        function t3(e3) {
          !function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, t3), this.scroll = e3, this.delta = this.getDelta();
        }
        return i2(t3, [{ key: "applyDelta", value: function(t4) {
          var e3 = this, n3 = false;
          this.scroll.update();
          var i3 = this.scroll.length();
          return this.scroll.batchStart(), (t4 = function(t5) {
            return t5.reduce(function(t6, e4) {
              if (1 === e4.insert) {
                var n4 = (0, p.default)(e4.attributes);
                return delete n4.image, t6.insert({ image: e4.attributes.image }, n4);
              }
              if (null == e4.attributes || true !== e4.attributes.list && true !== e4.attributes.bullet || ((e4 = (0, p.default)(e4)).attributes.list ? e4.attributes.list = "ordered" : (e4.attributes.list = "bullet", delete e4.attributes.bullet)), "string" == typeof e4.insert) {
                var r3 = e4.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                return t6.insert(r3, e4.attributes);
              }
              return t6.push(e4);
            }, new l2.default());
          }(t4)).reduce(function(t5, l3) {
            var u2 = l3.retain || l3.delete || l3.insert.length || 1, c2 = l3.attributes || {};
            if (null != l3.insert) {
              if ("string" == typeof l3.insert) {
                var d2 = l3.insert;
                d2.endsWith("\n") && n3 && (n3 = false, d2 = d2.slice(0, -1)), t5 >= i3 && !d2.endsWith("\n") && (n3 = true), e3.scroll.insertAt(t5, d2);
                var p2 = e3.scroll.line(t5), y2 = o2(p2, 2), b2 = y2[0], g2 = y2[1], m2 = (0, v.default)({}, (0, f.bubbleFormats)(b2));
                if (b2 instanceof h.default) {
                  var _2 = b2.descendant(s2.default.Leaf, g2), O = o2(_2, 1)[0];
                  m2 = (0, v.default)(m2, (0, f.bubbleFormats)(O));
                }
                c2 = a2.default.attributes.diff(m2, c2) || {};
              } else if ("object" === r2(l3.insert)) {
                var w = Object.keys(l3.insert)[0];
                if (null == w) return t5;
                e3.scroll.insertAt(t5, w, l3.insert[w]);
              }
              i3 += u2;
            }
            return Object.keys(c2).forEach(function(n4) {
              e3.scroll.formatAt(t5, u2, n4, c2[n4]);
            }), t5 + u2;
          }, 0), t4.reduce(function(t5, n4) {
            return "number" == typeof n4.delete ? (e3.scroll.deleteAt(t5, n4.delete), t5) : t5 + (n4.retain || n4.insert.length || 1);
          }, 0), this.scroll.batchEnd(), this.update(t4);
        } }, { key: "deleteText", value: function(t4, e3) {
          return this.scroll.deleteAt(t4, e3), this.update(new l2.default().retain(t4).delete(e3));
        } }, { key: "formatLine", value: function(t4, e3) {
          var n3 = this, r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return this.scroll.update(), Object.keys(r3).forEach(function(o3) {
            if (null == n3.scroll.whitelist || n3.scroll.whitelist[o3]) {
              var i3 = n3.scroll.lines(t4, Math.max(e3, 1)), l3 = e3;
              i3.forEach(function(e4) {
                var i4 = e4.length();
                if (e4 instanceof u.default) {
                  var a3 = t4 - e4.offset(n3.scroll), s3 = e4.newlineIndex(a3 + l3) - a3 + 1;
                  e4.formatAt(a3, s3, o3, r3[o3]);
                } else e4.format(o3, r3[o3]);
                l3 -= i4;
              });
            }
          }), this.scroll.optimize(), this.update(new l2.default().retain(t4).retain(e3, (0, p.default)(r3)));
        } }, { key: "formatText", value: function(t4, e3) {
          var n3 = this, r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return Object.keys(r3).forEach(function(o3) {
            n3.scroll.formatAt(t4, e3, o3, r3[o3]);
          }), this.update(new l2.default().retain(t4).retain(e3, (0, p.default)(r3)));
        } }, { key: "getContents", value: function(t4, e3) {
          return this.delta.slice(t4, t4 + e3);
        } }, { key: "getDelta", value: function() {
          return this.scroll.lines().reduce(function(t4, e3) {
            return t4.concat(e3.delta());
          }, new l2.default());
        } }, { key: "getFormat", value: function(t4) {
          var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n3 = [], r3 = [];
          0 === e3 ? this.scroll.path(t4).forEach(function(t5) {
            var e4 = o2(t5, 1)[0];
            e4 instanceof h.default ? n3.push(e4) : e4 instanceof s2.default.Leaf && r3.push(e4);
          }) : (n3 = this.scroll.lines(t4, e3), r3 = this.scroll.descendants(s2.default.Leaf, t4, e3));
          var i3 = [n3, r3].map(function(t5) {
            if (0 === t5.length) return {};
            for (var e4 = (0, f.bubbleFormats)(t5.shift()); Object.keys(e4).length > 0; ) {
              var n4 = t5.shift();
              if (null == n4) return e4;
              e4 = _((0, f.bubbleFormats)(n4), e4);
            }
            return e4;
          });
          return v.default.apply(v.default, i3);
        } }, { key: "getText", value: function(t4, e3) {
          return this.getContents(t4, e3).filter(function(t5) {
            return "string" == typeof t5.insert;
          }).map(function(t5) {
            return t5.insert;
          }).join("");
        } }, { key: "insertEmbed", value: function(t4, e3, n3) {
          return this.scroll.insertAt(t4, e3, n3), this.update(new l2.default().retain(t4).insert(function(t5, e4, n4) {
            return e4 in t5 ? Object.defineProperty(t5, e4, { value: n4, enumerable: true, configurable: true, writable: true }) : t5[e4] = n4, t5;
          }({}, e3, n3)));
        } }, { key: "insertText", value: function(t4, e3) {
          var n3 = this, r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return e3 = e3.replace(/\r\n/g, "\n").replace(/\r/g, "\n"), this.scroll.insertAt(t4, e3), Object.keys(r3).forEach(function(o3) {
            n3.scroll.formatAt(t4, e3.length, o3, r3[o3]);
          }), this.update(new l2.default().retain(t4).insert(e3, (0, p.default)(r3)));
        } }, { key: "isBlank", value: function() {
          if (0 == this.scroll.children.length) return true;
          if (this.scroll.children.length > 1) return false;
          var t4 = this.scroll.children.head;
          return t4.statics.blotName === h.default.blotName && !(t4.children.length > 1) && t4.children.head instanceof d.default;
        } }, { key: "removeFormat", value: function(t4, e3) {
          var n3 = this.getText(t4, e3), r3 = this.scroll.line(t4 + e3), i3 = o2(r3, 2), a3 = i3[0], s3 = i3[1], c2 = 0, f2 = new l2.default();
          null != a3 && (c2 = a3 instanceof u.default ? a3.newlineIndex(s3) - s3 + 1 : a3.length() - s3, f2 = a3.delta().slice(s3, s3 + c2 - 1).insert("\n"));
          var h2 = this.getContents(t4, e3 + c2).diff(new l2.default().insert(n3).concat(f2)), d2 = new l2.default().retain(t4).concat(h2);
          return this.applyDelta(d2);
        } }, { key: "update", value: function(t4) {
          var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, r3 = this.delta;
          if (1 === e3.length && "characterData" === e3[0].type && e3[0].target.data.match(g) && s2.default.find(e3[0].target)) {
            var o3 = s2.default.find(e3[0].target), i3 = (0, f.bubbleFormats)(o3), a3 = o3.offset(this.scroll), u2 = e3[0].oldValue.replace(c.default.CONTENTS, ""), h2 = new l2.default().insert(u2), d2 = new l2.default().insert(o3.value());
            t4 = new l2.default().retain(a3).concat(h2.diff(d2, n3)).reduce(function(t5, e4) {
              return e4.insert ? t5.insert(e4.insert, i3) : t5.push(e4);
            }, new l2.default()), this.delta = r3.compose(t4);
          } else this.delta = this.getDelta(), t4 && (0, y.default)(r3.compose(t4), this.delta) || (t4 = r3.diff(this.delta, n3));
          return t4;
        } }]), t3;
      }();
      function _(t3, e3) {
        return Object.keys(e3).reduce(function(n3, r3) {
          return null == t3[r3] || (e3[r3] === t3[r3] ? n3[r3] = e3[r3] : Array.isArray(e3[r3]) ? e3[r3].indexOf(t3[r3]) < 0 && (n3[r3] = e3[r3].concat([t3[r3]])) : n3[r3] = [e3[r3], t3[r3]]), n3;
        }, {});
      }
      e2.default = m;
    },
    /* 15 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.default = e2.Range = void 0;
      var r2 = function(t3, e3) {
        if (Array.isArray(t3)) return t3;
        if (Symbol.iterator in Object(t3)) return function(t4, e4) {
          var n3 = [], r3 = true, o3 = false, i3 = void 0;
          try {
            for (var l3, a3 = t4[Symbol.iterator](); !(r3 = (l3 = a3.next()).done) && (n3.push(l3.value), !e4 || n3.length !== e4); r3 = true) ;
          } catch (t5) {
            o3 = true, i3 = t5;
          } finally {
            try {
              !r3 && a3.return && a3.return();
            } finally {
              if (o3) throw i3;
            }
          }
          return n3;
        }(t3, e3);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = u(n2(0)), l2 = u(n2(21)), a2 = u(n2(11)), s2 = u(n2(8));
      function u(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      function c(t3) {
        if (Array.isArray(t3)) {
          for (var e3 = 0, n3 = Array(t3.length); e3 < t3.length; e3++) n3[e3] = t3[e3];
          return n3;
        }
        return Array.from(t3);
      }
      function f(t3, e3) {
        if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
      }
      var h = (0, u(n2(10)).default)("quill:selection"), d = function t3(e3) {
        var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        f(this, t3), this.index = e3, this.length = n3;
      }, p = function() {
        function t3(e3, n3) {
          var r3 = this;
          f(this, t3), this.emitter = n3, this.scroll = e3, this.composing = false, this.mouseDown = false, this.root = this.scroll.domNode, this.cursor = i2.default.create("cursor", this), // savedRange is last non-null range
          this.lastRange = this.savedRange = new d(0, 0), this.handleComposition(), this.handleDragging(), this.emitter.listenDOM("selectionchange", document, function() {
            r3.mouseDown || setTimeout(r3.update.bind(r3, s2.default.sources.USER), 1);
          }), this.emitter.on(s2.default.events.EDITOR_CHANGE, function(t4, e4) {
            t4 === s2.default.events.TEXT_CHANGE && e4.length() > 0 && r3.update(s2.default.sources.SILENT);
          }), this.emitter.on(s2.default.events.SCROLL_BEFORE_UPDATE, function() {
            if (r3.hasFocus()) {
              var t4 = r3.getNativeRange();
              null != t4 && t4.start.node !== r3.cursor.textNode && // cursor.restore() will handle
              // TODO unclear if this has negative side effects
              r3.emitter.once(s2.default.events.SCROLL_UPDATE, function() {
                try {
                  r3.setNativeRange(t4.start.node, t4.start.offset, t4.end.node, t4.end.offset);
                } catch (t5) {
                }
              });
            }
          }), this.emitter.on(s2.default.events.SCROLL_OPTIMIZE, function(t4, e4) {
            if (e4.range) {
              var n4 = e4.range, o3 = n4.startNode, i3 = n4.startOffset, l3 = n4.endNode, a3 = n4.endOffset;
              r3.setNativeRange(o3, i3, l3, a3);
            }
          }), this.update(s2.default.sources.SILENT);
        }
        return o2(t3, [{ key: "handleComposition", value: function() {
          var t4 = this;
          this.root.addEventListener("compositionstart", function() {
            t4.composing = true;
          }), this.root.addEventListener("compositionend", function() {
            if (t4.composing = false, t4.cursor.parent) {
              var e3 = t4.cursor.restore();
              if (!e3) return;
              setTimeout(function() {
                t4.setNativeRange(e3.startNode, e3.startOffset, e3.endNode, e3.endOffset);
              }, 1);
            }
          });
        } }, { key: "handleDragging", value: function() {
          var t4 = this;
          this.emitter.listenDOM("mousedown", document.body, function() {
            t4.mouseDown = true;
          }), this.emitter.listenDOM("mouseup", document.body, function() {
            t4.mouseDown = false, t4.update(s2.default.sources.USER);
          });
        } }, { key: "focus", value: function() {
          this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
        } }, { key: "format", value: function(t4, e3) {
          if (null == this.scroll.whitelist || this.scroll.whitelist[t4]) {
            this.scroll.update();
            var n3 = this.getNativeRange();
            if (null != n3 && n3.native.collapsed && !i2.default.query(t4, i2.default.Scope.BLOCK)) {
              if (n3.start.node !== this.cursor.textNode) {
                var r3 = i2.default.find(n3.start.node, false);
                if (null == r3) return;
                if (r3 instanceof i2.default.Leaf) {
                  var o3 = r3.split(n3.start.offset);
                  r3.parent.insertBefore(this.cursor, o3);
                } else r3.insertBefore(this.cursor, n3.start.node);
                this.cursor.attach();
              }
              this.cursor.format(t4, e3), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
            }
          }
        } }, { key: "getBounds", value: function(t4) {
          var e3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n3 = this.scroll.length();
          t4 = Math.min(t4, n3 - 1), e3 = Math.min(t4 + e3, n3 - 1) - t4;
          var o3 = void 0, i3 = this.scroll.leaf(t4), l3 = r2(i3, 2), a3 = l3[0], s3 = l3[1];
          if (null == a3) return null;
          var u2 = a3.position(s3, true), c2 = r2(u2, 2);
          o3 = c2[0], s3 = c2[1];
          var f2 = document.createRange();
          if (e3 > 0) {
            f2.setStart(o3, s3);
            var h2 = this.scroll.leaf(t4 + e3), d2 = r2(h2, 2);
            if (a3 = d2[0], s3 = d2[1], null == a3) return null;
            var p2 = a3.position(s3, true), y2 = r2(p2, 2);
            return o3 = y2[0], s3 = y2[1], f2.setEnd(o3, s3), f2.getBoundingClientRect();
          }
          var v = "left", b = void 0;
          return o3 instanceof Text ? (s3 < o3.data.length ? (f2.setStart(o3, s3), f2.setEnd(o3, s3 + 1)) : (f2.setStart(o3, s3 - 1), f2.setEnd(o3, s3), v = "right"), b = f2.getBoundingClientRect()) : (b = a3.domNode.getBoundingClientRect(), s3 > 0 && (v = "right")), { bottom: b.top + b.height, height: b.height, left: b[v], right: b[v], top: b.top, width: 0 };
        } }, { key: "getNativeRange", value: function() {
          var t4 = document.getSelection();
          if (null == t4 || t4.rangeCount <= 0) return null;
          var e3 = t4.getRangeAt(0);
          if (null == e3) return null;
          var n3 = this.normalizeNative(e3);
          return h.info("getNativeRange", n3), n3;
        } }, { key: "getRange", value: function() {
          var t4 = this.getNativeRange();
          return null == t4 ? [null, null] : [this.normalizedToRange(t4), t4];
        } }, { key: "hasFocus", value: function() {
          return document.activeElement === this.root;
        } }, { key: "normalizedToRange", value: function(t4) {
          var e3 = this, n3 = [[t4.start.node, t4.start.offset]];
          t4.native.collapsed || n3.push([t4.end.node, t4.end.offset]);
          var o3 = n3.map(function(t5) {
            var n4 = r2(t5, 2), o4 = n4[0], l4 = n4[1], a4 = i2.default.find(o4, true), s3 = a4.offset(e3.scroll);
            return 0 === l4 ? s3 : a4 instanceof i2.default.Container ? s3 + a4.length() : s3 + a4.index(o4, l4);
          }), l3 = Math.min(Math.max.apply(Math, c(o3)), this.scroll.length() - 1), a3 = Math.min.apply(Math, [l3].concat(c(o3)));
          return new d(a3, l3 - a3);
        } }, { key: "normalizeNative", value: function(t4) {
          if (!y(this.root, t4.startContainer) || !t4.collapsed && !y(this.root, t4.endContainer)) return null;
          var e3 = { start: { node: t4.startContainer, offset: t4.startOffset }, end: { node: t4.endContainer, offset: t4.endOffset }, native: t4 };
          return [e3.start, e3.end].forEach(function(t5) {
            for (var e4 = t5.node, n3 = t5.offset; !(e4 instanceof Text) && e4.childNodes.length > 0; ) if (e4.childNodes.length > n3) e4 = e4.childNodes[n3], n3 = 0;
            else {
              if (e4.childNodes.length !== n3) break;
              n3 = (e4 = e4.lastChild) instanceof Text ? e4.data.length : e4.childNodes.length + 1;
            }
            t5.node = e4, t5.offset = n3;
          }), e3;
        } }, { key: "rangeToNative", value: function(t4) {
          var e3 = this, n3 = t4.collapsed ? [t4.index] : [t4.index, t4.index + t4.length], o3 = [], i3 = this.scroll.length();
          return n3.forEach(function(t5, n4) {
            t5 = Math.min(i3 - 1, t5);
            var l3, a3 = e3.scroll.leaf(t5), s3 = r2(a3, 2), u2 = s3[0], c2 = s3[1], f2 = u2.position(c2, 0 !== n4), h2 = r2(f2, 2);
            l3 = h2[0], c2 = h2[1], o3.push(l3, c2);
          }), o3.length < 2 && (o3 = o3.concat(o3)), o3;
        } }, { key: "scrollIntoView", value: function(t4) {
          var e3 = this.lastRange;
          if (null != e3) {
            var n3 = this.getBounds(e3.index, e3.length);
            if (null != n3) {
              var o3 = this.scroll.length() - 1, i3 = this.scroll.line(Math.min(e3.index, o3)), l3 = r2(i3, 1)[0], a3 = l3;
              if (e3.length > 0) {
                var s3 = this.scroll.line(Math.min(e3.index + e3.length, o3));
                a3 = r2(s3, 1)[0];
              }
              if (null != l3 && null != a3) {
                var u2 = t4.getBoundingClientRect();
                n3.top < u2.top ? t4.scrollTop -= u2.top - n3.top : n3.bottom > u2.bottom && (t4.scrollTop += n3.bottom - u2.bottom);
              }
            }
          }
        } }, { key: "setNativeRange", value: function(t4, e3) {
          var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t4, r3 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e3, o3 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          if (h.info("setNativeRange", t4, e3, n3, r3), null == t4 || null != this.root.parentNode && null != t4.parentNode && null != n3.parentNode) {
            var i3 = document.getSelection();
            if (null != i3) if (null != t4) {
              this.hasFocus() || this.root.focus();
              var l3 = (this.getNativeRange() || {}).native;
              if (null == l3 || o3 || t4 !== l3.startContainer || e3 !== l3.startOffset || n3 !== l3.endContainer || r3 !== l3.endOffset) {
                "BR" == t4.tagName && (e3 = [].indexOf.call(t4.parentNode.childNodes, t4), t4 = t4.parentNode), "BR" == n3.tagName && (r3 = [].indexOf.call(n3.parentNode.childNodes, n3), n3 = n3.parentNode);
                var a3 = document.createRange();
                a3.setStart(t4, e3), a3.setEnd(n3, r3), i3.removeAllRanges(), i3.addRange(a3);
              }
            } else i3.removeAllRanges(), this.root.blur(), document.body.focus();
          }
        } }, { key: "setRange", value: function(t4) {
          var e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s2.default.sources.API;
          if ("string" == typeof e3 && (n3 = e3, e3 = false), h.info("setRange", t4), null != t4) {
            var r3 = this.rangeToNative(t4);
            this.setNativeRange.apply(this, c(r3).concat([e3]));
          } else this.setNativeRange(null);
          this.update(n3);
        } }, { key: "update", value: function() {
          var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s2.default.sources.USER, e3 = this.lastRange, n3 = this.getRange(), o3 = r2(n3, 2), i3 = o3[0], u2 = o3[1];
          if (this.lastRange = i3, null != this.lastRange && (this.savedRange = this.lastRange), !(0, a2.default)(e3, this.lastRange)) {
            var c2;
            !this.composing && null != u2 && u2.native.collapsed && u2.start.node !== this.cursor.textNode && this.cursor.restore();
            var f2, h2 = [s2.default.events.SELECTION_CHANGE, (0, l2.default)(this.lastRange), (0, l2.default)(e3), t4];
            (c2 = this.emitter).emit.apply(c2, [s2.default.events.EDITOR_CHANGE].concat(h2)), t4 !== s2.default.sources.SILENT && (f2 = this.emitter).emit.apply(f2, h2);
          }
        } }]), t3;
      }();
      function y(t3, e3) {
        try {
          e3.parentNode;
        } catch (t4) {
          return false;
        }
        return e3 instanceof Text && (e3 = e3.parentNode), t3.contains(e3);
      }
      e2.Range = d, e2.default = p;
    },
    /* 16 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, l2 = n2(0), a2 = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), o2(e3, [{ key: "insertInto", value: function(t4, n3) {
          0 === t4.children.length ? i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "insertInto", this).call(this, t4, n3) : this.remove();
        } }, { key: "length", value: function() {
          return 0;
        } }, { key: "value", value: function() {
          return "";
        } }], [{ key: "value", value: function() {
        } }]), e3;
      }(((r2 = l2) && r2.__esModule ? r2 : { default: r2 }).default.Embed);
      a2.blotName = "break", a2.tagName = "BR", e2.default = a2;
    },
    /* 17 */
    /***/
    function(t2, e2, n2) {
      var r2, o2 = this && this.__extends || (r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
        t3.__proto__ = e3;
      } || function(t3, e3) {
        for (var n3 in e3) e3.hasOwnProperty(n3) && (t3[n3] = e3[n3]);
      }, function(t3, e3) {
        function n3() {
          this.constructor = t3;
        }
        r2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i2 = n2(44), l2 = n2(30), a2 = n2(1), s2 = (
        /** @class */
        function(t3) {
          function e3(e4) {
            var n3 = t3.call(this, e4) || this;
            return n3.build(), n3;
          }
          return o2(e3, t3), e3.prototype.appendChild = function(t4) {
            this.insertBefore(t4);
          }, e3.prototype.attach = function() {
            t3.prototype.attach.call(this), this.children.forEach(function(t4) {
              t4.attach();
            });
          }, e3.prototype.build = function() {
            var t4 = this;
            this.children = new i2.default(), // Need to be reversed for if DOM nodes already in order
            [].slice.call(this.domNode.childNodes).reverse().forEach(function(e4) {
              try {
                var n3 = u(e4);
                t4.insertBefore(n3, t4.children.head || void 0);
              } catch (t5) {
                if (t5 instanceof a2.ParchmentError) return;
                throw t5;
              }
            });
          }, e3.prototype.deleteAt = function(t4, e4) {
            if (0 === t4 && e4 === this.length()) return this.remove();
            this.children.forEachAt(t4, e4, function(t5, e5, n3) {
              t5.deleteAt(e5, n3);
            });
          }, e3.prototype.descendant = function(t4, n3) {
            var r3 = this.children.find(n3), o3 = r3[0], i3 = r3[1];
            return null == t4.blotName && t4(o3) || null != t4.blotName && o3 instanceof t4 ? [o3, i3] : o3 instanceof e3 ? o3.descendant(t4, i3) : [null, -1];
          }, e3.prototype.descendants = function(t4, n3, r3) {
            void 0 === n3 && (n3 = 0), void 0 === r3 && (r3 = Number.MAX_VALUE);
            var o3 = [], i3 = r3;
            return this.children.forEachAt(n3, r3, function(n4, r4, l3) {
              (null == t4.blotName && t4(n4) || null != t4.blotName && n4 instanceof t4) && o3.push(n4), n4 instanceof e3 && (o3 = o3.concat(n4.descendants(t4, r4, i3))), i3 -= l3;
            }), o3;
          }, e3.prototype.detach = function() {
            this.children.forEach(function(t4) {
              t4.detach();
            }), t3.prototype.detach.call(this);
          }, e3.prototype.formatAt = function(t4, e4, n3, r3) {
            this.children.forEachAt(t4, e4, function(t5, e5, o3) {
              t5.formatAt(e5, o3, n3, r3);
            });
          }, e3.prototype.insertAt = function(t4, e4, n3) {
            var r3 = this.children.find(t4), o3 = r3[0], i3 = r3[1];
            if (o3) o3.insertAt(i3, e4, n3);
            else {
              var l3 = null == n3 ? a2.create("text", e4) : a2.create(e4, n3);
              this.appendChild(l3);
            }
          }, e3.prototype.insertBefore = function(t4, e4) {
            if (null != this.statics.allowedChildren && !this.statics.allowedChildren.some(function(e5) {
              return t4 instanceof e5;
            })) throw new a2.ParchmentError("Cannot insert " + t4.statics.blotName + " into " + this.statics.blotName);
            t4.insertInto(this, e4);
          }, e3.prototype.length = function() {
            return this.children.reduce(function(t4, e4) {
              return t4 + e4.length();
            }, 0);
          }, e3.prototype.moveChildren = function(t4, e4) {
            this.children.forEach(function(n3) {
              t4.insertBefore(n3, e4);
            });
          }, e3.prototype.optimize = function(e4) {
            if (t3.prototype.optimize.call(this, e4), 0 === this.children.length) if (null != this.statics.defaultChild) {
              var n3 = a2.create(this.statics.defaultChild);
              this.appendChild(n3), n3.optimize(e4);
            } else this.remove();
          }, e3.prototype.path = function(t4, n3) {
            void 0 === n3 && (n3 = false);
            var r3 = this.children.find(t4, n3), o3 = r3[0], i3 = r3[1], l3 = [[this, t4]];
            return o3 instanceof e3 ? l3.concat(o3.path(i3, n3)) : (null != o3 && l3.push([o3, i3]), l3);
          }, e3.prototype.removeChild = function(t4) {
            this.children.remove(t4);
          }, e3.prototype.replace = function(n3) {
            n3 instanceof e3 && n3.moveChildren(this), t3.prototype.replace.call(this, n3);
          }, e3.prototype.split = function(t4, e4) {
            if (void 0 === e4 && (e4 = false), !e4) {
              if (0 === t4) return this;
              if (t4 === this.length()) return this.next;
            }
            var n3 = this.clone();
            return this.parent.insertBefore(n3, this.next), this.children.forEachAt(t4, this.length(), function(t5, r3, o3) {
              t5 = t5.split(r3, e4), n3.appendChild(t5);
            }), n3;
          }, e3.prototype.unwrap = function() {
            this.moveChildren(this.parent, this.next), this.remove();
          }, e3.prototype.update = function(t4, e4) {
            var n3 = this, r3 = [], o3 = [];
            t4.forEach(function(t5) {
              t5.target === n3.domNode && "childList" === t5.type && (r3.push.apply(r3, t5.addedNodes), o3.push.apply(o3, t5.removedNodes));
            }), o3.forEach(function(t5) {
              if (!(null != t5.parentNode && // @ts-ignore
              "IFRAME" !== t5.tagName && document.body.compareDocumentPosition(t5) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
                var e5 = a2.find(t5);
                null != e5 && (null != e5.domNode.parentNode && e5.domNode.parentNode !== n3.domNode || e5.detach());
              }
            }), r3.filter(function(t5) {
              return t5.parentNode == n3.domNode;
            }).sort(function(t5, e5) {
              return t5 === e5 ? 0 : t5.compareDocumentPosition(e5) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
            }).forEach(function(t5) {
              var e5 = null;
              null != t5.nextSibling && (e5 = a2.find(t5.nextSibling));
              var r4 = u(t5);
              r4.next == e5 && null != r4.next || (null != r4.parent && r4.parent.removeChild(n3), n3.insertBefore(r4, e5 || void 0));
            });
          }, e3;
        }(l2.default)
      );
      function u(t3) {
        var e3 = a2.find(t3);
        if (null == e3) try {
          e3 = a2.create(t3);
        } catch (n3) {
          e3 = a2.create(a2.Scope.INLINE), [].slice.call(t3.childNodes).forEach(function(t4) {
            e3.domNode.appendChild(t4);
          }), t3.parentNode && t3.parentNode.replaceChild(e3.domNode, t3), e3.attach();
        }
        return e3;
      }
      e2.default = s2;
    },
    /* 18 */
    /***/
    function(t2, e2, n2) {
      var r2, o2 = this && this.__extends || (r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
        t3.__proto__ = e3;
      } || function(t3, e3) {
        for (var n3 in e3) e3.hasOwnProperty(n3) && (t3[n3] = e3[n3]);
      }, function(t3, e3) {
        function n3() {
          this.constructor = t3;
        }
        r2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i2 = n2(12), l2 = n2(31), a2 = n2(17), s2 = n2(1), u = (
        /** @class */
        function(t3) {
          function e3(e4) {
            var n3 = t3.call(this, e4) || this;
            return n3.attributes = new l2.default(n3.domNode), n3;
          }
          return o2(e3, t3), e3.formats = function(t4) {
            return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t4.tagName.toLowerCase() : void 0);
          }, e3.prototype.format = function(t4, e4) {
            var n3 = s2.query(t4);
            n3 instanceof i2.default ? this.attributes.attribute(n3, e4) : e4 && (null == n3 || t4 === this.statics.blotName && this.formats()[t4] === e4 || this.replaceWith(t4, e4));
          }, e3.prototype.formats = function() {
            var t4 = this.attributes.values(), e4 = this.statics.formats(this.domNode);
            return null != e4 && (t4[this.statics.blotName] = e4), t4;
          }, e3.prototype.replaceWith = function(e4, n3) {
            var r3 = t3.prototype.replaceWith.call(this, e4, n3);
            return this.attributes.copy(r3), r3;
          }, e3.prototype.update = function(e4, n3) {
            var r3 = this;
            t3.prototype.update.call(this, e4, n3), e4.some(function(t4) {
              return t4.target === r3.domNode && "attributes" === t4.type;
            }) && this.attributes.build();
          }, e3.prototype.wrap = function(n3, r3) {
            var o3 = t3.prototype.wrap.call(this, n3, r3);
            return o3 instanceof e3 && o3.statics.scope === this.statics.scope && this.attributes.move(o3), o3;
          }, e3;
        }(a2.default)
      );
      e2.default = u;
    },
    /* 19 */
    /***/
    function(t2, e2, n2) {
      var r2, o2 = this && this.__extends || (r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
        t3.__proto__ = e3;
      } || function(t3, e3) {
        for (var n3 in e3) e3.hasOwnProperty(n3) && (t3[n3] = e3[n3]);
      }, function(t3, e3) {
        function n3() {
          this.constructor = t3;
        }
        r2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i2 = n2(30), l2 = n2(1), a2 = (
        /** @class */
        function(t3) {
          function e3() {
            return null !== t3 && t3.apply(this, arguments) || this;
          }
          return o2(e3, t3), e3.value = function(t4) {
            return true;
          }, e3.prototype.index = function(t4, e4) {
            return this.domNode === t4 || this.domNode.compareDocumentPosition(t4) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e4, 1) : -1;
          }, e3.prototype.position = function(t4, e4) {
            var n3 = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
            return t4 > 0 && (n3 += 1), [this.parent.domNode, n3];
          }, e3.prototype.value = function() {
            var t4;
            return (t4 = {})[this.statics.blotName] = this.statics.value(this.domNode) || true, t4;
          }, e3.scope = l2.Scope.INLINE_BLOT, e3;
        }(i2.default)
      );
      e2.default = a2;
    },
    /* 20 */
    /***/
    function(t2, e2, n2) {
      var r2 = n2(11), o2 = n2(3), i2 = { attributes: { compose: function(t3, e3, n3) {
        "object" != typeof t3 && (t3 = {}), "object" != typeof e3 && (e3 = {});
        var r3 = o2(true, {}, e3);
        for (var i3 in n3 || (r3 = Object.keys(r3).reduce(function(t4, e4) {
          return null != r3[e4] && (t4[e4] = r3[e4]), t4;
        }, {})), t3) void 0 !== t3[i3] && void 0 === e3[i3] && (r3[i3] = t3[i3]);
        return Object.keys(r3).length > 0 ? r3 : void 0;
      }, diff: function(t3, e3) {
        "object" != typeof t3 && (t3 = {}), "object" != typeof e3 && (e3 = {});
        var n3 = Object.keys(t3).concat(Object.keys(e3)).reduce(function(n4, o3) {
          return r2(t3[o3], e3[o3]) || (n4[o3] = void 0 === e3[o3] ? null : e3[o3]), n4;
        }, {});
        return Object.keys(n3).length > 0 ? n3 : void 0;
      }, transform: function(t3, e3, n3) {
        if ("object" != typeof t3) return e3;
        if ("object" == typeof e3) {
          if (!n3) return e3;
          var r3 = Object.keys(e3).reduce(function(n4, r4) {
            return void 0 === t3[r4] && (n4[r4] = e3[r4]), n4;
          }, {});
          return Object.keys(r3).length > 0 ? r3 : void 0;
        }
      } }, iterator: function(t3) {
        return new l2(t3);
      }, length: function(t3) {
        return "number" == typeof t3.delete ? t3.delete : "number" == typeof t3.retain ? t3.retain : "string" == typeof t3.insert ? t3.insert.length : 1;
      } };
      function l2(t3) {
        this.ops = t3, this.index = 0, this.offset = 0;
      }
      l2.prototype.hasNext = function() {
        return this.peekLength() < 1 / 0;
      }, l2.prototype.next = function(t3) {
        t3 || (t3 = 1 / 0);
        var e3 = this.ops[this.index];
        if (e3) {
          var n3 = this.offset, r3 = i2.length(e3);
          if (t3 >= r3 - n3 ? (t3 = r3 - n3, this.index += 1, this.offset = 0) : this.offset += t3, "number" == typeof e3.delete) return { delete: t3 };
          var o3 = {};
          return e3.attributes && (o3.attributes = e3.attributes), "number" == typeof e3.retain ? o3.retain = t3 : "string" == typeof e3.insert ? o3.insert = e3.insert.substr(n3, t3) : (
            // offset should === 0, length should === 1
            o3.insert = e3.insert
          ), o3;
        }
        return { retain: 1 / 0 };
      }, l2.prototype.peek = function() {
        return this.ops[this.index];
      }, l2.prototype.peekLength = function() {
        return this.ops[this.index] ? i2.length(this.ops[this.index]) - this.offset : 1 / 0;
      }, l2.prototype.peekType = function() {
        return this.ops[this.index] ? "number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert" : "retain";
      }, l2.prototype.rest = function() {
        if (this.hasNext()) {
          if (0 === this.offset) return this.ops.slice(this.index);
          var t3 = this.offset, e3 = this.index, n3 = this.next(), r3 = this.ops.slice(this.index);
          return this.offset = t3, this.index = e3, [n3].concat(r3);
        }
        return [];
      }, t2.exports = i2;
    },
    /* 21 */
    /***/
    function(t2, e2) {
      var n2 = function() {
        function t3(t4, e4) {
          return null != e4 && t4 instanceof e4;
        }
        var e3, n3, r2;
        try {
          e3 = Map;
        } catch (t4) {
          e3 = function() {
          };
        }
        try {
          n3 = Set;
        } catch (t4) {
          n3 = function() {
          };
        }
        try {
          r2 = Promise;
        } catch (t4) {
          r2 = function() {
          };
        }
        function o2(i3, a2, s2, u, c) {
          "object" == typeof a2 && (s2 = a2.depth, u = a2.prototype, c = a2.includeNonEnumerable, a2 = a2.circular);
          var f = [], h = [], d = "undefined" != typeof Buffer;
          return void 0 === a2 && (a2 = true), void 0 === s2 && (s2 = 1 / 0), // recurse this function so we don't reset allParents and allChildren
          function i4(s3, p) {
            if (null === s3) return null;
            if (0 === p) return s3;
            var y, v;
            if ("object" != typeof s3) return s3;
            if (t3(s3, e3)) y = new e3();
            else if (t3(s3, n3)) y = new n3();
            else if (t3(s3, r2)) y = new r2(function(t4, e4) {
              s3.then(function(e5) {
                t4(i4(e5, p - 1));
              }, function(t5) {
                e4(i4(t5, p - 1));
              });
            });
            else if (o2.__isArray(s3)) y = [];
            else if (o2.__isRegExp(s3)) y = new RegExp(s3.source, l2(s3)), s3.lastIndex && (y.lastIndex = s3.lastIndex);
            else if (o2.__isDate(s3)) y = new Date(s3.getTime());
            else {
              if (d && Buffer.isBuffer(s3))
                return y = Buffer.allocUnsafe ? Buffer.allocUnsafe(s3.length) : new Buffer(s3.length), s3.copy(y), y;
              t3(s3, Error) ? y = Object.create(s3) : void 0 === u ? (v = Object.getPrototypeOf(s3), y = Object.create(v)) : (y = Object.create(u), v = u);
            }
            if (a2) {
              var b = f.indexOf(s3);
              if (-1 != b) return h[b];
              f.push(s3), h.push(y);
            }
            for (var g in t3(s3, e3) && s3.forEach(function(t4, e4) {
              var n4 = i4(e4, p - 1), r3 = i4(t4, p - 1);
              y.set(n4, r3);
            }), t3(s3, n3) && s3.forEach(function(t4) {
              var e4 = i4(t4, p - 1);
              y.add(e4);
            }), s3) {
              var m;
              v && (m = Object.getOwnPropertyDescriptor(v, g)), m && null == m.set || (y[g] = i4(s3[g], p - 1));
            }
            if (Object.getOwnPropertySymbols) {
              var _ = Object.getOwnPropertySymbols(s3);
              for (g = 0; g < _.length; g++) {
                var O = _[g];
                (!(x = Object.getOwnPropertyDescriptor(s3, O)) || x.enumerable || c) && (y[O] = i4(s3[O], p - 1), x.enumerable || Object.defineProperty(y, O, { enumerable: false }));
              }
            }
            if (c) {
              var w = Object.getOwnPropertyNames(s3);
              for (g = 0; g < w.length; g++) {
                var x, k = w[g];
                (x = Object.getOwnPropertyDescriptor(s3, k)) && x.enumerable || (y[k] = i4(s3[k], p - 1), Object.defineProperty(y, k, { enumerable: false }));
              }
            }
            return y;
          }(i3, s2);
        }
        function i2(t4) {
          return Object.prototype.toString.call(t4);
        }
        function l2(t4) {
          var e4 = "";
          return t4.global && (e4 += "g"), t4.ignoreCase && (e4 += "i"), t4.multiline && (e4 += "m"), e4;
        }
        return o2.clonePrototype = function(t4) {
          if (null === t4) return null;
          var e4 = function() {
          };
          return e4.prototype = t4, new e4();
        }, o2.__objToStr = i2, o2.__isDate = function(t4) {
          return "object" == typeof t4 && "[object Date]" === i2(t4);
        }, o2.__isArray = function(t4) {
          return "object" == typeof t4 && "[object Array]" === i2(t4);
        }, o2.__isRegExp = function(t4) {
          return "object" == typeof t4 && "[object RegExp]" === i2(t4);
        }, o2.__getRegExpFlags = l2, o2;
      }();
      "object" == typeof t2 && t2.exports && (t2.exports = n2);
    },
    /* 22 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = function(t3, e3) {
        if (Array.isArray(t3)) return t3;
        if (Symbol.iterator in Object(t3)) return function(t4, e4) {
          var n3 = [], r3 = true, o3 = false, i3 = void 0;
          try {
            for (var l3, a3 = t4[Symbol.iterator](); !(r3 = (l3 = a3.next()).done) && (n3.push(l3.value), !e4 || n3.length !== e4); r3 = true) ;
          } catch (t5) {
            o3 = true, i3 = t5;
          } finally {
            try {
              !r3 && a3.return && a3.return();
            } finally {
              if (o3) throw i3;
            }
          }
          return n3;
        }(t3, e3);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, l2 = d(n2(0)), a2 = d(n2(8)), s2 = n2(4), u = d(s2), c = d(n2(16)), f = d(n2(13)), h = d(n2(25));
      function d(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      function p(t3) {
        return t3 instanceof u.default || t3 instanceof s2.BlockEmbed;
      }
      var y = function(t3) {
        function e3(t4, n3) {
          !function(t5, e4) {
            if (!(t5 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3);
          var r3 = function(t5, e4) {
            if (!t5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t5 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4));
          return r3.emitter = n3.emitter, Array.isArray(n3.whitelist) && (r3.whitelist = n3.whitelist.reduce(function(t5, e4) {
            return t5[e4] = true, t5;
          }, {})), // Some reason fixes composition issues with character languages in Windows/Chrome, Safari
          r3.domNode.addEventListener("DOMNodeInserted", function() {
          }), r3.optimize(), r3.enable(), r3;
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), o2(e3, [{ key: "batchStart", value: function() {
          this.batch = true;
        } }, { key: "batchEnd", value: function() {
          this.batch = false, this.optimize();
        } }, { key: "deleteAt", value: function(t4, n3) {
          var o3 = this.line(t4), l3 = r2(o3, 2), a3 = l3[0], u2 = l3[1], h2 = this.line(t4 + n3), d2 = r2(h2, 1)[0];
          if (i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "deleteAt", this).call(this, t4, n3), null != d2 && a3 !== d2 && u2 > 0) {
            if (a3 instanceof s2.BlockEmbed || d2 instanceof s2.BlockEmbed) return void this.optimize();
            if (a3 instanceof f.default) {
              var p2 = a3.newlineIndex(a3.length(), true);
              if (p2 > -1 && (a3 = a3.split(p2 + 1)) === d2) return void this.optimize();
            } else if (d2 instanceof f.default) {
              var y2 = d2.newlineIndex(0);
              y2 > -1 && d2.split(y2 + 1);
            }
            var v = d2.children.head instanceof c.default ? null : d2.children.head;
            a3.moveChildren(d2, v), a3.remove();
          }
          this.optimize();
        } }, { key: "enable", value: function() {
          var t4 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.domNode.setAttribute("contenteditable", t4);
        } }, { key: "formatAt", value: function(t4, n3, r3, o3) {
          (null == this.whitelist || this.whitelist[r3]) && (i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "formatAt", this).call(this, t4, n3, r3, o3), this.optimize());
        } }, { key: "insertAt", value: function(t4, n3, r3) {
          if (null == r3 || null == this.whitelist || this.whitelist[n3]) {
            if (t4 >= this.length()) if (null == r3 || null == l2.default.query(n3, l2.default.Scope.BLOCK)) {
              var o3 = l2.default.create(this.statics.defaultChild);
              this.appendChild(o3), null == r3 && n3.endsWith("\n") && (n3 = n3.slice(0, -1)), o3.insertAt(0, n3, r3);
            } else {
              var a3 = l2.default.create(n3, r3);
              this.appendChild(a3);
            }
            else i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "insertAt", this).call(this, t4, n3, r3);
            this.optimize();
          }
        } }, { key: "insertBefore", value: function(t4, n3) {
          if (t4.statics.scope === l2.default.Scope.INLINE_BLOT) {
            var r3 = l2.default.create(this.statics.defaultChild);
            r3.appendChild(t4), t4 = r3;
          }
          i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "insertBefore", this).call(this, t4, n3);
        } }, { key: "leaf", value: function(t4) {
          return this.path(t4).pop() || [null, -1];
        } }, { key: "line", value: function(t4) {
          return t4 === this.length() ? this.line(t4 - 1) : this.descendant(p, t4);
        } }, { key: "lines", value: function() {
          return function t4(e4, n3, r3) {
            var o3 = [], i3 = r3;
            return e4.children.forEachAt(n3, r3, function(e5, n4, r4) {
              p(e5) ? o3.push(e5) : e5 instanceof l2.default.Container && (o3 = o3.concat(t4(e5, n4, i3))), i3 -= r4;
            }), o3;
          }(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE);
        } }, { key: "optimize", value: function() {
          var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          true !== this.batch && (i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "optimize", this).call(this, t4, n3), t4.length > 0 && this.emitter.emit(a2.default.events.SCROLL_OPTIMIZE, t4, n3));
        } }, { key: "path", value: function(t4) {
          return i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "path", this).call(this, t4).slice(1);
        } }, { key: "update", value: function(t4) {
          if (true !== this.batch) {
            var n3 = a2.default.sources.USER;
            "string" == typeof t4 && (n3 = t4), Array.isArray(t4) || (t4 = this.observer.takeRecords()), t4.length > 0 && this.emitter.emit(a2.default.events.SCROLL_BEFORE_UPDATE, n3, t4), i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "update", this).call(this, t4.concat([])), // pass copy
            t4.length > 0 && this.emitter.emit(a2.default.events.SCROLL_UPDATE, n3, t4);
          }
        } }]), e3;
      }(l2.default.Scroll);
      y.blotName = "scroll", y.className = "ql-editor", y.tagName = "DIV", y.defaultChild = "block", y.allowedChildren = [u.default, s2.BlockEmbed, h.default], e2.default = y;
    },
    /* 23 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.SHORTKEY = e2.default = void 0;
      var r2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
        return typeof t3;
      } : function(t3) {
        return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
      }, o2 = function(t3, e3) {
        if (Array.isArray(t3)) return t3;
        if (Symbol.iterator in Object(t3)) return function(t4, e4) {
          var n3 = [], r3 = true, o3 = false, i3 = void 0;
          try {
            for (var l3, a3 = t4[Symbol.iterator](); !(r3 = (l3 = a3.next()).done) && (n3.push(l3.value), !e4 || n3.length !== e4); r3 = true) ;
          } catch (t5) {
            o3 = true, i3 = t5;
          } finally {
            try {
              !r3 && a3.return && a3.return();
            } finally {
              if (o3) throw i3;
            }
          }
          return n3;
        }(t3, e3);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }, i2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), l2 = y(n2(21)), a2 = y(n2(11)), s2 = y(n2(3)), u = y(n2(2)), c = y(n2(20)), f = y(n2(0)), h = y(n2(5)), d = y(n2(10)), p = y(n2(9));
      function y(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      function v(t3, e3, n3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: n3, enumerable: true, configurable: true, writable: true }) : t3[e3] = n3, t3;
      }
      var b = (0, d.default)("quill:keyboard"), g = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey", m = function(t3) {
        function e3(t4, n3) {
          !function(t5, e4) {
            if (!(t5 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3);
          var r3 = function(t5, e4) {
            if (!t5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t5 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4, n3));
          return r3.bindings = {}, Object.keys(r3.options.bindings).forEach(function(e4) {
            ("list autofill" !== e4 || null == t4.scroll.whitelist || t4.scroll.whitelist.list) && r3.options.bindings[e4] && r3.addBinding(r3.options.bindings[e4]);
          }), r3.addBinding({ key: e3.keys.ENTER, shiftKey: null }, k), r3.addBinding({ key: e3.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function() {
          }), /Firefox/i.test(navigator.userAgent) ? (
            // Need to handle delete and backspace for Firefox in the general case #1171
            (r3.addBinding({ key: e3.keys.BACKSPACE }, { collapsed: true }, O), r3.addBinding({ key: e3.keys.DELETE }, { collapsed: true }, w))
          ) : (r3.addBinding({ key: e3.keys.BACKSPACE }, { collapsed: true, prefix: /^.?$/ }, O), r3.addBinding({ key: e3.keys.DELETE }, { collapsed: true, suffix: /^.?$/ }, w)), r3.addBinding({ key: e3.keys.BACKSPACE }, { collapsed: false }, x), r3.addBinding({ key: e3.keys.DELETE }, { collapsed: false }, x), r3.addBinding({ key: e3.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: true, offset: 0 }, O), r3.listen(), r3;
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), i2(e3, null, [{ key: "match", value: function(t4, e4) {
          return e4 = A(e4), !["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function(n3) {
            return !!e4[n3] !== t4[n3] && null !== e4[n3];
          }) && e4.key === (t4.which || t4.keyCode);
        } }]), i2(e3, [{ key: "addBinding", value: function(t4) {
          var e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r3 = A(t4);
          if (null == r3 || null == r3.key) return b.warn("Attempted to add invalid keyboard binding", r3);
          "function" == typeof e4 && (e4 = { handler: e4 }), "function" == typeof n3 && (n3 = { handler: n3 }), r3 = (0, s2.default)(r3, e4, n3), this.bindings[r3.key] = this.bindings[r3.key] || [], this.bindings[r3.key].push(r3);
        } }, { key: "listen", value: function() {
          var t4 = this;
          this.quill.root.addEventListener("keydown", function(n3) {
            if (!n3.defaultPrevented) {
              var i3 = n3.which || n3.keyCode, l3 = (t4.bindings[i3] || []).filter(function(t5) {
                return e3.match(n3, t5);
              });
              if (0 !== l3.length) {
                var s3 = t4.quill.getSelection();
                if (null != s3 && t4.quill.hasFocus()) {
                  var u2 = t4.quill.getLine(s3.index), c2 = o2(u2, 2), h2 = c2[0], d2 = c2[1], p2 = t4.quill.getLeaf(s3.index), y2 = o2(p2, 2), v2 = y2[0], b2 = y2[1], g2 = 0 === s3.length ? [v2, b2] : t4.quill.getLeaf(s3.index + s3.length), m2 = o2(g2, 2), _2 = m2[0], O2 = m2[1], w2 = v2 instanceof f.default.Text ? v2.value().slice(0, b2) : "", x2 = _2 instanceof f.default.Text ? _2.value().slice(O2) : "", k2 = { collapsed: 0 === s3.length, empty: 0 === s3.length && h2.length() <= 1, format: t4.quill.getFormat(s3), offset: d2, prefix: w2, suffix: x2 };
                  l3.some(function(e4) {
                    if (null != e4.collapsed && e4.collapsed !== k2.collapsed) return false;
                    if (null != e4.empty && e4.empty !== k2.empty) return false;
                    if (null != e4.offset && e4.offset !== k2.offset) return false;
                    if (Array.isArray(e4.format)) {
                      if (e4.format.every(function(t5) {
                        return null == k2.format[t5];
                      })) return false;
                    } else if ("object" === r2(e4.format) && !Object.keys(e4.format).every(function(t5) {
                      return true === e4.format[t5] ? null != k2.format[t5] : false === e4.format[t5] ? null == k2.format[t5] : (0, a2.default)(e4.format[t5], k2.format[t5]);
                    })) return false;
                    return !(null != e4.prefix && !e4.prefix.test(k2.prefix) || null != e4.suffix && !e4.suffix.test(k2.suffix) || true === e4.handler.call(t4, s3, k2));
                  }) && n3.preventDefault();
                }
              }
            }
          });
        } }]), e3;
      }(p.default);
      function _(t3, e3) {
        var n3, r3 = t3 === m.keys.LEFT ? "prefix" : "suffix";
        return v(n3 = { key: t3, shiftKey: e3, altKey: null }, r3, /^$/), v(n3, "handler", function(n4) {
          var r4 = n4.index;
          t3 === m.keys.RIGHT && (r4 += n4.length + 1);
          var i3 = this.quill.getLeaf(r4);
          return !(o2(i3, 1)[0] instanceof f.default.Embed && (t3 === m.keys.LEFT ? e3 ? this.quill.setSelection(n4.index - 1, n4.length + 1, h.default.sources.USER) : this.quill.setSelection(n4.index - 1, h.default.sources.USER) : e3 ? this.quill.setSelection(n4.index, n4.length + 1, h.default.sources.USER) : this.quill.setSelection(n4.index + n4.length + 1, h.default.sources.USER), 1));
        }), n3;
      }
      function O(t3, e3) {
        if (!(0 === t3.index || this.quill.getLength() <= 1)) {
          var n3 = this.quill.getLine(t3.index), r3 = o2(n3, 1)[0], i3 = {};
          if (0 === e3.offset) {
            var l3 = this.quill.getLine(t3.index - 1), a3 = o2(l3, 1)[0];
            if (null != a3 && a3.length() > 1) {
              var s3 = r3.formats(), u2 = this.quill.getFormat(t3.index - 1, 1);
              i3 = c.default.attributes.diff(s3, u2) || {};
            }
          }
          var f2 = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e3.prefix) ? 2 : 1;
          this.quill.deleteText(t3.index - f2, f2, h.default.sources.USER), Object.keys(i3).length > 0 && this.quill.formatLine(t3.index - f2, f2, i3, h.default.sources.USER), this.quill.focus();
        }
      }
      function w(t3, e3) {
        var n3 = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e3.suffix) ? 2 : 1;
        if (!(t3.index >= this.quill.getLength() - n3)) {
          var r3 = {}, i3 = 0, l3 = this.quill.getLine(t3.index), a3 = o2(l3, 1)[0];
          if (e3.offset >= a3.length() - 1) {
            var s3 = this.quill.getLine(t3.index + 1), u2 = o2(s3, 1)[0];
            if (u2) {
              var f2 = a3.formats(), d2 = this.quill.getFormat(t3.index, 1);
              r3 = c.default.attributes.diff(f2, d2) || {}, i3 = u2.length();
            }
          }
          this.quill.deleteText(t3.index, n3, h.default.sources.USER), Object.keys(r3).length > 0 && this.quill.formatLine(t3.index + i3 - 1, n3, r3, h.default.sources.USER);
        }
      }
      function x(t3) {
        var e3 = this.quill.getLines(t3), n3 = {};
        if (e3.length > 1) {
          var r3 = e3[0].formats(), o3 = e3[e3.length - 1].formats();
          n3 = c.default.attributes.diff(o3, r3) || {};
        }
        this.quill.deleteText(t3, h.default.sources.USER), Object.keys(n3).length > 0 && this.quill.formatLine(t3.index, 1, n3, h.default.sources.USER), this.quill.setSelection(t3.index, h.default.sources.SILENT), this.quill.focus();
      }
      function k(t3, e3) {
        var n3 = this;
        t3.length > 0 && this.quill.scroll.deleteAt(t3.index, t3.length);
        var r3 = Object.keys(e3.format).reduce(function(t4, n4) {
          return f.default.query(n4, f.default.Scope.BLOCK) && !Array.isArray(e3.format[n4]) && (t4[n4] = e3.format[n4]), t4;
        }, {});
        this.quill.insertText(t3.index, "\n", r3, h.default.sources.USER), // Earlier scroll.deleteAt might have messed up our selection,
        // so insertText's built in selection preservation is not reliable
        this.quill.setSelection(t3.index + 1, h.default.sources.SILENT), this.quill.focus(), Object.keys(e3.format).forEach(function(t4) {
          null == r3[t4] && (Array.isArray(e3.format[t4]) || "link" !== t4 && n3.quill.format(t4, e3.format[t4], h.default.sources.USER));
        });
      }
      function E(t3) {
        return { key: m.keys.TAB, shiftKey: !t3, format: { "code-block": true }, handler: function(e3) {
          var n3 = f.default.query("code-block"), r3 = e3.index, i3 = e3.length, l3 = this.quill.scroll.descendant(n3, r3), a3 = o2(l3, 2), s3 = a3[0], u2 = a3[1];
          if (null != s3) {
            var c2 = this.quill.getIndex(s3), d2 = s3.newlineIndex(u2, true) + 1, p2 = s3.newlineIndex(c2 + u2 + i3), y2 = s3.domNode.textContent.slice(d2, p2).split("\n");
            u2 = 0, y2.forEach(function(e4, o3) {
              t3 ? (s3.insertAt(d2 + u2, n3.TAB), u2 += n3.TAB.length, 0 === o3 ? r3 += n3.TAB.length : i3 += n3.TAB.length) : e4.startsWith(n3.TAB) && (s3.deleteAt(d2 + u2, n3.TAB.length), u2 -= n3.TAB.length, 0 === o3 ? r3 -= n3.TAB.length : i3 -= n3.TAB.length), u2 += e4.length + 1;
            }), this.quill.update(h.default.sources.USER), this.quill.setSelection(r3, i3, h.default.sources.SILENT);
          }
        } };
      }
      function N(t3) {
        return { key: t3[0].toUpperCase(), shortKey: true, handler: function(e3, n3) {
          this.quill.format(t3, !n3.format[t3], h.default.sources.USER);
        } };
      }
      function A(t3) {
        if ("string" == typeof t3 || "number" == typeof t3) return A({ key: t3 });
        if ("object" === (void 0 === t3 ? "undefined" : r2(t3)) && (t3 = (0, l2.default)(t3, false)), "string" == typeof t3.key) if (null != m.keys[t3.key.toUpperCase()]) t3.key = m.keys[t3.key.toUpperCase()];
        else {
          if (1 !== t3.key.length) return null;
          t3.key = t3.key.toUpperCase().charCodeAt(0);
        }
        return t3.shortKey && (t3[g] = t3.shortKey, delete t3.shortKey), t3;
      }
      m.keys = { BACKSPACE: 8, TAB: 9, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 }, m.DEFAULTS = { bindings: { bold: N("bold"), italic: N("italic"), underline: N("underline"), indent: {
        // highlight tab or tab at beginning of list, indent or blockquote
        key: m.keys.TAB,
        format: ["blockquote", "indent", "list"],
        handler: function(t3, e3) {
          if (e3.collapsed && 0 !== e3.offset) return true;
          this.quill.format("indent", "+1", h.default.sources.USER);
        }
      }, outdent: {
        key: m.keys.TAB,
        shiftKey: true,
        format: ["blockquote", "indent", "list"],
        // highlight tab or tab at beginning of list, indent or blockquote
        handler: function(t3, e3) {
          if (e3.collapsed && 0 !== e3.offset) return true;
          this.quill.format("indent", "-1", h.default.sources.USER);
        }
      }, "outdent backspace": { key: m.keys.BACKSPACE, collapsed: true, shiftKey: null, metaKey: null, ctrlKey: null, altKey: null, format: ["indent", "list"], offset: 0, handler: function(t3, e3) {
        null != e3.format.indent ? this.quill.format("indent", "-1", h.default.sources.USER) : null != e3.format.list && this.quill.format("list", false, h.default.sources.USER);
      } }, "indent code-block": E(true), "outdent code-block": E(false), "remove tab": { key: m.keys.TAB, shiftKey: true, collapsed: true, prefix: /\t$/, handler: function(t3) {
        this.quill.deleteText(t3.index - 1, 1, h.default.sources.USER);
      } }, tab: { key: m.keys.TAB, handler: function(t3) {
        this.quill.history.cutoff();
        var e3 = new u.default().retain(t3.index).delete(t3.length).insert("	");
        this.quill.updateContents(e3, h.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t3.index + 1, h.default.sources.SILENT);
      } }, "list empty enter": { key: m.keys.ENTER, collapsed: true, format: ["list"], empty: true, handler: function(t3, e3) {
        this.quill.format("list", false, h.default.sources.USER), e3.format.indent && this.quill.format("indent", false, h.default.sources.USER);
      } }, "checklist enter": { key: m.keys.ENTER, collapsed: true, format: { list: "checked" }, handler: function(t3) {
        var e3 = this.quill.getLine(t3.index), n3 = o2(e3, 2), r3 = n3[0], i3 = n3[1], l3 = (0, s2.default)({}, r3.formats(), { list: "checked" }), a3 = new u.default().retain(t3.index).insert("\n", l3).retain(r3.length() - i3 - 1).retain(1, { list: "unchecked" });
        this.quill.updateContents(a3, h.default.sources.USER), this.quill.setSelection(t3.index + 1, h.default.sources.SILENT), this.quill.scrollIntoView();
      } }, "header enter": { key: m.keys.ENTER, collapsed: true, format: ["header"], suffix: /^$/, handler: function(t3, e3) {
        var n3 = this.quill.getLine(t3.index), r3 = o2(n3, 2), i3 = r3[0], l3 = r3[1], a3 = new u.default().retain(t3.index).insert("\n", e3.format).retain(i3.length() - l3 - 1).retain(1, { header: null });
        this.quill.updateContents(a3, h.default.sources.USER), this.quill.setSelection(t3.index + 1, h.default.sources.SILENT), this.quill.scrollIntoView();
      } }, "list autofill": { key: " ", collapsed: true, format: { list: false }, prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/, handler: function(t3, e3) {
        var n3 = e3.prefix.length, r3 = this.quill.getLine(t3.index), i3 = o2(r3, 2), l3 = i3[0], a3 = i3[1];
        if (a3 > n3) return true;
        var s3 = void 0;
        switch (e3.prefix.trim()) {
          case "[]":
          case "[ ]":
            s3 = "unchecked";
            break;
          case "[x]":
            s3 = "checked";
            break;
          case "-":
          case "*":
            s3 = "bullet";
            break;
          default:
            s3 = "ordered";
        }
        this.quill.insertText(t3.index, " ", h.default.sources.USER), this.quill.history.cutoff();
        var c2 = new u.default().retain(t3.index - a3).delete(n3 + 1).retain(l3.length() - 2 - a3).retain(1, { list: s3 });
        this.quill.updateContents(c2, h.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t3.index - n3, h.default.sources.SILENT);
      } }, "code exit": { key: m.keys.ENTER, collapsed: true, format: ["code-block"], prefix: /\n\n$/, suffix: /^\s+$/, handler: function(t3) {
        var e3 = this.quill.getLine(t3.index), n3 = o2(e3, 2), r3 = n3[0], i3 = n3[1], l3 = new u.default().retain(t3.index + r3.length() - i3 - 2).retain(1, { "code-block": null }).delete(1);
        this.quill.updateContents(l3, h.default.sources.USER);
      } }, "embed left": _(m.keys.LEFT, false), "embed left shift": _(m.keys.LEFT, true), "embed right": _(m.keys.RIGHT, false), "embed right shift": _(m.keys.RIGHT, true) } }, e2.default = m, e2.SHORTKEY = g;
    },
    /* 24 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = function(t3, e3) {
        if (Array.isArray(t3)) return t3;
        if (Symbol.iterator in Object(t3)) return function(t4, e4) {
          var n3 = [], r3 = true, o3 = false, i3 = void 0;
          try {
            for (var l3, a3 = t4[Symbol.iterator](); !(r3 = (l3 = a3.next()).done) && (n3.push(l3.value), !e4 || n3.length !== e4); r3 = true) ;
          } catch (t5) {
            o3 = true, i3 = t5;
          } finally {
            try {
              !r3 && a3.return && a3.return();
            } finally {
              if (o3) throw i3;
            }
          }
          return n3;
        }(t3, e3);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }, o2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, i2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), l2 = s2(n2(0)), a2 = s2(n2(7));
      function s2(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      var u = function(t3) {
        function e3(t4, n3) {
          !function(t5, e4) {
            if (!(t5 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3);
          var r3 = function(t5, e4) {
            if (!t5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t5 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4));
          return r3.selection = n3, r3.textNode = document.createTextNode(e3.CONTENTS), r3.domNode.appendChild(r3.textNode), r3._length = 0, r3;
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), i2(e3, null, [{ key: "value", value: function() {
        } }]), i2(e3, [{ key: "detach", value: function() {
          null != this.parent && this.parent.removeChild(this);
        } }, { key: "format", value: function(t4, n3) {
          if (0 !== this._length) return o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "format", this).call(this, t4, n3);
          for (var r3 = this, i3 = 0; null != r3 && r3.statics.scope !== l2.default.Scope.BLOCK_BLOT; ) i3 += r3.offset(r3.parent), r3 = r3.parent;
          null != r3 && (this._length = e3.CONTENTS.length, r3.optimize(), r3.formatAt(i3, e3.CONTENTS.length, t4, n3), this._length = 0);
        } }, { key: "index", value: function(t4, n3) {
          return t4 === this.textNode ? 0 : o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "index", this).call(this, t4, n3);
        } }, { key: "length", value: function() {
          return this._length;
        } }, { key: "position", value: function() {
          return [this.textNode, this.textNode.data.length];
        } }, { key: "remove", value: function() {
          o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "remove", this).call(this), this.parent = null;
        } }, { key: "restore", value: function() {
          if (!this.selection.composing && null != this.parent) {
            var t4 = this.textNode, n3 = this.selection.getNativeRange(), o3 = void 0, i3 = void 0, s3 = void 0;
            if (null != n3 && n3.start.node === t4 && n3.end.node === t4) {
              var u2 = [t4, n3.start.offset, n3.end.offset];
              o3 = u2[0], i3 = u2[1], s3 = u2[2];
            }
            for (; null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode; ) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
            if (this.textNode.data !== e3.CONTENTS) {
              var c = this.textNode.data.split(e3.CONTENTS).join("");
              this.next instanceof a2.default ? (o3 = this.next.domNode, this.next.insertAt(0, c), this.textNode.data = e3.CONTENTS) : (this.textNode.data = c, this.parent.insertBefore(l2.default.create(this.textNode), this), this.textNode = document.createTextNode(e3.CONTENTS), this.domNode.appendChild(this.textNode));
            }
            if (this.remove(), null != i3) {
              var f = [i3, s3].map(function(t5) {
                return Math.max(0, Math.min(o3.data.length, t5 - 1));
              }), h = r2(f, 2);
              return i3 = h[0], s3 = h[1], { startNode: o3, startOffset: i3, endNode: o3, endOffset: s3 };
            }
          }
        } }, { key: "update", value: function(t4, e4) {
          var n3 = this;
          if (t4.some(function(t5) {
            return "characterData" === t5.type && t5.target === n3.textNode;
          })) {
            var r3 = this.restore();
            r3 && (e4.range = r3);
          }
        } }, { key: "value", value: function() {
          return "";
        } }]), e3;
      }(l2.default.Embed);
      u.blotName = "cursor", u.className = "ql-cursor", u.tagName = "span", u.CONTENTS = "\uFEFF", // Zero width no break space
      e2.default = u;
    },
    /* 25 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = l2(n2(0)), o2 = n2(4), i2 = l2(o2);
      function l2(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      var a2 = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), e3;
      }(r2.default.Container);
      a2.allowedChildren = [i2.default, o2.BlockEmbed, a2], e2.default = a2;
    },
    /* 26 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.ColorStyle = e2.ColorClass = e2.ColorAttributor = void 0;
      var r2, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, l2 = n2(0), a2 = (r2 = l2) && r2.__esModule ? r2 : { default: r2 }, s2 = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), o2(e3, [{ key: "value", value: function(t4) {
          var n3 = i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "value", this).call(this, t4);
          return n3.startsWith("rgb(") ? (n3 = n3.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""), "#" + n3.split(",").map(function(t5) {
            return ("00" + parseInt(t5).toString(16)).slice(-2);
          }).join("")) : n3;
        } }]), e3;
      }(a2.default.Attributor.Style), u = new a2.default.Attributor.Class("color", "ql-color", { scope: a2.default.Scope.INLINE }), c = new s2("color", "color", { scope: a2.default.Scope.INLINE });
      e2.ColorAttributor = s2, e2.ColorClass = u, e2.ColorStyle = c;
    },
    /* 27 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.sanitize = e2.default = void 0;
      var r2, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, l2 = n2(6), a2 = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), o2(e3, [{ key: "format", value: function(t4, n3) {
          if (t4 !== this.statics.blotName || !n3) return i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "format", this).call(this, t4, n3);
          n3 = this.constructor.sanitize(n3), this.domNode.setAttribute("href", n3);
        } }], [{ key: "create", value: function(t4) {
          var n3 = i2(e3.__proto__ || Object.getPrototypeOf(e3), "create", this).call(this, t4);
          return t4 = this.sanitize(t4), n3.setAttribute("href", t4), n3.setAttribute("rel", "noopener noreferrer"), n3.setAttribute("target", "_blank"), n3;
        } }, { key: "formats", value: function(t4) {
          return t4.getAttribute("href");
        } }, { key: "sanitize", value: function(t4) {
          return s2(t4, this.PROTOCOL_WHITELIST) ? t4 : this.SANITIZED_URL;
        } }]), e3;
      }(((r2 = l2) && r2.__esModule ? r2 : { default: r2 }).default);
      function s2(t3, e3) {
        var n3 = document.createElement("a");
        n3.href = t3;
        var r3 = n3.href.slice(0, n3.href.indexOf(":"));
        return e3.indexOf(r3) > -1;
      }
      a2.blotName = "link", a2.tagName = "A", a2.SANITIZED_URL = "about:blank", a2.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"], e2.default = a2, e2.sanitize = s2;
    },
    /* 28 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
        return typeof t3;
      } : function(t3) {
        return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
      }, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = a2(n2(23)), l2 = a2(n2(107));
      function a2(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      var s2 = 0;
      function u(t3, e3) {
        t3.setAttribute(e3, !("true" === t3.getAttribute(e3)));
      }
      var c = function() {
        function t3(e3) {
          var n3 = this;
          !function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, t3), this.select = e3, this.container = document.createElement("span"), this.buildPicker(), this.select.style.display = "none", this.select.parentNode.insertBefore(this.container, this.select), this.label.addEventListener("mousedown", function() {
            n3.togglePicker();
          }), this.label.addEventListener("keydown", function(t4) {
            switch (t4.keyCode) {
              // Allows the "Enter" key to open the picker
              case i2.default.keys.ENTER:
                n3.togglePicker();
                break;
              // Allows the "Escape" key to close the picker
              case i2.default.keys.ESCAPE:
                n3.escape(), t4.preventDefault();
            }
          }), this.select.addEventListener("change", this.update.bind(this));
        }
        return o2(t3, [{ key: "togglePicker", value: function() {
          this.container.classList.toggle("ql-expanded"), // Toggle aria-expanded and aria-hidden to make the picker accessible
          u(this.label, "aria-expanded"), u(this.options, "aria-hidden");
        } }, { key: "buildItem", value: function(t4) {
          var e3 = this, n3 = document.createElement("span");
          return n3.tabIndex = "0", n3.setAttribute("role", "button"), n3.classList.add("ql-picker-item"), t4.hasAttribute("value") && n3.setAttribute("data-value", t4.getAttribute("value")), t4.textContent && n3.setAttribute("data-label", t4.textContent), n3.addEventListener("click", function() {
            e3.selectItem(n3, true);
          }), n3.addEventListener("keydown", function(t5) {
            switch (t5.keyCode) {
              // Allows the "Enter" key to select an item
              case i2.default.keys.ENTER:
                e3.selectItem(n3, true), t5.preventDefault();
                break;
              // Allows the "Escape" key to close the picker
              case i2.default.keys.ESCAPE:
                e3.escape(), t5.preventDefault();
            }
          }), n3;
        } }, { key: "buildLabel", value: function() {
          var t4 = document.createElement("span");
          return t4.classList.add("ql-picker-label"), t4.innerHTML = l2.default, t4.tabIndex = "0", t4.setAttribute("role", "button"), t4.setAttribute("aria-expanded", "false"), this.container.appendChild(t4), t4;
        } }, { key: "buildOptions", value: function() {
          var t4 = this, e3 = document.createElement("span");
          e3.classList.add("ql-picker-options"), // Don't want screen readers to read this until options are visible
          e3.setAttribute("aria-hidden", "true"), e3.tabIndex = "-1", // Need a unique id for aria-controls
          e3.id = "ql-picker-options-" + s2, s2 += 1, this.label.setAttribute("aria-controls", e3.id), this.options = e3, [].slice.call(this.select.options).forEach(function(n3) {
            var r3 = t4.buildItem(n3);
            e3.appendChild(r3), true === n3.selected && t4.selectItem(r3);
          }), this.container.appendChild(e3);
        } }, { key: "buildPicker", value: function() {
          var t4 = this;
          [].slice.call(this.select.attributes).forEach(function(e3) {
            t4.container.setAttribute(e3.name, e3.value);
          }), this.container.classList.add("ql-picker"), this.label = this.buildLabel(), this.buildOptions();
        } }, { key: "escape", value: function() {
          var t4 = this;
          this.close(), // Need setTimeout for accessibility to ensure that the browser executes
          // focus on the next process thread and after any DOM content changes
          setTimeout(function() {
            return t4.label.focus();
          }, 1);
        } }, { key: "close", value: function() {
          this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
        } }, { key: "selectItem", value: function(t4) {
          var e3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n3 = this.container.querySelector(".ql-selected");
          if (t4 !== n3 && (null != n3 && n3.classList.remove("ql-selected"), null != t4 && (t4.classList.add("ql-selected"), this.select.selectedIndex = [].indexOf.call(t4.parentNode.children, t4), t4.hasAttribute("data-value") ? this.label.setAttribute("data-value", t4.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t4.hasAttribute("data-label") ? this.label.setAttribute("data-label", t4.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e3))) {
            if ("function" == typeof Event) this.select.dispatchEvent(new Event("change"));
            else if ("object" === ("undefined" == typeof Event ? "undefined" : r2(Event))) {
              var o3 = document.createEvent("Event");
              o3.initEvent("change", true, true), this.select.dispatchEvent(o3);
            }
            this.close();
          }
        } }, { key: "update", value: function() {
          var t4 = void 0;
          if (this.select.selectedIndex > -1) {
            var e3 = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];
            t4 = this.select.options[this.select.selectedIndex], this.selectItem(e3);
          } else this.selectItem(null);
          var n3 = null != t4 && t4 !== this.select.querySelector("option[selected]");
          this.label.classList.toggle("ql-active", n3);
        } }]), t3;
      }();
      e2.default = c;
    },
    /* 29 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = b(n2(0)), o2 = b(n2(5)), i2 = n2(4), l2 = b(i2), a2 = b(n2(16)), s2 = b(n2(25)), u = b(n2(24)), c = b(n2(35)), f = b(n2(6)), h = b(n2(22)), d = b(n2(7)), p = b(n2(55)), y = b(n2(42)), v = b(n2(23));
      function b(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      o2.default.register({ "blots/block": l2.default, "blots/block/embed": i2.BlockEmbed, "blots/break": a2.default, "blots/container": s2.default, "blots/cursor": u.default, "blots/embed": c.default, "blots/inline": f.default, "blots/scroll": h.default, "blots/text": d.default, "modules/clipboard": p.default, "modules/history": y.default, "modules/keyboard": v.default }), r2.default.register(l2.default, a2.default, u.default, f.default, h.default, d.default), e2.default = o2.default;
    },
    /* 30 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = n2(1), o2 = (
        /** @class */
        function() {
          function t3(t4) {
            this.domNode = t4, // @ts-ignore
            this.domNode[r2.DATA_KEY] = { blot: this };
          }
          return Object.defineProperty(t3.prototype, "statics", {
            // Hack for accessing inherited static methods
            get: function() {
              return this.constructor;
            },
            enumerable: true,
            configurable: true
          }), t3.create = function(t4) {
            if (null == this.tagName) throw new r2.ParchmentError("Blot definition missing tagName");
            var e3;
            return Array.isArray(this.tagName) ? ("string" == typeof t4 && (t4 = t4.toUpperCase(), parseInt(t4).toString() === t4 && (t4 = parseInt(t4))), e3 = "number" == typeof t4 ? document.createElement(this.tagName[t4 - 1]) : this.tagName.indexOf(t4) > -1 ? document.createElement(t4) : document.createElement(this.tagName[0])) : e3 = document.createElement(this.tagName), this.className && e3.classList.add(this.className), e3;
          }, t3.prototype.attach = function() {
            null != this.parent && (this.scroll = this.parent.scroll);
          }, t3.prototype.clone = function() {
            var t4 = this.domNode.cloneNode(false);
            return r2.create(t4);
          }, t3.prototype.detach = function() {
            null != this.parent && this.parent.removeChild(this), // @ts-ignore
            delete this.domNode[r2.DATA_KEY];
          }, t3.prototype.deleteAt = function(t4, e3) {
            this.isolate(t4, e3).remove();
          }, t3.prototype.formatAt = function(t4, e3, n3, o3) {
            var i2 = this.isolate(t4, e3);
            if (null != r2.query(n3, r2.Scope.BLOT) && o3) i2.wrap(n3, o3);
            else if (null != r2.query(n3, r2.Scope.ATTRIBUTE)) {
              var l2 = r2.create(this.statics.scope);
              i2.wrap(l2), l2.format(n3, o3);
            }
          }, t3.prototype.insertAt = function(t4, e3, n3) {
            var o3 = null == n3 ? r2.create("text", e3) : r2.create(e3, n3), i2 = this.split(t4);
            this.parent.insertBefore(o3, i2);
          }, t3.prototype.insertInto = function(t4, e3) {
            void 0 === e3 && (e3 = null), null != this.parent && this.parent.children.remove(this);
            var n3 = null;
            t4.children.insertBefore(this, e3), null != e3 && (n3 = e3.domNode), this.domNode.parentNode == t4.domNode && this.domNode.nextSibling == n3 || t4.domNode.insertBefore(this.domNode, n3), this.parent = t4, this.attach();
          }, t3.prototype.isolate = function(t4, e3) {
            var n3 = this.split(t4);
            return n3.split(e3), n3;
          }, t3.prototype.length = function() {
            return 1;
          }, t3.prototype.offset = function(t4) {
            return void 0 === t4 && (t4 = this.parent), null == this.parent || this == t4 ? 0 : this.parent.children.offset(this) + this.parent.offset(t4);
          }, t3.prototype.optimize = function(t4) {
            null != this.domNode[r2.DATA_KEY] && // @ts-ignore
            delete this.domNode[r2.DATA_KEY].mutations;
          }, t3.prototype.remove = function() {
            null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach();
          }, t3.prototype.replace = function(t4) {
            null != t4.parent && (t4.parent.insertBefore(this, t4.next), t4.remove());
          }, t3.prototype.replaceWith = function(t4, e3) {
            var n3 = "string" == typeof t4 ? r2.create(t4, e3) : t4;
            return n3.replace(this), n3;
          }, t3.prototype.split = function(t4, e3) {
            return 0 === t4 ? this : this.next;
          }, t3.prototype.update = function(t4, e3) {
          }, t3.prototype.wrap = function(t4, e3) {
            var n3 = "string" == typeof t4 ? r2.create(t4, e3) : t4;
            return null != this.parent && this.parent.insertBefore(n3, this.next), n3.appendChild(this), n3;
          }, t3.blotName = "abstract", t3;
        }()
      );
      e2.default = o2;
    },
    /* 31 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = n2(12), o2 = n2(32), i2 = n2(33), l2 = n2(1), a2 = (
        /** @class */
        function() {
          function t3(t4) {
            this.attributes = {}, this.domNode = t4, this.build();
          }
          return t3.prototype.attribute = function(t4, e3) {
            e3 ? t4.add(this.domNode, e3) && (null != t4.value(this.domNode) ? this.attributes[t4.attrName] = t4 : delete this.attributes[t4.attrName]) : (t4.remove(this.domNode), delete this.attributes[t4.attrName]);
          }, t3.prototype.build = function() {
            var t4 = this;
            this.attributes = {};
            var e3 = r2.default.keys(this.domNode), n3 = o2.default.keys(this.domNode), a3 = i2.default.keys(this.domNode);
            e3.concat(n3).concat(a3).forEach(function(e4) {
              var n4 = l2.query(e4, l2.Scope.ATTRIBUTE);
              n4 instanceof r2.default && (t4.attributes[n4.attrName] = n4);
            });
          }, t3.prototype.copy = function(t4) {
            var e3 = this;
            Object.keys(this.attributes).forEach(function(n3) {
              var r3 = e3.attributes[n3].value(e3.domNode);
              t4.format(n3, r3);
            });
          }, t3.prototype.move = function(t4) {
            var e3 = this;
            this.copy(t4), Object.keys(this.attributes).forEach(function(t5) {
              e3.attributes[t5].remove(e3.domNode);
            }), this.attributes = {};
          }, t3.prototype.values = function() {
            var t4 = this;
            return Object.keys(this.attributes).reduce(function(e3, n3) {
              return e3[n3] = t4.attributes[n3].value(t4.domNode), e3;
            }, {});
          }, t3;
        }()
      );
      e2.default = a2;
    },
    /* 32 */
    /***/
    function(t2, e2, n2) {
      var r2, o2 = this && this.__extends || (r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
        t3.__proto__ = e3;
      } || function(t3, e3) {
        for (var n3 in e3) e3.hasOwnProperty(n3) && (t3[n3] = e3[n3]);
      }, function(t3, e3) {
        function n3() {
          this.constructor = t3;
        }
        r2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      function i2(t3, e3) {
        return (t3.getAttribute("class") || "").split(/\s+/).filter(function(t4) {
          return 0 === t4.indexOf(e3 + "-");
        });
      }
      Object.defineProperty(e2, "__esModule", { value: true });
      var l2 = (
        /** @class */
        function(t3) {
          function e3() {
            return null !== t3 && t3.apply(this, arguments) || this;
          }
          return o2(e3, t3), e3.keys = function(t4) {
            return (t4.getAttribute("class") || "").split(/\s+/).map(function(t5) {
              return t5.split("-").slice(0, -1).join("-");
            });
          }, e3.prototype.add = function(t4, e4) {
            return !!this.canAdd(t4, e4) && (this.remove(t4), t4.classList.add(this.keyName + "-" + e4), true);
          }, e3.prototype.remove = function(t4) {
            i2(t4, this.keyName).forEach(function(e4) {
              t4.classList.remove(e4);
            }), 0 === t4.classList.length && t4.removeAttribute("class");
          }, e3.prototype.value = function(t4) {
            var e4 = (i2(t4, this.keyName)[0] || "").slice(this.keyName.length + 1);
            return this.canAdd(t4, e4) ? e4 : "";
          }, e3;
        }(n2(12).default)
      );
      e2.default = l2;
    },
    /* 33 */
    /***/
    function(t2, e2, n2) {
      var r2, o2 = this && this.__extends || (r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
        t3.__proto__ = e3;
      } || function(t3, e3) {
        for (var n3 in e3) e3.hasOwnProperty(n3) && (t3[n3] = e3[n3]);
      }, function(t3, e3) {
        function n3() {
          this.constructor = t3;
        }
        r2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      function i2(t3) {
        var e3 = t3.split("-"), n3 = e3.slice(1).map(function(t4) {
          return t4[0].toUpperCase() + t4.slice(1);
        }).join("");
        return e3[0] + n3;
      }
      Object.defineProperty(e2, "__esModule", { value: true });
      var l2 = (
        /** @class */
        function(t3) {
          function e3() {
            return null !== t3 && t3.apply(this, arguments) || this;
          }
          return o2(e3, t3), e3.keys = function(t4) {
            return (t4.getAttribute("style") || "").split(";").map(function(t5) {
              return t5.split(":")[0].trim();
            });
          }, e3.prototype.add = function(t4, e4) {
            return !!this.canAdd(t4, e4) && // @ts-ignore
            (t4.style[i2(this.keyName)] = e4, true);
          }, e3.prototype.remove = function(t4) {
            t4.style[i2(this.keyName)] = "", t4.getAttribute("style") || t4.removeAttribute("style");
          }, e3.prototype.value = function(t4) {
            var e4 = t4.style[i2(this.keyName)];
            return this.canAdd(t4, e4) ? e4 : "";
          }, e3;
        }(n2(12).default)
      );
      e2.default = l2;
    },
    /* 34 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), o2 = function() {
        function t3(e3, n3) {
          !function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, t3), this.quill = e3, this.options = n3, this.modules = {};
        }
        return r2(t3, [{ key: "init", value: function() {
          var t4 = this;
          Object.keys(this.options.modules).forEach(function(e3) {
            null == t4.modules[e3] && t4.addModule(e3);
          });
        } }, { key: "addModule", value: function(t4) {
          var e3 = this.quill.constructor.import("modules/" + t4);
          return this.modules[t4] = new e3(this.quill, this.options.modules[t4] || {}), this.modules[t4];
        } }]), t3;
      }();
      o2.DEFAULTS = { modules: {} }, o2.themes = { default: o2 }, e2.default = o2;
    },
    /* 35 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), o2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, i2 = a2(n2(0)), l2 = a2(n2(7));
      function a2(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      var s2 = "\uFEFF", u = function(t3) {
        function e3(t4) {
          !function(t5, e4) {
            if (!(t5 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3);
          var n3 = function(t5, e4) {
            if (!t5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t5 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4));
          return n3.contentNode = document.createElement("span"), n3.contentNode.setAttribute("contenteditable", false), [].slice.call(n3.domNode.childNodes).forEach(function(t5) {
            n3.contentNode.appendChild(t5);
          }), n3.leftGuard = document.createTextNode(s2), n3.rightGuard = document.createTextNode(s2), n3.domNode.appendChild(n3.leftGuard), n3.domNode.appendChild(n3.contentNode), n3.domNode.appendChild(n3.rightGuard), n3;
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), r2(e3, [{ key: "index", value: function(t4, n3) {
          return t4 === this.leftGuard ? 0 : t4 === this.rightGuard ? 1 : o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "index", this).call(this, t4, n3);
        } }, { key: "restore", value: function(t4) {
          var e4 = void 0, n3 = void 0, r3 = t4.data.split(s2).join("");
          if (t4 === this.leftGuard) if (this.prev instanceof l2.default) {
            var o3 = this.prev.length();
            this.prev.insertAt(o3, r3), e4 = { startNode: this.prev.domNode, startOffset: o3 + r3.length };
          } else n3 = document.createTextNode(r3), this.parent.insertBefore(i2.default.create(n3), this), e4 = { startNode: n3, startOffset: r3.length };
          else t4 === this.rightGuard && (this.next instanceof l2.default ? (this.next.insertAt(0, r3), e4 = { startNode: this.next.domNode, startOffset: r3.length }) : (n3 = document.createTextNode(r3), this.parent.insertBefore(i2.default.create(n3), this.next), e4 = { startNode: n3, startOffset: r3.length }));
          return t4.data = s2, e4;
        } }, { key: "update", value: function(t4, e4) {
          var n3 = this;
          t4.forEach(function(t5) {
            if ("characterData" === t5.type && (t5.target === n3.leftGuard || t5.target === n3.rightGuard)) {
              var r3 = n3.restore(t5.target);
              r3 && (e4.range = r3);
            }
          });
        } }]), e3;
      }(i2.default.Embed);
      e2.default = u;
    },
    /* 36 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.AlignStyle = e2.AlignClass = e2.AlignAttribute = void 0;
      var r2, o2 = n2(0), i2 = (r2 = o2) && r2.__esModule ? r2 : { default: r2 }, l2 = { scope: i2.default.Scope.BLOCK, whitelist: ["right", "center", "justify"] }, a2 = new i2.default.Attributor.Attribute("align", "align", l2), s2 = new i2.default.Attributor.Class("align", "ql-align", l2), u = new i2.default.Attributor.Style("align", "text-align", l2);
      e2.AlignAttribute = a2, e2.AlignClass = s2, e2.AlignStyle = u;
    },
    /* 37 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.BackgroundStyle = e2.BackgroundClass = void 0;
      var r2, o2 = n2(0), i2 = (r2 = o2) && r2.__esModule ? r2 : { default: r2 }, l2 = n2(26), a2 = new i2.default.Attributor.Class("background", "ql-bg", { scope: i2.default.Scope.INLINE }), s2 = new l2.ColorAttributor("background", "background-color", { scope: i2.default.Scope.INLINE });
      e2.BackgroundClass = a2, e2.BackgroundStyle = s2;
    },
    /* 38 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.DirectionStyle = e2.DirectionClass = e2.DirectionAttribute = void 0;
      var r2, o2 = n2(0), i2 = (r2 = o2) && r2.__esModule ? r2 : { default: r2 }, l2 = { scope: i2.default.Scope.BLOCK, whitelist: ["rtl"] }, a2 = new i2.default.Attributor.Attribute("direction", "dir", l2), s2 = new i2.default.Attributor.Class("direction", "ql-direction", l2), u = new i2.default.Attributor.Style("direction", "direction", l2);
      e2.DirectionAttribute = a2, e2.DirectionClass = s2, e2.DirectionStyle = u;
    },
    /* 39 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.FontClass = e2.FontStyle = void 0;
      var r2, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, l2 = n2(0), a2 = (r2 = l2) && r2.__esModule ? r2 : { default: r2 }, s2 = { scope: a2.default.Scope.INLINE, whitelist: ["serif", "monospace"] }, u = new a2.default.Attributor.Class("font", "ql-font", s2), c = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), o2(e3, [{ key: "value", value: function(t4) {
          return i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "value", this).call(this, t4).replace(/["']/g, "");
        } }]), e3;
      }(a2.default.Attributor.Style), f = new c("font", "font-family", s2);
      e2.FontStyle = f, e2.FontClass = u;
    },
    /* 40 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.SizeStyle = e2.SizeClass = void 0;
      var r2, o2 = n2(0), i2 = (r2 = o2) && r2.__esModule ? r2 : { default: r2 }, l2 = new i2.default.Attributor.Class("size", "ql-size", { scope: i2.default.Scope.INLINE, whitelist: ["small", "large", "huge"] }), a2 = new i2.default.Attributor.Style("size", "font-size", { scope: i2.default.Scope.INLINE, whitelist: ["10px", "18px", "32px"] });
      e2.SizeClass = l2, e2.SizeStyle = a2;
    },
    /* 41 */
    /***/
    function(t2, e2, n2) {
      t2.exports = { align: { "": n2(76), center: n2(77), right: n2(78), justify: n2(79) }, background: n2(80), blockquote: n2(81), bold: n2(82), clean: n2(83), code: n2(58), "code-block": n2(58), color: n2(84), direction: { "": n2(85), rtl: n2(86) }, float: { center: n2(87), full: n2(88), left: n2(89), right: n2(90) }, formula: n2(91), header: { 1: n2(92), 2: n2(93) }, italic: n2(94), image: n2(95), indent: { "+1": n2(96), "-1": n2(97) }, link: n2(98), list: { ordered: n2(99), bullet: n2(100), check: n2(101) }, script: { sub: n2(102), super: n2(103) }, strike: n2(104), underline: n2(105), video: n2(106) };
    },
    /* 42 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.getLastChangeIndex = e2.default = void 0;
      var r2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), o2 = l2(n2(0)), i2 = l2(n2(5));
      function l2(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      var a2 = function(t3) {
        function e3(t4, n3) {
          !function(t5, e4) {
            if (!(t5 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3);
          var r3 = function(t5, e4) {
            if (!t5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t5 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4, n3));
          return r3.lastRecorded = 0, r3.ignoreChange = false, r3.clear(), r3.quill.on(i2.default.events.EDITOR_CHANGE, function(t5, e4, n4, o3) {
            t5 !== i2.default.events.TEXT_CHANGE || r3.ignoreChange || (r3.options.userOnly && o3 !== i2.default.sources.USER ? r3.transform(e4) : r3.record(e4, n4));
          }), r3.quill.keyboard.addBinding({ key: "Z", shortKey: true }, r3.undo.bind(r3)), r3.quill.keyboard.addBinding({ key: "Z", shortKey: true, shiftKey: true }, r3.redo.bind(r3)), /Win/i.test(navigator.platform) && r3.quill.keyboard.addBinding({ key: "Y", shortKey: true }, r3.redo.bind(r3)), r3;
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), r2(e3, [{ key: "change", value: function(t4, e4) {
          if (0 !== this.stack[t4].length) {
            var n3 = this.stack[t4].pop();
            this.stack[e4].push(n3), this.lastRecorded = 0, this.ignoreChange = true, this.quill.updateContents(n3[t4], i2.default.sources.USER), this.ignoreChange = false;
            var r3 = s2(n3[t4]);
            this.quill.setSelection(r3);
          }
        } }, { key: "clear", value: function() {
          this.stack = { undo: [], redo: [] };
        } }, { key: "cutoff", value: function() {
          this.lastRecorded = 0;
        } }, { key: "record", value: function(t4, e4) {
          if (0 !== t4.ops.length) {
            this.stack.redo = [];
            var n3 = this.quill.getContents().diff(e4), r3 = Date.now();
            if (this.lastRecorded + this.options.delay > r3 && this.stack.undo.length > 0) {
              var o3 = this.stack.undo.pop();
              n3 = n3.compose(o3.undo), t4 = o3.redo.compose(t4);
            } else this.lastRecorded = r3;
            this.stack.undo.push({ redo: t4, undo: n3 }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift();
          }
        } }, { key: "redo", value: function() {
          this.change("redo", "undo");
        } }, { key: "transform", value: function(t4) {
          this.stack.undo.forEach(function(e4) {
            e4.undo = t4.transform(e4.undo, true), e4.redo = t4.transform(e4.redo, true);
          }), this.stack.redo.forEach(function(e4) {
            e4.undo = t4.transform(e4.undo, true), e4.redo = t4.transform(e4.redo, true);
          });
        } }, { key: "undo", value: function() {
          this.change("undo", "redo");
        } }]), e3;
      }(l2(n2(9)).default);
      function s2(t3) {
        var e3 = t3.reduce(function(t4, e4) {
          return t4 += e4.delete || 0;
        }, 0), n3 = t3.length() - e3;
        return function(t4) {
          var e4 = t4.ops[t4.ops.length - 1];
          return null != e4 && (null != e4.insert ? "string" == typeof e4.insert && e4.insert.endsWith("\n") : null != e4.attributes && Object.keys(e4.attributes).some(function(t5) {
            return null != o2.default.query(t5, o2.default.Scope.BLOCK);
          }));
        }(t3) && (n3 -= 1), n3;
      }
      a2.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: false }, e2.default = a2, e2.getLastChangeIndex = s2;
    },
    /* 43 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.default = e2.BaseTooltip = void 0;
      var r2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), o2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, i2 = p(n2(3)), l2 = p(n2(2)), a2 = p(n2(8)), s2 = p(n2(23)), u = p(n2(34)), c = p(n2(59)), f = p(n2(60)), h = p(n2(28)), d = p(n2(61));
      function p(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      function y(t3, e3) {
        if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
      }
      function v(t3, e3) {
        if (!t3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e3 || "object" != typeof e3 && "function" != typeof e3 ? t3 : e3;
      }
      function b(t3, e3) {
        if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function, not " + typeof e3);
        t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (Object.setPrototypeOf ? Object.setPrototypeOf(t3, e3) : t3.__proto__ = e3);
      }
      var g = [false, "center", "right", "justify"], m = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"], _ = [false, "serif", "monospace"], O = ["1", "2", "3", false], w = ["small", false, "large", "huge"], x = function(t3) {
        function e3(t4, n3) {
          y(this, e3);
          var r3 = v(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4, n3));
          return t4.emitter.listenDOM("click", document.body, function e4(n4) {
            if (!document.body.contains(t4.root)) return document.body.removeEventListener("click", e4);
            null == r3.tooltip || r3.tooltip.root.contains(n4.target) || document.activeElement === r3.tooltip.textbox || r3.quill.hasFocus() || r3.tooltip.hide(), null != r3.pickers && r3.pickers.forEach(function(t5) {
              t5.container.contains(n4.target) || t5.close();
            });
          }), r3;
        }
        return b(e3, t3), r2(e3, [{ key: "addModule", value: function(t4) {
          var n3 = o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "addModule", this).call(this, t4);
          return "toolbar" === t4 && this.extendToolbar(n3), n3;
        } }, { key: "buildButtons", value: function(t4, e4) {
          t4.forEach(function(t5) {
            (t5.getAttribute("class") || "").split(/\s+/).forEach(function(n3) {
              if (n3.startsWith("ql-") && (n3 = n3.slice(3), null != e4[n3])) if ("direction" === n3) t5.innerHTML = e4[n3][""] + e4[n3].rtl;
              else if ("string" == typeof e4[n3]) t5.innerHTML = e4[n3];
              else {
                var r3 = t5.value || "";
                null != r3 && e4[n3][r3] && (t5.innerHTML = e4[n3][r3]);
              }
            });
          });
        } }, { key: "buildPickers", value: function(t4, e4) {
          var n3 = this;
          this.pickers = t4.map(function(t5) {
            if (t5.classList.contains("ql-align")) return null == t5.querySelector("option") && E(t5, g), new f.default(t5, e4.align);
            if (t5.classList.contains("ql-background") || t5.classList.contains("ql-color")) {
              var n4 = t5.classList.contains("ql-background") ? "background" : "color";
              return null == t5.querySelector("option") && E(t5, m, "background" === n4 ? "#ffffff" : "#000000"), new c.default(t5, e4[n4]);
            }
            return null == t5.querySelector("option") && (t5.classList.contains("ql-font") ? E(t5, _) : t5.classList.contains("ql-header") ? E(t5, O) : t5.classList.contains("ql-size") && E(t5, w)), new h.default(t5);
          }), this.quill.on(a2.default.events.EDITOR_CHANGE, function() {
            n3.pickers.forEach(function(t5) {
              t5.update();
            });
          });
        } }]), e3;
      }(u.default);
      x.DEFAULTS = (0, i2.default)(true, {}, u.default.DEFAULTS, { modules: { toolbar: { handlers: { formula: function() {
        this.quill.theme.tooltip.edit("formula");
      }, image: function() {
        var t3 = this, e3 = this.container.querySelector("input.ql-image[type=file]");
        null == e3 && ((e3 = document.createElement("input")).setAttribute("type", "file"), e3.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"), e3.classList.add("ql-image"), e3.addEventListener("change", function() {
          if (null != e3.files && null != e3.files[0]) {
            var n3 = new FileReader();
            n3.onload = function(n4) {
              var r3 = t3.quill.getSelection(true);
              t3.quill.updateContents(new l2.default().retain(r3.index).delete(r3.length).insert({ image: n4.target.result }), a2.default.sources.USER), t3.quill.setSelection(r3.index + 1, a2.default.sources.SILENT), e3.value = "";
            }, n3.readAsDataURL(e3.files[0]);
          }
        }), this.container.appendChild(e3)), e3.click();
      }, video: function() {
        this.quill.theme.tooltip.edit("video");
      } } } } });
      var k = function(t3) {
        function e3(t4, n3) {
          y(this, e3);
          var r3 = v(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4, n3));
          return r3.textbox = r3.root.querySelector('input[type="text"]'), r3.listen(), r3;
        }
        return b(e3, t3), r2(e3, [{ key: "listen", value: function() {
          var t4 = this;
          this.textbox.addEventListener("keydown", function(e4) {
            s2.default.match(e4, "enter") ? (t4.save(), e4.preventDefault()) : s2.default.match(e4, "escape") && (t4.cancel(), e4.preventDefault());
          });
        } }, { key: "cancel", value: function() {
          this.hide();
        } }, { key: "edit", value: function() {
          var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "link", e4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null != e4 ? this.textbox.value = e4 : t4 !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + t4) || ""), this.root.setAttribute("data-mode", t4);
        } }, { key: "restoreFocus", value: function() {
          var t4 = this.quill.scrollingContainer.scrollTop;
          this.quill.focus(), this.quill.scrollingContainer.scrollTop = t4;
        } }, { key: "save", value: function() {
          var t4, e4, n3 = this.textbox.value;
          switch (this.root.getAttribute("data-mode")) {
            case "link":
              var r3 = this.quill.root.scrollTop;
              this.linkRange ? (this.quill.formatText(this.linkRange, "link", n3, a2.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", n3, a2.default.sources.USER)), this.quill.root.scrollTop = r3;
              break;
            case "video":
              n3 = (e4 = (t4 = n3).match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || t4.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/)) ? (e4[1] || "https") + "://www.youtube.com/embed/" + e4[2] + "?showinfo=0" : (e4 = t4.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (e4[1] || "https") + "://player.vimeo.com/video/" + e4[2] + "/" : t4;
            // eslint-disable-next-line no-fallthrough
            case "formula":
              if (!n3) break;
              var o3 = this.quill.getSelection(true);
              if (null != o3) {
                var i3 = o3.index + o3.length;
                this.quill.insertEmbed(i3, this.root.getAttribute("data-mode"), n3, a2.default.sources.USER), "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(i3 + 1, " ", a2.default.sources.USER), this.quill.setSelection(i3 + 2, a2.default.sources.USER);
              }
          }
          this.textbox.value = "", this.hide();
        } }]), e3;
      }(d.default);
      function E(t3, e3) {
        var n3 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        e3.forEach(function(e4) {
          var r3 = document.createElement("option");
          e4 === n3 ? r3.setAttribute("selected", "selected") : r3.setAttribute("value", e4), t3.appendChild(r3);
        });
      }
      e2.BaseTooltip = k, e2.default = x;
    },
    /* 44 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = (
        /** @class */
        function() {
          function t3() {
            this.head = this.tail = null, this.length = 0;
          }
          return t3.prototype.append = function() {
            for (var t4 = [], e3 = 0; e3 < arguments.length; e3++) t4[e3] = arguments[e3];
            this.insertBefore(t4[0], null), t4.length > 1 && this.append.apply(this, t4.slice(1));
          }, t3.prototype.contains = function(t4) {
            for (var e3, n3 = this.iterator(); e3 = n3(); ) if (e3 === t4) return true;
            return false;
          }, t3.prototype.insertBefore = function(t4, e3) {
            t4 && (t4.next = e3, null != e3 ? (t4.prev = e3.prev, null != e3.prev && (e3.prev.next = t4), e3.prev = t4, e3 === this.head && (this.head = t4)) : null != this.tail ? (this.tail.next = t4, t4.prev = this.tail, this.tail = t4) : (t4.prev = null, this.head = this.tail = t4), this.length += 1);
          }, t3.prototype.offset = function(t4) {
            for (var e3 = 0, n3 = this.head; null != n3; ) {
              if (n3 === t4) return e3;
              e3 += n3.length(), n3 = n3.next;
            }
            return -1;
          }, t3.prototype.remove = function(t4) {
            this.contains(t4) && (null != t4.prev && (t4.prev.next = t4.next), null != t4.next && (t4.next.prev = t4.prev), t4 === this.head && (this.head = t4.next), t4 === this.tail && (this.tail = t4.prev), this.length -= 1);
          }, t3.prototype.iterator = function(t4) {
            return void 0 === t4 && (t4 = this.head), function() {
              var e3 = t4;
              return null != t4 && (t4 = t4.next), e3;
            };
          }, t3.prototype.find = function(t4, e3) {
            void 0 === e3 && (e3 = false);
            for (var n3, r3 = this.iterator(); n3 = r3(); ) {
              var o2 = n3.length();
              if (t4 < o2 || e3 && t4 === o2 && (null == n3.next || 0 !== n3.next.length())) return [n3, t4];
              t4 -= o2;
            }
            return [null, 0];
          }, t3.prototype.forEach = function(t4) {
            for (var e3, n3 = this.iterator(); e3 = n3(); ) t4(e3);
          }, t3.prototype.forEachAt = function(t4, e3, n3) {
            if (!(e3 <= 0)) for (var r3, o2 = this.find(t4), i2 = o2[0], l2 = t4 - o2[1], a2 = this.iterator(i2); (r3 = a2()) && l2 < t4 + e3; ) {
              var s2 = r3.length();
              t4 > l2 ? n3(r3, t4 - l2, Math.min(e3, l2 + s2 - t4)) : n3(r3, 0, Math.min(s2, t4 + e3 - l2)), l2 += s2;
            }
          }, t3.prototype.map = function(t4) {
            return this.reduce(function(e3, n3) {
              return e3.push(t4(n3)), e3;
            }, []);
          }, t3.prototype.reduce = function(t4, e3) {
            for (var n3, r3 = this.iterator(); n3 = r3(); ) e3 = t4(e3, n3);
            return e3;
          }, t3;
        }()
      );
      e2.default = r2;
    },
    /* 45 */
    /***/
    function(t2, e2, n2) {
      var r2, o2 = this && this.__extends || (r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
        t3.__proto__ = e3;
      } || function(t3, e3) {
        for (var n3 in e3) e3.hasOwnProperty(n3) && (t3[n3] = e3[n3]);
      }, function(t3, e3) {
        function n3() {
          this.constructor = t3;
        }
        r2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i2 = n2(17), l2 = n2(1), a2 = { attributes: true, characterData: true, characterDataOldValue: true, childList: true, subtree: true }, s2 = (
        /** @class */
        function(t3) {
          function e3(e4) {
            var n3 = t3.call(this, e4) || this;
            return n3.scroll = n3, n3.observer = new MutationObserver(function(t4) {
              n3.update(t4);
            }), n3.observer.observe(n3.domNode, a2), n3.attach(), n3;
          }
          return o2(e3, t3), e3.prototype.detach = function() {
            t3.prototype.detach.call(this), this.observer.disconnect();
          }, e3.prototype.deleteAt = function(e4, n3) {
            this.update(), 0 === e4 && n3 === this.length() ? this.children.forEach(function(t4) {
              t4.remove();
            }) : t3.prototype.deleteAt.call(this, e4, n3);
          }, e3.prototype.formatAt = function(e4, n3, r3, o3) {
            this.update(), t3.prototype.formatAt.call(this, e4, n3, r3, o3);
          }, e3.prototype.insertAt = function(e4, n3, r3) {
            this.update(), t3.prototype.insertAt.call(this, e4, n3, r3);
          }, e3.prototype.optimize = function(e4, n3) {
            var r3 = this;
            void 0 === e4 && (e4 = []), void 0 === n3 && (n3 = {}), t3.prototype.optimize.call(this, n3);
            for (var o3 = [].slice.call(this.observer.takeRecords()); o3.length > 0; ) e4.push(o3.pop());
            for (var a3 = function(t4, e5) {
              void 0 === e5 && (e5 = true), null != t4 && t4 !== r3 && null != t4.domNode.parentNode && // @ts-ignore
              (null == t4.domNode[l2.DATA_KEY].mutations && // @ts-ignore
              (t4.domNode[l2.DATA_KEY].mutations = []), e5 && a3(t4.parent));
            }, s3 = function(t4) {
              null != t4.domNode[l2.DATA_KEY] && // @ts-ignore
              null != t4.domNode[l2.DATA_KEY].mutations && (t4 instanceof i2.default && t4.children.forEach(s3), t4.optimize(n3));
            }, u = e4, c = 0; u.length > 0; c += 1) {
              if (c >= 100) throw new Error("[Parchment] Maximum optimize iterations reached");
              for (u.forEach(function(t4) {
                var e5 = l2.find(t4.target, true);
                null != e5 && (e5.domNode === t4.target && ("childList" === t4.type ? (a3(l2.find(t4.previousSibling, false)), [].forEach.call(t4.addedNodes, function(t5) {
                  var e6 = l2.find(t5, false);
                  a3(e6, false), e6 instanceof i2.default && e6.children.forEach(function(t6) {
                    a3(t6, false);
                  });
                })) : "attributes" === t4.type && a3(e5.prev)), a3(e5));
              }), this.children.forEach(s3), o3 = (u = [].slice.call(this.observer.takeRecords())).slice(); o3.length > 0; ) e4.push(o3.pop());
            }
          }, e3.prototype.update = function(e4, n3) {
            var r3 = this;
            void 0 === n3 && (n3 = {}), // TODO use WeakMap
            (e4 = e4 || this.observer.takeRecords()).map(function(t4) {
              var e5 = l2.find(t4.target, true);
              return null == e5 ? null : (
                // @ts-ignore
                null == e5.domNode[l2.DATA_KEY].mutations ? (
                  // @ts-ignore
                  (e5.domNode[l2.DATA_KEY].mutations = [t4], e5)
                ) : (
                  // @ts-ignore
                  (e5.domNode[l2.DATA_KEY].mutations.push(t4), null)
                )
              );
            }).forEach(function(t4) {
              null != t4 && t4 !== r3 && //@ts-ignore
              null != t4.domNode[l2.DATA_KEY] && // @ts-ignore
              t4.update(t4.domNode[l2.DATA_KEY].mutations || [], n3);
            }), // @ts-ignore
            null != this.domNode[l2.DATA_KEY].mutations && // @ts-ignore
            t3.prototype.update.call(this, this.domNode[l2.DATA_KEY].mutations, n3), this.optimize(e4, n3);
          }, e3.blotName = "scroll", e3.defaultChild = "block", e3.scope = l2.Scope.BLOCK_BLOT, e3.tagName = "DIV", e3;
        }(i2.default)
      );
      e2.default = s2;
    },
    /* 46 */
    /***/
    function(t2, e2, n2) {
      var r2, o2 = this && this.__extends || (r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
        t3.__proto__ = e3;
      } || function(t3, e3) {
        for (var n3 in e3) e3.hasOwnProperty(n3) && (t3[n3] = e3[n3]);
      }, function(t3, e3) {
        function n3() {
          this.constructor = t3;
        }
        r2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i2 = n2(18), l2 = n2(1), a2 = (
        /** @class */
        function(t3) {
          function e3() {
            return null !== t3 && t3.apply(this, arguments) || this;
          }
          return o2(e3, t3), e3.formats = function(n3) {
            if (n3.tagName !== e3.tagName) return t3.formats.call(this, n3);
          }, e3.prototype.format = function(n3, r3) {
            var o3 = this;
            n3 !== this.statics.blotName || r3 ? t3.prototype.format.call(this, n3, r3) : (this.children.forEach(function(t4) {
              t4 instanceof i2.default || (t4 = t4.wrap(e3.blotName, true)), o3.attributes.copy(t4);
            }), this.unwrap());
          }, e3.prototype.formatAt = function(e4, n3, r3, o3) {
            null != this.formats()[r3] || l2.query(r3, l2.Scope.ATTRIBUTE) ? this.isolate(e4, n3).format(r3, o3) : t3.prototype.formatAt.call(this, e4, n3, r3, o3);
          }, e3.prototype.optimize = function(n3) {
            t3.prototype.optimize.call(this, n3);
            var r3 = this.formats();
            if (0 === Object.keys(r3).length) return this.unwrap();
            var o3 = this.next;
            o3 instanceof e3 && o3.prev === this && // Shallow object comparison
            function(t4, e4) {
              if (Object.keys(t4).length !== Object.keys(e4).length) return false;
              for (var n4 in t4)
                if (t4[n4] !== e4[n4]) return false;
              return true;
            }(r3, o3.formats()) && (o3.moveChildren(this), o3.remove());
          }, e3.blotName = "inline", e3.scope = l2.Scope.INLINE_BLOT, e3.tagName = "SPAN", e3;
        }(i2.default)
      );
      e2.default = a2;
    },
    /* 47 */
    /***/
    function(t2, e2, n2) {
      var r2, o2 = this && this.__extends || (r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
        t3.__proto__ = e3;
      } || function(t3, e3) {
        for (var n3 in e3) e3.hasOwnProperty(n3) && (t3[n3] = e3[n3]);
      }, function(t3, e3) {
        function n3() {
          this.constructor = t3;
        }
        r2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i2 = n2(18), l2 = n2(1), a2 = (
        /** @class */
        function(t3) {
          function e3() {
            return null !== t3 && t3.apply(this, arguments) || this;
          }
          return o2(e3, t3), e3.formats = function(n3) {
            var r3 = l2.query(e3.blotName).tagName;
            if (n3.tagName !== r3) return t3.formats.call(this, n3);
          }, e3.prototype.format = function(n3, r3) {
            null != l2.query(n3, l2.Scope.BLOCK) && (n3 !== this.statics.blotName || r3 ? t3.prototype.format.call(this, n3, r3) : this.replaceWith(e3.blotName));
          }, e3.prototype.formatAt = function(e4, n3, r3, o3) {
            null != l2.query(r3, l2.Scope.BLOCK) ? this.format(r3, o3) : t3.prototype.formatAt.call(this, e4, n3, r3, o3);
          }, e3.prototype.insertAt = function(e4, n3, r3) {
            if (null == r3 || null != l2.query(n3, l2.Scope.INLINE))
              t3.prototype.insertAt.call(this, e4, n3, r3);
            else {
              var o3 = this.split(e4), i3 = l2.create(n3, r3);
              o3.parent.insertBefore(i3, o3);
            }
          }, e3.prototype.update = function(e4, n3) {
            navigator.userAgent.match(/Trident/) ? this.build() : t3.prototype.update.call(this, e4, n3);
          }, e3.blotName = "block", e3.scope = l2.Scope.BLOCK_BLOT, e3.tagName = "P", e3;
        }(i2.default)
      );
      e2.default = a2;
    },
    /* 48 */
    /***/
    function(t2, e2, n2) {
      var r2, o2 = this && this.__extends || (r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
        t3.__proto__ = e3;
      } || function(t3, e3) {
        for (var n3 in e3) e3.hasOwnProperty(n3) && (t3[n3] = e3[n3]);
      }, function(t3, e3) {
        function n3() {
          this.constructor = t3;
        }
        r2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i2 = (
        /** @class */
        function(t3) {
          function e3() {
            return null !== t3 && t3.apply(this, arguments) || this;
          }
          return o2(e3, t3), e3.formats = function(t4) {
          }, e3.prototype.format = function(e4, n3) {
            t3.prototype.formatAt.call(this, 0, this.length(), e4, n3);
          }, e3.prototype.formatAt = function(e4, n3, r3, o3) {
            0 === e4 && n3 === this.length() ? this.format(r3, o3) : t3.prototype.formatAt.call(this, e4, n3, r3, o3);
          }, e3.prototype.formats = function() {
            return this.statics.formats(this.domNode);
          }, e3;
        }(n2(19).default)
      );
      e2.default = i2;
    },
    /* 49 */
    /***/
    function(t2, e2, n2) {
      var r2, o2 = this && this.__extends || (r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
        t3.__proto__ = e3;
      } || function(t3, e3) {
        for (var n3 in e3) e3.hasOwnProperty(n3) && (t3[n3] = e3[n3]);
      }, function(t3, e3) {
        function n3() {
          this.constructor = t3;
        }
        r2(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n3.prototype = e3.prototype, new n3());
      });
      Object.defineProperty(e2, "__esModule", { value: true });
      var i2 = n2(19), l2 = n2(1), a2 = (
        /** @class */
        function(t3) {
          function e3(e4) {
            var n3 = t3.call(this, e4) || this;
            return n3.text = n3.statics.value(n3.domNode), n3;
          }
          return o2(e3, t3), e3.create = function(t4) {
            return document.createTextNode(t4);
          }, e3.value = function(t4) {
            var e4 = t4.data;
            return e4.normalize && (e4 = e4.normalize()), e4;
          }, e3.prototype.deleteAt = function(t4, e4) {
            this.domNode.data = this.text = this.text.slice(0, t4) + this.text.slice(t4 + e4);
          }, e3.prototype.index = function(t4, e4) {
            return this.domNode === t4 ? e4 : -1;
          }, e3.prototype.insertAt = function(e4, n3, r3) {
            null == r3 ? (this.text = this.text.slice(0, e4) + n3 + this.text.slice(e4), this.domNode.data = this.text) : t3.prototype.insertAt.call(this, e4, n3, r3);
          }, e3.prototype.length = function() {
            return this.text.length;
          }, e3.prototype.optimize = function(n3) {
            t3.prototype.optimize.call(this, n3), this.text = this.statics.value(this.domNode), 0 === this.text.length ? this.remove() : this.next instanceof e3 && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
          }, e3.prototype.position = function(t4, e4) {
            return [this.domNode, t4];
          }, e3.prototype.split = function(t4, e4) {
            if (void 0 === e4 && (e4 = false), !e4) {
              if (0 === t4) return this;
              if (t4 === this.length()) return this.next;
            }
            var n3 = l2.create(this.domNode.splitText(t4));
            return this.parent.insertBefore(n3, this.next), this.text = this.statics.value(this.domNode), n3;
          }, e3.prototype.update = function(t4, e4) {
            var n3 = this;
            t4.some(function(t5) {
              return "characterData" === t5.type && t5.target === n3.domNode;
            }) && (this.text = this.statics.value(this.domNode));
          }, e3.prototype.value = function() {
            return this.text;
          }, e3.blotName = "text", e3.scope = l2.Scope.INLINE_BLOT, e3;
        }(i2.default)
      );
      e2.default = a2;
    },
    /* 50 */
    /***/
    function(t2, e2, n2) {
      var r2 = document.createElement("div");
      if (r2.classList.toggle("test-class", false), r2.classList.contains("test-class")) {
        var o2 = DOMTokenList.prototype.toggle;
        DOMTokenList.prototype.toggle = function(t3, e3) {
          return arguments.length > 1 && !this.contains(t3) == !e3 ? e3 : o2.call(this, t3);
        };
      }
      String.prototype.startsWith || (String.prototype.startsWith = function(t3, e3) {
        return e3 = e3 || 0, this.substr(e3, t3.length) === t3;
      }), String.prototype.endsWith || (String.prototype.endsWith = function(t3, e3) {
        var n3 = this.toString();
        ("number" != typeof e3 || !isFinite(e3) || Math.floor(e3) !== e3 || e3 > n3.length) && (e3 = n3.length), e3 -= t3.length;
        var r3 = n3.indexOf(t3, e3);
        return -1 !== r3 && r3 === e3;
      }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function(t3) {
        if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
        if ("function" != typeof t3) throw new TypeError("predicate must be a function");
        for (var e3, n3 = Object(this), r3 = n3.length >>> 0, o3 = arguments[1], i2 = 0; i2 < r3; i2++) if (e3 = n3[i2], t3.call(o3, e3, i2, n3)) return e3;
      } }), document.addEventListener("DOMContentLoaded", function() {
        document.execCommand("enableObjectResizing", false, false), // Disable automatic linkifying in IE11
        document.execCommand("autoUrlDetect", false, false);
      });
    },
    /* 51 */
    /***/
    function(t2, e2) {
      var n2 = -1;
      function r2(t3, e3, s3) {
        if (t3 == e3) return t3 ? [[0, t3]] : [];
        (s3 < 0 || t3.length < s3) && (s3 = null);
        var c = i2(t3, e3), f = t3.substring(0, c);
        c = l2(t3 = t3.substring(c), e3 = e3.substring(c));
        var h = t3.substring(t3.length - c), d = (
          /**
          		 * Find the differences between two texts.  Assumes that the texts do not
          		 * have any common prefix or suffix.
          		 * @param {string} text1 Old string to be diffed.
          		 * @param {string} text2 New string to be diffed.
          		 * @return {Array} Array of diff tuples.
          		 */
          function(t4, e4) {
            var a3;
            if (!t4)
              return [[1, e4]];
            if (!e4)
              return [[n2, t4]];
            var s4 = t4.length > e4.length ? t4 : e4, u2 = t4.length > e4.length ? e4 : t4, c2 = s4.indexOf(u2);
            if (-1 != c2)
              return a3 = [[1, s4.substring(0, c2)], [0, u2], [1, s4.substring(c2 + u2.length)]], // Swap insertions for deletions if diff is reversed.
              t4.length > e4.length && (a3[0][0] = a3[2][0] = n2), a3;
            if (1 == u2.length)
              return [[n2, t4], [1, e4]];
            var f2 = (
              /**
              		 * Do the two texts share a substring which is at least half the length of the
              		 * longer text?
              		 * This speedup can produce non-minimal diffs.
              		 * @param {string} text1 First string.
              		 * @param {string} text2 Second string.
              		 * @return {Array.<string>} Five element Array, containing the prefix of
              		 *     text1, the suffix of text1, the prefix of text2, the suffix of
              		 *     text2 and the common middle.  Or null if there was no match.
              		 */
              function(t5, e5) {
                var n3 = t5.length > e5.length ? t5 : e5, r3 = t5.length > e5.length ? e5 : t5;
                if (n3.length < 4 || 2 * r3.length < n3.length) return null;
                function o3(t6, e6, n4) {
                  for (var r4, o4, a5, s6, u4 = t6.substring(n4, n4 + Math.floor(t6.length / 4)), c4 = -1, f4 = ""; -1 != (c4 = e6.indexOf(u4, c4 + 1)); ) {
                    var h4 = i2(t6.substring(n4), e6.substring(c4)), d4 = l2(t6.substring(0, n4), e6.substring(0, c4));
                    f4.length < d4 + h4 && (f4 = e6.substring(c4 - d4, c4) + e6.substring(c4, c4 + h4), r4 = t6.substring(0, n4 - d4), o4 = t6.substring(n4 + h4), a5 = e6.substring(0, c4 - d4), s6 = e6.substring(c4 + h4));
                  }
                  return 2 * f4.length >= t6.length ? [r4, o4, a5, s6, f4] : null;
                }
                var a4, s5, u3, c3, f3, h3 = o3(n3, r3, Math.ceil(n3.length / 4)), d3 = o3(n3, r3, Math.ceil(n3.length / 2));
                if (!h3 && !d3) return null;
                a4 = d3 ? h3 && h3[4].length > d3[4].length ? h3 : d3 : h3, t5.length > e5.length ? (s5 = a4[0], u3 = a4[1], c3 = a4[2], f3 = a4[3]) : (c3 = a4[0], f3 = a4[1], s5 = a4[2], u3 = a4[3]);
                var p2 = a4[4];
                return [s5, u3, c3, f3, p2];
              }(t4, e4)
            );
            if (f2) {
              var h2 = f2[0], d2 = f2[1], p = f2[2], y = f2[3], v = f2[4], b = r2(h2, p), g = r2(d2, y);
              return b.concat([[0, v]], g);
            }
            return function(t5, e5) {
              for (var r3 = t5.length, i3 = e5.length, l3 = Math.ceil((r3 + i3) / 2), a4 = l3, s5 = 2 * l3, u3 = new Array(s5), c3 = new Array(s5), f3 = 0; f3 < s5; f3++) u3[f3] = -1, c3[f3] = -1;
              u3[a4 + 1] = 0, c3[a4 + 1] = 0;
              for (var h3 = r3 - i3, d3 = h3 % 2 != 0, p2 = 0, y2 = 0, v2 = 0, b2 = 0, g2 = 0; g2 < l3; g2++) {
                for (var m = -g2 + p2; m <= g2 - y2; m += 2) {
                  for (var _ = a4 + m, O = (N = m == -g2 || m != g2 && u3[_ - 1] < u3[_ + 1] ? u3[_ + 1] : u3[_ - 1] + 1) - m; N < r3 && O < i3 && t5.charAt(N) == e5.charAt(O); ) N++, O++;
                  if (u3[_] = N, N > r3)
                    y2 += 2;
                  else if (O > i3)
                    p2 += 2;
                  else if (d3 && (k = a4 + h3 - m) >= 0 && k < s5 && -1 != c3[k] && N >= (x = r3 - c3[k]))
                    return o2(t5, e5, N, O);
                }
                for (var w = -g2 + v2; w <= g2 - b2; w += 2) {
                  for (var x, k = a4 + w, E = (x = w == -g2 || w != g2 && c3[k - 1] < c3[k + 1] ? c3[k + 1] : c3[k - 1] + 1) - w; x < r3 && E < i3 && t5.charAt(r3 - x - 1) == e5.charAt(i3 - E - 1); ) x++, E++;
                  if (c3[k] = x, x > r3)
                    b2 += 2;
                  else if (E > i3)
                    v2 += 2;
                  else if (!d3) {
                    var N;
                    if ((_ = a4 + h3 - w) >= 0 && _ < s5 && -1 != u3[_] && (O = a4 + (N = u3[_]) - _, N >= // Mirror x2 onto top-left coordinate system.
                    (x = r3 - x)))
                      return o2(t5, e5, N, O);
                  }
                }
              }
              return [[n2, t5], [1, e5]];
            }(t4, e4);
          }(t3 = t3.substring(0, t3.length - c), e3 = e3.substring(0, e3.length - c))
        );
        return f && d.unshift([0, f]), h && d.push([0, h]), a2(d), null != s3 && (d = /*
        		 * Modify a diff such that the edit position is "shifted" to the proposed edit location (cursor_position).
        		 *
        		 * Case 1)
        		 *   Check if a naive shift is possible:
        		 *     [0, X], [ 1, Y] -> [ 1, Y], [0, X]    (if X + Y === Y + X)
        		 *     [0, X], [-1, Y] -> [-1, Y], [0, X]    (if X + Y === Y + X) - holds same result
        		 * Case 2)
        		 *   Check if the following shifts are possible:
        		 *     [0, 'pre'], [ 1, 'prefix'] -> [ 1, 'pre'], [0, 'pre'], [ 1, 'fix']
        		 *     [0, 'pre'], [-1, 'prefix'] -> [-1, 'pre'], [0, 'pre'], [-1, 'fix']
        		 *         ^            ^
        		 *         d          d_next
        		 *
        		 * @param {Array} diffs Array of diff tuples
        		 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
        		 * @return {Array} Array of diff tuples
        		 */
        function(t4, e4) {
          var r3 = (
            /*
            		 * Modify a diff such that the cursor position points to the start of a change:
            		 * E.g.
            		 *   cursor_normalize_diff([[DIFF_EQUAL, 'abc']], 1)
            		 *     => [1, [[DIFF_EQUAL, 'a'], [DIFF_EQUAL, 'bc']]]
            		 *   cursor_normalize_diff([[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xyz']], 2)
            		 *     => [2, [[DIFF_INSERT, 'new'], [DIFF_DELETE, 'xy'], [DIFF_DELETE, 'z']]]
            		 *
            		 * @param {Array} diffs Array of diff tuples
            		 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
            		 * @return {Array} A tuple [cursor location in the modified diff, modified diff]
            		 */
            function(t5, e5) {
              if (0 === e5) return [0, t5];
              for (var r4 = 0, o4 = 0; o4 < t5.length; o4++) {
                var i4 = t5[o4];
                if (i4[0] === n2 || 0 === i4[0]) {
                  var l4 = r4 + i4[1].length;
                  if (e5 === l4) return [o4 + 1, t5];
                  if (e5 < l4) {
                    t5 = t5.slice();
                    var a4 = e5 - r4, s5 = [i4[0], i4[1].slice(0, a4)], u2 = [i4[0], i4[1].slice(a4)];
                    return t5.splice(o4, 1, s5, u2), [o4 + 1, t5];
                  }
                  r4 = l4;
                }
              }
              throw new Error("cursor_pos is out of bounds!");
            }(t4, e4)
          ), o3 = r3[1], i3 = r3[0], l3 = o3[i3], a3 = o3[i3 + 1];
          if (null == l3)
            return t4;
          if (0 !== l3[0])
            return t4;
          if (null != a3 && l3[1] + a3[1] === a3[1] + l3[1])
            return o3.splice(i3, 2, a3, l3), u(o3, i3, 2);
          if (null != a3 && 0 === a3[1].indexOf(l3[1])) {
            o3.splice(i3, 2, [a3[0], l3[1]], [0, l3[1]]);
            var s4 = a3[1].slice(l3[1].length);
            return s4.length > 0 && o3.splice(i3 + 2, 0, [a3[0], s4]), u(o3, i3, 3);
          }
          return t4;
        }(d, s3)), d = function(t4) {
          for (var e4 = false, r3 = function(t5) {
            return t5.charCodeAt(0) >= 56320 && t5.charCodeAt(0) <= 57343;
          }, o3 = function(t5) {
            return t5.charCodeAt(t5.length - 1) >= 55296 && t5.charCodeAt(t5.length - 1) <= 56319;
          }, i3 = 2; i3 < t4.length; i3 += 1) 0 === t4[i3 - 2][0] && o3(t4[i3 - 2][1]) && t4[i3 - 1][0] === n2 && r3(t4[i3 - 1][1]) && 1 === t4[i3][0] && r3(t4[i3][1]) && (e4 = true, t4[i3 - 1][1] = t4[i3 - 2][1].slice(-1) + t4[i3 - 1][1], t4[i3][1] = t4[i3 - 2][1].slice(-1) + t4[i3][1], t4[i3 - 2][1] = t4[i3 - 2][1].slice(0, -1));
          if (!e4) return t4;
          var l3 = [];
          for (i3 = 0; i3 < t4.length; i3 += 1) t4[i3][1].length > 0 && l3.push(t4[i3]);
          return l3;
        }(d);
      }
      function o2(t3, e3, n3, o3) {
        var i3 = t3.substring(0, n3), l3 = e3.substring(0, o3), a3 = t3.substring(n3), s3 = e3.substring(o3), u2 = r2(i3, l3), c = r2(a3, s3);
        return u2.concat(c);
      }
      function i2(t3, e3) {
        if (!t3 || !e3 || t3.charAt(0) != e3.charAt(0)) return 0;
        for (var n3 = 0, r3 = Math.min(t3.length, e3.length), o3 = r3, i3 = 0; n3 < o3; ) t3.substring(i3, o3) == e3.substring(i3, o3) ? i3 = n3 = o3 : r3 = o3, o3 = Math.floor((r3 - n3) / 2 + n3);
        return o3;
      }
      function l2(t3, e3) {
        if (!t3 || !e3 || t3.charAt(t3.length - 1) != e3.charAt(e3.length - 1)) return 0;
        for (var n3 = 0, r3 = Math.min(t3.length, e3.length), o3 = r3, i3 = 0; n3 < o3; ) t3.substring(t3.length - o3, t3.length - i3) == e3.substring(e3.length - o3, e3.length - i3) ? i3 = n3 = o3 : r3 = o3, o3 = Math.floor((r3 - n3) / 2 + n3);
        return o3;
      }
      function a2(t3) {
        t3.push([0, ""]);
        for (var e3, r3 = 0, o3 = 0, s3 = 0, u2 = "", c = ""; r3 < t3.length; ) switch (t3[r3][0]) {
          case 1:
            s3++, c += t3[r3][1], r3++;
            break;
          case n2:
            o3++, u2 += t3[r3][1], r3++;
            break;
          case 0:
            o3 + s3 > 1 ? (0 !== o3 && 0 !== s3 && // Factor out any common prefixies.
            (0 !== (e3 = i2(c, u2)) && (r3 - o3 - s3 > 0 && 0 == t3[r3 - o3 - s3 - 1][0] ? t3[r3 - o3 - s3 - 1][1] += c.substring(0, e3) : (t3.splice(0, 0, [0, c.substring(0, e3)]), r3++), c = c.substring(e3), u2 = u2.substring(e3)), 0 !== // Factor out any common suffixies.
            (e3 = l2(c, u2)) && (t3[r3][1] = c.substring(c.length - e3) + t3[r3][1], c = c.substring(0, c.length - e3), u2 = u2.substring(0, u2.length - e3))), // Delete the offending records and add the merged ones.
            0 === o3 ? t3.splice(r3 - s3, o3 + s3, [1, c]) : 0 === s3 ? t3.splice(r3 - o3, o3 + s3, [n2, u2]) : t3.splice(r3 - o3 - s3, o3 + s3, [n2, u2], [1, c]), r3 = r3 - o3 - s3 + (o3 ? 1 : 0) + (s3 ? 1 : 0) + 1) : 0 !== r3 && 0 == t3[r3 - 1][0] ? (
              // Merge this equality with the previous one.
              (t3[r3 - 1][1] += t3[r3][1], t3.splice(r3, 1))
            ) : r3++, s3 = 0, o3 = 0, u2 = "", c = "";
        }
        "" === t3[t3.length - 1][1] && t3.pop();
        var f = false;
        for (r3 = 1; r3 < t3.length - 1; ) 0 == t3[r3 - 1][0] && 0 == t3[r3 + 1][0] && // This is a single edit surrounded by equalities.
        (t3[r3][1].substring(t3[r3][1].length - t3[r3 - 1][1].length) == t3[r3 - 1][1] ? (
          // Shift the edit over the previous equality.
          (t3[r3][1] = t3[r3 - 1][1] + t3[r3][1].substring(0, t3[r3][1].length - t3[r3 - 1][1].length), t3[r3 + 1][1] = t3[r3 - 1][1] + t3[r3 + 1][1], t3.splice(r3 - 1, 1), f = true)
        ) : t3[r3][1].substring(0, t3[r3 + 1][1].length) == t3[r3 + 1][1] && // Shift the edit over the next equality.
        (t3[r3 - 1][1] += t3[r3 + 1][1], t3[r3][1] = t3[r3][1].substring(t3[r3 + 1][1].length) + t3[r3 + 1][1], t3.splice(r3 + 1, 1), f = true)), r3++;
        f && a2(t3);
      }
      var s2 = r2;
      function u(t3, e3, n3) {
        for (var r3 = e3 + n3 - 1; r3 >= 0 && r3 >= e3 - 1; r3--) if (r3 + 1 < t3.length) {
          var o3 = t3[r3], i3 = t3[r3 + 1];
          o3[0] === i3[1] && t3.splice(r3, 2, [o3[0], o3[1] + i3[1]]);
        }
        return t3;
      }
      s2.INSERT = 1, s2.DELETE = n2, s2.EQUAL = 0, t2.exports = s2;
    },
    /* 52 */
    /***/
    function(t2, e2) {
      function n2(t3) {
        var e3 = [];
        for (var n3 in t3) e3.push(n3);
        return e3;
      }
      (t2.exports = "function" == typeof Object.keys ? Object.keys : n2).shim = n2;
    },
    /* 53 */
    /***/
    function(t2, e2) {
      var n2 = "[object Arguments]" == function() {
        return Object.prototype.toString.call(arguments);
      }();
      function r2(t3) {
        return "[object Arguments]" == Object.prototype.toString.call(t3);
      }
      function o2(t3) {
        return t3 && "object" == typeof t3 && "number" == typeof t3.length && Object.prototype.hasOwnProperty.call(t3, "callee") && !Object.prototype.propertyIsEnumerable.call(t3, "callee") || false;
      }
      (e2 = t2.exports = n2 ? r2 : o2).supported = r2, e2.unsupported = o2;
    },
    /* 54 */
    /***/
    function(t2, e2) {
      var n2 = Object.prototype.hasOwnProperty, r2 = "~";
      function o2() {
      }
      function i2(t3, e3, n3) {
        this.fn = t3, this.context = e3, this.once = n3 || false;
      }
      function l2() {
        this._events = new o2(), this._eventsCount = 0;
      }
      Object.create && (o2.prototype = /* @__PURE__ */ Object.create(null), // This hack is needed because the `__proto__` property is still inherited in
      // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
      new o2().__proto__ || (r2 = false)), l2.prototype.eventNames = function() {
        var t3, e3, o3 = [];
        if (0 === this._eventsCount) return o3;
        for (e3 in t3 = this._events) n2.call(t3, e3) && o3.push(r2 ? e3.slice(1) : e3);
        return Object.getOwnPropertySymbols ? o3.concat(Object.getOwnPropertySymbols(t3)) : o3;
      }, /**
      		 * Return the listeners registered for a given event.
      		 *
      		 * @param {String|Symbol} event The event name.
      		 * @param {Boolean} exists Only check if there are listeners.
      		 * @returns {Array|Boolean}
      		 * @api public
      		 */
      l2.prototype.listeners = function(t3, e3) {
        var n3 = r2 ? r2 + t3 : t3, o3 = this._events[n3];
        if (e3) return !!o3;
        if (!o3) return [];
        if (o3.fn) return [o3.fn];
        for (var i3 = 0, l3 = o3.length, a2 = new Array(l3); i3 < l3; i3++) a2[i3] = o3[i3].fn;
        return a2;
      }, /**
      		 * Calls each of the listeners registered for a given event.
      		 *
      		 * @param {String|Symbol} event The event name.
      		 * @returns {Boolean} `true` if the event had listeners, else `false`.
      		 * @api public
      		 */
      l2.prototype.emit = function(t3, e3, n3, o3, i3, l3) {
        var a2 = r2 ? r2 + t3 : t3;
        if (!this._events[a2]) return false;
        var s2, u, c = this._events[a2], f = arguments.length;
        if (c.fn) {
          switch (c.once && this.removeListener(t3, c.fn, void 0, true), f) {
            case 1:
              return c.fn.call(c.context), true;
            case 2:
              return c.fn.call(c.context, e3), true;
            case 3:
              return c.fn.call(c.context, e3, n3), true;
            case 4:
              return c.fn.call(c.context, e3, n3, o3), true;
            case 5:
              return c.fn.call(c.context, e3, n3, o3, i3), true;
            case 6:
              return c.fn.call(c.context, e3, n3, o3, i3, l3), true;
          }
          for (u = 1, s2 = new Array(f - 1); u < f; u++) s2[u - 1] = arguments[u];
          c.fn.apply(c.context, s2);
        } else {
          var h, d = c.length;
          for (u = 0; u < d; u++) switch (c[u].once && this.removeListener(t3, c[u].fn, void 0, true), f) {
            case 1:
              c[u].fn.call(c[u].context);
              break;
            case 2:
              c[u].fn.call(c[u].context, e3);
              break;
            case 3:
              c[u].fn.call(c[u].context, e3, n3);
              break;
            case 4:
              c[u].fn.call(c[u].context, e3, n3, o3);
              break;
            default:
              if (!s2) for (h = 1, s2 = new Array(f - 1); h < f; h++) s2[h - 1] = arguments[h];
              c[u].fn.apply(c[u].context, s2);
          }
        }
        return true;
      }, /**
      		 * Add a listener for a given event.
      		 *
      		 * @param {String|Symbol} event The event name.
      		 * @param {Function} fn The listener function.
      		 * @param {Mixed} [context=this] The context to invoke the listener with.
      		 * @returns {EventEmitter} `this`.
      		 * @api public
      		 */
      l2.prototype.on = function(t3, e3, n3) {
        var o3 = new i2(e3, n3 || this), l3 = r2 ? r2 + t3 : t3;
        return this._events[l3] ? this._events[l3].fn ? this._events[l3] = [this._events[l3], o3] : this._events[l3].push(o3) : (this._events[l3] = o3, this._eventsCount++), this;
      }, /**
      		 * Add a one-time listener for a given event.
      		 *
      		 * @param {String|Symbol} event The event name.
      		 * @param {Function} fn The listener function.
      		 * @param {Mixed} [context=this] The context to invoke the listener with.
      		 * @returns {EventEmitter} `this`.
      		 * @api public
      		 */
      l2.prototype.once = function(t3, e3, n3) {
        var o3 = new i2(e3, n3 || this, true), l3 = r2 ? r2 + t3 : t3;
        return this._events[l3] ? this._events[l3].fn ? this._events[l3] = [this._events[l3], o3] : this._events[l3].push(o3) : (this._events[l3] = o3, this._eventsCount++), this;
      }, /**
      		 * Remove the listeners of a given event.
      		 *
      		 * @param {String|Symbol} event The event name.
      		 * @param {Function} fn Only remove the listeners that match this function.
      		 * @param {Mixed} context Only remove the listeners that have this context.
      		 * @param {Boolean} once Only remove one-time listeners.
      		 * @returns {EventEmitter} `this`.
      		 * @api public
      		 */
      l2.prototype.removeListener = function(t3, e3, n3, i3) {
        var l3 = r2 ? r2 + t3 : t3;
        if (!this._events[l3]) return this;
        if (!e3) return 0 == --this._eventsCount ? this._events = new o2() : delete this._events[l3], this;
        var a2 = this._events[l3];
        if (a2.fn) a2.fn !== e3 || i3 && !a2.once || n3 && a2.context !== n3 || (0 == --this._eventsCount ? this._events = new o2() : delete this._events[l3]);
        else {
          for (var s2 = 0, u = [], c = a2.length; s2 < c; s2++) (a2[s2].fn !== e3 || i3 && !a2[s2].once || n3 && a2[s2].context !== n3) && u.push(a2[s2]);
          u.length ? this._events[l3] = 1 === u.length ? u[0] : u : 0 == --this._eventsCount ? this._events = new o2() : delete this._events[l3];
        }
        return this;
      }, /**
      		 * Remove all listeners, or those of the specified event.
      		 *
      		 * @param {String|Symbol} [event] The event name.
      		 * @returns {EventEmitter} `this`.
      		 * @api public
      		 */
      l2.prototype.removeAllListeners = function(t3) {
        var e3;
        return t3 ? (e3 = r2 ? r2 + t3 : t3, this._events[e3] && (0 == --this._eventsCount ? this._events = new o2() : delete this._events[e3])) : (this._events = new o2(), this._eventsCount = 0), this;
      }, // Alias methods names because people roll like that.
      l2.prototype.off = l2.prototype.removeListener, l2.prototype.addListener = l2.prototype.on, // This function doesn't apply anymore.
      l2.prototype.setMaxListeners = function() {
        return this;
      }, // Expose the prefix.
      l2.prefixed = r2, // Allow `EventEmitter` to be imported as module namespace.
      l2.EventEmitter = l2, // Expose the module.
      void 0 !== t2 && (t2.exports = l2);
    },
    /* 55 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.matchText = e2.matchSpacing = e2.matchNewline = e2.matchBlot = e2.matchAttributor = e2.default = void 0;
      var r2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
        return typeof t3;
      } : function(t3) {
        return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
      }, o2 = function(t3, e3) {
        if (Array.isArray(t3)) return t3;
        if (Symbol.iterator in Object(t3)) return function(t4, e4) {
          var n3 = [], r3 = true, o3 = false, i3 = void 0;
          try {
            for (var l3, a3 = t4[Symbol.iterator](); !(r3 = (l3 = a3.next()).done) && (n3.push(l3.value), !e4 || n3.length !== e4); r3 = true) ;
          } catch (t5) {
            o3 = true, i3 = t5;
          } finally {
            try {
              !r3 && a3.return && a3.return();
            } finally {
              if (o3) throw i3;
            }
          }
          return n3;
        }(t3, e3);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }, i2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), l2 = m(n2(3)), a2 = m(n2(2)), s2 = m(n2(0)), u = m(n2(5)), c = m(n2(10)), f = m(n2(9)), h = n2(36), d = n2(37), p = m(n2(13)), y = n2(26), v = n2(38), b = n2(39), g = n2(40);
      function m(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      function _(t3, e3, n3) {
        return e3 in t3 ? Object.defineProperty(t3, e3, { value: n3, enumerable: true, configurable: true, writable: true }) : t3[e3] = n3, t3;
      }
      var O = (0, c.default)("quill:clipboard"), w = "__ql-matcher", x = [[Node.TEXT_NODE, I], [Node.TEXT_NODE, M], ["br", function(t3, e3) {
        return q(e3, "\n") || e3.insert("\n"), e3;
      }], [Node.ELEMENT_NODE, M], [Node.ELEMENT_NODE, L], [Node.ELEMENT_NODE, R], [Node.ELEMENT_NODE, C], [Node.ELEMENT_NODE, function(t3, e3) {
        var n3 = {}, r3 = t3.style || {};
        return r3.fontStyle && "italic" === j(t3).fontStyle && (n3.italic = true), r3.fontWeight && (j(t3).fontWeight.startsWith("bold") || parseInt(j(t3).fontWeight) >= 700) && (n3.bold = true), Object.keys(n3).length > 0 && (e3 = A(e3, n3)), parseFloat(r3.textIndent || 0) > 0 && // Could be 0.5in
        (e3 = new a2.default().insert("	").concat(e3)), e3;
      }], ["li", function(t3, e3) {
        var n3 = s2.default.query(t3);
        if (null == n3 || "list-item" !== n3.blotName || !q(e3, "\n")) return e3;
        for (var r3 = -1, o3 = t3.parentNode; !o3.classList.contains("ql-clipboard"); ) "list" === (s2.default.query(o3) || {}).blotName && (r3 += 1), o3 = o3.parentNode;
        return r3 <= 0 ? e3 : e3.compose(new a2.default().retain(e3.length() - 1).retain(1, { indent: r3 }));
      }], ["b", S.bind(S, "bold")], ["i", S.bind(S, "italic")], ["style", function() {
        return new a2.default();
      }]], k = [h.AlignAttribute, v.DirectionAttribute].reduce(function(t3, e3) {
        return t3[e3.keyName] = e3, t3;
      }, {}), E = [h.AlignStyle, d.BackgroundStyle, y.ColorStyle, v.DirectionStyle, b.FontStyle, g.SizeStyle].reduce(function(t3, e3) {
        return t3[e3.keyName] = e3, t3;
      }, {}), N = function(t3) {
        function e3(t4, n3) {
          !function(t5, e4) {
            if (!(t5 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3);
          var r3 = function(t5, e4) {
            if (!t5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t5 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4, n3));
          return r3.quill.root.addEventListener("paste", r3.onPaste.bind(r3)), r3.container = r3.quill.addContainer("ql-clipboard"), r3.container.setAttribute("contenteditable", true), r3.container.setAttribute("tabindex", -1), r3.matchers = [], x.concat(r3.options.matchers).forEach(function(t5) {
            var e4 = o2(t5, 2), i3 = e4[0], l3 = e4[1];
            (n3.matchVisual || l3 !== R) && r3.addMatcher(i3, l3);
          }), r3;
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), i2(e3, [{ key: "addMatcher", value: function(t4, e4) {
          this.matchers.push([t4, e4]);
        } }, { key: "convert", value: function(t4) {
          if ("string" == typeof t4)
            return this.container.innerHTML = t4.replace(/\>\r?\n +\</g, "><"), this.convert();
          var e4 = this.quill.getFormat(this.quill.selection.savedRange.index);
          if (e4[p.default.blotName]) {
            var n3 = this.container.innerText;
            return this.container.innerHTML = "", new a2.default().insert(n3, _({}, p.default.blotName, e4[p.default.blotName]));
          }
          var r3 = this.prepareMatching(), i3 = o2(r3, 2), l3 = i3[0], s3 = i3[1], u2 = P(this.container, l3, s3);
          return q(u2, "\n") && null == u2.ops[u2.ops.length - 1].attributes && (u2 = u2.compose(new a2.default().retain(u2.length() - 1).delete(1))), O.log("convert", this.container.innerHTML, u2), this.container.innerHTML = "", u2;
        } }, { key: "dangerouslyPasteHTML", value: function(t4, e4) {
          var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default.sources.API;
          if ("string" == typeof t4) this.quill.setContents(this.convert(t4), e4), this.quill.setSelection(0, u.default.sources.SILENT);
          else {
            var r3 = this.convert(e4);
            this.quill.updateContents(new a2.default().retain(t4).concat(r3), n3), this.quill.setSelection(t4 + r3.length(), u.default.sources.SILENT);
          }
        } }, { key: "onPaste", value: function(t4) {
          var e4 = this;
          if (!t4.defaultPrevented && this.quill.isEnabled()) {
            var n3 = this.quill.getSelection(), r3 = new a2.default().retain(n3.index), o3 = this.quill.scrollingContainer.scrollTop;
            this.container.focus(), this.quill.selection.update(u.default.sources.SILENT), setTimeout(function() {
              r3 = r3.concat(e4.convert()).delete(n3.length), e4.quill.updateContents(r3, u.default.sources.USER), // range.length contributes to delta.length()
              e4.quill.setSelection(r3.length() - n3.length, u.default.sources.SILENT), e4.quill.scrollingContainer.scrollTop = o3, e4.quill.focus();
            }, 1);
          }
        } }, { key: "prepareMatching", value: function() {
          var t4 = this, e4 = [], n3 = [];
          return this.matchers.forEach(function(r3) {
            var i3 = o2(r3, 2), l3 = i3[0], a3 = i3[1];
            switch (l3) {
              case Node.TEXT_NODE:
                n3.push(a3);
                break;
              case Node.ELEMENT_NODE:
                e4.push(a3);
                break;
              default:
                [].forEach.call(t4.container.querySelectorAll(l3), function(t5) {
                  t5[w] = t5[w] || [], t5[w].push(a3);
                });
            }
          }), [e4, n3];
        } }]), e3;
      }(f.default);
      function A(t3, e3, n3) {
        return "object" === (void 0 === e3 ? "undefined" : r2(e3)) ? Object.keys(e3).reduce(function(t4, n4) {
          return A(t4, n4, e3[n4]);
        }, t3) : t3.reduce(function(t4, r3) {
          return r3.attributes && r3.attributes[e3] ? t4.push(r3) : t4.insert(r3.insert, (0, l2.default)({}, _({}, e3, n3), r3.attributes));
        }, new a2.default());
      }
      function j(t3) {
        if (t3.nodeType !== Node.ELEMENT_NODE) return {};
        var e3 = "__ql-computed-style";
        return t3[e3] || (t3[e3] = window.getComputedStyle(t3));
      }
      function q(t3, e3) {
        for (var n3 = "", r3 = t3.ops.length - 1; r3 >= 0 && n3.length < e3.length; --r3) {
          var o3 = t3.ops[r3];
          if ("string" != typeof o3.insert) break;
          n3 = o3.insert + n3;
        }
        return n3.slice(-1 * e3.length) === e3;
      }
      function T(t3) {
        if (0 === t3.childNodes.length) return false;
        var e3 = j(t3);
        return ["block", "list-item"].indexOf(e3.display) > -1;
      }
      function P(t3, e3, n3) {
        return t3.nodeType === t3.TEXT_NODE ? n3.reduce(function(e4, n4) {
          return n4(t3, e4);
        }, new a2.default()) : t3.nodeType === t3.ELEMENT_NODE ? [].reduce.call(t3.childNodes || [], function(r3, o3) {
          var i3 = P(o3, e3, n3);
          return o3.nodeType === t3.ELEMENT_NODE && (i3 = e3.reduce(function(t4, e4) {
            return e4(o3, t4);
          }, i3), i3 = (o3[w] || []).reduce(function(t4, e4) {
            return e4(o3, t4);
          }, i3)), r3.concat(i3);
        }, new a2.default()) : new a2.default();
      }
      function S(t3, e3, n3) {
        return A(n3, t3, true);
      }
      function C(t3, e3) {
        var n3 = s2.default.Attributor.Attribute.keys(t3), r3 = s2.default.Attributor.Class.keys(t3), o3 = s2.default.Attributor.Style.keys(t3), i3 = {};
        return n3.concat(r3).concat(o3).forEach(function(e4) {
          var n4 = s2.default.query(e4, s2.default.Scope.ATTRIBUTE);
          null != n4 && (i3[n4.attrName] = n4.value(t3), i3[n4.attrName]) || (null == (n4 = k[e4]) || n4.attrName !== e4 && n4.keyName !== e4 || (i3[n4.attrName] = n4.value(t3) || void 0), null == (n4 = E[e4]) || n4.attrName !== e4 && n4.keyName !== e4 || (n4 = E[e4], i3[n4.attrName] = n4.value(t3) || void 0));
        }), Object.keys(i3).length > 0 && (e3 = A(e3, i3)), e3;
      }
      function L(t3, e3) {
        var n3 = s2.default.query(t3);
        if (null == n3) return e3;
        if (n3.prototype instanceof s2.default.Embed) {
          var r3 = {}, o3 = n3.value(t3);
          null != o3 && (r3[n3.blotName] = o3, e3 = new a2.default().insert(r3, n3.formats(t3)));
        } else "function" == typeof n3.formats && (e3 = A(e3, n3.blotName, n3.formats(t3)));
        return e3;
      }
      function M(t3, e3) {
        return q(e3, "\n") || (T(t3) || e3.length() > 0 && t3.nextSibling && T(t3.nextSibling)) && e3.insert("\n"), e3;
      }
      function R(t3, e3) {
        if (T(t3) && null != t3.nextElementSibling && !q(e3, "\n\n")) {
          var n3 = t3.offsetHeight + parseFloat(j(t3).marginTop) + parseFloat(j(t3).marginBottom);
          t3.nextElementSibling.offsetTop > t3.offsetTop + 1.5 * n3 && e3.insert("\n");
        }
        return e3;
      }
      function I(t3, e3) {
        var n3 = t3.data;
        if ("O:P" === t3.parentNode.tagName) return e3.insert(n3.trim());
        if (0 === n3.trim().length && t3.parentNode.classList.contains("ql-clipboard")) return e3;
        if (!j(t3.parentNode).whiteSpace.startsWith("pre")) {
          var r3 = function(t4, e4) {
            return (e4 = e4.replace(/[^\u00a0]/g, "")).length < 1 && t4 ? " " : e4;
          };
          n3 = (n3 = n3.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, r3.bind(r3, true)), // collapse whitespace
          (null == t3.previousSibling && T(t3.parentNode) || null != t3.previousSibling && T(t3.previousSibling)) && (n3 = n3.replace(/^\s+/, r3.bind(r3, false))), (null == t3.nextSibling && T(t3.parentNode) || null != t3.nextSibling && T(t3.nextSibling)) && (n3 = n3.replace(/\s+$/, r3.bind(r3, false)));
        }
        return e3.insert(n3);
      }
      N.DEFAULTS = { matchers: [], matchVisual: true }, e2.default = N, e2.matchAttributor = C, e2.matchBlot = L, e2.matchNewline = M, e2.matchSpacing = R, e2.matchText = I;
    },
    /* 56 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, l2 = n2(6), a2 = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), o2(e3, [{ key: "optimize", value: function(t4) {
          i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "optimize", this).call(this, t4), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
        } }], [{ key: "create", value: function() {
          return i2(e3.__proto__ || Object.getPrototypeOf(e3), "create", this).call(this);
        } }, { key: "formats", value: function() {
          return true;
        } }]), e3;
      }(((r2 = l2) && r2.__esModule ? r2 : { default: r2 }).default);
      a2.blotName = "bold", a2.tagName = ["STRONG", "B"], e2.default = a2;
    },
    /* 57 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.addControls = e2.default = void 0;
      var r2 = function(t3, e3) {
        if (Array.isArray(t3)) return t3;
        if (Symbol.iterator in Object(t3)) return function(t4, e4) {
          var n3 = [], r3 = true, o3 = false, i3 = void 0;
          try {
            for (var l3, a3 = t4[Symbol.iterator](); !(r3 = (l3 = a3.next()).done) && (n3.push(l3.value), !e4 || n3.length !== e4); r3 = true) ;
          } catch (t5) {
            o3 = true, i3 = t5;
          } finally {
            try {
              !r3 && a3.return && a3.return();
            } finally {
              if (o3) throw i3;
            }
          }
          return n3;
        }(t3, e3);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = c(n2(2)), l2 = c(n2(0)), a2 = c(n2(5)), s2 = c(n2(10)), u = c(n2(9));
      function c(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      function f(t3, e3) {
        if (!t3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e3 || "object" != typeof e3 && "function" != typeof e3 ? t3 : e3;
      }
      var h = (0, s2.default)("quill:toolbar"), d = function(t3) {
        function e3(t4, n3) {
          !function(t5, e4) {
            if (!(t5 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3);
          var o3, i3 = f(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4, n3));
          if (Array.isArray(i3.options.container)) {
            var l3 = document.createElement("div");
            y(l3, i3.options.container), t4.container.parentNode.insertBefore(l3, t4.container), i3.container = l3;
          } else "string" == typeof i3.options.container ? i3.container = document.querySelector(i3.options.container) : i3.container = i3.options.container;
          return i3.container instanceof HTMLElement ? (i3.container.classList.add("ql-toolbar"), i3.controls = [], i3.handlers = {}, Object.keys(i3.options.handlers).forEach(function(t5) {
            i3.addHandler(t5, i3.options.handlers[t5]);
          }), [].forEach.call(i3.container.querySelectorAll("button, select"), function(t5) {
            i3.attach(t5);
          }), i3.quill.on(a2.default.events.EDITOR_CHANGE, function(t5, e4) {
            t5 === a2.default.events.SELECTION_CHANGE && i3.update(e4);
          }), i3.quill.on(a2.default.events.SCROLL_OPTIMIZE, function() {
            var t5 = i3.quill.selection.getRange(), e4 = r2(t5, 1)[0];
            i3.update(e4);
          }), i3) : (o3 = h.error("Container required for toolbar", i3.options), f(i3, o3));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), o2(e3, [{ key: "addHandler", value: function(t4, e4) {
          this.handlers[t4] = e4;
        } }, { key: "attach", value: function(t4) {
          var e4 = this, n3 = [].find.call(t4.classList, function(t5) {
            return 0 === t5.indexOf("ql-");
          });
          if (n3) {
            if (n3 = n3.slice(3), "BUTTON" === t4.tagName && t4.setAttribute("type", "button"), null == this.handlers[n3]) {
              if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[n3]) return void h.warn("ignoring attaching to disabled format", n3, t4);
              if (null == l2.default.query(n3)) return void h.warn("ignoring attaching to nonexistent format", n3, t4);
            }
            var o3 = "SELECT" === t4.tagName ? "change" : "click";
            t4.addEventListener(o3, function(o4) {
              var s3 = void 0;
              if ("SELECT" === t4.tagName) {
                if (t4.selectedIndex < 0) return;
                var u2 = t4.options[t4.selectedIndex];
                s3 = !u2.hasAttribute("selected") && (u2.value || false);
              } else s3 = !t4.classList.contains("ql-active") && (t4.value || !t4.hasAttribute("value")), o4.preventDefault();
              e4.quill.focus();
              var c2 = e4.quill.selection.getRange(), f2 = r2(c2, 1)[0];
              if (null != e4.handlers[n3]) e4.handlers[n3].call(e4, s3);
              else if (l2.default.query(n3).prototype instanceof l2.default.Embed) {
                if (!(s3 = prompt("Enter " + n3))) return;
                e4.quill.updateContents(new i2.default().retain(f2.index).delete(f2.length).insert(function(t5, e5, n4) {
                  return e5 in t5 ? Object.defineProperty(t5, e5, { value: n4, enumerable: true, configurable: true, writable: true }) : t5[e5] = n4, t5;
                }({}, n3, s3)), a2.default.sources.USER);
              } else e4.quill.format(n3, s3, a2.default.sources.USER);
              e4.update(f2);
            }), // TODO use weakmap
            this.controls.push([n3, t4]);
          }
        } }, { key: "update", value: function(t4) {
          var e4 = null == t4 ? {} : this.quill.getFormat(t4);
          this.controls.forEach(function(n3) {
            var o3 = r2(n3, 2), i3 = o3[0], l3 = o3[1];
            if ("SELECT" === l3.tagName) {
              var a3 = void 0;
              if (null == t4) a3 = null;
              else if (null == e4[i3]) a3 = l3.querySelector("option[selected]");
              else if (!Array.isArray(e4[i3])) {
                var s3 = e4[i3];
                "string" == typeof s3 && (s3 = s3.replace(/\"/g, '\\"')), a3 = l3.querySelector('option[value="' + s3 + '"]');
              }
              null == a3 ? (l3.value = "", // TODO make configurable?
              l3.selectedIndex = -1) : a3.selected = true;
            } else if (null == t4) l3.classList.remove("ql-active");
            else if (l3.hasAttribute("value")) {
              var u2 = e4[i3] === l3.getAttribute("value") || null != e4[i3] && e4[i3].toString() === l3.getAttribute("value") || null == e4[i3] && !l3.getAttribute("value");
              l3.classList.toggle("ql-active", u2);
            } else l3.classList.toggle("ql-active", null != e4[i3]);
          });
        } }]), e3;
      }(u.default);
      function p(t3, e3, n3) {
        var r3 = document.createElement("button");
        r3.setAttribute("type", "button"), r3.classList.add("ql-" + e3), null != n3 && (r3.value = n3), t3.appendChild(r3);
      }
      function y(t3, e3) {
        Array.isArray(e3[0]) || (e3 = [e3]), e3.forEach(function(e4) {
          var n3 = document.createElement("span");
          n3.classList.add("ql-formats"), e4.forEach(function(t4) {
            if ("string" == typeof t4) p(n3, t4);
            else {
              var e5 = Object.keys(t4)[0], r3 = t4[e5];
              Array.isArray(r3) ? function(t5, e6, n4) {
                var r4 = document.createElement("select");
                r4.classList.add("ql-" + e6), n4.forEach(function(t6) {
                  var e7 = document.createElement("option");
                  false !== t6 ? e7.setAttribute("value", t6) : e7.setAttribute("selected", "selected"), r4.appendChild(e7);
                }), t5.appendChild(r4);
              }(n3, e5, r3) : p(n3, e5, r3);
            }
          }), t3.appendChild(n3);
        });
      }
      d.DEFAULTS = {}, d.DEFAULTS = { container: null, handlers: { clean: function() {
        var t3 = this, e3 = this.quill.getSelection();
        if (null != e3) if (0 == e3.length) {
          var n3 = this.quill.getFormat();
          Object.keys(n3).forEach(function(e4) {
            null != l2.default.query(e4, l2.default.Scope.INLINE) && t3.quill.format(e4, false);
          });
        } else this.quill.removeFormat(e3, a2.default.sources.USER);
      }, direction: function(t3) {
        var e3 = this.quill.getFormat().align;
        "rtl" === t3 && null == e3 ? this.quill.format("align", "right", a2.default.sources.USER) : t3 || "right" !== e3 || this.quill.format("align", false, a2.default.sources.USER), this.quill.format("direction", t3, a2.default.sources.USER);
      }, indent: function(t3) {
        var e3 = this.quill.getSelection(), n3 = this.quill.getFormat(e3), r3 = parseInt(n3.indent || 0);
        if ("+1" === t3 || "-1" === t3) {
          var o3 = "+1" === t3 ? 1 : -1;
          "rtl" === n3.direction && (o3 *= -1), this.quill.format("indent", r3 + o3, a2.default.sources.USER);
        }
      }, link: function(t3) {
        true === t3 && (t3 = prompt("Enter link URL:")), this.quill.format("link", t3, a2.default.sources.USER);
      }, list: function(t3) {
        var e3 = this.quill.getSelection(), n3 = this.quill.getFormat(e3);
        "check" === t3 ? "checked" === n3.list || "unchecked" === n3.list ? this.quill.format("list", false, a2.default.sources.USER) : this.quill.format("list", "unchecked", a2.default.sources.USER) : this.quill.format("list", t3, a2.default.sources.USER);
      } } }, e2.default = d, e2.addControls = y;
    },
    /* 58 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
    },
    /* 59 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, l2 = n2(28), a2 = function(t3) {
        function e3(t4, n3) {
          !function(t5, e4) {
            if (!(t5 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3);
          var r3 = function(t5, e4) {
            if (!t5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t5 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4));
          return r3.label.innerHTML = n3, r3.container.classList.add("ql-color-picker"), [].slice.call(r3.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function(t5) {
            t5.classList.add("ql-primary");
          }), r3;
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), o2(e3, [{ key: "buildItem", value: function(t4) {
          var n3 = i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "buildItem", this).call(this, t4);
          return n3.style.backgroundColor = t4.getAttribute("value") || "", n3;
        } }, { key: "selectItem", value: function(t4, n3) {
          i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "selectItem", this).call(this, t4, n3);
          var r3 = this.label.querySelector(".ql-color-label"), o3 = t4 && t4.getAttribute("data-value") || "";
          r3 && ("line" === r3.tagName ? r3.style.stroke = o3 : r3.style.fill = o3);
        } }]), e3;
      }(((r2 = l2) && r2.__esModule ? r2 : { default: r2 }).default);
      e2.default = a2;
    },
    /* 60 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, l2 = n2(28), a2 = function(t3) {
        function e3(t4, n3) {
          !function(t5, e4) {
            if (!(t5 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3);
          var r3 = function(t5, e4) {
            if (!t5) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t5 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4));
          return r3.container.classList.add("ql-icon-picker"), [].forEach.call(r3.container.querySelectorAll(".ql-picker-item"), function(t5) {
            t5.innerHTML = n3[t5.getAttribute("data-value") || ""];
          }), r3.defaultItem = r3.container.querySelector(".ql-selected"), r3.selectItem(r3.defaultItem), r3;
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), o2(e3, [{ key: "selectItem", value: function(t4, n3) {
          i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "selectItem", this).call(this, t4, n3), t4 = t4 || this.defaultItem, this.label.innerHTML = t4.innerHTML;
        } }]), e3;
      }(((r2 = l2) && r2.__esModule ? r2 : { default: r2 }).default);
      e2.default = a2;
    },
    /* 61 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), o2 = function() {
        function t3(e3, n3) {
          var r3 = this;
          !function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, t3), this.quill = e3, this.boundsContainer = n3 || document.body, this.root = e3.addContainer("ql-tooltip"), this.root.innerHTML = this.constructor.TEMPLATE, this.quill.root === this.quill.scrollingContainer && this.quill.root.addEventListener("scroll", function() {
            r3.root.style.marginTop = -1 * r3.quill.root.scrollTop + "px";
          }), this.hide();
        }
        return r2(t3, [{ key: "hide", value: function() {
          this.root.classList.add("ql-hidden");
        } }, { key: "position", value: function(t4) {
          var e3 = t4.left + t4.width / 2 - this.root.offsetWidth / 2, n3 = t4.bottom + this.quill.root.scrollTop;
          this.root.style.left = e3 + "px", this.root.style.top = n3 + "px", this.root.classList.remove("ql-flip");
          var r3 = this.boundsContainer.getBoundingClientRect(), o3 = this.root.getBoundingClientRect(), i2 = 0;
          if (o3.right > r3.right && (i2 = r3.right - o3.right, this.root.style.left = e3 + i2 + "px"), o3.left < r3.left && (i2 = r3.left - o3.left, this.root.style.left = e3 + i2 + "px"), o3.bottom > r3.bottom) {
            var l2 = o3.bottom - o3.top, a2 = t4.bottom - t4.top + l2;
            this.root.style.top = n3 - a2 + "px", this.root.classList.add("ql-flip");
          }
          return i2;
        } }, { key: "show", value: function() {
          this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
        } }]), t3;
      }();
      e2.default = o2;
    },
    /* 62 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = function(t3, e3) {
        if (Array.isArray(t3)) return t3;
        if (Symbol.iterator in Object(t3)) return function(t4, e4) {
          var n3 = [], r3 = true, o3 = false, i3 = void 0;
          try {
            for (var l3, a3 = t4[Symbol.iterator](); !(r3 = (l3 = a3.next()).done) && (n3.push(l3.value), !e4 || n3.length !== e4); r3 = true) ;
          } catch (t5) {
            o3 = true, i3 = t5;
          } finally {
            try {
              !r3 && a3.return && a3.return();
            } finally {
              if (o3) throw i3;
            }
          }
          return n3;
        }(t3, e3);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }, o2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, i2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), l2 = d(n2(3)), a2 = d(n2(8)), s2 = n2(43), u = d(s2), c = d(n2(27)), f = n2(15), h = d(n2(41));
      function d(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      function p(t3, e3) {
        if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
      }
      function y(t3, e3) {
        if (!t3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e3 || "object" != typeof e3 && "function" != typeof e3 ? t3 : e3;
      }
      function v(t3, e3) {
        if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function, not " + typeof e3);
        t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (Object.setPrototypeOf ? Object.setPrototypeOf(t3, e3) : t3.__proto__ = e3);
      }
      var b = [[{ header: ["1", "2", "3", false] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]], g = function(t3) {
        function e3(t4, n3) {
          p(this, e3), null != n3.modules.toolbar && null == n3.modules.toolbar.container && (n3.modules.toolbar.container = b);
          var r3 = y(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4, n3));
          return r3.quill.container.classList.add("ql-snow"), r3;
        }
        return v(e3, t3), i2(e3, [{ key: "extendToolbar", value: function(t4) {
          t4.container.classList.add("ql-snow"), this.buildButtons([].slice.call(t4.container.querySelectorAll("button")), h.default), this.buildPickers([].slice.call(t4.container.querySelectorAll("select")), h.default), this.tooltip = new m(this.quill, this.options.bounds), t4.container.querySelector(".ql-link") && this.quill.keyboard.addBinding({ key: "K", shortKey: true }, function(e4, n3) {
            t4.handlers.link.call(t4, !n3.format.link);
          });
        } }]), e3;
      }(u.default);
      g.DEFAULTS = (0, l2.default)(true, {}, u.default.DEFAULTS, { modules: { toolbar: { handlers: { link: function(t3) {
        if (t3) {
          var e3 = this.quill.getSelection();
          if (null == e3 || 0 == e3.length) return;
          var n3 = this.quill.getText(e3);
          /^\S+@\S+\.\S+$/.test(n3) && 0 !== n3.indexOf("mailto:") && (n3 = "mailto:" + n3), this.quill.theme.tooltip.edit("link", n3);
        } else this.quill.format("link", false);
      } } } } });
      var m = function(t3) {
        function e3(t4, n3) {
          p(this, e3);
          var r3 = y(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4, n3));
          return r3.preview = r3.root.querySelector("a.ql-preview"), r3;
        }
        return v(e3, t3), i2(e3, [{ key: "listen", value: function() {
          var t4 = this;
          o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "listen", this).call(this), this.root.querySelector("a.ql-action").addEventListener("click", function(e4) {
            t4.root.classList.contains("ql-editing") ? t4.save() : t4.edit("link", t4.preview.textContent), e4.preventDefault();
          }), this.root.querySelector("a.ql-remove").addEventListener("click", function(e4) {
            if (null != t4.linkRange) {
              var n3 = t4.linkRange;
              t4.restoreFocus(), t4.quill.formatText(n3, "link", false, a2.default.sources.USER), delete t4.linkRange;
            }
            e4.preventDefault(), t4.hide();
          }), this.quill.on(a2.default.events.SELECTION_CHANGE, function(e4, n3, o3) {
            if (null != e4) {
              if (0 === e4.length && o3 === a2.default.sources.USER) {
                var i3 = t4.quill.scroll.descendant(c.default, e4.index), l3 = r2(i3, 2), s3 = l3[0], u2 = l3[1];
                if (null != s3) {
                  t4.linkRange = new f.Range(e4.index - u2, s3.length());
                  var h2 = c.default.formats(s3.domNode);
                  return t4.preview.textContent = h2, t4.preview.setAttribute("href", h2), t4.show(), void t4.position(t4.quill.getBounds(t4.linkRange));
                }
              } else delete t4.linkRange;
              t4.hide();
            }
          });
        } }, { key: "show", value: function() {
          o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
        } }]), e3;
      }(s2.BaseTooltip);
      m.TEMPLATE = ['<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join(""), e2.default = g;
    },
    /* 63 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2 = M(n2(29)), o2 = n2(36), i2 = n2(38), l2 = n2(64), a2 = M(n2(65)), s2 = M(n2(66)), u = n2(67), c = M(u), f = n2(37), h = n2(26), d = n2(39), p = n2(40), y = M(n2(56)), v = M(n2(68)), b = M(n2(27)), g = M(n2(69)), m = M(n2(70)), _ = M(n2(71)), O = M(n2(72)), w = M(n2(73)), x = n2(13), k = M(x), E = M(n2(74)), N = M(n2(75)), A = M(n2(57)), j = M(n2(41)), q = M(n2(28)), T = M(n2(59)), P = M(n2(60)), S = M(n2(61)), C = M(n2(108)), L = M(n2(62));
      function M(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      r2.default.register({ "attributors/attribute/direction": i2.DirectionAttribute, "attributors/class/align": o2.AlignClass, "attributors/class/background": f.BackgroundClass, "attributors/class/color": h.ColorClass, "attributors/class/direction": i2.DirectionClass, "attributors/class/font": d.FontClass, "attributors/class/size": p.SizeClass, "attributors/style/align": o2.AlignStyle, "attributors/style/background": f.BackgroundStyle, "attributors/style/color": h.ColorStyle, "attributors/style/direction": i2.DirectionStyle, "attributors/style/font": d.FontStyle, "attributors/style/size": p.SizeStyle }, true), r2.default.register({ "formats/align": o2.AlignClass, "formats/direction": i2.DirectionClass, "formats/indent": l2.IndentClass, "formats/background": f.BackgroundStyle, "formats/color": h.ColorStyle, "formats/font": d.FontClass, "formats/size": p.SizeClass, "formats/blockquote": a2.default, "formats/code-block": k.default, "formats/header": s2.default, "formats/list": c.default, "formats/bold": y.default, "formats/code": x.Code, "formats/italic": v.default, "formats/link": b.default, "formats/script": g.default, "formats/strike": m.default, "formats/underline": _.default, "formats/image": O.default, "formats/video": w.default, "formats/list/item": u.ListItem, "modules/formula": E.default, "modules/syntax": N.default, "modules/toolbar": A.default, "themes/bubble": C.default, "themes/snow": L.default, "ui/icons": j.default, "ui/picker": q.default, "ui/icon-picker": P.default, "ui/color-picker": T.default, "ui/tooltip": S.default }, true), e2.default = r2.default;
    },
    /* 64 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.IndentClass = void 0;
      var r2, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, l2 = n2(0), a2 = (r2 = l2) && r2.__esModule ? r2 : { default: r2 }, s2 = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), o2(e3, [{ key: "add", value: function(t4, n3) {
          if ("+1" === n3 || "-1" === n3) {
            var r3 = this.value(t4) || 0;
            n3 = "+1" === n3 ? r3 + 1 : r3 - 1;
          }
          return 0 === n3 ? (this.remove(t4), true) : i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "add", this).call(this, t4, n3);
        } }, { key: "canAdd", value: function(t4, n3) {
          return i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "canAdd", this).call(this, t4, n3) || i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "canAdd", this).call(this, t4, parseInt(n3));
        } }, { key: "value", value: function(t4) {
          return parseInt(i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "value", this).call(this, t4)) || void 0;
        } }]), e3;
      }(a2.default.Attributor.Class), u = new s2("indent", "ql-indent", { scope: a2.default.Scope.BLOCK, whitelist: [1, 2, 3, 4, 5, 6, 7, 8] });
      e2.IndentClass = u;
    },
    /* 65 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2, o2 = n2(4), i2 = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), e3;
      }(((r2 = o2) && r2.__esModule ? r2 : { default: r2 }).default);
      i2.blotName = "blockquote", i2.tagName = "blockquote", e2.default = i2;
    },
    /* 66 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = n2(4), l2 = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), o2(e3, null, [{ key: "formats", value: function(t4) {
          return this.tagName.indexOf(t4.tagName) + 1;
        } }]), e3;
      }(((r2 = i2) && r2.__esModule ? r2 : { default: r2 }).default);
      l2.blotName = "header", l2.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"], e2.default = l2;
    },
    /* 67 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.default = e2.ListItem = void 0;
      var r2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), o2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, i2 = s2(n2(0)), l2 = s2(n2(4)), a2 = s2(n2(25));
      function s2(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      function u(t3, e3) {
        if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
      }
      function c(t3, e3) {
        if (!t3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e3 || "object" != typeof e3 && "function" != typeof e3 ? t3 : e3;
      }
      function f(t3, e3) {
        if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function, not " + typeof e3);
        t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (Object.setPrototypeOf ? Object.setPrototypeOf(t3, e3) : t3.__proto__ = e3);
      }
      var h = function(t3) {
        function e3() {
          return u(this, e3), c(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return f(e3, t3), r2(e3, [{ key: "format", value: function(t4, n3) {
          t4 !== d.blotName || n3 ? o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "format", this).call(this, t4, n3) : this.replaceWith(i2.default.create(this.statics.scope));
        } }, { key: "remove", value: function() {
          null == this.prev && null == this.next ? this.parent.remove() : o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "remove", this).call(this);
        } }, { key: "replaceWith", value: function(t4, n3) {
          return this.parent.isolate(this.offset(this.parent), this.length()), t4 === this.parent.statics.blotName ? (this.parent.replaceWith(t4, n3), this) : (this.parent.unwrap(), o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "replaceWith", this).call(this, t4, n3));
        } }], [{ key: "formats", value: function(t4) {
          return t4.tagName === this.tagName ? void 0 : o2(e3.__proto__ || Object.getPrototypeOf(e3), "formats", this).call(this, t4);
        } }]), e3;
      }(l2.default);
      h.blotName = "list-item", h.tagName = "LI";
      var d = function(t3) {
        function e3(t4) {
          u(this, e3);
          var n3 = c(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4)), r3 = function(e4) {
            if (e4.target.parentNode === t4) {
              var r4 = n3.statics.formats(t4), o3 = i2.default.find(e4.target);
              "checked" === r4 ? o3.format("list", "unchecked") : "unchecked" === r4 && o3.format("list", "checked");
            }
          };
          return t4.addEventListener("touchstart", r3), t4.addEventListener("mousedown", r3), n3;
        }
        return f(e3, t3), r2(e3, null, [{ key: "create", value: function(t4) {
          var n3 = "ordered" === t4 ? "OL" : "UL", r3 = o2(e3.__proto__ || Object.getPrototypeOf(e3), "create", this).call(this, n3);
          return "checked" !== t4 && "unchecked" !== t4 || r3.setAttribute("data-checked", "checked" === t4), r3;
        } }, { key: "formats", value: function(t4) {
          return "OL" === t4.tagName ? "ordered" : "UL" === t4.tagName ? t4.hasAttribute("data-checked") ? "true" === t4.getAttribute("data-checked") ? "checked" : "unchecked" : "bullet" : void 0;
        } }]), r2(e3, [{ key: "format", value: function(t4, e4) {
          this.children.length > 0 && this.children.tail.format(t4, e4);
        } }, { key: "formats", value: function() {
          return t4 = {}, e4 = this.statics.blotName, n3 = this.statics.formats(this.domNode), e4 in t4 ? Object.defineProperty(t4, e4, { value: n3, enumerable: true, configurable: true, writable: true }) : t4[e4] = n3, t4;
          var t4, e4, n3;
        } }, { key: "insertBefore", value: function(t4, n3) {
          if (t4 instanceof h) o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "insertBefore", this).call(this, t4, n3);
          else {
            var r3 = null == n3 ? this.length() : n3.offset(this), i3 = this.split(r3);
            i3.parent.insertBefore(t4, i3);
          }
        } }, { key: "optimize", value: function(t4) {
          o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "optimize", this).call(this, t4);
          var n3 = this.next;
          null != n3 && n3.prev === this && n3.statics.blotName === this.statics.blotName && n3.domNode.tagName === this.domNode.tagName && n3.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (n3.moveChildren(this), n3.remove());
        } }, { key: "replace", value: function(t4) {
          if (t4.statics.blotName !== this.statics.blotName) {
            var n3 = i2.default.create(this.statics.defaultChild);
            t4.moveChildren(n3), this.appendChild(n3);
          }
          o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "replace", this).call(this, t4);
        } }]), e3;
      }(a2.default);
      d.blotName = "list", d.scope = i2.default.Scope.BLOCK_BLOT, d.tagName = ["OL", "UL"], d.defaultChild = "list-item", d.allowedChildren = [h], e2.ListItem = h, e2.default = d;
    },
    /* 68 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2, o2 = n2(56), i2 = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), e3;
      }(((r2 = o2) && r2.__esModule ? r2 : { default: r2 }).default);
      i2.blotName = "italic", i2.tagName = ["EM", "I"], e2.default = i2;
    },
    /* 69 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, l2 = n2(6), a2 = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), o2(e3, null, [{ key: "create", value: function(t4) {
          return "super" === t4 ? document.createElement("sup") : "sub" === t4 ? document.createElement("sub") : i2(e3.__proto__ || Object.getPrototypeOf(e3), "create", this).call(this, t4);
        } }, { key: "formats", value: function(t4) {
          return "SUB" === t4.tagName ? "sub" : "SUP" === t4.tagName ? "super" : void 0;
        } }]), e3;
      }(((r2 = l2) && r2.__esModule ? r2 : { default: r2 }).default);
      a2.blotName = "script", a2.tagName = ["SUB", "SUP"], e2.default = a2;
    },
    /* 70 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2, o2 = n2(6), i2 = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), e3;
      }(((r2 = o2) && r2.__esModule ? r2 : { default: r2 }).default);
      i2.blotName = "strike", i2.tagName = "S", e2.default = i2;
    },
    /* 71 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2, o2 = n2(6), i2 = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), e3;
      }(((r2 = o2) && r2.__esModule ? r2 : { default: r2 }).default);
      i2.blotName = "underline", i2.tagName = "U", e2.default = i2;
    },
    /* 72 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, l2 = n2(0), a2 = (r2 = l2) && r2.__esModule ? r2 : { default: r2 }, s2 = n2(27), u = ["alt", "height", "width"], c = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), o2(e3, [{ key: "format", value: function(t4, n3) {
          u.indexOf(t4) > -1 ? n3 ? this.domNode.setAttribute(t4, n3) : this.domNode.removeAttribute(t4) : i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "format", this).call(this, t4, n3);
        } }], [{ key: "create", value: function(t4) {
          var n3 = i2(e3.__proto__ || Object.getPrototypeOf(e3), "create", this).call(this, t4);
          return "string" == typeof t4 && n3.setAttribute("src", this.sanitize(t4)), n3;
        } }, { key: "formats", value: function(t4) {
          return u.reduce(function(e4, n3) {
            return t4.hasAttribute(n3) && (e4[n3] = t4.getAttribute(n3)), e4;
          }, {});
        } }, { key: "match", value: function(t4) {
          return /\.(jpe?g|gif|png)$/.test(t4) || /^data:image\/.+;base64/.test(t4);
        } }, { key: "sanitize", value: function(t4) {
          return (0, s2.sanitize)(t4, ["http", "https", "data"]) ? t4 : "//:0";
        } }, { key: "value", value: function(t4) {
          return t4.getAttribute("src");
        } }]), e3;
      }(a2.default.Embed);
      c.blotName = "image", c.tagName = "IMG", e2.default = c;
    },
    /* 73 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var r2, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, l2 = n2(4), a2 = n2(27), s2 = (r2 = a2) && r2.__esModule ? r2 : { default: r2 }, u = ["height", "width"], c = function(t3) {
        function e3() {
          return function(t4, e4) {
            if (!(t4 instanceof e4)) throw new TypeError("Cannot call a class as a function");
          }(this, e3), function(t4, e4) {
            if (!t4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e4 || "object" != typeof e4 && "function" != typeof e4 ? t4 : e4;
          }(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return function(t4, e4) {
          if ("function" != typeof e4 && null !== e4) throw new TypeError("Super expression must either be null or a function, not " + typeof e4);
          t4.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t4, enumerable: false, writable: true, configurable: true } }), e4 && (Object.setPrototypeOf ? Object.setPrototypeOf(t4, e4) : t4.__proto__ = e4);
        }(e3, t3), o2(e3, [{ key: "format", value: function(t4, n3) {
          u.indexOf(t4) > -1 ? n3 ? this.domNode.setAttribute(t4, n3) : this.domNode.removeAttribute(t4) : i2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "format", this).call(this, t4, n3);
        } }], [{ key: "create", value: function(t4) {
          var n3 = i2(e3.__proto__ || Object.getPrototypeOf(e3), "create", this).call(this, t4);
          return n3.setAttribute("frameborder", "0"), n3.setAttribute("allowfullscreen", true), n3.setAttribute("src", this.sanitize(t4)), n3;
        } }, { key: "formats", value: function(t4) {
          return u.reduce(function(e4, n3) {
            return t4.hasAttribute(n3) && (e4[n3] = t4.getAttribute(n3)), e4;
          }, {});
        } }, { key: "sanitize", value: function(t4) {
          return s2.default.sanitize(t4);
        } }, { key: "value", value: function(t4) {
          return t4.getAttribute("src");
        } }]), e3;
      }(l2.BlockEmbed);
      c.blotName = "video", c.className = "ql-video", c.tagName = "IFRAME", e2.default = c;
    },
    /* 74 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.default = e2.FormulaBlot = void 0;
      var r2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), o2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, i2 = s2(n2(35)), l2 = s2(n2(5)), a2 = s2(n2(9));
      function s2(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      function u(t3, e3) {
        if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
      }
      function c(t3, e3) {
        if (!t3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e3 || "object" != typeof e3 && "function" != typeof e3 ? t3 : e3;
      }
      function f(t3, e3) {
        if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function, not " + typeof e3);
        t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (Object.setPrototypeOf ? Object.setPrototypeOf(t3, e3) : t3.__proto__ = e3);
      }
      var h = function(t3) {
        function e3() {
          return u(this, e3), c(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return f(e3, t3), r2(e3, null, [{ key: "create", value: function(t4) {
          var n3 = o2(e3.__proto__ || Object.getPrototypeOf(e3), "create", this).call(this, t4);
          return "string" == typeof t4 && (window.katex.render(t4, n3, { throwOnError: false, errorColor: "#f00" }), n3.setAttribute("data-value", t4)), n3;
        } }, { key: "value", value: function(t4) {
          return t4.getAttribute("data-value");
        } }]), e3;
      }(i2.default);
      h.blotName = "formula", h.className = "ql-formula", h.tagName = "SPAN";
      var d = function(t3) {
        function e3() {
          u(this, e3);
          var t4 = c(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this));
          if (null == window.katex) throw new Error("Formula module requires KaTeX.");
          return t4;
        }
        return f(e3, t3), r2(e3, null, [{ key: "register", value: function() {
          l2.default.register(h, true);
        } }]), e3;
      }(a2.default);
      e2.FormulaBlot = h, e2.default = d;
    },
    /* 75 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.default = e2.CodeToken = e2.CodeBlock = void 0;
      var r2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), o2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, i2 = s2(n2(0)), l2 = s2(n2(5)), a2 = s2(n2(9));
      function s2(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      function u(t3, e3) {
        if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
      }
      function c(t3, e3) {
        if (!t3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e3 || "object" != typeof e3 && "function" != typeof e3 ? t3 : e3;
      }
      function f(t3, e3) {
        if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function, not " + typeof e3);
        t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (Object.setPrototypeOf ? Object.setPrototypeOf(t3, e3) : t3.__proto__ = e3);
      }
      var h = function(t3) {
        function e3() {
          return u(this, e3), c(this, (e3.__proto__ || Object.getPrototypeOf(e3)).apply(this, arguments));
        }
        return f(e3, t3), r2(e3, [{ key: "replaceWith", value: function(t4) {
          this.domNode.textContent = this.domNode.textContent, this.attach(), o2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "replaceWith", this).call(this, t4);
        } }, { key: "highlight", value: function(t4) {
          var e4 = this.domNode.textContent;
          this.cachedText !== e4 && ((e4.trim().length > 0 || null == this.cachedText) && (this.domNode.innerHTML = t4(e4), this.domNode.normalize(), this.attach()), this.cachedText = e4);
        } }]), e3;
      }(s2(n2(13)).default);
      h.className = "ql-syntax";
      var d = new i2.default.Attributor.Class("token", "hljs", { scope: i2.default.Scope.INLINE }), p = function(t3) {
        function e3(t4, n3) {
          u(this, e3);
          var r3 = c(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4, n3));
          if ("function" != typeof r3.options.highlight) throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
          var o3 = null;
          return r3.quill.on(l2.default.events.SCROLL_OPTIMIZE, function() {
            clearTimeout(o3), o3 = setTimeout(function() {
              r3.highlight(), o3 = null;
            }, r3.options.interval);
          }), r3.highlight(), r3;
        }
        return f(e3, t3), r2(e3, null, [{ key: "register", value: function() {
          l2.default.register(d, true), l2.default.register(h, true);
        } }]), r2(e3, [{ key: "highlight", value: function() {
          var t4 = this;
          if (!this.quill.selection.composing) {
            this.quill.update(l2.default.sources.USER);
            var e4 = this.quill.getSelection();
            this.quill.scroll.descendants(h).forEach(function(e5) {
              e5.highlight(t4.options.highlight);
            }), this.quill.update(l2.default.sources.SILENT), null != e4 && this.quill.setSelection(e4, l2.default.sources.SILENT);
          }
        } }]), e3;
      }(a2.default);
      p.DEFAULTS = { highlight: null == window.hljs ? null : function(t3) {
        return window.hljs.highlightAuto(t3).value;
      }, interval: 1e3 }, e2.CodeBlock = h, e2.CodeToken = d, e2.default = p;
    },
    /* 76 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
    },
    /* 77 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
    },
    /* 78 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
    },
    /* 79 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
    },
    /* 80 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
    },
    /* 81 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
    },
    /* 82 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
    },
    /* 83 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
    },
    /* 84 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
    },
    /* 85 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
    },
    /* 86 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
    },
    /* 87 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
    },
    /* 88 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
    },
    /* 89 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
    },
    /* 90 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
    },
    /* 91 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
    },
    /* 92 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
    },
    /* 93 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
    },
    /* 94 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
    },
    /* 95 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
    },
    /* 96 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
    },
    /* 97 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
    },
    /* 98 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
    },
    /* 99 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
    },
    /* 100 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
    },
    /* 101 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
    },
    /* 102 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
    },
    /* 103 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
    },
    /* 104 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
    },
    /* 105 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
    },
    /* 106 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
    },
    /* 107 */
    /***/
    function(t2, e2) {
      t2.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
    },
    /* 108 */
    /***/
    function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.default = e2.BubbleTooltip = void 0;
      var r2 = function t3(e3, n3, r3) {
        null === e3 && (e3 = Function.prototype);
        var o3 = Object.getOwnPropertyDescriptor(e3, n3);
        if (void 0 === o3) {
          var i3 = Object.getPrototypeOf(e3);
          return null === i3 ? void 0 : t3(i3, n3, r3);
        }
        if ("value" in o3) return o3.value;
        var l3 = o3.get;
        return void 0 !== l3 ? l3.call(r3) : void 0;
      }, o2 = /* @__PURE__ */ function() {
        function t3(t4, e3) {
          for (var n3 = 0; n3 < e3.length; n3++) {
            var r3 = e3[n3];
            r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(t4, r3.key, r3);
          }
        }
        return function(e3, n3, r3) {
          return n3 && t3(e3.prototype, n3), r3 && t3(e3, r3), e3;
        };
      }(), i2 = f(n2(3)), l2 = f(n2(8)), a2 = n2(43), s2 = f(a2), u = n2(15), c = f(n2(41));
      function f(t3) {
        return t3 && t3.__esModule ? t3 : { default: t3 };
      }
      function h(t3, e3) {
        if (!(t3 instanceof e3)) throw new TypeError("Cannot call a class as a function");
      }
      function d(t3, e3) {
        if (!t3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e3 || "object" != typeof e3 && "function" != typeof e3 ? t3 : e3;
      }
      function p(t3, e3) {
        if ("function" != typeof e3 && null !== e3) throw new TypeError("Super expression must either be null or a function, not " + typeof e3);
        t3.prototype = Object.create(e3 && e3.prototype, { constructor: { value: t3, enumerable: false, writable: true, configurable: true } }), e3 && (Object.setPrototypeOf ? Object.setPrototypeOf(t3, e3) : t3.__proto__ = e3);
      }
      var y = [["bold", "italic", "link"], [{ header: 1 }, { header: 2 }, "blockquote"]], v = function(t3) {
        function e3(t4, n3) {
          h(this, e3), null != n3.modules.toolbar && null == n3.modules.toolbar.container && (n3.modules.toolbar.container = y);
          var r3 = d(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4, n3));
          return r3.quill.container.classList.add("ql-bubble"), r3;
        }
        return p(e3, t3), o2(e3, [{ key: "extendToolbar", value: function(t4) {
          this.tooltip = new b(this.quill, this.options.bounds), this.tooltip.root.appendChild(t4.container), this.buildButtons([].slice.call(t4.container.querySelectorAll("button")), c.default), this.buildPickers([].slice.call(t4.container.querySelectorAll("select")), c.default);
        } }]), e3;
      }(s2.default);
      v.DEFAULTS = (0, i2.default)(true, {}, s2.default.DEFAULTS, { modules: { toolbar: { handlers: { link: function(t3) {
        t3 ? this.quill.theme.tooltip.edit() : this.quill.format("link", false);
      } } } } });
      var b = function(t3) {
        function e3(t4, n3) {
          h(this, e3);
          var r3 = d(this, (e3.__proto__ || Object.getPrototypeOf(e3)).call(this, t4, n3));
          return r3.quill.on(l2.default.events.EDITOR_CHANGE, function(t5, e4, n4, o3) {
            if (t5 === l2.default.events.SELECTION_CHANGE) if (null != e4 && e4.length > 0 && o3 === l2.default.sources.USER) {
              r3.show(), // Lock our width so we will expand beyond our offsetParent boundaries
              r3.root.style.left = "0px", r3.root.style.width = "", r3.root.style.width = r3.root.offsetWidth + "px";
              var i3 = r3.quill.getLines(e4.index, e4.length);
              if (1 === i3.length) r3.position(r3.quill.getBounds(e4));
              else {
                var a3 = i3[i3.length - 1], s3 = r3.quill.getIndex(a3), c2 = Math.min(a3.length() - 1, e4.index + e4.length - s3), f2 = r3.quill.getBounds(new u.Range(s3, c2));
                r3.position(f2);
              }
            } else document.activeElement !== r3.textbox && r3.quill.hasFocus() && r3.hide();
          }), r3;
        }
        return p(e3, t3), o2(e3, [{ key: "listen", value: function() {
          var t4 = this;
          r2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "listen", this).call(this), this.root.querySelector(".ql-close").addEventListener("click", function() {
            t4.root.classList.remove("ql-editing");
          }), this.quill.on(l2.default.events.SCROLL_OPTIMIZE, function() {
            setTimeout(function() {
              if (!t4.root.classList.contains("ql-hidden")) {
                var e4 = t4.quill.getSelection();
                null != e4 && t4.position(t4.quill.getBounds(e4));
              }
            }, 1);
          });
        } }, { key: "cancel", value: function() {
          this.show();
        } }, { key: "position", value: function(t4) {
          var n3 = r2(e3.prototype.__proto__ || Object.getPrototypeOf(e3.prototype), "position", this).call(this, t4), o3 = this.root.querySelector(".ql-tooltip-arrow");
          if (o3.style.marginLeft = "", 0 === n3) return n3;
          o3.style.marginLeft = -1 * n3 - o3.offsetWidth / 2 + "px";
        } }]), e3;
      }(a2.BaseTooltip);
      b.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join(""), e2.BubbleTooltip = b, e2.default = v;
    },
    /* 109 */
    /***/
    function(t2, e2, n2) {
      t2.exports = n2(63);
    }
    /******/
  ]).default;
}, n.exports = r());
const i = t(o), l = i.import("blots/block/embed"), a = (_a = class extends l {
  static create(t2) {
    const e2 = super.create(t2);
    if (true === t2) return e2;
    const n2 = document.createElement("img");
    return n2.setAttribute("src", t2), e2.appendChild(n2), e2.setAttribute("contenteditable", false), n2.setAttribute("contenteditable", false), e2;
  }
  deleteAt(t2, e2) {
    return !!a.allowDelete && (this.cache = {}, super.deleteAt(t2, e2));
  }
  static value(t2) {
    const { src: e2, custom: n2 } = t2.dataset;
    return { src: e2, custom: n2 };
  }
  insertAt(t2, e2) {
    t2 >= this.length() || super.insertAt(t2, e2);
  }
  length() {
    return 1;
  }
}, __publicField(_a, "allowDelete", false), _a);
a.blotName = "imageBlot", a.className = "image-uploading", a.tagName = "span", i.register({ "formats/imageBlot": a });
class s {
  constructor(t2, e2) {
    this.quill = t2, this.options = e2, this.range = null, this.placeholderDelta = null, "function" != typeof this.options.upload && console.warn("[Missing config] upload function that returns a promise is required");
    var n2 = this.quill.getModule("toolbar");
    n2 && n2.addHandler("image", this.selectLocalImage.bind(this)), this.handleDrop = this.handleDrop.bind(this), this.handlePaste = this.handlePaste.bind(this), this.quill.root.addEventListener("drop", this.handleDrop, false), this.quill.root.addEventListener("paste", this.handlePaste, false);
  }
  selectLocalImage() {
    this.quill.focus(), this.range = this.quill.getSelection(), this.fileHolder = document.createElement("input"), this.fileHolder.setAttribute("type", "file"), this.fileHolder.setAttribute("accept", "image/*"), this.fileHolder.setAttribute("style", "visibility:hidden"), this.fileHolder.onchange = this.fileChanged.bind(this), document.body.appendChild(this.fileHolder), this.fileHolder.click(), window.requestAnimationFrame(() => {
      document.body.removeChild(this.fileHolder);
    });
  }
  handleDrop(t2) {
    if (t2.dataTransfer && t2.dataTransfer.files && t2.dataTransfer.files.length) {
      if (t2.stopPropagation(), t2.preventDefault(), document.caretRangeFromPoint) {
        const e3 = document.getSelection(), n2 = document.caretRangeFromPoint(t2.clientX, t2.clientY);
        e3 && n2 && e3.setBaseAndExtent(n2.startContainer, n2.startOffset, n2.startContainer, n2.startOffset);
      } else {
        const e3 = document.getSelection(), n2 = document.caretPositionFromPoint(t2.clientX, t2.clientY);
        e3 && n2 && e3.setBaseAndExtent(n2.offsetNode, n2.offset, n2.offsetNode, n2.offset);
      }
      this.quill.focus(), this.range = this.quill.getSelection();
      let e2 = t2.dataTransfer.files[0];
      setTimeout(() => {
        this.quill.focus(), this.range = this.quill.getSelection(), this.readAndUploadFile(e2);
      }, 0);
    }
  }
  handlePaste(t2) {
    let e2 = t2.clipboardData || window.clipboardData;
    if (e2 && (e2.items || e2.files)) {
      let n2 = e2.items || e2.files;
      const r2 = /^image\/(jpe?g|gif|png|svg|webp)$/i;
      for (let e3 = 0; e3 < n2.length; e3++) if (r2.test(n2[e3].type)) {
        let r3 = n2[e3].getAsFile ? n2[e3].getAsFile() : n2[e3];
        r3 && (this.quill.focus(), this.range = this.quill.getSelection(), t2.preventDefault(), setTimeout(() => {
          this.quill.focus(), this.range = this.quill.getSelection(), this.readAndUploadFile(r3);
        }, 0));
      }
    }
  }
  readAndUploadFile(t2) {
    let e2 = false;
    const n2 = new FileReader();
    n2.addEventListener("load", () => {
      if (!e2) {
        let t3 = n2.result;
        this.insertBase64Image(t3);
      }
    }, false), t2 && n2.readAsDataURL(t2), this.options.upload(t2).then(({ imageUrl: t3, uploadId: e3 = -1 }) => {
      this.insertToEditor(t3, e3);
    }, (t3) => {
      e2 = true, this.removeBase64Image(), console.warn(t3);
    });
  }
  fileChanged() {
    const t2 = this.fileHolder.files[0];
    this.readAndUploadFile(t2);
  }
  insertBase64Image(t2) {
    const e2 = this.range;
    this.placeholderDelta = this.quill.insertEmbed(e2.index, a.blotName, `${t2}`, "api"), // Move the cursor to immediately after the inserted image
    this.quill.setSelection(e2.index + 1, 0);
  }
  insertToEditor(t2, e2) {
    const n2 = this.range, r2 = this.calculatePlaceholderInsertLength();
    if (a.allowDelete = true, // Delete the placeholder image
    this.quill.deleteText(n2.index, r2, "api"), a.allowDelete = false, // Insert the server saved image
    this.quill.insertEmbed(n2.index, "image", `${t2}`, "user"), -1 !== e2) {
      const [t3] = this.quill.getLeaf(n2.index);
      (t3 == null ? void 0 : t3.domNode) && t3.domNode.setAttribute("data-upload-id", e2);
    }
    n2.index++, this.quill.setSelection(n2, "user");
  }
  // The length of the insert delta from insertBase64Image can vary depending on what part of the line the insert occurs
  calculatePlaceholderInsertLength() {
    return this.placeholderDelta.ops.reduce((t2, e2) => (e2.hasOwnProperty("insert") && t2++, t2), 0);
  }
  removeBase64Image() {
    const t2 = this.range, e2 = this.calculatePlaceholderInsertLength();
    a.allowDelete = true, this.quill.deleteText(t2.index, e2, "api"), a.allowDelete = false;
  }
}
window.ImageUploader = s;
export {
  s as I,
  i as Q
};
//# sourceMappingURL=quill.imageUploader-BZ-yeQMG.js.map
