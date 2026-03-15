const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  // {
  //   id: "trash",
  //   name: "Archive", // was "Trash"
  //   icon: "trash.png",
  //   canOpen: false,
  // },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "State Management",
    items: ["Zustand", "Stan.js"],
  },
  {
    category: "Data & Forms",
    items: ["TanStack Query", "Formik", "Yup", "Zod"],
  },
  {
    category: "Charts",
    items: ["Recharts"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Vercel"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/M-Ebad003",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/muhammad-ebad-39a944285/",
  },
  {
    id: 3,
    text: "Upwork",
    icon: "/icons/upwork.svg.png",
    bg: "#f4656b",
    link: "https://www.upwork.com/freelancers/~01a5af7476568dc2bd",
  }
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Criterion Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] right-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Criterion Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Criterion real estate landing page is a clean, modern platform designed to showcase premium properties with clarity and impact.",
            "Rather than feeling like a typical property listing site, it focuses on strong visuals, clear calls-to-action, and a smooth user journey.",
            "It gives visitors the feel of stepping into a high-end real estate experience—right from their screen.",
            "Built with Next.js and Tailwind CSS, the site delivers fast performance, responsive layouts, and a polished, trustworthy look.",
          ],
        },
        {
          id: 2,
          name: "criterion.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://criterion-dun.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "criterion.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Brainwave Landing Page",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[10vh] left-7",
      children: [
        {
          id: 1,
          name: "Brainwave Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "The Brainwave landing page showcases an AI-powered chat platform with a modern and engaging design.",
            "It focuses on clear messaging, smooth animations, and strong visual hierarchy to explain the product effortlessly.",
            "Rather than feeling static, the page creates an interactive, futuristic experience that highlights AI capabilities.",
            "Built with Next.js and Tailwind CSS, it delivers fast load times, responsive layouts, and a polished UI.",
          ],

        },
        {
          id: 2,
          name: "brainwave.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://brain-wave-phi-lime.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "brainwave.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Multi-Tenant Admin System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Multi-Tenant Admin System.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Multi-Tenant Gym Admin System is a centralized platform designed to manage multiple gyms through a single, unified interface.",
            "Each gym owner has access to their own members, staff, schedules, and payments, with complete data isolation.",
            "Instead of separate systems for every location, it provides a streamlined dashboard tailored for daily gym operations.",
            "Built with modern web technologies, the system delivers scalability, security, and a clean, easy-to-use admin experience.",
          ],

        },
        // {
        //   id: 2,
        //   name: "food-delivery-app.com",
        //   icon: "/images/safari.png",
        //   kind: "file",
        //   fileType: "url",
        //   href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
        //   position: "top-10 right-20",
        // },
        {
          id: 4,
          name: "multi-tenant-admin-system.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/ebad.jpeg",
    },
    // {
    //   id: 2,
    //   name: "casual-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-28 right-72",
    //   imageUrl: "/images/adrian-2.jpg",
    // },
    // {
    //   id: 3,
    //   name: "conference-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "/images/adrian-3.jpeg",
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      // image: "/images/ebad.jpeg",
      description: [
        "Hey! I’m Ebad 👋, a frontend-focused full-stack developer who builds sleek, high-performing websites and landing pages that don’t just look good—they work flawlessly.",
        "I specialize in JavaScript, React, Next.js, and love crafting smooth, reusable UI components. Clean code and great UX are my jam.",
        "I’ve deployed 30+ apps on Vercel and built multi-tenant front-end projects, so I know how to ship things that actually scale.",
        "Off work, I’m chasing pixels, coffee, games, and gadgets I probably don’t need 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };