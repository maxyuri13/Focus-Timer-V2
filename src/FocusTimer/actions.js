import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  console.log(toggleRunning)
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function increaseTime() {
  const currentMinutes = parseInt(el.minutes.textContent, 10)
  const newMinutes = currentMinutes + 5
  if (newMinutes <= 60) {
    el.minutes.textContent = String(newMinutes).padStart(2, "0")
    state.minutes = el.minutes.textContent
  }
  sounds.buttonPressAudio.play()
}

export function reduceTime() {
  el.minutes.textContent = String(state.minutes - 5).padStart(2, "0")
  if (el.minutes.textContent <= 0 ){
    el.minutes.textContent = 0
    el.seconds.textContent = 0
  }
  state.minutes = el.minutes.textContent
  sounds.buttonPressAudio.play()
}

document.getElementById('forest').addEventListener('click', () => {
  toggleMusic(sounds.forestSound, 'forest');
})

export function toggleForest() {
  const isRunning = document.documentElement.classList.toggle('music-on')
  const element = document.getElementById('forest');
  if (isRunning) {
    sounds.forestSound.play()
    element.style.backgroundColor = '#658746';
    element.style.color = 'white'
  } else {
    sounds.forestSound.pause()
    element.style.backgroundColor = ''
    element.style.color = ''
  }
}

export function toggleRain() {
  const isRunning = document.documentElement.classList.toggle('music-on')
  const element = document.getElementById('rain');
  if (isRunning) {
    sounds.rainSound.play()
    element.style.backgroundColor = '#b2c8cb'
    element.style.color = 'white'
  } else {
    sounds.rainSound.pause()
    element.style.backgroundColor = ''
    element.style.color = ''
  }
}

export function toggleCoffeeMarket() {
  const isRunning = document.documentElement.classList.toggle('music-on')
  const element = document.getElementById('coffeeMarket');
  if (isRunning) {
    sounds.coffeeMarket.play()
    element.style.backgroundColor = '#a18262 '
    element.style.color = 'white'
  } else {
    sounds.coffeeMarket.pause()
    element.style.backgroundColor = ''
    element.style.color = ''
  }
}

export function toggleCampFire() {
  const isRunning = document.documentElement.classList.toggle('music-on')
  const element = document.getElementById('campFire');
  if (isRunning) {
    sounds.campFire.play()
    element.style.backgroundColor = '#6a6563 '
    element.style.color = 'white'
  } else {
    sounds.campFire.pause()
    element.style.backgroundColor = ''
    element.style.color = ''
  }
}

