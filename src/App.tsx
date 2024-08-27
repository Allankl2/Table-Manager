import './App.css'
import ContainerAside from "./components/ContainerAside/ContainerAside"
import ContainerSection from "./components/ContainerSection/ContainerSection"

function App() {


  return (
    <>
      <section className='contaner-father-geral'>
        <ContainerAside/>
        <ContainerSection/>
      </section>
    </>
  )
}

export default App
