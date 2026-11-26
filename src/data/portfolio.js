export const portfolioData = {
    profile: {
        name: "KUMAR HARSH RAJ",
        role: "Web Developer",
        bio: "I build modern, fast, and responsive websites using React, JavaScript, and the latest web technologies to help businesses grow online.",
        status: "Available for Work",
        location: "Global / remote",
        timezone: "UTC+5:30",
        whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "+919905388836",
        email: import.meta.env.VITE_EMAIL || "contact@marminmedia.com",
        instagram: import.meta.env.VITE_INSTAGRAM_PROFILE || "https://instagram.com",
        resume: import.meta.env.VITE_RESUME_PATH || "/resume.pdf",
        portrait: "/sachin_pandey.jpg"
    },
    skills: [
        { name: "React", level: "95%", icon: "⚛️" },
        { name: "Node.js", level: "85%", icon: "🟢" },
        { name: "Express", level: "85%", icon: "🚂" },
        { name: "MongoDB", level: "90%", icon: "🍃" },
        { name: "AWS", level: "70%", icon: "☁️" },
        { name: "GitHub", level: "90%", icon: "🐙" },
        { name: "Tailwind", level: "95%", icon: "🎨" },
        { name: "Three.js", level: "90%", icon: "🧊" },
        { name: "GSAP", level: "85%", icon: "🪄" },
        { name: "Framer", level: "90%", icon: "🎬" }
    ],
    about: [
        {
            id: "bio",
            title: "Who I Am",
            content: "As a Full Stack Developer, I don't just write code; I architect solutions. I specialize in building robust MERN stack applications that are highly scalable on the backend and incredibly engaging on the frontend. My focus is always on solving real-world problems through clean, efficient code.",
            className: "md:col-span-2 lg:col-span-2"
        },
        {
            id: "tech",
            title: "Core Expertise",
            content: "Mastering MongoDB, Express, React, and Node.js to deliver end-to-end web applications with seamless, high-performance user experiences.",
            className: "md:col-span-1 lg:col-span-1"
        },
        {
            id: "contact",
            title: "Let's Talk",
            content: "Currently open to full-time roles and exciting freelance opportunities. Let's build something great together.",
            className: "md:col-span-1 lg:col-span-1"
        },
        {
            id: "certs",
            title: "Experience",
            content: "Proven track record of delivering secure, high-performance web applications for startups and global clients.",
            className: "md:col-span-1 lg:col-span-1"
        },
        {
            id: "edu",
            title: "Education",
            content: "Pursuing BSc from IIT Patna in Computer Science and Data Analytics. Bridging academic rigor with practical engineering.",
            className: "md:col-span-2 lg:col-span-1"
        },
    ],
    services: [
        {
            id: "01",
            title: "3D Development",
            desc: "Creating immersive 3D web experiences using Three.js and WebGL. We push the boundaries of browser-based graphics.",
            features: ["Custom Shaders", "Procedural Geometry", "Performance Optimization"],
            tools: ["Three.js", "GLSL", "Blender"]
        },
        {
            id: "02",
            title: "UI/UX Design",
            desc: "Designing modern, high-performance interfaces with a focus on usability and motion-driven storytelling.",
            features: ["Interactive Prototyping", "Design Systems", "Motion Design"],
            tools: ["Figma", "Framer", "Adobe CC"]
        },
        {
            id: "03",
            title: "Full Stack",
            desc: "Building scalable backend architectures and reactive frontends that handle complex data with ease.",
            features: ["Real-time Systems", "API Architecture", "Cloud Deployment"],
            tools: ["React", "Node.js", "MongoDB"]
        }
    ],
    projects: [
        {
            title: "Hotel Maple Inn",
            category: "Hospitality",
            year: "2026",
            role: "Web Developer",
            color: "#f472b6",
            images: ["/maple_1.png", "/maple_2.png", "/maple_3.png"],
            webLink: "https://hotelmapleinn.com/",
            githubRepo: "",
            description: "I developed this premium hospitality website for Hotel Maple Inn. It showcases their luxury rooms and banquet venues with a seamless booking interface and elegant design.",
            stack: ["React", "Node.js", "TailwindCSS", "Framer Motion"]
        },
        {
            title: "Modish Streetwear",
            category: "E-Commerce",
            year: "2026",
            role: "Web Developer",
            color: "#8b5cf6",
            images: ["/modishh_1.png", "/modishh_2.png", "/modshh_3.png"],
            webLink: "https://modishh.co.in/",
            githubRepo: "https://github.com/kumarharshraj0/mern-eccomerse-clothing-web-app.git",
            description: "I developed this modern streetwear e-commerce platform featuring a sleek UI, smooth animations, and a seamless shopping experience for urban fashion.",
            stack: ["React", "Node.js", "MongoDB", "Bcrypt", "TailwindCSS"]
        },
        {
            title: "Astro Pintu Shastri Ji",
            category: "Astrology",
            year: "2026",
            role: "Web Developer",
            color: "#f59e0b",
            images: ["/astro_1.png", "/astro_2.png", "/astro_3.png"],
            webLink: "https://www.astropintuji.com/",
            githubRepo: "",
            description: "I built this spiritual platform for Astro Pintu Shastri Ji, featuring Vedic astrology consultations, personalized horoscope insights, and seamless appointment booking.",
            stack: ["React", "Node.js", "TailwindCSS"]
        },

        {
            title: "Next Shiksha",
            category: "Education",
            year: "2026",
            role: "Full Stack Developer",
            color: "#f472b6",
            images: ["/nextshiksha_3.png", "/nextshiksha_1.png", "/nextshiksha_2.png"],
            webLink: "https://nextshiksha.in/",
            githubRepo: "https://github.com/kumarharshraj0/Elearn-app.git",
            description: "I developed this comprehensive platform for Surat's leading education consultancy. It serves as a digital hub for study abroad guidance, visa consulting, and career counseling with a highly optimized user experience.",
            stack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"]
        },

        {
            title: "NewPulse News Portal",
            category: "Interactive",
            year: "2026",
            role: "News Portal Architect",
            color: "#f59e0b",
            images: ["/newpulse_1.png", "/newpulse_2.png", "/newpulse_3.png"],
            webLink: "https://newpulse.in/",
            githubRepo: "https://github.com/kumarharshraj0/mern-news-portal.git",
            description: "I built this MERN stack news platform to provide fast, real-time updates across various categories. For a smooth user experience, I integrated Firebase for quick and secure Google login.",
            stack: ["React", "Node.js", "MongoDB", "Firebase", "Redux Toolkit"]
        },

        {
            title: "Great Estate",
            category: "web app",
            year: "2026",
            role: "Full Stack Developer",
            color: "#10b981",
            images: ["/greatestate_1.png", "/greatestate_2.png"],
            webLink: "https://greateestate.in",
            githubRepo: "https://github.com/kumarharshraj0/mern-real-estate.git",
            description: "A premium real estate investment platform featuring property collections, ROI tracking, and expert advisory integration.",
            stack: ["React", "Node.js", "MongoDB", "Express", "Chart.js"]
        },
        {
            title: "DermaZestt Skin Clinic",
            category: "HealthTech",
            year: "2026",
            role: "Web Developer",
            color: "#10b981",
            images: ["/dermazestt_1.png", "/dermazestt_2.png", "/dermazestt_3.png"],
            webLink: "https://dermazestt.in/",
            githubRepo: "https://github.com/kumarharshraj0/mern-hcm.git",
            description: "I designed and developed this professional skin clinic website for Dr. K.P. Rai. It features an elegant UI, easy appointment booking, and detailed service sections to enhance the clinic's digital presence.",
            stack: ["React", "Node.js", "TailwindCSS", "Framer Motion"]
        }
    ],
    testimonials: [
        {
            name: "Ananya Singh",
            role: "GROWTH MANAGER",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
            text: "Reliable, professional, and easy to work with. They took the time to understand our business and delivered excellent service."
        },
        {
            name: "Rajesh Kumar",
            role: "FOUNDER & CEO",
            avatar: "https://images.unsplash.com/photo-1649433658557-54cf58577c68?w=150&auto=format&fit=crop&q=80",
            text: "Marmin Media delivers exactly what they promise. Their team is responsive and genuinely cares about client success."
        },
        {
            name: "Priya Sharma",
            role: "MARKETING DIRECTOR",
            avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80",
            text: "Working with them was a smooth experience. They explained everything clearly and made the whole process easy to understand."
        },
        {
            name: "Arjun Patel",
            role: "BUSINESS OWNER",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
            text: "Great communication and attention to detail. Sachin's team is strategic and always thinking of what's best for our brand."
        }
    ],
    faq: [
        {
            q: "How is Marmin Media different from a typical digital marketing agency?",
            a: "Most agencies start with what they want to sell you—more ad spend or boilerplate social posts. We look at the entire picture: your product narrative, market positioning, distribution channels, and unit economics before deciding what needs to happen next."
        },
        {
            q: "What types of businesses do you work with?",
            a: "We partner with high-output founders, consumer brands, creators, and technology companies that are ready to scale, pivot, or command genuine market attention beyond conventional ads."
        },
        {
            q: "What does your distribution strategy involve?",
            a: "Creating remarkable creative is only half the work. We build tailored distribution architectures using paid media, creator networks, organic algorithmic reach, and strategic partnerships to place your message where consumer attention already exists."
        },
        {
            q: "How do you measure marketing success?",
            a: "We connect creative activity directly to tangible business outcomes: qualified customer acquisition, conversion efficiency, retention metrics, and brand equity growth, ensuring every dollar invested is accountable."
        },
        {
            q: "How long does a typical engagement take?",
            a: "Strategic sprints and brand positioning take between 3 to 6 weeks, while comprehensive growth, creative execution, and distribution partnerships are structured on ongoing quarterly retainers."
        },
        {
            q: "How do we get started?",
            a: "Reach out through our contact form or send us an email. We will review your current market standing, identify the bottlenecks, and outline a tailored roadmap for your brand."
        }
    ]
};
