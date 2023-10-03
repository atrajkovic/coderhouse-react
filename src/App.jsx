import { ItemListContainer } from "./components/ItemListContainer"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <div className="mx-auto w-full max-w-7xl p-4">
        <ItemListContainer greetings="Hola, como estas?"/>
      </div>
    </>
  )
}

export default App
