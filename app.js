function getTokens(rawString) {
    // NB: `.filter(Boolean)` removes any falsy items (SPACE ,!.";():-\n) from an array
    return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}


function mostFrequentWord(text) {
    console.log("tokenized text = ", text);
    var words = getTokens(text);

    //this is an empty array set up so so that the alike words can be placed in their arrays to help count them.
    var wordFrequencies = {};

    //the varaible statements are setting up the function to count words by value
    for (var i = 0; i <= words.length; i++) {

        //if statement is looking at words and finds alike words, it will group them together, using the word as the key.
        //It will +1 to the object if it finds another like word.
        if (words[i] in wordFrequencies) {
            wordFrequencies[words[i]]++;
            //if new words are found, they will be placed in a new array.
        } else {
            wordFrequencies[words[i]] = 1;
        }
    }

    //new variables est. after the program looks for
    //and is "holding on to" the word whose value is registered most often as it scans through the text. It either
    //holds on to a word if it is most frequently used or releases it for a new word if
    //the new word becomes the most frequently used.

    //variable set to look at they keys (words) and objects (number of times word is found)
    var currentMaxKey = Object.keys(wordFrequencies)[0];
    var currentMaxCount = wordFrequencies[currentMaxKey];

    //goes through the list of arrays and makes a "champion" of the most-used word as it checks each one.
    for (var word in wordFrequencies) {
        if (wordFrequencies[word] > currentMaxCount) {
            currentMaxKey = word;
            currentMaxCount = wordFrequencies[word];
        }
    }
    return currentMaxKey;
}



(function testMostFrequentWord() {
    var spaceOddityText = 'Ground Control to Major Tom\n \
Ground Control to Major Tom\n \
Take your protein pills and put your helmet on\n \
Ground Control to Major Tom (ten, nine, eight, seven, six)\n \
Commencing countdown, engines on (five, four, three)\n \
Check ignition and may God\'s love be with you (two, one, liftoff)\n \
\n \
This is Ground Control to Major Tom\n \
You\'ve really made the grade\n \
And the papers want to know whose shirts you wear\n \
Now it\'s time to leave the capsule if you dare\n \
"This is Major Tom to Ground Control\n \
I\'m stepping through the door\n \
And I\'m floating in a most peculiar way\n \
And the stars look very different today\n \
For here\n \
Am I sitting in a tin can\n \
Far above the world\n \
Planet Earth is blue\n \
And there\'s nothing I can do\n \
\n \
Though I\'m past one hundred thousand miles\n \
I\'m feeling very still\n \
And I think my spaceship knows which way to go\n \
Tell my wife I love her very much she knows\n \
Ground Control to Major Tom\n \
Your circuit\'s dead, there\'s something wrong\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you \"Here am I floating \'round my tin can\n \
Far above the moon\n \
Planet Earth is blue\n \
And there\'s nothing I can do\"';

    var expected = 'major';
    var actual = mostFrequentWord(getTokens(spaceOddityText));
    if (expected === actual) {
        console.log('SUCCESS: `mostFrequentWord` is working');
    } else {
        console.log('FAILURE: `mostFrequentWord` is not working');
    }
})();
