import { getSavedWords } from "./localStorage.js"
import { saveWords } from "./localStorage.js"

const wordList = document.getElementById('wordList')
const addButton = document.querySelector('.button-inner')
const takeWordButton = document.querySelector('.take-word')
const randomWordDisplay = document.getElementById('randomWordDisplay')
let wordInput = document.querySelector('.input-inner')

const loadWords = () => {
    const savedWords = getSavedWords()
    wordList.innerHTML = ''

    savedWords.forEach((word, index) => {
        const newListItem = document.createElement('div')
        newListItem.classList.add('word-item')
        newListItem.textContent = word

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Удалить'
        deleteButton.classList.add('delete-btn')
        deleteButton.addEventListener('click', () => deleteWord(index))

        wordList.appendChild(newListItem)
        newListItem.appendChild(deleteButton)
    })
}

const addWord = () => {
		let word = wordInput.value.trim()

		if (word !== '') {
			const savedWords = getSavedWords()

			savedWords.push(word)
			saveWords(savedWords)

			loadWords()
			wordInput.value = ''
		}
 }

const deleteWord = (index) => {
    const savedWords = getSavedWords()
    savedWords.splice(index, 1)

    saveWords(savedWords)
    loadWords()
}

const takeWord = () => {
    const savedWords = getSavedWords()
    if (savedWords.length > 0) {
        const randomIndex = Math.floor(Math.random() * savedWords.length)
        const randomWord = savedWords[randomIndex]

        randomWordDisplay.textContent = randomWord
    }
}

window.onload = () => {
    loadWords()
    addButton.addEventListener('click', addWord)
    takeWordButton.addEventListener('click', takeWord)
}



