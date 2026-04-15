// ─────────────────────────────────────────────
// LOCATION DATA
// Each entry must have: name, category, address, lat, lng
// category must exactly match a key in CONFIG.categories
// ─────────────────────────────────────────────
const LOCATIONS = [

  // ── Pickleball Facilities ─────────────────────
  {
    name:     "Altea Edmonton",
    category: "Pickleball Facilities",
    address:  "17303 100 Ave NW, Edmonton, AB",
    lat:      53.5383347,
    lng:      -113.6204784
  },
  {
    name:     "B-Active Badminton Club",
    category: "Pickleball Facilities",
    address:  "14830 112 Ave NW, Edmonton, AB",
    lat:      53.5612257,
    lng:      -113.5761931
  },
  {
    name:     "Don Wheaton Family YMCA",
    category: "Pickleball Facilities",
    address:  "10211 102 Ave NW, Edmonton, AB",
    lat:      53.5428873,
    lng:      -113.4969979
  },
  {
    name:     "Edmonton Federation of Community Leagues",
    category: "Pickleball Facilities",
    address:  "12122 68 St NW, Edmonton, AB",
    lat:      53.5760073,
    lng:      -113.4485559
  },
  {
    name:     "Edmonton Marigold 55 Plus Recreation",
    category: "Pickleball Facilities",
    address:  "11113 113 St, Edmonton, AB",
    lat:      53.559482,
    lng:      -113.5157916
  },
  {
    name:     "Edmonton Pickleball Center",
    category: "Pickleball Facilities",
    address:  "11420 170 St NW, Edmonton, AB",
    lat:      53.5638843,
    lng:      -113.6174018
  },
  {
    name:     "Edmonton Pickleball Club",
    category: "Pickleball Facilities",
    address:  "4030 117 St NW, Edmonton, AB",
    lat:      53.4775466,
    lng:      -113.5357346
  },
  {
    name:     "Edmonton Sport & Social Club",
    category: "Pickleball Facilities",
    address:  "4220 98 St NW Unit 301, Edmonton, AB",
    lat:      53.4796775,
    lng:      -113.4825166
  },
  {
    name:     "Edmonton Sports Centre",
    category: "Pickleball Facilities",
    address:  "9892 47 Ave NW, Edmonton, AB",
    lat:      53.4861055,
    lng:      -113.4837372
  },
  {
    name:     "EVP Center",
    category: "Pickleball Facilities",
    address:  "9455 45th Ave NW, Edmonton, AB",
    lat:      53.4827334,
    lng:      -113.4744099
  },
  {
    name:     "Legacy Athletics",
    category: "Pickleball Facilities",
    address:  "9748 12 Ave SW, Edmonton, AB",
    lat:      53.4217829,
    lng:      -113.4834692
  },
  {
    name:     "Modu Club Badminton",
    category: "Pickleball Facilities",
    address:  "3615 11th St #200, Edmonton, AB",
    lat:      53.3823664,
    lng:      -113.5045961
  },
  {
    name:     "Padel Zone",
    category: "Pickleball Facilities",
    address:  "3260 16 Street Unit 200, Edmonton, AB",
    lat:      53.3749627,
    lng:      -113.4925535
  },
  {
    name:     "Parkland Pickleheads Pickleball Club",
    category: "Pickleball Facilities",
    address:  "400 South Ave, Spruce Grove, AB",
    lat:      53.53852,
    lng:      -113.89679
  },
  {
    name:     "Peak Athletic Centre",
    category: "Pickleball Facilities",
    address:  "146 Provincial Ave #75, Sherwood Park, AB",
    lat:      53.5679027,
    lng:      -113.3114902
  },
  {
    name:     "Pickleball Hub (West Location)",
    category: "Pickleball Facilities",
    address:  "13461 St Albert Trail NW, Edmonton, AB",
    lat:      53.5967356,
    lng:      -113.571509
  },
  {
    name:     "Play It Again Sports",
    category: "Pickleball Facilities",
    address:  "13883 156 St NW, Edmonton, AB",
    lat:      53.6011997,
    lng:      -113.5890939
  },
  {
    name:     "Raise Athletics",
    category: "Pickleball Facilities",
    address:  "9 Richardson Dr, St. Albert, AB",
    lat:      53.6008502,
    lng:      -113.6492937
  },
  {
    name:     "Royal Glenora Club",
    category: "Pickleball Facilities",
    address:  "11160 River Valley Rd NW, Edmonton, AB",
    lat:      53.5334129,
    lng:      -113.5139693
  },
  {
    name:     "The Granite Curling Club",
    category: "Pickleball Facilities",
    address:  "8620 107 St NW, Edmonton, AB",
    lat:      53.5222071,
    lng:      -113.506946
  },
  {
    name:     "The Paddle Room / Pickleball Hub",
    category: "Pickleball Facilities",
    address:  "25 Chisholm Ave Unit 115, St. Albert, AB",
    lat:      53.6378296,
    lng:      -113.5698099
  },
  {
    name:     "The Pickleball Hub",
    category: "Pickleball Facilities",
    address:  "6303 Roper Rd NW, Edmonton, AB",
    lat:      53.494272,
    lng:      -113.429222
  },
  {
    name:     "University of Alberta Van Vliet Squash Club",
    category: "Pickleball Facilities",
    address:  "Van Vliet Centre, 8834 114 St NW, Edmonton, AB",
    lat:      53.5240978,
    lng:      -113.5261339
  },
  {
    name:     "Westmount Fitness Club",
    category: "Pickleball Facilities",
    address:  "12840 109 Ave, Edmonton, AB",
    lat:      53.5541099,
    lng:      -113.5442952
  },
  {
    name:     "YEG Pickleball",
    category: "Pickleball Facilities",
    address:  "14025 156 St NW, Edmonton, AB",
    lat:      53.6020899,
    lng:      -113.58756
  },

  // ── Golf Simulators ───────────────────────────
  {
    name:     "1 Putt Virtual Golf",
    category: "Golf Simulator",
    address:  "6816 178 Ave NW, Edmonton, AB",
    lat:      53.6418473,
    lng:      -113.4436992
  },
  {
    name:     "Albatross Virtual Golf",
    category: "Golf Simulator",
    address:  "10208 104 Street NW, Edmonton, AB",
    lat:      53.5432997,
    lng:      -113.4994723
  },
  {
    name:     "Aurora Golf + Bar Beaumont",
    category: "Golf Simulator",
    address:  "5015 52 Ave, Beaumont, AB",
    lat:      53.3539462,
    lng:      -113.4166731
  },
  {
    name:     "CCT Golf Centre",
    category: "Golf Simulator",
    address:  "11925 Kingsway NW, Edmonton, AB",
    lat:      53.5686008,
    lng:      -113.5279869
  },
  {
    name:     "CCT World of Golf",
    category: "Golf Simulator",
    address:  "11620 120 St NW, Edmonton, AB",
    lat:      53.5674267,
    lng:      -113.5301693
  },
  {
    name:     "Center of Gravity Golf",
    category: "Golf Simulator",
    address:  "11835 149 St, Edmonton, AB",
    lat:      53.5711308,
    lng:      -113.5776135
  },
  {
    name:     "Devon Virtual Golf",
    category: "Golf Simulator",
    address:  "1130 River Valley Rd, Devon, AB",
    lat:      53.3669564,
    lng:      -113.7097837
  },
  {
    name:     "Evolution Golf (South)",
    category: "Golf Simulator",
    address:  "3038 106 St, Edmonton, AB",
    lat:      53.4624113,
    lng:      -113.5037982
  },
  {
    name:     "Evolution Golf (North)",
    category: "Golf Simulator",
    address:  "13807 156 St NW, Edmonton, AB",
    lat:      53.6006803,
    lng:      -113.5882177
  },
  {
    name:     "Evolution Golf (Sherwood Park)",
    category: "Golf Simulator",
    address:  "6000 Buckingham Dr #370, Sherwood Park, AB",
    lat:      53.5520406,
    lng:      -113.3134603
  },
  {
    name:     "Fitted Golf Co.",
    category: "Golf Simulator",
    address:  "13603 119 Ave NW, Edmonton, AB",
    lat:      53.5711395,
    lng:      -113.5562252
  },
  {
    name:     "Gimme Virtual Golf",
    category: "Golf Simulator",
    address:  "10846 170 St NW, Edmonton, AB",
    lat:      53.5549237,
    lng:      -113.6171102
  },
  {
    name:     "Gimmes Golf",
    category: "Golf Simulator",
    address:  "10471 99 Ave Unit #623, Fort Saskatchewan, AB",
    lat:      53.7118031,
    lng:      -113.2050086
  },
  {
    name:     "Golf Biz Canada Virtual Golf",
    category: "Golf Simulator",
    address:  "101 N Park Dr, Stony Plain, AB",
    lat:      53.5444886,
    lng:      -113.9782607
  },
  {
    name:     "Golf Traders Edmonton",
    category: "Golf Simulator",
    address:  "3865 99 St NW, Edmonton, AB",
    lat:      53.4736679,
    lng:      -113.4852987
  },
  {
    name:     "Golf Traders Indoor Golf Center",
    category: "Golf Simulator",
    address:  "3865 99 St NW, Edmonton, AB",
    lat:      53.4737586,
    lng:      -113.485382
  },
  {
    name:     "GOLF360",
    category: "Golf Simulator",
    address:  "6031 Andrews Way SW, Edmonton, AB",
    lat:      53.4304197,
    lng:      -113.5905224
  },
  {
    name:     "GOLFTEC Edmonton West Point",
    category: "Golf Simulator",
    address:  "17556 100 Ave NW, Edmonton, AB",
    lat:      53.5391311,
    lng:      -113.62498
  },
  {
    name:     "GOLFTEC Sherwood Park",
    category: "Golf Simulator",
    address:  "220 Lakeland Dr Suite 560, Sherwood Park, AB",
    lat:      53.5569912,
    lng:      -113.3177898
  },
  {
    name:     "Golfzon South Indoor Virtual Golf Lounge",
    category: "Golf Simulator",
    address:  "5431 Gateway Blvd NW, Edmonton, AB",
    lat:      53.4923768,
    lng:      -113.4914036
  },
  {
    name:     "Golfzon West",
    category: "Golf Simulator",
    address:  "15354 111 Ave NW, Edmonton, AB",
    lat:      53.5593315,
    lng:      -113.586522
  },
  {
    name:     "Longshotz Golf",
    category: "Golf Simulator",
    address:  "15117 Stony Plain Rd, Edmonton, AB",
    lat:      53.541172,
    lng:      -113.582531
  },
  {
    name:     "LUXE Virtual Golf",
    category: "Golf Simulator",
    address:  "4612 99 St NW, Edmonton, AB",
    lat:      53.4845502,
    lng:      -113.4869215
  },
  {
    name:     "On Par Golf and Lounge",
    category: "Golf Simulator",
    address:  "485 South Ave Unit 144, Spruce Grove, AB",
    lat:      53.5395058,
    lng:      -113.8873125
  },
  {
    name:     "Paradise Indoor Golf",
    category: "Golf Simulator",
    address:  "6109 45 St #1, Leduc, AB",
    lat:      53.2768007,
    lng:      -113.5406708
  },
  {
    name:     "Perfect Golf Range / Karaoke",
    category: "Golf Simulator",
    address:  "8280 175 St NW, Edmonton, AB",
    lat:      53.515634,
    lng:      -113.6244966
  },
  {
    name:     "PGR Golf Range",
    category: "Golf Simulator",
    address:  "8248 175 St NW, Edmonton, AB",
    lat:      53.5156559,
    lng:      -113.6248042
  },
  {
    name:     "Tap Indoor Golf",
    category: "Golf Simulator",
    address:  "4930 94b Ave NW, Edmonton, AB",
    lat:      53.5342843,
    lng:      -113.4172237
  },
  {
    name:     "Ted Dancin's Indoor Golf",
    category: "Golf Simulator",
    address:  "20 Sir Winston Churchill Ave Unit #3, St. Albert, AB",
    lat:      53.6285172,
    lng:      -113.6306237
  },
  {
    name:     "Tee Time Golf",
    category: "Golf Simulator",
    address:  "3920 91 St NW, Edmonton, AB",
    lat:      53.4750704,
    lng:      -113.4679696
  },
  {
    name:     "The Golf Den Inc.",
    category: "Golf Simulator",
    address:  "975 Ordze Rd, Sherwood Park, AB",
    lat:      53.5135545,
    lng:      -113.3295422
  },
  {
    name:     "The Golf Factory",
    category: "Golf Simulator",
    address:  "10457 184 St NW, Edmonton, AB",
    lat:      53.5473066,
    lng:      -113.6376082
  },
  {
    name:     "The Golf Stadium / Dabang Coffee",
    category: "Golf Simulator",
    address:  "100 Broadview Dr #55, Sherwood Park, AB",
    lat:      53.5434268,
    lng:      -113.3150726
  },
  {
    name:     "The Rec Room West Edmonton Mall",
    category: "Golf Simulator",
    address:  "8882 170 St NW #2065, Edmonton, AB",
    lat:      53.5217349,
    lng:      -113.6199688
  },
  {
    name:     "Top Shots Billiards and Ping Pong",
    category: "Golf Simulator",
    address:  "2621 66 St NW, Edmonton, AB",
    lat:      53.4573426,
    lng:      -113.4321879
  },
  {
    name:     "Virtual Tee Up Indoor Golf",
    category: "Golf Simulator",
    address:  "4146 99 St NW, Edmonton, AB",
    lat:      53.4781945,
    lng:      -113.4869699
  }
];
