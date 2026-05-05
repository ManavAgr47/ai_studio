"use client";

import { useEffect, useRef, useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import "./students.css";

export default function StudentsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (activeFaq === index) setActiveFaq(null);
    else setActiveFaq(index);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    
    const sectionsToAnimate = containerRef.current.querySelectorAll('.section, .card, .timeline-item, .step-box, .stat-card, .grant-benefit-item, .glass-card');
    sectionsToAnimate.forEach(el => el.classList.add('animate-on-scroll'));

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sectionsToAnimate.forEach(el => observer.observe(el));

    return () => {
      sectionsToAnimate.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <MainLayout>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <div className="students-page" ref={containerRef}>
        
        {/* Hero Section */}
        <header className="hero" id="top">
            <div className="hero-glow"></div>
            <div className="s-container text-center max-w-lg relative z-index">
                <span className="s-badge">🚀 Founded by students of IIT Roorkee.</span>
                <h1 className="hero-headline">AI Grant</h1>
                <p className="trust-line"><i className="fa-solid fa-shield-halved"></i> Free premium AI tools for students, starting with IITs</p>
                <p className="hero-subheading">Join IIT AI Studio to unlock powerful AI tools—and get a real shot at internships with leading companies.</p>
                <div className="hero-buttons">
                    <a href="https://ai-studio-lhzh.vercel.app/ai-grant" target="_blank" rel="noopener noreferrer" className="s-btn s-btn-primary s-btn-large">👉 Apply for AI Grant</a>
                </div>
            </div>
        </header>

        {/* What is the AI Grant */}
        <section className="section bg-darker" id="what-is-grant">
            <div className="s-container max-w-lg">
                <div className="grant-explainer">
                    <div className="grant-explainer-header">
                        <span className="s-badge">AI GRANT</span>
                        <h2 className="grant-explainer-title">What is the AI Grant?</h2>
                        <p className="grant-explainer-intro">The AI Grant is designed to give students a head start in the AI era — by removing cost barriers and unlocking real opportunities.</p>
                        <p className="grant-explainer-sub">We offer three core benefits:</p>
                    </div>

                    <div className="grant-benefits">
                        {/* Benefit 01 */}
                        <div className="grant-benefit-item glass-card">
                            <div className="grant-benefit-number">01</div>
                            <div className="grant-benefit-body">
                                <h3 className="grant-benefit-title">
                                    <span className="grant-benefit-icon">🧠</span>
                                    Free Premium AI Tools
                                </h3>
                                <p className="grant-benefit-desc">Get access to one premium AI subscription of your choice:</p>
                                <ul className="tool-list-v2">
                                    <li><i className="fa-solid fa-circle-check"></i> <span><strong>Claude Pro</strong> ($19/month)</span></li>
                                    <li><i className="fa-solid fa-circle-check"></i> <span><strong>ChatGPT Plus</strong> ($20/month)</span></li>
                                    <li><i className="fa-solid fa-circle-check"></i> <span><strong>Gemini Advanced</strong> ($20/month)</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Benefit 02 */}
                        <div className="grant-benefit-item glass-card coming-soon-card">
                            <div className="grant-benefit-number">02</div>
                            <div className="grant-benefit-body">
                                <h3 className="grant-benefit-title">
                                    <span className="grant-benefit-icon">📚</span>
                                    Skill Development Support
                                    <span className="coming-soon-badge">Coming Soon</span>
                                </h3>
                                <p className="grant-benefit-desc">Structured guidance to help you learn, build, and apply AI in real-world projects.</p>
                            </div>
                        </div>

                        {/* Benefit 03 */}
                        <div className="grant-benefit-item glass-card coming-soon-card">
                            <div className="grant-benefit-number">03</div>
                            <div className="grant-benefit-body">
                                <h3 className="grant-benefit-title">
                                    <span className="grant-benefit-icon">💼</span>
                                    Internship Opportunities
                                    <span className="coming-soon-badge">Coming Soon</span>
                                </h3>
                                <p className="grant-benefit-desc">Get access to curated internship opportunities with companies looking for AI-skilled talent.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* AI Grant Ecosystem */}
        <section className="section" id="ecosystem">
            <div className="s-container">
                <div className="section-header text-center">
                    <h2>AI Grant Ecosystem</h2>
                </div>
                <div className="s-grid s-grid-3">
                    <div className="card glass-card hover-glow">
                        <div className="icon-box">🧠</div>
                        <p>Free premium AI tools <strong>(AI Grant)</strong></p>
                    </div>
                    <div className="card glass-card hover-glow">
                        <div className="icon-box">🎓</div>
                        <h3 className="card-title">AI Skills</h3>
                        <p>Guidance and resources to help you effectively use AI and build real-world AI solutions.</p>
                    </div>
                    <div className="card glass-card hover-glow">
                        <div className="icon-box">🤝</div>
                        <p>Connect with <strong>elite companies</strong> for internships</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Who This Is For */}
        <section className="section bg-darker" id="who">
            <div className="s-container">
                <div className="who-layout">
                    <div className="who-image-col">
                        <div className="image-box glass-card border-accent relative">
                            <div className="img-glow"></div>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Students collaborating" className="rounded-img" />
                        </div>
                    </div>
                    <div className="who-content-col">
                        <span className="s-badge mb-2">Eligibility</span>
                        <h2 className="who-title">Who This Is For</h2>
                        <p className="who-intro">The AI Grant is open to motivated students who want to build real skills and use AI meaningfully.</p>
                        <ul className="who-list">
                            <li className="who-list-item">
                                <div className="who-list-icon"><i className="fa-solid fa-graduation-cap"></i></div>
                                <div className="who-list-text">
                                    <strong>IIT Students (Priority)</strong>
                                    <span>Starting with IITs — expanding to all colleges soon.</span>
                                </div>
                            </li>
                            <li className="who-list-item">
                                <div className="who-list-icon"><i className="fa-solid fa-brain"></i></div>
                                <div className="who-list-text">
                                    <strong>Curious &amp; Self-Driven</strong>
                                    <span>You don&apos;t need prior AI experience — just curiosity and commitment.</span>
                                </div>
                            </li>
                            <li className="who-list-item">
                                <div className="who-list-icon"><i className="fa-solid fa-rocket"></i></div>
                                <div className="who-list-text">
                                    <strong>Builders &amp; Learners</strong>
                                    <span>Students who want to create real projects, not just learn theory.</span>
                                </div>
                            </li>
                        </ul>
                        <a href="https://ai-studio-lhzh.vercel.app/ai-grant" target="_blank" rel="noopener noreferrer" className="s-btn s-btn-primary mt-4">👉 Apply for AI Grant</a>
                    </div>
                </div>
            </div>
        </section>

        {/* AI Grant Application Process */}
        <section className="section" id="application-process">
            <div className="s-container">
                <div className="section-header text-center">
                    <h2>AI Grant Application Process</h2>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-icon"><i className="fa-solid fa-laptop"></i></div>
                        <div className="timeline-content">
                            <h3>1. Apply Online</h3>
                            <p>Submit your application through our quick and simple form.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"><i className="fa-solid fa-user-check"></i></div>
                        <div className="timeline-content">
                            <h3>2. Selection by Secretariat</h3>
                            <p>Our team carefully reviews each application to identify high-potential candidates.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"><i className="fa-solid fa-envelope"></i></div>
                        <div className="timeline-content">
                            <h3>3. Shortlisting &amp; Outreach</h3>
                            <p>Selected applicants will be contacted with next steps and onboarding details.</p>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-icon"><i className="fa-solid fa-unlock"></i></div>
                        <div className="timeline-content">
                            <h3>4. Unlock Premium AI Access</h3>
                            <p>Get exclusive access to premium AI tools to accelerate your learning, projects, and research. Your account credentials will be provided upon selection.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-darker" id="faq">
            <div className="s-container max-w-md">
                <div className="section-header text-center">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-container">
                    <div className={`faq-item glass-card ${activeFaq === 0 ? 'active' : ''}`}>
                        <button className="faq-question" onClick={() => toggleFaq(0)}>
                            <span>What is the AI Grant?</span>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <div className="faq-answer">
                            <p>We provide free premium AI tools for students, starting with IITs, to boost learning and research.</p>
                        </div>
                    </div>
                    <div className={`faq-item glass-card ${activeFaq === 1 ? 'active' : ''}`}>
                        <button className="faq-question" onClick={() => toggleFaq(1)}>
                            <span>Do you build custom AI tools?</span>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <div className="faq-answer">
                            <p>Yes, we provide AI Contract Development and in-house tool support through our student ecosystem.</p>
                        </div>
                    </div>
                    <div className={`faq-item glass-card ${activeFaq === 2 ? 'active' : ''}`}>
                        <button className="faq-question" onClick={() => toggleFaq(2)}>
                            <span>Who are the founders?</span>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <div className="faq-answer">
                            <p>IIT AI Studio was founded by Dai Murata &amp; Hardik Advani.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contributors Wanted Section */}
        <section className="section bg-darker contributors-section" id="contributors">
            <div className="s-container">
                <div className="contributors-header text-center">
                    <h2 className="contributors-title">Contributors Wanted</h2>
                    <p className="contributors-intro">Help us expand the AI Grant and bridge the AI access gap between students in developed and emerging regions.</p>
                </div>

                <div className="contributors-why">
                    <p className="contributors-why-label">Why Join Us</p>
                    <div className="s-grid s-grid-3">
                        <div className="grant-benefit-item glass-card hover-glow">
                            <div className="grant-benefit-number">01</div>
                            <div className="grant-benefit-body">
                                <h3 className="grant-benefit-title">
                                    <span className="grant-benefit-icon">🧠</span>
                                    Free AI Access
                                </h3>
                                <p className="grant-benefit-desc">Get premium AI tools — the same benefits as our AI Grant recipients.</p>
                            </div>
                        </div>
                        <div className="grant-benefit-item glass-card hover-glow">
                            <div className="grant-benefit-number">02</div>
                            <div className="grant-benefit-body">
                                <h3 className="grant-benefit-title">
                                    <span className="grant-benefit-icon">💰</span>
                                    Earn While You Build
                                </h3>
                                <p className="grant-benefit-desc">Receive a part-time stipend for your contributions.</p>
                            </div>
                        </div>
                        <div className="grant-benefit-item glass-card hover-glow">
                            <div className="grant-benefit-number">03</div>
                            <div className="grant-benefit-body">
                                <h3 className="grant-benefit-title">
                                    <span className="grant-benefit-icon">🌍</span>
                                    Real Impact
                                </h3>
                                <p className="grant-benefit-desc">Be part of a mission to make AI accessible to students worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contributors-cta text-center">
                    <a href="https://ai-studio-lhzh.vercel.app/ai-grant" target="_blank" rel="noopener noreferrer" className="s-btn s-btn-primary s-btn-large">Apply Now</a>
                    <p className="contributors-cta-sub">Join IIT AI Studio and help shape the future of AI access.</p>
                </div>
            </div>
        </section>
      </div>
    </MainLayout>
  );
}
