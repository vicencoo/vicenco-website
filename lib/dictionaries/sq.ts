import { site } from "../site";
import type { Dictionary } from "./en";

// Emri i kompanisë vjen nga lib/site.ts — ndryshojeni aty dhe përditësohen të gjitha tekstet.
const N = site.name;

export const sq: Dictionary = {
  meta: {
    title: `${N} — Faqe Interneti, Software & Produkte Dixhitale`,
    description: `${N} është një studio dixhitale që dizajnon dhe zhvillon faqe interneti, software të personalizuar dhe dyqane online — nga ideja e parë deri te lansimi dhe më tej. Në shqip dhe anglisht.`,
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
        title: "Faqe Interneti Profesionale",
        text: "Faqe të personalizuara për biznese dhe marka, me dizajn të rafinuar, strukturë të qartë dhe performancë të shpejtë në çdo pajisje.",
        tags: ["Dizajn unik", "Për çdo ekran", "E lehtë për t'u ndryshuar"],
      },
      {
        title: "Aplikacione Web & Software",
        text: "Platforma të personalizuara, panele administrimi, portale për klientë, sisteme rezervimi dhe menaxhimi — të ndërtuara sipas mënyrës si funksionon biznesi juaj.",
        tags: ["Panele", "Administrim", "Integrime"],
      },
      {
        title: "Dyqane Online",
        text: "Dyqane online që shesin — nga dyqane të reja deri te katalogë të mëdhenj, me blerje të thjeshtë, pagesa, inventar dhe funksione të personalizuara.",
        tags: ["Dyqane online", "Pagesa", "Katalog"],
      },
      {
        title: "Dizajn UI / UX",
        text: "Ndërfaqe të dizajnuara me qëllim: hierarki e qartë, tipografi e kujdesshme dhe përvoja që njerëzit i përdorin me kënaqësi.",
        tags: ["Wireframe", "Prototipe", "Sisteme dizajni"],
      },
      {
        title: "Projekte nga Zero",
        text: "Keni një ide, por nuk dini nga t'ia nisni? E kthejmë në një plan të qartë, përcaktojmë funksionet dhe ndërtojmë versionin e parë, gati për përdorues realë.",
        tags: ["Strategji", "Planifikim", "MVP"],
      },
      {
        title: "Mbështetje & Rritje",
        text: "Hosting, siguri, SEO, përditësime dhe funksione të reja pas lansimit, që produkti juaj të përmirësohet vazhdimisht.",
        tags: ["Hosting", "SEO", "Mbështetje"],
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
        name: "Trio Travel",
        category: "Udhëtime · Faqe interneti",
        text: "Faqe për agjenci udhëtimesh me paketa turistike, bileta avioni dhe prona, së bashku me një panel administrimi për t’i menaxhuar të gjitha.",
        year: "Online",
        url: "https://www.triotravel.al/",
        image: "/work/triotravel-platform.webp",
      },
      {
        name: "OMW — On My Way",
        category: "Karburante · Faqe interneti",
        text: "Faqe për një rrjet karburantesh me gjetjen e pikës më të afërt dhe një panel për përditësimin e çmimeve në çdo stacion.",
        year: "Online",
        url: "https://www.omw.al/",
        image: "/work/omw-platform.webp",
      },
      {
        name: "Zoi Villa Residence",
        category: "Pasuri të paluajtshme · Faqe interneti",
        text: "Prezantim dygjuhësh për një rezidencë private me apartamente moderne dhe vila ekskluzive.",
        year: "Online",
        url: "https://www.zoi-villa.al/",
        image: "/work/zoi-villa.webp",
      },
      {
        name: "Lotus Dental Clinic",
        category: "Shëndetësi · Faqe interneti",
        text: "Faqe për klinikë dentare me shërbimet, galerinë, vlerësimet e pacientëve dhe rezervim takimesh.",
        year: "Online",
        url: "https://www.lotusdentalclinic.al/",
        image: "/work/lotusdentalclinic.webp",
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
        a: "Po — punojmë në distancë me klientë kudo, në shqip ose anglisht.",
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
    budget: "Buxheti",
    budgets: ["< €1,000", "€1,000 – €3,000", "€3,000 – €7,000", "€7,000+"],
    message: "Na tregoni për projektin tuaj",
    messagePlaceholder:
      "P.sh. Një faqe për biznesin tim me rezervim online dhe panel administrimi…",
    send: "Dërgo mesazhin",
    sent: "Po hapet aplikacioni i email-it…",
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
            "Të dhënat që na dërgoni: kur përdorni formularin e kontaktit, na shkruani me email ose na dërgoni mesazh në WhatsApp apo Instagram, marrim të dhënat që zgjidhni të ndani — si emrin, adresën e email-it, numrin e telefonit, llojin e projektit, buxhetin dhe mesazhin.",
            "Preferenca e gjuhës: faqja e mban mend gjuhën që zgjidhni (shqip ose anglisht) në hapësirën lokale të shfletuesit tuaj. Kjo mbetet në pajisjen tuaj dhe nuk na dërgohet neve.",
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
            "Kjo faqe nuk përdor cookies reklamash apo analitike dhe nuk ju gjurmon në faqe të tjera. Shkronjat dhe imazhet shërbehen nga vetë faqja jonë.",
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
  footer: {
    tagline:
      "Faqe interneti, software dhe dyqane online, të ofruara përmes një procesi të qartë dhe komunikimi të drejtpërdrejtë.",
    company: "Kompania",
    location: "Shqipëri",
    rights: "Të gjitha të drejtat e rezervuara.",
    made: `Dizajnuar & zhvilluar nga ${N}`,
  },
};
