// data.js

// Mapbox token
 mapboxgl.accessToken = 'pk.eyJ1IjoiaGFwcHltb25kYXkiLCJhIjoiY21kZXpjNGx2MDhmOTJrb3Bja2ViMW5qcyJ9.rrWtPNbSr1AXBiGQl8AY6A';

// Email to Bettermode profile mapping
const memberProfiles = {
  "gary@happymonday.co.nz": "https://crf-demo2025.bettermode.io/member/2yxqdQeKpe",
  "javier.yebenes@fostermoore.com": "https://crf-demo2025.bettermode.io/member/M2BRHV6jt2",
  "justin.hygate@fostermoore.com": "https://crf-demo2025.bettermode.io/member/nqWcIXwmuH",
  "ongchloeee@gmail.com": "https://crf-demo2025.bettermode.io/member/zo3SlrcVxA",
  "richardjohncliffordwilson@gmail.com": "https://crf-demo2025.bettermode.io/member/E8dTThnWLX"
};

const businesses = [
  {
    name: "Anguilla Financial Services Commission",
    country: "Anguilla",
    address: "P.O. Box 60, The Valley, Anguilla",
    phone: "+1 264 497 3881",
    website: "http://www.commercialregistry.ai/acorn-welcome.html",
    email: "Mishline.Leader@afsc.ai",
    coords: [-63.053, 18.217],
    membershipType: "Full",
    logo: "Anguilla.png"
  },
  {
    name: "Australian Registry Business Services",
    country: "Australia",
    address: "Level 24, 120 Collins Street, Melbourne, Victoria 3000, Australia",
    phone: "+61 3 9280 3200",
    website: "https://register.business.gov.au/",
    email: "Karen.Foat@ato.gov.au",
    coords: [144.9632, -37.8142],
    membershipType: "Full",
    logo: "Australia.png"
  },
  {
    name: "State Tax Service under the Ministry of Economy of the Republic of Azerbaijan",
    country: "Azerbaijan",
    address: "16 Landau Str, AZ1073, Baku, Azerbaijan",
    phone: "+994 12 403 8617",
    website: "http://www.taxes.gov.az/index.php",
    email: "Ferqane.Ibragimova@taxes.gov.az",
    coords: [49.8671, 40.4093],
    membershipType: "Full",
    logo: "Azerbaijan.png"
  },
  {
    name: "Registrar of Joint Stock Companies and Firms, Ministry of Commerce",
    country: "Bangladesh",
    address: "TCB Bhaban (6th Floor), 1 Kawran Bazar, Dhaka 1215, Bangladesh",
    phone: "+88 02 818 9401",
    website: "http://roc.gov.bd",
    email: "registrar@roc.gov.bd",
    coords: [90.3953, 23.7509],
    membershipType: "Full",
    logo: "Bangladesh.png"
  },
  {
    name: "Belize Financial Services Commission",
    country: "Belize",
    address: "6130 Iguana Avenue, Belmopan City, Belize",
    phone: "+501-822-2974",
    website: "https://www.belizefsc.org.bz/",
    email: "director@belizefsc.org.bz",
    coords: [-88.768, 17.2479],
    membershipType: "Full",
    logo: "Belize.png"
  },
  {
    name: "Registrar of Companies",
    country: "Bermuda",
    address: "4th Floor, Government Admin Building, 30 Parliament Street, Hamilton HM HX, Bermuda",
    phone: "+1 441 297 7753",
    website: "http://www.roc.gov.bm/",
    email: "kjoaquin@gov.bm",
    coords: [-64.7821, 32.2953],
    membershipType: "Full",
    logo: "Bermuda.png"
  },
  {
    name: "Companies and Intellectual Property Authority (CIPA)",
    country: "Botswana",
    address: "Plot 181 Kgale Mews, Gaborone, Botswana",
    phone: "+267 367 3700",
    website: "http://www.cipa.co.bw/home",
    email: "hdmocuminyane@cipa.co.bw",
    coords: [25.9088, -24.6581],
    membershipType: "Full",
    logo: "Botswana.png"
  },
  {
    name: "BVI Financial Services Commission",
    country: "British Virgin Islands",
    address: "Pasea Estate, P.O. Box 418, Road Town, Tortola, VG 1110, British Virgin Islands",
    phone: "+1 284 494 1324",
    website: "http://www.bvifsc.vg",
    email: "herbertm@bvifsc.vg",
    coords: [-64.6147, 18.4305],
    membershipType: "Full",
    logo: "British Virgin Islands.png"
  },
  {
    name: "Registry Agency, Republic of Bulgaria",
    country: "Bulgaria",
    address: "Registry Agency, 20 Elisaveta Bagryana Str., Sofia 1111, Bulgaria",
    phone: "+359 0700 12107",
    website: "https://portal.registryagency.bg",
    email: "support@registryagency.bg",
    coords: [23.3606, 42.6802],
    membershipType: "Full",
    logo: "Bulgaria.png"
  },
  {
    name: "Corporations Canada",
    country: "Canada",
    address: "50 Victoria Street, Room C-114, Gatineau, QC J8X 3X1",
    phone: "+1 613 954 3576",
    website: "https://www.ic.gc.ca/eic/site/cd-dgc.nsf/eng/home",
    email: "christiane.gagnon2@ised-isde.gc.ca",
    coords: [-75.7129, 45.4240],
    membershipType: "Full"
  },
  {
    name: "Germany - Bundesanzeiger Verlag GmbH",
    country: "Germany",
    address: "Amsterdamer Straße 192, 50735 Cologne, Germany",
    phone: "+49 211 97668179",
    website: "https://www.unternehmensregister.de/ureg/?submitaction=language&language=en",
    email: "service@bundesanzeiger.de",
    coords: [6.9531, 50.9726],
    membershipType: "Full",
    logo: "Germany.png"
  },
  {
    name: "Happy Monday",
    country: "New Zealand",
    address: "303 Blenheim Road, Christchurch, New Zealand",
    phone: "0212244441",
    website: "https://happymonday.co.nz",
    email: "gary@happymonday.co.nz",
    coords: [172.5781, -43.5317],
    memberUrl: "https://crf-demo2025.bettermode.io/member/2yxqdQeKpe",
    membershipType: "Observer"
  },
  {
    name: "Lesotho",
    country: "Lesotho",
    address: "LNDC Phase II, P.O. Box 747, Maseru 100, Lesotho",
    phone: "+266 2232 6647",
    website: "https://www.obfc.org.ls/home/",
    email: "monahengmaichu@yahoo.com",
    coords: [27.4784, -29.3124],
    membershipType: "Associate"
  }
];


// Attach member URLs to matching businesses by email
businesses.forEach(b => {
  if (memberProfiles[b.email]) {
    b.memberUrl = memberProfiles[b.email];
  }
});
