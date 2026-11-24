/*


DESKTOP CODE

mousemove listener: 

mouseleave listener

touchmove listener





*/










/*


MOBILE CODE


*/

// Project data with detailed information
const projects = [
    {
        id: 0,
        title: "Local Flower Shop",
        category: "Small Business",
        description: "Modern florist website with online ordering and delivery",
        fullDescription: "A beautiful, user-friendly website for a local flower shop featuring an elegant gallery of floral arrangements, easy online ordering with customization options, and delivery scheduling. The site includes information about special occasion packages for weddings, funerals, and events. The design captures elegance and warmth while making it simple for customers to browse and order flowers for any occasion.",
        image: "floral_shop.jpg",
        technologies: ["HTML5", "CSS3", "JavaScript", "Online Ordering", "Local SEO"],
        liveLink: "https://tlz124.github.io/Watsons-Flowers/",
        tiers: [
            {
                label: "Essential",
                price: "$1,000",
                description: "A clean, professional online presence for your flower shop — everything you need to get discovered and make a great first impression.",
                features: [
                    "Mobile Responsive Design",
                    "Photo Gallery",
                    "Contact Form",
                    "Business Hours, Location & Google Maps",
                    "Social Media Links"
                ],
                link: "https://tlz124.github.io/floral-shop-essential/"
            },
            {
                label: "Essential Plus",
                price: "$3,000",
                description: "Everything in Essential, plus expanded features to showcase your products and build customer trust.",
                features: [
                    "Everything in Essential",
                    "Product Catalog with Pricing",
                    "Delivery Area Section",
                    "Testimonials Section",
                    "Expanded Navigation"
                ],
                link: "https://tlz124.github.io/floral-shop-essential-plus/"
            },
            {
                label: "Custom",
                price: "$5,000+",
                description: "A fully custom build tailored to your exact vision — complex functionality, unique design, and priority support.",
                features: [
                    "Everything in Essential Plus",
                    "Complex Custom Functionality",
                    "Custom Quote Based on Scope",
                    "Priority Support",
                    "Extended Launch Support"
                ],
                link: "https://tlz124.github.io/floral-shop-custom/"
            }
        ]
    },
    {
        id: 1,
        title: "Mexican Restaurant",
        category: "Small Business",
        description: "Authentic Mexican restaurant with menu and reservation system",
        fullDescription: "A vibrant website for a Mexican restaurant featuring an interactive menu with high-quality food photography, online reservation system, and information about catering services. The design reflects the restaurant's authentic atmosphere with warm colors and engaging visuals. Includes hours of operation, location details, and special events calendar.",
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Reservation System", "Menu Display"],
        liveLink: "https://tlz124.github.io/restaurant/",
        tiers: [
            {
                label: "Essential",
                price: "$1,000",
                description: "A clean, professional online presence for your restaurant — everything you need to showcase your menu and get more diners through the door.",
                features: [
                    "Mobile Responsive Design",
                    "Menu Display with Photos",
                    "Contact Form & Reservations",
                    "Business Hours, Location & Google Maps",
                    "Social Media Links"
                ],
                link: "https://tlz124.github.io/restaurant-essential/"
            },
            {
                label: "Essential Plus",
                price: "$3,000",
                description: "Everything in Essential, plus expanded features to highlight your food and build a loyal customer base.",
                features: [
                    "Everything in Essential",
                    "Full Menu Catalog with Pricing",
                    "Online Reservation System",
                    "Customer Testimonials Section",
                    "Expanded Navigation & About Page"
                ],
                link: "https://tlz124.github.io/restaurant-essential-plus/"
            },
            {
                label: "Custom",
                price: "$5,000+",
                description: "A fully custom build tailored to your restaurant's unique identity — advanced features, custom design, and priority support.",
                features: [
                    "Everything in Essential Plus",
                    "Online Ordering Integration",
                    "Custom Quote Based on Scope",
                    "Priority Support",
                    "Extended Launch Support"
                ],
                link: "https://tlz124.github.io/restaurant-custom/"
            }
        ]
    },
    {
        id: 2,
        title: "Pet Grooming Salon",
        category: "Small Business",
        description: "Professional pet grooming services with appointment booking",
        fullDescription: "A comprehensive website for a pet grooming business featuring service descriptions, pricing information, and an easy-to-use appointment booking system. The site showcases grooming services for various pet types, includes customer testimonials, and provides care tips for pet owners. The friendly, approachable design appeals to pet lovers while maintaining professionalism.",
        image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Appointment Booking", "Service Catalog"],
        liveLink: "https://tlz124.github.io/pet-grooming/"
    },
    {
        id: 3,
        title: "Modern Dental Office",
        category: "Healthcare",
        description: "Contemporary dental practice with patient portal and services",
        fullDescription: "A professional website for a modern dental office featuring comprehensive service descriptions, dentist profiles, patient portal access, and online appointment scheduling. The site includes educational resources about dental health, insurance information, and virtual office tours. The clean, trustworthy design helps patients feel comfortable while emphasizing the practice's expertise and modern technology.",
        image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Patient Portal", "Appointment System"],
        liveLink: "https://tlz124.github.io/dental-office-website/"
    },
    {
        id: 4,
        title: "Fitness Center",
        category: "Small Business",
        description: "Modern fitness business with class schedules and membership options",
        fullDescription: "A dynamic website for a fitness business featuring class schedules, trainer profiles, membership pricing, and online sign-up capabilities. The site showcases fitness programs, includes success stories and testimonials, and provides information about facilities and equipment. The energetic design motivates visitors while making it easy to explore services and join.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Class Scheduling", "Membership Portal"],
        liveLink: "https://tlz124.github.io/fitness/"
    },
    {
        id: 5,
        title: "Architecture Firm",
        category: "Small Business",
        description: "Professional architecture business showcasing portfolio and services",
        fullDescription: "A sophisticated website for an architecture firm featuring a stunning portfolio gallery, detailed service descriptions, and project case studies. The site highlights the firm's design philosophy, team expertise, and past projects with high-quality imagery. The clean, modern design reflects architectural precision while making it easy for potential clients to explore work and request consultations.",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Portfolio Gallery", "Project Showcase"],
        liveLink: "https://tlz124.github.io/architecture-essential/"
    },
    {
        id: 6,
        title: "K-12 School Website",
        category: "Education",
        description: "Comprehensive school website for middle and high school students",
        fullDescription: "A modern, full-featured website designed for K-12 schools with a focus on middle and high school students. Features include student portals, parent access to grades and attendance, event calendars, staff directories, club and sports information, and news announcements. The responsive design works seamlessly on mobile devices for students and parents on the go.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Student Portal", "Event Calendar", "CMS"],
        liveLink: "https://tlz124.github.io/school/"
    },
    {
        id: 7,
        title: "Nonprofit Organization",
        category: "Education",
        description: "Versatile nonprofit website template for community organizations",
        fullDescription: "A flexible, professional website designed for nonprofit organizations. Features include mission statement display, program information, volunteer sign-up forms, donation integration, event calendars, and impact stories. The adaptable design can be customized for various causes and community organizations while maintaining a clean, trustworthy appearance that encourages engagement and support.",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Donation Forms", "Volunteer Management"],
        liveLink: "https://tlz124.github.io/nonprofit/"
    },
    {
        id: 8,
        title: "Orthodontist Practice",
        category: "Healthcare",
        description: "Modern orthodontist website with treatment information and appointment scheduling",
        fullDescription: "A clean, professional website designed for an orthodontist practice. Features include detailed treatment information, before-and-after galleries, appointment scheduling, patient resources, and an FAQ section. The modern design builds trust and makes it easy for patients to learn about orthodontic services and book consultations online.",
        image: "https://tlz124.github.io/orthodontist/istockphoto-1274268165-612x612.webp",
        technologies: ["HTML5", "CSS3", "JavaScript", "Appointment Scheduling", "Patient Portal"],
        liveLink: "https://tlz124.github.io/orthodontist/"
    },
    {
        id: 9,
        title: "Beauty Supply Store",
        category: "Small Business",
        description: "Modern beauty supply website with curated products and elegant design",
        fullDescription: "A sophisticated website for Lumière Beauty Supply featuring curated beauty essentials from top brands. Includes product showcases, shopping categories, bestseller highlights, and a clean, elegant design that emphasizes luxury and quality.",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Product Catalog", "E-commerce Ready"],
        liveLink: "https://tlz124.github.io/Beauty",
        tiers: [
            {
                label: "Essential",
                price: "$1,000",
                description: "A clean, elegant online presence for your beauty supply store — everything you need to showcase your brand and attract customers.",
                features: [
                    "Mobile Responsive Design",
                    "Featured Product Showcase",
                    "Contact Form",
                    "Business Hours, Location & Google Maps",
                    "Social Media Links"
                ],
                link: "https://tlz124.github.io/beauty-supply-essential/"
            },
            {
                label: "Essential Plus",
                price: "$3,000",
                description: "Everything in Essential, plus a full product catalog to display your inventory and drive more sales.",
                features: [
                    "Everything in Essential",
                    "Full Product Catalog with Pricing",
                    "Product Categories & Filtering",
                    "Customer Testimonials Section",
                    "Expanded Navigation & About Page"
                ],
                link: "https://tlz124.github.io/beauty-supply-essential-plus/"
            },
            {
                label: "Custom",
                price: "$5,000+",
                description: "A fully custom e-commerce build tailored to your store — advanced shopping features, custom design, and priority support.",
                features: [
                    "Everything in Essential Plus",
                    "Full E-commerce Shopping Cart",
                    "Custom Quote Based on Scope",
                    "Priority Support",
                    "Extended Launch Support"
                ],
                link: "https://tlz124.github.io/beauty-supply-custom/"
            }
        ]
    },
    {
        id: 10,
        title: "Contemporary Hair Salon",
        category: "Small Business",
        description: "Elegant hair salon website showcasing services and portfolio",
        fullDescription: "A luxurious website for Atelier Noir, a contemporary hair salon. Features include service listings with pricing, visual portfolio gallery, stylist information, appointment booking system, and sophisticated dark theme design that reflects the salon's modern aesthetic.",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Appointment Booking", "Portfolio Gallery"],
        liveLink: "https://tlz124.github.io/salon"
    },
    {
        id: 11,
        title: "Corporate Law Firm",
        category: "Professional Services",
        description: "Professional law firm website showcasing expertise and legal services",
        fullDescription: "A sophisticated website for Sterling & Associates, a corporate law firm specializing in mergers & acquisitions, securities law, and business litigation. Features include practice area details, attorney profiles, case results, consultation booking, and a professional design that conveys trust and expertise.",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "Consultation Booking", "Attorney Profiles"],
        liveLink: "https://tlz124.github.io/legal"
    }
];

// ===== Dot Matrix Shimmer (shared by the home page Contact Us section and the About Us page) =====
// A grid of purple dots, brightest near the content and fading outward, with a
// soft diagonal light sweep (shimmer) that passes across every few seconds.
// Desktop only (769px and wider): phones never run it, and the canvas is
// hidden there by CSS. Dots near the mouse also light up; that hover glow is
// added on top and never changes the shimmer's timing.
// Nothing is drawn in the "holes" (around text, boxes and the form).
// It pauses when off screen or when the tab is hidden, and shows a still
// frame for visitors who ask their computer for less motion.
//   layout(rel, W, H, mobile) must return { holes: [...rects], glow: (x, y) => 0..1 }
//   rel(el, pad) turns an element into a rect relative to the section.
function flechaDotSweep(section, canvas, layout) {
    if (!section || !canvas) return;
    const ctx = canvas.getContext('2d');
    const desktop = window.matchMedia('(min-width: 769px)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const canHover = window.matchMedia('(min-width: 769px) and (hover: hover) and (pointer: fine)');
    const GAP = 22;          // space between dots (px)
    const BASE = 0.22;       // brightness of the outer dots
    const CENTER = 0.78;     // extra brightness near the content
    const SWEEP = 0.7;       // brightness added by the shimmer
    const PERIOD = 7;        // seconds per shimmer pass
    const HOVER_R = 110;     // how far (px) from the mouse dots light up (desktop)
    const HOVER = 0.85;      // brightness added by the hover glow (desktop)
    let W = 0, H = 0, holes = [], glow = () => 0;
    let t = 0, last = 0, running = false, onScreen = false;
    const mouse = { x: 0, y: 0, on: false };
    let hov = 0;             // hover glow strength, eases in and out

    function measure() {
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        const s = section.getBoundingClientRect();
        W = s.width; H = s.height;
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const rel = (el, pad) => {
            const r = el.getBoundingClientRect();
            return { x: r.left - s.left - pad, y: r.top - s.top - pad, w: r.width + pad * 2, h: r.height + pad * 2 };
        };
        const l = layout(rel, W, H, window.innerWidth <= 768);
        holes = l.holes;
        glow = l.glow;
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, W, H);
        holes.forEach(h => ctx.rect(h.x, h.y, h.w, h.h));
        ctx.clip('evenodd');
        const pos = ((t % PERIOD) / PERIOD) * (W + H + 600) - 300;
        for (let y = GAP / 2; y < H; y += GAP) {
            for (let x = GAP / 2; x < W; x += GAP) {
                const k = glow(x, y);
                const sw = Math.max(0, 1 - Math.abs(x + y - pos) / 160);
                let a = BASE + CENTER * k * k + SWEEP * sw * sw * (0.35 + 0.65 * k);
                let r = 1.8 + 1.4 * k + 0.9 * sw;
                if (hov > 0.01) {
                    const h = Math.max(0, 1 - Math.hypot(x - mouse.x, y - mouse.y) / HOVER_R);
                    a += HOVER * hov * h * h;
                    r += 1.6 * hov * h;
                }
                ctx.fillStyle = 'rgba(212, 165, 255, ' + Math.min(1, a).toFixed(3) + ')';
                ctx.fillRect(x - r / 2, y - r / 2, r, r);
            }
        }
        ctx.restore();
    }

    function loop(now) {
        if (!running) return;
        const dt = Math.max(0, Math.min(0.05, (now - last) / 1000));
        last = now;
        t += dt;
        hov += ((mouse.on ? 1 : 0) - hov) * Math.min(1, dt * 8);
        draw();
        requestAnimationFrame(loop);
    }

    function update() {
        if (!desktop.matches) { running = false; return; }
        const go = onScreen && !document.hidden && !reduceMotion.matches;
        if (go && !running) {
            running = true;
            last = performance.now();
            requestAnimationFrame(loop);
        } else if (!go) {
            running = false;
            draw(); // still frame
        }
    }

    function refresh() {
        if (!desktop.matches) {
            // phones: stop and free the canvas memory
            running = false;
            canvas.width = 0;
            canvas.height = 0;
            return;
        }
        measure();
        draw();
        update();
    }

    // Desktop hover glow (a mouse only; phones and tablets skip this)
    section.addEventListener('mousemove', (e) => {
        if (!canHover.matches) return;
        const s = section.getBoundingClientRect();
        mouse.x = e.clientX - s.left;
        mouse.y = e.clientY - s.top;
        mouse.on = true;
        if (!running) { hov = 1; draw(); }
    });
    section.addEventListener('mouseleave', () => {
        mouse.on = false;
        if (!running) { hov = 0; draw(); }
    });

    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => {
            onScreen = entries[0].isIntersecting;
            update();
        }).observe(section);
    } else {
        onScreen = true;
    }
    document.addEventListener('visibilitychange', update);
    let timer;
    window.addEventListener('resize', () => {
        clearTimeout(timer);
        timer = setTimeout(refresh, 200);
    });
    window.addEventListener('load', refresh);
    desktop.addEventListener('change', refresh);
    refresh();
}

// ===== Cookie Consent Functionality =====
const cookieConsent = document.getElementById('cookieConsent');
const acceptAllBtn = document.getElementById('acceptAll');
const rejectAllBtn = document.getElementById('rejectAll');
const managePreferencesBtn = document.getElementById('managePreferences');

function checkCookieConsent() {
    const cookieChoice = localStorage.getItem('cookieConsent');
    if (!cookieChoice) {
        setTimeout(() => {
            cookieConsent.classList.remove('hidden');
        }, 1000);
    }
}

if (acceptAllBtn) if (acceptAllBtn) acceptAllBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieConsent.classList.add('hidden');
});

if (rejectAllBtn) rejectAllBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    cookieConsent.classList.add('hidden');
});

if (managePreferencesBtn) managePreferencesBtn.addEventListener('click', () => {
    alert('Cookie preferences: You can customize your cookie settings here. For this demo, we only use essential cookies for site functionality.');
    localStorage.setItem('cookieConsent', 'managed');
    cookieConsent.classList.add('hidden');
});

checkCookieConsent();

// ===== Hamburger Menu Functionality =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenuBtn = document.getElementById('closeMenu');
const menuLinks = document.querySelectorAll('.menu-link');

hamburgerBtn.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (navigator.vibrate) navigator.vibrate(30);
});

closeMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

const menuSublinks = document.querySelectorAll('.menu-sublink');
menuSublinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===== Home Submenu Toggle =====



const homeSubmenuToggle = document.getElementById('homeSubmenuToggle');
const homeSubmenu = document.querySelector('.menu-submenu');

if (homeSubmenuToggle && homeSubmenu) {
    homeSubmenuToggle.addEventListener('click', () => {
        const isCollapsed = homeSubmenu.classList.contains('menu-submenu--collapsed');
        homeSubmenu.classList.toggle('menu-submenu--collapsed', !isCollapsed);
        homeSubmenuToggle.classList.toggle('open', isCollapsed);
        if (navigator.vibrate) navigator.vibrate(30);
    });
}

// ===== Project Modal Functionality =====
const projectModal = document.getElementById('projectModal');
const viewDetailsButtons = document.querySelectorAll('.view-details');

viewDetailsButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectId = parseInt(button.getAttribute('data-project'));
        const project = projects[projectId];

        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalCategory').textContent = project.category;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalFullDescription').textContent = project.fullDescription;

        const techContainer = document.getElementById('modalTechnologies');
        techContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            const techTag = document.createElement('span');
            techTag.className = 'tech-tag';
            techTag.textContent = tech;
            techContainer.appendChild(techTag);
        });

        const liveLink = document.getElementById('modalLiveLink');
        if (liveLink) {
            liveLink.href = project.liveLink;
            liveLink.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.liveLink, '_blank', 'noopener,noreferrer');
                return false;
            };
        }

        projectModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// ===== Tier Card Click Handlers =====
const tierModal = document.getElementById('tierModal');

document.querySelectorAll('.tier-card').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const projectId = parseInt(card.getAttribute('data-project'));
        const tierIndex = parseInt(card.getAttribute('data-tier'));
        const project = projects[projectId];
        const tier = project.tiers[tierIndex];
        if (!tier) return;

        // Apply tier-specific styling
        const tierContent = document.getElementById('tierModalContent');
        tierContent.className = 'tier-modal-content tier-modal-content--' + (tierIndex + 1);

        // Populate modal   
        document.getElementById('tierModalName').textContent = tier.label;
        document.getElementById('tierModalDiamonds').textContent = '◆'.repeat(tierIndex + 1);
        document.getElementById('tierModalPrice').textContent = tier.price;
        document.getElementById('tierModalDescription').textContent = tier.description;

        const featuresList = document.getElementById('tierModalFeatures');
        featuresList.innerHTML = '';
        tier.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        // Wire up demo button — it's a <button> so no anchor/scroll conflicts
        const demoBtn = document.getElementById('tierModalDemoLink');
        const newDemoBtn = demoBtn.cloneNode(true);
        demoBtn.parentNode.replaceChild(newDemoBtn, demoBtn);
        newDemoBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            window.open(tier.link, '_blank', 'noopener,noreferrer');
        });

        tierModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close tier modal
document.getElementById('closeTierModal').addEventListener('click', () => {
    tierModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// ===== Legal Modals =====
const privacyModal = document.getElementById('privacyModal');
const accessibilityModal = document.getElementById('accessibilityModal');
const privacyLink = document.getElementById('privacyLink');
const accessibilityLink = document.getElementById('accessibilityLink');

privacyLink.addEventListener('click', (e) => {
    e.preventDefault();
    privacyModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

accessibilityLink.addEventListener('click', (e) => {
    e.preventDefault();
    accessibilityModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close modal buttons (X)
const closeModalButtons = document.querySelectorAll('.close-modal');
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        if (modalId) {
            document.getElementById(modalId).style.display = 'none';
        } else {
            projectModal.style.display = 'none';
            tierModal.style.display = 'none';
        }
        document.body.style.overflow = 'auto';
    });
});

// Close modals by clicking outside
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === tierModal) {
        tierModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === privacyModal) {
        privacyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === accessibilityModal) {
        accessibilityModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        [projectModal, tierModal, privacyModal, accessibilityModal].forEach(modal => {
            if (modal && modal.style.display === 'block') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        if (menuOverlay.classList.contains('active')) {
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// ===== Smooth Scroll (navigation links only) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip tier card buttons — they have their own handler
        if (this.classList.contains('tier-card')) return;

        // Allow footer modal links to work normally
        if (href === '#privacyModal' || href === '#accessibilityModal') return;

        // Prevent bare # from scrolling to top
        if (href === '#') {
            e.preventDefault();
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const headerOffset = 80;
            const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
    });
});

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
const navbar = document.querySelector('header');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    navbar.style.boxShadow = currentScroll <= 0
        ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        : '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    lastScroll = currentScroll;
});

// ===== Intersection Observer for Fade-in Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

document.querySelectorAll('.testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// ===== Portfolio Filter =====
const filterButtons = document.querySelectorAll('.filter-btn');
const allProjectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        allProjectCards.forEach(card => {
            const category = card.querySelector('.project-category').textContent;
            if (filterValue === 'all' || category === filterValue) {
                card.classList.remove('hidden');
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = 'fadeInUp 0.6s ease forwards';
                }, 10);
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ===== Hero background effects: shared helpers =====
// The hero has three background effects (the node network, the flowing
// lines and the warp stars) and a Nodes / Lines / Warp switch. Each effect
// registers itself here so the switch can turn it on and off.
const flechaHeroFx = {};

// Mouse or finger position inside the hero, shared by both effects.
// Desktop: follows the mouse. Phones: follows a finger while it touches the
// hero (scrolling still works normally; the page is never held in place).
// onMove(x, y) gets canvas-relative coordinates, or (null, null) when released.
function flechaHeroPointer(hero, canvas, onMove) {
    let lastTouch = 0;
    function at(clientX, clientY) {
        const r = canvas.getBoundingClientRect();
        onMove(clientX - r.left, clientY - r.top);
    }
    hero.addEventListener('mousemove', (e) => {
        if (Date.now() - lastTouch < 800) return;   // ignore the fake mouse events phones send after a tap
        at(e.clientX, e.clientY);
    });
    hero.addEventListener('mouseleave', () => onMove(null, null));
    function touch(e) {
        lastTouch = Date.now();
        const t = e.touches[0];
        if (t) at(t.clientX, t.clientY);
    }
    function release(e) {
        lastTouch = Date.now();
        if (!e.touches.length) onMove(null, null);
    }
    hero.addEventListener('touchstart', touch, { passive: true });
    hero.addEventListener('touchmove', touch, { passive: true });
    hero.addEventListener('touchend', release, { passive: true });
    hero.addEventListener('touchcancel', release, { passive: true });
}

// ===== Hero Canvas Node Network Effect (desktop and mobile, when "Nodes" is selected) =====
// Floating nodes joined by lines. Nodes move away from the mouse (desktop) or
// from a finger on the screen (phones). Only runs while "Nodes" is selected
// and the hero is on screen.
(function() {
    const heroCanvas = document.getElementById('heroCanvas');
    const hero = heroCanvas ? heroCanvas.closest('.hero') : null;   // home page hero only
    if (!heroCanvas || !hero) return;

    const ctx = heroCanvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 150 };
    let rafId = null;
    let hasInteracted = false; // tracks whether the user has already touched the nodes
    let active = false, running = false, onScreen = true;
    let sizeW = 0, sizeH = 0;

    function resizeCanvas(force) {
        const w = heroCanvas.offsetWidth, h = heroCanvas.offsetHeight;
        if (!w || !h) return;
        if (!force && w === sizeW && h === sizeH) return;   // phones fire "resize" when the address bar slides; skip those
        sizeW = w; sizeH = h;
        heroCanvas.width = w;
        heroCanvas.height = h;
        ctx.clearRect(0, 0, w, h);
        initParticles();
    }

    function initParticles() {
        const isMobile = heroCanvas.width <= 768;
        const isPortrait = heroCanvas.width < heroCanvas.height;
        let particleCount = isMobile ? (isPortrait ? 30 : 40) : 80;
        const connectionDistance = isMobile ? 100 : 150;
        particles = Array.from({ length: particleCount }, () => new Particle(connectionDistance));

        // Pick the particle nearest the canvas center to be the subtle
        // "breathing" node — a passive visual cue that nodes are interactive.
        const cx = heroCanvas.width / 2;
        const cy = heroCanvas.height / 2;
        let closest = null;
        let closestDist = Infinity;
        particles.forEach(p => {
            const d = Math.hypot(p.x - cx, p.y - cy);
            if (d < closestDist) { closestDist = d; closest = p; }
        });
        if (closest) closest.isHighlighted = true;
    }

    class Particle {
        constructor(connectionDistance) {
            this.connectionDistance = connectionDistance;
            this.x = Math.random() * heroCanvas.width;
            this.y = Math.random() * heroCanvas.height;
            const speedMultiplier = window.innerWidth <= 768 ? 0.3 : 0.5;
            this.vx = (Math.random() - 0.5) * speedMultiplier;
            this.vy = (Math.random() - 0.5) * speedMultiplier;
            this.radius = window.innerWidth <= 768 ? 2.5 : 2;
            this.baseRadius = this.radius;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > heroCanvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > heroCanvas.height) this.vy *= -1;
            this.x = Math.max(0, Math.min(heroCanvas.width, this.x));
            this.y = Math.max(0, Math.min(heroCanvas.height, this.y));

            if (mouse.x !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.x -= Math.cos(angle) * force * 2;
                    this.y -= Math.sin(angle) * force * 2;
                    this.radius = this.baseRadius * (1 + force * 0.5);
                } else {
                    this.radius = this.baseRadius;
                }
            } else {
                this.radius = this.baseRadius;
            }
        }

        draw() {
            let drawRadius = this.radius;
            if (this.isHighlighted) {
                // Slow breathing pulse — subtle, continuous invitation to interact.
                const pulse = Math.sin(Date.now() / 900) * 0.4 + 1; // ranges ~0.6x–1.4x
                drawRadius = this.radius * pulse;
                ctx.shadowBlur = 16;
                ctx.shadowColor = 'rgba(180, 140, 255, 0.9)';
                ctx.fillStyle = 'rgba(180, 140, 255, 0.95)';
            } else {
                ctx.shadowBlur = 10;
                ctx.shadowColor = 'rgba(102, 126, 234, 0.8)';
                ctx.fillStyle = 'rgba(102, 126, 234, 0.9)';
            }
            ctx.beginPath();
            ctx.arc(this.x, this.y, drawRadius, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        connect(otherParticle) {
            const dx = otherParticle.x - this.x;
            const dy = otherParticle.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < this.connectionDistance) {
                const opacity = (1 - distance / this.connectionDistance) * 0.5;
                const gradient = ctx.createLinearGradient(this.x, this.y, otherParticle.x, otherParticle.y);
                gradient.addColorStop(0, `rgba(102, 126, 234, ${opacity})`);
                gradient.addColorStop(0.5, `rgba(118, 75, 162, ${opacity})`);
                gradient.addColorStop(1, `rgba(102, 126, 234, ${opacity})`);
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.stroke();
            }
        }
    }

    // Mouse (desktop) or finger (phones): nodes move away from it
    flechaHeroPointer(hero, heroCanvas, (x, y) => {
        if (x !== null) hasInteracted = true;
        mouse.x = x;
        mouse.y = y;
    });

    // ===== Idle auto-demo scatter =====
    // If the user hasn't touched a node within a few seconds of load, gently
    // scatter the cluster near the center on its own — a one-time passive
    // demo, no text or instructions needed. Runs once per browser session,
    // only on phones, and only while "Nodes" is selected.
    const DEMO_DELAY = 3500;    // ms after load before the demo fires
    const DEMO_DURATION = 500;  // ms the scatter holds before settling back
    if (window.innerWidth <= 768 && !sessionStorage.getItem('flechaHeroDemoPlayed')) {
        setTimeout(() => {
            if (hasInteracted || !active) return;
            sessionStorage.setItem('flechaHeroDemoPlayed', '1');
            mouse.x = heroCanvas.width / 2;
            mouse.y = heroCanvas.height / 2;
            setTimeout(() => {
                if (hasInteracted) return;
                mouse.x = null;
                mouse.y = null;
            }, DEMO_DURATION);
        }, DEMO_DELAY);
    }

    let lastFrameTime = 0;
    const targetFPS = window.innerWidth <= 768 ? 30 : 60;
    const frameInterval = 1000 / targetFPS;

    function animateParticles(currentTime) {
        if (!running) return;
        rafId = requestAnimationFrame(animateParticles);
        const deltaTime = currentTime - lastFrameTime;
        if (deltaTime < frameInterval) return;
        lastFrameTime = currentTime - (deltaTime % frameInterval);

        ctx.fillStyle = 'rgba(26, 35, 62, 0.05)';
        ctx.fillRect(0, 0, heroCanvas.width, heroCanvas.height);

        particles.forEach((particle, i) => {
            particle.update();
            particle.draw();
            for (let j = i + 1; j < particles.length; j++) {
                particle.connect(particles[j]);
            }
        });
    }

    // runs only while "Nodes" is selected, the hero is on screen and the tab is showing
    function update() {
        const go = active && onScreen && !document.hidden;
        if (go && !running) {
            running = true;
            lastFrameTime = 0;
            rafId = requestAnimationFrame(animateParticles);
        } else if (!go && running) {
            running = false;
            cancelAnimationFrame(rafId);
        }
    }

    flechaHeroFx.nodes = {
        setActive(on) {
            active = on;
            if (on) resizeCanvas(true);
            else { mouse.x = null; mouse.y = null; }
            update();
        }
    };

    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => {
            onScreen = entries[0].isIntersecting;
            update();
        }).observe(hero);
    }
    document.addEventListener('visibilitychange', update);

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => { if (active) resizeCanvas(false); }, 250);
    });
})();



// ===== Process Step Collapsible Toggle =====
document.querySelectorAll('.process-step:not(.process-step--questionnaire) .step-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const step = btn.closest('.process-step');
        const body = step.querySelector('.step-body');
        const isOpen = body.classList.contains('open');
        body.classList.toggle('open', !isOpen);
        btn.classList.toggle('open', !isOpen);
    });
});

// ===== Date Input =====
const dateInput = document.getElementById('preferred_date');
dateInput.addEventListener('focus', function() { this.type = 'date'; });
dateInput.addEventListener('blur', function() { if (!this.value) this.type = 'text'; });

// ===== Back to Top Button =====
(function() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (navigator.vibrate) navigator.vibrate(30);
    });
})();

// ===== E-Commerce / Non E-Commerce Pricing Toggle =====
const ecomBtn = document.getElementById('ecomBtn');
const nonEcomBtn = document.getElementById('nonEcomBtn');
const ecomPricing = document.getElementById('ecomPricing');
const nonEcomPricing = document.getElementById('nonEcomPricing');

if (ecomBtn && nonEcomBtn) {
    ecomBtn.addEventListener('click', () => {
        ecomBtn.classList.add('active');
        nonEcomBtn.classList.remove('active');
        ecomPricing.style.display = '';
        nonEcomPricing.style.display = 'none';
    });

    nonEcomBtn.addEventListener('click', () => {
        nonEcomBtn.classList.add('active');
        ecomBtn.classList.remove('active');
        nonEcomPricing.style.display = '';
        ecomPricing.style.display = 'none';
    });
}

// ===== Pricing: Pay Once / Monthly switch (desktop and mobile) =====
// "Monthly" shows the Website-as-a-Service cards instead of the one-time
// cards, under both Non E-Commerce and E-Commerce. The choice stays when the
// visitor switches between the two. Both have three monthly cards
// (Essential, Plus and Custom).
(function() {
    const wrap = document.getElementById('billingWrap');
    const onceBtn = document.getElementById('payOnceBtn');
    const monthlyBtn = document.getElementById('monthlyBtn');
    const monthlyGrid = document.getElementById('nonEcomMonthly');
    if (!wrap || !onceBtn || !monthlyBtn || !monthlyGrid) return;
    const ecomMonthlyGrid = document.getElementById('ecomMonthly');
    const onceNote = document.getElementById('payOnceNote');
    const monthlyNote = document.getElementById('monthlyNote');
    let monthly = false;
    let ecom = false;

    const show = (el, on) => { if (el) el.style.display = on ? '' : 'none'; };

    function apply() {
        show(nonEcomPricing, !ecom && !monthly);
        show(monthlyGrid, !ecom && monthly);
        show(ecomPricing, ecom && !monthly);
        show(ecomMonthlyGrid, ecom && monthly);
        show(onceNote, !monthly);
        show(monthlyNote, monthly);
        onceBtn.classList.toggle('active', !monthly);
        monthlyBtn.classList.toggle('active', monthly);
        onceBtn.setAttribute('aria-pressed', String(!monthly));
        monthlyBtn.setAttribute('aria-pressed', String(monthly));
    }

    onceBtn.addEventListener('click', () => { monthly = false; apply(); });
    monthlyBtn.addEventListener('click', () => { monthly = true; apply(); });
    if (ecomBtn) ecomBtn.addEventListener('click', () => { ecom = true; apply(); });
    if (nonEcomBtn) nonEcomBtn.addEventListener('click', () => { ecom = false; apply(); });
    apply();
})();

// ===== Nested Pricing Feature Toggles =====
document.querySelectorAll('.pricing-feature-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const sub = btn.closest('.pricing-feature-expandable').querySelector('.pricing-feature-sub');
        const isOpen = sub.classList.contains('open');
        sub.classList.toggle('open', !isOpen);
        btn.classList.toggle('open', !isOpen);
    });
});

// ===== Hero "Flowing Lines" Background (desktop and mobile, when "Lines" is selected) =====
// Thin purple and blue lines ripple across the hero and bend around the mouse
// (desktop) or a finger on the screen (phones). Only runs while "Lines" is
// selected and the hero is on screen; shows a still frame for visitors who
// ask their computer for less motion.
(function() {
    const canvas = document.getElementById('heroWaves');
    const hero = document.getElementById('home');
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const LINES = 22;          // how many lines
    const mouse = { x: null, y: null };
    let w = 0;
    let h = 0;
    let bend = 170;            // how far (px) around the mouse/finger the lines bend
    let active = false;
    let running = false;
    let onScreen = true;

    function resize(force) {
        const nw = hero.offsetWidth, nh = hero.offsetHeight;
        if (!force && nw === w && nh === h) return;   // phones fire "resize" when the address bar slides; skip those
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        w = nw;
        h = nh;
        bend = Math.min(170, w * 0.35);
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(time) {
        const t = time / 1000;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, w, h);

        for (let i = 0; i < LINES; i++) {
            const k = i / (LINES - 1);
            const baseY = h * (0.18 + 0.64 * k);
            const strength = Math.sin(k * Math.PI); // middle lines are brightest

            const g = ctx.createLinearGradient(0, 0, w, 0);
            g.addColorStop(0, 'rgba(102, 126, 234, 0)');
            g.addColorStop(0.3, 'rgba(102, 126, 234, ' + (0.35 + 0.4 * strength) + ')');
            g.addColorStop(0.7, 'rgba(212, 165, 255, ' + (0.4 + 0.45 * strength) + ')');
            g.addColorStop(1, 'rgba(212, 165, 255, 0)');
            ctx.strokeStyle = g;
            ctx.lineWidth = 1.2;

            ctx.beginPath();
            for (let x = 0; x <= w; x += 8) {
                const nx = x / w;
                let y = baseY
                    + Math.sin(nx * 5 + t * 0.8 + k * 2.2) * h * 0.06
                    + Math.sin(nx * 11 - t * 0.5 + k * 5) * h * 0.018;
                if (mouse.x !== null) {
                    const dx = x - mouse.x;
                    const dy = y - mouse.y;
                    const d = Math.hypot(dx, dy);
                    if (d < bend) y += (dy / (d || 1)) * (bend - d) * 0.35;
                }
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
    }

    function loop(time) {
        if (!running) return;
        draw(time);
        requestAnimationFrame(loop);
    }

    function update() {
        if (!active) { running = false; return; }
        if (onScreen && !document.hidden && !reduceMotion.matches) {
            if (!running) {
                running = true;
                requestAnimationFrame(loop);
            }
        } else {
            running = false;
            if (reduceMotion.matches) draw(0); // still frame
        }
    }

    // Mouse (desktop) or finger (phones): the lines bend around it
    flechaHeroPointer(hero, canvas, (x, y) => {
        mouse.x = x;
        mouse.y = y;
        if (active && !running && reduceMotion.matches) draw(0);
    });

    flechaHeroFx.lines = {
        setActive(on) {
            active = on;
            if (on) { resize(true); draw(performance.now()); }
            else { mouse.x = null; mouse.y = null; }
            update();
        }
    };

    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => {
            onScreen = entries[0].isIntersecting;
            update();
        }).observe(hero);
    }
    document.addEventListener('visibilitychange', update);

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (active) {
                resize(false);
                draw(performance.now());
            }
        }, 200);
    });
})();

// ===== Hero "Warp" Background (desktop and mobile, when "Warp" is selected) =====
// Purple and blue stars stream toward the viewer, like a jump to light speed.
// The mouse (desktop) or a finger on the screen (phones) steers the direction.
// Phones draw about half as many stars. Only runs while "Warp" is selected
// and the hero is on screen; shows a still frame for visitors who ask their
// computer for less motion. Clears fully every frame, so it never leaves trails.
(function() {
    const canvas = document.getElementById('heroWarp');
    const hero = document.getElementById('home');
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const SPEED = 0.006;       // how fast the stars fly toward you
    const BLUE = [102, 126, 234], PURPLE = [212, 165, 255];
    let w = 0, h = 0, stars = [];
    let cx = 0, cy = 0;        // where the stars stream out from (eases toward the pointer)
    const pointer = { x: null, y: null };
    let active = false, running = false, onScreen = true, last = 0;

    function newStar(anyDepth) {
        return { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2, z: anyDepth ? Math.random() : 1, k: Math.random() };
    }

    function resize(force) {
        const nw = hero.offsetWidth, nh = hero.offsetHeight;
        if (!nw || !nh) return;
        if (!force && nw === w && nh === h) return;   // phones fire "resize" when the address bar slides; skip those
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        w = nw; h = nh;
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = w <= 768 ? 350 : 700;
        stars = Array.from({ length: count }, () => newStar(true));
        cx = w / 2; cy = h / 2;
    }

    function draw(step) {
        const tx = pointer.x !== null ? pointer.x : w / 2;
        const ty = pointer.y !== null ? pointer.y : h / 2;
        cx += (tx - cx) * Math.min(1, 0.05 * step);
        cy += (ty - cy) * Math.min(1, 0.05 * step);
        ctx.clearRect(0, 0, w, h);
        const scale = Math.max(w, h) * 0.15;
        for (let i = 0; i < stars.length; i++) {
            const s = stars[i];
            const pz = s.z;
            s.z -= SPEED * step;
            if (s.z <= 0.02) { stars[i] = newStar(false); continue; }
            const x1 = cx + s.x / pz * scale, y1 = cy + s.y / pz * scale;
            const x2 = cx + s.x / s.z * scale, y2 = cy + s.y / s.z * scale;
            if (x2 < -50 || x2 > w + 50 || y2 < -50 || y2 > h + 50) { stars[i] = newStar(false); continue; }
            const c = BLUE.map((v, j) => Math.round(v + (PURPLE[j] - v) * s.k));
            ctx.strokeStyle = 'rgba(' + c[0] + ', ' + c[1] + ', ' + c[2] + ', ' + Math.min(1, (1 - s.z) * 1.2).toFixed(3) + ')';
            ctx.lineWidth = 0.6 + (1 - s.z) * 1.8;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
    }

    // a still picture: let the stars spread out first so it isn't empty
    function stillFrame() {
        for (let i = 0; i < 40; i++) draw(1);
    }

    function loop(now) {
        if (!running) return;
        const step = Math.min(3, Math.max(0, (now - last) / (1000 / 60)));   // 1 = one frame at 60fps
        last = now;
        draw(step);
        requestAnimationFrame(loop);
    }

    function update() {
        if (!active) { running = false; return; }
        if (onScreen && !document.hidden && !reduceMotion.matches) {
            if (!running) {
                running = true;
                last = performance.now();
                requestAnimationFrame(loop);
            }
        } else {
            running = false;
        }
    }

    // Mouse (desktop) or finger (phones): steers where the stars come from
    flechaHeroPointer(hero, canvas, (x, y) => {
        pointer.x = x;
        pointer.y = y;
        if (active && !running && reduceMotion.matches) { cx = x !== null ? x : w / 2; cy = y !== null ? y : h / 2; draw(0); }
    });

    flechaHeroFx.warp = {
        setActive(on) {
            active = on;
            if (on) { resize(true); stillFrame(); }
            else { pointer.x = null; pointer.y = null; }
            update();
        }
    };

    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => {
            onScreen = entries[0].isIntersecting;
            update();
        }).observe(hero);
    }
    document.addEventListener('visibilitychange', update);

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (active) {
                const before = w;
                resize(false);
                if (w !== before && !running) stillFrame();
            }
        }, 200);
    });
})();

// ===== Hero "Nodes | Lines | Warp" Switch (desktop and mobile) =====
// Lets visitors pick the hero background. Desktop starts on Lines and phones
// start on Nodes; once a visitor picks one, it is remembered on that browser.
(function() {
    const hero = document.getElementById('home');
    const sw = hero ? hero.querySelector('.hero-fx-switch') : null;
    if (!hero || !sw) return;
    const desktop = window.matchMedia('(min-width: 769px)');
    const buttons = sw.querySelectorAll('.hero-fx-btn');
    let saved = null;
    try { saved = localStorage.getItem('flechaHeroFx'); } catch (e) { /* storage blocked: use the default */ }

    function current() {
        if (saved === 'nodes' || saved === 'lines' || saved === 'warp') return saved;
        return desktop.matches ? 'lines' : 'nodes';
    }

    function apply() {
        const fx = current();
        hero.dataset.fx = fx;   // CSS shows the matching canvas
        buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.fx === fx)));
        if (flechaHeroFx.nodes) flechaHeroFx.nodes.setActive(fx === 'nodes');
        if (flechaHeroFx.lines) flechaHeroFx.lines.setActive(fx === 'lines');
        if (flechaHeroFx.warp) flechaHeroFx.warp.setActive(fx === 'warp');
    }

    buttons.forEach(b => b.addEventListener('click', () => {
        saved = b.dataset.fx;
        try { localStorage.setItem('flechaHeroFx', saved); } catch (e) { /* storage blocked: choice lasts this visit only */ }
        apply();
    }));
    desktop.addEventListener('change', apply);   // the default follows the screen size until the visitor picks one
    apply();
})();

// ===== Plus-Sign Grid (desktop only, 769px and wider) =====
// Shared by the "Welcome to Flecha Web Design" intro and "Before Your
// Consultation". A neat grid of tiny + markers fills the space around the
// content (never behind it). About 1 in 8 gently twinkle, and the ones near the
// mouse brighten and turn. Both sections line their markers up to the same
// page-wide grid, so they read as one continuous pattern.
// Phones never run this (the canvas is also hidden there by CSS). Pauses when
// off screen or when the tab is hidden; visitors who ask for less motion get a
// still grid that still reacts to the mouse.
//   getHoles(s) returns the areas to keep clear, as rects relative to the section.
function flechaPlusGrid(section, canvas, getHoles) {
    if (!section || !canvas) return;
    const ctx = canvas.getContext('2d');
    const desktop = window.matchMedia('(min-width: 769px)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const COLOR = '212, 165, 255';
    const GRID = 34;       // space between markers (px)
    const CLEAR = 20;      // empty space kept around the content (px)
    const NEAR = 120;      // how close (px) the mouse must be to light a marker
    let W = 0, H = 0, marks = [], t = 0, last = 0, running = false, onScreen = false;
    const mouse = { x: -9999, y: -9999 };

    function build() {
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        const s = section.getBoundingClientRect();
        W = s.width; H = s.height;
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const holes = getHoles(s).map(r => ({ l: r.x - CLEAR, t: r.y - CLEAR, r: r.x + r.w + CLEAR, b: r.y + r.h + CLEAR }));
        // start the rows on the page-wide grid so neighbouring sections line up
        const pageTop = s.top + window.scrollY;
        const y0 = ((GRID / 2 - pageTop) % GRID + GRID) % GRID;
        marks = [];
        for (let y = y0; y < H; y += GRID) {
            for (let x = GRID / 2; x < W; x += GRID) {
                if (holes.some(h => x > h.l && x < h.r && y > h.t && y < h.b)) continue;   // keep content clear
                marks.push({ x: x, y: y, twinkle: Math.random() < 0.12, phase: Math.random() * 10 });
            }
        }
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        ctx.lineWidth = 1.2;
        marks.forEach(m => {
            const near = Math.max(0, 1 - Math.hypot(m.x - mouse.x, m.y - mouse.y) / NEAR);
            const tw = m.twinkle ? 0.5 + 0.5 * Math.sin(t * 2 + m.phase) : 0;
            const a = Math.min(1, 0.16 + 0.5 * tw + 0.75 * near);
            const size = 3.5 + 2.5 * near;
            ctx.save();
            ctx.translate(m.x, m.y);
            ctx.rotate(near * Math.PI / 4);
            ctx.strokeStyle = 'rgba(' + COLOR + ', ' + a.toFixed(3) + ')';
            ctx.beginPath();
            ctx.moveTo(-size, 0); ctx.lineTo(size, 0);
            ctx.moveTo(0, -size); ctx.lineTo(0, size);
            ctx.stroke();
            ctx.restore();
        });
    }

    function loop(now) {
        if (!running) return;
        t += Math.max(0, Math.min(0.05, (now - last) / 1000));
        last = now;
        draw();
        requestAnimationFrame(loop);
    }

    function update() {
        if (!desktop.matches) { running = false; return; }
        const go = onScreen && !document.hidden && !reduceMotion.matches;
        if (go && !running) {
            running = true;
            last = performance.now();
            requestAnimationFrame(loop);
        } else if (!go) {
            running = false;
            draw();   // still picture
        }
    }

    function refresh() {
        if (!desktop.matches) {
            running = false;
            canvas.width = 0;
            canvas.height = 0;
            return;
        }
        build();
        draw();
        update();
    }

    section.addEventListener('mousemove', (e) => {
        if (!desktop.matches) return;
        const s = section.getBoundingClientRect();
        mouse.x = e.clientX - s.left;
        mouse.y = e.clientY - s.top;
        if (!running) draw();
    });
    section.addEventListener('mouseleave', () => {
        mouse.x = mouse.y = -9999;
        if (!running && desktop.matches) draw();
    });

    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => {
            onScreen = entries[0].isIntersecting;
            update();
        }).observe(section);
    } else {
        onScreen = true;
    }
    document.addEventListener('visibilitychange', update);
    let timer;
    window.addEventListener('resize', () => {
        clearTimeout(timer);
        timer = setTimeout(refresh, 200);
    });
    window.addEventListener('load', refresh);
    desktop.addEventListener('change', refresh);
    refresh();
    return { refresh: refresh };
}

// rect of an element relative to the section
function flechaRel(r, s) {
    return { x: r.left - s.left, y: r.top - s.top, w: r.width, h: r.height };
}

// ===== Portal Rooms: a 3D gallery behind the Welcome doors (desktop only) =====
// Opened by the Enter button in "Welcome to Flecha Web Design". Two full-screen
// dark purple rooms built with three.js (loaded at the bottom of index.html),
// one thing at a time:
//   Room 1, Our Work: the portfolio sites hang on the side walls (click one to
//     open the live site). A glowing "Pricing" doorway on the far wall leads on.
//   Room 2, Pricing: the pricing stage (Pay Once on the raised top row, Monthly
//     in front, and a sign that switches Non-E-Commerce / E-Commerce), the
//     Contact doorway, and an "Our Work" doorway back to Room 1.
// Click a doorway or walk into it to change rooms (a quick fade between them).
// Drag to look, click the floor or use W A S D / arrow keys to walk, and the
// Exit button or Esc returns to the page right where the visitor was.
// Nothing is built until the first click, and it only draws while open.
function flechaPortalRoom() {
    if (flechaPortalRoom.api) return flechaPortalRoom.api;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    // ---- the overlay ----
    const room = document.createElement('div');
    room.className = 'portal-room';
    room.setAttribute('role', 'dialog');
    room.setAttribute('aria-modal', 'true');
    room.setAttribute('aria-label', 'Flecha portal room');
    room.innerHTML =
        '<div class="portal-room-brand">FLECHA <span>WEB DESIGN</span></div>' +
        '<button type="button" class="portal-room-exit">Exit ✕</button>' +
        '<div class="portal-room-hint"><kbd>Drag</kbd> look &nbsp;·&nbsp; <kbd>W A S D</kbd> or click the floor to walk &nbsp;·&nbsp; click things to explore &nbsp;·&nbsp; doorways change rooms &nbsp;·&nbsp; <kbd>Esc</kbd> exit</div>' +
        '<div class="portal-room-where" style="position:absolute;top:44px;left:20px;color:#d4a5ff;font-size:0.72rem;font-weight:700;letter-spacing:3px;text-transform:uppercase;pointer-events:none;"></div>' +
        '<div class="portal-room-tip" hidden></div>' +
        '<div class="portal-room-panel"><button type="button" class="prp-close" aria-label="Close">×</button><div class="prp-body"></div></div>';
    document.body.appendChild(room);
    const exitBtn = room.querySelector('.portal-room-exit');
    const tip = room.querySelector('.portal-room-tip');
    const panel = room.querySelector('.portal-room-panel');
    const panelBody = room.querySelector('.prp-body');
    let returnFocus = null;

    const esc = (t) => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    function showPanel(html) { panelBody.innerHTML = html; panel.classList.add('is-on'); }
    function hidePanel() { panel.classList.remove('is-on'); }

    function scrollToId(id) {
        const el = document.getElementById(id);
        if (!el) return;
        window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
    }

    let scene3d = null;   // built on first open

    function open() {
        returnFocus = document.activeElement;
        room.classList.add('is-on');
        document.body.style.overflow = 'hidden';
        if (!scene3d) {
            try { scene3d = build(); }
            catch (e) {
                scene3d = { start() {}, stop() {} };
                room.insertAdjacentHTML('beforeend', '<p class="portal-room-note">The 3D room couldn\'t start on this browser. Press Exit to go back to the site.</p>');
            }
        }
        scene3d.start();
        exitBtn.focus({ preventScroll: true });
    }

    function close(thenScrollTo) {
        room.classList.remove('is-on');
        document.body.style.overflow = 'auto';
        hidePanel();
        if (scene3d) scene3d.stop();
        if (thenScrollTo) scrollToId(thenScrollTo);
        else {
            const back = returnFocus && returnFocus.offsetParent ? returnFocus : document.getElementById('introReenter');
            if (back && back.focus) back.focus({ preventScroll: true });
        }
    }

    exitBtn.addEventListener('click', () => close());
    room.querySelector('.prp-close').addEventListener('click', hidePanel);
    panelBody.addEventListener('click', (e) => {
        const go = e.target.closest('[data-go]');
        if (!go) return;
        // match the page's pricing switches to what the visitor was looking at
        const pick = (id) => { const b = document.getElementById(id); if (b) b.click(); };
        if (go.dataset.ecom) pick(go.dataset.ecom === '1' ? 'ecomBtn' : 'nonEcomBtn');
        if (go.dataset.monthly) pick(go.dataset.monthly === '1' ? 'monthlyBtn' : 'payOnceBtn');
        close(go.dataset.go);
    });
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape' || !room.classList.contains('is-on')) return;
        if (panel.classList.contains('is-on')) hidePanel(); else close();
    });

    // ---- the 3D scene ----
    function build() {
        if (typeof THREE === 'undefined') throw new Error('three.js not loaded');
        const COLORS = ['#e88fb4', '#f0a35e', '#7ed69a', '#6fc3e0', '#b48cf0', '#c9b37e', '#8fb0f0', '#e0c26f'];
        const SITES = (typeof projects !== 'undefined' ? projects : []).slice(0, 8).map((p, i) => ({
            name: p.title, cat: p.category, desc: p.description, link: p.liveLink, color: COLORS[i % COLORS.length]
        }));
        // Pricing shown on the stage (edit prices here; they match the Investment section).
        // Top row = Pay Once, front row = Monthly. The switch sign flips between the two types.
        const PRICING = {
            non: {
                title: 'Non-E-Commerce',
                once: [
                    { name: 'Essential', price: '$1,000', sub: 'Total project price', feats: ['Mobile responsive design', 'Photo gallery', 'Contact form', 'Hours, location & Google Maps', 'Social media links'] },
                    { name: 'Essential Plus', price: '$3,000', sub: 'Total project price', feats: ['Everything in Essential', 'Product catalog with pricing', 'Delivery area section', 'Testimonials section', 'Expanded navigation'] },
                    { name: 'Custom', price: '$5,000+', sub: 'Starting price', feats: ['Everything in Essential Plus', 'Complex functionality', 'Custom quote based on scope', 'Priority support', 'Extended launch support'] }
                ],
                monthly: [
                    { name: 'Essential', price: '$99/mo', sub: '+ $250 one-time setup', feats: ['Everything in the Essential site', 'Hosting, domain & SSL included', 'Up to 2 content updates / month', 'Security updates & backups', 'Uptime monitoring'] },
                    { name: 'Essential Plus', price: '$249/mo', sub: '+ $500 one-time setup', feats: ['Everything in the Essential Plus site', 'Hosting, domain & SSL included', 'Up to 4 content updates / month', 'Security updates & backups', 'Uptime monitoring', 'Monthly traffic report'] },
                    { name: 'Custom', price: 'From $449/mo', sub: '+ from $1,000 one-time setup', feats: ['Everything in the Custom site', 'Hosting, domain & SSL included', 'Up to 8 content updates / month', 'Security updates & backups', 'Uptime monitoring', 'Monthly traffic report', 'Priority support'] }
                ]
            },
            ecom: {
                title: 'E-Commerce',
                once: [
                    { name: 'E-Com Essential', price: '$2,500', sub: 'Total project price', feats: ['Mobile responsive design', 'Online store setup', 'Up to 25 products', 'Secure checkout', 'Payment gateway integration'] },
                    { name: 'E-Com Plus', price: '$4,500', sub: 'Total project price', feats: ['Everything in E-Com Essential', 'Up to 100 products', 'Inventory management', 'Discount & coupon system', 'Customer accounts'] },
                    { name: 'E-Com Custom', price: '$7,500+', sub: 'Starting price', feats: ['Everything in E-Com Plus', 'Unlimited products', 'Custom integrations', 'Priority support', 'Custom quote based on scope'] }
                ],
                monthly: [
                    { name: 'E-Com Essential', price: '$229/mo', sub: '+ $500 one-time setup', feats: ['Everything in the E-Com Essential store', 'Hosting, domain & SSL included', 'Up to 2 product or content updates / month', 'Security updates & backups', 'Uptime & checkout monitoring'] },
                    { name: 'E-Com Plus', price: '$379/mo', sub: '+ $750 one-time setup', feats: ['Everything in the E-Com Plus store', 'Hosting, domain & SSL included', 'Up to 4 product or content updates / month', 'Security updates & backups', 'Uptime & checkout monitoring', 'Monthly sales & traffic report'] },
                    { name: 'E-Com Custom', price: 'From $649/mo', sub: '+ from $1,500 one-time setup', feats: ['Everything in the E-Com Custom store', 'Hosting, domain & SSL included', 'Up to 8 product or content updates / month', 'Security updates & backups', 'Uptime & checkout monitoring', 'Monthly sales & traffic report', 'Priority support'] }
                ]
            }
        };
        let priceType = 'non';

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
        renderer.setSize(window.innerWidth, window.innerHeight);
        if ('outputColorSpace' in renderer) renderer.outputColorSpace = THREE.SRGBColorSpace;
        const cvs = renderer.domElement;
        room.insertBefore(cvs, room.firstChild);

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x050407);
        scene.fog = new THREE.Fog(0x050407, 14, 40);
        // depth range fitted to the room (it is 30 deep), so near and far surfaces never flicker
        const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.2, 60);

        const W = 20, D = 30, H = 6;            // room size (width, depth, height)
        const PURPLE = 0xd4a5ff, BLUE = 0x667eea;

        const LIGHT = Math.PI;   // three.js r155+ light units (same look as the classic lighting)
        scene.add(new THREE.AmbientLight(0x6a5a8a, 0.3 * LIGHT));
        [[PURPLE, 1.3, 0, 5, 2], [BLUE, 1.0, 0, 4, -10], [PURPLE, 0.7, 0, 4, 12]].forEach(([c, i, x, y, z]) => {
            const l = new THREE.PointLight(c, i * 1.4, 26, 0); l.position.set(x, y, z); scene.add(l);
        });

        const shell = new THREE.Mesh(new THREE.BoxGeometry(W, H, D), new THREE.MeshStandardMaterial({ color: 0x07060a, roughness: 0.9, metalness: 0.1, side: THREE.BackSide }));
        // the box's bottom sits 20 cm under the floor: if it were level with the floor, the two would fight to be drawn (flickering stripes)
        shell.scale.y = (H + 0.2) / H; shell.position.y = H / 2 - 0.1; scene.add(shell);
        const edges = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(W, H, D)), new THREE.LineBasicMaterial({ color: PURPLE, transparent: true, opacity: 0.75 }));
        edges.position.y = H / 2; scene.add(edges);

        // polygonOffset pushes the floor slightly back in depth, so the grid on top of it always wins (no flicker)
        const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D), new THREE.MeshStandardMaterial({ color: 0x050408, roughness: 0.6, metalness: 0.3, polygonOffset: true, polygonOffsetFactor: 2, polygonOffsetUnits: 2 }));
        floor.rotation.x = -Math.PI / 2; floor.userData.floor = true; scene.add(floor);
        const grid = new THREE.GridHelper(D, 30, PURPLE, 0x3a2f4d);
        grid.material.transparent = true; grid.material.opacity = 0.3; grid.material.depthWrite = false;
        grid.renderOrder = 1;   // drawn after the floor
        grid.position.y = 0.03; grid.scale.set(W / D, 1, 1); scene.add(grid);

        // plus signs on the ceiling, like the site's plus grid
        const plus = [];
        for (let x = -W / 2 + 1; x < W / 2; x += 2) for (let z = -D / 2 + 1; z < D / 2; z += 2) {
            plus.push(x - 0.15, H - 0.01, z, x + 0.15, H - 0.01, z, x, H - 0.01, z - 0.15, x, H - 0.01, z + 0.15);
        }
        const plusGeo = new THREE.BufferGeometry(); plusGeo.setAttribute('position', new THREE.Float32BufferAttribute(plus, 3));
        scene.add(new THREE.LineSegments(plusGeo, new THREE.LineBasicMaterial({ color: PURPLE, transparent: true, opacity: 0.4 })));

        // the two rooms share the walls, floor and ceiling; only one room's contents show at a time
        const workRoom = new THREE.Group(), priceRoom = new THREE.Group();
        scene.add(workRoom, priceRoom);
        const roomClick = { work: [], pricing: [] };   // what can be clicked in each room
        let current = 'work';
        const disposables = [];
        function tex(w, h, paint) {
            const c = document.createElement('canvas'); c.width = w; c.height = h;
            paint(c.getContext('2d'), w, h);
            const t = new THREE.CanvasTexture(c);
            if ('colorSpace' in t) t.colorSpace = THREE.SRGBColorSpace;
            t.anisotropy = 4; disposables.push(t); return t;
        }
        const font = (wt, px) => wt + ' ' + px + 'px "Segoe UI", -apple-system, Roboto, Arial, sans-serif';

        // portfolio frames: up to 4 per side wall
        SITES.forEach((s, i) => {
            const side = i % 2 === 0 ? -1 : 1, slot = Math.floor(i / 2);
            const z = 10.5 - slot * 6.2;
            const t = tex(640, 400, (g, w, h) => {
                g.fillStyle = '#14111b'; g.fillRect(0, 0, w, h);
                g.fillStyle = s.color; g.fillRect(0, 0, w, 46);
                g.fillStyle = 'rgba(255,255,255,.85)'; for (let k = 0; k < 4; k++) g.fillRect(w - 230 + k * 52, 18, 38, 10);
                const grd = g.createLinearGradient(0, 70, 0, 250); grd.addColorStop(0, s.color + '88'); grd.addColorStop(1, s.color + '22');
                g.fillStyle = grd; g.fillRect(30, 70, w - 60, 180);
                g.fillStyle = '#fff'; g.font = font('800', 38); g.textAlign = 'center'; g.fillText(s.name.toUpperCase(), w / 2, 172, w - 90);
                g.fillStyle = 'rgba(255,255,255,.25)'; g.fillRect(30, 280, 360, 16); g.fillRect(30, 310, 260, 16);
                g.fillStyle = s.color; g.fillRect(30, 342, 150, 34);
            });
            const pic = new THREE.Mesh(new THREE.PlaneGeometry(4, 2.5), new THREE.MeshBasicMaterial({ map: t }));
            pic.position.set(side * (W / 2 - 0.06), 2.6, z);
            pic.rotation.y = side < 0 ? Math.PI / 2 : -Math.PI / 2;
            workRoom.add(pic);
            const frame = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(0.08, 2.7, 4.2)), new THREE.LineBasicMaterial({ color: PURPLE }));
            frame.position.set(side * (W / 2 - 0.08), 2.6, z); workRoom.add(frame);
            const plaque = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 0.35), new THREE.MeshBasicMaterial({ map: tex(512, 80, (g, w) => {
                g.fillStyle = '#0d0b11'; g.fillRect(0, 0, w, 80); g.fillStyle = '#d4a5ff'; g.font = font('700', 30); g.textAlign = 'center'; g.fillText(String(s.cat).toUpperCase(), w / 2, 52, w - 20);
            }) }));
            plaque.position.set(side * (W / 2 - 0.06), 1.0, z); plaque.rotation.y = pic.rotation.y; workRoom.add(plaque);
            pic.userData = { kind: 'site', data: s, glow: frame, label: 'View ' + s.name };
            roomClick.work.push(pic);
        });

        // ---- pricing stage ----
        // A raised stage at the back holds the Pay Once row (top); the Monthly row
        // stands on the floor in front of it. A switch sign above flips both rows
        // between Non-E-Commerce and E-Commerce.
        const STAGE = { w: 10.4, h: 2.0, d: 2.8, z: -7.5 };      // the raised top row
        const ROWS = [
            { key: 'once', label: 'PAY ONCE', z: STAGE.z, floor: STAGE.h },
            { key: 'monthly', label: 'MONTHLY', z: -3, floor: 0 }
        ];
        const SPACING = 3.6;
        const stage = new THREE.Mesh(new THREE.BoxGeometry(STAGE.w, STAGE.h, STAGE.d), new THREE.MeshStandardMaterial({ color: 0x100d17, roughness: 0.7, metalness: 0.3 }));
        stage.position.set(0, STAGE.h / 2, STAGE.z); priceRoom.add(stage);
        const stageEdges = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(STAGE.w, STAGE.h, STAGE.d)), new THREE.LineBasicMaterial({ color: PURPLE, transparent: true, opacity: 0.8 }));
        stageEdges.position.copy(stage.position); priceRoom.add(stageEdges);
        const stageLight = new THREE.PointLight(PURPLE, 1.2, 12, 0); stageLight.position.set(0, 4.6, -5); priceRoom.add(stageLight);

        // a canvas texture that can be repainted when the pricing type changes
        function liveTex(w, h) {
            const c = document.createElement('canvas'); c.width = w; c.height = h;
            const t = new THREE.CanvasTexture(c);
            if ('colorSpace' in t) t.colorSpace = THREE.SRGBColorSpace;
            t.anisotropy = 4; disposables.push(t);
            return { tex: t, paint(fn) { const g = c.getContext('2d'); g.clearRect(0, 0, w, h); fn(g, w, h); t.needsUpdate = true; } };
        }

        const gems = [];
        const slots = [];   // one per pedestal: { row, i, gem, label }
        ROWS.forEach(row => {
            for (let i = 0; i < 3; i++) {
                const x = (i - 1) * SPACING, z = row.z, y0 = row.floor;
                const base = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.75, 0.8, 32), new THREE.MeshStandardMaterial({ color: 0x17131f, roughness: 0.5, metalness: 0.4 }));
                base.position.set(x, y0 + 0.4, z); priceRoom.add(base);
                const ring = new THREE.Mesh(new THREE.TorusGeometry(0.64, 0.03, 8, 48), new THREE.MeshBasicMaterial({ color: PURPLE }));
                ring.rotation.x = Math.PI / 2; ring.position.set(x, y0 + 0.81, z); priceRoom.add(ring);
                const geo = i === 0 ? new THREE.OctahedronGeometry(0.4) : i === 1 ? new THREE.OctahedronGeometry(0.46, 1) : new THREE.IcosahedronGeometry(0.52, 0);
                const glowColor = row.key === 'monthly' ? BLUE : PURPLE;
                const mat = new THREE.MeshStandardMaterial({ color: PURPLE, emissive: i === 1 ? PURPLE : glowColor, emissiveIntensity: 0.55, roughness: 0.25, metalness: 0.2, flatShading: true });
                const gem = new THREE.Mesh(geo, mat); gem.position.set(x, y0 + 1.5, z); gem.userData.baseY = y0 + 1.5; priceRoom.add(gem);
                const lt = liveTex(512, 160);
                const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: lt.tex, transparent: true }));
                label.scale.set(2.1, 0.66, 1); label.position.set(x, y0 + 2.35, z); priceRoom.add(label);
                gem.userData = Object.assign(gem.userData, { kind: 'tier', mat: mat });
                base.userData = gem.userData;
                roomClick.pricing.push(gem, base); gems.push(gem);
                slots.push({ row: row, i: i, gem: gem, paint: lt.paint });
            }
            // row name at the left end of each row
            const rowSign = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, map: tex(400, 100, (g, w, h) => {
                g.fillStyle = 'rgba(13,11,17,.9)'; g.fillRect(0, 0, w, h);
                g.strokeStyle = '#d4a5ff'; g.lineWidth = 4; g.strokeRect(2, 2, w - 4, h - 4);
                g.fillStyle = '#d4a5ff'; g.font = font('900', 46); g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(row.label, w / 2, h / 2 + 2);
            }) }));
            rowSign.scale.set(1.6, 0.4, 1); rowSign.position.set(-SPACING - 2.3, row.floor + 1.5, row.z); priceRoom.add(rowSign);
        });

        // switch sign above the stage: NON-E-COMMERCE | E-COMMERCE
        const sw = liveTex(1280, 200);
        const switchSign = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 1.0), new THREE.MeshBasicMaterial({ map: sw.tex, transparent: true }));
        switchSign.position.set(0, 5.4, STAGE.z - STAGE.d / 2 + 0.05); priceRoom.add(switchSign);
        switchSign.userData = { kind: 'ptype', label: 'Switch between Non-E-Commerce and E-Commerce' };
        roomClick.pricing.push(switchSign);

        function paintPricing() {
            const P = PRICING[priceType];
            sw.paint((g, w, h) => {
                g.fillStyle = 'rgba(13,11,17,.95)'; g.fillRect(0, 0, w, h);
                g.strokeStyle = '#d4a5ff'; g.lineWidth = 5; g.strokeRect(3, 3, w - 6, h - 6);
                g.fillStyle = '#d4a5ff'; g.font = font('800', 30); g.textAlign = 'center'; g.textBaseline = 'middle';
                g.fillText('PRICING  ·  CLICK TO SWITCH', w / 2, 38);
                ['non', 'ecom'].forEach((k, j) => {
                    const x0 = 40 + j * (w - 80) / 2, bw = (w - 80) / 2 - 20, on = k === priceType;
                    g.fillStyle = on ? '#d4a5ff' : 'rgba(212,165,255,.08)'; g.fillRect(x0 + (j ? 20 : 0), 72, bw, 100);
                    g.strokeStyle = 'rgba(212,165,255,.6)'; g.lineWidth = 3; g.strokeRect(x0 + (j ? 20 : 0), 72, bw, 100);
                    g.fillStyle = on ? '#0d0b11' : '#d4a5ff'; g.font = font('900', 52);
                    g.fillText(PRICING[k].title.toUpperCase(), x0 + (j ? 20 : 0) + bw / 2, 124);
                });
            });
            slots.forEach(s => {
                const t = P[s.row.key][s.i];
                s.gem.userData.data = t;
                s.gem.userData.label = 'See ' + t.name + (s.row.key === 'monthly' ? ' monthly' : ' pay-once') + ' pricing';
                s.paint((g, w) => {
                    g.textAlign = 'center'; g.fillStyle = '#d4a5ff'; g.font = font('800', 38); g.fillText(t.name.toUpperCase(), w / 2, 56, w - 20);
                    g.fillStyle = '#fff'; g.font = font('900', 54); g.fillText(t.price, w / 2, 124, w - 20);
                });
            });
        }
        paintPricing();

        // ---- doorways ----
        // A glowing doorway with a sign above it, set into a wall.
        // wallZ: the wall it sits in; rotY: Math.PI for the entrance wall (faces the back of the room)
        function doorway(group, x, wallZ, rotY, signText, arrowLeft, userData) {
            const g = new THREE.Group(); g.position.set(x, 0, wallZ); g.rotation.y = rotY; group.add(g);
            const door = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 3.9), new THREE.MeshBasicMaterial({ map: tex(512, 768, (c, w, h) => {
                const grd = c.createRadialGradient(w / 2, h / 2, 20, w / 2, h / 2, h * 0.6);
                grd.addColorStop(0, '#f0dcff'); grd.addColorStop(0.25, '#b580e6'); grd.addColorStop(0.7, '#3b2a6a'); grd.addColorStop(1, '#0d0b11');
                c.fillStyle = grd; c.fillRect(0, 0, w, h);
                c.strokeStyle = 'rgba(255,255,255,.75)'; c.lineWidth = 16; c.lineCap = 'round'; c.lineJoin = 'round';
                const d = arrowLeft ? -1 : 1;
                c.beginPath(); c.moveTo(w / 2 - 50 * d, h / 2 - 80); c.lineTo(w / 2 + 40 * d, h / 2); c.lineTo(w / 2 - 50 * d, h / 2 + 80); c.stroke();
            }) }));
            door.position.set(0, 1.95, 0.05); g.add(door);
            const frameLines = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(2.9, 4.2, 0.1)), new THREE.LineBasicMaterial({ color: PURPLE }));
            frameLines.position.set(0, 2.1, 0.06); g.add(frameLines);
            const sign = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 0.6), new THREE.MeshBasicMaterial({ map: tex(680, 120, (c, w) => {
                c.fillStyle = '#0d0b11'; c.fillRect(0, 0, w, 120); c.fillStyle = '#fff'; c.font = font('900', 60); c.textAlign = 'center'; c.fillText(signText, w / 2, 82, w - 30);
            }) }));
            sign.position.set(0, 4.7, 0.05); g.add(sign);
            door.userData = Object.assign({ glow: frameLines }, userData);
            return door;
        }

        // Room 1 (Our Work): the doorway on the far wall leads to Pricing
        const toPricing = doorway(workRoom, 0, -D / 2, 0, 'PRICING  ›', false, { kind: 'room', to: 'pricing', label: 'Go to Pricing' });
        roomClick.work.push(toPricing);

        // Room 2 (Pricing): Contact doorway on the far wall, to the right of the stage (so nothing hides it)
        const DOOR_X = 7.9;
        const contactDoor = doorway(priceRoom, DOOR_X, -D / 2, 0, 'CONTACT US', false, { kind: 'contact', label: 'Book a consultation' });
        roomClick.pricing.push(contactDoor);
        // ...and a doorway in the entrance wall back to Our Work (behind the visitor on arrival)
        const toWork = doorway(priceRoom, 0, D / 2, Math.PI, '‹  OUR WORK', true, { kind: 'room', to: 'work', label: 'Back to Our Work' });
        roomClick.pricing.push(toWork);

        // tagline on the entrance wall
        const back = new THREE.Mesh(new THREE.PlaneGeometry(12, 1.6), new THREE.MeshBasicMaterial({ map: tex(1200, 160, (g, w) => {
            g.fillStyle = '#0a0810'; g.fillRect(0, 0, w, 160); g.fillStyle = '#fff'; g.font = font('900', 72); g.textAlign = 'center'; g.fillText('MOVING YOUR VISION FORWARD', w / 2, 104);
        }) }));
        back.position.set(0, 3.6, D / 2 - 0.05); back.rotation.y = Math.PI; workRoom.add(back);

        // floating dust
        const dp = [];
        for (let i = 0; i < 260; i++) dp.push((Math.random() - 0.5) * W, Math.random() * H, (Math.random() - 0.5) * D);
        const dustGeo = new THREE.BufferGeometry(); dustGeo.setAttribute('position', new THREE.Float32BufferAttribute(dp, 3));
        const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ color: PURPLE, size: 0.05, transparent: true, opacity: 0.7 }));
        scene.add(dust);

        // walk-to marker
        const marker = new THREE.Mesh(new THREE.RingGeometry(0.25, 0.32, 32), new THREE.MeshBasicMaterial({ color: PURPLE, transparent: true, opacity: 0 }));
        marker.rotation.x = -Math.PI / 2; marker.position.y = 0.02; scene.add(marker);

        // ---- controls ----
        const START = { x: 0, z: 12.5, yaw: 0, pitch: -0.05 };
        const me = { x: 0, z: 0, yaw: 0, pitch: 0, tx: null, tz: null };
        const keys = {};
        const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
        let hover = null, down = null, dragging = false, running = false, last = 0, intro = 0;

        function pick(ev) {
            const r = cvs.getBoundingClientRect();
            ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1);
            ray.setFromCamera(ndc, camera);
            return ray.intersectObjects(roomClick[current].concat([floor]), false)[0] || null;
        }
        function glow(obj, on) {
            const u = obj.userData;
            if (u.glow) u.glow.material.color.set(on ? 0xffffff : PURPLE);
            if (u.mat) u.mat.emissiveIntensity = on ? 1.1 : 0.55;
        }
        function setHover(obj, ev) {
            if (hover && hover !== obj) glow(hover, false);
            hover = obj;
            if (obj) {
                glow(obj, true);
                tip.hidden = false; tip.textContent = obj.userData.label;
                tip.style.left = ev.clientX + 'px'; tip.style.top = ev.clientY + 'px';
                cvs.classList.add('is-pointing');
            } else {
                tip.hidden = true; cvs.classList.remove('is-pointing');
            }
        }

        cvs.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, yaw: me.yaw, pitch: me.pitch }; dragging = false; cvs.setPointerCapture(e.pointerId); });
        cvs.addEventListener('pointermove', (e) => {
            if (down) {
                const dx = e.clientX - down.x, dy = e.clientY - down.y;
                if (!dragging && Math.hypot(dx, dy) > 5) { dragging = true; cvs.classList.add('is-dragging'); setHover(null); }
                if (dragging) { me.yaw = down.yaw + dx * 0.004; me.pitch = Math.max(-0.9, Math.min(0.7, down.pitch + dy * 0.003)); }
                return;
            }
            const h = pick(e);
            setHover(h && !h.object.userData.floor ? h.object : null, e);
        });
        cvs.addEventListener('pointerup', (e) => {
            const wasDrag = dragging;
            down = null; dragging = false; cvs.classList.remove('is-dragging');
            if (wasDrag) return;
            const h = pick(e);
            if (!h) return;
            const u = h.object.userData;
            if (u.floor) {
                me.tx = Math.max(-W / 2 + 1, Math.min(W / 2 - 1, h.point.x));
                me.tz = Math.max(-D / 2 + 1, Math.min(D / 2 - 1, h.point.z));
                marker.position.x = me.tx; marker.position.z = me.tz; marker.material.opacity = 1;
                hidePanel();
            } else if (u.kind === 'site') {
                const s = u.data;
                showPanel('<div class="prp-kicker">' + esc(s.cat) + '</div><h4>' + esc(s.name) + '</h4><p>' + esc(s.desc) + '</p>' +
                    '<div class="prp-actions"><a class="prp-btn" href="' + esc(s.link) + '" target="_blank" rel="noopener noreferrer">Open live site ↗</a></div>');
            } else if (u.kind === 'room') {
                goRoom(u.to);
            } else if (u.kind === 'ptype') {
                // left half = Non-E-Commerce, right half = E-Commerce
                const want = h.uv && h.uv.x >= 0.5 ? 'ecom' : 'non';
                if (want !== priceType) { priceType = want; paintPricing(); hidePanel(); }
            } else if (u.kind === 'tier') {
                const t = u.data, monthly = PRICING[priceType].monthly.includes(t);
                showPanel('<div class="prp-kicker">' + esc(PRICING[priceType].title) + ' · ' + (monthly ? 'Monthly' : 'Pay Once') + '</div><h4>' + esc(t.name) + '</h4><div class="prp-price">' + esc(t.price) + '</div><div class="prp-sub">' + esc(t.sub) + '</div>' +
                    '<ul>' + t.feats.map(f => '<li>' + esc(f) + '</li>').join('') + '</ul>' +
                    '<div class="prp-actions"><button type="button" class="prp-btn" data-go="pricing" data-ecom="' + (priceType === 'ecom' ? 1 : 0) + '" data-monthly="' + (monthly ? 1 : 0) + '">See all pricing</button></div>');
            } else if (u.kind === 'contact') {
                showPanel('<div class="prp-kicker">Contact</div><h4>Book a consultation</h4><p>Tell us about your project and pick a time that works for you.</p>' +
                    '<div class="prp-actions"><button type="button" class="prp-btn" data-go="contact">Go to the form</button></div>');
            }
        });
        cvs.addEventListener('pointerleave', () => { if (!down) setHover(null); });

        window.addEventListener('keydown', (e) => {
            if (!running) return;
            const k = e.key.toLowerCase();
            if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) { keys[k] = true; e.preventDefault(); }
        });
        window.addEventListener('keyup', (e) => { keys[e.key.toLowerCase()] = false; });
        window.addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        });

        function blocked(x, z) {   // pricing room: keep out of the stage and the front pedestals
            if (current !== 'pricing') return false;
            if (Math.abs(x) < STAGE.w / 2 + 0.5 && Math.abs(z - STAGE.z) < STAGE.d / 2 + 0.5) return true;
            if (Math.abs(z - ROWS[1].z) < 1.2) for (let i = 0; i < 3; i++) if (Math.abs(x - (i - 1) * SPACING) < 1.2) return true;
            return false;
        }

        // ---- changing rooms: a quick fade to black, swap, fade back in ----
        const where = room.querySelector('.portal-room-where');
        const fade = document.createElement('div');
        fade.style.cssText = 'position:absolute;inset:0;background:#000;opacity:0;pointer-events:none;transition:opacity 0.35s ease;';
        cvs.after(fade);
        let switching = false;
        function setRoom(name) {
            current = name;
            workRoom.visible = name === 'work';
            priceRoom.visible = name === 'pricing';
            where.textContent = name === 'work' ? 'Room 1 of 2 · Our Work' : 'Room 2 of 2 · Pricing';
        }
        function placeIn(name, fromPricing) {
            if (name === 'work' && fromPricing) Object.assign(me, { x: 0, z: -11.5, yaw: Math.PI, pitch: -0.05 });   // just inside the Pricing doorway, facing back into the room
            else Object.assign(me, START);
            me.tx = null; marker.material.opacity = 0;
        }
        function goRoom(name) {
            if (switching || name === current) return;
            switching = true;
            hidePanel(); if (hover) setHover(null);
            for (const k in keys) keys[k] = false;
            const fromPricing = current === 'pricing';
            const wait = reduceMotion.matches ? 0 : 350;
            fade.style.opacity = '1';
            setTimeout(() => {
                setRoom(name); placeIn(name, fromPricing); intro = 1;
                fade.style.opacity = '0';
                setTimeout(() => { switching = false; }, wait);
            }, wait);
        }

        function frame(now) {
            if (!running) return;
            requestAnimationFrame(frame);
            const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
            last = now;
            const f = (keys.w || keys.arrowup ? 1 : 0) - (keys.s || keys.arrowdown ? 1 : 0);
            const s = (keys.d || keys.arrowright ? 1 : 0) - (keys.a || keys.arrowleft ? 1 : 0);
            let nx = me.x, nz = me.z;
            if (f || s) {
                me.tx = null; marker.material.opacity = 0;
                const sp = 5 * dt;
                nx += (-Math.sin(me.yaw) * f + Math.cos(me.yaw) * s) * sp;
                nz += (-Math.cos(me.yaw) * f - Math.sin(me.yaw) * s) * sp;
            } else if (me.tx !== null) {
                const dx = me.tx - me.x, dz = me.tz - me.z, d = Math.hypot(dx, dz);
                if (d < 0.08) { me.tx = null; marker.material.opacity = 0; }
                else { const sp = Math.min(d, 5 * dt); nx += dx / d * sp; nz += dz / d * sp; }
            }
            nx = Math.max(-W / 2 + 0.8, Math.min(W / 2 - 0.8, nx));
            nz = Math.max(-D / 2 + 0.8, Math.min(D / 2 - 0.8, nz));
            if (!blocked(nx, nz)) { me.x = nx; me.z = nz; } else { me.tx = null; marker.material.opacity = 0; }
            // walking into a doorway changes rooms
            if (!switching && Math.abs(me.x) < 1.4) {
                if (current === 'work' && me.z < -D / 2 + 1.0) goRoom('pricing');
                else if (current === 'pricing' && me.z > D / 2 - 1.0) goRoom('work');
            }

            intro = Math.min(1, intro + dt / 1.6);   // glide in through the doorway
            const k = reduceMotion.matches ? 1 : 1 - Math.pow(1 - intro, 3);
            const bob = (f || s || me.tx !== null) && !reduceMotion.matches ? Math.sin(now / 140) * 0.03 : 0;
            camera.position.set(me.x, 1.7 + bob, me.z + (1 - k) * 2.5);
            camera.rotation.order = 'YXZ';
            camera.rotation.y = me.yaw;
            camera.rotation.x = me.pitch;

            const t = now / 1000;
            if (!reduceMotion.matches) {
                gems.forEach((g, i) => { g.rotation.y = t * 0.6 + i; g.rotation.x = Math.sin(t * 0.5 + i) * 0.2; g.position.y = g.userData.baseY + Math.sin(t * 1.4 + i) * 0.12; });
                dust.rotation.y = t * 0.01;
            }
            if (marker.material.opacity > 0) { const p = 1 + Math.sin(t * 6) * 0.1; marker.scale.set(p, p, p); }
            renderer.render(scene, camera);
        }

        return {
            start() {
                setRoom('work');
                fade.style.opacity = '0'; switching = false;
                Object.assign(me, START, { tx: null, tz: null });
                marker.material.opacity = 0;
                intro = 0;
                renderer.setSize(window.innerWidth, window.innerHeight);
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                running = true;
                last = performance.now();
                requestAnimationFrame(frame);
            },
            stop() {
                running = false;
                for (const k in keys) keys[k] = false;
                if (hover) setHover(null);
            }
        };
    }

    flechaPortalRoom.api = { open, close };
    return flechaPortalRoom.api;
}

// ===== "Welcome to Flecha Web Design" Portal (desktop and mobile) =====
// The first time the section scrolls into view, two doors with the Flecha
// arrow split down the middle glow at the seam and swing open. Behind them a
// purple portal sends small previews of the portfolio sites drifting out
// toward the visitor. The mouse (desktop) gently shifts the portal.
// Phones: the doors open by themselves when the section scrolls into view.
// Desktop: the doors stay closed with an Enter button; clicking it opens them
// and steps into the 3D Portal Room (see flechaPortalRoom above).
// Phones get fewer, smaller cards at 30 frames a second. The doors open once
// per visit (later page loads start open). Pauses when off screen or when the
// tab is hidden; visitors who ask for less motion get the doors already open
// and a still picture.
(function() {
    const section = document.querySelector('.company-intro');
    const canvas = document.getElementById('introPortal');
    if (!section || !canvas) return;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 769px)');
    const PURPLE = [212, 165, 255], BLUE = [102, 126, 234];
    const COLORS = [[232, 143, 180], [240, 163, 94], [126, 214, 154], [111, 195, 224], [201, 179, 126], [180, 140, 240], [143, 176, 240], [224, 194, 111]];
    const SITES = (typeof projects !== 'undefined' ? projects : []).map((p, i) => ({ name: p.title, color: COLORS[i % COLORS.length] }));
    if (!SITES.length) SITES.push({ name: 'Flecha Web Design', color: PURPLE });
    const rgba = (c, a) => 'rgba(' + c[0] + ', ' + c[1] + ', ' + c[2] + ', ' + Math.max(0, Math.min(1, a)).toFixed(3) + ')';
    const ease = (x) => x <= 0 ? 0 : x >= 1 ? 1 : 1 - Math.pow(1 - x, 3);

    let w = 0, h = 0, phone = false;
    let cards = [], spawnIn = 0, next = 0;
    let since = -1;            // seconds since the doors started opening (-1 = still closed)
    let running = false, onScreen = false, last = 0, frameGap = 0;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    function size() {
        const r = section.getBoundingClientRect();
        if (!r.width || !r.height) return;
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        w = r.width; h = r.height;
        phone = window.innerWidth <= 768;
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function box(x, y, bw, bh, r) {
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(x, y, bw, bh, r);
        else ctx.rect(x, y, bw, bh);
    }

    // one small "website preview" card
    function drawCard(x, y, s, a, site) {
        const cw = 170 * s, ch = 110 * s, r = 6 * s;
        ctx.save();
        ctx.globalAlpha = a;
        ctx.translate(x - cw / 2, y - ch / 2);
        ctx.fillStyle = '#15121b';
        ctx.strokeStyle = 'rgba(212, 165, 255, 0.55)';
        ctx.lineWidth = 1;
        box(0, 0, cw, ch, r); ctx.fill(); ctx.stroke();
        ctx.fillStyle = rgba(site.color, 0.9);
        ctx.fillRect(0, 0, cw, ch * 0.13);
        ctx.fillStyle = rgba(site.color, 0.28);
        ctx.fillRect(cw * 0.07, ch * 0.22, cw * 0.86, ch * 0.34);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
        ctx.font = '700 ' + Math.max(6, 11 * s).toFixed(1) + 'px "Segoe UI", -apple-system, Roboto, Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(site.name, cw / 2, ch * 0.39, cw * 0.82);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
        ctx.fillRect(cw * 0.07, ch * 0.66, cw * 0.6, ch * 0.06);
        ctx.fillRect(cw * 0.07, ch * 0.78, cw * 0.42, ch * 0.06);
        ctx.restore();
    }

    function draw(dt) {
        ctx.clearRect(0, 0, w, h);
        if (desktop.matches) return;   // desktop: no portal or cards (the plus grid shows instead)
        const open = ease((since - 0.9) / 1.4);
        if (open <= 0) return;
        mouse.x += (mouse.tx - mouse.x) * Math.min(1, dt * 4);
        mouse.y += (mouse.ty - mouse.y) * Math.min(1, dt * 4);
        const cx = w / 2 + mouse.x * 40, cy = h / 2 + mouse.y * 25;

        // the portal glow and ring
        const pr = Math.min(w, h) * (phone ? 0.36 : 0.42) * open;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, pr * 1.25);
        g.addColorStop(0, rgba(PURPLE, 0.22 * open));
        g.addColorStop(0.6, rgba(BLUE, 0.1 * open));
        g.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = g;
        ctx.fillRect(cx - pr * 1.3, cy - pr * 1.3, pr * 2.6, pr * 2.6);
        for (let i = 0; i < 3; i++) {
            ctx.strokeStyle = rgba(PURPLE, (0.5 - i * 0.15) * open);
            ctx.lineWidth = 2 + i * 4;
            ctx.beginPath();
            ctx.ellipse(cx, cy, pr * 1.15, pr * 0.92, 0, 0, Math.PI * 2);
            ctx.stroke();
        }

        // portfolio cards drifting out
        if (open > 0.3) {
            spawnIn -= dt;
            if (spawnIn <= 0) {
                spawnIn = phone ? 1.2 : 0.75;
                cards.push({ p: 0, ang: Math.random() * Math.PI * 2, site: SITES[next++ % SITES.length] });
            }
        }
        const reach = Math.max(w, h) * 0.62;
        const base = phone ? 0.6 : 1;
        cards = cards.filter(c => c.p < 1);
        for (const c of cards) {
            c.p += dt / 7;
            const d = Math.pow(c.p, 1.5) * reach;
            const x = cx + Math.cos(c.ang) * d * 1.25;
            const y = cy + Math.sin(c.ang) * d * 0.8;
            const s = (0.18 + c.p * 1.15) * base;
            const a = Math.min(1, c.p * 5) * (1 - Math.max(0, (c.p - 0.82) / 0.18));
            drawCard(x, y, s, a * open, c.site);
        }
    }

    // a still picture for visitors who ask for less motion
    function stillFrame() {
        since = 10;
        cards = [];
        for (let i = 0; i < 9; i++) cards.push({ p: 0.12 + i * 0.09, ang: i * 2.4, site: SITES[i % SITES.length] });
        spawnIn = 999;
        draw(0);
    }

    function loop(now) {
        if (!running) return;
        requestAnimationFrame(loop);
        const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
        frameGap += dt;
        last = now;
        if (phone && frameGap < 1 / 30) return;   // phones: 30 frames a second
        const step = frameGap;
        frameGap = 0;
        if (since >= 0) since += step;
        draw(Math.min(0.1, step));
    }

    function update() {
        const go = onScreen && !document.hidden && !reduceMotion.matches && since >= 0 && !desktop.matches;
        if (go && !running) {
            running = true;
            last = performance.now();
            frameGap = 0;
            requestAnimationFrame(loop);
        } else if (!go) {
            running = false;
        }
    }

    function openDoors(instant) {
        if (since >= 0) return;
        since = 0;
        try { sessionStorage.setItem('flechaPortalOpened', '1'); } catch (e) { /* storage blocked: fine */ }
        if (instant) {
            section.classList.add('portal-open', 'portal-done');
            since = 2.5;
        } else {
            section.classList.add('portal-cracking');
            setTimeout(() => section.classList.add('portal-open'), 450);
            setTimeout(() => section.classList.add('portal-done'), 2600);   // doors removed once off screen-space
        }
        update();
    }

    section.addEventListener('mousemove', (e) => {
        const r = section.getBoundingClientRect();
        mouse.tx = (e.clientX - r.left) / r.width - 0.5;
        mouse.ty = (e.clientY - r.top) / r.height - 0.5;
    });
    section.addEventListener('mouseleave', () => { mouse.tx = 0; mouse.ty = 0; });

    size();
    let seen = false;
    try { seen = sessionStorage.getItem('flechaPortalOpened') === '1'; } catch (e) { /* storage blocked */ }

    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
        section.classList.add('portal-open', 'portal-done');
        stillFrame();
        if (!reduceMotion.matches) { onScreen = true; update(); }
    } else {
        section.classList.add('portal-ready');   // the doors appear only now that the script is running
        if (seen) openDoors(true);
        // open once half the section has scrolled above the lower 40% of the screen
        // (so it plays while the visitor is looking at it, not while they're still on the hero)
        // (phones only: on desktop the visitor opens the doors with the Enter button)
        const opener = new IntersectionObserver((entries) => {
            if (entries[0].intersectionRatio >= 0.5 && !desktop.matches) { openDoors(false); opener.disconnect(); }
        }, { rootMargin: '0px 0px -40% 0px', threshold: [0.5] });
        opener.observe(section);
        // if the window shrinks to phone size while the doors are still closed, just open them
        desktop.addEventListener('change', () => { if (!desktop.matches) openDoors(true); });
    }
    desktop.addEventListener('change', () => { update(); if (!running) draw(0); });

    // Desktop: Enter opens the doors, then steps into the 3D room
    const enterBtn = document.getElementById('introEnter');
    const reenterBtn = document.getElementById('introReenter');
    if (enterBtn) enterBtn.addEventListener('click', () => {
        openDoors(false);
        setTimeout(() => flechaPortalRoom().open(), reduceMotion.matches ? 0 : 1500);
    });
    if (reenterBtn) reenterBtn.addEventListener('click', () => flechaPortalRoom().open());
    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => {
            onScreen = entries[0].isIntersecting;
            update();
        }).observe(section);
    }
    document.addEventListener('visibilitychange', update);

    let timer;
    window.addEventListener('resize', () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            size();
            if (!running) { if (reduceMotion.matches) stillFrame(); else draw(0); }
        }, 200);
    });
})();

// "Welcome to Flecha Web Design" (desktop only): plus-sign grid around the
// title, the paragraph and the "Enter the portal again" button. That button is
// hidden until the doors open, so it is measured as if showing, keeping its
// spot clear either way.
(function() {
    const section = document.querySelector('.company-intro');
    if (!section) return;
    const grid = flechaPlusGrid(section, document.getElementById('introPlus'), function(s) {
        const holes = [];
        section.querySelectorAll('.container .section-title, .container .intro-text').forEach(el => holes.push(flechaRel(el.getBoundingClientRect(), s)));
        const btn = document.getElementById('introReenter');
        if (btn) {
            const was = btn.style.display;
            btn.style.display = 'inline-flex';
            holes.push(flechaRel(btn.getBoundingClientRect(), s));
            btn.style.display = was;
        }
        return holes;
    });
    if (!grid) return;
    // The section gets taller when the doors open and the button appears, so
    // redraw the grid then (otherwise the + signs end up stretched over the button).
    new MutationObserver(() => grid.refresh()).observe(section, { attributes: true, attributeFilter: ['class'] });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => grid.refresh());
})();

// "Before Your Consultation": keep the box clear
(function() {
    const section = document.getElementById('questionnaire');
    const box = section ? section.querySelector('.before-we-meet-content') : null;
    if (!box) return;
    flechaPlusGrid(section, document.getElementById('bwmPlus'), function(s) {
        return [flechaRel(box.getBoundingClientRect(), s)];
    });
})();

// ===== Essential Pricing Card Flip (desktop and mobile) =====
// "Flip" turns the card over to show the price breakdown; "Flip back"
// returns it. The hidden side is made unclickable so keyboard and screen
// reader users only ever reach the side that is showing.
document.querySelectorAll('.pricing-card--flip').forEach(card => {
    const front = card.querySelector('.pcf-front');
    const back = card.querySelector('.pcf-back');
    if (!front || !back) return;

    function setFlipped(flipped) {
        card.classList.toggle('is-flipped', flipped);
        front.inert = flipped;
        back.inert = !flipped;
        const showing = flipped ? back : front;
        setTimeout(() => showing.querySelector('.pcf-btn').focus({ preventScroll: true }), 350);
    }

    front.querySelector('.pcf-btn').addEventListener('click', () => setFlipped(true));
    back.querySelector('.pcf-btn').addEventListener('click', () => setFlipped(false));
});

// ===== Contact Us Dot Matrix Shimmer (desktop only) =====
// Dots are brightest in the open space between the Email/Phone boxes and the
// form, fading outward. Nothing is drawn behind the title, the boxes or the form.
(function() {
    const section = document.getElementById('contact');
    flechaDotSweep(section, document.getElementById('contactDots'), function(rel, W, H, mobile) {
        const holes = [];
        section.querySelectorAll('.section-title, .contact-info h3').forEach(el => holes.push(rel(el, mobile ? 6 : 10)));
        section.querySelectorAll('.contact-item').forEach(el => holes.push(rel(el, mobile ? 8 : 14)));
        const formEl = section.querySelector('.consultation-form');
        const items = section.querySelectorAll('.contact-item');
        if (formEl) holes.push(rel(formEl, mobile ? 10 : 24));
        let cx = W / 2, cy = H / 2;
        if (formEl && items.length) {
            const f = rel(formEl, 0);
            const ph = rel(items[items.length - 1], 0);
            if (f.x > ph.x + ph.w) { cx = (ph.x + ph.w + f.x) / 2; cy = f.y + f.h * 0.62; } // side by side
            else { cy = (ph.y + ph.h + f.y) / 2; }                                         // stacked (phones)
        }
        const rx = W * 0.55, ry = H * 0.75;
        return { holes: holes, glow: (x, y) => Math.max(0, 1 - Math.hypot((x - cx) / rx, (y - cy) / ry)) };
    });
})();

// ===== Footer "System Readout" Bar (desktop only, 769px and wider) =====
// Every number is real: Phoenix time, how long this page took to load, and
// how long the visitor has been on the page. A short line types itself out.
// Phones never run this (the bar is hidden there by CSS). Pauses when the
// footer is off screen; visitors who ask for less motion get static text.
(function() {
    const bar = document.getElementById('footerReadout');
    if (!bar) return;
    const desktop = window.matchMedia('(min-width: 769px)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const el = (name) => bar.querySelector('[data-fr="' + name + '"]');
    const clock = el('clock'), load = el('load'), session = el('session'), type = el('type'), hex = el('hex');
    const LINES = ['building websites that work', 'now booking consultations', 'serving Phoenix, Gilbert & the Valley'];
    const start = Date.now();
    let onScreen = false, timers = [], typeTimer = null;

    const phxTime = () => new Date().toLocaleTimeString('en-US', { timeZone: 'America/Phoenix', hour12: false }) + ' MST';
    const sessionTime = () => {
        const s = Math.floor((Date.now() - start) / 1000);
        return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
    };
    const randomHex = () => Array.from({ length: 14 }, () =>
        Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase()).join(' ');

    function tick() {
        clock.textContent = phxTime();
        session.textContent = sessionTime();
    }

    // real page load time, read once the page has finished loading
    function showLoad() {
        const nav = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
        const ms = nav && nav.loadEventEnd > 0 ? nav.loadEventEnd - nav.startTime : performance.now();
        load.textContent = Math.round(ms) + ' ms';
    }
    if (document.readyState === 'complete') setTimeout(showLoad, 0);
    else window.addEventListener('load', () => setTimeout(showLoad, 0));

    // types a line, waits, erases it, then moves to the next
    let li = 0, ci = LINES[0].length, erasing = true;
    function typeStep() {
        const line = LINES[li];
        if (erasing) {
            type.textContent = line.slice(0, --ci);
            if (ci <= 0) { erasing = false; li = (li + 1) % LINES.length; }
            typeTimer = setTimeout(typeStep, 26);
        } else {
            const next = LINES[li];
            type.textContent = next.slice(0, ++ci);
            if (ci >= next.length) { erasing = true; typeTimer = setTimeout(typeStep, 2400); return; }
            typeTimer = setTimeout(typeStep, 58);
        }
    }

    function stop() {
        timers.forEach(clearInterval);
        timers = [];
        clearTimeout(typeTimer);
        typeTimer = null;
    }

    function update() {
        stop();
        if (!desktop.matches) return;
        tick();
        hex.textContent = randomHex();
        const run = onScreen && !document.hidden;
        bar.classList.toggle('is-paused', !run);
        if (!run) return;
        timers.push(setInterval(tick, 1000));
        if (!reduceMotion.matches) {
            timers.push(setInterval(() => { hex.textContent = randomHex(); }, 900));
            typeTimer = setTimeout(typeStep, 2400);
        }
    }

    if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => {
            onScreen = entries[0].isIntersecting;
            update();
        }).observe(bar);
    } else {
        onScreen = true;
    }
    document.addEventListener('visibilitychange', update);
    desktop.addEventListener('change', update);
    update();
})();
