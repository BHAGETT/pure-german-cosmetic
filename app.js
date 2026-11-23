const IMG_POOL = [
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=700&q=80"
];

// 3 Local Videos in your folder (voice permanently muted)
const VIDEO_POOL = [
  "./skincare.mp4",
  "./beauty.mp4",
  "./beautystore.mp4"
];

// Admin access settings: open URL with ?admin=1 or enter this PIN
const ADMIN_SECRET_PIN = "PGC2026";
let isAdminUnlocked = false;

let PRODUCTS = [
  { id: 1, name: "Hydra Plus Ampoule Concentrates (7x2ml)", brand: "BABOR", category: "Skincare & Ampoules", origin: "Made in Germany", price: 19.50, moq: 24, size: "7 x 2 ml Box", hsCode: "3304.99.00", image: IMG_POOL[0], video: VIDEO_POOL[0], desc: "Aachen-manufactured intensive hyaluronic acid moisture ampoules designed for luxury facial treatments and high-end retail counters.", ingredients: "Multi-molecular Hyaluronic Acid, Pro-Vitamin B5, Plant-based Moisturizing Polymers.", channel: "Luxury Beauty Salons, Aesthetic Clinics & Department Stores" },
  { id: 2, name: "TV Paint Stick Foundation (25g)", brand: "KRYOLAN", category: "Makeup & Studio", origin: "Made in Germany", price: 17.80, moq: 24, size: "25 g Stick", hsCode: "3304.99.00", image: IMG_POOL[2], video: VIDEO_POOL[0], desc: "Berlin's iconic high-coverage cream foundation trusted by bridal makeup artists, television studios, and professional salons worldwide.", ingredients: "Mineral Pigments, Candelilla Wax, Vitamin E, High-Opacity Emollients.", channel: "Bridal Makeup Studios, Salon Chains & Cosmetic Retailers" },
  { id: 3, name: "Perfect Teint Illuminating Concealer", brand: "ARTDECO", category: "Makeup & Studio", origin: "Made in Germany", price: 11.40, moq: 30, size: "2 ml Brush Pen", hsCode: "3304.20.00", image: IMG_POOL[9], video: VIDEO_POOL[0], desc: "Bavaria-engineered light-reflecting brush concealer that visibly erases dark circles and fine lines with a silky, water-repellent finish.", ingredients: "Light-Reflecting Micro-Pigments, Bisabolol, Conditioning Polymers.", channel: "Department Stores, Perfumeries & Makeup Counters" },
  { id: 4, name: "Hyaluron Filler Caps (28 Capsules)", brand: "DR. GRANDEL", category: "Skincare & Ampoules", origin: "Made in Germany", price: 22.90, moq: 20, size: "28 Single-Dose Caps", hsCode: "3304.99.00", image: IMG_POOL[3], video: VIDEO_POOL[0], desc: "Augsburg-developed biodegradable single-dose lipid capsules packed with micro-hyaluronic acid to plump expression lines immediately.", ingredients: "Micro-Hyaluronic Acid, Squalane, Ceramide Complex, Vitamin E.", channel: "Derma-Cosmetic Pharmacies & Premium Facial Salons" },
  { id: 5, name: "Mature Skin Cellular Regeneration Serum", brand: "JANSSEN COSMETICS", category: "Skincare & Ampoules", origin: "Made in Germany", price: 24.50, moq: 20, size: "30 ml Dropper", hsCode: "3304.99.00", image: IMG_POOL[1], video: VIDEO_POOL[0], desc: "Professional cosmeceutical anti-aging concentrate formulated for salon facial protocols and anti-wrinkle retail regimens.", ingredients: "Cellular Regeneration Complex (CRC), Red Clover Extract, Kombucha, Long-Chain Hyaluronic Acid.", channel: "Professional Beauty Salons & Skin Clinics" },
  { id: 6, name: "Hyaluron-Filler +3x Effect Day Cream SPF 30", brand: "EUCERIN", category: "Derma-Cosmetics", origin: "Made in Germany", price: 18.60, moq: 24, size: "50 ml Jar", hsCode: "3304.99.00", image: IMG_POOL[5], video: VIDEO_POOL[0], desc: "Hamburg dermatological daily anti-aging care with UVA/UVB SPF 30 protection that stimulates skin's own hyaluronic production.", ingredients: "High & Low Molecular Hyaluronic Acid, Glycine Saponin, Enoxolone.", channel: "Pharmacy Chains, Chemists & Derma Retail" },
  { id: 7, name: "Clear Face Antibacterial Cleansing Foam", brand: "SEBAMED", category: "Derma-Cosmetics", origin: "Made in Germany", price: 8.40, moq: 36, size: "150 ml Pump", hsCode: "3401.30.00", image: IMG_POOL[4], video: VIDEO_POOL[0], desc: "pH 5.5 clinical soap-free cleansing foam engineered to combat acne blemishes gently while maintaining the skin's natural acid mantle.", ingredients: "Montaline C40 (Coconut Oil Derivative), Panthenol, pH 5.5 Buffer System.", channel: "Pharmacies, Supermarkets & Skincare Chains" },
  { id: 8, name: "Skin Food Original Ultra-Rich Cream (75ml)", brand: "WELEDA", category: "Skincare & Ampoules", origin: "Made in Germany", price: 9.20, moq: 36, size: "75 ml Tube", hsCode: "3304.99.00", image: IMG_POOL[6], video: VIDEO_POOL[0], desc: "Certified natural botanical rescue cream beloved by celebrity makeup artists as a hydrating primer and intensive dry-skin barrier.", ingredients: "Organic Viola Tricolor, Calendula, Chamomile Extract, Beeswax, Sweet Almond Oil.", channel: "Organic Beauty Stores, Pharmacies & Retail Chains" },
  { id: 9, name: "Q10 Power Anti-Wrinkle Firming Day Care", brand: "NIVEA", category: "Skincare & Ampoules", origin: "Made in Germany", price: 9.80, moq: 36, size: "50 ml Jar", hsCode: "3304.99.00", image: IMG_POOL[7], video: VIDEO_POOL[0], desc: "German-manufactured skin-identical Coenzyme Q10 and Creatine daily moisturizer with high consumer brand recognition across South Asia.", ingredients: "100% Skin-Identical Q10, Creatine, SPF 15 UVA/UVB Filters.", channel: "Hypermarkets, Supermarkets & Pharmacy Chains" },
  { id: 10, name: "BC Bonacure Frizz Away Keratin Treatment", brand: "SCHWARZKOPF PROFESSIONAL", category: "Salon Haircare", origin: "Made in Germany", price: 15.40, moq: 24, size: "200 ml Salon Tub", hsCode: "3305.90.00", image: IMG_POOL[8], video: VIDEO_POOL[0], desc: "Vegan keratin and babassu oil intensive salon hair mask delivering up to 72 hours of humidity resistance and frizz control.", ingredients: "Vegan Keratin Alternative, Cell Equalizer Technology, Babassu Oil.", channel: "Hair Salons, Keratin Studios & Professional Beauty Supply" },
  { id: 11, name: "Oil Reflections Luminous Smoothing Oil", brand: "WELLA PROFESSIONALS", category: "Salon Haircare", origin: "Made in Germany", price: 16.90, moq: 24, size: "100 ml Glass Bottle", hsCode: "3305.90.00", image: IMG_POOL[0], video: VIDEO_POOL[0], desc: "Darmstadt-formulated lightweight finishing hair oil enriched with macadamia and avocado oils for instant mirror-like gloss.", ingredients: "Macadamia Seed Oil, Avocado Oil, Vitamin E Tocopherol.", channel: "Luxury Hair Salons & Retail Beauty Chains" },
  { id: 12, name: "Dualsenses Rich Repair 60sec Treatment", brand: "GOLDWELL", category: "Salon Haircare", origin: "Made in Germany", price: 14.50, moq: 24, size: "200 ml Jar", hsCode: "3305.90.00", image: IMG_POOL[3], video: VIDEO_POOL[0], desc: "60-second salon reconstruction mask that restores severely damaged and chemically treated hair fibers from inside out.", ingredients: "IntraLipid Complex, Pashmina Silk Proteins, microPROtec Complex.", channel: "Professional Salon Networks & Hair Boutiques" },
  { id: 13, name: "Thermal Moist 24h Care Cream", brand: "SANS SOUCIS", category: "Skincare & Ampoules", origin: "Made in Germany", price: 16.20, moq: 24, size: "50 ml Jar", hsCode: "3304.99.00", image: IMG_POOL[5], video: VIDEO_POOL[0], desc: "Formulated in Baden-Baden using mineral-rich thermal spring water and hyaluronic acid for lasting 24-hour skin hydration.", ingredients: "Baden-Baden Thermal Spring Water, Hyaluronic Acid, Algae Extract.", channel: "Spas, Beauty Salons & Upscale Department Stores" },
  { id: 14, name: "Hyaluron 2.0 Face Gel Concentrate", brand: "ALCINA", category: "Skincare & Ampoules", origin: "Made in Germany", price: 15.80, moq: 24, size: "30 ml Dispenser", hsCode: "3304.99.00", image: IMG_POOL[1], video: VIDEO_POOL[0], desc: "Bielefeld-engineered oil-free cooling moisture gel ideal for humid climates, delivering instant plumping without heaviness.", ingredients: "2.0 Cross-Linked Hyaluronic Acid, Panthenol, Glycerin.", channel: "Salons, Pharmacies & Modern Retail" },
  { id: 15, name: "LL Regeneration System Vitality Day Cream", brand: "ANNEMARIE BÖRLIND", category: "Skincare & Ampoules", origin: "Made in Germany", price: 22.40, moq: 20, size: "50 ml Jar", hsCode: "3304.99.00", image: IMG_POOL[6], video: VIDEO_POOL[0], desc: "Black Forest natural luxury skincare featuring the proprietary LL-Biocomplex to accelerate cell renewal in dry, mature skin.", ingredients: "LL-Biocomplex, Organic Shea Butter, St. John's Wort, Echinacea.", channel: "Organic Luxury Retailers, Pharmacies & Spas" },
  { id: 16, name: "Basis Sensitiv All-Round Cream (150ml)", brand: "LAVERA NATURKOSMETIK", category: "Body, Men & Wellness", origin: "Made in Germany", price: 6.90, moq: 36, size: "150 ml Tin", hsCode: "3304.99.00", image: IMG_POOL[7], video: VIDEO_POOL[0], desc: "NATRUE-certified organic family skin barrier cream enriched with organic shea butter and almond oil for sensitive skin.", ingredients: "Organic Shea Butter, Organic Sweet Almond Oil, Vitamin E.", channel: "Supermarkets, Pharmacies & Family Retail Chains" },
  { id: 17, name: "Almond Blossom Skin Softening Body Oil", brand: "KNEIPP", category: "Body, Men & Wellness", origin: "Made in Germany", price: 9.40, moq: 30, size: "100 ml Glass Bottle", hsCode: "3304.99.00", image: IMG_POOL[4], video: VIDEO_POOL[0], desc: "Würzburg herbal wellness body oil with 94% pure sweet almond oil and vitamins A & E for deep nourishment and elasticity.", ingredients: "Sweet Almond Oil, Argan Oil, Sunflower Seed Oil, Vitamin A & E.", channel: "Pharmacies, Wellness Spas & Department Stores" },
  { id: 18, name: "Hyaluron Boost Concentrate Sachet Pack (10x2ml)", brand: "SCHAEBENS", category: "Skincare & Ampoules", origin: "Made in Germany", price: 8.50, moq: 36, size: "10-Sachet Retail Box", hsCode: "3304.99.00", image: IMG_POOL[9], video: VIDEO_POOL[0], desc: "Germany's #1 face mask brand in export-ready 10-sachet display boxes that boost skin moisture by up to 80% in 10 minutes.", ingredients: "Triple Hyaluronic Acid, Urea, Panthenol, Aloe Vera.", channel: "High-Volume Retail Chains, Drugstores & Checkout Counters" },
  { id: 19, name: "HD Liquid Coverage 24h Foundation", brand: "CATRICE", category: "Makeup & Studio", origin: "Sourced in Germany (EU)", price: 7.40, moq: 36, size: "30 ml Dropper", hsCode: "3304.99.00", image: IMG_POOL[2], video: VIDEO_POOL[0], desc: "Ultra-lightweight second-skin liquid foundation with dropper applicator, providing high-definition matte coverage for 24 hours.", ingredients: "Niacinamide, Fine Mineral Pigments, Glycerin (Vegan & Cruelty-Free).", channel: "Cosmetic Chains, E-Commerce & Department Stores" },
  { id: 20, name: "Lash Princess False Lash Mascara (3-Pack)", brand: "ESSENCE", category: "Makeup & Studio", origin: "Sourced in Germany (EU)", price: 8.90, moq: 36, size: "3 x 12 ml Retail Pack", hsCode: "3304.20.00", image: IMG_POOL[9], video: VIDEO_POOL[0], desc: "Globally viral German-designed volumizing and lengthening mascara packed in 3-unit wholesale retail sleeves.", ingredients: "Carnauba Wax, Candelilla Wax, Intensive Black Iron Oxides.", channel: "Mass Retail Chains, Beauty Stores & Online Marketplaces" },
  { id: 21, name: "Revital Q10 Lifting Eye Cream", brand: "RIVAL DE LOOP", category: "Skincare & Ampoules", origin: "Made in Germany", price: 5.90, moq: 48, size: "15 ml Tube", hsCode: "3304.99.00", image: IMG_POOL[3], video: VIDEO_POOL[0], desc: "German quality eye contour treatment formulated with Q10 and Tripeptide complex to smooth crow's feet and puffiness.", ingredients: "Coenzyme Q10, Tripeptides, Grape Seed Oil, Vitamin E.", channel: "Supermarkets & Value Beauty Retail" },
  { id: 22, name: "Beauty Effect Hyaluronic Lifting Serum", brand: "BALEA", category: "Skincare & Ampoules", origin: "Made in Germany", price: 6.40, moq: 48, size: "30 ml Pump", hsCode: "3304.99.00", image: IMG_POOL[1], video: VIDEO_POOL[0], desc: "High-demand German drugstore hyaluronic concentrate that visibly tightens and hydrates skin at a strong retail margin.", ingredients: "Duo-Hyaluronic Acid, Herbal Lifting Complex, Glycerin.", channel: "Retail Chains, Mini-Marts & E-Commerce Stores" },
  { id: 23, name: "Med Lipidro Cream Intensive Foot Care", brand: "GEHWOL", category: "Derma-Cosmetics", origin: "Made in Germany", price: 11.20, moq: 24, size: "125 ml Tube", hsCode: "3304.99.00", image: IMG_POOL[5], video: VIDEO_POOL[0], desc: "Lübbecke-manufactured medical footcare cream with 10% urea and sea buckthorn oil, recommended by podiatrists and diabetic clinics.", ingredients: "10% Urea, Sea Buckthorn Oil, Avocado Oil, Algae Extract, Farnesol.", channel: "Pharmacies, Medical Supply Stores & Pedicure Salons" },
  { id: 24, name: "Caffeine Liquid Hair Energizer Tonic", brand: "ALPECIN", category: "Body, Men & Wellness", origin: "Made in Germany", price: 10.60, moq: 30, size: "200 ml Bottle", hsCode: "3305.90.00", image: IMG_POOL[8], video: VIDEO_POOL[0], desc: "Bielefeld-developed caffeine scalp tonic clinically proven to strengthen hair roots and reduce hereditary hair thinning in men.", ingredients: "Caffeine, Zinc PCA, Niacinamide, Menthol, Panthenol.", channel: "Pharmacies, Supermarkets & Men's Grooming Salons" },
  { id: 25, name: "Moisture Build Hyaluron Care Shampoo", brand: "GUHL", category: "Salon Haircare", origin: "Made in Germany", price: 6.80, moq: 36, size: "250 ml Bottle", hsCode: "3305.10.00", image: IMG_POOL[4], video: VIDEO_POOL[0], desc: "Darmstadt salon-heritage hydrating shampoo enriched with hyaluronic acid and panthenol for dry, brittle hair.", ingredients: "Hyaluronic Acid Complex, Panthenol, Botanical Lipids.", channel: "Supermarkets, Pharmacies & Hair Care Retailers" },
  { id: 26, name: "Fermented Skincare Hydrating Day Cream", brand: "FLORENA", category: "Skincare & Ampoules", origin: "Made in Germany", price: 12.40, moq: 24, size: "50 ml Jar", hsCode: "3304.99.00", image: IMG_POOL[6], video: VIDEO_POOL[0], desc: "COSMOS Natural certified skincare powered by fermented camellia flowers and fermented olive oil for superior antioxidant absorption.", ingredients: "Fermented Camellia Sinensis, Fermented Olive Oil, Natural Antioxidants.", channel: "Modern Beauty Retail & Concept Pharmacies" },
  { id: 27, name: "Hydrolipid Hydrating Face Oil", brand: "FREI ÖL", category: "Derma-Cosmetics", origin: "Made in Germany", price: 13.80, moq: 24, size: "30 ml Dropper", hsCode: "3304.99.00", image: IMG_POOL[0], video: VIDEO_POOL[0], desc: "Nuremberg pharmacy heritage facial oil combining botanical omega fatty acids with vitamins A & E to restore dry, stressed skin.", ingredients: "Jojoba Oil, Oat Oil, Vitamin A, Vitamin E, Bisabolol.", channel: "Pharmacies, Derma Counters & Luxury Salons" },
  { id: 28, name: "Age Protection Sea Buckthorn Firming Serum", brand: "LOGONA", category: "Skincare & Ampoules", origin: "Made in Germany", price: 15.90, moq: 24, size: "30 ml Pump", hsCode: "3304.99.00", image: IMG_POOL[1], video: VIDEO_POOL[0], desc: "Certified organic anti-aging serum rich in natural Vitamin C from organic sea buckthorn berries and botanical hyaluronic acid.", ingredients: "Organic Sea Buckthorn Berry Extract, Botanical Hyaluronic Acid, Organic Argan Oil.", channel: "Organic Boutiques, Pharmacies & Spa Retailers" },
  { id: 29, name: "Pure Aloe Vera Moisture Repair Gel", brand: "SANTAVERDE", category: "Derma-Cosmetics", origin: "Made in Germany", price: 16.80, moq: 24, size: "100 ml Bottle", hsCode: "3304.99.00", image: IMG_POOL[7], video: VIDEO_POOL[0], desc: "Water-free pure organic Aloe Vera juice formulation designed to soothe sun-exposed, post-laser, or sensitive skin.", ingredients: "90% Pure Organic Aloe Vera Leaf Juice, Sea Buckthorn Extract, Sodium Hyaluronate.", channel: "Dermatology Clinics, Aesthetic Salons & Pharmacies" },
  { id: 30, name: "Family Gloss Birch & Plant Protein Shampoo", brand: "SANTE NATURKOSMETIK", category: "Body, Men & Wellness", origin: "Made in Germany", price: 7.20, moq: 36, size: "500 ml Family Pump", hsCode: "3305.10.00", image: IMG_POOL[8], video: VIDEO_POOL[0], desc: "Silicone-free, vegan German family-size shampoo with organic birch leaf extract for gentle daily shine and volume.", ingredients: "Organic Birch Leaf Extract, Triple Plant Protein Complex, Arginine.", channel: "Supermarkets, Organic Stores & Family Retail Chains" },
  { id: 31, name: "Feel Thin & Extra Safe Multipack (12-Pack Box)", brand: "DUREX", category: "Body, Men & Wellness", origin: "EU Pharmacy Grade (DE Stock)", price: 9.60, moq: 36, size: "12 pcs Pharmacy Box", hsCode: "4014.10.00", image: IMG_POOL[4], video: VIDEO_POOL[0], desc: "Authentic German/EU pharmacy-grade Durex 12-count retail packs with batch verification, high retail demand, and long shelf life.", ingredients: "Dermatologically Tested Natural Rubber Latex, Silicone-Based Lubricant.", channel: "Pharmacy Chains, Supermarkets & Modern Retail" },
  { id: 32, name: "Play Aloe Vera & Sensitive Glide Gel (200ml)", brand: "DUREX", category: "Body, Men & Wellness", origin: "EU Pharmacy Grade (DE Stock)", price: 8.40, moq: 36, size: "200 ml Bottle", hsCode: "3006.70.00", image: IMG_POOL[7], video: VIDEO_POOL[0], desc: "Water-based pH-balanced soothing personal care gel enriched with Aloe Vera extract, sourced from authorized German wholesale channels.", ingredients: "Aqua, Propylene Glycol, Aloe Barbadensis Leaf Juice, Hydroxyethylcellulose.", channel: "Pharmacies, Chemists & Health Retail Chains" },
  { id: 33, name: "Cicaplast Baume B5+ Soothing Repair Balm", brand: "LA ROCHE-POSAY", category: "Derma-Cosmetics", origin: "Sourced in Germany (EU)", price: 13.90, moq: 24, size: "100 ml Tube", hsCode: "3304.99.00", image: IMG_POOL[5], video: VIDEO_POOL[0], desc: "Top-selling European dermatological barrier-repair balm with 5% Panthenol and Madecassoside for compromised and post-procedure skin.", ingredients: "Panthenol (5%), Madecassoside, Tribioma Prebiotic Complex, Shea Butter.", channel: "Derma Pharmacies, Skin Clinics & Modern Retail" },
  { id: 34, name: "Sensibio H2O Micellar Cleansing Water (500ml)", brand: "BIODERMA", category: "Derma-Cosmetics", origin: "Sourced in Germany (EU)", price: 14.20, moq: 24, size: "500 ml Bottle", hsCode: "3304.99.00", image: IMG_POOL[0], video: VIDEO_POOL[0], desc: "Gold-standard dermatological micellar makeup remover formulated for sensitive skin with physiological pH and non-rinse tolerance.", ingredients: "Fatty Acid Esters, Cucumber Fruit Extract, Fructooligosaccharides, Mannitol.", channel: "Pharmacies, Makeup Studios & Department Stores" },
  { id: 35, name: "Minéral 89 Hyaluronic Acid Booster Serum", brand: "VICHY", category: "Derma-Cosmetics", origin: "Sourced in Germany (EU)", price: 18.40, moq: 24, size: "50 ml Glass Pump", hsCode: "3304.99.00", image: IMG_POOL[1], video: VIDEO_POOL[0], desc: "89% Vichy Volcanic Mineralizing Water combined with natural-origin hyaluronic acid to plump and fortify the skin barrier.", ingredients: "89% Vichy Volcanic Water, Sodium Hyaluronate, Glycerin (11 Ingredients Only).", channel: "Derma-Cosmetic Pharmacies & Luxury Retail" },
  { id: 36, name: "Serie Expert Absolut Repair Molecular Mask", brand: "L'ORÉAL PROFESSIONNEL", category: "Salon Haircare", origin: "Sourced in Germany (EU)", price: 19.20, moq: 24, size: "250 ml Salon Jar", hsCode: "3305.90.00", image: IMG_POOL[8], video: VIDEO_POOL[0], desc: "Professional salon peptide-bonder and amino acid hair mask engineered to rebuild macromolecular hair structure in one service.", ingredients: "Peptides Bonder, 5 Amino Acids (Glycine, Serine, Tyrosine, Glutamic Acid, Arginine).", channel: "Luxury Hair Salons & Professional Beauty Distributors" }
];

let basket = [];
let submittedOrders = JSON.parse(localStorage.getItem("pgc_orders") || "[]");
let chatMessages = JSON.parse(localStorage.getItem("pgc_human_chat") || "[]");
let pendingOrderDraft = null;
let latestOrder = null;
let roleViewMode = "client";
let currentCategory = "All";
let searchQuery = "";

const productsGrid = document.getElementById("products-grid");
const showingCount = document.getElementById("showing-count");
const basketBadge = document.getElementById("basket-badge");
const searchInput = document.getElementById("search-input");

function enforcePermanentMute(videoEl) {
  if (!videoEl) return;
  videoEl.muted = true;
  videoEl.defaultMuted = true;
  videoEl.volume = 0;
  videoEl.addEventListener("volumechange", () => {
    if (!videoEl.muted || videoEl.volume > 0) {
      videoEl.muted = true;
      videoEl.volume = 0;
    }
  });
}

function initHeroVideos() {
  const heroVid = document.getElementById("hero-reel-video");
  if (!heroVid) return;
  enforcePermanentMute(heroVid);
  heroVid.src = "./skincare.mp4";
  heroVid.play().catch(() => {});
  document.getElementById("hero-video-label").textContent = "Reel 1: German Skincare & Derma Care (Muted)";
  const centerCover = document.getElementById("hero-center-brand-cover");
  if (centerCover) centerCover.classList.add("hidden");
}

function selectHeroVideo(src, label, btnEl, showBrandCover = false) {
  const vid = document.getElementById("hero-reel-video");
  const centerCover = document.getElementById("hero-center-brand-cover");

  enforcePermanentMute(vid);
  vid.src = src;
  vid.play().catch(() => {});
  document.getElementById("hero-video-label").textContent = label;

  if (centerCover) {
    centerCover.classList.toggle("hidden", !showBrandCover);
  }

  document.querySelectorAll(".hero-vid-btn").forEach(b => {
    b.className = "hero-vid-btn py-2 px-2.5 rounded-xl text-xs font-semibold bg-white/10 text-slate-200 hover:bg-white/20 transition truncate";
  });
  if (btnEl) {
    btnEl.className = "hero-vid-btn py-2 px-2.5 rounded-xl text-xs font-bold bg-brand-gold text-brand-navy transition truncate";
  }
}

function handlePaymentTypeChange() {
  const type = document.getElementById("buyer-payment-type")?.value || "Card";
  const cardBox = document.getElementById("card-payment-fields");
  const transferBox = document.getElementById("ueberweisung-payment-fields");
  const proceedBtn = document.getElementById("proceed-payment-btn");

  const isCard = type === "Card";
  if (cardBox) cardBox.classList.toggle("hidden", !isCard);
  if (transferBox) transferBox.classList.toggle("hidden", isCard);

  document.getElementById("card-holder-input").required = isCard;
  document.getElementById("card-number-input").required = isCard;
  document.getElementById("card-expiry-input").required = isCard;
  document.getElementById("card-cvv-input").required = isCard;

  document.getElementById("transfer-sender-name").required = !isCard;
  document.getElementById("transfer-sender-account").required = !isCard;

  if (proceedBtn) {
    proceedBtn.textContent = isCard ? "Pay by Card & Review Confirmation" : "Submit Überweisung & Review Confirmation";
  }
}

function renderProducts() {
  const filtered = PRODUCTS.filter(p => {
    const matchesCat = currentCategory === "All" || p.category === currentCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.ingredients.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  showingCount.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} wholesale items`;

  productsGrid.innerHTML = filtered.map(product => `
    <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div class="relative h-56 bg-slate-100 overflow-hidden">
          <img src="${product.image}" alt="${product.brand} ${product.name}" loading="lazy"
               onerror="this.onerror=null;this.src='https://placehold.co/600x400/0B132B/E5C158?text=${encodeURIComponent(product.brand)}';"
               class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          <div class="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span class="px-2.5 py-1 rounded-lg bg-brand-navy/90 text-white text-[10px] font-bold uppercase tracking-wider">${product.brand}</span>
            <span class="px-2.5 py-1 rounded-lg bg-white/95 text-brand-navy text-[10px] font-semibold">${product.origin}</span>
          </div>
          <button onclick="openProductModal(${product.id})" class="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-brand-navy/90 hover:bg-brand-gold text-white hover:text-brand-navy text-xs font-semibold flex items-center justify-center gap-2 transition shadow-md">
            <span>Watch Video &amp; Full Specs</span>
          </button>
        </div>

        <div class="p-5 space-y-2.5">
          <div class="flex items-center justify-between text-[11px] text-slate-500">
            <span>${product.category}</span>
            <span>${product.size}</span>
          </div>
          <h3 class="font-bold text-brand-navy text-base leading-snug line-clamp-2 min-h-[2.75rem]">${product.name}</h3>
          <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">${product.desc}</p>
        </div>
      </div>

      <div class="px-5 pb-5 pt-3 border-t border-slate-100 space-y-3">
        <div class="flex items-baseline justify-between">
          <div>
            <span class="block text-[10px] uppercase text-slate-400 font-semibold">Indicative B2B Rate</span>
            <span class="text-lg font-bold text-brand-navy">From €${product.price.toFixed(2)}</span>
            <span class="text-xs text-slate-500">/ unit</span>
          </div>
          <span class="px-2.5 py-1 rounded-lg bg-brand-cream border border-slate-200 text-xs font-semibold text-slate-700">
            MOQ: ${product.moq} pcs
          </span>
        </div>

        <div class="flex items-center gap-2">
          <input type="number" id="qty-${product.id}" min="1" value="${product.moq}"
                 class="w-20 px-2.5 py-2 border border-slate-300 rounded-xl text-xs font-bold text-center focus:ring-2 focus:ring-brand-gold focus:outline-none" />
          <button onclick="addToBasket(${product.id})" class="flex-1 py-2.5 px-3 rounded-xl bg-brand-navy hover:bg-brand-slate text-white text-xs font-semibold transition active:scale-95">
            + Add to Quote Basket
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

document.querySelectorAll(".cat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cat-btn").forEach(b => {
      b.classList.remove("bg-brand-navy", "text-white", "font-semibold", "shadow-sm");
      b.classList.add("bg-white", "text-slate-700", "font-medium", "border", "border-slate-200");
    });
    btn.classList.remove("bg-white", "text-slate-700", "font-medium", "border", "border-slate-200");
    btn.classList.add("bg-brand-navy", "text-white", "font-semibold", "shadow-sm");
    currentCategory = btn.getAttribute("data-cat");
    renderProducts();
  });
});

searchInput.addEventListener("input", e => {
  searchQuery = e.target.value;
  renderProducts();
});

// Product Modal (Voice Permanently Muted)
function toggleModalVideoPlay() {
  const videoEl = document.getElementById("modal-video");
  const btn = document.getElementById("video-play-btn");
  enforcePermanentMute(videoEl);
  if (videoEl.paused) { videoEl.play(); btn.textContent = "Pause"; }
  else { videoEl.pause(); btn.textContent = "Play"; }
}

function openProductModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  document.getElementById("modal-brand").textContent = `${product.brand} • ${product.category}`;
  document.getElementById("modal-title").textContent = product.name;
  document.getElementById("modal-origin-badge").textContent = product.origin;
  document.getElementById("modal-video-caption").textContent = `${product.brand} — PureGermanCosmetic.eu (Muted)`;
  document.getElementById("modal-hs-code").textContent = `HS Code: ${product.hsCode}`;
  document.getElementById("modal-size").textContent = product.size;
  document.getElementById("modal-moq").textContent = `${product.moq} units`;
  document.getElementById("modal-price").textContent = `From €${product.price.toFixed(2)} / unit`;
  document.getElementById("modal-desc").textContent = product.desc;
  document.getElementById("modal-ingredients").textContent = product.ingredients;
  document.getElementById("modal-channel").textContent = product.channel;
  document.getElementById("modal-qty-input").value = product.moq;

  const videoEl = document.getElementById("modal-video");
  enforcePermanentMute(videoEl);
  videoEl.src = product.video;
  document.getElementById("video-play-btn").textContent = "Pause";
  videoEl.load();
  videoEl.play().catch(() => {});

  document.getElementById("modal-add-btn").onclick = () => {
    const qty = parseInt(document.getElementById("modal-qty-input").value, 10) || product.moq;
    addToBasketWithQty(product.id, qty);
    closeProductModal();
  };
  document.getElementById("product-modal").classList.remove("hidden");
}

function closeProductModal() {
  document.getElementById("modal-video").pause();
  document.getElementById("product-modal").classList.add("hidden");
}

// Basket & Two-Step Payment Confirmation Flow
function addToBasket(id) {
  const qtyInput = document.getElementById(`qty-${id}`);
  const product = PRODUCTS.find(p => p.id === id);
  const qty = qtyInput ? (parseInt(qtyInput.value, 10) || product.moq) : product.moq;
  addToBasketWithQty(id, qty);
}

function addToBasketWithQty(id, qty) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = basket.find(item => item.id === id);
  if (existing) existing.qty += qty;
  else basket.push({ ...product, qty });
  document.getElementById("order-confirmation-box").classList.add("hidden");
  document.getElementById("payment-confirm-step-box").classList.add("hidden");
  updateBasketUI();
  showToast(`Added ${qty}x ${product.brand} to Quote Basket`);
}

function updateBasketQty(id, newQty) {
  const qty = parseInt(newQty, 10);
  if (isNaN(qty) || qty <= 0) { removeFromBasket(id); return; }
  const item = basket.find(i => i.id === id);
  if (item) { item.qty = qty; updateBasketUI(); }
}

function removeFromBasket(id) {
  basket = basket.filter(item => item.id !== id);
  updateBasketUI();
}

function toggleBasket(show) {
  document.getElementById("basket-drawer").classList.toggle("hidden", !show);
  if (show) {
    updateBasketUI();
    handlePaymentTypeChange();
  }
}

function updateBasketUI() {
  basketBadge.textContent = basket.length;
  const container = document.getElementById("basket-items-container");
  const summaryBox = document.getElementById("basket-summary-box");
  const formEl = document.getElementById("order-submit-form");

  if (basket.length === 0) {
    container.innerHTML = `<div class="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-slate-300"><p class="text-sm font-semibold text-slate-700">Your Quote Basket is empty</p></div>`;
    summaryBox.classList.add("hidden");
    formEl.classList.add("hidden");
    return;
  }

  summaryBox.classList.remove("hidden");
  if (!pendingOrderDraft) {
    formEl.classList.remove("hidden");
  }

  let totalUnits = 0;
  let totalValue = 0;

  container.innerHTML = basket.map(item => {
    const lineTotal = item.price * item.qty;
    totalUnits += item.qty;
    totalValue += lineTotal;
    return `
      <div class="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-2xl">
        <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-xl object-cover bg-slate-100 shrink-0" />
        <div class="flex-1 min-w-0">
          <span class="text-[10px] font-bold uppercase text-brand-gold block">${item.brand}</span>
          <p class="text-xs font-bold text-brand-navy truncate">${item.name}</p>
          <p class="text-[11px] text-slate-500">€${item.price.toFixed(2)} &times; ${item.qty} = €${lineTotal.toFixed(2)}</p>
        </div>
        <input type="number" min="1" value="${item.qty}" onchange="updateBasketQty(${item.id}, this.value)" class="w-16 px-2 py-1 border border-slate-300 rounded-lg text-xs font-bold text-center" />
        <button onclick="removeFromBasket(${item.id})" class="text-slate-400 hover:text-red-600 text-xs font-bold px-1">&times;</button>
      </div>
    `;
  }).join("");

  document.getElementById("summary-skus").textContent = `${basket.length} SKU(s)`;
  document.getElementById("summary-units").textContent = `${totalUnits} pcs`;
  document.getElementById("summary-total").textContent = `€${totalValue.toFixed(2)}`;
}

// Step 1 -> Step 2 (Payment Review & Confirmation Prompt)
function beginPaymentStep(event) {
  event.preventDefault();
  if (basket.length === 0) return;

  const paymentType = document.getElementById("buyer-payment-type").value;
  const totalUnits = basket.reduce((sum, i) => sum + i.qty, 0);
  const totalAmount = basket.reduce((sum, i) => sum + i.price * i.qty, 0);

  let paymentSummaryText = "";
  let paymentBadgeLabel = "";
  let paymentMeta = {};

  if (paymentType === "Card") {
    const cardBrand = document.getElementById("card-brand-select").value;
    const holder = document.getElementById("card-holder-input").value.trim();
    const rawNum = document.getElementById("card-number-input").value.replace(/\s+/g, "");
    const expiry = document.getElementById("card-expiry-input").value.trim();
    const cvv = document.getElementById("card-cvv-input").value.trim();

    if (!holder || rawNum.length < 12 || !expiry || cvv.length < 3) {
      showToast("Please fill Cardholder Name, Card Number, Expiry & Security Number");
      return;
    }

    const last4 = rawNum.slice(-4);
    paymentBadgeLabel = `${cardBrand} •••• ${last4}`;
    paymentMeta = { cardBrand, holder, last4, expiry };
    paymentSummaryText = `
      <div><strong>Method:</strong> Card Payment (${cardBrand})</div>
      <div><strong>Cardholder Name:</strong> ${holder}</div>
      <div><strong>Card Number:</strong> •••• •••• •••• ${last4} (Exp: ${expiry})</div>
      <div><strong>Security Code (CVV):</strong> Provided (***)</div>
      <div><strong>Amount to Confirm:</strong> €${totalAmount.toFixed(2)}</div>
    `;
  } else {
    const senderName = document.getElementById("transfer-sender-name").value.trim();
    const senderAccount = document.getElementById("transfer-sender-account").value.trim();

    if (!senderName || !senderAccount) {
      showToast("Please enter Your Name and Your Account Detail for Überweisung");
      return;
    }

    paymentBadgeLabel = "Überweisung (Bank Transfer)";
    paymentMeta = { senderName, senderAccount };
    paymentSummaryText = `
      <div><strong>Method:</strong> Überweisung (Bank Transfer)</div>
      <div><strong>Sender Name:</strong> ${senderName}</div>
      <div><strong>Sender Account Detail:</strong> <span class="font-mono">${senderAccount}</span></div>
      <div><strong>Receiver IBAN:</strong> <span class="font-mono">BE81 9670 2429 4624</span> (FAIZ AHMED BHAGETT)</div>
      <div><strong>Transfer Amount:</strong> €${totalAmount.toFixed(2)}</div>
    `;
  }

  pendingOrderDraft = {
    createdAt: new Date().toLocaleString(),
    paymentType,
    paymentBadgeLabel,
    paymentMeta,
    company: document.getElementById("buyer-company").value.trim(),
    contactName: document.getElementById("buyer-name").value.trim(),
    email: document.getElementById("buyer-email").value.trim(),
    city: document.getElementById("buyer-city").value.trim(),
    incoterm: document.getElementById("buyer-incoterm").value,
    notes: document.getElementById("buyer-notes").value.trim(),
    items: basket.map(i => ({ id: i.id, brand: i.brand, name: i.name, qty: i.qty, price: i.price })),
    totalUnits,
    totalAmount
  };

  document.getElementById("order-submit-form").classList.add("hidden");
  document.getElementById("payment-review-details").innerHTML = paymentSummaryText;
  document.getElementById("payment-confirm-step-box").classList.remove("hidden");
  showToast("Review details and click Confirm Payment");
}

function backToPaymentEdit() {
  pendingOrderDraft = null;
  document.getElementById("payment-confirm-step-box").classList.add("hidden");
  document.getElementById("order-submit-form").classList.remove("hidden");
}

// Step 2 -> Final Payment Confirmed & Order Complete
function confirmPaymentAndCompleteOrder() {
  if (!pendingOrderDraft) return;

  const isCard = pendingOrderDraft.paymentType === "Card";
  const completedOrder = {
    orderId: `PGC-${Date.now().toString().slice(-6)}`,
    ...pendingOrderDraft,
    status: isCard ? "Payment Confirmed • Order Complete" : "Überweisung Confirmed • Order Complete"
  };

  submittedOrders.unshift(completedOrder);
  localStorage.setItem("pgc_orders", JSON.stringify(submittedOrders));
  latestOrder = completedOrder;
  pendingOrderDraft = null;

  basket = [];
  updateBasketUI();
  renderOrdersList();

  document.getElementById("order-submit-form").reset();
  document.getElementById("payment-confirm-step-box").classList.add("hidden");
  handlePaymentTypeChange();

  document.getElementById("confirmed-order-id").textContent = completedOrder.orderId;
  document.getElementById("confirmed-order-summary").textContent =
    `${completedOrder.company} (${completedOrder.city}) — ${completedOrder.paymentBadgeLabel}, €${completedOrder.totalAmount.toFixed(2)} (${completedOrder.totalUnits} pcs). Order is complete!`;
  document.getElementById("order-confirmation-box").classList.remove("hidden");
  showToast(`Payment confirmed! Order ${completedOrder.orderId} complete.`);
}

function triggerVerificationAlert(channel) {
  if (!latestOrder) return;
  const alertText = `Order Complete: ${latestOrder.orderId} on puregermancosmetic.eu | Company: ${latestOrder.company} (${latestOrder.city}) | Payment: ${latestOrder.paymentBadgeLabel} | Total: €${latestOrder.totalAmount.toFixed(2)}.`;
  if (channel === "email") {
    window.location.href = `mailto:info@puregermancosmetic.eu?subject=${encodeURIComponent(`Order Complete: ${latestOrder.orderId}`)}&body=${encodeURIComponent(alertText)}`;
  } else {
    window.open(`https://wa.me/491721885722?text=${encodeURIComponent(alertText)}`, "_blank", "noopener");
  }
}

function scrollToOrdersSection() {
  toggleBasket(false);
  document.getElementById("orders-portal").scrollIntoView({ behavior: "smooth" });
}

// Admin Access Gate (?admin=1 or PIN + Logoff)
function initAdminGate() {
  const params = new URLSearchParams(window.location.search);
  const adminTabBtn = document.getElementById("tab-admin-role");
  const roleGroup = adminTabBtn?.parentElement;

  if (params.get("admin") === "1") {
    isAdminUnlocked = true;
  }

  if (adminTabBtn && roleGroup && !document.getElementById("btn-admin-unlock")) {
    const unlockBtn = document.createElement("button");
    unlockBtn.id = "btn-admin-unlock";
    unlockBtn.type = "button";
    unlockBtn.onclick = unlockAdminWithPin;
    unlockBtn.className = "px-3 py-2 rounded-xl text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition";
    unlockBtn.textContent = isAdminUnlocked ? "Admin Unlocked" : "Admin Login";
    roleGroup.insertBefore(unlockBtn, adminTabBtn);
  }

  if (adminTabBtn && roleGroup && !document.getElementById("btn-admin-lock")) {
    const lockBtn = document.createElement("button");
    lockBtn.id = "btn-admin-lock";
    lockBtn.type = "button";
    lockBtn.onclick = lockAdminSession;
    lockBtn.className = "px-3 py-2 rounded-xl text-xs font-semibold bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition";
    lockBtn.textContent = "Admin Logoff";
    roleGroup.appendChild(lockBtn);
  }

  refreshAdminVisibility();
}

function unlockAdminWithPin() {
  if (isAdminUnlocked) {
    switchRoleView("admin");
    return;
  }
  const entered = prompt("Enter Admin PIN for Pure German Cosmetic:");
  if (entered === ADMIN_SECRET_PIN) {
    isAdminUnlocked = true;
    const btn = document.getElementById("btn-admin-unlock");
    if (btn) btn.textContent = "Admin Unlocked";
    switchRoleView("admin");
    showToast("Admin access unlocked");
  } else if (entered !== null) {
    showToast("Incorrect Admin PIN");
  }
}

function lockAdminSession() {
  isAdminUnlocked = false;
  roleViewMode = "client";

  const unlockBtn = document.getElementById("btn-admin-unlock");
  if (unlockBtn) {
    unlockBtn.textContent = "Admin Login";
  }

  document.getElementById("tab-client-role").className =
    "px-4 py-2 rounded-xl text-xs font-bold bg-brand-navy text-white transition";
  document.getElementById("tab-admin-role").className =
    "px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition";

  refreshAdminVisibility();
  renderOrdersList();
  showToast("Admin session locked");
}

function refreshAdminVisibility() {
  const adminTabBtn = document.getElementById("tab-admin-role");
  const lockBtn = document.getElementById("btn-admin-lock");
  if (adminTabBtn) {
    adminTabBtn.classList.toggle("hidden", !isAdminUnlocked);
  }
  if (lockBtn) {
    lockBtn.classList.toggle("hidden", !isAdminUnlocked);
  }
  if (!isAdminUnlocked && roleViewMode === "admin") {
    roleViewMode = "client";
    document.getElementById("tab-client-role").className = "px-4 py-2 rounded-xl text-xs font-bold bg-brand-navy text-white transition";
  }
  document.getElementById("admin-controls-box").classList.toggle("hidden", !(isAdminUnlocked && roleViewMode === "admin"));
}

function switchRoleView(mode) {
  if (mode === "admin" && !isAdminUnlocked) {
    unlockAdminWithPin();
    return;
  }
  roleViewMode = mode;
  document.getElementById("tab-client-role").className = mode === "client"
    ? "px-4 py-2 rounded-xl text-xs font-bold bg-brand-navy text-white transition"
    : "px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
  document.getElementById("tab-admin-role").className = mode === "admin"
    ? "px-4 py-2 rounded-xl text-xs font-bold bg-brand-navy text-white transition"
    : "px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
  refreshAdminVisibility();
  renderOrdersList();
}

function adminUpdateStatus(orderId, newStatus) {
  if (!isAdminUnlocked) return;
  submittedOrders = submittedOrders.map(o => o.orderId === orderId ? { ...o, status: newStatus } : o);
  localStorage.setItem("pgc_orders", JSON.stringify(submittedOrders));
  renderOrdersList();
  showToast(`Order ${orderId} updated to ${newStatus}`);
}

function adminDeleteOrder(orderId) {
  if (!isAdminUnlocked) return;
  submittedOrders = submittedOrders.filter(o => o.orderId !== orderId);
  localStorage.setItem("pgc_orders", JSON.stringify(submittedOrders));
  if (latestOrder && latestOrder.orderId === orderId) {
    latestOrder = null;
  }
  renderOrdersList();
  showToast(`Order ${orderId} deleted`);
}

function adminAddProduct(event) {
  event.preventDefault();
  if (!isAdminUnlocked) return;
  const newProd = {
    id: Date.now(),
    brand: document.getElementById("adm-brand").value.trim().toUpperCase(),
    name: document.getElementById("adm-name").value.trim(),
    category: document.getElementById("adm-cat").value,
    origin: "Made in Germany",
    price: parseFloat(document.getElementById("adm-price").value) || 12.0,
    moq: 24,
    size: "Standard B2B Unit",
    hsCode: "3304.99.00",
    image: IMG_POOL[0],
    video: VIDEO_POOL[0],
    desc: "Added via Admin Wholesale Catalog Portal.",
    ingredients: "Standard European B2B Cosmetic Formulation.",
    channel: "Retail Chains, Pharmacies & Salons"
  };
  PRODUCTS.unshift(newProd);
  renderProducts();
  event.target.reset();
  showToast(`${newProd.brand} added to catalog`);
}

document.getElementById("order-search-id").addEventListener("input", renderOrdersList);

function renderOrdersList() {
  const container = document.getElementById("orders-list-container");
  const filterId = (document.getElementById("order-search-id").value || "").trim().toLowerCase();
  const list = submittedOrders.filter(o => !filterId || o.orderId.toLowerCase().includes(filterId) || o.company.toLowerCase().includes(filterId));

  if (list.length === 0) {
    container.innerHTML = `<div class="p-8 text-center rounded-2xl border border-dashed border-slate-300 text-sm text-slate-500">No orders found. Add products to Quote Basket and complete a payment.</div>`;
    return;
  }

  const showAdminActions = isAdminUnlocked && roleViewMode === "admin";

  container.innerHTML = list.map(o => `
    <div class="p-5 rounded-2xl bg-brand-cream border border-slate-200 space-y-3">
      <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <span class="font-mono text-xs font-bold bg-brand-navy text-brand-goldLight px-2.5 py-1 rounded-lg">${o.orderId}</span>
          <span class="text-xs text-slate-500 ml-2">${o.createdAt}</span>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full">${o.paymentBadgeLabel || o.paymentType || "Payment Recorded"}</span>
          <span class="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">${o.status}</span>
          ${showAdminActions ? `
            <select onchange="adminUpdateStatus('${o.orderId}', this.value)" class="text-xs border border-slate-300 rounded-lg px-2 py-1 bg-white font-semibold">
              <option value="Payment Confirmed • Order Complete" ${o.status.includes("Confirmed") ? "selected" : ""}>Confirmed</option>
              <option value="Proforma Sent" ${o.status === "Proforma Sent" ? "selected" : ""}>Proforma Sent</option>
              <option value="Dispatched" ${o.status === "Dispatched" ? "selected" : ""}>Dispatched</option>
            </select>
            <button type="button" onclick="adminDeleteOrder('${o.orderId}')" class="text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 px-2.5 py-1 rounded-lg transition">
              Delete
            </button>
          ` : ""}
        </div>
      </div>

      <div class="grid sm:grid-cols-3 gap-3 text-xs">
        <div><span class="text-slate-500 block">Company:</span><strong>${o.company}</strong></div>
        <div><span class="text-slate-500 block">Buyer Contact:</span><strong>${o.contactName}</strong> (${o.email})</div>
        <div><span class="text-slate-500 block">Destination &amp; Term:</span><strong>${o.city}</strong> &bull; ${o.incoterm}</div>
      </div>

      ${o.paymentMeta ? `
        <div class="text-xs text-slate-700 bg-white/80 px-3 py-2 rounded-xl border border-slate-200">
          ${o.paymentType === "Card"
            ? `<strong>Card Details:</strong> ${o.paymentMeta.cardBrand} • Holder: ${o.paymentMeta.holder} • Card: •••• ${o.paymentMeta.last4} (${o.paymentMeta.expiry})`
            : `<strong>Überweisung Details:</strong> Sender: ${o.paymentMeta.senderName} • Account/IBAN: <span class="font-mono">${o.paymentMeta.senderAccount}</span>`
          }
        </div>
      ` : ""}

      <ul class="text-xs text-slate-700 space-y-1 bg-white p-3 rounded-xl border border-slate-200">
        ${o.items.map(item => `<li>&bull; <strong>[${item.brand}]</strong> ${item.name} — ${item.qty} pcs @ €${item.price.toFixed(2)}</li>`).join("")}
      </ul>

      <div class="flex items-center justify-between text-xs pt-1">
        <span class="text-slate-500">${showAdminActions ? "Admin View: Manage status & delete" : "Client View: Completed order"}</span>
        <strong class="text-sm text-brand-navy">Net Subtotal: €${o.totalAmount.toFixed(2)} (${o.totalUnits} pcs)</strong>
      </div>
    </div>
  `).join("");
}

// Direct Human Messenger (No Bot)
function toggleChatDrawer(show) {
  document.getElementById("chat-drawer").classList.toggle("hidden", !show);
  if (show) renderChatMessages();
}

function renderChatMessages() {
  const box = document.getElementById("chat-messages-box");
  const activeRole = document.getElementById("chat-sender-role").value;

  if (chatMessages.length === 0) {
    box.innerHTML = `<div class="text-center py-8 text-xs text-slate-500">Direct human messaging desk. Write a message to start a conversation with the company team.</div>`;
    return;
  }

  box.innerHTML = chatMessages.map(m => {
    const isCurrentSide = m.role === activeRole;
    return `
      <div class="p-3 rounded-2xl text-xs max-w-[85%] ${isCurrentSide ? "ml-auto bg-brand-navy text-white" : "mr-auto bg-white border border-slate-200 text-slate-800"}">
        <div class="flex items-center justify-between gap-2 text-[10px] opacity-75 mb-1">
          <strong>${m.name} (${m.role})</strong>
          <span>${m.time}</span>
        </div>
        <p class="leading-relaxed">${m.text}</p>
      </div>
    `;
  }).join("");
  box.scrollTop = box.scrollHeight;
}

function sendChatMessage(event) {
  event.preventDefault();
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text) return;

  const msg = {
    role: document.getElementById("chat-sender-role").value,
    name: document.getElementById("chat-sender-name").value.trim(),
    company: document.getElementById("chat-sender-company").value.trim(),
    text,
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  };

  chatMessages.push(msg);
  localStorage.setItem("pgc_human_chat", JSON.stringify(chatMessages));
  input.value = "";
  renderChatMessages();
}

function openLegalModal(type) {
  const titleEl = document.getElementById("legal-modal-title");
  const contentEl = document.getElementById("legal-modal-content");
  if (type === "impressum") {
    titleEl.textContent = "Impressum (§ 5 DDG)";
    contentEl.innerHTML = `<p><strong>Pure German Cosmetic</strong><br/>Faiz Ahmed Bhagett<br/>Kirchstr. 42, 65375 Oestrich-Winkel, Deutschland<br/>Tel/WhatsApp: +49 172 1885722<br/>E-Mail: info@puregermancosmetic.eu</p>`;
  } else if (type === "privacy") {
    titleEl.textContent = "Datenschutzerklärung (GDPR)";
    contentEl.innerHTML = `<p>Order inquiry details and direct messages submitted on the website are used for B2B trade communication and order tracking.</p>`;
  } else {
    titleEl.textContent = "B2B Export Terms";
    contentEl.innerHTML = `<p>B2B wholesale inquiries only. Indicative EUR net prices exclude EU export VAT (§ 6 UStG) and are finalized in the Proforma Invoice.</p>`;
  }
  document.getElementById("legal-modal").classList.remove("hidden");
}

function closeLegalModal() {
  document.getElementById("legal-modal").classList.add("hidden");
}

let toastTimer;
function showToast(msg) {
  const toast = document.getElementById("toast");
  document.getElementById("toast-msg").textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 3000);
}

window.addEventListener("DOMContentLoaded", () => {
  initHeroVideos();
  initAdminGate();
  renderProducts();
  updateBasketUI();
  renderOrdersList();
});