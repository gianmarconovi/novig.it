/* =====================================================================
   JS PRODOTTI CHIMICI - generatore schede
   HTML richiesto nella pagina:
   <div class="accordion-body open">
     <div class="row" id="prodotti-container"></div>
   </div>

   COME AGGIUNGERE UN PRODOTTO
   Dentro la sezione giusta di `catalogo` aggiungi una riga in `items`:
     "Nome"                                  -> immagine e scheda automatiche
     ["Nome", "T:file.png"]                  -> immagine su tintolav.com
     ["Nome", "N:Cartella/file.png"]         -> immagine su novig.it
     ["Nome", img, "nome-scheda", stelle]    -> scheda e/o stelle personalizzate
   (usa null per saltare un valore)
   ===================================================================== */

const BASE_SCHEDE = "catalogo-generale/prodotti-chimici/";
const BASE_IMG = {
  "T:": "https://www.tintolav.com/images/dacshop/upload/",
  "N:": "https://novig.it/Immagini/Categorie/Prodotti/"
};
const STELLE_DEFAULT = 4.5;

const catalogo = [
  /* ---------------- ADDITIVI ---------------- */
  { cartella: "additivi", prefisso: "Additivo", items: [
    ["Certisan K",   "T:a48-410ncertisan_k_20kg.png"],
    ["Oxon 1lt",     "T:a48-500dx12oxon_1lt_1006720412.png"],
    ["Oxon 10kg",    "T:a48-500koxon_10kg_1726912271.png"],
    ["Oxon 20kg",    "T:a48-500noxon_20kg_150796358.png"],
    ["Sfeltran-tex", "T:a48-510k_sfeltran-tex_10kg.png"],
    ["X9 Degreaser", "T:a39-050h2x9-degreaser_2x5kg.png"]
  ]},

  /* ---------------- AMMORBIDENTI ---------------- */
  { cartella: "ammorbidenti", prefisso: "Ammorbidente", items: [
    ["Ambra & Vanilla 1lt",      "T:a45-023dx12_ammorbidente_ambravanilla_1lt.png"],
    ["Ambra & Vanilla 20kg",     "T:a45-023n_ammorbidente_ambravanilla_20kg.png"],
    ["Bioxelle 20kg",            "T:a45-900nbioxelle_ammorbidente_20kg.png"],
    ["Caresse Blanche 1lt",      "T:a45-001dx12ammorbidente_caresseblanche_1lt_2003387814.png"],
    ["Caresse Blanche 20kg",     "T:a45-001nammorbidente_caresseblanche_20kg_2065170068.png"],
    ["Cashmere 1lt",             "T:ah45-020dsoft_cashmere_6x1lt.png"],
    ["Cashmere 20kg",            "T:ah45-020nsoft_cashmere_20kg.png"],
    ["Certisan B 20kg",          "T:a45-200ncertisan_b_ammorbidente_20kg.png"],
    ["Clean Sense 1lt",          "T:a45-024dx12_ammorbidente_cleansense_1lt.png"],
    ["Clean Sense 20kg",         "T:a45-024n_ammorbidente_cleansense_20kg.png"],
    ["Fior di Cotone 1lt",       "T:a45-022dx12ammorbidente_fiordicotone_1lt.png"],
    ["Fior di Cotone 20kg",      "T:a45-022nammorbidente_fiordicotone_20kg.png"],
    ["Fior di Loto 1lt",         "T:a45-002dx12ammorbidente_fiordiloto_1lt_647731693.png"],
    ["Fior di Loto 10kg",        "T:a45-002kammorbidente_fiordiloto_10kg_1966881408.png"],
    ["Fior di Loto 20kg",        "T:a45-002nammorbidente_fiordiloto_20kg.png"],
    ["Floral 1lt",               "T:ah45-010dsoft_floral_6x1lt.png"],
    ["Floral 20kg",              "T:ah45-010nsoft_floral_20kg.png"],
    ["Fresh Lavender 1lt",       "T:a45-003dx12ammorbidente_freshlavender_1lt_1756445025.png"],
    ["Fresh Lavender 20kg",      "T:a45-003nammorbidente_freshlavender_20kg_2125482202.png"],
    ["Muschio Bianco 1lt",       "T:a45-015dx12ammorbidente_muschio_1lt.png"],
    ["Muschio Bianco 10kg",      "T:a45-015kammorbidente_muschio_10kg_2147178984.png"],
    ["Muschio Bianco 20kg",      "T:a45-015nammorbidente_muschio_20kg.png"],
    ["Note di Pulito 1lt",       "T:a45-016dx12ammorbidente_notedipulito_1lt_1152466301.png"],
    ["Note di Pulito 10kg",      "T:a45-016kammorbidente_notedipulito_10kg_844136342.png"],
    ["Note di Pulito 20kg",      "T:a45-016nammorbidente_notedipulito_20kg_389319088.png"],
    ["Orchidea Selvatica 1lt",   "T:a45-025dx12ammorbidente_orchideaselvatica_1lt_353383926.png"],
    ["Orchidea Selvatica 10kg",  "T:a45-025kammorbidente_orchideaselvatica_10kg_702715273.png"],
    ["Orchidea Selvatica 20kg",  "T:a45-025nammorbidente_orchideaselvatica_20kg.png"],
    ["Piuma Soft 10kg",          "T:a45-020kammorbidente_piumasoft_10kg_923009331.png"],
    ["Purity 1lt",               "T:ah45-015dsoft_purity_6x1lt.png"],
    ["Purity 20kg",              "T:ah45-015nsoft_purity_20kg.png"],
    ["Soffio Tropicale 1lt",     "T:a45-018dx12ammorbidente_soffiotropicale_1lt_1987550444.png"],
    ["Soffio Tropicale 20kg",    "T:a45-018nammorbidente_soffiotropicale_20kg_110650105.png"],
    ["Soft Caps 20kg",           "T:a45-021nsoft_caps_20kg_1702016355.png"],
    ["Tahiti 1lt",               "T:ah45-005dsoft_tahiti_6x1lt.png"],
    ["Tahiti 20kg",              "T:ah45-005nsoft_tahiti_20kg.png"],
    ["Tintosoft 20kg",           "T:a45-000ntintosoft_20kg_1252461766.png"]
  ]},

  /* ---------------- APPRETTI ---------------- */
  { cartella: "appretti", prefisso: "Appretto", items: [
    ["Apretex", "T:a51-000h2apretex_2x5kg.png"],
    ["Deopret", "T:a70-016adeopret_879534807.png"],
    ["Okay",    "T:a70-015okay.png"],
    ["Renova",  "T:a48-615dx12renova_apprettante_1lt.png"],
    ["Wrinkle", "T:a70-065wrinkleremover.png"]
  ]},

  /* ---------------- DEOSPRAY 400ml ---------------- */
  { cartella: "deospray", prefisso: "Deospray", items: [
    ["Note di Pulito",    "T:a73-012qudeospray_notedipulito_400ml_1600956983.png", null, 5],
    ["Bergamotto & Zagara","T:a73-002qudeospray_bergamotto_zagara_400ml.png"],
    ["Capri-Marine",      "T:a73-004qu_capri_marine_400ml.png"],
    ["Caresse Blanche",   "T:a73-025qudeospray_caresseblanche_400ml_1999568823.png"],
    ["Fior di Cotone",    "T:a73-027qu_fior_cotone_400ml.png"],
    ["Fior di Loto",      "T:a73-026qudeospray_fiordiloto_400ml_1548238544.png"],
    ["Fresh Lavender",    "T:a73-023qudeospray_freshlavender_400ml_1947113334.png"],
    ["Latte di Rosa",     "T:a73-010qudeospray_lattedirosa_400ml_517987386.png"],
    ["Lemongrass",        "T:a73-000qu_deospray_lemongrass_400ml.png"],
    ["Muschio Bianco",    "T:a73-015qudeospray_muschiobianco_400ml_912740329.png"],
    ["Orchidea Selvatica","T:a73-003qudeospray_orchideaselvatica_400ml_1664467022.png"],
    ["Oro & Argan",       "T:a73-021quoroargan_400ml_1184712842.png"],
    ["Red Passion",       "T:a73-008quredpassion_400ml_1438201760.png"],
    ["Soffio Tropicale",  "T:a73-018qudeospray_soffiotropicale_400ml_274077714.png"],
    ["Talco Fiorentino",  "T:a73-005qudeospray_talcofiorentino_400ml_1721757731.png"],
    ["Vanilla Lemon",     "T:a73-001qudeospray_vanillalemon_400ml_1550175219.png"]
  ]},

  /* ---------------- DETERGENTI ---------------- */
  { cartella: "detergenti", prefisso: "Detergente", items: [
    ["Bioloto 1lt",          "T:a39-520dx12bioloto_1lt_363380436.png"],
    ["Bioloto 10kg",         "T:a39-520kbioloto_10kg_1721574963.png"],
    ["Bioloto 20kg",         "T:a39-520nbioloto_20kg_1285167880.png"],
    ["Biomusk 1lt",          "T:a39-518dx12biomusk_1lt_1488407432.png"],
    ["Biomusk 10kg",         "N:Deodet 10kg/Bio Musk 10kg.png"],
    ["Biomusk 20kg",         "N:Deodet 20kg/Bio Musk 20kg.png"],
    ["Bioorky 1lt",          "N:Deodet 1lt/Bioorky.png"],
    ["Bioorky 10kg",         "N:Deodet 10kg/Bio Orky 10kg.png"],
    ["Bioorky 20kg",         "N:Deodet 20kg/Bio Orky 20kg.png"],
    ["Black Premium 1lt",    "N:Deodet 1lt/Black Premium.png"],
    ["Black Premium 10kg",   "N:Deodet 10kg/Black Premium 10kg.png"],
    ["Delicati & Lana 1lt",  "N:Deodet 1lt/Delicati & Lana.png"],
    ["Delicati & Lana 10kg", "N:Deodet 10kg/Delicati & Lana 10kg.png"],
    ["Note di Pulito 1lt",   "N:Deodet 1lt/Note di Pulito.png"],
    ["Note di Pulito 10kg",  "N:Deodet 10kg/Note di Pulito 10kg.png"],
    ["Note di Pulito 20kg",  "N:Deodet 20kg/Note di Pulito 20kg.png"],
    ["Perfect 10kg",         "N:Deodet 10kg/Perfect 10kg.png"],
    ["Salvacolor 1lt",       "N:Deodet 1lt/Salvacolor.png"],
    ["Salvacolor 10kg",      "N:Deodet 10kg/Salvacolor 10kg.png"],
    ["White Xtra 1lt",       "N:Deodet 1lt/White Xtra.png"],
    ["White Xtra 10kg",      "N:Deodet 10kg/White Xtra 10kg.png"],
    ["White Xtra 20kg",      "N:Deodet 20kg/White Xtra 20kg.png"]
  ]},

  /* ---------------- ESSENZE 1LT ---------------- */
  /* misura/sigla -> titolo "Essenza - Nome 1lt", scheda "nome-ess-1lt".
     L'immagine è automatica: N:Essense 1lt/<Nome>.png */
  { cartella: "essenze", prefisso: "Essenza", sigla: "-ess", misura: "1lt", imgDir: "N:Essense 1lt/", items: [
    "Ambra & Vanilla", "Capri-Marine", "Caresse Blanche", "Clean Sense", "Fior di Cotone",
    "Fior di Loto", "Fresh Lavender", "Muschio Bianco", "Note di Pulito", "Orchidea Selvatica",
    "Soffio Tropicale", "Tintoflor"
  ]},

  /* ---------------- ESSENZE 250ML ---------------- */
  { cartella: "essenze", prefisso: "Essenza", sigla: "-ess", misura: "250ml", imgDir: "N:Essense 250ml/", items: [
    "Ambra & Vanilla", "Capri-Marine", "Caresse Blanche", "Clean Sense", "Fior di Cotone",
    "Fior di Loto", "Muschio Bianco", "Note di Pulito", "Orchidea Selvatica"
  ]},

  /* ---------------- FINISSANTI ---------------- */
  { cartella: "finissanti", prefisso: "Finissanti", imgDir: "N:Finissanti/", items: [
    "Bel Pell", "Ravvilux", "Rennalux Neutro", "Rennalux Scurente"
  ]},

  /* ---------------- MONODOSE ---------------- */
  { cartella: "monodose", prefisso: "Monodose", items: [
    ["Additivo Catturacolori Colorblok",       "N:Monodose/Monodose Additivo Catturacolori Colorblok.png",          "colorblok-add-50ml"],
    ["Additivo Sgrassatore Enzimatico Emulsene","N:Monodose/Monodose Additivo Smacchiatore Emulsene.png",           "emulsene-add-50ml"],
    ["Additivo Oxon",                          "N:Monodose/Monodose Additivo Oxon.png",                             "oxon-add-50ml"],
    ["Ammorbidente Muschio Bianco",            "N:Monodose/Monodose Ammorbidente Muschio Bianco 50ml.png",          "muschio-bianco-amm-50ml"],
    ["Ammorbidente Note di Pulito",            "N:Monodose/Monodose Ammorbidente Note di Pulito 50ml.png",          "note-di-pulito-amm-50ml"],
    ["Ammorbidente Orchidea Selvatica",        "N:Monodose/Monodose Ammorbidente Orchidea Selvatica 50ml.png",      "orchidea-selvatica-amm-50ml"],
    ["Deoessiccatore",                         "N:Monodose/Monodose Deoessiccatore.png",                            "note-di-pulito-deoess"],
    ["Detergente Enzimatico Biomusk",          "N:Monodose/Monodose Detergente Enzimatico Biomusk 100ml.png",       "biomusk-det-100ml"],
    ["Detergente Note di Pulito",              "N:Monodose/Monodose Detergente Note di Pulito 100ml.png",           "note-di-pulito-det-100ml"],
    ["Detergente Piuma, Delicati, Lana",       "N:Monodose/Monodose Detergente Piuma, Delicati, Lana 100ml.png",    "piuma-delicati-lana-det-100ml"]
  ]},

  /* ---------------- PAVIMENTI 1LT ---------------- */
  { cartella: "pavimenti", prefisso: "Pavimenti", sigla: "-pav", misura: "1lt", imgDir: "N:Pavimenti 1lt/", items: [
    ["Capri-Marine",  null, "essenze/capri-marine-pav-1lt"],
    "Clean Sense",
    ["Fresh Melody",  null, "fresh-melody-1lt"],
    "Muschio Bianco",
    ["Note di Pulito","T:a85-025dx12pavimenti_notedipulito_1lt_copy.png"],
    ["Oro & Argan",   "T:a85-005dx12pavimenti_oroargan_1lt.png"],
    ["Passion Fruit", "T:a85-010dx12pavimenti_passionfruit_1lt_969175134.png", "pavimenti/orchidea-selvatica-ess-250ml"]
  ]},

  /* ---------------- PRESMACCHIATORI ---------------- */
  { cartella: "presmacchiatori", prefisso: "Presmacchiatori", items: [
    ["InCarbon",   "T:a60-005h2incarbon_2x5kg.png"],
    ["Jolly Smak", "T:a01-000kjollysmak-10kg.png", "jolly-smack"],
    ["PreCarbon",  "T:a60-000h2precarbon_2x5kg.png"]
  ]},

  /* ---------------- RAFFORZATORI ---------------- */
  { cartella: "rafforzatori", prefisso: "Rafforzatori", items: [
    ["Activ Superstat", "T:a04-010kactivsuperstat-10kg.png"]
  ]},

  /* ---------------- SMACCHIATORI ---------------- */
  { cartella: "smacchiatori", prefisso: "Smacchiatori", items: [
    ["Dry Spot",        "T:a70-070dudryspot_731342750.png"],
    ["Oxon 750ml",      "T:a31-500coxon_750ml.png"],
    ["Prezym 2x5lt",    "T:a31-000h2prezym.png", "prezym-2x5kg"],
    ["Prezym 750ml",    "T:a31-000cprezym_1855228433.png"],
    ["Tintosmac",       "T:a70-020tintosmac.png"],
    ["Toglisudore",     "T:a01-020ctoglisudore-750ml.png"],
    ["Top Degreaser",   "T:a88-005ctopdegreaser_750ml.png"]
  ]},

  /* ---------------- SMACCHIATORI SEITZ ---------------- */
  /* titolo "Smacchiatori - SEITZ Blutol", immagine Immagini/Smacchiatori Seitz/Blutol.jpg */
  { cartella: "smacchiatori", prefisso: "Smacchiatori", marca: "SEITZ ",
    imgDir: "Immagini/Smacchiatori Seitz/", ext: ".jpg", items: [
    "Blutol", "Cavesol", "Colorsol", "Ferrol", "Frankosol", "Lacol", "Purasol", "Quickol", "V1", "V2", "V3"
  ]},

  /* ---------------- SOLVENTI ---------------- */
  { cartella: "solventi", prefisso: "Solventi", items: [
    ["Carbone Attivo 5kg",       "T:a10-015carboneattivo.png", "carbone-attivo"],
    ["Percloroetilene Dowper",   "https://www.lavanderiastore.it/wp-content/uploads/2020/04/dowper-1.jpg", "dowper"],
    ["Tonsil 25kg",              "T:a10-025tonsil_1391359041.png", "tonsil"]
  ]}
];

/* ===================== LOGICA (non serve modificarla) ===================== */

const slug = s => s.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function risolviImg(percorso) {
  for (const k in BASE_IMG) if (percorso.startsWith(k)) return BASE_IMG[k] + percorso.slice(k.length);
  return percorso;
}

function generaStelle(valore) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    if (valore >= i) html += '<i class="fa fa-star"></i>';
    else if (valore >= i - 0.5) html += '<i class="fa fa-star-half-o"></i>';
    else html += '<i class="fa fa-star-o"></i>';
  }
  return html;
}

// Trasforma una riga di `items` in un oggetto prodotto completo
function costruisciProdotto(sez, item) {
  const [nome, img, scheda, stelle] = Array.isArray(item) ? item : [item];
  const misura = sez.misura ? " " + sez.misura : "";
  const titolo = `${sez.prefisso} - ${sez.marca || ""}${nome}${misura}`;

  let file;
  if (scheda) file = scheda.includes("/") ? scheda : `${sez.cartella}/${scheda}`;
  else file = `${sez.cartella}/${slug(nome)}${sez.sigla || ""}${sez.misura ? "-" + slug(sez.misura) : ""}`;

  const immagine = risolviImg(img || (sez.imgDir || "") + nome + (sez.ext || ".png"));

  return {
    titolo,
    scheda: `${BASE_SCHEDE}${file}.html`,
    immagine,
    stelle: stelle ?? STELLE_DEFAULT
  };
}

function creaScheda(p) {
  const col = document.createElement("div");
  col.className = "col-4";
  col.innerHTML = `
    <a href="#" data-modal="${esc(p.scheda)}"><img src="${esc(p.immagine)}" alt="${esc(p.titolo)}" title="Apri Scheda Prodotto ${esc(p.titolo)}"></a>
    <h4><a href="#" data-modal="${esc(p.scheda)}" title="Apri Scheda Prodotto ${esc(p.titolo)}">${esc(p.titolo)}</a></h4>
    <div class="rating">${generaStelle(p.stelle)}</div>
    <p><a href="#" data-modal="richiesta-listino-prezzi.html" title="Apri Scheda Richiedi Listino Prezzi">Scopri il prezzo!</a></p>
  `;
  return col;
}

function mostraCatalogo() {
  const container = document.getElementById("prodotti-container");
  if (!container) return;

  const frag = document.createDocumentFragment();
  catalogo.forEach(sez => sez.items.forEach(item => frag.appendChild(creaScheda(costruisciProdotto(sez, item)))));
  container.appendChild(frag);

  // Un solo listener per tutti i link: apre il modal corrispondente
  container.addEventListener("click", e => {
    const link = e.target.closest("[data-modal]");
    if (!link) return;
    e.preventDefault();
    openModal(link.dataset.modal);
  });
}

document.addEventListener("DOMContentLoaded", mostraCatalogo);
