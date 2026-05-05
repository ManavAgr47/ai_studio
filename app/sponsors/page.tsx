"use client";

import { useEffect, useRef } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import "./sponsors.css";

export default function SponsorsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if(e.isIntersecting) e.target.classList.add('visible'); 
      });
    }, {threshold: 0.1});
    
    const reveals = containerRef.current.querySelectorAll('.reveal');
    reveals.forEach(el => obs.observe(el));

    return () => {
      reveals.forEach(el => obs.unobserve(el));
      obs.disconnect();
    };
  }, []);

  return (
    <MainLayout>
      <div className="sponsors-page" ref={containerRef}>
        <div className="blobs">
          <div className="blob b1"></div>
          <div className="blob b2"></div>
          <div className="blob b3"></div>
        </div>

        {/* HERO */}
        <section id="hero">
          <div className="s-container">
            <div className="hero-badge"><span></span> Bridging the AI Divide in India</div>
            <h1>
              AI Grant<br />
              <span className="grad">Scholarship Program</span>
            </h1>
            <p>Access to AI shouldn’t be limited by affordability. Today, millions of talented students are held back — not by ability, but by lack of access.<br /><br /><strong style={{color:"#fff"}}>We’re here to change that.</strong></p>
            <div className="hero-btns">
              <a href="https://ai-studio-lhzh.vercel.app/ai-grant" target="_blank" rel="noopener noreferrer" className="s-btn s-btn-primary">🤝 Become a Sponsor</a>
            </div>
            <p className="scroll-hint">↓ &nbsp; Democratising premium AI access for students across emerging economies</p>
          </div>
        </section>

        {/* PROBLEM */}
        <section id="problem">
          <div className="s-container">
            <div className="reveal">
              <div className="section-label label-red">⚠ Our Challenge</div>
              <h2 className="section-title">The Global AI Access Gap</h2>
              <p className="section-sub">A $20/month barrier that shapes the future of millions</p>
            </div>
            <div className="divide-grid reveal">
              <div className="divide-card good">
                <h3>🌍 Developed Nations</h3>
                <div style={{display:"flex", alignItems:"baseline", gap: "12px", margin: "16px 0 16px"}}>
                  <div className="price" style={{color:"#4ade80", margin:0}}>$20<span style={{fontSize:"1.2rem",fontWeight:400}}>/mo</span></div>
                  <div className="price-sub" style={{fontSize:"1.4rem", color:"#fff", fontFamily:"'Outfit',sans-serif", fontWeight:700, margin:0}}>≈ Cost of one lunch</div>
                </div>
                <p>Students freely access advanced AI tools that accelerate research, boost productivity, and sharpen career competitiveness.</p>
              </div>
              <div className="vs-badge">VS</div>
              <div className="divide-card bad">
                <h3>🌏 Emerging Economies</h3>
                <div style={{display:"flex", alignItems:"baseline", gap: "12px", margin: "16px 0 16px"}}>
                  <div className="price" style={{color:"#f87171", margin:0}}>$20<span style={{fontSize:"1.2rem",fontWeight:400}}>/mo</span></div>
                  <div className="price-sub" style={{fontSize:"1.4rem", color:"#fff", fontFamily:"'Outfit',sans-serif", fontWeight:700, margin:0}}>≈ One full week of living expenses</div>
                </div>
                <p>Premium AI tools remain financially inaccessible. Talented students are left behind — not due to ability, but affordability.</p>
              </div>
            </div>
            <div className="warn-box reveal" style={{fontFamily:"'Outfit',sans-serif", fontSize:"1.4rem", fontWeight:700, color:"#fff", padding:"32px"}}>
              <span style={{color:"#fde68a"}}>⚠ &nbsp;</span> This pricing gap creates a significant barrier for students in emerging countries, limiting AI adoption in research and slowing the spread of AI expertise.
            </div>
          </div>
        </section>

        {/* PROGRAM */}
        <section id="program" style={{background:"rgba(255,255,255,.01)"}}>
          <div className="s-container">
            <div className="reveal">
              <div className="section-label label-blue">💡 The Solution</div>
              <h2 className="section-title">What Is the AI Grant Program?</h2>
              <p className="section-sub" style={{fontFamily:"'Outfit',sans-serif", fontSize:"1.4rem", fontWeight:700, color:"#fff", maxWidth:"800px"}}>We empower top students in emerging countries with free access to premium AI — tools that are otherwise paid and out of reach.</p>
              <p style={{color:"#64748b",maxWidth:"760px",lineHeight:1.7,marginBottom:"48px",textAlign:"center",marginLeft:"auto",marginRight:"auto"}}>IIT AI Studio is seeking corporate sponsorships to provide students with free access to premium AI tools, empowering them to learn, build, innovate, and unlock real-world opportunities regardless of financial constraints.</p>
            </div>
            <div className="steps">
              <div className="step glass reveal">
                <div className="step-num grad">01</div>
                <h3>Sponsor Joins</h3>
                <p>A company commits to a monthly sponsorship starting at $100/month.</p>
              </div>
              <div className="step glass reveal">
                <div className="step-num grad">02</div>
                <h3>Offering free premium AI to students</h3>
                <p>We will offer premium AI free of charge to outstanding university students who wish to utilize AI. We will start with students at IIT.</p>
              </div>
              <div className="step glass reveal">
                <div className="step-num grad">03</div>
                <h3>Sponsorship Benefits</h3>
                <p>Sponsors can approach top-tier students with AI skills for internships.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits">
          <div className="s-container">
            <div className="reveal">
              <div className="section-label label-violet">🎁 ROI & Value</div>
              <h2 className="section-title">Benefits for Sponsoring Companies</h2>
              <p className="section-sub">We provide our sponsoring companies with not only social contribution but also support that is beneficial to their business.</p>
            </div>
            <div className="benefits-grid">
              <div className="benefit glass reveal" style={{gridColumn: "1 / -1", textAlign: "center", maxWidth: "800px", margin: "0 auto"}}>
                <div className="icon" style={{fontSize: "2.5rem"}}>🤝</div>
                <h3 style={{fontSize: "1.5rem", marginBottom: "16px"}}>Internship Matching with Top AI Talent</h3>
                <p style={{fontSize: "1.05rem"}}>We offer internship matching with AI talent from top-tier universities.<br/><br/>Please use this as one of the options for your company&apos;s talent acquisition strategy.</p>
              </div>
              <div className="benefit glass reveal">
                <div className="icon">🌟</div>
                <h3>Brand Visibility & CSR Impact</h3>
                <p>Demonstrate a genuine commitment to global STEM equity. Associate your brand with innovation, inclusion, and the next generation of AI leaders.</p>
              </div>
              <div className="benefit glass reveal">
                <div className="icon">📊</div>
                <h3>Measurable ROI</h3>
                <p>Low-cost sponsorship with quantifiable returns: reduced recruitment costs, enhanced employer branding, and direct engagement with emerging-market talent.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TIERS */}
        <section id="tiers" style={{background:"rgba(255,255,255,.01)"}}>
          <div className="s-container">
            <div className="reveal">
              <div className="section-label label-gold">💎 Pricing</div>
              <h2 className="section-title">Sponsorship Tiers</h2>
              <p className="section-sub">Sponsorship fees vary depending on the size of the company (number of employees).</p>
            </div>
            <div className="tiers">
              {/* Startup */}
              <div className="tier glass reveal">
                <div className="tier-name">Startups & SM Company</div>
                <div className="tier-emp">Under 1,000 employees</div>
                <div className="tier-price">$100<span>/mo</span></div>
                <div className="tier-period">6-month minimum</div>
                <ul className="tier-features">
                  <li>1 student sponsored per $100</li>
                  <li>Listed as AI Grant Partner</li>
                  <li>Internship access</li>
                  <li>6-month minimum contract</li>
                </ul>
                <a href="#cta" className="s-btn s-btn-ghost" style={{width:"100%",justifyContent:"center"}}>Get Started</a>
              </div>
              {/* Scale-Up FEATURED */}
              <div className="tier glass featured reveal">
                <div style={{position:"absolute",top:"-1px",left:"50%",transform:"translateX(-50%)",background:"linear-gradient(135deg,var(--s-blue),var(--s-violet))",color:"#fff",fontSize:".72rem",fontWeight:700,padding:"4px 18px",borderRadius:"0 0 12px 12px",letterSpacing:".08em"}}>MOST POPULAR</div>
                <div className="tier-name" style={{marginTop:"16px"}}><span className="grad">Big Company</span></div>
                <div className="tier-emp">1,000 – 10,000 employees</div>
                <div className="tier-price"><span className="grad">$500</span><span>/mo</span></div>
                <div className="tier-period">6-month minimum</div>
                <ul className="tier-features">
                  <li>5+ students sponsored</li>
                  <li>Featured partner placement</li>
                  <li>Priority talent access</li>
                  <li>Quarterly impact report</li>
                </ul>
                <a href="#cta" className="s-btn s-btn-primary" style={{width:"100%",justifyContent:"center"}}>Become a Partner</a>
              </div>
              {/* Enterprise */}
              <div className="tier glass reveal">
                <div className="tier-name">Global Enterprise</div>
                <div className="tier-emp">Over 10,000 employees</div>
                <div className="tier-price grad-gold">Custom</div>
                <div className="tier-period">Bespoke pricing</div>
                <ul className="tier-features">
                  <li>Bespoke student cohorts</li>
                  <li>Co-branded AI curriculum</li>
                  <li>Executive networking</li>
                  <li>Dedicated account manager</li>
                </ul>
                <a href="#cta" className="s-btn s-btn-ghost" style={{width:"100%",justifyContent:"center"}}>Contact Us</a>
              </div>
            </div>
            <p className="tier-note" style={{color:"#334155",fontSize:".82rem",textAlign:"center",marginTop:"32px"}}>All plans require a 6-month minimum commitment. Pricing scales with company size to ensure equitable impact per student served.</p>
          </div>
        </section>

        {/* VISION */}
        <section id="vision">
          <div className="s-container">
            <div className="reveal">
              <div className="section-label label-green">🚀 Future Vision</div>
              <h2 className="section-title">IIT AI Studio&apos;s Three Pillars</h2>
              <p className="section-sub">Through these three activities, IIT AI Studio will contribute to closing the AI gap in emerging countries.</p>
            </div>
            <div className="vision-grid">
              <div className="vision-card glass reveal">
                <div className="num">Pillar 01</div>
                <h3>🧠 AI Grant</h3>
                <p style={{color:"#64748b", fontSize:".95rem", lineHeight:1.6, marginTop:"12px"}}>We will offer students our premium AI, which is usually a paid service, for free.</p>
              </div>
              <div className="vision-card glass reveal">
                <div className="num">Pillar 02</div>
                <h3>🤝 Internship Matching</h3>
                <p style={{color:"#64748b", fontSize:".95rem", lineHeight:1.6, marginTop:"12px"}}>This service matches talented university students with AI skills with internship opportunities at companies.</p>
              </div>
              <div className="vision-card glass reveal">
                <div className="num">Pillar 03</div>
                <h3>🚀 AI Development</h3>
                <p style={{color:"#64748b", fontSize:".95rem", lineHeight:1.6, marginTop:"12px"}}>We provide jobs and income sources for students with AI skills.<br/><br/>We also provide business support for AI products developed by AI Grant members.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta">
          <div className="s-container reveal">
            <div className="section-label label-blue" style={{margin:"0 auto 20px",width:"fit-content"}}>✉ Let&apos;s Talk</div>
            <h2>IITAIS is <span className="grad">AI Expressway</span></h2>
            <p>Together, we can ensure every brilliant mind in India has access to the tools they need to thrive. We would love to welcome your organisation as an IIT AI Studio sponsor.</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:"16px",justifyContent:"center"}}>
              <a href="https://ai-studio-lhzh.vercel.app/ai-grant" target="_blank" rel="noopener noreferrer" className="s-btn s-btn-primary" style={{fontSize:"1.1rem",padding:"18px 40px"}}>🤝 Become a Sponsor</a>
            </div>
            <div className="contact-row">
              <a href="mailto:contact@iitaistudio.com" className="contact-chip">✉ &nbsp;contact@iitaistudio.com</a>
              <a href="https://www.IITAIS.com" className="contact-chip" target="_blank" rel="noopener noreferrer">🌐 &nbsp;www.IITAIS.com</a>
            </div>
            <p style={{marginTop:"40px",color:"#1e293b",fontSize:".85rem"}}>Our team will respond within 48 hours.</p>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
