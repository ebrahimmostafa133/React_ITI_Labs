import Home from "./pages/home/home"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrash, faCheck, faInbox, faClipboardList } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faTrash, faCheck, faInbox, faClipboardList)
function App() {

  return (
    <>
      <Home />
    </>
  )
}

export default App
