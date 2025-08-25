import './App.css'
import Card from './components/card.jsx'
import RowContainer from './components/rowContainer.jsx'
import Shelf from './components/shelf.jsx'

function App() {
  return (
    <>
      <Card id = "mainTitle ">
        Main title + options panel
      </Card>

      <RowContainer>

        <Card id = "bookshelvesContainer" title = "bookshelvesContainer">
          <Shelf>
            <div>book1</div>
            <div>book2</div>
          </Shelf>

          <Shelf>
            <div>book1</div>
            <div>book2</div>
          </Shelf>

          <Shelf>
            <div>book1</div>
            <div>book2</div>
          </Shelf>

          <Shelf>
            <div>book1</div>
            <div>book2</div>
          </Shelf>
        </Card>

        <Card id = "bookInfosDisplayer">
          bookInfosDisplayer
        </Card>

      </RowContainer>
    </>
  )
}

export default App
