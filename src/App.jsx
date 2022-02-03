import Header from './components/Header'
import CaseInIndonesia from './components/CaseInIndonesia'

function App() {

  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto px-4">
        <CaseInIndonesia />
      </div>
      <footer className='text-center py-3'>
        Created By <a target="_blank" href="https://github.com/alvinindra/covid19-indonesia">Alvin Indra Pratama</a>
      </footer>
    </>
  )
}

export default App
