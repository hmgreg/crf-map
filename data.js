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
    membershipType: "Full"
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
