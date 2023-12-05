import { patchXMLHTTP } from './utils/patched_funcitons'

// eslint-disable-next-line @typescript-eslint/ban-types
function inject (fn: Function): void {
  const script = document.createElement('script')
  script.text = `(${fn.toString()})();`
  document.documentElement.appendChild(script)
}

inject(patchXMLHTTP)
