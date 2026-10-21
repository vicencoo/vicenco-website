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
  },
  pages: {
    services:
      "Faqe interneti, software i personalizuar, dyqane online, dizajn UI/UX dhe mbështetje e vazhdueshme — gjithçka që një biznes ka nevojë për t'u rritur online.",
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
  marquee: [
    "Faqe interneti",
    "Aplikacione web",
    "Software i personalizuar",
    "Dyqane online",
    "Panele administrimi",
    "Dizajn UI / UX",
    "Sisteme rezervimi",
    "SEO",
  ],
  services: {
    eyebrow: "Shërbimet",
    title: "Gjithçka që biznesi juaj ka nevojë",
    titleEm: "online.",
    lead: `Jemi pranë jush nga skica e parë deri te lansimi dhe më tej. ${N} merret me strategjinë, dizajnin, zhvillimin dhe mbështetjen — një partner i vetëm, përgjegjës për të gjithë rezultatin.`,
    items: [
      {
        slug: "website-design",
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
        slug: "maintenance-seo",
        title: "Mbështetje & Rritje",
        text: "Hosting, siguri, SEO, përditësime dhe funksione të reja pas lansimit, që produkti juaj të përmirësohet vazhdimisht.",
        tags: ["Hosting", "SEO", "Mbështetje"],
        metaTitle: "Mirëmbajtje Faqesh Interneti, Hosting & SEO",
        intro: [
          "Lansimi është vetëm fillimi. Ne e mbajmë faqen ose software-in tuaj të shpejtë, të sigurt dhe të përditësuar, dhe e ndihmojmë të gjendet në motorët e kërkimit, që të vazhdojë të punojë për biznesin tuaj.",
          "Mbështetja përfshihet në çdo paketë, ndërsa planet mujore opsionale mbulojnë përditësimet, kopjet rezervë, monitorimin dhe funksionet e reja — me një partner që e njeh tashmë projektin tuaj.",
        ],
        includes: [
          "Konfigurim i hosting-ut, domain-it, SSL dhe email-it profesional",
          "Përditësime të rregullta dhe rregullime sigurie",
          "Kopje rezervë dhe monitorim",
          "SEO: strukturë faqesh, metadata, shpejtësi dhe Google Search Console",
          "Përditësime përmbajtjeje dhe faqe të reja",
          "Funksione të reja dhe përmirësime",
        ],
        idealFor: [
          "Biznese pa ekip teknik të brendshëm",
          "Faqe të ngadalta, të vjetruara ose që gjenden me vështirësi në Google",
          "Projekte të ndërtuara nga ne që vazhdojnë të rriten",
          "Faqe ekzistuese që kanë nevojë për një partner teknik të besueshëm",
        ],
        faq: [
          {
            q: "A ofroni mbështetje për faqe që nuk i keni ndërtuar ju?",
            a: "Po. Fillimisht e shqyrtojmë faqen, pastaj propozojmë çfarë nevojitet që ajo të mbetet e sigurt, e shpejtë dhe e lehtë për t'u mirëmbajtur.",
          },
          {
            q: "A mund ta ndihmoni faqen time të dalë në Google?",
            a: "Po. Përmirësojmë SEO-në teknike — shpejtësinë, strukturën, metadata-t, sitemap-in — konfigurojmë Google Search Console dhe ju këshillojmë për përmbajtjen. Renditja varet edhe nga përmbajtja dhe konkurrenca, ndaj nuk premtojmë pozicione të caktuara.",
          },
          {
            q: "A përfshihet mbështetja?",
            a: "Çdo paketë përfshin mbështetje pas lansimit. Përditësimet e vazhdueshme, kopjet rezervë dhe funksionet e reja ofrohen me plane mujore opsionale.",
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
    types: [
      "Faqe interneti",
      "Aplikacion web / Software",
      "Dyqan online",
      "Projekt nga zero",
      "Ridizajnim",
      "Tjetër",
    ],
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
