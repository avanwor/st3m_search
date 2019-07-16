const AutoCorrect = (str) => {
    //remove non-letter characters
    let lettersOnly = str.replace(/[^a-z]/gi, '')

    //replace correct vowel by running the input against the unix dictionary and checking vowels
    //try cet to cat (cot is in dictionary) - will get more complicated

    //check if alphaNumOnly is in dictionary

    return lettersOnly
};

export default AutoCorrect;