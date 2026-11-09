import { site } from "../site";
import type { Dictionary } from "./en";

// Emri i kompanisë vjen nga lib/site.ts — ndryshojeni aty dhe përditësohen të gjitha tekstet.
const N = site.name;

export const sq: Dictionary = {
  meta: {
    title: `${N} — Faqe Interneti, Software & Produkte Dixhitale`,
    description: `${N} është një studio dixhitale që dizajnon dhe zhvillon faqe interneti, software të personalizuar dhe dyqane online — nga ideja e parë deri te lansimi dhe më tej. Në shqip, anglisht dhe italisht.`,
    tagline: "Faqe Interneti, Software & Produkte Dixhitale",
    pages: {
      services: "Shërbime për Dizajn & Zhvillim Faqesh Interneti",
      work: "Punët Tona: Projekte Faqesh Interneti & Software",
      about: "Rreth Nesh",
      contact: "Na Kontaktoni",
    },
  },
  nav: {
    home: "Kreu",
    services: "Shërbimet",
    work: "Punët",
    about: "Rreth nesh",
    contact: "Kontakt",
    cta: "Fillo një projekt",
    menu: "Menu",
    close: "Mbyll",
    language: "Gjuha",
    allServices: "Të gjitha shërbimet",
    servicesMenu: "Shfaq shërbimet",
    megaTitle: "Nuk jeni të sigurt çfarë ju duhet?",
    megaText: "Na tregoni për biznesin tuaj dhe ju rekomandojmë kombinimin e duhur të shërbimeve — falas.",
    megaCta: "Merr këshillë falas",
  },
  pages: {
    services:
      "Faqe interneti, software i personalizuar, dyqane online, SEO, Google Ads, marketing dhe mbështetje e vazhdueshme — gjithçka që i duhet një biznesi për t'u rritur online.",
    work: "Projekte live për biznese në industri të ndryshme — secili i dizajnuar dhe zhvilluar nga zero.",
    about: `${N} është një studio dixhitale e përqendruar te detajet, që ndërton faqe interneti dhe software që i çojnë bizneset përpara.`,
    contact:
      "Na tregoni për projektin tuaj — ju përgjigjemi brenda 24 orëve me ide dhe hapat e ardhshëm.",
  },
  more: {
    services: "Shiko të gjitha shërbimet",
    work: "Shiko të gjitha punët",
    about: "Më shumë rreth nesh",
  },
  cta: {
    title: "Keni një projekt në mendje?",
    titleEm: "Le të flasim.",
    lead: "Konsultim falas, ofertë e qartë dhe përgjigje brenda 24 orëve.",
    button: "Filloni projektin tuaj",
  },
  about: {
    eyebrow: "Rreth nesh",
    title: "Një studio dixhitale,",
    titleEm: "e ndërtuar mbi mjeshtëri.",
    lead: `${N} dizajnon dhe zhvillon faqe interneti, software dhe dyqane online për biznese që duan një prani dixhitale po aq të fortë sa puna e tyre.`,
    approachTitle: "Si punojmë",
    valuesTitle: "Çfarë mund të prisni",
  },
  hero: {
    eyebrow: "Studio web & software",
    titleA: "Faqe interneti & software,",
    titleB: "të punuara si",
    titleEm: "vepra arti.",
    lead: `${N} dizajnon dhe zhvillon faqe interneti, aplikacione web dhe dyqane online të personalizuara — nga ideja e parë deri te lansimi dhe më tej — për biznese që duan të dallohen.`,
    primary: "Filloni projektin tuaj",
    secondary: "Shiko punët",
    scroll: "Lëviz",
  },
  home: {
    pickLabel: "Më duhet",
    picks: [
      { label: "Faqe interneti", slug: "website-design" },
      { label: "Dyqan online", slug: "e-commerce" },
      { label: "Software i personalizuar", slug: "web-applications" },
      { label: "SEO", slug: "seo" },
      { label: "Google Ads", slug: "google-ads" },
      { label: "Mirëmbajtje", slug: "website-maintenance" },
    ],
    showcase: "Lansimet e fundit",
    stats: {
      projects: "Projekte live",
      services: "Shërbime në një vend",
      languages: "Gjuhë në të cilat punojmë",
      reply: "Koha e përgjigjes",
    },
    explorerLead: "Zgjidhni çfarë ju duhet — çdo shërbim ka faqen e vet me detaje, pyetje të shpeshta dhe shembuj.",
  },
  marquee: [
    "Faqe interneti",
    "Aplikacione web",
    "Software i personalizuar",
    "Dyqane online",
    "Panele administrimi",
    "Dizajn UI / UX",
    "Sisteme rezervimi",
    "SEO",
    "Google Ads",
    "Integrime API",
    "Marketing dixhital",
  ],
  services: {
    eyebrow: "Shërbimet",
    title: "Gjithçka që biznesi juaj ka nevojë",
    titleEm: "online.",
    lead: `Jemi pranë jush nga skica e parë deri te lansimi dhe më tej. ${N} merret me strategjinë, dizajnin, zhvillimin dhe mbështetjen — një partner i vetëm, përgjegjës për të gjithë rezultatin.`,
    categories: {
      build: { title: "Dizajn & Zhvillim", text: "Faqe interneti, software dhe dyqane online të ndërtuara nga zero." },
      grow: { title: "Marketing & Rritje", text: "Gjenduni, arrini njerëzit e duhur dhe ktheni vizitorët në klientë." },
      care: { title: "Mbështetje & Kujdes", text: "Gjithçka e shpejtë, e sigurt dhe online pas lansimit." },
    },
    items: [
      {
        slug: "website-design",
        category: "build",
        menu: "Faqe të personalizuara për biznese",
        title: "Faqe Interneti Profesionale",
        text: "Faqe të personalizuara për biznese dhe marka, me dizajn të rafinuar, strukturë të qartë dhe performancë të shpejtë në çdo pajisje.",
        tags: ["Dizajn unik", "Për çdo ekran", "E lehtë për t'u ndryshuar"],
        metaTitle: "Dizajn & Zhvillim Faqesh Interneti",
        intro: [
          "Faqja juaj e internetit është shpesh vendi i parë ku një klient njihet me biznesin tuaj. Ne dizajnojmë dhe ndërtojmë faqe të personalizuara — jo shabllone — me strukturë të qartë, dizajn të rafinuar dhe performancë të shpejtë në telefon, tablet dhe kompjuter.",
          "Çdo faqe ndërtohet që ju të mund të përditësoni vetë tekstet, imazhet dhe faqet, dhe vjen që në fillim me bazat për motorët e kërkimit: kod të pastër, ngarkim të shpejtë, tituj dhe përshkrime për çdo faqe, si dhe sitemap.",
        ],
        includes: [
          "Dizajn unik bazuar në markën tuaj",
          "Strukturë që përshtatet me çdo ekran",
          "Ngarkim i shpejtë dhe kod modern e i sigurt",
          "Panel administrimi i thjeshtë për përmbajtjen",
          "Formular kontakti, WhatsApp dhe hartë",
          "SEO bazë: tituj, përshkrime, sitemap",
          "Versione në disa gjuhë kur ju nevojiten",
          "Konfigurim i domain-it, hosting-ut dhe SSL",
        ],
        idealFor: [
          "Kompani që kanë nevojë për një prezencë profesionale online",
          "Restorante, klinika, hotele dhe biznese lokale",
          "Marka që duan të zëvendësojnë një faqe të vjetër ose të ngadaltë",
          "Biznese që u shërbejnë klientëve në më shumë se një gjuhë",
        ],
        faq: [
          {
            q: "Sa kohë duhet për të ndërtuar një faqe interneti?",
            a: "Një faqe më e vogël zakonisht kërkon 1–2 javë, ndërsa një faqe e plotë biznesi 3–5 javë, në varësi të numrit të faqeve dhe funksioneve. Afatin e saktë e merrni bashkë me ofertën.",
          },
          {
            q: "A do të funksionojë mirë faqja ime në telefon?",
            a: "Po. Çdo faqe dizajnohet dhe testohet për telefon, tablet dhe kompjuter, pasi shumica e vizitorëve vijnë nga celulari.",
          },
          {
            q: "A mund ta ridizajnoni faqen time ekzistuese?",
            a: "Po. Mund ta ridizajnojmë faqen tuaj aktuale, të ruajmë përmbajtjen që funksionon dhe ta kalojmë në një bazë më të shpejtë dhe moderne.",
          },
        ],
      },
      {
        slug: "web-applications",
        category: "build",
        menu: "Panele, portale dhe software i personalizuar",
        title: "Aplikacione Web & Software",
        text: "Platforma të personalizuara, panele administrimi, portale për klientë, sisteme rezervimi dhe menaxhimi — të ndërtuara sipas mënyrës si funksionon biznesi juaj.",
        tags: ["Panele", "Administrim", "Integrime"],
        metaTitle: "Zhvillim Aplikacionesh Web & Software të Personalizuar",
        intro: [
          "Kur tabelat Excel, letrat ose mjetet e gatshme fillojnë ta ngadalësojnë ekipin tuaj, software-i i personalizuar ndihmon. Ne ndërtojmë aplikacione web sipas mënyrës si funksionon realisht biznesi juaj — panele administrimi, portale për klientë, sisteme rezervimi dhe menaxhimi.",
          "Fillojmë duke kuptuar proceset tuaja, pastaj e dizajnojmë dhe zhvillojmë aplikacionin hap pas hapi, me prezantime të rregullta që ta testoni ndërsa rritet. Meqë funksionon në shfletues, ekipi juaj mund ta përdorë nga çdo pajisje pa instaluar asgjë.",
        ],
        includes: [
          "Analizë e proceseve dhe kërkesave tuaja",
          "Panele administrimi dhe menaxhimi",
          "Portale për klientë me llogari të sigurta",
          "Sisteme rezervimi dhe planifikimi",
          "Role dhe leje për përdoruesit",
          "Integrime me pagesa, email dhe shërbime të tjera",
          "Hosting, kopje rezervë dhe mbështetje e vazhdueshme",
        ],
        idealFor: [
          "Biznese që e menaxhojnë punën me Excel ose në letër",
          "Kompani që kanë nevojë për një mjet të brendshëm të personalizuar",
          "Biznese shërbimi që marrin rezervime ose kërkesa online",
          "Startup-e që ndërtojnë një produkt të ri dixhital",
        ],
        faq: [
          {
            q: "Sa kushton një software i personalizuar?",
            a: "Varet nga funksionet dhe kompleksiteti. Pas një konsultimi falas ju dërgojmë një ofertë me shkrim me objektin, afatin dhe çmimin, që ta dini koston para se të fillojë puna.",
          },
          {
            q: "A do të jem pronar i kodit?",
            a: "Po. Pasi projekti të paguhet plotësisht, dizajni, përmbajtja dhe kodi i krijuar posaçërisht për ju janë tuajat.",
          },
          {
            q: "A mund të zgjerohet aplikacioni më vonë?",
            a: "Po. Ndërtojmë me teknologji moderne dhe të besueshme, që të shtohen funksione të reja ndërsa biznesi juaj rritet.",
          },
        ],
      },
      {
        slug: "e-commerce",
        category: "build",
        menu: "Dyqane online që shesin",
        title: "Dyqane Online",
        text: "Dyqane online që shesin — nga dyqane të reja deri te katalogë të mëdhenj, me blerje të thjeshtë, pagesa, inventar dhe funksione të personalizuara.",
        tags: ["Dyqane online", "Pagesa", "Katalog"],
        metaTitle: "Ndërtim Dyqanesh Online & E-commerce",
        intro: [
          "Një dyqan online ka nevojë për më shumë se një listë produktesh. Ne ndërtojmë dyqane online që shfletohen lehtë, ngarkohen shpejt dhe ku blerja është e thjeshtë — nga dyqane të reja me pak produkte deri te katalogë të mëdhenj.",
          "Produktet, çmimet, stokun dhe porositë i menaxhoni nga një panel i qartë administrimi, ndërsa klientët blejnë lehtë nga çdo pajisje. Ne konfigurojmë pagesat, mënyrat e dërgesës dhe funksionet e personalizuara që i duhen dyqanit tuaj.",
        ],
        includes: [
          "Dizajn unik i dyqanit",
          "Katalog produktesh me kategori, filtra dhe kërkim",
          "Shportë dhe blerje e thjeshtë",
          "Integrim i pagesave online",
          "Menaxhim i stokut dhe porosive",
          "Kode zbritjeje dhe oferta",
          "Faqe produktesh të optimizuara për motorët e kërkimit",
        ],
        idealFor: [
          "Dyqane që duan të fillojnë të shesin online",
          "Biznese që shesin në rrjete sociale dhe duan dyqanin e tyre",
          "Dyqane me katalogë të mëdhenj që kanë nevojë për menaxhim më të mirë",
          "Marka që e kanë tejkaluar platformën aktuale të e-commerce",
        ],
        faq: [
          {
            q: "Cilat metoda pagese mund të pranojë dyqani im?",
            a: "Integrojmë ofruesit e pagesave që janë të disponueshëm në vendin tuaj, si pagesat me kartë dhe transfertat bankare, dhe mund të shtojmë pagesën në dorëzim.",
          },
          {
            q: "A mund t'i menaxhoj vetë produktet?",
            a: "Po. Produktet, çmimet, fotot dhe stokun i shtoni dhe i ndryshoni nga një panel i thjeshtë, pa prekur kod.",
          },
          {
            q: "A mund ta kaloni dyqanin tim ekzistues në një faqe të re?",
            a: "Po. Mund t'i transferojmë produktet dhe përmbajtjen tuaj dhe të ndërtojmë rreth tyre një dyqan më të shpejtë dhe më të mirë.",
          },
        ],
      },
      {
        slug: "ui-ux-design",
        category: "build",
        menu: "Ndërfaqe që përdoren me kënaqësi",
        title: "Dizajn UI / UX",
        text: "Ndërfaqe të dizajnuara me qëllim: hierarki e qartë, tipografi e kujdesshme dhe përvoja që njerëzit i përdorin me kënaqësi.",
        tags: ["Wireframe", "Prototipe", "Sisteme dizajni"],
        metaTitle: "Dizajn UI/UX për Faqe Interneti & Aplikacione",
        intro: [
          "Dizajni i mirë nuk ka të bëjë vetëm me pamjen, por me sa lehtë njerëzit gjejnë atë që kërkojnë. Ne dizajnojmë ndërfaqe me hierarki të qartë, tipografi të kujdesshme dhe rrjedha që i udhëheqin vizitorët drejt veprimit.",
          "Punojmë nga struktura te detajet: fillimisht wireframe, pastaj dizajn përfundimtar dhe prototipe të klikueshme që i miratoni para se të fillojë zhvillimi — që të mos ketë surpriza më vonë.",
        ],
        includes: [
          "Kërkim i përdoruesve dhe strukturë e përmbajtjes",
          "Wireframe për faqet dhe rrjedhat kryesore",
          "Dizajn vizual përfundimtar",
          "Prototipe të klikueshme",
          "Sisteme dizajni dhe librari komponentësh",
          "Dizajn për celular, tablet dhe kompjuter",
        ],
        idealFor: [
          "Produkte të vështira për t'u përdorur ose me pak konvertime",
          "Startup-e që kanë nevojë për një version të parë të rafinuar",
          "Ekipe me zhvillues, por pa dizajner",
          "Marka që rifreskojnë identitetin e tyre dixhital",
        ],
        faq: [
          {
            q: "A mund të bëni vetëm dizajnin, pa zhvillimin?",
            a: "Po. Mund t'ju dorëzojmë dizajnin dhe prototipet që t'i ndërtojë ekipi juaj, ose të merremi edhe me zhvillimin.",
          },
          {
            q: "Çfarë marr në fund?",
            a: "Skedarë dizajni të organizuar, një prototip dhe komponentët e stilet që u duhen zhvilluesve tuaj për ta ndërtuar produktin në mënyrë të njëtrajtshme.",
          },
          {
            q: "Si siguroheni që dizajni funksionon për përdoruesit?",
            a: "Nisemi nga qëllimet tuaja dhe nevojat e përdoruesve, i testojmë rrjedhat në prototipe dhe i përmirësojmë me komentet tuaja para zhvillimit.",
          },
        ],
      },
      {
        slug: "mvp-development",
        category: "build",
        menu: "Nga ideja te versioni i parë",
        title: "Projekte nga Zero",
        text: "Keni një ide, por nuk dini nga t'ia nisni? E kthejmë në një plan të qartë, përcaktojmë funksionet dhe ndërtojmë versionin e parë, gati për përdorues realë.",
        tags: ["Strategji", "Planifikim", "MVP"],
        metaTitle: "Zhvillim MVP & Produktesh të Reja",
        intro: [
          "Shumë produkte të suksesshme nisin si një ide pa plan. Ju ndihmojmë ta ktheni atë ide në diçka reale: qartësojmë qëllimin, përcaktojmë funksionet thelbësore dhe planifikojmë punën që buxheti të shkojë aty ku ka rëndësi.",
          "Pastaj dizajnojmë dhe ndërtojmë një version të parë — një produkt minimal i qëndrueshëm (MVP) — gati për përdorues realë. Mund ta lansoni, të mblidhni komente dhe ta rritni produktin me siguri.",
        ],
        includes: [
          "Konsultim falas për të kuptuar idenë tuaj",
          "Lista e funksioneve dhe prioritetet për versionin e parë",
          "Plan teknik, afat dhe buxhet",
          "Dizajn i ekraneve kryesore",
          "Zhvillim i versionit të parë funksional",
          "Lansim, hosting dhe konfigurim i analitikës",
          "Mbështetje për versionet e ardhshme",
        ],
        idealFor: [
          "Themelues me një ide, por pa ekip teknik",
          "Biznese që lansojnë një shërbim të ri dixhital",
          "Ekipe që duan ta testojnë një ide para një investimi të madh",
          "Projekte që kanë nevojë për një plan të qartë para fillimit",
        ],
        faq: [
          {
            q: "Kam vetëm një ide. A mjafton për të filluar?",
            a: "Po. Nisim me një bisedë, pastaj e kthejmë idenë në një plan me shkrim me funksionet, afatin dhe çmimin.",
          },
          {
            q: "Çfarë është një MVP?",
            a: "Një produkt minimal i qëndrueshëm është versioni i parë që ka vetëm funksionet e nevojshme për të zgjidhur problemin kryesor për përdorues realë. Ju lejon të lansoni më shpejt dhe të mësoni çfarë të ndërtoni më pas.",
          },
          {
            q: "A do të vazhdoni të punoni me mua pas lansimit?",
            a: "Po. Mbështetja është e përfshirë dhe mund të vazhdojmë të ndërtojmë funksione të reja ndërsa produkti rritet.",
          },
        ],
      },
      {
        slug: "api-integrations",
        category: "build",
        menu: "Pagesa, CRM dhe procese të automatizuara",
        title: "Integrime API & Automatizim",
        text: "Lidhim faqen ose software-in tuaj me pagesat, CRM-të, rezervimet dhe shërbime të tjera — dhe automatizojmë punën e përsëritur.",
        tags: ["REST API", "Webhooks", "Automatizim"],
        metaTitle: "Integrime API & Automatizim Biznesi",
        intro: [
          "Shumica e bizneseve përdorin disa mjete që nuk komunikojnë me njëra-tjetrën — faqen e internetit, ofruesin e pagesave, CRM-në, tabelat dhe email-in. Ne i lidhim përmes API-ve të tyre, që të dhënat të kalojnë automatikisht dhe ekipi juaj të mos i kopjojë më me dorë.",
          "Ndërtojmë gjithashtu API të personalizuara për produktet tuaja, si dhe automatizime që punojnë në sfond: porositë e reja shkojnë te kontabiliteti, klientët e mundshëm shtohen në CRM, konfirmimet dhe kujtesat dërgohen me email ose WhatsApp.",
        ],
        includes: [
          "Integrime pagesash: Stripe, PayPal dhe banka vendase",
          "CRM, email marketing dhe mjete newsletter-i",
          "Integrime rezervimesh, kalendari dhe mesazhesh",
          "REST API dhe webhooks të personalizuara për produktet tuaja",
          "Procese të automatizuara mes mjeteve që përdorni tashmë",
          "Import, eksport dhe sinkronizim të dhënash",
          "Autentikim i sigurt, regjistrim gabimesh dhe njoftime",
          "Dokumentim i qartë për çdo integrim",
        ],
        idealFor: [
          "Ekipe që humbin orë duke kopjuar të dhëna mes mjeteve",
          "Faqe që kanë nevojë për pagesa, rezervime ose CRM",
          "Biznese që lidhin një platformë të re me sistemet ekzistuese",
          "Produkte që kanë nevojë për API-në e tyre për aplikacione ose partnerë",
        ],
        faq: [
          {
            q: "Cilat shërbime mund të integroni?",
            a: "Pothuajse çdo shërbim që ofron API — ofrues pagesash, CRM, platforma email-i, kalendarë, transport, kontabilitet dhe të tjera. Fillimisht kontrollojmë dokumentacionin e shërbimit dhe konfirmojmë çfarë është e mundur para se të fillojmë.",
          },
          {
            q: "A mund të automatizoni detyra që sot i bëjmë me dorë?",
            a: "Po. Analizojmë si funksionon detyra sot, pastaj ndërtojmë një automatizim që e kryen në sfond dhe ju njofton nëse diçka kërkon vëmendje.",
          },
          {
            q: "Çfarë ndodh nëse një shërbim i lidhur ndryshon API-në?",
            a: "Integrimet i ndërtojmë me regjistrim gabimesh dhe njoftime, që problemet të vihen re shpejt. Me një plan mirëmbajtjeje i përditësojmë integrimet kur ofruesit ndryshojnë API-të e tyre.",
          },
        ],
      },
      {
        slug: "seo",
        category: "grow",
        menu: "Dilni më lart në Google",
        title: "Optimizim SEO",
        text: "SEO teknike, optimizim i faqeve dhe kërkim lokal, që klientët e duhur ta gjejnë biznesin tuaj në Google.",
        tags: ["SEO teknike", "SEO lokale", "Përmbajtje"],
        metaTitle: "Shërbime Profesionale SEO",
        intro: [
          "Të jesh në Google nuk mjafton — duhet të dalësh kur klientët kërkojnë atë që ofron. Ne e optimizojmë faqen tuaj nga brenda: shpejtësinë, strukturën, metadata-t, të dhënat e strukturuara dhe përmbajtjen, sipas udhëzimeve të Google.",
          "Si zhvillues, ne i rregullojmë vetë problemet teknike që shumë agjenci SEO vetëm i raportojnë. Fillojmë me një auditim, ndërtojmë një plan të qartë rreth kërkimeve që kanë rëndësi për biznesin tuaj dhe raportojmë progresin çdo muaj.",
        ],
        includes: [
          "Auditim i plotë SEO i faqes suaj",
          "Kërkim fjalësh kyçe për tregun dhe gjuhët tuaja",
          "SEO teknike: shpejtësi, Core Web Vitals, indeksim, sitemap",
          "Optimizim i titujve, nëntitujve dhe përmbajtjes",
          "Të dhëna të strukturuara (schema) për rezultate të pasura",
          "Google Business Profile dhe SEO lokale",
          "Konfigurim i Google Search Console dhe Analytics",
          "Raporte mujore me hapat e ardhshëm",
        ],
        idealFor: [
          "Biznese që gjenden me vështirësi në Google",
          "Biznese lokale që konkurrojnë në qytetin e tyre",
          "Faqe me vizitorë që nuk kthehen në klientë",
          "Marka që synojnë kërkime në më shumë se një gjuhë",
        ],
        faq: [
          {
            q: "Sa kohë duhet që SEO të japë rezultate?",
            a: "Rregullimet teknike mund të ndihmojnë brenda disa javësh, por përmirësimet e qëndrueshme në renditje zakonisht kërkojnë 3–6 muaj, në varësi të faqes, përmbajtjes dhe konkurrencës.",
          },
          {
            q: "A garantoni vendin e parë në Google?",
            a: "Askush nuk mund të garantojë sinqerisht pozicione të caktuara — renditjen e vendos Google. Ne garantojmë punën: një faqe teknikisht të rregullt, përmbajtje të optimizuar dhe raporte mujore transparente.",
          },
          {
            q: "A mund të bëni SEO për një faqe që nuk e keni ndërtuar ju?",
            a: "Po. Fillimisht e auditojmë faqen ekzistuese, pastaj rregullojmë problemet teknike dhe optimizojmë përmbajtjen, në çfarëdo platforme që të jetë.",
          },
        ],
      },
      {
        slug: "google-ads",
        category: "grow",
        menu: "Fushata kërkimi që sjellin klientë",
        title: "Google Ads",
        text: "Fushata Google Ads të konfiguruara, të matura dhe të optimizuara për të sjellë telefonata, mesazhe dhe shitje — jo vetëm klikime.",
        tags: ["Reklama kërkimi", "Matje konvertimesh", "Landing pages"],
        metaTitle: "Menaxhim Google Ads",
        intro: [
          "Google Ads e vendos biznesin tuaj në krye të rezultateve sapo dikush kërkon atë që ofroni. E bërë mirë, sjell klientë që nga dita e parë; e bërë keq, e shpenzon buxhetin në klikime të gabuara.",
          "Ne ndërtojmë fushata rreth kërkimeve që sjellin klientë realë, matim çdo telefonatë, formular dhe shitje, dhe i optimizojmë çdo javë. Meqë ndërtojmë edhe faqe interneti, mund të krijojmë landing pages që i kthejnë ato klikime në kërkesa.",
        ],
        includes: [
          "Konfigurim i llogarisë dhe fushatave",
          "Kërkim fjalësh kyçe dhe fjalë kyçe negative",
          "Tekste reklamash të shkruara për klientët tuaj",
          "Matje konvertimesh për telefonata, formularë dhe shitje",
          "Fushata Search, Performance Max dhe remarketing",
          "Landing pages të ndërtuara për konvertime",
          "Optimizim javor i ofertave, fjalëve kyçe dhe reklamave",
          "Raporte mujore për koston për klient",
        ],
        idealFor: [
          "Biznese që kanë nevojë për klientë shpejt",
          "Faqe të reja që ende po ndërtojnë SEO-në",
          "Llogari reklamash që shpenzojnë pa rezultate të qarta",
          "Oferta sezonale, lansime dhe promocione",
        ],
        faq: [
          {
            q: "Sa buxhet më duhet për Google Ads?",
            a: "Varet nga industria dhe vendndodhja. Vlerësojmë koston për klikim për fjalët tuaja kyçe dhe rekomandojmë një buxhet fillestar para se të shpenzohet ndonjë lek. Buxheti i reklamave i paguhet drejtpërdrejt Google-it, veçmas nga tarifa jonë e menaxhimit.",
          },
          {
            q: "Sa shpejt do të shoh rezultate?",
            a: "Reklamat mund të sjellin vizitorë që në ditën e parë. Fushatat zakonisht kanë nevojë për disa javë të dhëna dhe optimizimi për të arritur një kosto të qëndrueshme për klient.",
          },
          {
            q: "A e kam unë në pronësi llogarinë Google Ads?",
            a: "Po. Llogaria krijohet në emrin tuaj dhe ju keni gjithmonë akses të plotë në të dhe në të dhënat e saj.",
          },
        ],
      },
      {
        slug: "digital-marketing",
        category: "grow",
        menu: "Reklama sociale, email dhe përmbajtje",
        title: "Marketing Dixhital",
        text: "Reklama në rrjetet sociale, email marketing dhe përmbajtje që arrijnë njerëzit e duhur dhe i kthejnë te biznesi juaj.",
        tags: ["Reklama Meta", "Email", "Përmbajtje"],
        metaTitle: "Marketing Dixhital & Reklama në Rrjetet Sociale",
        intro: [
          "Edhe produktet e shkëlqyera duhet të arrijnë njerëzit e duhur. Ne planifikojmë dhe drejtojmë marketing dixhital që i përshtatet qëllimeve dhe buxhetit tuaj — nga reklamat në Facebook dhe Instagram te fushatat me email dhe përmbajtja për faqen tuaj.",
          "Gjithçka matet. I lidhim fushatat me matjen në faqen tuaj, që të shihni cilat kanale sjellin kërkesa dhe shitje, dhe e vendosim buxhetin aty ku funksionon më mirë.",
        ],
        includes: [
          "Strategji marketingu dhe analizë e audiencës",
          "Fushata reklamash në Facebook, Instagram dhe TikTok",
          "Konfigurim i Meta Pixel dhe Conversions API",
          "Email marketing dhe email-e të automatizuara",
          "Formularë regjistrimi për newsletter dhe oferta tërheqëse",
          "Përmbajtje për faqen dhe rrjetet sociale",
          "Landing pages për fushata",
          "Raporte mujore për rezultatet dhe buxhetin",
        ],
        idealFor: [
          "Marka që lansojnë një produkt ose shërbim të ri",
          "Biznese që duan më shumë kërkesa nga rrjetet sociale",
          "Dyqane online që rrisin shitjet dhe klientët e rikthyer",
          "Kompani pa ekip të brendshëm marketingu",
        ],
        faq: [
          {
            q: "Cilat kanale duhet të përdorë biznesi im?",
            a: "Varet nga ku e kalojnë kohën klientët tuaj dhe si blejnë. Rekomandojmë kanalet që i përshtaten audiencës dhe buxhetit tuaj, dhe fillojmë aty ku rezultatet janë më të mundshme.",
          },
          {
            q: "A i menaxhoni llogaritë tona në rrjetet sociale?",
            a: "Fokusohemi te fushatat me pagesë, matja, email-i dhe përmbajtja që sjell rezultate. Nëse keni nevojë për postime ditore dhe menaxhim komuniteti, mund ta planifikojmë bashkë ose të punojmë krah ekipit tuaj.",
          },
          {
            q: "Si ta di nëse marketingu po funksionon?",
            a: "Çdo fushatë matet në faqen tuaj. Raportet mujore tregojnë sa shpenzuat, çfarë solli — kërkesa, shitje, regjistrime — dhe çfarë do të përmirësojmë më pas.",
          },
        ],
      },
      {
        slug: "analytics-growth",
        category: "grow",
        menu: "Matje, analiza dhe konvertime",
        title: "Analitikë & Rritje",
        text: "Analitikë, matje dhe optimizim konvertimesh, që të dini çfarë funksionon dhe t'i ktheni më shumë vizitorë në klientë.",
        tags: ["GA4", "Tag Manager", "CRO"],
        metaTitle: "Analitikë Web & Optimizim Konvertimesh",
        intro: [
          "Rritja fillon kur e di çfarë ndodh në faqen tënde: nga vijnë vizitorët, çfarë bëjnë dhe pse largohen. Ne konfigurojmë analitikë që mat atë që ka rëndësi për biznesin tuaj — jo vetëm shikimet e faqeve.",
          "Pastaj i përdorim të dhënat për të përmirësuar: faqe më të qarta, formularë më të shpejtë, thirrje më të mira për veprim dhe ndryshime të testuara që kthejnë më shumë vizitorë në kërkesa, rezervime dhe shitje.",
        ],
        includes: [
          "Konfigurim i Google Analytics 4 dhe Tag Manager",
          "Matje e formularëve, telefonatave, klikimeve në WhatsApp dhe blerjeve",
          "Pëlqim për cookies që respekton privatësinë",
          "Panele me numrat që kanë rëndësi",
          "Auditim konvertimesh i faqeve kryesore",
          "Teste A/B dhe përmirësime të landing pages",
          "Përmirësime të shpejtësisë dhe përvojës së përdoruesit",
          "Rekomandime mujore për rritje",
        ],
        idealFor: [
          "Faqe me vizitorë, por me pak kërkesa",
          "Biznese që investojnë në reklama pa matje të qartë",
          "Dyqane online që përmirësojnë procesin e blerjes",
          "Ekipe që duan vendime të bazuara në të dhëna",
        ],
        faq: [
          {
            q: "E kemi tashmë Google Analytics. A mjafton?",
            a: "Shpesh ai numëron vetëm vizitat. Ne konfigurojmë matjen e veprimeve që kanë rëndësi — formularët, telefonatat, rezervimet dhe shitjet — që të shihni çfarë sjell vërtet rezultate.",
          },
          {
            q: "Çfarë është optimizimi i konvertimeve?",
            a: "Do të thotë ta përmirësosh faqen që më shumë vizitorë të veprojnë — t'ju kontaktojnë, të rezervojnë ose të blejnë — pa pasur nevojë për më shumë trafik. Gjejmë ku largohen vizitorët dhe testojmë përmirësime.",
          },
          {
            q: "A respekton matja rregullat e privatësisë?",
            a: "Po. Konfigurojmë pëlqimin për cookies dhe analitikën që të respektojë zgjedhjet e vizitorëve, në përputhje me GDPR.",
          },
        ],
      },
      {
        slug: "website-maintenance",
        category: "care",
        menu: "Përditësime, kopje rezervë dhe monitorim",
        title: "Mirëmbajtje Faqesh",
        text: "Përditësime, siguri, kopje rezervë, monitorim dhe funksione të reja pas lansimit, që faqja juaj të vazhdojë të punojë për biznesin.",
        tags: ["Përditësime", "Siguri", "Mbështetje"],
        metaTitle: "Mirëmbajtje & Mbështetje Faqesh Interneti",
        intro: [
          "Lansimi është vetëm fillimi. Ne e mbajmë faqen ose software-in tuaj të shpejtë, të sigurt dhe të përditësuar, rregullojmë problemet para se t'i vënë re klientët dhe vazhdojmë ta përmirësojmë ndërsa biznesi juaj rritet.",
          "Mbështetja përfshihet në çdo paketë, ndërsa planet mujore opsionale mbulojnë përditësimet, kopjet rezervë, monitorimin, ndryshimet e përmbajtjes dhe funksionet e reja — me një partner që e njeh tashmë projektin tuaj.",
        ],
        includes: [
          "Përditësime të rregullta dhe rregullime sigurie",
          "Kopje rezervë ditore dhe rikthim i shpejtë",
          "Monitorim i funksionimit dhe gabimeve",
          "Kontrolle të shpejtësisë dhe performancës",
          "Përditësime përmbajtjeje dhe faqe të reja",
          "Funksione të reja dhe përmirësime",
          "Mbështetje me përparësi me email dhe WhatsApp",
        ],
        idealFor: [
          "Biznese pa ekip teknik të brendshëm",
          "Faqe të ngadalta, të vjetruara ose të pasigurta",
          "Projekte të ndërtuara nga ne që vazhdojnë të rriten",
          "Faqe ekzistuese që kanë nevojë për një partner teknik të besueshëm",
        ],
        faq: [
          {
            q: "A ofroni mbështetje për faqe që nuk i keni ndërtuar ju?",
            a: "Po. Fillimisht e shqyrtojmë faqen, pastaj propozojmë çfarë nevojitet që ajo të mbetet e sigurt, e shpejtë dhe e lehtë për t'u mirëmbajtur.",
          },
          {
            q: "Çfarë ndodh nëse faqja ime bie?",
            a: "Me një plan mirëmbajtjeje faqja juaj monitorohet, ndaj njoftohemi dhe fillojmë ta rregullojmë menjëherë — dhe nëse duhet, e rikthejmë nga një kopje rezervë e fundit.",
          },
          {
            q: "A përfshihet mbështetja?",
            a: "Çdo paketë përfshin mbështetje pas lansimit. Përditësimet e vazhdueshme, kopjet rezervë dhe funksionet e reja ofrohen me plane mujore opsionale.",
          },
        ],
      },
      {
        slug: "hosting-email",
        category: "care",
        menu: "Hosting i shpejtë, domain dhe email biznesi",
        title: "Hosting, Domain & Email",
        text: "Hosting i shpejtë dhe i sigurt, menaxhim domain-i dhe email profesional me domain-in tuaj — të konfiguruara dhe të menaxhuara për ju.",
        tags: ["Hosting", "Domain", "Email biznesi"],
        metaTitle: "Hosting Faqesh, Domain & Email Biznesi",
        intro: [
          "Faqja juaj ka nevojë për një shtëpi të shpejtë dhe të besueshme. Ne konfigurojmë dhe menaxhojmë hosting modern, domain-in dhe SSL-në, që faqja të hapet shpejt kudo dhe të mbetet online.",
          "Konfigurojmë gjithashtu email profesional me domain-in tuaj — si emri@kompaniajuaj.com — me Google Workspace ose Microsoft 365, të rregulluar saktë që email-et tuaja të mbërrijnë në inbox, jo në spam.",
        ],
        includes: [
          "Konfigurim hosting-u në infrastrukturë të shpejtë dhe moderne",
          "Regjistrim, transferim dhe menaxhim DNS i domain-it",
          "Certifikata SSL dhe HTTPS",
          "Email profesional me Google Workspace ose Microsoft 365",
          "SPF, DKIM dhe DMARC për dërgim të besueshëm të email-eve",
          "Migrim nga hosting-u juaj aktual",
          "CDN dhe caching për hapje të shpejtë kudo në botë",
        ],
        idealFor: [
          "Biznese të reja që ndërtojnë praninë e tyre online",
          "Faqe në hosting të ngadaltë ose jo të besueshëm",
          "Ekipe që ende përdorin adresa email-i falas",
          "Biznese që kalojnë te një ofrues i ri hosting-u",
        ],
        faq: [
          {
            q: "A mund ta transferoni faqen time nga hosting-u aktual?",
            a: "Po. E migrojmë faqen, email-in dhe domain-in me planifikim të kujdesshëm, që kalimi të ndodhë me pak ose aspak ndërprerje.",
          },
          {
            q: "Kush e ka në pronësi domain-in?",
            a: "Ju. Domain-et regjistrohen gjithmonë në emrin tuaj dhe ju keni kontroll të plotë mbi to.",
          },
          {
            q: "Pse email-et e mia shkojnë në spam?",
            a: "Zakonisht sepse regjistrimet e email-it të domain-it (SPF, DKIM dhe DMARC) mungojnë ose janë të gabuara. Ne i konfigurojmë saktë që email-et tuaja të besohen nga Gmail, Outlook dhe të tjerë.",
          },
        ],
      },
    ],
  },
  work: {
    eyebrow: "Punë të përzgjedhura",
    title: "Ndërtuar me",
    titleEm: "pasion.",
    lead: "Faqe interneti dhe platforma live për biznese në industri të ndryshme — secila e dizajnuar dhe zhvilluar nga zero.",
    view: "Shiko projektin",
    items: [
      {
        slug: "pizzeria-aurora",
        name: "L’Aurora Pizzeria & Ristorante",
        category: "Restorant · Faqe interneti",
        text: "Faqe dygjuhëshe për një piceri në zemër të Pavias, me një menu dixhitale elegante, historinë e dy vëllezërve dhe rezervim tavoline online.",
        year: "Online",
        url: "https://www.pizzeriaaurorapavia.it/",
        image: "/work/pizzeria-aurora.webp",
        services: ["website-design", "ui-ux-design"],
        overview: [
          "L’Aurora është një piceri dhe restorant në qendrën historike të Pavias, në Itali, e drejtuar nga vëllezërit Klaudjo dhe Marko. Brumi i lehtë, përbërësit e përzgjedhur me kujdes dhe atmosfera e ngrohtë dhe joformale e bëjnë të veçantë — dhe faqja duhej të përcillte pikërisht këtë.",
          "Dizajnuam dhe zhvilluam një faqe në italisht dhe anglisht me historinë e vëllezërve, menunë e plotë dixhitale me çmime, galeri fotosh, udhëzime për vendndodhjen dhe rezervim tavoline online — e shpejtë dhe e lehtë në telefonat që mysafirët përdorin për të zgjedhur ku të hanë.",
        ],
        features: [
          {
            title: "Faqja publike",
            items: [
              {
                title: "Menu dixhitale",
                text: "Menuja e plotë — antipasta, pica klasike dhe speciale, pjata të para dhe të dyta — secila me përshkrimin dhe çmimin e saj.",
              },
              {
                title: "Rezervime online",
                text: "Mysafirët rezervojnë një tavolinë online me pak klikime, ose telefonojnë restorantin direkt nga faqja.",
              },
              {
                title: "Historia jonë",
                text: "Një faqe e dedikuar për vëllezërit dhe historinë e restorantit.",
              },
              {
                title: "Galeria e atmosferës",
                text: "Foto të pjatave dhe të sallës, që mysafirët ta dinë çfarë i pret.",
              },
              {
                title: "Vendndodhja dhe udhëzimet",
                text: "Adresa në qendrën historike me udhëzime me një klikim.",
              },
              {
                title: "Italisht dhe anglisht",
                text: "Versione të plota për klientët vendas dhe turistët.",
              },
            ],
          },
        ],
      },
      {
        slug: "trio-travel",
        name: "Trio Travel",
        category: "Udhëtime & prona · Faqe & panel",
        text: "Faqe për agjenci udhëtimesh me paketa turistike, bileta avioni dhe prona, së bashku me një panel administrimi për t’i menaxhuar të gjitha.",
        year: "Online",
        url: "https://www.triotravel.al/",
        image: "/work/triotravel-platform.webp",
        services: ["website-design", "web-applications"],
        overview: [
          "Trio Travel & Immo është një agjenci udhëtimesh dhe pasurish të paluajtshme në Vlorë që ofron shumë më tepër se udhëtime: bileta avioni, paketa turistike, asistencë për viza, siguracione Albsig, pagesa faturash e gjobash, transferta me MoneyGram, si dhe prona me qira dhe në shitje. Kishin nevojë për një platformë që i prezanton të gjitha — dhe për një panel që e ndihmon agjencinë në punën e përditshme.",
          "Ndërtuam një faqe publike që i bashkon të gjitha shërbimet dhe një panel administrimi të personalizuar ku ekipi menaxhon pronat, paketat dhe ofertat e fluturimeve, regjistron siguracionet dhe check-in-et e klientëve dhe merr kujtesa në kohën e duhur — që asgjë të mos harrohet.",
        ],
        features: [
          {
            title: "Faqja publike",
            items: [
              {
                title: "Paketa turistike",
                text: "Oferta sezonale — festat, Krishtlindjet, destinacionet më të kërkuara — me netët, kategorinë e hotelit dhe çmimin për person, si dhe kërkesa për paketa të personalizuara.",
              },
              {
                title: "Oferta fluturimesh",
                text: "Linja me kodet e aeroporteve dhe çmimet duke filluar nga, me kontakt të drejtpërdrejtë me agjencinë për rezervim.",
              },
              {
                title: "Prona me qira dhe në shitje",
                text: "Apartamente, shtëpi, vila, toka dhe ambiente biznesi me dhoma, sipërfaqe dhe çmim, të ndara në qira dhe shitje.",
              },
              {
                title: "Projekt rezidencial i rekomanduar",
                text: "Prezantim i veçantë për Zoi Villa Residence me apartamentet, njësitë në shitje dhe vendparkimet.",
              },
              {
                title: "Shërbimet e agjencisë",
                text: "Siguracione Albsig (automjete, motorra, mjete lundruese, prona, jetë dhe udhëtim), pagesa faturash e gjobash dhe MoneyGram, të shpjeguara në një vend.",
              },
              {
                title: "Destinacione dhe pyetje të shpeshta",
                text: "Destinacionet më të pëlqyera dhe përgjigje të qarta për biletat, paketat, vizat dhe anulimet.",
              },
              {
                title: "WhatsApp dhe kontakt",
                text: "Butona kontakti të shpejtë në çdo seksion, që vizitorët të pyesin për një ofertë menjëherë.",
              },
            ],
          },
          {
            title: "Paneli i administrimit",
            items: [
              {
                title: "Menaxhimi i pronave",
                text: "Shtimi, ndryshimi dhe publikimi i pronave me qira ose në shitje, me foto, detaje dhe status.",
              },
              {
                title: "Paketa dhe fluturime",
                text: "Krijimi dhe përditësimi i paketave turistike dhe ofertave të fluturimeve, që shfaqen menjëherë në faqe.",
              },
              {
                title: "Regjistrimi i siguracioneve",
                text: "Siguracioni i çdo klienti i regjistruar në një vend, në vend të letrave apo tabelave Excel.",
              },
              {
                title: "Kujtesa për siguracionet",
                text: "Kujtesa kur një siguracion i afrohet rinovimit, që agjencia ta kontaktojë klientin në kohë.",
              },
              {
                title: "Regjistrimi i check-in-eve",
                text: "Udhëtimet dhe të dhënat e check-in-it të klientëve, të regjistruara për çdo rezervim.",
              },
              {
                title: "Kujtesa për check-in",
                text: "Kujtesa që ekipi të mos harrojë asnjëherë check-in-in e një klienti.",
              },
            ],
          },
        ],
      },
      {
        slug: "omw-on-my-way",
        name: "OMW — On My Way",
        category: "Karburante · Faqe & panel",
        text: "Faqe për një rrjet karburantesh me gjetjen e pikës më të afërt dhe një panel për përditësimin e çmimeve në çdo stacion.",
        year: "Online",
        url: "https://www.omw.al/",
        image: "/work/omw-platform.webp",
        services: ["website-design", "web-applications"],
        overview: [
          "OMW — On My Way është një rrjet karburantesh me pika në të gjithë Shqipërinë, i hapur 24/7, që ofron karburant, shërbime auto, mini market, kafe dhe madje edhe hotel. Shoferët kishin nevojë për një mënyrë të shpejtë për të gjetur pikën më të afërt dhe për të parë çmimet aktuale; kompania kishte nevojë që çmimet të ishin të sakta në çdo stacion.",
          "Ndërtuam një faqe dygjuhëshe (shqip dhe anglisht) që prezanton markën, produktet dhe shërbimet, me gjetjen e pikës më të afërt dhe çmimet e karburantit — si dhe një panel ku ekipi përditëson çmimet e çdo stacioni.",
        ],
        features: [
          {
            title: "Faqja publike",
            items: [
              {
                title: "Gjetja e pikës më të afërt",
                text: "Gjeni stacionin OMW më të afërt dhe shikoni të gjitha pikat në Shqipëri.",
              },
              {
                title: "Çmimet e karburantit",
                text: "Çmimet aktuale për Crystal Diesel, Diesel 10ppm, benzinë dhe autogaz, për çdo stacion.",
              },
              {
                title: "Produktet",
                text: "Një përmbledhje e qartë e çdo lloji karburanti që ofron rrjeti.",
              },
              {
                title: "Shërbimet",
                text: "Shërbime auto, mini market, kafe dhe hoteli OMW në Vorë, të prezantuara në një vend.",
              },
              {
                title: "Shqip dhe anglisht",
                text: "Versione të plota të faqes në të dyja gjuhët.",
              },
              {
                title: "Kompania dhe kontakti",
                text: "Faqja Rreth nesh, kontaktet e zyrës qendrore dhe faqet ligjore.",
              },
            ],
          },
          {
            title: "Paneli i administrimit",
            items: [
              {
                title: "Menaxhimi i çmimeve",
                text: "Përditësimi i çmimeve të karburantit për çdo stacion nga një ekran i vetëm.",
              },
              {
                title: "Përditësim i menjëhershëm",
                text: "Çmimet e reja shfaqen menjëherë në faqe, që shoferët të shohin gjithmonë informacion të saktë.",
              },
            ],
          },
        ],
      },
      {
        slug: "zoi-villa-residence",
        name: "Zoi Villa Residence",
        category: "Pasuri të paluajtshme · Faqe interneti",
        text: "Prezantim dygjuhësh për një rezidencë private me apartamente moderne dhe vila ekskluzive.",
        year: "Online",
        url: "https://www.zoi-villa.al/",
        image: "/work/zoi-villa.webp",
        services: ["website-design", "ui-ux-design"],
        overview: [
          "Zoi Villa Residence është një komunitet rezidencial privat në Tiranë me apartamente moderne 2+1 dhe 3+1 dhe vila ekskluzive, disa me pishinë private. Faqja duhej të shiste një stil jetese premium — dhe t’i ndihmonte blerësit të gjenin shtëpinë e duhur.",
          "Dizajnuam një prezantim që tregon rezidencën, apartamentet, vilat dhe vendparkimet me pamje të mëdha dhe strukturë të qartë, me planimetri dhe disponueshmëri për çdo njësi dhe një mënyrë të thjeshtë për të rezervuar një vizitë private.",
        ],
        features: [
          {
            title: "Faqja publike",
            items: [
              {
                title: "Prezantimi i rezidencës",
                text: "Komuniteti, arkitektura, hapësirat e gjelbra dhe siguria, të prezantuara me pamje të mëdha dhe cilësore.",
              },
              {
                title: "Apartamentet",
                text: "Apartamente 2+1 dhe 3+1 me planimetri dhe disponueshmëri për çdo njësi.",
              },
              {
                title: "Vilat",
                text: "Vila private me oborr, disa me pishinë private.",
              },
              {
                title: "Vendparkimet",
                text: "31 vendparkime me sipërfaqet përkatëse, të disponueshme si opsion për banorët.",
              },
              {
                title: "Rezervimi i vizitës",
                text: "Vizitorët kërkojnë një prezantim privat të rezidencës direkt nga faqja.",
              },
            ],
          },
        ],
      },
      {
        slug: "lotus-dental-clinic",
        name: "Lotus Dental Clinic",
        category: "Shëndetësi · Faqe interneti",
        text: "Faqe për klinikë dentare me shërbimet, galerinë, vlerësimet e pacientëve dhe rezervim takimesh.",
        year: "Online",
        url: "https://www.lotusdentalclinic.al/",
        image: "/work/lotusdentalclinic.webp",
        services: ["website-design"],
        overview: [
          "Lotus Dental Clinic është një klinikë dentare moderne në Vlorë. Donin që pacientët — vendas dhe nga jashtë — të njiheshin me trajtimet, me ekipin dhe klinikën, dhe të rezervonin një takim me lehtësi.",
          "Ndërtuam një faqe në gjashtë gjuhë që prezanton trajtimet e klinikës, ekipin, galerinë, videot e pacientëve dhe vlerësimet, me rezervim takimesh dhe kontakt të drejtpërdrejtë me telefon, email ose WhatsApp.",
        ],
        features: [
          {
            title: "Faqja publike",
            items: [
              {
                title: "Gjashtë gjuhë",
                text: "Shqip, anglisht, italisht, frëngjisht, spanjisht dhe gjermanisht — për pacientët vendas dhe turizmin dentar.",
              },
              {
                title: "Trajtimet",
                text: "Digital Smile Design, zbardhim, implante, si dhe stomatologji familjare, estetike dhe urgjente.",
              },
              {
                title: "Ekipi",
                text: "Profilet e stomatologëve, ortodontes dhe stafit infermieror.",
              },
              {
                title: "Galeria dhe videot e pacientëve",
                text: "Një vizitë në klinikë dhe video të shkurtra me përvojat e pacientëve dhe transformimet e buzëqeshjes.",
              },
              {
                title: "Vlerësimet e pacientëve",
                text: "Çfarë thonë pacientët, të shfaqura në një karusel.",
              },
              {
                title: "Rezervimi i takimeve",
                text: "Rezervoni një takim nga çdo seksion, ose kontaktoni klinikën me telefon, email ose WhatsApp.",
              },
              {
                title: "Higjiena dhe vizita",
                text: "Seksione për ambientin e klinikës, standardet e higjienës dhe si zhvillohet një vizitë.",
              },
            ],
          },
        ],
      },
    ],
  },
  process: {
    eyebrow: "Procesi",
    title: "Nga ideja te lansimi,",
    titleEm: "pa asnjë pengesë.",
    step: "Hapi",
    steps: [
      {
        title: "Zbulim",
        text: "Flasim për qëllimet, audiencën dhe vizionin tuaj, pastaj përcaktojmë fushën, afatet dhe një ofertë të qartë.",
      },
      {
        title: "Dizajn",
        text: "Struktura, faqet dhe një dizajn i detajuar që ju e miratoni para se të nisë zhvillimi.",
      },
      {
        title: "Zhvillim",
        text: "Kod i pastër dhe modern — i përshtatshëm për çdo ekran, i sigurt dhe i shpejtë — me pamje paraprake të rregullta, që ta ndiqni progresin.",
      },
      {
        title: "Lansim & Rritje",
        text: "Domain, hosting, SEO dhe analitikë të konfiguruara. Pastaj mbështetje e vazhdueshme ndërsa biznesi rritet.",
      },
    ],
  },
  manifesto: {
    quote:
      "Faqja juaj është shtrëngimi i parë i dorës me çdo klient. Duhet të ndihet",
    quoteEm: "e paharrueshme.",
    values: [
      {
        title: "Bashkëpunim i drejtpërdrejtë",
        text: "Flisni direkt me ne — pa ndërmjetës, pa mesazhe të humbura.",
      },
      {
        title: "Vëmendje te detajet",
        text: "Çdo faqe, ndërveprim dhe milisekondë mendohet me kujdes.",
      },
      {
        title: "E ndërtuar për të zgjatur",
        text: "Teknologji moderne dhe e besueshme, që mbetet e shpejtë, e sigurt dhe e lehtë për t'u zgjeruar.",
      },
      {
        title: "Transparencë",
        text: "Çmime të qarta, afate të qarta, pa surpriza.",
      },
    ],
  },
  faq: {
    eyebrow: "Pyetje",
    title: "Pyetje,",
    titleEm: "të përgjigjura.",
    items: [
      {
        q: "Sa kohë zgjat një projekt?",
        a: "Një faqe më e vogël zakonisht merr 1–2 javë; një faqe e plotë 3–5 javë. Software-i i personalizuar dhe dyqanet online varen nga fusha e projektit — afatin e saktë do ta merrni bashkë me ofertën.",
      },
      {
        q: "A do të mund ta ndryshoj vetë përmbajtjen?",
        a: "Po. Projektet mund të përfshijnë një panel administrimi të thjeshtë, që të përditësoni tekste, foto, produkte dhe çmime pa prekur kodin.",
      },
      {
        q: "A mund të merrni përsipër një projekt ekzistues?",
        a: "Po. Mund të përmirësojmë, ridizajnojmë ose zgjerojmë një faqe, dyqan apo sistem ekzistues — ose ta rindërtojmë nga zero kur kjo është zgjidhja më e mirë.",
      },
      {
        q: "A merreni me domain dhe hosting?",
        a: "Patjetër. Mund të konfigurojmë domainin, email-in profesional, hostingun dhe SSL, ose të punojmë me atë që keni tashmë.",
      },
      {
        q: "A punoni me klientë jashtë Shqipërisë?",
        a: "Po — punojmë në distancë me klientë kudo, në shqip, anglisht ose italisht.",
      },
      {
        q: "Si funksionon pagesa?",
        a: "Zakonisht 50% në fillim dhe 50% në lansim. Për projekte më të mëdha, pagesa mund të ndahet sipas fazave.",
      },
      {
        q: "Çfarë ndodh pas lansimit?",
        a: "Mbështetja përfshihet në çdo paketë, me plane mujore opsionale për përditësime, backup dhe funksione të reja.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Le të krijojmë diçka",
    titleEm: "të jashtëzakonshme.",
    promises: [
      "Konsultimi falas",
      "Përgjigje brenda 24 orëve",
      "Ofertë e qartë, me afate dhe çmim",
    ],
    name: "Emri juaj",
    email: "Adresa e email-it",
    type: "Lloji i projektit",
    otherTypes: ["Ridizajnim", "Tjetër"],
    phone: "Numri i telefonit",
    message: "Përshkrimi i projektit",
    messagePlaceholder:
      "P.sh. Një faqe për biznesin tim me rezervim online dhe panel administrimi…",
    send: "Dërgo mesazhin",
    sending: "Duke u dërguar…",
    sent: "Faleminderit! Mesazhi juaj u dërgua — do t'ju kontaktojmë së shpejti.",
    error: "Diçka shkoi keq. Ju lutemi provoni përsëri ose na shkruani në",
    or: "Ose na kontaktoni direkt",
    emailLabel: "Email",
    whatsapp: "WhatsApp",
    whatsappCta: "Na shkruani në WhatsApp",
    instagram: "Instagram",
    subject: "Kërkesë për projekt të ri",
  },
  legal: {
    updated: "Përditësuar së fundi",
    date: "10 tetor 2026",
    toc: "Në këtë faqe",
    privacy: {
      label: "Politika e Privatësisë",
      title: "Politika e",
      titleEm: "Privatësisë.",
      lead: "Si i mbledhim, i përdorim dhe i mbrojmë të dhënat tuaja kur vizitoni këtë faqe ose na kontaktoni.",
      sections: [
        {
          title: "Kush jemi",
          body: [
            `${N} është një studio dixhitale që dizajnon dhe zhvillon faqe interneti, software dhe dyqane online. Kjo politikë shpjegon cilat të dhëna personale mbledhim kur vizitoni këtë faqe ose na kontaktoni, dhe si i përdorim ato.`,
            `Për çdo pyetje rreth kësaj politike, mund të na shkruani në ${site.email}.`,
          ],
        },
        {
          title: "Të dhënat që mbledhim",
          body: [
            "Të dhënat që na dërgoni: kur përdorni formularin e kontaktit, na shkruani me email ose na dërgoni mesazh në WhatsApp apo Instagram, marrim të dhënat që zgjidhni të ndani — si emrin, adresën e email-it, numrin e telefonit, llojin e projektit dhe përshkrimin e projektit.",
            "Preferenca e gjuhës: faqja e mban mend gjuhën që zgjidhni (shqip, anglisht ose italisht) në hapësirën lokale të shfletuesit tuaj. Kjo mbetet në pajisjen tuaj dhe nuk na dërgohet neve.",
            "Të dhëna teknike: si shumica e faqeve, ofruesi ynë i hostingut mund të regjistrojë automatikisht disa të dhëna teknike bazë, si adresën IP, llojin e shfletuesit dhe faqet e vizituara, për siguri dhe për mbarëvajtjen e faqes.",
          ],
        },
        {
          title: "Si i përdorim të dhënat",
          body: [
            "Të dhënat që na dërgoni i përdorim vetëm për t'ju përgjigjur, për të përgatitur oferta, për të ofruar shërbimet që kërkoni dhe për të komunikuar me ju rreth projektit. Nuk i përdorim për marketing pa pëlqimin tuaj dhe nuk i shesim kurrë.",
          ],
        },
        {
          title: "Formulari i kontaktit",
          body: [
            "Formulari i kontaktit nuk e ruan mesazhin tuaj në serverët tanë. Kur shtypni butonin e dërgimit, hapet aplikacioni juaj i email-it me mesazhin gati, dhe asgjë nuk dërgohet derisa ta dërgoni vetë atë email.",
          ],
        },
        {
          title: "Cookies dhe gjurmimi",
          body: [
            "Kjo faqe nuk përdor cookies dhe nuk ju gjurmon në faqe të tjera. Përdorim Vercel Web Analytics për të numëruar vizitat dhe Vercel Speed Insights për të matur sa shpejt ngarkohen faqet — të dyja funksionojnë pa cookies dhe mbledh vetëm të dhëna anonime dhe të përmbledhura (si faqja e vizituar, shteti dhe lloji i pajisjes), ndaj nuk mund t'ju identifikojë. Shkronjat dhe imazhet shërbehen nga vetë faqja jonë.",
          ],
        },
        {
          title: "Ndarja e të dhënave",
          body: [
            "Të dhënat personale i ndajmë vetëm kur është e nevojshme për të ofruar shërbimet tona — për shembull me ofruesit e email-it, hostingut ose komunikimit (si WhatsApp) që i përpunojnë ato në emrin tonë — ose kur kërkohet me ligj. Mesazhet e dërguara në WhatsApp ose Instagram u nënshtrohen edhe politikave të privatësisë së këtyre platformave.",
          ],
        },
        {
          title: "Sa kohë i ruajmë",
          body: [
            "Kërkesat dhe korrespondencën për projektet i ruajmë për aq kohë sa nevojitet për të trajtuar kërkesën tuaj dhe bashkëpunimin tonë, si dhe për të përmbushur detyrimet ligjore ose kontabël. Pas kësaj, ato fshihen.",
          ],
        },
        {
          title: "Të drejtat tuaja",
          body: [
            `Në çdo kohë mund të kërkoni të shihni, të korrigjoni ose të fshini të dhënat personale që kemi për ju, ose të ndalojmë përdorimin e tyre. Na shkruani në ${site.email} dhe do t'ju përgjigjemi brenda një kohe të arsyeshme, në përputhje me ligjet për mbrojtjen e të dhënave që zbatohen për ju.`,
          ],
        },
        {
          title: "Ndryshimet në këtë politikë",
          body: [
            "Herë pas here mund ta përditësojmë këtë politikë. Versioni më i fundit është gjithmonë në këtë faqe, me datën e përditësimit të fundit të shënuar më lart.",
          ],
        },
      ],
    },
    terms: {
      label: "Kushtet e Shërbimit",
      title: "Kushtet e",
      titleEm: "Shërbimit.",
      lead: "Rregullat që zbatohen kur përdorni këtë faqe dhe kur bashkëpunoni me ne.",
      sections: [
        {
          title: "Rreth këtyre kushteve",
          body: [
            `Këto kushte zbatohen për përdorimin e kësaj faqeje dhe për shërbimet që ofron ${N} — përfshirë faqe interneti, aplikacione web, software, dyqane online, dizajn dhe mbështetje. Duke përdorur faqen ose duke bashkëpunuar me ne, ju pranoni këto kushte.`,
            "Detajet specifike të çdo projekti përcaktohen në ofertën ose marrëveshjen përkatëse, e cila ka përparësi nëse ndryshon nga këto kushte.",
          ],
        },
        {
          title: "Ofertat dhe çmimet",
          body: [
            "Çdo projekt nis me një ofertë me shkrim që përshkruan fushën, afatet dhe çmimin. Puna fillon pasi oferta të jetë pranuar. Kërkesat jashtë fushës së rënë dakord ofertohen veçmas, para se të nisë çdo punë shtesë.",
          ],
        },
        {
          title: "Pagesat",
          body: [
            "Përveç kur bihet dakord ndryshe, pagesa bëhet 50% para fillimit të punës dhe 50% në lansim. Projektet më të mëdha mund të ndahen sipas fazave. Vonesat në pagesë mund ta pezullojnë projektin dhe ta shtyjnë datën e dorëzimit.",
          ],
        },
        {
          title: "Detyrimet tuaja",
          body: [
            "Që projekti të ecë sipas planit, ju angazhoheni të na jepni në kohë përmbajtjen (tekste, foto, logo, informacion për produktet), aksesin dhe komentet, si dhe të siguroheni që keni të drejtat për çdo material që na dërgoni. Vonesat në komente ose përmbajtje mund ta zgjasin afatin.",
          ],
        },
        {
          title: "Afatet dhe dorëzimi",
          body: [
            "Afatet në ofertë janë vlerësime të bazuara në fushën e rënë dakord dhe në komente të dhëna në kohë. Ju mbajmë të informuar gjatë gjithë projektit dhe ju njoftojmë menjëherë nëse diçka ndikon në afat.",
          ],
        },
        {
          title: "Pronësia dhe portofoli",
          body: [
            "Pasi projekti të jetë paguar plotësisht, dizajni, përmbajtja dhe kodi përfundimtar i krijuar posaçërisht për ju janë pronë e juaja. Mjetet, libraritë, shkronjat, temat ose shtojcat e palëve të treta mbeten nën licencat e tyre.",
            "Përveç kur na kërkoni ndryshe, mund ta paraqesim projektin e përfunduar në portofolin tonë.",
          ],
        },
        {
          title: "Shërbimet e palëve të treta",
          body: [
            "Projektet shpesh mbështeten te shërbime si hostingu, domainet, ofruesit e pagesave ose platformat e tregtisë online. Kostot, disponueshmëria dhe kushtet e tyre përcaktohen nga këta ofrues dhe ne nuk mbajmë përgjegjësi për ndërprerjet ose ndryshimet e tyre — megjithëse do t'ju ndihmojmë t'i zgjidhni problemet.",
          ],
        },
        {
          title: "Mbështetja dhe garancia",
          body: [
            "Pas lansimit, rregullojmë defektet në punën e dorëzuar gjatë periudhës së mbështetjes që përfshihet në paketën tuaj. Përditësimet e vazhdueshme, funksionet e reja dhe mirëmbajtja ofrohen përmes planeve mujore opsionale ose ofertave të veçanta.",
          ],
        },
        {
          title: "Kufizimi i përgjegjësisë",
          body: [
            "Çdo projekt e ndërtojmë me kujdes, por nuk mund të garantojmë që një faqe ose sistem do të jetë plotësisht pa ndërprerje apo gabime. Për aq sa lejon ligji, përgjegjësia jonë e përgjithshme për një projekt kufizohet në shumën e paguar për atë projekt, dhe nuk mbajmë përgjegjësi për humbje të tërthorta, si fitime ose të dhëna të humbura.",
          ],
        },
        {
          title: "Përfundimi i një projekti",
          body: [
            "Secila palë mund ta përfundojë një projekt me njoftim me shkrim. Në këtë rast, ju paguani punën e kryer deri në atë moment dhe ne ju dorëzojmë pjesët e përfunduara të punës pasi të jetë shlyer pagesa.",
          ],
        },
        {
          title: "Përdorimi i kësaj faqeje",
          body: [
            `Përmbajtja e kësaj faqeje — përfshirë tekstet, dizajnin dhe imazhet e projekteve — i përket ${N} ose klientëve të saj dhe nuk mund të kopjohet apo ripërdoret pa leje. Lidhjet drejt faqeve të tjera jepen për lehtësi dhe ne nuk mbajmë përgjegjësi për përmbajtjen e tyre.`,
          ],
        },
        {
          title: "Ligji i zbatueshëm dhe ndryshimet",
          body: [
            `Këto kushte rregullohen nga ligjet e Republikës së Shqipërisë. Herë pas here mund t'i përditësojmë; versioni më i fundit publikohet gjithmonë në këtë faqe. Për çdo pyetje, na shkruani në ${site.email}.`,
          ],
        },
      ],
    },
  },
  serviceDetail: {
    intro: "Përmbledhje",
    includes: "Çfarë përfshihet",
    idealFor: "Ideale për",
    faq: "Pyetje të shpeshta",
    work: "Punë të ngjashme",
    other: "Shërbime të tjera",
    quote: "Merr një ofertë falas",
    whatsapp: "Pyet në WhatsApp",
    whatsappText: "Përshëndetje! Më intereson shërbimi",
    jump: "Shko te",
    learnMore: "Mëso më shumë",
  },
  workDetail: {
    visit: "Faqja live",
    industry: "Industria",
    services: "Shërbimet",
    overview: "Projekti",
    features: "Çfarë ndërtuam",
    more: "Projekte të tjera",
    visitCta: "Vizitoni faqen",
    caseStudy: "Rast studimi",
  },
  footer: {
    tagline:
      "Faqe interneti, software dhe dyqane online, të ofruara përmes një procesi të qartë dhe komunikimi të drejtpërdrejtë.",
    company: "Kompania",
    location: "Shqipëri",
    rights: "Të gjitha të drejtat e rezervuara.",
    made: `Dizajnuar & zhvilluar nga ${N}`,
  },
};
