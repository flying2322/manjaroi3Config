!(function(t) {
  'object' == typeof exports && 'object' == typeof module
    ? t(require('../../lib/codemirror'), require('../xml/xml'), require('../javascript/javascript'), require('../css/css'))
    : 'function' == typeof define && define.amd
    ? define(['../../lib/codemirror', '../xml/xml', '../javascript/javascript', '../css/css'], t)
    : t(CodeMirror);
})(function(f) {
  'use strict';
  var l = {
    script: [
      ['lang', /(javascript|babel)/i, 'javascript'],
      ['type', /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, 'javascript'],
      ['type', /./, 'text/plain'],
      [null, null, 'javascript'],
    ],
    style: [
      ['lang', /^css$/i, 'css'],
      ['type', /^(text\/)?(x-)?(stylesheet|css)$/i, 'css'],
      ['type', /./, 'text/plain'],
      [null, null, 'css'],
    ],
  };
  var o = {};
  function g(t, e) {
    var a,
      n = t.match(o[(a = e)] || (o[a] = new RegExp('\\s+' + a + '\\s*=\\s*(\'|")?([^\'"]+)(\'|")?\\s*')));
    return n ? /^\s*(.*?)\s*$/.exec(n[2])[1] : '';
  }
  function h(t, e) {
    return new RegExp((e ? '^' : '') + '</s*' + t + 's*>', 'i');
  }
  function r(t, e) {
    for (var a in t) for (var n = e[a] || (e[a] = []), l = t[a], o = l.length - 1; 0 <= o; o--) n.unshift(l[o]);
  }
  f.defineMode(
    'htmlmixed',
    function(u, t) {
      var m = f.getMode(u, { name: 'xml', htmlMode: !0, multilineTagIndentFactor: t.multilineTagIndentFactor, multilineTagIndentPastTag: t.multilineTagIndentPastTag }),
        d = {},
        e = t && t.tags,
        a = t && t.scriptTypes;
      if ((r(l, d), e && r(e, d), a)) for (var n = a.length - 1; 0 <= n; n--) d.script.unshift(['type', a[n].matches, a[n].mode]);
      function p(t, e) {
        var a,
          n,
          l,
          o,
          c,
          i,
          r = m.token(t, e.htmlState),
          s = /\btag\b/.test(r);
        return (
          s && !/[<>\s\/]/.test(t.current()) && (a = e.htmlState.tagName && e.htmlState.tagName.toLowerCase()) && d.hasOwnProperty(a)
            ? (e.inTag = a + ' ')
            : e.inTag && s && />$/.test(t.current())
            ? ((n = /^([\S]+) (.*)/.exec(e.inTag)),
              (e.inTag = null),
              (l =
                '>' == t.current() &&
                (function(t, e) {
                  for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    if (!n[0] || n[1].test(g(e, n[0]))) return n[2];
                  }
                })(d[n[1]], n[2])),
              (o = f.getMode(u, l)),
              (c = h(n[1], !0)),
              (i = h(n[1], !1)),
              (e.token = function(t, e) {
                return t.match(c, !1)
                  ? ((e.token = p), (e.localState = e.localMode = null), null)
                  : ((a = t),
                    (n = i),
                    (l = e.localMode.token(t, e.localState)),
                    (o = a.current()),
                    -1 < (r = o.search(n)) ? a.backUp(o.length - r) : o.match(/<\/?$/) && (a.backUp(o.length), a.match(n, !1) || a.match(o)),
                    l);
                var a, n, l, o, r;
              }),
              (e.localMode = o),
              (e.localState = f.startState(o, m.indent(e.htmlState, '', ''))))
            : e.inTag && ((e.inTag += t.current()), t.eol() && (e.inTag += ' ')),
          r
        );
      }
      return {
        startState: function() {
          return { token: p, inTag: null, localMode: null, localState: null, htmlState: f.startState(m) };
        },
        copyState: function(t) {
          var e;
          return (
            t.localState && (e = f.copyState(t.localMode, t.localState)),
            { token: t.token, inTag: t.inTag, localMode: t.localMode, localState: e, htmlState: f.copyState(m, t.htmlState) }
          );
        },
        token: function(t, e) {
          return e.token(t, e);
        },
        indent: function(t, e, a) {
          return !t.localMode || /^\s*<\//.test(e) ? m.indent(t.htmlState, e, a) : t.localMode.indent ? t.localMode.indent(t.localState, e, a) : f.Pass;
        },
        innerMode: function(t) {
          return { state: t.localState || t.htmlState, mode: t.localMode || m };
        },
      };
    },
    'xml',
    'javascript',
    'css'
  ),
    f.defineMIME('text/html', 'htmlmixed');
});
