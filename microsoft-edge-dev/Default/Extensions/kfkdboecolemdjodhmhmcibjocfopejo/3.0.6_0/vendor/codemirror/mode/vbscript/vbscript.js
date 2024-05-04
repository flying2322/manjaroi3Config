!(function(e) {
  'object' == typeof exports && 'object' == typeof module
    ? e(require('../../lib/codemirror'))
    : 'function' == typeof define && define.amd
    ? define(['../../lib/codemirror'], e)
    : e(CodeMirror);
})(function(e) {
  'use strict';
  e.defineMode('vbscript', function(n, o) {
    var c = 'error';
    function e(e) {
      return new RegExp('^((' + e.join(')|(') + '))\\b', 'i');
    }
    var b = new RegExp('^[\\+\\-\\*/&\\\\\\^<>=]'),
      s = new RegExp('^((<>)|(<=)|(>=))'),
      l = new RegExp('^[\\.,]'),
      u = new RegExp('^[\\(\\)]'),
      d = new RegExp('^[A-Za-z][_A-Za-z0-9]*'),
      v = e(['and', 'or', 'not', 'xor', 'is', 'mod', 'eqv', 'imp']),
      t = ['WScript', 'err', 'debug', 'RegExp'],
      m = ['clear', 'execute', 'raise', 'replace', 'test', 'write', 'writeline', 'close', 'open', 'state', 'eof', 'update', 'addnew', 'end', 'createobject', 'quit'].concat([
        'description',
        'firstindex',
        'global',
        'helpcontext',
        'helpfile',
        'ignorecase',
        'length',
        'number',
        'pattern',
        'source',
        'value',
        'count',
      ]),
      t = t.concat([
        'vbBlack',
        'vbRed',
        'vbGreen',
        'vbYellow',
        'vbBlue',
        'vbMagenta',
        'vbCyan',
        'vbWhite',
        'vbBinaryCompare',
        'vbTextCompare',
        'vbSunday',
        'vbMonday',
        'vbTuesday',
        'vbWednesday',
        'vbThursday',
        'vbFriday',
        'vbSaturday',
        'vbUseSystemDayOfWeek',
        'vbFirstJan1',
        'vbFirstFourDays',
        'vbFirstFullWeek',
        'vbGeneralDate',
        'vbLongDate',
        'vbShortDate',
        'vbLongTime',
        'vbShortTime',
        'vbObjectError',
        'vbOKOnly',
        'vbOKCancel',
        'vbAbortRetryIgnore',
        'vbYesNoCancel',
        'vbYesNo',
        'vbRetryCancel',
        'vbCritical',
        'vbQuestion',
        'vbExclamation',
        'vbInformation',
        'vbDefaultButton1',
        'vbDefaultButton2',
        'vbDefaultButton3',
        'vbDefaultButton4',
        'vbApplicationModal',
        'vbSystemModal',
        'vbOK',
        'vbCancel',
        'vbAbort',
        'vbRetry',
        'vbIgnore',
        'vbYes',
        'vbNo',
        'vbCr',
        'VbCrLf',
        'vbFormFeed',
        'vbLf',
        'vbNewLine',
        'vbNullChar',
        'vbNullString',
        'vbTab',
        'vbVerticalTab',
        'vbUseDefault',
        'vbTrue',
        'vbFalse',
        'vbEmpty',
        'vbNull',
        'vbInteger',
        'vbLong',
        'vbSingle',
        'vbDouble',
        'vbCurrency',
        'vbDate',
        'vbString',
        'vbObject',
        'vbError',
        'vbBoolean',
        'vbVariant',
        'vbDataObject',
        'vbDecimal',
        'vbByte',
        'vbArray',
      ]);
    n.isASP &&
      ((t = t.concat(['server', 'response', 'request', 'session', 'application'])),
      (m = m.concat(
        [
          'addheader',
          'appendtolog',
          'binarywrite',
          'end',
          'flush',
          'redirect',
          'binaryread',
          'remove',
          'removeall',
          'lock',
          'unlock',
          'abandon',
          'getlasterror',
          'htmlencode',
          'mappath',
          'transfer',
          'urlencode',
        ],
        [
          'buffer',
          'cachecontrol',
          'charset',
          'contenttype',
          'expires',
          'expiresabsolute',
          'isclientconnected',
          'pics',
          'status',
          'clientcertificate',
          'cookies',
          'form',
          'querystring',
          'servervariables',
          'totalbytes',
          'contents',
          'staticobjects',
          'codepage',
          'lcid',
          'sessionid',
          'timeout',
          'scripttimeout',
        ]
      )));
    var p = e([
        'dim',
        'redim',
        'then',
        'until',
        'randomize',
        'byval',
        'byref',
        'new',
        'property',
        'exit',
        'in',
        'const',
        'private',
        'public',
        'get',
        'set',
        'let',
        'stop',
        'on error resume next',
        'on error goto 0',
        'option explicit',
        'call',
        'me',
      ]),
      f = e(['true', 'false', 'nothing', 'empty', 'null']),
      h = e([
        'abs',
        'array',
        'asc',
        'atn',
        'cbool',
        'cbyte',
        'ccur',
        'cdate',
        'cdbl',
        'chr',
        'cint',
        'clng',
        'cos',
        'csng',
        'cstr',
        'date',
        'dateadd',
        'datediff',
        'datepart',
        'dateserial',
        'datevalue',
        'day',
        'escape',
        'eval',
        'execute',
        'exp',
        'filter',
        'formatcurrency',
        'formatdatetime',
        'formatnumber',
        'formatpercent',
        'getlocale',
        'getobject',
        'getref',
        'hex',
        'hour',
        'inputbox',
        'instr',
        'instrrev',
        'int',
        'fix',
        'isarray',
        'isdate',
        'isempty',
        'isnull',
        'isnumeric',
        'isobject',
        'join',
        'lbound',
        'lcase',
        'left',
        'len',
        'loadpicture',
        'log',
        'ltrim',
        'rtrim',
        'trim',
        'maths',
        'mid',
        'minute',
        'month',
        'monthname',
        'msgbox',
        'now',
        'oct',
        'replace',
        'rgb',
        'right',
        'rnd',
        'round',
        'scriptengine',
        'scriptenginebuildversion',
        'scriptenginemajorversion',
        'scriptengineminorversion',
        'second',
        'setlocale',
        'sgn',
        'sin',
        'space',
        'split',
        'sqr',
        'strcomp',
        'string',
        'strreverse',
        'tan',
        'time',
        'timer',
        'timeserial',
        'timevalue',
        'typename',
        'ubound',
        'ucase',
        'unescape',
        'vartype',
        'weekday',
        'weekdayname',
        'year',
      ]),
      y = e(t),
      g = e(m),
      x = '"',
      k = e(['class', 'sub', 'select', 'while', 'if', 'function', 'property', 'with', 'for']),
      w = e(['else', 'elseif', 'case']),
      I = e(['next', 'loop', 'wend']),
      C = e(['end']),
      L = e(['do']),
      E = e(['on error resume next', 'exit']),
      D = e(['rem']);
    function S(e, t) {
      t.currentIndent++;
    }
    function T(e, t) {
      t.currentIndent--;
    }
    function j(e, t) {
      if (e.eatSpace()) return 'space';
      var r, n;
      if ("'" === e.peek()) return e.skipToEnd(), 'comment';
      if (e.match(D)) return e.skipToEnd(), 'comment';
      if (e.match(/^((&H)|(&O))?[0-9\.]/i, !1) && !e.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i, !1)) {
        var a = !1;
        if (((e.match(/^\d*\.\d+/i) || e.match(/^\d+\.\d*/) || e.match(/^\.\d+/)) && (a = !0), a)) return e.eat(/J/i), 'number';
        var i = !1;
        if ((e.match(/^&H[0-9a-f]+/i) || e.match(/^&O[0-7]+/i) ? (i = !0) : e.match(/^[1-9]\d*F?/) ? (e.eat(/J/i), (i = !0)) : e.match(/^0(?![\dx])/i) && (i = !0), i))
          return e.eat(/L/i), 'number';
      }
      return e.match(x)
        ? ((t.tokenize =
            ((r = e.current()),
            (n = 1 == r.length),
            function(e, t) {
              for (; !e.eol(); ) {
                if ((e.eatWhile(/[^'"]/), e.match(r))) return (t.tokenize = j), 'string';
                e.eat(/['"]/);
              }
              if (n) {
                if (o.singleLineStringErrors) return c;
                t.tokenize = j;
              }
              return 'string';
            })),
          t.tokenize(e, t))
        : e.match(s) || e.match(b) || e.match(v)
        ? 'operator'
        : e.match(l)
        ? null
        : e.match(u)
        ? 'bracket'
        : e.match(E)
        ? ((t.doInCurrentLine = !0), 'keyword')
        : e.match(L)
        ? (S(0, t), (t.doInCurrentLine = !0), 'keyword')
        : e.match(k)
        ? (t.doInCurrentLine ? (t.doInCurrentLine = !1) : S(0, t), 'keyword')
        : e.match(w)
        ? 'keyword'
        : e.match(C)
        ? (T(0, t), T(0, t), 'keyword')
        : e.match(I)
        ? (t.doInCurrentLine ? (t.doInCurrentLine = !1) : T(0, t), 'keyword')
        : e.match(p)
        ? 'keyword'
        : e.match(f)
        ? 'atom'
        : e.match(g)
        ? 'variable-2'
        : e.match(h)
        ? 'builtin'
        : e.match(y)
        ? 'variable-2'
        : e.match(d)
        ? 'variable'
        : (e.next(), c);
    }
    return {
      electricChars: 'dDpPtTfFeE ',
      startState: function() {
        return { tokenize: j, lastToken: null, currentIndent: 0, nextLineIndent: 0, doInCurrentLine: !1, ignoreKeyword: !1 };
      },
      token: function(e, t) {
        e.sol() && ((t.currentIndent += t.nextLineIndent), (t.nextLineIndent = 0), (t.doInCurrentLine = 0));
        var r,
          n,
          a,
          i,
          o =
            ((r = e),
            (a = (n = t).tokenize(r, n)),
            '.' === (i = r.current())
              ? ((a = n.tokenize(r, n)),
                (i = r.current()),
                !a || ('variable' !== a.substr(0, 8) && 'builtin' !== a && 'keyword' !== a)
                  ? c
                  : (('builtin' !== a && 'keyword' !== a) || (a = 'variable'), -1 < m.indexOf(i.substr(1)) && (a = 'variable-2'), a))
              : a);
        return (t.lastToken = { style: o, content: e.current() }), 'space' === o && (o = null), o;
      },
      indent: function(e, t) {
        var r = t.replace(/^\s+|\s+$/g, '');
        return r.match(I) || r.match(C) || r.match(w) ? n.indentUnit * (e.currentIndent - 1) : e.currentIndent < 0 ? 0 : e.currentIndent * n.indentUnit;
      },
    };
  }),
    e.defineMIME('text/vbscript', 'vbscript');
});
