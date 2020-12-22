const nouns = [ "cows", "beer", "fish", "tacos", "books", "feet", "music", "community", "cats", "paws"];
const verbs = [ "milked", "jumped", "ran", "slept", "fell", "screamed", "clawed"];
const adjectives = [ "funny", "scared", "happy", "suspicious", "screaming", "evil", "frisky"];
const articles = ["The", "A"]; // "An" can be added later when vowel-starting nouns are added to list.
const prepositions = ["on", "over", "around", "near", "above", "into"]

function wordGenerator() {
    let firstSentence = " ";

        let firstArticle = articles[Math.floor(Math.random() * (articles.length - 0))];  
        let secondArticle = articles[Math.floor(Math.random() * (articles.length - 0))];
        let firstNoun = nouns[Math.floor(Math.random() * (nouns.length - 0))];
        let secondNoun = nouns[Math.floor(Math.random() * (nouns.length - 0))];
        let firstVerb = verbs[Math.floor(Math.random() * (verbs.length - 0))];
        let firstAdjective = adjectives[Math.floor(Math.random() * (adjectives.length - 0))];
        let secondAdjective = adjectives[Math.floor(Math.random() * (adjectives.length - 0))];
        let firstPreposition = prepositions[Math.floor(Math.random() * (prepositions.length - 0))];

        if (firstNoun.charAt(firstNoun.length-1) === 's' || firstNoun === "feet") {
            firstArticle = articles[0];
        }

        if (secondNoun.charAt(secondNoun.length-1) === 's' || secondNoun === "feet") {
            secondArticle = articles[0];
        }

        firstSentence += `${firstArticle} ${firstNoun} ${firstVerb} ${firstPreposition} ${secondArticle.toLowerCase()} ${secondNoun}.`;
        console.log(firstSentence);
}

const finalSentence = wordGenerator();
// console.log(finalSentence);

// Sentence = article noun verb preposition article noun.