// Add these new classes and functions to your existing script.js file

class MiniGames {
    constructor(game) {
        this.game = game;
        this.hieroglyphScore = 0;
        this.mathScore = 0;
        this.memoryLevel = 1;
        this.quizScore = 0;
        this.quizTotal = 0;
        this.currentHieroglyphChallenge = null;
        this.currentMathChallenge = null;
        this.memorySequence = [];
        this.memoryInput = [];
        this.memoryShowingSequence = false;
        this.currentQuiz = null;
        this.hieroglyphsLearned = new Set();
        this.factsDiscovered = new Set();
        
        this.hieroglyphData = [
            { symbol: "𓇳", meaning: "Sun/Ra", pronunciation: "ra" },
            { symbol: "𓈖", meaning: "Water/N sound", pronunciation: "n" },
            { symbol: "𓀀", meaning: "Man", pronunciation: "s" },
            { symbol: "𓁐", meaning: "Woman", pronunciation: "st" },
            { symbol: "𓃭", meaning: "Lion", pronunciation: "rw" },
            { symbol: "𓄿", meaning: "Vulture (A)", pronunciation: "a" },
            { symbol: "𓊪", meaning: "Stool/P sound", pronunciation: "p" },
            { symbol: "𓏺", meaning: "One (1)", pronunciation: "wa" },
            { symbol: "𓎆", meaning: "Ten (10)", pronunciation: "medju" },
            { symbol: "𓍢", meaning: "Hundred (100)", pronunciation: "shet" },
            { symbol: "𓆼", meaning: "Thousand (1000)", pronunciation: "kha" },
            { symbol: "𓂭", meaning: "Ten Thousand", pronunciation: "djeba" },
            { symbol: "𓆐", meaning: "Hundred Thousand", pronunciation: "hefnu" },
            { symbol: "𓁨", meaning: "Million", pronunciation: "heh" },
            { symbol: "𓊨", meaning: "Anubis", pronunciation: "anpu" },
            { symbol: "𓁹", meaning: "Eye of Horus", pronunciation: "wedjat" },
            { symbol: "𓋹", meaning: "Ankh (Life)", pronunciation: "ankh" },
            { symbol: "𓌃", meaning: "Was scepter", pronunciation: "was" },
            { symbol: "𓇯", meaning: "Thoth", pronunciation: "djehuty" },
            { symbol: "𓊪𓏏𓇯", meaning: "Ptah", pronunciation: "ptah" }
        ];
        
        this.mathSymbols = {
            "𓏺": 1,
            "𓎆": 10,
            "𓍢": 100,
            "𓆼": 1000,
            "𓂭": 10000,
            "𓆐": 100000,
            "𓁨": 1000000
        };
        
        this.quizQuestions = [
            {
                question: "What was the primary purpose of mummification?",
                options: ["Preserve body for afterlife", "Medical research", "Religious ceremony", "Art form"],
                correct: 0,
                explanation: "Mummification preserved the body for the journey to the afterlife."
            },
            {
                question: "Which god was known as the 'King of the Gods'?",
                options: ["Anubis", "Horus", "Ra", "Thoth"],
                correct: 2,
                explanation: "Ra, the sun god, was considered the king of all Egyptian gods."
            },
            {
                question: "How long did the mummification process typically take?",
                options: ["7 days", "30 days", "70 days", "100 days"],
                correct: 2,
                explanation: "The complete mummification process took 70 days."
            },
            {
                question: "What was the Egyptian writing system called?",
                options: ["Cuneiform", "Hieroglyphs", "Demotic", "Coptic"],
                correct: 1,
                explanation: "Hieroglyphs were the formal writing system of ancient Egypt."
            },
            {
                question: "Which river was essential to Egyptian civilization?",
                options: ["Euphrates", "Tigris", "Nile", "Jordan"],
                correct: 2,
                explanation: "The Nile River was the lifeblood of ancient Egyptian civilization."
            },
            {
                question: "What did Egyptians use to cut through hard granite?",
                options: ["Iron tools", "Copper and abrasives", "Steel chisels", "Diamond tools"],
                correct: 1,
                explanation: "Egyptians used copper tools with quartz sand as an abrasive."
            },
            {
                question: "Which star marked the Egyptian New Year?",
                options: ["Polaris", "Sirius", "Vega", "Orion"],
                correct: 1,
                explanation: "Sirius (Sopdet) rising marked the beginning of the Egyptian New Year."
            },
            {
                question: "How many days were in the Egyptian calendar?",
                options: ["360", "365", "354", "366"],
                correct: 1,
                explanation: "The Egyptian calendar had 365 days: 12 months of 30 days plus 5 extra days."
            }
        ];
        
        this.egyptianFacts = [
            "The Great Pyramid was the tallest building in the world for over 3,800 years!",
            "Ancient Egyptians invented toothpaste made from mint, salt, and dried iris flowers.",
            "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid.",
            "The ancient Egyptians were the first to use decimal numbers and fractions.",
            "Egyptian women had more rights than women in most other ancient civilizations.",
            "The Rosetta Stone was the key to deciphering hieroglyphs in modern times.",
            "Ancient Egyptians believed cats were sacred and mummified them too.",
            "The Egyptian calendar was so accurate it's only 12 minutes longer than our current calendar.",
            "Egyptians invented paper (papyrus), ink, and the first known surgical procedures.",
            "The Great Sphinx is older than Stonehenge and the Colosseum combined.",
            "Ancient Egyptians used honey as a natural antibiotic for treating wounds.",
            "The word 'chemistry' comes from 'Khem', the ancient name for Egypt.",
            "Egyptians were the first to use makeup for both beauty and protection from the sun.",
            "The ancient Egyptian board game Senet is over 5,000 years old.",
            "Egyptian pyramids were originally covered in smooth, white limestone that made them shine.",
            "Ancient Egyptians invented the 24-hour day and the 365-day year.",
            "The Egyptian god Thoth was said to have invented writing and mathematics.",
            "Ancient Egyptian doctors could perform cataract surgery and set broken bones.",
            "The Egyptians built the first known lighthouse, the Pharos of Alexandria.",
            "Ancient Egyptians used a form of birth control made from crocodile dung."
        ];
        
        this.timelineEvents = [
            { year: "3100 BCE", event: "Unification of Upper and Lower Egypt under Pharaoh Menes" },
            { year: "2686 BCE", event: "Beginning of the Old Kingdom period" },
            { year: "2580 BCE", event: "Construction of the Great Pyramid of Giza begins" },
            { year: "2055 BCE", event: "Middle Kingdom period begins" },
            { year: "1550 BCE", event: "New Kingdom period starts, Egypt becomes an empire" },
            { year: "1479 BCE", event: "Hatshepsut becomes pharaoh, one of the most successful female rulers" },
            { year: "1353 BCE", event: "Akhenaten introduces monotheistic worship of Aten" },
            { year: "1332 BCE", event: "Tutankhamun becomes pharaoh at age 9" },
            { year: "1279 BCE", event: "Ramesses II begins his 66-year reign" },
            { year: "1274 BCE", event: "Battle of Kadesh between Egypt and the Hittites" },
            { year: "1069 BCE", event: "End of the New Kingdom, beginning of decline" },
            { year: "332 BCE", event: "Alexander the Great conquers Egypt" },
            { year: "305 BCE", event: "Ptolemaic dynasty begins" },
            { year: "51 BCE", event: "Cleopatra VII becomes the last pharaoh of Egypt" },
            { year: "30 BCE", event: "Egypt becomes a Roman province" }
        ];
        
        this.init();
    }
    
    init() {
        this.updateProgressDisplay();
        this.populateSymbolReference();
        this.populateTimeline();
        this.newHieroglyphChallenge();
        this.newMathChallenge();
        this.newQuizQuestion();
        this.getNewFact();
    }
    
    // Hieroglyph Matching Game
    newHieroglyphChallenge() {
        const randomHieroglyph = this.hieroglyphData[Math.floor(Math.random() * this.hieroglyphData.length)];
        this.currentHieroglyphChallenge = randomHieroglyph;
        
        document.getElementById('currentHieroglyph').textContent = randomHieroglyph.symbol;
        
        // Create options with correct answer and 2 random wrong answers
        const options = [randomHieroglyph.meaning];
        while (options.length < 3) {
            const randomOption = this.hieroglyphData[Math.floor(Math.random() * this.hieroglyphData.length)].meaning;
            if (!options.includes(randomOption)) {
                options.push(randomOption);
            }
        }
        
        // Shuffle options
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
        
        this.correctHieroglyphIndex = options.indexOf(randomHieroglyph.meaning);
        
        const optionButtons = document.querySelectorAll('.hieroglyph-option');
        optionButtons.forEach((button, index) => {
            button.textContent = options[index];
            button.className = 'hieroglyph-option';
            button.onclick = () => this.checkHieroglyphAnswer(index);
        });
    }
    
    checkHieroglyphAnswer(selectedIndex) {
        const buttons = document.querySelectorAll('.hieroglyph-option');
        
        if (selectedIndex === this.correctHieroglyphIndex) {
            buttons[selectedIndex].classList.add('correct');
            this.hieroglyphScore += 10;
            this.hieroglyphsLearned.add(this.currentHieroglyphChallenge.symbol);
            this.game.showNotification(`✅ Correct! +10 points. ${this.currentHieroglyphChallenge.symbol} means ${this.currentHieroglyphChallenge.meaning}`);
            
            // Award knowledge points
            this.game.applyEffects({ knowledge: 2 });
            
            setTimeout(() => this.newHieroglyphChallenge(), 1500);
        } else {
            buttons[selectedIndex].classList.add('incorrect');
            buttons[this.correctHieroglyphIndex].classList.add('correct');
            this.game.showNotification(`❌ Wrong! ${this.currentHieroglyphChallenge.symbol} means ${this.currentHieroglyphChallenge.meaning}`);
            
            setTimeout(() => this.newHieroglyphChallenge(), 2000);
        }
        
        document.getElementById('hieroglyphScore').textContent = this.hieroglyphScore;
        this.updateProgressDisplay();
        
        // Disable all buttons temporarily
        buttons.forEach(button => button.style.pointerEvents = 'none');
        setTimeout(() => {
            buttons.forEach(button => button.style.pointerEvents = 'auto');
        }, 1500);
    }
    
    // Egyptian Math Game
    newMathChallenge() {
        let targetNumber = Math.floor(Math.random() * 999) + 1;
        let egyptianNumber = this.convertToEgyptian(targetNumber);
        
        this.currentMathChallenge = targetNumber;
        document.getElementById('egyptianNumber').textContent = egyptianNumber;
        document.getElementById('mathAnswer').value = '';
        document.getElementById('mathAnswer').focus();
    }
    
    convertToEgyptian(number) {
        let result = '';
        const symbols = [
            { value: 1000, symbol: '𓆼' },
            { value: 100, symbol: '𓍢' },
            { value: 10, symbol: '𓎆' },
            { value: 1, symbol: '𓏺' }
        ];
        
        symbols.forEach(({ value, symbol }) => {
            const count = Math.floor(number / value);
            result += symbol.repeat(count);
            number %= value;
        });
        
        return result || '𓏺';
    }
    
    checkMathAnswer() {
        const userAnswer = parseInt(document.getElementById('mathAnswer').value);
        
        if (userAnswer === this.currentMathChallenge) {
            this.mathScore += 15;
            this.game.showNotification(`✅ Correct! ${this.currentMathChallenge} is right! +15 points`);
            this.game.applyEffects({ knowledge: 3 });
            setTimeout(() => this.newMathChallenge(), 1000);
        } else {
            this.game.showNotification(`❌ Wrong! The answer was ${this.currentMathChallenge}`);
            setTimeout(() => this.newMathChallenge(), 1500);
        }
        
        document.getElementById('mathScore').textContent = this.mathScore;
        this.updateProgressDisplay();
    }
    
    // Memory Game
    startMemoryGame() {
        this.memorySequence = [];
        this.memoryInput = [];
        this.memoryLevel = 1;
        this.addToMemorySequence();
        this.showMemorySequence();
    }
    
    addToMemorySequence() {
        const symbols = ['𓇳', '𓈖', '𓀀', '𓁐', '𓃭', '𓄿', '𓊪', '𓏺'];
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.memorySequence.push(randomSymbol);
    }
    
    showMemorySequence() {
        this.memoryShowingSequence = true;
        const display = document.getElementById('memoryDisplay');
        const input = document.getElementById('memoryInput');
        
        display.textContent = 'Watch the sequence...';
        input.innerHTML = '';
        
        let index = 0;
        const showNext = () => {
            if (index < this.memorySequence.length) {
                display.textContent = this.memorySequence[index];
                index++;
                setTimeout(showNext, 800);
            } else {
                display.textContent = 'Click the symbols in order!';
                this.createMemoryInput();
                this.memoryShowingSequence = false;
            }
        };
        
        setTimeout(showNext, 1000);
    }
    
    createMemoryInput() {
        const input = document.getElementById('memoryInput');
        const symbols = ['𓇳', '𓈖', '𓀀', '𓁐', '𓃭', '𓄿', '𓊪', '𓏺'];
        
        input.innerHTML = symbols.map(symbol => 
            `<div class="memory-symbol" onclick="miniGames.selectMemorySymbol('${symbol}')">${symbol}</div>`
        ).join('');
        
        this.memoryInput = [];
    }
    
    selectMemorySymbol(symbol) {
        if (this.memoryShowingSequence) return;
        
        this.memoryInput.push(symbol);
        
        if (this.memoryInput.length === this.memorySequence.length) {
            this.checkMemorySequence();
        }
        
        // Visual feedback
        const display = document.getElementById('memoryDisplay');
        display.textContent = this.memoryInput.join(' ');
    }
    
    checkMemorySequence() {
        const correct = this.memoryInput.every((symbol, index) => symbol === this.memorySequence[index]);
        
        if (correct) {
            this.memoryLevel++;
            this.game.showNotification(`✅ Correct sequence! Level ${this.memoryLevel}`);
            this.game.applyEffects({ knowledge: 5 });
            
            setTimeout(() => {
                this.addToMemorySequence();
                this.showMemorySequence();
            }, 1500);
        } else {
            this.game.showNotification(`❌ Wrong sequence! Starting over...`);
            setTimeout(() => this.startMemoryGame(), 1500);
        }
        
        document.getElementById('memoryLevel').textContent = this.memoryLevel;
        this.updateProgressDisplay();
    }
    
    // Quiz Game
    newQuizQuestion() {
        const randomQuestion = this.quizQuestions[Math.floor(Math.random() * this.quizQuestions.length)];
        this.currentQuiz = randomQuestion;
        
        document.getElementById('quizQuestion').textContent = randomQuestion.question;
        
        const optionsContainer = document.getElementById('quizOptions');
        optionsContainer.innerHTML = randomQuestion.options.map((option, index) => 
            `<button class="quiz-option" onclick="miniGames.checkQuizAnswer(${index})">${option}</button>`
        ).join('');
        
        this.quizTotal++;
        document.getElementById('quizTotal').textContent = this.quizTotal;
    }
    
    checkQuizAnswer(selectedIndex) {
        const buttons = document.querySelectorAll('.quiz-option');
        
        if (selectedIndex === this.currentQuiz.correct) {
            buttons[selectedIndex].classList.add('correct');
            this.quizScore++;
            this.game.showNotification(`✅ Correct! ${this.currentQuiz.explanation}`);
            this.game.applyEffects({ knowledge: 4 });
        } else {
            buttons[selectedIndex].classList.add('incorrect');
            buttons[this.currentQuiz.correct].classList.add('correct');
            this.game.showNotification(`❌ Wrong! ${this.currentQuiz.explanation}`);
        }
        
        document.getElementById('quizScore').textContent = this.quizScore;
        this.updateProgressDisplay();
        
        // Disable all buttons temporarily
        buttons.forEach(button => button.style.pointerEvents = 'none');
        setTimeout(() => {
            buttons.forEach(button => button.style.pointerEvents = 'auto');
            this.newQuizQuestion();
        }, 3000);
    }
    
    // Learning Content Functions
    getNewFact() {
        const randomFact = this.egyptianFacts[Math.floor(Math.random() * this.egyptianFacts.length)];
        document.getElementById('dailyFact').textContent = randomFact;
        this.factsDiscovered.add(randomFact);
        this.updateProgressDisplay();
    }
    
    populateSymbolReference() {
        const symbolList = document.getElementById('symbolList');
        symbolList.innerHTML = this.hieroglyphData.slice(0, 12).map(item => 
            `<div class="symbol-item">
                <div class="symbol">${item.symbol}</div>
                <div class="meaning">${item.meaning}</div>
            </div>`
        ).join('');
    }
    
    populateTimeline() {
        const timelineEvents = document.getElementById('timelineEvents');
        timelineEvents.innerHTML = this.timelineEvents.map(event => 
            `<div class="timeline-event">
                <div class="year">${event.year}</div>
                <div class="event">${event.event}</div>
            </div>`
        ).join('');
    }
    
    updateProgressDisplay() {
        document.getElementById('hieroglyphsLearned').textContent = `${this.hieroglyphsLearned.size}/20`;
        document.getElementById('highScore').textContent = Math.max(this.hieroglyphScore, this.mathScore, this.memoryLevel * 10, this.quizScore * 5);
        document.getElementById('factsDiscovered').textContent = `${this.factsDiscovered.size}/50`;
    }
}

// Tab switching functions
function switchMiniGameTab(tabName) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.minigame-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.minigame-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab and content
    event.target.classList.add('active');
    document.getElementById(tabName + 'Game').classList.add('active');
    
    // Focus on input if it's math game
    if (tabName === 'math') {
        setTimeout(() => {
            const mathInput = document.getElementById('mathAnswer');
            if (mathInput) mathInput.focus();
        }, 100);
    }
}

function switchLearningTab(tabName) {
    // Remove active class from all tabs and content
    document.querySelectorAll('.learning-tabs .tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.learning-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to selected tab and content
    event.target.classList.add('active');
    document.getElementById(tabName + 'Content').classList.add('active');
}

// Global mini-game functions
function newHieroglyphChallenge() {
    if (window.miniGames) window.miniGames.newHieroglyphChallenge();
}

function checkHieroglyphAnswer(index) {
    if (window.miniGames) window.miniGames.checkHieroglyphAnswer(index);
}

function newMathChallenge() {
    if (window.miniGames) window.miniGames.newMathChallenge();
}

function checkMathAnswer() {
    if (window.miniGames) window.miniGames.checkMathAnswer();
}

function startMemoryGame() {
    if (window.miniGames) window.miniGames.startMemoryGame();
}

function newQuizQuestion() {
    if (window.miniGames) window.miniGames.newQuizQuestion();
}

function getNewFact() {
    if (window.miniGames) window.miniGames.getNewFact();
}

// Add keyboard support for math game
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement && document.activeElement.id === 'mathAnswer') {
        checkMathAnswer();
    }
});

// Update the main PharaohsLegacy class init method to include mini-games
// Add this to the existing init() method in PharaohsLegacy class:

// In the PharaohsLegacy class, update the init method:
const originalInit = PharaohsLegacy.prototype.init;
PharaohsLegacy.prototype.init = function() {
    originalInit.call(this);
    
    // Initialize mini-games after a short delay
    setTimeout(() => {
        window.miniGames = new MiniGames(this);
    }, 1000);
};

// Add mini-game achievements to the existing achievements array
const miniGameAchievements = [
    { id: "hieroglyph_master", name: "Hieroglyph Master", icon: "𓂀", condition: () => window.miniGames && window.miniGames.hieroglyphScore >= 100 },
    { id: "math_genius", name: "Egyptian Math Genius", icon: "🔢", condition: () => window.miniGames && window.miniGames.mathScore >= 150 },
    { id: "memory_champion", name: "Memory Champion", icon: "🧠", condition: () => window.miniGames && window.miniGames.memoryLevel >= 10 },
    { id: "quiz_scholar", name: "Quiz Scholar", icon: "📚", condition: () => window.miniGames && window.miniGames.quizScore >= 20 },
    { id: "fact_collector", name: "Fact Collector", icon: "💡", condition: () => window.miniGames && window.miniGames.factsDiscovered.size >= 25 },
    { id: "symbol_learner", name: "Symbol Learner", icon: "𓇳", condition: () => window.miniGames && window.miniGames.hieroglyphsLearned.size >= 15 }
];

// Extend the existing achievements array
if (typeof game !== 'undefined' && game.achievements) {
    game.achievements.push(...miniGameAchievements);
}

// Add mini-game specific sound effects
const originalPlaySound = PharaohsLegacy.prototype.playSound;
PharaohsLegacy.prototype.playSound = function(type) {
    if (!this.settings.soundEnabled) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Different sounds for different events including mini-games
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
            case 'minigame_correct':
                oscillator.frequency.setValueAtTime(523, audioContext.currentTime);
                oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1);
                break;
            case 'minigame_wrong':
                oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
                oscillator.frequency.setValueAtTime(165, audioContext.currentTime + 0.1);
                break;
            case 'level_up':
                oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
                oscillator.frequency.setValueAtTime(554, audioContext.currentTime + 0.1);
                oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.2);
                oscillator.frequency.setValueAtTime(880, audioContext.currentTime + 0.3);
                break;
            default:
                // Call original function for existing sound types
                return originalPlaySound.call(this, type);
        }
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (error) {
        // Silently fail if audio context is not supported
    }
};

// Enhanced save/load functionality to include mini-game progress
const originalSaveGame = PharaohsLegacy.prototype.saveGame;
PharaohsLegacy.prototype.saveGame = function() {
    const saveData = {
        player: this.player,
        settings: this.settings,
        completedQuests: this.completedQuests,
        gameVersion: "1.1",
        miniGameData: window.miniGames ? {
            hieroglyphScore: window.miniGames.hieroglyphScore,
            mathScore: window.miniGames.mathScore,
            memoryLevel: window.miniGames.memoryLevel,
            quizScore: window.miniGames.quizScore,
            quizTotal: window.miniGames.quizTotal,
            hieroglyphsLearned: Array.from(window.miniGames.hieroglyphsLearned),
            factsDiscovered: Array.from(window.miniGames.factsDiscovered)
        } : null
    };
    
    localStorage.setItem('pharaohsLegacySave', JSON.stringify(saveData));
    this.showNotification('💾 Game saved successfully!');
};

const originalLoadGame = PharaohsLegacy.prototype.loadGame;
PharaohsLegacy.prototype.loadGame = function() {
    const saveData = localStorage.getItem('pharaohsLegacySave');
    if (saveData) {
        try {
            const data = JSON.parse(saveData);
            this.player = { ...this.player, ...data.player };
            this.settings = { ...this.settings, ...data.settings };
            this.completedQuests = data.completedQuests || 0;
            
            // Load mini-game data
            if (data.miniGameData && window.miniGames) {
                window.miniGames.hieroglyphScore = data.miniGameData.hieroglyphScore || 0;
                window.miniGames.mathScore = data.miniGameData.mathScore || 0;
                window.miniGames.memoryLevel = data.miniGameData.memoryLevel || 1;
                window.miniGames.quizScore = data.miniGameData.quizScore || 0;
                window.miniGames.quizTotal = data.miniGameData.quizTotal || 0;
                window.miniGames.hieroglyphsLearned = new Set(data.miniGameData.hieroglyphsLearned || []);
                window.miniGames.factsDiscovered = new Set(data.miniGameData.factsDiscovered || []);
                
                // Update displays
                document.getElementById('hieroglyphScore').textContent = window.miniGames.hieroglyphScore;
                document.getElementById('mathScore').textContent = window.miniGames.mathScore;
                document.getElementById('memoryLevel').textContent = window.miniGames.memoryLevel;
                document.getElementById('quizScore').textContent = window.miniGames.quizScore;
                document.getElementById('quizTotal').textContent = window.miniGames.quizTotal;
                window.miniGames.updateProgressDisplay();
            }
            
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
};

// Add mini-game integration with main game events
class MiniGameIntegration {
    static addKnowledgeBonus(amount) {
        if (window.game && window.miniGames) {
            // Bonus knowledge based on mini-game performance
            let bonus = 0;
            
            if (window.miniGames.hieroglyphScore > 50) bonus += 2;
            if (window.miniGames.mathScore > 75) bonus += 2;
            if (window.miniGames.memoryLevel > 5) bonus += 2;
            if (window.miniGames.quizScore > 10) bonus += 2;
            
            if (bonus > 0) {
                window.game.applyEffects({ knowledge: bonus });
                window.game.showNotification(`🎮 Mini-game bonus: +${bonus} knowledge!`);
            }
        }
    }
    
    static checkMiniGameAchievements() {
        if (window.game && window.miniGames) {
            // Check for mini-game specific achievements
            const achievements = [
                {
                    condition: window.miniGames.hieroglyphScore >= 100,
                    id: 'hieroglyph_master',
                    message: '🏆 Hieroglyph Master achieved!'
                },
                {
                    condition: window.miniGames.mathScore >= 150,
                    id: 'math_genius',
                    message: '🏆 Egyptian Math Genius achieved!'
                },
                {
                    condition: window.miniGames.memoryLevel >= 10,
                    id: 'memory_champion',
                    message: '🏆 Memory Champion achieved!'
                },
                {
                    condition: window.miniGames.quizScore >= 20,
                    id: 'quiz_scholar',
                    message: '🏆 Quiz Scholar achieved!'
                }
            ];
            
            achievements.forEach(achievement => {
                if (achievement.condition && !window.game.player.achievements.includes(achievement.id)) {
                    window.game.player.achievements.push(achievement.id);
                    window.game.showNotification(achievement.message);
                    window.game.playSound('achievement');
                }
            });
        }
    }
}

// Add periodic mini-game integration
setInterval(() => {
    if (window.game && window.miniGames && window.game.gameStarted) {
        MiniGameIntegration.checkMiniGameAchievements();
    }
}, 5000);

// Enhanced tutorial system for mini-games
class MiniGameTutorial {
    static showHieroglyphTutorial() {
        const tutorial = document.createElement('div');
        tutorial.className = 'tutorial-overlay';
        tutorial.innerHTML = `
            <div class="tutorial-content">
                <h3>🎮 Hieroglyph Matching Tutorial</h3>
                <p>Match the hieroglyph symbol with its correct meaning!</p>
                <ul>
                    <li>Look at the symbol displayed</li>
                    <li>Choose the correct meaning from the options</li>
                    <li>Earn points and knowledge for correct answers</li>
                    <li>Learn real ancient Egyptian hieroglyphs!</li>
                </ul>
                <button onclick="this.parentElement.parentElement.remove()">Got it!</button>
            </div>
        `;
        document.body.appendChild(tutorial);
    }
    
    static showMathTutorial() {
        const tutorial = document.createElement('div');
        tutorial.className = 'tutorial-overlay';
        tutorial.innerHTML = `
            <div class="tutorial-content">
                <h3>🔢 Egyptian Math Tutorial</h3>
                <p>Convert Egyptian numerals to modern numbers!</p>
                <ul>
                    <li>𓏺 = 1 (stroke)</li>
                    <li>𓎆 = 10 (heel bone)</li>
                    <li>𓍢 = 100 (coil of rope)</li>
                    <li>𓆼 = 1000 (lotus flower)</li>
                    <li>Count the symbols and add them up!</li>
                </ul>
                <button onclick="this.parentElement.parentElement.remove()">Got it!</button>
            </div>
        `;
        document.body.appendChild(tutorial);
    }
}

// Add tutorial buttons to mini-games (you can add these to the HTML)
function showMiniGameHelp(gameType) {
    switch(gameType) {
        case 'hieroglyph':
            MiniGameTutorial.showHieroglyphTutorial();
            break;
        case 'math':
            MiniGameTutorial.showMathTutorial();
            break;
        case 'memory':
            alert('Memory Game: Watch the sequence of symbols, then click them in the same order!');
            break;
        case 'quiz':
            alert('Quiz Game: Answer questions about ancient Egypt to test your knowledge!');
            break;
    }
}

// Add daily challenges for mini-games
class DailyMiniGameChallenges {
    static generateDailyChallenge() {
        const today = new Date().toDateString();
        const savedDate = localStorage.getItem('dailyMiniGameDate');
        
        if (savedDate !== today) {
            const challenges = [
                { type: 'hieroglyph', target: 50, reward: { knowledge: 25, gold: 100 }, description: 'Score 50 points in Hieroglyph Matching' },
                { type: 'math', target: 75, reward: { knowledge: 30, gold: 150 }, description: 'Score 75 points in Egyptian Math' },
                { type: 'memory', target: 7, reward: { knowledge: 35, gold: 200 }, description: 'Reach level 7 in Memory Game' },
                { type: 'quiz', target: 10, reward: { knowledge: 40, gold: 250 }, description: 'Answer 10 quiz questions correctly' }
            ];
            
            const dailyChallenge = challenges[Math.floor(Math.random() * challenges.length)];
            localStorage.setItem('dailyMiniGameChallenge', JSON.stringify(dailyChallenge));
            localStorage.setItem('dailyMiniGameDate', today);
            localStorage.setItem('dailyMiniGameCompleted', 'false');
            
            if (window.game) {
                window.game.showNotification(`🎯 Daily Mini-Game Challenge: ${dailyChallenge.description}`);
            }
        }
    }
    
    static checkDailyChallenge() {
        const challenge = JSON.parse(localStorage.getItem('dailyMiniGameChallenge') || '{}');
        const completed = localStorage.getItem('dailyMiniGameCompleted') === 'true';
        
        if (challenge.type && !completed && window.miniGames) {
            let currentProgress = 0;
            
            switch(challenge.type) {
                case 'hieroglyph':
                    currentProgress = window.miniGames.hieroglyphScore;
                    break;
                case 'math':
                    currentProgress = window.miniGames.mathScore;
                    break;
                case 'memory':
                    currentProgress = window.miniGames.memoryLevel;
                    break;
                case 'quiz':
                    currentProgress = window.miniGames.quizScore;
                    break;
            }
            
            if (currentProgress >= challenge.target) {
                localStorage.setItem('dailyMiniGameCompleted', 'true');
                window.game.applyEffects(challenge.reward);
                window.game.showNotification(`🎉 Daily Challenge Complete! ${window.game.formatEffects(challenge.reward)}`);
                window.game.playSound('achievement');
            }
        }
    }
}

// Initialize daily challenges
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        DailyMiniGameChallenges.generateDailyChallenge();
    }, 2000);
});

// Check daily challenges periodically
setInterval(() => {
    DailyMiniGameChallenges.checkDailyChallenge();
}, 3000);

// Add CSS for tutorial overlays
const tutorialCSS = `
.tutorial-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3000;
}

.tutorial-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 500px;
    color: #e6d7c3;
    text-align: center;
}

.tutorial-content h3 {
    color: #daa520;
    margin-bottom: 15px;
    font-family: 'Cinzel', serif;
}

.tutorial-content ul {
    text-align: left;
    margin: 20px 0;
    padding-left: 20px;
}

.tutorial-content li {
    margin-bottom: 8px;
    line-height: 1.4;
}

.tutorial-content button {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1em;
    margin-top: 15px;
    transition: all 0.3s ease;
}

.tutorial-content button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}
`;

// Add the tutorial CSS to the document
const tutorialStyleSheet = document.createElement('style');
tutorialStyleSheet.textContent = tutorialCSS;
document.head.appendChild(tutorialStyleSheet);

// Enhanced notification system for mini-games
class EnhancedNotifications {
    static showMiniGameNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `minigame-notification ${type}`;
        
        const icons = {
            success: '✅',
            error: '❌',
            info: 'ℹ️',
            achievement: '🏆',
            bonus: '🎁'
        };
        
        notification.innerHTML = `
            <span class="notification-icon">${icons[type] || icons.info}</span>
            <span class="notification-text">${message}</span>
        `;
        
        // Position notification in mini-game area
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 320px;
            background: ${type === 'success' ? '#4ecdc4' : type === 'error' ? '#ff6b6b' : '#daa520'};
            color: #1a1a1a;
            padding: 12px 20px;
            border-radius: 8px;
            font-weight: bold;
            z-index: 2500;
            animation: slideInRight 0.3s ease, fadeOut 0.3s ease 2.7s;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }
}

// Add notification animations
const notificationAnimationCSS = `
@keyframes slideInRight {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

.minigame-notification {
    display: flex;
    align-items: center;
    gap: 8px;
}

.notification-icon {
    font-size: 1.2em;
}

.notification-text {
    font-size: 0.9em;
}
`;

const notificationStyleSheet = document.createElement('style');
notificationStyleSheet.textContent = notificationAnimationCSS;
document.head.appendChild(notificationStyleSheet);

// Update MiniGames class to use enhanced notifications
const originalShowNotification = MiniGames.prototype.game?.showNotification;

// Override mini-game notifications
if (window.miniGames) {
    const originalCheckHieroglyphAnswer = MiniGames.prototype.checkHieroglyphAnswer;
    MiniGames.prototype.checkHieroglyphAnswer = function(selectedIndex) {
        const buttons = document.querySelectorAll('.hieroglyph-option');
        
        if (selectedIndex === this.correctHieroglyphIndex) {
            buttons[selectedIndex].classList.add('correct');
            this.hieroglyphScore += 10;
            this.hieroglyphsLearned.add(this.currentHieroglyphChallenge.symbol);
            
            EnhancedNotifications.showMiniGameNotification(
                `Correct! +10 points. ${this.currentHieroglyphChallenge.symbol} means ${this.currentHieroglyphChallenge.meaning}`,
                'success'
            );
            
            this.game.applyEffects({ knowledge: 2 });
            setTimeout(() => this.newHieroglyphChallenge(), 1500);
        } else {
            buttons[selectedIndex].classList.add('incorrect');
            buttons[this.correctHieroglyphIndex].classList.add('correct');
            
            EnhancedNotifications.showMiniGameNotification(
                `Wrong! ${this.currentHieroglyphChallenge.symbol} means ${this.currentHieroglyphChallenge.meaning}`,
                'error'
            );
            
            setTimeout(() => this.newHieroglyphChallenge(), 2000);
        }
        
        document.getElementById('hieroglyphScore').textContent = this.hieroglyphScore;
        this.updateProgressDisplay();
        
        buttons.forEach(button => button.style.pointerEvents = 'none');
        setTimeout(() => {
            buttons.forEach(button => button.style.pointerEvents = 'auto');
        }, 1500);
        
        // Check for achievements
        if (this.hieroglyphScore > 0 && this.hieroglyphScore % 50 === 0) {
            EnhancedNotifications.showMiniGameNotification(
                `Milestone reached: ${this.hieroglyphScore} points!`,
                'achievement'
            );
        }
    };
}

// Add streak tracking for mini-games
class StreakTracker {
    constructor() {
        this.hieroglyphStreak = 0;
        this.mathStreak = 0;
        this.maxHieroglyphStreak = 0;
        this.maxMathStreak = 0;
    }
    
    addHieroglyphCorrect() {
        this.hieroglyphStreak++;
        this.maxHieroglyphStreak = Math.max(this.maxHieroglyphStreak, this.hieroglyphStreak);
        
        if (this.hieroglyphStreak >= 5) {
            EnhancedNotifications.showMiniGameNotification(
                `🔥 ${this.hieroglyphStreak} correct in a row!`,
                'bonus'
            );
            
            if (window.game) {
                window.game.applyEffects({ knowledge: this.hieroglyphStreak });
            }
        }
    }
    
    addMathCorrect() {
        this.mathStreak++;
        this.maxMathStreak = Math.max(this.maxMathStreak, this.mathStreak);
        
        if (this.mathStreak >= 5) {
            EnhancedNotifications.showMiniGameNotification(
                `🔥 ${this.mathStreak} math problems in a row!`,
                'bonus'
            );
            
            if (window.game) {
                window.game.applyEffects({ knowledge: this.mathStreak * 2 });
            }
        }
    }
    
    resetHieroglyphStreak() {
        this.hieroglyphStreak = 0;
    }
    
    resetMathStreak() {
        this.mathStreak = 0;
    }
}

// Initialize streak tracker
window.streakTracker = new StreakTracker();

// Add leaderboard system (local storage based)
class MiniGameLeaderboard {
    static saveScore(gameType, score, playerName) {
        const leaderboardKey = `pharaohs_legacy_leaderboard_${gameType}`;
        let leaderboard = JSON.parse(localStorage.getItem(leaderboardKey) || '[]');
        
        leaderboard.push({
            name: playerName || 'Anonymous',
            score: score,
            date: new Date().toLocaleDateString()
        });
        
        // Sort by score (descending) and keep top 10
        leaderboard.sort((a, b) => b.score - a.score);
        leaderboard = leaderboard.slice(0, 10);
        
        localStorage.setItem(leaderboardKey, JSON.stringify(leaderboard));
        
        // Check if it's a new high score
        if (leaderboard[0].score === score) {
            EnhancedNotifications.showMiniGameNotification(
                `🏆 New High Score in ${gameType}!`,
                'achievement'
            );
        }
    }
    
    static getLeaderboard(gameType) {
        const leaderboardKey = `pharaohs_legacy_leaderboard_${gameType}`;
        return JSON.parse(localStorage.getItem(leaderboardKey) || '[]');
    }
    
    static showLeaderboard(gameType) {
        const leaderboard = this.getLeaderboard(gameType);
        const modal = document.createElement('div');
        modal.className = 'leaderboard-modal';
        
        modal.innerHTML = `
            <div class="leaderboard-content">
                <h3>🏆 ${gameType.charAt(0).toUpperCase() + gameType.slice(1)} Leaderboard</h3>
                <div class="leaderboard-list">
                    ${leaderboard.length > 0 ? 
                        leaderboard.map((entry, index) => `
                            <div class="leaderboard-entry">
                                <span class="rank">${index + 1}.</span>
                                <span class="name">${entry.name}</span>
                                <span class="score">${entry.score}</span>
                                <span class="date">${entry.date}</span>
                            </div>
                        `).join('') :
                        '<div class="no-scores">No scores yet!</div>'
                    }
                </div>
                <button onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
}

// Add leaderboard CSS
const leaderboardCSS = `
.leaderboard-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3000;
}

.leaderboard-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 500px;
    width: 90%;
    color: #e6d7c3;
}

.leaderboard-content h3 {
    color: #daa520;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Cinzel', serif;
}

.leaderboard-list {
    max-height: 300px;
    overflow-y: auto;
    margin-bottom: 20px;
}

.leaderboard-entry {
    display: grid;
    grid-template-columns: 30px 1fr 80px 80px;
    gap: 10px;
    padding: 8px;
    border-bottom: 1px solid rgba(218, 165, 32, 0.2);
    align-items: center;
}

.leaderboard-entry:first-child {
    color: #daa520;
    font-weight: bold;
}

.rank {
    font-weight: bold;
}

.score {
    text-align: right;
    font-weight: bold;
}

.date {
    font-size: 0.8em;
    opacity: 0.7;
}

.no-scores {
    text-align: center;
    color: #888;
    font-style: italic;
    padding: 20px;
}

.leaderboard-content button {
    width: 100%;
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.leaderboard-content button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}
`;

const leaderboardStyleSheet = document.createElement('style');
leaderboardStyleSheet.textContent = leaderboardCSS;
document.head.appendChild(leaderboardStyleSheet);

// Add functions to show leaderboards
function showHieroglyphLeaderboard() {
    MiniGameLeaderboard.showLeaderboard('hieroglyph');
}

function showMathLeaderboard() {
    MiniGameLeaderboard.showLeaderboard('math');
}

function showMemoryLeaderboard() {
    MiniGameLeaderboard.showLeaderboard('memory');
}

function showQuizLeaderboard() {
    MiniGameLeaderboard.showLeaderboard('quiz');
}

// Auto-save leaderboard scores when games end
const originalNewHieroglyphChallenge = MiniGames.prototype.newHieroglyphChallenge;
MiniGames.prototype.newHieroglyphChallenge = function() {
    // Save score if it's significant
    if (this.hieroglyphScore > 0 && this.hieroglyphScore % 100 === 0) {
        const playerName = window.game?.player?.name || 'Anonymous';
        MiniGameLeaderboard.saveScore('hieroglyph', this.hieroglyphScore, playerName);
    }
    
    originalNewHieroglyphChallenge.call(this);
};

// Add power-ups for mini-games
class MiniGamePowerUps {
    static useDoublePoints() {
        if (window.game && window.game.player.gold >= 100) {
            window.game.applyEffects({ gold: -100 });
            window.miniGameDoublePoints = true;
            
            setTimeout(() => {
                window.miniGameDoublePoints = false;
                EnhancedNotifications.showMiniGameNotification('Double points expired!', 'info');
            }, 30000);
            
            EnhancedNotifications.showMiniGameNotification('Double points active for 30 seconds!', 'bonus');
        } else {
            EnhancedNotifications.showMiniGameNotification('Need 100 gold for double points!', 'error');
        }
    }
    
    static useHint() {
        if (window.game && window.game.player.knowledge >= 10) {
            window.game.applyEffects({ knowledge: -10 });
            
            // Show hint for current mini-game
            const activeTab = document.querySelector('.minigame-tabs .tab-btn.active');
            if (activeTab) {
                const gameType = activeTab.textContent.toLowerCase();
                let hint = '';
                
                switch(gameType) {
                    case 'hieroglyphs':
                        hint = `Hint: This symbol is related to ${window.miniGames?.currentHieroglyphChallenge?.meaning.split(' ')[0] || 'ancient Egypt'}`;
                        break;
                    case 'math':
                        const answer = window.miniGames?.currentMathChallenge;
                        if (answer) {
                            hint = `Hint: The answer is between ${Math.floor(answer/10)*10} and ${Math.ceil(answer/10)*10}`;
                        }
                        break;
                    case 'memory':
                        hint = 'Hint: Focus on the pattern and rhythm of the sequence!';
                        break;
                    case 'quiz':
                        hint = 'Hint: Think about what you learned in the lessons!';
                        break;
                    default:
                        hint = 'Hint: Use your knowledge of ancient Egypt!';
                }
                
                EnhancedNotifications.showMiniGameNotification(hint, 'info');
            }
        } else {
            EnhancedNotifications.showMiniGameNotification('Need 10 knowledge for a hint!', 'error');
        }
    }
    
    static useSkip() {
        if (window.game && window.game.player.gold >= 50) {
            window.game.applyEffects({ gold: -50 });
            
            // Skip current question/challenge
            const activeTab = document.querySelector('.minigame-tabs .tab-btn.active');
            if (activeTab) {
                const gameType = activeTab.textContent.toLowerCase();
                
                switch(gameType) {
                    case 'hieroglyphs':
                        if (window.miniGames) window.miniGames.newHieroglyphChallenge();
                        break;
                    case 'math':
                        if (window.miniGames) window.miniGames.newMathChallenge();
                        break;
                    case 'quiz':
                        if (window.miniGames) window.miniGames.newQuizQuestion();
                        break;
                    case 'memory':
                        if (window.miniGames) window.miniGames.startMemoryGame();
                        break;
                }
                
                EnhancedNotifications.showMiniGameNotification('Question skipped!', 'info');
            }
        } else {
            EnhancedNotifications.showMiniGameNotification('Need 50 gold to skip!', 'error');
        }
    }
}

// Add power-up buttons to the HTML (you can add these to your mini-game sections)
function addPowerUpButtons() {
    const powerUpHTML = `
        <div class="power-ups">
            <button class="power-up-btn" onclick="MiniGamePowerUps.useDoublePoints()" title="Double points for 30 seconds (100 gold)">
                ⚡ 2x Points
            </button>
            <button class="power-up-btn" onclick="MiniGamePowerUps.useHint()" title="Get a hint (10 knowledge)">
                💡 Hint
            </button>
            <button class="power-up-btn" onclick="MiniGamePowerUps.useSkip()" title="Skip current question (50 gold)">
                ⏭️ Skip
            </button>
        </div>
    `;
    
    // Add to each mini-game section
    const miniGameSections = document.querySelectorAll('.minigame-content');
    miniGameSections.forEach(section => {
        if (!section.querySelector('.power-ups')) {
            section.insertAdjacentHTML('afterbegin', powerUpHTML);
        }
    });
}

// Add power-up CSS
const powerUpCSS = `
.power-ups {
    display: flex;
    gap: 8px;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.power-up-btn {
    background: linear-gradient(135deg, #8b4513 0%, #a0522d 100%);
    color: #e6d7c3;
    border: 1px solid #daa520;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.8em;
    font-weight: bold;
    transition: all 0.3s ease;
    flex: 1;
    min-width: 80px;
}

.power-up-btn:hover {
    background: linear-gradient(135deg, #a0522d 0%, #8b4513 100%);
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(218, 165, 32, 0.3);
}

.power-up-btn:active {
    transform: translateY(0);
}

.power-up-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
}
`;

const powerUpStyleSheet = document.createElement('style');
powerUpStyleSheet.textContent = powerUpCSS;
document.head.appendChild(powerUpStyleSheet);

// Initialize power-ups when mini-games are ready
setTimeout(() => {
    addPowerUpButtons();
}, 2000);

// Add mini-game statistics tracking
class MiniGameStats {
    constructor() {
        this.stats = this.loadStats();
    }
    
    loadStats() {
        const saved = localStorage.getItem('pharaohs_legacy_minigame_stats');
        return saved ? JSON.parse(saved) : {
            hieroglyphsAttempted: 0,
            hieroglyphsCorrect: 0,
            mathProblemsAttempted: 0,
            mathProblemsCorrect: 0,
            memoryGamesPlayed: 0,
            memoryHighestLevel: 0,
            quizQuestionsAttempted: 0,
            quizQuestionsCorrect: 0,
            totalPlayTime: 0,
            sessionsPlayed: 0,
            achievementsUnlocked: 0
        };
    }
    
    saveStats() {
        localStorage.setItem('pharaohs_legacy_minigame_stats', JSON.stringify(this.stats));
    }
    
    recordHieroglyphAttempt(correct) {
        this.stats.hieroglyphsAttempted++;
        if (correct) this.stats.hieroglyphsCorrect++;
        this.saveStats();
    }
    
    recordMathAttempt(correct) {
        this.stats.mathProblemsAttempted++;
        if (correct) this.stats.mathProblemsCorrect++;
        this.saveStats();
    }
    
    recordMemoryGame(level) {
        this.stats.memoryGamesPlayed++;
        this.stats.memoryHighestLevel = Math.max(this.stats.memoryHighestLevel, level);
        this.saveStats();
    }
    
    recordQuizAttempt(correct) {
        this.stats.quizQuestionsAttempted++;
        if (correct) this.stats.quizQuestionsCorrect++;
        this.saveStats();
    }
    
    getAccuracy(type) {
        switch(type) {
            case 'hieroglyph':
                return this.stats.hieroglyphsAttempted > 0 ? 
                    Math.round((this.stats.hieroglyphsCorrect / this.stats.hieroglyphsAttempted) * 100) : 0;
            case 'math':
                return this.stats.mathProblemsAttempted > 0 ? 
                    Math.round((this.stats.mathProblemsCorrect / this.stats.mathProblemsAttempted) * 100) : 0;
            case 'quiz':
                return this.stats.quizQuestionsAttempted > 0 ? 
                    Math.round((this.stats.quizQuestionsCorrect / this.stats.quizQuestionsAttempted) * 100) : 0;
            default:
                return 0;
        }
    }
    
    showDetailedStats() {
        const modal = document.createElement('div');
        modal.className = 'stats-modal';
        
        modal.innerHTML = `
            <div class="stats-content">
                <h3>📊 Mini-Game Statistics</h3>
                <div class="stats-grid">
                    <div class="stat-category">
                        <h4>🔤 Hieroglyphs</h4>
                        <div class="stat-line">Attempted: ${this.stats.hieroglyphsAttempted}</div>
                        <div class="stat-line">Correct: ${this.stats.hieroglyphsCorrect}</div>
                        <div class="stat-line">Accuracy: ${this.getAccuracy('hieroglyph')}%</div>
                    </div>
                    
                    <div class="stat-category">
                        <h4>🔢 Mathematics</h4>
                        <div class="stat-line">Attempted: ${this.stats.mathProblemsAttempted}</div>
                        <div class="stat-line">Correct: ${this.stats.mathProblemsCorrect}</div>
                        <div class="stat-line">Accuracy: ${this.getAccuracy('math')}%</div>
                    </div>
                    
                    <div class="stat-category">
                        <h4>🧠 Memory</h4>
                        <div class="stat-line">Games Played: ${this.stats.memoryGamesPlayed}</div>
                        <div class="stat-line">Highest Level: ${this.stats.memoryHighestLevel}</div>
                    </div>
                    
                    <div class="stat-category">
                        <h4>❓ Quiz</h4>
                        <div class="stat-line">Attempted: ${this.stats.quizQuestionsAttempted}</div>
                        <div class="stat-line">Correct: ${this.stats.quizQuestionsCorrect}</div>
                        <div class="stat-line">Accuracy: ${this.getAccuracy('quiz')}%</div>
                    </div>
                </div>
                
                <div class="overall-stats">
                    <h4>🏆 Overall Performance</h4>
                    <div class="stat-line">Sessions Played: ${this.stats.sessionsPlayed}</div>
                    <div class="stat-line">Achievements: ${this.stats.achievementsUnlocked}</div>
                    <div class="stat-line">Total Questions: ${this.stats.hieroglyphsAttempted + this.stats.mathProblemsAttempted + this.stats.quizQuestionsAttempted}</div>
                </div>
                
                <button onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
}

// Initialize stats tracker
window.miniGameStats = new MiniGameStats();

// Add stats CSS
const statsCSS = `
.stats-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3000;
}

.stats-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 600px;
    width: 90%;
    color: #e6d7c3;
    max-height: 80vh;
    overflow-y: auto;
}

.stats-content h3 {
    color: #daa520;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Cinzel', serif;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
}

.stat-category {
    background: rgba(218, 165, 32, 0.1);
    padding: 15px;
    border-radius: 8px;
    border: 1px solid rgba(218, 165, 32, 0.3);
}

.stat-category h4 {
    color: #daa520;
    margin-bottom: 10px;
    font-size: 1.1em;
}

.stat-line {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
}

.overall-stats {
    background: rgba(218, 165, 32, 0.15);
    padding: 15px;
    border-radius: 8px;
    border: 1px solid rgba(218, 165, 32, 0.4);
    margin-bottom: 20px;
}

.overall-stats h4 {
    color: #daa520;
    margin-bottom: 10px;
}

.stats-content button {
    width: 100%;
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.stats-content button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}
`;

const statsStyleSheet = document.createElement('style');
statsStyleSheet.textContent = statsCSS;
document.head.appendChild(statsStyleSheet);

// Function to show stats
function showMiniGameStats() {
    window.miniGameStats.showDetailedStats();
}

// Add final integration and cleanup
document.addEventListener('DOMContentLoaded', function() {
    // Ensure all mini-game components are properly initialized
    setTimeout(() => {
        if (window.miniGames) {
            console.log('Mini-games initialized successfully');
            
            // Start session tracking
            window.miniGameStats.stats.sessionsPlayed++;
            window.miniGameStats.saveStats();
            
            // Set up periodic auto-save for mini-game progress
            setInterval(() => {
                if (window.game && window.game.settings.autoSave) {
                    window.game.saveGame();
                }
            }, 30000); // Auto-save every 30 seconds
        }
    }, 3000);
});

// Add keyboard shortcuts for mini-games
document.addEventListener('keydown', (e) => {
    // Only if mini-games are active and no lesson is running
    if (!window.game?.lessonActive && window.miniGames) {
        switch(e.key) {
            case '1':
            case '2':
            case '3':
                // Quick select for hieroglyph options
                const hieroglyphOptions = document.querySelectorAll('.hieroglyph-option');
                const optionIndex = parseInt(e.key) - 1;
                if (hieroglyphOptions[optionIndex] && !e.ctrlKey && !e.altKey) {
                    hieroglyphOptions[optionIndex].click();
                }
                break;
                
            case 'h':
                // Quick hint
                if (e.ctrlKey) {
                    e.preventDefault();
                    MiniGamePowerUps.useHint();
                }
                break;
                
            case 's':
                // Quick skip (Ctrl+S is already used for save)
                if (e.ctrlKey && e.shiftKey) {
                    e.preventDefault();
                    MiniGamePowerUps.useSkip();
                }
                break;
                
            case 'r':
                // Restart current mini-game
                if (e.ctrlKey) {
                    e.preventDefault();
                    const activeTab = document.querySelector('.minigame-tabs .tab-btn.active');
                    if (activeTab) {
                        const gameType = activeTab.textContent.toLowerCase();
                        switch(gameType) {
                            case 'hieroglyphs':
                                window.miniGames.newHieroglyphChallenge();
                                break;
                            case 'math':
                                window.miniGames.newMathChallenge();
                                break;
                            case 'memory':
                                window.miniGames.startMemoryGame();
                                break;
                            case 'quiz':
                                window.miniGames.newQuizQuestion();
                                break;
                        }
                    }
                }
                break;
                
            case 'Tab':
                // Cycle through mini-game tabs
                if (!e.shiftKey) {
                    e.preventDefault();
                    const tabs = document.querySelectorAll('.minigame-tabs .tab-btn');
                    const activeTab = document.querySelector('.minigame-tabs .tab-btn.active');
                    const currentIndex = Array.from(tabs).indexOf(activeTab);
                    const nextIndex = (currentIndex + 1) % tabs.length;
                    tabs[nextIndex].click();
                }
                break;
        }
    }
});

// Add mini-game completion rewards system
class MiniGameRewards {
    static calculateReward(gameType, score, streak = 0) {
        let baseReward = { knowledge: 0, gold: 0 };
        
        switch(gameType) {
            case 'hieroglyph':
                baseReward.knowledge = Math.floor(score / 10);
                baseReward.gold = Math.floor(score / 5);
                break;
            case 'math':
                baseReward.knowledge = Math.floor(score / 8);
                baseReward.gold = Math.floor(score / 4);
                break;
            case 'memory':
                baseReward.knowledge = score * 3;
                baseReward.gold = score * 5;
                break;
            case 'quiz':
                baseReward.knowledge = score * 2;
                baseReward.gold = score * 3;
                break;
        }
        
        // Streak bonus
        if (streak >= 5) {
            baseReward.knowledge += streak;
            baseReward.gold += streak * 2;
        }
        
        // Difficulty multiplier
        const difficulty = window.game?.settings?.difficulty || 'normal';
        const multiplier = { easy: 0.8, normal: 1.0, hard: 1.5 }[difficulty];
        
        baseReward.knowledge = Math.floor(baseReward.knowledge * multiplier);
        baseReward.gold = Math.floor(baseReward.gold * multiplier);
        
        return baseReward;
    }
    
    static grantMilestoneReward(gameType, milestone) {
        const rewards = {
            hieroglyph: {
                50: { knowledge: 25, gold: 100 },
                100: { knowledge: 50, gold: 250 },
                200: { knowledge: 100, gold: 500 }
            },
            math: {
                75: { knowledge: 30, gold: 120 },
                150: { knowledge: 60, gold: 300 },
                300: { knowledge: 120, gold: 600 }
            },
            memory: {
                5: { knowledge: 20, gold: 80 },
                10: { knowledge: 50, gold: 200 },
                15: { knowledge: 100, gold: 400 }
            },
            quiz: {
                10: { knowledge: 40, gold: 160 },
                25: { knowledge: 80, gold: 320 },
                50: { knowledge: 150, gold: 600 }
            }
        };
        
        const reward = rewards[gameType]?.[milestone];
        if (reward && window.game) {
            window.game.applyEffects(reward);
            EnhancedNotifications.showMiniGameNotification(
                `🎉 Milestone ${milestone} reached! ${window.game.formatEffects(reward)}`,
                'achievement'
            );
            window.game.playSound('achievement');
        }
    }
}

// Add mini-game challenges system
class MiniGameChallenges {
    static challenges = [
        {
            id: 'hieroglyph_speed',
            name: 'Speed Reader',
            description: 'Answer 10 hieroglyph questions in under 2 minutes',
            type: 'hieroglyph',
            target: 10,
            timeLimit: 120000, // 2 minutes in milliseconds
            reward: { knowledge: 50, gold: 200 },
            active: false,
            progress: 0,
            startTime: null
        },
        {
            id: 'math_accuracy',
            name: 'Perfect Calculator',
            description: 'Get 15 math problems correct in a row',
            type: 'math',
            target: 15,
            streak: true,
            reward: { knowledge: 75, gold: 300 },
            active: false,
            progress: 0
        },
        {
            id: 'memory_master',
            name: 'Memory Master',
            description: 'Reach level 12 in memory game',
            type: 'memory',
            target: 12,
            reward: { knowledge: 100, gold: 400 },
            active: false,
            progress: 0
        },
        {
            id: 'quiz_scholar',
            name: 'True Scholar',
            description: 'Answer 30 quiz questions correctly',
            type: 'quiz',
            target: 30,
            reward: { knowledge: 120, gold: 500 },
            active: false,
            progress: 0
        }
    ];
    
    static startChallenge(challengeId) {
        const challenge = this.challenges.find(c => c.id === challengeId);
        if (challenge && !challenge.active) {
            challenge.active = true;
            challenge.progress = 0;
            challenge.startTime = challenge.timeLimit ? Date.now() : null;
            
            EnhancedNotifications.showMiniGameNotification(
                `🎯 Challenge Started: ${challenge.name}`,
                'info'
            );
            
            this.updateChallengeDisplay();
        }
    }
    
    static updateProgress(gameType, correct = true, streak = 0) {
        this.challenges.forEach(challenge => {
            if (challenge.active && challenge.type === gameType) {
                if (challenge.streak) {
                    challenge.progress = streak;
                } else if (correct) {
                    challenge.progress++;
                }
                
                // Check time limit
                if (challenge.timeLimit && challenge.startTime) {
                    const elapsed = Date.now() - challenge.startTime;
                    if (elapsed > challenge.timeLimit) {
                        this.failChallenge(challenge);
                        return;
                    }
                }
                
                // Check completion
                if (challenge.progress >= challenge.target) {
                    this.completeChallenge(challenge);
                }
                
                this.updateChallengeDisplay();
            }
        });
    }
    
    static completeChallenge(challenge) {
        challenge.active = false;
        
        if (window.game) {
            window.game.applyEffects(challenge.reward);
            EnhancedNotifications.showMiniGameNotification(
                `🏆 Challenge Complete: ${challenge.name}! ${window.game.formatEffects(challenge.reward)}`,
                'achievement'
            );
            window.game.playSound('achievement');
        }
        
        this.updateChallengeDisplay();
    }
    
    static failChallenge(challenge) {
        challenge.active = false;
        challenge.progress = 0;
        
        EnhancedNotifications.showMiniGameNotification(
            `⏰ Challenge Failed: ${challenge.name} - Time's up!`,
            'error'
        );
        
        this.updateChallengeDisplay();
    }
    
    static updateChallengeDisplay() {
        const activeChallenge = this.challenges.find(c => c.active);
        const challengeDisplay = document.getElementById('activeChallengeDisplay');
        
        if (challengeDisplay) {
            if (activeChallenge) {
                const timeRemaining = activeChallenge.timeLimit && activeChallenge.startTime ?
                    Math.max(0, activeChallenge.timeLimit - (Date.now() - activeChallenge.startTime)) : null;
                
                challengeDisplay.innerHTML = `
                    <div class="active-challenge">
                        <div class="challenge-name">🎯 ${activeChallenge.name}</div>
                        <div class="challenge-progress">${activeChallenge.progress}/${activeChallenge.target}</div>
                        ${timeRemaining ? `<div class="challenge-timer">${Math.ceil(timeRemaining/1000)}s</div>` : ''}
                    </div>
                `;
                challengeDisplay.style.display = 'block';
            } else {
                challengeDisplay.style.display = 'none';
            }
        }
    }
    
    static showChallengeMenu() {
        const modal = document.createElement('div');
        modal.className = 'challenge-modal';
        
        modal.innerHTML = `
            <div class="challenge-content">
                <h3>🎯 Mini-Game Challenges</h3>
                <div class="challenge-list">
                    ${this.challenges.map(challenge => `
                        <div class="challenge-item ${challenge.active ? 'active' : ''}">
                            <div class="challenge-info">
                                <div class="challenge-title">${challenge.name}</div>
                                <div class="challenge-desc">${challenge.description}</div>
                                <div class="challenge-reward">Reward: ${window.game ? window.game.formatEffects(challenge.reward) : 'Loading...'}</div>
                            </div>
                            <button 
                                class="challenge-btn" 
                                onclick="MiniGameChallenges.startChallenge('${challenge.id}')"
                                ${challenge.active ? 'disabled' : ''}
                            >
                                ${challenge.active ? 'Active' : 'Start'}
                            </button>
                        </div>
                    `).join('')}
                </div>
                <button onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
}

// Add challenge CSS
const challengeCSS = `
.challenge-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3000;
}

.challenge-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 600px;
    width: 90%;
    color: #e6d7c3;
    max-height: 80vh;
    overflow-y: auto;
}

.challenge-content h3 {
    color: #daa520;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Cinzel', serif;
}

.challenge-list {
    margin-bottom: 20px;
}

.challenge-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-bottom: 10px;
    background: rgba(218, 165, 32, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(218, 165, 32, 0.3);
}

.challenge-item.active {
    background: rgba(76, 175, 80, 0.2);
    border-color: rgba(76, 175, 80, 0.5);
}

.challenge-info {
    flex: 1;
}

.challenge-title {
    font-weight: bold;
    color: #daa520;
    margin-bottom: 5px;
}

.challenge-desc {
    font-size: 0.9em;
    margin-bottom: 5px;
}

.challenge-reward {
    font-size: 0.8em;
    color: #4ecdc4;
}

.challenge-btn {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.challenge-btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(218, 165, 32, 0.4);
}

.challenge-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.active-challenge {
    background: rgba(218, 165, 32, 0.2);
    border: 1px solid #daa520;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    text-align: center;
}

.challenge-name {
    font-weight: bold;
    color: #daa520;
}

.challenge-progress {
    font-size: 1.2em;
    margin: 5px 0;
}

.challenge-timer {
    color: #ff6b6b;
    font-weight: bold;
}
`;

const challengeStyleSheet = document.createElement('style');
challengeStyleSheet.textContent = challengeCSS;
document.head.appendChild(challengeStyleSheet);

// Functions to show challenge menu
function showMiniGameChallenges() {
    MiniGameChallenges.showChallengeMenu();
}

// Add final console commands for debugging mini-games
console.log(`
🎮 Mini-Game Debug Commands:
- window.miniGames.hieroglyphScore = 1000 - Set hieroglyph score
- window.miniGames.mathScore = 1000 - Set math score  
- window.miniGames.memoryLevel = 20 - Set memory level
- MiniGameChallenges.startChallenge('hieroglyph_speed') - Start challenge
- showMiniGameStats() - Show detailed statistics
- showMiniGameChallenges() - Show challenge menu
- MiniGamePowerUps.useDoublePoints() - Activate double points
- window.miniGameStats.showDetailedStats() - Show statistics
- MiniGameLeaderboard.showLeaderboard('hieroglyph') - Show leaderboard
`);

// Add final integration with main game events
const originalMakeChoice = PharaohsLegacy.prototype.makeChoice;
PharaohsLegacy.prototype.makeChoice = function(choiceIndex) {
    // Call original function
    originalMakeChoice.call(this, choiceIndex);
    
    // Add mini-game integration bonuses
    if (window.miniGames) {
        // Bonus rewards based on mini-game performance
        let bonus = { knowledge: 0, gold: 0 };
        
        // Hieroglyph mastery bonus
        if (window.miniGames.hieroglyphScore >= 100) {
            bonus.knowledge += 2;
            bonus.gold += 10;
        }
        
        // Math expertise bonus
        if (window.miniGames.mathScore >= 150) {
            bonus.knowledge += 3;
            bonus.gold += 15;
        }
        
        // Memory training bonus
        if (window.miniGames.memoryLevel >= 8) {
            bonus.knowledge += 2;
            bonus.gold += 12;
        }
        
        // Quiz knowledge bonus
        if (window.miniGames.quizScore >= 20) {
            bonus.knowledge += 4;
            bonus.gold += 20;
        }
        
        // Apply bonuses if any
        if (bonus.knowledge > 0 || bonus.gold > 0) {
            this.applyEffects(bonus);
            this.showNotification(`🎮 Mini-game expertise bonus: ${this.formatEffects(bonus)}`);
        }
    }
};

// Add mini-game event integration
const miniGameEvents = [
    {
        title: "The Scribe's Challenge",
        description: "A master scribe challenges you to prove your hieroglyphic knowledge through a series of tests.",
        icon: "📜",
        choices: [
            {
                text: "Accept the hieroglyph challenge",
                effects: { knowledge: 10 },
                result: "The scribe is impressed! Your mini-game practice has prepared you well.",
                miniGameBonus: () => {
                    if (window.miniGames && window.miniGames.hieroglyphScore >= 50) {
                        return { knowledge: 20, gold: 100 };
                    }
                    return {};
                }
            },
            {
                text: "Politely decline",
                effects: { gold: 50 },
                result: "You avoid the challenge but wonder what you might have learned."
            }
        ]
    },
    {
        title: "The Royal Mathematician's Test",
        description: "The court mathematician needs someone skilled in Egyptian numerals to help with pyramid calculations.",
        icon: "🔢",
        choices: [
            {
                text: "Demonstrate your mathematical skills",
                effects: { knowledge: 15, gold: 100 },
                result: "Your understanding of Egyptian mathematics impresses the royal court!",
                miniGameBonus: () => {
                    if (window.miniGames && window.miniGames.mathScore >= 75) {
                        return { knowledge: 25, gold: 200 };
                    }
                    return {};
                }
            },
            {
                text: "Admit you need more practice",
                effects: { knowledge: 5 },
                result: "Honesty is appreciated, but you miss the opportunity to showcase your skills."
            }
        ]
    },
    {
        title: "Memory Palace Training",
        description: "A wise priest offers to teach you the ancient art of memory palaces used by Egyptian scholars.",
        icon: "🧠",
        choices: [
            {
                text: "Train your memory with the priest",
                effects: { knowledge: 20 },
                result: "Your memory training pays off as you learn advanced mnemonic techniques!",
                miniGameBonus: () => {
                    if (window.miniGames && window.miniGames.memoryLevel >= 6) {
                        return { knowledge: 30, gold: 150 };
                    }
                    return {};
                }
            },
            {
                text: "Focus on other studies",
                effects: { gold: 75 },
                result: "You choose different pursuits but miss learning valuable memory techniques."
            }
        ]
    }
];

// Add mini-game events to the main events array
if (window.game) {
    window.game.events.push(...miniGameEvents);
}

// Enhanced choice processing for mini-game bonuses
const originalApplyEffects = PharaohsLegacy.prototype.applyEffects;
PharaohsLegacy.prototype.applyEffects = function(effects) {
    // Apply original effects
    originalApplyEffects.call(this, effects);
    
    // Check for mini-game bonuses in current event
    if (this.currentEvent && this.currentEvent.choices) {
        this.currentEvent.choices.forEach(choice => {
            if (choice.miniGameBonus) {
                const bonus = choice.miniGameBonus();
                if (bonus && (bonus.knowledge > 0 || bonus.gold > 0)) {
                    originalApplyEffects.call(this, bonus);
                    this.showNotification(`🎮 Mini-game mastery bonus: ${this.formatEffects(bonus)}`);
                }
            }
        });
    }
};

// Add mini-game progress to character description
const originalUpdateDisplay = PharaohsLegacy.prototype.updateDisplay;
PharaohsLegacy.prototype.updateDisplay = function() {
    // Call original function
    originalUpdateDisplay.call(this);
    
    // Add mini-game progress to character description
    const characterDescription = document.getElementById('characterDescription');
    if (characterDescription && window.miniGames) {
        const miniGameProgress = `
            Mini-Games: H:${window.miniGames.hieroglyphScore} M:${window.miniGames.mathScore} 
            Mem:L${window.miniGames.memoryLevel} Q:${window.miniGames.quizScore}
        `;
        
        const currentText = characterDescription.textContent;
        if (!currentText.includes('Mini-Games:')) {
            characterDescription.textContent = currentText + ' • ' + miniGameProgress;
        }
    }
};

// Add mini-game achievements to main achievement system
const miniGameAchievements = [
    { 
        id: "hieroglyph_novice", 
        name: "Hieroglyph Novice", 
        icon: "📝", 
        condition: () => window.miniGames && window.miniGames.hieroglyphScore >= 25 
    },
    { 
        id: "hieroglyph_expert", 
        name: "Hieroglyph Expert", 
        icon: "📜", 
        condition: () => window.miniGames && window.miniGames.hieroglyphScore >= 100 
    },
    { 
        id: "math_apprentice", 
        name: "Math Apprentice", 
        icon: "🔢", 
        condition: () => window.miniGames && window.miniGames.mathScore >= 50 
    },
    { 
        id: "math_master", 
        name: "Math Master", 
        icon: "🧮", 
        condition: () => window.miniGames && window.miniGames.mathScore >= 200 
    },
    { 
        id: "memory_trainer", 
        name: "Memory Trainer", 
        icon: "🧠", 
        condition: () => window.miniGames && window.miniGames.memoryLevel >= 5 
    },
    { 
        id: "memory_champion", 
        name: "Memory Champion", 
        icon: "🏆", 
        condition: () => window.miniGames && window.miniGames.memoryLevel >= 10 
    },
    { 
        id: "quiz_student", 
        name: "Quiz Student", 
        icon: "❓", 
        condition: () => window.miniGames && window.miniGames.quizScore >= 10 
    },
    { 
        id: "quiz_master", 
        name: "Quiz Master", 
        icon: "🎓", 
        condition: () => window.miniGames && window.miniGames.quizScore >= 30 
    },
    { 
        id: "mini_game_completionist", 
        name: "Mini-Game Completionist", 
        icon: "🎮", 
        condition: () => window.miniGames && 
            window.miniGames.hieroglyphScore >= 100 && 
            window.miniGames.mathScore >= 100 && 
            window.miniGames.memoryLevel >= 8 && 
            window.miniGames.quizScore >= 20 
    }
];

// Add mini-game achievements to main game
if (window.game) {
    window.game.achievements.push(...miniGameAchievements);
}

// Add mini-game data to daily quests
const miniGameQuests = [
    {
        title: "Hieroglyph Practice",
        description: "Score 25 points in the hieroglyph mini-game",
        requirement: "minigame_score",
        gameType: "hieroglyph",
        amount: 25,
        reward: { knowledge: 15, gold: 75 },
        icon: "📝"
    },
    {
        title: "Mathematical Mind",
        description: "Score 30 points in the math mini-game",
        requirement: "minigame_score",
        gameType: "math",
        amount: 30,
        reward: { knowledge: 18, gold: 90 },
        icon: "🔢"
    },
    {
        title: "Memory Training",
        description: "Reach level 4 in the memory mini-game",
        requirement: "minigame_level",
        gameType: "memory",
        amount: 4,
        reward: { knowledge: 20, gold: 100 },
        icon: "🧠"
    },
    {
        title: "Knowledge Seeker",
        description: "Answer 5 quiz questions correctly",
        requirement: "minigame_score",
        gameType: "quiz",
        amount: 5,
        reward: { knowledge: 25, gold: 125 },
        icon: "❓"
    }
];

// Add mini-game quests to daily quest templates
if (window.game) {
    window.game.dailyQuestTemplates.push(...miniGameQuests);
}

// Enhanced quest progress tracking for mini-games
const originalUpdateQuestProgress = PharaohsLegacy.prototype.updateQuestProgress;
PharaohsLegacy.prototype.updateQuestProgress = function() {
    // Call original function
    originalUpdateQuestProgress.call(this);
    
    // Check mini-game quest progress
    this.player.dailyQuests.forEach(quest => {
        if (quest.completed) return;
        
        let completed = false;
        
        if (quest.requirement === 'minigame_score' && window.miniGames) {
            let currentScore = 0;
            switch(quest.gameType) {
                case 'hieroglyph':
                    currentScore = window.miniGames.hieroglyphScore;
                    break;
                case 'math':
                    currentScore = window.miniGames.mathScore;
                    break;
                case 'quiz':
                    currentScore = window.miniGames.quizScore;
                    break;
            }
            
            if (currentScore >= quest.amount) {
                completed = true;
            }
        } else if (quest.requirement === 'minigame_level' && window.miniGames) {
            if (quest.gameType === 'memory' && window.miniGames.memoryLevel >= quest.amount) {
                completed = true;
            }
        }
        
        if (completed) {
            quest.completed = true;
            this.applyEffects(quest.reward);
            this.showNotification(`✅ Daily Quest Complete: ${quest.title}!`);
            this.completedQuests++;
        }
    });
};

// Add mini-game tutorial integration with main game
const originalStartLesson = PharaohsLegacy.prototype.startLesson;
PharaohsLegacy.prototype.startLesson = function(lessonKey) {
    // Call original function
    originalStartLesson.call(this, lessonKey);
    
    // Show relevant mini-game tutorial after lesson
    setTimeout(() => {
        if (lessonKey === 'hieroglyphs' && window.miniGames) {
            const showTutorial = confirm('Would you like to practice hieroglyphs in the mini-game section?');
            if (showTutorial) {
                // Switch to hieroglyph mini-game tab
                const hieroglyphTab = document.querySelector('[onclick="showMiniGame(\'hieroglyphs\')"]');
                if (hieroglyphTab) {
                    hieroglyphTab.click();
                    MiniGameTutorial.showHieroglyphTutorial();
                }
            }
        } else if (lessonKey === 'mathematics' && window.miniGames) {
            const showTutorial = confirm('Would you like to practice Egyptian mathematics in the mini-game section?');
            if (showTutorial) {
                // Switch to math mini-game tab
                const mathTab = document.querySelector('[onclick="showMiniGame(\'math\')"]');
                if (mathTab) {
                    mathTab.click();
                    MiniGameTutorial.showMathTutorial();
                }
            }
        }
    }, 1000);
};

// Add final initialization and cleanup
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all mini-game systems
    setTimeout(() => {
        console.log('🎮 Mini-game systems initialized');
        
        // Set up periodic challenge updates
        setInterval(() => {
            if (window.miniGames) {
                MiniGameChallenges.updateChallengeDisplay();
                DailyMiniGameChallenges.checkDailyChallenge();
            }
        }, 1000);
        
        // Set up periodic stats saving
        setInterval(() => {
            if (window.miniGameStats) {
                window.miniGameStats.saveStats();
            }
        }, 10000); // Save stats every 10 seconds
        
        // Initialize challenge display element if it doesn't exist
        if (!document.getElementById('activeChallengeDisplay')) {
            const challengeDisplay = document.createElement('div');
            challengeDisplay.id = 'activeChallengeDisplay';
            challengeDisplay.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                z-index: 2000;
                display: none;
            `;
            document.body.appendChild(challengeDisplay);
        }
        
    }, 4000);
});

// Add window beforeunload handler for mini-game data
window.addEventListener('beforeunload', () => {
    if (window.miniGameStats) {
        window.miniGameStats.saveStats();
    }
    if (window.game && window.game.settings.autoSave) {
        window.game.saveGame();
    }
});

// Export mini-game functions for global access
window.MiniGameIntegration = MiniGameIntegration;
window.MiniGameTutorial = MiniGameTutorial;
window.MiniGamePowerUps = MiniGamePowerUps;
window.MiniGameRewards = MiniGameRewards;
window.MiniGameChallenges = MiniGameChallenges;
window.MiniGameLeaderboard = MiniGameLeaderboard;
window.EnhancedNotifications = EnhancedNotifications;

// Add daily mini-game challenges system
class DailyMiniGameChallenges {
    static dailyChallenges = [
        {
            id: 'daily_hieroglyph_master',
            name: 'Daily Hieroglyph Master',
            description: 'Score 50 points in hieroglyphs today',
            type: 'hieroglyph',
            target: 50,
            reward: { knowledge: 30, gold: 150 },
            completed: false,
            date: null
        },
        {
            id: 'daily_math_genius',
            name: 'Daily Math Genius',
            description: 'Score 75 points in mathematics today',
            type: 'math',
            target: 75,
            reward: { knowledge: 35, gold: 175 },
            completed: false,
            date: null
        },
        {
            id: 'daily_memory_champion',
            name: 'Daily Memory Champion',
            description: 'Reach level 6 in memory game today',
            type: 'memory',
            target: 6,
            reward: { knowledge: 40, gold: 200 },
            completed: false,
            date: null
        },
        {
            id: 'daily_quiz_scholar',
            name: 'Daily Quiz Scholar',
            description: 'Answer 15 quiz questions correctly today',
            type: 'quiz',
            target: 15,
            reward: { knowledge: 45, gold: 225 },
            completed: false,
            date: null
        }
    ];
    
    static initializeDailyChallenges() {
        const today = new Date().toDateString();
        const savedChallenges = localStorage.getItem('pharaohs_legacy_daily_minigame_challenges');
        
        if (savedChallenges) {
            const parsed = JSON.parse(savedChallenges);
            
            // Check if challenges are from today
            if (parsed.date === today) {
                this.dailyChallenges = parsed.challenges;
                return;
            }
        }
        
        // Reset challenges for new day
        this.dailyChallenges.forEach(challenge => {
            challenge.completed = false;
            challenge.date = today;
        });
        
        this.saveDailyChallenges();
        
        EnhancedNotifications.showMiniGameNotification(
            '🌅 New daily mini-game challenges available!',
            'info'
        );
    }
    
    static saveDailyChallenges() {
        const data = {
            date: new Date().toDateString(),
            challenges: this.dailyChallenges
        };
        localStorage.setItem('pharaohs_legacy_daily_minigame_challenges', JSON.stringify(data));
    }
    
    static checkDailyChallenge() {
        if (!window.miniGames) return;
        
        this.dailyChallenges.forEach(challenge => {
            if (challenge.completed) return;
            
            let currentProgress = 0;
            
            switch(challenge.type) {
                case 'hieroglyph':
                    currentProgress = window.miniGames.hieroglyphScore;
                    break;
                case 'math':
                    currentProgress = window.miniGames.mathScore;
                    break;
                case 'memory':
                    currentProgress = window.miniGames.memoryLevel;
                    break;
                case 'quiz':
                    currentProgress = window.miniGames.quizScore;
                    break;
            }
            
            if (currentProgress >= challenge.target) {
                challenge.completed = true;
                
                if (window.game) {
                    window.game.applyEffects(challenge.reward);
                    EnhancedNotifications.showMiniGameNotification(
                        `🎉 Daily Challenge Complete: ${challenge.name}! ${window.game.formatEffects(challenge.reward)}`,
                        'achievement'
                    );
                    window.game.playSound('achievement');
                }
                
                this.saveDailyChallenges();
            }
        });
    }
    
    static showDailyChallenges() {
        const modal = document.createElement('div');
        modal.className = 'daily-challenge-modal';
        
        modal.innerHTML = `
            <div class="daily-challenge-content">
                <h3>🌅 Daily Mini-Game Challenges</h3>
                <p class="challenge-info">Complete these challenges before midnight to earn rewards!</p>
                <div class="daily-challenge-list">
                    ${this.dailyChallenges.map(challenge => {
                        let currentProgress = 0;
                        if (window.miniGames) {
                            switch(challenge.type) {
                                case 'hieroglyph':
                                    currentProgress = window.miniGames.hieroglyphScore;
                                    break;
                                case 'math':
                                    currentProgress = window.miniGames.mathScore;
                                    break;
                                case 'memory':
                                    currentProgress = window.miniGames.memoryLevel;
                                    break;
                                case 'quiz':
                                    currentProgress = window.miniGames.quizScore;
                                    break;
                            }
                        }
                        
                        const progressPercent = Math.min(100, (currentProgress / challenge.target) * 100);
                        
                        return `
                            <div class="daily-challenge-item ${challenge.completed ? 'completed' : ''}">
                                <div class="challenge-header">
                                    <div class="challenge-name">${challenge.name}</div>
                                    <div class="challenge-status">${challenge.completed ? '✅' : '⏳'}</div>
                                </div>
                                <div class="challenge-description">${challenge.description}</div>
                                <div class="challenge-progress-bar">
                                    <div class="progress-fill" style="width: ${progressPercent}%"></div>
                                    <div class="progress-text">${currentProgress}/${challenge.target}</div>
                                </div>
                                <div class="challenge-reward">
                                    Reward: ${window.game ? window.game.formatEffects(challenge.reward) : 'Loading...'}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div class="time-remaining">
                    <div id="timeUntilReset">Time until reset: <span id="countdown"></span></div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Start countdown timer
        this.startCountdown();
    }
    
    static startCountdown() {
        const countdownElement = document.getElementById('countdown');
        if (!countdownElement) return;
        
        const updateCountdown = () => {
            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(0, 0, 0, 0);
            
            const timeLeft = tomorrow - now;
            
            if (timeLeft <= 0) {
                countdownElement.textContent = 'Resetting...';
                setTimeout(() => {
                    this.initializeDailyChallenges();
                }, 1000);
                return;
            }
            
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
        };
        
        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        
        // Clean up interval when modal is closed
        const modal = document.querySelector('.daily-challenge-modal');
        if (modal) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.type === 'childList') {
                        mutation.removedNodes.forEach((node) => {
                            if (node === modal) {
                                clearInterval(interval);
                                observer.disconnect();
                            }
                        });
                    }
                });
            });
            observer.observe(document.body, { childList: true });
        }
    }
}

// Add daily challenge CSS
const dailyChallengeCSS = `
.daily-challenge-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3000;
}

.daily-challenge-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 600px;
    width: 90%;
    color: #e6d7c3;
    max-height: 80vh;
    overflow-y: auto;
}

.daily-challenge-content h3 {
    color: #daa520;
    text-align: center;
    margin-bottom: 10px;
    font-family: 'Cinzel', serif;
}

.challenge-info {
    text-align: center;
    margin-bottom: 20px;
    color: #ccc;
    font-style: italic;
}

.daily-challenge-list {
    margin-bottom: 20px;
}

.daily-challenge-item {
    padding: 15px;
    margin-bottom: 15px;
    background: rgba(218, 165, 32, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(218, 165, 32, 0.3);
    transition: all 0.3s ease;
}

.daily-challenge-item.completed {
    background: rgba(76, 175, 80, 0.2);
    border-color: rgba(76, 175, 80, 0.5);
}

.challenge-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
}

.challenge-name {
    font-weight: bold;
    color: #daa520;
}

.challenge-status {
    font-size: 1.2em;
}

.challenge-description {
    margin-bottom: 10px;
    font-size: 0.9em;
}

.challenge-progress-bar {
    position: relative;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    height: 20px;
    margin-bottom: 8px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #4ecdc4 0%, #44a08d 100%);
    border-radius: 10px;
    transition: width 0.3s ease;
}

.progress-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.8em;
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
}

.challenge-reward {
    font-size: 0.8em;
    color: #4ecdc4;
    font-weight: bold;
}

.time-remaining {
    text-align: center;
    margin-bottom: 20px;
    padding: 10px;
    background: rgba(218, 165, 32, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(218, 165, 32, 0.3);
}

#countdown {
    color: #daa520;
    font-weight: bold;
    font-size: 1.1em;
}

.daily-challenge-content button {
    width: 100%;
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.daily-challenge-content button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}
`;

const dailyChallengeStyleSheet = document.createElement('style');
dailyChallengeStyleSheet.textContent = dailyChallengeCSS;
document.head.appendChild(dailyChallengeStyleSheet);

// Function to show daily challenges
function showDailyMiniGameChallenges() {
    DailyMiniGameChallenges.showDailyChallenges();
}

// Initialize daily challenges when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        DailyMiniGameChallenges.initializeDailyChallenges();
    }, 5000);
});

// Add mini-game integration to store items
const miniGameStoreItems = {
    consumables: [
        { 
            id: "focus_potion", 
            name: "🧪 Focus Potion", 
            price: 75, 
            effect: { knowledge: 5 }, 
            description: "Improves mini-game performance for 5 minutes",
            miniGameEffect: "focus"
        },
        { 
            id: "time_crystal", 
            name: "⏰ Time Crystal", 
            price: 150, 
            effect: {}, 
            description: "Adds 30 seconds to timed mini-game challenges",
            miniGameEffect: "time"
        },
        { 
            id: "wisdom_scroll_advanced", 
            name: "📜 Advanced Wisdom Scroll", 
            price: 200, 
            effect: { knowledge: 25 }, 
            description: "Unlocks hint system for mini-games",
            miniGameEffect: "hints"
        }
    ],
    tools: [
        { 
            id: "scribes_stylus_enhanced", 
            name: "✒️ Enhanced Scribe's Stylus", 
            price: 300, 
            effect: { knowledge: 10 }, 
            description: "Permanent +20% mini-game score bonus",
            permanent: true,
            miniGameEffect: "score_bonus"
        },
        { 
            id: "memory_amulet", 
            name: "🧿 Memory Amulet", 
            price: 400, 
            effect: { knowledge: 15 }, 
            description: "Extends memory game sequences by 1 step",
            permanent: true,
            miniGameEffect: "memory_boost"
        },
        { 
            id: "calculation_abacus", 
            name: "🧮 Golden Abacus", 
            price: 350, 
            effect: { knowledge: 12 }, 
            description: "Shows partial solutions in math mini-games",
            permanent: true,
            miniGameEffect: "math_assist"
        }
    ]
};

// Add mini-game items to main store
if (window.game) {
    window.game.storeItems.consumables.push(...miniGameStoreItems.consumables);
    window.game.storeItems.tools.push(...miniGameStoreItems.tools);
}

// Add mini-game item effects system
class MiniGameItemEffects {
    static activeEffects = {
        focus: { active: false, endTime: 0 },
        timeBonus: 0,
        hintsEnabled: false,
        scoreBonus: 1.0,
        memoryBoost: false,
        mathAssist: false
    };
    
    static applyItemEffect(itemId) {
        const now = Date.now();
        
        switch(itemId) {
            case 'focus_potion':
                this.activeEffects.focus = { active: true, endTime: now + 300000 }; // 5 minutes
                EnhancedNotifications.showMiniGameNotification('🧪 Focus enhanced for 5 minutes!', 'success');
                break;
                
            case 'time_crystal':
                this.activeEffects.timeBonus += 30000; // 30 seconds
                EnhancedNotifications.showMiniGameNotification('⏰ +30 seconds added to timed challenges!', 'success');
                break;
                
            case 'wisdom_scroll_advanced':
                this.activeEffects.hintsEnabled = true;
                EnhancedNotifications.showMiniGameNotification('📜 Hint system unlocked!', 'success');
                break;
                
            case 'scribes_stylus_enhanced':
                this.activeEffects.scoreBonus = 1.2;
                EnhancedNotifications.showMiniGameNotification('✒️ +20% score bonus activated!', 'success');
                break;
                
            case 'memory_amulet':
                this.activeEffects.memoryBoost = true;
                EnhancedNotifications.showMiniGameNotification('🧿 Memory sequences extended!', 'success');
                break;
                
            case 'calculation_abacus':
                this.activeEffects.mathAssist = true;
                EnhancedNotifications.showMiniGameNotification('🧮 Math assistance activated!', 'success');
                break;
        }
        
        this.saveEffects();
    }
    
    static checkActiveEffects() {
        const now = Date.now();
        
        // Check focus potion expiration
        if (this.activeEffects.focus.active && now > this.activeEffects.focus.endTime) {
            this.activeEffects.focus.active = false;
            EnhancedNotifications.showMiniGameNotification('🧪 Focus potion effect expired', 'info');
        }
        
        return this.activeEffects;
    }
    
    static getScoreMultiplier() {
        let multiplier = this.activeEffects.scoreBonus;
        
        if (this.activeEffects.focus.active && Date.now() < this.activeEffects.focus.endTime) {
            multiplier *= 1.1; // Additional 10% from focus potion
        }
        
        return multiplier;
    }
    
    static saveEffects() {
        localStorage.setItem('pharaohs_legacy_minigame_effects', JSON.stringify(this.activeEffects));
    }
    
    static loadEffects() {
        const saved = localStorage.getItem('pharaohs_legacy_minigame_effects');
        if (saved) {
            this.activeEffects = { ...this.activeEffects, ...JSON.parse(saved) };
        }
    }
}

// Initialize item effects
MiniGameItemEffects.loadEffects();

// Modify original useItem function to handle mini-game items
const originalUseItem = PharaohsLegacy.prototype.useItem;
PharaohsLegacy.prototype.useItem = function(itemIndex) {
    const item = this.player.inventory[itemIndex];
    if (!item) return;
    
    // Check if it's a mini-game item
    const allItems = [...this.storeItems.consumables, ...this.storeItems.tools, ...this.storeItems.artifacts];
    const itemData = allItems.find(i => item.includes(i.name.split(' ').slice(1).join(' ')));
    
    if (itemData && itemData.miniGameEffect) {
        MiniGameItemEffects.applyItemEffect(itemData.id);
        
        // Remove consumable items from inventory
        if (!itemData.permanent) {
            this.player.inventory.splice(itemIndex, 1);
        }
        
        this.updateDisplay();
        return;
    }
    
    // Call original function for non-mini-game items
    originalUseItem.call(this, itemIndex);
};

// Add mini-game leaderboard system
class MiniGameLeaderboard {
    static getLeaderboard(gameType) {
        const key = `pharaohs_legacy_leaderboard_${gameType}`;
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : [];
    }
    
    static addScore(gameType, playerName, score) {
        const leaderboard = this.getLeaderboard(gameType);
        
        leaderboard.push({
            name: playerName,
            score: score,
            date: new Date().toISOString()
        });
        
        // Sort by score (descending) and keep top 10
        leaderboard.sort((a, b) => b.score - a.score);
        const topScores = leaderboard.slice(0, 10);
        
        const key = `pharaohs_legacy_leaderboard_${gameType}`;
        localStorage.setItem(key, JSON.stringify(topScores));
        
        // Check if this is a new high score
        if (topScores[0].name === playerName && topScores[0].score === score) {
            EnhancedNotifications.showMiniGameNotification(
                `🏆 NEW HIGH SCORE in ${gameType}! ${score} points`,
                'achievement'
            );
            if (window.game) window.game.playSound('achievement');
        }
    }
    
    static showLeaderboard(gameType) {
        const leaderboard = this.getLeaderboard(gameType);
        
        const modal = document.createElement('div');
        modal.className = 'leaderboard-modal';
        
        modal.innerHTML = `
            <div class="leaderboard-content">
                <h3>🏆 ${gameType.charAt(0).toUpperCase() + gameType.slice(1)} Leaderboard</h3>
                <div class="leaderboard-list">
                    ${leaderboard.length > 0 ? leaderboard.map((entry, index) => `
                        <div class="leaderboard-entry ${index === 0 ? 'first-place' : index === 1 ? 'second-place' : index === 2 ? 'third-place' : ''}">
                            <div class="rank">${index + 1}</div>
                            <div class="player-name">${entry.name}</div>
                            <div class="score">${entry.score}</div>
                            <div class="date">${new Date(entry.date).toLocaleDateString()}</div>
                        </div>
                    `).join('') : '<div class="no-scores">No scores yet! Be the first to play!</div>'}
                </div>
                <button onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    static showAllLeaderboards() {
        const gameTypes = ['hieroglyph', 'math', 'memory', 'quiz'];
        
        const modal = document.createElement('div');
        modal.className = 'all-leaderboards-modal';
        
        let content = `
            <div class="all-leaderboards-content">
                <h3>🏆 All Mini-Game Leaderboards</h3>
                <div class="leaderboard-tabs">
                    ${gameTypes.map((type, index) => `
                        <button class="leaderboard-tab ${index === 0 ? 'active' : ''}" onclick="showLeaderboardTab('${type}')">${type.charAt(0).toUpperCase() + type.slice(1)}</button>
                    `).join('')}
                </div>
                <div class="leaderboard-content-area">
        `;
        
        gameTypes.forEach((type, index) => {
            const leaderboard = this.getLeaderboard(type);
            content += `
                <div class="leaderboard-tab-content ${index === 0 ? 'active' : ''}" id="leaderboard-${type}">
                    ${leaderboard.length > 0 ? leaderboard.slice(0, 5).map((entry, entryIndex) => `
                        <div class="leaderboard-entry ${entryIndex === 0 ? 'first-place' : ''}">
                            <span class="rank">${entryIndex + 1}.</span>
                            <span class="player-name">${entry.name}</span>
                            <span class="score">${entry.score}</span>
                        </div>
                    `).join('') : '<div class="no-scores">No scores yet!</div>'}
                </div>
            `;
        });
        
        content += `
                </div>
                <button onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        `;
        
        modal.innerHTML = content;
        document.body.appendChild(modal);
    }
}

// Function to show leaderboard tab
function showLeaderboardTab(gameType) {
    // Update tab buttons
    document.querySelectorAll('.leaderboard-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[onclick="showLeaderboardTab('${gameType}')"]`).classList.add('active');
    
    // Update content
    document.querySelectorAll('.leaderboard-tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`leaderboard-${gameType}`).classList.add('active');
}

// Add leaderboard CSS
const leaderboardCSS = `
.leaderboard-modal, .all-leaderboards-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3000;
}

.leaderboard-content, .all-leaderboards-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 500px;
    width: 90%;
    color: #e6d7c3;
    max-height: 80vh;
    overflow-y: auto;
}

.leaderboard-content h3, .all-leaderboards-content h3 {
    color: #daa520;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Cinzel', serif;
}

.leaderboard-list {
    margin-bottom: 20px;
}

.leaderboard-entry {
    display: grid;
    grid-template-columns: 40px 1fr 80px 100px;
    gap: 10px;
    padding: 10px;
    margin-bottom: 8px;
    background: rgba(218, 165, 32, 0.1);
    border-radius: 6px;
    align-items: center;
}

.leaderboard-entry.first-place {
    background: rgba(255, 215, 0, 0.2);
    border: 1px solid rgba(255, 215, 0, 0.5);
}

.leaderboard-entry.second-place {
    background: rgba(192, 192, 192, 0.2);
    border: 1px solid rgba(192, 192, 192, 0.5);
}

.leaderboard-entry.third-place {
    background: rgba(205, 127, 50, 0.2);
    border: 1px solid rgba(205, 127, 50, 0.5);
}

.rank {
    font-weight: bold;
    color: #daa520;
    text-align: center;
}

.player-name {
    font-weight: bold;
}

.score {
    text-align: right;
    color: #4ecdc4;
    font-weight: bold;
}

.date {
    font-size: 0.8em;
    color: #ccc;
    text-align: right;
}

.no-scores {
    text-align: center;
    color: #ccc;
    font-style: italic;
    padding: 20px;
}

.leaderboard-tabs {
    display: flex;
    gap: 5px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.leaderboard-tab {
    background: rgba(218, 165, 32, 0.2);
    color: #e6d7c3;
    border: 1px solid rgba(218, 165, 32, 0.3);
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    min-width: 80px;
}

.leaderboard-tab.active {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
}

.leaderboard-tab:hover {
    transform: translateY(-1px);
}

.leaderboard-content-area {
    min-height: 200px;
}

.leaderboard-tab-content {
    display: none;
}

.leaderboard-tab-content.active {
    display: block;
}

.leaderboard-content button, .all-leaderboards-content button {
    width: 100%;
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    margin-top: 20px;
}

.leaderboard-content button:hover, .all-leaderboards-content button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}
`;

const leaderboardStyleSheet = document.createElement('style');
leaderboardStyleSheet.textContent = leaderboardCSS;
document.head.appendChild(leaderboardStyleSheet);

// Functions to show leaderboards
function showMiniGameLeaderboard(gameType) {
    MiniGameLeaderboard.showLeaderboard(gameType);
}

function showAllMiniGameLeaderboards() {
    MiniGameLeaderboard.showAllLeaderboards();
}

// Add comprehensive mini-game settings
class MiniGameSettings {
    static settings = {
        difficulty: 'normal',
        soundEnabled: true,
        animationsEnabled: true,
        autoSave: true,
        showHints: true,
        timerEnabled: true,
        particleEffects: true,
        keyboardShortcuts: true,
        autoSubmit: false,
        colorBlindMode: false
    };
    
    static loadSettings() {
        const saved = localStorage.getItem('pharaohs_legacy_minigame_settings');
        if (saved) {
            this.settings = { ...this.settings, ...JSON.parse(saved) };
        }
    }
    
    static saveSettings() {
        localStorage.setItem('pharaohs_legacy_minigame_settings', JSON.stringify(this.settings));
    }
    
    static updateSetting(key, value) {
        this.settings[key] = value;
        this.saveSettings();
        this.applySettings();
    }
    
    static applySettings() {
        // Apply difficulty settings
        if (window.miniGames) {
            switch(this.settings.difficulty) {
                case 'easy':
                    window.miniGames.difficultyMultiplier = 0.7;
                    break;
                case 'normal':
                    window.miniGames.difficultyMultiplier = 1.0;
                    break;
                case 'hard':
                    window.miniGames.difficultyMultiplier = 1.5;
                    break;
            }
        }
        
        // Apply visual settings
        document.body.classList.toggle('minigame-no-animations', !this.settings.animationsEnabled);
        document.body.classList.toggle('minigame-no-particles', !this.settings.particleEffects);
        document.body.classList.toggle('minigame-colorblind', this.settings.colorBlindMode);
    }
    
    static showSettingsMenu() {
        const modal = document.createElement('div');
        modal.className = 'minigame-settings-modal';
        
        modal.innerHTML = `
            <div class="minigame-settings-content">
                <h3>⚙️ Mini-Game Settings</h3>
                
                <div class="settings-section">
                    <h4>🎯 Gameplay</h4>
                    <div class="setting-item">
                        <label>Difficulty:</label>
                        <select onchange="MiniGameSettings.updateSetting('difficulty', this.value)">
                            <option value="easy" ${this.settings.difficulty === 'easy' ? 'selected' : ''}>Easy</option>
                            <option value="normal" ${this.settings.difficulty === 'normal' ? 'selected' : ''}>Normal</option>
                            <option value="hard" ${this.settings.difficulty === 'hard' ? 'selected' : ''}>Hard</option>
                        </select>
                    </div>
                    <div class="setting-item">
                        <label>
                            <input type="checkbox" ${this.settings.showHints ? 'checked' : ''} 
                                   onchange="MiniGameSettings.updateSetting('showHints', this.checked)">
                            Show Hints
                        </label>
                    </div>
                    <div class="setting-item">
                        <label>
                            <input type="checkbox" ${this.settings.timerEnabled ? 'checked' : ''} 
                                   onchange="MiniGameSettings.updateSetting('timerEnabled', this.checked)">
                            Enable Timer
                        </label>
                    </div>
                    <div class="setting-item">
                        <label>
                            <input type="checkbox" ${this.settings.autoSubmit ? 'checked' : ''} 
                                   onchange="MiniGameSettings.updateSetting('autoSubmit', this.checked)">
                            Auto-submit Answers
                        </label>
                    </div>
                </div>
                
                <div class="settings-section">
                    <h4>🎨 Visual & Audio</h4>
                    <div class="setting-item">
                        <label>
                            <input type="checkbox" ${this.settings.soundEnabled ? 'checked' : ''} 
                                   onchange="MiniGameSettings.updateSetting('soundEnabled', this.checked)">
                            Sound Effects
                        </label>
                    </div>
                    <div class="setting-item">
                        <label>
                            <input type="checkbox" ${this.settings.animationsEnabled ? 'checked' : ''} 
                                   onchange="MiniGameSettings.updateSetting('animationsEnabled', this.checked)">
                            Animations
                        </label>
                    </div>
                    <div class="setting-item">
                        <label>
                            <input type="checkbox" ${this.settings.particleEffects ? 'checked' : ''} 
                                   onchange="MiniGameSettings.updateSetting('particleEffects', this.checked)">
                            Particle Effects
                        </label>
                    </div>
                    <div class="setting-item">
                        <label>
                            <input type="checkbox" ${this.settings.colorBlindMode ? 'checked' : ''} 
                                   onchange="MiniGameSettings.updateSetting('colorBlindMode', this.checked)">
                            Color Blind Mode
                        </label>
                    </div>
                </div>
                
                <div class="settings-section">
                    <h4>⌨️ Controls</h4>
                    <div class="setting-item">
                        <label>
                            <input type="checkbox" ${this.settings.keyboardShortcuts ? 'checked' : ''} 
                                   onchange="MiniGameSettings.updateSetting('keyboardShortcuts', this.checked)">
                            Keyboard Shortcuts
                        </label>
                    </div>
                    <div class="setting-item">
                        <label>
                            <input type="checkbox" ${this.settings.autoSave ? 'checked' : ''} 
                                   onchange="MiniGameSettings.updateSetting('autoSave', this.checked)">
                            Auto-save Progress
                        </label>
                    </div>
                </div>
                
                <div class="settings-actions">
                    <button onclick="MiniGameSettings.resetSettings()">Reset to Defaults</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    static resetSettings() {
        this.settings = {
            difficulty: 'normal',
            soundEnabled: true,
            animationsEnabled: true,
            autoSave: true,
            showHints: true,
            timerEnabled: true,
            particleEffects: true,
            keyboardShortcuts: true,
            autoSubmit: false,
            colorBlindMode: false
        };
        this.saveSettings();
        this.applySettings();
        
        // Refresh settings menu
        const modal = document.querySelector('.minigame-settings-modal');
        if (modal) {
            modal.remove();
            this.showSettingsMenu();
        }
        
        EnhancedNotifications.showMiniGameNotification('⚙️ Settings reset to defaults', 'info');
    }
}

// Initialize mini-game settings
MiniGameSettings.loadSettings();
MiniGameSettings.applySettings();

// Add settings CSS
const miniGameSettingsCSS = `
.minigame-settings-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3000;
}

.minigame-settings-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 500px;
    width: 90%;
    color: #e6d7c3;
    max-height: 80vh;
    overflow-y: auto;
}

.minigame-settings-content h3 {
    color: #daa520;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Cinzel', serif;
}

.settings-section {
    margin-bottom: 25px;
    padding: 15px;
    background: rgba(218, 165, 32, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(218, 165, 32, 0.3);
}

.settings-section h4 {
    color: #daa520;
    margin-bottom: 15px;
    font-size: 1.1em;
}

.setting-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    padding: 8px 0;
}

.setting-item label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.setting-item select {
    background: rgba(218, 165, 32, 0.2);
    color: #e6d7c3;
    border: 1px solid rgba(218, 165, 32, 0.5);
    border-radius: 4px;
    padding: 4px 8px;
}

.setting-item input[type="checkbox"] {
    accent-color: #daa520;
}

.settings-actions {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.settings-actions button {
    flex: 1;
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.settings-actions button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}

/* Visual setting effects */
.minigame-no-animations * {
    animation: none !important;
    transition: none !important;
}

.minigame-no-particles .particle {
    display: none !important;
}

.minigame-colorblind {
    filter: grayscale(0.3) contrast(1.2);
}
`;

const miniGameSettingsStyleSheet = document.createElement('style');
miniGameSettingsStyleSheet.textContent = miniGameSettingsCSS;
document.head.appendChild(miniGameSettingsStyleSheet);

// Function to show mini-game settings
function showMiniGameSettings() {
    MiniGameSettings.showSettingsMenu();
}

// Add comprehensive help system
class MiniGameHelp {
    static helpContent = {
        hieroglyphs: {
            title: "Hieroglyph Mini-Game Help",
            sections: [
                {
                    title: "How to Play",
                    content: "Match hieroglyphic symbols with their meanings. Click on the correct meaning for each symbol shown."
                },
                {
                    title: "Scoring",
                    content: "Correct answers: +10 points\nWrong answers: -5 points\nStreak bonus: +2 points per consecutive correct answer"
                },
                {
                    title: "Tips",
                    content: "• Study the hieroglyph lessons first\n• Look for visual clues in the symbols\n• Use the hint system when stuck\n• Practice regularly to improve"
                }
            ]
        },
        math: {
            title: "Egyptian Math Mini-Game Help",
            sections: [
                {
                    title: "How to Play",
                    content: "Solve mathematical problems using Egyptian numerals and methods. Enter your answer in the input field."
                },
                {
                    title: "Egyptian Numbers",
                    content: "𓏺 = 1, 𓎆 = 10, 𓍢 = 100, 𓆼 = 1000\nAdd symbols together to make numbers"
                },
                {
                    title: "Tips",
                    content: "• Learn the Egyptian number system first\n• Break down complex numbers\n• Use the abacus tool if available\n• Practice mental math"
                }
            ]
        },
        memory: {
            title: "Memory Game Help",
            sections: [
                {
                    title: "How to Play",
                    content: "Watch the sequence of symbols, then repeat it by clicking in the same order."
                },
                {
                    title: "Progression",
                    content: "Each level adds one more symbol to remember. The game gets faster as you progress."
                },
                {
                    title: "Tips",
                    content: "• Focus on the pattern\n• Use memory techniques\n• Take breaks to avoid fatigue\n• Practice visualization"
                }
            ]
        },
        quiz: {
            title: "Knowledge Quiz Help",
            sections: [
                {
                    title: "How to Play",
                    content: "Answer questions about ancient Egyptian culture, history, and knowledge."
                },
                {
                    title: "Question Types",
                    content: "Multiple choice, true/false, and fill-in-the-blank questions covering all aspects of Egyptian civilization."
                },
                {
                    title: "Tips",
                    content: "• Complete lessons first\n• Read questions carefully\n• Use process of elimination\n• Learn from wrong answers"
                }
            ]
        }
    };
    
    static showHelp(gameType = null) {
        const modal = document.createElement('div');
        modal.className = 'minigame-help-modal';
        
        if (gameType && this.helpContent[gameType]) {
            // Show specific game help
            const help = this.helpContent[gameType];
            modal.innerHTML = `
                <div class="minigame-help-content">
                    <h3>${help.title}</h3>
                    ${help.sections.map(section => `
                        <div class="help-section">
                            <h4>${section.title}</h4>
                            <div class="help-text">${section.content.replace(/\n/g, '<br>')}</div>
                        </div>
                    `).join('')}
                    <div class="help-actions">
                        <button onclick="MiniGameHelp.showHelp()">All Help Topics</button>
                        <button onclick="this.parentElement.parentElement.parentElement.remove()">Close</button>
                    </div>
                </div>
            `;
        } else {
            // Show all help topics
            modal.innerHTML = `
            <div class="minigame-help-content">
            <h3>🎮 Mini-Game Help Center</h3>
            <div class="help-topics">
                ${Object.keys(this.helpContent).map(gameType => `
                    <div class="help-topic" onclick="MiniGameHelp.showHelp('${gameType}')">
                        <div class="topic-icon">${this.getGameIcon(gameType)}</div>
                        <div class="topic-title">${this.helpContent[gameType].title}</div>
                        <div class="topic-arrow">→</div>
                    </div>
                `).join('')}
            </div>
            
            <div class="general-help">
                <h4>🎯 General Tips</h4>
                <div class="help-text">
                    • Complete main game lessons before playing mini-games<br>
                    • Use items from the store to boost performance<br>
                    • Check daily challenges for extra rewards<br>
                    • Practice regularly to improve your scores<br>
                    • Adjust settings for your preferred experience
                </div>
            </div>
            
            <div class="keyboard-shortcuts">
                <h4>⌨️ Keyboard Shortcuts</h4>
                <div class="shortcuts-grid">
                    <div class="shortcut"><span class="key">1-4</span> Select answer options</div>
                    <div class="shortcut"><span class="key">Enter</span> Submit answer</div>
                    <div class="shortcut"><span class="key">Space</span> Start/restart game</div>
                    <div class="shortcut"><span class="key">H</span> Show hint (if available)</div>
                    <div class="shortcut"><span class="key">Esc</span> Exit mini-game</div>
                </div>
            </div>
            
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;
}

document.body.appendChild(modal);
}

static getGameIcon(gameType) {
const icons = {
    hieroglyphs: '📜',
    math: '🔢',
    memory: '🧠',
    quiz: '❓'
};
return icons[gameType] || '🎮';
}
}

// Add help CSS
const miniGameHelpCSS = `
.minigame-help-modal {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
display: flex;
align-items: center;
justify-content: center;
z-index: 3000;
}

.minigame-help-content {
background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
border: 2px solid #daa520;
border-radius: 15px;
padding: 30px;
max-width: 600px;
width: 90%;
color: #e6d7c3;
max-height: 80vh;
overflow-y: auto;
}

.minigame-help-content h3 {
color: #daa520;
text-align: center;
margin-bottom: 20px;
font-family: 'Cinzel', serif;
}

.help-topics {
margin-bottom: 25px;
}

.help-topic {
display: flex;
align-items: center;
padding: 15px;
margin-bottom: 10px;
background: rgba(218, 165, 32, 0.1);
border-radius: 8px;
border: 1px solid rgba(218, 165, 32, 0.3);
cursor: pointer;
transition: all 0.3s ease;
}

.help-topic:hover {
background: rgba(218, 165, 32, 0.2);
transform: translateX(5px);
}

.topic-icon {
font-size: 1.5em;
margin-right: 15px;
}

.topic-title {
flex: 1;
font-weight: bold;
}

.topic-arrow {
color: #daa520;
font-weight: bold;
}

.help-section {
margin-bottom: 20px;
padding: 15px;
background: rgba(218, 165, 32, 0.1);
border-radius: 8px;
border: 1px solid rgba(218, 165, 32, 0.3);
}

.help-section h4 {
color: #daa520;
margin-bottom: 10px;
}

.help-text {
line-height: 1.6;
}

.general-help, .keyboard-shortcuts {
margin-bottom: 20px;
padding: 15px;
background: rgba(76, 205, 196, 0.1);
border-radius: 8px;
border: 1px solid rgba(76, 205, 196, 0.3);
}

.general-help h4, .keyboard-shortcuts h4 {
color: #4ecdc4;
margin-bottom: 10px;
}

.shortcuts-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 8px;
}

.shortcut {
display: flex;
align-items: center;
gap: 8px;
}

.key {
background: rgba(218, 165, 32, 0.3);
color: #daa520;
padding: 2px 8px;
border-radius: 4px;
font-family: monospace;
font-weight: bold;
min-width: 40px;
text-align: center;
}

.help-actions {
display: flex;
gap: 10px;
margin-top: 20px;
}

.help-actions button {
flex: 1;
background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
color: #1a1a1a;
border: none;
padding: 12px;
border-radius: 8px;
cursor: pointer;
font-weight: bold;
transition: all 0.3s ease;
}

.help-actions button:hover {
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}

.minigame-help-content > button {
width: 100%;
background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
color: #1a1a1a;
border: none;
padding: 12px;
border-radius: 8px;
cursor: pointer;
font-weight: bold;
transition: all 0.3s ease;
margin-top: 20px;
}

.minigame-help-content > button:hover {
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}
`;

const miniGameHelpStyleSheet = document.createElement('style');
miniGameHelpStyleSheet.textContent = miniGameHelpCSS;
document.head.appendChild(miniGameHelpStyleSheet);

// Function to show help
function showMiniGameHelp(gameType = null) {
MiniGameHelp.showHelp(gameType);
}

// Add comprehensive mini-game analytics
class MiniGameAnalytics {
static analytics = {
totalGamesPlayed: 0,
totalTimeSpent: 0,
averageScore: 0,
bestStreak: 0,
gamesPerType: {
    hieroglyphs: 0,
    math: 0,
    memory: 0,
    quiz: 0
},
timePerType: {
    hieroglyphs: 0,
    math: 0,
    memory: 0,
    quiz: 0
},
accuracyPerType: {
    hieroglyphs: 0,
    math: 0,
    memory: 0,
    quiz: 0
},
improvementTrend: [],
lastPlayed: null
};

static loadAnalytics() {
const saved = localStorage.getItem('pharaohs_legacy_minigame_analytics');
if (saved) {
    this.analytics = { ...this.analytics, ...JSON.parse(saved) };
}
}

static saveAnalytics() {
localStorage.setItem('pharaohs_legacy_minigame_analytics', JSON.stringify(this.analytics));
}

static recordGame(gameType, score, timeSpent, accuracy) {
this.analytics.totalGamesPlayed++;
this.analytics.totalTimeSpent += timeSpent;
this.analytics.gamesPerType[gameType]++;
this.analytics.timePerType[gameType] += timeSpent;
this.analytics.accuracyPerType[gameType] = 
    (this.analytics.accuracyPerType[gameType] + accuracy) / 2;

// Update average score
this.analytics.averageScore = 
    (this.analytics.averageScore * (this.analytics.totalGamesPlayed - 1) + score) / 
    this.analytics.totalGamesPlayed;

// Record improvement trend
this.analytics.improvementTrend.push({
    date: new Date().toISOString(),
    gameType: gameType,
    score: score,
    accuracy: accuracy
});

// Keep only last 50 games for trend analysis
if (this.analytics.improvementTrend.length > 50) {
    this.analytics.improvementTrend = this.analytics.improvementTrend.slice(-50);
}

this.analytics.lastPlayed = new Date().toISOString();
this.saveAnalytics();
}

static getInsights() {
const insights = [];

// Most played game
const mostPlayed = Object.keys(this.analytics.gamesPerType).reduce((a, b) => 
    this.analytics.gamesPerType[a] > this.analytics.gamesPerType[b] ? a : b
);
insights.push(`Your favorite mini-game is ${mostPlayed}`);

// Best accuracy
const bestAccuracy = Object.keys(this.analytics.accuracyPerType).reduce((a, b) => 
    this.analytics.accuracyPerType[a] > this.analytics.accuracyPerType[b] ? a : b
);
insights.push(`You're most accurate at ${bestAccuracy} (${Math.round(this.analytics.accuracyPerType[bestAccuracy])}%)`);

// Time analysis
const avgTimePerGame = this.analytics.totalTimeSpent / this.analytics.totalGamesPlayed;
if (avgTimePerGame < 60) {
    insights.push("You're a quick player! Try harder difficulties for more challenge.");
} else if (avgTimePerGame > 180) {
    insights.push("You take your time to think - great for accuracy!");
}

// Improvement trend
if (this.analytics.improvementTrend.length >= 10) {
    const recent = this.analytics.improvementTrend.slice(-10);
    const older = this.analytics.improvementTrend.slice(-20, -10);
    
    const recentAvg = recent.reduce((sum, game) => sum + game.score, 0) / recent.length;
    const olderAvg = older.reduce((sum, game) => sum + game.score, 0) / older.length;
    
    if (recentAvg > olderAvg * 1.1) {
        insights.push("📈 You're improving! Your recent scores are getting better.");
    } else if (recentAvg < olderAvg * 0.9) {
        insights.push("📉 Consider reviewing lessons or taking a break to refresh.");
    }
}

return insights;
}

static showAnalytics() {
const insights = this.getInsights();

const modal = document.createElement('div');
modal.className = 'analytics-modal';

modal.innerHTML = `
    <div class="analytics-content">
        <h3>📊 Your Mini-Game Analytics</h3>
        
        <div class="analytics-overview">
            <div class="stat-card">
                <div class="stat-number">${this.analytics.totalGamesPlayed}</div>
                <div class="stat-label">Games Played</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${Math.round(this.analytics.averageScore)}</div>
                <div class="stat-label">Average Score</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">${Math.round(this.analytics.totalTimeSpent / 60)}m</div>
                <div class="stat-label">Time Played</div>
            </div>
        </div>
        
        <div class="analytics-section">
            <h4>🎮 Games by Type</h4>
            <div class="game-stats">
                ${Object.keys(this.analytics.gamesPerType).map(gameType => `
                    <div class="game-stat-row">
                        <span class="game-name">${gameType.charAt(0).toUpperCase() + gameType.slice(1)}</span>
                        <span class="game-count">${this.analytics.gamesPerType[gameType]} games</span>
                        <span class="game-accuracy">${Math.round(this.analytics.accuracyPerType[gameType])}% accuracy</span>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="analytics-section">
            <h4>💡 Insights</h4>
            <div class="insights-list">
                ${insights.map(insight => `<div class="insight-item">• ${insight}</div>`).join('')}
            </div>
        </div>
        
        <div class="analytics-section">
            <h4>📈 Recent Performance</h4>
            <div class="performance-chart">
                ${this.analytics.improvementTrend.slice(-10).map((game, index) => `
                    <div class="performance-bar" style="height: ${(game.score / 100) * 100}%; background: hsl(${game.accuracy * 1.2}, 70%, 50%)">
                        <div class="performance-tooltip">${game.gameType}: ${game.score} pts</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="analytics-actions">
            <button onclick="MiniGameAnalytics.exportAnalytics()">📤 Export Data</button>
            <button onclick="MiniGameAnalytics.resetAnalytics()">🔄 Reset Stats</button>
            <button onclick="this.parentElement.parentElement.parentElement.remove()">Close</button>
        </div>
    </div>
`;

document.body.appendChild(modal);
}

static exportAnalytics() {
const data = {
    analytics: this.analytics,
    exportDate: new Date().toISOString(),
    playerName: window.game ? window.game.player.name : 'Unknown'
};

const dataStr = JSON.stringify(data, null, 2);
const dataBlob = new Blob([dataStr], { type: 'application/json' });

const link = document.createElement('a');
link.href = URL.createObjectURL(dataBlob);
link.download = `pharaohs_legacy_analytics_${new Date().toISOString().split('T')[0]}.json`;
link.click();

EnhancedNotifications.showMiniGameNotification('📤 Analytics exported!', 'success');
}

static resetAnalytics() {
if (confirm('Are you sure you want to reset all analytics data? This cannot be undone.')) {
    this.analytics = {
        totalGamesPlayed: 0,
        totalTimeSpent: 0,
        averageScore: 0,
        bestStreak: 0,
        gamesPerType: {
            hieroglyphs: 0,
            math: 0,
            memory: 0,
            quiz: 0
        },
        timePerType: {
            hieroglyphs: 0,
            math: 0,
            memory: 0,
            quiz: 0
        },
        accuracyPerType: {
            hieroglyphs: 0,
            math: 0,
            memory: 0,
            quiz: 0
        },
        improvementTrend: [],
        lastPlayed: null
    };
    
    this.saveAnalytics();
    
    // Close and reopen analytics window
    const modal = document.querySelector('.analytics-modal');
    if (modal) {
        modal.remove();
        this.showAnalytics();
    }
    
    EnhancedNotifications.showMiniGameNotification('🔄 Analytics reset!', 'info');
}
}
}

// Initialize analytics
MiniGameAnalytics.loadAnalytics();

// Add analytics CSS
const analyticsCSS = `
.analytics-modal {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
display: flex;
align-items: center;
justify-content: center;
z-index: 3000;
}

.analytics-content {
background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
border: 2px solid #daa520;
border-radius: 15px;
padding: 30px;
max-width: 700px;
width: 90%;
color: #e6d7c3;
max-height: 80vh;
overflow-y: auto;
}

.analytics-content h3 {
color: #daa520;
text-align: center;
margin-bottom: 20px;
font-family: 'Cinzel', serif;
}

.analytics-overview {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
gap: 15px;
margin-bottom: 25px;
}

.stat-card {
background: rgba(218, 165, 32, 0.1);
border: 1px solid rgba(218, 165, 32, 0.3);
border-radius: 8px;
padding: 15px;
text-align: center;
}

.stat-number {
font-size: 2em;
font-weight: bold;
color: #daa520;
margin-bottom: 5px;
}

.stat-label {
font-size: 0.9em;
color: #ccc;
}

.analytics-section {
margin-bottom: 25px;
padding: 15px;
background: rgba(218, 165, 32, 0.1);
border-radius: 8px;
border: 1px solid rgba(218, 165, 32, 0.3);
}

.analytics-section h4 {
color: #daa520;
margin-bottom: 15px;
}

.game-stats {
display: flex;
flex-direction: column;
gap: 8px;
}

.game-stat-row {
display: grid;
grid-template-columns: 1fr auto auto;
gap: 15px;
padding: 8px;
background: rgba(0, 0, 0, 0.2);
border-radius: 4px;
align-items: center;
}

.game-name {
font-weight: bold;
}

.game-count {
color: #4ecdc4;
}

.game-accuracy {
color: #daa520;
}

.insights-list {
display: flex;
flex-direction: column;
gap: 8px;
}

.insight-item {
padding: 8px;
background: rgba(76, 205, 196, 0.1);
border-radius: 4px;
border-left: 3px solid #4ecdc4;
}

.performance-chart {
display: flex;
align-items: end;
gap: 4px;
height: 100px;
padding: 10px;
background: rgba(0, 0, 0, 0.2);
border-radius: 4px;
position: relative;
}

.performance-bar {
flex: 1;
min-height: 10px;
border-radius: 2px;
position: relative;
cursor: pointer;
transition: all 0.3s ease;
}

.performance-bar:hover {
transform: scaleY(1.1);
}

.performance-tooltip {
position: absolute;
bottom: 100%;
left: 50%;
transform: translateX(-50%);
background: rgba(0, 0, 0, 0.8);
color: white;
padding: 4px 8px;
border-radius: 4px;
font-size: 0.8em;
white-space: nowrap;
opacity: 0;
pointer-events: none;
transition: opacity 0.3s ease;
}

.performance-bar:hover .performance-tooltip {
opacity: 1;
}

.analytics-actions {
display: flex;
gap: 10px;
margin-top: 20px;
}

.analytics-actions button {
flex: 1;
background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
color: #1a1a1a;
border: none;
padding: 12px;
border-radius: 8px;
cursor: pointer;
font-weight: bold;
transition: all 0.3s ease;
}

.analytics-actions button:hover {
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}
`;

const analyticsStyleSheet = document.createElement('style');
analyticsStyleSheet.textContent = analyticsCSS;
document.head.appendChild(analyticsStyleSheet);

// Function to show analytics
function showMiniGameAnalytics() {
MiniGameAnalytics.showAnalytics();
}

// Add comprehensive mini-game hub
class MiniGameHub {
static showHub() {
const modal = document.createElement('div');
modal.className = 'minigame-hub-modal';

const dailyChallenges = DailyMiniGameChallenges.dailyChallenges;
const completedChallenges = dailyChallenges.filter(c => c.completed).length;

modal.innerHTML = `
    <div class="minigame-hub-content">
        <h2>🎮 Mini-Game Hub</h2>
        <p class="hub-subtitle">Test your knowledge and skills in ancient Egyptian challenges!</p>
        
        <div class="hub-stats">
            <div class="hub-stat">
                <span class="stat-icon">🎯</span>
                <span class="stat-text">Games Played: ${MiniGameAnalytics.analytics.totalGamesPlayed}</span>
            </div>
            <div class="hub-stat">
                <span class="stat-icon">⭐</span>
                <span class="stat-text">Daily Challenges: ${completedChallenges}/${dailyChallenges.length}</span>
            </div>
            <div class="hub-stat">
                <span class="stat-icon">⏱️</span>
                <span class="stat-text">Time Played: ${Math.round(MiniGameAnalytics.analytics.totalTimeSpent / 60)}m</span>
            </div>
        </div>
        
        <div class="minigame-grid">
            <div class="minigame-card" onclick="startMiniGame('hieroglyphs')">
                <div class="card-icon">📜</div>
                <div class="card-title">Hieroglyph Challenge</div>
                <div class="card-description">Match symbols with their meanings</div>
                <div class="card-stats">
                    <span>Best: ${MiniGameLeaderboard.getLeaderboard('hieroglyph')[0]?.score || 0}</span>
                    <span>Played: ${MiniGameAnalytics.analytics.gamesPerType.hieroglyphs}</span>
                </div>
                <button class="play-btn">Play Now</button>
            </div>
            
            <div class="minigame-card" onclick="startMiniGame('math')">
                <div class="card-icon">🔢</div>
                <div class="card-title">Egyptian Math</div>
                <div class="card-description">Solve problems with ancient numerals</div>
                <div class="card-stats">
                    <span>Best: ${MiniGameLeaderboard.getLeaderboard('math')[0]?.score || 0}</span>
                    <span>Played: ${MiniGameAnalytics.analytics.gamesPerType.math}</span>
                </div>
                <button class="play-btn">Play Now</button>
            </div>
            
            <div class="minigame-card" onclick="startMiniGame('memory')">
                <div class="card-icon">🧠</div>
                <div class="card-title">Memory Palace</div>
                <div class="card-description">Remember sequences of symbols</div>
                <div class="card-stats">
                    <span>Best: ${MiniGameLeaderboard.getLeaderboard('memory')[0]?.score || 0}</span>
                    <span>Played: ${MiniGameAnalytics.analytics.gamesPerType.memory}</span>
                </div>
                <button class="play-btn">Play Now</button>
            </div>
            
            <div class="minigame-card" onclick="startMiniGame('quiz')">
                <div class="card-icon">❓</div>
                <div class="card-title">Knowledge Quiz</div>
                <div class="card-description">Test your Egyptian knowledge</div>
                <div class="card-stats">
                    <span>Best: ${MiniGameLeaderboard.getLeaderboard('quiz')[0]?.score || 0}</span>
                    <span>Played: ${MiniGameAnalytics.analytics.gamesPerType.quiz}</span>
                </div>
                <button class="play-btn">Play Now</button>
            </div>
        </div>
        
        <div class="hub-actions">
            <button onclick="showDailyMiniGameChallenges()">🌅 Daily Challenges</button>
            <button onclick="showAllMiniGameLeaderboards()">🏆 Leaderboards</button>
            <button onclick="showMiniGameAnalytics()">📊 Analytics</button>
            <button onclick="showMiniGameSettings()">⚙️ Settings</button>
            <button onclick="showMiniGameHelp()">❓ Help</button>
        </div>
        
        <button class="close-hub-btn" onclick="this.parentElement.parentElement.remove()">Close Hub</button>
    </div>
`;

document.body.appendChild(modal);
}
}

// Add hub CSS
const hubCSS = `
.minigame-hub-modal {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
display: flex;
align-items: center;
justify-content: center;
z-index: 3000;
}

.minigame-hub-content {
background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
border: 2px solid #daa520;
border-radius: 15px;
padding: 30px;
max-width: 800px;
width: 90%;
color: #e6d7c3;
max-height: 90vh;
overflow-y: auto;
}

.minigame-hub-content h2 {
color: #daa520;
text-align: center;
margin-bottom: 10px;
font-family: 'Cinzel', serif;
}

.hub-subtitle {
text-align: center;
color: #ccc;
margin-bottom: 20px;
font-style: italic;
}

.hub-stats {
display: flex;
justify-content: space-around;
margin-bottom: 25px;
padding: 15px;
background: rgba(218, 165, 32, 0.1);
border-radius: 8px;
border: 1px solid rgba(218, 165, 32, 0.3);
}

.hub-stat {
display: flex;
align-items: center;
gap: 8px;
}

.stat-icon {
font-size: 1.2em;
}

.minigame-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 20px;
margin-bottom: 25px;
}

.minigame-card {
background: rgba(218, 165, 32, 0.1);
border: 1px solid rgba(218, 165, 32, 0.3);
border-radius: 12px;
padding: 20px;
text-align: center;
cursor: pointer;
transition: all 0.3s ease;
position: relative;
overflow: hidden;
}

.minigame-card:hover {
transform: translateY(-5px);
box-shadow: 0 8px 25px rgba(218, 165, 32, 0.3);
border-color: #daa520;
}

.minigame-card::before {
content: '';
position: absolute;
top: 0;
left: -100%;
width: 100%;
height: 100%;
background: linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.1), transparent);
transition: left 0.5s ease;
}

.minigame-card:hover::before {
left: 100%;
}

.card-icon {
font-size: 3em;
margin-bottom: 15px;
filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.card-title {
font-size: 1.3em;
font-weight: bold;
color: #daa520;
margin-bottom: 10px;
font-family: 'Cinzel', serif;
}

.card-description {
color: #ccc;
margin-bottom: 15px;
line-height: 1.4;
}

.card-stats {
display: flex;
justify-content: space-between;
margin-bottom: 15px;
font-size: 0.9em;
color: #4ecdc4;
}

.play-btn {
background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
color: #1a1a1a;
border: none;
padding: 10px 20px;
border-radius: 6px;
cursor: pointer;
font-weight: bold;
transition: all 0.3s ease;
width: 100%;
}

.play-btn:hover {
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}

.hub-actions {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
gap: 10px;
margin-bottom: 20px;
}

.hub-actions button {
background: rgba(76, 205, 196, 0.2);
color: #4ecdc4;
border: 1px solid rgba(76, 205, 196, 0.3);
padding: 10px;
border-radius: 6px;
cursor: pointer;
font-weight: bold;
transition: all 0.3s ease;
}

.hub-actions button:hover {
background: rgba(76, 205, 196, 0.3);
transform: translateY(-2px);
}

.close-hub-btn {
width: 100%;
background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
color: #1a1a1a;
border: none;
padding: 12px;
border-radius: 8px;
cursor: pointer;
font-weight: bold;
transition: all 0.3s ease;
}

.close-hub-btn:hover {
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}

@media (max-width: 768px) {
.minigame-grid {
    grid-template-columns: 1fr;
}

.hub-stats {
    flex-direction: column;
    gap: 10px;
}

.hub-actions {
    grid-template-columns: repeat(2, 1fr);
}
}
`;

const hubStyleSheet = document.createElement('style');
hubStyleSheet.textContent = hubCSS;
document.head.appendChild(hubStyleSheet);

// Function to show mini-game hub
function showMiniGameHub() {
MiniGameHub.showHub();
}

// Add mini-game integration to main game
const originalOpenStore = PharaohsLegacy.prototype.openStore;
PharaohsLegacy.prototype.openStore = function() {
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
        <div class="store-tabs">
            <button class="store-tab active" onclick="showStoreTab('general')">General</button>
            <button class="store-tab" onclick="showStoreTab('minigames')">Mini-Games</button>
        </div>
        <button class="close-btn" onclick="closeStore()">✕</button>
    </div>
    <div class="store-content">
        <div class="store-tab-content active" id="store-general">
`;

// General store items (existing code)
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

// Tools section
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

// Artifacts section
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

storeHTML += '</div>'; // Close general tab

// Mini-game store tab
storeHTML += `
    <div class="store-tab-content" id="store-minigames">
        <div class="minigame-store-header">
            <h3>🎮 Mini-Game Enhancements</h3>
            <p>Special items to boost your mini-game performance!</p>
        </div>
`;

// Mini-game consumables
if (miniGameStoreItems && miniGameStoreItems.consumables) {
    storeHTML += '<div class="store-section"><h3>⚡ Performance Boosters</h3><div class="store-items">';
    miniGameStoreItems.consumables.forEach(item => {
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
}

// Mini-game tools
if (miniGameStoreItems && miniGameStoreItems.tools) {
    storeHTML += '<div class="store-section"><h3>🛠️ Permanent Upgrades</h3><div class="store-items">';
    miniGameStoreItems.tools.forEach(item => {
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
}

storeHTML += `
        <div class="minigame-store-actions">
            <button onclick="showMiniGameHub()">🎮 Open Mini-Game Hub</button>
            <button onclick="showDailyMiniGameChallenges()">🌅 Daily Challenges</button>
        </div>
    </div>
`;

storeHTML += '</div>'; // Close store content

container.innerHTML = storeHTML;
overlay.appendChild(container);
document.body.appendChild(overlay);
};

// Function to show store tabs
function showStoreTab(tabName) {
// Update tab buttons
document.querySelectorAll('.store-tab').forEach(tab => tab.classList.remove('active'));
document.querySelector(`[onclick="showStoreTab('${tabName}')"]`).classList.add('active');

// Update content
document.querySelectorAll('.store-tab-content').forEach(content => content.classList.remove('active'));
document.getElementById(`store-${tabName}`).classList.add('active');
}

// Add store tab CSS
const storeTabCSS = `
.store-tabs {
display: flex;
gap: 5px;
margin: 10px 0;
}

.store-tab {
background: rgba(218, 165, 32, 0.2);
color: #e6d7c3;
border: 1px solid rgba(218, 165, 32, 0.3);
padding: 8px 16px;
border-radius: 6px;
cursor: pointer;
transition: all 0.3s ease;
flex: 1;
}

.store-tab.active {
background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
color: #1a1a1a;
}

.store-tab:hover {
transform: translateY(-1px);
}

.store-tab-content {
display: none;
}

.store-tab-content.active {
display: block;
}

.minigame-store-header {
text-align: center;
margin-bottom: 20px;
padding: 15px;
background: rgba(76, 205, 196, 0.1);
border-radius: 8px;
border: 1px solid rgba(76, 205, 196, 0.3);
}

.minigame-store-header h3 {
color: #4ecdc4;
margin-bottom: 8px;
}

.minigame-store-header p {
color: #ccc;
font-style: italic;
}

.minigame-store-actions {
display: flex;
gap: 10px;
margin-top: 20px;
padding-top: 20px;
border-top: 1px solid rgba(218, 165, 32, 0.3);
}

.minigame-store-actions button {
flex: 1;
background: rgba(76, 205, 196, 0.2);
color: #4ecdc4;
border: 1px solid rgba(76, 205, 196, 0.3);
padding: 10px;
border-radius: 6px;
cursor: pointer;
font-weight: bold;
transition: all 0.3s ease;
}

.minigame-store-actions button:hover {
background: rgba(76, 205, 196, 0.3);
transform: translateY(-2px);
}
`;

const storeTabStyleSheet = document.createElement('style');
storeTabStyleSheet.textContent = storeTabCSS;
document.head.appendChild(storeTabStyleSheet);

// Add mini-game button to main game interface
const originalUpdateDisplay = PharaohsLegacy.prototype.updateDisplay;
PharaohsLegacy.prototype.updateDisplay = function() {
    // Call original updateDisplay
    originalUpdateDisplay.call(this);
    
    // Add mini-game button if it doesn't exist
    if (!document.getElementById('miniGameButton')) {
        const controlButtons = document.querySelector('.control-buttons');
        if (controlButtons) {
            const miniGameBtn = document.createElement('button');
            miniGameBtn.id = 'miniGameButton';
            miniGameBtn.className = 'control-btn minigame';
            miniGameBtn.innerHTML = '🎮 Mini-Games';
            miniGameBtn.onclick = showMiniGameHub;
            controlButtons.appendChild(miniGameBtn);
        }
    }
};

// Add mini-game rewards integration
class MiniGameRewards {
    static applyReward(rewardType, amount) {
        if (!window.game) return;
        
        switch (rewardType) {
            case 'gold':
                window.game.player.gold += amount;
                window.game.showNotification(`💰 Earned ${amount} gold from mini-game!`);
                break;
            case 'knowledge':
                window.game.player.knowledge += amount;
                window.game.showNotification(`🧠 Gained ${amount} knowledge from mini-game!`);
                break;
            case 'health':
                window.game.player.health = Math.min(100, window.game.player.health + amount);
                window.game.showNotification(`❤️ Restored ${amount} health from mini-game!`);
                break;
            case 'item':
                window.game.player.inventory.push(amount); // amount is item name in this case
                window.game.showNotification(`🎁 Received ${amount} from mini-game!`);
                break;
        }
        
        window.game.updateDisplay();
        
        // Auto-save if enabled
        if (window.game.settings.autoSave) {
            window.game.saveGame();
        }
    }
    
    static calculateReward(gameType, score, difficulty = 'normal') {
        const baseRewards = {
            hieroglyphs: { gold: 50, knowledge: 10 },
            math: { gold: 60, knowledge: 15 },
            memory: { gold: 40, knowledge: 8 },
            quiz: { gold: 70, knowledge: 20 }
        };
        
        const difficultyMultipliers = {
            easy: 0.8,
            normal: 1.0,
            hard: 1.5
        };
        
        const base = baseRewards[gameType] || { gold: 50, knowledge: 10 };
        const multiplier = difficultyMultipliers[difficulty] || 1.0;
        const scoreMultiplier = Math.max(0.5, Math.min(2.0, score / 100));
        
        return {
            gold: Math.round(base.gold * multiplier * scoreMultiplier),
            knowledge: Math.round(base.knowledge * multiplier * scoreMultiplier)
        };
    }
    
    static giveCompletionReward(gameType, score, timeSpent, accuracy) {
        const difficulty = MiniGameSettings.settings.difficulty;
        const rewards = this.calculateReward(gameType, score, difficulty);
        
        // Apply base rewards
        this.applyReward('gold', rewards.gold);
        this.applyReward('knowledge', rewards.knowledge);
        
        // Bonus rewards for exceptional performance
        if (accuracy >= 90) {
            this.applyReward('gold', Math.round(rewards.gold * 0.5));
            window.game.showNotification('🌟 Accuracy bonus! +50% gold');
        }
        
        if (score >= 150) {
            this.applyReward('knowledge', Math.round(rewards.knowledge * 0.3));
            window.game.showNotification('⭐ High score bonus! +30% knowledge');
        }
        
        // Speed bonus (if completed quickly)
        if (timeSpent < 60 && accuracy >= 70) {
            this.applyReward('gold', 25);
            window.game.showNotification('⚡ Speed bonus! +25 gold');
        }
        
        // Perfect score rewards
        if (accuracy === 100) {
            const perfectRewards = [
                '🏺 Perfect Papyrus',
                '⚱️ Flawless Jar',
                '💎 Pristine Gem',
                '📜 Master Scroll'
            ];
            const randomReward = perfectRewards[Math.floor(Math.random() * perfectRewards.length)];
            this.applyReward('item', randomReward);
            window.game.showNotification('🎯 Perfect score! Special item awarded!');
        }
    }
}

// Enhanced mini-game completion handler
function completeMiniGame(gameType, score, timeSpent, accuracy) {
    // Record analytics
    MiniGameAnalytics.recordGame(gameType, score, timeSpent, accuracy);
    
    // Update leaderboard
    const playerName = window.game ? window.game.player.name : 'Anonymous';
    MiniGameLeaderboard.addScore(gameType, playerName, score, accuracy);
    
    // Give rewards
    MiniGameRewards.giveCompletionReward(gameType, score, timeSpent, accuracy);
    
    // Check daily challenges
    DailyMiniGameChallenges.checkChallengeCompletion(gameType, score, accuracy);
    
    // Show completion notification
    EnhancedNotifications.showMiniGameNotification(
        `🎮 ${gameType.charAt(0).toUpperCase() + gameType.slice(1)} Complete!\nScore: ${score} | Accuracy: ${Math.round(accuracy)}%`,
        'success'
    );
    
    // Auto-save progress
    if (MiniGameSettings.settings.autoSave) {
        MiniGameAnalytics.saveAnalytics();
        MiniGameLeaderboard.saveLeaderboards();
        DailyMiniGameChallenges.saveChallenges();
    }
}

// Add comprehensive mini-game tutorial system
class MiniGameTutorial {
    static tutorials = {
        hieroglyphs: [
            {
                title: "Welcome to Hieroglyph Challenge!",
                content: "In this game, you'll match hieroglyphic symbols with their meanings.",
                highlight: ".minigame-container"
            },
            {
                title: "Symbol Display",
                content: "A hieroglyphic symbol will appear here. Study it carefully!",
                highlight: ".symbol-display"
            },
            {
                title: "Answer Options",
                content: "Click on the correct meaning from these options. You can also use number keys 1-4.",
                highlight: ".answer-options"
            },
            {
                title: "Score and Timer",
                content: "Your score and remaining time are shown here. Correct answers give points, wrong answers lose points.",
                highlight: ".game-stats"
            },
            {
                title: "Hints Available",
                content: "If you're stuck, click the hint button or press 'H' for help!",
                highlight: ".hint-btn"
            }
        ],
        math: [
            {
                title: "Egyptian Math Challenge",
                content: "Solve mathematical problems using ancient Egyptian numerals and methods.",
                highlight: ".minigame-container"
            },
            {
                title: "Problem Display",
                content: "Mathematical problems will appear here using Egyptian symbols.",
                highlight: ".problem-display"
            },
            {
                title: "Number Reference",
                content: "Use this reference to understand Egyptian numerals: 𓏺=1, 𓎆=10, 𓍢=100, 𓆼=1000",
                highlight: ".number-reference"
            },
            {
                title: "Answer Input",
                content: "Type your answer here and press Enter to submit.",
                highlight: ".answer-input"
            }
        ],
        memory: [
            {
                title: "Memory Palace Game",
                content: "Watch sequences of symbols and repeat them in the correct order.",
                highlight: ".minigame-container"
            },
            {
                title: "Sequence Display",
                content: "Symbols will light up in sequence. Pay close attention to the order!",
                highlight: ".sequence-display"
            },
            {
                title: "Repeat Phase",
                content: "After the sequence, click the symbols in the same order you saw them.",
                highlight: ".memory-grid"
            },
            {
                title: "Progressive Difficulty",
                content: "Each level adds one more symbol to remember. How far can you go?",
                highlight: ".level-display"
            }
        ],
        quiz: [
            {
                title: "Knowledge Quiz",
                content: "Test your understanding of ancient Egyptian culture and history.",
                highlight: ".minigame-container"
            },
            {
                title: "Question Types",
                content: "You'll encounter multiple choice, true/false, and fill-in-the-blank questions.",
                highlight: ".question-display"
            },
            {
                title: "Answer Selection",
                content: "Click your answer or use number keys. Think carefully before selecting!",
                highlight: ".quiz-options"
            },
            {
                title: "Knowledge Areas",
                content: "Questions cover hieroglyphs, history, religion, science, and more Egyptian topics.",
                highlight: ".topic-indicator"
            }
        ]
    };
    
    static currentTutorial = null;
    static currentStep = 0;
    
    static startTutorial(gameType) {
        if (!this.tutorials[gameType]) return;
        
        this.currentTutorial = this.tutorials[gameType];
        this.currentStep = 0;
        this.showTutorialStep();
    }
    
    static showTutorialStep() {
        if (!this.currentTutorial || this.currentStep >= this.currentTutorial.length) {
            this.endTutorial();
            return;
        }
        
        const step = this.currentTutorial[this.currentStep];
        
        // Create tutorial overlay
        const overlay = document.createElement('div');
        overlay.className = 'tutorial-overlay';
        overlay.id = 'tutorialOverlay';
        
        // Highlight target element
        const targetElement = document.querySelector(step.highlight);
        if (targetElement) {
            targetElement.classList.add('tutorial-highlight');
        }
        
        overlay.innerHTML = `
            <div class="tutorial-popup">
                <div class="tutorial-header">
                    <h3>${step.title}</h3>
                    <div class="tutorial-progress">
                        Step ${this.currentStep + 1} of ${this.currentTutorial.length}
                    </div>
                </div>
                <div class="tutorial-content">
                    <p>${step.content}</p>
                </div>
                <div class="tutorial-controls">
                    ${this.currentStep > 0 ? '<button onclick="MiniGameTutorial.previousStep()">← Previous</button>' : ''}
                    <button onclick="MiniGameTutorial.skipTutorial()">Skip Tutorial</button>
                    <button onclick="MiniGameTutorial.nextStep()">
                        ${this.currentStep < this.currentTutorial.length - 1 ? 'Next →' : 'Finish'}
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
    }
    
    static nextStep() {
        this.clearCurrentStep();
        this.currentStep++;
        this.showTutorialStep();
    }
    
    static previousStep() {
        this.clearCurrentStep();
        this.currentStep--;
        this.showTutorialStep();
    }
    
    static skipTutorial() {
        this.endTutorial();
        
        // Mark tutorial as completed
        const completedTutorials = JSON.parse(localStorage.getItem('pharaohs_legacy_completed_tutorials') || '[]');
        const gameType = Object.keys(this.tutorials).find(key => this.tutorials[key] === this.currentTutorial);
        if (gameType && !completedTutorials.includes(gameType)) {
            completedTutorials.push(gameType);
            localStorage.setItem('pharaohs_legacy_completed_tutorials', JSON.stringify(completedTutorials));
        }
    }
    
    static endTutorial() {
        this.clearCurrentStep();
        this.currentTutorial = null;
        this.currentStep = 0;
        
        EnhancedNotifications.showMiniGameNotification('🎓 Tutorial complete! Good luck!', 'info');
    }
    
    static clearCurrentStep() {
        // Remove tutorial overlay
        const overlay = document.getElementById('tutorialOverlay');
        if (overlay) {
            overlay.remove();
        }
        
        // Remove highlights
        document.querySelectorAll('.tutorial-highlight').forEach(el => {
            el.classList.remove('tutorial-highlight');
        });
    }
    
    static shouldShowTutorial(gameType) {
        const completedTutorials = JSON.parse(localStorage.getItem('pharaohs_legacy_completed_tutorials') || '[]');
        return !completedTutorials.includes(gameType);
    }
}

// Add tutorial CSS
const tutorialCSS = `
.tutorial-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4000;
}

.tutorial-popup {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 25px;
    max-width: 400px;
    width: 90%;
    color: #e6d7c3;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.tutorial-header {
    text-align: center;
    margin-bottom: 20px;
}

.tutorial-header h3 {
    color: #daa520;
    margin-bottom: 8px;
    font-family: 'Cinzel', serif;
}

.tutorial-progress {
    color: #4ecdc4;
    font-size: 0.9em;
}

.tutorial-content p {
    line-height: 1.6;
    margin-bottom: 20px;
}

.tutorial-controls {
    display: flex;
    gap: 10px;
    justify-content: space-between;
}

.tutorial-controls button {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    flex: 1;
}

.tutorial-controls button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}

.tutorial-highlight {
    position: relative;
    z-index: 3999;
    box-shadow: 0 0 20px rgba(218, 165, 32, 0.8);
    border: 2px solid #daa520;
    border-radius: 8px;
    animation: tutorialPulse 2s infinite;
}

@keyframes tutorialPulse {
    0%, 100% {
        box-shadow: 0 0 20px rgba(218, 165, 32, 0.8);
    }
    50% {
        box-shadow: 0 0 30px rgba(218, 165, 32, 1);
    }
}

@media (max-width: 768px) {
    .tutorial-popup {
        max-width: 350px;
        padding: 20px;
    }
    
    .tutorial-controls {
        flex-direction: column;
    }
}
`;

const tutorialStyleSheet = document.createElement('style');
tutorialStyleSheet.textContent = tutorialCSS;
document.head.appendChild(tutorialStyleSheet);

// Enhanced mini-game starter with tutorial integration
function startMiniGame(gameType) {
    // Check if tutorial should be shown
    if (MiniGameTutorial.shouldShowTutorial(gameType)) {
        if (confirm(`Would you like to see a tutorial for ${gameType.charAt(0).toUpperCase() + gameType.slice(1)}?`)) {
            MiniGameTutorial.startTutorial(gameType);
            return;
        } else {
            // Mark as completed if they skip
            const completedTutorials = JSON.parse(localStorage.getItem('pharaohs_legacy_completed_tutorials') || '[]');
            if (!completedTutorials.includes(gameType)) {
                completedTutorials.push(gameType);
                localStorage.setItem('pharaohs_legacy_completed_tutorials', JSON.stringify(completedTutorials));
            }
        }
    }
    
    // Start the actual mini-game
    switch (gameType) {
        case 'hieroglyphs':
            startHieroglyphChallenge();
            break;
        case 'math':
            startMathChallenge();
            break;
        case 'memory':
            startMemoryChallenge();
            break;
        case 'quiz':
            startKnowledgeQuiz();
            break;
        default:
            EnhancedNotifications.showMiniGameNotification('Unknown game type!', 'error');
    }
}

// Add comprehensive mini-game settings
class MiniGameSettings {
    static settings = {
        difficulty: 'normal',
        soundEnabled: true,
        animationsEnabled: true,
        autoSave: true,
        showHints: true,
        timeLimit: true,
        vibrationEnabled: true,
        colorBlindMode: false,
        fontSize: 'normal',
        autoAdvance: false
    };
    
    static loadSettings() {
        const saved = localStorage.getItem('pharaohs_legacy_minigame_settings');
        if (saved) {
            this.settings = { ...this.settings, ...JSON.parse(saved) };
        }
    }
    
    static saveSettings() {
        localStorage.setItem('pharaohs_legacy_minigame_settings', JSON.stringify(this.settings));
    }
    
    static showSettings() {
        const modal = document.createElement('div');
        modal.className = 'minigame-settings-modal';
        
        modal.innerHTML = `
            <div class="minigame-settings-content">
                <h3>⚙️ Mini-Game Settings</h3>
                
                <div class="settings-grid">
                    <div class="setting-group">
                        <h4>🎮 Gameplay</h4>
                        
                        <div class="setting-item">
                            <label>Difficulty Level</label>
                            <select onchange="MiniGameSettings.updateSetting('difficulty', this.value)">
                                <option value="easy" ${this.settings.difficulty === 'easy' ? 'selected' : ''}>Easy</option>
                                <option value="normal" ${this.settings.difficulty === 'normal' ? 'selected' : ''}>Normal</option>
                                <option value="hard" ${this.settings.difficulty === 'hard' ? 'selected' : ''}>Hard</option>
                                <option value="expert" ${this.settings.difficulty === 'expert' ? 'selected' : ''}>Expert</option>
                            </select>
                        </div>
                        
                        <div class="setting-item">
                            <label>
                                <input type="checkbox" ${this.settings.timeLimit ? 'checked' : ''} 
                                       onchange="MiniGameSettings.updateSetting('timeLimit', this.checked)">
                                Enable Time Limits
                            </label>
                        </div>
                        
                        <div class="setting-item">
                            <label>
                                <input type="checkbox" ${this.settings.showHints ? 'checked' : ''} 
                                       onchange="MiniGameSettings.updateSetting('showHints', this.checked)">
                                Show Hints
                            </label>
                        </div>
                        
                        <div class="setting-item">
                            <label>
                                <input type="checkbox" ${this.settings.autoAdvance ? 'checked' : ''} 
                                       onchange="MiniGameSettings.updateSetting('autoAdvance', this.checked)">
                                Auto-advance After Correct Answer
                            </label>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h4>🎨 Display</h4>
                        
                        <div class="setting-item">
                            <label>Font Size</label>
                            <select onchange="MiniGameSettings.updateSetting('fontSize', this.value)">
                                <option value="small" ${this.settings.fontSize === 'small' ? 'selected' : ''}>Small</option>
                                <option value="normal" ${this.settings.fontSize === 'normal' ? 'selected' : ''}>Normal</option>
                                <option value="large" ${this.settings.fontSize === 'large' ? 'selected' : ''}>Large</option>
                                <option value="extra-large" ${this.settings.fontSize === 'extra-large' ? 'selected' : ''}>Extra Large</option>
                            </select>
                        </div>
                        
                        <div class="setting-item">
                            <label>
                                <input type="checkbox" ${this.settings.animationsEnabled ? 'checked' : ''} 
                                       onchange="MiniGameSettings.updateSetting('animationsEnabled', this.checked)">
                                Enable Animations
                            </label>
                        </div>
                        
                        <div class="setting-item">
                            <label>
                                <input type="checkbox" ${this.settings.colorBlindMode ? 'checked' : ''} 
                                       onchange="MiniGameSettings.updateSetting('colorBlindMode', this.checked)">
                                Color Blind Friendly Mode
                            </label>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h4>🔊 Audio & Feedback</h4>
                        
                        <div class="setting-item">
                            <label>
                                <input type="checkbox" ${this.settings.soundEnabled ? 'checked' : ''} 
                                       onchange="MiniGameSettings.updateSetting('soundEnabled', this.checked)">
                                Sound Effects
                            </label>
                        </div>
                        
                        <div class="setting-item">
                            <label>
                                <input type="checkbox" ${this.settings.vibrationEnabled ? 'checked' : ''} 
                                       onchange="MiniGameSettings.updateSetting('vibrationEnabled', this.checked)">
                                Vibration Feedback (Mobile)
                            </label>
                        </div>
                    </div>
                    
                    <div class="setting-group">
                        <h4>💾 Data</h4>
                        
                        <div class="setting-item">
                            <label>
                                <input type="checkbox" ${this.settings.autoSave ? 'checked' : ''} 
                                       onchange="MiniGameSettings.updateSetting('autoSave', this.checked)">
                                Auto-save Progress
                            </label>
                        </div>
                        
                        <div class="setting-actions">
                            <button onclick="MiniGameSettings.resetToDefaults()">🔄 Reset to Defaults</button>
                            <button onclick="MiniGameSettings.exportSettings()">📤 Export Settings</button>
                            <button onclick="MiniGameSettings.importSettings()">📥 Import Settings</button>
                        </div>
                    </div>
                </div>
                
                <div class="settings-footer">
                    <button onclick="MiniGameSettings.testSettings()">🧪 Test Settings</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        this.applySettings();
    }
    
    static updateSetting(key, value) {
        this.settings[key] = value;
        this.saveSettings();
        this.applySettings();
        
        EnhancedNotifications.showMiniGameNotification(`Setting updated: ${key}`, 'info');
    }
    
    static applySettings() {
        // Apply font size
        document.documentElement.style.setProperty('--minigame-font-size', {
            'small': '0.8em',
            'normal': '1em',
            'large': '1.2em',
            'extra-large': '1.4em'
        }[this.settings.fontSize] || '1em');
        
        // Apply color blind mode
        if (this.settings.colorBlindMode) {
            document.documentElement.classList.add('colorblind-mode');
        } else {
            document.documentElement.classList.remove('colorblind-mode');
        }
        
        // Apply animation settings
        if (!this.settings.animationsEnabled) {
            document.documentElement.classList.add('no-animations');
        } else {
            document.documentElement.classList.remove('no-animations');
        }
    }
    
    static resetToDefaults() {
        if (confirm('Reset all mini-game settings to defaults?')) {
            this.settings = {
                difficulty: 'normal',
                soundEnabled: true,
                animationsEnabled: true,
                autoSave: true,
                showHints: true,
                timeLimit: true,
                vibrationEnabled: true,
                colorBlindMode: false,
                fontSize: 'normal',
                autoAdvance: false
            };
            
            this.saveSettings();
            this.applySettings();
            
            // Refresh settings modal
            const modal = document.querySelector('.minigame-settings-modal');
            if (modal) {
                modal.remove();
                this.showSettings();
            }
            
            EnhancedNotifications.showMiniGameNotification('Settings reset to defaults!', 'success');
        }
    }
    
    static exportSettings() {
        const data = {
            settings: this.settings,
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
        
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `pharaohs_legacy_minigame_settings_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        EnhancedNotifications.showMiniGameNotification('Settings exported!', 'success');
    }
    
    static importSettings() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const data = JSON.parse(e.target.result);
                        
                        if (data.settings && data.version) {
                            this.settings = { ...this.settings, ...data.settings };
                            this.saveSettings();
                            this.applySettings();
                            
                            // Refresh settings modal
                            const modal = document.querySelector('.minigame-settings-modal');
                            if (modal) {
                                modal.remove();
                                this.showSettings();
                            }
                            
                            EnhancedNotifications.showMiniGameNotification('Settings imported successfully!', 'success');
                        } else {
                            EnhancedNotifications.showMiniGameNotification('Invalid settings file!', 'error');
                        }
                    } catch (error) {
                        EnhancedNotifications.showMiniGameNotification('Failed to import settings!', 'error');
                    }
                };
                reader.readAsText(file);
            }
        };
        
        input.click();
    }
    
    static testSettings() {
        EnhancedNotifications.showMiniGameNotification('🧪 Testing settings...', 'info');
        
        setTimeout(() => {
            if (this.settings.soundEnabled) {
                // Play test sound
                try {
                    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
                    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                    
                    oscillator.start(audioContext.currentTime);
                    oscillator.stop(audioContext.currentTime + 0.5);
                } catch (error) {
                    console.log('Audio test failed');
                }
            }
            
            if (this.settings.vibrationEnabled && navigator.vibrate) {
                navigator.vibrate(200);
            }
            
            EnhancedNotifications.showMiniGameNotification('✅ Settings test complete!', 'success');
        }, 1000);
    }
}

// Initialize settings
MiniGameSettings.loadSettings();
MiniGameSettings.applySettings();

// Add settings CSS
const settingsCSS = `
.minigame-settings-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3000;
}

.minigame-settings-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 800px;
    width: 90%;
    color: #e6d7c3;
    max-height: 90vh;
    overflow-y: auto;
}

.minigame-settings-content h3 {
    color: #daa520;
    text-align: center;
    margin-bottom: 25px;
    font-family: 'Cinzel', serif;
}

.settings-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    margin-bottom: 25px;
}

.setting-group {
    background: rgba(218, 165, 32, 0.1);
    border: 1px solid rgba(218, 165, 32, 0.3);
    border-radius: 10px;
    padding: 20px;
}

.setting-group h4 {
    color: #daa520;
    margin-bottom: 15px;
    font-family: 'Cinzel', serif;
}

.setting-item {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.setting-item label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-weight: 500;
}

.setting-item select {
    background: rgba(0, 0, 0, 0.3);
    color: #e6d7c3;
    border: 1px solid rgba(218, 165, 32, 0.5);
    border-radius: 6px;
    padding: 8px;
    font-size: 1em;
}

.setting-item input[type="checkbox"] {
    width: 18px;
    height: 18px;
    accent-color: #daa520;
}

.setting-actions {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 15px;
}

.setting-actions button {
    background: rgba(76, 205, 196, 0.2);
    color: #4ecdc4;
    border: 1px solid rgba(76, 205, 196, 0.3);
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.setting-actions button:hover {
    background: rgba(76, 205, 196, 0.3);
    transform: translateY(-1px);
}

.settings-footer {
    display: flex;
    gap: 15px;
    justify-content: center;
    padding-top: 20px;
    border-top: 1px solid rgba(218, 165, 32, 0.3);
}

.settings-footer button {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    flex: 1;
    max-width: 200px;
}

.settings-footer button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}

/* Color blind mode styles */
.colorblind-mode {
    --success-color: #0066cc;
    --error-color: #cc6600;
    --warning-color: #6600cc;
    --info-color: #00cc66;
}

/* No animations mode */
.no-animations * {
    animation-duration: 0s !important;
    transition-duration: 0s !important;
}

/* Font size variables */
:root {
    --minigame-font-size: 1em;
}

.minigame-container {
    font-size: var(--minigame-font-size);
}

@media (max-width: 768px) {
    .settings-grid {
        grid-template-columns: 1fr;
    }
    
    .settings-footer {
        flex-direction: column;
    }
    
    .setting-actions {
        flex-direction: column;
    }
}
`;

const settingsStyleSheet = document.createElement('style');
settingsStyleSheet.textContent = settingsCSS;
document.head.appendChild(settingsStyleSheet);

// Function to show mini-game settings
function showMiniGameSettings() {
    MiniGameSettings.showSettings();
}

// Add comprehensive help system
class MiniGameHelp {
    static showHelp() {
        const modal = document.createElement('div');
        modal.className = 'help-modal';
        
        modal.innerHTML = `
            <div class="help-content">
                <h3>❓ Mini-Game Help & Guide</h3>
                
                <div class="help-tabs">
                    <button class="help-tab active" onclick="showHelpTab('overview')">Overview</button>
                    <button class="help-tab" onclick="showHelpTab('games')">Game Rules</button>
                    <button class="help-tab" onclick="showHelpTab('controls')">Controls</button>
                    <button class="help-tab" onclick="showHelpTab('scoring')">Scoring</button>
                    <button class="help-tab" onclick="showHelpTab('tips')">Tips & Tricks</button>
                </div>
                
                <div class="help-tab-content active" id="help-overview">
                    <h4>🎮 Mini-Game Overview</h4>
                    <p>Welcome to the Pharaoh's Legacy mini-game collection! These educational games help you learn about ancient Egypt while earning rewards for your main adventure.</p>
                    
                    <div class="help-section">
                        <h5>Available Games:</h5>
                        <ul>
                            <li><strong>📜 Hieroglyph Challenge:</strong> Match symbols with meanings</li>
                            <li><strong>🔢 Egyptian Math:</strong> Solve problems with ancient numerals</li>
                            <li><strong>🧠 Memory Palace:</strong> Remember symbol sequences</li>
                            <li><strong>❓ Knowledge Quiz:</strong> Test your Egyptian knowledge</li>
                        </ul>
                    </div>
                    
                    <div class="help-section">
                        <h5>Rewards System:</h5>
                        <p>Playing mini-games earns you gold and knowledge points for your main character. Better performance = better rewards!</p>
                    </div>
                </div>
                
                <div class="help-tab-content" id="help-games">
                    <h4>🎯 Game Rules</h4>
                    
                    <div class="game-help-section">
                        <h5>📜 Hieroglyph Challenge</h5>
                        <ul>
                            <li>A hieroglyphic symbol appears on screen</li>
                            <li>Choose the correct meaning from 4 options</li>
                            <li>Correct answers: +10 points</li>
                            <li>Wrong answers: -5 points</li>
                            <li>Time bonus for quick answers</li>
                        </ul>
                    </div>
                    
                    <div class="game-help-section">
                        <h5>🔢 Egyptian Math</h5>
                        <ul>
                            <li>Solve math problems using Egyptian numerals</li>
                            <li>𓏺=1, 𓎆=10, 𓍢=100, 𓆼=1000</li>
                            <li>Type your answer and press Enter</li>
                            <li>Points based on difficulty and speed</li>
                        </ul>
                    </div>
                    
                    <div class="game-help-section">
                        <h5>🧠 Memory Palace</h5>
                        <ul>
                            <li>Watch symbols light up in sequence</li>
                            <li>Repeat the sequence by clicking symbols</li>
                            <li>Each level adds one more symbol</li>
                            <li>Game ends when you make a mistake</li>
                        </ul>
                    </div>
                    
                    <div class="game-help-section">
                        <h5>❓ Knowledge Quiz</h5>
                        <ul>
                            <li>Answer questions about ancient Egypt</li>
                            <li>Multiple choice, true/false, and fill-in-the-blank</li>
                            <li>Covers history, culture, science, and more</li>
                            <li>Difficulty increases as you progress</li>
                        </ul>
                    </div>
                </div>
                
                <div class="help-tab-content" id="help-controls">
                    <h4>🎮 Controls & Shortcuts</h4>
                    
                    <div class="controls-section">
                        <h5>Universal Controls:</h5>
                        <ul>
                            <li><kbd>1</kbd>, <kbd>2</kbd>, <kbd>3</kbd>, <kbd>4</kbd> - Select answer options</li>
                            <li><kbd>H</kbd> - Show hint (if available)</li>
                            <li><kbd>P</kbd> - Pause game</li>
                            <li><kbd>Esc</kbd> - Exit game</li>
                            <li><kbd>Space</kbd> - Continue/Next question</li>
                        </ul>
                    </div>
                    
                    <div class="controls-section">
                        <h5>Math Game:</h5>
                        <ul>
                            <li><kbd>Enter</kbd> - Submit answer</li>
                            <li><kbd>Backspace</kbd> - Clear input</li>
                            <li>Number keys - Type answer</li>
                        </ul>
                    </div>
                    
                    <div class="controls-section">
                        <h5>Memory Game:</h5>
                        <ul>
                            <li>Mouse click - Select symbols</li>
                            <li><kbd>R</kbd> - Replay sequence (if enabled)</li>
                        </ul>
                    </div>
                </div>
                
                <div class="help-tab-content" id="help-scoring">
                    <h4>🏆 Scoring System</h4>
                    
                    <div class="scoring-section">
                        <h5>Base Points:</h5>
                        <ul>
                            <li>Correct answer: +10 points</li>
                            <li>Wrong answer: -5 points</li>
                            <li>Time bonus: Up to +5 points for quick answers</li>
                            <li>Streak bonus: +2 points per consecutive correct answer</li>
                        </ul>
                    </div>
                    
                    <div class="scoring-section">
                        <h5>Difficulty Multipliers:</h5>
                        <ul>
                            <li>Easy: 0.8x points</li>
                            <li>Normal: 1.0x points</li>
                            <li>Hard: 1.5x points</li>
                            <li>Expert: 2.0x points</li>
                        </ul>
                    </div>
                    
                    <div class="scoring-section">
                        <h5>Reward Calculation:</h5>
                        <p>Your final score determines gold and knowledge rewards:</p>
                        <ul>
                            <li>Gold = Base reward × Score multiplier × Difficulty</li>
                            <li>Knowledge = Base knowledge × Accuracy × Difficulty</li>
                            <li>Bonus rewards for perfect scores and speed</li>
                        </ul>
                    </div>
                </div>
                
                <div class="help-tab-content" id="help-tips">
                    <h4>💡 Tips & Strategies</h4>
                    
                    <div class="tips-section">
                        <h5>General Tips:</h5>
                        <ul>
                            <li>Start with easier difficulties to learn the games</li>
                            <li>Use hints when stuck - they don't penalize your score much</li>
                            <li>Focus on accuracy over speed initially</li>
                            <li>Take breaks between games to avoid fatigue</li>
                            <li>Review your mistakes to improve</li>
                        </ul>
                    </div>
                    
                    <div class="tips-section">
                        <h5>Hieroglyph Challenge:</h5>
                        <ul>
                            <li>Learn common symbols first (man, woman, water, sun)</li>
                            <li>Pay attention to symbol orientation</li>
                            <li>Use the process of elimination</li>
                            <li>Remember that some symbols have multiple meanings</li>
                        </ul>
                    </div>
                    
                    <div class="tips-section">
                        <h5>Egyptian Math:</h5>
                        <ul>
                            <li>Memorize the basic number symbols</li>
                            <li>Count symbols systematically (thousands, hundreds, tens, ones)</li>
                            <li>Double-check your addition</li>
                            <li>Use the reference chart when needed</li>
                        </ul>
                    </div>
                    
                    <div class="tips-section">
                        <h5>Memory Palace:</h5>
                        <ul>
                            <li>Create mental associations for symbols</li>
                            <li>Use chunking for longer sequences</li>
                            <li>Practice visualization techniques</li>
                            <li>Stay focused and avoid distractions</li>
                        </ul>
                    </div>
                    
                    <div class="tips-section">
                        <h5>Knowledge Quiz:</h5>
                        <ul>
                            <li>Read questions carefully</li>
                            <li>Eliminate obviously wrong answers</li>
                            <li>Use context clues</li>
                            <li>Learn from the explanations provided</li>
                        </ul>
                    </div>
                </div>
                
                <div class="help-footer">
                    <button onclick="MiniGameHelp.showTutorials()">🎓 Show Tutorials</button>
                    <button onclick="MiniGameHelp.showFAQ()">❓ FAQ</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">Close Help</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    static showTutorials() {
        const modal = document.createElement('div');
        modal.className = 'tutorials-modal';
        
        const completedTutorials = JSON.parse(localStorage.getItem('pharaohs_legacy_completed_tutorials') || '[]');
        
        modal.innerHTML = `
            <div class="tutorials-content">
                <h3>🎓 Available Tutorials</h3>
                <p>Select a tutorial to learn how to play each mini-game:</p>
                
                <div class="tutorial-list">
                    <div class="tutorial-item">
                        <div class="tutorial-info">
                            <h4>📜 Hieroglyph Challenge Tutorial                             ${completedTutorials.includes('hieroglyphs') ? '<span class="completed">✅ Completed</span>' : '<span class="pending">⏳ Not Started</span>'}
                            </h4>
                            <p>Learn how to match hieroglyphic symbols with their meanings</p>
                        </div>
                        <button onclick="MiniGameTutorial.startTutorial('hieroglyphs'); this.parentElement.parentElement.parentElement.parentElement.remove();">Start Tutorial</button>
                    </div>
                    
                    <div class="tutorial-item">
                        <div class="tutorial-info">
                            <h4>🔢 Egyptian Math Tutorial
                            ${completedTutorials.includes('math') ? '<span class="completed">✅ Completed</span>' : '<span class="pending">⏳ Not Started</span>'}
                            </h4>
                            <p>Master ancient Egyptian numerals and mathematical concepts</p>
                        </div>
                        <button onclick="MiniGameTutorial.startTutorial('math'); this.parentElement.parentElement.parentElement.parentElement.remove();">Start Tutorial</button>
                    </div>
                    
                    <div class="tutorial-item">
                        <div class="tutorial-info">
                            <h4>🧠 Memory Palace Tutorial
                            ${completedTutorials.includes('memory') ? '<span class="completed">✅ Completed</span>' : '<span class="pending">⏳ Not Started</span>'}
                            </h4>
                            <p>Develop your memory skills with symbol sequences</p>
                        </div>
                        <button onclick="MiniGameTutorial.startTutorial('memory'); this.parentElement.parentElement.parentElement.parentElement.remove();">Start Tutorial</button>
                    </div>
                    
                    <div class="tutorial-item">
                        <div class="tutorial-info">
                            <h4>❓ Knowledge Quiz Tutorial
                            ${completedTutorials.includes('quiz') ? '<span class="completed">✅ Completed</span>' : '<span class="pending">⏳ Not Started</span>'}
                            </h4>
                            <p>Test and expand your knowledge of ancient Egypt</p>
                        </div>
                        <button onclick="MiniGameTutorial.startTutorial('quiz'); this.parentElement.parentElement.parentElement.parentElement.remove();">Start Tutorial</button>
                    </div>
                </div>
                
                <div class="tutorial-actions">
                    <button onclick="MiniGameHelp.resetTutorials()">🔄 Reset All Tutorials</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    static showFAQ() {
        const modal = document.createElement('div');
        modal.className = 'faq-modal';
        
        modal.innerHTML = `
            <div class="faq-content">
                <h3>❓ Frequently Asked Questions</h3>
                
                <div class="faq-list">
                    <div class="faq-item">
                        <h4>🎮 How do I start playing mini-games?</h4>
                        <p>Click the "🎮 Mini-Games" button in the main game interface, or visit the marketplace and select the Mini-Games tab. From there, you can access the Mini-Game Hub.</p>
                    </div>
                    
                    <div class="faq-item">
                        <h4>💰 How are rewards calculated?</h4>
                        <p>Rewards are based on your score, accuracy, time taken, and difficulty level. Higher difficulty and better performance yield greater rewards. Perfect scores and speed bonuses provide additional rewards.</p>
                    </div>
                    
                    <div class="faq-item">
                        <h4>⚙️ Can I change the difficulty?</h4>
                        <p>Yes! Access the mini-game settings through the hub or use the settings button in any mini-game. You can choose from Easy, Normal, Hard, or Expert difficulty levels.</p>
                    </div>
                    
                    <div class="faq-item">
                        <h4>💾 Is my progress saved automatically?</h4>
                        <p>Yes, if auto-save is enabled in settings (default). Your scores, achievements, and progress are automatically saved. You can also manually save through the settings menu.</p>
                    </div>
                    
                    <div class="faq-item">
                        <h4>🏆 What are daily challenges?</h4>
                        <p>Daily challenges are special objectives that reset every day. Complete them for bonus rewards! Examples include achieving certain scores, playing specific games, or maintaining accuracy levels.</p>
                    </div>
                    
                    <div class="faq-item">
                        <h4>📊 How do leaderboards work?</h4>
                        <p>Leaderboards track the best scores for each game type. Scores are ranked by points, with accuracy as a tiebreaker. Leaderboards are saved locally on your device.</p>
                    </div>
                    
                    <div class="faq-item">
                        <h4>🎯 What happens if I make mistakes?</h4>
                        <p>Wrong answers typically reduce your score by a small amount, but don't worry! The games are designed for learning. Use mistakes as opportunities to improve your knowledge.</p>
                    </div>
                    
                    <div class="faq-item">
                        <h4>⏰ Are there time limits?</h4>
                        <p>Most games have optional time limits that can be enabled or disabled in settings. Time limits add challenge and provide speed bonuses, but you can play at your own pace if preferred.</p>
                    </div>
                    
                    <div class="faq-item">
                        <h4>💡 How do hints work?</h4>
                        <p>Hints provide helpful information when you're stuck. They can be enabled/disabled in settings and typically don't heavily penalize your score. Use them to learn!</p>
                    </div>
                    
                    <div class="faq-item">
                        <h4>📱 Do mini-games work on mobile?</h4>
                        <p>Yes! The mini-games are designed to work on both desktop and mobile devices. Touch controls are supported, and the interface adapts to smaller screens.</p>
                    </div>
                    
                    <div class="faq-item">
                        <h4>🔄 Can I restart a game?</h4>
                        <p>Yes, you can exit and restart any mini-game at any time. Your progress in the current session will be lost, but your overall statistics and achievements are preserved.</p>
                    </div>
                    
                    <div class="faq-item">
                        <h4>🎨 Can I customize the appearance?</h4>
                        <p>Yes! The settings menu offers options for font size, color-blind friendly mode, animation preferences, and more. Customize the experience to your liking.</p>
                    </div>
                </div>
                
                <div class="faq-footer">
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">Close FAQ</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    static resetTutorials() {
        if (confirm('Reset all tutorial progress? You\'ll be able to view tutorials again.')) {
            localStorage.removeItem('pharaohs_legacy_completed_tutorials');
            EnhancedNotifications.showMiniGameNotification('Tutorial progress reset!', 'success');
            
            // Refresh tutorials modal if open
            const modal = document.querySelector('.tutorials-modal');
            if (modal) {
                modal.remove();
                this.showTutorials();
            }
        }
    }
}

// Function to show help tab
function showHelpTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.help-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[onclick="showHelpTab('${tabName}')"]`).classList.add('active');
    
    // Update content
    document.querySelectorAll('.help-tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`help-${tabName}`).classList.add('active');
}

// Add help system CSS
const helpCSS = `
.help-modal, .tutorials-modal, .faq-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3500;
}

.help-content, .tutorials-content, .faq-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 900px;
    width: 95%;
    color: #e6d7c3;
    max-height: 90vh;
    overflow-y: auto;
}

.help-content h3, .tutorials-content h3, .faq-content h3 {
    color: #daa520;
    text-align: center;
    margin-bottom: 25px;
    font-family: 'Cinzel', serif;
}

.help-tabs {
    display: flex;
    gap: 5px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.help-tab {
    background: rgba(218, 165, 32, 0.2);
    color: #e6d7c3;
    border: 1px solid rgba(218, 165, 32, 0.3);
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    min-width: 120px;
}

.help-tab.active {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
}

.help-tab:hover {
    transform: translateY(-1px);
}

.help-tab-content {
    display: none;
}

.help-tab-content.active {
    display: block;
}

.help-section, .game-help-section, .controls-section, .scoring-section, .tips-section {
    margin-bottom: 20px;
    padding: 15px;
    background: rgba(76, 205, 196, 0.1);
    border-radius: 8px;
    border-left: 4px solid #4ecdc4;
}

.help-section h5, .game-help-section h5, .controls-section h5, .scoring-section h5, .tips-section h5 {
    color: #4ecdc4;
    margin-bottom: 10px;
}

.help-section ul, .game-help-section ul, .controls-section ul, .scoring-section ul, .tips-section ul {
    margin-left: 20px;
}

.help-section li, .game-help-section li, .controls-section li, .scoring-section li, .tips-section li {
    margin-bottom: 5px;
    line-height: 1.4;
}

kbd {
    background: rgba(218, 165, 32, 0.2);
    border: 1px solid rgba(218, 165, 32, 0.5);
    border-radius: 4px;
    padding: 2px 6px;
    font-family: monospace;
    font-size: 0.9em;
    color: #daa520;
}

.help-footer, .tutorial-actions, .faq-footer {
    display: flex;
    gap: 15px;
    justify-content: center;
    padding-top: 20px;
    border-top: 1px solid rgba(218, 165, 32, 0.3);
    flex-wrap: wrap;
}

.help-footer button, .tutorial-actions button, .faq-footer button {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    flex: 1;
    max-width: 200px;
    min-width: 120px;
}

.help-footer button:hover, .tutorial-actions button:hover, .faq-footer button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}

.tutorial-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 25px;
}

.tutorial-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    background: rgba(218, 165, 32, 0.1);
    border: 1px solid rgba(218, 165, 32, 0.3);
    border-radius: 8px;
    gap: 15px;
}

.tutorial-info h4 {
    color: #daa520;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.tutorial-info p {
    color: #ccc;
    margin: 0;
}

.completed {
    color: #4ecdc4;
    font-size: 0.9em;
}

.pending {
    color: #ff6b6b;
    font-size: 0.9em;
}

.tutorial-item button {
    background: rgba(76, 205, 196, 0.2);
    color: #4ecdc4;
    border: 1px solid rgba(76, 205, 196, 0.3);
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.tutorial-item button:hover {
    background: rgba(76, 205, 196, 0.3);
    transform: translateY(-1px);
}

.faq-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 25px;
}

.faq-item {
    padding: 15px;
    background: rgba(218, 165, 32, 0.1);
    border: 1px solid rgba(218, 165, 32, 0.3);
    border-radius: 8px;
}

.faq-item h4 {
    color: #daa520;
    margin-bottom: 10px;
}

.faq-item p {
    color: #e6d7c3;
    line-height: 1.5;
    margin: 0;
}

@media (max-width: 768px) {
    .help-content, .tutorials-content, .faq-content {
        padding: 20px;
        width: 98%;
    }
    
    .help-tabs {
        flex-direction: column;
    }
    
    .help-tab {
        min-width: auto;
    }
    
    .tutorial-item {
        flex-direction: column;
        align-items: stretch;
        text-align: center;
    }
    
    .tutorial-item button {
        margin-top: 10px;
    }
    
    .help-footer, .tutorial-actions, .faq-footer {
        flex-direction: column;
    }
    
    .help-footer button, .tutorial-actions button, .faq-footer button {
        max-width: none;
    }
}
`;

const helpStyleSheet = document.createElement('style');
helpStyleSheet.textContent = helpCSS;
document.head.appendChild(helpStyleSheet);

// Function to show mini-game help
function showMiniGameHelp() {
    MiniGameHelp.showHelp();
}

// Add comprehensive achievement system for mini-games
class MiniGameAchievements {
    static achievements = [
        // Hieroglyph achievements
        { id: 'hieroglyph_first', name: 'First Steps', description: 'Complete your first hieroglyph challenge', icon: '📜', gameType: 'hieroglyphs', condition: (stats) => stats.hieroglyphs.gamesPlayed >= 1 },
        { id: 'hieroglyph_perfect', name: 'Perfect Scribe', description: 'Achieve 100% accuracy in hieroglyph challenge', icon: '✨', gameType: 'hieroglyphs', condition: (stats) => stats.hieroglyphs.bestAccuracy >= 100 },
        { id: 'hieroglyph_speed', name: 'Lightning Reader', description: 'Answer 10 hieroglyphs in under 30 seconds', icon: '⚡', gameType: 'hieroglyphs', condition: (stats) => stats.hieroglyphs.fastestTime <= 30 && stats.hieroglyphs.questionsAnswered >= 10 },
        { id: 'hieroglyph_master', name: 'Hieroglyph Master', description: 'Play 50 hieroglyph games', icon: '👑', gameType: 'hieroglyphs', condition: (stats) => stats.hieroglyphs.gamesPlayed >= 50 },
        
        // Math achievements
        { id: 'math_first', name: 'Number Novice', description: 'Complete your first math challenge', icon: '🔢', gameType: 'math', condition: (stats) => stats.math.gamesPlayed >= 1 },
        { id: 'math_calculator', name: 'Human Calculator', description: 'Solve 100 math problems correctly', icon: '🧮', gameType: 'math', condition: (stats) => stats.math.correctAnswers >= 100 },
        { id: 'math_genius', name: 'Mathematical Genius', description: 'Achieve a score of 500+ in math challenge', icon: '🎯', gameType: 'math', condition: (stats) => stats.math.bestScore >= 500 },
        { id: 'math_streak', name: 'Calculation Streak', description: 'Get 20 math problems correct in a row', icon: '🔥', gameType: 'math', condition: (stats) => stats.math.longestStreak >= 20 },
        
        // Memory achievements
        { id: 'memory_first', name: 'Memory Apprentice', description: 'Complete your first memory challenge', icon: '🧠', gameType: 'memory', condition: (stats) => stats.memory.gamesPlayed >= 1 },
        { id: 'memory_sequence', name: 'Sequence Master', description: 'Remember a sequence of 15+ symbols', icon: '🎭', gameType: 'memory', condition: (stats) => stats.memory.longestSequence >= 15 },
        { id: 'memory_palace', name: 'Memory Palace', description: 'Achieve perfect recall 10 times', icon: '🏛️', gameType: 'memory', condition: (stats) => stats.memory.perfectRounds >= 10 },
        { id: 'memory_legend', name: 'Memory Legend', description: 'Remember a sequence of 25+ symbols', icon: '🌟', gameType: 'memory', condition: (stats) => stats.memory.longestSequence >= 25 },
        
        // Quiz achievements
        { id: 'quiz_first', name: 'Knowledge Seeker', description: 'Complete your first knowledge quiz', icon: '❓', gameType: 'quiz', condition: (stats) => stats.quiz.gamesPlayed >= 1 },
        { id: 'quiz_scholar', name: 'Egyptian Scholar', description: 'Answer 200 quiz questions correctly', icon: '📚', gameType: 'quiz', condition: (stats) => stats.quiz.correctAnswers >= 200 },
        { id: 'quiz_expert', name: 'Quiz Expert', description: 'Achieve 95%+ accuracy over 10 quiz games', icon: '🎓', gameType: 'quiz', condition: (stats) => stats.quiz.gamesPlayed >= 10 && (stats.quiz.correctAnswers / Math.max(1, stats.quiz.totalAnswers)) >= 0.95 },
        { id: 'quiz_perfectionist', name: 'Quiz Perfectionist', description: 'Get a perfect score in quiz challenge', icon: '💯', gameType: 'quiz', condition: (stats) => stats.quiz.perfectGames >= 1 },
        
        // Cross-game achievements
        { id: 'all_games', name: 'Game Explorer', description: 'Play all 4 mini-game types', icon: '🎮', gameType: 'all', condition: (stats) => stats.hieroglyphs.gamesPlayed >= 1 && stats.math.gamesPlayed >= 1 && stats.memory.gamesPlayed >= 1 && stats.quiz.gamesPlayed >= 1 },
        { id: 'daily_player', name: 'Daily Player', description: 'Play mini-games for 7 consecutive days', icon: '📅', gameType: 'all', condition: (stats) => stats.general.consecutiveDays >= 7 },
        { id: 'high_scorer', name: 'High Scorer', description: 'Achieve 1000+ total points across all games', icon: '🏆', gameType: 'all', condition: (stats) => stats.general.totalScore >= 1000 },
        { id: 'dedicated', name: 'Dedicated Student', description: 'Play 100 mini-games total', icon: '⭐', gameType: 'all', condition: (stats) => stats.general.totalGames >= 100 },
        { id: 'perfectionist', name: 'Perfectionist', description: 'Achieve perfect scores in all game types', icon: '💎', gameType: 'all', condition: (stats) => stats.hieroglyphs.perfectGames >= 1 && stats.math.perfectGames >= 1 && stats.memory.perfectGames >= 1 && stats.quiz.perfectGames >= 1 }
    ];
    
    static unlockedAchievements = [];
    
    static loadAchievements() {
        const saved = localStorage.getItem('pharaohs_legacy_minigame_achievements');
        if (saved) {
            this.unlockedAchievements = JSON.parse(saved);
        }
    }
    
    static saveAchievements() {
        localStorage.setItem('pharaohs_legacy_minigame_achievements', JSON.stringify(this.unlockedAchievements));
    }
    
    static checkAchievements(stats) {
        let newAchievements = [];
        
        this.achievements.forEach(achievement => {
            if (!this.unlockedAchievements.includes(achievement.id) && achievement.condition(stats)) {
                this.unlockedAchievements.push(achievement.id);
                newAchievements.push(achievement);
            }
        });
        
        if (newAchievements.length > 0) {
            this.saveAchievements();
            newAchievements.forEach(achievement => {
                this.showAchievementNotification(achievement);
                this.giveAchievementReward(achievement);
            });
        }
        
        return newAchievements;
    }
    
    static showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        
        notification.innerHTML = `
            <div class="achievement-content">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-text">
                    <div class="achievement-title">Achievement Unlocked!</div>
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-desc">${achievement.description}</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 500);
        }, 4000);
        
        // Play sound if enabled
        if (MiniGameSettings.settings.soundEnabled) {
            this.playAchievementSound();
        }
        
        // Vibrate if enabled
        if (MiniGameSettings.settings.vibrationEnabled && navigator.vibrate) {
            navigator.vibrate([200, 100, 200]);
        }
    }
    
    static giveAchievementReward(achievement) {
        // Give rewards based on achievement rarity
        const rewards = {
            common: { gold: 100, knowledge: 20 },
            rare: { gold: 250, knowledge: 50 },
            epic: { gold: 500, knowledge: 100 },
            legendary: { gold: 1000, knowledge: 200 }
        };
        
        // Determine rarity based on achievement type
        let rarity = 'common';
        if (achievement.id.includes('perfect') || achievement.id.includes('master') || achievement.id.includes('legend')) {
            rarity = 'legendary';
        } else if (achievement.id.includes('expert') || achievement.id.includes('genius') || achievement.id.includes('palace')) {
            rarity = 'epic';
        } else if (achievement.id.includes('streak') || achievement.id.includes('speed') || achievement.id.includes('scholar')) {
            rarity = 'rare';
        }
        
        const reward = rewards[rarity];
        MiniGameRewards.applyReward('gold', reward.gold);
        MiniGameRewards.applyReward('knowledge', reward.knowledge);
        
        EnhancedNotifications.showMiniGameNotification(
            `🏆 Achievement reward: +${reward.gold} gold, +${reward.knowledge} knowledge!`,
            'success'
        );
    }
    
    static playAchievementSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Play a triumphant chord
            const frequencies = [523.25, 659.25, 783.99]; // C, E, G
            
            frequencies.forEach((freq, index) => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
                
                oscillator.start(audioContext.currentTime + index * 0.1);
                oscillator.stop(audioContext.currentTime + 1 + index * 0.1);
            });
        } catch (error) {
            console.log('Achievement sound failed');
        }
    }
    
    static showAchievementsList() {
        const modal = document.createElement('div');
        modal.className = 'achievements-modal';
        
        const unlockedCount = this.unlockedAchievements.length;
        const totalCount = this.achievements.length;
        const completionPercentage = Math.round((unlockedCount / totalCount) * 100);
        
        modal.innerHTML = `
            <div class="achievements-content">
                <h3>🏆 Mini-Game Achievements</h3>
                <div class="achievements-progress">
                    <div class="progress-text">Progress: ${unlockedCount}/${totalCount} (${completionPercentage}%)</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${completionPercentage}%"></div>
                    </div>
                </div>
                
                <div class="achievements-filter">
                    <button class="filter-btn active" onclick="filterAchievements('all')">All</button>
                    <button class="filter-btn" onclick="filterAchievements('hieroglyphs')">📜 Hieroglyphs</button>
                    <button class="filter-btn" onclick="filterAchievements('math')">🔢 Math</button>
                    <button class="filter-btn" onclick="filterAchievements('memory')">🧠 Memory</button>
                    <button class="filter-btn" onclick="filterAchievements('quiz')">❓ Quiz</button>
                    <button class="filter-btn" onclick="filterAchievements('unlocked')">✅ Unlocked</button>
                    <button class="filter-btn" onclick="filterAchievements('locked')">🔒 Locked</button>
                </div>
                
                <div class="achievements-list">
                    ${this.achievements.map(achievement => {
                        const isUnlocked = this.unlockedAchievements.includes(achievement.id);
                        return `
                            <div class="achievement-item ${isUnlocked ? 'unlocked' : 'locked'}" data-game-type="${achievement.gameType}">
                                <div class="achievement-icon">${achievement.icon}</div>
                                <div class="achievement-info">
                                    <div class="achievement-name">${achievement.name}</div>
                                    <div class="achievement-description">${achievement.description}</div>
                                    <div class="achievement-game-type">${achievement.gameType === 'all' ? 'General' : achievement.gameType.charAt(0).toUpperCase() + achievement.gameType.slice(1)}</div>
                                </div>
                                <div class="achievement-status">
                                    ${isUnlocked ? '<span class="unlocked-badge">✅ Unlocked</span>' : '<span class="locked-badge">🔒 Locked</span>'}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="achievements-footer">
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
}

// Function to filter achievements
function filterAchievements(filter) {
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter achievement items
    const items = document.querySelectorAll('.achievement-item');
    items.forEach(item => {
        const gameType = item.dataset.gameType;
        const isUnlocked = item.classList.contains('unlocked');
        
        let show = false;
        
        switch (filter) {
            case 'all':
                show = true;
                break;
            case 'unlocked':
                show = isUnlocked;
                break;
            case 'locked':
                show = !isUnlocked;
                break;
            default:
                show = gameType === filter || gameType === 'all';
        }
        
        item.style.display = show ? 'flex' : 'none';
    });
}

// Initialize achievements
MiniGameAchievements.loadAchievements();

// Add achievement CSS
const achievementCSS = `
.achievement-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(218, 165, 32, 0.4);
    z-index: 4000;
    transform: translateX(400px);
    opacity: 0;
    transition: all 0.5s ease;
    max-width: 350px;
    border: 2px solid #fff;
}

.achievement-notification.show {
    transform: translateX(0);
    opacity: 1;
}

.achievement-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.achievement-icon {
    font-size: 2.5em;
    animation: achievementBounce 0.6s ease;
}

@keyframes achievementBounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

.achievement-text {
    flex: 1;
}

.achievement-title {
    font-weight: bold;
    font-size: 1.1em;
    margin-bottom: 5px;
    color: #1a1a1a;
}

.achievement-name {
    font-weight: bold;
    color: #2c1810;
    margin-bottom: 3px;
}

.achievement-desc {
    font-size: 0.9em;
    color: #3d2817;
    line-height: 1.3;
}

.achievements-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3500;
}

.achievements-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 900px;
    width: 95%;
    color: #e6d7c3;
    max-height: 90vh;
    overflow-y: auto;
}

.achievements-content h3 {
    color: #daa520;
    text-align: center;
    margin-bottom: 25px;
    font-family: 'Cinzel', serif;
}

.achievements-progress {
    text-align: center;
    margin-bottom: 25px;
}

.progress-text {
    color: #e6d7c3;
    margin-bottom: 10px;
    font-weight: bold;
}

.progress-bar {
    background: rgba(0, 0, 0, 0.3);
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(218, 165, 32, 0.3);
}

.progress-fill {
    background: linear-gradient(90deg, #daa520 0%, #4ecdc4 100%);
    height: 100%;
    transition: width 0.5s ease;
    border-radius: 10px;
}

.achievements-filter {
    display: flex;
    gap: 8px;
    margin-bottom: 25px;
    flex-wrap: wrap;
    justify-content: center;
}

.filter-btn {
    background: rgba(218, 165, 32, 0.2);
    color: #e6d7c3;
    border: 1px solid rgba(218, 165, 32, 0.3);
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9em;
}

.filter-btn.active {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
}

.filter-btn:hover {
    transform: translateY(-1px);
}

.achievements-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 25px;
    max-height: 400px;
    overflow-y: auto;
}

.achievement-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.achievement-item.unlocked {
    background: rgba(76, 205, 196, 0.1);
    border: 1px solid rgba(76, 205, 196, 0.3);
}

.achievement-item.locked {
    background: rgba(255, 107, 107, 0.1);
    border: 1px solid rgba(255, 107, 107, 0.3);
    opacity: 0.7;
}

.achievement-item .achievement-icon {
    font-size: 2em;
    min-width: 50px;
    text-align: center;
}

.achievement-item .achievement-info {
    flex: 1;
}

.achievement-item .achievement-name {
    color: #daa520;
    font-weight: bold;
    margin-bottom: 5px;
}

.achievement-item .achievement-description {
    color: #e6d7c3;
    font-size: 0.9em;
    margin-bottom: 5px;
    line-height: 1.3;
}

.achievement-item .achievement-game-type {
    color: #4ecdc4;
    font-size: 0.8em;
    font-weight: bold;
}

.achievement-status {
    min-width: 100px;
    text-align: center;
}

.unlocked-badge {
    color: #4ecdc4;
    font-weight: bold;
}

.locked-badge {
    color: #ff6b6b;
    font-weight: bold;
}

.achievements-footer {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    border-top: 1px solid rgba(218, 165, 32, 0.3);
}

.achievements-footer button {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.achievements-footer button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}

@media (max-width: 768px) {
    .achievement-notification {
        right: 10px;
        left: 10px;
        max-width: none;
        transform: translateY(-100px);
    }
    
    .achievement-notification.show {
        transform: translateY(0);
    }
    
    .achievements-content {
        padding: 20px;
        width: 98%;
    }
    
    .achievements-filter {
        justify-content: flex-start;
    }
    
    .filter-btn {
        font-size: 0.8em;
        padding: 6px 12px;
    }
    
    .achievement-item {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
    
    .achievement-item .achievement-icon {
        font-size: 2.5em;
    }
    
    .achievement-status {
        min-width: auto;
    }
}
`;

const achievementStyleSheet = document.createElement('style');
achievementStyleSheet.textContent = achievementCSS;
document.head.appendChild(achievementStyleSheet);

// Function to show achievements
function showMiniGameAchievements() {
    MiniGameAchievements.showAchievementsList();
}

// Add comprehensive daily challenges system
class DailyChallenges {
    static challenges = [
        // Hieroglyph challenges
        { id: 'hieroglyph_accuracy', name: 'Perfect Scribe', description: 'Achieve 90%+ accuracy in hieroglyph challenge', gameType: 'hieroglyphs', target: 90, type: 'accuracy', reward: { gold: 200, knowledge: 40 } },
        { id: 'hieroglyph_speed', name: 'Speed Reader', description: 'Answer 15 hieroglyphs in under 60 seconds', gameType: 'hieroglyphs', target: 15, type: 'speed', timeLimit: 60, reward: { gold: 250, knowledge: 50 } },
        { id: 'hieroglyph_streak', name: 'Symbol Streak', description: 'Get 10 hieroglyphs correct in a row', gameType: 'hieroglyphs', target: 10, type: 'streak', reward: { gold: 180, knowledge: 35 } },
        
        // Math challenges
        { id: 'math_problems', name: 'Number Cruncher', description: 'Solve 25 math problems correctly', gameType: 'math', target: 25, type: 'count', reward: { gold: 220, knowledge: 45 } },
        { id: 'math_score', name: 'High Calculator', description: 'Score 300+ points in math challenge', gameType: 'math', target: 300, type: 'score', reward: { gold: 300, knowledge: 60 } },
        { id: 'math_perfect', name: 'Mathematical Perfection', description: 'Complete math challenge with 100% accuracy', gameType: 'math', target: 100, type: 'accuracy', reward: { gold: 350, knowledge: 70 } },
        
        // Memory challenges
        { id: 'memory_sequence', name: 'Memory Master', description: 'Remember a sequence of 12+ symbols', gameType: 'memory', target: 12, type: 'sequence', reward: { gold: 280, knowledge: 55 } },
        { id: 'memory_rounds', name: 'Recall Champion', description: 'Complete 8 memory rounds successfully', gameType: 'memory', target: 8, type: 'rounds', reward: { gold: 240, knowledge: 48 } },
        { id: 'memory_perfect', name: 'Flawless Memory', description: 'Complete memory challenge without mistakes', gameType: 'memory', target: 1, type: 'perfect', reward: { gold: 400, knowledge: 80 } },
        
        // Quiz challenges
        { id: 'quiz_questions', name: 'Knowledge Seeker', description: 'Answer 30 quiz questions correctly', gameType: 'quiz', target: 30, type: 'count', reward: { gold: 200, knowledge: 60 } },
        { id: 'quiz_categories', name: 'Well Rounded', description: 'Answer questions from 5 different categories', gameType: 'quiz', target: 5, type: 'categories', reward: { gold: 250, knowledge: 50 } },
        { id: 'quiz_expert', name: 'Quiz Expert', description: 'Achieve 95%+ accuracy in quiz challenge', gameType: 'quiz', target: 95, type: 'accuracy', reward: { gold: 320, knowledge: 65 } },
        
        // Cross-game challenges
        { id: 'all_games_play', name: 'Game Explorer', description: 'Play all 4 mini-game types today', gameType: 'all', target: 4, type: 'variety', reward: { gold: 500, knowledge: 100 } },
        { id: 'total_score', name: 'High Achiever', description: 'Score 1000+ total points across all games', gameType: 'all', target: 1000, type: 'total_score', reward: { gold: 600, knowledge: 120 } },
        { id: 'time_played', name: 'Dedicated Student', description: 'Play mini-games for 30+ minutes', gameType: 'all', target: 30, type: 'time', reward: { gold: 300, knowledge: 75 } }
    ];
    
    static currentChallenges = [];
    static completedToday = [];
    
    static generateDailyChallenges() {
        const today = new Date().toDateString();
        const savedDate = localStorage.getItem('pharaohs_legacy_daily_challenges_date');
        
        if (savedDate !== today) {
            // New day, generate new challenges
            this.currentChallenges = this.selectRandomChallenges(3);
            this.completedToday = [];
            
            localStorage.setItem('pharaohs_legacy_daily_challenges_date', today);
            localStorage.setItem('pharaohs_legacy_daily_challenges', JSON.stringify(this.currentChallenges));
            localStorage.setItem('pharaohs_legacy_daily_challenges_completed', JSON.stringify(this.completedToday));
        } else {
            // Same day, load existing challenges
            const saved = localStorage.getItem('pharaohs_legacy_daily_challenges');
            const completed = localStorage.getItem('pharaohs_legacy_daily_challenges_completed');
            
            if (saved) this.currentChallenges = JSON.parse(saved);
            if (completed) this.completedToday = JSON.parse(completed);
            
            // If no challenges exist, generate them
            if (this.currentChallenges.length === 0) {
                this.currentChallenges = this.selectRandomChallenges(3);
                localStorage.setItem('pharaohs_legacy_daily_challenges', JSON.stringify(this.currentChallenges));
            }
        }
    }
    
    static selectRandomChallenges(count) {
        const shuffled = [...this.challenges].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count).map(challenge => ({
            ...challenge,
            progress: 0,
            completed: false
        }));
    }
    
    static updateChallengeProgress(gameType, stats) {
        let completedChallenges = [];
        
        this.currentChallenges.forEach(challenge => {
            if (challenge.completed || (challenge.gameType !== gameType && challenge.gameType !== 'all')) {
                return;
            }
            
            let progress = 0;
            let completed = false;
            
            switch (challenge.type) {
                case 'accuracy':
                    if (gameType === 'all') {
                        // Calculate overall accuracy across all games
                        const totalCorrect = Object.values(stats).reduce((sum, gameStat) => sum + (gameStat.correctAnswers || 0), 0);
                        const totalAnswers = Object.values(stats).reduce((sum, gameStat) => sum + (gameStat.totalAnswers || 0), 0);
                        progress = totalAnswers > 0 ? (totalCorrect / totalAnswers) * 100 : 0;
                    } else {
                        const gameStat = stats[gameType];
                        progress = gameStat.totalAnswers > 0 ? (gameStat.correctAnswers / gameStat.totalAnswers) * 100 : 0;
                    }
                    completed = progress >= challenge.target;
                    break;
                    
                case 'speed':
                    // This would be checked during game completion with time tracking
                    break;
                    
                case 'streak':
                    progress = stats[gameType].longestStreak || 0;
                    completed = progress >= challenge.target;
                    break;
                    
                case 'count':
                    progress = stats[gameType].correctAnswers || 0;
                    completed = progress >= challenge.target;
                    break;
                    
                case 'score':
                    progress = stats[gameType].bestScore || 0;
                    completed = progress >= challenge.target;
                    break;
                    
                case 'sequence':
                    progress = stats[gameType].longestSequence || 0;
                    completed = progress >= challenge.target;
                    break;
                    
                case 'rounds':
                    progress = stats[gameType].roundsCompleted || 0;
                    completed = progress >= challenge.target;
                    break;
                    
                case 'perfect':
                    progress = stats[gameType].perfectGames || 0;
                    completed = progress >= challenge.target;
                    break;
                    
                case 'categories':
                    progress = stats[gameType].categoriesAnswered ? stats[gameType].categoriesAnswered.length : 0;
                    completed = progress >= challenge.target;
                    break;
                    
                case 'variety':
                    const gamesPlayedToday = Object.values(stats).filter(gameStat => gameStat.playedToday).length;
                    progress = gamesPlayedToday;
                    completed = progress >= challenge.target;
                    break;
                    
                case 'total_score':
                    progress = Object.values(stats).reduce((sum, gameStat) => sum + (gameStat.totalScore || 0), 0);
                    completed = progress >= challenge.target;
                    break;
                    
                case 'time':
                    progress = stats.general.timePlayedToday || 0;
                    completed = progress >= challenge.target;
                    break;
            }
            
            challenge.progress = Math.min(progress, challenge.target);
            
            if (completed && !challenge.completed) {
                challenge.completed = true;
                completedChallenges.push(challenge);
                this.completedToday.push(challenge.id);
            }
        });
        
        // Save updated challenges
        localStorage.setItem('pharaohs_legacy_daily_challenges', JSON.stringify(this.currentChallenges));
        localStorage.setItem('pharaohs_legacy_daily_challenges_completed', JSON.stringify(this.completedToday));
        
        // Show completion notifications and give rewards
        completedChallenges.forEach(challenge => {
            this.showChallengeCompletionNotification(challenge);
            MiniGameRewards.applyReward('gold', challenge.reward.gold);
            MiniGameRewards.applyReward('knowledge', challenge.reward.knowledge);
        });
        
        return completedChallenges;
    }
    
    static showChallengeCompletionNotification(challenge) {
        const notification = document.createElement('div');
        notification.className = 'challenge-notification';
        
        notification.innerHTML = `
            <div class="challenge-content">
                <div class="challenge-icon">🎯</div>
                <div class="challenge-text">
                    <div class="challenge-title">Daily Challenge Complete!</div>
                    <div class="challenge-name">${challenge.name}</div>
                    <div class="challenge-reward">+${challenge.reward.gold} gold, +${challenge.reward.knowledge} knowledge</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('show'), 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 500);
        }, 4000);
        
        // Play sound if enabled
        if (MiniGameSettings.settings.soundEnabled) {
            this.playChallengeSound();
        }
    }
    
    static playChallengeSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
            oscillator.frequency.setValueAtTime(554.37, audioContext.currentTime + 0.2);
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.4);
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.6);
        } catch (error) {
            console.log('Challenge sound failed');
        }
    }
    
    static showDailyChallenges() {
        const modal = document.createElement('div');
        modal.className = 'daily-challenges-modal';
        
        const completedCount = this.completedToday.length;
        const totalCount = this.currentChallenges.length;
        
        modal.innerHTML = `
            <div class="daily-challenges-content">
                <h3>🎯 Daily Challenges</h3>
                <div class="challenges-progress">
                    <div class="progress-text">Today's Progress: ${completedCount}/${totalCount} completed</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%"></div>
                    </div>
                </div>
                
                <div class="challenges-info">
                    <p>Complete daily challenges to earn bonus rewards! Challenges reset every day at midnight.</p>
                </div>
                
                <div class="challenges-list">
                    ${this.currentChallenges.map(challenge => {
                        const progressPercent = challenge.target > 0 ? (challenge.progress / challenge.target) * 100 : 0;
                        return `
                            <div class="challenge-item ${challenge.completed ? 'completed' : ''}">
                                <div class="challenge-info">
                                    <div class="challenge-name">${challenge.name}</div>
                                    <div class="challenge-description">${challenge.description}</div>
                                    <div class="challenge-reward">Reward: +${challenge.reward.gold} gold, +${challenge.reward.knowledge} knowledge</div>
                                    <div class="challenge-progress-bar">
                                        <div class="challenge-progress-fill" style="width: ${Math.min(progressPercent, 100)}%"></div>
                                    </div>
                                    <div class="challenge-progress-text">${Math.floor(challenge.progress)}/${challenge.target}</div>
                                </div>
                                <div class="challenge-status">
                                    ${challenge.completed ? '<span class="completed-badge">✅ Complete</span>' : '<span class="pending-badge">⏳ In Progress</span>'}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="challenges-footer">
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    static getTimeUntilReset() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const timeUntilReset = tomorrow.getTime() - now.getTime();
        const hours = Math.floor(timeUntilReset / (1000 * 60 * 60));
        const minutes = Math.floor((timeUntilReset % (1000 * 60 * 60)) / (1000 * 60));
        
        return { hours, minutes };
    }
}

// Initialize daily challenges
DailyChallenges.generateDailyChallenges();

// Add daily challenges CSS
const dailyChallengesCSS = `
.challenge-notification {
    position: fixed;
    top: 80px;
    right: 20px;
    background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
    color: #1a1a1a;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(76, 205, 196, 0.4);
    z-index: 4000;
    transform: translateX(400px);
    opacity: 0;
    transition: all 0.5s ease;
    max-width: 350px;
    border: 2px solid #fff;
}

.challenge-notification.show {
    transform: translateX(0);
    opacity: 1;
}

.challenge-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.challenge-icon {
    font-size: 2.5em;
    animation: challengePulse 0.8s ease;
}

@keyframes challengePulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}

.challenge-text {
    flex: 1;
}

.challenge-title {
    font-weight: bold;
    font-size: 1.1em;
    margin-bottom: 5px;
    color: #1a1a1a;
}

.challenge-name {
    font-weight: bold;
    color: #2c1810;
    margin-bottom: 3px;
}

.challenge-reward {
    font-size: 0.9em;
    color: #3d2817;
    line-height: 1.3;
}

.daily-challenges-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3500;
}

.daily-challenges-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 800px;
    width: 95%;
    color: #e6d7c3;
    max-height: 90vh;
    overflow-y: auto;
}

.daily-challenges-content h3 {
    color: #daa520;
    text-align: center;
    margin-bottom: 25px;
    font-family: 'Cinzel', serif;
}

.challenges-progress {
    text-align: center;
    margin-bottom: 20px;
}

.challenges-progress .progress-text {
    color: #e6d7c3;
    margin-bottom: 10px;
    font-weight: bold;
}

.challenges-progress .progress-bar {
    background: rgba(0, 0, 0, 0.3);
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(76, 205, 196, 0.3);
}

.challenges-progress .progress-fill {
    background: linear-gradient(90deg, #4ecdc4 0%, #44a08d 100%);
    height: 100%;
    transition: width 0.5s ease;
    border-radius: 10px;
}

.challenges-info {
    text-align: center;
    margin-bottom: 25px;
    padding: 15px;
    background: rgba(76, 205, 196, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(76, 205, 196, 0.3);
}

.challenges-info p {
    margin: 0;
    color: #e6d7c3;
    line-height: 1.4;
}

.challenges-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 25px;
}

.challenge-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px;
    border-radius: 10px;
    transition: all 0.3s ease;
    border: 1px solid rgba(218, 165, 32, 0.3);
    background: rgba(218, 165, 32, 0.1);
}

.challenge-item.completed {
    background: rgba(76, 205, 196, 0.1);
    border-color: rgba(76, 205, 196, 0.3);
}

.challenge-item .challenge-info {
    flex: 1;
}

.challenge-item .challenge-name {
    color: #daa520;
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 1.1em;
}

.challenge-item .challenge-description {
    color: #e6d7c3;
    margin-bottom: 8px;
    line-height: 1.3;
}

.challenge-item .challenge-reward {
    color: #4ecdc4;
    font-size: 0.9em;
    margin-bottom: 10px;
    font-weight: bold;
}

.challenge-progress-bar {
    background: rgba(0, 0, 0, 0.3);
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 5px;
    border: 1px solid rgba(218, 165, 32, 0.3);
}

.challenge-progress-fill {
    background: linear-gradient(90deg, #daa520 0%, #4ecdc4 100%);
    height: 100%;
    transition: width 0.5s ease;
    border-radius: 4px;
}

.challenge-progress-text {
    font-size: 0.8em;
    color: #ccc;
    text-align: right;
}

.challenge-status {
    min-width: 120px;
    text-align: center;
}

.completed-badge {
    color: #4ecdc4;
    font-weight: bold;
    background: rgba(76, 205, 196, 0.2);
    padding: 5px 10px;
    border-radius: 15px;
    border: 1px solid rgba(76, 205, 196, 0.3);
}

.pending-badge {
    color: #daa520;
    font-weight: bold;
    background: rgba(218, 165, 32, 0.2);
    padding: 5px 10px;
    border-radius: 15px;
    border: 1px solid rgba(218, 165, 32, 0.3);
}

.challenges-footer {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    border-top: 1px solid rgba(218, 165, 32, 0.3);
}

.challenges-footer button {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.challenges-footer button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}

@media (max-width: 768px) {
    .challenge-notification {
        right: 10px;
        left: 10px;
        max-width: none;
        transform: translateY(-100px);
    }
    
    .challenge-notification.show {
        transform: translateY(0);
    }
    
    .daily-challenges-content {
        padding: 20px;
        width: 98%;
    }
    
    .challenge-item {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
    
    .challenge-status {
        min-width: auto;
    }
}
`;

const dailyChallengesStyleSheet = document.createElement('style');
dailyChallengesStyleSheet.textContent = dailyChallengesCSS;
document.head.appendChild(dailyChallengesStyleSheet);

// Function to show daily challenges
function showDailyChallenges() {
    DailyChallenges.showDailyChallenges();
}

// Add comprehensive leaderboard system
class MiniGameLeaderboards {
    static leaderboards = {
        hieroglyphs: [],
        math: [],
        memory: [],
        quiz: [],
        overall: []
    };
    
    static loadLeaderboards() {
        const saved = localStorage.getItem('pharaohs_legacy_leaderboards');
        if (saved) {
            this.leaderboards = { ...this.leaderboards, ...JSON.parse(saved) };
        }
    }
    
    static saveLeaderboards() {
        localStorage.setItem('pharaohs_legacy_leaderboards', JSON.stringify(this.leaderboards));
    }
    
    static addScore(gameType, score, accuracy, time, playerName = 'Anonymous') {
        const entry = {
            playerName,
            score,
            accuracy,
            time,
            date: new Date().toISOString(),
            timestamp: Date.now()
        };
        
        // Add to specific game leaderboard
        if (this.leaderboards[gameType]) {
            this.leaderboards[gameType].push(entry);
            this.leaderboards[gameType].sort((a, b) => {
                if (b.score !== a.score) return b.score - a.score;
                if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
                return a.time - b.time; // Lower time is better
            });
            
            // Keep only top 50 scores
            this.leaderboards[gameType] = this.leaderboards[gameType].slice(0, 50);
        }
        
        // Add to overall leaderboard
        this.leaderboards.overall.push({
            ...entry,
            gameType
        });
        this.leaderboards.overall.sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
            return a.time - b.time;
        });
        this.leaderboards.overall = this.leaderboards.overall.slice(0, 100);
        
        this.saveLeaderboards();
        
        // Check if this is a new personal best
        const personalBests = this.getPersonalBests(playerName);
        const isNewBest = this.isNewPersonalBest(gameType, score, personalBests);
        
        if (isNewBest) {
            EnhancedNotifications.showMiniGameNotification(
                `🏆 New Personal Best in ${gameType}! Score: ${score}`,
                'success'
            );
        }
        
        return isNewBest;
    }
    
    static getPersonalBests(playerName) {
        const bests = {};
        
        Object.keys(this.leaderboards).forEach(gameType => {
            if (gameType === 'overall') return;
            
            const playerScores = this.leaderboards[gameType].filter(entry => entry.playerName === playerName);
            if (playerScores.length > 0) {
                bests[gameType] = playerScores[0]; // Already sorted, so first is best
            }
        });
        
        return bests;
    }
    
    static isNewPersonalBest(gameType, score, personalBests) {
        return !personalBests[gameType] || score > personalBests[gameType].score;
    }
    
    static showLeaderboards() {
        const modal = document.createElement('div');
        modal.className = 'leaderboards-modal';
        
        modal.innerHTML = `
            <div class="leaderboards-content">
                <h3>🏆 Leaderboards</h3>
                
                <div class="leaderboard-tabs">
                    <button class="leaderboard-tab active" onclick="showLeaderboardTab('overall')">🌟 Overall</button>
                    <button class="leaderboard-tab" onclick="showLeaderboardTab('hieroglyphs')">📜 Hieroglyphs</button>
                    <button class="leaderboard-tab" onclick="showLeaderboardTab('math')">🔢 Math</button>
                    <button class="leaderboard-tab" onclick="showLeaderboardTab('memory')">🧠 Memory</button>
                    <button class="leaderboard-tab" onclick="showLeaderboardTab('quiz')">❓ Quiz</button>
                </div>
                
                <div class="leaderboard-content">
                    ${this.renderLeaderboardTab('overall')}
                    ${this.renderLeaderboardTab('hieroglyphs')}
                    ${this.renderLeaderboardTab('math')}
                    ${this.renderLeaderboardTab('memory')}
                    ${this.renderLeaderboardTab('quiz')}
                </div>
                
                <div class="leaderboards-footer">
                    <button onclick="MiniGameLeaderboards.clearLeaderboards()">🗑️ Clear All</button>
                    <button onclick="MiniGameLeaderboards.exportLeaderboards()">📤 Export</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    static renderLeaderboardTab(gameType) {
        const entries = this.leaderboards[gameType] || [];
        const isActive = gameType === 'overall';
        
        return `
            <div class="leaderboard-tab-content ${isActive ? 'active' : ''}" id="leaderboard-${gameType}">
                <div class="leaderboard-header">
                    <div class="leaderboard-stats">
                        Total Entries: ${entries.length}
                        ${entries.length > 0 ? `| Best Score: ${Math.max(...entries.map(e => e.score))}` : ''}
                    </div>
                </div>
                
                <div class="leaderboard-list">
                    ${entries.length === 0 ? 
                        '<div class="no-scores">No scores recorded yet. Play some games to see your scores here!</div>' :
                        entries.map((entry, index) => `
                            <div class="leaderboard-entry ${index < 3 ? 'top-three' : ''}">
                                <div class="entry-rank">
                                    ${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
                                </div>
                                <div class="entry-info">
                                    <div class="entry-name">${entry.playerName}</div>
                                    <div class="entry-details">
                                        Score: ${entry.score} | Accuracy: ${entry.accuracy.toFixed(1)}% | Time: ${entry.time}s
                                        ${gameType === 'overall' ? ` | Game: ${entry.gameType}` : ''}
                                    </div>
                                    <div class="entry-date">${new Date(entry.date).toLocaleDateString()}</div>
                                </div>
                            </div>
                        `).join('')
                    }
                </div>
            </div>
        `;
    }
    
    static clearLeaderboards() {
        if (confirm('Are you sure you want to clear all leaderboard data? This cannot be undone!')) {
            this.leaderboards = {
                hieroglyphs: [],
                math: [],
                memory: [],
                quiz: [],
                overall: []
            };
            this.saveLeaderboards();
            
            // Refresh the modal if open
            const modal = document.querySelector('.leaderboards-modal');
            if (modal) {
                modal.remove();
                this.showLeaderboards();
            }
            
            EnhancedNotifications.showMiniGameNotification('Leaderboards cleared!', 'info');
        }
    }
    
    static exportLeaderboards() {
        const data = {
            leaderboards: this.leaderboards,
            exportDate: new Date().toISOString(),
            gameVersion: "1.0"
        };
        
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `pharaohs_legacy_leaderboards_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        EnhancedNotifications.showMiniGameNotification('Leaderboards exported!', 'success');
    }
}

// Function to show leaderboard tab
function showLeaderboardTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.leaderboard-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[onclick="showLeaderboardTab('${tabName}')"]`).classList.add('active');
    
    // Update content
    document.querySelectorAll('.leaderboard-tab-content').forEach(content => content.classList.remove('active'));
    document.getElementById(`leaderboard-${tabName}`).classList.add('active');
}

// Initialize leaderboards
MiniGameLeaderboards.loadLeaderboards();

// Add leaderboards CSS
const leaderboardsCSS = `
.leaderboards-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3500;
}

.leaderboards-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 900px;
    width: 95%;
    color: #e6d7c3;
    max-height: 90vh;
    overflow-y: auto;
}

.leaderboards-content h3 {
    color: #daa520;
    text-align: center;
    margin-bottom: 25px;
    font-family: 'Cinzel', serif;
}

.leaderboard-tabs {
    display: flex;
    gap: 5px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.leaderboard-tab {
    background: rgba(218, 165, 32, 0.2);
    color: #e6d7c3;
    border: 1px solid rgba(218, 165, 32, 0.3);
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    min-width: 120px;
    font-size: 0.9em;
}

.leaderboard-tab.active {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
}

.leaderboard-tab:hover {
    transform: translateY(-1px);
}

.leaderboard-content {
    position: relative;
}

.leaderboard-tab-content {
    display: none;
}

.leaderboard-tab-content.active {
    display: block;
}

.leaderboard-header {
    text-align: center;
    margin-bottom: 20px;
    padding: 15px;
    background: rgba(76, 205, 196, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(76, 205, 196, 0.3);
}

.leaderboard-stats {
    color: #4ecdc4;
    font-weight: bold;
}

.leaderboard-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 400px;
    overflow-y: auto;
}

.no-scores {
    text-align: center;
    padding: 40px;
    color: #ccc;
    font-style: italic;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    border: 1px dashed rgba(218, 165, 32, 0.3);
}

.leaderboard-entry {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    border-radius: 8px;
    background: rgba(218, 165, 32, 0.1);
    border: 1px solid rgba(218, 165, 32, 0.3);
    transition: all 0.3s ease;
}

.leaderboard-entry:hover {
    transform: translateX(5px);
    background: rgba(218, 165, 32, 0.15);
}

.leaderboard-entry.top-three {
    background: rgba(255, 215, 0, 0.15);
    border-color: rgba(255, 215, 0, 0.4);
    box-shadow: 0 2px 8px rgba(255, 215, 0, 0.2);
}

.entry-rank {
    font-size: 1.5em;
    font-weight: bold;
    min-width: 50px;
    text-align: center;
    color: #daa520;
}

.entry-info {
    flex: 1;
}

.entry-name {
    color: #daa520;
    font-weight: bold;
    font-size: 1.1em;
    margin-bottom: 5px;
}

.entry-details {
    color: #e6d7c3;
    font-size: 0.9em;
    margin-bottom: 3px;
    line-height: 1.3;
}

.entry-date {
    color: #ccc;
    font-size: 0.8em;
}

.leaderboards-footer {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding-top: 20px;
    border-top: 1px solid rgba(218, 165, 32, 0.3);
    flex-wrap: wrap;
}

.leaderboards-footer button {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    font-size: 0.9em;
}

.leaderboards-footer button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}

@media (max-width: 768px) {
    .leaderboards-content {
        padding: 20px;
        width: 98%;
    }
    
    .leaderboard-tabs {
        flex-direction: column;
    }
    
    .leaderboard-tab {
        min-width: auto;
        flex: none;
    }
    
    .leaderboard-entry {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
    
    .entry-rank {
        font-size: 2em;
    }
    
    .leaderboards-footer {
        flex-direction: column;
    }
    
    .leaderboards-footer button {
        width: 100%;
    }
}
`;

const leaderboardsStyleSheet = document.createElement('style');
leaderboardsStyleSheet.textContent = leaderboardsCSS;
document.head.appendChild(leaderboardsStyleSheet);

// Function to show leaderboards
function showMiniGameLeaderboards() {
    MiniGameLeaderboards.showLeaderboards();
}

// Add comprehensive mini-game integration with main game
class MiniGameIntegration {
    static integrateMiniGameRewards(gameType, score, accuracy, time) {
        // Calculate base rewards based on performance
        let goldReward = Math.floor(score / 10);
        let knowledgeReward = Math.floor(score / 20);
        let healthReward = 0;
        
        // Bonus rewards for high performance
        if (accuracy >= 90) {
            goldReward *= 1.5;
            knowledgeReward *= 1.5;
        }
        
        if (accuracy >= 95) {
            goldReward *= 1.2;
            knowledgeReward *= 1.2;
            healthReward = 5;
        }
        
        if (accuracy === 100) {
            goldReward *= 1.3;
            knowledgeReward *= 1.3;
            healthReward = 10;
        }
        
        // Speed bonus
        if (time < 30) {
            goldReward *= 1.2;
        }
        
        // Game-specific bonuses
        switch (gameType) {
            case 'hieroglyphs':
                knowledgeReward *= 1.2; // Extra knowledge for language learning
                break;
            case 'math':
                goldReward *= 1.2; // Extra gold for mathematical skills
                break;
            case 'memory':
                healthReward += 3; // Memory training improves mental health
                break;
            case 'quiz':
                knowledgeReward *= 1.3; // Quiz provides broad knowledge
                break;
        }
        
        // Apply difficulty multiplier
        const difficulty = MiniGameSettings.settings.difficulty;
        const multipliers = { easy: 0.8, normal: 1.0, hard: 1.3 };
        const multiplier = multipliers[difficulty] || 1.0;
        
        goldReward = Math.floor(goldReward * multiplier);
        knowledgeReward = Math.floor(knowledgeReward * multiplier);
        healthReward = Math.floor(healthReward * multiplier);
        
        // Apply rewards to main game
        MiniGameRewards.applyReward('gold', goldReward);
        MiniGameRewards.applyReward('knowledge', knowledgeReward);
        if (healthReward > 0) {
            MiniGameRewards.applyReward('health', healthReward);
        }
        
        // Show reward notification
        let rewardText = `+${goldReward} gold, +${knowledgeReward} knowledge`;
        if (healthReward > 0) {
            rewardText += `, +${healthReward} health`;
        }
        
        EnhancedNotifications.showMiniGameNotification(
            `🎮 Mini-game rewards: ${rewardText}`,
            'success'
        );
        
        // Update main game display if available
        if (window.game && typeof window.game.updateDisplay === 'function') {
            window.game.updateDisplay();
        }
        
        return { goldReward, knowledgeReward, healthReward };
    }
    
    static checkMainGameProgress() {
        // Check if main game exists and get player data
        if (window.game && window.game.player) {
            const player = window.game.player;
            
            // Unlock mini-games based on main game progress
            const unlockedGames = [];
            
            if (player.knowledge >= 50) {
                unlockedGames.push('hieroglyphs');
            }
            
            if (player.knowledge >= 100) {
                unlockedGames.push('math');
            }
            
            if (player.knowledge >= 150) {
                unlockedGames.push('memory');
            }
            
            if (player.knowledge >= 200) {
                unlockedGames.push('quiz');
            }
            
            // Update mini-game settings
            MiniGameSettings.settings.unlockedGames = unlockedGames;
            MiniGameSettings.saveSettings();
            
            return {
                playerName: player.name || 'Anonymous',
                knowledge: player.knowledge,
                unlockedGames
            };
        }
        
        return {
            playerName: 'Anonymous',
            knowledge: 0,
            unlockedGames: ['hieroglyphs'] // Default unlock
        };
    }
    
    static generateContextualChallenges() {
        const mainGameData = this.checkMainGameProgress();
        const challenges = [];
        
        // Generate challenges based on main game progress
        if (mainGameData.knowledge < 100) {
            challenges.push({
                title: 'Learning the Basics',
                description: 'Complete 5 hieroglyph challenges to advance your studies',
                requirement: 'hieroglyphs_games',
                target: 5,
                reward: { gold: 300, knowledge: 60 }
            });
        }
        
        if (mainGameData.knowledge >= 100 && mainGameData.knowledge < 300) {
            challenges.push({
                title: 'Mathematical Mind',
                description: 'Score 200+ in math challenge to prove your calculation skills',
                requirement: 'math_score',
                target: 200,
                reward: { gold: 400, knowledge: 80 }
            });
        }
        
        if (mainGameData.knowledge >= 200) {
            challenges.push({
                title: 'Master Scholar',
                description: 'Achieve 95%+ accuracy in all mini-game types',
                requirement: 'all_accuracy',
                target: 95,
                reward: { gold: 1000, knowledge: 200 }
            });
        }
        
        return challenges;
    }
    
    static updateMainGameQuests(miniGameStats) {
        // Update main game daily quests based on mini-game performance
        if (window.game && window.game.player && window.game.player.dailyQuests) {
            window.game.player.dailyQuests.forEach(quest => {
                if (quest.requirement === 'play_minigames' && !quest.completed) {
                    const totalGames = Object.values(miniGameStats).reduce((sum, stat) => sum + (stat.gamesPlayed || 0), 0);
                    if (totalGames >= quest.amount) {
                        quest.completed = true;
                        window.game.applyEffects(quest.reward);
                        window.game.showNotification(`✅ Daily Quest Complete: ${quest.title}!`);
                    }
                }
            });
        }
    }
}

// Add comprehensive mini-game tutorial system
class MiniGameTutorials {
    static tutorials = {
        hieroglyphs: {
            title: 'Hieroglyphs Tutorial',
            steps: [
                {
                    title: 'Welcome to Hieroglyphs!',
                    content: 'Learn to read ancient Egyptian hieroglyphic symbols. Each symbol has a meaning and often a sound.',
                    image: '📜'
                },
                {
                    title: 'How to Play',
                    content: 'You\'ll see a hieroglyph symbol and multiple choice answers. Select the correct meaning or sound.',
                    image: '🎯'
                },
                {
                    title: 'Scoring',
                    content: 'Correct answers give points. Faster answers give bonus points. Wrong answers lose points.',
                    image: '⭐'
                },
                {
                    title: 'Tips',
                    content: 'Study the symbols carefully. Many hieroglyphs represent both objects and sounds. Practice makes perfect!',
                    image: '💡'
                }
            ]
        },
        math: {
            title: 'Egyptian Math Tutorial',
            steps: [
                {
                    title: 'Ancient Mathematics',
                    content: 'Learn the Egyptian number system and solve mathematical problems like ancient scribes.',
                    image: '🔢'
                },
                {
                    title: 'Number System',
                    content: 'Egyptians used symbols for 1, 10, 100, 1000, etc. Count the symbols to find the number.',
                    image: '🧮'
                },
                {
                    title: 'Problem Types',
                    content: 'You\'ll solve addition, subtraction, and number recognition problems using Egyptian numerals.',
                    image: '➕'
                },
                {
                    title: 'Strategy',
                    content: 'Take your time to count symbols accurately. Speed comes with practice!',
                    image: '🎯'
                }
            ]
        },
        memory: {
            title: 'Memory Palace Tutorial',
            steps: [
                {
                    title: 'Memory Training',
                    content: 'Train your memory like ancient Egyptian priests who memorized vast amounts of knowledge.',
                    image: '🧠'
                },
                {
                    title: 'How It Works',
                    content: 'Watch a sequence of symbols, then repeat it back in the correct order.',
                    image: '👁️'
                },
                {
                    title: 'Difficulty Increases',
                    content: 'Each round adds more symbols to remember. How long can you make your sequence?',
                    image: '📈'
                },
                {
                    title: 'Memory Tips',
                    content: 'Create stories or patterns with the symbols. Use the method of loci (memory palace) technique!',
                    image: '🏛️'
                }
            ]
        },
        quiz: {
            title: 'Knowledge Quiz Tutorial',
            steps: [
                {
                    title: 'Test Your Knowledge',
                    content: 'Answer questions about ancient Egyptian culture, history, and achievements.',
                    image: '❓'
                },
                {
                    title: 'Question Types',
                    content: 'Multiple choice questions covering gods, pharaohs, culture, science, and daily life.',
                    image: '📚'
                },
                {
                    title: 'Learning Mode',
                    content: 'Wrong answers show explanations to help you learn. Knowledge is the goal!',
                    image: '🎓'
                },
                {
                    title: 'Categories',
                    content: 'Questions cover many topics: religion, science, art, politics, and more.',
                    image: '🌟'
                }
            ]
        }
    };
    
    static showTutorial(gameType) {
        const tutorial = this.tutorials[gameType];
        if (!tutorial) return;
        
        const modal = document.createElement('div');
        modal.className = 'tutorial-modal';
        
        modal.innerHTML = `
            <div class="tutorial-content">
                <h3>${tutorial.title}</h3>
                <div class="tutorial-steps">
                    ${tutorial.steps.map((step, index) => `
                        <div class="tutorial-step ${index === 0 ? 'active' : ''}" data-step="${index}">
                            <div class="step-image">${step.image}</div>
                            <div class="step-content">
                                <h4>${step.title}</h4>
                                <p>${step.content}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="tutorial-navigation">
                    <button id="prevStep" onclick="MiniGameTutorials.previousStep()"                        disabled>Previous</button>
                    <span class="step-indicator">
                        <span id="currentStep">1</span> / <span id="totalSteps">${tutorial.steps.length}</span>
                    </span>
                    <button id="nextStep" onclick="MiniGameTutorials.nextStep()">Next</button>
                </div>
                
                <div class="tutorial-footer">
                    <label class="tutorial-checkbox">
                        <input type="checkbox" id="dontShowAgain" onchange="MiniGameTutorials.toggleDontShow('${gameType}')">
                        Don't show this tutorial again
                    </label>
                    <button class="tutorial-close" onclick="MiniGameTutorials.closeTutorial()">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        this.currentTutorial = { gameType, currentStep: 0, totalSteps: tutorial.steps.length };
    }
    
    static nextStep() {
        if (!this.currentTutorial) return;
        
        const { currentStep, totalSteps } = this.currentTutorial;
        
        if (currentStep < totalSteps - 1) {
            // Hide current step
            document.querySelector(`.tutorial-step[data-step="${currentStep}"]`).classList.remove('active');
            
            // Show next step
            this.currentTutorial.currentStep++;
            document.querySelector(`.tutorial-step[data-step="${this.currentTutorial.currentStep}"]`).classList.add('active');
            
            // Update navigation
            document.getElementById('currentStep').textContent = this.currentTutorial.currentStep + 1;
            document.getElementById('prevStep').disabled = false;
            
            if (this.currentTutorial.currentStep === totalSteps - 1) {
                document.getElementById('nextStep').textContent = 'Finish';
            }
        } else {
            // Tutorial complete
            this.closeTutorial();
        }
    }
    
    static previousStep() {
        if (!this.currentTutorial) return;
        
        const { currentStep } = this.currentTutorial;
        
        if (currentStep > 0) {
            // Hide current step
            document.querySelector(`.tutorial-step[data-step="${currentStep}"]`).classList.remove('active');
            
            // Show previous step
            this.currentTutorial.currentStep--;
            document.querySelector(`.tutorial-step[data-step="${this.currentTutorial.currentStep}"]`).classList.add('active');
            
            // Update navigation
            document.getElementById('currentStep').textContent = this.currentTutorial.currentStep + 1;
            document.getElementById('nextStep').textContent = 'Next';
            
            if (this.currentTutorial.currentStep === 0) {
                document.getElementById('prevStep').disabled = true;
            }
        }
    }
    
    static toggleDontShow(gameType) {
        const checkbox = document.getElementById('dontShowAgain');
        const settings = MiniGameSettings.settings;
        
        if (!settings.tutorialsShown) {
            settings.tutorialsShown = {};
        }
        
        settings.tutorialsShown[gameType] = checkbox.checked;
        MiniGameSettings.saveSettings();
    }
    
    static closeTutorial() {
        const modal = document.querySelector('.tutorial-modal');
        if (modal) {
            modal.remove();
        }
        this.currentTutorial = null;
    }
    
    static shouldShowTutorial(gameType) {
        const settings = MiniGameSettings.settings;
        return !settings.tutorialsShown || !settings.tutorialsShown[gameType];
    }
}

// Add tutorial CSS
const tutorialCSS = `
.tutorial-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4000;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.tutorial-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 600px;
    width: 95%;
    color: #e6d7c3;
    max-height: 90vh;
    overflow-y: auto;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

.tutorial-content h3 {
    color: #daa520;
    text-align: center;
    margin-bottom: 25px;
    font-family: 'Cinzel', serif;
    font-size: 1.5em;
}

.tutorial-steps {
    position: relative;
    min-height: 300px;
    margin-bottom: 25px;
}

.tutorial-step {
    display: none;
    text-align: center;
    animation: stepFadeIn 0.3s ease;
}

.tutorial-step.active {
    display: block;
}

@keyframes stepFadeIn {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
}

.step-image {
    font-size: 4em;
    margin-bottom: 20px;
    animation: bounce 2s infinite;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

.step-content h4 {
    color: #daa520;
    margin-bottom: 15px;
    font-size: 1.3em;
}

.step-content p {
    color: #e6d7c3;
    line-height: 1.6;
    font-size: 1.1em;
    margin: 0;
}

.tutorial-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 15px;
    background: rgba(218, 165, 32, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(218, 165, 32, 0.3);
}

.tutorial-navigation button {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.tutorial-navigation button:disabled {
    background: rgba(218, 165, 32, 0.3);
    color: rgba(26, 26, 26, 0.5);
    cursor: not-allowed;
}

.tutorial-navigation button:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}

.step-indicator {
    color: #daa520;
    font-weight: bold;
    font-size: 1.1em;
}

.tutorial-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid rgba(218, 165, 32, 0.3);
    flex-wrap: wrap;
    gap: 15px;
}

.tutorial-checkbox {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #e6d7c3;
    cursor: pointer;
    font-size: 0.9em;
}

.tutorial-checkbox input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: #daa520;
}

.tutorial-close {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.tutorial-close:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 107, 107, 0.4);
}

@media (max-width: 768px) {
    .tutorial-content {
        padding: 20px;
        width: 98%;
    }
    
    .step-image {
        font-size: 3em;
    }
    
    .step-content h4 {
        font-size: 1.2em;
    }
    
    .step-content p {
        font-size: 1em;
    }
    
    .tutorial-navigation {
        flex-direction: column;
        gap: 10px;
    }
    
    .tutorial-navigation button {
        width: 100%;
    }
    
    .tutorial-footer {
        flex-direction: column;
        text-align: center;
    }
    
    .tutorial-close {
        width: 100%;
    }
}
`;

const tutorialStyleSheet = document.createElement('style');
tutorialStyleSheet.textContent = tutorialCSS;
document.head.appendChild(tutorialStyleSheet);

// Add comprehensive mini-game launcher
class MiniGameLauncher {
    static showGameSelector() {
        const mainGameData = MiniGameIntegration.checkMainGameProgress();
        
        const modal = document.createElement('div');
        modal.className = 'game-selector-modal';
        
        const games = [
            {
                id: 'hieroglyphs',
                name: 'Hieroglyphs Challenge',
                icon: '📜',
                description: 'Learn to read ancient Egyptian symbols',
                difficulty: 'Beginner',
                unlockRequirement: 0
            },
            {
                id: 'math',
                name: 'Egyptian Mathematics',
                icon: '🔢',
                description: 'Master the ancient number system',
                difficulty: 'Intermediate',
                unlockRequirement: 100
            },
            {
                id: 'memory',
                name: 'Memory Palace',
                icon: '🧠',
                description: 'Train your memory like ancient priests',
                difficulty: 'Intermediate',
                unlockRequirement: 150
            },
            {
                id: 'quiz',
                name: 'Knowledge Quiz',
                icon: '❓',
                description: 'Test your understanding of ancient Egypt',
                difficulty: 'Advanced',
                unlockRequirement: 200
            }
        ];
        
        modal.innerHTML = `
            <div class="game-selector-content">
                <h3>🎮 Choose Your Challenge</h3>
                
                <div class="player-info">
                    <div class="player-name">Welcome, ${mainGameData.playerName}!</div>
                    <div class="player-knowledge">Knowledge Level: ${mainGameData.knowledge}</div>
                </div>
                
                <div class="games-grid">
                    ${games.map(game => {
                        const isUnlocked = mainGameData.knowledge >= game.unlockRequirement;
                        const hasPlayed = MiniGameStats.getGameStats(game.id).gamesPlayed > 0;
                        
                        return `
                            <div class="game-card ${isUnlocked ? 'unlocked' : 'locked'}" 
                                 onclick="${isUnlocked ? `MiniGameLauncher.launchGame('${game.id}')` : ''}">
                                <div class="game-icon">${game.icon}</div>
                                <div class="game-info">
                                    <div class="game-name">${game.name}</div>
                                    <div class="game-description">${game.description}</div>
                                    <div class="game-difficulty">Difficulty: ${game.difficulty}</div>
                                    ${hasPlayed ? `<div class="game-best">Best Score: ${MiniGameStats.getGameStats(game.id).bestScore || 0}</div>` : ''}
                                </div>
                                <div class="game-status">
                                    ${isUnlocked ? 
                                        '<span class="play-btn">▶️ Play</span>' : 
                                        `<span class="locked-text">🔒 Requires ${game.unlockRequirement} Knowledge</span>`
                                    }
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="selector-footer">
                    <button onclick="showMiniGameAchievements()">🏆 Achievements</button>
                    <button onclick="showDailyChallenges()">🎯 Daily Challenges</button>
                    <button onclick="showMiniGameLeaderboards()">📊 Leaderboards</button>
                    <button onclick="MiniGameSettings.showSettings()">⚙️ Settings</button>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    static launchGame(gameType) {
        // Close selector
        const modal = document.querySelector('.game-selector-modal');
        if (modal) modal.remove();
        
        // Show tutorial if first time
        if (MiniGameTutorials.shouldShowTutorial(gameType)) {
            MiniGameTutorials.showTutorial(gameType);
            return;
        }
        
        // Launch the appropriate game
        switch (gameType) {
            case 'hieroglyphs':
                this.launchHieroglyphsGame();
                break;
            case 'math':
                this.launchMathGame();
                break;
            case 'memory':
                this.launchMemoryGame();
                break;
            case 'quiz':
                this.launchQuizGame();
                break;
        }
    }
    
    static launchHieroglyphsGame() {
        // Implementation for hieroglyphs game
        EnhancedNotifications.showMiniGameNotification('🚧 Hieroglyphs game coming soon!', 'info');
    }
    
    static launchMathGame() {
        // Implementation for math game
        EnhancedNotifications.showMiniGameNotification('🚧 Math game coming soon!', 'info');
    }
    
    static launchMemoryGame() {
        // Implementation for memory game
        EnhancedNotifications.showMiniGameNotification('🚧 Memory game coming soon!', 'info');
    }
    
    static launchQuizGame() {
        // Implementation for quiz game
        EnhancedNotifications.showMiniGameNotification('🚧 Quiz game coming soon!', 'info');
    }
}

// Add game selector CSS
const gameSelectorCSS = `
.game-selector-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3500;
    animation: fadeIn 0.3s ease;
}

.game-selector-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 1000px;
    width: 95%;
    color: #e6d7c3;
    max-height: 90vh;
    overflow-y: auto;
}

.game-selector-content h3 {
    color: #daa520;
    text-align: center;
    margin-bottom: 25px;
    font-family: 'Cinzel', serif;
    font-size: 1.8em;
}

.player-info {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
    background: rgba(76, 205, 196, 0.1);
    border-radius: 10px;
    border: 1px solid rgba(76, 205, 196, 0.3);
}

.player-name {
    color: #4ecdc4;
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 8px;
}

.player-knowledge {
    color: #daa520;
    font-size: 1.1em;
}

.games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.game-card {
    background: rgba(218, 165, 32, 0.1);
    border: 2px solid rgba(218, 165, 32, 0.3);
    border-radius: 12px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 200px;
}

.game-card.unlocked:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(218, 165, 32, 0.4);
    border-color: #daa520;
    background: rgba(218, 165, 32, 0.15);
}

.game-card.locked {
    opacity: 0.6;
    cursor: not-allowed;
    background: rgba(128, 128, 128, 0.1);
    border-color: rgba(128, 128, 128, 0.3);
}

.game-icon {
    font-size: 3.5em;
    margin-bottom: 15px;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

.game-info {
    flex: 1;
    margin-bottom: 15px;
}

.game-name {
    color: #daa520;
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 10px;
}

.game-description {
    color: #e6d7c3;
    margin-bottom: 8px;
    line-height: 1.4;
}

.game-difficulty {
    color: #4ecdc4;
    font-size: 0.9em;
    margin-bottom: 5px;
}

.game-best {
    color: #daa520;
    font-size: 0.9em;
    font-weight: bold;
}

.game-status {
    margin-top: auto;
}

.play-btn {
    background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
    color: #1a1a1a;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: bold;
    display: inline-block;
    transition: all 0.3s ease;
}

.play-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(76, 205, 196, 0.4);
}

.locked-text {
    color: #999;
    font-size: 0.9em;
    font-style: italic;
}

.selector-footer {
    display: flex;
    justify-content: center;
    gap: 15px;
    padding-top: 20px;
    border-top: 1px solid rgba(218, 165, 32, 0.3);
    flex-wrap: wrap;
}

.selector-footer button {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
    font-size: 0.9em;
}

.selector-footer button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}

@media (max-width: 768px) {
    .game-selector-content {
        padding: 20px;
        width: 98%;
    }
    
    .games-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }
    
    .game-card {
        min-height: 180px;
        padding: 15px;
    }
    
    .game-icon {
        font-size: 3em;
    }
    
    .selector-footer {
        flex-direction: column;
    }
    
    .selector-footer button {
        width: 100%;
    }
}
`;

const gameSelectorStyleSheet = document.createElement('style');
gameSelectorStyleSheet.textContent = gameSelectorCSS;
document.head.appendChild(gameSelectorStyleSheet);

// Function to show mini-game selector
function showMiniGameSelector() {
    MiniGameLauncher.showGameSelector();
}

// Add comprehensive mini-game achievements system
class MiniGameAchievements {
    static achievements = [
        // General achievements
        {
            id: 'first_game',
            name: 'First Steps',
            description: 'Play your first mini-game',
            icon: '🎮',
            category: 'general',
            condition: (stats) => Object.values(stats).some(stat => stat.gamesPlayed > 0),
            reward: { gold: 100, knowledge: 20 }
        },
        {
            id: 'dedicated_player',
            name: 'Dedicated Student',
            description: 'Play 10 mini-games',
            icon: '📚',
            category: 'general',
            condition: (stats) => Object.values(stats).reduce((sum, stat) => sum + stat.gamesPlayed, 0) >= 10,
            reward: { gold: 300, knowledge: 50 }
        },
        {
            id: 'game_master',
            name: 'Game Master',
            description: 'Play 50 mini-games',
            icon: '👑',
            category: 'general',
            condition: (stats) => Object.values(stats).reduce((sum, stat) => sum + stat.gamesPlayed, 0) >= 50,
            reward: { gold: 1000, knowledge: 150 }
        },
        
        // Accuracy achievements
        {
            id: 'perfectionist',
            name: 'Perfectionist',
            description: 'Achieve 100% accuracy in any game',
            icon: '💯',
            category: 'accuracy',
            condition: (stats) => Object.values(stats).some(stat => stat.bestAccuracy >= 100),
            reward: { gold: 500, knowledge: 75 }
        },
        {
            id: 'consistent_scholar',
            name: 'Consistent Scholar',
            description: 'Maintain 90%+ accuracy across all games',
            icon: '🎯',
            category: 'accuracy',
            condition: (stats) => Object.values(stats).every(stat => stat.gamesPlayed === 0 || stat.averageAccuracy >= 90),
            reward: { gold: 800, knowledge: 120 }
        },
        
        // Speed achievements
        {
            id: 'quick_thinker',
            name: 'Quick Thinker',
            description: 'Complete a game in under 30 seconds',
            icon: '⚡',
            category: 'speed',
            condition: (stats) => Object.values(stats).some(stat => stat.bestTime > 0 && stat.bestTime < 30),
            reward: { gold: 400, knowledge: 60 }
        },
        {
            id: 'lightning_fast',
            name: 'Lightning Fast',
            description: 'Complete a game in under 15 seconds',
            icon: '🌟',
            category: 'speed',
            condition: (stats) => Object.values(stats).some(stat => stat.bestTime > 0 && stat.bestTime < 15),
            reward: { gold: 700, knowledge: 100 }
        },
        
        // Score achievements
        {
            id: 'high_scorer',
            name: 'High Scorer',
            description: 'Score 500+ points in any game',
            icon: '🏆',
            category: 'score',
            condition: (stats) => Object.values(stats).some(stat => stat.bestScore >= 500),
            reward: { gold: 600, knowledge: 80 }
        },
        {
            id: 'score_legend',
            name: 'Score Legend',
            description: 'Score 1000+ points in any game',
            icon: '👑',
            category: 'score',
            condition: (stats) => Object.values(stats).some(stat => stat.bestScore >= 1000),
            reward: { gold: 1200, knowledge: 180 }
        },
        
        // Game-specific achievements
        {
            id: 'hieroglyph_reader',
            name: 'Hieroglyph Reader',
            description: 'Complete 10 hieroglyph challenges',
            icon: '📜',
            category: 'hieroglyphs',
            condition: (stats) => stats.hieroglyphs && stats.hieroglyphs.gamesPlayed >= 10,
            reward: { gold: 400, knowledge: 80 }
        },
        {
            id: 'math_wizard',
            name: 'Math Wizard',
            description: 'Complete 10 math challenges',
            icon: '🧮',
            category: 'math',
            condition: (stats) => stats.math && stats.math.gamesPlayed >= 10,
            reward: { gold: 400, knowledge: 80 }
        },
        {
            id: 'memory_master',
            name: 'Memory Master',
            description: 'Complete 10 memory challenges',
            icon: '🧠',
            category: 'memory',
            condition: (stats) => stats.memory && stats.memory.gamesPlayed >= 10,
            reward: { gold: 400, knowledge: 80 }
        },
        {
            id: 'quiz_champion',
            name: 'Quiz Champion',
            description: 'Complete 10 quiz challenges',
            icon: '🎓',
            category: 'quiz',
            condition: (stats) => stats.quiz && stats.quiz.gamesPlayed >= 10,
            reward: { gold: 400, knowledge: 80 }
        },
        
        // Special achievements
        {
            id: 'well_rounded',
            name: 'Well Rounded',
            description: 'Play all types of mini-games',
            icon: '🌟',
            category: 'special',
            condition: (stats) => ['hieroglyphs', 'math', 'memory', 'quiz'].every(game => stats[game] && stats[game].gamesPlayed > 0),
            reward: { gold: 1000, knowledge: 200 }
        },
        {
            id: 'daily_challenger',
            name: 'Daily Challenger',
            description: 'Complete 5 daily challenges',
            icon: '📅',
            category: 'special',
            condition: () => DailyChallenges.completedToday.length >= 5,
            reward: { gold: 800, knowledge: 120 }
        }
    ];
    
    static unlockedAchievements = [];
    
    static loadAchievements() {
        const saved = localStorage.getItem('pharaohs_legacy_mini_achievements');
        if (saved) {
            this.unlockedAchievements = JSON.parse(saved);
        }
    }
    
    static saveAchievements() {
        localStorage.setItem('pharaohs_legacy_mini_achievements', JSON.stringify(this.unlockedAchievements));
    }
    
    static checkAchievements(gameStats) {
        const newAchievements = [];
        
        this.achievements.forEach(achievement => {
            if (!this.unlockedAchievements.includes(achievement.id) && achievement.condition(gameStats)) {
                this.unlockedAchievements.push(achievement.id);
                newAchievements.push(achievement);
                
                // Apply rewards
                MiniGameRewards.applyReward('gold', achievement.reward.gold);
                MiniGameRewards.applyReward('knowledge', achievement.reward.knowledge);
                
                // Show notification
                this.showAchievementNotification(achievement);
            }
        });
        
        if (newAchievements.length > 0) {
            this.saveAchievements();
        }
        
        return newAchievements;
    }
    
    static showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        
        notification.innerHTML = `
            <div class="achievement-content">
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-text">
                    <div class="achievement-title">Achievement Unlocked!</div>
                    <div class="achievement-name">${achievement.name}</div>
                    <div class="achievement-desc">${achievement.description}</div>
                    <div class="achievement-reward">+${achievement.reward.gold} gold, +${achievement.reward.knowledge} knowledge</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList
        .add('show'), 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.classList.add('hide');
            setTimeout(() => notification.remove(), 500);
        }, 4000);
    }
    
    static showAchievements() {
        const modal = document.createElement('div');
        modal.className = 'achievements-modal';
        
        const categories = ['general', 'accuracy', 'speed', 'score', 'hieroglyphs', 'math', 'memory', 'quiz', 'special'];
        
        modal.innerHTML = `
            <div class="achievements-content">
                <h3>🏆 Mini-Game Achievements</h3>
                
                <div class="achievements-stats">
                    <div class="stat">Unlocked: ${this.unlockedAchievements.length}/${this.achievements.length}</div>
                    <div class="stat">Progress: ${Math.round((this.unlockedAchievements.length / this.achievements.length) * 100)}%</div>
                </div>
                
                <div class="achievements-categories">
                    ${categories.map(category => `
                        <div class="achievement-category">
                            <h4>${category.charAt(0).toUpperCase() + category.slice(1)} Achievements</h4>
                            <div class="category-achievements">
                                ${this.achievements.filter(a => a.category === category).map(achievement => {
                                    const isUnlocked = this.unlockedAchievements.includes(achievement.id);
                                    return `
                                        <div class="achievement-item ${isUnlocked ? 'unlocked' : 'locked'}">
                                            <div class="achievement-icon">${achievement.icon}</div>
                                            <div class="achievement-info">
                                                <div class="achievement-name">${achievement.name}</div>
                                                <div class="achievement-description">${achievement.description}</div>
                                                <div class="achievement-reward">Reward: +${achievement.reward.gold} gold, +${achievement.reward.knowledge} knowledge</div>
                                            </div>
                                            <div class="achievement-status">
                                                ${isUnlocked ? '✅ Unlocked' : '🔒 Locked'}
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="achievements-footer">
                    <button onclick="this.parentElement.parentElement.parentElement.remove()">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
}

// Add achievement notification CSS
const achievementCSS = `
.achievement-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 8px 25px rgba(218, 165, 32, 0.6);
    z-index: 4500;
    max-width: 350px;
    transform: translateX(400px);
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    border: 2px solid #fff;
}

.achievement-notification.show {
    transform: translateX(0);
}

.achievement-notification.hide {
    transform: translateX(400px);
    opacity: 0;
}

.achievement-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.achievement-notification .achievement-icon {
    font-size: 2.5em;
    animation: celebrationBounce 0.6s ease;
}

@keyframes celebrationBounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0) scale(1);
    }
    40% {
        transform: translateY(-10px) scale(1.1);
    }
    60% {
        transform: translateY(-5px) scale(1.05);
    }
}

.achievement-text {
    flex: 1;
}

.achievement-title {
    font-weight: bold;
    font-size: 1.1em;
    margin-bottom: 5px;
    color: #1a1a1a;
}

.achievement-name {
    font-weight: bold;
    color: #2c1810;
    margin-bottom: 3px;
}

.achievement-desc {
    font-size: 0.9em;
    color: #3d2817;
    margin-bottom: 5px;
}

.achievement-reward {
    font-size: 0.8em;
    color: #2c1810;
    font-weight: bold;
}

.achievements-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3500;
}

.achievements-content {
    background: linear-gradient(135deg, #2c1810 0%, #3d2817 100%);
    border: 2px solid #daa520;
    border-radius: 15px;
    padding: 30px;
    max-width: 1000px;
    width: 95%;
    color: #e6d7c3;
    max-height: 90vh;
    overflow-y: auto;
}

.achievements-content h3 {
    color: #daa520;
    text-align: center;
    margin-bottom: 25px;
    font-family: 'Cinzel', serif;
}

.achievements-stats {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;
    padding: 15px;
    background: rgba(76, 205, 196, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(76, 205, 196, 0.3);
}

.achievements-stats .stat {
    color: #4ecdc4;
    font-weight: bold;
    font-size: 1.1em;
}

.achievement-category {
    margin-bottom: 30px;
}

.achievement-category h4 {
    color: #daa520;
    margin-bottom: 15px;
    font-size: 1.2em;
    border-bottom: 1px solid rgba(218, 165, 32, 0.3);
    padding-bottom: 8px;
}

.category-achievements {
    display: grid;
    gap: 15px;
}

.achievement-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    border-radius: 8px;
    background: rgba(218, 165, 32, 0.1);
    border: 1px solid rgba(218, 165, 32, 0.3);
    transition: all 0.3s ease;
}

.achievement-item.unlocked {
    background: rgba(76, 205, 196, 0.15);
    border-color: rgba(76, 205, 196, 0.4);
}

.achievement-item.locked {
    opacity: 0.6;
}

.achievement-item .achievement-icon {
    font-size: 2em;
    min-width: 50px;
    text-align: center;
}

.achievement-info {
    flex: 1;
}

.achievement-item .achievement-name {
    color: #daa520;
    font-weight: bold;
    margin-bottom: 5px;
}

.achievement-item .achievement-description {
    color: #e6d7c3;
    margin-bottom: 5px;
    font-size: 0.9em;
}

.achievement-item .achievement-reward {
    color: #4ecdc4;
    font-size: 0.8em;
}

.achievement-status {
    min-width: 100px;
    text-align: center;
    font-weight: bold;
}

.achievements-footer {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    border-top: 1px solid rgba(218, 165, 32, 0.3);
}

.achievements-footer button {
    background: linear-gradient(135deg, #daa520 0%, #b8941f 100%);
    color: #1a1a1a;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
}

.achievements-footer button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4);
}

@media (max-width: 768px) {
    .achievement-notification {
        right: 10px;
        left: 10px;
        max-width: none;
        transform: translateY(-100px);
    }
    
    .achievement-notification.show {
        transform: translateY(0);
    }
    
    .achievement-notification.hide {
        transform: translateY(-100px);
    }
    
    .achievements-content {
        padding: 20px;
        width: 98%;
    }
    
    .achievements-stats {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
    
    .achievement-item {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
    
    .achievement-status {
        min-width: auto;
    }
}
`;

const achievementStyleSheet = document.createElement('style');
achievementStyleSheet.textContent = achievementCSS;
document.head.appendChild(achievementStyleSheet);

// Initialize achievements
MiniGameAchievements.loadAchievements();

// Function to show mini-game achievements
function showMiniGameAchievements() {
    MiniGameAchievements.showAchievements();
}

// Add actual mini-game implementations
class HieroglyphsGame {
    static symbols = [
        { symbol: "𓀀", meaning: "man", sound: "s" },
        { symbol: "𓁐", meaning: "woman", sound: "st" },
        { symbol: "𓃭", meaning: "lion", sound: "rw" },
        { symbol: "𓄿", meaning: "vulture", sound: "a" },
        { symbol: "𓇳", meaning: "sun", sound: "ra" },
        { symbol: "𓈖", meaning: "water", sound: "n" },
        { symbol: "𓊪", meaning: "stool", sound: "p" },
        { symbol: "𓂋", meaning: "mouth", sound: "r" },
        { symbol: "𓎛", meaning: "bread", sound: "t" },
        { symbol: "𓅱", meaning: "quail chick", sound: "w" },
        { symbol: "𓇯", meaning: "god", sound: "ntr" },
        { symbol: "𓊨", meaning: "anubis", sound: "anpu" },
        { symbol: "𓁹", meaning: "eye", sound: "ir" },
        { symbol: "𓂧", meaning: "hand", sound: "d" },
        { symbol: "𓎡", meaning: "basket", sound: "k" }
    ];
    
    static currentGame = null;
    
    static start() {
        this.currentGame = {
            score: 0,
            round: 1,
            maxRounds: 10,
            correctAnswers: 0,
            startTime: Date.now(),
            currentSymbol: null,
            choices: [],
            questionType: 'meaning' // or 'sound'
        };
        
        this.showGameInterface();
        this.nextQuestion();
    }
    
    static showGameInterface() {
        const modal = document.createElement('div');
        modal.className = 'hieroglyphs-game-modal';
        modal.id = 'hieroglyphsGame';
        
        modal.innerHTML = `
            <div class="hieroglyphs-game-content">
                <div class="game-header">
                    <h3>📜 Hieroglyphs Challenge</h3>
                    <div class="game-stats">
                        <span>Round: <span id="currentRound">1</span>/${this.currentGame.maxRounds}</span>
                        <span>Score: <span id="currentScore">0</span></span>
                        <span>Time: <span id="gameTimer">0</span>s</span>
                    </div>
                </div>
                
                <div class="game-area">
                    <div class="question-section">
                        <div class="symbol-display" id="symbolDisplay"></div>
                        <div class="question-text" id="questionText"></div>
                    </div>
                    
                    <div class="choices-section" id="choicesSection">
                        <!-- Choices will be populated here -->
                    </div>
                    
                    <div class="feedback-section" id="feedbackSection" style="display: none;">
                        <!-- Feedback will be shown here -->
                    </div>
                </div>
                
                <div class="game-footer">
                    <button onclick="HieroglyphsGame.endGame()">End Game</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        this.startTimer();
    }
    
    static nextQuestion() {
        if (this.currentGame.round > this.currentGame.maxRounds) {
            this.endGame();
            return;
        }
        
        // Hide feedback
        document.getElementById('feedbackSection').style.display = 'none';
        
        // Select random symbol
        this.currentGame.currentSymbol = this.symbols[Math.floor(Math.random() * this.symbols.length)];
        
        // Randomly choose question type
        this.currentGame.questionType = Math.random() < 0.5 ? 'meaning' : 'sound';
        
        // Display symbol
        document.getElementById('symbolDisplay').textContent = this.currentGame.currentSymbol.symbol;
        
        // Set question text
        const questionText = this.currentGame.questionType === 'meaning' 
            ? 'What does this hieroglyph mean?' 
            : 'What sound does this hieroglyph make?';
        document.getElementById('questionText').textContent = questionText;
        
        // Generate choices
        this.generateChoices();
        
        // Update round display
        document.getElementById('currentRound').textContent = this.currentGame.round;
    }
    
    static generateChoices() {
        const correctAnswer = this.currentGame.questionType === 'meaning' 
            ? this.currentGame.currentSymbol.meaning 
            : this.currentGame.currentSymbol.sound;
        
        // Get wrong answers
        const wrongAnswers = this.symbols
            .filter(s => s !== this.currentGame.currentSymbol)
            .map(s => this.currentGame.questionType === 'meaning' ? s.meaning : s.sound)
            .filter(answer => answer !== correctAnswer)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
        
        // Combine and shuffle
        this.currentGame.choices = [correctAnswer, ...wrongAnswers].sort(() => 0.5 - Math.random());
        
        // Display choices
        const choicesSection = document.getElementById('choicesSection');
        choicesSection.innerHTML = this.currentGame.choices.map((choice, index) => 
            `<button class="choice-btn" onclick="HieroglyphsGame.selectAnswer('${choice}')">${choice}</button>`
        ).join('');
    }
    
    static selectAnswer(selectedAnswer) {
        const correctAnswer = this.currentGame.questionType === 'meaning' 
            ? this.currentGame.currentSymbol.meaning 
            : this.currentGame.currentSymbol.sound;
        
        const isCorrect = selectedAnswer === correctAnswer;
        
        // Disable all choice buttons
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            } else if (btn.textContent === selectedAnswer && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        // Update score and stats
        if (isCorrect) {
            this.currentGame.correctAnswers++;
            const timeBonus = Math.max(0, 10 - Math.floor((Date.now() - this.currentGame.roundStartTime) / 1000));
            const points = 10 + timeBonus;
            this.currentGame.score += points;
            
            this.showFeedback(`✅ Correct! +${points} points`, 'correct');
        } else {
            this.currentGame.score = Math.max(0, this.currentGame.score - 5);
            this.showFeedback(`❌ Wrong! The correct answer is "${correctAnswer}"`, 'incorrect');
        }
        
        document.getElementById('currentScore').textContent = this.currentGame.score;
        
        // Move to next round after delay
        setTimeout(() => {
            this.currentGame.round++;
            this.currentGame.roundStartTime = Date.now();
            this.nextQuestion();
        }, 2000);
    }
    
    static showFeedback(message, type) {
        const feedbackSection = document.getElementById('feedbackSection');
        feedbackSection.innerHTML = `<div class="feedback ${type}">${message}</div>`;
        feedbackSection.style.display = 'block';
    }
    
    static startTimer() {
        this.currentGame.roundStartTime = Date.now();
        this.timerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.currentGame.startTime) / 1000);
            document.getElementById('gameTimer').textContent = elapsed;
        }, 1000);
    }
    
    static endGame() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        const totalTime = Math.floor((Date.now() - this.currentGame.startTime) / 1000);
        const accuracy = Math.round((this.currentGame.correctAnswers / this.currentGame.maxRounds) * 100);
        
        // Update stats
        MiniGameStats.updateStats('hieroglyphs', this.currentGame.score, accuracy, totalTime);
        
        // Apply rewards
        MiniGameIntegration.integrateMiniGameRewards('hieroglyphs', this.currentGame.score, accuracy, totalTime);
        
        // Check achievements
        const allStats = MiniGameStats.getAllStats();
        MiniGameAchievements.checkAchievements(allStats);
        
        // Show results
        this.showResults(accuracy, totalTime);
        
        // Clean up
        const modal = document.getElementById('hieroglyphsGame');
        if (modal) {
            setTimeout(() => modal.remove(), 5000);
        }
        
        this.currentGame = null;
    }
    
    static showResults(accuracy, totalTime) {
        const modal = document.getElementById('hieroglyphsGame');
        if (!modal) return;
        
        modal.innerHTML = `
            <div class="game-results">
                <h3>📜 Game Complete!</h3>
                <div class="results-stats">
                    <div class="result-item">
                        <span class="result-label">Final Score:</span>
                        <span class="result-value">${this.currentGame.score}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Accuracy:</span>
                        <span class="result-value">${accuracy}%</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Time:</span>
                        <span class="result-value">${totalTime}s</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Correct Answers:</span>
                        <span class="result-value">${this.currentGame.correctAnswers}/${this.currentGame.maxRounds}</span>
                    </div>
                </div>
                
                <div class="performance-message">
                    ${this.getPerformanceMessage(accuracy)}
                </div>
                
                <div class="results-footer">
                    <button onclick="HieroglyphsGame.start()">Play Again</button>
                    <button onclick="showMiniGameSelector()">Back to Games</button>
                    <button onclick="document.getElementById('hieroglyphsGame').remove()">Close</button>
                </div>
            </div>
        `;
    }
    
    static getPerformanceMessage(accuracy) {
        if (accuracy >= 90) return "🌟 Excellent! You're a true hieroglyph master!";
        if (accuracy >= 75) return "👍 Great job! Your knowledge is impressive!";
        if (accuracy >= 60) return "📚 Good work! Keep studying to improve!";
        return "💪 Keep practicing! Every expert was once a beginner!";
    }
}

// Math Game Implementation
class MathGame {
    static numbers = [
        { symbol: "𓏺", value: 1, name: "stroke" },
        { symbol: "𓎆", value: 10, name: "heel bone" },
        { symbol: "𓍢", value: 100, name: "coil of rope" },
        { symbol: "𓆼", value: 1000, name: "lotus flower" },
        { symbol: "𓂭", value: 10000, name: "finger" },
        { symbol: "𓆐", value: 100000, name: "tadpole" },
        { symbol: "𓁨", value: 1000000, name: "god with raised arms" }
    ];
    
    static currentGame = null;
    
    static start() {
        this.currentGame = {
            score: 0,
            round: 1,
            maxRounds: 10,
            correctAnswers: 0,
            startTime: Date.now(),
            currentProblem: null,
            problemType: 'read' // 'read', 'add', 'subtract'
        };
        
        this.showGameInterface();
        this.nextQuestion();
    }
    
    static showGameInterface() {
        const modal = document.createElement('div');
        modal.className = 'math-game-modal';
        modal.id = 'mathGame';
        
        modal.innerHTML = `
            <div class="math-game-content">
                <div class="game-header">
                    <h3>🔢 Egyptian Mathematics</h3>
                    <div class="game-stats">
                        <span>Round: <span id="currentRound">1</span>/${this.currentGame.maxRounds}</span>
                        <span>Score: <span id="currentScore">0</span></span>
                        <span>Time: <span id="gameTimer">0</span>s</span>
                    </div>
                </div>
                
                <div class="game-area">
                    <div class="problem-section">
                        <div class="problem-display" id="problemDisplay"></div>
                        <div class="problem-text" id="problemText"></div>
                    </div>
                    
                    <div class="answer-section">
                        <input type="number" id="answerInput" placeholder="Enter your answer" min="0" max="9999999">
                        <button onclick="MathGame.submitAnswer()">Submit</button>
                    </div>
                    
                    <div class="feedback-section" id="feedbackSection" style="display: none;">
                        <!-- Feedback will be shown here -->
                    </div>
                    
                    <div class="number-reference">
                        <h4>Egyptian Number System Reference:</h4>
                        <div class="reference-grid">
                            ${this.numbers.map(num => 
                                `<div class="ref-item">
                                    <span class="ref-symbol">${num.symbol}</span>
                                    <span class="ref-value">${num.value}</span>
                                </div>`
                            ).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="game-footer">
                    <button onclick="MathGame.endGame()">End Game</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        this.startTimer();
    }
    
    static nextQuestion() {
        if (this.currentGame.round > this.currentGame.maxRounds) {
            this.endGame();
            return;
        }
        
        // Hide feedback
        document.getElementById('feedbackSection').style.display = 'none';
        
        // Clear previous answer
        document.getElementById('answerInput').value = '';
        document.getElementById('answerInput').focus();
        
        // Generate problem based on round
        if (this.currentGame.round <= 3) {
            this.generateReadingProblem();
        } else if (this.currentGame.round <= 6) {
            this.generateAdditionProblem();
        } else {
            this.generateSubtractionProblem();
        }
        
        // Update round display
        document.getElementById('currentRound').textContent = this.currentGame.round;
        this.currentGame.roundStartTime = Date.now();
    }
    
    static generateReadingProblem() {
        // Generate a random number to display in Egyptian numerals
        const targetNumber = Math.floor(Math.random() * 9999) + 1;
        const egyptianRepresentation = this.numberToEgyptian(targetNumber);
        
        this.currentGame.currentProblem = {
            type: 'read',
            answer: targetNumber,
            display: egyptianRepresentation
        };
        
        document.getElementById('problemDisplay').innerHTML = egyptianRepresentation;
        document.getElementById('problemText').textContent = 'What number do these Egyptian numerals represent?';
    }
    
    static generateAdditionProblem() {
        const num1 = Math.floor(Math.random() * 999) + 1;
        const num2 = Math.floor(Math.random() * 999) + 1;
        const answer = num1 + num2;
        
        this.currentGame.currentProblem = {
            type: 'add',
            answer: answer,
            num1: num1,
            num2: num2
        };
        
        document.getElementById('problemDisplay').innerHTML = `
            ${this.numberToEgyptian(num1)} + ${this.numberToEgyptian(num2)} = ?
        `;
        document.getElementById('problemText').textContent = 'Add these Egyptian numbers:';
    }
    
    static generateSubtractionProblem() {
        const num2 = Math.floor(Math.random() * 500) + 1;
        const num1 = num2 + Math.floor(Math.random() * 500) + 1; // Ensure positive result
        const answer = num1 - num2;
        
        this.currentGame.currentProblem = {
            type: 'subtract',
            answer: answer,
            num1: num1,
            num2: num2
        };
        
        document.getElementById('problemDisplay').innerHTML = `
            ${this.numberToEgyptian(num1)} - ${this.numberToEgyptian(num2)} = ?
        `;
        document.getElementById('problemText').textContent = 'Subtract these Egyptian numbers:';
    }
    
    static numberToEgyptian(number) {
        let result = '';
        let remaining = number;
        
        // Process each denomination from largest to smallest
        for (let i = this.numbers.length - 1; i >= 0; i--) {
            const symbol = this.numbers[i];
            const count = Math.floor(remaining / symbol.value);
            
            if (count > 0) {
                result += symbol.symbol.repeat(count) + ' ';
                remaining -= count * symbol.value;
            }
        }
        
        return result.trim() || '𓏺'; // Return at least one stroke if zero
    }
    
    static submitAnswer() {
        const userAnswer = parseInt(document.getElementById('answerInput').value);
        const correctAnswer = this.currentGame.currentProblem.answer;
        
        if (isNaN(userAnswer)) {
            this.showFeedback('Please enter a valid number!', 'warning');
            return;
        }
        
        const isCorrect = userAnswer === correctAnswer;
        
        // Disable input
        document.getElementById('answerInput').disabled = true;
        
        // Update score and stats
        if (isCorrect) {
            this.currentGame.correctAnswers++;
            const timeBonus = Math.max(0, 15 - Math.floor((Date.now() - this.currentGame.roundStartTime) / 1000));
            const points = 15 + timeBonus;
            this.currentGame.score += points;
            
            this.showFeedback(`✅ Correct! +${points} points`, 'correct');
        } else {
            this.currentGame.score = Math.max(0, this.currentGame.score - 5);
            this.showFeedback(`❌ Wrong! The correct answer is ${correctAnswer}`, 'incorrect');
        }
        
        document.getElementById('currentScore').textContent = this.currentGame.score;
        
        // Move to next round after delay
        setTimeout(() => {
            document.getElementById('answerInput').disabled = false;
            this.currentGame.round++;
            this.nextQuestion();
        }, 2500);
    }
    
    static showFeedback(message, type) {
        const feedbackSection = document.getElementById('feedbackSection');
        feedbackSection.innerHTML = `<div class="feedback ${type}">${message}</div>
        feedbackSection.style.display = 'block';
    }
    
    static startTimer() {
        this.currentGame.roundStartTime = Date.now();
        this.timerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.currentGame.startTime) / 1000);
            document.getElementById('gameTimer').textContent = elapsed;
        }, 1000);
    }
    
    static endGame() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        const totalTime = Math.floor((Date.now() - this.currentGame.startTime) / 1000);
        const accuracy = Math.round((this.currentGame.correctAnswers / this.currentGame.maxRounds) * 100);
        
        // Update stats
        MiniGameStats.updateStats('math', this.currentGame.score, accuracy, totalTime);
        
        // Apply rewards
        MiniGameIntegration.integrateMiniGameRewards('math', this.currentGame.score, accuracy, totalTime);
        
        // Check achievements
        const allStats = MiniGameStats.getAllStats();
        MiniGameAchievements.checkAchievements(allStats);
        
        // Show results
        this.showResults(accuracy, totalTime);
        
        // Clean up
        const modal = document.getElementById('mathGame');
        if (modal) {
            setTimeout(() => modal.remove(), 5000);
        }
        
        this.currentGame = null;
    }
    
    static showResults(accuracy, totalTime) {
        const modal = document.getElementById('mathGame');
        if (!modal) return;
        
        modal.innerHTML = `
            <div class="game-results">
                <h3>🔢 Math Challenge Complete!</h3>
                <div class="results-stats">
                    <div class="result-item">
                        <span class="result-label">Final Score:</span>
                        <span class="result-value">${this.currentGame.score}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Accuracy:</span>
                        <span class="result-value">${accuracy}%</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Time:</span>
                        <span class="result-value">${totalTime}s</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Correct Answers:</span>
                        <span class="result-value">${this.currentGame.correctAnswers}/${this.currentGame.maxRounds}</span>
                    </div>
                </div>
                
                <div class="performance-message">
                    ${this.getPerformanceMessage(accuracy)}
                </div>
                
                <div class="results-footer">
                    <button onclick="MathGame.start()">Play Again</button>
                    <button onclick="showMiniGameSelector()">Back to Games</button>
                    <button onclick="document.getElementById('mathGame').remove()">Close</button>
                </div>
            </div>
        `;
    }
    
    static getPerformanceMessage(accuracy) {
        if (accuracy >= 90) return "🌟 Outstanding! You've mastered Egyptian mathematics!";
        if (accuracy >= 75) return "👍 Excellent! Your calculation skills are impressive!";
        if (accuracy >= 60) return "📚 Good work! Keep practicing those ancient numbers!";
        return "💪 Keep studying! Mathematics takes time to master!";
    }
}

// Memory Game Implementation
class MemoryGame {
    static symbols = ["𓀀", "𓁐", "𓃭", "𓄿", "𓇳", "𓈖", "𓊪", "𓂋", "𓎛", "𓅱", "𓇯", "𓊨", "𓁹", "𓂧", "𓎡", "⚱️", "🏺", "👑"];
    static currentGame = null;
    
    static start() {
        this.currentGame = {
            score: 0,
            level: 1,
            maxLevel: 8,
            sequence: [],
            playerSequence: [],
            showingSequence: false,
            startTime: Date.now(),
            correctSequences: 0
        };
        
        this.showGameInterface();
        this.startLevel();
    }
    
    static showGameInterface() {
        const modal = document.createElement('div');
        modal.className = 'memory-game-modal';
        modal.id = 'memoryGame';
        
        modal.innerHTML = `
            <div class="memory-game-content">
                <div class="game-header">
                    <h3>🧠 Memory Palace Challenge</h3>
                    <div class="game-stats">
                        <span>Level: <span id="currentLevel">1</span>/${this.currentGame.maxLevel}</span>
                        <span>Score: <span id="currentScore">0</span></span>
                        <span>Time: <span id="gameTimer">0</span>s</span>
                    </div>
                </div>
                
                <div class="game-area">
                    <div class="instructions" id="instructions">
                        Watch the sequence carefully, then repeat it!
                    </div>
                    
                    <div class="memory-grid" id="memoryGrid">
                        <!-- Grid will be populated here -->
                    </div>
                    
                    <div class="game-controls" id="gameControls">
                        <button id="startButton" onclick="MemoryGame.showSequence()">Start Level</button>
                        <button id="resetButton" onclick="MemoryGame.resetLevel()" style="display: none;">Reset Level</button>
                    </div>
                    
                    <div class="feedback-section" id="feedbackSection" style="display: none;">
                        <!-- Feedback will be shown here -->
                    </div>
                </div>
                
                <div class="game-footer">
                    <button onclick="MemoryGame.endGame()">End Game</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        this.createGrid();
        this.startTimer();
    }
    
    static createGrid() {
        const grid = document.getElementById('memoryGrid');
        const gridSize = 4; // 4x4 grid
        
        grid.innerHTML = '';
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        
        for (let i = 0; i < gridSize * gridSize; i++) {
            const cell = document.createElement('div');
            cell.className = 'memory-cell';
            cell.dataset.index = i;
            cell.onclick = () => this.cellClicked(i);
            grid.appendChild(cell);
        }
    }
    
    static startLevel() {
        // Generate sequence for current level (level + 2 symbols)
        const sequenceLength = this.currentGame.level + 2;
        this.currentGame.sequence = [];
        this.currentGame.playerSequence = [];
        
        for (let i = 0; i < sequenceLength; i++) {
            const randomIndex = Math.floor(Math.random() * 16); // 4x4 grid
            this.currentGame.sequence.push(randomIndex);
        }
        
        document.getElementById('currentLevel').textContent = this.currentGame.level;
        document.getElementById('instructions').textContent = `Level ${this.currentGame.level}: Watch the sequence of ${sequenceLength} symbols!`;
        
        // Reset grid
        document.querySelectorAll('.memory-cell').forEach(cell => {
            cell.classList.remove('active', 'correct', 'incorrect');
            cell.textContent = '';
        });
        
        document.getElementById('startButton').style.display = 'inline-block';
        document.getElementById('resetButton').style.display = 'none';
    }
    
    static showSequence() {
        this.currentGame.showingSequence = true;
        document.getElementById('startButton').style.display = 'none';
        document.getElementById('instructions').textContent = 'Watch carefully...';
        
        // Disable clicking during sequence
        document.querySelectorAll('.memory-cell').forEach(cell => {
            cell.style.pointerEvents = 'none';
        });
        
        this.playSequenceStep(0);
    }
    
    static playSequenceStep(step) {
        if (step >= this.currentGame.sequence.length) {
            // Sequence complete, allow player input
            this.currentGame.showingSequence = false;
            document.getElementById('instructions').textContent = 'Now repeat the sequence!';
            document.getElementById('resetButton').style.display = 'inline-block';
            
            // Enable clicking
            document.querySelectorAll('.memory-cell').forEach(cell => {
                cell.style.pointerEvents = 'auto';
            });
            return;
        }
        
        const cellIndex = this.currentGame.sequence[step];
        const cell = document.querySelector(`[data-index="${cellIndex}"]`);
        const symbol = this.symbols[step % this.symbols.length];
        
        // Show symbol
        cell.textContent = symbol;
        cell.classList.add('active');
        
        setTimeout(() => {
            cell.classList.remove('active');
            setTimeout(() => {
                this.playSequenceStep(step + 1);
            }, 300);
        }, 800);
    }
    
    static cellClicked(index) {
        if (this.currentGame.showingSequence) return;
        
        const cell = document.querySelector(`[data-index="${index}"]`);
        const stepIndex = this.currentGame.playerSequence.length;
        const expectedIndex = this.currentGame.sequence[stepIndex];
        
        this.currentGame.playerSequence.push(index);
        
        // Show symbol
        const symbol = this.symbols[stepIndex % this.symbols.length];
        cell.textContent = symbol;
        
        if (index === expectedIndex) {
            // Correct
            cell.classList.add('correct');
            
            if (this.currentGame.playerSequence.length === this.currentGame.sequence.length) {
                // Level complete!
                this.levelComplete();
            }
        } else {
            // Incorrect
            cell.classList.add('incorrect');
            this.levelFailed();
        }
    }
    
    static levelComplete() {
        this.currentGame.correctSequences++;
        const levelBonus = this.currentGame.level * 10;
        const timeBonus = Math.max(0, 30 - Math.floor((Date.now() - this.currentGame.levelStartTime) / 1000));
        const points = 50 + levelBonus + timeBonus;
        this.currentGame.score += points;
        
        document.getElementById('currentScore').textContent = this.currentGame.score;
        
        this.showFeedback(`✅ Level ${this.currentGame.level} Complete! +${points} points`, 'correct');
        
        // Disable clicking
        document.querySelectorAll('.memory-cell').forEach(cell => {
            cell.style.pointerEvents = 'none';
        });
        
        setTimeout(() => {
            if (this.currentGame.level < this.currentGame.maxLevel) {
                this.currentGame.level++;
                this.currentGame.levelStartTime = Date.now();
                this.startLevel();
            } else {
                this.endGame();
            }
        }, 2000);
    }
    
    static levelFailed() {
        this.currentGame.score = Math.max(0, this.currentGame.score - 10);
        document.getElementById('currentScore').textContent = this.currentGame.score;
        
        this.showFeedback(`❌ Wrong sequence! Try again. -10 points`, 'incorrect');
        
        // Disable clicking
        document.querySelectorAll('.memory-cell').forEach(cell => {
            cell.style.pointerEvents = 'none';
        });
        
        setTimeout(() => {
            this.resetLevel();
        }, 2000);
    }
    
    static resetLevel() {
        this.currentGame.playerSequence = [];
        this.currentGame.levelStartTime = Date.now();
        
        // Clear grid
        document.querySelectorAll('.memory-cell').forEach(cell => {
            cell.classList.remove('active', 'correct', 'incorrect');
            cell.textContent = '';
            cell.style.pointerEvents = 'auto';
        });
        
        document.getElementById('feedbackSection').style.display = 'none';
        document.getElementById('instructions').textContent = `Level ${this.currentGame.level}: Ready to try again?`;
        document.getElementById('startButton').style.display = 'inline-block';
        document.getElementById('resetButton').style.display = 'none';
    }
    
    static showFeedback(message, type) {
        const feedbackSection = document.getElementById('feedbackSection');
        feedbackSection.innerHTML = `<div class="feedback ${type}">${message}</div>`;
        feedbackSection.style.display = 'block';
    }
    
    static startTimer() {
        this.currentGame.levelStartTime = Date.now();
        this.timerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.currentGame.startTime) / 1000);
            document.getElementById('gameTimer').textContent = elapsed;
        }, 1000);
    }
    
    static endGame() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        
        const totalTime = Math.floor((Date.now() - this.currentGame.startTime) / 1000);
        const accuracy = Math.round((this.currentGame.correctSequences / this.currentGame.level) * 100);
        
        // Update stats
        MiniGameStats.updateStats('memory', this.currentGame.score, accuracy, totalTime);
        
        // Apply rewards
        MiniGameIntegration.integrateMiniGameRewards('memory', this.currentGame.score, accuracy, totalTime);
        
        // Check achievements
        const allStats = MiniGameStats.getAllStats();
        MiniGameAchievements.checkAchievements(allStats);
        
        // Show results
        this.showResults(accuracy, totalTime);
        
        // Clean up
        const modal = document.getElementById('memoryGame');
        if (modal) {
            setTimeout(() => modal.remove(), 5000);
        }
        
        this.currentGame = null;
    }
    
    static showResults(accuracy, totalTime) {
        const modal = document.getElementById('memoryGame');
        if (!modal) return;
        
        modal.innerHTML = `
            <div class="game-results">
                <h3>🧠 Memory Challenge Complete!</h3>
                <div class="results-stats">
                    <div class="result-item">
                        <span class="result-label">Final Score:</span>
                        <span class="result-value">${this.currentGame.score}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Levels Completed:</span>
                        <span class="result-value">${this.currentGame.correctSequences}/${this.currentGame.maxLevel}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Accuracy:</span>
                        <span class="result-value">${accuracy}%</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Time:</span>
                        <span class="result-value">${totalTime}s</span>
                    </div>
                </div>
                
                <div class="performance-message">
                    ${this.getPerformanceMessage(accuracy)}
                </div>
                
                <div class="results-footer">
                    <button onclick="MemoryGame.start()">Play Again</button>
                    <button onclick="showMiniGameSelector()">Back to Games</button>
                    <button onclick="document.getElementById('memoryGame').remove()">Close</button>
                </div>
            </div>
        `;
    }
    
    static getPerformanceMessage(accuracy) {
        if (accuracy >= 90) return "🌟 Incredible memory! You'd make an excellent scribe!";
        if (accuracy >= 75) return "👍 Great memory skills! Very impressive!";
        if (accuracy >= 60) return "📚 Good memory work! Keep training your mind!";
        return "💪 Memory improves with practice! Keep trying!";
    }
}

// Quiz Game Implementation
class QuizGame {
    static questions = [
        {
            question: "What was the most important river in ancient Egypt?",
            options: ["Nile", "Euphrates", "Tigris", "Jordan"],
            correct: 0,
            category: "geography"
        },
        {
            question: "Which pharaoh built the Great Pyramid of Giza?",
            options: ["Tutankhamun", "Khufu", "Ramesses II", "Cleopatra"],
            correct: 1,
            category: "pharaohs"
        },
        {
            question: "What material did Egyptians use to make paper?",
            options: ["Cotton", "Papyrus", "Silk", "Parchment"],
            correct: 1,
            category: "technology"
        },
        {
            question: "How long did the mummification process typically take?",
            options: ["7 days", "30 days", "70 days", "100 days"],
            correct: 2,
            category: "religion"
        },
        {
            question: "What does the hieroglyph 𓇳 represent?",
            options: ["Moon", "Star", "Sun/Ra", "Water"],
            correct: 2,
            category: "hieroglyphs"
        },
        {
            question: "Which god was associated with mummification?",
            options: ["Ra", "Anubis", "Horus", "Thoth"],
            correct: 1,
            category: "religion"
        },
        {
            question: "What was the Egyptian number system based on?",
            options: ["Base 12", "Base 8", "Base 10", "Base 20"],
            correct: 2,
            category: "mathematics"
        },
        {
            question: "What did Egyptians call the afterlife?",
            options: ["Duat", "Aaru", "Netherworld", "All of these"],
            correct: 3,
            category: "religion"
        },
        {
            question: "Which metal was most valuable in ancient Egypt?",
            options: ["Silver", "Copper", "Gold", "Iron"],
            correct: 2,
            category: "economy"
        },
        {
            question: "What was the primary purpose of pyramids?",
            options: ["Temples", "Tombs", "Observatories", "Fortresses"],
            correct: 1,
            category: "architecture"
        },
        {
            question: "Which season was the Nile flood called?",
            options: ["Akhet", "Peret", "Shemu", "Inundation"],
            correct: 0,
            category: "agriculture"
        },
        {
            question: "What does 'pharaoh' literally mean?",
            options: ["King", "God", "Great House", "Ruler"],
            correct: 2,
            category: "pharaohs"
        },
        {
            question: "Which Egyptian goddess was associated with magic?",
            options: ["Hathor", "Isis", "Nephthys", "Bastet"],
            correct: 1,
            category: "religion"
        },
        {
            question: "What was the Egyptian writing system called?",
            options: ["Cuneiform", "Hieroglyphs", "Linear A", "Demotic"],
            correct: 1,
            category: "hieroglyphs"
        },
        {
            question: "Which organ was left in the body during mummification?",
            options: ["Brain", "Liver", "Heart", "Lungs"],
            correct: 2,
            category: "religion"
        }
    ];
    
    static currentGame = null;
    
    static start() {
        this.currentGame = {
            score: 0,
            question: 1,
            maxQuestions: 10,
            correctAnswers: 0,
            startTime: Date.now(),
            currentQuestion: null,
            usedQuestions: [],
            timePerQuestion: 30
        };
        
        this.showGameInterface();
        this.nextQuestion();
    }
    
    static showGameInterface() {
        const modal = document.createElement('div');
        modal.className = 'quiz-game-modal';
        modal.id = 'quizGame';
        
        modal.innerHTML = `
            <div class="quiz-game-content">
                <div class="game-header">
                    <h3>🎓 Egyptian Knowledge Quiz</h3>
                    <div class="game-stats">
                        <span>Question: <span id="currentQuestion">1</span>/${this.currentGame.maxQuestions}</span>
                        <span>Score: <span id="currentScore">0</span></span>
                        <span>Time: <span id="questionTimer">${this.currentGame.timePerQuestion}</span>s</span>
                    </div>
                </div>
                
                <div class="game-area">
                    <div class="question-section">
                        <div class="question-category" id="questionCategory"></div>
                        <div class="question-text" id="questionText"></div>
                    </div>
                    
                    <div class="options-section" id="optionsSection">
                        <!-- Options will be populated here -->
                    </div>
                    
                    <div class="feedback-section" id="feedbackSection" style="display: none;">
                        <!-- Feedback will be shown here -->
                    </div>
                </div>
                
                <div class="game-footer">
                    <button onclick="QuizGame.endGame()">End Game</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    static nextQuestion() {
        if (this.currentGame.question > this.currentGame.maxQuestions) {
            this.endGame();
            return;
        }
        
        // Hide feedback
        document.getElementById('feedbackSection').style.display = 'none';
        
        // Select random unused question
        const availableQuestions = this.questions.filter((_, index) => 
            !this.currentGame.usedQuestions.includes(index)
        );
        
        if (availableQuestions.length === 0) {
            // Reset if all questions used
            this.currentGame.usedQuestions = [];
        }
        
        const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
        const questionIndex = this.questions.indexOf(randomQuestion);
        this.currentGame.usedQuestions.push(questionIndex);
        this.currentGame.currentQuestion = randomQuestion;
        
        // Display question
        document.getElementById('questionCategory').textContent = `Category: ${randomQuestion.category.toUpperCase()}`;
        document.getElementById('questionText').textContent = randomQuestion.question;
        
        // Display options
        const optionsSection = document.getElementById('optionsSection');
        optionsSection.innerHTML = randomQuestion.options.map((option, index) => 
            `<button class="quiz-option" onclick="QuizGame.selectAnswer(${index})">${option}</button>`
        ).join('');
        
        // Update question number
        document.getElementById('currentQuestion').textContent = this.currentGame.question;
        
        // Start question timer
        this.startQuestionTimer();
    }
    
    static startQuestionTimer() {
        this.currentGame.questionStartTime = Date.now();
        this.currentGame.timeLeft = this.currentGame.timePerQuestion;
        
        this.questionTimerInterval = setInterval(() => {
            this.currentGame.timeLeft--;
            document.getElementById('questionTimer').textContent = this.currentGame.timeLeft;
            
            if (this.currentGame.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }
    
    static selectAnswer(selectedIndex) {
        if (this.questionTimerInterval) {
            clearInterval(this.questionTimerInterval);
        }
        
        const correctIndex = this.currentGame.currentQuestion.correct;
        const isCorrect = selectedIndex === correctIndex;
        
        // Disable all options
        document.querySelectorAll('.quiz-option').forEach((btn, index) => {
            btn.disabled = true;
            if (index === correctIndex) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        // Update score and stats
        if (isCorrect) {
            this.currentGame.correctAnswers++;
            const timeBonus = Math.max(0, this.currentGame.timeLeft);
            const points = 20 + timeBonus;
            this.currentGame.score += points;
            
            this.showFeedback(`✅ Correct! +${points} points (${timeBonus} time bonus)`, 'correct');
        } else {
            this.currentGame.score = Math.max(0, this.currentGame.score - 5);
            const correctAnswer = this.currentGame.currentQuestion.options[correctIndex];
            this.showFeedback(`❌ Wrong! The correct answer is "${correctAnswer}"`, 'incorrect');
        }
        
        document.getElementById('currentScore').textContent = this.currentGame.score;
        
        // Move to next question after delay
        setTimeout(() => {
            this.currentGame.question++;
            this.nextQuestion();
        }, 3000);
    }
    
    static timeUp() {
        if (this.questionTimerInterval) {
            clearInterval(this.questionTimerInterval);
        }
        
        const correctIndex = this.currentGame.currentQuestion.correct;
        const correctAnswer = this.currentGame.currentQuestion.options[correctIndex];
        
        // Disable all options and show correct answer
        document.querySelectorAll('.quiz-option').forEach((btn, index) => {
            btn.disabled = true;
            if (index === correctIndex) {
                btn.classList.add('correct');
            }
        });
        
        this.currentGame.score = Math.max(0, this.currentGame.score - 10);
        document.getElementById('currentScore').textContent = this.currentGame.score;
        
        this.showFeedback(`⏰ Time's up! The correct answer was "${correctAnswer}"`, 'timeout');
        
        // Move to next question after delay
        setTimeout(() => {
            this.currentGame.question++;
            this.nextQuestion();
        }, 3000);
    }
    
    static showFeedback(message, type) {
        const feedbackSection = document.getElementById('feedbackSection');
        feedbackSection.innerHTML = `<div class="feedback ${type}">${message}</div>`;
        feedbackSection.style.display = 'block';
    }
    
    static endGame() {
        if (this.questionTimerInterval) {
            clearInterval(this.questionTimerInterval);
        }
        
        const totalTime = Math.floor((Date.now() - this.currentGame.startTime) / 1000);
        const accuracy = Math.round((this.currentGame.correctAnswers / this.currentGame.maxQuestions) * 100);
        
        // Update stats
        MiniGameStats.updateStats('quiz', this.currentGame.score, accuracy, totalTime);
        
        // Apply rewards
        MiniGameIntegration.integrateMiniGameRewards('quiz', this.currentGame.score, accuracy, totalTime);
        
        // Check achievements
        const allStats = MiniGameStats.getAllStats();
        MiniGameAchievements.checkAchievements(allStats);
        
        // Show results
        this.showResults(accuracy, totalTime);
        
        // Clean up
        const modal = document.getElementById('quizGame');
        if (modal) {
            setTimeout(() => modal.remove(), 5000);
        }
        
        this.currentGame = null;
    }
    
    static showResults(accuracy, totalTime) {
        const modal = document.getElementById('quizGame');
        if (!modal) return;
        
        modal.innerHTML = `
            <div class="game-results">
                <h3>🎓 Quiz Complete!</h3>
                <div class="results-stats">
                    <div class="result-item">
                        <span class="result-label">Final Score:</span>
                        <span class="result-value">${this.currentGame.score}</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Accuracy:</span>
                        <span class="result-value">${accuracy}%</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Time:</span>
                        <span class="result-value">${totalTime}s</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Correct Answers:</span>
                        <span class="result-value">${this.currentGame.correctAnswers}/${this.currentGame.maxQuestions}</span>
                    </div>
                </div>
                
                <div class="performance-message">
                    ${this.getPerformanceMessage(accuracy)}
                </div>
                
                <div class="results-footer">
                    <button onclick="QuizGame.start()">Play Again</button>
                    <button onclick="showMiniGameSelector()">Back to Games</button>
                    <button onclick="document.getElementById('quizGame').remove()">Close</button>
                </div>
            </div>
        `;
    }
    
    static getPerformanceMessage(accuracy) {
        if (accuracy >= 90) return "🌟 Exceptional! You're a true scholar of Egypt!";
        if (accuracy >= 75) return "👍 Excellent knowledge! Very impressive!";
        if (accuracy >= 60) return "📚 Good work! Keep studying ancient Egypt!";
        return "💪 Keep learning! Knowledge grows with practice!";
    }
}

// Add comprehensive CSS for all mini-games
const miniGameCSS = `
/* Common Mini-Game Styles */
.hieroglyphs-game-modal,
.math-game-modal,
.memory-game-modal,
.quiz-game




