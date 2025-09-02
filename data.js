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
    logo: "British-Virgin-Islands.png"
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
    name: "Business Registration Department – Ministry of Commerce",
    country: "Cambodia",
    address: "Lot 19-61 Russian Federation Blvd, Phum Teuk Thia, Sangkat Teuk Thia, Khan Sen Sok, Phnom Penh, Cambodia",
    phone: "+855 2386 6050",
    website: "http://www.businessregistration.moc.gov.kh",
    email: "omdararith@yahoo.com",
    coords: [104.8784, 11.556],
    membershipType: "Full",
    logo: "Cambodia.png"
  },
  {
    name: "Corporations Canada",
    country: "Canada",
    address: "50 Victoria Street, Room C-114, Gatineau, QC J8X 3X1",
    phone: "+1 613 954 3576",
    website: "https://www.ic.gc.ca/eic/site/cd-dgc.nsf/eng/home",
    email: "christiane.gagnon2@ised-isde.gc.ca",
    coords: [-75.7129, 45.4240],
    membershipType: "Full",
    logo: "Canada.png"
  },
  {
    name: "Financial Supervisory Commission",
    country: "Cook Islands",
    address: "Financial Supervisory Commission, P.O. Box 594, Avarua, Rarotonga, Cook Islands",
    phone: "+682 20 798, +682 21 798",
    website: "https://www.fsc.gov.ck/cookIslandsFscApp/content/home",
    email: "Inquire@fsc.gov.ck",
    coords: [-159.7708, -21.2075],
    membershipType: "Full",
    logo: "Cook-Islands.png"
  },
  {
    name: "Bundesanzeiger Verlag GmbH",
    country: "Germany",
    address: "Barbarastraße 1, 50735 Köln, Germany",
    phone: "+49 211 9766 8179",
    website: "https://www.unternehmensregister.de/ureg/?submitaction=language&language=en",
    email: "service@bundesanzeiger.de",
    coords: [6.97048282963874, 50.97011431933766],
    membershipType: "Full",
    logo: "Germany-Bundesanzeiger-Verlag-GmbH.png"
  },
  {
    name: "Ministry of Justice of North Rhine-Westphalia",
    country: "Germany",
    address: "Martin-Luther-Platz 40, Düsseldorf, Germany",
    phone: "+49 2118 7920",
    website: "https://www.justiz.nrw.de/WebPortal_en_Relaunch/index.php",
    email: "Celia.JohnstonVPS@ag-essen.nrw.de",
    coords: [6.781569, 51.223832],
    membershipType: "Full",
    logo: "Germany-North-Rhine-Westphalia.png"
  },
  {
    name: "Office of the Registrar of Companies",
    country: "Ghana",
    address: "P.O. Box 118, Accra, Ghana",
    phone: "+2333 0266 4691",
    website: "https://egovonline.gegov.gov.gh",
    email: "jemimamoware@gmail.com",
    coords: [-0.2059, 5.6148],
    membershipType: "Full",
    logo: "Ghana.png"
  },
  {
    name: "Companies House Gibraltar",
    country: "Gibraltar",
    address: "1st Floor, The Arcade, 30–38 Main Street, Gibraltar",
    phone: "+350 2007 8193",
    website: "http://www.companieshouse.gi/index.html",
    email: "mail@companieshouse.gi",
    coords: [-5.3532, 36.1373],
    membershipType: "Full",
    logo: "Gibraltar.png"
  },
  {
    name: "Guernsey Registry",
    country: "Guernsey",
    address: "Market Building, Fountain Street, St Peter Port, Guernsey",
    phone: "+44 14 8174 3800",
    website: "http://guernseyregistry.com",
    email: "enquiries@guernseyregistry.com",
    coords: [-2.5374, 49.4542],
    membershipType: "Full",
    logo: "Guernsey.png"
  },
  {
    name: "Companies Registry",
    country: "Hong Kong, China",
    address: "Companies Registry, 14/F Queensway Government Offices, 66 Queensway, Hong Kong",
    phone: "+852 2867 2818",
    website: "https://www.cr.gov.hk/en/home/index.htm",
    email: "helentang@cr.gov.hk",
    coords: [114.171, 22.2783],
    membershipType: "Full",
    logo: "Hong-Kong.png"
  },
  {
    name: "Ministry of Corporate Affairs",
    country: "India",
    address: "5th Floor, Room 508 A-Wing, Shastri Bhawan, Dr Rajendra Prasad Rd, New Delhi 110001, India",
    phone: "011 23073017",
    website: "https://www.mca.gov.in/",
    email: "vivek.meena@mca.gov.in",
    coords: [77.215, 28.6164],
    membershipType: "Full",
    logo: "India.png"
  },
  {
    name: "Companies Registration Office",
    country: "Ireland",
    address: "Companies Registration Office, Bloom House, Gloucester Place Lower, Dublin 1, Ireland",
    phone: "+353 1 804 5200",
    website: "http://www.cro.ie",
    email: "info@cro.ie",
    coords: [-6.2603, 53.3498],
    membershipType: "Full",
    logo: "Ireland.png"
  },
  {
    name: "The Israeli Corporations Authority (ICA), Ministry of Justice",
    country: "Israel",
    address: "Israeli Corporations Authority, P.O. Box 28178, Jerusalem 9128101, Israel",
    phone: "+972 2654 6644",
    website: "http://www.justice.gov.il/En/Units/IsraeliCorporations/Pages/default.aspx",
    email: "ShuliA@justice.gov.il",
    coords: [35.2137, 31.7683],
    membershipType: "Full",
    logo: "Israel.png"
  },
  {
    name: "Jersey Financial Services Commission",
    country: "Jersey",
    address: "PO Box 267, 14-18 Castle Street, St Helier, Jersey JE4 8TP, Channel Islands",
    phone: "+44 15 3482 2030",
    website: "http://www.jerseyfsc.org/registry/",
    email: "registry@jerseyfsc.org",
    coords: [-2.1066, 49.1868],
    membershipType: "Full",
    logo: "Jersey.png"
  },
  {
    name: "Astana Financial Services Authority (AFSA)",
    country: "Kazakhstan",
    address: "Mangilik El, 55/17, Block C-3.2, Astana, Kazakhstan 010000",
    phone: "+7 7172 61 72 66",
    website: "http://www.afsa.kz",
    email: "international@afsa.kz",
    coords: [71.4304, 51.128],
    membershipType: "Full",
    logo: "Kazakhstan.png"
  },
  {
    name: "Business Registration Service – Office of the Attorney General and the Department of Justice",
    country: "Kenya",
    address: "PO Box 40112-00100, Harambee Ave, Sheria House, Nairobi, Kenya",
    phone: "+254 2022 7461",
    website: "http://www.statelaw.go.ke",
    email: "dg@brs.go.ke",
    coords: [36.8249, -1.287],
    membershipType: "Full",
    logo: "Kenya.png"
  },
  {
    name: "Ministry of Trade and Industry",
    country: "Lesotho",
    address: "Director OBFC and Registrar of Companies, One-Stop Business Facilitation Centre, Ministry of Trade and Industry, P.O. Box 747, Maseru 100, Lesotho",
    phone: "+266 2232 6647",
    website: "http://www.obfc.org.ls/home/",
    email: "monahengmaichu@yahoo.com",
    coords: [27.4833, -29.3142],
    membershipType: "Full",
    logo: "Lesotho.png"
  },
  {
    name: "Companies Commission of Malaysia (SSM)",
    country: "Malaysia",
    address: "Menara SSM@Sentral No 7, Jalan Stesen Sentral 5, Kuala Lumpur Sentral 50623, Kuala Lumpur, Malaysia",
    phone: "+603 2299 4400",
    website: "http://www.ssm.com.my",
    email: "marina@ssm.com.my",
    coords: [101.6865, 3.1333],
    membershipType: "Full",
    logo: "Malaysia.png"
  },
  {
    name: "Labuan Financial Services Authority (Labuan FSA)",
    country: "Malaysia - Labuan",
    address: "Level 17, Main Office Tower, Financial Park Complex, Jalan Merdeka 87000, Labuan F.T., Malaysia",
    phone: "+60 8759 1200",
    website: "https://www.labuanibfc.com/default.aspx",
    email: "essah@labuanfsa.gov.my",
    coords: [115.2417, 5.2775],
    membershipType: "Full",
    logo: "Malaysia-Labuan.png"
  },
  {
    name: "Ministry of Economic Development",
    country: "Maldives",
    address: "1st Floor H Pamelia, Boduthakurufaanu Magu, Male, Maldives",
    phone: "+96 0333 3122",
    website: "http://www.trade.gov.mv",
    email: "company@trade.gov.mv",
    coords: [73.5093, 4.1755],
    membershipType: "Full",
    logo: "Maldives.png"
  },
  {
    name: "Corporate and Business Registration Department",
    country: "Mauritius",
    address: "Companies Division (Head Office), One Cathedral Square, Jules Koenig Street, Port-Louis, Mauritius",
    phone: "+230 211 2566",
    website: "http://companies.govmu.org/English/Pages/default.aspx",
    email: "prabha.chinien@outlook.com",
    coords: [57.5012, -20.1609],
    membershipType: "Full",
    logo: "Mauritius.png"
  },
  {
    name: "Ministry of National Planning and Economic Development – Directorate of Investment and Company Administration",
    country: "Myanmar",
    address: "Building No.1, Thit Sar Road, Yankin Township, Yangon, Myanmar",
    phone: "+95 1 658131",
    website: "http://dica.gov.mm",
    email: "majanooi@gmail.com",
    coords: [96.1735, 16.8281],
    membershipType: "Full",
    logo: "Myanmar.png"
  },
  /*{
    name: "Business and Intellectual Property Authority (BIPA)",
    country: "Namibia",
    address: "188 Sam Nujoma Drive, PO Box 185, Windhoek, Namibia",
    phone: "+26612994482",
    website: "http://www.bipa.na",
    email: "info@bipa.na",
    coords: [17.0832, -22.5597],
    membershipType: "Full",
    logo: "Namibia.png"
  },*/
  {
    name: "The Netherlands Chamber of Commerce",
    country: "Netherlands",
    address: "Kamer van Koophandel, Sint Jacobsstraat 300, 3511 BT Utrecht, The Netherlands",
    phone: "+31 88 585 1 585",
    website: "https://www.kvk.nl/english/",
    email: "liv.vander.veen@kvk.nl",
    coords: [5.1187, 52.0957],
    membershipType: "Full",
    logo: "Netherlands.png"
  },
  {
    name: "Companies Office",
    country: "New Zealand",
    address: "Companies Office, MBIE, Private Bag 92061, Victoria St West, Auckland 1142, New Zealand",
    phone: "+64 9 916 4541",
    website: "http://www.business.govt.nz/companies/",
    email: "Sheree.McDonald@companies.govt.nz",
    coords: [174.7633, -36.8485],
    membershipType: "Full",
    logo: "New-Zealand.png"
  },
  {
    name: "Central Register of Republic of North Macedonia",
    country: "North Macedonia (Republic of)",
    address: "Kuzman Josifovski Pitu 1, 1000 Skopje, Republic of North Macedonia",
    phone: "+389 2328 8100",
    website: "http://www.crm.com.mk/DS/default.aspx",
    email: "Anita.Stamnova@crm.org.mk",
    coords: [21.4254, 41.9981],
    membershipType: "Full",
    logo: "North-Macedonia.png"
  },
  {
    name: "Investment Promotion Authority",
    country: "Papua New Guinea",
    address: "PO Box 5053, Boroko National Capital District, PNG",
    phone: "6753084400",
    website: "https://www.ipa.gov.pg/",
    email: "harrietk@ipa.gov.pg",
    coords: [147.1803, -9.4438],
    membershipType: "Full",
    logo: "Papua-New-Guinea.png"
  },
  {
    name: "Securities and Exchange Commission",
    country: "Philippines",
    address: "Secretariat Building, PICC Complex, Roxas Boulevard, Metro Manila, Philippines",
    phone: "+02 584 5343",
    website: "http://www.sec.gov.ph",
    email: "ebaquino@sec.gov.ph",
    coords: [120.9842, 14.5995],
    membershipType: "Full",
    logo: "Philippines.png"
  },
  {
    name: "Qatar Financial Centre Companies Registration Office",
    country: "Qatar Financial Centre",
    address: "QFC Tower 1, PO Box 23245, Doha, Qatar",
    phone: "+974 4496 7776",
    website: "http://www.qfc.qa/en/Operate/CRO/Pages/PublicRegister.aspx",
    email: "cro@qfc.com.qa",
    coords: [51.531, 25.2854],
    membershipType: "Full",
    logo: "Qatar.png"
  },
  {
    name: "The National Trade Register Office, The Ministry of Justice",
    country: "Romania",
    address: "74, Unirii Blvd, Bucharest 030837, Romania",
    phone: "+40-21 316 08 04",
    website: "https://www.onrc.ro/index.php/en/",
    email: "luiza.mardare@onrc.ro",
    coords: [26.0963, 44.4336],
    membershipType: "Full",
    logo: "Romania.png"
  },
  {
    name: "Ministry of Commerce, Industry and Labour",
    country: "Samoa - MCIL",
    address: "Level 3, ACC House, P.O. Box 862, Apia, Western Samoa",
    phone: "+685 20441",
    website: "https://www.businessregistries.gov.ws",
    email: "mpal@mcil.gov.ws",
    coords: [-171.7667, -13.8333],
    membershipType: "Full",
    logo: "Samoa-MCIL.png"
  },
  {
    name: "Samoa International Finance Authority",
    country: "Samoa - SIFA",
    address: "Level 6, Development Bank of Samoa Building, Apia, Western Samoa",
    phone: "+685 66400",
    website: "https://www.sifa.ws",
    email: "sifa@sifa.ws",
    coords: [-171.769, -13.8335],
    membershipType: "Full",
    logo: "Samoa-SIFA.png"
  },
  {
    name: "Accounting & Corporate Regulatory Authority",
    country: "Singapore",
    address: "55 Newton Road, #03-02 Revenue House, Singapore 307987",
    phone: "+65 6248 6028",
    website: "https://www.acra.gov.sg/home/",
    email: "shelley_chua@acra.gov.sg",
    coords: [103.8447, 1.3143],
    membershipType: "Full",
    logo: "Singapore.png"
  },
  {
    name: "Agency of the Republic of Slovenia for Public Legal Records and Related Services, AJPES",
    country: "Slovenia (Republic of)",
    address: "Tržaška cesta 16, 1000 Ljubljana, Slovenia",
    phone: "00386 1 4774 100",
    website: "https://www.ajpes.si/",
    email: "gp@ajpes.si",
    coords: [14.5085, 46.0511],
    membershipType: "Full",
    logo: "Slovenia.png"
  },
  {
    name: "Companies and Intellectual Property Commission (CIPC)",
    country: "South Africa",
    address: "The dti Campus, Block F, 77 Meintjies Street, Sunnyside, Pretoria, South Africa",
    phone: "+27 12 394 5262",
    website: "http://www.cipc.co.za/za/",
    email: "RVoller@cipc.co.za",
    coords: [28.2293, -25.7482],
    membershipType: "Full",
    logo: "South-Africa.png"
  },
  {
    name: "Land and Mercantile Registrars Association of Spain",
    country: "Spain",
    address: "Diego de León 21, 28006 Madrid, Spain",
    phone: "+91 270 16 99",
    website: "http://www.registradores.org",
    email: "contacto@registradores.org",
    coords: [-3.678, 40.4281],
    membershipType: "Full",
    logo: "Spain.png"
  },
  {
    name: "Department of Registrar of Companies",
    country: "Sri Lanka",
    address: "400 D R Wijewardena Mawatha, Colombo 10, Sri Lanka",
    phone: "+94 11 268 9208",
    website: "http://www.drc.gov.lk",
    email: "registrar@drc.gov.lk",
    coords: [79.8609, 6.9176],
    membershipType: "Full",
    logo: "Sri-Lanka.png"
  },
  {
    name: "Department of Business Development, Ministry of Commerce",
    country: "Thailand",
    address: "563 Nonthaburi Road, Amphur Muang, Nonthaburi 11000, Thailand",
    phone: "+66 2 5474431",
    website: "http://www.dbd.go.th/dbdweb_en/main.php?filename=index",
    email: "regis@dbd.go.th",
    coords: [100.514, 13.8597],
    membershipType: "Full",
    logo: "Thailand.png"
  },
  {
    name: "Ministry of Commerce, Tourism and Labour",
    country: "Tonga",
    address: "Latai Estate, PO Box 110, Fasi-moe-afi, Nuku’alofa, Tonga",
    phone: "+676 23688",
    website: "https://www.businessregistries.gov.to",
    email: "registrar@mted.gov.to",
    coords: [-175.2043, -21.1393],
    membershipType: "Full",
    logo: "Tonga.png"
  },
  {
    name: "National Center for Business Register",
    country: "Tunisia",
    address: "Street 8722 1, Olympic City, Tunis, Tunisia",
    phone: "+216 71 806758",
    website: "https://www.registre-entreprises.tn/rne-public/#/",
    email: "adel.chouari@registre-entreprises.tn",
    coords: [10.1846, 36.8008],
    membershipType: "Full",
    logo: "Tunisia.png"
  },
  {
    name: "Ministry of Trade of Türkiye",
    country: "Türkiye",
    address: "Dumlupınar Bulvarı No: 151, B Blok (Eskişehir Yolu 9. km), 06800 Çankaya, Ankara, Turkey",
    phone: "+90 (312) 449 48 78",
    website: "https://www.trade.gov.tr/",
    coords: [32.8321, 39.9275],
    membershipType: "Full",
    logo: "Türkiye.png"
  },
  {
    name: "Uganda Registration Services Bureau",
    country: "Uganda",
    address: "Uganda Registration Services Bureau, Plot 5 George Street, Georgian House, P.O. Box 6848, Kampala, Uganda",
    phone: "+256 414 233 219 Call Center",
    website: "http://www.ursb.go.ug",
    email: "ursb@ursb.go.ug",
    coords: [32.5825, 0.3136],
    membershipType: "Full",
    logo: "Uganda.png"
  },
  {
    name: "Abu Dhabi Global Market Registration Authority",
    country: "United Arab Emirates",
    address: "Level 3, ADGM Building, ADGM Square, Al Maryah Island, PO Box 111999, Abu Dhabi, UAE",
    phone: "+9712 3338709",
    website: "http://www.adgm.com",
    coords: [54.372, 24.489],
    membershipType: "Full",
    logo: "United-Arab-Emirates-Abu-Dhabi-Global-Market-Registration-Authority.png"
  },
  {
    name: "Abu Dhabi Department of Economic Development",
    country: "United Arab Emirates",
    address: "Al Salam Street, United Arab Emirates",
    website: "http://www.ded.abudhabi.ae",
    email: "COAD@adeconomy.ae",
    coords: [54.396, 24.45],
    membershipType: "Full",
    logo: "United-Arab-Emirates-Abu-Dhabi-Department-of-Economic-Development.png"
  },
  {
    name: "Companies House",
    country: "United Kingdom",
    address: "Crown Way, Cardiff, CF14 3UZ, Wales, UK",
    phone: "+44 303 1234 500",
    website: "http://www.companieshouse.gov.uk/",
    email: "enquiries@companies-house.gov.uk",
    coords: [-3.1771, 51.4862],
    membershipType: "Full",
    logo: "United-Kingdom.png"
  },
  {
    name: "Department of Licensing & Consumer Protection",
    country: "United States of America, (Washington)",
    address: "1100 4th Street, S.W., Washington, DC 20024, USA",
    phone: "1-202-442-4432",
    website: "https://dlcp.dc.gov/",
    email: "rebecca.janovich@dc.gov",
    coords: [-77.0211, 38.8816],
    membershipType: "Full",
    logo: "USA-Washington.png"
  },
  {
    name: "Vanuatu Financial Services Commission",
    country: "Vanuatu",
    address: "Companies House, Bougainville Street, PMB 9023, Port Vila, Republic of Vanuatu",
    phone: "+678 22247",
    website: "http://www.vfsc.vu",
    email: "bkarae@vfsc.vu",
    coords: [168.3168, -17.7389],
    membershipType: "Full",
    logo: "Vanuatu.png"
  },
  {
    name: "Agency for Business Registration – Ministry of Planning and Investment",
    country: "Vietnam",
    address: "6B Hoang Dieu, Ba Dinh District, Hanoi, Vietnam",
    phone: "+84 08044503",
    website: "https://dangkykinhdoanh.gov.vn/Default.aspx?tabid=101&language=en-GB",
    email: "hotro@brr.vn",
    coords: [105.8328, 21.0385],
    membershipType: "Full",
    logo: "Vietnam.png"
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
  }
];


// Attach member URLs to matching businesses by email
businesses.forEach(b => {
  if (memberProfiles[b.email]) {
    b.memberUrl = memberProfiles[b.email];
  }
});
