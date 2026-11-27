/* eslint-disable @typescript-eslint/no-unused-vars, @next/next/no-img-element */

"use client";

import { type CSSProperties, useEffect, useRef } from "react";

/**
 * Mirrors Beauty landing page
 * Paste this component into a Framer Code Component.
 * The original hero and footer have intentionally been removed.
 */

const styles = String.raw`
@import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter+Tight:wght@400;500;600;700;800&display=swap");
/* BELOW-HERO DESIGN ONLY. Existing hero and spinning Trusted Partners remain untouched. Exact brand token palette supplied by Simplexi. */
:root{
--sx-navy950:#051538;--sx-navy900:#0A2557;--sx-navy800:#0E2D6B;--sx-navy700:#143D88;--sx-navy600:#1B5BC4;--sx-navy500:#3878D8;--sx-paper:#FFFFFF;--sx-paper2:#F6F7FB;--sx-paper3:#ECEEF6;--sx-ink:#0A1530;--sx-inkSoft:#303859;--sx-muted:#6A7196;--sx-accent:#B3CCFF;--sx-accentSoft:#DEEAFF;--sx-gold:#E2B14A;--sx-whatsapp:#25D366;--sx-greenSoft:#E8F8EE;--sx-line:rgba(10,37,87,.08);--sx-line2:rgba(10,37,87,.14);--sx-navy:var(--sx-navy900);--sx-blue:var(--sx-navy600);--sx-blue-dark:var(--sx-navy700);--sx-blue-tint:var(--sx-accentSoft);--sx-blue-tint2:var(--sx-accent);--sx-bg:var(--sx-paper);--sx-wash:var(--sx-paper2);--sx-text:var(--sx-inkSoft);--sx-shadow:0 30px 90px rgba(10,37,87,.11)}
.sx-home-refresh,.sx-home-refresh *{box-sizing:border-box}.sx-home-refresh a{color:inherit;text-decoration:none}.sx-home-refresh button{font:inherit;cursor:pointer}.sx-home-refresh button:focus-visible,.sx-home-refresh a:focus-visible{outline:3px solid #3878D8;outline-offset:3px} .sx-home-refresh{overflow:hidden} .sx-wrap{width:min(1160px,calc(100% - 48px));margin-inline:auto}.sx-center{text-align:center}.sx-eyebrow{display:inline-flex;align-items:center;gap:8px;border:1px solid #B3CCFF;background:#F6F7FB;color:#1B5BC4;font-size:11px;font-weight:750;letter-spacing:.14em;text-transform:uppercase;border-radius:99px;padding:10px 14px}.sx-eyebrow .dot{width:7px;height:7px;border-radius:50%;background:var(--sx-blue)}.sx-section-title{font-size:clamp(32px,4.6vw,56px);line-height:1.09;letter-spacing:-.053em;font-weight:790;margin:19px 0 16px}.sx-lede{font-size:clamp(15px,1.4vw,18px);line-height:1.75;color:var(--sx-text);max-width:660px;margin:0 auto}.sx-subtitle{font-size:clamp(30px,3.4vw,43px);line-height:1.15;letter-spacing:-.048em;font-weight:770;margin:13px 0 16px}.sx-small-lede{font-size:16px;line-height:1.8;color:var(--sx-text);margin:0;max-width:440px}.sx-cta-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.sx-cta-row.center{justify-content:center}.sx-button{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 21px;min-height:48px;border-radius:11px;font-size:14px;font-weight:720;white-space:nowrap;transition:transform .2s,box-shadow .2s,background .2s}.sx-button:hover{transform:translateY(-2px)}.sx-button.primary{color:#fff;background:var(--sx-blue);box-shadow:0 9px 24px rgba(255,35,0,.23)}.sx-button.primary:hover{background:var(--sx-blue-dark)}.sx-button.light{background:#fff;color:var(--sx-ink);border:1px solid #ECEEF6}.sx-button.dark{background:#fff;color:#0A2557}.sx-text-link{display:inline-flex;align-items:center;gap:10px;color:var(--sx-blue);font-size:14px;font-weight:760}.sx-arrow{font-size:20px;line-height:1}.sx-kicker{font-size:11px;font-weight:800;letter-spacing:.17em;color:var(--sx-blue);text-transform:uppercase}
/* Section 2: punchy 3-up */
.sx-value{padding:55px 0 105px}.sx-value-head{display:flex;justify-content:space-between;align-items:end;gap:25px;margin-bottom:34px}.sx-value-head .sx-subtitle{max-width:650px}.sx-value-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:17px}.sx-value-card{min-height:420px;overflow:hidden;border-radius:20px;position:relative;padding:30px 27px;border:1px solid #E3EBF3;display:flex;flex-direction:column;justify-content:space-between}.sx-value-card:nth-child(1){background:#DEEAFF}.sx-value-card:nth-child(2){background:#f2f8f6}.sx-value-card:nth-child(3){background:#f8f8fa}.sx-value-number{font-size:10px;font-weight:800;letter-spacing:.11em;opacity:.45}.sx-value-card h3{font-size:25px;letter-spacing:-.045em;line-height:1.12;margin:12px 0 9px}.sx-value-card p{font-size:13px;color:#687183;line-height:1.65;margin:0}.sx-value-art{height:200px;display:flex;align-items:center;justify-content:center;position:relative;margin-top:18px}.sx-voice-box{width:94%;padding:21px;background:#fff;border:1px solid #DEEAFF;border-radius:17px;box-shadow:0 18px 32px rgba(4,40,93,.10);transform:rotate(-3deg)}.sx-call-top{display:flex;gap:10px;align-items:center}.sx-call-avatar{background:#DEEAFF;width:35px;height:35px;border-radius:11px;display:grid;place-items:center;color:#1B5BC4}.sx-call-name{font-size:12px;font-weight:800}.sx-call-time{font-size:10px;color:#8b91a3;margin-top:4px}.sx-wave-large{display:flex;align-items:center;gap:3px;height:65px;margin:6px 0}.sx-wave-large i{flex:1;height:var(--h);background:linear-gradient(#3878D8,#1B5BC4);border-radius:8px}.sx-call-status{display:flex;justify-content:space-between;font-size:10px;color:#8d96a5}.sx-call-status b{color:#239870}.sx-flow-art{width:96%;display:grid;gap:10px;transform:rotate(2deg)}.sx-flow-node{background:#fff;border:1px solid #dfece7;box-shadow:0 10px 24px rgba(39,101,76,.06);padding:12px;border-radius:12px;display:flex;align-items:center;gap:11px;font-size:11px;font-weight:750}.sx-flow-node .node-icon{width:29px;height:29px;border-radius:9px;background:#e9f6f0;display:grid;place-items:center;color:#16845a;font-size:15px}.sx-flow-node:nth-child(3){margin-left:40px}.sx-flow-connector{width:1px;height:11px;background:#9ad5b8;margin:-6px 0 -6px 25px}.sx-team-art{width:96%;border:1px solid #e8e9ef;background:#fff;border-radius:15px;padding:16px;box-shadow:0 18px 25px rgba(39,41,63,.07);transform:rotate(-2deg)}.sx-team-top{display:flex;gap:8px;align-items:center;font-size:10px;font-weight:800;margin-bottom:16px}.sx-team-art .sx-avatar{width:28px;height:28px}.sx-team-summary{padding:12px;border-radius:9px;background:#EEF5FC;color:#165184;font-size:10px;line-height:1.6}.sx-team-footer{display:flex;gap:5px;margin-top:13px}.sx-team-footer i{height:6px;background:#ECEEF6;flex:1;border-radius:4px}.sx-team-footer i:first-child{background:#3878D8}
/* Section 3: switchable channel story */
.sx-experience{padding:100px 0;background:var(--sx-navy);color:#fff;position:relative}.sx-experience:before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse 600px 500px at 90% 24%,rgba(255,113,73,.15),transparent 65%),radial-gradient(ellipse 300px 450px at 0 80%,rgba(44,112,173,.16),transparent 65%)}.sx-experience .sx-wrap{position:relative}.sx-experience .sx-kicker{color:#B3CCFF}.sx-experience .sx-subtitle{max-width:680px}.sx-experience .sx-small-lede{color:#CCDDEF;max-width:630px}.sx-experience-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:31px}.sx-experience .sx-text-link{color:#B3CCFF}.sx-showcase{border:1px solid rgba(194,219,241,.24);border-radius:22px;padding:22px;background:rgba(255,255,255,.045);display:grid;grid-template-columns:260px minmax(0,1fr);gap:24px}.sx-showcase-tabs{display:flex;flex-direction:column;gap:8px}.sx-showcase-tab{text-align:left;border:1px solid transparent;background:transparent;color:#CFDEEE;border-radius:12px;padding:15px 17px;font-size:13px;font-weight:730;display:flex;align-items:center;gap:11px}.sx-showcase-tab.active{color:#fff;background:#164575;border-color:#416E99}.sx-showcase-tab svg{width:17px;height:17px;stroke:currentColor;fill:none;stroke-width:1.7}.sx-showcase-panel{background:#fff;border-radius:15px;min-height:326px;padding:30px;color:var(--sx-ink);display:grid;grid-template-columns:1fr 245px;gap:25px;align-items:center}.sx-chat-copy h3{font-size:27px;line-height:1.2;letter-spacing:-.04em;margin:15px 0 12px}.sx-chat-copy p{color:#788196;font-size:14px;line-height:1.7;max-width:350px}.sx-chat-copy .sx-text-link{color:var(--sx-blue)}.sx-demo-chat{background:#F6F7FB;border:1px solid #eeeeF6;border-radius:16px;padding:16px;box-shadow:0 14px 30px rgba(4,40,93,.08)}.sx-demo-header{display:flex;gap:9px;align-items:center;border-bottom:1px solid #DEEAFF;padding:0 0 12px;font-size:11px;font-weight:800}.sx-demo-header .sx-avatar{width:27px;height:27px}.sx-demo-msg{font-size:10px;line-height:1.6;padding:11px 12px;max-width:96%;border-radius:11px;margin-top:11px}.sx-demo-msg.user{background:#DEEAFF;color:#0E457B;margin-left:23px}.sx-demo-msg.ai{background:#fff;color:#4b556a;border:1px solid #ECEEF6;margin-right:13px}.sx-demo-resolved{display:inline-flex;align-items:center;gap:5px;margin-top:13px;color:#188f64;font-size:10px;font-weight:800}.sx-demo-resolved .dot{width:6px;height:6px;border-radius:50%;background:#1dbf83}
/* Section 4: route */
.sx-routing{padding:115px 0}.sx-route-layout{display:grid;grid-template-columns:.8fr 1.2fr;align-items:center;gap:75px}.sx-benefit-list{display:grid;gap:18px;margin:29px 0 33px}.sx-benefit-list div{display:flex;align-items:flex-start;gap:11px;color:#4e5c70;font-size:14px;line-height:1.5}.sx-check{width:23px;height:23px;flex:none;display:grid;place-items:center;border-radius:50%;background:#DEEAFF;color:#1B5BC4;font-weight:900;font-size:12px}.sx-route-canvas{position:relative;min-height:480px;border-radius:26px;background:#F1F7FD;border:1px solid #DDEAF7;overflow:hidden;display:flex;align-items:center;justify-content:center;padding:40px}.sx-route-canvas:before{content:"";position:absolute;inset:0;background-image:radial-gradient(#CDE1F4 1px,transparent 1px);background-size:16px 16px;opacity:.5}.sx-route-path{width:min(420px,100%);position:relative;display:grid;justify-items:center;gap:0}.sx-route-card{position:relative;background:#fff;border:1px solid #D1E2F2;border-radius:13px;box-shadow:0 13px 30px rgba(4,40,93,.09);width:76%;padding:15px 18px;display:flex;align-items:center;gap:12px}.sx-route-card .ic{height:38px;width:38px;border-radius:10px;background:#DEEAFF;color:#1B5BC4;display:grid;place-items:center;font-size:17px}.sx-route-card strong{display:block;font-size:12px}.sx-route-card small{display:block;color:#9da4b0;font-size:10px;margin-top:4px}.sx-route-line{width:2px;height:38px;background:#B3CCFF;position:relative}.sx-route-line:after{content:"";position:absolute;bottom:-4px;left:-3px;border-top:6px solid #B3CCFF;border-left:4px solid transparent;border-right:4px solid transparent}.sx-route-branch{display:grid;grid-template-columns:1fr 1fr;gap:14px;width:100%;position:relative}.sx-route-branch:before{content:"";position:absolute;top:-10px;left:24%;width:52%;border-top:2px solid #B3CCFF}.sx-route-branch .sx-route-card{width:100%;padding:12px;align-items:flex-start}.sx-route-branch .sx-route-card .ic{flex:none;width:30px;height:30px}.sx-route-resolve{margin-top:18px;display:inline-flex;align-items:center;gap:7px;color:#218c63;background:#e8f8ef;border:1px solid #c9eed9;border-radius:50px;padding:9px 12px;font-weight:750;font-size:11px}
/* Section 5: industries */
.sx-industries{padding:100px 0 112px;background:#F6F7FB}.sx-industries-header{text-align:center;margin-bottom:35px}.sx-industry-tabs{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin:32px 0 28px}.sx-industry-tab{border:1px solid #DEE8F0;border-radius:99px;padding:11px 18px;background:#fff;color:#747d90;font-size:12px;font-weight:720}.sx-industry-tab.active{border-color:var(--sx-blue);background:var(--sx-blue);color:#fff;box-shadow:0 8px 21px rgba(255,35,0,.16)}.sx-industry-card{display:grid;grid-template-columns:.93fr 1.07fr;min-height:330px;background:#fff;border:1px solid #DEE7F0;border-radius:23px;overflow:hidden;box-shadow:0 18px 55px rgba(4,40,93,.055)}.sx-industry-copy{padding:46px;display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.sx-industry-copy .sx-kicker{font-size:10px}.sx-industry-copy h3{font-size:clamp(29px,3.2vw,42px);line-height:1.13;letter-spacing:-.052em;margin:16px 0}.sx-industry-copy p{font-size:15px;line-height:1.75;color:#717c91;margin:0 0 25px;max-width:420px}.sx-industry-visual{padding:42px;display:flex;align-items:center;justify-content:center;background:linear-gradient(140deg,#DEEAFF,#F6F7FB);position:relative}.sx-industry-visual:before{content:"";position:absolute;width:290px;height:290px;border:1px solid #DEEAFF;border-radius:50%}.sx-industry-visual:after{content:"";position:absolute;width:400px;height:400px;border:1px solid rgba(252,191,170,.6);border-radius:50%}.sx-industry-preview{width:360px;max-width:100%;position:relative;z-index:2;background:#fff;border-radius:17px;border:1px solid #B3CCFF;box-shadow:0 26px 50px rgba(4,40,93,.14);padding:20px;transform:rotate(-3deg)}.sx-industry-preview .sx-demo-msg{font-size:12px;margin-top:14px}.sx-industry-preview .sx-demo-header{font-size:13px}.sx-industry-outcome{display:flex;align-items:center;gap:7px;margin-top:19px;color:#20855e;font-weight:750;font-size:11px}
/* Final CTA */
.sx-final{padding:90px 0}.sx-final-card{padding:85px 30px;background:radial-gradient(ellipse 70% 120% at 50% -30%,#1C568D,transparent 80%),#0A2557;color:#fff;text-align:center;border-radius:28px;position:relative;overflow:hidden}.sx-final-card:after{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at bottom right,rgba(255,35,0,.18),transparent 50%);pointer-events:none}.sx-final-card>*{position:relative;z-index:1}.sx-final-card .sx-eyebrow{border-color:#396A9B;background:#164B80;color:#B3CCFF}.sx-final-card .sx-section-title{max-width:720px;margin-inline:auto}.sx-final-card p{color:#BDD2E6;margin:0 auto 25px;max-width:620px;font-size:16px;line-height:1.75}.sx-final-card .sx-cta-row{justify-content:center}.sx-final-card .sx-button.light{background:transparent;border-color:#6D8CA9;color:#fff}.sx-final-card .sx-button.light:hover{background:rgba(255,255,255,.1)}.sx-quiet-footer{display:flex;align-items:center;justify-content:space-between;border-top:1px solid #edeef4;padding:28px 0 42px;color:#9ba1b2;font-size:12px;gap:20px}.sx-quiet-footer strong{font-size:17px;letter-spacing:-.04em;color:#0A2557}.sx-footer-links{display:flex;flex-wrap:wrap;gap:20px}.sx-footer-links a:hover{color:var(--sx-blue)}


@media(max-width:1100px){.sx-app-layout{grid-template-columns:165px 225px minmax(0,1fr)}.sx-info-sidebar{display:none}.sx-floating.call{left:-15px}.sx-floating.handoff{right:-8px}.sx-route-layout{gap:40px}}
@media(max-width:820px){.sx-wrap{width:min(100% - 36px,680px)}.sx-intro{padding:74px 0 72px}.sx-product-stage{margin-top:45px}.sx-app-layout{grid-template-columns:155px minmax(0,1fr);height:440px}.sx-sidebar{display:none}.sx-floating{display:none}.sx-value-head,.sx-experience-head{display:block}.sx-value-grid{grid-template-columns:1fr}.sx-value-card{min-height:340px}.sx-value-art{height:160px;max-width:390px;width:100%;margin-inline:auto}.sx-showcase{grid-template-columns:1fr}.sx-showcase-tabs{flex-direction:row;overflow-x:auto;white-space:nowrap}.sx-showcase-tab{flex:none}.sx-route-layout{grid-template-columns:1fr}.sx-route-canvas{min-height:400px}.sx-industry-card{grid-template-columns:1fr}.sx-industry-copy{padding:34px}.sx-industry-visual{min-height:290px}.sx-value,.sx-experience,.sx-routing,.sx-industries{padding:75px 0}.sx-final{padding:60px 0}.sx-quiet-footer{flex-wrap:wrap}}
@media(max-width:550px){.sx-wrap{width:calc(100% - 32px)}.sx-section-title{font-size:36px}.sx-intro .sx-section-title{font-size:38px}.sx-lede{font-size:15px}.sx-app-layout{grid-template-columns:100px minmax(0,1fr);height:400px}.sx-app-top{height:30px}.sx-agent-list .sx-panel-head{padding:13px 7px;height:55px}.sx-filter-row{padding:6px 4px}.sx-filter-pill{font-size:8px;padding:4px}.sx-contact{margin:1px 2px;padding:7px 3px;gap:4px}.sx-contact .sx-avatar{width:23px;height:23px;font-size:8px}.sx-contact-title{font-size:8px}.sx-contact-title time{display:none}.sx-contact-desc{font-size:8px}.sx-convo-head{height:55px;padding:0 10px}.sx-convo-user strong{font-size:10px}.sx-convo-user small{font-size:8px}.sx-convo-head .sx-round-icon{display:none}.sx-convo-body .sx-bubble{font-size:9px;padding:9px;max-width:93%}.sx-ai-note{font-size:8px;padding:7px}.sx-composer{margin:8px;height:30px}.sx-channel-line{gap:7px}.sx-channel-line span{font-size:10px;padding:8px 10px}.sx-value-head .sx-subtitle,.sx-experience .sx-subtitle{font-size:35px}.sx-value-card{padding:23px}.sx-showcase{padding:10px}.sx-showcase-tabs{gap:3px}.sx-showcase-tab{padding:11px;font-size:11px}.sx-showcase-panel{grid-template-columns:1fr;padding:23px}.sx-chat-copy h3{font-size:24px}.sx-demo-chat{max-width:300px}.sx-route-canvas{padding:20px;min-height:370px}.sx-route-card{width:95%}.sx-route-branch{gap:8px}.sx-route-branch .sx-route-card{padding:9px;gap:6px}.sx-route-branch .sx-route-card .ic{width:24px;height:24px}.sx-route-card strong{font-size:10px}.sx-route-card small{font-size:9px}.sx-industry-tabs{justify-content:flex-start}.sx-industry-tab{padding:9px 12px;font-size:11px}.sx-industry-copy{padding:25px}.sx-industry-visual{padding:25px}.sx-final-card{padding:60px 20px;border-radius:20px}.sx-final-card .sx-section-title{font-size:35px}.sx-final-card .sx-button{width:100%}.sx-final-card .sx-cta-row{flex-direction:column}.sx-quiet-footer{flex-direction:column;align-items:flex-start}}
@media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition:none!important}}

/* Compact traditional contact centre: no dashboard simulator or extra feature cards. */
.sx-human-compact{background:var(--sx-paper);padding:51px 0 57px}
.sx-human-grid{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:clamp(30px,6vw,86px);align-items:center}
.sx-human-copy .sx-subtitle{font-size:clamp(32px,3.2vw,46px);line-height:1.08;margin:12px 0 16px;max-width:470px}
.sx-human-copy .sx-subtitle em{color:var(--sx-navy600);font-weight:400}
.sx-human-copy p{max-width:460px;margin:0 0 19px;color:var(--sx-inkSoft);font-size:14px;line-height:1.65}
.sx-human-art{min-width:0;padding:25px 30px 22px;background:var(--sx-paper2);border-radius:19px}
.sx-human-flow{display:flex;align-items:center;justify-content:space-between;gap:9px}
.sx-human-node{min-width:0;display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:11px}
.sx-human-node strong{font-weight:700;color:var(--sx-navy900);font-size:12px;white-space:nowrap}
.sx-human-icon{display:grid;place-items:center;width:48px;height:48px;border-radius:50%;background:var(--sx-paper);color:var(--sx-navy700);box-shadow:0 3px 12px rgba(10,37,87,.06)}
.sx-human-icon-highlight{background:var(--sx-navy600);color:var(--sx-paper)}
.sx-human-icon svg{width:22px;height:22px}
.sx-human-arrow{color:var(--sx-navy500);font-size:20px;line-height:1;margin-top:-21px;flex:none}
.sx-human-rules{margin:23px 0 0;padding-top:15px;border-top:1px solid var(--sx-line2);color:var(--sx-muted);font-size:11px;line-height:1.65;text-align:center}
.sx-human-rules span{margin:0 5px;color:var(--sx-navy500)}
@media(max-width:820px){.sx-human-compact{padding:44px 0 48px}.sx-human-grid{grid-template-columns:1fr;gap:26px}.sx-human-copy{max-width:600px}.sx-human-art{padding:25px 20px 20px}}
@media(max-width:390px){.sx-human-art{padding:23px 10px 17px}.sx-human-flow{gap:4px}.sx-human-node strong{font-size:10px}.sx-human-arrow{font-size:15px}.sx-human-icon{width:40px;height:40px}.sx-human-icon svg{width:19px;height:19px}.sx-human-rules{font-size:10px}}
`;

declare global {
    interface Window {
        SimplexiMessenger?: {
            (...args: unknown[]): void;
            q: unknown[][];
        };
    }
}

const channels: Record<
    string,
    {
        kicker: string;
        title: string;
        desc: string;
        name: string;
        q: string;
        a: string;
        result: string;
    }
> = {
    whatsapp: {
        kicker: "WHATSAPP · ALWAYS CONNECTED",
        title: "Replies that feel personal. Even at scale.",
        desc: "Customers message your business. Your AI helps instantly, and your team can take over whenever needed.",
        name: "Simplexi · WhatsApp",
        q: "Can I change my delivery day?",
        a: "Absolutely. What day would you prefer?",
        result: "AI responding · Human handoff available",
    },
    voice: {
        kicker: "VOICE · NEVER MISS A CALL",
        title: "Every call gets an answer.",
        desc: "Natural AI voice conversations can capture enquiries and bookings, with a person ready for the tricky moments.",
        name: "Simplexi · Voice call",
        q: "Hi, are you open on Saturday?",
        a: "Yes. Would you like me to help you book a time?",
        result: "AI voice assistant · Call in progress",
    },
    instagram: {
        kicker: "INSTAGRAM · RIGHT IN YOUR INBOX",
        title: "Turn social interest into action.",
        desc: "Keep social conversations and support requests in the same workspace as the rest of your customer channels.",
        name: "Simplexi · Instagram DM",
        q: "Is this still available?",
        a: "Yes! Which colour are you interested in?",
        result: "DM captured · Ready for follow-up",
    },
    web: {
        kicker: "WEB CHAT · INSTANT HELP",
        title: "Answer questions while they browse.",
        desc: "Help visitors find answers, capture leads and reach your team without leaving your website.",
        name: "Simplexi · Website chat",
        q: "Can I speak to someone about pricing?",
        a: "Of course. I can answer a few questions or connect you with the sales team.",
        result: "Lead captured · Sales queue available",
    },
};

// @framerSupportedLayoutWidth any
// @framerSupportedLayoutHeight any
export default function Home() {
  const categories = [
    { name: "Makeup", text: "Expertly curated makeup essentials", image: "/images/makeup.jpg" },
    { name: "Fragrance", text: "Find the scent that defines you", image: "/images/fragrance.jpg" },
    { name: "Skincare", text: "Reveal your best skin yet", image: "/images/skincare.jpg" },
    { name: "Candle", text: "Luxury candles to elevate your space", image: "/images/candle.jpg" },
    { name: "Diffuser", text: "Effortless fragrance for every room", image: "/images/diffuser.jpg" },
    { name: "Room Spray", text: "Luxury room sprays for every space", image: "/images/room-spray.jpg" },
  ]

  return (
    <main>
      <header className="header">
        <div className="utility">
          <button className="iconButton search" aria-label="Search">
            <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 5 5"/></svg>
          </button>
          <a className="logo" href="#" aria-label="Mirrors Beauty home">
            <span>MIRRORS</span><small>BEAUTY</small>
          </a>
          <div className="utilityRight">
            <button className="country" aria-label="Choose country"><span className="flag" /> <span>⌄</span></button>
            <button className="iconButton" aria-label="Account">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c.7-5 3.4-7.5 8-7.5S19.3 16 20 21"/></svg>
            </button>
            <button className="iconButton bag" aria-label="Shopping bag">
              <svg viewBox="0 0 24 24"><path d="M5 8h14l-1 13H6L5 8Z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>
              <b>0</b>
            </button>
          </div>
        </div>
        <nav className="nav" aria-label="Main navigation">
          {["Brands","Fragrance","Makeup","Skincare","Bath & Body","Men","Candles + Home Scents","Gifts & Value Sets","Sale","Gift Cards","MB World"].map((item) => (
            <a href="#categories" key={item}>{item}{["Fragrance","Makeup","Skincare","Bath & Body","Men","Candles + Home Scents","MB World"].includes(item) && <span>⌄</span>}</a>
          ))}
        </nav>
      </header>

      <section className="hero" aria-label="Featured collection">
        <img src="/images/hero.jpg" alt="Luxury beauty products" />
      </section>

      <section className="categories" id="categories">
        <h1>Shop The Mirrors Beauty World</h1>
        <div className="categoryGrid">
          {categories.map((category) => (
            <article className="categoryCard" key={category.name}>
              <a className="categoryImage" href="#">
                <img src={category.image} alt={category.name} />
              </a>
              <h2>{category.name}</h2>
              <p>{category.text}</p>
              <a className="shopButton" href="#">Shop now</a>
            </article>
          ))}
        </div>
      </section>

      <section className="saleBanner">
        <h2>SHOP BLACK FRIDAY BY CATEGORY</h2>
        <p>Discover 25% off our favourite beauty essentials, from makeup and skincare to luxury fragrances and body care.</p>
      </section>
    </main>
  )
}
