// ===== Portfolio Carousel (desktop + mobile) =====
// Renders the "View Our Work" 3D project drum (Three.js) and everything
// that rotates it. Mobile uses swipe-drag only; three more input methods
// are added on top for desktop (hidden via CSS at <769px, so they exist
// here but simply never trigger on mobile):
//   1. Canvas drag       - works on both mobile and desktop (touch + mouse)
//   2. Arrow buttons      - .sphere-arrow--left / .sphere-arrow--right
//   3. Scrub bar handle   - #sphereScrubHandle, drag to rotate proportionally
// All three desktop-only input paths funnel through cancelOtherRotation()
// below so they never fight each other mid-rotation.
(function() {
        const projects = [
            { title:"Local Flower Shop", category:"Small Business", image:"floral_shop.jpg", link:"https://tlz124.github.io/Watsons-Flowers/" },
            { title:"Mexican Restaurant", category:"Food & Beverage", image:"mexican_restaurant.jpg", link:"https://tlz124.github.io/restaurant/" },
            { title:"Modern Dental Office", category:"Healthcare", image:"dental_office.jpg", link:"https://tlz124.github.io/dental-office-website/" },
            { title:"Architecture Firm", category:"Professional Services", image:"architecture_firm.jpg", link:"https://tlz124.github.io/architecture-essential/" },
            { title:"K-12 School", category:"Education", image:"school_website.jpg", link:"https://tlz124.github.io/school/" },
            { title:"Nonprofit Organization", category:"Nonprofit", image:"non_profit_organization.jpg", link:"https://tlz124.github.io/nonprofit/" },
            { title:"Beauty Supply Store", category:"Retail", image:"beauty_supply_store.jpg", link:"https://tlz124.github.io/Beauty" },
            { title:"Corporate Law Firm", category:"Professional Services", image:"law_firm.jpg", link:"https://tlz124.github.io/legal" },
        ];

        const canvas = document.getElementById('portfolioSphere');
        if (!canvas) return;
        const cont = canvas.parentElement;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
        camera.position.set(0, 0, 8);

        scene.add(new THREE.AmbientLight(0xffffff, 0.9));
        const dl1 = new THREE.DirectionalLight(0xd4a5ff, 2.5);
        dl1.position.set(0, 2, 8); scene.add(dl1);
        const dl2 = new THREE.DirectionalLight(0xffffff, 1.0);
        dl2.position.set(-5, 0, 3); scene.add(dl2);
        const dl3 = new THREE.DirectionalLight(0xffffff, 1.0);
        dl3.position.set(5, 0, 3); scene.add(dl3);

        const group = new THREE.Group();
        scene.add(group);

        const n = projects.length;
        const panelW = 2.1;
        const R = (panelW * n) / (2 * Math.PI);
        const panelH = 3.2;
        const faceMeshes = [];

        function makeFallbackTex(p) {
            const c = document.createElement('canvas');
            c.width = 300; c.height = 560;
            const ctx = c.getContext('2d');
            ctx.fillStyle = '#1a0a2e';
            ctx.fillRect(0, 0, 300, 560);
            addLabel(ctx, p);
            return new THREE.CanvasTexture(c);
        }

        function addLabel(ctx, p) {
            ctx.fillStyle = 'rgba(0,0,0,0.72)';
            ctx.fillRect(0, 440, 300, 120);
            ctx.fillStyle = '#9b30d4';
            ctx.fillRect(0, 440, 300, 3);
            ctx.fillStyle = '#d4a5ff';
            ctx.font = 'bold 13px sans-serif';
            ctx.fillText(p.category.toUpperCase(), 14, 468);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 22px sans-serif';
            const words = p.title.split(' ');
            let line = '', y = 500;
            words.forEach(w => {
                const t = line + w + ' ';
                if (ctx.measureText(t).width > 272 && line) { ctx.fillText(line.trim(), 14, y); y += 26; line = w + ' '; }
                else line = t;
            });
            ctx.fillText(line.trim(), 14, y);
        }  
    
        projects.forEach((p, i) => {
            const angle = (2 * Math.PI / n) * i;
            const x = R * Math.sin(angle);
            const z = R * Math.cos(angle);
            const geo = new THREE.PlaneGeometry(panelW, panelH);
            const mat = new THREE.MeshStandardMaterial({
                map: makeFallbackTex(p),
                side: THREE.FrontSide,
                roughness: 0.3,
                metalness: 0.1,
            });
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(x, 0, z);
            mesh.rotation.y = angle;
            mesh.userData = { project: p };
            group.add(mesh);
            faceMeshes.push(mesh);

            // Load real image
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => {
                const c = document.createElement('canvas');
                c.width = 300; c.height = 560;
                const ctx = c.getContext('2d');
                // Crop top of restaurant photo to remove white sliver
                if (p.title === 'Mexican Restaurant') {
                    const cropTop = img.height * 0.12;
                    ctx.drawImage(img, 0, cropTop, img.width, img.height - cropTop, 0, 0, 300, 440);
                } else {
                    ctx.drawImage(img, 0, 0, 300, 440);
                }
                addLabel(ctx, p);
                const tex = new THREE.CanvasTexture(c);
                mesh.material.map = tex;
                mesh.material.needsUpdate = true;
            };
            img.src = p.image;
        });

        // Caps
        const capGeo = new THREE.CircleGeometry(R, n);
        const capMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
        const topCap = new THREE.Mesh(capGeo, capMat);
        topCap.rotation.x = -Math.PI / 2; topCap.position.y = panelH / 2; group.add(topCap);
        const botCap = new THREE.Mesh(capGeo, capMat.clone());
        botCap.rotation.x = Math.PI / 2; botCap.position.y = -panelH / 2; group.add(botCap);

        // Resize
        function resize() {
            const w = cont.clientWidth;
            const h = cont.clientHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        }
        resize();
        window.addEventListener('resize', resize);

        // Drag + click
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        // ----- Shared rotation state -----
        // Four input methods can rotate this drum: dragging the canvas
        // directly, the two arrow buttons, and the scrub bar handle.
        // Only one should ever be "in control" at a time, so every input
        // method calls cancelOtherRotation() the instant it takes over,
        // clearing whatever the others were doing. This is the single
        // place that logic lives, instead of being repeated per input.
        let dragging = false, px = 0, vx = 0;
        let easeTarget = null;
        let scrubbing = false;

        function cancelOtherRotation() {
            dragging = false;
            vx = 0;
            easeTarget = null;
            scrubbing = false;
        }

        function getX(e) { return e.touches ? e.touches[0].clientX : e.clientX; }

        canvas.addEventListener('mousedown', e => { cancelOtherRotation(); dragging=true; px=getX(e); canvas.style.cursor='grabbing'; });
        canvas.addEventListener('touchstart', e => { cancelOtherRotation(); dragging=true; px=getX(e); e.preventDefault(); }, { passive:false });

        window.addEventListener('mousemove', e => {
            if (!dragging) return;
            const cx=getX(e); vx=(cx-px)*0.007; group.rotation.y+=vx; px=cx;
        });
        window.addEventListener('touchmove', e => {
            if (!dragging) return;
            e.preventDefault();
            const cx=getX(e); vx=(cx-px)*0.007; group.rotation.y+=vx; px=cx;
        }, { passive:false });

        window.addEventListener('mouseup', e => {
            if (!dragging) return; dragging=false; canvas.style.cursor='grab';
            if (Math.abs(vx) < 0.002) {
                const rect=canvas.getBoundingClientRect();
                mouse.x=((e.clientX-rect.left)/rect.width)*2-1;
                mouse.y=-((e.clientY-rect.top)/rect.height)*2+1;
                doClick();
            }
        });
        window.addEventListener('touchend', e => {
            if (!dragging) return; dragging=false;
            if (Math.abs(vx) < 0.001) {
                const t=e.changedTouches[0];
                const rect=canvas.getBoundingClientRect();
                mouse.x=((t.clientX-rect.left)/rect.width)*2-1;
                mouse.y=-((t.clientY-rect.top)/rect.height)*2+1;
                doClick();
            }
        });

        function doClick() {
            raycaster.setFromCamera(mouse, camera);
            const hits = raycaster.intersectObjects(faceMeshes);
            if (hits.length) {
                const link = hits[0].object.userData.project.link;
                if (link) window.open(link, '_blank');
            }
        }

        // Desktop arrow buttons: step to the next/previous panel with a
        // smooth eased rotation.
        const step = (2 * Math.PI) / n;
        const leftArrow = document.querySelector('.sphere-arrow--left');
        const rightArrow = document.querySelector('.sphere-arrow--right');
        function goToStep(direction) {
            const wasEasing = easeTarget !== null;
            const base = wasEasing ? easeTarget : group.rotation.y;
            cancelOtherRotation();
            easeTarget = base + direction * step;
        }
        if (leftArrow) leftArrow.addEventListener('click', () => goToStep(-1));
        if (rightArrow) rightArrow.addEventListener('click', () => goToStep(1));

        // Scrub bar: dragging the handle rotates the drum proportionally
        // to how far it's dragged.
        const scrubHandle = document.getElementById('sphereScrubHandle');
        const scrubTrack = document.getElementById('sphereScrubTrack');
        if (scrubHandle && scrubTrack) {
            const trackW = 280, handleW = 40;
            let scrubLastX = 0, handleX = (trackW - handleW) / 2;
            scrubHandle.style.left = handleX + 'px';

            scrubHandle.addEventListener('pointerdown', e => {
                cancelOtherRotation();
                scrubbing = true;
                scrubLastX = e.clientX;
                scrubHandle.setPointerCapture(e.pointerId);
            });
            scrubHandle.addEventListener('pointermove', e => {
                if (!scrubbing) return;
                const dx = e.clientX - scrubLastX;
                handleX = Math.max(0, Math.min(trackW - handleW, handleX + dx));
                scrubHandle.style.left = handleX + 'px';
                group.rotation.y += dx * 0.018;
                scrubLastX = e.clientX;
            });
            scrubHandle.addEventListener('pointerup', () => { scrubbing = false; });
        }

		let lastCenterIndex = null;

        function animate() {
            requestAnimationFrame(animate);
            if (easeTarget !== null) {
                group.rotation.y += (easeTarget - group.rotation.y) * 0.18;
                if (Math.abs(easeTarget - group.rotation.y) < 0.001) {
                    group.rotation.y = easeTarget;
                    easeTarget = null;
                }
            } else if (!dragging) {
                vx *= 0.92; group.rotation.y += vx;
            }

            // Haptic feedback when a panel crosses front-center
            const normalized = ((-group.rotation.y % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
            const centerIndex = Math.round(normalized / step) % n;
            if (centerIndex !== lastCenterIndex) {
                lastCenterIndex = centerIndex;
                if (navigator.vibrate) navigator.vibrate(10);
            }

            renderer.render(scene, camera);
        }
        animate();
    })();
