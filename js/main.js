// Variaveis e seleção de elementos

const apiKey = '1ed3494c7eea55c3a91bcdf2e084ba81'
const apiCountryURL = 'https://www.countryflagicons.com/FLAT/64/'

const cityInput = document.querySelector('#city-input')
const searchBtn = document.querySelector('#search')

const cityElement = document.querySelector('city-input')
const tempElement = document.querySelector('temperature span')
const descElement = document.querySelector('description')
const weatherIconElement = document.querySelector('country')
const countryElement = document.querySelector('weather-icon')
const umidityElement = document.querySelector('umidity span')
const windElement = document.querySelector('wind span')

// Funções

const getWeatherData = async(city) => {
    const apiWeatherURL= `https://api.openweathermap.org/data/2.5/weather?q=${city}&unity=metric&appid=${apiKey}&lang=pt-br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    console.log(data)
}

const showWeatherData = (city) => {
    getWeatherData(city)
}

// Eventos

searchBtn.addEventListener('click', () => {
    const city = cityInput.value

    showWeatherData(city)
})