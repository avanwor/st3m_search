//note: this function needs further optimization 
const findWord = (input, dict) => {

    const vowels = {
        a:1,
        e:1,
        i:1,
        o:1,
        u:1
    }

    let possibleWords = {}

    //possible upgrade when time allows - fib tabulation may be faster than recursion
    const recurseWord = (word, i=0) => {
        //limit the function to handle 5 vowels (5^5) to stay within acceptable response time
        if (Object.keys(possibleWords).length > 3125) {
            i = word.length + 1
        }
        if (i >= word.length) return
        if (vowels[word[i]]) {
            for (let key in vowels) {
                let changedVowel = word.substring(0,i) + key + word.substring(i+1)
                //possible upgrade when time allows - think of more logical way to prevent duplicates
                if (!possibleWords[changedVowel]) possibleWords[changedVowel] = 1
                recurseWord(changedVowel,i+1)
            }
        } else {
            recurseWord(word,i+1)
        }
    }

    recurseWord(input)

    for (let word in possibleWords) {
        //This needs to be a binary search (since dict is sorted). Also could load dict into postgres and take advantage of btree index
        //Also, with more time, look into workers that could run multiple searches at same time. 
        if (dict.indexOf(word) !== -1) {
            return word
        }
    }

    return null
}

exports.findWord = findWord
