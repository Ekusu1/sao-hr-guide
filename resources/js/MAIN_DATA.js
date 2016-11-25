var OPTIONS   = {
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
			"":             0,
			"1H Sword":     1,
			Rapier:         2,
			Scimitar:       3,
			Dagger:         4,
			"1H Club":      5,
			Shield:         6,
			Katana:         7,
			"2H Sword":     8,
			"2H Axe":       9,
			Spear:          10,
			Head:           11,
			"Body/Armor":   12,
			"Legs/Greaves": 13,
			Neck:           14,
			Wrist:          15,
			"Ring/Finger":  16,
			Waist:          17,
			Charm:          18,
			Medicine:       19,
			Crystal:        20,
			Material:       21,
			Ore:            22,
			Sellable:       23,
			Event:          24,
			"ADD-ON":       25
		},
		itemRarity:  {"": 0, Normal: 1, Purple: 2, Blue: 3, Green: 4},
		chestRarity: {"": 0, Brown: 1, Blue: 2, Red: 3, Silver: 4, Gold: 5},
		monsterType: {"": 0, M: 1, MS: 2, NM: 3, HNM: 4, Boss: 5}
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
		"Head", "Body/Armor", "Legs/Greaves", "Neck", "Wrist", "Ring/Finger", "Waist", "Charm"
	],
	itemTypeOther:         ["", "Medicine", "Crystal", "Material", "Ore", "Sellable", "Event", "ADD-ON"],
	itemRarity:            ["", "Normal", "Purple", "Blue", "Green"],
	chestRarity:           ["", "Brown", "Blue", "Red", "Silver", "Gold"],
	monsterType:           ["", "M", "MS", "NM", "HNM", "Boss"],
	monsterRace:           [
		"", "Boar", "Beast", "Wasp", "Insect", "Crab", "Scorpion", "Treant", "Plant", "Tortoise", "Lizard", "Dragon",
		"Slime", "Squide", "Reaper", "Skeleton", "Golem", "Knight", "Taurus", "Eye", "Flame"
	],
	monsterRaceDropPrefix: {
		"":       "",
		Boar:     "Bestial",
		Beast:    "Bestial",
		Wasp:     "Insectoid",
		Insect:   "Insectoid",
		Crab:     "Crustacean",
		Scorpion: "Crustacean",
		Treant:   "Plant",
		Plant:    "Plant",
		Tortoise: "Saurian",
		Lizard:   "Saurian",
		Dragon:   "Saurian",
		Slime:    "Amorphous",
		Squide:   "Amorphous",
		Reaper:   "Spectral",
		Skeleton: "Spectral",
		Golem:    "Inanimate",
		Knight:   "Demonic",
		Taurus:   "",
		Eye:      ""
	},
	monsterRaceDrops:      {
		"":       [],
		Wasp:     ["Insectoid Exoskeleton", "Insectoid Stinger"],
		Insect:   ["Insectoid Feeler"],
		Golem:    ["Inanimate Arm Chunk", "Inanimate Leg Chunk"],
		Knight:   ["Demonic Claw"],
		Boar:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"],
		Beast:    ["Bestial Mane"],
		Treant:   ["Plant Bark", "Plant Bough"],
		Plant:    ["Plant Chloroplast", "Plant Pod"],
		Tortoise: ["Saurian Bone Fragment", "Saurian Claw"],
		Slime:    ["Amorphous Algae", "Amorphous Membrane"],
		Squide:   ["Amorphous Cell", "Amorphous Tentacle"],
		Reaper:   ["Spectral Essence", "Spectral Wrappings"],
		Skeleton: ["Spectral Armor Fragment", "Spectral Femur Fragment"],
		Crab:     ["Crustacean Pincer", "Crustacean Soft Shell"],
		Scorpion: ["Crustacean Claw", "Crustacean Leg"],
		Lizard:   ["Saurian Fang", "Saurian Jaw"],
		Dragon:   [],
		Taurus:   [],
		Eye:      [],
		Flame:    []
	},
	baseEffect:            [
		"ATK", "DEF", "HP", "SP", "STR", "VIT", "AGI", "DEX", "Slashing", "Thrusting", "Crushing", "Knockdown", "Stun",
		"Numb", "Poison", "Bleed", "Physical", "Soul", "Debuff"
	],
	gearEffect:            ["", "Damage Reduction %"],
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
		"", "Iron Ore", "Aincrite Ore", "Bluesteel Ore", "Darantite Ore", "Silver Ore", "The MurmurStone",
		"Platinum Ore", "Adamantite Ore", "Blackguard's Amethyst", "Aetherial Ore", "Luxurian Ore", "Crystal of Light",
		"Dark Crystal"
	],
	itemMaterial:          [
		"", "Amorphous", "Amorphous Algae", "Amorphous Barb", "Amorphous Cell", "Amorphous Membrane",
		"Amorphous Nucleus", "Amorphous Plastid", "Amorphous Primal Nucleus", "Amorphous Tentacle", "Bestial",
		"Bestial Bone Fragment", "Bestial Fang", "Bestial Hoof", "Bestial Horn", "Bestial Mane", "Bestial Pelt",
		"Bestial Pure Blood Crys.", "Bestial Tail", "Bestial Tusk", "Crustacean", "Crustacean Claw", "Crustacean Gills",
		"Crustacean Leg", "Crustacean Pincer", "Crustacean Robust Gills", "Crustacean Robust Shell",
		"Crustacean Soft Shell", "Demihuman", "Demihuman Armor Scrap", "Demihuman Bone Fragment", "Demihuman Claw",
		"Demihuman Fang", "Demihuman Weapon Scrap", "Demonic", "Demonic Claw", "Demonic Horn", "Demonic Pelt",
		"Demonic Remains", "Demonic Retrix", "Demonic Wing", "Demonic Wings", "Inanimate", "Inanimate Arm Chunk",
		"Inanimate Chest Chunk", "Inanimate Core", "Inanimate Head Chunk", "Inanimate Leg Chunk",
		"Inanimate Powerstone", "Insectoid", "Insectoid Exoskeleton", "Insectoid Feeler", "Insectoid Gold Scale",
		"Insectoid Gold Wing", "Insectoid Simple Eye", "Insectoid Soft Shell", "Insectoid Stinger",
		"Mal. Pris. Blood Crystal", "Malicious", "Malicious Antenna", "Malicious Evolved Core", "Malicious Eye",
		"Malicious Fluid", "Malicious Skin", "Plant", "Plant Bark", "Plant Bough", "Plant Chloroplast", "Plant Pod",
		"Saurian", "Saurian Bone Fragment", "Saurian Claw", "Saurian Dragon Eye", "Saurian Dragonbone",
		"Saurian Dragonscale", "Saurian Fang", "Saurian Jaw", "Saurian Pair of Eyes", "Spectral",
		"Spectral Armor Fragment", "Spectral Defiled Essence", "Spectral Essence", "Spectral Femur Fragment",
		"Spectral Hell Essence", "Spectral Weapon Fragment", "Spectral Wrappings"
	]
};
var MAIN_DATA = {
	gear:    [
		{
			name:    "Ain Restorer",
			type:    "1H Sword",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Stone Carver",
			type:    "1H Sword",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Vulcan Blade",
			type:    "1H Sword",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Mercenary Sword",
			type:    "1H Sword",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Valiant Rapier",
			type:    "Rapier",
			rarity:  "Purple",
			stars:   "1",
			effects: [
				{name: "ATK", value: 112, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 4, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: -4, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:    "Celestial Fleuret",
			type:    "Rapier",
			rarity:  "Purple",
			stars:   "2",
			effects: [
				{name: "ATK", value: 30, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 8, baseStat: true},
				{name: "STR", value: 1, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:    "Calm Foil",
			type:    "Rapier",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Cardinal Ray",
			type:    "Rapier",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Feather Thruster",
			type:    "Rapier",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Controlled Reaver",
			type:    "Scimitar",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Flexed Edge",
			type:    "Scimitar",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Moonstruck Saber",
			type:    "Scimitar",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Weiss Scimitar",
			type:    "Scimitar",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Raptor Saber",
			type:    "Scimitar",
			rarity:  "Purple",
			stars:   "5",
			effects: [
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
			name:    "Royal Defender",
			type:    "Dagger",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Talon Knife",
			type:    "Dagger",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Assassin's Gale",
			type:    "Dagger",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Garuda Edge",
			type:    "Dagger",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Howling Beater",
			type:    "1H Club",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Maximum Impact",
			type:    "1H Club",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Rage Diffuser",
			type:    "1H Club",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Innocent Shell",
			type:    "Shield",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Deep Shell",
			type:    "Shield",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Aegis Guard",
			type:    "Shield",
			rarity:  "Purple",
			stars:   "3",
			effects: [
				{name: "ATK", value: "24", baseStat: true}, {name: "DEF", value: "4", baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: "8", baseStat: true},
				{name: "DEX", value: "-7", baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}, {name: "Damage Reduction %", value: "9", baseStat: false}
			]
		}, {
			name:    "Dark Moon Buckler",
			type:    "Shield",
			rarity:  "Purple",
			stars:   "4",
			effects: [
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
			name:    "Shell Buckler",
			type:    "Shield",
			rarity:  "Purple",
			stars:   "4",
			effects: [
				{name: "ATK", value: 88, baseStat: true}, {name: "DEF", value: 25, baseStat: true},
				{name: "HP", value: 0, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: -2, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 0, baseStat: true}, {name: "AGI", value: 14, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:    "Chevalier Guard",
			type:    "Shield",
			rarity:  "Purple",
			stars:   "5",
			effects: [
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
			name:    "Okisho-Garasu",
			type:    "Katana",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Ukide-Gumo",
			type:    "Katana",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Hidoh",
			type:    "Katana",
			rarity:  "Purple",
			stars:   "3",
			effects: [
				{name: "ATK", value: 134, baseStat: true}, {name: "DEF", value: 0, baseStat: true},
				{name: "HP", value: 1600, baseStat: true}, {name: "SP", value: 0, baseStat: true},
				{name: "STR", value: 0, baseStat: true}, {name: "VIT", value: 0, baseStat: true},
				{name: "DEX", value: 19, baseStat: true}, {name: "AGI", value: 0, baseStat: true},
				{name: "Slashing", value: 0, baseStat: false}, {name: "Thrusting", value: 0, baseStat: false},
				{name: "Crushing", value: 0, baseStat: false}, {name: "Knockdown", value: 0, baseStat: false},
				{name: "Stun", value: 0, baseStat: false}, {name: "Numb", value: 0, baseStat: false},
				{name: "Poison", value: 0, baseStat: false}, {name: "Bleed", value: 0, baseStat: false},
				{name: "Physical", value: 0, baseStat: false}, {name: "Soul", value: 0, baseStat: false},
				{name: "Debuff", value: 0, baseStat: false}
			]
		}, {
			name:    "Kogetsu",
			type:    "Katana",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Brute Force",
			type:    "2H Sword",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Raptor Blade",
			type:    "2H Sword",
			rarity:  "Purple",
			stars:   "5",
			effects: [
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
			name:    "Glowing Halberd",
			type:    "2H Axe",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Hail Chopper",
			type:    "2H Axe",
			rarity:  "Purple",
			stars:   "4",
			effects: [
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
			name:    "Altered Pike",
			type:    "Spear",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Ignition Lance",
			type:    "Spear",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Outsider's Lance",
			type:    "Spear",
			rarity:  "Purple",
			stars:   "5",
			effects: [
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
			name:    "Ivory Earring",
			type:    "Head",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Rebuff Earring",
			type:    "Head",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Shade Earring",
			type:    "Head",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Lionel's Mail",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   0,
			effects: [
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
			name:    "Adamant Mail",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Akashic Plate",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Armadillo Madness",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Banishing Coat",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Chivalry Coat",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Clockwork Armor",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Darkness Mail",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Desperado Coat",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Dual Jacket",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Enabled Armor",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Exceed Coat",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Flame Armor",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Fractal Mail",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Galleon Armor",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Gemini Coat",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "General's Armor",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Mithril Plate",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Night Mail",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Nomad Armor",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Precarious Plate",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Proxy Coat",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Wild Thing",
			type:    "Body/Armor",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Ryonox Mail",
			type:    "Body/Armor",
			rarity:  "Blue",
			stars:   "1",
			effects: [
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
			name:    "Shapely Jacket",
			type:    "Body/Armor",
			rarity:  "Blue",
			stars:   "2",
			effects: [
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
			name:    "Wanderer's Armor",
			type:    "Body/Armor",
			rarity:  "Blue",
			stars:   "2",
			effects: [
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
			name:    "Ryonox Coat",
			type:    "Body/Armor",
			rarity:  "Blue",
			stars:   "4",
			effects: [
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
			name:    "Akashic Boots",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Boots of Banishing",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Boots of Excess",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Clockwork Shank",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Darkness Leggings",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Desperado Boots",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Dreadnought",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Flame Runner",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Fractal Leggings",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Galleon Greaves",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Gemini Sandals",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "General Greaves",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Lawless Boots",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Mithril Leggings",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Nomad's Greaves",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Proxy Boots",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Steadfast Leggings",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Viral Feet",
			type:    "Legs/Greaves",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Wulfen Boots",
			type:    "Legs/Greaves",
			rarity:  "Blue",
			stars:   "1",
			effects: [
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
			name:    "Aura Drops",
			type:    "Neck",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Reward Chain",
			type:    "Neck",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Paradise Chocker",
			type:    "Neck",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Vital Chain",
			type:    "Neck",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Garnet Choker",
			type:    "Neck",
			rarity:  "Purple",
			stars:   "4",
			effects: [
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
			name:    "Daisy Pendant",
			type:    "Neck",
			rarity:  "Purple",
			stars:   "5",
			effects: [
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
			name:    "Jewelry Bangle",
			type:    "Wrist",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Power Armlet",
			type:    "Wrist",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Spell Braeclet",
			type:    "Wrist",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Wise Bracelet",
			type:    "Wrist",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Heat Haze Bracelet",
			type:    "Wrist",
			rarity:  "Purple",
			stars:   "4",
			effects: [
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
			name:    "Royal Bangle",
			type:    "Wrist",
			rarity:  "Purple",
			stars:   "5",
			effects: [
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
			name:    "Burst Ring",
			type:    "Ring/Finger",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Electrum Ring",
			type:    "Ring/Finger",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Nocturne Ring",
			type:    "Ring/Finger",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Euphoria Ring",
			type:    "Ring/Finger",
			rarity:  "Purple",
			stars:   "4",
			effects: [
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
			name:    "Sierra Ring",
			type:    "Ring/Finger",
			rarity:  "Purple",
			stars:   "4",
			effects: [
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
			name:    "Stigma Ring",
			type:    "Ring/Finger",
			rarity:  "Purple",
			stars:   "4",
			effects: [
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
			name:    "Corset of Life",
			type:    "Waist",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Fury Belt",
			type:    "Waist",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Phantasm Belt",
			type:    "Waist",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Jinn Waistcoat",
			type:    "Waist",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Reboot Belt",
			type:    "Waist",
			rarity:  "Purple",
			stars:   "4",
			effects: [
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
			name:    "Remove Bangle",
			type:    "Waist",
			rarity:  "Purple",
			stars:   "4",
			effects: [
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
			name:    "Demon's Cord",
			type:    "Waist",
			rarity:  "Purple",
			stars:   "5",
			effects: [
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
			name:    "Freesia Belt",
			type:    "Waist",
			rarity:  "Purple",
			stars:   "5",
			effects: [
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
			name:    "Karma Belt",
			type:    "Waist",
			rarity:  "Purple",
			stars:   "5",
			effects: [
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
			name:    "Belt of Metatron",
			type:    "Waist",
			rarity:  "Blue",
			stars:   "1",
			effects: [
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
			name:    "Talisman of Ares",
			type:    "Charm",
			rarity:  "Purple",
			stars:   "1",
			effects: [
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
			name:    "Remembrance",
			type:    "Charm",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Tranquiliezer",
			type:    "Charm",
			rarity:  "Purple",
			stars:   "2",
			effects: [
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
			name:    "Brighteness Ank",
			type:    "Charm",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Daydream Ank",
			type:    "Charm",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Memorial Charm",
			type:    "Charm",
			rarity:  "Purple",
			stars:   "3",
			effects: [
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
			name:    "Talisman of Eternal Joy",
			type:    "Charm",
			rarity:  "Purple",
			stars:   "4",
			effects: [
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
			name:    "Freye's Charm",
			type:    "Charm",
			rarity:  "Purple",
			stars:   "5",
			effects: [
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
		}
	],
	chests:  [
		{
			location: {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Right",
			item:     "Paradise Chocker"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Left",
			item:     "Sierra Ring"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Extra Boar Commander",
			item:     "Vulcan Blade"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "E: Vengeful Spirit",
			item:     "Celestial Fleuret"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Events",
			item:     "Aegis Guard"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Top",
			item:     ""
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Jinn Waistcoat"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Violet Thorn",
			item:     "Weiss Scimitar"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: 0, lvMax: 0},
			rarity:   "Silver",
			where:    "E: Ever-Growing Anger",
			item:     "Shapely Jacket"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Left",
			item:     "Lionel's Mail"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Right",
			item:     "Royal Bangle"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Left",
			item:     "Freye's Charm"
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: King Claw, Lord of the Lake",
			item:     "Garuda Edge"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Mee Forest", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Top",
			item:     "Enabled Armor"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Mee Forest", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Flame Runner"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Mee Forest", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Burst Ring"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Mee Forest", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Top",
			item:     "Memorial Charm"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Mee Forest", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Miracle Heart",
			item:     "Deep Shell"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Lokitalluh Ascent", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Top",
			item:     "Dual Jacket"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Lokitalluh Ascent", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Flame Armor"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Lokitalluh Ascent", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Daisy Pendant"
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Lokitalluh Ascent", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Forest Dragon",
			item:     "Raptor Saber"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Lynex Waterway", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Top",
			item:     "Darkness Mail"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Lynex Waterway", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Ivory Earring"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Lynex Waterway", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Remove Bangle"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Lynex Waterway", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Top",
			item:     ""
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Lynex Waterway", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Vorpal Edge",
			item:     "Rage Diffuser"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Right",
			item:     "Nomad Armor"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Nomad's Greaves"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Remembrance"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Top",
			item:     ""
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Shock Tank",
			item:     "Stone Carver"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "E: Pricy Prey",
			item:     "Hail Chopper"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Marceiville Water Caves", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Top",
			item:     "Proxy Coat"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Marceiville Water Caves", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Right",
			item:     "Reward Chain"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Marceiville Water Caves", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Left",
			item:     "Corset of Life"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Marceiville Water Caves", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Jiggling Lime",
			item:     "Cardinal Ray"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Right",
			item:     "Fractal Mail"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Left",
			item:     "Proxy Boots"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Right",
			item:     ""
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Left",
			item:     "Nocturne Ring"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "E: An Unwelcoming Forest",
			item:     "Okisho-Garasu"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Rouge Needle Striker",
			item:     "Brute Force"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Paffati Hall", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Right",
			item:     "Adamant Mail"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Paffati Hall", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Left",
			item:     "Desperado Coat"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Paffati Hall", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Right",
			item:     "Vital Chain"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Paffati Hall", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Left",
			item:     ""
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Paffati Hall", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Ten-Ton Tortoise",
			item:     "Ukide-Gumo"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Paffati Hall", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "\"Events\"",
			item:     "Howling Beater"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Ellaider Geothermal Lake", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Top",
			item:     "Darkness Leggings"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Ellaider Geothermal Lake", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Galleon Greaves"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Ellaider Geothermal Lake", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Right",
			item:     "Reboot Belt"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Ellaider Geothermal Lake", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Left",
			item:     ""
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Ellaider Geothermal Lake", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Noxious Colony",
			item:     "Altered Pike"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Desperado Boots"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Top",
			item:     "Fractal Leggings"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Left",
			item:     ""
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Right",
			item:     ""
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "Events",
			item:     "Chevalier Guard"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Berserk Treant",
			item:     "Mercenary Sword"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Top",
			item:     "Steadfast Leggings"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "General Greaves"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Left",
			item:     "Wise Bracelet"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Right",
			item:     "Daydream Ank"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Queen of the Water Forest",
			item:     "Flexed Edge"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "Events",
			item:     "Calm Foil"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Right",
			item:     "Shade Earring"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Left",
			item:     "Boots of Excess"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Heat Haze Bracelet"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Top",
			item:     "Garnet Choker"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: The Clairvoyant Abyss",
			item:     "Glowing Halberd"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cedol Lake", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Left",
			item:     "Exceed Coat"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cedol Lake", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Right",
			item:     "Galleon Armor"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cedol Lake", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Top",
			item:     "Phantasm Belt"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cedol Lake", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Euphoria Ring"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cedol Lake", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Grand Guardian Machine",
			item:     "Ignition Lance"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fernaste Park", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Left",
			item:     "Akashic Plate"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fernaste Park", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Right",
			item:     "Clockwork Shank"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fernaste Park", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Top",
			item:     "Fury Belt"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fernaste Park", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Bottom",
			item:     ""
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fernaste Park", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Elder Dragon",
			item:     "Outsider's Lance"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden", lvMin: 0, lvMax: 0},
			rarity:   "",
			where:    "E: An Evil Confluence",
			item:     "Ryonox Coat"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Boots of Banishing"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Top",
			item:     "General's Armor"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Right",
			item:     "Tranquiliezer"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Left",
			item:     "Power Armlet"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "E: From Darkness",
			item:     "Ain Restorer"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Drunken Nepenthe",
			item:     "Maximum Impact"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden", lvMin: 0, lvMax: 0},
			rarity:   "",
			where:    "E: A Tenacious Blade",
			item:     "Ryonox Mail"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Left",
			item:     "Clockwork Armor"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Right",
			item:     "Chivalry Coat"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Freesia Belt"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Top",
			item:     "Brighteness Ank"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Darkmist Virus",
			item:     "Kogetsu"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "E: Knight on the Edge",
			item:     "Controlled Reaver"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden", lvMin: 0, lvMax: 0},
			rarity:   "",
			where:    "E: The Summoned Dragon",
			item:     ""
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Mithril Plate"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Top",
			item:     "Mithril Leggings"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Left",
			item:     "Stigma Ring"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Right",
			item:     ""
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "E: Wings of the Protector",
			item:     "Talon Knife"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Life Force Treant",
			item:     "Feather Thruster"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden", lvMin: 0, lvMax: 0},
			rarity:   "",
			where:    "E: Lust for Life",
			item:     "Wulfen Boots"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Top",
			item:     "Banishing Coat"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Akashic Boots"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Right",
			item:     "Spell Braeclet"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Left",
			item:     "Electrum Ring"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "E: Abhorred by Nature",
			item:     "Innocent Shell"
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Ultimate Arcane Construct",
			item:     "Raptor Blade"
		}, {
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Left",
			item:     "Armadillo Madness"
		}, {
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Right",
			item:     "Lawless Boots"
		}, {
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Left",
			item:     ""
		}, {
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Right",
			item:     ""
		}, {
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "E: Thirsty Trees",
			item:     "Assassin's Gale"
		}, {
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: The Lizard King of the Sands",
			item:     "Hidoh"
		}, {
			location: {area: "Kurjiez Desert", stage: "Alle Fioro", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Top",
			item:     "Gemini Coat"
		}, {
			location: {area: "Kurjiez Desert", stage: "Alle Fioro", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Gemini Sandals"
		}, {
			location: {area: "Kurjiez Desert", stage: "Alle Fioro", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Top",
			item:     "Talisman of Eternal Joy"
		}, {
			location: {area: "Kurjiez Desert", stage: "Alle Fioro", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Bottom",
			item:     ""
		}, {
			location: {area: "Kurjiez Desert", stage: "Alle Fioro", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Scorching Taurus Buster",
			item:     "Shell Buckler"
		}, {
			location: {area: "Kurjiez Desert", stage: "Northern Ultana Desert", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Left",
			item:     "Wild Thing"
		}, {
			location: {area: "Kurjiez Desert", stage: "Northern Ultana Desert", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Left",
			item:     ""
		}, {
			location: {area: "Kurjiez Desert", stage: "Northern Ultana Desert", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Right",
			item:     "Jewelry Bangle"
		}, {
			location: {area: "Kurjiez Desert", stage: "Northern Ultana Desert", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Red Sun Stinger",
			item:     "Valiant Rapier"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Top",
			item:     ""
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Bottom",
			item:     "Talisman of Ares"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Horifying Exorcist",
			item:     "Royal Defender"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Precarious Plate"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Top",
			item:     "Viral Feet"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Bottom",
			item:     ""
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Top",
			item:     "Karma Belt"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: The Slime Twins",
			item:     "Moonstruck Saber"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Bottom",
			item:     "Night Mail"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: 0, lvMax: 0},
			rarity:   "Brown",
			where:    "Top",
			item:     "Dreadnought"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Left",
			item:     "Demon's Cord"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: 0, lvMax: 0},
			rarity:   "Blue",
			where:    "Right",
			item:     "Aura Drops"
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: 0, lvMax: 0},
			rarity:   "Red",
			where:    "NM: Skeleton General",
			item:     "Dark Moon Buckler"
		}
	],
	events:  [
		{
			location: {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Sacred Tree's Revolt",
			lv:       "",
			goals:    [{type: "Kill", name: "Spectral Treant", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 0}]
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Boarish Intruders",
			lv:       3,
			goals:    [{type: "Kill", name: "Wild Glutton", amount: 5}],
			rewards:  [{type: "EXP", name: "EXP", amount: 50}, {type: "Item", name: "Bluesteel Ore", amount: 1}]
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Lake Pinchers",
			lv:       "4",
			goals:    [{type: "Kill", name: "Water Seeker", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: "60"}, {type: "Item", name: "Darantite Ore", amount: "1"}]
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Vengeful Spirit",
			lv:       10,
			goals:    [{type: "Kill", name: "Grudge Ghost Treant", amount: 1}],
			rewards:  [
				{type: "EXP", name: "EXP", amount: 100}, {type: "Item", name: "Aincrite Ore", amount: 2},
				{type: "Chest", name: "Red", amount: 1}
			]
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Sting",
			lv:       "4",
			goals:    [{type: "Kill", name: "Assault Wasp", amount: "7"}],
			rewards:  [{type: "EXP", name: "EXP", amount: "60"}, {type: "Item", name: "Platinum Ore", amount: "1"}]
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Hidden Nest",
			lv:       "8",
			goals:    [{type: "Kill", name: "Hive Hornet", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: "90"}, {type: "Item", name: "Bluesteel Ore", amount: "1"}]
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Field of Boars",
			lv:       "9",
			goals:    [{type: "Kill", name: "Plump Boar", amount: "4"}],
			rewards:  [{type: "EXP", name: "EXP", amount: "100"}, {type: "Item", name: "Aincrite Ore", amount: "2"}]
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Ever-Growing Anger",
			lv:       "15",
			goals:    [{type: "Kill", name: "Raging Plump Boar", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: "170"}, {type: "Chest", name: "Silver", amount: 1}]
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Creatures from the Deep",
			lv:       "6",
			goals:    [{type: "Kill", name: "Uniting Jelley", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: "80"}, {type: "Item", name: "Bluesteel Ore", amount: "2"}]
		}, {
			location: {area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Snake Eyes",
			lv:       "15",
			goals:    [{type: "Kill", name: "Deathgaze Lizard", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: "130"}, {type: "Item", name: "Darantite Ore", amount: "2"}]
		}, {
			location: {area: "Great Forest of Oldrobe", stage: "Lokitalluh Ascent", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Unstable Power",
			lv:       26,
			goals:    [{type: "Kill", name: "Strongshell Turtle", amount: 2}],
			rewards:  [{type: "EXP", name: "EXP", amount: 320}, {type: "Item", name: "Iron Ore", amount: 3}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Lynex Waterway", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Bone Eaters",
			lv:       21,
			goals:    [{type: "Kill", name: "Lifesucker Fish", amount: 5}],
			rewards:  [{type: "EXP", name: "EXP", amount: 270}, {type: "Item", name: "Iron Ore", amount: 5}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Lynex Waterway", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Unstable Power",
			lv:       26,
			goals:    [{type: "Kill", name: "Strongshell Turtle", amount: 2}],
			rewards:  [{type: "EXP", name: "EXP", amount: 320}, {type: "Item", name: "Iron Ore", amount: 3}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Pricy Prey",
			lv:       19,
			goals:    [{type: "Kill", name: "Crystal Cruncher", amount: 7}],
			rewards:  [
				{type: "EXP", name: "EXP", amount: 260}, {type: "Item", name: "Silver Ore", amount: 4},
				{type: "Chest", name: "Red", amount: 1}
			]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Frightened Faithfull",
			lv:       22,
			goals:    [{type: "Kill", name: "Sojourn Wasp", amount: 10}],
			rewards:  [{type: "EXP", name: "EXP", amount: 280}, {type: "Item", name: "Silver Ore", amount: 5}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "One Fall Cataract", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Shift Relief",
			lv:       27,
			goals:    [{type: "Kill", name: "Disintegrating Golem", amount: 3}],
			rewards:  [{type: "EXP", name: "EXP", amount: 330}, {type: "Item", name: "Silver Ore", amount: 3}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Marceiville Water Caves", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Beeing From Beyond",
			lv:       20,
			goals:    [{type: "Kill", name: "Nightmare Gremlin", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Aincrite Ore", amount: 4}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Marceiville Water Caves", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Born of Sin",
			lv:       30,
			goals:    [
				{type: "Kill", name: "NM: Vile Amalgam", amount: 1},
				{type: "Kill", name: "Vile Amalgam Spawn", amount: 5}
			],
			rewards:  [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Aincrite Ore", amount: 4}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Marceiville Water Caves", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "A Feared Legend",
			lv:       31,
			goals:    [{type: "Kill", name: "Pseudodragon", amount: 5}],
			rewards:  [{type: "EXP", name: "EXP", amount: 360}, {type: "Item", name: "Aincrite Ore", amount: 7}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Beeing From Beyond",
			lv:       21,
			goals:    [{type: "Kill", name: "Maddened Aberation", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Bluesteel Ore", amount: 5}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Floating Blade",
			lv:       24,
			goals:    [{type: "Kill", name: "Shallow Skullker", amount: 9}],
			rewards:  [{type: "EXP", name: "EXP", amount: 300}, {type: "Item", name: "Bluesteel Ore", amount: 5}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Sunken Guardians",
			lv:       34,
			goals:    [{type: "Kill", name: "NM: Flood Temple Golem", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 380}, {type: "Item", name: "Bluesteel Ore", amount: 4}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Turinble Road", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "An Unwelcoming Forest",
			lv:       40,
			goals:    [
				{type: "Kill", name: "NM: Natural Disaster", amount: 1}, {type: "Kill", name: "Wrathleaf", amount: 0}
			],
			rewards:  [
				{type: "EXP", name: "EXP", amount: 430}, {type: "Item", name: "Bluesteel Ore", amount: 8},
				{type: "Chest", name: "Red", amount: 1}
			]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Paffati Hall", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Beeing From Beyond",
			lv:       22,
			goals:    [{type: "Kill", name: "Urchin Crab", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Platinum Ore", amount: 5}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Paffati Hall", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "In Search of a New World",
			lv:       24,
			goals:    [{type: "Kill", name: "Oean Jelly", amount: 11}],
			rewards:  [
				{type: "EXP", name: "EXP", amount: 300}, {type: "Item", name: "Platinum Ore", amount: 5},
				{type: "Chest", name: "Red", amount: 1}
			]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Paffati Hall", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Glistering Shell",
			lv:       39,
			goals:    [{type: "Kill", name: "NM: Thick-Shelled Turtle", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 430}, {type: "Item", name: "Platinum Ore", amount: 5}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Ellaider Geothermal Lake", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Fangs Amidst the Steam",
			lv:       28,
			goals:    [{type: "Kill", name: "Hot Spring Buffalo", amount: 6}],
			rewards:  [{type: "EXP", name: "EXP", amount: 330}, {type: "Item", name: "Darantite Ore", amount: 6}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Ellaider Geothermal Lake", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "From the Writhering Pit",
			lv:       32,
			goals:    [{type: "Kill", name: "Caldera Crab", amount: 9}],
			rewards:  [{type: "EXP", name: "EXP", amount: 370}, {type: "Item", name: "Darantite Ore", amount: 4}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Smells Like Trouble",
			lv:       20,
			goals:    [{type: "Kill", name: "Stealth: Burstbud", amount: 0}],
			rewards:  [{type: "EXP", name: "EXP", amount: 270}, {type: "Item", name: "Iron Ore", amount: 4}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Beeing From Beyond",
			lv:       23,
			goals:    [{type: "Kill", name: "NM: The Cosmic Eye", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Bluesteel Ore", amount: 5}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Awakened Beast",
			lv:       28,
			goals:    [{type: "Kill", name: "Summoned Pandemonium Fiend", amount: 7}],
			rewards:  [{type: "EXP", name: "EXP", amount: 330}, {type: "Item", name: "Aincrite Ore", amount: 0}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Tribei Feireese Lake Way", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Ruler of a Dark World",
			lv:       33,
			goals:    [{type: "Kill", name: "NM: Neo Knight", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 380}, {type: "Item", name: "Platinum Ore", amount: 4}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Beeing From Beyond",
			lv:       24,
			goals:    [{type: "Kill", name: "NM: The Devourer of Souls", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Darantite Ore", amount: 1}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Bloodsuckers",
			lv:       25,
			goals:    [{type: "Kill", name: "Leechmite", amount: 6}],
			rewards:  [{type: "EXP", name: "EXP", amount: 310}, {type: "Item", name: "Darantite Ore", amount: 5}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Sweet Earth",
			lv:       30,
			goals:    [{type: "Kill", name: "Spiceleafe Beast", amount: 3}],
			rewards:  [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Silver Ore", amount: 6}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cranvede Path", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Demons of the Depth",
			lv:       36,
			goals:    [{type: "Kill", name: "NM: Kirkaldyian Queen", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 400}, {type: "Item", name: "Darantite Ore", amount: 4}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Beeing From Beyond",
			lv:       24,
			goals:    [{type: "Kill", name: "NM: Demonic Reaper", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Platinum Ore", amount: 5}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Price of Greed",
			lv:       26,
			goals:    [{type: "Kill", name: "Fallen Narcissist", amount: 4}],
			rewards:  [{type: "EXP", name: "EXP", amount: 320}, {type: "Item", name: "Bluesteel Ore", amount: 6}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Shangil Reservoir", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "An Overzealous Guard",
			lv:       35,
			goals:    [{type: "Kill", name: "NM: Formatted Golem", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 390}, {type: "Item", name: "Darantite Ore", amount: 7}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cedol Lake", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Over the Edge",
			lv:       34,
			goals:    [{type: "Kill", name: "NM: Undying Fighter", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 380}, {type: "Item", name: "Platinum Ore", amount: 7}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "Cedol Lake", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Reboot",
			lv:       36,
			goals:    [{type: "Kill", name: "NM: Magi-Golem", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 400}, {type: "Item", name: "Silver Ore", amount: 4}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fernaste Park", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Submerged Desires",
			lv:       30,
			goals:    [{type: "Kill", name: "NM: Rusalka", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Silver Ore", amount: 6}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fernaste Park", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Primordial Entity",
			lv:       34,
			goals:    [{type: "Kill", name: "NM: Scavenging Sludge", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 360}, {type: "Item", name: "Iron Ore", amount: 7}]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "From Darkness",
			lv:       30,
			goals:    [{type: "Kill", name: "Shadow Eyes", amount: 10}],
			rewards:  [
				{type: "EXP", name: "EXP", amount: 350}, {type: "Item", name: "Aincrite Ore", amount: 4},
				{type: "Chest", name: "Red", amount: 1}
			]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: W. Garden", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "An Evil Confluence",
			lv:       40,
			goals:    [{type: "Kill", name: "NM: Dire Shadow Eyes", amount: 1}],
			rewards:  [
				{type: "EXP", name: "EXP", amount: 560}, {type: "Item", name: "", amount: 0},
				{type: "Chest", name: "", amount: 1}
			]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Knight on the Edge",
			lv:       35,
			goals:    [{type: "Kill", name: "NM: Parallel Knight", amount: 1}],
			rewards:  [
				{type: "EXP", name: "EXP", amount: 390}, {type: "Item", name: "Darantite Ore", amount: 4},
				{type: "Chest", name: "Red", amount: 1}
			]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: E. Garden", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "A Tenacious Blade",
			lv:       40,
			goals:    [{type: "Kill", name: "NM: Parallel Knight Reborn", amount: 1}],
			rewards:  [
				{type: "EXP", name: "EXP", amount: 560}, {type: "Item", name: "", amount: 0},
				{type: "Chest", name: "", amount: 1}
			]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "The Summoned Dragon",
			lv:       0,
			goals:    [{type: "Kill", name: "NM: Carnage Dragon", amount: 1}],
			rewards:  [
				{type: "EXP", name: "EXP", amount: 0}, {type: "Item", name: "?", amount: 0},
				{type: "Chest", name: "", amount: 1}
			]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: N. Garden", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Wings of the Protector",
			lv:       45,
			goals:    [{type: "Kill", name: "Maze Dragon", amount: 2}],
			rewards:  [
				{type: "EXP", name: "EXP", amount: 480}, {type: "Item", name: "Platinum Ore", amount: 5},
				{type: "Chest", name: "Red", amount: 1}
			]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Abhorred by Nature",
			lv:       33,
			goals:    [{type: "Kill", name: "NM: Crytid Invader", amount: 1}],
			rewards:  [
				{type: "EXP", name: "EXP", amount: 380}, {type: "Item", name: "Bluesteel Ore", amount: 4},
				{type: "Chest", name: "Red", amount: 1}
			]
		}, {
			location: {area: "Jeweled Peaks Lakes", stage: "La Fastille: S. Garden", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Lust for Life",
			lv:       43,
			goals:    [{type: "Kill", name: "NM: Survivor", amount: 1}],
			rewards:  [
				{type: "EXP", name: "EXP", amount: 590}, {type: "Item", name: "", amount: 0},
				{type: "Chest", name: "", amount: 1}
			]
		}, {
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Footsteps in the Wind",
			lv:       27,
			goals:    [{type: "Kill", name: "Lost One", amount: 4}],
			rewards:  [{type: "EXP", name: "EXP", amount: 370}, {type: "Item", name: "Silver Ore", amount: 6}]
		}, {
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Stinging Sand",
			lv:       32,
			goals:    [{type: "Kill", name: "Grand Blood Stalker", amount: 3}],
			rewards:  [{type: "EXP", name: "EXP", amount: 0}, {type: "Item", name: "", amount: 0}]
		}, {
			location: {area: "Kurjiez Desert", stage: "Southern Ultana Desert", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Thirsty Trees",
			lv:       37,
			goals:    [{type: "Kill", name: "NM: Parched Treant", amount: 1}],
			rewards:  [
				{type: "EXP", name: "EXP", amount: 470}, {type: "Item", name: "Silver Ore", amount: 5},
				{type: "Chest", name: "Red", amount: 1}
			]
		}, {
			location: {area: "Kurjiez Desert", stage: "Alle Fioro", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Putting Down Roots",
			lv:       0,
			goals:    [{type: "Kill", name: "HNM: Ancient Briar", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 0}, {type: "Item", name: "", amount: 0}]
		}, {
			location: {area: "Kurjiez Desert", stage: "Alle Fioro", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Desert Blossom",
			lv:       32,
			goals:    [{type: "Kill", name: "Peregrine Hornet", amount: 8}],
			rewards:  [{type: "EXP", name: "EXP", amount: 420}, {type: "Item", name: "Bluesteel Ore", amount: 7}]
		}, {
			location: {area: "Kurjiez Desert", stage: "Alle Fioro", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Bullish Gatekeepers",
			lv:       38,
			goals:    [{type: "Kill", name: "Taurus Booster", amount: 4}],
			rewards:  [{type: "EXP", name: "EXP", amount: 480}, {type: "Item", name: "Bluesteel Ore", amount: 8}]
		}, {
			location: {area: "Kurjiez Desert", stage: "Northern Ultana Desert", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Hot Under the Collar",
			lv:       28,
			goals:    [{type: "Kill", name: "Nomadic Buffalo", amount: 8}],
			rewards:  [{type: "EXP", name: "EXP", amount: 380}, {type: "Item", name: "Darantite Ore", amount: 6}]
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Knights of the Realm",
			lv:       "42",
			goals:    [{type: "Kill", name: "Deadly Dullahan", amount: "3"}],
			rewards:  [{type: "EXP", name: "EXP", amount: "580"}, {type: "Item", name: "Aincrite Ore", amount: "9"}]
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Mechanical Cries",
			lv:       "105",
			goals:    [{type: "Kill", name: "The Confessor", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: 0}]
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Birthed by Legend",
			lv:       0,
			goals:    [{type: "Kill", name: "Crystal Jamer", amount: 1}],
			rewards:  [{type: "EXP", name: "EXP", amount: "6400"}, {type: "Item", name: "Platinum Ore", amount: "10"}]
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Writhing Masses",
			lv:       "43",
			goals:    [{type: "Kill", name: "Rainwater Jelly", amount: "12"}],
			rewards:  [{type: "EXP", name: "EXP", amount: "590"}, {type: "Item", name: "Darantite Ore", amount: "9"}]
		}, {
			location: {area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: 0, lvMax: 0},
			type:     "M",
			name:     "Lip-Smackingly Good",
			lv:       "47",
			goals:    [{type: "Kill", name: "Digging Scorpion", amount: "6"}],
			rewards:  [{type: "EXP", name: "EXP", amount: "640"}, {type: "Item", name: "Bluesteel Ore", amount: "6"}]
		}
	],
	monster: [
		{
			locations: [
				{
					area:  "Great Plains of Rustoria",
					stage: "Phoeniath Knoll",
					lvMin: "13",
					lvMax: "13"
				}
			],
			type:      "NM",
			race:      "Boar",
			family:    "Boar ",
			name:      "Extra Boar Commander",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: "1", lvMax: "6"},
				{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0},
				{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "3", lvMax: "4"}
			],
			type:      "M",
			race:      "Boar",
			family:    "Boar",
			name:      "Bumpkin Boar",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: "2", lvMax: "8"},
				{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0}
			],
			type:      "M",
			race:      "Boar",
			family:    "Boar",
			name:      "Strong Boar",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: "4", lvMax: "4"}],
			type:      "M",
			race:      "Boar",
			family:    "Glutton",
			name:      "Wild Glutton",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: "3", lvMax: "4"},
				{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "36", lvMax: "37"}
			],
			type:      "M",
			race:      "Crab",
			family:    "Crab",
			name:      "Grass Crab",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: "9", lvMax: "10"}],
			type:      "M",
			race:      "Crab",
			family:    "Seeker",
			name:      "Water Seeker",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: "3", lvMax: "8"},
				{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "5", lvMax: "6"}
			],
			type:      "M",
			race:      "Plant",
			family:    "Nepenthe",
			name:      "Lea Nepenthe",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: "3", lvMax: "9"}],
			type:      "M",
			race:      "Plant",
			family:    "Waterweed",
			name:      "Prickly Waterweed",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: 0, lvMax: 0}],
			type:      "NM",
			race:      "Treant",
			family:    "Treant",
			name:      "Grudge Ghost Treant",
			drops:     ["Plant Bark", "Plant Bough"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: "95", lvMax: "95"}],
			type:      "HNM",
			race:      "Treant",
			family:    "Treant",
			name:      "Spectral Treant",
			drops:     ["Plant Bark", "Plant Bough"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: "7", lvMax: "12"},
				{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "8", lvMax: "9"}
			], type:   "M", race: "Treant", family: "Wood", name: "Ground Wood", drops: ["Plant Bark", "Plant Bough"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: "1", lvMax: "7"},
				{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "3", lvMax: "5"}
			],
			type:      "M",
			race:      "Wasp",
			family:    "Wasp",
			name:      "Worker Wasp",
			drops:     ["Insectoid Exoskeleton", "Insectoid Stinger"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Phoeniath Knoll", lvMin: "2", lvMax: "8"},
				{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "3", lvMax: "5"}
			],
			type:      "M",
			race:      "Wasp",
			family:    "Wasp",
			name:      "Gusty Wasp",
			drops:     ["Insectoid Exoskeleton", "Insectoid Stinger"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "4", lvMax: "4"}],
			type:      "M",
			race:      "Beast",
			family:    "Beast",
			name:      "Crested Beast",
			drops:     ["Bestial Mane"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "9", lvMax: "10"}],
			type:      "M",
			race:      "Boar",
			family:    "Boar",
			name:      "Plump Boar",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: 0, lvMax: 0}],
			type:      "NM",
			race:      "Boar",
			family:    "Boar",
			name:      "Raging Plump Boar",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: 0, lvMax: 0},
				{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: "5", lvMax: "5"}
			],
			type:      "M",
			race:      "Boar",
			family:    "Tusk",
			name:      "Rushing Tusk",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "9", lvMax: "9"},
				{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0}
			],
			type:      "M",
			race:      "Boar",
			family:    "Tusk",
			name:      "Massive Tusk",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "6", lvMax: "7"}],
			type:      "M",
			race:      "Plant",
			family:    "Nepenthe",
			name:      "Cutter Nepenthe",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "16", lvMax: "16"}],
			type:      "M",
			race:      "Plant",
			family:    "Oldwood",
			name:      "Solitary Oldwood",
			drops:     ["Plant Bark", "Plant Bough", "Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "13", lvMax: "13"}],
			type:      "NM",
			race:      "Plant",
			family:    "Thorn",
			name:      "Violet Thorn",
			drops:     ["Plant Chloroplast", "Plant Pod"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "7", lvMax: "9"}],
			type:      "M",
			race:      "Treant",
			family:    "Guardian",
			name:      "Hive Guardian",
			drops:     ["Plant Bark", "Plant Bough"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "9", lvMax: "9"}],
			type:      "M",
			race:      "Treant",
			family:    "Wildwood",
			name:      "Wildwood",
			drops:     ["Plant Bark", "Plant Bough"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "12", lvMax: "12"}],
			type:      "NM",
			race:      "Wasp",
			family:    "Hornet",
			name:      "Hive Hornet",
			drops:     ["Insectoid Exoskeleton", "Insectoid Stinger"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Centallia Rise", lvMin: "5", lvMax: "5"}],
			type:      "M",
			race:      "Wasp",
			family:    "Wasp",
			name:      "Assault Wasp",
			drops:     ["Insectoid Exoskeleton", "Insectoid Stinger"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0}],
			type:      "M",
			race:      "Boar",
			family:    "Tusk",
			name:      "Fatal Tusk",
			drops:     ["Bestial Fang", "Bestial Hoof", "Bestial Tail", "Bestial Tusk"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "36", lvMax: "38"}
			],
			type:      "M",
			race:      "Crab",
			family:    "Crab",
			name:      "Salty Crab",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0}],
			type:      "NM",
			race:      "Crab",
			family:    "Crab",
			name:      "King Claw, Lord of the Lake",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "36", lvMax: "44"}
			],
			type:      "M",
			race:      "Crab",
			family:    "Scissors",
			name:      "Raging Scissors",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0}],
			type:      "M",
			race:      "Crab",
			family:    "Scissors",
			name:      "Swamp Scissors",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0}],
			type:      "M",
			race:      "Insect",
			family:    "Crusher",
			name:      "Elite Insectoid Crusher",
			drops:     ["Insectoid Feeler"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0}],
			type:      "M",
			race:      "Insect",
			family:    "Crusher",
			name:      "Insectoid Crusher",
			drops:     ["Insectoid Feeler"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0}],
			type:      "M",
			race:      "Lizard",
			family:    "Drake",
			name:      "Lime Drake",
			drops:     ["Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0}],
			type:      "M",
			race:      "Lizard",
			family:    "Lizard",
			name:      "Fanged Lizard",
			drops:     ["Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0}],
			type:      "M",
			race:      "Lizard",
			family:    "Lizard",
			name:      "Fanged Lizard Broodmother",
			drops:     ["Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0}],
			type:      "M",
			race:      "Lizard",
			family:    "Lizard",
			name:      "Fanged Lizard Overlord",
			drops:     ["Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0}],
			type:      "NM",
			race:      "Lizard",
			family:    "Lizard",
			name:      "Deathgaze Lizard",
			drops:     ["Saurian Fang", "Saurian Jaw"]
		}, {
			locations: [{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0}],
			type:      "M",
			race:      "Slime",
			family:    "Jelley",
			name:      "Uniting Jelley",
			drops:     ["Amorphous Algae", "Amorphous Membrane"]
		}, {
			locations: [
				{area: "Great Plains of Rustoria", stage: "Lake Steschal", lvMin: 0, lvMax: 0},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "37", lvMax: "38"}
			],
			type:      "M",
			race:      "Tortoise",
			family:    "Tortoise",
			name:      "Green Tortoise",
			drops:     ["Saurian Bone Fragment", "Saurian Claw"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: "36", lvMax: "44"}],
			type:      "M",
			race:      "Golem",
			family:    "Golem ",
			name:      "Golem of Folly",
			drops:     ["Inanimate Arm Chunk", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: "36", lvMax: "44"}],
			type:      "M",
			race:      "Golem",
			family:    "Golem ",
			name:      "Restored Golem",
			drops:     ["Inanimate Arm Chunk", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: "41", lvMax: "45"}],
			type:      "M",
			race:      "Golem",
			family:    "Golem ",
			name:      "Refurbished Golem",
			drops:     ["Inanimate Arm Chunk", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: "105", lvMax: "105"}],
			type:      "HNM",
			race:      "Golem",
			family:    "Golem ",
			name:      "The Confessor",
			drops:     ["Inanimate Arm Chunk", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: "43", lvMax: "44"}],
			type:      "M",
			race:      "Knight",
			family:    "Dullahan",
			name:      "Deadly Dullahan",
			drops:     ["Demonic Claw"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: "38", lvMax: "44"}],
			type:      "M",
			race:      "Knight",
			family:    "Guardian Armor",
			name:      "Living Guardian Armor",
			drops:     ["Demonic Claw"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: "39", lvMax: "44"}],
			type:      "M",
			race:      "Reaper",
			family:    "Phantom",
			name:      "Phantom of Oblivion",
			drops:     ["Spectral Essence", "Spectral Wrappings"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: "35", lvMax: "38"}],
			type:      "M",
			race:      "Reaper",
			family:    "Scyther",
			name:      "Blood Scyther",
			drops:     ["Spectral Essence", "Spectral Wrappings"]
		}, {
			locations: [
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: "37", lvMax: "38"},
				{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: "39", lvMax: "39"}
			],
			type:      "M",
			race:      "Reaper",
			family:    "Scyther",
			name:      "Deadly Scyther",
			drops:     ["Spectral Essence", "Spectral Wrappings"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Orsheon", lvMin: "61", lvMax: "61"}],
			type:      "NM",
			race:      "Reaper",
			family:    "Scyther",
			name:      "Horifying Exorcist",
			drops:     ["Spectral Essence", "Spectral Wrappings"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "38", lvMax: "38"}],
			type:      "M",
			race:      "Crab",
			family:    "Crab",
			name:      "Poisonous Needlespike Crab",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "38", lvMax: "38"}],
			type:      "M",
			race:      "Crab",
			family:    "Crab",
			name:      "Swell Hand Crab",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "38", lvMax: "39"}],
			type:      "M",
			race:      "Crab",
			family:    "Crab",
			name:      "Needlespike Crab",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "43", lvMax: "43"}],
			type:      "M",
			race:      "Crab",
			family:    "Scissors",
			name:      "Bigclaw Scissors",
			drops:     ["Crustacean Pincer", "Crustacean Soft Shell"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "40", lvMax: "41"}],
			type:      "M",
			race:      "Golem",
			family:    "Automaton",
			name:      "Jeweled Automaton",
			drops:     ["Inanimate Arm Chunk", "Inanimate Leg Chunk"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "37", lvMax: "38"}],
			type:      "M",
			race:      "Slime",
			family:    "Jam",
			name:      "Emerald Jam",
			drops:     ["Amorphous Algae", "Amorphous Membrane"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "38", lvMax: "38"}],
			type:      "M",
			race:      "Slime",
			family:    "Jam",
			name:      "Shpphire Jam",
			drops:     ["Amorphous Algae", "Amorphous Membrane"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "49", lvMax: "49"}],
			type:      "NM",
			race:      "Slime",
			family:    "Jam",
			name:      "Crystal Jammer",
			drops:     ["Amorphous Algae", "Amorphous Membrane"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "38", lvMax: "38"}],
			type:      "M",
			race:      "Slime",
			family:    "Melt",
			name:      "Spphire Melt",
			drops:     ["Amorphous Algae", "Amorphous Membrane"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "39", lvMax: "39"}],
			type:      "M",
			race:      "Slime",
			family:    "Melt",
			name:      "Emerald Melt",
			drops:     ["Amorphous Algae", "Amorphous Membrane"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "55", lvMax: "55"}],
			type:      "NM",
			race:      "Slime",
			family:    "The Slime Twins",
			name:      "The Slime Twins: Gloppacool",
			drops:     ["Amorphous Algae", "Amorphous Membrane"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "55", lvMax: "55"}],
			type:      "NM",
			race:      "Slime",
			family:    "The Slime Twins",
			name:      "The Slime Twins: Healomatic",
			drops:     ["Amorphous Algae", "Amorphous Membrane"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "36", lvMax: "42"}],
			type:      "M",
			race:      "Squide",
			family:    "Aether Flutter",
			name:      "Giant Aether Flutter",
			drops:     ["Amorphous Cell", "Amorphous Tentacle"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "38", lvMax: "38"}],
			type:      "M",
			race:      "Squide",
			family:    "Aether Flutter",
			name:      "Aether Flutter",
			drops:     ["Amorphous Cell", "Amorphous Tentacle"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "36", lvMax: "37"}],
			type:      "M",
			race:      "Squide",
			family:    "Jelly",
			name:      "Hopping Jelly",
			drops:     ["Amorphous Cell", "Amorphous Tentacle"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "43", lvMax: "45"}],
			type:      "M",
			race:      "Squide",
			family:    "Jelly",
			name:      "Rainwater Jelly",
			drops:     ["Amorphous Cell", "Amorphous Tentacle"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: 0, lvMax: 0}],
			type:      "M",
			race:      "Tortoise",
			family:    "Tortoise",
			name:      "Big Green Tortoise",
			drops:     ["Saurian Bone Fragment", "Saurian Claw"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "38", lvMax: "39"}],
			type:      "M",
			race:      "Tortoise",
			family:    "Tortoise",
			name:      "Snapping Black Tortoise",
			drops:     ["Saurian Bone Fragment", "Saurian Claw"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Cordia", lvMin: "43", lvMax: "43"}],
			type:      "M",
			race:      "Tortoise",
			family:    "Tortoise",
			name:      "Dynamic Green Tortoise",
			drops:     ["Saurian Bone Fragment", "Saurian Claw"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: "38", lvMax: "41"}],
			type:      "M",
			race:      "Flame",
			family:    "Fire",
			name:      "Soul of Fire",
			drops:     []
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: "44", lvMax: "45"}],
			type:      "M",
			race:      "Knight",
			family:    "Just Knight",
			name:      "Ghost of a Just Knight",
			drops:     ["Demonic Claw"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: "38", lvMax: "39"}],
			type:      "M",
			race:      "Reaper",
			family:    "Scyther",
			name:      "Bloody Scyther",
			drops:     ["Spectral Essence", "Spectral Wrappings"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: "40", lvMax: "45"}],
			type:      "M",
			race:      "Reaper",
			family:    "Styther",
			name:      "Fatal Syther",
			drops:     ["Spectral Essence", "Spectral Wrappings"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: "49", lvMax: "50"}],
			type:      "M",
			race:      "Scorpion",
			family:    "Scorpion",
			name:      "Digging Scorpion",
			drops:     ["Crustacean Claw", "Crustacean Leg"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: "41", lvMax: "41"}],
			type:      "M",
			race:      "Skeleton",
			family:    "Knight",
			name:      "Undead Knight",
			drops:     ["Spectral Armor Fragment", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: "38", lvMax: "39"}],
			type:      "M",
			race:      "Skeleton",
			family:    "Skeleton",
			name:      "Aggresive Skeleton",
			drops:     ["Spectral Armor Fragment", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: "40", lvMax: "40"}],
			type:      "M",
			race:      "Skeleton",
			family:    "Skeleton",
			name:      "Skeleton Commander",
			drops:     ["Spectral Armor Fragment", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: "41", lvMax: "46"}],
			type:      "M",
			race:      "Skeleton",
			family:    "Skeleton",
			name:      "Skeleton Mercenary",
			drops:     ["Spectral Armor Fragment", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: "58", lvMax: "58"}],
			type:      "NM",
			race:      "Skeleton",
			family:    "Skeleton",
			name:      "Skeleton General",
			drops:     ["Spectral Armor Fragment", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: "45", lvMax: "46"}],
			type:      "M",
			race:      "Skeleton",
			family:    "Skull",
			name:      "Fallen Skull",
			drops:     ["Spectral Armor Fragment", "Spectral Femur Fragment"]
		}, {
			locations: [{area: "Oltrum Bastion", stage: "Oltrum Bastion: Maravia", lvMin: "39", lvMax: "40"}],
			type:      "M",
			race:      "Skeleton",
			family:    "Slasher",
			name:      "Bone Slasher",
			drops:     ["Spectral Armor Fragment", "Spectral Femur Fragment"]
		}
	]
};