!(function(e) {
  'object' == typeof exports && 'object' == typeof module
    ? e(require('../../lib/codemirror'))
    : 'function' == typeof define && define.amd
    ? define(['../../lib/codemirror'], e)
    : e(CodeMirror);
})(function(tt) {
  'use strict';
  tt.defineMode('javascript', function(e, l) {
    var t,
      r,
      n,
      a,
      i,
      o,
      d = e.indentUnit,
      p = l.statementIndent,
      c = l.jsonld,
      s = l.json || c,
      u = l.typescript,
      f = l.wordCharacters || /[\w$\xa1-\uffff]/,
      m =
        ((t = v('keyword a')),
        (r = v('keyword b')),
        (n = v('keyword c')),
        (a = v('keyword d')),
        (i = v('operator')),
        {
          if: v('if'),
          while: t,
          with: t,
          else: r,
          do: r,
          try: r,
          finally: r,
          return: a,
          break: a,
          continue: a,
          new: v('new'),
          delete: n,
          void: n,
          throw: n,
          debugger: v('debugger'),
          var: v('var'),
          const: v('var'),
          let: v('var'),
          function: v('function'),
          catch: v('catch'),
          for: v('for'),
          switch: v('switch'),
          case: v('case'),
          default: v('default'),
          in: i,
          typeof: i,
          instanceof: i,
          true: (o = { type: 'atom', style: 'atom' }),
          false: o,
          null: o,
          undefined: o,
          NaN: o,
          Infinity: o,
          this: v('this'),
          class: v('class'),
          super: v('atom'),
          yield: n,
          export: v('export'),
          import: v('import'),
          extends: n,
          await: n,
        });
    function v(e) {
      return { type: e, style: 'keyword' };
    }
    var k,
      y,
      w = /[+\-*&%=<>!?|~^@]/,
      b = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
    function x(e, t, r) {
      return (k = e), (y = r), t;
    }
    function h(e, t) {
      var a,
        r = e.next();
      if ('"' == r || "'" == r)
        return (
          (t.tokenize =
            ((a = r),
            function(e, t) {
              var r,
                n = !1;
              if (c && '@' == e.peek() && e.match(b)) return (t.tokenize = h), x('jsonld-keyword', 'meta');
              for (; null != (r = e.next()) && (r != a || n); ) n = !n && '\\' == r;
              return n || (t.tokenize = h), x('string', 'string');
            })),
          t.tokenize(e, t)
        );
      if ('.' == r && e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return x('number', 'number');
      if ('.' == r && e.match('..')) return x('spread', 'meta');
      if (/[\[\]{}\(\),;\:\.]/.test(r)) return x(r);
      if ('=' == r && e.eat('>')) return x('=>', 'operator');
      if ('0' == r && e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return x('number', 'number');
      if (/\d/.test(r)) return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), x('number', 'number');
      if ('/' == r)
        return e.eat('*')
          ? (t.tokenize = g)(e, t)
          : e.eat('/')
          ? (e.skipToEnd(), x('comment', 'comment'))
          : et(e, t, 1)
          ? ((function(e) {
              for (var t, r = !1, n = !1; null != (t = e.next()); ) {
                if (!r) {
                  if ('/' == t && !n) return;
                  '[' == t ? (n = !0) : n && ']' == t && (n = !1);
                }
                r = !r && '\\' == t;
              }
            })(e),
            e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
            x('regexp', 'string-2'))
          : (e.eat('='), x('operator', 'operator', e.current()));
      if ('`' == r) return (t.tokenize = j)(e, t);
      if ('#' == r && '!' == e.peek()) return e.skipToEnd(), x('meta', 'meta');
      if ('#' == r && e.eatWhile(f)) return x('variable', 'property');
      if (('<' == r && e.match('!--')) || ('-' == r && e.match('->') && !/\S/.test(e.string.slice(0, e.start)))) return e.skipToEnd(), x('comment', 'comment');
      if (w.test(r))
        return (
          ('>' == r && t.lexical && '>' == t.lexical.type) || (e.eat('=') ? ('!' != r && '=' != r) || e.eat('=') : /[<>*+\-|&?]/.test(r) && (e.eat(r), '>' == r && e.eat(r))),
          '?' == r && e.eat('.') ? x('.') : x('operator', 'operator', e.current())
        );
      if (f.test(r)) {
        e.eatWhile(f);
        var n = e.current();
        if ('.' != t.lastType) {
          if (m.propertyIsEnumerable(n)) {
            var i = m[n];
            return x(i.type, i.style, n);
          }
          if ('async' == n && e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, !1)) return x('async', 'keyword', n);
        }
        return x('variable', 'variable', n);
      }
    }
    function g(e, t) {
      for (var r, n = !1; (r = e.next()); ) {
        if ('/' == r && n) {
          t.tokenize = h;
          break;
        }
        n = '*' == r;
      }
      return x('comment', 'comment');
    }
    function j(e, t) {
      for (var r, n = !1; null != (r = e.next()); ) {
        if (!n && ('`' == r || ('$' == r && e.eat('{')))) {
          t.tokenize = h;
          break;
        }
        n = !n && '\\' == r;
      }
      return x('quasi', 'string-2', e.current());
    }
    var M = '([{}])';
    function A(e, t) {
      t.fatArrowAt && (t.fatArrowAt = null);
      var r,
        n = e.string.indexOf('=>', e.start);
      if (!(n < 0)) {
        !u || ((r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start, n))) && (n = r.index));
        for (var a = 0, i = !1, o = n - 1; 0 <= o; --o) {
          var c = e.string.charAt(o),
            s = M.indexOf(c);
          if (0 <= s && s < 3) {
            if (!a) {
              ++o;
              break;
            }
            if (0 == --a) {
              '(' == c && (i = !0);
              break;
            }
          } else if (3 <= s && s < 6) ++a;
          else if (f.test(c)) i = !0;
          else if (/["'\/`]/.test(c))
            for (; ; --o) {
              if (0 == o) return;
              if (e.string.charAt(o - 1) == c && '\\' != e.string.charAt(o - 2)) {
                o--;
                break;
              }
            }
          else if (i && !a) {
            ++o;
            break;
          }
        }
        i && !a && (t.fatArrowAt = o);
      }
    }
    var V = { atom: !0, number: !0, variable: !0, string: !0, regexp: !0, this: !0, 'jsonld-keyword': !0 };
    function E(e, t, r, n, a, i) {
      (this.indented = e), (this.column = t), (this.type = r), (this.prev = a), (this.info = i), null != n && (this.align = n);
    }
    function z(e, t) {
      for (var r = e.localVars; r; r = r.next) if (r.name == t) return 1;
      for (var n = e.context; n; n = n.prev) for (r = n.vars; r; r = r.next) if (r.name == t) return 1;
    }
    var I = { state: null, column: null, marked: null, cc: null };
    function T() {
      for (var e = arguments.length - 1; 0 <= e; e--) I.cc.push(arguments[e]);
    }
    function $() {
      return T.apply(null, arguments), !0;
    }
    function C(e, t) {
      for (var r = t; r; r = r.next) if (r.name == e) return 1;
    }
    function _(e) {
      var t = I.state;
      if (((I.marked = 'def'), t.context))
        if ('var' == t.lexical.info && t.context && t.context.block) {
          var r = (function e(t, r) {
            {
              if (r) {
                if (r.block) {
                  var n = e(t, r.prev);
                  return n ? (n == r.prev ? r : new q(n, r.vars, !0)) : null;
                }
                return C(t, r.vars) ? r : new q(r.prev, new S(t, r.vars), !1);
              }
              return null;
            }
          })(e, t.context);
          if (null != r) return void (t.context = r);
        } else if (!C(e, t.localVars)) return void (t.localVars = new S(e, t.localVars));
      l.globalVars && !C(e, t.globalVars) && (t.globalVars = new S(e, t.globalVars));
    }
    function O(e) {
      return 'public' == e || 'private' == e || 'protected' == e || 'abstract' == e || 'readonly' == e;
    }
    function q(e, t, r) {
      (this.prev = e), (this.vars = t), (this.block = r);
    }
    function S(e, t) {
      (this.name = e), (this.next = t);
    }
    var P = new S('this', new S('arguments', null));
    function N() {
      (I.state.context = new q(I.state.context, I.state.localVars, !1)), (I.state.localVars = P);
    }
    function U() {
      (I.state.context = new q(I.state.context, I.state.localVars, !0)), (I.state.localVars = null);
    }
    function W() {
      (I.state.localVars = I.state.context.vars), (I.state.context = I.state.context.prev);
    }
    function B(n, a) {
      function e() {
        var e = I.state,
          t = e.indented;
        if ('stat' == e.lexical.type) t = e.lexical.indented;
        else for (var r = e.lexical; r && ')' == r.type && r.align; r = r.prev) t = r.indented;
        e.lexical = new E(t, I.stream.column(), n, null, e.lexical, a);
      }
      return (e.lex = !0), e;
    }
    function F() {
      var e = I.state;
      e.lexical.prev && (')' == e.lexical.type && (e.indented = e.lexical.indented), (e.lexical = e.lexical.prev));
    }
    function H(r) {
      return function e(t) {
        return t == r ? $() : ';' == r || '}' == t || ')' == t || ']' == t ? T() : $(e);
      };
    }
    function D(e, t) {
      return 'var' == e
        ? $(B('vardef', t), Ae, H(';'), F)
        : 'keyword a' == e
        ? $(B('form'), L, D, F)
        : 'keyword b' == e
        ? $(B('form'), D, F)
        : 'keyword d' == e
        ? I.stream.match(/^\s*$/, !1)
          ? $()
          : $(B('stat'), R, H(';'), F)
        : 'debugger' == e
        ? $(H(';'))
        : '{' == e
        ? $(B('}'), U, de, F, W)
        : ';' == e
        ? $()
        : 'if' == e
        ? ('else' == I.state.lexical.info && I.state.cc[I.state.cc.length - 1] == F && I.state.cc.pop()(), $(B('form'), L, D, F, $e))
        : 'function' == e
        ? $(qe)
        : 'for' == e
        ? $(B('form'), Ce, D, F)
        : 'class' == e || (u && 'interface' == t)
        ? ((I.marked = 'keyword'), $(B('form', 'class' == e ? e : t), We, F))
        : 'variable' == e
        ? u && 'declare' == t
          ? ((I.marked = 'keyword'), $(D))
          : u && ('module' == t || 'enum' == t || 'type' == t) && I.stream.match(/^\s*\w/, !1)
          ? ((I.marked = 'keyword'), 'enum' == t ? $(Ye) : 'type' == t ? $(Pe, H('operator'), ye, H(';')) : $(B('form'), Ve, H('{'), B('}'), de, F, F))
          : u && 'namespace' == t
          ? ((I.marked = 'keyword'), $(B('form'), J, D, F))
          : u && 'abstract' == t
          ? ((I.marked = 'keyword'), $(D))
          : $(B('stat'), ie)
        : 'switch' == e
        ? $(B('form'), L, H('{'), B('}', 'switch'), U, de, F, F, W)
        : 'case' == e
        ? $(J, H(':'))
        : 'default' == e
        ? $(H(':'))
        : 'catch' == e
        ? $(B('form'), N, G, D, F, W)
        : 'export' == e
        ? $(B('stat'), De, F)
        : 'import' == e
        ? $(B('stat'), Je, F)
        : 'async' == e
        ? $(D)
        : '@' == t
        ? $(J, D)
        : T(B('stat'), J, H(';'), F);
    }
    function G(e) {
      if ('(' == e) return $(Ne, H(')'));
    }
    function J(e, t) {
      return Q(e, t, !1);
    }
    function K(e, t) {
      return Q(e, t, !0);
    }
    function L(e) {
      return '(' != e ? T() : $(B(')'), R, H(')'), F);
    }
    function Q(e, t, r) {
      if (I.state.fatArrowAt == I.stream.start) {
        var n = r ? re : te;
        if ('(' == e) return $(N, B(')'), fe(Ne, ')'), F, H('=>'), n, W);
        if ('variable' == e) return T(N, Ve, H('=>'), n, W);
      }
      var a,
        i = r ? Y : X;
      return V.hasOwnProperty(e)
        ? $(i)
        : 'function' == e
        ? $(qe, i)
        : 'class' == e || (u && 'interface' == t)
        ? ((I.marked = 'keyword'), $(B('form'), Ue, F))
        : 'keyword c' == e || 'async' == e
        ? $(r ? K : J)
        : '(' == e
        ? $(B(')'), R, H(')'), F, i)
        : 'operator' == e || 'spread' == e
        ? $(r ? K : J)
        : '[' == e
        ? $(B(']'), Xe, F, i)
        : '{' == e
        ? le(ce, '}', null, i)
        : 'quasi' == e
        ? T(Z, i)
        : 'new' == e
        ? $(
            ((a = r),
            function(e) {
              return '.' == e ? $(a ? ae : ne) : 'variable' == e && u ? $(ge, a ? Y : X) : T(a ? K : J);
            })
          )
        : 'import' == e
        ? $(J)
        : $();
    }
    function R(e) {
      return e.match(/[;\}\)\],]/) ? T() : T(J);
    }
    function X(e, t) {
      return ',' == e ? $(R) : Y(e, t, !1);
    }
    function Y(e, t, r) {
      var n = 0 == r ? X : Y,
        a = 0 == r ? J : K;
      return '=>' == e
        ? $(N, r ? re : te, W)
        : 'operator' == e
        ? /\+\+|--/.test(t) || (u && '!' == t)
          ? $(n)
          : u && '<' == t && I.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
          ? $(B('>'), fe(ye, '>'), F, n)
          : '?' == t
          ? $(J, H(':'), a)
          : $(a)
        : 'quasi' == e
        ? T(Z, n)
        : ';' != e
        ? '(' == e
          ? le(K, ')', 'call', n)
          : '.' == e
          ? $(oe, n)
          : '[' == e
          ? $(B(']'), R, H(']'), F, n)
          : u && 'as' == t
          ? ((I.marked = 'keyword'), $(ye, n))
          : 'regexp' == e
          ? ((I.state.lastType = I.marked = 'operator'), I.stream.backUp(I.stream.pos - I.stream.start - 1), $(a))
          : void 0
        : void 0;
    }
    function Z(e, t) {
      return 'quasi' != e ? T() : '${' != t.slice(t.length - 2) ? $(Z) : $(J, ee);
    }
    function ee(e) {
      if ('}' == e) return (I.marked = 'string-2'), (I.state.tokenize = j), $(Z);
    }
    function te(e) {
      return A(I.stream, I.state), T('{' == e ? D : J);
    }
    function re(e) {
      return A(I.stream, I.state), T('{' == e ? D : K);
    }
    function ne(e, t) {
      if ('target' == t) return (I.marked = 'keyword'), $(X);
    }
    function ae(e, t) {
      if ('target' == t) return (I.marked = 'keyword'), $(Y);
    }
    function ie(e) {
      return ':' == e ? $(F, D) : T(X, H(';'), F);
    }
    function oe(e) {
      if ('variable' == e) return (I.marked = 'property'), $();
    }
    function ce(e, t) {
      if ('async' == e) return (I.marked = 'property'), $(ce);
      if ('variable' == e || 'keyword' == I.style) {
        return ((I.marked = 'property'), 'get' == t || 'set' == t)
          ? $(se)
          : (u && I.state.fatArrowAt == I.stream.start && (r = I.stream.match(/^\s*:\s*/, !1)) && (I.state.fatArrowAt = I.stream.pos + r[0].length), $(ue));
        var r;
      } else {
        if ('number' == e || 'string' == e) return (I.marked = c ? 'property' : I.style + ' property'), $(ue);
        if ('jsonld-keyword' == e) return $(ue);
        if (u && O(t)) return (I.marked = 'keyword'), $(ce);
        if ('[' == e) return $(J, pe, H(']'), ue);
        if ('spread' == e) return $(K, ue);
        if ('*' == t) return (I.marked = 'keyword'), $(ce);
        if (':' == e) return T(ue);
      }
    }
    function se(e) {
      return 'variable' != e ? T(ue) : ((I.marked = 'property'), $(qe));
    }
    function ue(e) {
      return ':' == e ? $(K) : '(' == e ? T(qe) : void 0;
    }
    function fe(n, a, i) {
      function o(e, t) {
        if (i ? -1 < i.indexOf(e) : ',' == e) {
          var r = I.state.lexical;
          return (
            'call' == r.info && (r.pos = (r.pos || 0) + 1),
            $(function(e, t) {
              return e == a || t == a ? T() : T(n);
            }, o)
          );
        }
        return e == a || t == a ? $() : i && -1 < i.indexOf(';') ? T(n) : $(H(a));
      }
      return function(e, t) {
        return e == a || t == a ? $() : T(n, o);
      };
    }
    function le(e, t, r) {
      for (var n = 3; n < arguments.length; n++) I.cc.push(arguments[n]);
      return $(B(t, r), fe(e, t), F);
    }
    function de(e) {
      return '}' == e ? $() : T(D, de);
    }
    function pe(e, t) {
      if (u) {
        if (':' == e) return $(ye);
        if ('?' == t) return $(pe);
      }
    }
    function me(e, t) {
      if (u && (':' == e || 'in' == t)) return $(ye);
    }
    function ve(e) {
      if (u && ':' == e) return I.stream.match(/^\s*\w+\s+is\b/, !1) ? $(J, ke, ye) : $(ye);
    }
    function ke(e, t) {
      if ('is' == t) return (I.marked = 'keyword'), $();
    }
    function ye(e, t) {
      return 'keyof' == t || 'typeof' == t || 'infer' == t
        ? ((I.marked = 'keyword'), $('typeof' == t ? K : ye))
        : 'variable' == e || 'void' == t
        ? ((I.marked = 'type'), $(he))
        : '|' == t || '&' == t
        ? $(ye)
        : 'string' == e || 'number' == e || 'atom' == e
        ? $(he)
        : '[' == e
        ? $(B(']'), fe(ye, ']', ','), F, he)
        : '{' == e
        ? $(B('}'), fe(be, '}', ',;'), F, he)
        : '(' == e
        ? $(fe(xe, ')'), we, he)
        : '<' == e
        ? $(fe(ye, '>'), ye)
        : void 0;
    }
    function we(e) {
      if ('=>' == e) return $(ye);
    }
    function be(e, t) {
      return 'variable' == e || 'keyword' == I.style
        ? ((I.marked = 'property'), $(be))
        : '?' == t || 'number' == e || 'string' == e
        ? $(be)
        : ':' == e
        ? $(ye)
        : '[' == e
        ? $(H('variable'), me, H(']'), be)
        : '(' == e
        ? T(Se, be)
        : void 0;
    }
    function xe(e, t) {
      return ('variable' == e && I.stream.match(/^\s*[?:]/, !1)) || '?' == t ? $(xe) : ':' == e ? $(ye) : 'spread' == e ? $(xe) : T(ye);
    }
    function he(e, t) {
      return '<' == t
        ? $(B('>'), fe(ye, '>'), F, he)
        : '|' == t || '.' == e || '&' == t
        ? $(ye)
        : '[' == e
        ? $(ye, H(']'), he)
        : 'extends' == t || 'implements' == t
        ? ((I.marked = 'keyword'), $(ye))
        : '?' == t
        ? $(ye, H(':'), ye)
        : void 0;
    }
    function ge(e, t) {
      if ('<' == t) return $(B('>'), fe(ye, '>'), F, he);
    }
    function je() {
      return T(ye, Me);
    }
    function Me(e, t) {
      if ('=' == t) return $(ye);
    }
    function Ae(e, t) {
      return 'enum' == t ? ((I.marked = 'keyword'), $(Ye)) : T(Ve, pe, Ie, Te);
    }
    function Ve(e, t) {
      return u && O(t) ? ((I.marked = 'keyword'), $(Ve)) : 'variable' == e ? (_(t), $()) : 'spread' == e ? $(Ve) : '[' == e ? le(ze, ']') : '{' == e ? le(Ee, '}') : void 0;
    }
    function Ee(e, t) {
      return 'variable' != e || I.stream.match(/^\s*:/, !1)
        ? ('variable' == e && (I.marked = 'property'), 'spread' == e ? $(Ve) : '}' == e ? T() : '[' == e ? $(J, H(']'), H(':'), Ee) : $(H(':'), Ve, Ie))
        : (_(t), $(Ie));
    }
    function ze() {
      return T(Ve, Ie);
    }
    function Ie(e, t) {
      if ('=' == t) return $(K);
    }
    function Te(e) {
      if (',' == e) return $(Ae);
    }
    function $e(e, t) {
      if ('keyword b' == e && 'else' == t) return $(B('form', 'else'), D, F);
    }
    function Ce(e, t) {
      return 'await' == t ? $(Ce) : '(' == e ? $(B(')'), _e, F) : void 0;
    }
    function _e(e) {
      return 'var' == e ? $(Ae, Oe) : ('variable' == e ? $ : T)(Oe);
    }
    function Oe(e, t) {
      return ')' == e ? $() : ';' == e ? $(Oe) : 'in' == t || 'of' == t ? ((I.marked = 'keyword'), $(J, Oe)) : T(J, Oe);
    }
    function qe(e, t) {
      return '*' == t
        ? ((I.marked = 'keyword'), $(qe))
        : 'variable' == e
        ? (_(t), $(qe))
        : '(' == e
        ? $(N, B(')'), fe(Ne, ')'), F, ve, D, W)
        : u && '<' == t
        ? $(B('>'), fe(je, '>'), F, qe)
        : void 0;
    }
    function Se(e, t) {
      return '*' == t
        ? ((I.marked = 'keyword'), $(Se))
        : 'variable' == e
        ? (_(t), $(Se))
        : '(' == e
        ? $(N, B(')'), fe(Ne, ')'), F, ve, W)
        : u && '<' == t
        ? $(B('>'), fe(je, '>'), F, Se)
        : void 0;
    }
    function Pe(e, t) {
      return 'keyword' == e || 'variable' == e ? ((I.marked = 'type'), $(Pe)) : '<' == t ? $(B('>'), fe(je, '>'), F) : void 0;
    }
    function Ne(e, t) {
      return '@' == t && $(J, Ne), 'spread' == e ? $(Ne) : u && O(t) ? ((I.marked = 'keyword'), $(Ne)) : u && 'this' == e ? $(pe, Ie) : T(Ve, pe, Ie);
    }
    function Ue(e, t) {
      return ('variable' == e ? We : Be)(e, t);
    }
    function We(e, t) {
      if ('variable' == e) return _(t), $(Be);
    }
    function Be(e, t) {
      return '<' == t
        ? $(B('>'), fe(je, '>'), F, Be)
        : 'extends' == t || 'implements' == t || (u && ',' == e)
        ? ('implements' == t && (I.marked = 'keyword'), $(u ? ye : J, Be))
        : '{' == e
        ? $(B('}'), Fe, F)
        : void 0;
    }
    function Fe(e, t) {
      return 'async' == e || ('variable' == e && ('static' == t || 'get' == t || 'set' == t || (u && O(t))) && I.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
        ? ((I.marked = 'keyword'), $(Fe))
        : 'variable' == e || 'keyword' == I.style
        ? ((I.marked = 'property'), $(He, Fe))
        : 'number' == e || 'string' == e
        ? $(He, Fe)
        : '[' == e
        ? $(J, pe, H(']'), He, Fe)
        : '*' == t
        ? ((I.marked = 'keyword'), $(Fe))
        : u && '(' == e
        ? T(Se, Fe)
        : ';' == e || ',' == e
        ? $(Fe)
        : '}' == e
        ? $()
        : '@' == t
        ? $(J, Fe)
        : void 0;
    }
    function He(e, t) {
      if ('?' == t) return $(He);
      if (':' == e) return $(ye, Ie);
      if ('=' == t) return $(K);
      var r = I.state.lexical.prev;
      return T(r && 'interface' == r.info ? Se : qe);
    }
    function De(e, t) {
      return '*' == t ? ((I.marked = 'keyword'), $(Re, H(';'))) : 'default' == t ? ((I.marked = 'keyword'), $(J, H(';'))) : '{' == e ? $(fe(Ge, '}'), Re, H(';')) : T(D);
    }
    function Ge(e, t) {
      return 'as' == t ? ((I.marked = 'keyword'), $(H('variable'))) : 'variable' == e ? T(K, Ge) : void 0;
    }
    function Je(e) {
      return 'string' == e ? $() : '(' == e ? T(J) : T(Ke, Le, Re);
    }
    function Ke(e, t) {
      return '{' == e ? le(Ke, '}') : ('variable' == e && _(t), '*' == t && (I.marked = 'keyword'), $(Qe));
    }
    function Le(e) {
      if (',' == e) return $(Ke, Le);
    }
    function Qe(e, t) {
      if ('as' == t) return (I.marked = 'keyword'), $(Ke);
    }
    function Re(e, t) {
      if ('from' == t) return (I.marked = 'keyword'), $(J);
    }
    function Xe(e) {
      return ']' == e ? $() : T(fe(K, ']'));
    }
    function Ye() {
      return T(B('form'), Ve, H('{'), B('}'), fe(Ze, '}'), F, F);
    }
    function Ze() {
      return T(Ve, Ie);
    }
    function et(e, t, r) {
      return (
        (t.tokenize == h && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)) ||
        ('quasi' == t.lastType && /\{\s*$/.test(e.string.slice(0, e.pos - (r || 0))))
      );
    }
    return (
      (F.lex = W.lex = !0),
      {
        startState: function(e) {
          var t = {
            tokenize: h,
            lastType: 'sof',
            cc: [],
            lexical: new E((e || 0) - d, 0, 'block', !1),
            localVars: l.localVars,
            context: l.localVars && new q(null, null, !1),
            indented: e || 0,
          };
          return l.globalVars && 'object' == typeof l.globalVars && (t.globalVars = l.globalVars), t;
        },
        token: function(e, t) {
          if ((e.sol() && (t.lexical.hasOwnProperty('align') || (t.lexical.align = !1), (t.indented = e.indentation()), A(e, t)), t.tokenize != g && e.eatSpace())) return null;
          var r = t.tokenize(e, t);
          return 'comment' == k
            ? r
            : ((t.lastType = 'operator' != k || ('++' != y && '--' != y) ? k : 'incdec'),
              (function(e, t, r, n, a) {
                var i = e.cc;
                for (I.state = e, I.stream = a, I.marked = null, I.cc = i, I.style = t, e.lexical.hasOwnProperty('align') || (e.lexical.align = !0); ; ) {
                  if ((i.length ? i.pop() : s ? J : D)(r, n)) {
                    for (; i.length && i[i.length - 1].lex; ) i.pop()();
                    return I.marked ? I.marked : 'variable' == r && z(e, n) ? 'variable-2' : t;
                  }
                }
              })(t, r, k, y, e));
        },
        indent: function(e, t) {
          if (e.tokenize == g) return tt.Pass;
          if (e.tokenize != h) return 0;
          var r,
            n = t && t.charAt(0),
            a = e.lexical;
          if (!/^\s*else\b/.test(t))
            for (var i = e.cc.length - 1; 0 <= i; --i) {
              var o = e.cc[i];
              if (o == F) a = a.prev;
              else if (o != $e) break;
            }
          for (; ('stat' == a.type || 'form' == a.type) && ('}' == n || ((r = e.cc[e.cc.length - 1]) && (r == X || r == Y) && !/^[,\.=+\-*:?[\(]/.test(t))); ) a = a.prev;
          p && ')' == a.type && 'stat' == a.prev.type && (a = a.prev);
          var c,
            s,
            u = a.type,
            f = n == u;
          return 'vardef' == u
            ? a.indented + ('operator' == e.lastType || ',' == e.lastType ? a.info.length + 1 : 0)
            : 'form' == u && '{' == n
            ? a.indented
            : 'form' == u
            ? a.indented + d
            : 'stat' == u
            ? a.indented + ((s = t), 'operator' == (c = e).lastType || ',' == c.lastType || w.test(s.charAt(0)) || /[,.]/.test(s.charAt(0)) ? p || d : 0)
            : 'switch' != a.info || f || 0 == l.doubleIndentSwitch
            ? a.align
              ? a.column + (f ? 0 : 1)
              : a.indented + (f ? 0 : d)
            : a.indented + (/^(?:case|default)\b/.test(t) ? d : 2 * d);
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: s ? null : '/*',
        blockCommentEnd: s ? null : '*/',
        blockCommentContinue: s ? null : ' * ',
        lineComment: s ? null : '//',
        fold: 'brace',
        closeBrackets: '()[]{}\'\'""``',
        helperType: s ? 'json' : 'javascript',
        jsonldMode: c,
        jsonMode: s,
        expressionAllowed: et,
        skipExpression: function(e) {
          var t = e.cc[e.cc.length - 1];
          (t != J && t != K) || e.cc.pop();
        },
      }
    );
  }),
    tt.registerHelper('wordChars', 'javascript', /[\w$]/),
    tt.defineMIME('text/javascript', 'javascript'),
    tt.defineMIME('text/ecmascript', 'javascript'),
    tt.defineMIME('application/javascript', 'javascript'),
    tt.defineMIME('application/x-javascript', 'javascript'),
    tt.defineMIME('application/ecmascript', 'javascript'),
    tt.defineMIME('application/json', { name: 'javascript', json: !0 }),
    tt.defineMIME('application/x-json', { name: 'javascript', json: !0 }),
    tt.defineMIME('application/ld+json', { name: 'javascript', jsonld: !0 }),
    tt.defineMIME('text/typescript', { name: 'javascript', typescript: !0 }),
    tt.defineMIME('application/typescript', { name: 'javascript', typescript: !0 });
});
