import {Routes, Route, Link} from 'react-router-dom'
import GlobalStyles from "./components/GlobalStyles"
import {HomePage, NewsPage, ContactPage} from './pages'

function App() {
  return (
    <GlobalStyles>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </div>
    </GlobalStyles>
    )
}

export default App