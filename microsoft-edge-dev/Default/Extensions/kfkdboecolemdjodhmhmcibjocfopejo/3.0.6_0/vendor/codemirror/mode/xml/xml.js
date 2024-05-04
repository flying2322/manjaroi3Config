!(function(t) {
  'object' == typeof exports && 'object' == typeof module
    ? t(require('../../lib/codemirror'))
    : 'function' == typeof define && define.amd
    ? define(['../../lib/codemirror'], t)
    : t(CodeMirror);
})(function(T) {
  'use strict';
  var y = {
      autoSelfClosers: {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        frame: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
        menuitem: !0,
      },
      implicitlyClosed: { dd: !0, li: !0, optgroup: !0, option: !0, p: !0, rp: !0, rt: !0, tbody: !0, td: !0, tfoot: !0, th: !0, tr: !0 },
      contextGrabbers: {
        dd: { dd: !0, dt: !0 },
        dt: { dd: !0, dt: !0 },
        li: { li: !0 },
        option: { option: !0, optgroup: !0 },
        optgroup: { optgroup: !0 },
        p: {
          address: !0,
          article: !0,
          aside: !0,
          blockquote: !0,
          dir: !0,
          div: !0,
          dl: !0,
          fieldset: !0,
          footer: !0,
          form: !0,
          h1: !0,
          h2: !0,
          h3: !0,
          h4: !0,
          h5: !0,
          h6: !0,
          header: !0,
          hgroup: !0,
          hr: !0,
          menu: !0,
          nav: !0,
          ol: !0,
          p: !0,
          pre: !0,
          section: !0,
          table: !0,
          ul: !0,
        },
        rp: { rp: !0, rt: !0 },
        rt: { rp: !0, rt: !0 },
        tbody: { tbody: !0, tfoot: !0 },
        td: { td: !0, th: !0 },
        tfoot: { tbody: !0 },
        th: { td: !0, th: !0 },
        thead: { tbody: !0, tfoot: !0 },
        tr: { tr: !0 },
      },
      doNotIndent: { pre: !0 },
      allowUnquoted: !0,
      allowMissing: !0,
      caseFold: !0,
    },
    z = { autoSelfClosers: {}, implicitlyClosed: {}, contextGrabbers: {}, doNotIndent: {}, allowUnquoted: !1, allowMissing: !1, allowMissingTagName: !1, caseFold: !1 };
  T.defineMode('xml', function(t, e) {
    var i,
      a,
      l = t.indentUnit,
      u = {},
      n = e.htmlMode ? y : z;
    for (var r in n) u[r] = n[r];
    for (var r in e) u[r] = e[r];
    function c(e, n) {
      function t(t) {
        return (n.tokenize = t)(e, n);
      }
      var r = e.next();
      if ('<' == r)
        return e.eat('!')
          ? e.eat('[')
            ? e.match('CDATA[')
              ? t(s('atom', ']]>'))
              : null
            : e.match('--')
            ? t(s('comment', '--\x3e'))
            : e.match('DOCTYPE', !0, !0)
            ? (e.eatWhile(/[\w\._\-]/),
              t(
                (function r(o) {
                  return function(t, e) {
                    for (var n; null != (n = t.next()); ) {
                      if ('<' == n) return (e.tokenize = r(o + 1)), e.tokenize(t, e);
                      if ('>' == n) {
                        if (1 != o) return (e.tokenize = r(o - 1)), e.tokenize(t, e);
                        e.tokenize = c;
                        break;
                      }
                    }
                    return 'meta';
                  };
                })(1)
              ))
            : null
          : e.eat('?')
          ? (e.eatWhile(/[\w\._\-]/), (n.tokenize = s('meta', '?>')), 'meta')
          : ((i = e.eat('/') ? 'closeTag' : 'openTag'), (n.tokenize = d), 'tag bracket');
      if ('&' != r) return e.eatWhile(/[^&<]/), null;
      var o = e.eat('#') ? (e.eat('x') ? e.eatWhile(/[a-fA-F\d]/) && e.eat(';') : e.eatWhile(/[\d]/) && e.eat(';')) : e.eatWhile(/[\w\.\-:]/) && e.eat(';');
      return o ? 'atom' : 'error';
    }
    function d(t, e) {
      var n = t.next();
      if ('>' == n || ('/' == n && t.eat('>'))) return (e.tokenize = c), (i = '>' == n ? 'endTag' : 'selfcloseTag'), 'tag bracket';
      if ('=' == n) return (i = 'equals'), null;
      if ('<' != n)
        return /[\'\"]/.test(n)
          ? ((e.tokenize = ((r = n), (a.isInAttribute = !0), a)), (e.stringStartCol = t.column()), e.tokenize(t, e))
          : (t.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), 'word');
      (e.tokenize = c), (e.state = g), (e.tagName = e.tagStart = null);
      var r,
        o = e.tokenize(t, e);
      return o ? o + ' tag error' : 'tag error';
      function a(t, e) {
        for (; !t.eol(); )
          if (t.next() == r) {
            e.tokenize = d;
            break;
          }
        return 'string';
      }
    }
    function s(n, r) {
      return function(t, e) {
        for (; !t.eol(); ) {
          if (t.match(r)) {
            e.tokenize = c;
            break;
          }
          t.next();
        }
        return n;
      };
    }
    function f(t, e, n) {
      (this.prev = t.context),
        (this.tagName = e),
        (this.indent = t.indented),
        (this.startOfLine = n),
        (u.doNotIndent.hasOwnProperty(e) || (t.context && t.context.noIndent)) && (this.noIndent = !0);
    }
    function o(t) {
      t.context && (t.context = t.context.prev);
    }
    function m(t, e) {
      for (var n; ; ) {
        if (!t.context) return;
        if (((n = t.context.tagName), !u.contextGrabbers.hasOwnProperty(n) || !u.contextGrabbers[n].hasOwnProperty(e))) return;
        o(t);
      }
    }
    function g(t, e, n) {
      return 'openTag' == t ? ((n.tagStart = e.column()), p) : 'closeTag' == t ? h : g;
    }
    function p(t, e, n) {
      return 'word' == t ? ((n.tagName = e.current()), (a = 'tag'), k) : u.allowMissingTagName && 'endTag' == t ? ((a = 'tag bracket'), k(t, 0, n)) : ((a = 'error'), p);
    }
    function h(t, e, n) {
      if ('word' != t) return u.allowMissingTagName && 'endTag' == t ? ((a = 'tag bracket'), x(t, 0, n)) : ((a = 'error'), b);
      var r = e.current();
      return (
        n.context && n.context.tagName != r && u.implicitlyClosed.hasOwnProperty(n.context.tagName) && o(n),
        (n.context && n.context.tagName == r) || !1 === u.matchClosing ? ((a = 'tag'), x) : ((a = 'tag error'), b)
      );
    }
    function x(t, e, n) {
      return 'endTag' != t ? ((a = 'error'), x) : (o(n), g);
    }
    function b(t, e, n) {
      return (a = 'error'), x(t, 0, n);
    }
    function k(t, e, n) {
      if ('word' == t) return (a = 'attribute'), v;
      if ('endTag' != t && 'selfcloseTag' != t) return (a = 'error'), k;
      var r = n.tagName,
        o = n.tagStart;
      return (n.tagName = n.tagStart = null), 'selfcloseTag' == t || u.autoSelfClosers.hasOwnProperty(r) ? m(n, r) : (m(n, r), (n.context = new f(n, r, o == n.indented))), g;
    }
    function v(t, e, n) {
      return 'equals' == t ? w : (u.allowMissing || (a = 'error'), k(t, 0, n));
    }
    function w(t, e, n) {
      return 'string' == t ? N : 'word' == t && u.allowUnquoted ? ((a = 'string'), k) : ((a = 'error'), k(t, 0, n));
    }
    function N(t, e, n) {
      return 'string' == t ? N : k(t, 0, n);
    }
    return (
      (c.isInText = !0),
      {
        startState: function(t) {
          var e = { tokenize: c, state: g, indented: t || 0, tagName: null, tagStart: null, context: null };
          return null != t && (e.baseIndent = t), e;
        },
        token: function(t, e) {
          if ((!e.tagName && t.sol() && (e.indented = t.indentation()), t.eatSpace())) return null;
          i = null;
          var n = e.tokenize(t, e);
          return (n || i) && 'comment' != n && ((a = null), (e.state = e.state(i || n, t, e)), a && (n = 'error' == a ? n + ' error' : a)), n;
        },
        indent: function(t, e, n) {
          var r = t.context;
          if (t.tokenize.isInAttribute) return t.tagStart == t.indented ? t.stringStartCol + 1 : t.indented + l;
          if (r && r.noIndent) return T.Pass;
          if (t.tokenize != d && t.tokenize != c) return n ? n.match(/^(\s*)/)[0].length : 0;
          if (t.tagName) return !1 !== u.multilineTagIndentPastTag ? t.tagStart + t.tagName.length + 2 : t.tagStart + l * (u.multilineTagIndentFactor || 1);
          if (u.alignCDATA && /<!\[CDATA\[/.test(e)) return 0;
          var o = e && /^<(\/)?([\w_:\.-]*)/.exec(e);
          if (o && o[1])
            for (; r; ) {
              if (r.tagName == o[2]) {
                r = r.prev;
                break;
              }
              if (!u.implicitlyClosed.hasOwnProperty(r.tagName)) break;
              r = r.prev;
            }
          else if (o)
            for (; r; ) {
              var a = u.contextGrabbers[r.tagName];
              if (!a || !a.hasOwnProperty(o[2])) break;
              r = r.prev;
            }
          for (; r && r.prev && !r.startOfLine; ) r = r.prev;
          return r ? r.indent + l : t.baseIndent || 0;
        },
        electricInput: /<\/[\s\w:]+>$/,
        blockCommentStart: '\x3c!--',
        blockCommentEnd: '--\x3e',
        configuration: u.htmlMode ? 'html' : 'xml',
        helperType: u.htmlMode ? 'html' : 'xml',
        skipAttribute: function(t) {
          t.state == w && (t.state = k);
        },
        xmlCurrentTag: function(t) {
          return t.tagName ? { name: t.tagName, close: 'closeTag' == t.type } : null;
        },
        xmlCurrentContext: function(t) {
          for (var e = [], n = t.context; n; n = n.prev) n.tagName && e.push(n.tagName);
          return e.reverse();
        },
      }
    );
  }),
    T.defineMIME('text/xml', 'xml'),
    T.defineMIME('application/xml', 'xml'),
    T.mimeModes.hasOwnProperty('text/html') || T.defineMIME('text/html', { name: 'xml', htmlMode: !0 });
});
