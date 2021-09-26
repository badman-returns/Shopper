import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx'
import { GetCatergories } from './services/fakestore.service';
import { setCategories } from './store/actions/products';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import Footer from './components/footer/Footer.jsx';

const Navbar = React.lazy(() => import('./components/navbar/Navbar'));

const theme = createTheme({
  palette: {
    primary: {
      main: pink['600'],
    },
    secondary: {
      main: '#000',
    }
  }
})

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    GetCatergories().then((response) => {
      dispatch(setCategories(response));
    })
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path='/'><Home /></Route>
        </Switch>
        <Footer/>
      </HashRouter>

    </ThemeProvider>
  )
}

export default App
