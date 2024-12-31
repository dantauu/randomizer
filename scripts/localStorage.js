export const getSavedWords = () => {
    const savedWords = localStorage.getItem('words')
    if (!savedWords) {
        return []
    } 

    try {
        const parsedWords = JSON.parse(savedWords)
            if (Array.isArray(parsedWords)) {
                return parsedWords
            }
    } catch(err) {
        console.log('err:', err)
        return []
    }
}

export const saveWords = (words) => {
    if (Array.isArray(words)) {
        localStorage.setItem('words', JSON.stringify(words))
    } 
}
