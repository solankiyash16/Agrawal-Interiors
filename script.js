/* =====================================================================
   Agrawal Brothers — Vanilla JS
   No external libs (except Lucide icons via CDN script).
   ===================================================================== */

/* ---------- Data ---------- */
const BRAND = {
    name: "Agrawal Brothers",
    phoneDisplay: "+91 91379 17067",
    whatsapp: "919137917067",
    email: "solankiyash451@gmail.com",
};

const IMAGES = {
    hero3D: "hero_3d_render.jpg",
    livingRoom1: "https://images.unsplash.com/photo-1639059790587-95625e6b764c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzc2NzcwMDIwfDA&ixlib=rb-4.1.0&q=85",
    livingRoom2: "https://images.unsplash.com/photo-1638284457192-27d3d0ec51aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBsdXh1cnklMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MHx8fHwxNzc2NzcwMDIwfDA&ixlib=rb-4.1.0&q=85",
    kitchen: "https://images.unsplash.com/photo-1742280879518-ada47b660ccd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2ODh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBtb2R1bGFyJTIwa2l0Y2hlbiUyMGludGVyaW9yfGVufDB8fHx8MTc3Njc3MDAyMHww&ixlib=rb-4.1.0&q=85",
    office: "https://images.unsplash.com/photo-1595846723416-99a641e1231a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHx8fDE3NzY3NzAwMjF8MA&ixlib=rb-4.1.0&q=85",
    before: "https://static.prod-images.emergentagent.com/jobs/8e367d53-0af5-4fa1-9fd9-22d9043b5922/images/343f3e70b31a26c47b8c8dc2b336caf4784301310f24d458a8fe0bbd91b366dd.png",
    after: "https://static.prod-images.emergentagent.com/jobs/8e367d53-0af5-4fa1-9fd9-22d9043b5922/images/30523730c346d0018e43bd5868b0713f42cc2a62f300864962d84f65c9d97247.png",
    bedroom: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
    dining: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1600&q=80",
};

const PROJECTS = [
    { id: "p1", name: "The Skyline Residence", category: "Luxury Apartment", cover: IMAGES.livingRoom1,
        gallery: [IMAGES.livingRoom1, IMAGES.livingRoom2, IMAGES.bedroom],
        budget: "₹28L – ₹34L", area: "1,450 sq.ft", timeline: "75 days", location: "Bandra West, Mumbai",
        span: "span-8", height: "h-lg",
        description: "A warm, material-forward 3BHK blending walnut joinery with pale limestone and sculptural lighting." },
    { id: "p2", name: "Chef's Edition Kitchen", category: "Modular Kitchen", cover: IMAGES.kitchen,
        gallery: [IMAGES.kitchen, IMAGES.dining],
        budget: "₹6L – ₹9L", area: "160 sq.ft", timeline: "30 days", location: "Powai, Mumbai",
        span: "span-4", height: "h-lg",
        description: "Handleless cabinetry, quartz countertops, integrated appliances — engineered for the serious home cook." },
    { id: "p3", name: "Studio Nova Workspace", category: "Office Interior", cover: IMAGES.office,
        gallery: [IMAGES.office],
        budget: "₹18L – ₹22L", area: "2,200 sq.ft", timeline: "60 days", location: "Andheri East, Mumbai",
        span: "span-5", height: "h-md",
        description: "Flexible workstations, acoustic pods and a biophilic breakout lounge for a 40-person team." },
    { id: "p4", name: "Hillview Renovation", category: "Full Renovation", cover: IMAGES.livingRoom2,
        gallery: [IMAGES.after, IMAGES.before],
        budget: "₹12L – ₹16L", area: "980 sq.ft", timeline: "55 days", location: "Thane West",
        span: "span-7", height: "h-md",
        description: "Top-to-bottom teardown: new layout, electricals, plumbing and a statement living-dining.",
        hasBeforeAfter: true },
];

const SERVICES = [
    { id: "home", title: "Home Interiors", icon: "home",
        desc: "Turnkey 1/2/3/4 BHK interiors — from false ceiling to final styling.",
        highlights: ["False ceiling & lighting", "Wardrobes & TV units", "Painting & flooring"] },
    { id: "kitchen", title: "Modular Kitchen", icon: "chef-hat",
        desc: "German fittings, quartz tops and storage engineered to the millimetre.",
        highlights: ["Hettich / Hafele hardware", "Quartz / granite tops", "Loft-to-floor storage"] },
    { id: "renovation", title: "Renovation", icon: "hammer",
        desc: "Structured renovations with on-time delivery and zero hidden costs.",
        highlights: ["Civil & waterproofing", "Electrical & plumbing", "Complete refinish"] },
    { id: "office", title: "Office Interiors", icon: "building-2",
        desc: "Workspaces that elevate culture — from 500 to 20,000 sq.ft.",
        highlights: ["Workstations & cabins", "Conference & breakout", "Branding & signage"] },
];

const PROCESS = [
    { step: "01", title: "Consultation", desc: "Free site visit, brief capture and budget mapping.", icon: "message-square" },
    { step: "02", title: "Design (2D / 3D)", desc: "Detailed 3D walkthroughs and locked material board.", icon: "compass" },
    { step: "03", title: "Execution", desc: "Factory-made modules, on-site supervision, weekly updates.", icon: "wrench" },
    { step: "04", title: "Handover", desc: "Styling, snagging and a 10-year warranty handover kit.", icon: "key-round" },
];

const PACKAGES = [
    { id: "basic", name: "Essential", price: "₹1,499", unit: "/ sq.ft onwards",
        tagline: "Beautifully done basics, handled end-to-end.",
        features: [
            "False ceiling + 2 coat emulsion paint",
            "Modular kitchen with BWP ply",
            "Wardrobes + TV unit in living",
            "Standard electricals & lighting",
            "6-year warranty",
        ], featured: false },
    { id: "premium", name: "Signature", price: "₹2,499", unit: "/ sq.ft onwards",
        tagline: "Design-led interiors with premium finishes.",
        features: [
            "Custom ceiling & cove lighting",
            "Premium laminate + veneer kitchen",
            "Walk-in wardrobes, feature walls",
            "Smart lighting & automation ready",
            "10-year warranty",
            "Dedicated designer + PM",
        ], featured: true },
];

const TESTIMONIALS = [
    { name: "Ananya Mehta", role: "3BHK, Bandra West",
        quote: "Agrawal Brothers turned our ageing flat into a magazine-worthy home. On time, on budget, zero stress.",
        rating: 5 },
    { name: "Rahul Deshmukh", role: "Office, Andheri East",
        quote: "The 3D walkthroughs were spot-on and the execution was even better. Our team finally loves coming to the office.",
        rating: 5 },
    { name: "Priya & Karan Shah", role: "2BHK, Thane West",
        quote: "From kitchen layout to lighting — every detail was thought through. The handover felt like moving into a hotel suite.",
        rating: 5 },
    { name: "Nikhil Raut", role: "Renovation, Powai",
        quote: "They renovated our entire apartment in 55 days. Craftsmanship, communication and finish — top tier.",
        rating: 5 },
];

const TRUST_ITEMS = [
    { icon: "award", label: "150+ Projects Completed" },
    { icon: "users", label: "5+ Years Experience" },
    { icon: "clock", label: "On-Time Delivery" },
    { icon: "shield-check", label: "10-Year Warranty" },
    { icon: "map-pin", label: "Mumbai · Navi Mumbai · Thane" },
    { icon: "sparkles", label: "Turnkey Design + Build" },
];

/* ---------- Utilities ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const h = (tag, attrs = {}, children = []) => {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
        if (k === "class") el.className = v;
        else if (k === "html") el.innerHTML = v;
        else if (k.startsWith("on")) el.addEventListener(k.slice(2).toLowerCase(), v);
        else if (v !== false && v !== null && v !== undefined) el.setAttribute(k, v);
    });
    (Array.isArray(children) ? children : [children]).forEach(c => {
        if (c == null) return;
        el.append(c.nodeType ? c : document.createTextNode(c));
    });
    return el;
};
const icon = (name) => `<i data-lucide="${name}"></i>`;
const refreshIcons = () => window.lucide?.createIcons?.();

function toast(message, type = "success") {
    const stack = $("#toastStack");
    if (!stack) return;
    const t = h("div", { class: `toast ${type}` }, message);
    stack.appendChild(t);
    setTimeout(() => t.remove(), 3200);
}

/* ---------- Header: scroll + mobile menu ---------- */
function initHeader() {
    const header = $("#header");
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = $("#menuToggle");
    const menu = $("#mobileMenu");
    toggle?.addEventListener("click", () => {
        const open = !menu.hasAttribute("hidden");
        if (open) menu.setAttribute("hidden", "");
        else menu.removeAttribute("hidden");
        toggle.innerHTML = open ? icon("menu") : icon("x");
        refreshIcons();
    });
    menu?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
        menu.setAttribute("hidden", "");
        toggle.innerHTML = icon("menu");
        refreshIcons();
    }));
}

/* ---------- Hero: mouse tilt + parallax blobs ---------- */
function initHero() {
    const tilt = $("#heroTilt");
    if (tilt) {
        const floats = tilt.querySelectorAll(".hero-float");
        tilt.addEventListener("mousemove", (e) => {
            const r = tilt.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            tilt.style.transform = `perspective(1200px) rotateX(${py * -6}deg) rotateY(${px * 10}deg)`;
            floats.forEach(f => { f.style.transform = `translate(${px * 16}px, ${py * 16}px)`; });
        });
        tilt.addEventListener("mouseleave", () => {
            tilt.style.transform = "perspective(1200px) rotateX(0) rotateY(0)";
            floats.forEach(f => { f.style.transform = ""; });
        });
    }

    // Parallax blobs on scroll
    const parallaxEls = $$("[data-parallax]");
    const parallaxYEls = $$("[data-parallax-y]");
    const onScroll = () => {
        const y = window.scrollY;
        parallaxEls.forEach(el => {
            const m = parseFloat(el.dataset.parallax) || 0.2;
            el.style.transform = `translateY(${y * m}px)`;
        });
        parallaxYEls.forEach(el => {
            const m = parseFloat(el.dataset.parallaxY) || 0.1;
            const r = el.getBoundingClientRect();
            const offset = (window.innerHeight / 2 - (r.top + r.height / 2)) * m;
            el.style.transform = `translateY(${offset}px)`;
        });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
}

/* ---------- Trust Bar ---------- */
function renderTrust() {
    const track = $("#trustTrack");
    if (!track) return;
    const items = [...TRUST_ITEMS, ...TRUST_ITEMS]; // duplicate for seamless marquee
    track.innerHTML = items.map(it => `
        <div class="trust-item">
            <span class="trust-icon">${icon(it.icon)}</span>
            <span>${it.label}</span>
            <span class="trust-dot"></span>
        </div>
    `).join("");
}

/* ---------- Portfolio ---------- */
function renderPortfolio() {
    const grid = $("#portfolioGrid");
    if (!grid) return;
    grid.innerHTML = PROJECTS.map(p => `
        <article class="portfolio-card ${p.span} ${p.height}" data-id="${p.id}" data-testid="portfolio-card-${p.id}" tabindex="0" role="button" aria-label="Open ${p.name}">
            <img src="${p.cover}" alt="${p.name}" loading="lazy" />
            <div class="glow"></div>
            <div class="overlay"></div>
            <span class="tag">${p.category}</span>
            <div class="content">
                <div>
                    <h3>${p.name}</h3>
                    <div class="meta">
                        <span>${icon("map-pin")} ${p.location}</span>
                        <span>${icon("ruler")} ${p.area}</span>
                        <span>${icon("clock-3")} ${p.timeline}</span>
                    </div>
                </div>
                <div class="cta-circle">${icon("chevron-right")}</div>
            </div>
        </article>
    `).join("");

    // Tilt + glow on hover
    grid.querySelectorAll(".portfolio-card").forEach(card => {
        const glow = card.querySelector(".glow");
        card.addEventListener("mousemove", (e) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            card.style.transform = "";
            if (glow) glow.style.background = `radial-gradient(400px circle at ${px * 100}% ${py * 100}%, rgba(59,130,246,0.45), transparent 60%)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
            if (glow) glow.style.background = "";
        });

        // [ISSUE 4 FOR COLLEGE PROJECT]:
        // When clicking on the portfolio images, nothing should happen (modal popup disabled)
        card.addEventListener("click", () => {
            console.warn(`Issue 4: Clicked portfolio item (${card.dataset.id}), but modal popup is disabled.`);
        });

        /*
        // =========================================================================
        // [SOLUTION FOR COLLEGE REPORT - STEP 4]:
        // To fix this later for your report, restore the openModal click handlers below:
        // =========================================================================
        card.addEventListener("click", () => openModal(card.dataset.id));
        card.addEventListener("keydown", (e) => { if (e.key === "Enter") openModal(card.dataset.id); });
        */
    });
}

/* ---------- Modal ---------- */
let modalState = { project: null, index: 0 };

function openModal(projectId) {
    const project = PROJECTS.find(p => p.id === projectId);
    if (!project) return;
    modalState = { project, index: 0 };
    renderModal();
    const modal = $("#projectModal");
    modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    refreshIcons();
}

function closeModal() {
    const modal = $("#projectModal");
    modal.setAttribute("hidden", "");
    document.body.style.overflow = "";
}

function renderModal() {
    const panel = $("#modalPanel");
    const { project, index } = modalState;
    if (!project || !panel) return;

    let mediaHTML = "";
    if (project.hasBeforeAfter) {
        mediaHTML = `
            <div class="ba-slider" id="baSlider">
                <img src="${project.gallery[0]}" alt="After" />
                <div class="ba-before-wrap" id="baBefore">
                    <img src="${project.gallery[1]}" alt="Before" />
                </div>
                <div class="ba-handle" id="baHandle">
                    <div class="ba-knob"><div class="bars"><span></span><span></span></div></div>
                </div>
                <span class="ba-label before">Before</span>
                <span class="ba-label after">After</span>
            </div>
        `;
    } else {
        const src = project.gallery[index];
        mediaHTML = `<img src="${src}" alt="${project.name}" />`;
        if (project.gallery.length > 1) {
            mediaHTML += `
                <button class="modal-prev" data-testid="modal-prev" aria-label="Previous">${icon("chevron-left")}</button>
                <button class="modal-next" data-testid="modal-next" aria-label="Next">${icon("chevron-right")}</button>
            `;
        }
    }

    panel.innerHTML = `
        <button class="modal-close" id="modalClose" data-testid="modal-close" aria-label="Close">${icon("x")}</button>
        <div class="modal-media">${mediaHTML}</div>
        <div class="modal-body">
            <span class="overline">${project.category}</span>
            <h3>${project.name}</h3>
            <p class="desc">${project.description}</p>
            <div class="modal-meta">
                <div class="meta-tile" data-testid="modal-meta-budget"><span class="small-caps">${icon("wallet")} Budget</span><strong>${project.budget}</strong></div>
                <div class="meta-tile" data-testid="modal-meta-area"><span class="small-caps">${icon("ruler")} Area</span><strong>${project.area}</strong></div>
                <div class="meta-tile" data-testid="modal-meta-timeline"><span class="small-caps">${icon("clock-3")} Timeline</span><strong>${project.timeline}</strong></div>
                <div class="meta-tile" data-testid="modal-meta-location"><span class="small-caps">${icon("map-pin")} Location</span><strong>${project.location}</strong></div>
            </div>
            <a href="#contact" class="btn btn-primary" data-testid="modal-cta">Design a space like this</a>
        </div>
    `;

    $("#modalClose").addEventListener("click", closeModal);
    panel.querySelector(".btn")?.addEventListener("click", closeModal);

    const prev = panel.querySelector(".modal-prev");
    const next = panel.querySelector(".modal-next");
    prev?.addEventListener("click", () => { modalState.index = (modalState.index - 1 + project.gallery.length) % project.gallery.length; renderModal(); refreshIcons(); });
    next?.addEventListener("click", () => { modalState.index = (modalState.index + 1) % project.gallery.length; renderModal(); refreshIcons(); });

    if (project.hasBeforeAfter) initBeforeAfter();
    refreshIcons();
}

function initBeforeAfter() {
    const slider = $("#baSlider");
    const before = $("#baBefore");
    const handle = $("#baHandle");
    if (!slider || !before || !handle) return;

    let dragging = false;
    const update = (clientX) => {
        const r = slider.getBoundingClientRect();
        let pct = ((clientX - r.left) / r.width) * 100;
        pct = Math.max(4, Math.min(96, pct));
        before.style.width = pct + "%";
        handle.style.left = `calc(${pct}% - 1px)`;
        const img = before.querySelector("img");
        if (img) img.style.width = `${(100 / pct) * 100}%`;
    };
    update(slider.getBoundingClientRect().left + slider.getBoundingClientRect().width / 2);

    const onDown = (e) => { dragging = true; update(e.clientX ?? e.touches?.[0]?.clientX); };
    const onMove = (e) => { if (!dragging) return; update(e.clientX ?? e.touches?.[0]?.clientX); };
    const onUp = () => { dragging = false; };

    slider.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    slider.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
}

function initModalGlobal() {
    $("#projectModal")?.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal-backdrop")) closeModal();
    });
    window.addEventListener("keydown", (e) => {
        if ($("#projectModal").hasAttribute("hidden")) return;
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowRight") $(".modal-next")?.click();
        if (e.key === "ArrowLeft") $(".modal-prev")?.click();
    });
}

/* ---------- Services (tilt hover) ---------- */
function renderServices() {
    const grid = $("#servicesGrid");
    if (!grid) return;
    grid.innerHTML = SERVICES.map(s => `
        <article class="service-card" data-testid="service-card-${s.id}">
            <div class="glow"></div>
            <div class="service-icon">${icon(s.icon)}</div>
            <h3>${s.title}</h3>
            <p class="desc">${s.desc}</p>
            <ul class="highlights">${s.highlights.map(x => `<li>${x}</li>`).join("")}</ul>
            <span class="more">Learn more ${icon("arrow-right")}</span>
        </article>
    `).join("");

    grid.querySelectorAll(".service-card").forEach(card => {
        const glow = card.querySelector(".glow");
        card.addEventListener("mousemove", (e) => {
            const r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            card.style.transform = `perspective(1100px) rotateX(${(py - 0.5) * -6}deg) rotateY(${(px - 0.5) * 8}deg)`;
            if (glow) glow.style.background = `radial-gradient(360px circle at ${px * 100}% ${py * 100}%, rgba(59,130,246,0.15), transparent 55%)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
            if (glow) glow.style.background = "";
        });
    });
}

/* ---------- Process (scroll-driven line fill) ---------- */
function renderProcess() {
    const wrap = $("#processTimeline");
    if (!wrap) return;
    const line = $("#processLineFill");
    PROCESS.forEach((p, i) => {
        const step = h("div", { class: "process-step", "data-testid": `process-step-${i}` }, []);
        step.innerHTML = `
            <div class="process-circle">${icon(p.icon)}</div>
            <div class="step">STEP ${p.step}</div>
            <h3>${p.title}</h3>
            <p class="desc">${p.desc}</p>
        `;
        wrap.appendChild(step);
    });

    const onScroll = () => {
        const r = wrap.getBoundingClientRect();
        const viewport = window.innerHeight;
        const start = viewport * 0.8;
        const end = viewport * 0.4;
        const total = (r.top - end) / (start - end);
        const progress = 1 - Math.max(0, Math.min(1, total));
        const isMobile = window.innerWidth <= 768;
        if (line) {
            if (isMobile) { line.style.height = (progress * 100) + "%"; line.style.width = "100%"; }
            else { line.style.width = (progress * 100) + "%"; line.style.height = "100%"; }
        }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
}

/* ---------- Pricing ---------- */
function renderPricing() {
    const grid = $("#pricingGrid");
    if (!grid) return;
    grid.innerHTML = PACKAGES.map(p => `
        <article class="pricing-card ${p.featured ? "featured" : ""}" data-testid="pricing-card-${p.id}">
            <div class="pricing-header">
                <h3>${p.name}</h3>
                ${p.featured ? `<span class="pop-tag">${icon("sparkles")} Most Popular</span>` : ""}
            </div>
            <p class="tag-line">${p.tagline}</p>
            <div class="price"><strong>${p.price}</strong><span class="unit">${p.unit}</span></div>
            <ul>${p.features.map(f => `<li><span class="check">${icon("check")}</span><span>${f}</span></li>`).join("")}</ul>
            <a href="#contact" class="btn btn-primary" data-testid="pricing-cta-${p.id}">Get ${p.name} Quote</a>
        </article>
    `).join("");
}

/* ---------- Testimonials ---------- */
function initTestimonials() {
    let idx = 0;
    const slide = $(".testimonial-slide");
    const quote = $("#tQuote");
    const name = $("#tName");
    const role = $("#tRole");
    const stars = $("#tStars");
    const dotsWrap = $("#tDots");
    if (!quote) return;

    // dots
    dotsWrap.innerHTML = TESTIMONIALS.map((_, i) =>
        `<button class="dot ${i === 0 ? "active" : ""}" data-i="${i}" data-testid="testimonial-dot-${i}" aria-label="Testimonial ${i+1}"></button>`
    ).join("");
    dotsWrap.querySelectorAll(".dot").forEach(d => d.addEventListener("click", () => show(parseInt(d.dataset.i, 10))));

    const show = (n) => {
        idx = (n + TESTIMONIALS.length) % TESTIMONIALS.length;
        slide.classList.add("swap");
        setTimeout(() => {
            const t = TESTIMONIALS[idx];
            quote.textContent = `“${t.quote}”`;
            name.textContent = t.name;
            role.textContent = t.role;
            stars.innerHTML = Array.from({ length: t.rating }).map(() => icon("star")).join("");
            dotsWrap.querySelectorAll(".dot").forEach((d, i) => d.classList.toggle("active", i === idx));
            refreshIcons();
            slide.classList.remove("swap");
        }, 200);
    };

    $("#tPrev").addEventListener("click", () => show(idx - 1));
    $("#tNext").addEventListener("click", () => show(idx + 1));
    show(0);

    // auto
    let timer = setInterval(() => show(idx + 1), 6000);
    const card = $("#testimonialCard");
    card.addEventListener("mouseenter", () => clearInterval(timer));
    card.addEventListener("mouseleave", () => { timer = setInterval(() => show(idx + 1), 6000); });
}

/* ---------- Contact form ---------- */
function initContact() {
    const form = $("#contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = $("#fName").value.trim();
        const phone = $("#fPhone").value.trim();
        const email = $("#fEmail").value.trim();
        const req = $("#fReq").value;

        // Validation
        if (name.length < 2) {
            toast("Please enter your name", "error");
            return;
        }

        if (!/^[\d +\-()]{7,}$/.test(phone)) {
            toast("Please enter a valid phone number", "error");
            return;
        }

        // Construct email subject and body
        const subject = encodeURIComponent(`New Consultation Request from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nPhone: ${phone}\nEmail: ${email || "Not Provided"}\nRequirement: ${req}\n\nPlease contact me regarding my project.`
        );

        // Send to email ID
        window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
        toast("Opening your email client to send request…", "success");
        form.reset();
    });
}

/* ---------- Quick chat (WhatsApp CTA) ---------- */
function initQuickChat() {
    const wa = $("#waCta");
    if (!wa) return;

    // Set dynamic WhatsApp link from BRAND data
    wa.href = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hi Agrawal Brothers — I'd like a free consultation for my space.")}`;
    wa.target = "_blank";
    wa.rel = "noreferrer";
}
    /*
    // =========================================================================
    // [SOLUTION FOR COLLEGE REPORT - STEP 3]:
    // To fix this later for your report, restore the working WhatsApp link:
    // wa.href = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent("Hi Agrawal Brothers — I'd like a free consultation.")}`;
    // wa.target = "_blank";
    // =========================================================================
    */
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
    // mark candidates
    const candidates = $$(".section-head, .hero-copy, .service-card, .process-step, .portfolio-card, .about-media, .about-copy, .testimonial-card, .trust-bar, .contact-form, .contact-info, .hero-visual");
    candidates.forEach(el => el.classList.add("reveal"));

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

    candidates.forEach(el => io.observe(el));
}

/* ---------- Smooth scroll for hash links (older browsers / hash offset) ---------- */
function initSmoothScroll() {
    document.addEventListener("click", (e) => {
        const a = e.target.closest('a[href^="#"]');
        if (!a) return;
        const id = a.getAttribute("href").slice(1);
        if (!id) return;
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        const headerH = $("#header").offsetHeight + 12;
        window.scrollTo({ top: el.offsetTop - headerH, behavior: "smooth" });
    });
}

/* ---------- Footer year ---------- */
function initFooter() {
    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
}


/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    renderTrust();
    renderPortfolio();
    renderServices();
    renderProcess();
    renderPricing();
    initTestimonials();
    initContact();
    initQuickChat();
    initModalGlobal();
    initHero();
    initSmoothScroll();
    initFooter();
    initReveal();

    // Lucide icons — run after Lucide script loads
    if (window.lucide) refreshIcons();
    else window.addEventListener("load", refreshIcons);
});
