import { site } from "../site";
import type { Dictionary } from "./en";

// Il nome dell'azienda viene da lib/site.ts — modificalo lì e tutti i testi si aggiornano.
const N = site.name;

export const it: Dictionary = {
  meta: {
    title: `${N} — Siti Web, Software & Prodotti Digitali`,
    description: `${N} è uno studio digitale che progetta e sviluppa siti web, software su misura e negozi online — dalla prima idea al lancio e oltre. In italiano, inglese e albanese.`,
  },
  nav: {
    home: "Home",
    services: "Servizi",
    work: "Progetti",
    about: "Chi siamo",
    contact: "Contatti",
    cta: "Inizia un progetto",
    menu: "Menu",
    close: "Chiudi",
  },
  pages: {
    services:
      "Siti web, software su misura, negozi online, design UI/UX e assistenza continua — tutto ciò di cui un'azienda ha bisogno per crescere online.",
    work: "Progetti online per aziende di settori diversi — ognuno progettato e sviluppato da zero.",
    about: `${N} è uno studio digitale attento ai dettagli, che realizza siti web e software capaci di far crescere le aziende.`,
    contact:
      "Raccontaci il tuo progetto — ti rispondiamo entro 24 ore con idee e prossimi passi.",
  },
  more: {
    services: "Scopri tutti i servizi",
    work: "Guarda tutti i progetti",
    about: "Scopri di più su di noi",
  },
  cta: {
    title: "Hai un progetto in mente?",
    titleEm: "Parliamone.",
    lead: "Consulenza gratuita, preventivo chiaro e risposta entro 24 ore.",
    button: "Inizia il tuo progetto",
  },
  about: {
    eyebrow: "Chi siamo",
    title: "Uno studio digitale,",
    titleEm: "fondato sulla cura artigianale.",
    lead: `${N} progetta e sviluppa siti web, software e negozi online per aziende che vogliono una presenza digitale forte quanto il loro lavoro.`,
    approachTitle: "Come lavoriamo",
    valuesTitle: "Cosa puoi aspettarti",
  },
  hero: {
    eyebrow: "Studio web & software",
    titleA: "Siti web & software,",
    titleB: "realizzati come",
    titleEm: "opere d'arte.",
    lead: `${N} progetta e sviluppa siti web, applicazioni web e negozi online su misura — dalla prima idea al lancio e oltre — per aziende che vogliono distinguersi.`,
    primary: "Inizia il tuo progetto",
    secondary: "Guarda i progetti",
    scroll: "Scorri",
  },
  marquee: [
    "Siti web",
    "Applicazioni web",
    "Software su misura",
    "Negozi online",
    "Pannelli di gestione",
    "Design UI / UX",
    "Sistemi di prenotazione",
    "SEO",
  ],
  services: {
    eyebrow: "Servizi",
    title: "Tutto ciò di cui la tua azienda ha bisogno",
    titleEm: "online.",
    lead: `Ti affianchiamo dal primo schizzo al lancio e oltre. ${N} si occupa di strategia, design, sviluppo e assistenza — un unico partner, responsabile dell'intero risultato.`,
    items: [
      {
        title: "Siti Web Professionali",
        text: "Siti su misura per aziende e brand, con un design raffinato, una struttura chiara e prestazioni veloci su ogni dispositivo.",
        tags: ["Design unico", "Per ogni schermo", "Facile da aggiornare"],
      },
      {
        title: "Applicazioni Web & Software",
        text: "Piattaforme su misura, pannelli di gestione, portali clienti, sistemi di prenotazione e gestionali — costruiti attorno al modo in cui lavora la tua azienda.",
        tags: ["Dashboard", "Gestione", "Integrazioni"],
      },
      {
        title: "Negozi Online",
        text: "Negozi online che vendono — dai nuovi shop ai grandi cataloghi, con acquisti semplici, pagamenti, magazzino e funzionalità personalizzate.",
        tags: ["E-commerce", "Pagamenti", "Catalogo"],
      },
      {
        title: "Design UI / UX",
        text: "Interfacce progettate con uno scopo: gerarchia chiara, tipografia curata ed esperienze che le persone usano con piacere.",
        tags: ["Wireframe", "Prototipi", "Design system"],
      },
      {
        title: "Progetti da Zero",
        text: "Hai un'idea ma non sai da dove cominciare? La trasformiamo in un piano chiaro, definiamo le funzionalità e costruiamo la prima versione, pronta per utenti reali.",
        tags: ["Strategia", "Pianificazione", "MVP"],
      },
      {
        title: "Assistenza & Crescita",
        text: "Hosting, sicurezza, SEO, aggiornamenti e nuove funzionalità dopo il lancio, perché il tuo prodotto continui a migliorare.",
        tags: ["Hosting", "SEO", "Assistenza"],
      },
    ],
  },
  work: {
    eyebrow: "Progetti selezionati",
    title: "Realizzati con",
    titleEm: "passione.",
    lead: "Siti web e piattaforme online per aziende di settori diversi — ognuno progettato e sviluppato da zero.",
    view: "Visita il progetto",
    items: [
      {
        name: "L’Aurora Pizzeria & Ristorante",
        category: "Ristorante · Sito web",
        text: "Sito bilingue per una pizzeria nel cuore di Pavia, con un elegante menù digitale, la storia di due fratelli e la prenotazione del tavolo online.",
        year: "Online",
        url: "https://www.pizzeriaaurorapavia.it/",
        image: "/work/pizzeria-aurora.webp",
      },
      {
        name: "Trio Travel",
        category: "Viaggi · Sito web",
        text: "Sito per un'agenzia di viaggi con pacchetti turistici, biglietti aerei e immobili, insieme a un pannello di gestione per amministrare tutto.",
        year: "Online",
        url: "https://www.triotravel.al/",
        image: "/work/triotravel-platform.webp",
      },
      {
        name: "OMW — On My Way",
        category: "Carburanti · Sito web",
        text: "Sito per una rete di distributori di carburante con la ricerca della stazione più vicina e un pannello per aggiornare i prezzi di ogni stazione.",
        year: "Online",
        url: "https://www.omw.al/",
        image: "/work/omw-platform.webp",
      },
      {
        name: "Zoi Villa Residence",
        category: "Immobiliare · Sito web",
        text: "Presentazione bilingue per una residenza privata con appartamenti moderni e ville esclusive.",
        year: "Online",
        url: "https://www.zoi-villa.al/",
        image: "/work/zoi-villa.webp",
      },
      {
        name: "Lotus Dental Clinic",
        category: "Sanità · Sito web",
        text: "Sito per una clinica dentale con servizi, galleria, recensioni dei pazienti e prenotazione degli appuntamenti.",
        year: "Online",
        url: "https://www.lotusdentalclinic.al/",
        image: "/work/lotusdentalclinic.webp",
      },
    ],
  },
  process: {
    eyebrow: "Il processo",
    title: "Dall'idea al lancio,",
    titleEm: "senza intoppi.",
    step: "Fase",
    steps: [
      {
        title: "Analisi",
        text: "Parliamo dei tuoi obiettivi, del tuo pubblico e della tua visione, poi definiamo ambito, tempi e un preventivo chiaro.",
      },
      {
        title: "Design",
        text: "La struttura, le pagine e un design dettagliato che approvi prima che inizi lo sviluppo.",
      },
      {
        title: "Sviluppo",
        text: "Codice pulito e moderno — adatto a ogni schermo, sicuro e veloce — con anteprime regolari per seguire i progressi.",
      },
      {
        title: "Lancio & Crescita",
        text: "Dominio, hosting, SEO e analytics configurati. Poi assistenza continua mentre la tua azienda cresce.",
      },
    ],
  },
  manifesto: {
    quote:
      "Il tuo sito è la prima stretta di mano con ogni cliente. Deve essere",
    quoteEm: "indimenticabile.",
    values: [
      {
        title: "Collaborazione diretta",
        text: "Parli direttamente con noi — niente intermediari, niente messaggi persi.",
      },
      {
        title: "Attenzione ai dettagli",
        text: "Ogni pagina, interazione e millisecondo è pensato con cura.",
      },
      {
        title: "Costruito per durare",
        text: "Tecnologie moderne e affidabili, che restano veloci, sicure e facili da ampliare.",
      },
      {
        title: "Trasparenza",
        text: "Prezzi chiari, tempi chiari, nessuna sorpresa.",
      },
    ],
  },
  faq: {
    eyebrow: "Domande",
    title: "Domande,",
    titleEm: "con risposta.",
    items: [
      {
        q: "Quanto dura un progetto?",
        a: "Un sito più piccolo richiede di solito 1–2 settimane; un sito completo 3–5 settimane. Software su misura e negozi online dipendono dall'ambito del progetto — riceverai i tempi esatti insieme al preventivo.",
      },
      {
        q: "Potrò modificare i contenuti da solo?",
        a: "Sì. I progetti possono includere un semplice pannello di gestione, per aggiornare testi, foto, prodotti e prezzi senza toccare il codice.",
      },
      {
        q: "Potete prendere in carico un progetto esistente?",
        a: "Sì. Possiamo migliorare, riprogettare o ampliare un sito, un negozio o un sistema esistente — oppure ricostruirlo da zero quando è la soluzione migliore.",
      },
      {
        q: "Vi occupate di dominio e hosting?",
        a: "Certamente. Possiamo configurare dominio, email professionale, hosting e SSL, oppure lavorare con quello che hai già.",
      },
      {
        q: "Lavorate con clienti fuori dall'Albania?",
        a: "Sì — lavoriamo da remoto con clienti ovunque, in italiano, inglese o albanese.",
      },
      {
        q: "Come funziona il pagamento?",
        a: "Di solito 50% all'inizio e 50% al lancio. Per i progetti più grandi, il pagamento può essere suddiviso in fasi.",
      },
      {
        q: "Cosa succede dopo il lancio?",
        a: "L'assistenza è inclusa in ogni pacchetto, con piani mensili opzionali per aggiornamenti, backup e nuove funzionalità.",
      },
    ],
  },
  contact: {
    eyebrow: "Contatti",
    title: "Creiamo qualcosa di",
    titleEm: "straordinario.",
    promises: [
      "Consulenza gratuita",
      "Risposta entro 24 ore",
      "Preventivo chiaro, con tempi e prezzo",
    ],
    name: "Il tuo nome",
    email: "Indirizzo email",
    type: "Tipo di progetto",
    types: [
      "Sito web",
      "Applicazione web / Software",
      "Negozio online",
      "Progetto da zero",
      "Restyling",
      "Altro",
    ],
    phone: "Numero di telefono",
    message: "Descrizione del progetto",
    messagePlaceholder:
      "Es. Un sito per la mia attività con prenotazione online e pannello di gestione…",
    send: "Invia il messaggio",
    sending: "Invio in corso…",
    sent: "Grazie! Il tuo messaggio è stato inviato — ti contatteremo a breve.",
    error: "Qualcosa è andato storto. Riprova oppure scrivici a",
    or: "Oppure contattaci direttamente",
    emailLabel: "Email",
    whatsapp: "WhatsApp",
    whatsappCta: "Scrivici su WhatsApp",
    instagram: "Instagram",
    subject: "Richiesta per un nuovo progetto",
  },
  legal: {
    updated: "Ultimo aggiornamento",
    date: "10 ottobre 2026",
    toc: "In questa pagina",
    privacy: {
      label: "Informativa sulla Privacy",
      title: "Informativa sulla",
      titleEm: "Privacy.",
      lead: "Come raccogliamo, utilizziamo e proteggiamo i tuoi dati quando visiti questo sito o ci contatti.",
      sections: [
        {
          title: "Chi siamo",
          body: [
            `${N} è uno studio digitale che progetta e sviluppa siti web, software e negozi online. Questa informativa spiega quali dati personali raccogliamo quando visiti questo sito o ci contatti, e come li utilizziamo.`,
            `Per qualsiasi domanda su questa informativa, puoi scriverci a ${site.email}.`,
          ],
        },
        {
          title: "I dati che raccogliamo",
          body: [
            "Dati che ci invii: quando usi il modulo di contatto, ci scrivi via email o ci mandi un messaggio su WhatsApp o Instagram, riceviamo i dati che scegli di condividere — come nome, indirizzo email, numero di telefono, tipo di progetto e descrizione del progetto.",
            "Preferenza della lingua: il sito ricorda la lingua che selezioni (italiano, inglese o albanese) nella memoria locale del tuo browser. Resta sul tuo dispositivo e non viene inviata a noi.",
            "Dati tecnici: come la maggior parte dei siti, il nostro fornitore di hosting può registrare automaticamente alcuni dati tecnici di base, come indirizzo IP, tipo di browser e pagine visitate, per motivi di sicurezza e per il corretto funzionamento del sito.",
          ],
        },
        {
          title: "Come utilizziamo i dati",
          body: [
            "Utilizziamo i dati che ci invii solo per risponderti, preparare preventivi, fornire i servizi che richiedi e comunicare con te riguardo al progetto. Non li usiamo per il marketing senza il tuo consenso e non li vendiamo mai.",
          ],
        },
        {
          title: "Il modulo di contatto",
          body: [
            "Il modulo di contatto non salva il tuo messaggio sui nostri server. Quando premi il pulsante di invio, si apre la tua app di posta con il messaggio già pronto, e nulla viene inviato finché non invii tu stesso quell'email.",
          ],
        },
        {
          title: "Cookie e tracciamento",
          body: [
            "Questo sito non utilizza cookie e non ti traccia su altri siti. Usiamo Vercel Web Analytics per contare le visite — funziona senza cookie e raccoglie solo dati anonimi e aggregati (come la pagina visitata, il paese e il tipo di dispositivo), quindi non può identificarti. Font e immagini sono serviti direttamente dal nostro sito.",
          ],
        },
        {
          title: "Condivisione dei dati",
          body: [
            "Condividiamo i dati personali solo quando necessario per fornire i nostri servizi — ad esempio con i fornitori di email, hosting o comunicazione (come WhatsApp) che li trattano per nostro conto — oppure quando richiesto dalla legge. I messaggi inviati su WhatsApp o Instagram sono soggetti anche alle informative sulla privacy di queste piattaforme.",
          ],
        },
        {
          title: "Per quanto tempo li conserviamo",
          body: [
            "Conserviamo richieste e corrispondenza relative ai progetti per il tempo necessario a gestire la tua richiesta e la nostra collaborazione, nonché per adempiere agli obblighi legali o contabili. Trascorso tale periodo, vengono cancellati.",
          ],
        },
        {
          title: "I tuoi diritti",
          body: [
            `In qualsiasi momento puoi chiedere di accedere, correggere o cancellare i dati personali che abbiamo su di te, oppure di interromperne l'utilizzo. Scrivici a ${site.email} e ti risponderemo entro un tempo ragionevole, in conformità con le leggi sulla protezione dei dati che si applicano a te.`,
          ],
        },
        {
          title: "Modifiche a questa informativa",
          body: [
            "Di tanto in tanto potremmo aggiornare questa informativa. La versione più recente è sempre disponibile su questa pagina, con la data dell'ultimo aggiornamento indicata in alto.",
          ],
        },
      ],
    },
    terms: {
      label: "Termini di Servizio",
      title: "Termini di",
      titleEm: "Servizio.",
      lead: "Le regole che si applicano quando usi questo sito e quando collabori con noi.",
      sections: [
        {
          title: "Informazioni su questi termini",
          body: [
            `Questi termini si applicano all'uso di questo sito e ai servizi offerti da ${N} — inclusi siti web, applicazioni web, software, negozi online, design e assistenza. Usando il sito o collaborando con noi, accetti questi termini.`,
            "I dettagli specifici di ogni progetto sono definiti nel relativo preventivo o accordo, che prevale nel caso in cui differisca da questi termini.",
          ],
        },
        {
          title: "Preventivi e prezzi",
          body: [
            "Ogni progetto inizia con un preventivo scritto che descrive ambito, tempi e prezzo. Il lavoro inizia dopo l'accettazione del preventivo. Le richieste al di fuori dell'ambito concordato vengono quotate separatamente, prima di iniziare qualsiasi lavoro aggiuntivo.",
          ],
        },
        {
          title: "Pagamenti",
          body: [
            "Salvo diverso accordo, il pagamento avviene per il 50% prima dell'inizio dei lavori e per il 50% al lancio. I progetti più grandi possono essere suddivisi in fasi. I ritardi nei pagamenti possono sospendere il progetto e posticipare la data di consegna.",
          ],
        },
        {
          title: "I tuoi impegni",
          body: [
            "Perché il progetto proceda secondo i piani, ti impegni a fornirci in tempo i contenuti (testi, foto, logo, informazioni sui prodotti), gli accessi e i feedback, e ad assicurarti di avere i diritti su qualsiasi materiale che ci invii. Ritardi nei feedback o nei contenuti possono allungare i tempi.",
          ],
        },
        {
          title: "Tempi e consegna",
          body: [
            "I tempi indicati nel preventivo sono stime basate sull'ambito concordato e su feedback forniti tempestivamente. Ti teniamo aggiornato durante tutto il progetto e ti avvisiamo subito se qualcosa influisce sulle tempistiche.",
          ],
        },
        {
          title: "Proprietà e portfolio",
          body: [
            "Una volta saldato completamente il progetto, il design, i contenuti e il codice finale creati appositamente per te sono di tua proprietà. Strumenti, librerie, font, temi o plugin di terze parti restano soggetti alle rispettive licenze.",
            "Salvo tua diversa richiesta, possiamo presentare il progetto completato nel nostro portfolio.",
          ],
        },
        {
          title: "Servizi di terze parti",
          body: [
            "I progetti si basano spesso su servizi come hosting, domini, fornitori di pagamento o piattaforme di e-commerce. Costi, disponibilità e condizioni sono stabiliti da tali fornitori e non siamo responsabili per le loro interruzioni o modifiche — anche se ti aiuteremo a risolvere eventuali problemi.",
          ],
        },
        {
          title: "Assistenza e garanzia",
          body: [
            "Dopo il lancio, correggiamo i difetti nel lavoro consegnato durante il periodo di assistenza incluso nel tuo pacchetto. Aggiornamenti continui, nuove funzionalità e manutenzione sono offerti tramite piani mensili opzionali o preventivi separati.",
          ],
        },
        {
          title: "Limitazione di responsabilità",
          body: [
            "Realizziamo ogni progetto con cura, ma non possiamo garantire che un sito o un sistema sia completamente privo di interruzioni o errori. Nei limiti consentiti dalla legge, la nostra responsabilità complessiva per un progetto è limitata all'importo pagato per quel progetto, e non siamo responsabili per perdite indirette, come mancati profitti o dati persi.",
          ],
        },
        {
          title: "Conclusione di un progetto",
          body: [
            "Ciascuna parte può concludere un progetto con comunicazione scritta. In tal caso, paghi il lavoro svolto fino a quel momento e noi ti consegniamo le parti completate del lavoro una volta saldato il pagamento.",
          ],
        },
        {
          title: "Utilizzo di questo sito",
          body: [
            `I contenuti di questo sito — inclusi testi, design e immagini dei progetti — appartengono a ${N} o ai suoi clienti e non possono essere copiati o riutilizzati senza autorizzazione. I link ad altri siti sono forniti per comodità e non siamo responsabili del loro contenuto.`,
          ],
        },
        {
          title: "Legge applicabile e modifiche",
          body: [
            `Questi termini sono regolati dalle leggi della Repubblica d'Albania. Di tanto in tanto potremmo aggiornarli; la versione più recente è sempre pubblicata su questa pagina. Per qualsiasi domanda, scrivici a ${site.email}.`,
          ],
        },
      ],
    },
  },
  footer: {
    tagline:
      "Siti web, software e negozi online, realizzati attraverso un processo chiaro e una comunicazione diretta.",
    company: "Azienda",
    location: "Albania",
    rights: "Tutti i diritti riservati.",
    made: `Progettato & sviluppato da ${N}`,
  },
};
