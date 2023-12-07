const PEWSButton = document.getElementById('PEWSOpenButton')
PEWSButton?.addEventListener('click', () => { window.open('https://www.weather.go.kr/pews/') })

function changeToMainScreen (): void {
  const defaultScreen = document.getElementById('default-screen')
  const mainScreen = document.getElementById('main-screen')

  defaultScreen?.classList.add('hidden')
  mainScreen?.classList.remove('hidden')
}

function changeToDefaultScreen (): void {
  const defaultScreen = document.getElementById('default-screen')
  const mainScreen = document.getElementById('main-screen')

  defaultScreen?.classList.remove('hidden')
  mainScreen?.classList.add('hidden')
}

function chromeMessageListener (message: any, sender: chrome.runtime.MessageSender, sendResponse: (response?: any) => void): void {

}

chrome.runtime.onMessage.addListener(chromeMessageListener)
