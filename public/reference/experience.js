/* Interactions for the Carter Digitals reference design. */
(function () {
  const E = "/reference/emblem.jpg";
  var rm = matchMedia("(prefers-reduced-motion:reduce)").matches,
    $ = function (s, r) {
      return [].slice.call((r || document).querySelectorAll(s));
    };
  var WA = "https://wa.me/27724026893?text=";
  var W = [
    [
      "Carter Launch",
      "R4,999",
      "Startups and small businesses moving beyond social media alone.",
      [
        "Up to 4 custom pages",
        "1 enquiry form, WhatsApp, call and email links",
        "Basic SEO, sitemap and image optimisation",
        "2 revisions · 14-day defect-fix",
      ],
      "5–7 business days",
    ],
    [
      "Carter Business",
      "R7,999",
      "Established service businesses competing on trust: law, dental, schools, consultancies.",
      [
        "Up to 7 pages and a 30-image gallery",
        "Conversion copywriting for up to 7 pages",
        "GA4, Search Console and local structured data",
        "2 forms · enquiry and WhatsApp tracking",
      ],
      "7–10 business days",
      1,
    ],
    [
      "Carter Growth",
      "R12,500",
      "Brands needing advanced content, cinematic design and editable pages.",
      [
        "Up to 10 pages plus a tailored CMS",
        "Cinematic hero and 1 signature interactive feature",
        "Event tracking, enhanced SEO, redirect mapping",
        "3 revisions · 30-day fix · 60-min CMS training",
      ],
      "10–14 business days",
    ],
  ];
  var S = [
    [
      "Carter Shop Start",
      "R18,999",
      "A first professional store for boutiques, beauty and independent retailers.",
      [
        "Up to 25 products and 5 categories",
        "One payment gateway (e.g. PayFast), coupons, guest checkout",
        "3 delivery rules and basic stock tracking",
        "60-minute store-admin training",
      ],
      "10–15 business days",
    ],
    [
      "Carter Shop Professional",
      "R29,999",
      "Growing brands that need richer discovery and retention tools.",
      [
        "Up to 100 products, 250 variants, filters",
        "Abandoned-cart email, reviews and cross-sells",
        "Courier integration and up to 4 shipping zones",
        "GA4 with key commerce events",
      ],
      "15–20 business days",
      1,
    ],
    [
      "Carter Commerce Growth",
      "R49,999",
      "Premium stores with larger catalogues and active campaigns.",
      [
        "Up to 250 products and 500 variants",
        "Cinematic hero and a signature feature",
        "Bundles, upsells, gift cards, 2 integrations",
        "2-email cart recovery · 3 revisions",
      ],
      "20–30 business days",
    ],
  ];
  var A = [
    [
      "Carter Workflow",
      "R14,999",
      "Digitise one focused process.",
      [
        "One workflow, up to 5 screens",
        "Structured data capture",
        "Admin view to manage records",
      ],
      "2–3 weeks",
    ],
    [
      "Carter MVP",
      "R29,999",
      "Launch a first usable product or portal.",
      [
        "Up to 12 screens and 3 user roles",
        "Secure login and admin dashboard",
        "1 integration · PWA where suitable",
      ],
      "3–5 weeks",
    ],
    [
      "Carter Business App",
      "R59,999",
      "Manage several business processes in one tool.",
      [
        "Up to 3 modules, about 20 screens",
        "5 roles with permissions",
        "Reporting, files and 2 integrations",
      ],
      "6–9 weeks",
      1,
    ],
    [
      "Carter Advanced Platform",
      "R119,999+",
      "Complex operations on custom architecture.",
      [
        "Multiple connected modules and user groups",
        "Advanced permissions and workflow logic",
        "Up to 3 integrations and acceptance criteria",
      ],
      "10–16+ weeks",
    ],
    [
      "Carter SaaS &amp; Marketplace",
      "R199,999+",
      "Build a software product or marketplace.",
      [
        "Multi-tenant architecture",
        "Subscriptions and recurring billing",
        "Listings, profiles and moderation tools",
      ],
      "Discovery-led",
    ],
  ];
  function count(el) {
    var n = +el.dataset.n,
      p = el.dataset.p || "",
      s = el.dataset.s || "",
      t0 = null;
    if (rm) {
      el.textContent = p + n.toLocaleString("en-ZA") + s;
      return;
    }
    (function f(t) {
      t0 = t0 || t;
      var k = Math.min((t - t0) / 1600, 1),
        e = 1 - Math.pow(1 - k, 3);
      el.textContent = p + Math.round(n * e).toLocaleString("en-ZA") + s;
      if (k < 1) requestAnimationFrame(f);
    })(performance.now());
  }
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          setTimeout(function () {
            e.target.classList.add("rdy");
          }, 1600);
          $("[data-n]", e.target).forEach(count);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  function obs() {
    $(".rv").forEach(function (e) {
      if (!e.classList.contains("in")) io.observe(e);
    });
  }
  var views = {
    home: "/",
    websites: "/websites",
    stores: "/stores",
    apps: "/apps",
    work: "/work",
    company: "/company",
  };
  const view = document.querySelector("[data-reference-view]")?.dataset
    .referenceView;
  const legacyHash = location.pathname === "/" && location.hash.slice(1);
  if (legacyHash && Object.hasOwn(views, legacyHash) && legacyHash !== "home") {
    location.replace(views[legacyHash]);
    return;
  }
  const tr = document.getElementById("trail");
  const L = tr?.getTotalLength() || 0;
  const nodes = $(".node"),
    steps = $(".step");
  const jr = document.getElementById("journey"),
    bar = document.getElementById("bar");
  var tk = false;
  if (tr) {
    tr.style.strokeDasharray = String(L);
    nodes.forEach(function (node) {
      const p = tr.getPointAtLength(L * Number(node.dataset.at));
      node.setAttribute("cx", String(p.x));
      node.setAttribute("cy", String(p.y));
    });
  }
  function upd() {
    tk = false;
    if (typeof navHide === "function") navHide();
    var H = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = "scaleX(" + (H > 0 ? scrollY / H : 0) + ")";
    if (!tr || !jr?.offsetParent || rm) return;
    var r = jr.getBoundingClientRect(),
      p = Math.min(Math.max(-r.top / (r.height - innerHeight), 0), 1);
    tr.style.strokeDashoffset = L * (1 - p);
    var th = [0.02, 0.5, 0.97];
    nodes.forEach(function (n, k) {
      n.classList.toggle("on", p >= th[k] - 0.02);
    });
    steps.forEach(function (s, k) {
      s.classList.toggle("on", k === 0 || p >= [0, 0.34, 0.7][k]);
    });
  }
  addEventListener(
    "scroll",
    function () {
      if (!tk) {
        tk = true;
        requestAnimationFrame(upd);
      }
    },
    { passive: true },
  );
  var hero = $(".hero")[0],
    pl = document.getElementById("plate");
  if (hero && pl && !rm) {
    hero.addEventListener("pointermove", function (e) {
      hero.style.setProperty(
        "--px",
        (e.clientX / innerWidth - 0.5) * 40 + "px",
      );
      hero.style.setProperty(
        "--py",
        (e.clientY / innerHeight - 0.5) * 40 + "px",
      );
      var b = pl.getBoundingClientRect();
      pl.style.setProperty(
        "--ry",
        ((e.clientX - b.left) / b.width - 0.5) * 18 + "deg",
      );
      pl.style.setProperty(
        "--rx",
        -((e.clientY - b.top) / b.height - 0.5) * 14 + "deg",
      );
    });
  }
  if (!rm && matchMedia("(pointer:fine)").matches)
    document.addEventListener("pointermove", function (e) {
      var c = e.target.closest && e.target.closest(".card");
      if (c) {
        var b = c.getBoundingClientRect();
        c.style.setProperty("--mx", e.clientX - b.left + "px");
        c.style.setProperty("--my", e.clientY - b.top + "px");
      }
    });

  // ---- new modules ----
  var nav = document.getElementById("nav"),
    lk = document.getElementById("lk"),
    ind = lk.querySelector(".ind"),
    menu = document.getElementById("menu"),
    bg = document.getElementById("burger"),
    ly = 0,
    glow = document.getElementById("glow");
  function setInd() {
    var a = lk.querySelector("a.on");
    if (!a) {
      ind.style.opacity = 0;
      return;
    }
    ind.style.opacity = 1;
    ind.style.left = a.offsetLeft + "px";
    ind.style.width = a.offsetWidth + "px";
  }
  function navHide() {
    var y = scrollY;
    if (y > ly + 6 && y > 240 && !menu.classList.contains("on"))
      nav.classList.add("hide");
    else if (y < ly - 6 || y < 120) nav.classList.remove("hide");
    ly = y;
    nav.classList.toggle("sc", y > 30);
    var o = document.querySelectorAll(".bgo");
    if (o[0]) {
      o[0].style.transform = "translateY(" + -y * 0.08 + "px)";
      o[1].style.transform = "translateY(" + y * 0.06 + "px)";
    }
  }
  function menuClose(restoreFocus = false) {
    menu.classList.remove("on");
    menu.inert = true;
    menu.setAttribute("aria-hidden", "true");
    bg.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    if (restoreFocus) bg.focus();
  }
  bg.addEventListener("click", function () {
    if (menu.classList.contains("on")) {
      menuClose(true);
      return;
    }
    menu.inert = false;
    menu.setAttribute("aria-hidden", "false");
    menu.classList.add("on");
    bg.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    nav.classList.remove("hide");
    menu.querySelector("a")?.focus();
  });
  $("#menu a").forEach(function (anchor) {
    anchor.addEventListener("click", () => menuClose());
  });
  window.addEventListener("pageshow", () => menuClose());
  window.addEventListener("resize", function () {
    setInd();
    if (getComputedStyle(bg).display === "none") menuClose();
  });
  window.addEventListener("keydown", function (event) {
    if (!menu.classList.contains("on")) return;
    if (event.key === "Escape") menuClose(true);
    if (event.key !== "Tab") return;
    const links = $("#menu a");
    const first = links[0],
      last = links.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      bg.focus();
    } else if (event.shiftKey && document.activeElement === bg) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      bg.focus();
    } else if (!event.shiftKey && document.activeElement === bg) {
      event.preventDefault();
      first?.focus();
    }
  });
  setInd();
  document.fonts?.ready.then(setInd);
  if (view === "home") {
    // orbit
    (function () {
      var g = document.getElementById("orb"),
        N = [
          ["WA", "#25d366", 105, 0, 26],
          ["Mail", "#2fa8ff", 105, 180, 26],
          ["Google", "#d4b25a", 165, 50, 40],
          ["Maps", "#e03348", 165, 170, 40],
          ["GA4", "#f59e0b", 165, 290, 40],
          ["Pay", "#a78bfa", 225, 20, 58],
          ["Cal", "#9aa8bd", 225, 200, 58],
        ],
        h = "";
      N.forEach(function (n) {
        var r = n[2],
          a = n[3],
          d = n[4];
        h +=
          '<g><animateTransform attributeName="transform" type="rotate" from="' +
          a +
          ' 260 260" to="' +
          (a + 360) +
          ' 260 260" dur="' +
          d +
          's" repeatCount="indefinite"/><g transform="translate(' +
          (260 + r) +
          ' 260)"><g><animateTransform attributeName="transform" type="rotate" from="' +
          -a +
          '" to="' +
          (-a - 360) +
          '" dur="' +
          d +
          's" repeatCount="indefinite"/><circle r="29" fill="' +
          n[1] +
          '" opacity=".16"/><circle r="23" fill="' +
          n[1] +
          '"/><text text-anchor="middle" y="4" font-size="11" font-weight="600" fill="#04101f">' +
          n[0] +
          "</text></g></g></g>";
      });
      g.innerHTML = h;
      document.getElementById("eimg").setAttribute("href", E);
    })();
    // before/after
    (function () {
      var b = document.getElementById("ba"),
        r = b.querySelector("input"),
        set = function (v) {
          b.style.setProperty("--p", v + "%");
        };
      r.addEventListener("input", function () {
        set(r.value);
      });
      if (!rm) {
        var o = new IntersectionObserver(
          function (es) {
            if (es[0].isIntersecting) {
              o.disconnect();
              var t0 = null;
              (function f(t) {
                t0 = t0 || t;
                var k = Math.min((t - t0) / 2400, 1),
                  v = 50 + Math.sin(k * Math.PI * 2) * 30 * (1 - k * 0.2);
                set(v);
                r.value = v;
                if (k < 1) requestAnimationFrame(f);
                else {
                  set(50);
                  r.value = 50;
                }
              })(performance.now());
            }
          },
          { threshold: 0.6 },
        );
        o.observe(b);
      }
    })();
  }
  if (view === "home") {
    // quiz
    (function () {
      var Q = [
          [
            "What do you need most?",
            ["More enquiries", "Sell products online", "A business system"],
          ],
          [
            "Where is the business?",
            ["Just starting", "Established", "Scaling up"],
          ],
        ],
        M = [W, S, A],
        H = ["/websites", "/stores", "/apps"],
        a = [],
        b = document.getElementById("qb"),
        d = $("#qd i"),
        hh = document.getElementById("qh");
      function show() {
        var n = a.length;
        if (n < 2) {
          hh.textContent = Q[n][0];
          d.forEach(function (x, k) {
            x.classList.toggle("on", k <= n);
          });
          b.innerHTML =
            '<div class="opts">' +
            Q[n][1]
              .map(function (o, k) {
                return (
                  '<button class="opt" type="button" data-k="' +
                  k +
                  '">' +
                  o +
                  "</button>"
                );
              })
              .join("") +
            "</div>";
          $(".opt", b).forEach(function (o) {
            o.addEventListener("click", function () {
              a.push(+o.dataset.k);
              show();
              if (a.length === 2) {
                window.dispatchEvent(
                  new CustomEvent("carter:analytics", {
                    detail: {
                      event: "package_finder_complete",
                      package: de(M[a[0]][a[1]][0]),
                    },
                  }),
                );
              }
              b.querySelector("button, a")?.focus();
            });
          });
        } else {
          var p = M[a[0]][a[1]];
          hh.textContent = "Your best starting point";
          d.forEach(function (x) {
            x.classList.add("on");
          });
          b.innerHTML =
            '<div class="res"><h3>' +
            p[0] +
            '</h3><div class="pr"><small>from</small>' +
            p[1] +
            "</div><p>" +
            p[2] +
            "</p><ul>" +
            p[3]
              .slice(0, 3)
              .map(function (x) {
                return "<li>" + x + "</li>";
              })
              .join("") +
            '</ul><div class="row"><a class="btn pri shine" href="' +
            WA +
            encodeURIComponent(
              "Hi Kabelo, the package finder suggested " +
                p[0] +
                ". Can we talk?",
            ) +
            '">Get my quote</a><a class="btn" href="' +
            H[a[0]] +
            '">See all options</a><button class="btn" id="qr">Start over</button></div></div>';
          document.getElementById("qr").addEventListener("click", function () {
            a = [];
            show();
            b.querySelector("button")?.focus();
          });
        }
      }
      show();
    })();
  }
  // pointer effects
  var lc = null,
    mb = null;
  if (!rm && matchMedia("(pointer:fine)").matches)
    document.addEventListener("pointermove", function (e) {
      if (glow) {
        glow.style.opacity = 1;
        glow.style.transform =
          "translate(" + e.clientX + "px," + e.clientY + "px)";
      }
      var t = e.target.closest ? e.target.closest(".pc.rdy") : null;
      if (lc && lc !== t) {
        lc.style.removeProperty("--tx");
        lc.style.removeProperty("--ty");
      }
      lc = t;
      if (t) {
        var r = t.getBoundingClientRect();
        t.style.setProperty(
          "--ty",
          ((e.clientX - r.left) / r.width - 0.5) * 7 + "deg",
        );
        t.style.setProperty(
          "--tx",
          -((e.clientY - r.top) / r.height - 0.5) * 7 + "deg",
        );
      }
      var bt = e.target.closest ? e.target.closest(".btn") : null;
      if (mb && mb !== bt) {
        mb.style.transform = "";
        mb = null;
      }
      if (bt && !rm) {
        var q = bt.getBoundingClientRect();
        bt.style.transform =
          "translate(" +
          ((e.clientX - q.left) / q.width - 0.5) * 10 +
          "px," +
          ((e.clientY - q.top) / q.height - 0.5) * 8 +
          "px)";
        mb = bt;
      }
    });

  if (view === "home") {
    // ---- hero rotator + feed ----
    (function () {
      var rw = document.getElementById("rw"),
        bs = $("b", rw),
        k = 0,
        box = rw.parentNode;
      function fit() {
        box.style.width = bs[k].scrollWidth + 4 + "px";
      }
      function go() {
        rw.style.transform = "translateY(" + -k * 1.04 + "em)";
        fit();
      }
      document.fonts && document.fonts.ready.then(fit);
      setTimeout(fit, 300);
      addEventListener("resize", fit);
      if (!rm)
        setInterval(function () {
          k = (k + 1) % bs.length;
          go();
        }, 2600);
      var F = [
          ["Consultation request", "Law firm · Sandton"],
          ["Quote request", "Construction · Midrand"],
          ["Appointment request", "Dental practice · Pretoria"],
          ["Admissions enquiry", "School · Centurion"],
          ["Tender enquiry", "Supplier · Tshwane"],
        ],
        fi = 0,
        fd = document.getElementById("fd");
      function feed() {
        var h = "";
        for (var j = 0; j < 3; j++) {
          var f = F[(fi + j) % F.length];
          h +=
            '<div class="fr"><div><b>' +
            f[0] +
            "</b><span>" +
            f[1] +
            "</span></div></div>";
        }
        fd.innerHTML = h;
      }
      feed();
      if (!rm)
        setInterval(function () {
          fi = (fi + 4) % F.length;
          feed();
        }, 3200);
      hero.addEventListener("pointermove", function (e) {
        var b = hero.getBoundingClientRect();
        hero.style.setProperty("--gx", e.clientX - b.left + "px");
        hero.style.setProperty("--gy", e.clientY - b.top + "px");
      });
    })();
  }
  function de(h) {
    var t = document.createElement("textarea");
    t.innerHTML = h;
    return t.value;
  }
  function escapeText(value) {
    const node = document.createElement("span");
    node.textContent = value;
    return node.innerHTML;
  }
  function rand(n) {
    return "R" + Math.round(n).toLocaleString("en-ZA");
  }
  if (view === "home") {
    // ---- investment planner ----
    (function () {
      var PT = [
        {
          n: "Website",
          t: [
            ["Carter Launch", 4999, "Up to 4 pages"],
            ["Carter Business", 7999, "Up to 7 pages · recommended"],
            ["Carter Growth", 12500, "Up to 10 pages + CMS"],
          ],
          a: [
            ["Extra page", 750],
            ["Campaign landing page", 1500],
            ["Google Business Profile", 750],
            ["Booking integration", 1500],
            ["Brand starter kit", 2500],
          ],
          c: ["Carter Care", 399],
        },
        {
          n: "Online store",
          t: [
            ["Shop Start", 18999, "Up to 25 products"],
            ["Shop Professional", 29999, "Up to 100 products · recommended"],
            ["Commerce Growth", 49999, "Up to 250 products"],
          ],
          a: [
            ["25 more products", 1500],
            ["Courier integration", 1500],
            ["Email automation", 2500],
            ["Extra payment gateway", 1500],
          ],
          c: ["Carter Store Care", 999],
        },
        {
          n: "Web app",
          t: [
            ["Carter Workflow", 14999, "One focused workflow"],
            ["Carter MVP", 29999, "Up to 12 screens"],
            ["Carter Business App", 59999, "Multi-module · recommended"],
            ["Advanced Platform", 119999, "Custom architecture (from)"],
          ],
          a: [
            ["WhatsApp integration", 3500],
            ["Payment gateway", 5500],
            ["Booking system", 6500],
            ["AI-powered feature", 9500],
            ["Extra module", 8500],
          ],
          c: null,
        },
      ];
      var ty = 0,
        ti = 1,
        ad = {},
        care = false,
        cur = 0,
        el = function (i) {
          return document.getElementById(i);
        };
      function draw() {
        var P = PT[ty];
        el("pt").innerHTML = PT.map(function (p, k) {
          return (
            '<button class="' +
            (k === ty ? "on" : "") +
            '" data-k="' +
            k +
            '">' +
            p.n +
            "</button>"
          );
        }).join("");
        el("ptier").innerHTML = P.t
          .map(function (t, k) {
            return (
              '<button class="opt' +
              (k === ti ? " on" : "") +
              '" data-k="' +
              k +
              '"><b>' +
              t[0] +
              "</b> · " +
              rand(t[1]) +
              "<small>" +
              t[2] +
              "</small></button>"
            );
          })
          .join("");
        el("padd").innerHTML = P.a
          .map(function (a, k) {
            return (
              '<button class="tg' +
              (ad[k] ? " on" : "") +
              '" data-k="' +
              k +
              '">' +
              a[0] +
              " <b>+" +
              rand(a[1]) +
              "</b></button>"
            );
          })
          .join("");
        el("pcw").style.display = P.c ? "flex" : "none";
        el("pcl").textContent = P.c
          ? "Add " + P.c[0] + " (" + rand(P.c[1]) + "/month)"
          : "";
        el("pcare").checked = care;
        $("#pt button").forEach(function (b) {
          b.onclick = function () {
            ty = +b.dataset.k;
            ti = Math.min(1, PT[ty].t.length - 1);
            ad = {};
            care = false;
            draw();
          };
        });
        $("#ptier .opt").forEach(function (b) {
          b.onclick = function () {
            ti = +b.dataset.k;
            draw();
          };
        });
        $("#padd .tg").forEach(function (b) {
          b.onclick = function () {
            ad[b.dataset.k] = !ad[b.dataset.k];
            draw();
          };
        });
        el("pcare").onchange = function () {
          care = this.checked;
          draw();
        };
        var tot = P.t[ti][1],
          sm = [
            "<li><span>" +
              P.t[ti][0] +
              "</span><span>" +
              rand(P.t[ti][1]) +
              "</span></li>",
          ],
          ls = [P.t[ti][0] + " (" + rand(P.t[ti][1]) + ")"];
        P.a.forEach(function (a, k) {
          if (ad[k]) {
            tot += a[1];
            sm.push(
              "<li><span>" +
                a[0] +
                "</span><span>+" +
                rand(a[1]) +
                "</span></li>",
            );
            ls.push(a[0] + " (+" + rand(a[1]) + ")");
          }
        });
        if (care && P.c) {
          sm.push(
            "<li><span>" +
              P.c[0] +
              "</span><span>" +
              rand(P.c[1]) +
              "/mo</span></li>",
          );
          ls.push(P.c[0] + " (" + rand(P.c[1]) + "/mo)");
        }
        el("psum").innerHTML = sm.join("");
        el("pdep").textContent = rand(tot / 2);
        var from = cur,
          t0 = null;
        (function f(t) {
          t0 = t0 || t;
          var k = Math.min((t - t0) / 600, 1),
            e = 1 - Math.pow(1 - k, 3);
          el("ptot").textContent = rand(from + (tot - from) * (rm ? 1 : e));
          if (k < 1 && !rm) requestAnimationFrame(f);
        })(performance.now());
        cur = tot;
        el("pwa").href =
          WA +
          encodeURIComponent(
            "Hi Kabelo, I built this quote on your website: " +
              ls.join(", ") +
              ". Estimated from " +
              rand(tot) +
              ". Can we talk?",
          );
      }
      draw();
    })();
    // ---- onboarding stepper ----
    (function () {
      var S = [
          [
            "Discovery call",
            "A focused 30-minute conversation with no obligation. We cover your goals, your customers and your competition.",
          ],
          [
            "Written scope and quote",
            "You receive a proposed scope, a clear written quote and the fastest sensible route to launch. Deliverables, limits and exclusions are agreed in writing.",
          ],
          [
            "Deposit and content",
            "A 50% deposit reserves your project. You supply copy, images and access, and we help refine the text you provide.",
          ],
          [
            "Prototype preview",
            "You approve the direction against something you can actually see, before the full build. Less decision risk, less rework.",
          ],
          [
            "Build, review and test",
            "Custom design, conversion paths and integrations. Feedback arrives in consolidated rounds while we test mobile, forms and speed.",
          ],
          [
            "Launch and handover",
            "The remaining 50% is due before go-live. Domain, access and ownership are documented, and your defect-fix window begins (14 to 30 days).",
          ],
        ],
        c = 0,
        tm,
        b = document.getElementById("stb"),
        ct = document.getElementById("stc"),
        f = document.getElementById("stf");
      function go(k, u) {
        c = k;
        f.style.width = ((k + 1) / S.length) * 100 + "%";
        b.innerHTML = S.map(function (x, j) {
          return (
            '<button class="' +
            (j === c ? "on" : j < c ? "dn" : "") +
            '" data-k="' +
            j +
            '">' +
            (j + 1) +
            " · " +
            x[0] +
            "</button>"
          );
        }).join("");
        ct.innerHTML =
          '<div class="num">0' +
          (c + 1) +
          "</div><h3>" +
          S[c][0] +
          "</h3><p>" +
          S[c][1] +
          "</p>";
        $("button", b).forEach(function (x) {
          x.onclick = function () {
            clearInterval(tm);
            go(+x.dataset.k);
          };
        });
      }
      go(0);
      if (!rm)
        tm = setInterval(function () {
          go((c + 1) % S.length);
        }, 4500);
    })();
    // ---- project wizard ----
    (function () {
      var Q = [
          [
            "What does your business do?",
            [
              "Legal &amp; professional",
              "Education &amp; training",
              "Health &amp; dental",
              "Construction &amp; property",
              "SME or local service",
              "Government-aligned",
            ],
          ],
          [
            "What do you want most?",
            [
              "More enquiries &amp; bookings",
              "Sell products online",
              "A portal or business system",
              "Redesign my current site",
            ],
          ],
          [
            "When do you want to launch?",
            ["As soon as possible", "Within a month", "I’m planning ahead"],
          ],
        ],
        a = [],
        b = document.getElementById("wb"),
        h = document.getElementById("wh"),
        bar = document.getElementById("wbar");
      function step() {
        var n = a.length;
        bar.style.width = Math.min(((n + 1) / 4) * 100, 100) + "%";
        if (n < 3) {
          h.textContent = Q[n][0];
          b.innerHTML =
            '<div class="opts">' +
            Q[n][1]
              .map(function (o, k) {
                return (
                  '<button class="opt" type="button" data-k="' +
                  k +
                  '">' +
                  o +
                  "</button>"
                );
              })
              .join("") +
            "</div>" +
            (n
              ? '<p style="margin-top:18px"><button class="tg" id="wbk">← Back</button></p>'
              : "");
          $(".opt", b).forEach(function (o) {
            o.onclick = function () {
              a.push(de(Q[n][1][+o.dataset.k]));
              step();
              b.querySelector("button, input")?.focus();
            };
          });
          var bk = document.getElementById("wbk");
          if (bk)
            bk.onclick = function () {
              a.pop();
              step();
              b.querySelector("button")?.focus();
            };
        } else if (n === 3) {
          h.textContent = "Where should Kabelo reach you?";
          b.innerHTML =
            '<div class="fld"><input id="wn" aria-label="Your name" maxlength="100" placeholder="Your name" autocomplete="name"><input id="wc" aria-label="Business name" maxlength="120" placeholder="Business name" autocomplete="organization"><input id="wp" type="tel" aria-label="WhatsApp or phone number" maxlength="32" placeholder="WhatsApp or phone number" autocomplete="tel" inputmode="tel"></div><p class="note" style="margin:12px 0 18px">Nothing is stored on this page. Pressing send opens WhatsApp or your email app with your message, so you stay in control of your details.</p><div class="row"><button class="btn pri shine" id="wg">Continue</button><button class="btn" id="wbk">← Back</button></div>';
          document.getElementById("wbk").onclick = function () {
            a.pop();
            step();
            b.querySelector("button")?.focus();
          };
          document.getElementById("wg").onclick = function () {
            var nm = document.getElementById("wn").value.trim();
            if (!nm) {
              const field = document.getElementById("wn");
              field.setAttribute("aria-invalid", "true");
              field.setAttribute("aria-describedby", "wizard-error");
              if (!document.getElementById("wizard-error")) {
                const error = document.createElement("p");
                error.id = "wizard-error";
                error.setAttribute("role", "alert");
                error.textContent = "Enter your name to continue.";
                field.closest(".fld").after(error);
              }
              field.focus();
              return;
            }
            a.push(
              nm,
              document.getElementById("wc").value.trim() || "my business",
              document.getElementById("wp").value.trim() || "",
            );
            step();
            b.querySelector("a")?.focus();
          };
        } else {
          h.textContent = "Your brief is ready.";
          var m =
            "Hi Kabelo, I’m " +
            a[3] +
            " from " +
            a[4] +
            " (" +
            a[0] +
            "). I’m looking for: " +
            a[1] +
            ". Timing: " +
            a[2] +
            "." +
            (a[5] ? " Best number: " + a[5] + "." : "");
          b.innerHTML =
            '<div class="sumry"><b>Industry:</b> ' +
            a[0] +
            "<br><b>Goal:</b> " +
            a[1] +
            "<br><b>Timing:</b> " +
            a[2] +
            "<br><b>From:</b> " +
            escapeText(a[3]) +
            ", " +
            escapeText(a[4]) +
            '</div><div class="row"><a class="btn wa shine" href="' +
            WA +
            encodeURIComponent(m) +
            '">Send on WhatsApp</a><a class="btn" href="mailto:kabelokadiaka4@gmail.com?subject=' +
            encodeURIComponent("Project enquiry from " + a[3]) +
            "&body=" +
            encodeURIComponent(m) +
            '">Send by email</a><button class="btn" id="wr">Start over</button></div><p class="note" style="margin-top:16px">Kabelo replies personally. First step is a no-obligation 30-minute conversation.</p>';
          document.getElementById("wr").onclick = function () {
            a = [];
            step();
            b.querySelector("button")?.focus();
          };
        }
      }
      step();
    })();
  }
  // ---- case studies ----
  var CS = [
    {
      n: "Manala & Co Incorporated",
      k: "Legal · Menlyn Maine, Pretoria",
      url: "https://manala-inc.co.za/",
      host: "manala-inc.co.za",
      c1: "#10294a",
      c2: "#d4b25a",
      nav: "Manala & Co",
      kick: "Est. Pretoria",
      h: "Premium multidisciplinary legal services.",
      sub: "Integrated legal and financial advice across employment, competition, litigation, public law and forensics.",
      pb: "Book a consultation",
      so: "Practice areas",
      cards: ["Employment Law", "Competition Law", "Civil Litigation"],
      chal: "A multidisciplinary firm needed a website that carried the weight of its practice, explained five disciplines without jargon and made a confidential first step feel safe.",
      did: [
        "Authority-led premium redesign with a founder’s message and team pages",
        "Five practice-area experiences, each with matters, FAQs and process",
        "A three-question matter router that points visitors to the right practice team",
        "A six-step engagement journey and four fee models explained up front",
        "Consultation booking, sector pages, insights, POPIA and PAIA notices",
        "Static hosting migration with cPanel deployment and a protected legacy backup",
      ],
      stats: [
        ["5", "practice areas organised"],
        ["3", "question matter router"],
        ["6", "step engagement journey"],
        ["4", "fee models explained"],
      ],
      tags: [
        "Redesign",
        "Onboarding flow",
        "Trust signals",
        "Hosting migration",
      ],
    },
    {
      n: "Lesia’s Educational Services",
      k: "Education · Soshanguve, Pretoria & Hammanskraal",
      url: "https://lesias.co.za/",
      host: "lesias.co.za",
      c1: "#173b32",
      c2: "#d9b45b",
      nav: "LESIA’S",
      kick: "Est. 2014 · Gauteng",
      h: "Your future in ECD deserves a clear beginning.",
      sub: "Supported Saturday ECD learning close to home, with clear programme and fee guidance.",
      pb: "Find my starting point",
      so: "Compare routes",
      cards: ["NQF Level 4", "NQF Level 5", "Trust Centre"],
      chal: "A training provider serving working adults needed to turn a confusing decision (which NQF level, what fees, which venue) into a confident enquiry, and to prove legitimacy before anyone paid.",
      did: [
        "A guided orientation that suggests the right admissions conversation",
        "NQF Level 4 and Level 5 programme comparison with status notes",
        "A Trust Centre linking the public SAQA record for programme 23118",
        "A certificate-collection guide for past students",
        "A four-step admissions journey, areas served, FAQs and WhatsApp admissions",
        "Local search foundations for ECD courses in Pretoria, Soshanguve and Hammanskraal, plus social sharing preview",
      ],
      stats: [
        ["2", "NQF pathways compared"],
        ["4", "step admissions journey"],
        ["4", "areas served"],
        ["SAQA", "public record linked"],
      ],
      tags: [
        "Enrolment journey",
        "Trust Centre",
        "Local SEO",
        "WhatsApp admissions",
      ],
    },
    {
      n: "Soshanguve Engineering School of Specialisation",
      k: "Education · Automotive & engineering",
      url: "https://www.sosha-automotive.org/",
      host: "sosha-automotive.org",
      c1: "#14213d",
      c2: "#fca311",
      nav: "SOSHA",
      kick: "School of Specialisation",
      h: "Empowering future innovators.",
      sub: "Automotive and engineering education in Soshanguve, Gauteng.",
      pb: "Explore the school",
      so: "Learn more",
      cards: ["Automotive", "Engineering", "STEM"],
      chal: "A school of specialisation needed a public website that reflects a technical, future-facing identity and is easy for learners, parents and partners to find and share.",
      did: [
        "Brand-led website design for an automotive and engineering school",
        "Search and social-sharing metadata for school discovery",
        "Mobile-first pages for learners, parents and partners",
      ],
      stats: [
        ["Automotive", "& engineering focus"],
        ["STEM", "education pathway"],
      ],
      tags: ["Website design", "Education", "Search metadata"],
    },
  ];
  function mock(c) {
    return (
      '<div aria-hidden="true" class="bm" style="--c1:' +
      c.c1 +
      ";--c2:" +
      c.c2 +
      '"><div class="bt"><i></i><i></i><i></i><span>' +
      c.host +
      '</span></div><div class="bb"><div class="bn"><b>' +
      c.nav +
      "</b><u></u><u></u><u></u><s>" +
      c.pb.split(" ")[0] +
      '</s></div><div class="bh"><small>' +
      c.kick +
      '</small><b class="mock-title">' +
      c.h +
      "</b><p>" +
      c.sub +
      '</p><div class="bbt"><s>' +
      c.pb +
      '</s><s class="o">' +
      c.so +
      '</s></div></div><div class="bc">' +
      c.cards
        .map(function (x) {
          return "<div>" + x + "</div>";
        })
        .join("") +
      "</div></div></div>"
    );
  }
  function detail(c, full) {
    return (
      '<div class="csd"><span class="k">' +
      c.k +
      "</span><h3>" +
      c.n +
      "</h3><p>" +
      c.chal +
      '</p><div class="cst4">' +
      c.stats
        .map(function (x) {
          return "<div><b>" + x[0] + "</b><span>" + x[1] + "</span></div>";
        })
        .join("") +
      "</div><ul>" +
      c.did
        .slice(0, full ? 9 : 4)
        .map(function (x) {
          return "<li>" + x + "</li>";
        })
        .join("") +
      '</ul><div class="chips" style="margin-bottom:22px">' +
      c.tags
        .map(function (x) {
          return "<span>" + x + "</span>";
        })
        .join("") +
      '</div><div class="row"><a class="btn pri shine" href="' +
      c.url +
      '" target="_blank" rel="noopener noreferrer">Visit the live site ↗</a><a class="btn" href="' +
      WA +
      encodeURIComponent(
        "Hi Kabelo, I saw the " + c.n + " project and want something like it.",
      ) +
      '">Discuss a similar project</a></div><p class="cnote">Preview is a stylised illustration of the live site. Open the link to see the real thing.</p></div>'
    );
  }
  (function () {
    var h = document.getElementById("csH"),
      i = 0,
      tm;
    if (!h) return;
    function show(k) {
      i = k;
      h.innerHTML =
        '<div class="cst">' +
        CS.map(function (c, j) {
          return (
            '<button class="' +
            (j === i ? "on" : "") +
            '" data-k="' +
            j +
            '">' +
            c.n.split(" ")[0].replace("’s", "") +
            "</button>"
          );
        }).join("") +
        "</div>" +
        mock(CS[i]) +
        detail(CS[i]);
      var m = $(".bm", h)[0];
      requestAnimationFrame(function () {
        m.classList.add("go");
      });
      $(".cst button", h).forEach(function (b) {
        b.onclick = function () {
          clearInterval(tm);
          show(+b.dataset.k);
        };
      });
    }
    show(0);
    if (!rm)
      tm = setInterval(function () {
        show((i + 1) % CS.length);
      }, 9000);
  })();
  // ---- page upgrades ----
  function tbl(id, heads, rows, f) {
    var w = document.getElementById(id);
    if (!w) return;
    w.innerHTML =
      '<div class="tbs"><span>Focus on:</span>' +
      heads
        .map(function (h, k) {
          return (
            '<button class="tg' +
            (k === f ? " on" : "") +
            '" data-k="' +
            k +
            '">' +
            h +
            "</button>"
          );
        })
        .join("") +
      '</div><div class="tscr"><div class="tg0" data-f="' +
      f +
      '"><div class="tr0 th"><span></span>' +
      heads
        .map(function (h, k) {
          return '<span class="c' + k + '">' + h + "</span>";
        })
        .join("") +
      "</div>" +
      rows
        .map(function (r) {
          return (
            '<div class="tr0"><b>' +
            r[0] +
            "</b>" +
            r
              .slice(1)
              .map(function (v, k) {
                return (
                  '<span class="c' +
                  k +
                  '">' +
                  (v === "—" ? '<i class="no">Not included</i>' : v) +
                  "</span>"
                );
              })
              .join("") +
            "</div>"
          );
        })
        .join("") +
      "</div></div>";
    $(".tbs .tg", w).forEach(function (b) {
      b.onclick = function () {
        tbl(id, heads, rows, +b.dataset.k);
      };
    });
  }
  tbl(
    "wtw",
    ["Launch", "Business", "Growth"],
    [
      ["Custom-designed pages", "Up to 4", "Up to 7", "Up to 10 + CMS"],
      [
        "Conversion copywriting",
        "Help organising your text",
        "Up to 7 pages from briefing",
        "Builds on Business",
      ],
      [
        "Enquiry forms",
        "1 form, up to 6 fields",
        "2 forms, up to 10 fields",
        "2 forms + conversion journeys",
      ],
      ["Content management", "—", "—", "3 content types, 20 entries"],
      ["Signature feature", "—", "—", "1 interactive feature"],
      [
        "Analytics &amp; SEO",
        "Technical SEO, sitemap",
        "GA4, Search Console, local data, tracking",
        "Event tracking, enhanced SEO, redirects",
      ],
      [
        "Imagery",
        "Up to 10 images",
        "Up to 30 images",
        "Cinematic hero (image or video)",
      ],
      ["Revision rounds", "2", "2", "3"],
      [
        "Target delivery",
        "5–7 business days",
        "7–10 business days",
        "10–14 business days",
      ],
      ["Defect-fix window", "14 days", "14 days", "30 days"],
      [
        "Handover",
        "Admin access + instructions",
        "Admin access + instructions",
        "60-minute CMS training",
      ],
    ],
    1,
  );
  tbl(
    "stw",
    ["Shop Start", "Shop Professional", "Commerce Growth"],
    [
      ["Initial products", "Up to 25", "Up to 100", "Up to 250"],
      ["Categories", "Up to 5", "Up to 10", "Advanced filters and navigation"],
      ["Variant combinations", "Up to 50", "Up to 250", "Up to 500"],
      ["Information pages", "Up to 5", "Up to 8", "Up to 12"],
      [
        "Payment gateway",
        "1 standard (e.g. PayFast)",
        "1 standard",
        "1 standard",
      ],
      [
        "Sales &amp; retention",
        "Coupons, sale pricing, guest checkout",
        "Abandoned-cart email, reviews, cross-sells",
        "2 cart emails, bundles, upsells, gift cards",
      ],
      [
        "Shipping",
        "3 basic delivery rules",
        "Courier integration or manual rules, 4 zones",
        "Plus up to 2 plugin integrations",
      ],
      [
        "Analytics",
        "Where supported",
        "GA4, Search Console, commerce events",
        "Enhanced purchase tracking",
      ],
      [
        "Priority product pages",
        "Basic URLs and metadata",
        "Up to 20 optimised",
        "Up to 30 optimised",
      ],
      [
        "Revisions &amp; training",
        "2 rounds · 60 min",
        "2 rounds · 90 min",
        "3 rounds · up to 2 hours",
      ],
      [
        "Target delivery",
        "10–15 business days",
        "15–20 business days",
        "20–30 business days",
      ],
    ],
    1,
  );
  if (view === "websites") {
    // anatomy
    (function () {
      var H = [
          [
            "Always-visible contact",
            "WhatsApp, call and email are one tap away on every page.",
            "Every package",
            12,
            8,
          ],
          [
            "A clear promise above the fold",
            "A professional hero, service presentation and clear calls to action tell visitors what you do and what to do next.",
            "Every package",
            50,
            24,
          ],
          [
            "Credentials before they ask",
            "Testimonials, review links and trust signals remove doubt early.",
            "Carter Business and up",
            50,
            34,
          ],
          [
            "Services explained, work shown",
            "Service pages and a gallery of up to 30 supplied images let buyers see the quality.",
            "Carter Business and up",
            50,
            50,
          ],
          [
            "A form that gets sent",
            "Enquiry forms deliver to your designated business email, with confirmation to the visitor.",
            "Every package",
            50,
            68,
          ],
          [
            "Found locally",
            "Maps embed, local-business structured data and Google Business Profile linking help nearby buyers find you.",
            "Carter Business and up",
            50,
            86,
          ],
        ],
        a = document.getElementById("anat"),
        c = 0;
      function r() {
        a.innerHTML =
          '<div class="wf"><div class="wn"><b style="font:700 12px Bricolage Grotesque">Logo</b><u></u><u></u><u></u><s>WhatsApp</s></div><div class="wh"></div><div class="wt"></div><div class="w3"><i></i><i></i><i></i></div><div class="wg"><i></i><i></i><i></i><i></i></div><div class="wfm"></div><div class="wfo"></div>' +
          H.map(function (h, k) {
            return (
              '<button class="hs' +
              (k === c ? " on" : "") +
              '" style="left:' +
              (k ? h[3] : 86) +
              "%;top:" +
              (k ? h[4] * 0.96 : 8) +
              '%" data-k="' +
              k +
              '" aria-label="' +
              h[0] +
              '">' +
              (k + 1) +
              "</button>"
            );
          }).join("") +
          '</div><div class="ai"><span class="k">Hotspot ' +
          (c + 1) +
          " of 6</span><h3>" +
          H[c][0] +
          "</h3><p>" +
          H[c][1] +
          '</p><span class="inc">' +
          H[c][2] +
          "</span></div>";
        $(".hs", a).forEach(function (b) {
          b.onclick = function () {
            c = +b.dataset.k;
            r();
          };
        });
      }
      r();
    })();
  }
  if (view === "stores") {
    // break-even
    (function () {
      var T = [
          ["Shop Start", 18999],
          ["Shop Professional", 29999],
          ["Commerce Growth", 49999],
        ],
        t = 1,
        aov = 600,
        mg = 35,
        b = document.getElementById("be");
      function r() {
        var p = (aov * mg) / 100,
          n = Math.ceil(T[t][1] / p);
        b.innerHTML =
          '<div><div class="seg">' +
          T.map(function (x, k) {
            return (
              '<button class="' +
              (k === t ? "on" : "") +
              '" data-k="' +
              k +
              '">' +
              x[0] +
              "</button>"
            );
          }).join("") +
          "</div><label>Average order value <b>" +
          rand(aov) +
          '</b></label><input type="range" id="ba1" aria-label="Average order value" min="100" max="3000" step="50" value="' +
          aov +
          '"><label>Gross margin per order <b>' +
          mg +
          '%</b></label><input type="range" id="ba2" aria-label="Gross margin per order" min="10" max="80" step="1" value="' +
          mg +
          '"></div><div class="bo"><small>Orders to cover the build fee</small><div class="big">' +
          n.toLocaleString("en-ZA") +
          "</div><p>At " +
          rand(aov) +
          " average orders and a " +
          mg +
          "% margin, each order contributes about " +
          rand(p) +
          ". About " +
          n +
          " orders cover " +
          T[t][0] +
          " (" +
          rand(T[t][1]) +
          ').</p><p style="font-size:12.5px">Illustrative arithmetic, not a forecast. Excludes platform, payment and courier fees, marketing and your time.</p></div>';
        $(".seg button", b).forEach(function (x) {
          x.onclick = function () {
            t = +x.dataset.k;
            r();
          };
        });
        var a1 = document.getElementById("ba1"),
          a2 = document.getElementById("ba2");
        a1.oninput = function () {
          aov = +a1.value;
          upd2();
        };
        a2.oninput = function () {
          mg = +a2.value;
          upd2();
        };
        function upd2() {
          var p = (aov * mg) / 100,
            n = Math.ceil(T[t][1] / p);
          b.querySelector(".big").textContent = n.toLocaleString("en-ZA");
          b.querySelector("label b").textContent = rand(aov);
          b.querySelectorAll("label b")[1].textContent = mg + "%";
          b.querySelector(".bo p").textContent =
            "At " +
            rand(aov) +
            " average orders and a " +
            mg +
            "% margin, each order contributes about " +
            rand(p) +
            ". About " +
            n +
            " orders cover " +
            T[t][0] +
            " (" +
            rand(T[t][1]) +
            ").";
        }
      }
      r();
    })();
  }
  if (view === "apps") {
    // app preview
    (function () {
      var U = [
          [
            "Quote intake",
            "Carter Workflow · from R14,999",
            ["New", "Quoted", "Won"],
            [
              ["Sandton office fit-out", "Received 09:12", "New", "b"],
              ["Boksburg warehouse", "Awaiting site visit", "Quoted", "y"],
              ["Pretoria clinic upgrade", "Accepted today", "Won", "g"],
              ["Centurion retail unit", "Received 11:40", "New", "b"],
            ],
          ],
          [
            "Job tracking",
            "Carter Workflow · from R14,999",
            ["Open", "In progress", "Done"],
            [
              ["Install: unit 14", "Assigned to team A", "In progress", "y"],
              ["Repair: gate motor", "Waiting on parts", "Open", "b"],
              ["Service: generator", "Completed", "Done", "g"],
              ["Inspect: roof leak", "Assigned to team B", "In progress", "y"],
            ],
          ],
          [
            "Client portal",
            "Carter MVP · from R29,999",
            ["Clients", "Requests", "Documents"],
            [
              ["Statement uploaded", "Visible to client", "Shared", "g"],
              ["Document request", "Awaiting client", "Pending", "y"],
              ["Status update", "Sent by WhatsApp", "Sent", "b"],
              ["New message", "Reply today", "Unread", "y"],
            ],
          ],
          [
            "Bookings",
            "Carter MVP · from R29,999",
            ["Today", "This week", "No-shows"],
            [
              ["09:00 consultation", "Confirmed", "Booked", "g"],
              ["11:30 site visit", "Awaiting confirmation", "Pending", "y"],
              ["14:00 follow-up", "Reminder sent", "Booked", "g"],
              ["16:30 new client", "Requested online", "New", "b"],
            ],
          ],
          [
            "Approvals",
            "Carter Business App · from R59,999",
            ["Waiting", "Approved", "Rejected"],
            [
              ["Purchase request", "Needs manager", "Waiting", "y"],
              ["Leave application", "Approved by HR", "Approved", "g"],
              ["Expense claim", "Audit trail saved", "Waiting", "y"],
              ["Supplier onboarding", "Approved", "Approved", "g"],
            ],
          ],
        ],
        c = 0,
        a = document.getElementById("apv");
      function r() {
        var u = U[c];
        a.innerHTML =
          '<div class="apv"><div class="sd">' +
          U.map(function (x, k) {
            return (
              '<button class="' +
              (k === c ? "on" : "") +
              '" data-k="' +
              k +
              '">' +
              x[0] +
              "</button>"
            );
          }).join("") +
          '</div><div class="mn"><div class="tt"><div><h4>' +
          u[0] +
          "</h4><span>" +
          u[1] +
          '</span></div><span>Sample data</span></div><div class="kp">' +
          u[2]
            .map(function (k, j) {
              return (
                "<div><b>" + [12, 7, 31][j] + "</b><span>" + k + "</span></div>"
              );
            })
            .join("") +
          "</div>" +
          u[3]
            .map(function (x, j) {
              return (
                '<div class="rw2" style="animation-delay:' +
                j * 0.08 +
                's"><div><b>' +
                x[0] +
                "</b><span>" +
                x[1] +
                '</span></div><i class="st ' +
                x[3] +
                '">' +
                x[2] +
                "</i></div>"
              );
            })
            .join("") +
          "</div></div>";
        $(".sd button", a).forEach(function (b) {
          b.onclick = function () {
            c = +b.dataset.k;
            r();
          };
        });
      }
      r();
    })();
  }
  if (view === "company") {
    // company stepper, engagement, care, stack, terms
    (function () {
      var S = [
          [
            "Discovery &amp; alignment",
            "We define the business objective, users, content, risk and success criteria before production begins. Scope, deliverables, limits and exclusions are agreed in writing.",
          ],
          [
            "Architecture &amp; prototype",
            "We map the information hierarchy and key journeys, then create visible design proof before the full build, so you approve direction against something you can see.",
          ],
          [
            "Design &amp; development",
            "The interface, content structure and functionality are built as one coherent experience across devices, against the agreed scope.",
          ],
          [
            "QA &amp; readiness",
            "We test responsiveness, forms, links, content, performance, accessibility basics and privacy requirements. Stores add checkout and test-purchase checks.",
          ],
          [
            "Launch &amp; handover",
            "We deploy to the agreed environment, connect key services and provide access, ownership documentation and guidance. The warranty window begins at handover.",
          ],
        ],
        el = document.getElementById("fw"),
        c = 0,
        tm;
      function go(k) {
        c = k;
        $(".stl i", el)[0].style.width = ((k + 1) / S.length) * 100 + "%";
        $(".stb", el)[0].innerHTML = S.map(function (x, j) {
          return (
            '<button class="' +
            (j === c ? "on" : j < c ? "dn" : "") +
            '" data-k="' +
            j +
            '">' +
            (j + 1) +
            " · " +
            x[0] +
            "</button>"
          );
        }).join("");
        $(".stc", el)[0].innerHTML =
          '<div class="num">0' +
          (c + 1) +
          "</div><h3>" +
          S[c][0] +
          "</h3><p>" +
          S[c][1] +
          "</p>";
        $(".stb button", el).forEach(function (x) {
          x.onclick = function () {
            clearInterval(tm);
            go(+x.dataset.k);
          };
        });
      }
      go(0);
      if (!rm)
        tm = setInterval(function () {
          go((c + 1) % S.length);
        }, 5000);
      var Tx = [
          [
            "Front end",
            ["Next.js", "React", "TypeScript"],
            "Fast, responsive interfaces and scalable component systems.",
          ],
          [
            "Back end",
            ["Python", "FastAPI", "Node.js"],
            "APIs, automation, business logic and integration services.",
          ],
          [
            "Data",
            ["PostgreSQL", "Firestore", "BigQuery"],
            "Structured data, real-time workflows and reporting architecture.",
          ],
          [
            "Cloud",
            ["Google Cloud", "Vercel", "Cloud Run"],
            "Deployment from rapid web launches to managed cloud services.",
          ],
          [
            "Content",
            ["Sanity CMS"],
            "Editable websites without sacrificing design quality or performance.",
          ],
          [
            "Integrations",
            ["WhatsApp", "Email", "Calendars", "Payments"],
            "Practical connections that move customers and staff from intent to action.",
          ],
        ],
        ti = 0,
        tx = document.getElementById("tx");
      function tr() {
        tx.innerHTML =
          '<div class="ly">' +
          Tx.map(function (x, k) {
            return (
              '<button class="' +
              (k === ti ? "on" : "") +
              '" data-k="' +
              k +
              '">' +
              x[0] +
              "</button>"
            );
          }).join("") +
          '</div><div class="pn2"><h3>' +
          Tx[ti][0] +
          '</h3><div class="chips" style="margin-bottom:16px">' +
          Tx[ti][1]
            .map(function (x) {
              return "<span>" + x + "</span>";
            })
            .join("") +
          "</div><p>" +
          Tx[ti][2] +
          "</p></div>";
        $(".ly button", tx).forEach(function (b) {
          b.onclick = function () {
            ti = +b.dataset.k;
            tr();
          };
        });
      }
      tr();
      var TM = [
        [
          "Payment structure",
          "A 50% deposit reserves the project and begins work. The remaining 50% is due before production launch and final handover, following review of the agreed deliverables.",
        ],
        [
          "Timelines",
          "All delivery targets begin once the deposit, required content or product data, account access and approvals are received. Client delays and third-party approvals can move delivery.",
        ],
        [
          "Revision rounds",
          "A round is one consolidated list of feedback. A new direction after approval, new pages, extra products or new functionality is additional scope.",
        ],
        [
          "Client responsibilities",
          "Accurate business information, product prices and stock, legal policies, images and rights to supplied materials, fulfilment and regulatory compliance remain with the client.",
        ],
        [
          "Launch warranty",
          "The defect-fix window covers faults against the approved scope. It does not cover new features, ongoing edits, third-party outages or changes made outside the agreed environment.",
        ],
        [
          "Ownership",
          "Domain ownership, code and content handover, licences and account access are documented in the written agreement.",
        ],
      ];
      document.getElementById("terms").innerHTML = TM.map(function (q) {
        return (
          "<details><summary>" +
          q[0] +
          "</summary><p>" +
          q[1] +
          "</p></details>"
        );
      }).join("");
    })();
  }
  if (view === "work") {
    // work page filter + every build
    (function () {
      var f = "All",
        w = document.getElementById("csW"),
        b = document.getElementById("wf");
      function r() {
        b.innerHTML = ["All", "Legal", "Education"]
          .map(function (x) {
            return (
              '<button class="' +
              (x === f ? "on" : "") +
              '" data-k="' +
              x +
              '">' +
              x +
              "</button>"
            );
          })
          .join("");
        w.innerHTML = CS.filter(function (c) {
          return f === "All" || c.k.indexOf(f) === 0;
        })
          .map(function (c) {
            return (
              '<div class="cw rv in">' + mock(c) + detail(c, true) + "</div>"
            );
          })
          .join("");
        $(".cw .bm", w).forEach(function (m) {
          m.classList.add("go");
        });
        $("button", b).forEach(function (x) {
          x.onclick = function () {
            f = x.dataset.k;
            r();
          };
        });
      }
      r();
    })();
  }
  // Shared viewport motion and keyboard state.
  document.body.classList.add("reference-enhanced");
  obs();
  upd();
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const animatedIllustrations = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        target.toggleAttribute(
          "data-paused",
          !isIntersecting || motion.matches,
        );
        if (target instanceof SVGSVGElement) {
          if (isIntersecting && !motion.matches) target.unpauseAnimations();
          else target.pauseAnimations();
        }
      });
    },
    { rootMargin: "120px 0px" },
  );
  function observeIllustrations() {
    $(".view svg, .marq").forEach((element) =>
      animatedIllustrations.observe(element),
    );
  }
  observeIllustrations();
  motion.addEventListener("change", () => {
    animatedIllustrations.disconnect();
    observeIllustrations();
  });
})();
