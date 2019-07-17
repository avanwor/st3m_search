const findWord = (input, dict) => {

    const vowels = {
        a:1,
        e:1,
        i:1,
        o:1,
        u:1
    }

    let possibleWords = {}

    //anyway to keep one vowel variable at a time (assume only one typo, then two, then three), then search on those sets?
    const recurseWord = (word, i=0) => {
        if (i >= word.length) {
            return
        }
        if (vowels[word[i]]) {
            for (let key in vowels) {
                let changedVowel = word.substring(0,i) + key + word.substring(i+1)
                //any more logical way to prevent duplicates? to avoid running indexOf (increasing time) i set possibleWords from an array to object. 
                if (!possibleWords[changedVowel]) possibleWords[changedVowel] = 1
                recurseWord(changedVowel,i+1)

            }
            //++limit should be set on client side, (perhaps on server side as well to avoid overloading server)
        } else if (i < 50) {
            recurseWord(word,i+1)
        }
    }

    recurseWord(input)

    //++can I just put the dictionary into an object?
    for (let word in possibleWords) {
        if (dict.indexOf(word) !== -1) {
            return word
        }
    }

    return null
}

exports.findWord = findWord
