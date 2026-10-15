/* @ds-bundle: {"format":4,"namespace":"NapsterDesignSystem_019ddb","components":[],"sourceHashes":{"ui_kits/napster-com/CTABand.jsx":"66edd6bccfc6","ui_kits/napster-com/DigitalTwin.jsx":"89bbb3f91e21","ui_kits/napster-com/FeatureSection.jsx":"80f51fbe7e80","ui_kits/napster-com/Hero.jsx":"d31821febd5c","ui_kits/napster-com/Nav.jsx":"6506e114c3db","ui_kits/napster-com/ProductSlab.jsx":"829c0a94af60","ui_kits/napster-com/TrustBar.jsx":"4ed1ea4566ff"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NapsterDesignSystem_019ddb = window.NapsterDesignSystem_019ddb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/napster-com/CTABand.jsx
try { (() => {
/* Bottom CTA band with poster image + caption above. */
function CTABand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: 0,
      background: '#000'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      margin: '8px',
      borderRadius: 24,
      overflow: 'hidden',
      minHeight: 620,
      backgroundImage: `url(../../assets/product/footer-cta.avif)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.85) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 80,
      textAlign: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: 'rgba(255,255,255,0.7)',
      margin: '0 0 8px'
    }
  }, "Start free."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '0.02em',
      color: 'rgba(255,255,255,0.7)',
      margin: '0 0 28px'
    }
  }, "Upgrade when you're ready."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 96,
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Get your ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-word"
  }, "crew.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary"
  }, "Get Started Now"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary"
  }, "Get Napster for Mac")))));
}
function Footer() {
  const cols = [{
    h: 'Products',
    links: ['Napster App', 'Napster for Mac', 'Napster View', 'Napster Station', 'Learn: Enterprise', 'Learn: Higher Ed', 'Napster Spaces', 'Napster API']
  }, {
    h: 'Solutions',
    links: ['For Enterprise', 'For Developers', 'For Partners', 'Pricing']
  }, {
    h: 'Company',
    links: ['About', 'Newsroom', 'Careers', 'Blog', 'Contact Us']
  }, {
    h: 'Resources',
    links: ['Security', 'Media Kit', 'Help Center', 'Ethics']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '96px 48px 40px',
      background: '#000',
      borderTop: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 48,
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/horizontal/horizontal-white.svg",
    alt: "Napster",
    style: {
      height: 26,
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.6)',
      margin: 0,
      maxWidth: 260
    }
  }, "Sign up to receive the latest product news, stories, and innovations worth your time."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      gap: 8,
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Email address",
    style: {
      flex: 1,
      padding: '11px 14px',
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 10,
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      padding: '10px 16px',
      fontSize: 13
    }
  }, "Submit"))), cols.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)',
      margin: '0 0 20px'
    }
  }, col.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'rgba(255,255,255,0.8)',
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 28,
      borderTop: '1px solid rgba(255,255,255,0.06)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,0.4)',
      margin: 0
    }
  }, "\xA9 2026 Napster"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, ['Terms of Service', 'Privacy Policy', 'AI Principles', 'Accessibility', 'Cookie Policy'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'rgba(255,255,255,0.5)',
      textDecoration: 'none'
    }
  }, l))))));
}
window.CTABand = CTABand;
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/napster-com/CTABand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/napster-com/DigitalTwin.jsx
try { (() => {
/* DigitalTwin — "Be in two places at once" pattern.
   Right: video poster. Left: eyebrow, title, bullets, CTA. */
function DigitalTwin() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '140px 48px',
      background: '#000',
      borderTop: '1px solid rgba(255,255,255,0.04)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1400,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1.15fr',
      gap: 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      marginBottom: 24,
      background: 'linear-gradient(91deg, #DD52CB 0%, #601656 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, "Your Digital Twin"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 84,
      fontWeight: 600,
      lineHeight: 0.98,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "Be in two", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "gradient-word"
  }, "places at once.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 32,
      fontSize: 19,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.72)',
      fontFamily: 'var(--font-body)',
      maxWidth: 480
    }
  }, "Turn your expertise into something people can access anytime. Stay focused on what you do best. Your twin handles the rest."), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '36px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, ["Your twin takes the meeting you couldn't make.", "Answers the questions you've answered a hundred times.", "Knows your voice, your priorities, your limits."].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.45,
      color: 'rgba(255,255,255,0.82)',
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/product/twin-icon.avif",
    alt: "",
    style: {
      width: 18,
      height: 18,
      marginTop: 3,
      opacity: 0.9,
      flexShrink: 0
    }
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary"
  }, "Get Napster for Mac"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 20,
      overflow: 'hidden',
      aspectRatio: '16/10',
      backgroundImage: `url(../../assets/product/digital-twin-poster.avif)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
      border: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.18)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(255,255,255,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "26",
    viewBox: "0 0 22 26",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12.134c.667.385.667 1.347 0 1.732L2 24.794c-.667.385-1.5-.096-1.5-.866V1.072c0-.77.833-1.25 1.5-.866L21 12.134z",
    fill: "#fff"
  })))))));
}
window.DigitalTwin = DigitalTwin;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/napster-com/DigitalTwin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/napster-com/FeatureSection.jsx
try { (() => {
/* FeatureSection — the "Expertise on demand / A specialist for every moment" pattern.
   Left: heading + 3 short bullets. Right: circular companion image with pink ring. */
function FeatureSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '140px 48px',
      background: '#000',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      maxWidth: 1400,
      margin: '0 auto',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      marginBottom: 20
    }
  }, "Expertise on demand"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, "A specialist for every ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-word"
  }, "moment.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 19,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.7)',
      fontFamily: 'var(--font-body)',
      maxWidth: 520
    }
  }, "Say goodbye to AI chatbots and hello to a collaborator with video presence and memory."), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '40px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, ['Persistent memory that makes every conversation better over time.', 'The right expert right when you need them.', 'Turn conversations into drafts, plans, decisions, and outputs you can share, ship, or send.'].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      lineHeight: 1.45,
      color: 'rgba(255,255,255,0.85)',
      paddingLeft: 32,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 10,
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--pink-bright)',
      boxShadow: '0 0 16px rgba(234,45,210,0.6)'
    }
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / 1',
      width: '100%',
      maxWidth: 560,
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/product/mayli-ring.avif",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      animation: 'ring-rotate 40s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/product/mayli-image.avif",
    alt: "Companion",
    style: {
      position: 'absolute',
      left: '12%',
      top: '12%',
      width: '76%',
      height: '76%',
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: '0 40px 120px rgba(234,45,210,0.25)'
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes ring-rotate { from { transform: rotate(0) } to { transform: rotate(360deg) } }`)));
}
window.FeatureSection = FeatureSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/napster-com/FeatureSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/napster-com/Hero.jsx
try { (() => {
function Hero({
  eyebrow,
  headline,
  gradientWord,
  sub,
  ctaPrimary,
  ctaSecondary,
  showFooterLinks = true,
  bgImage
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 720,
      padding: '140px 40px 80px',
      textAlign: 'center',
      overflow: 'hidden',
      background: '#000'
    }
  }, bgImage && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: `
          radial-gradient(70% 55% at 50% 60%, transparent 0%, rgba(0,0,0,0.75) 100%),
          linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 35%, rgba(0,0,0,0.85) 100%)
        `,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 1,
      background: 'radial-gradient(800px 500px at 50% 70%, rgba(190,54,157,0.18), transparent 60%)',
      pointerEvents: 'none',
      mixBlendMode: 'screen'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      marginBottom: 24
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 72,
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      margin: 0,
      color: '#fff'
    }
  }, headline, ' ', gradientWord && /*#__PURE__*/React.createElement("span", {
    className: "gradient-word"
  }, gradientWord)), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 17,
      color: 'rgba(255,255,255,0.7)',
      maxWidth: 620,
      margin: '24px auto 0',
      lineHeight: 1.5,
      fontFamily: 'var(--font-body)'
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary"
  }, ctaPrimary), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary"
  }, ctaSecondary)), showFooterLinks && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: 'flex',
      gap: 36,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 14,
      textDecoration: 'none',
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, "For Business ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pink-bright)'
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontSize: 14,
      textDecoration: 'none',
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, "For Developers ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pink-bright)'
    }
  }, "\u2192")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/napster-com/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/napster-com/Nav.jsx
try { (() => {
function Nav({
  page,
  setPage
}) {
  const items = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'business',
    label: 'For Business'
  }, {
    id: 'developers',
    label: 'For Developers'
  }, {
    id: 'learn',
    label: 'Learn'
  }, {
    id: 'view',
    label: 'The View'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      padding: '18px 40px',
      backdropFilter: 'blur(24px) saturate(1.3)',
      WebkitBackdropFilter: 'blur(24px) saturate(1.3)',
      background: 'rgba(0,0,0,0.55)',
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      marginRight: 40,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/horizontal/horizontal-white.svg",
    alt: "Napster",
    style: {
      height: 22
    }
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 28,
      listStyle: 'none',
      margin: 0,
      padding: 0,
      flex: 1,
      alignItems: 'center'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it.id
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setPage(it.id);
    },
    style: {
      color: page === it.id ? '#fff' : 'rgba(255,255,255,0.65)',
      textDecoration: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '-0.01em',
      transition: 'color 120ms ease'
    }
  }, it.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-secondary",
    style: {
      padding: '11px 16px',
      fontSize: 13
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    style: {
      padding: '11px 18px',
      fontSize: 13
    }
  }, "Get Started Now")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/napster-com/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/napster-com/ProductSlab.jsx
try { (() => {
/* ProductSlab — the tall rounded product cards from napster.com home.
   Each is ~16:9, full-bleed image, with text block in top-left corner. */
function ProductSlab({
  eyebrow,
  title,
  body,
  cta,
  image,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '8px 8px',
      background: '#000'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 24,
      overflow: 'hidden',
      aspectRatio: '16 / 9',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: align === 'left' ? 'linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 40%, transparent 70%)' : 'linear-gradient(270deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 40%, transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 56,
      bottom: 56,
      left: align === 'left' ? 56 : 'auto',
      right: align === 'right' ? 56 : 'auto',
      maxWidth: 520,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      marginBottom: 20,
      color: '#fff',
      opacity: 0.9
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      margin: 0,
      color: '#fff'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 17,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.82)',
      fontFamily: 'var(--font-body)'
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color: '#fff',
      textDecoration: 'none',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      padding: '12px 20px',
      borderRadius: 10,
      background: 'rgba(0,0,0,0.55)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.18)'
    }
  }, cta, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pink-bright)'
    }
  }, "\u2192"))))));
}
window.ProductSlab = ProductSlab;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/napster-com/ProductSlab.jsx", error: String((e && e.message) || e) }); }

// ui_kits/napster-com/TrustBar.jsx
try { (() => {
/* TrustBar — horizontally-scrolling customer logo rail */
function TrustBar() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 0 40px',
      background: '#000',
      borderTop: '1px solid rgba(255,255,255,0.04)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.4)',
      margin: '0 0 32px'
    }
  }, "Trusted by"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      maskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)',
      WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      alignItems: 'center',
      animation: 'trust-scroll 32s linear infinite',
      width: 'max-content'
    }
  }, [...Array(2)].map((_, dup) => ['Microsoft', 'Accenture', 'Lenovo', 'Qualcomm', 'NVIDIA', 'Deloitte', 'Oracle', 'SAP', 'IBM', 'Cisco', 'Dell', 'HP'].map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: `${dup}-${i}`,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'rgba(255,255,255,0.55)',
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap',
      flexShrink: 0
    }
  }, n))))), /*#__PURE__*/React.createElement("style", null, `@keyframes trust-scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`));
}
window.TrustBar = TrustBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/napster-com/TrustBar.jsx", error: String((e && e.message) || e) }); }

})();
