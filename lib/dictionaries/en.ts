import { site, type ServiceCategory } from "../site";

// The company name comes from lib/site.ts — change it there and every text updates.
const N = site.name;

export const en = {
  meta: {
    title: `${N} — Websites, Software & Digital Products`,
    description: `${N} is a digital studio that designs and develops websites, custom software and online stores — from the first idea to launch and beyond. In English, Albanian and Italian.`,
    tagline: "Websites, Software & Digital Products",
    pages: {
      services: "Web Design & Development Services",
      work: "Our Work: Website & Software Projects",
      about: "About Us",
      contact: "Contact Us",
    },
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
    language: "Language",
    allServices: "All services",
    servicesMenu: "Show services",
    megaTitle: "Not sure what you need?",
    megaText: "Tell us about your business and we'll recommend the right mix of services — free.",
    megaCta: "Get free advice",
  },
  pages: {
    services:
      "Websites, custom software, online stores, SEO, Google Ads, marketing and ongoing support — everything a business needs to grow online.",
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
  home: {
    pickLabel: "I need",
    picks: [
      { label: "A website", slug: "website-design" },
      { label: "An online store", slug: "e-commerce" },
      { label: "Custom software", slug: "web-applications" },
      { label: "SEO", slug: "seo" },
      { label: "Google Ads", slug: "google-ads" },
      { label: "Maintenance", slug: "website-maintenance" },
    ],
    showcase: "Recent launches",
    explorerLead: "Pick what you need — every service has its own page with details, FAQ and examples.",
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
    "Google Ads",
    "API integrations",
    "Digital marketing",
  ],
  services: {
    eyebrow: "Services",
    title: "Everything your business needs",
    titleEm: "online.",
    lead: `We are with you from the first sketch to launch and beyond. ${N} handles strategy, design, development and support — one partner accountable for the whole result.`,
    categories: {
      build: { title: "Design & Development", text: "Websites, software and online stores built from scratch." },
      grow: { title: "Marketing & Growth", text: "Get found, reach the right people and turn visitors into clients." },
      care: { title: "Support & Care", text: "Keep everything fast, secure and online after launch." },
    },
    items: [
      {
        slug: "website-design",
        category: "build" as ServiceCategory,
        menu: "Custom sites for brands & businesses",
        title: "Professional Websites",
        text: "Custom business and brand websites with refined design, clear structure and fast performance on every device.",
        tags: ["Custom design", "Responsive", "Easy to edit"],
        metaTitle: "Website Design & Development",
        intro: [
          "Your website is often the first place a client meets your business. We design and build custom websites — not templates — with a clear structure, refined design and fast performance on phones, tablets and desktops.",
          "Every site is built so you can update texts, images and pages yourself, and comes with the essentials for search engines from day one: clean code, fast loading, page titles and descriptions, and a sitemap.",
        ],
        includes: [
          "Custom design based on your brand",
          "Responsive layout for every screen size",
          "Fast loading and modern, secure code",
          "Easy-to-use admin panel for your content",
          "Contact form, WhatsApp and map integration",
          "Basic SEO setup: titles, descriptions, sitemap",
          "Multilingual versions when you need them",
          "Domain, hosting and SSL setup",
        ],
        idealFor: [
          "Companies that need a professional online presence",
          "Restaurants, clinics, hotels and local businesses",
          "Brands replacing an outdated or slow website",
          "Businesses serving clients in more than one language",
        ],
        faq: [
          {
            q: "How long does it take to build a website?",
            a: "A smaller website usually takes 1–2 weeks and a complete business website 3–5 weeks, depending on the number of pages and features. You get a precise timeline with the proposal.",
          },
          {
            q: "Will my website work well on phones?",
            a: "Yes. Every website is designed and tested for phones, tablets and desktops, since most visitors arrive on mobile.",
          },
          {
            q: "Can you redesign my existing website?",
            a: "Yes. We can redesign your current site, keep the content that works and move it to a faster, more modern foundation.",
          },
        ],
      },
      {
        slug: "web-applications",
        category: "build" as ServiceCategory,
        menu: "Dashboards, portals & custom software",
        title: "Web Applications & Software",
        text: "Custom platforms, admin panels, client portals, booking and management systems — built around how your business actually works.",
        tags: ["Dashboards", "Admin panels", "Integrations"],
        metaTitle: "Custom Web Application & Software Development",
        intro: [
          "When spreadsheets, paper or off-the-shelf tools start slowing your team down, custom software helps. We build web applications around the way your business actually works — admin panels, client portals, booking and management systems.",
          "We start by mapping your processes, then design and develop the application step by step, with regular previews so you can test it as it grows. Because it runs in the browser, your team can use it on any device without installing anything.",
        ],
        includes: [
          "Analysis of your processes and requirements",
          "Admin panels and management dashboards",
          "Client portals with secure accounts",
          "Booking, reservation and scheduling systems",
          "User roles and permissions",
          "Integrations with payments, email and other services",
          "Hosting, backups and ongoing support",
        ],
        idealFor: [
          "Businesses managing work in spreadsheets or on paper",
          "Companies that need a custom internal tool",
          "Service businesses taking bookings or requests online",
          "Startups building a new digital product",
        ],
        faq: [
          {
            q: "How much does custom software cost?",
            a: "It depends on the features and complexity. After a free consultation we send a written proposal with the scope, timeline and price, so you know the cost before work begins.",
          },
          {
            q: "Will I own the code?",
            a: "Yes. Once the project is paid in full, you own the design, content and code created specifically for you.",
          },
          {
            q: "Can the application grow later?",
            a: "Yes. We build on modern, reliable technology so new features can be added as your business grows.",
          },
        ],
      },
      {
        slug: "e-commerce",
        category: "build" as ServiceCategory,
        menu: "Online stores built to sell",
        title: "E-commerce",
        text: "Online stores that sell — from new shops to large catalogs, with smooth checkout, payments, inventory and custom features.",
        tags: ["Online stores", "Payments", "Catalog"],
        metaTitle: "E-commerce & Online Store Development",
        intro: [
          "An online store needs more than a product list. We build e-commerce websites that are easy to browse, quick to load and simple to buy from — from new shops with a few products to large catalogs.",
          "You manage products, prices, stock and orders from a clear admin panel, and customers get a smooth checkout on any device. We set up payments, delivery options and the custom features your store needs.",
        ],
        includes: [
          "Custom store design",
          "Product catalog with categories, filters and search",
          "Shopping cart and simple checkout",
          "Online payment integration",
          "Inventory and order management",
          "Discount codes and promotions",
          "Product pages optimized for search engines",
        ],
        idealFor: [
          "Shops that want to start selling online",
          "Businesses moving from social media sales to their own store",
          "Stores with large catalogs that need better management",
          "Brands outgrowing their current e-commerce platform",
        ],
        faq: [
          {
            q: "Which payment methods can my store accept?",
            a: "We integrate the payment providers available in your country, such as card payments and bank transfer, and can add cash on delivery.",
          },
          {
            q: "Can I manage the products myself?",
            a: "Yes. You add and edit products, prices, photos and stock from an easy admin panel, without touching code.",
          },
          {
            q: "Can you move my existing store to a new website?",
            a: "Yes. We can migrate your products and content and build a faster, better-designed store around them.",
          },
        ],
      },
      {
        slug: "ui-ux-design",
        category: "build" as ServiceCategory,
        menu: "Interfaces people enjoy using",
        title: "UI / UX Design",
        text: "Interfaces designed with intent: clear hierarchy, considered typography and experiences people enjoy using.",
        tags: ["Wireframes", "Prototypes", "Design systems"],
        metaTitle: "UI/UX Design for Websites & Apps",
        intro: [
          "Good design is not only how something looks, but how easily people find what they need. We design interfaces with a clear hierarchy, considered typography and flows that guide visitors toward action.",
          "We work from structure to detail: wireframes first, then a high-fidelity design and clickable prototypes you approve before development begins — so there are no surprises later.",
        ],
        includes: [
          "User research and content structure",
          "Wireframes for key pages and flows",
          "High-fidelity visual design",
          "Clickable prototypes",
          "Design systems and component libraries",
          "Design for mobile, tablet and desktop",
        ],
        idealFor: [
          "Products that are hard to use or convert poorly",
          "Startups that need a polished first version",
          "Teams with developers but no designer",
          "Brands refreshing their digital identity",
        ],
        faq: [
          {
            q: "Can you do only the design, without development?",
            a: "Yes. We can deliver the design and prototypes for your own team to build, or handle development as well.",
          },
          {
            q: "What do I receive at the end?",
            a: "Organized design files, a prototype and the components and styles your developers need to build the product consistently.",
          },
          {
            q: "How do you make sure the design works for users?",
            a: "We start from your goals and your users' needs, test the flows in prototypes and refine them with your feedback before development.",
          },
        ],
      },
      {
        slug: "mvp-development",
        category: "build" as ServiceCategory,
        menu: "From idea to a first version",
        title: "Projects from Zero",
        text: "Have an idea but no starting point? We turn it into a clear plan, define the features and build a first version ready for real users.",
        tags: ["Strategy", "Planning", "MVP"],
        metaTitle: "MVP & New Product Development",
        intro: [
          "Many great products start as an idea without a plan. We help you turn that idea into something real: we clarify the goal, define the essential features and plan the work so the budget goes where it matters.",
          "Then we design and build a first version — a minimum viable product (MVP) — ready for real users. You can launch, collect feedback and grow the product with confidence.",
        ],
        includes: [
          "Free consultation to understand your idea",
          "Feature list and priorities for the first version",
          "Technical plan, timeline and budget",
          "Design of the main screens",
          "Development of the first working version",
          "Launch, hosting and analytics setup",
          "Support for the next iterations",
        ],
        idealFor: [
          "Founders with an idea but no technical team",
          "Businesses launching a new digital service",
          "Teams that want to test an idea before a large investment",
          "Projects that need a clear plan before starting",
        ],
        faq: [
          {
            q: "I only have an idea. Is that enough to start?",
            a: "Yes. We start with a conversation, then turn the idea into a written plan with features, timeline and price.",
          },
          {
            q: "What is an MVP?",
            a: "A minimum viable product is the first version with only the features needed to solve the main problem for real users. It lets you launch faster and learn what to build next.",
          },
          {
            q: "Will you keep working with me after launch?",
            a: "Yes. Support is included, and we can keep building new features as the product grows.",
          },
        ],
      },
      {
        slug: "api-integrations",
        category: "build" as ServiceCategory,
        menu: "Payments, CRMs & automated workflows",
        title: "API Integrations & Automation",
        text: "Connect your website or software with payments, CRMs, booking tools and other services — and automate the repetitive work.",
        tags: ["REST APIs", "Webhooks", "Automation"],
        metaTitle: "API Integration & Business Automation",
        intro: [
          "Most businesses use several tools that don't talk to each other — a website, a payment provider, a CRM, spreadsheets, email. We connect them through their APIs, so data moves automatically and your team stops copying it by hand.",
          "We also build custom APIs for your own products, and automations that run in the background: new orders sent to your accounting, leads added to your CRM, confirmations and reminders sent by email or WhatsApp.",
        ],
        includes: [
          "Payment integrations: Stripe, PayPal and local banks",
          "CRM, email marketing and newsletter tools",
          "Booking, calendar and messaging integrations",
          "Custom REST APIs and webhooks for your products",
          "Automated workflows between the tools you already use",
          "Data import, export and synchronization",
          "Secure authentication, logging and error alerts",
          "Clear documentation for every integration",
        ],
        idealFor: [
          "Teams wasting hours copying data between tools",
          "Websites that need payments, bookings or a CRM",
          "Businesses connecting a new platform to existing systems",
          "Products that need their own API for apps or partners",
        ],
        faq: [
          {
            q: "Which services can you integrate?",
            a: "Almost any service that offers an API — payment providers, CRMs, email platforms, calendars, shipping, accounting and more. We first check the service's documentation and confirm what's possible before we start.",
          },
          {
            q: "Can you automate tasks we do manually today?",
            a: "Yes. We map how the task works now, then build an automation that runs it in the background and alerts you if something needs attention.",
          },
          {
            q: "What happens if a connected service changes its API?",
            a: "We build integrations with error logging and alerts, so problems are spotted quickly. With a maintenance plan we keep integrations updated when providers change their APIs.",
          },
        ],
      },
      {
        slug: "seo",
        category: "grow" as ServiceCategory,
        menu: "Get found on Google",
        title: "SEO Optimization",
        text: "Technical SEO, on-page optimization and local search, so the right clients find your business on Google.",
        tags: ["Technical SEO", "Local SEO", "Content"],
        metaTitle: "Professional SEO Services",
        intro: [
          "Being on Google isn't enough — you need to appear when clients search for what you offer. We optimize your website from the inside out: speed, structure, metadata, structured data and content, following Google's guidelines.",
          "As developers, we fix the technical issues many SEO agencies can only report. We start with an audit, build a clear plan around the searches that matter for your business and report progress every month.",
        ],
        includes: [
          "Full SEO audit of your website",
          "Keyword research for your market and languages",
          "Technical SEO: speed, Core Web Vitals, indexing, sitemap",
          "On-page optimization of titles, headings and content",
          "Structured data (schema) for rich search results",
          "Google Business Profile and local SEO",
          "Google Search Console and Analytics setup",
          "Monthly reports with clear next steps",
        ],
        idealFor: [
          "Businesses that are hard to find on Google",
          "Local businesses competing in their city",
          "Websites with traffic that doesn't turn into clients",
          "Brands targeting searches in more than one language",
        ],
        faq: [
          {
            q: "How long does SEO take to show results?",
            a: "Technical fixes can help within weeks, but solid ranking improvements usually take 3–6 months, depending on your website, content and competition.",
          },
          {
            q: "Do you guarantee first place on Google?",
            a: "No one can honestly guarantee specific positions — Google decides rankings. We guarantee the work: a technically sound website, optimized content and transparent monthly reporting.",
          },
          {
            q: "Can you do SEO for a website you didn't build?",
            a: "Yes. We audit the existing website first, then fix technical issues and optimize content, whatever platform it runs on.",
          },
        ],
      },
      {
        slug: "google-ads",
        category: "grow" as ServiceCategory,
        menu: "Search campaigns that bring clients",
        title: "Google Ads",
        text: "Google Ads campaigns set up, tracked and optimized to bring calls, messages and sales — not just clicks.",
        tags: ["Search ads", "Conversion tracking", "Landing pages"],
        metaTitle: "Google Ads Management",
        intro: [
          "Google Ads puts your business at the top of search results the moment someone looks for what you offer. Done well, it brings clients from day one; done poorly, it spends your budget on the wrong clicks.",
          "We set up campaigns around the searches that bring real clients, track every call, form and sale, and optimize them every week. Because we also build websites, we can create landing pages that turn those clicks into inquiries.",
        ],
        includes: [
          "Account and campaign setup",
          "Keyword research and negative keywords",
          "Ad copy written for your clients",
          "Conversion tracking for calls, forms and sales",
          "Search, Performance Max and remarketing campaigns",
          "Landing pages built for conversions",
          "Weekly optimization of bids, keywords and ads",
          "Monthly reports on cost per client",
        ],
        idealFor: [
          "Businesses that need clients quickly",
          "New websites still building their SEO",
          "Ad accounts spending money without clear results",
          "Seasonal offers, launches and promotions",
        ],
        faq: [
          {
            q: "How much budget do I need for Google Ads?",
            a: "It depends on your industry and location. We estimate costs per click for your keywords and recommend a starting budget before any money is spent. The ad budget is paid directly to Google, separate from our management fee.",
          },
          {
            q: "How soon will I see results?",
            a: "Ads can bring visitors on the first day. Campaigns usually need a few weeks of data and optimization to reach a stable cost per client.",
          },
          {
            q: "Do I own the Google Ads account?",
            a: "Yes. The account is created in your name, and you keep full access to it and its data at all times.",
          },
        ],
      },
      {
        slug: "digital-marketing",
        category: "grow" as ServiceCategory,
        menu: "Social ads, email & content",
        title: "Digital Marketing",
        text: "Social media ads, email marketing and content that reach the right people and bring them back to your business.",
        tags: ["Meta ads", "Email", "Content"],
        metaTitle: "Digital Marketing & Social Media Ads",
        intro: [
          "Great products still need to reach the right people. We plan and run digital marketing that fits your goals and budget — from Facebook and Instagram ads to email campaigns and content for your website.",
          "Everything is measured. We connect your campaigns with tracking on your website, so you see which channels bring inquiries and sales, and we put the budget where it works best.",
        ],
        includes: [
          "Marketing strategy and audience research",
          "Facebook, Instagram and TikTok ad campaigns",
          "Meta Pixel and Conversions API setup",
          "Email marketing and automated email flows",
          "Newsletter signup forms and lead magnets",
          "Content for your website and social media",
          "Campaign landing pages",
          "Monthly reports on results and budget",
        ],
        idealFor: [
          "Brands launching a new product or service",
          "Businesses that want more inquiries from social media",
          "Online stores growing their sales and repeat customers",
          "Companies without an in-house marketing team",
        ],
        faq: [
          {
            q: "Which channels should my business use?",
            a: "It depends on where your clients spend time and how they buy. We recommend the channels that fit your audience and budget, and start where results are most likely.",
          },
          {
            q: "Do you manage our social media accounts?",
            a: "We focus on paid campaigns, tracking, email and content that brings results. If you need daily posting and community management, we can plan it with you or work alongside your team.",
          },
          {
            q: "How do I know if marketing is working?",
            a: "Every campaign is tracked on your website. Monthly reports show what you spent, what it brought — inquiries, sales, signups — and what we'll improve next.",
          },
        ],
      },
      {
        slug: "analytics-growth",
        category: "grow" as ServiceCategory,
        menu: "Tracking, insights & conversion",
        title: "Analytics & Growth",
        text: "Analytics, tracking and conversion optimization, so you know what works and turn more visitors into clients.",
        tags: ["GA4", "Tag Manager", "CRO"],
        metaTitle: "Web Analytics & Conversion Optimization",
        intro: [
          "Growth starts with knowing what happens on your website: where visitors come from, what they do and why they leave. We set up analytics that measure what matters for your business — not just page views.",
          "Then we use the data to improve: clearer pages, faster forms, better calls to action and tested changes that turn more visitors into inquiries, bookings and sales.",
        ],
        includes: [
          "Google Analytics 4 and Tag Manager setup",
          "Tracking of forms, calls, WhatsApp clicks and purchases",
          "Privacy-friendly cookie consent",
          "Dashboards with the numbers that matter",
          "Conversion audit of your key pages",
          "A/B tests and landing page improvements",
          "Speed and user-experience improvements",
          "Monthly growth recommendations",
        ],
        idealFor: [
          "Websites with visitors but few inquiries",
          "Businesses investing in ads without clear tracking",
          "Online stores improving their checkout",
          "Teams that want decisions based on data",
        ],
        faq: [
          {
            q: "We already have Google Analytics. Is that enough?",
            a: "Often it only counts visits. We set up tracking for the actions that matter — forms, calls, bookings and sales — so you can see what really brings results.",
          },
          {
            q: "What is conversion optimization?",
            a: "It means improving your website so more visitors take action — contact you, book or buy — without needing more traffic. We find where visitors drop off and test improvements.",
          },
          {
            q: "Is tracking compliant with privacy rules?",
            a: "Yes. We set up cookie consent and configure analytics to respect visitors' choices, in line with GDPR.",
          },
        ],
      },
      {
        slug: "website-maintenance",
        category: "care" as ServiceCategory,
        menu: "Updates, backups & monitoring",
        title: "Website Maintenance",
        text: "Updates, security, backups, monitoring and new features after launch, so your website keeps working for your business.",
        tags: ["Updates", "Security", "Support"],
        metaTitle: "Website Maintenance & Support",
        intro: [
          "Launch is only the beginning. We keep your website or software fast, secure and up to date, fix problems before your clients notice them and keep improving it as your business grows.",
          "Support is included with every package, and optional monthly plans cover updates, backups, monitoring, content changes and new features — with one partner who already knows your project.",
        ],
        includes: [
          "Regular updates and security fixes",
          "Daily backups and quick restore",
          "Uptime and error monitoring",
          "Speed and performance checks",
          "Content updates and new pages",
          "New features and improvements",
          "Priority support by email and WhatsApp",
        ],
        idealFor: [
          "Businesses without an in-house technical team",
          "Websites that are slow, outdated or insecure",
          "Projects we built that keep growing",
          "Existing sites that need a reliable technical partner",
        ],
        faq: [
          {
            q: "Do you support websites you didn't build?",
            a: "Yes. We first review the website, then propose what's needed to keep it secure, fast and easy to maintain.",
          },
          {
            q: "What happens if my website goes down?",
            a: "With a maintenance plan your website is monitored, so we're alerted and start fixing the problem right away — and we can restore it from a recent backup if needed.",
          },
          {
            q: "Is support included?",
            a: "Every package includes support after launch. Ongoing updates, backups and new features are available through optional monthly plans.",
          },
        ],
      },
      {
        slug: "hosting-email",
        category: "care" as ServiceCategory,
        menu: "Fast hosting, domains & business email",
        title: "Hosting, Domains & Email",
        text: "Fast, secure hosting, domain management and professional email on your own domain — set up and managed for you.",
        tags: ["Hosting", "Domains", "Business email"],
        metaTitle: "Website Hosting, Domains & Business Email",
        intro: [
          "Your website needs a fast, reliable home. We set up and manage modern hosting, your domain and SSL, so your website loads quickly everywhere and stays online.",
          "We also set up professional email on your domain — like name@yourcompany.com — with Google Workspace or Microsoft 365, configured correctly so your emails land in the inbox, not in spam.",
        ],
        includes: [
          "Hosting setup on fast, modern infrastructure",
          "Domain registration, transfer and DNS management",
          "SSL certificates and HTTPS",
          "Professional email with Google Workspace or Microsoft 365",
          "SPF, DKIM and DMARC for reliable email delivery",
          "Migration from your current hosting",
          "CDN and caching for fast loading worldwide",
        ],
        idealFor: [
          "New businesses setting up their online presence",
          "Websites on slow or unreliable hosting",
          "Teams still using free email addresses",
          "Businesses moving to a new hosting provider",
        ],
        faq: [
          {
            q: "Can you move my website from my current hosting?",
            a: "Yes. We migrate the website, email and domain with careful planning, so the move happens with little or no downtime.",
          },
          {
            q: "Who owns the domain?",
            a: "You do. Domains are always registered in your name, and you keep full control over them.",
          },
          {
            q: "Why do my emails go to spam?",
            a: "Usually because the domain's email records (SPF, DKIM and DMARC) are missing or wrong. We configure them correctly so your emails are trusted by Gmail, Outlook and others.",
          },
        ],
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
        slug: "pizzeria-aurora",
        name: "L’Aurora Pizzeria & Ristorante",
        category: "Restaurant · Website",
        text: "Bilingual website for a pizzeria in the heart of Pavia, with an elegant digital menu, the brothers’ story and online table booking.",
        year: "Live",
        url: "https://www.pizzeriaaurorapavia.it/",
        image: "/work/pizzeria-aurora.webp",
        services: ["website-design", "ui-ux-design"],
        overview: [
          "L’Aurora is a pizzeria and restaurant in the historic centre of Pavia, Italy, run by the brothers Klaudjo and Marko. Light dough, carefully selected ingredients and a warm, informal atmosphere make it special — and the website had to convey exactly that.",
          "We designed and developed an Italian and English website with the brothers’ story, a full digital menu with prices, a photo gallery, directions and online table booking — fast and easy to use on the phones guests use to choose where to eat.",
        ],
        features: [
          {
            title: "Public website",
            items: [
              {
                title: "Digital menu",
                text: "The full menu — antipasti, classic and specialty pizzas, first and second courses — each dish with its description and price.",
              },
              {
                title: "Online reservations",
                text: "Guests book a table online in a few taps, or call the restaurant directly from the page.",
              },
              {
                title: "Our story",
                text: "A dedicated page about the brothers and the history of the restaurant.",
              },
              {
                title: "Atmosphere gallery",
                text: "Photos of the dishes and the dining room, so guests know what to expect.",
              },
              {
                title: "Location & directions",
                text: "The address in the historic centre with one-tap directions.",
              },
              {
                title: "Italian & English",
                text: "Complete versions for local guests and tourists.",
              },
            ],
          },
        ],
      },
      {
        slug: "trio-travel",
        name: "Trio Travel",
        category: "Travel & real estate · Website & dashboard",
        text: "Travel agency website with tour packages, flights and property listings, plus an admin panel to manage it all.",
        year: "Live",
        url: "https://www.triotravel.al/",
        image: "/work/triotravel-platform.webp",
        services: ["website-design", "web-applications"],
        overview: [
          "Trio Travel & Immo is a travel and real estate agency in Vlorë that offers far more than trips: flight tickets, tour packages, visa assistance, Albsig insurance, bill and fine payments, MoneyGram transfers, and properties for rent and sale. They needed one platform to present all of it — and a back office to run the agency day to day.",
          "We built a public website that brings every service together, and a custom admin dashboard where the team manages properties, packages and flight offers, registers clients’ insurance policies and check-ins, and gets reminders at the right time — so nothing is forgotten.",
        ],
        features: [
          {
            title: "Public website",
            items: [
              {
                title: "Tour packages",
                text: "Seasonal offers — holidays, Christmas, the most requested destinations — with nights, hotel category and price per person, plus requests for custom packages.",
              },
              {
                title: "Flight offers",
                text: "Routes with airport codes and starting prices, and a direct way to contact the agency to book.",
              },
              {
                title: "Properties for rent and sale",
                text: "Apartments, houses, villas, land and commercial spaces with rooms, area and price, separated into rentals and sales.",
              },
              {
                title: "Featured residential project",
                text: "A dedicated showcase for Zoi Villa Residence with its apartments, units for sale and parking spaces.",
              },
              {
                title: "Agency services",
                text: "Albsig insurance (vehicle, motorcycle, boat, property, life and travel), bill and fine payments and MoneyGram, explained in one place.",
              },
              {
                title: "Destinations & FAQ",
                text: "Popular destinations and clear answers about tickets, packages, visas and cancellations.",
              },
              {
                title: "WhatsApp & contact",
                text: "Quick contact buttons in every section, so visitors can ask about an offer instantly.",
              },
            ],
          },
          {
            title: "Admin dashboard",
            items: [
              {
                title: "Property management",
                text: "Add, edit and publish properties for rent or sale, with photos, details and status.",
              },
              {
                title: "Packages & flights",
                text: "Create and update tour packages and flight offers that appear on the website right away.",
              },
              {
                title: "Insurance registrations",
                text: "Every client’s insurance policy recorded in one place, instead of on paper or in spreadsheets.",
              },
              {
                title: "Insurance reminders",
                text: "Reminders when a policy is due for renewal, so the agency contacts the client on time.",
              },
              {
                title: "Check-in registrations",
                text: "Clients’ trips and check-in details registered for every booking.",
              },
              {
                title: "Check-in reminders",
                text: "Reminders so the team never misses a client’s check-in.",
              },
            ],
          },
        ],
      },
      {
        slug: "omw-on-my-way",
        name: "OMW — On My Way",
        category: "Fuel stations · Website & dashboard",
        text: "Fuel-station network website with a station finder and a dashboard for updating fuel prices at every station.",
        year: "Live",
        url: "https://www.omw.al/",
        image: "/work/omw-platform.webp",
        services: ["website-design", "web-applications"],
        overview: [
          "OMW — On My Way is a fuel-station network with stations across Albania, open 24/7, offering fuel, auto services, a mini market, a café and even a hotel. Drivers needed a fast way to find the nearest station and check current prices; the company needed prices to stay accurate at every station.",
          "We built a bilingual website (Albanian and English) that presents the brand, its products and services, with a station finder and fuel prices — plus a dashboard where the team updates the prices of every station.",
        ],
        features: [
          {
            title: "Public website",
            items: [
              {
                title: "Station finder",
                text: "Find the nearest OMW station and see every station across Albania.",
              },
              {
                title: "Fuel prices",
                text: "Current prices for Crystal Diesel, Diesel 10ppm, petrol and LPG, for each station.",
              },
              {
                title: "Products",
                text: "A clear overview of every fuel type the network offers.",
              },
              {
                title: "Services",
                text: "Auto services, mini market, café and the OMW hotel in Vorë, presented in one place.",
              },
              {
                title: "Albanian & English",
                text: "Complete versions of the site in both languages.",
              },
              {
                title: "Company & contact",
                text: "About page, head-office contact details and legal pages.",
              },
            ],
          },
          {
            title: "Admin dashboard",
            items: [
              {
                title: "Price management",
                text: "Update fuel prices for every station from a single screen.",
              },
              {
                title: "Instant updates",
                text: "New prices appear on the website right away, so drivers always see accurate information.",
              },
            ],
          },
        ],
      },
      {
        slug: "zoi-villa-residence",
        name: "Zoi Villa Residence",
        category: "Real estate · Website",
        text: "Bilingual showcase for a private residential community of modern apartments and exclusive villas.",
        year: "Live",
        url: "https://www.zoi-villa.al/",
        image: "/work/zoi-villa.webp",
        services: ["website-design", "ui-ux-design"],
        overview: [
          "Zoi Villa Residence is a private residential community in Tirana with modern 2+1 and 3+1 apartments and exclusive villas, some with a private pool. The website had to sell a premium lifestyle — and help buyers find the right home.",
          "We designed a showcase that presents the residence, its apartments, villas and parking spaces with large visuals and a clear structure, with floor plans and availability for each unit and an easy way to book a private visit.",
        ],
        features: [
          {
            title: "Public website",
            items: [
              {
                title: "Residence presentation",
                text: "The community, its architecture, green spaces and security, presented with large, high-quality visuals.",
              },
              {
                title: "Apartments",
                text: "2+1 and 3+1 apartments with floor plans and availability for each unit.",
              },
              {
                title: "Villas",
                text: "Private villas with gardens, some with a private pool.",
              },
              {
                title: "Parking spaces",
                text: "31 parking spaces with their sizes, available as an option for residents.",
              },
              {
                title: "Book a visit",
                text: "Visitors request a private presentation of the residence directly from the site.",
              },
            ],
          },
        ],
      },
      {
        slug: "lotus-dental-clinic",
        name: "Lotus Dental Clinic",
        category: "Healthcare · Website",
        text: "Dental clinic website with services, gallery, patient reviews and appointment booking.",
        year: "Live",
        url: "https://www.lotusdentalclinic.al/",
        image: "/work/lotusdentalclinic.webp",
        services: ["website-design"],
        overview: [
          "Lotus Dental Clinic is a modern dental clinic in Vlorë. They wanted patients — local and from abroad — to learn about the treatments, get to know the team and the clinic, and book an appointment easily.",
          "We built a website in six languages that presents the clinic’s treatments, team, gallery, patient videos and reviews, with appointment booking and direct contact by phone, email or WhatsApp.",
        ],
        features: [
          {
            title: "Public website",
            items: [
              {
                title: "Six languages",
                text: "Albanian, English, Italian, French, Spanish and German — for local patients and dental tourists.",
              },
              {
                title: "Treatments",
                text: "Digital Smile Design, whitening, implants, and family, cosmetic and emergency dentistry.",
              },
              {
                title: "Meet the team",
                text: "Profiles of the dentists, the orthodontist and the nursing staff.",
              },
              {
                title: "Gallery & patient videos",
                text: "A tour of the clinic and short videos of patient experiences and smile transformations.",
              },
              {
                title: "Patient reviews",
                text: "What patients say, shown in a carousel.",
              },
              {
                title: "Appointment booking",
                text: "Book an appointment from any section, or contact the clinic by phone, email or WhatsApp.",
              },
              {
                title: "Hygiene & patient flow",
                text: "Sections on the clinic environment, hygiene standards and how a visit works.",
              },
            ],
          },
        ],
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
        a: "Yes — we work remotely with clients everywhere, in English, Albanian or Italian.",
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
    otherTypes: ["Redesign", "Other"],
    phone: "Phone number",
    message: "Project description",
    messagePlaceholder:
      "e.g. A website for my business with online booking and an admin panel…",
    send: "Send message",
    sending: "Sending…",
    sent: "Thank you! Your message has been sent — we'll get back to you soon.",
    error: "Something went wrong. Please try again or email us at",
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
            "Information you send us: when you use the contact form, write to us by email or message us on WhatsApp or Instagram, we receive the details you choose to share — such as your name, email address, phone number, project type and project description.",
            "Language preference: the website remembers the language you select (English, Albanian or Italian) in your browser's local storage. It stays on your device and is not sent to us.",
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
            "This website does not use cookies and does not track you across other websites. We use Vercel Web Analytics to count page visits and Vercel Speed Insights to measure how fast pages load — both work without cookies and only collects anonymous, aggregated data (such as the page visited, country and device type), so it cannot identify you. Fonts and images are served from our own website.",
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
  serviceDetail: {
    intro: "Overview",
    includes: "What's included",
    idealFor: "Ideal for",
    faq: "Common questions",
    work: "Related work",
    other: "Other services",
    quote: "Get a free quote",
    whatsapp: "Ask on WhatsApp",
    whatsappText: "Hi! I'm interested in your service",
    jump: "Jump to",
    learnMore: "Learn more",
  },
  workDetail: {
    visit: "Live site",
    industry: "Industry",
    services: "Services",
    overview: "The project",
    features: "What we built",
    more: "More projects",
    visitCta: "Visit the website",
    caseStudy: "Case study",
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
