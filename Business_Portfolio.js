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
// The hero has two background effects (the node network and the flowing
// lines) and a Nodes / Lines switch. Each effect registers itself here so
// the switch can turn it on and off.
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
// cards. For now only Non E-Commerce has monthly cards (Essential and
// Essential Plus), so the switch is hidden while E-Commerce is selected.
(function() {
    const wrap = document.getElementById('billingWrap');
    const onceBtn = document.getElementById('payOnceBtn');
    const monthlyBtn = document.getElementById('monthlyBtn');
    const monthlyGrid = document.getElementById('nonEcomMonthly');
    if (!wrap || !onceBtn || !monthlyBtn || !monthlyGrid) return;
    const onceNote = document.getElementById('payOnceNote');
    const monthlyNote = document.getElementById('monthlyNote');
    let monthly = false;
    let ecom = false;

    function apply() {
        const showMonthly = monthly && !ecom;
        wrap.style.display = ecom ? 'none' : '';
        if (nonEcomPricing) nonEcomPricing.style.display = ecom || showMonthly ? 'none' : '';
        monthlyGrid.style.display = showMonthly ? '' : 'none';
        if (onceNote) onceNote.style.display = showMonthly ? 'none' : '';
        if (monthlyNote) monthlyNote.style.display = showMonthly ? '' : 'none';
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

// ===== Hero "Nodes | Lines" Switch (desktop and mobile) =====
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
        if (saved === 'nodes' || saved === 'lines') return saved;
        return desktop.matches ? 'lines' : 'nodes';
    }

    function apply() {
        const fx = current();
        hero.dataset.fx = fx;   // CSS shows the matching canvas
        buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.fx === fx)));
        if (flechaHeroFx.nodes) flechaHeroFx.nodes.setActive(fx === 'nodes');
        if (flechaHeroFx.lines) flechaHeroFx.lines.setActive(fx === 'lines');
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
}

// rect of an element relative to the section
function flechaRel(r, s) {
    return { x: r.left - s.left, y: r.top - s.top, w: r.width, h: r.height };
}

// "Welcome to Flecha Web Design": keep the title words and the paragraph clear
(function() {
    const section = document.querySelector('.company-intro');
    if (!section) return;
    flechaPlusGrid(section, document.getElementById('introPlus'), function(s) {
        const holes = [];
        const title = section.querySelector('.section-title');
        if (title) {
            // the title box is full width, so measure just the words
            const range = document.createRange();
            range.selectNodeContents(title);
            holes.push(flechaRel(range.getBoundingClientRect(), s));
        }
        const text = section.querySelector('.intro-text');
        if (text) holes.push(flechaRel(text.getBoundingClientRect(), s));
        return holes;
    });
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
