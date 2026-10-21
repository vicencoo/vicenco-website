import { site } from "../site";
import type { Dictionary } from "./en";

// Il nome dell'azienda viene da lib/site.ts — modificalo lì e tutti i testi si aggiornano.
const N = site.name;

export const it: Dictionary = {
  meta: {
    title: `${N} — Siti Web, Software & Prodotti Digitali`,
    description: `${N} è uno studio digitale che progetta e sviluppa siti web, software su misura e negozi online — dalla prima idea al lancio e oltre. In italiano, inglese e albanese.`,
    tagline: "Siti Web, Software & Prodotti Digitali",
    pages: {
      services: "Servizi di Web Design & Sviluppo",
      work: "I Nostri Progetti: Siti Web & Software",
      about: "Chi Siamo",
      contact: "Contattaci",
    },
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
    language: "Lingua",
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
        slug: "website-design",
        title: "Siti Web Professionali",
        text: "Siti su misura per aziende e brand, con un design raffinato, una struttura chiara e prestazioni veloci su ogni dispositivo.",
        tags: ["Design unico", "Per ogni schermo", "Facile da aggiornare"],
        metaTitle: "Realizzazione Siti Web Professionali",
        intro: [
          "Il tuo sito è spesso il primo luogo in cui un cliente conosce la tua azienda. Progettiamo e sviluppiamo siti su misura — non template — con una struttura chiara, un design raffinato e prestazioni veloci su smartphone, tablet e computer.",
          "Ogni sito è costruito per permetterti di aggiornare da solo testi, immagini e pagine, e nasce già con le basi per i motori di ricerca: codice pulito, caricamento veloce, titoli e descrizioni per ogni pagina e sitemap.",
        ],
        includes: [
          "Design su misura basato sul tuo brand",
          "Layout responsive per ogni schermo",
          "Caricamento veloce e codice moderno e sicuro",
          "Pannello di gestione semplice per i contenuti",
          "Modulo di contatto, WhatsApp e mappa",
          "SEO di base: titoli, descrizioni, sitemap",
          "Versioni multilingue quando servono",
          "Configurazione di dominio, hosting e SSL",
        ],
        idealFor: [
          "Aziende che hanno bisogno di una presenza online professionale",
          "Ristoranti, cliniche, hotel e attività locali",
          "Brand che vogliono sostituire un sito datato o lento",
          "Attività con clienti che parlano lingue diverse",
        ],
        faq: [
          {
            q: "Quanto tempo serve per realizzare un sito web?",
            a: "Un sito più piccolo richiede di solito 1–2 settimane, un sito aziendale completo 3–5 settimane, in base al numero di pagine e funzionalità. Ricevi una tempistica precisa insieme al preventivo.",
          },
          {
            q: "Il mio sito funzionerà bene da smartphone?",
            a: "Sì. Ogni sito viene progettato e testato per smartphone, tablet e computer, perché la maggior parte dei visitatori arriva da mobile.",
          },
          {
            q: "Potete rifare il mio sito attuale?",
            a: "Sì. Possiamo riprogettare il tuo sito, mantenere i contenuti che funzionano e portarlo su una base più veloce e moderna.",
          },
        ],
      },
      {
        slug: "web-applications",
        title: "Applicazioni Web & Software",
        text: "Piattaforme su misura, pannelli di gestione, portali clienti, sistemi di prenotazione e gestionali — costruiti attorno al modo in cui lavora la tua azienda.",
        tags: ["Dashboard", "Gestione", "Integrazioni"],
        metaTitle: "Sviluppo di Applicazioni Web & Software su Misura",
        intro: [
          "Quando fogli Excel, carta o strumenti già pronti iniziano a rallentare il tuo team, il software su misura fa la differenza. Sviluppiamo applicazioni web attorno al modo in cui lavora davvero la tua azienda — pannelli di gestione, portali clienti, sistemi di prenotazione e gestionali.",
          "Partiamo dall'analisi dei tuoi processi, poi progettiamo e sviluppiamo l'applicazione passo dopo passo, con anteprime regolari per provarla mentre cresce. Funziona nel browser, quindi il tuo team può usarla da qualsiasi dispositivo senza installare nulla.",
        ],
        includes: [
          "Analisi dei processi e dei requisiti",
          "Pannelli di gestione e dashboard",
          "Portali clienti con account sicuri",
          "Sistemi di prenotazione e pianificazione",
          "Ruoli e permessi utente",
          "Integrazioni con pagamenti, email e altri servizi",
          "Hosting, backup e assistenza continua",
        ],
        idealFor: [
          "Aziende che gestiscono il lavoro su Excel o su carta",
          "Aziende che hanno bisogno di uno strumento interno su misura",
          "Attività di servizi che ricevono prenotazioni o richieste online",
          "Startup che costruiscono un nuovo prodotto digitale",
        ],
        faq: [
          {
            q: "Quanto costa un software su misura?",
            a: "Dipende dalle funzionalità e dalla complessità. Dopo una consulenza gratuita ti inviamo un preventivo scritto con perimetro, tempistiche e prezzo, così conosci il costo prima di iniziare.",
          },
          {
            q: "Il codice sarà mio?",
            a: "Sì. Una volta saldato il progetto, il design, i contenuti e il codice creati appositamente per te sono di tua proprietà.",
          },
          {
            q: "L'applicazione potrà crescere in futuro?",
            a: "Sì. Usiamo tecnologie moderne e affidabili, così è possibile aggiungere nuove funzionalità man mano che l'azienda cresce.",
          },
        ],
      },
      {
        slug: "e-commerce",
        title: "Negozi Online",
        text: "Negozi online che vendono — dai nuovi shop ai grandi cataloghi, con acquisti semplici, pagamenti, magazzino e funzionalità personalizzate.",
        tags: ["E-commerce", "Pagamenti", "Catalogo"],
        metaTitle: "Realizzazione E-commerce & Negozi Online",
        intro: [
          "Un negozio online ha bisogno di più di un elenco di prodotti. Realizziamo e-commerce facili da navigare, veloci da caricare e semplici da cui acquistare — dai nuovi shop con pochi prodotti ai grandi cataloghi.",
          "Gestisci prodotti, prezzi, magazzino e ordini da un pannello chiaro, mentre i clienti acquistano facilmente da qualsiasi dispositivo. Configuriamo pagamenti, opzioni di spedizione e le funzionalità su misura di cui ha bisogno il tuo negozio.",
        ],
        includes: [
          "Design del negozio su misura",
          "Catalogo con categorie, filtri e ricerca",
          "Carrello e checkout semplice",
          "Integrazione dei pagamenti online",
          "Gestione di magazzino e ordini",
          "Codici sconto e promozioni",
          "Pagine prodotto ottimizzate per i motori di ricerca",
        ],
        idealFor: [
          "Negozi che vogliono iniziare a vendere online",
          "Attività che vendono sui social e vogliono un proprio negozio",
          "Negozi con grandi cataloghi che necessitano di una gestione migliore",
          "Brand che hanno superato la loro attuale piattaforma e-commerce",
        ],
        faq: [
          {
            q: "Quali metodi di pagamento può accettare il mio negozio?",
            a: "Integriamo i sistemi di pagamento disponibili nel tuo paese, come carte e bonifico bancario, e possiamo aggiungere il pagamento alla consegna.",
          },
          {
            q: "Posso gestire i prodotti da solo?",
            a: "Sì. Aggiungi e modifichi prodotti, prezzi, foto e magazzino da un pannello semplice, senza toccare il codice.",
          },
          {
            q: "Potete trasferire il mio negozio attuale su un nuovo sito?",
            a: "Sì. Possiamo migrare prodotti e contenuti e costruire attorno a essi un negozio più veloce e curato.",
          },
        ],
      },
      {
        slug: "ui-ux-design",
        title: "Design UI / UX",
        text: "Interfacce progettate con uno scopo: gerarchia chiara, tipografia curata ed esperienze che le persone usano con piacere.",
        tags: ["Wireframe", "Prototipi", "Design system"],
        metaTitle: "Design UI/UX per Siti Web & App",
        intro: [
          "Un buon design non riguarda solo l'aspetto, ma quanto facilmente le persone trovano ciò che cercano. Progettiamo interfacce con una gerarchia chiara, una tipografia curata e percorsi che guidano i visitatori verso l'azione.",
          "Lavoriamo dalla struttura ai dettagli: prima i wireframe, poi il design definitivo e prototipi cliccabili che approvi prima dello sviluppo — così non ci sono sorprese dopo.",
        ],
        includes: [
          "Ricerca sugli utenti e struttura dei contenuti",
          "Wireframe di pagine e flussi principali",
          "Design visivo definitivo",
          "Prototipi cliccabili",
          "Design system e librerie di componenti",
          "Design per smartphone, tablet e desktop",
        ],
        idealFor: [
          "Prodotti difficili da usare o con poche conversioni",
          "Startup che hanno bisogno di una prima versione curata",
          "Team con sviluppatori ma senza designer",
          "Brand che rinnovano la propria identità digitale",
        ],
        faq: [
          {
            q: "Potete occuparvi solo del design, senza sviluppo?",
            a: "Sì. Possiamo consegnare design e prototipi al tuo team di sviluppo, oppure occuparci anche dello sviluppo.",
          },
          {
            q: "Cosa ricevo alla fine?",
            a: "File di design organizzati, un prototipo e i componenti e gli stili di cui i tuoi sviluppatori hanno bisogno per realizzare il prodotto in modo coerente.",
          },
          {
            q: "Come vi assicurate che il design funzioni per gli utenti?",
            a: "Partiamo dai tuoi obiettivi e dalle esigenze degli utenti, testiamo i flussi nei prototipi e li perfezioniamo con il tuo feedback prima dello sviluppo.",
          },
        ],
      },
      {
        slug: "mvp-development",
        title: "Progetti da Zero",
        text: "Hai un'idea ma non sai da dove cominciare? La trasformiamo in un piano chiaro, definiamo le funzionalità e costruiamo la prima versione, pronta per utenti reali.",
        tags: ["Strategia", "Pianificazione", "MVP"],
        metaTitle: "Sviluppo MVP & Nuovi Prodotti Digitali",
        intro: [
          "Molti grandi prodotti nascono da un'idea senza un piano. Ti aiutiamo a trasformarla in qualcosa di concreto: chiariamo l'obiettivo, definiamo le funzionalità essenziali e pianifichiamo il lavoro perché il budget vada dove conta.",
          "Poi progettiamo e sviluppiamo una prima versione — un minimum viable product (MVP) — pronta per utenti reali. Puoi lanciarla, raccogliere feedback e far crescere il prodotto con fiducia.",
        ],
        includes: [
          "Consulenza gratuita per capire la tua idea",
          "Elenco delle funzionalità e priorità per la prima versione",
          "Piano tecnico, tempistiche e budget",
          "Design delle schermate principali",
          "Sviluppo della prima versione funzionante",
          "Lancio, hosting e configurazione delle statistiche",
          "Supporto per le versioni successive",
        ],
        idealFor: [
          "Fondatori con un'idea ma senza un team tecnico",
          "Aziende che lanciano un nuovo servizio digitale",
          "Team che vogliono testare un'idea prima di un grande investimento",
          "Progetti che hanno bisogno di un piano chiaro prima di iniziare",
        ],
        faq: [
          {
            q: "Ho solo un'idea. Basta per iniziare?",
            a: "Sì. Iniziamo con una conversazione, poi trasformiamo l'idea in un piano scritto con funzionalità, tempistiche e prezzo.",
          },
          {
            q: "Che cos'è un MVP?",
            a: "Un minimum viable product è la prima versione con solo le funzionalità necessarie a risolvere il problema principale per utenti reali. Ti permette di lanciare prima e capire cosa sviluppare dopo.",
          },
          {
            q: "Continuerete a lavorare con me dopo il lancio?",
            a: "Sì. L'assistenza è inclusa e possiamo continuare a sviluppare nuove funzionalità man mano che il prodotto cresce.",
          },
        ],
      },
      {
        slug: "maintenance-seo",
        title: "Assistenza & Crescita",
        text: "Hosting, sicurezza, SEO, aggiornamenti e nuove funzionalità dopo il lancio, perché il tuo prodotto continui a migliorare.",
        tags: ["Hosting", "SEO", "Assistenza"],
        metaTitle: "Manutenzione Siti Web, Hosting & SEO",
        intro: [
          "Il lancio è solo l'inizio. Manteniamo il tuo sito o software veloce, sicuro e aggiornato, e lo aiutiamo a farsi trovare sui motori di ricerca, perché continui a lavorare per la tua azienda.",
          "L'assistenza è inclusa in ogni pacchetto, mentre i piani mensili opzionali coprono aggiornamenti, backup, monitoraggio e nuove funzionalità — con un partner che conosce già il tuo progetto.",
        ],
        includes: [
          "Configurazione di hosting, dominio, SSL ed email professionale",
          "Aggiornamenti regolari e correzioni di sicurezza",
          "Backup e monitoraggio",
          "SEO: struttura delle pagine, metadati, velocità e Google Search Console",
          "Aggiornamento dei contenuti e nuove pagine",
          "Nuove funzionalità e miglioramenti",
        ],
        idealFor: [
          "Aziende senza un team tecnico interno",
          "Siti lenti, datati o difficili da trovare su Google",
          "Progetti realizzati da noi che continuano a crescere",
          "Siti esistenti che hanno bisogno di un partner tecnico affidabile",
        ],
        faq: [
          {
            q: "Offrite assistenza per siti che non avete realizzato voi?",
            a: "Sì. Prima analizziamo il sito, poi proponiamo ciò che serve per mantenerlo sicuro, veloce e facile da gestire.",
          },
          {
            q: "Potete aiutare il mio sito a comparire su Google?",
            a: "Sì. Miglioriamo la SEO tecnica — velocità, struttura, metadati, sitemap — configuriamo Google Search Console e ti consigliamo sui contenuti. Il posizionamento dipende anche da contenuti e concorrenza, quindi non promettiamo posizioni specifiche.",
          },
          {
            q: "L'assistenza è inclusa?",
            a: "Ogni pacchetto include assistenza dopo il lancio. Aggiornamenti continui, backup e nuove funzionalità sono disponibili con piani mensili opzionali.",
          },
        ],
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
        slug: "pizzeria-aurora",
        name: "L’Aurora Pizzeria & Ristorante",
        category: "Ristorante · Sito web",
        text: "Sito bilingue per una pizzeria nel cuore di Pavia, con un elegante menù digitale, la storia di due fratelli e la prenotazione del tavolo online.",
        year: "Online",
        url: "https://www.pizzeriaaurorapavia.it/",
        image: "/work/pizzeria-aurora.webp",
        services: ["website-design", "ui-ux-design"],
        overview: [
          "L’Aurora è una pizzeria e ristorante nel centro storico di Pavia, gestita dai fratelli Klaudjo e Marko. Impasto leggero, materie prime selezionate con cura e un'atmosfera calda e informale la rendono speciale — e il sito doveva trasmettere proprio questo.",
          "Abbiamo progettato e sviluppato un sito in italiano e inglese con la storia dei fratelli, il menù digitale completo con prezzi, una galleria fotografica, le indicazioni stradali e la prenotazione del tavolo online — veloce e semplice sugli smartphone che gli ospiti usano per scegliere dove mangiare.",
        ],
        features: [
          {
            title: "Sito pubblico",
            items: [
              {
                title: "Menù digitale",
                text: "Il menù completo — antipasti, pizze classiche e speciali, primi e secondi — ogni piatto con descrizione e prezzo.",
              },
              {
                title: "Prenotazioni online",
                text: "Gli ospiti prenotano un tavolo online in pochi tocchi, oppure chiamano il ristorante direttamente dalla pagina.",
              },
              {
                title: "La nostra storia",
                text: "Una pagina dedicata ai fratelli e alla storia del ristorante.",
              },
              {
                title: "Galleria dell'atmosfera",
                text: "Foto dei piatti e della sala, perché gli ospiti sappiano cosa aspettarsi.",
              },
              {
                title: "Posizione e indicazioni",
                text: "L'indirizzo nel centro storico con indicazioni stradali in un tocco.",
              },
              {
                title: "Italiano e inglese",
                text: "Versioni complete per clienti locali e turisti.",
              },
            ],
          },
        ],
      },
      {
        slug: "trio-travel",
        name: "Trio Travel",
        category: "Viaggi & immobili · Sito & gestionale",
        text: "Sito per un'agenzia di viaggi con pacchetti turistici, biglietti aerei e immobili, insieme a un pannello di gestione per amministrare tutto.",
        year: "Online",
        url: "https://www.triotravel.al/",
        image: "/work/triotravel-platform.webp",
        services: ["website-design", "web-applications"],
        overview: [
          "Trio Travel & Immo è un'agenzia di viaggi e immobiliare a Valona che offre molto più dei viaggi: biglietti aerei, pacchetti turistici, assistenza visti, assicurazioni Albsig, pagamento di bollette e multe, trasferimenti MoneyGram e immobili in affitto e in vendita. Aveva bisogno di un'unica piattaforma per presentare tutto — e di un gestionale per il lavoro quotidiano dell'agenzia.",
          "Abbiamo realizzato un sito pubblico che riunisce tutti i servizi e un pannello di gestione su misura in cui il team gestisce immobili, pacchetti e offerte di voli, registra le assicurazioni e i check-in dei clienti e riceve promemoria al momento giusto — così nulla viene dimenticato.",
        ],
        features: [
          {
            title: "Sito pubblico",
            items: [
              {
                title: "Pacchetti turistici",
                text: "Offerte stagionali — festività, Natale, le mete più richieste — con notti, categoria dell'hotel e prezzo a persona, più richieste di pacchetti personalizzati.",
              },
              {
                title: "Offerte di voli",
                text: "Tratte con codici aeroportuali e prezzi a partire da, con contatto diretto con l'agenzia per prenotare.",
              },
              {
                title: "Immobili in affitto e in vendita",
                text: "Appartamenti, case, ville, terreni e spazi commerciali con locali, superficie e prezzo, divisi tra affitti e vendite.",
              },
              {
                title: "Progetto residenziale in evidenza",
                text: "Una presentazione dedicata a Zoi Villa Residence con appartamenti, unità in vendita e posti auto.",
              },
              {
                title: "Servizi dell'agenzia",
                text: "Assicurazioni Albsig (auto, moto, imbarcazioni, casa, vita e viaggio), pagamento di bollette e multe e MoneyGram, spiegati in un unico posto.",
              },
              {
                title: "Destinazioni e FAQ",
                text: "Le mete più amate e risposte chiare su biglietti, pacchetti, visti e cancellazioni.",
              },
              {
                title: "WhatsApp e contatti",
                text: "Pulsanti di contatto rapido in ogni sezione, per chiedere subito informazioni su un'offerta.",
              },
            ],
          },
          {
            title: "Pannello di gestione",
            items: [
              {
                title: "Gestione immobili",
                text: "Aggiungere, modificare e pubblicare immobili in affitto o in vendita, con foto, dettagli e stato.",
              },
              {
                title: "Pacchetti e voli",
                text: "Creare e aggiornare pacchetti turistici e offerte di voli, che compaiono subito sul sito.",
              },
              {
                title: "Registrazione assicurazioni",
                text: "La polizza di ogni cliente registrata in un unico posto, invece che su carta o in fogli Excel.",
              },
              {
                title: "Promemoria assicurazioni",
                text: "Promemoria quando una polizza si avvicina al rinnovo, per contattare il cliente in tempo.",
              },
              {
                title: "Registrazione check-in",
                text: "Viaggi e dati di check-in dei clienti registrati per ogni prenotazione.",
              },
              {
                title: "Promemoria check-in",
                text: "Promemoria perché il team non dimentichi mai il check-in di un cliente.",
              },
            ],
          },
        ],
      },
      {
        slug: "omw-on-my-way",
        name: "OMW — On My Way",
        category: "Carburanti · Sito & gestionale",
        text: "Sito per una rete di distributori di carburante con la ricerca della stazione più vicina e un pannello per aggiornare i prezzi di ogni stazione.",
        year: "Online",
        url: "https://www.omw.al/",
        image: "/work/omw-platform.webp",
        services: ["website-design", "web-applications"],
        overview: [
          "OMW — On My Way è una rete di distributori di carburante presente in tutta l'Albania, aperta 24/7, che offre carburante, servizi auto, mini market, caffetteria e perfino un hotel. Gli automobilisti volevano trovare velocemente la stazione più vicina e vedere i prezzi aggiornati; l'azienda doveva mantenere i prezzi corretti in ogni stazione.",
          "Abbiamo realizzato un sito bilingue (albanese e inglese) che presenta il marchio, i prodotti e i servizi, con la ricerca della stazione più vicina e i prezzi del carburante — più un pannello in cui il team aggiorna i prezzi di ogni stazione.",
        ],
        features: [
          {
            title: "Sito pubblico",
            items: [
              {
                title: "Ricerca stazioni",
                text: "Trova la stazione OMW più vicina e vedi tutte le stazioni in Albania.",
              },
              {
                title: "Prezzi del carburante",
                text: "Prezzi aggiornati di Crystal Diesel, Diesel 10ppm, benzina e GPL, per ogni stazione.",
              },
              {
                title: "Prodotti",
                text: "Una panoramica chiara di ogni tipo di carburante offerto dalla rete.",
              },
              {
                title: "Servizi",
                text: "Servizi auto, mini market, caffetteria e l'hotel OMW a Vorë, presentati in un unico posto.",
              },
              {
                title: "Albanese e inglese",
                text: "Versioni complete del sito in entrambe le lingue.",
              },
              {
                title: "Azienda e contatti",
                text: "Pagina Chi siamo, contatti della sede e pagine legali.",
              },
            ],
          },
          {
            title: "Pannello di gestione",
            items: [
              {
                title: "Gestione prezzi",
                text: "Aggiornamento dei prezzi del carburante di ogni stazione da un'unica schermata.",
              },
              {
                title: "Aggiornamento immediato",
                text: "I nuovi prezzi compaiono subito sul sito, così gli automobilisti vedono sempre informazioni corrette.",
              },
            ],
          },
        ],
      },
      {
        slug: "zoi-villa-residence",
        name: "Zoi Villa Residence",
        category: "Immobiliare · Sito web",
        text: "Presentazione bilingue per una residenza privata con appartamenti moderni e ville esclusive.",
        year: "Online",
        url: "https://www.zoi-villa.al/",
        image: "/work/zoi-villa.webp",
        services: ["website-design", "ui-ux-design"],
        overview: [
          "Zoi Villa Residence è una comunità residenziale privata a Tirana con appartamenti moderni 2+1 e 3+1 e ville esclusive, alcune con piscina privata. Il sito doveva vendere uno stile di vita premium — e aiutare gli acquirenti a trovare la casa giusta.",
          "Abbiamo progettato una presentazione che mostra la residenza, gli appartamenti, le ville e i posti auto con grandi immagini e una struttura chiara, con planimetrie e disponibilità di ogni unità e un modo semplice per prenotare una visita privata.",
        ],
        features: [
          {
            title: "Sito pubblico",
            items: [
              {
                title: "Presentazione della residenza",
                text: "La comunità, l'architettura, gli spazi verdi e la sicurezza, presentati con immagini grandi e di qualità.",
              },
              {
                title: "Appartamenti",
                text: "Appartamenti 2+1 e 3+1 con planimetrie e disponibilità di ogni unità.",
              },
              {
                title: "Ville",
                text: "Ville private con giardino, alcune con piscina privata.",
              },
              {
                title: "Posti auto",
                text: "31 posti auto con le relative metrature, disponibili come opzione per i residenti.",
              },
              {
                title: "Prenota una visita",
                text: "I visitatori richiedono una presentazione privata della residenza direttamente dal sito.",
              },
            ],
          },
        ],
      },
      {
        slug: "lotus-dental-clinic",
        name: "Lotus Dental Clinic",
        category: "Sanità · Sito web",
        text: "Sito per una clinica dentale con servizi, galleria, recensioni dei pazienti e prenotazione degli appuntamenti.",
        year: "Online",
        url: "https://www.lotusdentalclinic.al/",
        image: "/work/lotusdentalclinic.webp",
        services: ["website-design"],
        overview: [
          "Lotus Dental Clinic è una clinica dentale moderna a Valona. Voleva che i pazienti — locali e dall'estero — conoscessero i trattamenti, il team e la clinica, e prenotassero un appuntamento con facilità.",
          "Abbiamo realizzato un sito in sei lingue che presenta i trattamenti della clinica, il team, la galleria, i video dei pazienti e le recensioni, con prenotazione degli appuntamenti e contatto diretto via telefono, email o WhatsApp.",
        ],
        features: [
          {
            title: "Sito pubblico",
            items: [
              {
                title: "Sei lingue",
                text: "Albanese, inglese, italiano, francese, spagnolo e tedesco — per pazienti locali e turismo dentale.",
              },
              {
                title: "Trattamenti",
                text: "Digital Smile Design, sbiancamento, implantologia e odontoiatria familiare, estetica e d'urgenza.",
              },
              {
                title: "Il team",
                text: "I profili dei dentisti, dell'ortodontista e del personale infermieristico.",
              },
              {
                title: "Galleria e video dei pazienti",
                text: "Un tour della clinica e brevi video di esperienze dei pazienti e trasformazioni del sorriso.",
              },
              {
                title: "Recensioni dei pazienti",
                text: "Cosa dicono i pazienti, in un carosello.",
              },
              {
                title: "Prenotazione appuntamenti",
                text: "Prenota un appuntamento da ogni sezione, oppure contatta la clinica via telefono, email o WhatsApp.",
              },
              {
                title: "Igiene e percorso del paziente",
                text: "Sezioni sull'ambiente della clinica, gli standard di igiene e come si svolge una visita.",
              },
            ],
          },
        ],
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
            "Questo sito non utilizza cookie e non ti traccia su altri siti. Usiamo Vercel Web Analytics per contare le visite e Vercel Speed Insights per misurare la velocità di caricamento delle pagine — entrambi funzionano senza cookie e raccoglie solo dati anonimi e aggregati (come la pagina visitata, il paese e il tipo di dispositivo), quindi non può identificarti. Font e immagini sono serviti direttamente dal nostro sito.",
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
  serviceDetail: {
    intro: "Panoramica",
    includes: "Cosa è incluso",
    idealFor: "Ideale per",
    faq: "Domande frequenti",
    work: "Progetti correlati",
    other: "Altri servizi",
    learnMore: "Scopri di più",
  },
  workDetail: {
    visit: "Sito online",
    industry: "Settore",
    services: "Servizi",
    overview: "Il progetto",
    features: "Cosa abbiamo realizzato",
    more: "Altri progetti",
    visitCta: "Visita il sito",
    caseStudy: "Caso di studio",
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
