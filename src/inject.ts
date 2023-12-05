import { patchXMLHTTP } from './utils/patched_funcitons'
import { PEWSWatcher } from './utils/watcher'

patchXMLHTTP(new PEWSWatcher())
