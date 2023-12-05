function inject (path: string): void {
  const script = document.createElement('script')

  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', path)

  document.documentElement.appendChild(script)
}

inject(chrome.runtime.getURL('js/inject.js'))
