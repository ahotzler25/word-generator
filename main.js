// Preposition logic needed
// If I can turn this into MadLips style on webpage, paying close attention to the upcoming prepositions will be important. They seem to make or break a sentence.

const nouns = [ "cows", "beer", "fish", "tacos", "books", "feet", "music", "idiot", "toaster", "shenanigans", "malarkey", "community", "cats", "paws", "boot-scootin' boogie", "chicanery", "dragon", "poop", "karate", "hadooken", "knife", "sandwich"];
const verbs = [ "milked", "jumped", "ran", "slept", "fell", "bumfuzzled", "screamed", "clawed", "trap", "harass", "harassed", "danced", "did", "shred", "drank", "taunted"];
const adjectives = [ "funny", "scared", "happy", "suspicious", "screaming", "evil", "frisky", "sacred", "dead", "metal", "wild", "twisted", "idiotic", "glorious", "gentle", "hot", "huge", "juicy", "little"];
const articles = ["The", "A"]; // "An" can be added later when vowel-starting nouns are added to list.
const prepositions = ["on", "over", "around", "near", "above", "into"];
const adverbs = ["playfully", "quickly", "quietly", "rudely", "patiently", "terribly", "suspiciously", "blissfully", "visciously", "violently", "quizzically", "innocently"];

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
        let firstAdverb = adverbs[Math.floor(Math.random() * (adverbs.length - 0))];
        let SecondAdverb = adverbs[Math.floor(Math.random() * (adverbs.length - 0))];

        if (firstNoun.charAt(firstNoun.length-1) === 's' || firstNoun === "feet") {
            firstArticle = articles[0];
        }

        if (secondNoun.charAt(secondNoun.length-1) === 's' || secondNoun === "feet") {
            secondArticle = articles[0];
        }

        firstSentence += `${firstArticle} ${firstAdjective} ${firstNoun} ${firstAdverb} ${firstVerb} ${firstPreposition} ${secondArticle.toLowerCase()} ${secondAdjective} ${secondNoun}.`;
        document.getElementById("sentence-creation").innerHTML = firstSentence;
}

const finalSentence = wordGenerator();
//document.getElementById("sentence-creation").innerHTML = finalSentence;
// console.log(finalSentence);

// Sentence = article noun verb preposition article noun.