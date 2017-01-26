// your code here:
document.addEventListener('DOMContentLoaded', function () {
  var myTimer = timer()

  myTimer.init()
})

function timer () {
  var startButton = document.querySelector('#start')
  var resetButton = document.querySelector('#reset')
  var pauseButton = document.querySelector('#pause')
  var textH1 = document.querySelector('#timer')

  var seconds = 0
  var timerId = 0
  var startFlag = false

  function init () {
    startButton.addEventListener('click', startTimer)
    pauseButton.addEventListener('click', pauseTimer)
    resetButton.addEventListener('click', resetTimer)
  }

  function startTimer () {
    if (!startFlag) {
      startFlag = true // flag makes sure start button cannot be clicked again unless after resetButton
      console.log('Timer start')
      timerId = setInterval(updateTimer, 1000)
      console.log(startButton, resetButton, pauseButton, timerId)
    }
  }

  function resetTimer () {
    startFlag = false // reset the flag
    console.log('Timer reset')
    clearInterval(timerId)
    seconds = 0
    textH1.textContent = 'Stop Watch'
  }

  function pauseTimer () {
    console.log('Timer paused')
    clearInterval(timerId)
  }

  function updateTimer () {
    seconds++
    textH1.textContent = 'Time elapsed: ' + seconds
  }

  return {
    init: init

  }
}
