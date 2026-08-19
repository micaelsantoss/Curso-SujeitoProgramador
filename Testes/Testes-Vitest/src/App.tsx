import { Button } from "./components/Button"
import { Posts } from "./components/Posts"

function App() {
  return (
    <div>
      <h1 className='header'>Testeee</h1>

      <Button onClick={() => alert("clicooou")} disabled={true}>
        Aperte aqui
      </Button>

      <Posts/>
    </div>
  )
}

export default App
