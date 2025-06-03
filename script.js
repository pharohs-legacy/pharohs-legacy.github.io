class PharaohsLegacy {
    constructor() {
        this.player = {
            name: localStorage.getItem('characterName'),
            age: 16,
            health: 100,
            gold: 500,
            knowledge: 30,
            inventory: ["📜 Papyrus Scroll"],
            achievements: [],
            year: 1323, // BCE, during Tutankhamun's era
            lessonsLearned: [],
            dailyQuests: [],
            lastQuestDate: null,
            usedItems: []
        };
        
        this.settings = {
            soundEnabled: true,
            autoSave: true,
            animationsEnabled: true,
            difficulty: 'normal'
        };
        
        this.lessons = {
            hieroglyphs: {
                title: "Ancient Egyptian Hieroglyphs",
                content: [
                    {
                        type: "explanation",
                        text: "Hieroglyphs are a formal writing system used by ancient Egyptians. The word comes from Greek meaning 'sacred carvings'. There are over 700 hieroglyphic symbols!"
                    },
                    {
                        type: "interactive",
                        text: "Let's learn basic hieroglyphs:",
                        symbols: [
                            { symbol: "𓀀", meaning: "man", pronunciation: "s" },
                            { symbol: "𓁐", meaning: "woman", pronunciation: "st" },
                            { symbol: "𓃭", meaning: "lion", pronunciation: "rw" },
                            { symbol: "𓄿", meaning: "vulture (letter A)", pronunciation: "a" },
                            { symbol: "𓇳", meaning: "sun/Ra", pronunciation: "ra" },
                            { symbol: "𓈖", meaning: "water/N sound", pronunciation: "n" },
                            { symbol: "𓊪", meaning: "stool/P sound", pronunciation: "p" }
                        ]
                    },
                    {
                        type: "practice",
                        text: "Practice: What does this mean?",
                        question: "𓇳 𓀀",
                        answer: "ra man",
                        explanation: "𓇳 (Ra/sun) + 𓀀 (man) = Ra man or man of Ra"
                    },
                    {
                        type: "explanation",
                        text: "Hieroglyphs could be written left-to-right, right-to-left, or top-to-bottom! You read toward the direction the animals and people are facing."
                    },
                    {
                        type: "practice",
                        text: "Advanced practice:",
                        question: "What sound does 𓈖 make?",
                        answer: "n",
                        explanation: "𓈖 represents water and makes the 'N' sound in Egyptian words."
                    }
                ]
            },
            mathematics: {
                title: "Egyptian Mathematics",
                content: [
                    {
                        type: "explanation",
                        text: "Ancient Egyptians used a decimal system based on powers of 10. They were master mathematicians who built the pyramids with incredible precision!"
                    },
                    {
                        type: "interactive",
                        text: "Egyptian number system:",
                        symbols: [
                            { symbol: "𓏺", meaning: "1 (stroke)", value: 1 },
                            { symbol: "𓎆", meaning: "10 (heel bone)", value: 10 },
                            { symbol: "𓍢", meaning: "100 (coil of rope)", value: 100 },
                            { symbol: "𓆼", meaning: "1,000 (lotus flower)", value: 1000 },
                            { symbol: "𓂭", meaning: "10,000 (finger)", value: 10000 },
                            { symbol: "𓆐", meaning: "100,000 (tadpole)", value: 100000 },
                            { symbol: "𓁨", meaning: "1,000,000 (god with raised arms)", value: 1000000 }
                        ]
                    },
                    {
                        type: "practice",
                        text: "Let's practice! What number is this?",
                        question: "𓍢𓍢𓎆𓎆𓎆𓏺𓏺",
                        answer: "232",
                        explanation: "𓍢𓍢 (100+100) + 𓎆𓎆𓎆 (10+10+10) + 𓏺𓏺 (1+1) = 200 + 30 + 2 = 232"
                    },
                    {
                        type: "explanation",
                        text: "Egyptians invented unit fractions! They could only use fractions with 1 as the numerator (except 2/3 and 3/4)."
                    },
                    {
                        type: "practice",
                        text: "Fraction challenge:",
                        question: "How would Egyptians write 5/6?",
                        answer: "1/2 + 1/3",
                        explanation: "Egyptians would break 5/6 into unit fractions: 1/2 + 1/3 = 3/6 + 2/6 = 5/6"
                    }
                ]
            },
            astronomy: {
                title: "Egyptian Astronomy",
                content: [
                    {
                        type: "explanation",
                        text: "Ancient Egyptians were master astronomers who created one of the first 365-day calendars and built monuments aligned with stars!"
                    },
                    {
                        type: "interactive",
                        text: "Key astronomical knowledge:",
                        facts: [
                            "365-day year: 12 months of 30 days + 5 epagomenal days",
                            "36 decans: star groups rising every 10 days",
                            "Sirius (Sopdet): most important star, marked New Year",
                            "Orion (Sahu): represented Osiris in the sky",
                            "Circumpolar stars: 'imperishable stars' that never set",
                            "Solar calendar: based on Sirius rising with the sun"
                        ]
                    },
                    {
                        type: "practice",
                        text: "Astronomy test:",
                        question: "What did the rising of Sirius predict?",
                        answer: "nile flood",
                        explanation: "Sirius rising just before dawn marked the beginning of the Nile's annual flood, essential for Egyptian agriculture."
                    },
                    {
                        type: "explanation",
                        text: "The Great Pyramid is aligned to within 3/60th of a degree to true north! They used the stars to achieve this precision."
                    }
                ]
            },
            gods: {
                title: "Egyptian Gods and Religion",
                content: [
                    {
                        type: "explanation",
                        text: "Ancient Egypt had over 2,000 gods and goddesses! Religion was central to Egyptian life, death, and the afterlife."
                    },
                    {
                        type: "interactive",
                        text: "Major Egyptian Gods:",
                        symbols: [
                            { symbol: "𓇳", meaning: "Ra - Sun God, King of Gods", pronunciation: "ra" },
                            { symbol: "𓊨", meaning: "Anubis - God of Mummification", pronunciation: "anpu" },
                            { symbol: "𓁹", meaning: "Horus - Sky God, Pharaoh's protector", pronunciation: "hor" },
                            { symbol: "𓊪𓏏𓇯", meaning: "Ptah - Creator God", pronunciation: "ptah" },
                            { symbol: "𓇯", meaning: "Thoth - God of Wisdom", pronunciation: "djehuty" },
                            { symbol: "𓊨𓏏", meaning: "Isis - Goddess of Magic", pronunciation: "aset" }
                        ]
                    },
                    {
                        type: "practice",
                        text: "Religious knowledge:",
                        question: "Who was the god of mummification?",
                        answer: "anubis",
                        explanation: "Anubis, the jackal-headed god, guided the mummification process and protected the dead."
                    },
                    {
                        type: "explanation",
                        text: "Egyptians believed in Ma'at - the concept of truth, justice, and cosmic order. The pharaoh was responsible for maintaining Ma'at."
                    },
                    {
                        type: "practice",
                        text: "Afterlife beliefs:",
                        question: "What was weighed against a feather in the afterlife?",
                        answer: "heart",
                        explanation: "The heart was weighed against the feather of Ma'at. If heavier (full of sin), it was devoured by Ammit."
                    }
                ]
            },
            medicine: {
                title: "Ancient Egyptian Medicine",
                content: [
                    {
                        type: "explanation",
                        text: "Egyptian medicine was incredibly advanced! They performed surgery, set bones, and understood anatomy through mummification."
                    },
                    {
                        type: "interactive",
                        text: "Medical achievements:",
                        facts: [
                            "Edwin Smith Papyrus: 48 surgical cases documented",
                            "Ebers Papyrus: 700 medical remedies and spells",
                            "Surgical tools: bronze scalpels, forceps, scissors",
                            "Dentistry: tooth extraction, dental bridges",
                            "Ophthalmology: eye surgery and treatments",
                            "Pharmacy: over 700 drugs and remedies"
                        ]
                    },
                    {
                        type: "practice",
                        text: "Medical knowledge:",
                        question: "What natural antiseptic did Egyptians use?",
                        answer: "honey",
                        explanation: "Honey has natural antibacterial properties and was used to prevent infection in wounds."
                    },
                    {
                        type: "explanation",
                        text: "Egyptians understood the pulse and knew the heart pumped blood. They identified the brain's importance through trepanation procedures."
                    }
                ]
            },
            engineering: {
                title: "Egyptian Engineering Marvels",
                content: [
                    {
                        type: "explanation",
                        text: "Egyptian engineers created wonders that still amaze us today! The Great Pyramid was the world's tallest building for 3,800 years."
                    },
                    {
                        type: "interactive",
                        text: "Engineering achievements:",
                        facts: [
                            "Great Pyramid: 2.3 million blocks, 146.5m tall originally",
                            "Precision: base level within 2.1cm, sides within 1.75cm",
                            "Tools: copper chisels, wooden levers, rope, ramps",
                            "Quarrying: limestone from local quarries, granite from Aswan",
                            "Transportation: Nile barges, sledges, rollers",
                            "Workforce: 20,000-30,000 workers over 20 years"
                        ]
                    },
                    {
                        type: "practice",
                        text: "Engineering challenge:",
                        question: "How did Egyptians cut granite without iron tools?",
                        answer: "copper and abrasives",
                        explanation: "They used copper tools with quartz sand as an abrasive to cut through hard granite."
                    },
                    {
                        type: "explanation",
                        text: "The pyramids were built with internal ramps and external ramps. Workers used wooden levers to position each massive block perfectly."
                    }
                ]
            },
            mummification: {
                title: "The Sacred Art of Mummification",
                content: [
                    {
                        type: "explanation",
                        text: "Mummification was a 70-day sacred process that preserved bodies for eternal life. Only the wealthy could afford full mummification."
                    },
                    {
                        type: "interactive",
                        text: "The complete mummification process:",
                        steps: [
                            "Day 1: Remove brain through nose with hooked rod",
                            "Day 2: Remove organs through left side incision",
                            "Day 3-42: Pack body in natron salt to dehydrate",
                            "Day 43: Remove natron, wash body with wine",
                            "Day 44-60: Stuff body with linen, sawdust, natron",
                            "Day 61-70: Wrap in hundreds of yards of linen",
                            "Final: Place amulets between wrappings, add mask"
                        ]
                    },
                    {
                        type: "practice",
                        text: "Mummification knowledge:",
                        question: "Why was the heart left in the body?",
                        answer: "judgment in afterlife",
                        explanation: "The heart was needed for judgment by Osiris. It was weighed against the feather of Ma'at."
                    },
                    {
                        type: "explanation",
                        text: "Canopic jars stored the organs: Imsety (liver), Duamutef (stomach), Hapi (lungs), Qebehsenuef (intestines)."
                    }
                ]
            },
            language: {
                title: "Ancient Egyptian Language",
                content: [
                    {
                        type: "explanation",
                        text: "Ancient Egyptian evolved over 3,000 years! It's related to modern Arabic and Hebrew, part of the Afro-Asiatic language family."
                    },
                    {
                        type: "interactive",
                        text: "Language evolution:",
                        facts: [
                            "Old Egyptian (2686-2181 BCE): Pyramid Texts era",
                            "Middle Egyptian (2055-1650 BCE): Classical period",
                            "Late Egyptian (1550-700 BCE): New Kingdom",
                            "Demotic (700 BCE-400 CE): Everyday writing",
                            "Coptic (100-1600 CE): Egyptian with Greek alphabet"
                        ]
                    },
                    {
                        type: "practice",
                        text: "Language knowledge:",
                        question: "What script replaced hieroglyphs for daily use?",
                        answer: "demotic",
                        explanation: "Demotic script was faster to write and used for everyday documents, contracts, and letters."
                    },
                    {
                        type: "explanation",
                        text: "The Rosetta Stone (196 BCE) was key to deciphering hieroglyphs. It contained the same text in hieroglyphs, demotic, and Greek."
                    }
                ]
            },
            agriculture: {
                title: "Egyptian Agriculture and the Nile",
                content: [
                    {
                        type: "explanation",
                        text: "Egypt was the 'Gift of the Nile.' The annual flood deposited fertile silt, making Egypt the breadbasket of the ancient world."
                    },
                    {
                        type: "interactive",
                        text: "Agricultural cycle:",
                        facts: [
                            "Akhet (Flood season): July-October, Nile floods",
                            "Peret (Growing season): November-February, planting",
                            "Shemu (Harvest season): March-June, harvesting",
                            "Crops: wheat, barley, flax, papyrus, dates",
                            "Tools: wooden plows, copper sickles, shaduf irrigation",
                            "Animals: cattle, goats, sheep, pigs, ducks, geese"
                        ]
                    },
                    {
                        type: "practice",
                        text: "Agricultural knowledge:",
                        question: "What was the Egyptian flood season called?",
                        answer: "akhet",
                        explanation: "Akhet was the flood season when the Nile overflowed, depositing fertile silt across the land."
                    },
                    {
                        type: "explanation",
                        text: "The shaduf was an ingenious irrigation device - a long pole with a bucket on one end and a counterweight on the other, making it easy to lift water."
                    }
                ]
            },
            art: {
                title: "Egyptian Art and Symbolism",
                content: [
                    {
                        type: "explanation",
                        text: "Egyptian art followed strict rules for over 3,000 years! Every color, pose, and symbol had deep religious and cultural meaning."
                    },
                    {
                        type: "interactive",
                        text: "Art conventions and meanings:",
                        facts: [
                            "Composite view: head in profile, eye frontal, shoulders frontal",
                            "Hierarchical scale: important people drawn larger",
                            "Colors: gold (divine), blue (life), red (power), green (rebirth)",
                            "Poses: walking pose shows life, mummy pose shows death",
                            "Canon of proportions: 18 squares from hairline to ground",
                            "Registers: horizontal bands organizing scenes"
                        ]
                    },
                    {
                        type: "practice",
                        text: "Art knowledge:",
                        question: "What color represented divinity in Egyptian art?",
                        answer: "gold",
                        explanation: "Gold represented the divine, eternal, and imperishable - the flesh of the gods."
                    },
                    {
                        type: "explanation",
                        text: "Egyptian artists were anonymous craftsmen working in teams. Art served religious and political purposes, not personal expression."
                    }
                ]
            },
            trade: {
                title: "Egyptian Trade and Economy",
                content: [
                    {
                        type: "explanation",
                        text: "Egypt was a major trading power! They traded gold, papyrus, and grain for cedar wood, incense, and exotic animals."
                    },
                    {
                        type: "interactive",
                        text: "Trade networks and goods:",
                        facts: [
                            "Nubia: gold, ivory, ebony, exotic animals",
                            "Lebanon: cedar wood for ships and buildings",
                            "Punt (Somalia): incense, myrrh, frankincense",
                            "Mediterranean: olive oil, wine, silver",
                            "Red Sea: spices, precious stones, pearls",
                            "Currency: grain, gold rings, silver pieces"
                        ]
                    },
                    {
                        type: "practice",
                        text: "Trade knowledge:",
                        question: "What was Egypt's most valuable export?",
                        answer: "gold",
                        explanation: "Egypt's Nubian gold mines made it incredibly wealthy and powerful in the ancient world."
                    },
                    {
                        type: "explanation",
                        text: "The Egyptians didn't use coins until very late. Instead, they used a barter system based on standard weights of grain, gold, and silver."
                    }
                ]
            }
        };
        
        this.storeItems = {
            consumables: [
                { id: "health_potion", name: "🍯 Honey Medicine", price: 50, effect: { health: 20 }, description: "Restores 20 health points" },
                { id: "wisdom_scroll", name: "📜 Wisdom Scroll", price: 100, effect: { knowledge: 15 }, description: "Grants 15 knowledge points" },
                { id: "golden_bread", name: "🍞 Golden Bread", price: 30, effect: { health: 10, gold: -30 }, description: "Nutritious bread that restores health" },
                { id: "scribes_ink", name: "🖋️ Scribe's Ink", price: 75, effect: { knowledge: 10 }, description: "High-quality ink for learning" }
            ],
            tools: [
                { id: "golden_stylus", name: "✒️ Golden Stylus", price: 200, effect: { knowledge: 5 }, description: "Permanent +5 knowledge bonus", permanent: true },
                { id: "pharaohs_ring", name: "💍 Pharaoh's Ring", price: 500, effect: { gold: 10 }, description: "Generates 10 gold per event", passive: true },
                { id: "ankh_amulet", name: "☥ Ankh Amulet", price: 300, effect: { health: 5 }, description: "Permanent +5 health bonus", permanent: true },
                { id: "book_of_thoth", name: "📚 Book of Thoth", price: 800, effect: { knowledge: 20 }, description: "Permanent +20 knowledge bonus", permanent: true }
            ],
            artifacts: [
                { id: "canopic_jar", name: "⚱️ Canopic Jar", price: 150, effect: {}, description: "Ancient burial artifact", collectible: true },
                { id: "golden_scarab", name: "🪲 Golden Scarab", price: 250, effect: {}, description: "Sacred beetle amulet", collectible: true },
                { id: "papyrus_map", name: "🗺️ Papyrus Map", price: 180, effect: {}, description: "Ancient trade route map", collectible: true },
                { id: "royal_seal", name: "🔱 Royal Seal", price: 400, effect: {}, description: "Pharaoh's official seal", collectible: true }
            ]
        };
        
        this.dailyQuestTemplates = [
            {
                title: "Scribe's Daily Practice",
                description: "Practice your hieroglyphic writing skills",
                requirement: "complete_lesson",
                reward: { knowledge: 10, gold: 50 },
                icon: "📝"
            },
            {
                title: "Temple Offering",
                description: "Make an offering to the gods",
                requirement: "spend_gold",
                amount: 100,
                reward: { health: 15, knowledge: 5 },
                icon: "🏛️"
            },
            {
                title: "Market Research",
                description: "Study the merchants in the marketplace",
                requirement: "gain_knowledge",
                amount: 20,
                reward: { gold: 100 },
                icon: "🏺"
            },
            {
                title: "Help the Sick",
                description: "Use your medical knowledge to help others",
                requirement: "use_item",
                item: "health_potion",
                reward: { knowledge: 15, gold: 75 },
                icon: "⚕️"
            }
        ];
        
        this.events = [
            {
                title: "The Temple's Hieroglyph Lesson",
                description: "A wise priest offers to teach you the sacred art of hieroglyphic writing. This ancient knowledge could prove invaluable.",
                icon: "🏛️",
                lesson: "hieroglyphs",
                choices: [
                    {
                        text: "Learn hieroglyphs from the priest",
                        effects: { knowledge: 20, gold: -100 },
                        result: "You spend days mastering the sacred symbols. The priest is impressed with your dedication!"
                    },
                    {
                        text: "Politely decline and keep your gold",
                        effects: { gold: 0 },
                        result: "You keep your coins but wonder what ancient wisdom you might have gained."
                    }
                ]
            },
            {
                title: "The Royal Mathematician",
                description: "The royal court's mathematician needs an assistant for calculating grain storage and pyramid measurements.",
                icon: "🔢",
                lesson: "mathematics",
                choices: [
                    {
                        text: "Study Egyptian mathematics",
                        effects: { knowledge: 25, gold: 200 },
                        result: "You learn the fascinating Egyptian number system and earn respect for your mathematical skills!"
                    },
                    {
                        text: "Focus on simpler merchant work",
                        effects: { gold: 150, knowledge: 5 },
                        result: "You earn steady income but miss the chance to learn advanced mathematics."
                    }
                ]
            },
            {
                title: "The Star Watchers",
                description: "Temple astronomers invite you to join their nightly observations of the celestial sphere.",
                icon: "⭐",
                lesson: "astronomy",
                choices: [
                    {
                        text: "Study astronomy with the priests",
                        effects: { knowledge: 30, health: -5 },
                        result: "Long nights studying the stars teach you about Egyptian astronomy!"
                    },
                    {
                        text: "Prefer to sleep at night",
                        effects: { health: 10 },
                        result: "You get good rest but miss learning about the celestial mysteries."
                    }
                ]
            },
            {
                title: "The Temple of the Gods",
                description: "High priests offer to teach you about the pantheon of Egyptian deities and religious practices.",
                icon: "🏛️",
                lesson: "gods",
                choices: [
                    {
                        text: "Learn about the gods and religion",
                        effects: { knowledge: 25, gold: -50 },
                        result: "You gain deep understanding of Egyptian religious beliefs and practices!"
                    },
                    {
                        text: "Focus on worldly matters",
                        effects: { gold: 100 },
                        result: "You earn coin but remain ignorant of divine mysteries."
                    }
                ]
            },
            {
                title: "The Palace Physician",
                description: "The royal physician seeks an apprentice to learn the healing arts and medical knowledge.",
                icon: "⚕️",
                lesson: "medicine",
                choices: [
                    {
                        text: "Apprentice with the physician",
                        effects: { knowledge: 25, health: 15, gold: 100 },
                        result: "You learn amazing medical techniques and improve your own health!"
                    },
                    {
                        text: "Too squeamish for medical work",
                        effects: { gold: 50 },
                        result: "You find other work but miss learning valuable healing knowledge."
                    }
                ]
            },
            {
                title: "The Pyramid Construction Site",
                description: "Master builders offer to teach you their engineering secrets and construction techniques.",
                icon: "🔺",
                lesson: "engineering",
                choices: [
                    {
                        text: "Learn engineering techniques",
                        effects: { knowledge: 35, health: -10, gold: 300 },
                        result: "You discover incredible engineering methods! Hard work but priceless knowledge."
                    },
                    {
                        text: "Too dangerous and difficult",
                        effects: { health: 5 },
                        result: "You stay safe but miss learning the secrets of pyramid construction."
                    }
                ]
            },
            {
                title: "The House of Death",
                description: "Master embalmers offer to teach you the sacred art of mummification and preservation.",
                icon: "⚱️",
                lesson: "mummification",
                choices: [
                    {
                        text: "Learn the mummification process",
                        effects: { knowledge: 30, gold: 250, health: -5 },
                        result: "You master the 70-day process of preserving bodies for eternity!"
                    },
                    {
                        text: "Too disturbing to learn",
                        effects: { health: 10 },
                        result: "You avoid the unsettling work but miss learning this sacred knowledge."
                    }
                ]
            },
            {
                title: "The Language School",
                description: "Scholars offer to teach you about the evolution and structure of the Egyptian language.",
                icon: "📚",
                lesson: "language",
                choices: [
                    {
                        text: "Study Egyptian language",
                        effects: { knowledge: 20, gold: -75 },
                        result: "You learn about the rich history and evolution of Egyptian language!"
                    },
                    {
                        text: "Stick to basic communication",
                        effects: { gold: 50 },
                        result: "You earn some coin but miss deeper linguistic understanding."
                    }
                ]
            },
            {
                title: "The Farmer's Fields",
                description: "Experienced farmers offer to teach you about agriculture and the life-giving Nile.",
                icon: "🌾",
                lesson: "agriculture",
                choices: [
                    {
                        text: "Learn about Egyptian agriculture",
                        effects: { knowledge: 15, health: 10, gold: 100 },
                        result: "You learn how the Nile's gift sustains all of Egypt!"
                    },
                    {
                        text: "Prefer city life",
                        effects: { gold: 75 },
                        result: "You stay in the city but miss understanding Egypt's foundation."
                    }
                ]
            },
            {
                title: "The Artist's Workshop",
                description: "Master artists invite you to learn about Egyptian art, symbolism, and artistic conventions.",
                icon: "🎨",
                lesson: "art",
                choices: [
                    {
                        text: "Study Egyptian art and symbolism",
                        effects: { knowledge: 20, gold: -50 },
                        result: "You learn the deep meanings behind Egyptian artistic traditions!"
                    },
                    {
                        text: "Art doesn't interest you",
                        effects: { gold: 60 },
                        result: "You find other work but miss understanding Egyptian visual culture."
                    }
                ]
            },
            {
                title: "The Merchant's Caravan",
                description: "Wealthy traders offer to teach you about Egyptian trade networks and economic systems.",
                icon: "🐪",
                lesson: "trade",
                choices: [
                    {
                        text: "Learn about trade and economy",
                        effects: { knowledge: 18, gold: 150 },
                        result: "You discover how Egypt's wealth flows through trade networks!"
                    },
                    {
                        text: "Focus on local business",
                        effects: { gold: 120 },
                        result: "You earn steady income but miss understanding global commerce."
                    }
                ]
            },
            // Non-lesson events
            {
                title: "Market Day Opportunity",
                description: "The bustling marketplace offers many opportunities for work and learning.",
                icon: "🏺",
                choices: [
                    {
                        text: "Work as a scribe for merchants",
                        effects: { gold: 200, knowledge: 5 },
                        result: "Your writing skills earn you good coin and trade knowledge!"
                    },
                    {
                        text: "Help carry heavy goods",
                        effects: { gold: 150, health: -10 },
                        result: "Hard work pays well, but your back aches from heavy lifting."
                    },
                    {
                        text: "Study the merchants' techniques",
                        effects: { knowledge: 10, gold: -50 },
                        result: "You learn valuable trading secrets by observing and asking questions."
                    }
                ]
            },
            {
                title: "The Nile's Gift",
                description: "The annual flood has receded, leaving fertile soil and opportunities.",
                icon: "🌊",
                choices: [
                    {
                        text: "Help with the harvest",
                        effects: { gold: 100, health: 5, knowledge: 5 },
                        result: "Working the fertile soil brings rewards and connects you with Egypt's lifeblood."
                    },
                    {
                        text: "Fish in the Nile",
                        effects: { gold: 80, health: 10 },
                        result: "The Nile provides abundant fish, feeding you well and earning coin."
                    },
                    {
                        text: "Study the flood patterns",
                        effects: { knowledge: 15, gold: -25 },
                        result: "You learn how the Nile's cycle sustains all Egyptian civilization."
                    }
                ]
            },
            {
                title: "Desert Caravan",
                description: "A trading caravan prepares for a dangerous journey across the desert.",
                icon: "🐪",
                choices: [
                    {
                        text: "Join as a guard",
                        effects: { gold: 300, health: -15, knowledge: 8 },
                        result: "The dangerous journey pays well and teaches you about desert survival."
                    },
                    {
                        text: "Provide supplies to travelers",
                        effects: { gold: 150, knowledge: 5 },
                        result: "Safe profits from selling goods to the brave travelers."
                    },
                    {
                        text: "Stay safely in the city",
                        effects: { health: 5, gold: 50 },
                        result: "You avoid danger but miss the adventure and greater rewards."
                    }
                ]
            },
            {
                title: "Royal Summons",
                description: "A messenger from the palace requests skilled individuals for royal service.",
                icon: "👑",
                choices: [
                    {
                        text: "Answer the royal call",
                        effects: { gold: 400, knowledge: 20, health: -5 },
                        result: "Royal service brings great rewards but demanding expectations!"
                    },
                    {
                        text: "Send someone else in your place",
                        effects: { gold: 100, knowledge: 5 },
                        result: "You earn a finder's fee but miss the chance for royal favor."
                    },
                    {
                        text: "Ignore the summons",
                        effects: { health: 10 },
                        result: "You rest peacefully but may have missed a great opportunity."
                    }
                ]
            },
            {
                title: "Festival of Opet",
                description: "The great festival celebrating Amun-Ra brings celebration and opportunity to Thebes.",
                icon: "🎭",
                choices: [
                    {
                        text: "Participate in the ceremonies",
                        effects: { knowledge: 15, health: 10, gold: -100 },
                        result: "The sacred festival enriches your spirit and understanding of Egyptian religion."
                    },
                    {
                        text: "Sell goods to festival-goers",
                        effects: { gold: 250, knowledge: 5 },
                        result: "The crowds provide excellent business opportunities!"
                    },
                    {
                        text: "Study the religious rituals",
                        effects: { knowledge: 25, gold: -50 },
                        result: "You gain deep insights into Egyptian religious practices and beliefs."
                    }
                ]
            }
        ];
        
        this.titles = [
            { name: "Young Scribe", minKnowledge: 0, minGold: 0 },
            { name: "Apprentice Scholar", minKnowledge: 50, minGold: 200 },
            { name: "Learned Scribe", minKnowledge: 100, minGold: 500 },
            { name: "Temple Scholar", minKnowledge: 200, minGold: 1000 },
            { name: "Royal Advisor", minKnowledge: 350, minGold: 2000 },
            { name: "Master of Knowledge", minKnowledge: 500, minGold: 3000 },
            { name: "Sage of Egypt", minKnowledge: 700, minGold: 4000 },
            { name: "Pharaoh's Counselor", minKnowledge: 900, minGold: 5000 }
        ];
        
        this.achievements = [
            { id: "first_lesson", name: "Student of Egypt", icon: "📚", condition: () => this.player.lessonsLearned.length >= 1 },
            { id: "scholar", name: "True Scholar", icon: "🎓", condition: () => this.player.lessonsLearned.length >= 5 },
            { id: "master", name: "Master of All Arts", icon: "👑", condition: () => this.player.lessonsLearned.length >= 11 },
            { id: "wealthy", name: "Golden Pharaoh", icon: "💰", condition: () => this.player.gold >= 5000 },
            { id: "wise", name: "Ancient Wisdom", icon: "🔮", condition: () => this.player.knowledge >= 500 },
            { id: "survivor", name: "Desert Survivor", icon: "🏜️", condition: () => this.player.age >= 40 },
            { id: "collector", name: "Artifact Collector", icon: "⚱️", condition: () => this.player.inventory.length >= 10 },
            { id: "quest_master", name: "Quest Master", icon: "⭐", condition: () => this.completedQuests >= 10 },
            { id: "pharaoh_ready", name: "Ready for the Throne", icon: "👑", condition: () => this.player.knowledge >= 900 }
        ];
        
        this.currentEvent = null;
        this.gameStarted = false;
        this.currentLesson = null;
        this.lessonStep = 0;
        this.lessonActive = false;
        this.completedQuests = 0;
        this.storeOpen = false;
        this.settingsOpen = false;
    }
    
    init() {
        console.log("Game initializing...");
        this.generateDailyQuests();
        
        setTimeout(() => {
            console.log("Transitioning to game...");
            const splashScreen = document.getElementById('splashScreen');
            const gameContainer = document.getElementById('gameContainer');
            
            if (splashScreen) splashScreen.style.display = 'none';
            if (gameContainer) gameContainer.classList.remove('hidden');
            
            this.gameStarted = true;
            this.updateDisplay();
            this.updateAchievementDisplay();
            this.updateDailyQuestsDisplay();
            this.generateEvent();
            
            
            initializeMinigames();


            // Set up keyboard event listener with lesson protection
            this.setupKeyboardControls();
        }, 4000);
    }
    
    setupKeyboardControls() {
        document.addEventListener('keydown', (e) => {
            // If lesson is active, only allow typing in text inputs
            if (this.lessonActive) {
                const activeElement = document.activeElement;
                if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
                    return; // Allow typing in text inputs
                }
                
                // Only allow specific lesson navigation keys
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    nextLessonStep();
                    return;
                }
                if (e.key === 'Escape') {
                    e.preventDefault();
                    skipLesson();
                    return;
                }
                
                // Block all other keys during lessons
                e.preventDefault();
                return;
            }
            
            // Normal game keyboard shortcuts (only when lesson is not active)
            if (!this.gameStarted || this.storeOpen || this.settingsOpen) return;
            
            if (e.key >= '1' && e.key <= '3') {
                const choiceIndex = parseInt(e.key) - 1;
                const choices = document.querySelectorAll('.choice-btn');
                if (choices[choiceIndex]) {
                    choices[choiceIndex].click();
                }
            }
            
            // Quick access keys
            if (e.key.toLowerCase() === 's' && e.ctrlKey) {
                e.preventDefault();
                this.saveGame();
                this.showNotification('💾 Game saved!');
            }
            
            if (e.key.toLowerCase() === 'i') {
                this.toggleInventory();
            }
        });
    }
    
    generateDailyQuests() {
        const today = new Date().toDateString();
        if (this.player.lastQuestDate !== today) {
            this.player.dailyQuests = [];
            this.player.lastQuestDate = today;
            
            // Generate 3 random daily quests
            const shuffled = [...this.dailyQuestTemplates].sort(() => 0.5 - Math.random());
            this.player.dailyQuests = shuffled.slice(0, 3).map((template, index) => ({
                ...template,
                id: `daily_${index}`,
                completed: false,
                progress: 0
            }));
        }
    }
    
    updateDisplay() {
        // Update stats
        const healthEl = document.getElementById('healthValue');
        const goldEl = document.getElementById('goldValue');
        const knowledgeEl = document.getElementById('knowledgeValue');
        const ageEl = document.getElementById('ageValue');
        const titleEl = document.getElementById('titleValue');
        
        if (healthEl) healthEl.textContent = this.player.health;
        if (goldEl) goldEl.textContent = this.player.gold;
        if (knowledgeEl) knowledgeEl.textContent = this.player.knowledge;
        if (ageEl) ageEl.textContent = this.player.age;
        if (titleEl) titleEl.textContent = this.player.title;
        
        // Update stat bars
        const healthFill = document.querySelector('.health-fill');
        const goldFill = document.querySelector('.gold-fill');
        const knowledgeFill = document.querySelector('.knowledge-fill');
        
        if (healthFill) healthFill.style.width = `${Math.min(this.player.health, 100)}%`;
        if (goldFill) goldFill.style.width = `${Math.min(this.player.gold / 50, 100)}%`;
        if (knowledgeFill) knowledgeFill.style.width = `${Math.min(this.player.knowledge / 10, 100)}%`;
        
        // Update character info
        const characterName = document.getElementById('characterName');
        const characterDescription = document.getElementById('characterDescription');
        
        if (characterName) characterName.textContent = this.player.name;
        if (characterDescription) {
            characterDescription.textContent = `Age ${this.player.age} • ${this.player.title} • Year ${this.player.year} BCE • Lessons: ${this.player.lessonsLearned.length}/${Object.keys(this.lessons).length}`;
        }
        
        // Update inventory
        const inventoryEl = document.getElementById('inventory');
        if (inventoryEl) {
            inventoryEl.innerHTML = this.player.inventory.map((item, index) => 
                `<div class="item" onclick="useItem(${index})">${item}</div>`
            ).join('');
        }
        
        // Check for Pharaoh victory condition
        if (this.player.knowledge >= 1000) {
            this.becomePharaoh();
            return;
        }
        
        // Update title
        this.updateTitle();
        
        // Check achievements
        this.checkAchievements();
        
        // Update quest progress
        this.updateQuestProgress();
    }
    
    becomePharaoh() {
        const victoryMessage = `
            🏆 VICTORY! YOU HAVE BECOME PHARAOH! 🏆
            
            Through your dedication to learning and wisdom, you have achieved the ultimate goal!
            
            Final Stats:
            Age: ${this.player.age}
            Knowledge: ${this.player.knowledge}/1000 ⭐
            Gold: ${this.player.gold}
            Health: ${this.player.health}
            
            Lessons Mastered: ${this.player.lessonsLearned.length}/${Object.keys(this.lessons).length}
            ${this.player.lessonsLearned.map(lesson => `• ${this.lessons[lesson].title}`).join('\n            ')}
            
            Achievements: ${this.player.achievements.length}/${this.achievements.length}
            
            You now rule over all of Egypt with wisdom and knowledge!
            Your reign will be remembered for thousands of years!
            
            🌟 CONGRATULATIONS, PHARAOH! 🌟
        `;
        
        setTimeout(() => {
            alert(victoryMessage);
            if (confirm("Would you like to start a new journey in ancient Egypt?")) {
                location.reload();
            }
        }, 1000);
    }
    
    updateTitle() {
        for (let i = this.titles.length - 1; i >= 0; i--) {
            const title = this.titles[i];
            if (this.player.knowledge >= title.minKnowledge && this.player.gold >= title.minGold) {
                if (this.player.title !== title.name) {
                    this.player.title = title.name;
                    this.showNotification(`🎉 You are now a ${title.name}!`);
                }
                break;
            }
        }
    }
    
    checkAchievements() {
        this.achievements.forEach(achievement => {
            if (!this.player.achievements.includes(achievement.id) && achievement.condition()) {
                this.player.achievements.push(achievement.id);
                this.showNotification(`🏆 Achievement Unlocked: ${achievement.name}!`);
                this.updateAchievementDisplay();
                if (this.settings.soundEnabled) {
                    this.playSound('achievement');
                }
            }
        });
    }
    
    updateAchievementDisplay() {
        const achievementsEl = document.getElementById('achievements');
        if (achievementsEl) {
            achievementsEl.innerHTML = this.achievements.map(achievement => {
                const unlocked = this.player.achievements.includes(achievement.id);
                return `
                    <div class="achievement ${unlocked ? 'unlocked' : 'locked'}">
                        <span class="achievement-icon">${achievement.icon}</span>
                        <span class="achievement-name">${achievement.name}</span>
                    </div>
                `;
            }).join('');
        }
    }
    
    updateDailyQuestsDisplay() {
        const questsEl = document.getElementById('dailyQuests');
        if (questsEl) {
            questsEl.innerHTML = this.player.dailyQuests.map(quest => `
                <div class="daily-quest ${quest.completed ? 'completed' : ''}">
                    <div class="quest-icon">${quest.icon}</div>
                    <div class="quest-info">
                        <div class="quest-title">${quest.title}</div>
                        <div class="quest-description">${quest.description}</div>
                        <div class="quest-reward">Reward: ${this.formatEffects(quest.reward)}</div>
                    </div>
                    ${quest.completed ? '<div class="quest-status">✅ Complete</div>' : '<div class="quest-status">⏳ In Progress</div>'}
                </div>
            `).join('');
        }
    }
    
    updateQuestProgress() {
        this.player.dailyQuests.forEach(quest => {
            if (quest.completed) return;
            
            let completed = false;
            
            switch (quest.requirement) {
                case 'complete_lesson':
                    if (this.player.lessonsLearned.length > quest.progress) {
                        quest.progress = this.player.lessonsLearned.length;
                        completed = true;
                    }
                    break;
                case 'spend_gold':
                    // This would be tracked when gold is spent
                    break;
                case 'gain_knowledge':
                    if (this.player.knowledge >= quest.amount + quest.progress) {
                        quest.progress = this.player.knowledge;
                        completed = true;
                    }
                    break;
                case 'use_item':
                    // This would be tracked when items are used
                    break;
            }
            
            if (completed) {
                quest.completed = true;
                this.applyEffects(quest.reward);
                this.showNotification(`✅ Daily Quest Complete: ${quest.title}!`);
                this.completedQuests++;
            }
        });
    }
    
    generateEvent() {
        if (this.currentEvent) return;
        
        const randomEvent = this.events[Math.floor(Math.random() * this.events.length)];
        this.currentEvent = randomEvent;
        
        const eventTitle = document.getElementById('eventTitle');
        const eventDescription = document.getElementById('eventDescription');
        const eventChoices = document.getElementById('eventChoices');
        
        if (eventTitle) eventTitle.textContent = randomEvent.title;
        if (eventDescription) eventDescription.textContent = randomEvent.description;
        
        if (eventChoices) {
            eventChoices.innerHTML = randomEvent.choices.map((choice, index) => 
                `<button class="choice-btn" onclick="makeChoice(${index})">${choice.text}</button>`
            ).join('');
        }
    }
    
    makeChoice(choiceIndex) {
        if (!this.currentEvent || this.lessonActive) return;
        
        const choice = this.currentEvent.choices[choiceIndex];
        
        // Check if this choice starts a lesson
        if (choiceIndex === 0 && this.currentEvent.lesson) {
            this.startLesson(this.currentEvent.lesson);
            return;
        }
        
        this.applyEffects(choice.effects);
        this.showNotification(choice.result);
        
        this.player.age += Math.random() < 0.3 ? 1 : 0;
        this.player.year += Math.random() < 0.2 ? 1 : 0;
        
        this.currentEvent = null;
        this.updateDisplay();
        
        if (this.player.health <= 0) {
            this.gameOver("💀 Your health has failed you. Your journey in ancient Egypt has ended.");
            return;
        }
        
        setTimeout(() => this.generateEvent(), 2000);
        
        if (this.settings.soundEnabled) {
            this.playSound('choice');
        }
    }
    
    startLesson(lessonKey) {
        if (!this.lessons[lessonKey]) return;
        
        this.currentLesson = this.lessons[lessonKey];
        this.lessonStep = 0;
        this.lessonActive = true;
        
        this.showLessonOverlay();
        
        if (this.settings.soundEnabled) {
            this.playSound('lesson');
        }
    }
    
    showLessonOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'lesson-overlay';
        overlay.id = 'lessonOverlay';
        
        const container = document.createElement('div');
        container.className = 'lesson-container';
        
        overlay.appendChild(container);
        document.body.appendChild(overlay);
        
        this.updateLessonContent();
    }
    
    updateLessonContent() {
        const container = document.querySelector('.lesson-container');
        if (!container || !this.currentLesson) return;
        
        const currentContent = this.currentLesson.content[this.lessonStep];
        const totalSteps = this.currentLesson.content.length;
        
        let contentHTML = `
            <div class="lesson-header">
                <h2>${this.currentLesson.title}</h2>
                <div class="lesson-progress">Step ${this.lessonStep + 1} of ${totalSteps}</div>
            </div>
            <div class="lesson-content">
        `;
        
        switch (currentContent.type) {
            case 'explanation':
                contentHTML += `<p>${currentContent.text}</p>`;
                break;
                
            case 'interactive':
                contentHTML += `<p>${currentContent.text}</p>`;
                
                if (currentContent.symbols) {
                    contentHTML += '<div class="symbols-grid">';
                    currentContent.symbols.forEach(symbol => {
                        contentHTML += `
                            <div class="symbol-card">
                                <div class="symbol">${symbol.symbol}</div>
                                <div class="meaning">${symbol.meaning}</div>
                                ${symbol.pronunciation ? `<div class="pronunciation">${symbol.pronunciation}</div>` : ''}
                                ${symbol.value ? `<div class="value">Value: ${symbol.value}</div>` : ''}
                            </div>
                        `;
                    });
                    contentHTML += '</div>';
                }
                
                if (currentContent.facts) {
                    contentHTML += '<ul class="facts-list">';
                    currentContent.facts.forEach(fact => {
                        contentHTML += `<li>${fact}</li>`;
                    });
                    contentHTML += '</ul>';
                }
                
                if (currentContent.steps) {
                    contentHTML += '<ol class="steps-list">';
                    currentContent.steps.forEach(step => {
                        contentHTML += `<li>${step}</li>`;
                    });
                    contentHTML += '</ol>';
                }
                break;
                
            case 'practice':
                contentHTML += `
                    <div class="lesson-practice">
                        <p>${currentContent.text}</p>
                        <div class="question">${currentContent.question}</div>
                        <input type="text" id="practiceAnswer" placeholder="Type your answer here..." autocomplete="off">
                        <button class="check-btn" onclick="checkLessonAnswer('${currentContent.answer}', '${currentContent.explanation}')">Check Answer</button>
                        <div id="answerFeedback" class="answer-feedback"></div>
                    </div>
                `;
                break;
        }
        
        contentHTML += '</div>';
        
        // Add controls
        contentHTML += `
            <div class="lesson-controls">
                ${this.lessonStep < totalSteps - 1 ? 
                    '<button class="next-btn" onclick="nextLessonStep()">Continue (Enter)</button>' : 
                    '<button class="next-btn" onclick="nextLessonStep()">Complete Lesson</button>'
                }
                <button class="skip-btn" onclick="skipLesson()">Skip Lesson (Esc)</button>
            </div>
        `;
        
        container.innerHTML = contentHTML;
        
        // Focus on answer input if it's a practice question
        const answerInput = document.getElementById('practiceAnswer');
        if (answerInput) {
            setTimeout(() => answerInput.focus(), 100);
        }
    }
    
    nextLessonStep() {
        if (!this.currentLesson) return;
        
        this.lessonStep++;
        
        if (this.lessonStep >= this.currentLesson.content.length) {
            this.endLesson();
        } else {
            this.updateLessonContent();
        }
    }
    
    endLesson() {
        if (!this.currentLesson) return;
        
        const lessonKey = Object.keys(this.lessons).find(key => this.lessons[key] === this.currentLesson);
        
        if (lessonKey && !this.player.lessonsLearned.includes(lessonKey)) {
            this.player.lessonsLearned.push(lessonKey);
            this.applyEffects({ knowledge: 50, gold: 200 });
            this.showNotification(`🎓 Lesson Complete: ${this.currentLesson.title}! +50 Knowledge, +200 Gold`);
        }
        
        // Close lesson overlay
        const overlay = document.getElementById('lessonOverlay');
        if (overlay) {
            overlay.remove();
        }
        
        this.currentLesson = null;
        this.lessonStep = 0;
        this.lessonActive = false;
        this.currentEvent = null;
        
        this.updateDisplay();
        setTimeout(() => this.generateEvent(), 1000);
    }
    
    applyEffects(effects) {
        Object.keys(effects).forEach(stat => {
            const change = effects[stat];
            this.player[stat] = Math.max(0, this.player[stat] + change);
            
            if (change !== 0) {
                this.createStatParticle(stat, change);
            }
        });
        
        // Auto-save after effects
        if (this.settings.autoSave) {
            this.saveGame();
        }
    }
    
    formatEffects(effects) {
        return Object.keys(effects).map(stat => {
            const change = effects[stat];
            const icon = { health: '❤️', gold: '💰', knowledge: '🧠' }[stat] || '';
            return `${change > 0 ? '+' : ''}${change} ${icon}${stat}`;
        }).join(', ');
    }
    
    createStatParticle(stat, change) {
        const particle = document.createElement('div');
        particle.className = 'stat-particle';
        
        const icons = { health: '❤️', gold: '💰', knowledge: '🧠' };
        
        particle.textContent = `${change > 0 ? '+' : ''}${change} ${icons[stat] || ''}`;
        particle.style.color = change > 0 ? '#4ecdc4' : '#ff6b6b';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = '50%';
        
        document.body.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }
    
    showNotification(message) {
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 4000);
        
        if (this.settings.soundEnabled) {
            this.playSound('notification');
        }
    }
    
    // Store functionality
    openStore() {
        if (this.lessonActive) return;
        
        this.storeOpen = true;
        const overlay = document.createElement('div');
        overlay.className = 'store-overlay';
        overlay.id = 'storeOverlay';
        
        const container = document.createElement('div');
        container.className = 'store-container';
        
        let storeHTML = `
            <div class="store-header">
                <h2>🏺 Egyptian Marketplace</h2>
                <div class="store-gold">Your Gold: ${this.player.gold} 💰</div>
                <button class="close-btn" onclick="closeStore()">✕</button>
            </div>
            <div class="store-content">
        `;
        
        // Consumables
        storeHTML += '<div class="store-section"><h3>🍯 Consumables</h3><div class="store-items">';
        this.storeItems.consumables.forEach(item => {
            const canAfford = this.player.gold >= item.price;
            storeHTML += `
                <div class="store-item ${canAfford ? '' : 'unaffordable'}">
                    <div class="item-name">${item.name}</div>
                    <div class="item-description">${item.description}</div>
                    <div class="item-price">${item.price} 💰</div>
                    <button class="buy-btn" onclick="buyItem('${item.id}')" ${canAfford ? '' : 'disabled'}>
                        ${canAfford ? 'Buy' : 'Too Expensive'}
                    </button>
                </div>
            `;
        });
        storeHTML += '</div></div>';
        
        // Tools
        storeHTML += '<div class="store-section"><h3>⚒️ Tools & Equipment</h3><div class="store-items">';
        this.storeItems.tools.forEach(item => {
            const canAfford = this.player.gold >= item.price;
            const alreadyOwned = this.player.inventory.some(invItem => invItem.includes(item.name.split(' ').slice(1).join(' ')));
            storeHTML += `
                <div class="store-item ${canAfford ? '' : 'unaffordable'} ${alreadyOwned ? 'owned' : ''}">
                    <div class="item-name">${item.name}</div>
                    <div class="item-description">${item.description}</div>
                    <div class="item-price">${item.price} 💰</div>
                    <button class="buy-btn" onclick="buyItem('${item.id}')" ${canAfford && !alreadyOwned ? '' : 'disabled'}>
                        ${alreadyOwned ? 'Owned' : canAfford ? 'Buy' : 'Too Expensive'}
                    </button>
                </div>
            `;
        });
        storeHTML += '</div></div>';
        
        // Artifacts
        storeHTML += '<div class="store-section"><h3>🏛️ Ancient Artifacts</h3><div class="store-items">';
        this.storeItems.artifacts.forEach(item => {
            const canAfford = this.player.gold >= item.price;
            const alreadyOwned = this.player.inventory.some(invItem => invItem.includes(item.name.split(' ').slice(1).join(' ')));
            storeHTML += `
                <div class="store-item ${canAfford ? '' : 'unaffordable'} ${alreadyOwned ? 'owned' : ''}">
                    <div class="item-name">${item.name}</div>
                    <div class="item-description">${item.description}</div>
                    <div class="item-price">${item.price} 💰</div>
                    <button class="buy-btn" onclick="buyItem('${item.id}')" ${canAfford && !alreadyOwned ? '' : 'disabled'}>
                        ${alreadyOwned ? 'Owned' : canAfford ? 'Buy' : 'Too Expensive'}
                    </button>
                </div>
            `;
        });
        storeHTML += '</div></div>';
        
        storeHTML += '</div>';
        
        container.innerHTML = storeHTML;
        overlay.appendChild(container);
        document.body.appendChild(overlay);
    }
    
    buyItem(itemId) {
        const allItems = [...this.storeItems.consumables, ...this.storeItems.tools, ...this.storeItems.artifacts];
        const item = allItems.find(i => i.id === itemId);
        
        if (!item || this.player.gold < item.price) return;
        
        this.player.gold -= item.price;
        this.player.inventory.push(item.name);
        
        // Apply permanent effects for tools
        if (item.permanent) {
            Object.keys(item.effect).forEach(stat => {
                this.player[stat] += item.effect[stat];
            });
        }
        
        this.showNotification(`✅ Purchased ${item.name}!`);
        this.updateDisplay();
        
        // Update store display
        this.closeStore();
        this.openStore();
        
        if (this.settings.soundEnabled) {
            this.playSound('purchase');
        }
    }
    
    closeStore() {
        const overlay = document.getElementById('storeOverlay');
        if (overlay) {
            overlay.remove();
        }
        this.storeOpen = false;
    }
    
    // Settings functionality
    openSettings() {
        if (this.lessonActive) return;
        
        this.settingsOpen = true;
        const overlay = document.createElement('div');
        overlay.className = 'settings-overlay';
        overlay.id = 'settingsOverlay';
        
        const container = document.createElement('div');
        container.className = 'settings-container';
        
        let settingsHTML = `
            <div class="settings-header">
                <h2>⚙️ Game Settings</h2>
                <button class="close-btn" onclick="closeSettings()">✕</button>
            </div>
            <div class="settings-content">
                <div class="setting-group">
                    <h3>🔊 Audio Settings</h3>
                    <label class="setting-item">
                        <input type="checkbox" ${this.settings.soundEnabled ? 'checked' : ''} onchange="toggleSetting('soundEnabled')">
                        Sound Effects
                    </label>
                </div>
                
                <div class="setting-group">
                    <h3>💾 Save Settings</h3>
                    <label class="setting-item">
                        <input type="checkbox" ${this.settings.autoSave ? 'checked' : ''} onchange="toggleSetting('autoSave')">
                        Auto-save Game
                    </label>
                </div>
                
                <div class="setting-group">
                    <h3>🎨 Display Settings</h3>
                    <label class="setting-item">
                        <input type="checkbox" ${this.settings.animationsEnabled ? 'checked' : ''} onchange="toggleSetting('animationsEnabled')">
                        Animations
                    </label>
                </div>
                
                <div class="setting-group">
                    <h3>⚔️ Difficulty</h3>
                    <select onchange="changeDifficulty(this.value)" class="difficulty-select">
                        <option value="easy" ${this.settings.difficulty === 'easy' ? 'selected' : ''}>Easy</option>
                        <option value="normal" ${this.settings.difficulty === 'normal' ? 'selected' : ''}>Normal</option>
                        <option value="hard" ${this.settings.difficulty === 'hard' ? 'selected' : ''}>Hard</option>
                    </select>
                </div>
                
                <div class="setting-group">
                    <h3>💾 Save Management</h3>
                    <div class="save-buttons">
                        <button class="save-btn" onclick="saveGame()">💾 Save Game</button>
                        <button class="load-btn" onclick="loadGame()">📁 Load Game</button>
                        <button class="export-btn" onclick="exportSave()">📤 Export Save</button>
                        <button class="import-btn" onclick="importSave()">📥 Import Save</button>
                        <button class="restart-btn" onclick="restartGame()">🔄 Restart Game</button>
                    </div>
                </div>
                
                <div class="setting-group">
                    <h3>📊 Game Statistics</h3>
                    <div class="game-stats">
                        <div class="stat-line">Lessons Completed: ${this.player.lessonsLearned.length}/${Object.keys(this.lessons).length}</div>
                        <div class="stat-line">Achievements: ${this.player.achievements.length}/${this.achievements.length}</div>
                        <div class="stat-line">Daily Quests Completed: ${this.completedQuests}</div>
                        <div class="stat-line">Items Owned: ${this.player.inventory.length}</div>
                        <div class="stat-line">Current Year: ${this.player.year} BCE</div>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML = settingsHTML;
        overlay.appendChild(container);
        document.body.appendChild(overlay);
    }
    
    closeSettings() {
        const overlay = document.getElementById('settingsOverlay');
        if (overlay) {
            overlay.remove();
        }
        this.settingsOpen = false;
    }
    
    toggleSetting(setting) {
        this.settings[setting] = !this.settings[setting];
        this.saveSettings();
    }
    
    changeDifficulty(difficulty) {
        this.settings.difficulty = difficulty;
        this.saveSettings();
        
        // Apply difficulty effects
        switch (difficulty) {
            case 'easy':
                this.showNotification('🟢 Easy mode: More rewards, less penalties');
                break;
            case 'normal':
                this.showNotification('🟡 Normal mode: Balanced gameplay');
                break;
            case 'hard':
                this.showNotification('🔴 Hard mode: Greater challenges, bigger rewards');
                break;
        }
    }
    
    saveGame() {
        const saveData = {
            player: this.player,
            settings: this.settings,
            completedQuests: this.completedQuests,
            gameVersion: "1.0"
        };
        
        localStorage.setItem('pharaohsLegacySave', JSON.stringify(saveData));
        this.showNotification('💾 Game saved successfully!');
    }
    
    loadGame() {
        const saveData = localStorage.getItem('pharaohsLegacySave');
        if (saveData) {
            try {
                const data = JSON.parse(saveData);
                this.player = { ...this.player, ...data.player };
                this.settings = { ...this.settings, ...data.settings };
                this.completedQuests = data.completedQuests || 0;
                
                this.updateDisplay();
                this.updateAchievementDisplay();
                this.updateDailyQuestsDisplay();
                this.showNotification('📁 Game loaded successfully!');
                
                this.closeSettings();
            } catch (error) {
                this.showNotification('❌ Failed to load save file!');
            }
        } else {
            this.showNotification('❌ No save file found!');
        }
    }
    
    exportSave() {
        const saveData = {
            player: this.player,
            settings: this.settings,
            completedQuests: this.completedQuests,
            gameVersion: "1.0",
            exportDate: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(saveData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `pharaohs_legacy_save_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        this.showNotification('📤 Save file exported!');
    }
    
    importSave() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const saveData = JSON.parse(e.target.result);
                        
                        if (saveData.gameVersion && saveData.player) {
                            this.player = { ...this.player, ...saveData.player };
                            this.settings = { ...this.settings, ...saveData.settings };
                            this.completedQuests = saveData.completedQuests || 0;
                            
                            this.updateDisplay();
                            this.updateAchievementDisplay();
                            this.updateDailyQuestsDisplay();
                            this.showNotification('📥 Save file imported successfully!');
                            
                            this.closeSettings();
                        } else {
                            this.showNotification('❌ Invalid save file format!');
                        }
                    } catch (error) {
                        this.showNotification('❌ Failed to import save file!');
                    }
                };
                reader.readAsText(file);
            }
        };
        
        input.click();
    }
    
    restartGame() {
        if (confirm('Are you sure you want to restart? All progress will be lost!')) {
            localStorage.removeItem('pharaohsLegacySave');
            location.reload();
        }
    }
    
    saveSettings() {
        localStorage.setItem('pharaohsLegacySettings', JSON.stringify(this.settings));
    }
    
    loadSettings() {
        const savedSettings = localStorage.getItem('pharaohsLegacySettings');
        if (savedSettings) {
            this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
        }
    }
    
    // Utility functions
    useItem(itemIndex) {
        if (this.lessonActive) return;
        
        const item = this.player.inventory[itemIndex];
        if (!item) return;
        
        // Find the item in store to get its effects
        const allItems = [...this.storeItems.consumables, ...this.storeItems.tools, ...this.storeItems.artifacts];
        const itemData = allItems.find(i => item.includes(i.name.split(' ').slice(1).join(' ')));
        
        if (itemData && itemData.effect && !itemData.permanent && !itemData.collectible) {
            this.applyEffects(itemData.effect);
            this.player.inventory.splice(itemIndex, 1);
            this.showNotification(`Used ${item}!`);
            this.updateDisplay();
            
            // Track quest progress for item usage
            this.player.dailyQuests.forEach(quest => {
                if (quest.requirement === 'use_item' && !quest.completed) {
                    quest.completed = true;
                    this.applyEffects(quest.reward);
                    this.showNotification(`✅ Daily Quest Complete: ${quest.title}!`);
                    this.completedQuests++;
                }
            });
        } else {
            this.showNotification(`${item} cannot be used directly.`);
        }
    }
    
    toggleInventory() {
        const inventory = document.getElementById('inventory');
        if (inventory) {
            inventory.style.display = inventory.style.display === 'none' ? 'block' : 'none';
        }
    }
    
    playSound(type) {
        if (!this.settings.soundEnabled) return;
        
        // Create audio context for sound effects
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Different sounds for different events
            switch (type) {
                case 'choice':
                    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
                    oscillator.frequency.setValueAtTime(880, audioContext.currentTime + 0.1);
                    break;
                case 'achievement':
                    oscillator.frequency.setValueAtTime(523, audioContext.currentTime);
                    oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1);
                    oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.2);
                    break;
                case 'lesson':
                    oscillator.frequency.setValueAtTime(330, audioContext.currentTime);
                    oscillator.frequency.setValueAtTime(440, audioContext.currentTime + 0.15);
                    break;
                case 'notification':
                    oscillator.frequency.setValueAtTime(660, audioContext.currentTime);
                    break;
                case 'purchase':
                    oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
                    oscillator.frequency.setValueAtTime(1100, audioContext.currentTime + 0.1);
                    break;
            }
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (error) {
            // Silently fail if audio context is not supported
        }
    }
    
    gameOver(message) {
        setTimeout(() => {
            alert(message + "\n\nFinal Stats:\n" + 
                  `Age: ${this.player.age}\n` +
                  `Knowledge: ${this.player.knowledge}\n` +
                  `Gold: ${this.player.gold}\n` +
                  `Lessons Learned: ${this.player.lessonsLearned.length}/${Object.keys(this.lessons).length}`);
            
            if (confirm("Would you like to start a new journey?")) {
                location.reload();
            }
        }, 1000);
    }
}

// Global functions for HTML onclick events
let game;

function makeChoice(choiceIndex) {
    if (game) game.makeChoice(choiceIndex);
}

function nextLessonStep() {
    if (game) game.nextLessonStep();
}

function skipLesson() {
    if (game) {
        game.endLesson();
        game.showNotification("⏭️ Lesson skipped. You can try again later!");
    }
}

function checkLessonAnswer(correctAnswer, explanation) {
    const input = document.getElementById('practiceAnswer');
    const feedback = document.getElementById('answerFeedback');
    
    if (!input || !feedback) return;
    
    const userAnswer = input.value.toLowerCase().trim();
    const isCorrect = userAnswer === correctAnswer.toLowerCase();
    
    if (isCorrect) {
        feedback.innerHTML = `<div class="correct">✅ Correct! ${explanation}</div>`;
        feedback.className = 'answer-feedback correct';
        if (game && game.settings.soundEnabled) {
            game.playSound('achievement');
        }
        
        // Auto-advance after correct answer
        setTimeout(() => {
            nextLessonStep();
        }, 2000);
    } else {
        feedback.innerHTML = `<div class="incorrect">❌ Not quite right. Try again!</div>
                             <div class="hint">Hint: ${explanation}</div>`;
        feedback.className = 'answer-feedback incorrect';
        input.focus();
        input.select();
    }
}

function useItem(itemIndex) {
    if (game) game.useItem(itemIndex);
}

function openStore() {
    if (game) game.openStore();
}

function closeStore() {
    if (game) game.closeStore();
}

function buyItem(itemId) {
    if (game) game.buyItem(itemId);
}

function openSettings() {
    if (game) game.openSettings();
}

function closeSettings() {
    if (game) game.closeSettings();
}

function toggleSetting(setting) {
    if (game) game.toggleSetting(setting);
}

function changeDifficulty(difficulty) {
    if (game) game.changeDifficulty(difficulty);
}

function saveGame() {
    if (game) game.saveGame();
}

function loadGame() {
    if (game) game.loadGame();
}

function exportSave() {
    if (game) game.exportSave();
}

function importSave() {
    if (game) game.importSave();
}

function restartGame() {
    if (game) game.restartGame();
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded, initializing game...");
    game = new PharaohsLegacy();
    game.init();
});

// Handle page visibility changes for auto-save
document.addEventListener('visibilitychange', () => {
    if (document.hidden && game && game.settings.autoSave) {
        game.saveGame();
    }
});

// Handle beforeunload for save reminder
window.addEventListener('beforeunload', (e) => {
    if (game && game.gameStarted && !game.settings.autoSave) {
        e.preventDefault();
        e.returnValue = 'Your progress may be lost. Are you sure you want to leave?';
        return e.returnValue;
    }
});

// Service Worker registration for offline play (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Additional utility functions
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Debug functions (remove in production)
function debugAddGold(amount = 1000) {
    if (game) {
        game.player.gold += amount;
        game.updateDisplay();
        game.showNotification(`🐛 Debug: Added ${amount} gold`);
    }
}

function debugAddKnowledge(amount = 100) {
    if (game) {
        game.player.knowledge += amount;
        game.updateDisplay();
        game.showNotification(`🐛 Debug: Added ${amount} knowledge`);
    }
}

function debugCompleteAllLessons() {
    if (game) {
        game.player.lessonsLearned = Object.keys(game.lessons);
        game.updateDisplay();
        game.showNotification(`🐛 Debug: All lessons completed`);
    }
}

function debugUnlockAllAchievements() {
    if (game) {
        game.player.achievements = game.achievements.map(a => a.id);
        game.updateAchievementDisplay();
        game.showNotification(`🐛 Debug: All achievements unlocked`);
    }
}

// Console commands for debugging
console.log(`
🏺 Pharaoh's Legacy - Debug Commands:
- debugAddGold(amount) - Add gold
- debugAddKnowledge(amount) - Add knowledge  
- debugCompleteAllLessons() - Complete all lessons
- debugUnlockAllAchievements() - Unlock all achievements
- game.player - View player data
- game.settings - View settings
`);

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PharaohsLegacy };
}

function startAdventure() {
    const name = document.getElementById('characterNameInput').value.trim();
    const bio = document.getElementById('characterBioInput').value.trim();
    
    if (!name) {
        alert('Please enter your character name!');
        return;
    }
    
    if (!bio) {
        alert('Please write a bio for your character!');
        return;
    }
    
    // Set character info
    document.getElementById('characterName').textContent = name;
    document.getElementById('characterBio').textContent = bio;
    document.getElementById('characterAvatar').textContent = selectedAvatar;
    
    // Hide setup modal and show game
    document.getElementById('characterSetup').classList.add('hidden');
    document.getElementById('gameContainer').classList.remove('hidden');
    
    // Initialize the game
    window.game = new PharaohsLegacy();
    
    // Save character data
    localStorage.setItem('characterName', name);
    localStorage.setItem('characterBio', bio);
    localStorage.setItem('characterAvatar', selectedAvatar);
}

function openAvatarChanger() {
    document.getElementById('avatarChanger').classList.remove('hidden');
}

function closeAvatarChanger() {
    document.getElementById('avatarChanger').classList.add('hidden');
}

function changeAvatar(avatar) {
    document.getElementById('characterAvatar').textContent = avatar;
    localStorage.setItem('characterAvatar', avatar);
    closeAvatarChanger();
    
    if (window.game) {
        game.showNotification('🎭 Avatar changed successfully!');
    }
}

// Load saved character data
function loadCharacterData() {
    const savedName = localStorage.getItem('characterName');
    const savedBio = localStorage.getItem('characterBio');
    const savedAvatar = localStorage.getItem('characterAvatar');
    
    if (savedName && savedBio && savedAvatar) {
        document.getElementById('characterName').textContent = savedName;
        document.getElementById('characterBio').textContent = savedBio;
        document.getElementById('characterAvatar').textContent = savedAvatar;
        return true;
    }
    return false;
}

// Handle splash screen transition
document.addEventListener('DOMContentLoaded', function() {
    // Show splash screen for 3 seconds
    setTimeout(() => {
        document.getElementById('splashScreen').style.display = 'none';
        
        // Check if character data exists
        if (loadCharacterData()) {
            // Character exists, go straight to game
            document.getElementById('gameContainer').classList.remove('hidden');
            window.game = new PharaohsLegacy();
        } else {
            // New player, show character setup
            document.getElementById('characterSetup').classList.remove('hidden');
        }
    }, 3000);
});


// Add this to handle the splash screen transition
document.addEventListener('DOMContentLoaded', function() {
    // Show splash screen for 3 seconds, then transition to game
    setTimeout(() => {
        document.getElementById('splashScreen').style.display = 'none';
        document.getElementById('gameContainer').classList.remove('hidden');
        
        // Initialize the game
        window.game = new PharaohsLegacy();
    }, 3000);
});

let selectedAvatar = '👤';

function selectAvatar(avatar) {
    selectedAvatar = avatar;
    document.querySelectorAll('.avatar-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`[data-avatar="${avatar}"]`).classList.add('selected');
}

function startAdventure() {
    const name = document.getElementById('characterNameInput').value.trim();
    const bio = document.getElementById('characterBioInput').value.trim();
    
    if (!name) {
        alert('Please enter your character name!');
        return;
    }
    
    if (!bio) {
        alert('Please write a bio for your character!');
        return;
    }
    
    // Set character info
    if (!localStorage.getItem('characterName') === null) {
        document.getElementById('characterName').textContent = name;
    }
    document.getElementById('characterBio').textContent = bio;
    document.getElementById('characterAvatar').textContent = selectedAvatar;
    
    // Hide setup modal and show game
    document.getElementById('characterSetup').classList.add('hidden');
    document.getElementById('gameContainer').classList.remove('hidden');
    
    // Initialize the game
    window.game = new PharaohsLegacy();
    
    // Save character data
    localStorage.setItem('characterName', name);
    localStorage.setItem('characterBio', bio);
    localStorage.setItem('characterAvatar', selectedAvatar);
}

function openAvatarChanger() {
    document.getElementById('avatarChanger').classList.remove('hidden');
}

function closeAvatarChanger() {
    document.getElementById('avatarChanger').classList.add('hidden');
}

function changeAvatar(avatar) {
    document.getElementById('characterAvatar').textContent = avatar;
    localStorage.setItem('characterAvatar', avatar);
    closeAvatarChanger();
    
    if (window.game) {
        game.showNotification('🎭 Avatar changed successfully!');
    }
}

function openAvatarChanger() {
    document.getElementById('avatarChanger').classList.remove('hidden');
}

function closeAvatarChanger() {
    document.getElementById('avatarChanger').classList.add('hidden');
}

function changeAvatar(avatar) {
    document.getElementById('characterAvatar').textContent = avatar;
    localStorage.setItem('characterAvatar', avatar);
    closeAvatarChanger();
    
    if (window.game) {
        game.showNotification('🎭 Avatar changed successfully!');
    }
}

 // Minigame Data and Variables
const hieroglyphSymbols = [
    { symbol: '𓂀', meaning: 'Life' },
    { symbol: '𓇳', meaning: 'Sun' },
    { symbol: '𓈖', meaning: 'Water' },
    { symbol: '𓊪', meaning: 'House' },
    { symbol: '𓏺', meaning: 'Bread' },
    { symbol: '𓄿', meaning: 'Eagle' },
    { symbol: '𓃭', meaning: 'Lion' },
    { symbol: '𓆓', meaning: 'Snake' }
];

const egyptianNumerals = [
    { symbols: '𓏺', value: 1 },
    { symbols: '𓏻', value: 2 },
    { symbols: '𓏼', value: 3 },
    { symbols: '𓎆', value: 10 },
    { symbols: '𓎆𓏺', value: 11 },
    { symbols: '𓎆𓎆', value: 20 },
    { symbols: '𓍢', value: 100 },
    { symbols: '𓍢𓎆', value: 110 },
    { symbols: '𓍢𓎆𓏺', value: 111 }
];

let minigameStats = {
    hieroglyphStreak: 0,
    mathScore: 0,
    totalGamesPlayed: 0,
    bestStreak: 0,
    currentHieroglyph: null,
    currentMath: null,
    testMode: false
};

// Switch between minigames
function switchMinigame(gameType) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.minigame-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(gameType + 'Game').classList.add('active');
}

// Hieroglyph Game Functions
function newHieroglyphSymbol() {
    const symbolElement = document.getElementById('currentSymbol');
    const meaningElement = document.getElementById('symbolMeaning');
    
    if (!symbolElement || !meaningElement) return;
    
    minigameStats.currentHieroglyph = hieroglyphSymbols[Math.floor(Math.random() * hieroglyphSymbols.length)];
    symbolElement.textContent = minigameStats.currentHieroglyph.symbol;
    meaningElement.textContent = minigameStats.currentHieroglyph.meaning;
    minigameStats.testMode = false;
}

function showHieroglyphTest() {
    const meaningElement = document.getElementById('symbolMeaning');
    if (!meaningElement) return;
    
    meaningElement.textContent = '???';
    minigameStats.testMode = true;
    
    // Create answer buttons
    const gameControls = document.querySelector('#hieroglyphGame .game-controls');
    gameControls.innerHTML = '';
    
    // Get 3 random wrong answers + 1 correct answer
    const wrongAnswers = hieroglyphSymbols
        .filter(h => h.meaning !== minigameStats.currentHieroglyph.meaning)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(h => h.meaning);
    
    const allAnswers = [...wrongAnswers, minigameStats.currentHieroglyph.meaning]
        .sort(() => Math.random() - 0.5);
    
    allAnswers.forEach(answer => {
        const btn = document.createElement('button');
        btn.className = 'mini-btn';
        btn.textContent = answer;
        btn.onclick = () => checkHieroglyphAnswer(answer);
        gameControls.appendChild(btn);
    });
}

function checkHieroglyphAnswer(selectedAnswer) {
    const meaningElement = document.getElementById('symbolMeaning');
    const gameControls = document.querySelector('#hieroglyphGame .game-controls');
    
    if (selectedAnswer === minigameStats.currentHieroglyph.meaning) {
        minigameStats.hieroglyphStreak++;
        meaningElement.textContent = '✅ Correct!';
        meaningElement.style.color = '#4ecdc4';
        
        // Award knowledge points to main game
        if (window.game) {
            game.applyEffects({ knowledge: 5 });
            game.showNotification('🎮 Minigame bonus: +5 Knowledge!');
        }
    } else {
        meaningElement.textContent = `❌ Wrong! It was: ${minigameStats.currentHieroglyph.meaning}`;
        meaningElement.style.color = '#ff6b6b';
        minigameStats.hieroglyphStreak = 0;
    }
    
    // Update best streak
    if (minigameStats.hieroglyphStreak > minigameStats.bestStreak) {
        minigameStats.bestStreak = minigameStats.hieroglyphStreak;
    }
    
    minigameStats.totalGamesPlayed++;
    updateMinigameDisplay();
    
    // Reset controls after 2 seconds
    setTimeout(() => {
        gameControls.innerHTML = `
            <button class="mini-btn" onclick="showHieroglyphTest()">Test Me!</button>
            <button class="mini-btn secondary" onclick="newHieroglyphSymbol()">New Symbol</button>
        `;
        meaningElement.style.color = '#4ecdc4';
        newHieroglyphSymbol();
    }, 2000);
}

// Math Game Functions
function newMathProblem() {
    const numeralElement = document.getElementById('egyptianNumeral');
    const inputElement = document.getElementById('mathInput');
    const feedbackElement = document.getElementById('mathFeedback');
    
    if (!numeralElement || !inputElement) return;
    
    minigameStats.currentMath = egyptianNumerals[Math.floor(Math.random() * egyptianNumerals.length)];
    numeralElement.textContent = minigameStats.currentMath.symbols;
    inputElement.value = '';
    if (feedbackElement) feedbackElement.textContent = '';
}

function checkMathAnswer() {
    const inputElement = document.getElementById('mathInput');
    const feedbackElement = document.getElementById('mathFeedback');
    
    if (!inputElement || !feedbackElement || !minigameStats.currentMath) return;
    
    const userAnswer = parseInt(inputElement.value);
    
    if (userAnswer === minigameStats.currentMath.value) {
        minigameStats.mathScore += 10;
        feedbackElement.textContent = '✅ Correct!';
        feedbackElement.className = 'math-feedback correct';
        
        // Award knowledge points to main game
        if (window.game) {
            game.applyEffects({ knowledge: 3 });
            game.showNotification('🎮 Math bonus: +3 Knowledge!');
        }
    } else {
        feedbackElement.textContent = `❌ Wrong! Answer was ${minigameStats.currentMath.value}`;
        feedbackElement.className = 'math-feedback incorrect';
    }
    
    minigameStats.totalGamesPlayed++;
    updateMinigameDisplay();
    
    // Auto-generate new problem after 2 seconds
    setTimeout(() => {
        newMathProblem();
    }, 2000);
}

// Update minigame display
function updateMinigameDisplay() {
    const streakElement = document.getElementById('hieroglyphStreak');
    const mathScoreElement = document.getElementById('mathScore');
    const totalGamesElement = document.getElementById('totalGamesPlayed');
    const bestStreakElement = document.getElementById('bestStreak');
    
    if (streakElement) streakElement.textContent = minigameStats.hieroglyphStreak;
    if (mathScoreElement) mathScoreElement.textContent = minigameStats.mathScore;
    if (totalGamesElement) totalGamesElement.textContent = minigameStats.totalGamesPlayed;
    if (bestStreakElement) bestStreakElement.textContent = minigameStats.bestStreak;
}

// Initialize minigames
function initializeMinigames() {
    // Wait a bit to ensure DOM is ready
    setTimeout(() => {
        newHieroglyphSymbol();
        newMathProblem();
        updateMinigameDisplay();
    }, 500);
}

// Add Enter key support for math input
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const mathInput = document.getElementById('mathInput');
        if (mathInput) {
            mathInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    checkMathAnswer();
                }
            });
        }
    }, 1000);
});

function checkHieroglyphAnswer(selectedAnswer) {
    const meaningElement = document.getElementById('symbolMeaning');
    const gameControls = document.querySelector('#hieroglyphGame .game-controls');
    
    if (selectedAnswer === minigameStats.currentHieroglyph.meaning) {
        minigameStats.hieroglyphStreak++;
        meaningElement.textContent = '✅ Correct!';
        meaningElement.style.color = '#4ecdc4';
        
        // Award knowledge points to main game
        if (window.game) {
            game.applyEffects({ knowledge: 5 });
            game.showNotification('🎮 Minigame bonus: +5 Knowledge!');
        }
    } else {
        meaningElement.textContent = `❌ Wrong! It was: ${minigameStats.currentHieroglyph.meaning}`;
        meaningElement.style.color = '#ff6b6b';
        minigameStats.hieroglyphStreak = 0;
    }
    
    // Update best streak
    if (minigameStats.hieroglyphStreak > minigameStats.bestStreak) {
        minigameStats.bestStreak = minigameStats.hieroglyphStreak;
    }
    
    minigameStats.totalGamesPlayed++;
    updateMinigameDisplay();
    
    // Reset controls after 2 seconds
    setTimeout(() => {
        gameControls.innerHTML = `
            <button class="mini-btn" onclick="showHieroglyphTest()">Test Me!</button>
            <button class="mini-btn secondary" onclick="newHieroglyphSymbol()">New Symbol</button>
        `;
        meaningElement.style.color = '#4ecdc4';
        newHieroglyphSymbol();
    }, 2000);
}

// Math Game Functions
function newMathProblem() {
    const numeralElement = document.getElementById('egyptianNumeral');
    const inputElement = document.getElementById('mathInput');
    const feedbackElement = document.getElementById('mathFeedback');
    
    if (!numeralElement || !inputElement) return;
    
    minigameStats.currentMath = egyptianNumerals[Math.floor(Math.random() * egyptianNumerals.length)];
    numeralElement.textContent = minigameStats.currentMath.symbols;
    inputElement.value = '';
    if (feedbackElement) feedbackElement.textContent = '';
}

function checkMathAnswer() {
    const inputElement = document.getElementById('mathInput');
    const feedbackElement = document.getElementById('mathFeedback');
    
    if (!inputElement || !feedbackElement || !minigameStats.currentMath) return;
    
    const userAnswer = parseInt(inputElement.value);
    
    if (userAnswer === minigameStats.currentMath.value) {
        minigameStats.mathScore += 10;
        feedbackElement.textContent = '✅ Correct!';
        feedbackElement.className = 'math-feedback correct';
        
        // Award knowledge points to main game
        if (window.game) {
            game.applyEffects({ knowledge: 3 });
            game.showNotification('🎮 Math bonus: +3 Knowledge!');
        }
    } else {
        feedbackElement.textContent = `❌ Wrong! Answer was ${minigameStats.currentMath.value}`;
        feedbackElement.className = 'math-feedback incorrect';
    }
    
    minigameStats.totalGamesPlayed++;
    updateMinigameDisplay();
    
    // Auto-generate new problem after 2 seconds
    setTimeout(() => {
        newMathProblem();
    }, 2000);
}

// Update minigame display
function updateMinigameDisplay() {
    const streakElement = document.getElementById('hieroglyphStreak');
    const mathScoreElement = document.getElementById('mathScore');
    const totalGamesElement = document.getElementById('totalGamesPlayed');
    const bestStreakElement = document.getElementById('bestStreak');
    
    if (streakElement) streakElement.textContent = minigameStats.hieroglyphStreak;
    if (mathScoreElement) mathScoreElement.textContent = minigameStats.mathScore;
    if (totalGamesElement) totalGamesElement.textContent = minigameStats.totalGamesPlayed;
    if (bestStreakElement) bestStreakElement.textContent = minigameStats.bestStreak;
}

// Initialize minigames
function initializeMinigames() {
    setTimeout(() => {
        newHieroglyphSymbol();
        newMathProblem();
        updateMinigameDisplay();
    }, 500);
}

// Add Enter key support for math input
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const mathInput = document.getElementById('mathInput');
        if (mathInput) {
            mathInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    checkMathAnswer();
                }
            });
        }
    }, 1000);
});
