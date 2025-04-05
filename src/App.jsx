import './App.css'
import { Navbar } from './components/Navbar'
import { AppRouter } from './routes/AppRouter'

function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <main>
          <AppRouter />
        </main>
      </div>
    </>
  )
}

export default App