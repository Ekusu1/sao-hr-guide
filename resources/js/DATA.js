var OPTIONS = {
	sort:                  {
		stages:      {
			"":                             0,
			"Teleport Gate Plaza":          1,
			"Market Street":                2,
			"Lakeside Park":                3,
			"Scenic Overlook":              4,
			"Inn Lounge":                   5,
			"Phoeniath Knoll":              6,
			"Centallia Rise":               7,
			"Lake Steschal":                8,
			"Tremseine Highlands":          9,
			"Pazirius Wildwood":            10,
			"Sophinastrum Gorge":           11,
			"Mimariana Pass":               12,
			"Fuldum Trail":                 13,
			"Guban Hill":                   14,
			"Lakai Sheske Valley":          15,
			"Horvath Cavern":               16,
			"Castle Arktrium: Gate":        17,
			"Castle Arktrium: 1F":          18,
			"Castle Arktrium: 2F":          19,
			Antechamber:                    20,
			"Grillim Forest":               21,
			"Daaseck Wilds":                22,
			"Stragerzeet Spring":           23,
			"Teim Valais Estuary":          24,
			"Vendallim Mistforest":         25,
			"Valkyr Weald":                 26,
			"Felldart Passage":             27,
			"Mee Forest":                   28,
			"Lokitalluh Ascent":            29,
			"The Ruins of Lufont":          30,
			Kark:                           31,
			"Azekrim Corruption":           32,
			"Rainline Grotto: 1F":          33,
			"Rainline Grotto: 2F":          34,
			"Rainline Grotto: 3F":          35,
			"Lynex Waterway":               36,
			"One Fall Cataract":            37,
			"Marceiville Water Caves":      38,
			"Turinble Road":                39,
			"Paffati Hall":                 40,
			"Ellaider Geothermal Lake":     41,
			"Tribei Feireese Lake Way":     42,
			"Cranvede Path":                43,
			"Shangil Reservoir":            44,
			"Cedol Lake":                   45,
			"La Fernaste Park":             46,
			"La Fastille: Main Gate":       47,
			"La Fastille: Rear Gate":       48,
			"La Fastille: W. Garden":       49,
			"La Fastille: E. Garden":       50,
			"La Fastille: N. Garden":       51,
			"La Fastille: S. Garden":       52,
			"La Fastille: Sacred Hall (N)": 53,
			"La Fastille: Sacred Hall (S)": 54,
			"Southern Ultana Desert":       55,
			"Alle Fioro":                   56,
			"Northern Ultana Desert":       57,
			"Uron Dunes":                   58,
			"Ruel Wellspring":              59,
			"Bana'varon Wastes":            60,
			"Garoon Sandstone Tunel":       61,
			Gebuerno:                       62,
			"Remetta Excavation":           63,
			"Trie Modragal Pass":           64,
			"Calt Blanc Way (TL)":          65,
			"Calt Blanc Way (TR)":          66,
			"Calt Blanc Way (BL)":          67,
			"Calt Blanc Way (BR)":          68,
			"AdelzandeTower: Below":        69,
			"AdelzandeTower: Lower":        70,
			"AdelzandeTower: Middle":       71,
			"AdelzandeTower: Upper":        72,
			"AdelzandeTower: Top":          73,
			"Oltrum Bastion: Orsheon":      74,
			"Oltrum Bastion: Cordia":       75,
			"Oltrum Bastion: Maravia":      76,
			"Oltrum Bastion: Medius":       77,
			"Oltrum Bastion: Flail":        78,
			"Illial Temple: Barracks":      79,
			"Illial Temple: Lift":          80,
			"Illial Temple: Sage Hall":     81,
			"Illial Temple: Pure Path":     82,
			"Unfinished Path":              83,
			"Unfinished Floor1":            84,
			"Unfinished Floor2":            85,
			"Unfinished Floor3":            86,
			"Unfinished Depths":            87
		},
		itemType:    {
			"":         0,
			"1H Sword": 1,
			Rapier:     2,
			Scimitar:   3,
			Dagger:     4,
			"1H Club":  5,
			Shield:     6,
			Katana:     7,
			"2H Sword": 8,
			"2H Axe":   9,
			Spear:      10,
			Head:       11,
			Armor:      12,
			Greaves:    13,
			Neck:       14,
			Wrist:      15,
			Ring:       16,
			Waist:      17,
			Charm:      18,
			Medicine:   19,
			Crystal:    20,
			Material:   21,
			Ore:        22,
			Sellable:   23,
			Event:      24,
			"ADD-ON":   25
		},
		itemRarity:  {"": 0, Common: 1, Uncommon: 2, Rare: 3, Exotic: 4, Legendary: 5},
		chestRarity: {"": 0, Brown: 1, Blue: 2, Red: 3, Silver: 4, Gold: 5},
		monsterType: {"": 0, M: 1, MS: 2, NM: 3, HNM: 4, SNM: 5, Boss: 6}
	},
	areas:                 [
		"", "Town of Beginnings", "Great Plains of Rustoria", "Great Forest of Oldrobe", "Jeweled Peaks Lakes",
		"Kurjiez Desert", "Oltrum Bastion", "Aincrad"
	],
	stages:                {
		"Town of Beginnings":       [
			"", "Teleport Gate Plaza", "Market Street", "Lakeside Park", "Scenic Overlook", "Inn Lounge"
		],
		"Great Plains of Rustoria": [
			"", "Phoeniath Knoll", "Centallia Rise", "Lake Steschal", "Tremseine Highlands", "Pazirius Wildwood",
			"Sophinastrum Gorge", "Mimariana Pass", "Fuldum Trail", "Guban Hill", "Lakai Sheske Valley",
			"Horvath Cavern", "Castle Arktrium: Gate", "Castle Arktrium: 1F", "Castle Arktrium: 2F", "Antechamber"
		],
		"Great Forest of Oldrobe":  [
			"", "Grillim Forest", "Daaseck Wilds", "Stragerzeet Spring", "Teim Valais Estuary", "Vendallim Mistforest",
			"Valkyr Weald", "Felldart Passage", "Mee Forest", "Lokitalluh Ascent", "The Ruins of Lufont", "Kark",
			"Azekrim Corruption", "Rainline Grotto: 1F", "Rainline Grotto: 2F", "Rainline Grotto: 3F"
		],
		"Jeweled Peaks Lakes":      [
			"", "Lynex Waterway", "One Fall Cataract", "Marceiville Water Caves", "Turinble Road", "Paffati Hall",
			"Ellaider Geothermal Lake", "Tribei Feireese Lake Way", "Cranvede Path", "Shangil Reservoir", "Cedol Lake",
			"La Fernaste Park", "La Fastille: Main Gate", "La Fastille: Rear Gate", "La Fastille: W. Garden",
			"La Fastille: E. Garden", "La Fastille: N. Garden", "La Fastille: S. Garden",
			"La Fastille: Sacred Hall (N)", "La Fastille: Sacred Hall (S)"
		],
		"Kurjiez Desert":           [
			"", "Southern Ultana Desert", "Alle Fioro", "Northern Ultana Desert", "Uron Dunes", "Ruel Wellspring",
			"Bana'varon Wastes", "Garoon Sandstone Tunel", "Gebuerno", "Remetta Excavation", "Trie Modragal Pass",
			"Calt Blanc Way (TL)", "Calt Blanc Way (TR)", "Calt Blanc Way (BL)", "Calt Blanc Way (BR)",
			"AdelzandeTower: Below", "AdelzandeTower: Lower", "AdelzandeTower: Middle", "AdelzandeTower: Upper",
			"AdelzandeTower: Top"
		],
		"Oltrum Bastion":           [
			"", "Oltrum Bastion: Orsheon", "Oltrum Bastion: Cordia", "Oltrum Bastion: Maravia",
			"Oltrum Bastion: Medius", "Oltrum Bastion: Flail", "Illial Temple: Barracks", "Illial Temple: Lift",
			"Illial Temple: Sage Hall", "Illial Temple: Pure Path", "Centallia Rise"
		],
		Aincrad:                    [
			"", "Unfinished Path", "Unfinished Floor1", "Unfinished Floor2", "Unfinished Floor3", "Unfinished Depths"
		]
	},
	itemTypeGear:          [
		"", "1H Sword", "Rapier", "Scimitar", "Dagger", "1H Club", "Shield", "Katana", "2H Sword", "2H Axe", "Spear",
		"Head", "Armor", "Greaves", "Neck", "Wrist", "Ring", "Waist", "Charm"
	],
	itemTypeOther:         ["", "Medicine", "Crystal", "Material", "Ore", "Sellable", "Event", "ADD-ON"],
	itemRarity:            ["", "Common", "Uncommon", "Rare", "Exotic", "Legendary"],
	chestRarity:           ["", "Brown", "Blue", "Red", "Silver", "Gold"],
	monsterType:           ["", "M", "MS", "NM", "HNM", "SNM", "Boss"],
	monsterRace:           [
		"", "Boar", "Beast", "Buffalo", "Crab", "Bug", "Scorpion", "Wasp", "Insect", "Treant", "Plant", "Tortoise",
		"Lizard", "Dragon", "Slime", "Squide", "Fungus", "Bat", "Demon", "Knight", "Gremlin", "Succubus", "Kobold",
		"Taurus", "Reaper", "Skeleton", "Golem", "Sentry", "Worm", "Scourge", "Eye", "Other"
	],
	monsterRaceDropPrefix: {
		"":       "",
		Boar:     "Bestial",
		Beast:    "Bestial",
		Buffalo:  "Bestial",
		Crab:     "Crustacean",
		Bug:      "Crustacean",
		Scorpion: "Crustacean",
		Wasp:     "Insectoid",
		Insect:   "Insectoid",
		Treant:   "Plant",
		Plant:    "Plant",
		Tortoise: "Saurian",
		Lizard:   "Saurian",
		Dragon:   "Saurian",
		Slime:    "Amorphous",
		Squide:   "Amorphous",
		Fungus:   "Amorphous",
		Bat:      "Demonic",
		Demon:    "Demonic",
		Knight:   "Demonic",
		Gremlin:  "Demonic",
		Succubus: "Demonic",
		Kobold:   "Demihuman",
		Taurus:   "Demihuman",
		Reaper:   "Spectral",
		Skeleton: "Spectral",
		Golem:    "Inanimate",
		Sentry:   "Inanimate",
		Worm:     "Mal",
		Scourge:  "Mal",
		Eye:      "Mal",
		Other:    ""
	},
	monsterRaceDrops:      {
		"":       [],
		Boar:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"],
		Beast:    ["Bestial Mane", "Bestial Pelt"],
		Buffalo:  ["Bestial Bone Fragment", "Bestial Hoof", "Bestial Horn"],
		Crab:     ["Crustacean Pincer", "Crustacean Soft Shell"],
		Bug:      ["Crustacean Gills", "Crustacean Jaw"],
		Scorpion: ["Crustacean Claw", "Crustacean Leg"],
		Wasp:     ["Insectoid Exoskeleton", "Insectoid Stinger", "Insectoid Gold Wing"],
		Insect:   ["Insectoid Feeler", "Insectoid Simple Eye", "Insectoid Gold Scale", "Insectoid Gold Wing"],
		Treant:   ["Plant Bark", "Plant Bough", "Plant Petal"],
		Plant:    ["Plant Chloroplast", "Plant Pod"],
		Tortoise: ["Saurian Bone Fragment", "Saurian Claw"],
		Lizard:   ["Saurian Claw", "Saurian Fang", "Saurian Jaw", "Bestial Pure Blood Crys."],
		Dragon:   [
			"Saurian Dragoneye", "Saurian Dragonbone", "Saurian Dragonclaw", "Saurian Dragonjaw", "Saurian Dragonscale"
		],
		Slime:    ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"],
		Squide:   ["Amorphous Cell", "Amorphous Nucleus", "Amorphous Tentacle"],
		Fungus:   ["Amorphous Barb", "Amorphous Plastid", "Amorphous Primal Nucleus"],
		Bat:      ["Demonic Claw", "Demonic Horn", "Demonic Pelt", "Demonic Remains"],
		Demon:    ["Demonic Pelt", "Demonic Horn", "Demonic Claw", "Demonic Retrix"],
		Knight:   ["Demonic Claw", "Demonic Remains"],
		Gremlin:  ["Demonic Remains", "Demonic Retrix", "Demonic Wing"],
		Succubus: ["Demonic Horn", "Demonic Retrix"],
		Kobold:   ["Demihuman Armor Scrap", "Demihuman Bone Fragment", "Demihuman Rare Claw", "Demihuman Weapon Scrap"],
		Taurus:   ["Demihuman Claw", "Demihuman Fang", "Demihuman Rare Fang"],
		Reaper:   ["Spectral Essence", "Spectral Hell Essence", "Spectral Wrappings"],
		Skeleton: ["Spectral Armor Fragment", "Spectral Femur Fragment", "Spectral Defiled Essence"],
		Golem:    ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"],
		Sentry:   ["Inanimate Chest Chunk", "Inanimate Head Chunk", "Inanimate Powerstone"],
		Worm:     ["Malicious Antenna"],
		Scourge:  ["Malicious Fluid", "Malicious Skin"],
		Eye:      ["Malicious Antenna", "Malicious Evolved Core", "Malicious Eye"],
		Other:    []
	},
	itemMaterial:          [
		"", "Adamantite Ore", "Aetherial Ore", "Aincrite Ore", "Amorphous", "Amorphous Algae", "Amorphous Barb",
		"Amorphous Cell", "Amorphous Membrane", "Amorphous Nucleus", "Amorphous Plastid", "Amorphous Primal Nucleus",
		"Amorphous Tentacle", "Bestial", "Bestial Bone Fragment", "Bestial Fang", "Bestial Hoof", "Bestial Horn",
		"Bestial Mane", "Bestial Pelt", "Bestial Pure Blood Crys.", "Bestial Tail", "Bestial Tusk",
		"Blackguard's Amethyst", "Bluesteel Ore", "Crustacean", "Crustacean Claw", "Crustacean Gills", "Crustacean Jaw",
		"Crustacean Leg", "Crustacean Pincer", "Crustacean Robust Gills", "Crustacean Robust Shell",
		"Crustacean Soft Shell", "Crystal of Light", "Darantite Ore", "Dark Crystal", "Demihuman",
		"Demihuman Armor Scrap", "Demihuman Bone Fragment", "Demihuman Claw", "Demihuman Fang", "Demihuman Rare Claw",
		"Demihuman Rare Fang", "Demihuman Weapon Scrap", "Demonic", "Demonic Claw", "Demonic Horn", "Demonic Pelt",
		"Demonic Remains", "Demonic Retrix", "Demonic Wing", "Demonic Wings", "Inanimate", "Inanimate Arm Chunk",
		"Inanimate Chest Chunk", "Inanimate Core", "Inanimate Head Chunk", "Inanimate Leg Chunk",
		"Inanimate Powerstone", "Insectoid", "Insectoid Exoskeleton", "Insectoid Feeler", "Insectoid Gold Scale",
		"Insectoid Gold Wing", "Insectoid Simple Eye", "Insectoid Soft Shell", "Insectoid Stinger", "Iron Ore",
		"Luxurian Ore", "Mal", "Mal. Pris. Blood Crystal", "Malicious Antenna", "Malicious Evolved Core",
		"Malicious Eye", "Malicious Fluid", "Malicious Skin", "Plant", "Plant Bark", "Plant Bough", "Plant Chloroplast",
		"Plant Petal", "Plant Pod", "Platinum Ore", "Saurian", "Saurian Bone Fragment", "Saurian Claw",
		"Saurian Dragoneye", "Saurian Dragonbone", "Saurian Dragonclaw", "Saurian Dragonjaw", "Saurian Dragonscale",
		"Saurian Fang", "Saurian Jaw", "Saurian Pair of Eyes", "Silver Ore", "Spectral", "Spectral Armor Fragment",
		"Spectral Defiled Essence", "Spectral Essence", "Spectral Femur Fragment", "Spectral Hell Essence",
		"Spectral Weapon Fragment", "Spectral Wrappings", "The Murmurstone"
	],
	dropRarity:            {
		Common:   [
			"", "Amorphous", "Amorphous Algae", "Amorphous Barb", "Amorphous Cell", "Amorphous Membrane",
			"Amorphous Nucleus", "Amorphous Plastid", "Amorphous Tentacle", "Bestial", "Bestial Bone Fragment",
			"Bestial Fang", "Bestial Horn", "Bestial Mane", "Bestial Pelt", "Bestial Tail", "Bestial Tusk",
			"Crustacean", "Crustacean Claw", "Crustacean Gills", "Crustacean Jaw", "Crustacean Leg",
			"Crustacean Pincer", "Crustacean Soft Shell", "Demihuman", "Demihuman Armor Scrap",
			"Demihuman Bone Fragment", "Demihuman Claw", "Demihuman Fang", "Demihuman Weapon Scrap", "Demonic",
			"Demonic Claw", "Demonic Horn", "Demonic Pelt", "Demonic Retrix", "Demonic Wing", "Demonic Wings",
			"Inanimate", "Inanimate Arm Chunk", "Inanimate Chest Chunk", "Inanimate Head Chunk", "Inanimate Leg Chunk",
			"Insectoid", "Insectoid Exoskeleton", "Insectoid Feeler", "Insectoid Soft Shell", "Insectoid Stinger",
			"Mal", "Malicious Antenna", "Malicious Eye", "Malicious Fluid", "Malicious Skin", "Plant", "Plant Bark",
			"Plant Bough", "Plant Chloroplast", "Plant Pod", "Saurian", "Saurian Bone Fragment", "Saurian Claw",
			"Saurian Dragoneye", "Saurian Dragonbone",
			"Saurian Fang", "Saurian Jaw", "Saurian Pair of Eyes", "Spectral", "Spectral Armor Fragment",
			"Spectral Essence", "Spectral Femur Fragment", "Spectral Weapon Fragment", "Spectral Wrappings"
		],
		Uncommon: [
			"Demonic Remains", "Plant Petal", "Saurian Dragonclaw", "Saurian Dragonjaw", "Iron Ore", "Aincrite Ore",
			"Bluesteel Ore", "Darantite Ore", "Silver Ore", "The Murmurstone", "Platinum Ore", "Adamantite Ore",
			"Blackguard's Amethyst", "Aetherial Ore", "Insectoid Simple Eye", "Bestial Hoof",
			"Luxurian Ore", "Crystal of Light", "Dark Crystal"
		],
		Rare:     [
			"Amorphous Primal Nucleus", "Bestial Pure Blood Crys.", "Crustacean Robust Gills",
			"Crustacean Robust Shell", "Demihuman Rare Claw", "Demihuman Rare Fang", "Inanimate Core",
			"Inanimate Powerstone", "Insectoid Gold Scale", "Insectoid Gold Wing", "Mal. Pris. Blood Crystal",
			"Malicious Evolved Core", "Saurian Dragonscale", "Spectral Hell Essence", "Spectral Defiled Essence",
		],
		Special:  ["The Murmurstone"]
	},
	baseEffect:            [
		"ATK", "DEF", "HP", "SP", "STR", "VIT", "AGI", "DEX", "Slashing", "Thrusting", "Crushing", "Knockdown", "Stun",
		"Numb", "Poison", "Bleed", "Physical", "Soul", "Debuff"
	],
	gearEffect:            [
		"", "Aggro Based Attack Up %", "Attack Speed Up %", "CRT ATK %", "Damage Reduction %", "Dash ATK %",
		"Jump ATK %", "Max HP %", "Recast Time %"
	],
	itemUse:               [
		"", "Potion", "Hi-Potion", "Great Potion", "Grand Potion", "SP Potion", "SP Hi-Potion", "SP Great Potion",
		"SP Grand Potion", "STR Potion", "VIT Potion", "DEX Potion", "AGI Potion", "SPD Potion", "HIT Potion",
		"EXP Potion", "EXP Hi-Potion", "Boon Potion", "Boon Hi-Potion", "Hide Potion", "Slashing Res. Potion",
		"Thrusting Res. Potion", "Crushing Res. Potion", "Knockdown Res. Potion", "Numb Res. Potion",
		"Poison Res. Potion", "Bleed Res. Potion", "Physical Res. Potion", "Soul Res. Potion", "Debuff Res. Potion",
		"Healing Cystal", "Restoration Cystal", "Full Restoration Cystal", "Technique Cystal", "Power Cystal",
		"Ultimate Cystal", "Antidote Cystal", "Stanching Cystal", "Stimulus Cystal", "Voice Cystal", "Sealing Cystal",
		"Speed Cystal", "Purification Cystal", "Awakening Cystal", "Revive Cystal"
	],
	itemOre:               [
		"", "Iron Ore", "Aincrite Ore", "Bluesteel Ore", "Darantite Ore", "Silver Ore", "The Murmurstone",
		"Platinum Ore", "Adamantite Ore", "Blackguard's Amethyst", "Aetherial Ore", "Luxurian Ore", "Crystal of Light",
		"Dark Crystal"
	]
};
var DATA    = {
	gear:    [
		{
			name:            "Ain Restorer",
			type:            "1H Sword",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 75, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 1800, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 2, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Anneal Blade+1",
			type:            "1H Sword",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "42", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}, {name: "Jump ATK %", value: "15", baseStat: false},
				{name: "Dash ATK %", value: "15", baseStat: false}
			]
		}, {
			name:            "Blade of Pain",
			type:            "1H Sword",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "108", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "11", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "3", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Emperor's Sword+1",
			type:            "1H Sword",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "102", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "10", baseStat: true}, {name: "VIT", value: "15", baseStat: true},
				{name: "DEX", value: "10", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Stone Carver",
			type:            "1H Sword",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 91, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 5, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 3, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Vulcan Blade",
			type:            "1H Sword",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 59, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 1, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 8, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Mercenary Sword",
			type:            "1H Sword",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 97, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 16, baseStat: true}, {name: "VIT", value: 14, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Final Espada",
			type:            "1H Sword",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [{name: "Oblivion Edge", requiredMaterials: [{material: "Aetherial Ore", amount: 1}]}],
			effects:         [
				{name: "ATK", value: "152", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: "31", baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "40", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Perfected Prototype",
			type:            "1H Sword",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "127", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: "52", baseStat: true},
				{name: "STR", value: "17", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}, {name: "Max HP %", value: "10", baseStat: false}
			]
		}, {
			name:            "Fairy Consluder",
			type:            "1H Sword",
			rarity:          "Rare",
			stars:           0,
			transformedFrom: "Oblivion Edge",
			transformations: [
				{name: "Fallen Ogre", requiredMaterials: [{material: "Insectoid Gold Wing", amount: "50"}]},
				{name: "Ether Predator", requiredMaterials: [{material: "Saurian Dragonscale", amount: "10"}]}
			],
			effects:         [
				{name: "ATK", value: "164", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "5700", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "36", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}, {name: "Recast Time %", value: "-1", baseStat: false}
			]
		}, {
			name:            "Fallen Ogre",
			type:            "1H Sword",
			rarity:          "Rare",
			stars:           0,
			transformedFrom: "Fairy Consluder",
			transformations: [],
			effects:         [
				{name: "ATK", value: "166", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Ether Predator",
			type:            "1H Sword",
			rarity:          "Rare",
			stars:           "1",
			transformedFrom: "Fairy Consluder",
			transformations: [{name: "Asmodeus", requiredMaterials: [{material: "Luxurian Ore", amount: "3"}]}],
			effects:         [
				{name: "ATK", value: "171", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "6300", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "39", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}, {name: "Recast Time %", value: "-1", baseStat: false}
			]
		}, {
			name:            "Oblivion Edge",
			type:            "1H Sword",
			rarity:          "Rare",
			stars:           "1",
			transformedFrom: "Final Espada",
			transformations: [
				{
					name:              "Fairy Consluder",
					requiredMaterials: [{material: "The Murmurstone", amount: "50"}]
				}
			],
			effects:         [
				{name: "ATK", value: "162", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "35", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "35", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Spine Killer",
			type:            "1H Sword",
			rarity:          "Rare",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "150", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "31", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "36", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Asmodeus",
			type:            "1H Sword",
			rarity:          "Legendary",
			stars:           "1",
			transformedFrom: "Ether Predator",
			transformations: [{name: "Asmodeus", requiredMaterials: [{material: "Luxurian Ore", amount: "10"}]}],
			effects:         [
				{name: "ATK", value: "183", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "8500", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "53", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "53", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}, {name: "Recast Time %", value: "-4", baseStat: false},
				{name: "Increased SS Damage %", value: "20", baseStat: false},
				{name: "Attack Speed Up %", value: "6", baseStat: false}
			]
		}, {
			name:            "Prima Sabre",
			type:            "Rapier",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [
				{
					name:              "Ravaging Piercer",
					requiredMaterials: [{material: "Aetherial Ore", amount: "1"}]
				}
			],
			effects:         [
				{name: "ATK", value: "146", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: "8", baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "12", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Calm Foil",
			type:            "Rapier",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 73, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 1500, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 17, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Cardinal Ray",
			type:            "Rapier",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 95, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 23, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 1, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Celestial Fleuret",
			type:            "Rapier",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 30, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: "2", baseStat: true},
				{name: "STR", value: "6", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Feather Thruster",
			type:            "Rapier",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 112, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 13, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 25, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Flowering Foil",
			type:            "Rapier",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "93", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: "33", baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "10", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Grand Foil",
			type:            "Rapier",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "95", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "10", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "19", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Valiant Rapier",
			type:            "Rapier",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 112, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "27", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "3", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Ravaging Piercer",
			type:            "Rapier",
			rarity:          "Rare",
			stars:           0,
			transformedFrom: "Prima Sabre",
			transformations: [],
			effects:         [
				{name: "ATK", value: "162", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Viper Trail",
			type:            "Rapier",
			rarity:          "Rare",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "158", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "10", baseStat: true}, {name: "AGI", value: "12", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Evil Talwar",
			type:            "Scimitar",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "84", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "1600", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "3", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Controlled Reaver",
			type:            "Scimitar",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 68, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 2700, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Flexed Edge",
			type:            "Scimitar",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 93, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 22, baseStat: true}, {name: "AGI", value: -15, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Bewildering Blade",
			type:            "Scimitar",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "128", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "28", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "26", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Glamorous Shotel",
			type:            "Scimitar",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "86", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "1", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "24", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Moonstruck Saber",
			type:            "Scimitar",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [{name: "Lightning Locus", requiredMaterials: [{material: "Aetherial Ore", amount: "1"}]}],
			effects:         [
				{name: "ATK", value: "119", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: "48", baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "9", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Weiss Scimitar",
			type:            "Scimitar",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "79", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "5", baseStat: true}, {name: "VIT", value: "24", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Ravenous Saber",
			type:            "Scimitar",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "102", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "40", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "13", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}, {name: "CRT ATK %", value: "5", baseStat: false}
			]
		}, {
			name:            "Raptor Saber",
			type:            "Scimitar",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 73, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 18, baseStat: true}, {name: "VIT", value: 22, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Lightning Locus",
			type:            "Scimitar",
			rarity:          "Rare",
			stars:           0,
			transformedFrom: "Moonstruck Saber",
			transformations: [],
			effects:         [
				{name: "ATK", value: "146", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Artemis",
			type:            "Scimitar",
			rarity:          "Exotic",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "179", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "-7", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "46", baseStat: true}, {name: "AGI", value: "50", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Blood Stealer",
			type:            "Dagger",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "100", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "4", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "6", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Royal Defender",
			type:            "Dagger",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "149", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "25", baseStat: true}, {name: "VIT", value: "4", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Talon Knife",
			type:            "Dagger",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 79, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 4, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 6, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Assassin's Gale",
			type:            "Dagger",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 96, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 5, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 17, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Garuda Edge",
			type:            "Dagger",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "51", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "11", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "12", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Hated Razor",
			type:            "Dagger",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [{name: "Woundcaller", requiredMaterials: [{material: "Aetherial Ore", amount: "1"}]}],
			effects:         [
				{name: "ATK", value: "171", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "3000", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "45", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Hunter's Blade",
			type:            "Dagger",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "149", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "31", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "17", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Unsullied Dagger",
			type:            "Dagger",
			rarity:          "Rare",
			stars:           0,
			transformedFrom: "Woundcaller",
			transformations: [],
			effects:         [
				{name: "ATK", value: "173", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Woundcaller",
			type:            "Dagger",
			rarity:          "Rare",
			stars:           "1",
			transformedFrom: "Hated Razor",
			transformations: [
				{
					name:              "Unsullied Dagger",
					requiredMaterials: [{material: "The Murmurstone", amount: "50"}]
				}
			],
			effects:         [
				{name: "ATK", value: "171", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "35", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "35", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Earth Quaker",
			type:            "1H Club",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "78", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "100", baseStat: true}, {name: "SP", value: "18", baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Fanatic Hammer",
			type:            "1H Club",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "104", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "1400", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "9", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Howling Beater",
			type:            "1H Club",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 58, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 9, baseStat: true}, {name: "AGI", value: 1, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Rabble Calmer",
			type:            "1H Club",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "97", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "14", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "25", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Lunatic Press",
			type:            "1H Club",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [{name: "Endless Crusher", requiredMaterials: [{material: "Aetherial Ore", amount: "1"}]}],
			effects:         [
				{name: "ATK", value: "112", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "39", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "12", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Maximum Impact",
			type:            "1H Club",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 89, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 11, baseStat: true}, {name: "VIT", value: 32, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Rage Diffuser",
			type:            "1H Club",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 55, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 1400, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 11, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Baldr's Mallet",
			type:            "1H Club",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "132", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: "35", baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "42", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Elemental Hammer",
			type:            "1H Club",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "91", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "48", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "31", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Endless Crusher",
			type:            "1H Club",
			rarity:          "Rare",
			stars:           0,
			transformedFrom: "Lunatic Press",
			transformations: [],
			effects:         [
				{name: "ATK", value: "130", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Conducting Shell",
			type:            "Shield",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "93", baseStat: true}, {name: "DEF", value: "17", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "15", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "-32", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}, {name: "Damage Reduction %", value: "2", baseStat: false}
			]
		}, {
			name:            "Innocent Shell",
			type:            "Shield",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 60, baseStat: true}, {name: "DEF", value: 17, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 3, baseStat: true},
				{name: "DEX", value: -10, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Deep Shell",
			type:            "Shield",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 58, baseStat: true}, {name: "DEF", value: 17, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: -6, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Spiked Buckler",
			type:            "Shield",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "91", baseStat: true}, {name: "DEF", value: "26", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "15", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "-19", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}, {name: "Damage Reduction %", value: "16", baseStat: false}
			]
		}, {
			name:            "Aegis Guard",
			type:            "Shield",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "24", baseStat: true}, {name: "DEF", value: "4", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "7", baseStat: true},
				{name: "DEX", value: "-2", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}, {name: "Damage Reduction %", value: "9", baseStat: false}
			]
		}, {
			name:            "Dark Moon Buckler",
			type:            "Shield",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "109", baseStat: true}, {name: "DEF", value: "20", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "-12", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "38", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}, {name: "Damage Reduction %", value: "5", baseStat: false}
			]
		}, {
			name:            "Shell Buckler",
			type:            "Shield",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 88, baseStat: true}, {name: "DEF", value: 25, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "-11", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "25", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}, {name: "Damage Reduction %", value: "8", baseStat: false}
			]
		}, {
			name:            "Chevalier Guard",
			type:            "Shield",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 58, baseStat: true}, {name: "DEF", value: 11, baseStat: true},
				{name: "HP", value: 2500, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: -2, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Garou-Tou",
			type:            "Katana",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "161", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "4", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "8", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Hihigatana",
			type:            "Katana",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "134", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "2", baseStat: true}, {name: "AGI", value: "7", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Matamon the Bone-Eater",
			type:            "Katana",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [{name: "Shinra Zetto", requiredMaterials: [{material: "Aetherial Ore", amount: "1"}]}],
			effects:         [
				{name: "ATK", value: "136", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "11", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "14", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Asayuki Kabuse",
			type:            "Katana",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "134", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: "27", baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "11", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Okisho-Garasu",
			type:            "Katana",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 85, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 18, baseStat: true}, {name: "AGI", value: 1, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Ukide-Gumo",
			type:            "Katana",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 146, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 2900, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 18, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Kogetsu",
			type:            "Katana",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 134, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 49, baseStat: true},
				{name: "STR", value: 4, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Hidoh",
			type:            "Katana",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 134, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "2200", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "29", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Hakuba the Manslayer",
			type:            "Katana",
			rarity:          "Rare",
			stars:           0,
			transformedFrom: "Maikubi",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Shinra Zetto",
			type:            "Katana",
			rarity:          "Rare",
			stars:           0,
			transformedFrom: "Matamon the Bone-Eater",
			transformations: [{name: "Maikubi", requiredMaterials: [{material: "The Murmurstone", amount: "50"}]}],
			effects:         [
				{name: "ATK", value: "195", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "5500", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "35", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Yogiri Suzuka",
			type:            "Katana",
			rarity:          "Rare",
			stars:           0,
			transformedFrom: "Maikubi",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Brute Force",
			type:            "2H Sword",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 112, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 12, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 1, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Jail Slicer",
			type:            "2H Sword",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "167", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "5400", baseStat: true}, {name: "SP", value: "45", baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Matter Dissolver",
			type:            "2H Sword",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [{name: "Grief Saber", requiredMaterials: [{material: "Aetherial Ore", amount: 1}]}],
			effects:         [
				{name: "ATK", value: "190", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "38", baseStat: true}, {name: "AGI", value: "38", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Raptor Blade",
			type:            "2H Sword",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 140, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 1400, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 30, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Grief Saber",
			type:            "2H Sword",
			rarity:          "Rare",
			stars:           0,
			transformedFrom: "Matter Dissolver",
			transformations: [],
			effects:         [
				{name: "ATK", value: "203", baseStat: true}, {name: "DEF", value: "0", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Heavy Slasher",
			type:            "2H Axe",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "123", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "8", baseStat: true}, {name: "VIT", value: "1", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Bardiche",
			type:            "2H Axe",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [{name: "Spectrum Blade", requiredMaterials: [{material: "Aetherial Ore", amount: "1"}]}],
			effects:         [
				{name: "ATK", value: "151", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "3", baseStat: true}, {name: "VIT", value: "", baseStat: true},
				{name: "DEX", value: "25", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Glowing Halberd",
			type:            "2H Axe",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 134, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 100, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 22, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Mutilator",
			type:            "2H Axe",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "129", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "2500", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "7", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Hail Chopper",
			type:            "2H Axe",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 96, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 17, baseStat: true}, {name: "AGI", value: 13, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Spectrum Blade",
			type:            "2H Axe",
			rarity:          "Rare",
			stars:           0,
			transformedFrom: "Bardiche",
			transformations: [],
			effects:         [
				{name: "ATK", value: "219", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Midnight Spear",
			type:            "Spear",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "134", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "-17", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "8", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Altered Pike",
			type:            "Spear",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 145, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 21, baseStat: true}, {name: "AGI", value: 2, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Ignition Lance",
			type:            "Spear",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 151, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: -20, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 25, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Outsider's Lance",
			type:            "Spear",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 173, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 5600, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 24, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Elven Earring",
			type:            "Head",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "17", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Ivory Earring",
			type:            "Head",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 10, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Phenomenon Earring",
			type:            "Head",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "17", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Pluto Power Earring",
			type:            "Head",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "14", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Rebuff Earring",
			type:            "Head",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 11, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Sapphire Earring",
			type:            "Head",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "13", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Shade Earring",
			type:            "Head",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 11, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Stardust Earring",
			type:            "Head",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "14", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Mythologia's Ear Hoop",
			type:            "Head",
			rarity:          "Rare",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "17", baseStat: true},
				{name: "HP", value: "-400", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "2", baseStat: true},
				{name: "DEX", value: "30", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Lionel's Mail",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           0,
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "20", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Adamant Mail",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 49, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Akashic Plate",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 51, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Ancient Armor",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "64", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Armadillo Madness",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 61, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Banded Armor",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "64", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Banishing Coat",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 38, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Blast Armor",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "74", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Calamity Stopper",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "75", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Chivalry Coat",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 39, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Clockwork Armor",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 61, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Darkness Mail",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 48, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Desperado Coat",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 36, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Dual Jacket",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 28, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Enabled Armor",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 34, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Exceed Coat",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 37, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Flame Armor",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 35, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Fractal Mail",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 48, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Galleon Armor",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 57, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Gemini Coat",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 74, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "General's Armor",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 59, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Ghost Aside",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "47", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Grand Ward",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "46", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Juggernaut",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "90", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Last Guardian",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "61", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Lifegiver",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "75", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Lycan's Seal",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "58", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Mirrored Mial",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "63", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Mithril Plate",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 51, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Night Mail",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "74", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Nomad Armor",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 57, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Paradigm",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "77", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Phoenix Mail",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "78", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Precarious Plate",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "90", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Proxy Coat",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 36, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Sylph's Protection",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "77", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "The Chariot",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "48", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Trusted Coverings",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "56", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Wild Thing",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 46, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Zealot's Protector",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "48", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Maelstrom",
			type:            "Armor",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "94", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "-18", baseStat: true}, {name: "VIT", value: "39", baseStat: true},
				{name: "DEX", value: "31", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Dominator's Garb",
			type:            "Armor",
			rarity:          "Rare",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "61", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "23", baseStat: true}, {name: "VIT", value: "-21", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "8", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Ryonox Mail",
			type:            "Armor",
			rarity:          "Rare",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 94, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 20, baseStat: true},
				{name: "DEX", value: -11, baseStat: true}, {name: "AGI", value: 22, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Shapely Jacket",
			type:            "Armor",
			rarity:          "Rare",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "51", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "-10", baseStat: true}, {name: "VIT", value: "26", baseStat: true},
				{name: "DEX", value: "7", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Wanderer's Armor",
			type:            "Armor",
			rarity:          "Rare",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 66, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 16, baseStat: true}, {name: "VIT", value: 16, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Belphegor",
			type:            "Armor",
			rarity:          "Rare",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "98", baseStat: true},
				{name: "HP", value: "-1700", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "29", baseStat: true},
				{name: "DEX", value: "20", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false},
				{name: "Aggro Based Attack Up %", value: "20", baseStat: false}
			]
		}, {
			name:            "Ryonox Coat",
			type:            "Armor",
			rarity:          "Rare",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 60, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 28, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: -21, baseStat: true}, {name: "AGI", value: 34, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Akashic Boots",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 29, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Ancient Leggings",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "37", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Armadillo Sadness",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "35", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Bandersnatcher",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "37", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Blast Leggings",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "42", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Boots of Banishing",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 22, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Boots of Brotherhood",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "43", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Boots of Excess",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 21, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Clockwork Shank",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 35, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Confounding Leggings",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "43", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Darkness Leggings",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 27, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Desperado Boots",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 20, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Dreadnought",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "51", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Endbringers",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "35", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Flame Runner",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 20, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Fractal Leggings",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 27, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Galleon Greaves",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 34, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Gemini Sandals",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 42, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "General Greaves",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 34, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Greaves of Live",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "52", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Hiking Boots",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "27", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Lawless Boots",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 26, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Lifegivers",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "43", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Liquid Reflection",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "36", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Loam Spirit's Greaves",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "44", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Mithril Leggings",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 29, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Nomad's Greaves",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 33, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Paradigm Shifter",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "44", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Phoenix Wrappings",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "44", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Proxy Boots",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 20, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Squirming Saviours",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "32", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Steadfast Leggings",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 28, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Viral Feet",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "32", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Werewolf's Paws",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "33", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Zealot's Soles",
			type:            "Greaves",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "27", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Wulfen Boots",
			type:            "Greaves",
			rarity:          "Rare",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 35, baseStat: true},
				{name: "HP", value: -3300, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 6, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 18, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Bear's Shank",
			type:            "Greaves",
			rarity:          "Rare",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "37", baseStat: true},
				{name: "HP", value: "100", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "20", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Boots of Catharsis",
			type:            "Greaves",
			rarity:          "Rare",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "35", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "-28", baseStat: true},
				{name: "DEX", value: "23", baseStat: true}, {name: "AGI", value: "23", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Pendant of Sealing",
			type:            "Neck",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "2", baseStat: true},
				{name: "HP", value: "500", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "-6", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Aura Drops",
			type:            "Neck",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "2700", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "7", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Dragonfang Pendant",
			type:            "Neck",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "3700", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "11", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Precious Metal Pendant",
			type:            "Neck",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "2700", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "2", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Reward Chain",
			type:            "Neck",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 1900, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 1, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Paradise Chocker",
			type:            "Neck",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "800", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "1", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: "20", baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Pleiades Chocker",
			type:            "Neck",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "1000", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "10", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Southern Cross Chain",
			type:            "Neck",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "3100", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "5", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Vital Chain",
			type:            "Neck",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 300, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 9, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Garnet Choker",
			type:            "Neck",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 2900, baseStat: true}, {name: "SP", value: -17, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Scapegoat Chocker",
			type:            "Neck",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "1600", baseStat: true}, {name: "SP", value: "39", baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Daisy Pendant",
			type:            "Neck",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 1900, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 1, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Lion's Tears",
			type:            "Neck",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "4000", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "16", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Seraph's Band",
			type:            "Wrist",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "3", baseStat: true}, {name: "DEF", value: "2", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "6", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "3", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Snipe Armlet",
			type:            "Wrist",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "3", baseStat: true}, {name: "DEF", value: "2", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "5", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "4", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Jewelry Bangle",
			type:            "Wrist",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 3, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 7, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: -7, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Power Armlet",
			type:            "Wrist",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 2, baseStat: true}, {name: "DEF", value: 4, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 7, baseStat: true}, {name: "VIT", value: 2, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Spell Braeclet",
			type:            "Wrist",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 3, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 7, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Wise Bracelet",
			type:            "Wrist",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 2, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 2, baseStat: true},
				{name: "STR", value: 8, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Heat Haze Bracelet",
			type:            "Wrist",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 1, baseStat: true}, {name: "DEF", value: 1, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 4, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 10, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Hoop of Adonis",
			type:            "Wrist",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "3", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "9", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "11", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Royal Bangle",
			type:            "Wrist",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "2", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "4", baseStat: true}, {name: "VIT", value: "3", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Divine Circlet",
			type:            "Wrist",
			rarity:          "Rare",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "5", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "6", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "3", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Pentacle Ring",
			type:            "Ring",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "1", baseStat: true}, {name: "AGI", value: "6", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Burst Ring",
			type:            "Ring",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 15, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 12, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Electrum Ring",
			type:            "Ring",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 8, baseStat: true}, {name: "AGI", value: 7, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Nocturne Ring",
			type:            "Ring",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 25, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 4, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Ring of El Dorado",
			type:            "Ring",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: "49", baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "5", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Euphoria Ring",
			type:            "Ring",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 4, baseStat: true},
				{name: "DEX", value: 10, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Ring of Hallucination",
			type:            "Ring",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "8", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "13", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Sierra Ring",
			type:            "Ring",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 3, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 3, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Stigma Ring",
			type:            "Ring",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: -1400, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 7, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Epitaph Ring",
			type:            "Ring",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "13", baseStat: true}, {name: "AGI", value: "12", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Sixth Sense",
			type:            "Ring",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "14", baseStat: true},
				{name: "DEX", value: "15", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Corset of Life",
			type:            "Waist",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 1, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 100, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 1, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Fury Belt",
			type:            "Waist",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 10, baseStat: true}, {name: "VIT", value: 9, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Master Belt",
			type:            "Waist",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "1700", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "6", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Phantasm Belt",
			type:            "Waist",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: -29, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 4, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Uranus's Loincloth",
			type:            "Waist",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "1", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: "27", baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "1", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Jinn Waistcoat",
			type:            "Waist",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: "1", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "4", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Master Belt",
			type:            "Waist",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: "3000", baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "6", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Reboot Belt",
			type:            "Waist",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 4, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 9, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Remove Bangle",
			type:            "Waist",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 2, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 27, baseStat: true},
				{name: "STR", value: 5, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Shinobi's Waistband",
			type:            "Waist",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "1", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: "30", baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "10", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Demon's Cord",
			type:            "Waist",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "1", baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "14", baseStat: true},
				{name: "DEX", value: "16", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Freesia Belt",
			type:            "Waist",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 1, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 11, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 11, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Karma Belt",
			type:            "Waist",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: "1", baseStat: true}, {name: "DEF", value: "1", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "15", baseStat: true}, {name: "VIT", value: "12", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Belt of Metatron",
			type:            "Waist",
			rarity:          "Rare",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 18, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 4, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Oath of the Tabernacle",
			type:            "Charm",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "-17", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "6", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: "10", baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: "20", baseStat: false},
				{name: "Poison", value: "15", baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Stratagem",
			type:            "Charm",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "3", baseStat: true}, {name: "AGI", value: "3", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: "15", baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: "5", baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: "15", baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Talisman of Ares",
			type:            "Charm",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "3", baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "3", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: "20", baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: "15", baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: "5", baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Talisman of Eternal Joy",
			type:            "Charm",
			rarity:          "Uncommon",
			stars:           "1",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: "4", baseStat: true}, {name: "AGI", value: "5", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 15, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 10, baseStat: false}, {name: "Bleed", value: 5, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Jinxed Oddity",
			type:            "Charm",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "-10", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "4", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: "10", baseStat: false}, {name: "Numb", value: "15", baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Remembrance",
			type:            "Charm",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 7, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 2, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 10, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 10, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 5, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Tranquiliezer",
			type:            "Charm",
			rarity:          "Uncommon",
			stars:           "2",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 1800, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 4, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 10, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 10, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 10, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Brighteness Ank",
			type:            "Charm",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 26, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 4, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 10, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 10, baseStat: false}, {name: "Bleed", value: 5, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Daydream Ank",
			type:            "Charm",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 6, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: -11, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 5, baseStat: false},
				{name: "Stun", value: 10, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 10, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Memorial Charm",
			type:            "Charm",
			rarity:          "Uncommon",
			stars:           "3",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 1400, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 3, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 10, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 10, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Talisman of Eternal Joy",
			type:            "Charm",
			rarity:          "Uncommon",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 10, baseStat: true}, {name: "AGI", value: 9, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 15, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 10, baseStat: false}, {name: "Bleed", value: 5, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Freye's Charm",
			type:            "Charm",
			rarity:          "Uncommon",
			stars:           "5",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "3", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "4", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: "10", baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:            "Helios's Warding Stone",
			type:            "Charm",
			rarity:          "Rare",
			stars:           "4",
			transformedFrom: "",
			transformations: [],
			effects:         [
				{name: "ATK", value: 0, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: "8", baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: "15", baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: "5", baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: "25", baseStat: false},
				{name: "Poison", value: "25", baseStat: false}, {name: "Bleed", value: "10", baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}
	],
	chests:  [
		{
			location: {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
			rarity:   "Blue",
			where:    "Right",
			item:     "Paradise Chocker"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Sierra Ring"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
			rarity:   "Red",
			where:    "Events",
			item:     "Celestial Fleuret"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Vulcan Blade"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Centallia Rise"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Aegis Guard"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Centallia Rise"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Jinn Waistcoat"
		},
		{location: {area: "Great Plains of Rustoria", stage: "Centallia Rise"}, rarity: "Blue", where: "Top", item: ""},
		{
			location: {area: "Great Plains of Rustoria", stage: "Centallia Rise"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Weiss Scimitar"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Centallia Rise"},
			rarity:   "Red",
			where:    "Events",
			item:     "Aegis Guard"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Centallia Rise"},
			rarity:   "Silver",
			where:    "Event Chain",
			item:     "Shapely Jacket"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Lake Steschal"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Lionel's Mail"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Lake Steschal"},
			rarity:   "Blue",
			where:    "Right",
			item:     "Royal Bangle"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Lake Steschal"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Freye's Charm"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Lake Steschal"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Garuda Edge"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Mee Forest"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Enabled Armor"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Mee Forest"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Flame Runner"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Mee Forest"},
			rarity:   "Blue",
			where:    "Top",
			item:     "Memorial Charm"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Mee Forest"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Burst Ring"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Mee Forest"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Deep Shell"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Lokitalluh Ascent"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Flame Armor"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Lokitalluh Ascent"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Dual Jacket"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Lokitalluh Ascent"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Daisy Pendant"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Lokitalluh Ascent"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Raptor Saber"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Lynex Waterway"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Darkness Mail"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Lynex Waterway"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Ivory Earring"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Lynex Waterway"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Remove Bangle"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Lynex Waterway"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Rage Diffuser"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Nomad Armor"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Nomad's Greaves"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Remembrance"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Stone Carver"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract"},
			rarity:   "Red",
			where:    "Events",
			item:     "Hail Chopper"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Marceiville Water Caves"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Proxy Coat"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Marceiville Water Caves"},
			rarity:   "Blue",
			where:    "Right",
			item:     "Reward Chain"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Marceiville Water Caves"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Corset of Life"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Marceiville Water Caves"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Cardinal Ray"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Proxy Boots"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Fractal Mail"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Nocturne Ring"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road"},
			rarity:   "Red",
			where:    "Events",
			item:     "Okisho-Garasu"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Brute Force"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Paffati Hall"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Adamant Mail"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Paffati Hall"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Desperado Coat"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Paffati Hall"},
			rarity:   "Blue",
			where:    "Right",
			item:     "Vital Chain"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Paffati Hall"},
			rarity:   "Red",
			where:    "",
			item:     "Howling Beater"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Paffati Hall"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Ukide-Gumo"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Ellaider Geothermal Lake"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Darkness Leggings"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Ellaider Geothermal Lake"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Galleon Greaves"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Ellaider Geothermal Lake"},
			rarity:   "Blue",
			where:    "Right",
			item:     "Reboot Belt"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Ellaider Geothermal Lake"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Altered Pike"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Desperado Boots"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Fractal Leggings"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Mercenary Sword"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way"},
			rarity:   "Red",
			where:    "Events",
			item:     "Chevalier Guard"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Steadfast Leggings"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "General Greaves"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path"},
			rarity:   "Blue",
			where:    "Right",
			item:     "Daydream Ank"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Wise Bracelet"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path"},
			rarity:   "Red",
			where:    "Events",
			item:     "Calm Foil"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Flexed Edge"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Shade Earring"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Boots of Excess"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Heat Haze Bracelet"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir"},
			rarity:   "Blue",
			where:    "Top",
			item:     "Garnet Choker"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Glowing Halberd"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cedol Lake"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Exceed Coat"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cedol Lake"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Galleon Armor"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cedol Lake"},
			rarity:   "Blue",
			where:    "Top",
			item:     "Phantasm Belt"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cedol Lake"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Euphoria Ring"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cedol Lake"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Ignition Lance"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fernaste Park"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Clockwork Shank"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fernaste Park"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Akashic Plate"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fernaste Park"},
			rarity:   "Blue",
			where:    "Top",
			item:     "Fury Belt"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fernaste Park"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Outsider's Lance"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Boots of Banishing"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden"},
			rarity:   "Brown",
			where:    "Top",
			item:     "General's Armor"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden"},
			rarity:   "Blue",
			where:    "Right",
			item:     "Tranquiliezer"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Power Armlet"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Maximum Impact"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden"},
			rarity:   "Red",
			where:    "Events",
			item:     "Ain Restorer"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden"},
			rarity:   "Silver",
			where:    "Event Chain",
			item:     "Ryonox Coat"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Clockwork Armor"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Chivalry Coat"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Freesia Belt"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden"},
			rarity:   "Blue",
			where:    "Top",
			item:     "Brighteness Ank"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Kogetsu"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden"},
			rarity:   "Red",
			where:    "Events",
			item:     "Controlled Reaver"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden"},
			rarity:   "Silver",
			where:    "Event Chain",
			item:     "Ryonox Mail"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Mithril Leggings"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Mithril Plate"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Stigma Ring"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden"},
			rarity:   "Red",
			where:    "Events",
			item:     "Talon Knife"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Feather Thruster"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Banishing Coat"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Akashic Boots"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Electrum Ring"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden"},
			rarity:   "Blue",
			where:    "Right",
			item:     "Spell Braeclet"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden"},
			rarity:   "Red",
			where:    "Events",
			item:     "Innocent Shell"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Raptor Blade"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden"},
			rarity:   "Silver",
			where:    "Event Chain",
			item:     "Wulfen Boots"
		}, {
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Armadillo Madness"
		}, {
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Lawless Boots"
		}, {
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
			rarity:   "Blue",
			where:    "Right",
			item:     "Master Belt"
		},
		{location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert"}, rarity: "Blue", where: "Left", item: ""},
		{
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
			rarity:   "Red",
			where:    "Events",
			item:     "Assassin's Gale"
		}, {
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Hidoh"
		}, {
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
			rarity:   "Silver",
			where:    "Event Chain",
			item:     "Mythologia's Ear Hoop"
		}, {
			location: {area: "Kurjiez Desert", stage: "Alle Fioro"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Gemini Sandals"
		},
		{location: {area: "Kurjiez Desert", stage: "Alle Fioro"}, rarity: "Brown", where: "Top", item: "Gemini Coat"}, {
			location: {area: "Kurjiez Desert", stage: "Alle Fioro"},
			rarity:   "Blue",
			where:    "Top",
			item:     "Talisman of Eternal Joy"
		}, {location: {area: "Kurjiez Desert", stage: "Alle Fioro"}, rarity: "Blue", where: "Bottom", item: ""}, {
			location: {area: "Kurjiez Desert", stage: "Alle Fioro"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Shell Buckler"
		}, {
			location: {area: "Kurjiez Desert", stage: "Alle Fioro"},
			rarity:   "Red",
			where:    "Events",
			item:     "Heavy Slasher"
		}, {
			location: {area: "Kurjiez Desert", stage: "Northern Ultana Desert"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Wild Thing"
		}, {
			location: {area: "Kurjiez Desert", stage: "Northern Ultana Desert"},
			rarity:   "Blue",
			where:    "Right",
			item:     "Jewelry Bangle"
		},
		{location: {area: "Kurjiez Desert", stage: "Northern Ultana Desert"}, rarity: "Blue", where: "Right", item: ""},
		{location: {area: "Kurjiez Desert", stage: "Northern Ultana Desert"}, rarity: "Blue", where: "Left", item: ""},
		{
			location: {area: "Kurjiez Desert", stage: "Northern Ultana Desert"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Valiant Rapier"
		},
		{location: {area: "Kurjiez Desert", stage: "Uron Dunes"}, rarity: "Brown", where: "Left", item: "Blast Armor"},
		{
			location: {area: "Kurjiez Desert", stage: "Uron Dunes"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Gemini Sandals"
		}, {location: {area: "Kurjiez Desert", stage: "Uron Dunes"}, rarity: "Blue", where: "Bottom", item: ""},
		{location: {area: "Kurjiez Desert", stage: "Uron Dunes"}, rarity: "Blue", where: "Top", item: ""}, {
			location: {area: "Kurjiez Desert", stage: "Uron Dunes"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Elemental Hammer"
		}, {
			location: {area: "Kurjiez Desert", stage: "Ruel Wellspring"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Grand Ward"
		}, {
			location: {area: "Kurjiez Desert", stage: "Ruel Wellspring"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Blast Leggings"
		}, {location: {area: "Kurjiez Desert", stage: "Ruel Wellspring"}, rarity: "Blue", where: "Right", item: ""},
		{location: {area: "Kurjiez Desert", stage: "Ruel Wellspring"}, rarity: "Blue", where: "Left", item: ""}, {
			location: {area: "Kurjiez Desert", stage: "Ruel Wellspring"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Ravenous Saber"
		}, {location: {area: "Kurjiez Desert", stage: "Bana'varon Wastes"}, rarity: "Blue", where: "Bottom", item: ""},
		{
			location: {area: "Kurjiez Desert", stage: "Bana'varon Wastes"},
			rarity:   "Blue",
			where:    "Top",
			item:     "Precious Metal Pendant"
		}, {
			location: {area: "Kurjiez Desert", stage: "Bana'varon Wastes"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Perfected Prototype"
		}, {
			location: {area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Hiking Boots"
		}, {
			location: {area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Sapphire Earring"
		}, {
			location: {area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     ""
		}, {
			location: {area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
			rarity:   "Blue",
			where:    "Top",
			item:     "Snipe Armlet"
		}, {
			location: {area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
			rarity:   "Red",
			where:    "Events",
			item:     "Evil Talwar"
		}, {
			location: {area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Conducting Shell"
		}, {location: {area: "Kurjiez Desert", stage: "Gebuerno"}, rarity: "Brown", where: "Left", item: "Ghost Aside"},
		{location: {area: "Kurjiez Desert", stage: "Gebuerno"}, rarity: "Brown", where: "Right", item: "Last Guardian"},
		{location: {area: "Kurjiez Desert", stage: "Gebuerno"}, rarity: "Blue", where: "Right", item: ""}, {
			location: {area: "Kurjiez Desert", stage: "Gebuerno"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Shinobi's Waistband"
		},
		{location: {area: "Kurjiez Desert", stage: "Gebuerno"}, rarity: "Red", where: "Events", item: "Flowering Foil"},
		{location: {area: "Kurjiez Desert", stage: "Gebuerno"}, rarity: "Red", where: "Stage Boss", item: "Hihigatana"},
		{
			location: {area: "Kurjiez Desert", stage: "Remetta Excavation"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Mirrored Mial"
		}, {
			location: {area: "Kurjiez Desert", stage: "Remetta Excavation"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Armadillo Sadness"
		}, {location: {area: "Kurjiez Desert", stage: "Remetta Excavation"}, rarity: "Blue", where: "Top", item: ""}, {
			location: {area: "Kurjiez Desert", stage: "Remetta Excavation"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Ring of Hallucination"
		}, {
			location: {area: "Kurjiez Desert", stage: "Remetta Excavation"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Rabble Calmer"
		}, {
			location: {area: "Kurjiez Desert", stage: "Trie Modragal Pass"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Lifegiver"
		}, {
			location: {area: "Kurjiez Desert", stage: "Trie Modragal Pass"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "The Chariot"
		}, {location: {area: "Kurjiez Desert", stage: "Trie Modragal Pass"}, rarity: "Blue", where: "Bottom", item: ""},
		{location: {area: "Kurjiez Desert", stage: "Trie Modragal Pass"}, rarity: "Blue", where: "Top", item: ""}, {
			location: {area: "Kurjiez Desert", stage: "Trie Modragal Pass"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Hunter's Blade"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Lifegivers"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Endbringers"
		}, {location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"}, rarity: "Blue", where: "Top", item: ""}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
			rarity:   "Red",
			where:    "Events",
			item:     "Glamorous Shotel"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
			rarity:   "Silver",
			where:    "Event Chain",
			item:     "Dominator's Garb"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Sylph's Protection"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Jinxed Oddity"
		}, {location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"}, rarity: "Blue", where: "Top", item: ""}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Garou-Tou"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Stardust Earring"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Loam Spirit's Greaves"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
			rarity:   "Blue",
			where:    "Right",
			item:     "Pleiades Chocker"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Stratagem"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Blade of Pain"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
			rarity:   "Red",
			where:    "Events",
			item:     "Midnight Spear"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
			rarity:   "Gold",
			where:    "Area Boss",
			item:     "Artemis"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Zealot's Protector"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Liquid Reflection"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Southern Cross Chain"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
			rarity:   "Blue",
			where:    "Right",
			item:     "Epitaph Ring"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
			rarity:   "Red",
			where:    "Events",
			item:     "Blood Stealer"
		}, {
			location: {area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Jail Slicer"
		}, {
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Below"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Zealot's Soles"
		}, {
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Below"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Ancient Leggings"
		},
		{location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Below"}, rarity: "Blue", where: "Right", item: ""},
		{
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Below"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Grand Foil"
		}, {
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Paradigm"
		}, {
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Paradigm Shifter"
		}, {location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"}, rarity: "Blue", where: "Top", item: ""},
		{
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Scapegoat Chocker"
		}, {
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Fanatic Hammer"
		}, {
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
			rarity:   "Red",
			where:    "Events",
			item:     "Mutilator"
		}, {
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
			rarity:   "Silver",
			where:    "Event Chain",
			item:     "Boots of Catharsis"
		}, {
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Pluto Power Earring"
		}, {
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Ancient Armor"
		},
		{location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"}, rarity: "Blue", where: "Right", item: ""},
		{location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"}, rarity: "Blue", where: "Left", item: ""},
		{
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"},
			rarity:   "Red",
			where:    "Events",
			item:     "Earth Quaker"
		}, {
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     ""
		}, {
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"},
			rarity:   "Silver",
			where:    "Event Chain",
			item:     "Maelstrom"
		}, {
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Upper"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Banded Armor"
		}, {
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Upper"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Bandersnatcher"
		},
		{location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Upper"}, rarity: "Blue", where: "Right", item: ""},
		{
			location: {area: "Kurjiez Desert", stage: "AdelzandeTower: Upper"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Bewildering Blade"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Talisman of Ares"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Royal Defender"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Precarious Plate"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Viral Feet"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Hoop of Adonis"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"},
			rarity:   "Blue",
			where:    "Top",
			item:     "Karma Belt"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Moonstruck Saber"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Dreadnought"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Night Mail"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Demon's Cord"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
			rarity:   "Blue",
			where:    "Right",
			item:     "Aura Drops"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Dark Moon Buckler"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Phenomenon Earring"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Trusted Coverings"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"},
			rarity:   "Blue",
			where:    "Top",
			item:     "Oath of the Tabernacle"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Dragonfang Pendant"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"},
			rarity:   "Red",
			where:    "Events",
			item:     "Asayuki Kabuse"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Lunatic Press"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Boots of Brotherhood"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Elven Earring"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Sixth Sense"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Prima Sabre"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"},
			rarity:   "Red",
			where:    "Events",
			item:     "Bardiche"
		}, {
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Greaves of Live"
		}, {
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Confounding Leggings"
		},
		{location: {area: "Oltrum Bastion", stage: "Illial Temple: Barracks"}, rarity: "Blue", where: "Left", item: ""},
		{
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
			rarity:   "Blue",
			where:    "Right",
			item:     "Lion's Tears"
		}, {
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Final Espada"
		}, {
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
			rarity:   "Red",
			where:    "Events",
			item:     "Spiked Buckler"
		}, {
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Calamity Stopper"
		}, {
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Juggernaut"
		}, {
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Ring of El Dorado"
		}, {location: {area: "Oltrum Bastion", stage: "Illial Temple: Lift"}, rarity: "Blue", where: "Top", item: ""}, {
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Matter Dissolver"
		}, {
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
			rarity:   "Brown",
			where:    "Left",
			item:     "Squirming Saviours"
		}, {
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
			rarity:   "Brown",
			where:    "Right",
			item:     "Greaves of Live"
		}, {
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Pendant of Sealing"
		}, {
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
			rarity:   "Blue",
			where:    "Right",
			item:     ""
		}, {
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Hated Razor"
		}, {
			location: {area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
			rarity:   "Silver",
			where:    "Event Chain",
			item:     "Belphegor"
		}, {
			location: {area: "Aincrad", stage: "Unfinished Floor1"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Lycan's Seal"
		}, {
			location: {area: "Aincrad", stage: "Unfinished Floor1"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Werewolf's Paws"
		}, {
			location: {area: "Aincrad", stage: "Unfinished Floor1"},
			rarity:   "Blue",
			where:    "Left",
			item:     "Uranus's Loincloth"
		}, {location: {area: "Aincrad", stage: "Unfinished Floor1"}, rarity: "Blue", where: "Right", item: ""}, {
			location: {area: "Aincrad", stage: "Unfinished Floor1"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Baldr's Mallet"
		}, {
			location: {area: "Aincrad", stage: "Unfinished Floor2"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Phoenix Wrappings"
		}, {
			location: {area: "Aincrad", stage: "Unfinished Floor2"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Phoenix Mail"
		}, {
			location: {area: "Aincrad", stage: "Unfinished Floor2"},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Seraph's Band"
		}, {
			location: {area: "Aincrad", stage: "Unfinished Floor2"},
			rarity:   "Blue",
			where:    "Top",
			item:     "Helios's Warding Stone"
		}, {
			location: {area: "Aincrad", stage: "Unfinished Floor2"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Spine Killer"
		}, {
			location: {area: "Aincrad", stage: "Unfinished Floor3"},
			rarity:   "Brown",
			where:    "Top",
			item:     "Phoenix Wrappings"
		}, {
			location: {area: "Aincrad", stage: "Unfinished Floor3"},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Phoenix Mail"
		},
		{location: {area: "Aincrad", stage: "Unfinished Floor3"}, rarity: "Blue", where: "Left", item: "Pentacle Ring"},
		{location: {area: "Aincrad", stage: "Unfinished Floor3"}, rarity: "Blue", where: "Right", item: ""}, {
			location: {area: "Aincrad", stage: "Unfinished Floor3"},
			rarity:   "Red",
			where:    "Stage Boss",
			item:     "Viper Trail"
		}
	],
	events:  [
		{
			location:    {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
			type:        "M",
			name:        "The Sacred Tree's Revolt",
			goals:       [{type: "Kill", name: "Spectral Treant", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 0}],
			chainEvents: []
		}, {
			location:    {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
			type:        "M",
			name:        "Boarish Intruders",
			goals:       [{type: "Kill", name: "Wild Glutton", amount: 5}],
			rewards:     [{type: "EXP", name: "EXP", amount: 50}, {type: "Item", name: "Bluesteel Ore", amount: 1}],
			chainEvents: []
		}, {
			location:    {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
			type:        "M",
			name:        "Vengeful Spirit",
			goals:       [{type: "Kill", name: "Grudge Ghost Treant", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 100}, {type: "Item", name: "", amount: 2}],
			chainEvents: []
		}, {
			location:    {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
			type:        "M",
			name:        "Lake Pinchers",
			goals:       [{type: "Kill", name: "Water Seeker", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: "60"}, {type: "Item", name: "Darantite Ore", amount: "1"}],
			chainEvents: []
		}, {
			location:    {area: "Great Plains of Rustoria", stage: "Centallia Rise"},
			type:        "M",
			name:        "Field of Boars",
			goals:       [{type: "Kill", name: "Plump Boar", amount: "4"}],
			rewards:     [{type: "EXP", name: "EXP", amount: "100"}, {type: "Item", name: "Aincrite Ore", amount: "2"}],
			chainEvents: []
		}, {
			location:    {area: "Great Plains of Rustoria", stage: "Centallia Rise"},
			type:        "M",
			name:        "The Sting",
			goals:       [{type: "Kill", name: "Assault Wasp", amount: "7"}],
			rewards:     [{type: "EXP", name: "EXP", amount: "60"}, {type: "Item", name: "Platinum Ore", amount: "1"}],
			chainEvents: []
		}, {
			location:    {area: "Great Plains of Rustoria", stage: "Centallia Rise"},
			type:        "M",
			name:        "The Hidden Nest",
			goals:       [{type: "Kill", name: "Hive Hornet", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: "90"}, {type: "Item", name: "Bluesteel Ore", amount: "1"}],
			chainEvents: []
		}, {
			location:    {area: "Great Plains of Rustoria", stage: "Centallia Rise"},
			type:        "M",
			name:        "Ever-Growing Anger",
			goals:       [{type: "Kill", name: "Raging Plump Boar", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: "170"}, {type: "Chest", name: "Silver", amount: 1}],
			chainEvents: [
				{stage: "Centallia Rise", name: "The Sting"}, {stage: "Centallia Rise", name: "Field of Boars"}
			]
		}, {
			location:    {area: "Great Plains of Rustoria", stage: "Lake Steschal"},
			type:        "M",
			name:        "Snake Eyes",
			goals:       [{type: "Kill", name: "Deathgaze Lizard", amount: 1}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "130"}, {type: "Item", name: "Darantite Ore", amount: "2"}
			],
			chainEvents: []
		}, {
			location:    {area: "Great Plains of Rustoria", stage: "Lake Steschal"},
			type:        "M",
			name:        "Creatures from the Deep",
			goals:       [{type: "Kill", name: "Uniting Jelley", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: "80"}, {type: "Item", name: "Bluesteel Ore", amount: "2"}],
			chainEvents: []
		}, {
			location:    {area: "Great Plains of Rustoria", stage: "Guban Hill"},
			type:        "M",
			name:        "The Fanged Plant",
			goals:       [{type: "Kill", name: "Laughing Nepenthe", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 1}],
			chainEvents: []
		}, {
			location:    {area: "Great Plains of Rustoria", stage: "Guban Hill"},
			type:        "M",
			name:        "Twin Dragons",
			goals:       [{type: "Kill", name: "Cannibal Twins", amount: "2"}],
			rewards:     [{type: "EXP", name: "EXP", amount: 1}],
			chainEvents: []
		}, {
			location:    {area: "Great Forest of Oldrobe", stage: "Lokitalluh Ascent"},
			type:        "M",
			name:        "Unstable Power",
			goals:       [{type: "Kill", name: "Strongshell Turtle", amount: 2}],
			rewards:     [{type: "EXP", name: "EXP", amount: 320}, {type: "Item", name: "Iron Ore", amount: 3}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Lynex Waterway"},
			type:        "M",
			name:        "Unstable Power",
			goals:       [{type: "Kill", name: "Strongshell Turtle", amount: 2}],
			rewards:     [{type: "EXP", name: "EXP", amount: 320}, {type: "Item", name: "Iron Ore", amount: 3}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Lynex Waterway"},
			type:        "M",
			name:        "The Bone Eaters",
			goals:       [{type: "Kill", name: "Lifesucker Fish", amount: 5}],
			rewards:     [{type: "EXP", name: "EXP", amount: 270}, {type: "Item", name: "Iron Ore", amount: 5}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract"},
			type:        "M",
			name:        "Pricy Prey",
			goals:       [{type: "Kill", name: "Crystal Cruncher", amount: 7}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: 260}, {type: "Item", name: "Silver Ore", amount: 4},
				{type: "Chest", name: "Red", amount: 1}
			],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract"},
			type:        "M",
			name:        "The Frightened Faithfull",
			goals:       [{type: "Kill", name: "Sojourn Wasp", amount: 10}],
			rewards:     [{type: "EXP", name: "EXP", amount: 280}, {type: "Item", name: "Silver Ore", amount: 5}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract"},
			type:        "M",
			name:        "Shift Relief",
			goals:       [{type: "Kill", name: "Disintegrating Golem", amount: 3}],
			rewards:     [{type: "EXP", name: "EXP", amount: 330}, {type: "Item", name: "Silver Ore", amount: 3}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Marceiville Water Caves"},
			type:        "M",
			name:        "The Beeing From Beyond",
			goals:       [{type: "Kill", name: "Nightmare Gremlin", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Aincrite Ore", amount: 4}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Marceiville Water Caves"},
			type:        "M",
			name:        "A Feared Legend",
			goals:       [{type: "Kill", name: "Pseudodragon", amount: 5}],
			rewards:     [{type: "EXP", name: "EXP", amount: 360}, {type: "Item", name: "Aincrite Ore", amount: 7}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Marceiville Water Caves"},
			type:        "M",
			name:        "Born of Sin",
			goals:       [
				{type: "Kill", name: "Vile Amalgam", amount: 1}, {type: "Kill", name: "Vile Amalgam Spawn", amount: 5}
			],
			rewards:     [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Aincrite Ore", amount: 4}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Turinble Road"},
			type:        "M",
			name:        "The Beeing From Beyond",
			goals:       [{type: "Kill", name: "Maddened Aberation", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Bluesteel Ore", amount: 5}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Turinble Road"},
			type:        "M",
			name:        "Sunken Guardians",
			goals:       [{type: "Kill", name: "Flood Temple Golem", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 380}, {type: "Item", name: "Bluesteel Ore", amount: 4}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Turinble Road"},
			type:        "M",
			name:        "The Floating Blade",
			goals:       [{type: "Kill", name: "Shallow Skullker", amount: 9}],
			rewards:     [{type: "EXP", name: "EXP", amount: 300}, {type: "Item", name: "Bluesteel Ore", amount: 5}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Turinble Road"},
			type:        "M",
			name:        "An Unwelcoming Forest",
			goals:       [
				{type: "Kill", name: "Natural Disaster", amount: 1}, {type: "Kill", name: "Wrathleaf", amount: 0}
			],
			rewards:     [
				{type: "EXP", name: "EXP", amount: 430}, {type: "Item", name: "Bluesteel Ore", amount: 8},
				{type: "Chest", name: "Red", amount: 1}
			],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Paffati Hall"},
			type:        "M",
			name:        "The Glistering Shell",
			goals:       [{type: "Kill", name: "Thick-Shelled Turtle", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 430}, {type: "Item", name: "Platinum Ore", amount: 5}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Paffati Hall"},
			type:        "M",
			name:        "The Beeing From Beyond",
			goals:       [{type: "Kill", name: "Urchin Crab", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Platinum Ore", amount: 5}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Paffati Hall"},
			type:        "M",
			name:        "In Search of a New World",
			goals:       [{type: "Kill", name: "Oean Jelly", amount: 11}],
			rewards:     [{type: "EXP", name: "EXP", amount: 300}, {type: "Item", name: "Platinum Ore", amount: 5}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Ellaider Geothermal Lake"},
			type:        "M",
			name:        "Fangs Amidst the Steam",
			goals:       [{type: "Kill", name: "Hot Spring Buffalo", amount: 6}],
			rewards:     [{type: "EXP", name: "EXP", amount: 330}, {type: "Item", name: "Darantite Ore", amount: 6}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Ellaider Geothermal Lake"},
			type:        "M",
			name:        "From the Writhering Pit",
			goals:       [{type: "Kill", name: "Caldera Crab", amount: 9}],
			rewards:     [{type: "EXP", name: "EXP", amount: 370}, {type: "Item", name: "Darantite Ore", amount: 4}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way"},
			type:        "M",
			name:        "Smells Like Trouble",
			goals:       [{type: "Kill", name: "Stealth: Burstbud", amount: 0}],
			rewards:     [{type: "EXP", name: "EXP", amount: 270}, {type: "Item", name: "Iron Ore", amount: 4}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way"},
			type:        "M",
			name:        "Awakened Beast",
			goals:       [{type: "Kill", name: "Summoned Pandemonium Fiend", amount: 7}],
			rewards:     [{type: "EXP", name: "EXP", amount: 330}, {type: "Item", name: "Aincrite Ore", amount: 0}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way"},
			type:        "M",
			name:        "The Beeing From Beyond",
			goals:       [{type: "Kill", name: "The Cosmic Eye", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Bluesteel Ore", amount: 5}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way"},
			type:        "M",
			name:        "Ruler of a Dark World",
			goals:       [{type: "Kill", name: "Neo Knight", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 380}, {type: "Item", name: "Platinum Ore", amount: 4}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Cranvede Path"},
			type:        "M",
			name:        "Bloodsuckers",
			goals:       [{type: "Kill", name: "Leechmite", amount: 6}],
			rewards:     [{type: "EXP", name: "EXP", amount: 310}, {type: "Item", name: "Darantite Ore", amount: 5}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Cranvede Path"},
			type:        "M",
			name:        "The Sweet Earth",
			goals:       [{type: "Kill", name: "Spiceleafe Beast", amount: 3}],
			rewards:     [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Silver Ore", amount: 6}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Cranvede Path"},
			type:        "M",
			name:        "The Beeing From Beyond",
			goals:       [{type: "Kill", name: "The Devourer of Souls", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Darantite Ore", amount: 1}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Cranvede Path"},
			type:        "M",
			name:        "Demons of the Depth",
			goals:       [{type: "Kill", name: "Kirkaldyian Queen", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 400}, {type: "Item", name: "Darantite Ore", amount: 4}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir"},
			type:        "M",
			name:        "An Overzealous Guard",
			goals:       [{type: "Kill", name: "Formatted Golem", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 390}, {type: "Item", name: "Darantite Ore", amount: 7}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir"},
			type:        "M",
			name:        "The Beeing From Beyond",
			goals:       [{type: "Kill", name: "Demonic Reaper", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Platinum Ore", amount: 5}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir"},
			type:        "M",
			name:        "The Price of Greed",
			goals:       [{type: "Kill", name: "Fallen Narcissist", amount: 4}],
			rewards:     [{type: "EXP", name: "EXP", amount: 320}, {type: "Item", name: "Bluesteel Ore", amount: 6}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Cedol Lake"},
			type:        "M",
			name:        "Reboot",
			goals:       [{type: "Kill", name: "Magi-Golem", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 400}, {type: "Item", name: "Silver Ore", amount: 4}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "Cedol Lake"},
			type:        "M",
			name:        "Over the Edge",
			goals:       [{type: "Kill", name: "Undying Fighter", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 380}, {type: "Item", name: "Platinum Ore", amount: 7}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "La Fernaste Park"},
			type:        "M",
			name:        "Submerged Desires",
			goals:       [{type: "Kill", name: "Rusalka", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Silver Ore", amount: 6}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "La Fernaste Park"},
			type:        "M",
			name:        "Primordial Entity",
			goals:       [{type: "Kill", name: "Scavenging Sludge", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 360}, {type: "Item", name: "Iron Ore", amount: 7}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden"},
			type:        "M",
			name:        "From Darkness",
			goals:       [{type: "Kill", name: "Shadow Eyes", amount: 10}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Aincrite Ore", amount: 4},
				{type: "Chest", name: "Red", amount: 1}
			],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden"},
			type:        "M",
			name:        "An Evil Confluence",
			goals:       [{type: "Kill", name: "Dire Shadow Eyes", amount: 1}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: 560}, {type: "Item", name: "", amount: 0},
				{type: "Chest", name: "", amount: 1}
			],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden"},
			type:        "M",
			name:        "A Tenacious Blade",
			goals:       [{type: "Kill", name: "Parallel Knight Reborn", amount: 1}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: 560}, {type: "Item", name: "", amount: 0},
				{type: "Chest", name: "", amount: 1}
			],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden"},
			type:        "M",
			name:        "Knight on the Edge",
			goals:       [{type: "Kill", name: "Parallel Knight", amount: 1}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: 390}, {type: "Item", name: "Darantite Ore", amount: 4},
				{type: "Chest", name: "Red", amount: 1}
			],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden"},
			type:        "M",
			name:        "The Summoned Dragon",
			goals:       [{type: "Kill", name: "Carnage Dragon", amount: 1}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: 0}, {type: "Item", name: "", amount: 0},
				{type: "Chest", name: "", amount: 1}
			],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden"},
			type:        "M",
			name:        "Wings of the Protector",
			goals:       [{type: "Kill", name: "Maze Dragon", amount: 2}],
			rewards:     [{type: "EXP", name: "EXP", amount: 480}, {type: "Item", name: "Platinum Ore", amount: 5}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden"},
			type:        "M",
			name:        "Abhorred by Nature",
			goals:       [{type: "Kill", name: "Crytid Invader", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 380}, {type: "Item", name: "Bluesteel Ore", amount: 4}],
			chainEvents: []
		}, {
			location:    {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden"},
			type:        "M",
			name:        "Lust for Life",
			goals:       [{type: "Kill", name: "Survivor", amount: 1}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: 590}, {type: "Item", name: "", amount: 0},
				{type: "Chest", name: "", amount: 1}
			],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
			type:        "M",
			name:        "Stinging Sand",
			goals:       [{type: "Kill", name: "Grand Blood Stalker", amount: 3}],
			rewards:     [{type: "EXP", name: "EXP", amount: 0}, {type: "Item", name: "", amount: 0}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
			type:        "M",
			name:        "Stinging Sands",
			goals:       [{type: "Kill", name: "Grand Blood Stalker", amount: "3"}],
			rewards:     [{type: "EXP", name: "EXP", amount: "420"}, {type: "Item", name: "Silver Ore", amount: "7"}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
			type:        "M",
			name:        "Thirsty Trees",
			goals:       [{type: "Kill", name: "Parched Treant", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 470}, {type: "Item", name: "Silver Ore", amount: 5}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
			type:        "M",
			name:        "They Follow",
			goals:       [
				{type: "Kill", name: "Crescent Sting", amount: 1},
				{type: "Kill", name: "Grand Blood Stalker", amount: "10"}
			],
			rewards:     [{type: "EXP", name: "EXP", amount: "630"}, {type: "Chest", name: "Silver", amount: 1}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
			type:        "M",
			name:        "Footsteps in the Wind",
			goals:       [{type: "Kill", name: "Lost One", amount: 4}],
			rewards:     [{type: "EXP", name: "EXP", amount: 370}, {type: "Item", name: "", amount: 6}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Alle Fioro"},
			type:        "M",
			name:        "Plant Panic",
			goals:       [{type: "Kill", name: "Sweeping Nepenthes", amount: 1}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "500"}, {type: "Item", name: "Bluesteel Ore", amount: "5"}
			],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Alle Fioro"},
			type:        "M",
			name:        "Desert Blossom",
			goals:       [{type: "Kill", name: "Peregrine Hornet", amount: 8}],
			rewards:     [{type: "EXP", name: "EXP", amount: 420}, {type: "Item", name: "Bluesteel Ore", amount: 7}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Alle Fioro"},
			type:        "M",
			name:        "Bullish Gatekeepers",
			goals:       [{type: "Kill", name: "Taurus Booster", amount: 4}],
			rewards:     [{type: "EXP", name: "EXP", amount: 480}, {type: "Item", name: "Bluesteel Ore", amount: 8}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Alle Fioro"},
			type:        "M",
			name:        "Putting Down Roots",
			goals:       [{type: "Kill", name: "Ancient Briar", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 0}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Northern Ultana Desert"},
			type:        "M",
			name:        "Hot Under the Collar",
			goals:       [{type: "Kill", name: "Nomadic Buffalo", amount: 8}],
			rewards:     [{type: "EXP", name: "EXP", amount: 380}, {type: "Item", name: "Darantite Ore", amount: 6}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Uron Dunes"},
			type:        "M",
			name:        "The Mirage",
			goals:       [{type: "Kill", name: "Ilusory Eye", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: "500"}, {type: "Item", name: "Aincrite Ore", amount: "5"}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Uron Dunes"},
			type:        "M",
			name:        "Out of the Sea",
			goals:       [{type: "Kill", name: "Desert Crab", amount: "6"}],
			rewards:     [{type: "EXP", name: "EXP", amount: "450"}, {type: "Item", name: "Aincrite Ore", amount: "7"}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Ruel Wellspring"},
			type:        "M",
			name:        "Sun-Ripened",
			goals:       [{type: "Kill", name: "Plant Titan", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: "470"}, {type: "Item", name: "Platinum Ore", amount: "8"}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Ruel Wellspring"},
			type:        "M",
			name:        "Unwelcome Guests",
			goals:       [{type: "Kill", name: "Sandstone Lizard", amount: "7"}],
			rewards:     [{type: "EXP", name: "EXP", amount: "430"}, {type: "Item", name: "Platinum Ore", amount: "7"}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Bana'varon Wastes"},
			type:        "M",
			name:        "Life for Live",
			goals:       [{type: "Kill", name: "Rejuvenative Treant", amount: "3"}],
			rewards:     [{type: "EXP", name: "EXP", amount: "420"}, {type: "Item", name: "Iron Ore", amount: "7"}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
			type:        "M",
			name:        "The Vigilant Guardian",
			goals:       [{type: "Stealth", name: "Stunning Automaton", amount: 0}],
			rewards:     [{type: "EXP", name: "EXP", amount: "400"}, {type: "Item", name: "Platinum Ore", amount: "6"}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
			type:        "M",
			name:        "Cruel Incisors",
			goals:       [{type: "Kill", name: "Crystal Eater", amount: "7"}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "520"}, {type: "Item", name: "Darantite Ore", amount: "9"}
			],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
			type:        "M",
			name:        "A Glut of Magic",
			goals:       [{type: "Kill", name: "Killer Scourge", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: "440"}, {type: "Item", name: "Iron Ore", amount: "4"}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Gebuerno"},
			type:        "M",
			name:        "Protective Instincts",
			goals:       [{type: "Kill", name: "Lost Militia Soldier", amount: "8"}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "470"}, {type: "Item", name: "Bluesteel Ore", amount: "8"}
			],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Gebuerno"},
			type:        "M",
			name:        "The Trespassers",
			goals:       [{type: "Kill", name: "Legacy Hijacker", amount: "4"}],
			rewards:     [{type: "EXP", name: "EXP", amount: "500"}, {type: "Item", name: "Iron Ore", amount: "5"}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Remetta Excavation"},
			type:        "M",
			name:        "The Hunter's Reward",
			goals:       [{type: "Kill", name: "Vicious Trader", amount: "4"}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "530"}, {type: "Item", name: "Darantite Ore", amount: "9"}
			],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Trie Modragal Pass"},
			type:        "M",
			name:        "Scorched Earth",
			goals:       [{type: "Kill", name: "Sand Venom", amount: "6"}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "440"}, {type: "Item", name: "Darantite Ore", amount: "7"}
			],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
			type:        "M",
			name:        "Tainted Wanderlust",
			goals:       [{type: "Kill", name: "Lasri Heart", amount: "7"}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "490"}, {type: "Item", name: "Bluesteel Ore", amount: "5"}
			],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
			type:        "M",
			name:        "Symbiosis",
			goals:       [{type: "Kill", name: "Elder Trance Jam", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: "710"}, {type: "Chest", name: "Silver", amount: 1}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"},
			type:        "M",
			name:        "Stone Eaters",
			goals:       [{type: "Kill", name: "Ore Cruncher", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: "520"}, {type: "Item", name: "Platinum Ore", amount: "5"}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
			type:        "M",
			name:        "Angry Spirits",
			goals:       [{type: "Kill", name: "Unjust Sword", amount: "4"}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "550"}, {type: "Item", name: "Darantite Ore", amount: "5"}
			],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
			type:        "M",
			name:        "The Opposition",
			goals:       [
				{type: "Kill", name: "Stalwart Taurus Rebel", amount: 1},
				{type: "Kill", name: "Taurus Ascendant", amount: "6"}
			],
			rewards:     [{type: "EXP", name: "EXP", amount: "1430"}, {type: "Chest", name: "Gold", amount: 1}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
			type:        "M",
			name:        "Dweller in the Dark",
			goals:       [{type: "Stealth", name: "Sonar Bat", amount: 0}],
			rewards:     [{type: "EXP", name: "EXP", amount: "450"}, {type: "Item", name: "Iron Ore", amount: "7"}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
			type:        "M",
			name:        "The Echo, Echo, Echo",
			goals:       [
				{type: "Kill", name: "Sonic Tornado", amount: 1}, {type: "Kill", name: "Sonar Bat", amount: 1}
			],
			rewards:     [{type: "EXP", name: "EXP", amount: 0}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
			type:        "M",
			name:        "Curiosity Killed Them",
			goals:       [{type: "Kill", name: "Beaten Spirit", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: "500"}, {type: "Item", name: "Silver Ore", amount: "5"}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
			type:        "M",
			name:        "Fight or Flight",
			goals:       [{type: "Kill", name: "Deployed Rejecter", amount: "2"}],
			rewards:     [{type: "EXP", name: "EXP", amount: "500"}, {type: "Item", name: "Iron Ore", amount: "5"}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
			type:        "M",
			name:        "The Ultimate Defense",
			goals:       [
				{type: "Kill", name: "Walking Disaster", amount: 1},
				{type: "Kill", name: "Emergency Rejecter", amount: "4"}
			],
			rewards:     [{type: "EXP", name: "EXP", amount: "830"}, {type: "Chest", name: "Silver", amount: 1}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"},
			type:        "M",
			name:        "The Demihuman's Pets",
			goals:       [
				{type: "Kill", name: "Taurus Tower Keeper", amount: 1}, {type: "Kill", name: "Tower Beast", amount: "3"}
			],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "500"}, {type: "Item", name: "Bluesteel Ore", amount: "5"}
			],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"},
			type:        "M",
			name:        "Vengeful Fangs",
			goals:       [
				{type: "Kill", name: "Loyal Saberfang", amount: 1}, {type: "Kill", name: "Loyal Beast", amount: "6"}
			],
			rewards:     [{type: "EXP", name: "EXP", amount: "770"}, {type: "Chest", name: "Silver", amount: 1}],
			chainEvents: []
		}, {
			location:    {area: "Kurjiez Desert", stage: "AdelzandeTower: Top"},
			type:        "M",
			name:        "Fall of an Empire",
			goals:       [
				{type: "Kill", name: "Abyss the Legate", amount: 1},
				{type: "Kill", name: "Taurus Grand Admiral", amount: 1}
			],
			rewards:     [
				{type: "EXP", name: "EXP", amount: 0}, {type: "GearSP", name: "Bear's Shank", amount: 1},
				{type: "LastHitSP", name: "Divine Circlet", amount: 1}
			],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon"},
			type:        "M",
			name:        "Knights of the Realm",
			goals:       [{type: "Kill", name: "Deadly Dullahan", amount: "3"}],
			rewards:     [{type: "EXP", name: "EXP", amount: "580"}, {type: "Item", name: "Aincrite Ore", amount: "9"}],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon"},
			type:        "M",
			name:        "Mechanical Cries",
			goals:       [{type: "Kill", name: "The Confessor", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: 0}],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"},
			type:        "M",
			name:        "Birthed by Legend",
			goals:       [{type: "Kill", name: "Crystal Jammer", amount: 1}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "640"}, {type: "Item", name: "Platinum Ore", amount: "10"}
			],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"},
			type:        "M",
			name:        "Writhing Masses",
			goals:       [{type: "Kill", name: "Rainwater Jelly", amount: "12"}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "590"}, {type: "Item", name: "Darantite Ore", amount: "9"}
			],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
			type:        "M",
			name:        "Lip-Smackingly Good",
			goals:       [{type: "Kill", name: "Digging Scorpion", amount: "6"}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "640"}, {type: "Item", name: "Bluesteel Ore", amount: "6"}
			],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"},
			type:        "M",
			name:        "Scaled Sacrilege",
			goals:       [{type: "Kill", name: "Stamping Lizard", amount: "10"}],
			rewards:     [{type: "EXP", name: "EXP", amount: "650"}, {type: "Item", name: "Silver Ore", amount: "6"}],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"},
			type:        "M",
			name:        "The Kidnappers",
			goals:       [{type: "Kill", name: "Flying Marauder", amount: "5"}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "700"}, {type: "Item", name: "Darantite Ore", amount: "11"}
			],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"},
			type:        "M",
			name:        "Maneating Monsters",
			goals:       [{type: "Kill", name: "Dangerous Beast", amount: "6"}],
			rewards:     [{type: "EXP", name: "EXP", amount: "610"}, {type: "Item", name: "Platinum Ore", amount: "9"}],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"},
			type:        "M",
			name:        "The False God",
			goals:       [{type: "Kill", name: "Imitation God", amount: 1}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "720"}, {type: "Item", name: "Bluesteel Ore", amount: "11"}
			],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"},
			type:        "M",
			name:        "A Hive of Activity",
			goals:       [
				{type: "Kill", name: "The Vanquished Empress", amount: 1},
				{type: "Kill", name: "Elite Needle Sentry", amount: 1}
			],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "690"}, {type: "Item", name: "Darantite Ore", amount: "6"}
			],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"},
			type:        "M",
			name:        "Pests of Civilization",
			goals:       [{type: "Kill", name: "Ancient Bug", amount: "11"}],
			rewards:     [{type: "EXP", name: "EXP", amount: "62"}, {type: "Item", name: "Silver Ore", amount: "10"}],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
			type:        "M",
			name:        "Sharp Betrayal",
			goals:       [{type: "Kill", name: "Vengeful Knight", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: "750"}, {type: "Item", name: "Platinum Ore", amount: "7"}],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
			type:        "M",
			name:        "The Dreaming Dead",
			goals:       [{type: "Kill", name: "Mythic Skeleton", amount: "8"}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "700"}, {type: "Item", name: "Aincrite Ore", amount: "11"}
			],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
			type:        "M",
			name:        "BloodSuckers",
			goals:       [{type: "Kill", name: "Vampire Bat", amount: "10"}],
			rewards:     [{type: "EXP", name: "EXP", amount: "650"}, {type: "Item", name: "Iron Ore", amount: "10"}],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
			type:        "M",
			name:        "Demonic Summons",
			goals:       [
				{type: "Kill", name: "Summoned Devourer", amount: "4"},
				{type: "Kill", name: "Summoning Machine", amount: 1}
			],
			rewards:     [{type: "EXP", name: "EXP", amount: "680"}, {type: "Item", name: "Iron Ore", amount: "11"}],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
			type:        "M",
			name:        "The Boundaries of Magic",
			goals:       [{type: "Kill", name: "Atomic Dragon", amount: 1}, {type: "Kill", name: "Crystal", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: "840"}, {type: "Item", name: "Iron Ore", amount: "8"}],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
			type:        "M",
			name:        "A Show of Strength",
			goals:       [{type: "Kill", name: "Duel Seeker Ignatius", amount: 1}],
			rewards:     [{type: "EXP", name: "EXP", amount: "1150"}, {type: "Chest", name: "Silver", amount: 1}],
			chainEvents: []
		}, {
			location:    {area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
			type:        "M",
			name:        "The Final Battle",
			goals:       [{type: "Kill", name: "Duel Seeker", amount: 1}],
			rewards:     [
				{type: "EXP", name: "EXP", amount: "780"}, {type: "Item", name: "Darantite Ore", amount: "12"}
			],
			chainEvents: []
		}
	],
	monster: [
		{
			locations: [{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"}],
			type:      "NM",
			race:      "Boar",
			family:    "Boar ",
			name:      "Extra Boar Commander",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
				{area: "Great Plains of Rustoria", stage: "Centallia Rise"},
				{area: "Great Plains of Rustoria", stage: "Lake Steschal"}
			],
			type:      "M",
			race:      "Boar",
			family:    "Boar",
			name:      "Bumpkin Boar",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
				{area: "Great Plains of Rustoria", stage: "Lake Steschal"}
			],
			type:      "M",
			race:      "Boar",
			family:    "Boar",
			name:      "Strong Boar",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"}],
			type:      "M",
			race:      "Boar",
			family:    "Glutton",
			name:      "Wild Glutton",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
				{area: "Great Plains of Rustoria", stage: "Lake Steschal"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}
			],
			type:      "M",
			race:      "Crab",
			family:    "Crab",
			name:      "Grass Crab",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"}],
			type:      "M",
			race:      "Crab",
			family:    "Seeker",
			name:      "Water Seeker",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
				{area: "Great Plains of Rustoria", stage: "Centallia Rise"}
			],
			type:      "M",
			race:      "Plant",
			family:    "Nepenthe",
			name:      "Lea Nepenthe",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"}],
			type:      "M",
			race:      "Plant",
			family:    "Waterweed",
			name:      "Prickly Waterweed",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"}],
			type:      "NM",
			race:      "Treant",
			family:    "Treant",
			name:      "Grudge Ghost Treant",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"}],
			type:      "HNM",
			race:      "Treant",
			family:    "Treant",
			name:      "Spectral Treant",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
				{area: "Great Plains of Rustoria", stage: "Centallia Rise"}
			],
			type:      "M",
			race:      "Treant",
			family:    "Wood",
			name:      "Ground Wood",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
				{area: "Great Plains of Rustoria", stage: "Centallia Rise"},
				{area: "Kurjiez Desert", stage: "Alle Fioro"}, {area: "Kurjiez Desert", stage: "Ruel Wellspring"},
				{area: "Kurjiez Desert", stage: "Trie Modragal Pass"}
			],
			type:      "M",
			race:      "Wasp",
			family:    "Wasp",
			name:      "Gusty Wasp",
			drops:     ["Insectoid Exoskeleton", "Insectoid Gold Wing", "Insectoid Stinger"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll"},
				{area: "Great Plains of Rustoria", stage: "Centallia Rise"},
				{area: "Kurjiez Desert", stage: "Alle Fioro"}, {area: "Kurjiez Desert", stage: "Trie Modragal Pass"}
			],
			type:      "M",
			race:      "Wasp",
			family:    "Wasp",
			name:      "Worker Wasp",
			drops:     ["Insectoid Exoskeleton", "Insectoid Gold Wing", "Insectoid Stinger"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise"}],
			type:      "M",
			race:      "Beast",
			family:    "Beast",
			name:      "Crested Beast",
			drops:     ["Bestial Mane", "Bestial Pelt"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise"}],
			type:      "M",
			race:      "Boar",
			family:    "Boar",
			name:      "Plump Boar",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise"}],
			type:      "NM",
			race:      "Boar",
			family:    "Boar",
			name:      "Raging Plump Boar",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Centallia Rise"},
				{area: "Great Plains of Rustoria", stage: "Lake Steschal"},
				{area: "Kurjiez Desert", stage: "Ruel Wellspring"}
			],
			type:      "M",
			race:      "Boar",
			family:    "Tusk",
			name:      "Massive Tusk",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Centallia Rise"},
				{area: "Great Plains of Rustoria", stage: "Lake Steschal"},
				{area: "Kurjiez Desert", stage: "Ruel Wellspring"}
			],
			type:      "M",
			race:      "Boar",
			family:    "Tusk",
			name:      "Rushing Tusk",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise"}],
			type:      "M",
			race:      "Plant",
			family:    "Nepenthe",
			name:      "Cutter Nepenthe",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise"}],
			type:      "NM",
			race:      "Plant",
			family:    "Thorn",
			name:      "Violet Thorn",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise"}],
			type:      "M",
			race:      "Treant",
			family:    "Guardian",
			name:      "Hive Guardian",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise"}],
			type:      "M",
			race:      "Treant",
			family:    "Oldwood",
			name:      "Solitary Oldwood",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Centallia Rise"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}
			],
			type:      "M",
			race:      "Treant",
			family:    "Wildwood",
			name:      "Wildwood",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise"}],
			type:      "NM",
			race:      "Wasp",
			family:    "Hornet",
			name:      "Hive Hornet",
			drops:     ["Insectoid Exoskeleton", "Insectoid Gold Wing", "Insectoid Stinger"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise"}],
			type:      "M",
			race:      "Wasp",
			family:    "Wasp",
			name:      "Assault Wasp",
			drops:     ["Insectoid Exoskeleton", "Insectoid Gold Wing", "Insectoid Stinger"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal"}],
			type:      "M",
			race:      "Boar",
			family:    "Tusk",
			name:      "Fatal Tusk",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Lake Steschal"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}
			],
			type:      "M",
			race:      "Crab",
			family:    "Crab",
			name:      "Salty Crab",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal"}],
			type:      "NM",
			race:      "Crab",
			family:    "Crab",
			name:      "King Claw, Lord of the Lake",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Lake Steschal"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}
			],
			type:      "M",
			race:      "Crab",
			family:    "Scissors",
			name:      "Raging Scissors",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal"}],
			type:      "M",
			race:      "Crab",
			family:    "Scissors",
			name:      "Swamp Scissors",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Lake Steschal"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}
			],
			type:      "M",
			race:      "Insect",
			family:    "Insectoid Crusher",
			name:      "Elite Insectoid Crusher",
			drops:     ["Insectoid Feeler", "Insectoid Gold Scale", "Insectoid Gold Wing", "Insectoid Simple Eye"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Lake Steschal"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}
			],
			type:      "M",
			race:      "Insect",
			family:    "Insectoid Crusher",
			name:      "Insectoid Crusher",
			drops:     ["Insectoid Feeler", "Insectoid Gold Scale", "Insectoid Gold Wing", "Insectoid Simple Eye"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal"}],
			type:      "M",
			race:      "Lizard",
			family:    "Drake",
			name:      "Lime Drake",
			drops:     ["Bestial Pure Blood Crys.", "Saurian Claw", "Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal"}],
			type:      "M",
			race:      "Lizard",
			family:    "Lizard",
			name:      "Fanged Lizard",
			drops:     ["Bestial Pure Blood Crys.", "Saurian Claw", "Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal"}],
			type:      "M",
			race:      "Lizard",
			family:    "Lizard",
			name:      "Fanged Lizard Broodmother",
			drops:     ["Bestial Pure Blood Crys.", "Saurian Claw", "Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal"}],
			type:      "M",
			race:      "Lizard",
			family:    "Lizard",
			name:      "Fanged Lizard Overlord",
			drops:     ["Bestial Pure Blood Crys.", "Saurian Claw", "Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal"}],
			type:      "NM",
			race:      "Lizard",
			family:    "Lizard",
			name:      "Deathgaze Lizard",
			drops:     ["Bestial Pure Blood Crys.", "Saurian Claw", "Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal"}],
			type:      "M",
			race:      "Slime",
			family:    "Jelley",
			name:      "Uniting Jelley",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Lake Steschal"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}
			],
			type:      "M",
			race:      "Tortoise",
			family:    "Tortoise",
			name:      "Green Tortoise",
			drops:     ["Saurian Bone Fragment", "Saurian Claw"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Guban Hill"}],
			type:      "M",
			race:      "Dragon",
			family:    "Dragon",
			name:      "Cannibal Twins",
			drops:     [
				"Saurian Dragonbone", "Saurian Dragonclaw", "Saurian Dragoneye", "Saurian Dragonjaw",
				"Saurian Dragonscale"
			]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Guban Hill"}],
			type:      "M",
			race:      "Plant",
			family:    "Nepenthe",
			name:      "Laughing Nepenthe",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
				{area: "Kurjiez Desert", stage: "Uron Dunes"}, {area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"}
			],
			type:      "M",
			race:      "Insect",
			family:    "Sickle Claw",
			name:      "Desert Sickle Claw",
			drops:     ["Insectoid Feeler", "Insectoid Gold Scale", "Insectoid Gold Wing", "Insectoid Simple Eye"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
				{area: "Kurjiez Desert", stage: "Uron Dunes"}, {area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"}
			],
			type:      "M",
			race:      "Insect",
			family:    "Sickle Claw",
			name:      "Sand Sickle Claw",
			drops:     ["Insectoid Feeler", "Insectoid Gold Scale", "Insectoid Gold Wing", "Insectoid Simple Eye"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
				{area: "Kurjiez Desert", stage: "Northern Ultana Desert"},
				{area: "Kurjiez Desert", stage: "Bana'varon Wastes"},
				{area: "Kurjiez Desert", stage: "Trie Modragal Pass"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"}
			],
			type:      "M",
			race:      "Lizard",
			family:    "Ladon",
			name:      "Sandstone Ladon",
			drops:     ["Bestial Pure Blood Crys.", "Saurian Claw", "Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
				{area: "Kurjiez Desert", stage: "Northern Ultana Desert"},
				{area: "Kurjiez Desert", stage: "Bana'varon Wastes"},
				{area: "Kurjiez Desert", stage: "Trie Modragal Pass"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"}
			],
			type:      "M",
			race:      "Lizard",
			family:    "Ladon",
			name:      "Sandwind Ladon",
			drops:     ["Bestial Pure Blood Crys.", "Saurian Claw", "Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Southern Ultana Desert"}],
			type:      "NM",
			race:      "Lizard",
			family:    "Ladon",
			name:      "The Lizard King of the Sands",
			drops:     ["Bestial Pure Blood Crys.", "Saurian Claw", "Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Southern Ultana Desert"}],
			type:      "NM",
			race:      "Scorpion",
			family:    "Crescent Sting",
			name:      "Crescent Sting",
			drops:     ["Crustacean Claw", "Crustacean Leg"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
				{area: "Kurjiez Desert", stage: "Northern Ultana Desert"},
				{area: "Kurjiez Desert", stage: "Uron Dunes"}, {area: "Kurjiez Desert", stage: "Ruel Wellspring"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Below"}
			],
			type:      "M",
			race:      "Scorpion",
			family:    "Stabber",
			name:      "Flaming Stabber",
			drops:     ["Crustacean Claw", "Crustacean Leg"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Southern Ultana Desert"}],
			type:      "M",
			race:      "Scorpion",
			family:    "Stalker",
			name:      "Grand Blood Stalker",
			drops:     ["Crustacean Claw", "Crustacean Leg"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
				{area: "Kurjiez Desert", stage: "Northern Ultana Desert"}, {area: "Kurjiez Desert", stage: "Gebuerno"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
				{area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Skeleton",
			family:    "Skeleton",
			name:      "Aggresive Skeleton",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Southern Ultana Desert"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
				{area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Skeleton",
			family:    "Skull",
			name:      "Fallen Skull",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Alle Fioro"}, {area: "Kurjiez Desert", stage: "Ruel Wellspring"},
				{area: "Kurjiez Desert", stage: "Bana'varon Wastes"}
			],
			type:      "M",
			race:      "Buffalo",
			family:    "Buffalo",
			name:      "Brawny Buffalo",
			drops:     ["Bestial Bone Fragment", "Bestial Hoof", "Bestial Horn"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Alle Fioro"}, {area: "Kurjiez Desert", stage: "Ruel Wellspring"},
				{area: "Kurjiez Desert", stage: "Bana'varon Wastes"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"}
			],
			type:      "M",
			race:      "Buffalo",
			family:    "Buffalo",
			name:      "Domesticated Buffalo",
			drops:     ["Bestial Bone Fragment", "Bestial Hoof", "Bestial Horn"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Alle Fioro"}, {area: "Kurjiez Desert", stage: "Ruel Wellspring"},
				{area: "Kurjiez Desert", stage: "Bana'varon Wastes"}
			],
			type:      "M",
			race:      "Buffalo",
			family:    "Buffalo",
			name:      "Herd Buffalo",
			drops:     ["Bestial Bone Fragment", "Bestial Hoof", "Bestial Horn"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Alle Fioro"}],
			type:      "HNM",
			race:      "Plant",
			family:    "Ancient Briar",
			name:      "Ancient Briar",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Alle Fioro"}],
			type:      "M",
			race:      "Plant",
			family:    "Nepenthe",
			name:      "Sweeping Nepenthes",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Alle Fioro"}, {area: "Kurjiez Desert", stage: "Ruel Wellspring"},
				{area: "Kurjiez Desert", stage: "Trie Modragal Pass"}
			],
			type:      "M",
			race:      "Plant",
			family:    "Prickle",
			name:      "Criminal Prickle",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Alle Fioro"}, {area: "Kurjiez Desert", stage: "Ruel Wellspring"},
				{area: "Kurjiez Desert", stage: "Trie Modragal Pass"}
			],
			type:      "M",
			race:      "Plant",
			family:    "Prickle",
			name:      "Punishing Prickle",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Alle Fioro"}],
			type:      "M",
			race:      "Plant",
			family:    "Thorn",
			name:      "Dancing Thorn",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Alle Fioro"}],
			type:      "M",
			race:      "Plant",
			family:    "Thorn",
			name:      "Fearful Thorn",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Alle Fioro"}],
			type:      "M",
			race:      "Plant",
			family:    "Thorn",
			name:      "Killing Thorn",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Alle Fioro"}, {area: "Kurjiez Desert", stage: "Uron Dunes"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Below"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"}
			],
			type:      "M",
			race:      "Taurus",
			family:    "Taurus",
			name:      "Taurus Basher",
			drops:     ["Demihuman Claw", "Demihuman Fang", "Demihuman Rare Fang"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Alle Fioro"}],
			type:      "M",
			race:      "Taurus",
			family:    "Taurus",
			name:      "Taurus Booster",
			drops:     ["Demihuman Claw", "Demihuman Fang", "Demihuman Rare Fang"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Alle Fioro"}, {area: "Kurjiez Desert", stage: "Uron Dunes"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Below"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Upper"}
			],
			type:      "M",
			race:      "Taurus",
			family:    "Taurus",
			name:      "Taurus Crusher",
			drops:     ["Demihuman Claw", "Demihuman Fang", "Demihuman Rare Fang"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Alle Fioro"}],
			type:      "NM",
			race:      "Taurus",
			family:    "Taurus",
			name:      "Scorching Taurus Booster",
			drops:     ["Demihuman Claw", "Demihuman Fang", "Demihuman Rare Fang"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Alle Fioro"}],
			type:      "M",
			race:      "Wasp",
			family:    "Hornet",
			name:      "Peregrine Hornet",
			drops:     ["Insectoid Exoskeleton", "Insectoid Gold Wing", "Insectoid Stinger"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Northern Ultana Desert"}],
			type:      "M",
			race:      "Buffalo",
			family:    "Buffalo",
			name:      "Nomadic Buffalo",
			drops:     ["Bestial Bone Fragment", "Bestial Hoof", "Bestial Horn"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Northern Ultana Desert"}],
			type:      "NM",
			race:      "Scorpion",
			family:    "Red Sun Stinger",
			name:      "Red Sun Stinger",
			drops:     ["Crustacean Claw", "Crustacean Leg"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Northern Ultana Desert"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}
			],
			type:      "M",
			race:      "Scorpion",
			family:    "Scorpion",
			name:      "Burst Scorpion",
			drops:     ["Crustacean Claw", "Crustacean Leg"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Northern Ultana Desert"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}
			],
			type:      "M",
			race:      "Scorpion",
			family:    "Scorpion",
			name:      "Impact Scorpion",
			drops:     ["Crustacean Claw", "Crustacean Leg"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Northern Ultana Desert"}],
			type:      "M",
			race:      "Scorpion",
			family:    "Scorpion",
			name:      "Shock Scorpion",
			drops:     ["Crustacean Claw", "Crustacean Leg"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Northern Ultana Desert"}, {area: "Kurjiez Desert", stage: "Gebuerno"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
				{area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Skeleton",
			family:    "Bone",
			name:      "Bone Slasher",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Northern Ultana Desert"},
				{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"}, {area: "Kurjiez Desert", stage: "Gebuerno"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
				{area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Skeleton",
			family:    "Undead Knight",
			name:      "Undead Knight",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Uron Dunes"}],
			type:      "M",
			race:      "Crab",
			family:    "Crab",
			name:      "Desert Crab",
			drops:     ["Adamantite Ore", "Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Uron Dunes"}],
			type:      "NM",
			race:      "Eye",
			family:    "Eye",
			name:      "Ilusory Eye",
			drops:     ["Malicious Antenna", "Malicious Evolved Core", "Malicious Eye"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Uron Dunes"}, {area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"}
			],
			type:      "M",
			race:      "Gremlin",
			family:    "Calamity Bird",
			name:      "Calamity Bird",
			drops:     ["Demonic Remains", "Demonic Retrix", "Demonic Wing"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Uron Dunes"}],
			type:      "NM",
			race:      "Gremlin",
			family:    "Calamity Bird",
			name:      "Wings of the Inferno",
			drops:     ["Demonic Remains", "Demonic Retrix", "Demonic Wing"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Ruel Wellspring"}],
			type:      "NM",
			race:      "Buffalo",
			family:    "Overpowered Bull",
			name:      "Overpowered Bull",
			drops:     ["Bestial Bone Fragment", "Bestial Hoof", "Bestial Horn"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Ruel Wellspring"}],
			type:      "M",
			race:      "Crab",
			family:    "Nipper",
			name:      "Feverish Nipper",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Ruel Wellspring"}],
			type:      "M",
			race:      "Crab",
			family:    "Nipper",
			name:      "Heat Nipper",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Ruel Wellspring"}],
			type:      "M",
			race:      "Lizard",
			family:    "Lizard",
			name:      "Sandstone Lizard",
			drops:     ["Bestial Pure Blood Crys.", "Saurian Claw", "Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Ruel Wellspring"}],
			type:      "NM",
			race:      "Plant",
			family:    "Plant Titan",
			name:      "Plant Titan",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Ruel Wellspring"},
				{area: "Kurjiez Desert", stage: "Trie Modragal Pass"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}
			],
			type:      "M",
			race:      "Wasp",
			family:    "Wasp",
			name:      "Great Wasp",
			drops:     ["Insectoid Exoskeleton", "Insectoid Gold Wing", "Insectoid Stinger"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Ruel Wellspring"},
				{area: "Kurjiez Desert", stage: "Bana'varon Wastes"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"}
			], type:   "M", race: "Worm", family: "Sandworm", name: "Ground Smasher", drops: ["Malicious Antenna"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Ruel Wellspring"},
				{area: "Kurjiez Desert", stage: "Bana'varon Wastes"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"}
			], type:   "M", race: "Worm", family: "Sandworm", name: "Sandworm", drops: ["Malicious Antenna"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Bana'varon Wastes"}],
			type:      "NM",
			race:      "Squide",
			family:    "Spirit of the Desert",
			name:      "Spirit of the Desert",
			drops:     ["Amorphous Cell", "Amorphous Nucleus", "Amorphous Tentacle"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Bana'varon Wastes"}, {area: "Kurjiez Desert", stage: "Gebuerno"}
			],
			type:      "M",
			race:      "Treant",
			family:    "Barren Bough",
			name:      "Barren Bough",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Bana'varon Wastes"}, {area: "Kurjiez Desert", stage: "Gebuerno"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}
			],
			type:      "M",
			race:      "Treant",
			family:    "Barren Bough",
			name:      "Insane Barren Bough",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Bana'varon Wastes"}, {area: "Kurjiez Desert", stage: "Gebuerno"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}
			],
			type:      "M",
			race:      "Treant",
			family:    "Barren Bough",
			name:      "Raving Barren Bough",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Bana'varon Wastes"}],
			type:      "M",
			race:      "Treant",
			family:    "Treant",
			name:      "Rejuvenative Treant",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Bana'varon Wastes"}],
			type:      "M",
			race:      "Wasp",
			family:    "Bee",
			name:      "Crimson Bee",
			drops:     ["Insectoid Exoskeleton", "Insectoid Gold Wing", "Insectoid Stinger"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
				{area: "Kurjiez Desert", stage: "Remetta Excavation"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Below"}
			],
			type:      "M",
			race:      "Bat",
			family:    "Bat",
			name:      "Darkness Bat",
			drops:     ["Demonic Claw", "Demonic Horn", "Demonic Pelt", "Demonic Remains"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
				{area: "Kurjiez Desert", stage: "Remetta Excavation"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Below"}
			],
			type:      "M",
			race:      "Bat",
			family:    "Bat",
			name:      "Death Bat",
			drops:     ["Demonic Claw", "Demonic Horn", "Demonic Pelt", "Demonic Remains"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"}
			],
			type:      "M",
			race:      "Bat",
			family:    "Bat",
			name:      "Devil Bat",
			drops:     ["Demonic Claw", "Demonic Horn", "Demonic Pelt", "Demonic Remains"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"}],
			type:      "M",
			race:      "Bug",
			family:    "Crystal Eater",
			name:      "Crystal Eater",
			drops:     ["Adamantite Ore", "Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}
			],
			type:      "M",
			race:      "Bug",
			family:    "Glowbug",
			name:      "Blue Glowbug",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
				{area: "Kurjiez Desert", stage: "Remetta Excavation"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}
			],
			type:      "M",
			race:      "Bug",
			family:    "Mite",
			name:      "Blood Mite",
			drops:     ["Crustacean Gills", "Crustacean Jaw"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
				{area: "Kurjiez Desert", stage: "Remetta Excavation"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"}
			],
			type:      "M",
			race:      "Bug",
			family:    "Tick",
			name:      "Yellow Tick",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"}],
			type:      "M",
			race:      "Golem",
			family:    "Automaton",
			name:      "Stunning Automaton",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"}, {area: "Kurjiez Desert", stage: "Gebuerno"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}
			],
			type:      "M",
			race:      "Golem",
			family:    "Golem ",
			name:      "Restored Golem",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"}],
			type:      "M",
			race:      "Scourge",
			family:    "Scourge",
			name:      "Killer Scourge",
			drops:     ["Malicious Fluid", "Malicious Skin"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
				{area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Skeleton",
			family:    "Bone",
			name:      "Bone Swordsman",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
				{area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Skeleton",
			family:    "Skeleton",
			name:      "Assault Skeleton",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"}, {area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Skeleton",
			family:    "Wandering Soldier",
			name:      "Wandering Soldier",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"}],
			type:      "M",
			race:      "Slime",
			family:    "Amber",
			name:      "Amber Jam",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"}],
			type:      "M",
			race:      "Slime",
			family:    "Amber",
			name:      "Amber Melt",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"}],
			type:      "M",
			race:      "Slime",
			family:    "Amber",
			name:      "Amber Slime",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Garoon Sandstone Tunel"}],
			type:      "NM",
			race:      "Slime",
			family:    "Amber",
			name:      "Amber Core",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Gebuerno"}, {area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon"}
			],
			type:      "M",
			race:      "Golem",
			family:    "Golem ",
			name:      "Refurbished Golem",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Gebuerno"}, {area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"}, {area: "Aincrad", stage: "Unfinished Floor1"}
			],
			type:      "M",
			race:      "Golem",
			family:    "Golem",
			name:      "Rebooted Golem",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Gebuerno"}],
			type:      "M",
			race:      "Kobold",
			family:    "Hijacker",
			name:      "Legacy Hijacker",
			drops:     [
				"Demihuman Armor Scrap", "Demihuman Bone Fragment", "Demihuman Rare Claw", "Demihuman Weapon Scrap"
			]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Gebuerno"}],
			type:      "NM",
			race:      "Kobold",
			family:    "Hijacker",
			name:      "The Blood-Spattered Blade",
			drops:     [
				"Demihuman Armor Scrap", "Demihuman Bone Fragment", "Demihuman Rare Claw", "Demihuman Weapon Scrap"
			]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Gebuerno"}],
			type:      "M",
			race:      "Reaper",
			family:    "Oblivion",
			name:      "Ghost of Oblivion",
			drops:     ["Spectral Essence", "Spectral Hell Essence", "Spectral Wrappings"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Gebuerno"}, {area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon"},
				{area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Reaper",
			family:    "Phantom",
			name:      "Phantom of Oblivion",
			drops:     ["Spectral Essence", "Spectral Hell Essence", "Spectral Wrappings"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Gebuerno"}],
			type:      "M",
			race:      "Skeleton",
			family:    "Militia Soldier",
			name:      "Lost Militia Soldier",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Remetta Excavation"}],
			type:      "NM",
			race:      "Demon",
			family:    "Fiend",
			name:      "Mirage Fiend",
			drops:     ["Demonic Claw", "Demonic Pelt"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Remetta Excavation"}],
			type:      "M",
			race:      "Demon",
			family:    "Shadow Demon",
			name:      "Shadow Demon Berserker",
			drops:     ["Demonic Claw", "Demonic Pelt"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Remetta Excavation"}],
			type:      "M",
			race:      "Demon",
			family:    "Shadow Demon",
			name:      "Shadow Demon Murderer",
			drops:     ["Demonic Claw", "Demonic Pelt"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Remetta Excavation"}, {area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Demon",
			family:    "Shadow Demon",
			name:      "Shadow Demon Warrior",
			drops:     ["Demonic Claw", "Demonic Horn", "Demonic Pelt", "Demonic Retrix"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Remetta Excavation"}],
			type:      "M",
			race:      "Scourge",
			family:    "Vicious",
			name:      "Vicious Trader",
			drops:     ["Malicious Fluid", "Malicious Skin"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Remetta Excavation"}],
			type:      "M",
			race:      "Succubus",
			family:    "Shadow Demon",
			name:      "Shadow Demon Commander",
			drops:     ["Demonic Horn", "Demonic Retrix"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Remetta Excavation"}, {area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Succubus",
			family:    "Shadow Demon",
			name:      "Shadow Demon Killer",
			drops:     ["Demonic Horn", "Demonic Retrix"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Remetta Excavation"}, {area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Succubus",
			family:    "Shadow Demon",
			name:      "Shadow Demon Slasher",
			drops:     ["Demonic Horn", "Demonic Retrix"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Remetta Excavation"}],
			type:      "M",
			race:      "Tortoise",
			family:    "Metal Shell",
			name:      "Metal Shell",
			drops:     ["Saurian Bone Fragment", "Saurian Claw"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Remetta Excavation"}],
			type:      "M",
			race:      "Tortoise",
			family:    "Metal Shell",
			name:      "Rusty Metal Shell",
			drops:     ["Saurian Bone Fragment", "Saurian Claw"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Remetta Excavation"}],
			type:      "M",
			race:      "Tortoise",
			family:    "Metal Shell",
			name:      "Shiny Metal Shell",
			drops:     ["Saurian Bone Fragment", "Saurian Claw"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Trie Modragal Pass"}],
			type:      "NM",
			race:      "Dragon",
			family:    "Dragon",
			name:      "Fortress Dragon",
			drops:     [
				"Saurian Dragonbone", "Saurian Dragonclaw", "Saurian Dragoneye", "Saurian Dragonjaw",
				"Saurian Dragonscale"
			]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Trie Modragal Pass"}],
			type:      "M",
			race:      "Fungus",
			family:    "Evil Fungus",
			name:      "Deadly Evil Fungus",
			drops:     ["Amorphous Barb", "Amorphous Plastid", "Amorphous Primal Nucleus"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Trie Modragal Pass"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"}
			],
			type:      "M",
			race:      "Fungus",
			family:    "Evil Fungus",
			name:      "Venomous Evil Fungus",
			drops:     ["Amorphous Barb", "Amorphous Plastid", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Trie Modragal Pass"}],
			type:      "M",
			race:      "Fungus",
			family:    "Sand Venom",
			name:      "Sand Venom",
			drops:     ["Amorphous Barb", "Amorphous Plastid", "Amorphous Primal Nucleus"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Trie Modragal Pass"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}
			],
			type:      "M",
			race:      "Treant",
			family:    "Rotten Resin",
			name:      "Infected Rotten Resin",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Trie Modragal Pass"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}
			],
			type:      "M",
			race:      "Treant",
			family:    "Rotten Resin",
			name:      "Rotten Resin",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Below"}
			],
			type:      "M",
			race:      "Scorpion",
			family:    "Stabber",
			name:      "Burning Stabber",
			drops:     ["Crustacean Claw", "Crustacean Leg"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"}],
			type:      "M",
			race:      "Skeleton",
			family:    "Lasri Heart",
			name:      "Lasri Heart",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Calt Blanc Way (TL)"}],
			type:      "NM",
			race:      "Slime",
			family:    "Jam",
			name:      "Elder Trance Jam",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}
			],
			type:      "M",
			race:      "Beast",
			family:    "Piercer",
			name:      "Bloody Hope Piercer",
			drops:     ["Bestial Mane", "Bestial Pelt"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}
			],
			type:      "M",
			race:      "Beast",
			family:    "Piercer",
			name:      "Bloody Void Piercer",
			drops:     ["Bestial Mane", "Bestial Pelt"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"},
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"}
			],
			type:      "M",
			race:      "Fungus",
			family:    "Evil Fungus",
			name:      "Evil Fungus",
			drops:     ["Amorphous Barb", "Amorphous Plastid", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"}],
			type:      "NM",
			race:      "Insect",
			family:    "Savage Doodlebug",
			name:      "Savage Doodlebug",
			drops:     ["Insectoid Feeler", "Insectoid Gold Scale", "Insectoid Gold Wing", "Insectoid Simple Eye"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Calt Blanc Way (TR)"}],
			type:      "NM",
			race:      "Lizard",
			family:    "Ore Cruncher",
			name:      "Ore Cruncher",
			drops:     ["Adamantite Ore", "Bestial Pure Blood Crys.", "Saurian Claw", "Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Below"}
			],
			type:      "M",
			race:      "Buffalo",
			family:    "Buffalo",
			name:      "Warring Buffalo",
			drops:     ["Bestial Bone Fragment", "Bestial Hoof", "Bestial Horn"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"}],
			type:      "M",
			race:      "Knight",
			family:    "Unjust Sword",
			name:      "Unjust Sword",
			drops:     ["Demonic Claw", "Demonic Remains"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Below"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Upper"}
			],
			type:      "M",
			race:      "Taurus",
			family:    "Blazing Taurus",
			name:      "Blazing Taurus Blaster",
			drops:     ["Demihuman Claw", "Demihuman Fang", "Demihuman Rare Fang"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Below"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Upper"}
			],
			type:      "M",
			race:      "Taurus",
			family:    "Blazing Taurus",
			name:      "Blazing Taurus Crusher",
			drops:     ["Demihuman Claw", "Demihuman Fang", "Demihuman Rare Fang"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"}],
			type:      "M",
			race:      "Taurus",
			family:    "Taurus Rebel",
			name:      "Taurus Ascendant",
			drops:     ["Demihuman Claw", "Demihuman Fang", "Demihuman Rare Fang"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"}],
			type:      "HNM",
			race:      "Taurus",
			family:    "Taurus Rebel",
			name:      "Stalwart Taurus Rebel",
			drops:     ["Demihuman Claw", "Demihuman Fang", "Demihuman Rare Fang"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Calt Blanc Way (BL)"}],
			type:      "NM",
			race:      "Taurus",
			family:    "Taurus",
			name:      "Taurus Cannon Guardian",
			drops:     ["Demihuman Claw", "Demihuman Fang", "Demihuman Rare Fang"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"}],
			type:      "M",
			race:      "Bat",
			family:    "Bat",
			name:      "Sonar Bat",
			drops:     ["Demonic Claw", "Demonic Horn", "Demonic Pelt", "Demonic Remains"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"}],
			type:      "HNM",
			race:      "Bat",
			family:    "Bat",
			name:      "Sonic Tornado",
			drops:     ["Demonic Claw", "Demonic Horn", "Demonic Pelt", "Demonic Remains"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"}],
			type:      "M",
			race:      "Bug",
			family:    "Tick",
			name:      "Citrine Tick",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"}],
			type:      "NM",
			race:      "Fungus",
			family:    "Evil Fungus",
			name:      "The Plaguebringer",
			drops:     ["Amorphous Barb", "Amorphous Plastid", "Amorphous Primal Nucleus"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
				{area: "Aincrad", stage: "Unfinished Floor2"}
			], type:   "M", race: "Other", family: "Fire", name: "Soul of Fire", drops: []
		}, {
			locations: [{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"}],
			type:      "M",
			race:      "Other",
			family:    "Flame",
			name:      "Beaten Spirit",
			drops:     ["Adamantite Ore"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "Calt Blanc Way (BR)"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"}
			],
			type:      "M",
			race:      "Reaper",
			family:    "Scyther",
			name:      "Deadly Scyther",
			drops:     ["Spectral Essence", "Spectral Hell Essence", "Spectral Wrappings"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "AdelzandeTower: Below"}],
			type:      "NM",
			race:      "Buffalo",
			family:    "Buffalo",
			name:      "The Emperor of the Buffalo",
			drops:     ["Bestial Bone Fragment", "Bestial Hoof", "Bestial Horn"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"}],
			type:      "NM",
			race:      "Eye",
			family:    "Gazer",
			name:      "Devilish Gazer",
			drops:     ["Malicious Antenna", "Malicious Evolved Core", "Malicious Eye"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"}],
			type:      "NM",
			race:      "Golem",
			family:    "Disaster",
			name:      "Walking Disaster",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"}],
			type:      "M",
			race:      "Golem",
			family:    "Rejecter",
			name:      "Deployed Rejecter",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"}],
			type:      "M",
			race:      "Golem",
			family:    "Rejecter",
			name:      "Deployed Rejector",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"}
			],
			type:      "M",
			race:      "Knight",
			family:    "Guardian Armor",
			name:      "Living Guardian Armor",
			drops:     ["Demonic Claw", "Demonic Remains"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "AdelzandeTower: Lower"}],
			type:      "M",
			race:      "Sentry",
			family:    "Rejecter",
			name:      "Emergency Rejecter",
			drops:     [
				"Crystal of Light", "Inanimate Chest Chunk", "Inanimate Head Chunk", "Inanimate Powerstone",
				"Luxurian Ore"
			]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Upper"}
			], type:   "M", race: "Beast", family: "Beast", name: "Tower Beast", drops: ["Bestial Mane", "Bestial Pelt"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"}],
			type:      "M",
			race:      "Beast",
			family:    "Loyal Beast",
			name:      "Loyal Beast",
			drops:     ["Bestial Mane", "Bestial Pelt", "Crystal of Light", "Luxurian Ore"]
		}, {
			locations: [
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"},
				{area: "Kurjiez Desert", stage: "AdelzandeTower: Upper"}, {area: "Aincrad", stage: "Unfinished Floor3"}
			],
			type:      "NM",
			race:      "Beast",
			family:    "Loyal Beast",
			name:      "Loyal Saberfang",
			drops:     ["Bestial Mane", "Bestial Pelt"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"}],
			type:      "NM",
			race:      "Golem",
			family:    "Enigma Machine",
			name:      "The Enigma Machine",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "AdelzandeTower: Middle"}],
			type:      "NM",
			race:      "Taurus",
			family:    "Taurus",
			name:      "Taurus Tower Keeper",
			drops:     ["Demihuman Claw", "Demihuman Fang", "Demihuman Rare Fang"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "AdelzandeTower: Upper"}],
			type:      "NM",
			race:      "Dragon",
			family:    "Dragon",
			name:      "Flare Dragon",
			drops:     ["Saurian Dragonscale"]
		}, {
			locations: [{area: "Kurjiez Desert", stage: "AdelzandeTower: Top"}],
			type:      "SNM",
			race:      "Taurus",
			family:    "Desert Boss",
			name:      "Taurus Grand Admiral",
			drops:     []
		}, {
			locations: [{area: "Kurjiez Desert", stage: "AdelzandeTower: Top"}],
			type:      "Boss",
			race:      "Taurus",
			family:    "Desert Boss",
			name:      "Abyss the Legate",
			drops:     []
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon"}],
			type:      "M",
			race:      "Golem",
			family:    "Golem ",
			name:      "Golem of Folly",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon"}],
			type:      "HNM",
			race:      "Golem",
			family:    "Golem ",
			name:      "The Confessor",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon"}],
			type:      "M",
			race:      "Knight",
			family:    "Dullahan",
			name:      "Deadly Dullahan",
			drops:     ["Demonic Claw", "Demonic Remains"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon"}],
			type:      "M",
			race:      "Reaper",
			family:    "Scyther",
			name:      "Blood Scyther",
			drops:     ["Spectral Essence", "Spectral Hell Essence", "Spectral Wrappings"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon"}],
			type:      "NM",
			race:      "Reaper",
			family:    "Scyther",
			name:      "Horifying Exorcist",
			drops:     ["Spectral Essence", "Spectral Hell Essence", "Spectral Wrappings"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Crab",
			family:    "Crab",
			name:      "Needlespike Crab",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Crab",
			family:    "Crab",
			name:      "Poisonous Needlespike Crab",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Crab",
			family:    "Crab",
			name:      "Swell Hand Crab",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Crab",
			family:    "Scissors",
			name:      "Bigclaw Scissors",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Golem",
			family:    "Automaton",
			name:      "Jeweled Automaton",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Slime",
			family:    "Jam",
			name:      "Emerald Jam",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Slime",
			family:    "Jam",
			name:      "Shpphire Jam",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "NM",
			race:      "Slime",
			family:    "Jam",
			name:      "Crystal Jammer",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Slime",
			family:    "Melt",
			name:      "Emerald Melt",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Slime",
			family:    "Melt",
			name:      "Spphire Melt",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "NM",
			race:      "Slime",
			family:    "The Slime Twins",
			name:      "The Slime Twins: Gloppacool",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "NM",
			race:      "Slime",
			family:    "The Slime Twins",
			name:      "The Slime Twins: Healomatic",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Squide",
			family:    "Aether Flutter",
			name:      "Aether Flutter",
			drops:     ["Amorphous Cell", "Amorphous Nucleus", "Amorphous Tentacle"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Squide",
			family:    "Aether Flutter",
			name:      "Giant Aether Flutter",
			drops:     ["Amorphous Cell", "Amorphous Nucleus", "Amorphous Tentacle"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Squide",
			family:    "Jelly",
			name:      "Hopping Jelly",
			drops:     ["Amorphous Cell", "Amorphous Nucleus", "Amorphous Tentacle"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Squide",
			family:    "Jelly",
			name:      "Rainwater Jelly",
			drops:     ["Amorphous Cell", "Amorphous Nucleus", "Amorphous Tentacle"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Tortoise",
			family:    "Tortoise",
			name:      "Big Green Tortoise",
			drops:     ["Saurian Bone Fragment", "Saurian Claw"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Tortoise",
			family:    "Tortoise",
			name:      "Dynamic Green Tortoise",
			drops:     ["Saurian Bone Fragment", "Saurian Claw"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia"}],
			type:      "M",
			race:      "Tortoise",
			family:    "Tortoise",
			name:      "Snapping Black Tortoise",
			drops:     ["Saurian Bone Fragment", "Saurian Claw"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
				{area: "Aincrad", stage: "Unfinished Floor3"}
			],
			type:      "M",
			race:      "Knight",
			family:    "Ghost Knight",
			name:      "Ghost of a Just Knight",
			drops:     ["Demonic Claw", "Demonic Remains"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"}
			], type:   "M", race: "Other", family: "Fairy", name: "Anima Fairy", drops: []
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"}
			],
			type:      "M",
			race:      "Reaper",
			family:    "Scyther",
			name:      "Bloody Scyther",
			drops:     ["Spectral Essence", "Spectral Hell Essence", "Spectral Wrappings"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"}],
			type:      "M",
			race:      "Reaper",
			family:    "Styther",
			name:      "Fatal Syther",
			drops:     ["Spectral Essence", "Spectral Hell Essence", "Spectral Wrappings"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"}],
			type:      "M",
			race:      "Scorpion",
			family:    "Scorpion",
			name:      "Digging Scorpion",
			drops:     ["Crustacean Claw", "Crustacean Leg"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"}],
			type:      "M",
			race:      "Skeleton",
			family:    "Skeleton",
			name:      "Skeleton Commander",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"},
				{area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Skeleton",
			family:    "Skeleton",
			name:      "Skeleton Mercenary",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"}],
			type:      "NM",
			race:      "Skeleton",
			family:    "Skeleton",
			name:      "Skeleton General",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia"}],
			type:      "M",
			race:      "Slime",
			family:    "Weapon Collector",
			name:      "Weapon Collector",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}],
			type:      "M",
			race:      "Beast",
			family:    "Beast",
			name:      "Dangerous Beast",
			drops:     ["Bestial Mane", "Bestial Pelt"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}],
			type:      "M",
			race:      "Golem",
			family:    "Doll",
			name:      "Alchemized Metal Doll",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}, {area: "Aincrad", stage: "Unfinished Path"},
				{area: "Aincrad", stage: "Unfinished Floor1"}
			],
			type:      "M",
			race:      "Golem",
			family:    "Doll",
			name:      "Iron Doll",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}],
			type:      "NM",
			race:      "Golem",
			family:    "Machine",
			name:      "Perpetual Wall Machine",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}],
			type:      "M",
			race:      "Gremlin",
			family:    "Marauder",
			name:      "Flying Marauder",
			drops:     ["Demonic Remains", "Demonic Retrix", "Demonic Wing"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}],
			type:      "M",
			race:      "Lizard",
			family:    "Lizard",
			name:      "Stamping Lizard",
			drops:     ["Bestial Pure Blood Crys.", "Saurian Claw", "Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}],
			type:      "M",
			race:      "Slime",
			family:    "Dravite",
			name:      "Dravite Jam",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}],
			type:      "M",
			race:      "Slime",
			family:    "Dravite",
			name:      "Dravite Melt",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Medius"}],
			type:      "M",
			race:      "Slime",
			family:    "Dravite",
			name:      "Dravite Slime",
			drops:     ["Amorphous Algae", "Amorphous Membrane", "Amorphous Primal Nucleus"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}],
			type:      "M",
			race:      "Bug",
			family:    "Bug",
			name:      "Ancient Bug",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"}
			],
			type:      "M",
			race:      "Eye",
			family:    "Eye",
			name:      "Amazing Eye",
			drops:     ["Malicious Antenna", "Malicious Evolved Core", "Malicious Eye"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"}
			],
			type:      "M",
			race:      "Eye",
			family:    "Eye",
			name:      "Fearsome Eye",
			drops:     ["Malicious Antenna", "Malicious Evolved Core", "Malicious Eye"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}],
			type:      "M",
			race:      "Eye",
			family:    "Eye",
			name:      "Searching Eye",
			drops:     ["Malicious Antenna", "Malicious Evolved Core", "Malicious Eye"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}],
			type:      "NM",
			race:      "Golem",
			family:    "Relic",
			name:      "Relic of the Ancients",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}],
			type:      "NM",
			race:      "Insect",
			family:    "Beetle",
			name:      "Beetle Queen",
			drops:     ["Insectoid Feeler", "Insectoid Gold Scale", "Insectoid Gold Wing", "Insectoid Simple Eye"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}],
			type:      "M",
			race:      "Insect",
			family:    "Chimera Beetle",
			name:      "Chimera Beetle",
			drops:     ["Insectoid Feeler", "Insectoid Gold Scale", "Insectoid Gold Wing", "Insectoid Simple Eye"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}],
			type:      "M",
			race:      "Insect",
			family:    "Chimera Beetle",
			name:      "Volcanic Chimera Beetle",
			drops:     ["Insectoid Feeler", "Insectoid Gold Scale", "Insectoid Gold Wing", "Insectoid Simple Eye"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}],
			type:      "M",
			race:      "Insect",
			family:    "Insectoid Crusher",
			name:      "Uber Insectoid Crusher",
			drops:     ["Insectoid Feeler", "Insectoid Gold Scale", "Insectoid Gold Wing", "Insectoid Simple Eye"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"}
			],
			type:      "M",
			race:      "Knight",
			family:    "Dullahan",
			name:      "Hellish Dullahan",
			drops:     ["Demonic Claw", "Demonic Remains"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}],
			type:      "NM",
			race:      "Treant",
			family:    "Imitation God",
			name:      "Imitation God",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}],
			type:      "M",
			race:      "Treant",
			family:    "Treant",
			name:      "Esteemed Treant",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}],
			type:      "M",
			race:      "Treant",
			family:    "Wood",
			name:      "Venerable Wood",
			drops:     ["Plant Bark", "Plant Bough", "Plant Petal"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}],
			type:      "M",
			race:      "Wasp",
			family:    "Imitation God",
			name:      "Puppet Wasp",
			drops:     ["Insectoid Exoskeleton", "Insectoid Gold Wing", "Insectoid Stinger"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}],
			type:      "M",
			race:      "Wasp",
			family:    "Needle Sentry",
			name:      "Elite Needle Sentry",
			drops:     ["Insectoid Exoskeleton", "Insectoid Gold Wing", "Insectoid Stinger"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}],
			type:      "M",
			race:      "Wasp",
			family:    "Vanquished Empress",
			name:      "Queenguard Wasp",
			drops:     ["Insectoid Exoskeleton", "Insectoid Gold Wing", "Insectoid Stinger"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Flail"}],
			type:      "M",
			race:      "Wasp",
			family:    "Vanquished Empress",
			name:      "The Vanquished Empress",
			drops:     ["Insectoid Exoskeleton", "Insectoid Gold Wing", "Insectoid Stinger"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"}],
			type:      "M",
			race:      "Bat",
			family:    "Bat",
			name:      "Vampire Bat",
			drops:     ["Demonic Claw", "Demonic Horn", "Demonic Pelt", "Demonic Remains"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"}
			],
			type:      "M",
			race:      "Demon",
			family:    "Pit Fiend",
			name:      "Pit Fiend Aggressor",
			drops:     ["Demonic Claw", "Demonic Pelt"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"}
			],
			type:      "M",
			race:      "Demon",
			family:    "Pit Fiend",
			name:      "Pit Fiend Assailant",
			drops:     ["Demonic Claw", "Demonic Pelt"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"}
			],
			type:      "M",
			race:      "Knight",
			family:    "Dullahan",
			name:      "Grim Dullahan",
			drops:     ["Demonic Claw", "Demonic Remains"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"}
			],
			type:      "M",
			race:      "Knight",
			family:    "Ghost Knight",
			name:      "Ghost of a Brave Knight",
			drops:     ["Demonic Claw", "Demonic Remains"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"}],
			type:      "NM",
			race:      "Knight",
			family:    "Knight",
			name:      "Vengeful Knight",
			drops:     ["Demonic Claw", "Demonic Remains"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
				{area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Reaper",
			family:    "Psychotic Priest",
			name:      "Psychotic Priest of Greed",
			drops:     ["Spectral Essence", "Spectral Hell Essence", "Spectral Wrappings"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"}
			],
			type:      "M",
			race:      "Reaper",
			family:    "Psychotic Priest",
			name:      "Psychotic Priest of Wrath",
			drops:     ["Spectral Essence", "Spectral Hell Essence", "Spectral Wrappings"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"}],
			type:      "M",
			race:      "Reaper",
			family:    "Scyther",
			name:      "Fatal Scyther",
			drops:     ["Spectral Essence", "Spectral Hell Essence", "Spectral Wrappings"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"}],
			type:      "M",
			race:      "Sentry",
			family:    "Devilish",
			name:      "Devilish Familiar",
			drops:     ["Inanimate Chest Chunk", "Inanimate Head Chunk", "Inanimate Powerstone"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"}],
			type:      "M",
			race:      "Sentry",
			family:    "Devilish",
			name:      "Devilish Servant",
			drops:     ["Inanimate Chest Chunk", "Inanimate Head Chunk", "Inanimate Powerstone"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
				{area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Skeleton",
			family:    "Commandaer",
			name:      "Skeleton Commandaer",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"}],
			type:      "NM",
			race:      "Skeleton",
			family:    "Legendary Fencer",
			name:      "Legendary Fencer",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
				{area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Skeleton",
			family:    "Skeleton",
			name:      "Elite Skeleton",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"}],
			type:      "M",
			race:      "Skeleton",
			family:    "Skeleton",
			name:      "Mythic Skeleton",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
				{area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Skeleton",
			family:    "Skull",
			name:      "Grave Skull",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"}],
			type:      "M",
			race:      "Succubus",
			family:    "Dread Devil",
			name:      "Dread Devil",
			drops:     ["Demonic Horn", "Demonic Retrix"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Illial Temple: Barracks"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
				{area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Succubus",
			family:    "Dread Devil",
			name:      "Dread Devil Banshee",
			drops:     ["Demonic Horn", "Demonic Retrix"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Lift"}],
			type:      "M",
			race:      "Dragon",
			family:    "Atomic Dragon",
			name:      "Atomic Dragon",
			drops:     [
				"Saurian Dragonbone", "Saurian Dragonclaw", "Saurian Dragoneye", "Saurian Dragonjaw",
				"Saurian Dragonscale"
			]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Lift"}],
			type:      "M",
			race:      "Eye",
			family:    "Summoned",
			name:      "Summoned Gazer",
			drops:     ["Malicious Antenna", "Malicious Evolved Core", "Malicious Eye"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"},
				{area: "Aincrad", stage: "Unfinished Floor1"}, {area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Knight",
			family:    "Living Armor",
			name:      "Living Knight Armor",
			drops:     ["Demonic Claw", "Demonic Remains"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"},
				{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"}
			],
			type:      "M",
			race:      "Knight",
			family:    "Seeker",
			name:      "Corpse Seeker",
			drops:     ["Demonic Claw", "Demonic Remains"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Lift"}],
			type:      "M",
			race:      "Other",
			family:    "Atomic Dragon",
			name:      "Crystal",
			drops:     []
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Lift"}],
			type:      "NM",
			race:      "Other",
			family:    "Soul",
			name:      "Sanctuary Soul",
			drops:     []
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Lift"}],
			type:      "M",
			race:      "Other",
			family:    "Summoned",
			name:      "Summoning Machine",
			drops:     []
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Lift"}],
			type:      "M",
			race:      "Scourge",
			family:    "Summoned",
			name:      "Summoned Devourer",
			drops:     ["Malicious Fluid", "Malicious Skin"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Illial Temple: Lift"}, {area: "Aincrad", stage: "Unfinished Floor2"}
			],
			type:      "M",
			race:      "Skeleton",
			family:    "Skeleton",
			name:      "Skeleton Sergeant",
			drops:     ["Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"}],
			type:      "NM",
			race:      "Knight",
			family:    "Knight",
			name:      "The Blade of Destiny",
			drops:     ["Demonic Claw", "Demonic Remains"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"}],
			type:      "M",
			race:      "Knight",
			family:    "Seeker",
			name:      "Flesh Seeker",
			drops:     ["Demonic Claw", "Demonic Remains"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"}],
			type:      "NM",
			race:      "Knight",
			family:    "Seeker",
			name:      "Duel Seeker",
			drops:     ["Demonic Claw", "Demonic Remains"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Illial Temple: Sage Hall"}],
			type:      "NM",
			race:      "Knight",
			family:    "Seeker",
			name:      "Duel Seeker Ignatius",
			drops:     ["Demonic Claw", "Demonic Remains"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Path"}],
			type:      "NM",
			race:      "Sentry",
			family:    "Guardian",
			name:      "Guardian Reinforcement",
			drops:     ["Inanimate Chest Chunk", "Inanimate Head Chunk", "Inanimate Powerstone"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor1"}],
			type:      "M",
			race:      "Golem",
			family:    "Crystal Golem",
			name:      "Crystal Automaton",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor1"}],
			type:      "NM",
			race:      "Golem",
			family:    "Crystal Golem",
			name:      "Crystalline Altar",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor1"}],
			type:      "M",
			race:      "Golem",
			family:    "Golem",
			name:      "Order of Loyalty Golem",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor1"}],
			type:      "NM",
			race:      "Golem",
			family:    "Golem",
			name:      "Order of Wisdom Golem",
			drops:     ["Inanimate Arm Chunk", "Inanimate Core", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor1"}],
			type:      "M",
			race:      "Sentry",
			family:    "Fiendish  Sentry",
			name:      "Fiendish Guardian",
			drops:     ["Inanimate Chest Chunk", "Inanimate Head Chunk", "Inanimate Powerstone"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor1"}],
			type:      "M",
			race:      "Sentry",
			family:    "Fiendish  Sentry",
			name:      "Fiendish Necromancer",
			drops:     ["Inanimate Chest Chunk", "Inanimate Head Chunk", "Inanimate Powerstone"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor1"}],
			type:      "M",
			race:      "Sentry",
			family:    "Fiendish  Sentry",
			name:      "Fiendish Striker",
			drops:     ["Inanimate Chest Chunk", "Inanimate Head Chunk", "Inanimate Powerstone"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor2"}],
			type:      "M",
			race:      "Demon",
			family:    "Chaos Devil",
			name:      "Chaos Devil Destroyer",
			drops:     ["Demonic Claw", "Demonic Pelt"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor2"}],
			type:      "NM",
			race:      "Succubus",
			family:    "Combat Freaker",
			name:      "Combat Freaker",
			drops:     ["Demonic Horn", "Demonic Retrix"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor3"}],
			type:      "Boss",
			race:      "Dragon",
			family:    "Dragon",
			name:      "Divine Dragon",
			drops:     [
				"Saurian Dragonbone", "Saurian Dragonclaw", "Saurian Dragoneye", "Saurian Dragonjaw",
				"Saurian Dragonscale"
			]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor3"}],
			type:      "M",
			race:      "Gremlin",
			family:    "Cleaver",
			name:      "Sky Cleaver",
			drops:     ["Demonic Remains", "Demonic Retrix", "Demonic Wing"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor3"}],
			type:      "M",
			race:      "Gremlin",
			family:    "Cleaver",
			name:      "Space Cleaver",
			drops:     ["Demonic Remains", "Demonic Retrix", "Demonic Wing"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor3"}],
			type:      "NM",
			race:      "Gremlin",
			family:    "Flesh Eater",
			name:      "Flesh Eater",
			drops:     ["Aetherial Ore", "Demonic Remains", "Demonic Retrix", "Demonic Wing"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor3"}],
			type:      "M",
			race:      "Insect",
			family:    "Mantis",
			name:      "Holding Mantis",
			drops:     ["Insectoid Feeler", "Insectoid Gold Scale", "Insectoid Gold Wing", "Insectoid Simple Eye"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor3"}],
			type:      "M",
			race:      "Insect",
			family:    "Mantis",
			name:      "Squeezing Mantis",
			drops:     ["Insectoid Feeler", "Insectoid Gold Scale", "Insectoid Gold Wing", "Insectoid Simple Eye"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor3"}],
			type:      "M",
			race:      "Scorpion",
			family:    "Stinger",
			name:      "Crystal Stinger",
			drops:     ["Crustacean Claw", "Crustacean Leg"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor3"}],
			type:      "M",
			race:      "Scorpion",
			family:    "Stinger",
			name:      "Mineral Stinger",
			drops:     ["Crustacean Claw", "Crustacean Leg"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor3"}],
			type:      "M",
			race:      "Scorpion",
			family:    "Stinger",
			name:      "Stone Stinger",
			drops:     ["Crustacean Claw", "Crustacean Leg"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor3"}],
			type:      "M",
			race:      "Scourge",
			family:    "Uberbeast",
			name:      "Wriggling Larva",
			drops:     ["Malicious Fluid", "Malicious Skin"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor3"}],
			type:      "M",
			race:      "Scourge",
			family:    "Uberbeast",
			name:      "Wriggling Worm",
			drops:     ["Malicious Fluid", "Malicious Skin"]
		}, {
			locations: [{area: "Aincrad", stage: "Unfinished Floor3"}],
			type:      "NM",
			race:      "Scourge",
			family:    "Uberbeast",
			name:      "The Uberbeast",
			drops:     ["Malicious Fluid", "Malicious Skin"]
		}
	]
};