// Create empty arrays to store the text content of each <h2> element from different panels
let guiltTexts = [];
let reconciliationTexts = [];
let prayerTexts = [];

// Select all panel elements
let panels = document.querySelectorAll('.panel');

// Function to collect <h2> texts from a given panel
function collectH2Texts(panel) {
    let h2Texts = [];
    let h2Elements = panel.querySelectorAll('h2');
    h2Elements.forEach(function(h2) {
        h2Texts.push(h2.textContent);
    });
    return h2Texts;
}

// Assuming the panels are in a specific order, we can collect the texts accordingly
if (panels.length > 0) {
    guiltTexts = collectH2Texts(panels[0]);
}
if (panels.length > 1) {
    reconciliationTexts = collectH2Texts(panels[1]);
}
if (panels.length > 2) {
    prayerTexts = collectH2Texts(panels[2]);
}

const startDate = new Date('2024-01-01');
const today = new Date();
const diffInMilliseconds = today - startDate;
const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

const guiltRemainder = diffInDays % guiltTexts.length;
const reconciliationRemainder = diffInDays % reconciliationTexts.length;
const prayerRemainder = diffInDays % prayerTexts.length;

guiltScripture = document.getElementById('guiltScripture');
reconciliationScripture = document.getElementById('reconciliationScripture');
prayerScripture = document.getElementById('prayerScripture');

guiltScripture.innerHTML = guiltTexts[guiltRemainder];
reconciliationScripture.innerHTML = reconciliationTexts[reconciliationRemainder];
prayerScripture.innerHTML = prayerTexts[prayerRemainder];