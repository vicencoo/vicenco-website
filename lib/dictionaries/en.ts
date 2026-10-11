import { site } from "../site";

// The company name comes from lib/site.ts — change it there and every text updates.
const N = site.name;

export const en = {
  meta: {
    title: `${N} — Websites, Software & Digital Products`,
    description: `${N} is a digital studio that designs and develops websites, custom software and online stores — from the first idea to launch and beyond. In English and Albanian.`,
  },
  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    about: "About",
    contact: "Contact",
    cta: "Start a project",
    menu: "Menu",
    close: "Close",
  },
  pages: {
    services:
      "Websites, custom software, online stores, UI/UX design and ongoing support — everything a business needs to grow online.",
    work: "Live projects for businesses across industries — each one designed and developed from scratch.",
    about: `${N} is a detail-driven digital studio building websites and software that move businesses forward.`,
    contact:
      "Tell us about your project — we reply within 24 hours with ideas and next steps.",
  },
  more: {
    services: "Explore all services",
    work: "View all work",
    about: "More about us",
  },
  cta: {
    title: "Have a project in mind?",
    titleEm: "Let's talk.",
    lead: "Free consultation, a clear proposal and a reply within 24 hours.",
    button: "Start your project",
  },
  about: {
    eyebrow: "About",
    title: "A digital studio,",
    titleEm: "built on craft.",
    lead: `${N} designs and develops websites, software and online stores for businesses that want a digital presence as strong as the work behind it.`,
    approachTitle: "How we work",
    valuesTitle: "What you can expect",
  },
  hero: {
    eyebrow: "Web & software studio",
    titleA: "Websites & software,",
    titleB: "crafted like",
    titleEm: "fine objects.",
    lead: `${N} designs and develops custom websites, web applications and online stores — from the first idea to launch and beyond — for businesses that want to stand out.`,
    primary: "Start your project",
    secondary: "See the work",
    scroll: "Scroll",
  },
  marquee: [
    "Websites",
    "Web applications",
    "Custom software",
    "E-commerce",
    "Admin dashboards",
    "UI / UX design",
    "Booking systems",
    "SEO",
  ],
  services: {
    eyebrow: "Services",
    title: "Everything your business needs",
    titleEm: "online.",
    lead: `We are with you from the first sketch to launch and beyond. ${N} handles strategy, design, development and support — one partner accountable for the whole result.`,
    items: [
      {
        title: "Professional Websites",
        text: "Custom business and brand websites with refined design, clear structure and fast performance on every device.",
        tags: ["Custom design", "Responsive", "Easy to edit"],
      },
      {
        title: "Web Applications & Software",
        text: "Custom platforms, admin panels, client portals, booking and management systems — built around how your business actually works.",
        tags: ["Dashboards", "Admin panels", "Integrations"],
      },
      {
        title: "E-commerce",
        text: "Online stores that sell — from new shops to large catalogs, with smooth checkout, payments, inventory and custom features.",
        tags: ["Online stores", "Payments", "Catalog"],
      },
      {
        title: "UI / UX Design",
        text: "Interfaces designed with intent: clear hierarchy, considered typography and experiences people enjoy using.",
        tags: ["Wireframes", "Prototypes", "Design systems"],
      },
      {
        title: "Projects from Zero",
        text: "Have an idea but no starting point? We turn it into a clear plan, define the features and build a first version ready for real users.",
        tags: ["Strategy", "Planning", "MVP"],
      },
      {
        title: "Support & Growth",
        text: "Hosting, security, SEO, updates and new features after launch, so your product keeps improving.",
        tags: ["Hosting", "SEO", "Support"],
      },
    ],
  },
  work: {
    eyebrow: "Selected work",
    title: "Built with",
    titleEm: "obsession.",
    lead: "Live websites and platforms for businesses across industries — each one designed and developed from scratch.",
    view: "View project",
    items: [
      {
        name: "Trio Travel",
        category: "Travel · Website",
        text: "Travel agency website with tour packages, flights and property listings, plus an admin panel to manage it all.",
        year: "Live",
        url: "https://www.triotravel.al/",
        image: "/work/triotravel-platform.webp",
      },
      {
        name: "OMW — On My Way",
        category: "Fuel stations · Website",
        text: "Fuel-station network website with a station finder and a dashboard for updating fuel prices at every station.",
        year: "Live",
        url: "https://www.omw.al/",
        image: "/work/omw-platform.webp",
      },
      {
        name: "Zoi Villa Residence",
        category: "Real estate · Website",
        text: "Bilingual showcase for a private residential community of modern apartments and exclusive villas.",
        year: "Live",
        url: "https://www.zoi-villa.al/",
        image: "/work/zoi-villa.webp",
      },
      {
        name: "Lotus Dental Clinic",
        category: "Healthcare · Website",
        text: "Dental clinic website with services, gallery, patient reviews and appointment booking.",
        year: "Live",
        url: "https://www.lotusdentalclinic.al/",
        image: "/work/lotusdentalclinic.webp",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "From idea to launch,",
    titleEm: "without friction.",
    step: "Step",
    steps: [
      {
        title: "Discover",
        text: "We talk about your goals, audience and vision, then define the scope, timeline and a clear proposal.",
      },
      {
        title: "Design",
        text: "Structure, layouts and a high-fidelity design you approve before development begins.",
      },
      {
        title: "Develop",
        text: "Clean, modern code — responsive, secure and fast — with regular previews so you can follow the progress.",
      },
      {
        title: "Launch & Grow",
        text: "Domain, hosting, SEO and analytics set up. Then ongoing support as your business grows.",
      },
    ],
  },
  manifesto: {
    quote:
      "Your website is the first handshake with every client. It should feel",
    quoteEm: "unforgettable.",
    values: [
      {
        title: "Direct collaboration",
        text: "You talk directly with us — no middlemen, no lost messages.",
      },
      {
        title: "Detail-focused",
        text: "Every page, interaction and millisecond is considered.",
      },
      {
        title: "Built to last",
        text: "Modern, reliable technology that stays fast, secure and easy to grow.",
      },
      {
        title: "Transparent",
        text: "Clear pricing, clear timelines, no surprises.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions,",
    titleEm: "answered.",
    items: [
      {
        q: "How long does a project take?",
        a: "A smaller website usually takes 1–2 weeks; a complete website 3–5 weeks. Custom software and online stores depend on scope — you'll receive a precise timeline with the proposal.",
      },
      {
        q: "Will I be able to edit the content myself?",
        a: "Yes. Projects can include an easy-to-use admin panel, so you can update text, images, products and prices without touching code.",
      },
      {
        q: "Can you take over an existing project?",
        a: "Yes. We can improve, redesign or extend an existing website, store or system — or rebuild it from scratch when that's the better choice.",
      },
      {
        q: "Do you handle domain and hosting?",
        a: "Absolutely. We can set up your domain, professional email, hosting and SSL, or work with what you already have.",
      },
      {
        q: "Do you work with clients outside Albania?",
        a: "Yes — we work remotely with clients everywhere, in English or Albanian.",
      },
      {
        q: "How does payment work?",
        a: "Typically 50% to start and 50% at launch. For larger projects, payments can be split by milestones.",
      },
      {
        q: "What happens after launch?",
        a: "Support is included with every package, with optional monthly plans for updates, backups and new features.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's create something",
    titleEm: "remarkable.",
    promises: [
      "Free consultation",
      "Reply within 24 hours",
      "Clear proposal, timeline and price",
    ],
    name: "Your name",
    email: "Email address",
    type: "Project type",
    types: [
      "Website",
      "Web application / Software",
      "E-commerce",
      "Project from scratch",
      "Redesign",
      "Other",
    ],
    budget: "Budget",
    budgets: ["< €1,000", "€1,000 – €3,000", "€3,000 – €7,000", "€7,000+"],
    message: "Tell us about your project",
    messagePlaceholder:
      "e.g. A website for my business with online booking and an admin panel…",
    send: "Send message",
    sent: "Opening your email app…",
    or: "Or reach us directly",
    emailLabel: "Email",
    whatsapp: "WhatsApp",
    whatsappCta: "Chat with us on WhatsApp",
    instagram: "Instagram",
    subject: "New project inquiry",
  },
  legal: {
    updated: "Last updated",
    date: "10 October 2026",
    toc: "On this page",
    privacy: {
      label: "Privacy Policy",
      title: "Privacy",
      titleEm: "Policy.",
      lead: "How we collect, use and protect your information when you visit this website or contact us.",
      sections: [
        {
          title: "Who we are",
          body: [
            `${N} is a digital studio that designs and develops websites, software and online stores. This policy explains what personal information we collect when you visit this website or contact us, and how we use it.`,
            `For any question about this policy, you can reach us at ${site.email}.`,
          ],
        },
        {
          title: "Information we collect",
          body: [
            "Information you send us: when you use the contact form, write to us by email or message us on WhatsApp or Instagram, we receive the details you choose to share — such as your name, email address, phone number, project type, budget and message.",
            "Language preference: the website remembers the language you select (English or Albanian) in your browser's local storage. It stays on your device and is not sent to us.",
            "Technical data: like most websites, our hosting provider may automatically record basic technical information such as IP address, browser type and the pages requested, for security and to keep the site running.",
          ],
        },
        {
          title: "How we use your information",
          body: [
            "We use the information you send only to reply to your inquiry, prepare proposals, deliver the services you request and communicate with you about your project. We do not use it for marketing without your consent, and we never sell it.",
          ],
        },
        {
          title: "The contact form",
          body: [
            "The contact form does not store your message on our servers. When you press send, it opens your own email app with the message ready, and nothing is sent until you send that email yourself.",
          ],
        },
        {
          title: "Cookies and tracking",
          body: [
            "This website does not use advertising or analytics cookies and does not track you across other websites. Fonts and images are served from our own website.",
          ],
        },
        {
          title: "Sharing your information",
          body: [
            "We share personal information only when needed to provide our services — for example with email, hosting or communication providers (such as WhatsApp) that process it on our behalf — or when required by law. Messages sent through WhatsApp or Instagram are also subject to those platforms' own privacy policies.",
          ],
        },
        {
          title: "How long we keep it",
          body: [
            "We keep inquiries and project correspondence for as long as needed to handle your request and our work together, and to meet legal or accounting obligations. After that, they are deleted.",
          ],
        },
        {
          title: "Your rights",
          body: [
            `You can ask us at any time to access, correct or delete the personal information we hold about you, or to stop using it. Write to us at ${site.email} and we will respond within a reasonable time, in line with the data protection laws that apply to you.`,
          ],
        },
        {
          title: "Changes to this policy",
          body: [
            "We may update this policy from time to time. The latest version is always available on this page, with the date of the last update shown above.",
          ],
        },
      ],
    },
    terms: {
      label: "Terms of Service",
      title: "Terms of",
      titleEm: "Service.",
      lead: "The rules that apply when you use this website and when you work with us.",
      sections: [
        {
          title: "About these terms",
          body: [
            `These terms apply to the use of this website and to the services ${N} provides — including websites, web applications, software, online stores, design and support. By using the website or working with us, you agree to these terms.`,
            "The specific details of each project are set out in its proposal or agreement, which takes priority if it differs from these terms.",
          ],
        },
        {
          title: "Proposals and pricing",
          body: [
            "Every project starts with a written proposal describing the scope, timeline and price. Work begins once the proposal is accepted. Requests outside the agreed scope are quoted separately before any extra work is done.",
          ],
        },
        {
          title: "Payments",
          body: [
            "Unless agreed otherwise, payment is made 50% before work begins and 50% at launch. Larger projects may be split into milestones. Late payments may pause the project and move the delivery date.",
          ],
        },
        {
          title: "Your responsibilities",
          body: [
            "To keep the project on schedule, you agree to provide content (texts, images, logos, product information), access and feedback on time, and to make sure you have the rights to any material you give us. Delays in feedback or content may extend the timeline.",
          ],
        },
        {
          title: "Timelines and delivery",
          body: [
            "Timelines in the proposal are estimates based on the agreed scope and timely feedback. We keep you informed throughout the project and let you know straight away if anything affects the schedule.",
          ],
        },
        {
          title: "Ownership and portfolio",
          body: [
            "Once the project has been paid in full, you own the final design, content and code created specifically for you. Third-party tools, libraries, fonts, themes or plugins remain subject to their own licences.",
            "Unless you ask us not to, we may show the finished project in our portfolio.",
          ],
        },
        {
          title: "Third-party services",
          body: [
            "Projects often rely on services such as hosting, domains, payment providers or e-commerce platforms. Their costs, availability and terms are set by those providers, and we are not responsible for their outages or changes — although we will help you resolve any issues.",
          ],
        },
        {
          title: "Support and warranty",
          body: [
            "After launch, we fix bugs in the work we delivered during the support period included in your package. Ongoing updates, new features and maintenance are available through optional monthly plans or separate quotes.",
          ],
        },
        {
          title: "Limitation of liability",
          body: [
            "We build every project with care, but we cannot guarantee that a website or system will be completely free of interruptions or errors. To the extent permitted by law, our total liability for a project is limited to the amount paid for that project, and we are not liable for indirect losses such as lost profits or data.",
          ],
        },
        {
          title: "Ending a project",
          body: [
            "Either side may end a project with written notice. In that case, you pay for the work completed up to that point, and we hand over the finished parts of the work once payment is settled.",
          ],
        },
        {
          title: "Use of this website",
          body: [
            `The content of this website — including texts, design and project images — belongs to ${N} or its clients and may not be copied or reused without permission. Links to other websites are provided for convenience, and we are not responsible for their content.`,
          ],
        },
        {
          title: "Governing law and changes",
          body: [
            `These terms are governed by the laws of the Republic of Albania. We may update them from time to time; the latest version is always published on this page. For any question, contact us at ${site.email}.`,
          ],
        },
      ],
    },
  },
  footer: {
    tagline:
      "Websites, software and online stores, delivered through a clear process and direct communication.",
    company: "Company",
    location: "Albania",
    rights: "All rights reserved.",
    made: `Designed & developed by ${N}`,
  },
};

export type Dictionary = typeof en;
