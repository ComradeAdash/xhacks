import './App.css'
import Carousel from './Carousel'
import UploadButton from './UploadButton'

function App() {
  return (
    <div className="carousel-wrapper">
      <UploadButton onSubmit={(post) => console.log('Posted:', post)} />
      <Carousel />
      <button className="btn btn-outline btn-primary carousel-cta">
        Message
      </button>
    </div>
  )
}

export default App
