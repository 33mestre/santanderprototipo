/*!
 * Contem alteracoes para o projeto Vitplay - evita evento no slideshow
 * Draggable 3.7.0
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t(((e = e || self).window = e.window || {}));
})(this, function (e) {
  "use strict";
  function v(e, t) {
    if (e.parentNode && (h || M(e))) {
      var n = k(e),
        o = n
          ? n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
          : "http://www.w3.org/1999/xhtml",
        r = n ? (t ? "rect" : "g") : "div",
        i = 2 !== t ? 0 : 100,
        a = 3 === t ? 100 : 0,
        l =
          "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
        s = h.createElementNS
          ? h.createElementNS(o.replace(/^https/, "http"), r)
          : h.createElement(r);
      return (
        t &&
        (n
          ? ((g = g || v(e)),
            s.setAttribute("width", 0.01),
            s.setAttribute("height", 0.01),
            s.setAttribute("transform", "translate(" + i + "," + a + ")"),
            g.appendChild(s))
          : (f || ((f = v(e)).style.cssText = l),
            (s.style.cssText =
              l +
              "width:0.1px;height:0.1px;top:" +
              a +
              "px;left:" +
              i +
              "px"),
            f.appendChild(s))),
        s
      );
    }
    throw "Need document and parent.";
  }
  function y(e, t, n, o, r, i, a) {
    return (e.a = t), (e.b = n), (e.c = o), (e.d = r), (e.e = i), (e.f = a), e;
  }
  var h,
    u,
    r,
    i,
    f,
    g,
    x,
    m,
    t,
    w = "transform",
    b = w + "Origin",
    M = function _setDoc(e) {
      var t = e.ownerDocument || e;
      !(w in e.style) &&
        "msTransform" in e.style &&
        (b = (w = "msTransform") + "Origin");
      for (; t.parentNode && (t = t.parentNode););
      if (((u = window), (x = new fe()), t)) {
        (r = (h = t).documentElement), (i = t.body);
        var n = t.createElement("div"),
          o = t.createElement("div");
        i.appendChild(n),
          n.appendChild(o),
          (n.style.position = "static"),
          (n.style[w] = "translate3d(0,0,1px)"),
          (m = o.offsetParent !== n),
          i.removeChild(n);
      }
      return t;
    },
    D = function _forceNonZeroScale(e) {
      for (var t, n; e && e !== i;)
        (n = e._gsap) && n.uncache && n.get(e, "x"),
          n &&
          !n.scaleX &&
          !n.scaleY &&
          n.renderTransform &&
          ((n.scaleX = n.scaleY = 1e-4),
            n.renderTransform(1, n),
            t ? t.push(n) : (t = [n])),
          (e = e.parentNode);
      return t;
    },
    E = [],
    S = [],
    L = function _getDocScrollTop() {
      return u.pageYOffset || h.scrollTop || r.scrollTop || i.scrollTop || 0;
    },
    C = function _getDocScrollLeft() {
      return u.pageXOffset || h.scrollLeft || r.scrollLeft || i.scrollLeft || 0;
    },
    k = function _svgOwner(e) {
      return (
        e.ownerSVGElement ||
        ("svg" === (e.tagName + "").toLowerCase() ? e : null)
      );
    },
    N = function _isFixed(e) {
      return (
        "fixed" === u.getComputedStyle(e).position ||
        ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0)
      );
    },
    P = function _placeSiblings(e, t) {
      var n,
        o,
        r,
        i,
        a,
        l,
        s = k(e),
        c = e === s,
        d = s ? E : S,
        p = e.parentNode;
      if (e === u) return e;
      if ((d.length || d.push(v(e, 1), v(e, 2), v(e, 3)), (n = s ? g : f), s))
        (r = c ? { x: 0, y: 0 } : e.getBBox()),
          (a = (o = e.transform ? e.transform.baseVal : {}).numberOfItems
            ? ((i =
              (o =
                1 < o.numberOfItems
                  ? (function _consolidate(e) {
                    for (var t = new fe(), n = 0; n < e.numberOfItems; n++)
                      t.multiply(e.getItem(n).matrix);
                    return t;
                  })(o)
                  : o.getItem(0).matrix).a *
              r.x +
              o.c * r.y),
              o.b * r.x + o.d * r.y)
            : ((o = x), (i = r.x), r.y)),
          t && "g" === e.tagName.toLowerCase() && (i = a = 0),
          (c ? s : p).appendChild(n),
          n.setAttribute(
            "transform",
            "matrix(" +
            o.a +
            "," +
            o.b +
            "," +
            o.c +
            "," +
            o.d +
            "," +
            (o.e + i) +
            "," +
            (o.f + a) +
            ")"
          );
      else {
        if (((i = a = 0), m))
          for (
            o = e.offsetParent, r = e;
            (r = r && r.parentNode) && r !== o && r.parentNode;
          )
            4 < (u.getComputedStyle(r)[w] + "").length &&
              ((i = r.offsetLeft), (a = r.offsetTop), (r = 0));
        if ("absolute" !== (l = u.getComputedStyle(e)).position)
          for (o = e.offsetParent; p && p !== o;)
            (i += p.scrollLeft || 0),
              (a += p.scrollTop || 0),
              (p = p.parentNode);
        ((r = n.style).top = e.offsetTop - a + "px"),
          (r.left = e.offsetLeft - i + "px"),
          (r[w] = l[w]),
          (r[b] = l[b]),
          (r.position = "fixed" === l.position ? "fixed" : "absolute"),
          e.parentNode.appendChild(n);
      }
      return n;
    },
    fe =
      (((t = Matrix2D.prototype).inverse = function inverse() {
        var e = this.a,
          t = this.b,
          n = this.c,
          o = this.d,
          r = this.e,
          i = this.f,
          a = e * o - t * n || 1e-10;
        return y(
          this,
          o / a,
          -t / a,
          -n / a,
          e / a,
          (n * i - o * r) / a,
          -(e * i - t * r) / a
        );
      }),
        (t.multiply = function multiply(e) {
          var t = this.a,
            n = this.b,
            o = this.c,
            r = this.d,
            i = this.e,
            a = this.f,
            l = e.a,
            s = e.c,
            c = e.b,
            d = e.d,
            p = e.e,
            u = e.f;
          return y(
            this,
            l * t + c * o,
            l * n + c * r,
            s * t + d * o,
            s * n + d * r,
            i + p * t + u * o,
            a + p * n + u * r
          );
        }),
        (t.clone = function clone() {
          return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
        }),
        (t.equals = function equals(e) {
          var t = this.a,
            n = this.b,
            o = this.c,
            r = this.d,
            i = this.e,
            a = this.f;
          return (
            t === e.a &&
            n === e.b &&
            o === e.c &&
            r === e.d &&
            i === e.e &&
            a === e.f
          );
        }),
        (t.apply = function apply(e, t) {
          void 0 === t && (t = {});
          var n = e.x,
            o = e.y,
            r = this.a,
            i = this.b,
            a = this.c,
            l = this.d,
            s = this.e,
            c = this.f;
          return (
            (t.x = n * r + o * a + s || 0), (t.y = n * i + o * l + c || 0), t
          );
        }),
        Matrix2D);
  function Matrix2D(e, t, n, o, r, i) {
    void 0 === e && (e = 1),
      void 0 === t && (t = 0),
      void 0 === n && (n = 0),
      void 0 === o && (o = 1),
      void 0 === r && (r = 0),
      void 0 === i && (i = 0),
      y(this, e, t, n, o, r, i);
  }
  function getGlobalMatrix(e, t, n, o) {
    if (!e || !e.parentNode || (h || M(e)).documentElement === e)
      return new fe();
    var r = D(e),
      i = k(e) ? E : S,
      a = P(e, n),
      l = i[0].getBoundingClientRect(),
      s = i[1].getBoundingClientRect(),
      c = i[2].getBoundingClientRect(),
      d = a.parentNode,
      p = !o && N(e),
      u = new fe(
        (s.left - l.left) / 100,
        (s.top - l.top) / 100,
        (c.left - l.left) / 100,
        (c.top - l.top) / 100,
        l.left + (p ? 0 : C()),
        l.top + (p ? 0 : L())
      );
    if ((d.removeChild(a), r))
      for (l = r.length; l--;)
        ((s = r[l]).scaleX = s.scaleY = 0), s.renderTransform(1, s);
    return t ? u.inverse() : u;
  }
  function T() {
    return "undefined" != typeof window;
  }
  function U() {
    return ge || (T() && (ge = window.gsap) && ge.registerPlugin && ge);
  }
  function V(e) {
    return "function" == typeof e;
  }
  function W(e) {
    return "object" == typeof e;
  }
  function X(e) {
    return void 0 === e;
  }
  function Y() {
    return !1;
  }
  function _(e) {
    return Math.round(1e4 * e) / 1e4;
  }
  function ba(e, t) {
    var n = ve.createElementNS
      ? ve.createElementNS(
        (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
        e
      )
      : ve.createElement(e);
    return n.style ? n : ve.createElement(e);
  }
  function na(e, t) {
    var n,
      o = {};
    for (n in e) o[n] = t ? e[n] * t : e[n];
    return o;
  }
  function pa(e, t) {
    for (var n, o = e.length; o--;)
      t
        ? (e[o].style.touchAction = t)
        : e[o].style.removeProperty("touch-action"),
        (n = e[o].children) && n.length && pa(n, t);
  }
  function qa() {
    return Re.forEach(function (e) {
      return e();
    });
  }
  function sa() {
    return !Re.length && ge.ticker.remove(qa);
  }
  function ta(e) {
    for (var t = Re.length; t--;) Re[t] === e && Re.splice(t, 1);
    ge.to(sa, {
      overwrite: !0,
      delay: 15,
      duration: 0,
      onComplete: sa,
      data: "_draggable",
    });
  }
  function va(e, t, n, o) {
    // evita evento no slideshow
    if (e.id == 'slideshow') {
      console.debug('salvou a patria a nao colocou evento scroll no slideshow');
      return;
    }
    if (e.addEventListener) {
      var r = Te[t];
      (o = o || (d ? { passive: !1 } : null)),
        e.addEventListener(r || t, n, o),
        r && t !== r && e.addEventListener(t, n, o);
    }
  }
  function wa(e, t, n) {
    if (e.removeEventListener) {
      var o = Te[t];
      e.removeEventListener(o || t, n),
        o && t !== o && e.removeEventListener(t, n);
    }
  }
  function xa(e) {
    e.preventDefault && e.preventDefault(),
      e.preventManipulation && e.preventManipulation();
  }
  function za(e) {
    (Ee = e.touches && De < e.touches.length), wa(e.target, "touchend", za);
  }
  function Aa(e) {
    (Ee = e.touches && De < e.touches.length), va(e.target, "touchend", za);
  }
  function Ba(e) {
    return (
      xe.pageYOffset ||
      e.scrollTop ||
      e.documentElement.scrollTop ||
      e.body.scrollTop ||
      0
    );
  }
  function Ca(e) {
    return (
      xe.pageXOffset ||
      e.scrollLeft ||
      e.documentElement.scrollLeft ||
      e.body.scrollLeft ||
      0
    );
  }
  function Da(e, t) {
    // chama os eventos listeners
    va(e, "scroll", t), Fe(e.parentNode) || Da(e.parentNode, t);
  }
  function Ea(e, t) {
    wa(e, "scroll", t), Fe(e.parentNode) || Ea(e.parentNode, t);
  }
  function Ga(e, t) {
    var n = "x" === t ? "Width" : "Height",
      o = "scroll" + n,
      r = "client" + n;
    return Math.max(
      0,
      Fe(e)
        ? Math.max(me[o], l[o]) - (xe["inner" + n] || me[r] || l[r])
        : e[o] - e[r]
    );
  }
  function Ha(e, t) {
    var n = Ga(e, "x"),
      o = Ga(e, "y");
    Fe(e) ? (e = Ie) : Ha(e.parentNode, t),
      (e._gsMaxScrollX = n),
      (e._gsMaxScrollY = o),
      t ||
      ((e._gsScrollX = e.scrollLeft || 0), (e._gsScrollY = e.scrollTop || 0));
  }
  function Ia(e, t, n) {
    var o = e.style;
    o &&
      (X(o[t]) && (t = c(t, e) || t),
        null == n
          ? o.removeProperty &&
          o.removeProperty(t.replace(/([A-Z])/g, "-$1").toLowerCase())
          : (o[t] = n));
  }
  function Ja(e) {
    return xe.getComputedStyle(
      e instanceof Element ? e : e.host || (e.parentNode || {}).host || e
    );
  }
  function La(e) {
    if (e === xe)
      return (
        (p.left = p.top = 0),
        (p.width = p.right =
          me.clientWidth || e.innerWidth || l.clientWidth || 0),
        (p.height = p.bottom =
          (e.innerHeight || 0) - 20 < me.clientHeight
            ? me.clientHeight
            : e.innerHeight || l.clientHeight || 0),
        p
      );
    var t = e.ownerDocument || ve,
      n = X(e.pageX)
        ? e.nodeType || X(e.left) || X(e.top)
          ? be(e)[0].getBoundingClientRect()
          : e
        : {
          left: e.pageX - Ca(t),
          top: e.pageY - Ba(t),
          right: e.pageX - Ca(t) + 1,
          bottom: e.pageY - Ba(t) + 1,
        };
    return (
      X(n.right) && !X(n.width)
        ? ((n.right = n.left + n.width), (n.bottom = n.top + n.height))
        : X(n.width) &&
        (n = {
          width: n.right - n.left,
          height: n.bottom - n.top,
          right: n.right,
          left: n.left,
          bottom: n.bottom,
          top: n.top,
        }),
      n
    );
  }
  function Ma(e, t, n) {
    var o,
      r = e.vars,
      i = r[n],
      a = e._listeners[t];
    return (
      V(i) &&
      (o = i.apply(
        r.callbackScope || e,
        r[n + "Params"] || [e.pointerEvent]
      )),
      a && !1 === e.dispatchEvent(t) && (o = !1),
      o
    );
  }
  function Na(e, t) {
    var n,
      o,
      r,
      i = be(e)[0];
    return i.nodeType || i === xe
      ? A(i, t)
      : X(e.left)
        ? {
          left: (o = e.min || e.minX || e.minRotation || 0),
          top: (n = e.min || e.minY || 0),
          width: (e.max || e.maxX || e.maxRotation || 0) - o,
          height: (e.max || e.maxY || 0) - n,
        }
        : ((r = { x: 0, y: 0 }),
        {
          left: e.left - r.x,
          top: e.top - r.y,
          width: e.width,
          height: e.height,
        });
  }
  function Qa(r, i, e, t, a, n) {
    var o,
      l,
      s,
      c = {};
    if (i)
      if (1 !== a && i instanceof Array) {
        if (((c.end = o = []), (s = i.length), W(i[0])))
          for (l = 0; l < s; l++) o[l] = na(i[l], a);
        else for (l = 0; l < s; l++) o[l] = i[l] * a;
        (e += 1.1), (t -= 1.1);
      }
      else
        V(i)
          ? (c.end = function (e) {
            var t,
              n,
              o = i.call(r, e);
            if (1 !== a)
              if (W(o)) {
                for (n in ((t = {}), o)) t[n] = o[n] * a;
                o = t;
              }
              else o *= a;
            return o;
          })
          : (c.end = i);
    return (
      (!e && 0 !== e) || (c.max = e),
      (!t && 0 !== t) || (c.min = t),
      n && (c.velocity = 0),
      c
    );
  }
  function Ra(e) {
    var t;
    return (
      !(!e || !e.getAttribute || e === l) &&
      (!(
        "true" !== (t = e.getAttribute("data-clickable")) &&
        ("false" === t ||
          (!e.onclick &&
            !o.test(e.nodeName + "") &&
            "true" !== e.getAttribute("contentEditable")))
      ) ||
        Ra(e.parentNode))
    );
  }
  function Sa(e, t) {
    for (var n, o = e.length; o--;)
      ((n = e[o]).ondragstart = n.onselectstart = t ? null : Y),
        ge.set(n, { lazy: !0, userSelect: t ? "text" : "none" });
  }
  function Wa(i, r) {
    (i = ge.utils.toArray(i)[0]), (r = r || {});
    var a,
      l,
      s,
      e,
      c,
      d,
      p = document.createElement("div"),
      u = p.style,
      t = i.firstChild,
      h = 0,
      f = 0,
      g = i.scrollTop,
      x = i.scrollLeft,
      v = i.scrollWidth,
      m = i.scrollHeight,
      y = 0,
      w = 0,
      b = 0;
    R && !1 !== r.force3D
      ? ((c = "translate3d("), (d = "px,0px)"))
      : O && ((c = "translate("), (d = "px)")),
      (this.scrollTop = function (e, t) {
        if (!arguments.length) return -this.top();
        this.top(-e, t);
      }),
      (this.scrollLeft = function (e, t) {
        if (!arguments.length) return -this.left();
        this.left(-e, t);
      }),
      (this.left = function (e, t) {
        if (!arguments.length) return -(i.scrollLeft + f);
        var n = i.scrollLeft - x,
          o = f;
        if ((2 < n || n < -2) && !t)
          return (
            (x = i.scrollLeft),
            ge.killTweensOf(this, { left: 1, scrollLeft: 1 }),
            this.left(-x),
            void (r.onKill && r.onKill())
          );
        (e = -e) < 0
          ? ((f = (e - 0.5) | 0), (e = 0))
          : w < e
            ? ((f = (e - w) | 0), (e = w))
            : (f = 0),
          (f || o) &&
          (this._skip || (u[O] = c + -f + "px," + -h + d),
            0 <= f + y && (u.paddingRight = f + y + "px")),
          (i.scrollLeft = 0 | e),
          (x = i.scrollLeft);
      }),
      (this.top = function (e, t) {
        if (!arguments.length) return -(i.scrollTop + h);
        var n = i.scrollTop - g,
          o = h;
        if ((2 < n || n < -2) && !t)
          return (
            (g = i.scrollTop),
            ge.killTweensOf(this, { top: 1, scrollTop: 1 }),
            this.top(-g),
            void (r.onKill && r.onKill())
          );
        (e = -e) < 0
          ? ((h = (e - 0.5) | 0), (e = 0))
          : b < e
            ? ((h = (e - b) | 0), (e = b))
            : (h = 0),
          (h || o) && (this._skip || (u[O] = c + -f + "px," + -h + d)),
          (i.scrollTop = 0 | e),
          (g = i.scrollTop);
      }),
      (this.maxScrollTop = function () {
        return b;
      }),
      (this.maxScrollLeft = function () {
        return w;
      }),
      (this.disable = function () {
        for (t = p.firstChild; t;)
          (e = t.nextSibling), i.appendChild(t), (t = e);
        i === p.parentNode && i.removeChild(p);
      }),
      (this.enable = function () {
        if ((t = i.firstChild) !== p) {
          for (; t;) (e = t.nextSibling), p.appendChild(t), (t = e);
          i.appendChild(p), this.calibrate();
        }
      }),
      (this.calibrate = function (e) {
        var t,
          n,
          o,
          r = i.clientWidth === a;
        (g = i.scrollTop),
          (x = i.scrollLeft),
          (r &&
            i.clientHeight === l &&
            p.offsetHeight === s &&
            v === i.scrollWidth &&
            m === i.scrollHeight &&
            !e) ||
          ((h || f) &&
            ((n = this.left()),
              (o = this.top()),
              this.left(-i.scrollLeft),
              this.top(-i.scrollTop)),
            (t = Ja(i)),
            (r && !e) ||
            ((u.display = "block"),
              (u.width = "auto"),
              (u.paddingRight = "0px"),
              (y = Math.max(0, i.scrollWidth - i.clientWidth)) &&
              (y +=
                parseFloat(t.paddingLeft) +
                (B ? parseFloat(t.paddingRight) : 0))),
            (u.display = "inline-block"),
            (u.position = "relative"),
            (u.overflow = "visible"),
            (u.verticalAlign = "top"),
            (u.boxSizing = "content-box"),
            (u.width = "100%"),
            (u.paddingRight = y + "px"),
            B && (u.paddingBottom = t.paddingBottom),
            (a = i.clientWidth),
            (l = i.clientHeight),
            (v = i.scrollWidth),
            (m = i.scrollHeight),
            (w = i.scrollWidth - a),
            (b = i.scrollHeight - l),
            (s = p.offsetHeight),
            (u.display = "block"),
            (n || o) && (this.left(n), this.top(o)));
      }),
      (this.content = p),
      (this.element = i),
      (this._skip = !1),
      this.enable();
  }
  function Xa(e) {
    if (T() && document.body) {
      var t = window && window.navigator;
      (xe = window),
        (ve = document),
        (me = ve.documentElement),
        (l = ve.body),
        (s = ba("div")),
        (Ye = !!window.PointerEvent),
        ((ye = ba("div")).style.cssText =
          "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab"),
        (Le = "grab" === ye.style.cursor ? "grab" : "move"),
        (Xe = t && -1 !== t.userAgent.toLowerCase().indexOf("android")),
        (Me =
          ("ontouchstart" in me && "orientation" in xe) ||
          (t && (0 < t.MaxTouchPoints || 0 < t.msMaxTouchPoints))),
        (o = ba("div")),
        (r = ba("div")),
        (i = r.style),
        (a = l),
        (i.display = "inline-block"),
        (i.position = "relative"),
        (o.style.cssText = r.innerHTML =
          "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden"),
        o.appendChild(r),
        a.appendChild(o),
        (n = r.offsetHeight + 18 > o.scrollHeight),
        a.removeChild(o),
        (B = n),
        (Te = (function (e) {
          for (
            var t = e.split(","),
            n = (("onpointerdown" in s)
              ? "pointerdown,pointermove,pointerup,pointercancel"
              : ("onmspointerdown" in s)
                ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel"
                : e
            ).split(","),
            o = {},
            r = 4;
            -1 < --r;
          )
            (o[t[r]] = n[r]), (o[n[r]] = t[r]);
          try {
            me.addEventListener(
              "test",
              null,
              Object.defineProperty({}, "passive", {
                get: function get() {
                  d = 1;
                },
              })
            );
          } catch (e) { }
          return o;
        })("touchstart,touchmove,touchend,touchcancel")),
        va(ve, "touchcancel", Y),
        va(xe, "touchmove", Y),
        l && l.addEventListener("touchstart", Y),
        va(ve, "contextmenu", function () {
          for (var e in Be) Be[e].isPressed && Be[e].endDrag();
        }),
        (ge = we = U());
    }
    var n, o, r, i, a;
    ge
      ? ((Se = ge.plugins.inertia),
        (c = ge.utils.checkPrefix),
        (O = c(O)),
        (_e = c(_e)),
        (be = ge.utils.toArray),
        (R = !!c("perspective")))
      : e && console.warn("Please gsap.registerPlugin(Draggable)");
  }
  var ge,
    xe,
    ve,
    me,
    l,
    s,
    ye,
    we,
    c,
    be,
    d,
    Me,
    Te,
    De,
    Ee,
    Xe,
    Se,
    Le,
    Ye,
    R,
    B,
    n,
    O = "transform",
    _e = "transformOrigin",
    Ce = Array.isArray,
    ke = 180 / Math.PI,
    Ne = 1e20,
    a = new fe(),
    Pe =
      Date.now ||
      function () {
        return new Date().getTime();
      },
    Re = [],
    Be = {},
    Oe = 0,
    o = /^(?:a|input|textarea|button|select)$/i,
    Ae = 0,
    He = {},
    Ie = {},
    Fe = function _isRoot(e) {
      return !(
        e &&
        e !== me &&
        9 !== e.nodeType &&
        e !== ve.body &&
        e !== xe &&
        e.nodeType &&
        e.parentNode
      );
    },
    p = {},
    We = {},
    A = function _getElementBounds(e, t) {
      t = be(t)[0];
      var n,
        o,
        r,
        i,
        a,
        l,
        s,
        c,
        d,
        p,
        u,
        h,
        f,
        g,
        x = e.getBBox && e.ownerSVGElement,
        v = e.ownerDocument || ve;
      if (e === xe)
        (r = Ba(v)),
          (o =
            (n = Ca(v)) +
            (v.documentElement.clientWidth ||
              e.innerWidth ||
              v.body.clientWidth ||
              0)),
          (i =
            r +
            ((e.innerHeight || 0) - 20 < v.documentElement.clientHeight
              ? v.documentElement.clientHeight
              : e.innerHeight || v.body.clientHeight || 0));
      else {
        if (t === xe || X(t)) return e.getBoundingClientRect();
        (n = r = 0),
          x
            ? ((u = (p = e.getBBox()).width), (h = p.height))
            : (e.viewBox &&
              (p = e.viewBox.baseVal) &&
              ((n = p.x || 0), (r = p.y || 0), (u = p.width), (h = p.height)),
              u ||
              ((p = "border-box" === (f = Ja(e)).boxSizing),
                (u =
                  (parseFloat(f.width) || e.clientWidth || 0) +
                  (p
                    ? 0
                    : parseFloat(f.borderLeftWidth) +
                    parseFloat(f.borderRightWidth))),
                (h =
                  (parseFloat(f.height) || e.clientHeight || 0) +
                  (p
                    ? 0
                    : parseFloat(f.borderTopWidth) +
                    parseFloat(f.borderBottomWidth))))),
          (o = u),
          (i = h);
      }
      return e === t
        ? { left: n, top: r, width: o - n, height: i - r }
        : ((l = (a = getGlobalMatrix(t, !0).multiply(
          getGlobalMatrix(e)
        )).apply({ x: n, y: r })),
          (s = a.apply({ x: o, y: r })),
          (c = a.apply({ x: o, y: i })),
          (d = a.apply({ x: n, y: i })),
          (n = Math.min(l.x, s.x, c.x, d.x)),
          (r = Math.min(l.y, s.y, c.y, d.y)),
        {
          left: n + ((g = t.parentNode || {}).scrollLeft || 0),
          top: r + (g.scrollTop || 0),
          width: Math.max(l.x, s.x, c.x, d.x) - n,
          height: Math.max(l.y, s.y, c.y, d.y) - r,
        });
    },
    H =
      (((n =
        EventDispatcher.prototype).addEventListener = function addEventListener(
          e,
          t
        ) {
          var n = this._listeners[e] || (this._listeners[e] = []);
          ~n.indexOf(t) || n.push(t);
        }),
        (n.removeEventListener = function removeEventListener(e, t) {
          var n = this._listeners[e],
            o = (n && n.indexOf(t)) || -1;
          -1 < o && n.splice(o, 1);
        }),
        (n.dispatchEvent = function dispatchEvent(t) {
          var n,
            o = this;
          return (
            (this._listeners[t] || []).forEach(function (e) {
              return !1 === e.call(o, { type: t, target: o.target }) && (n = !1);
            }),
            n
          );
        }),
        EventDispatcher);
  function EventDispatcher(e) {
    (this._listeners = {}), (this.target = e || this);
  }
  var Ve,
    I =
      ((function _inheritsLoose(e, t) {
        (e.prototype = Object.create(t.prototype)),
          ((e.prototype.constructor = e).__proto__ = t);
      })(Draggable, (Ve = H)),
        (Draggable.register = function register(e) {
          (ge = e), Xa();
        }),
        (Draggable.create = function create(e, t) {
          return (
            we || Xa(!0),
            be(e).map(function (e) {
              return new Draggable(e, t);
            })
          );
        }),
        (Draggable.get = function get(e) {
          return Be[(be(e)[0] || {})._gsDragID];
        }),
        (Draggable.timeSinceDrag = function timeSinceDrag() {
          return (Pe() - Ae) / 1e3;
        }),
        (Draggable.hitTest = function hitTest(e, t, n) {
          if (e === t) return !1;
          var o,
            r,
            i,
            a = La(e),
            l = La(t),
            s = a.top,
            c = a.left,
            d = a.right,
            p = a.bottom,
            u = a.width,
            h = a.height,
            f = l.left > d || l.right < c || l.top > p || l.bottom < s;
          return f || !n
            ? !f
            : ((i = -1 !== (n + "").indexOf("%")),
              (n = parseFloat(n) || 0),
              ((o = {
                left: Math.max(c, l.left),
                top: Math.max(s, l.top),
              }).width = Math.min(d, l.right) - o.left),
              (o.height = Math.min(p, l.bottom) - o.top),
              !(o.width < 0 || o.height < 0) &&
              (i
                ? u * h * (n *= 0.01) <= (r = o.width * o.height) ||
                r >= l.width * l.height * n
                : o.width > n && o.height > n));
        }),
        Draggable);
  function Draggable(h, p) {
    var e;
    (e = Ve.call(this) || this),
      we || Xa(1),
      (h = be(h)[0]),
      (Se = Se || ge.plugins.inertia),
      (e.vars = p = na(p || {})),
      (e.target = h),
      (e.x = e.y = e.rotation = 0),
      (e.dragResistance = parseFloat(p.dragResistance) || 0),
      (e.edgeResistance = isNaN(p.edgeResistance)
        ? 1
        : parseFloat(p.edgeResistance) || 0),
      (e.lockAxis = p.lockAxis),
      (e.autoScroll = p.autoScroll || 0),
      (e.lockedAxis = null),
      (e.allowEventDefault = !!p.allowEventDefault),
      ge.getProperty(h, "x");
    function Jg(e, t) {
      return parseFloat(le.get(h, e, t));
    }
    function oh(e) {
      return (
        xa(e), e.stopImmediatePropagation && e.stopImmediatePropagation(), !1
      );
    }
    function ph(e) {
      if (Q.autoScroll && Q.isDragging && (ee || k)) {
        var t,
          n,
          o,
          r,
          i,
          a,
          l,
          s,
          c = h,
          d = 15 * Q.autoScroll;
        for (
          ee = !1,
          Ie.scrollTop =
          null != xe.pageYOffset
            ? xe.pageYOffset
            : null != ce.documentElement.scrollTop
              ? ce.documentElement.scrollTop
              : ce.body.scrollTop,
          Ie.scrollLeft =
          null != xe.pageXOffset
            ? xe.pageXOffset
            : null != ce.documentElement.scrollLeft
              ? ce.documentElement.scrollLeft
              : ce.body.scrollLeft,
          r = Q.pointerX - Ie.scrollLeft,
          i = Q.pointerY - Ie.scrollTop;
          c && !n;
        )
          (t = (n = Fe(c.parentNode)) ? Ie : c.parentNode),
            (o = n
              ? {
                bottom: Math.max(me.clientHeight, xe.innerHeight || 0),
                right: Math.max(me.clientWidth, xe.innerWidth || 0),
                left: 0,
                top: 0,
              }
              : t.getBoundingClientRect()),
            (a = l = 0),
            U &&
            ((s = t._gsMaxScrollY - t.scrollTop) < 0
              ? (l = s)
              : i > o.bottom - oe && s
                ? ((ee = !0),
                  (l = Math.min(
                    s,
                    (d * (1 - Math.max(0, o.bottom - i) / oe)) | 0
                  )))
                : i < o.top + te &&
                t.scrollTop &&
                ((ee = !0),
                  (l = -Math.min(
                    t.scrollTop,
                    (d * (1 - Math.max(0, i - o.top) / te)) | 0
                  ))),
              l && (t.scrollTop += l)),
            K &&
            ((s = t._gsMaxScrollX - t.scrollLeft) < 0
              ? (a = s)
              : r > o.right - ne && s
                ? ((ee = !0),
                  (a = Math.min(
                    s,
                    (d * (1 - Math.max(0, o.right - r) / ne)) | 0
                  )))
                : r < o.left + re &&
                t.scrollLeft &&
                ((ee = !0),
                  (a = -Math.min(
                    t.scrollLeft,
                    (d * (1 - Math.max(0, r - o.left) / re)) | 0
                  ))),
              a && (t.scrollLeft += a)),
            n &&
            (a || l) &&
            (xe.scrollTo(t.scrollLeft, t.scrollTop),
              ue(Q.pointerX + a, Q.pointerY + l)),
            (c = t);
      }
      if (k) {
        var p = Q.x,
          u = Q.y;
        z
          ? ((Q.deltaX = p - parseFloat(le.rotation)),
            (Q.rotation = p),
            (le.rotation = p + "deg"),
            le.renderTransform(1, le))
          : f
            ? (U && ((Q.deltaY = u - f.top()), f.top(u)),
              K && ((Q.deltaX = p - f.left()), f.left(p)))
            : q
              ? (U && ((Q.deltaY = u - parseFloat(le.y)), (le.y = u + "px")),
                K && ((Q.deltaX = p - parseFloat(le.x)), (le.x = p + "px")),
                le.renderTransform(1, le))
              : (U &&
                ((Q.deltaY = u - parseFloat(h.style.top || 0)),
                  (h.style.top = u + "px")),
                K &&
                ((Q.deltaX = p - parseFloat(h.style.left || 0)),
                  (h.style.left = p + "px"))),
          !g ||
          e ||
          I ||
          (!(I = !0) === Ma(Q, "drag", "onDrag") &&
            (K && (Q.x -= Q.deltaX), U && (Q.y -= Q.deltaY), ph(!0)),
            (I = !1));
      }
      k = !1;
    }
    function qh(e, t) {
      var n,
        o,
        r = Q.x,
        i = Q.y;
      h._gsap || (le = ge.core.getCache(h)),
        le.uncache && ge.getProperty(h, "x"),
        q
          ? ((Q.x = parseFloat(le.x)), (Q.y = parseFloat(le.y)))
          : z
            ? (Q.x = Q.rotation = parseFloat(le.rotation))
            : f
              ? ((Q.y = f.top()), (Q.x = f.left()))
              : ((Q.y = parseFloat(h.style.top || ((o = Ja(h)) && o.top)) || 0),
                (Q.x = parseFloat(h.style.left || (o || {}).left) || 0)),
        (N || P || R) &&
        !t &&
        (Q.isDragging || Q.isThrowing) &&
        (R &&
          ((He.x = Q.x),
            (He.y = Q.y),
            (n = R(He)).x !== Q.x && ((Q.x = n.x), (k = !0)),
            n.y !== Q.y && ((Q.y = n.y), (k = !0))),
          N &&
          (n = N(Q.x)) !== Q.x &&
          ((Q.x = n), z && (Q.rotation = n), (k = !0)),
          P && ((n = P(Q.y)) !== Q.y && (Q.y = n), (k = !0))),
        k && ph(!0),
        e ||
        ((Q.deltaX = Q.x - r),
          (Q.deltaY = Q.y - i),
          Ma(Q, "throwupdate", "onThrowUpdate"));
    }
    function rh(a, l, s, n) {
      return (
        null == l && (l = -Ne),
        null == s && (s = Ne),
        V(a)
          ? function (e) {
            var t = Q.isPressed ? 1 - Q.edgeResistance : 1;
            return (
              a.call(
                Q,
                s < e ? s + (e - s) * t : e < l ? l + (e - l) * t : e
              ) * n
            );
          }
          : Ce(a)
            ? function (e) {
              for (var t, n, o = a.length, r = 0, i = Ne; -1 < --o;)
                (n = (t = a[o]) - e) < 0 && (n = -n),
                  n < i && l <= t && t <= s && ((r = o), (i = n));
              return a[r];
            }
            : isNaN(a)
              ? function (e) {
                return e;
              }
              : function () {
                return a * n;
              }
      );
    }
    function th() {
      var e, t, n, o;
      (D = !1),
        f
          ? (f.calibrate(),
            (Q.minX = S = -f.maxScrollLeft()),
            (Q.minY = Y = -f.maxScrollTop()),
            (Q.maxX = E = Q.maxY = L = 0),
            (D = !0))
          : p.bounds &&
          ((e = Na(p.bounds, h.parentNode)),
            z
              ? ((Q.minX = S = e.left),
                (Q.maxX = E = e.left + e.width),
                (Q.minY = Y = Q.maxY = L = 0))
              : X(p.bounds.maxX) && X(p.bounds.maxY)
                ? ((t = Na(h, h.parentNode)),
                  (Q.minX = S = Math.round(Jg(d, "px") + e.left - t.left - 0.5)),
                  (Q.minY = Y = Math.round(Jg(J, "px") + e.top - t.top - 0.5)),
                  (Q.maxX = E = Math.round(S + (e.width - t.width))),
                  (Q.maxY = L = Math.round(Y + (e.height - t.height))))
                : ((e = p.bounds),
                  (Q.minX = S = e.minX),
                  (Q.minY = Y = e.minY),
                  (Q.maxX = E = e.maxX),
                  (Q.maxY = L = e.maxY)),
            E < S && ((Q.minX = E), (Q.maxX = E = S), (S = Q.minX)),
            L < Y && ((Q.minY = L), (Q.maxY = L = Y), (Y = Q.minY)),
            z && ((Q.minRotation = S), (Q.maxRotation = E)),
            (D = !0)),
        p.liveSnap &&
        ((n = !0 === p.liveSnap ? p.snap || {} : p.liveSnap),
          (o = Ce(n) || V(n)),
          z
            ? ((N = rh(o ? n : n.rotation, S, E, 1)), (P = null))
            : n.points
              ? (R = (function buildPointSnapFunc(s, l, c, d, p, u, h) {
                return (
                  (u = u && u < Ne ? u * u : Ne),
                  V(s)
                    ? function (e) {
                      var t,
                        n,
                        o,
                        r = Q.isPressed ? 1 - Q.edgeResistance : 1,
                        i = e.x,
                        a = e.y;
                      return (
                        (e.x = i =
                          c < i
                            ? c + (i - c) * r
                            : i < l
                              ? l + (i - l) * r
                              : i),
                        (e.y = a =
                          p < a
                            ? p + (a - p) * r
                            : a < d
                              ? d + (a - d) * r
                              : a),
                        (t = s.call(Q, e)) !== e &&
                        ((e.x = t.x), (e.y = t.y)),
                        1 !== h && ((e.x *= h), (e.y *= h)),
                        u < Ne &&
                        ((n = e.x - i),
                          (o = e.y - a),
                          u < n * n + o * o && ((e.x = i), (e.y = a))),
                        e
                      );
                    }
                    : Ce(s)
                      ? function (e) {
                        for (
                          var t, n, o, r, i = s.length, a = 0, l = Ne;
                          -1 < --i;
                        )
                          (r =
                            (t = (o = s[i]).x - e.x) * t +
                            (n = o.y - e.y) * n) < l && ((a = i), (l = r));
                        return l <= u ? s[a] : e;
                      }
                      : function (e) {
                        return e;
                      }
                );
              })(o ? n : n.points, S, E, Y, L, n.radius, f ? -1 : 1))
              : (K &&
                (N = rh(
                  o ? n : n.x || n.left || n.scrollLeft,
                  S,
                  E,
                  f ? -1 : 1
                )),
                U &&
                (P = rh(
                  o ? n : n.y || n.top || n.scrollTop,
                  Y,
                  L,
                  f ? -1 : 1
                ))));
    }
    function uh() {
      (Q.isThrowing = !1), Ma(Q, "throwcomplete", "onThrowComplete");
    }
    function vh() {
      Q.isThrowing = !1;
    }
    function wh(e, t) {
      var n, o, r, i;
      e && Se
        ? (!0 === e &&
          ((n = p.snap || p.liveSnap || {}),
            (o = Ce(n) || V(n)),
            (e = {
              resistance:
                (p.throwResistance || p.resistance || 1e3) / (z ? 10 : 1),
            }),
            z
              ? (e.rotation = Qa(Q, o ? n : n.rotation, E, S, 1, t))
              : (K &&
                (e[d] = Qa(
                  Q,
                  o ? n : n.points || n.x || n.left,
                  E,
                  S,
                  f ? -1 : 1,
                  t || "x" === Q.lockedAxis
                )),
                U &&
                (e[J] = Qa(
                  Q,
                  o ? n : n.points || n.y || n.top,
                  L,
                  Y,
                  f ? -1 : 1,
                  t || "y" === Q.lockedAxis
                )),
                (n.points || (Ce(n) && W(n[0]))) &&
                ((e.linkedProps = d + "," + J), (e.radius = n.radius)))),
          (Q.isThrowing = !0),
          (i = isNaN(p.overshootTolerance)
            ? 1 === p.edgeResistance
              ? 0
              : 1 - Q.edgeResistance + 0.2
            : p.overshootTolerance),
          e.duration ||
          (e.duration = {
            max: Math.max(
              p.minDuration || 0,
              "maxDuration" in p ? p.maxDuration : 2
            ),
            min: isNaN(p.minDuration)
              ? 0 === i || (W(e) && 1e3 < e.resistance)
                ? 0
                : 0.5
              : p.minDuration,
            overshoot: i,
          }),
          (Q.tween = r = ge.to(f || h, {
            inertia: e,
            data: "_draggable",
            onComplete: uh,
            onInterrupt: vh,
            onUpdate: p.fastMode ? Ma : qh,
            onUpdateParams: p.fastMode
              ? [Q, "onthrowupdate", "onThrowUpdate"]
              : n && n.radius
                ? [!1, !0]
                : [],
          })),
          p.fastMode ||
          (f && (f._skip = !0),
            r.render(1e9, !0, !0),
            qh(!0, !0),
            (Q.endX = Q.x),
            (Q.endY = Q.y),
            z && (Q.endRotation = Q.x),
            r.play(0),
            qh(!0, !0),
            f && (f._skip = !1)))
        : D && Q.applyBounds();
    }
    function xh(e) {
      var t,
        n = B;
      (B = getGlobalMatrix(h.parentNode, !0)),
        e &&
        Q.isPressed &&
        !B.equals(n || new fe()) &&
        ((t = n.inverse().apply({ x: w, y: b })),
          B.apply(t, t),
          (w = t.x),
          (b = t.y)),
        B.equals(a) && (B = null);
    }
    function yh() {
      var e,
        t,
        n,
        o = 1 - Q.edgeResistance,
        r = se ? Ca(ce) : 0,
        i = se ? Ba(ce) : 0;
      xh(!1),
        (We.x = Q.pointerX - r),
        (We.y = Q.pointerY - i),
        B && B.apply(We, We),
        (w = We.x),
        (b = We.y),
        k && (ue(Q.pointerX, Q.pointerY), ph(!0)),
        f
          ? (th(), (T = f.top()), (M = f.left()))
          : (de() ? (qh(!0, !0), th()) : Q.applyBounds(),
            z
              ? ((e = h.ownerSVGElement
                ? [le.xOrigin - h.getBBox().x, le.yOrigin - h.getBBox().y]
                : (Ja(h)[_e] || "0 0").split(" ")),
                (C = Q.rotationOrigin = getGlobalMatrix(h).apply({
                  x: parseFloat(e[0]) || 0,
                  y: parseFloat(e[1]) || 0,
                })),
                qh(!0, !0),
                (t = Q.pointerX - C.x - r),
                (n = C.y - Q.pointerY + i),
                (M = Q.x),
                (T = Q.y = Math.atan2(n, t) * ke))
              : ((T = Jg(J, "px")), (M = Jg(d, "px")))),
        D &&
        o &&
        (E < M ? (M = E + (M - E) / o) : M < S && (M = S - (S - M) / o),
          z ||
          (L < T ? (T = L + (T - L) / o) : T < Y && (T = Y - (Y - T) / o))),
        (Q.startX = M = _(M)),
        (Q.startY = T = _(T));
    }
    function Ah() {
      !ye.parentNode || de() || Q.isDragging || ye.parentNode.removeChild(ye);
    }
    function Bh(e, t) {
      var n;
      if (
        !u ||
        Q.isPressed ||
        !e ||
        (!(("mousedown" !== e.type && "pointerdown" !== e.type) || t) &&
          Pe() - ae < 30 &&
          Te[Q.pointerEvent.type])
      )
        G && e && u && xa(e);
      else {
        if (
          ((O = de()),
            (Q.pointerEvent = e),
            Te[e.type]
              ? ((y = ~e.type.indexOf("touch")
                ? e.currentTarget || e.target
                : ce),
                va(y, "touchend", he),
                va(y, "touchmove", pe),
                va(y, "touchcancel", he),
                va(ce, "touchstart", Aa))
              : ((y = null), va(ce, "mousemove", pe)),
            (H = null),
            (Ye && y) ||
            (va(ce, "mouseup", he),
              e && e.target && va(e.target, "mouseup", he)),
            (m = ie.call(Q, e.target) && !1 === p.dragClickables && !t))
        )
          return (
            va(e.target, "change", he),
            Ma(Q, "pressInit", "onPressInit"),
            Ma(Q, "press", "onPress"),
            Sa(Z, !0),
            void (G = !1)
          );
        if (
          ((A =
            !(
              !y ||
              K == U ||
              !1 === Q.vars.allowNativeTouchScrolling ||
              (Q.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which))
            ) && (K ? "y" : "x")),
            (G = !A && !Q.allowEventDefault) &&
            (xa(e), va(xe, "touchforcechange", xa)),
            e.changedTouches
              ? ((e = x = e.changedTouches[0]), (v = e.identifier))
              : e.pointerId
                ? (v = e.pointerId)
                : (x = v = null),
            De++,
            (function _addToRenderQueue(e) {
              Re.push(e), 1 === Re.length && ge.ticker.add(qa);
            })(ph),
            (b = Q.pointerY = e.pageY),
            (w = Q.pointerX = e.pageX),
            Ma(Q, "pressInit", "onPressInit"),
            (A || Q.autoScroll) && Ha(h.parentNode),
            !h.parentNode ||
            !Q.autoScroll ||
            f ||
            z ||
            !h.parentNode._gsMaxScrollX ||
            ye.parentNode ||
            h.getBBox ||
            ((ye.style.width = h.parentNode.scrollWidth + "px"),
              h.parentNode.appendChild(ye)),
            yh(),
            Q.tween && Q.tween.kill(),
            (Q.isThrowing = !1),
            ge.killTweensOf(f || h, o, !0),
            f && ge.killTweensOf(h, { scrollTo: 1 }, !0),
            (Q.tween = Q.lockedAxis = null),
            (!p.zIndexBoost && (z || f || !1 === p.zIndexBoost)) ||
            (h.style.zIndex = Draggable.zIndex++),
            (Q.isPressed = !0),
            (g = !(!p.onDrag && !Q._listeners.drag)),
            (s = !(!p.onMove && !Q._listeners.move)),
            !z && (!1 !== p.cursor || p.activeCursor))
        )
          for (n = Z.length; -1 < --n;)
            ge.set(Z[n], {
              cursor:
                p.activeCursor || p.cursor || ("grab" === Le ? "grabbing" : Le),
            });
        Ma(Q, "press", "onPress");
      }
    }
    function Fh(e) {
      if (e && Q.isDragging && !f) {
        var t = e.target || h.parentNode,
          n = t.scrollLeft - t._gsScrollX,
          o = t.scrollTop - t._gsScrollY;
        (n || o) &&
          (B
            ? ((w -= n * B.a + o * B.c), (b -= o * B.d + n * B.b))
            : ((w -= n), (b -= o)),
            (t._gsScrollX += n),
            (t._gsScrollY += o),
            ue(Q.pointerX, Q.pointerY));
      }
    }
    function Gh(e) {
      var t = Pe(),
        n = t - ae < 40,
        o = t - $ < 40,
        r = n && F === ae,
        i = Q.pointerEvent && Q.pointerEvent.defaultPrevented,
        a = n && c === ae,
        l = e.isTrusted || (null == e.isTrusted && n && r);
      if (
        ((r || (o && !1 !== Q.vars.suppressClickOnDrag)) &&
          e.stopImmediatePropagation &&
          e.stopImmediatePropagation(),
          n &&
          (!Q.pointerEvent || !Q.pointerEvent.defaultPrevented) &&
          (!r || (l && !a)))
      )
        return l && r && (c = ae), void (F = ae);
      (Q.isPressed || o || n) && ((l && e.detail && n && !i) || xa(e)),
        n ||
        o ||
        (e && e.target && (Q.pointerEvent = e), Ma(Q, "click", "onClick"));
    }
    function Hh(e) {
      return B
        ? { x: e.x * B.a + e.y * B.c + B.e, y: e.x * B.b + e.y * B.d + B.f }
        : { x: e.x, y: e.y };
    }
    var u,
      f,
      w,
      b,
      M,
      T,
      D,
      g,
      s,
      E,
      S,
      L,
      Y,
      x,
      v,
      C,
      k,
      t,
      N,
      P,
      R,
      m,
      y,
      B,
      O,
      A,
      H,
      I,
      F,
      c,
      G,
      n = (p.type || "x,y").toLowerCase(),
      q = ~n.indexOf("x") || ~n.indexOf("y"),
      z = -1 !== n.indexOf("rotation"),
      d = z ? "rotation" : q ? "x" : "left",
      J = q ? "y" : "top",
      K = !(!~n.indexOf("x") && !~n.indexOf("left") && "scroll" !== n),
      U = !(!~n.indexOf("y") && !~n.indexOf("top") && "scroll" !== n),
      j = p.minimumMovement || 2,
      Q = (function _assertThisInitialized(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      })(e),
      Z = be(p.trigger || p.handle || h),
      o = {},
      $ = 0,
      ee = !1,
      te = p.autoScrollMarginTop || 40,
      ne = p.autoScrollMarginRight || 40,
      oe = p.autoScrollMarginBottom || 40,
      re = p.autoScrollMarginLeft || 40,
      ie = p.clickableTest || Ra,
      ae = 0,
      le = h._gsap || ge.core.getCache(h),
      se = (function _isFixed(e) {
        return (
          "fixed" === Ja(e).position ||
          ((e = e.parentNode) && 1 === e.nodeType ? _isFixed(e) : void 0)
        );
      })(h),
      ce = h.ownerDocument || ve,
      de = function isTweening() {
        return Q.tween && Q.tween.isActive();
      },
      pe = function onMove(e) {
        var t,
          n,
          o,
          r,
          i,
          a,
          l = e;
        if (u && !Ee && Q.isPressed && e) {
          if ((t = (Q.pointerEvent = e).changedTouches)) {
            if ((e = t[0]) !== x && e.identifier !== v) {
              for (
                r = t.length;
                -1 < --r && (e = t[r]).identifier !== v && e.target !== h;
              );
              if (r < 0) return;
            }
          }
          else if (e.pointerId && v && e.pointerId !== v) return;
          y &&
            A &&
            !H &&
            ((We.x = e.pageX - (se ? Ca(ce) : 0)),
              (We.y = e.pageY - (se ? Ba(ce) : 0)),
              B && B.apply(We, We),
              (n = We.x),
              (o = We.y),
              (((i = Math.abs(n - w)) !== (a = Math.abs(o - b)) &&
                (j < i || j < a)) ||
                (Xe && A === H)) &&
              ((H = a < i && K ? "x" : "y"),
                A && H !== A && va(xe, "touchforcechange", xa),
                !1 !== Q.vars.lockAxisOnTouchScroll &&
                K &&
                U &&
                ((Q.lockedAxis = "x" === H ? "y" : "x"),
                  V(Q.vars.onLockAxis) && Q.vars.onLockAxis.call(Q, l)),
                Xe && A === H))
            ? he(l)
            : ((G =
              Q.allowEventDefault ||
                (A && (!H || A === H)) ||
                !1 === l.cancelable
                ? G && !1
                : (xa(l), !0)),
              Q.autoScroll && (ee = !0),
              ue(e.pageX, e.pageY, s));
        }
        else G && e && u && xa(e);
      },
      ue = function setPointerPosition(e, t, n) {
        var o,
          r,
          i,
          a,
          l,
          s,
          c = 1 - Q.dragResistance,
          d = 1 - Q.edgeResistance,
          p = Q.pointerX,
          u = Q.pointerY,
          h = T,
          f = Q.x,
          g = Q.y,
          x = Q.endX,
          v = Q.endY,
          m = Q.endRotation,
          y = k;
        (Q.pointerX = e),
          (Q.pointerY = t),
          se && ((e -= Ca(ce)), (t -= Ba(ce))),
          z
            ? ((a = Math.atan2(C.y - t, e - C.x) * ke),
              180 < (l = Q.y - a)
                ? ((T -= 360), (Q.y = a))
                : l < -180 && ((T += 360), (Q.y = a)),
              (i =
                Q.x !== M || Math.abs(T - a) > j
                  ? ((Q.y = a), M + (T - a) * c)
                  : M))
            : (B &&
              ((s = e * B.a + t * B.c + B.e),
                (t = e * B.b + t * B.d + B.f),
                (e = s)),
              (r = t - b) < j && -j < r && (r = 0),
              (o = e - w) < j && -j < o && (o = 0),
              (Q.lockAxis || Q.lockedAxis) &&
              (o || r) &&
              ((s = Q.lockedAxis) ||
                ((Q.lockedAxis = s =
                  K && Math.abs(o) > Math.abs(r) ? "y" : U ? "x" : null),
                  s &&
                  V(Q.vars.onLockAxis) &&
                  Q.vars.onLockAxis.call(Q, Q.pointerEvent)),
                "y" === s ? (r = 0) : "x" === s && (o = 0)),
              (i = _(M + o * c)),
              (a = _(T + r * c))),
          (N || P || R) && (Q.x !== i || (Q.y !== a && !z))
            ? (R &&
              ((He.x = i),
                (He.y = a),
                (s = R(He)),
                (i = _(s.x)),
                (a = _(s.y))),
              N && (i = _(N(i))),
              P && (a = _(P(a))))
            : D &&
            (E < i
              ? (i = E + Math.round((i - E) * d))
              : i < S && (i = S + Math.round((i - S) * d)),
              z ||
              (L < a
                ? (a = Math.round(L + (a - L) * d))
                : a < Y && (a = Math.round(Y + (a - Y) * d)))),
          (Q.x === i && (Q.y === a || z)) ||
          (z
            ? ((Q.endRotation = Q.x = Q.endX = i), (k = !0))
            : (U && ((Q.y = Q.endY = a), (k = !0)),
              K && ((Q.x = Q.endX = i), (k = !0))),
            n && !1 === Ma(Q, "move", "onMove")
              ? ((Q.pointerX = p),
                (Q.pointerY = u),
                (T = h),
                (Q.x = f),
                (Q.y = g),
                (Q.endX = x),
                (Q.endY = v),
                (Q.endRotation = m),
                (k = y))
              : !Q.isDragging &&
              Q.isPressed &&
              ((Q.isDragging = !0), Ma(Q, "dragstart", "onDragStart")));
      },
      he = function onRelease(e, t) {
        if (
          u &&
          Q.isPressed &&
          (!e ||
            null == v ||
            t ||
            !(
              (e.pointerId && e.pointerId !== v && e.target !== h) ||
              (e.changedTouches &&
                !(function _hasTouchID(e, t) {
                  for (var n = e.length; n--;)
                    if (e[n].identifier === t) return !0;
                })(e.changedTouches, v))
            ))
        ) {
          Q.isPressed = !1;
          var n,
            o,
            r,
            i,
            a,
            l = e,
            s = Q.isDragging,
            c = Q.vars.allowContextMenu && e && (e.ctrlKey || 2 < e.which),
            d = ge.delayedCall(0.001, Ah);
          if (
            (y
              ? (wa(y, "touchend", onRelease),
                wa(y, "touchmove", pe),
                wa(y, "touchcancel", onRelease),
                wa(ce, "touchstart", Aa))
              : wa(ce, "mousemove", pe),
              wa(xe, "touchforcechange", xa),
              (Ye && y) ||
              (wa(ce, "mouseup", onRelease),
                e && e.target && wa(e.target, "mouseup", onRelease)),
              (k = !1),
              s && (($ = Ae = Pe()), (Q.isDragging = !1)),
              m && !c)
          )
            return (
              e && (wa(e.target, "change", onRelease), (Q.pointerEvent = l)),
              Sa(Z, !1),
              Ma(Q, "release", "onRelease"),
              Ma(Q, "click", "onClick"),
              void (m = !1)
            );
          if ((ta(ph), !z))
            for (o = Z.length; -1 < --o;)
              Ia(Z[o], "cursor", p.cursor || (!1 !== p.cursor ? Le : null));
          if ((De--, e)) {
            if (
              (n = e.changedTouches) &&
              (e = n[0]) !== x &&
              e.identifier !== v
            ) {
              for (
                o = n.length;
                -1 < --o && (e = n[o]).identifier !== v && e.target !== h;
              );
              if (o < 0) return;
            }
            (Q.pointerEvent = l),
              (Q.pointerX = e.pageX),
              (Q.pointerY = e.pageY);
          }
          return (
            c && l
              ? (xa(l), (G = !0), Ma(Q, "release", "onRelease"))
              : l && !s
                ? ((G = !1),
                  O && (p.snap || p.bounds) && wh(p.inertia || p.throwProps),
                  Ma(Q, "release", "onRelease"),
                  (Xe && "touchmove" === l.type) ||
                  -1 !== l.type.indexOf("cancel") ||
                  (Ma(Q, "click", "onClick"),
                    Pe() - ae < 300 && Ma(Q, "doubleclick", "onDoubleClick"),
                    (i = l.target || h),
                    (ae = Pe()),
                    (a = function syntheticClick() {
                      ae === F ||
                        !Q.enabled() ||
                        Q.isPressed ||
                        l.defaultPrevented ||
                        (i.click
                          ? i.click()
                          : ce.createEvent &&
                          ((r = ce.createEvent("MouseEvents")).initMouseEvent(
                            "click",
                            !0,
                            !0,
                            xe,
                            1,
                            Q.pointerEvent.screenX,
                            Q.pointerEvent.screenY,
                            Q.pointerX,
                            Q.pointerY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null
                          ),
                            i.dispatchEvent(r)));
                    }),
                    Xe || l.defaultPrevented || ge.delayedCall(0.05, a)))
                : (wh(p.inertia || p.throwProps),
                  Q.allowEventDefault ||
                    !l ||
                    (!1 === p.dragClickables && ie.call(Q, l.target)) ||
                    !s ||
                    (A && (!H || A !== H)) ||
                    !1 === l.cancelable
                    ? (G = !1)
                    : ((G = !0), xa(l)),
                  Ma(Q, "release", "onRelease")),
            de() && d.duration(Q.tween.duration()),
            s && Ma(Q, "dragend", "onDragEnd"),
            !0
          );
        }
        G && e && u && xa(e);
      };
    return (
      (t = Draggable.get(h)) && t.kill(),
      (e.startDrag = function (e, t) {
        var n, o, r, i;
        Bh(e || Q.pointerEvent, !0),
          t &&
          !Q.hitTest(e || Q.pointerEvent) &&
          ((n = La(e || Q.pointerEvent)),
            (o = La(h)),
            (r = Hh({ x: n.left + n.width / 2, y: n.top + n.height / 2 })),
            (i = Hh({ x: o.left + o.width / 2, y: o.top + o.height / 2 })),
            (w -= r.x - i.x),
            (b -= r.y - i.y)),
          Q.isDragging ||
          ((Q.isDragging = !0), Ma(Q, "dragstart", "onDragStart"));
      }),
      (e.drag = pe),
      (e.endDrag = function (e) {
        return he(e || Q.pointerEvent, !0);
      }),
      (e.timeSinceDrag = function () {
        return Q.isDragging ? 0 : (Pe() - $) / 1e3;
      }),
      (e.timeSinceClick = function () {
        return (Pe() - ae) / 1e3;
      }),
      (e.hitTest = function (e, t) {
        return Draggable.hitTest(Q.target, e, t);
      }),
      (e.getDirection = function (e, t) {
        var n,
          o,
          r,
          i,
          a,
          l,
          s = "velocity" === e && Se ? e : W(e) && !z ? "element" : "start";
        return (
          "element" === s && ((a = La(Q.target)), (l = La(e))),
          (n =
            "start" === s
              ? Q.x - M
              : "velocity" === s
                ? Se.getVelocity(h, d)
                : a.left + a.width / 2 - (l.left + l.width / 2)),
          z
            ? n < 0
              ? "counter-clockwise"
              : "clockwise"
            : ((t = t || 2),
              (o =
                "start" === s
                  ? Q.y - T
                  : "velocity" === s
                    ? Se.getVelocity(h, J)
                    : a.top + a.height / 2 - (l.top + l.height / 2)),
              (i =
                (r = Math.abs(n / o)) < 1 / t ? "" : n < 0 ? "left" : "right"),
              r < t && ("" !== i && (i += "-"), (i += o < 0 ? "up" : "down")),
              i)
        );
      }),
      (e.applyBounds = function (e, t) {
        var n, o, r, i, a, l;
        if (e && p.bounds !== e) return (p.bounds = e), Q.update(!0, t);
        if ((qh(!0), th(), D && !de())) {
          if (
            ((n = Q.x),
              (o = Q.y),
              E < n ? (n = E) : n < S && (n = S),
              L < o ? (o = L) : o < Y && (o = Y),
              (Q.x !== n || Q.y !== o) &&
              ((r = !0),
                (Q.x = Q.endX = n),
                z ? (Q.endRotation = n) : (Q.y = Q.endY = o),
                ph((k = !0)),
                Q.autoScroll && !Q.isDragging))
          )
            for (
              Ha(h.parentNode),
              i = h,
              Ie.scrollTop =
              null != xe.pageYOffset
                ? xe.pageYOffset
                : null != ce.documentElement.scrollTop
                  ? ce.documentElement.scrollTop
                  : ce.body.scrollTop,
              Ie.scrollLeft =
              null != xe.pageXOffset
                ? xe.pageXOffset
                : null != ce.documentElement.scrollLeft
                  ? ce.documentElement.scrollLeft
                  : ce.body.scrollLeft;
              i && !l;
            )
              (a = (l = Fe(i.parentNode)) ? Ie : i.parentNode),
                U &&
                a.scrollTop > a._gsMaxScrollY &&
                (a.scrollTop = a._gsMaxScrollY),
                K &&
                a.scrollLeft > a._gsMaxScrollX &&
                (a.scrollLeft = a._gsMaxScrollX),
                (i = a);
          Q.isThrowing &&
            (r || Q.endX > E || Q.endX < S || Q.endY > L || Q.endY < Y) &&
            wh(p.inertia || p.throwProps, r);
        }
        return Q;
      }),
      (e.update = function (e, t, n) {
        var o = Q.x,
          r = Q.y;
        return (
          xh(!t),
          e ? Q.applyBounds() : (k && n && ph(!0), qh(!0)),
          t && (ue(Q.pointerX, Q.pointerY), k && ph(!0)),
          Q.isPressed &&
          !t &&
          ((K && 0.01 < Math.abs(o - Q.x)) ||
            (U && 0.01 < Math.abs(r - Q.y) && !z)) &&
          yh(),
          Q.autoScroll &&
          (Ha(h.parentNode, Q.isDragging),
            (ee = Q.isDragging),
            ph(!0),
            Ea(h, Fh),
            Da(h, Fh)),
          Q
        );
      }),
      (e.enable = function (e) {
        var t,
          n,
          o,
          r = { lazy: !0 };
        if (
          (z || !1 === p.cursor || (r.cursor = p.cursor || Le),
            ge.utils.checkPrefix("touchCallout") && (r.touchCallout = "none"),
            "soft" !== e)
        ) {
          for (
            pa(
              Z,
              K == U
                ? "none"
                : (p.allowNativeTouchScrolling &&
                  (h.scrollHeight === h.clientHeight) ==
                  (h.scrollWidth === h.clientHeight)) ||
                  p.allowEventDefault
                  ? "manipulation"
                  : K
                    ? "pan-y"
                    : "pan-x"
            ),
            n = Z.length;
            -1 < --n;
          )
            (o = Z[n]),
              Ye || va(o, "mousedown", Bh),
              va(o, "touchstart", Bh),
              va(o, "click", Gh, !0),
              ge.set(o, r),
              o.getBBox &&
              o.ownerSVGElement &&
              ge.set(o.ownerSVGElement, {
                touchAction:
                  K == U
                    ? "none"
                    : p.allowNativeTouchScrolling || p.allowEventDefault
                      ? "manipulation"
                      : K
                        ? "pan-y"
                        : "pan-x",
              }),
              p.allowContextMenu || va(o, "contextmenu", oh);
          Sa(Z, !1);
        }
        return (
          Da(h, Fh),
          (u = !0),
          Se &&
          "soft" !== e &&
          Se.track(f || h, q ? "x,y" : z ? "rotation" : "top,left"),
          (h._gsDragID = t = "d" + Oe++),
          (Be[t] = Q),
          f && (f.enable(), (f.element._gsDragID = t)),
          (p.bounds || z) && yh(),
          p.bounds && Q.applyBounds(),
          Q
        );
      }),
      (e.disable = function (e) {
        var t,
          n,
          o = Q.isDragging;
        if (!z) for (t = Z.length; -1 < --t;) Ia(Z[t], "cursor", null);
        if ("soft" !== e) {
          for (pa(Z, null), t = Z.length; -1 < --t;)
            (n = Z[t]),
              Ia(n, "touchCallout", null),
              wa(n, "mousedown", Bh),
              wa(n, "touchstart", Bh),
              wa(n, "click", Gh),
              wa(n, "contextmenu", oh);
          Sa(Z, !0),
            y &&
            (wa(y, "touchcancel", he),
              wa(y, "touchend", he),
              wa(y, "touchmove", pe)),
            wa(ce, "mouseup", he),
            wa(ce, "mousemove", pe);
        }
        return (
          Ea(h, Fh),
          (u = !1),
          Se &&
          "soft" !== e &&
          Se.untrack(f || h, q ? "x,y" : z ? "rotation" : "top,left"),
          f && f.disable(),
          ta(ph),
          (Q.isDragging = Q.isPressed = m = !1),
          o && Ma(Q, "dragend", "onDragEnd"),
          Q
        );
      }),
      (e.enabled = function (e, t) {
        return arguments.length ? (e ? Q.enable(t) : Q.disable(t)) : u;
      }),
      (e.kill = function () {
        return (
          (Q.isThrowing = !1),
          Q.tween && Q.tween.kill(),
          Q.disable(),
          ge.set(Z, { clearProps: "userSelect" }),
          delete Be[h._gsDragID],
          Q
        );
      }),
      ~n.indexOf("scroll") &&
      ((f = e.scrollProxy = new Wa(
        h,
        (function _extend(e, t) {
          for (var n in t) n in e || (e[n] = t[n]);
          return e;
        })(
          {
            onKill: function onKill() {
              Q.isPressed && he(null);
            },
          },
          p
        )
      )),
        (h.style.overflowY = U && !Me ? "auto" : "hidden"),
        (h.style.overflowX = K && !Me ? "auto" : "hidden"),
        (h = f.content)),
      z ? (o.rotation = 1) : (K && (o[d] = 1), U && (o[J] = 1)),
      (le.force3D = !("force3D" in p) || p.force3D),
      e.enable(),
      e
    );
  }
  !(function _setDefaults(e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
  })(I.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: !1,
    isPressed: !1,
  }),
    (I.zIndex = 1e3),
    (I.version = "3.7.0"),
    U() && ge.registerPlugin(I),
    (e.Draggable = I),
    (e.default = I);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  }
  else {
    // delete e.default;
  }
});