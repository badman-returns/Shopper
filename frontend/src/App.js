import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter, Switch, Route } from 'react-router-dom';
import { GetAllProducts, GetCatergories } from './services/fakestore.service';
import { setCategories, setFeatured } from './store/actions/products';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import Footer from './components/footer/Footer.jsx';
const Navbar = React.lazy(() => import('./components/navbar/Navbar'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Products = React.lazy(() => import('./pages/Products/Products'));

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
  }, [dispatch]);

  useEffect(() => {
    GetAllProducts().then((response) => {
      dispatch(setFeatured(response));
    })
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Navbar />
        <Switch>
          <Route path='/'><Home /></Route>
          <Route path='/products'><Products /></Route>
        </Switch>
        {/* <Footer /> */}
      </HashRouter>

    </ThemeProvider>
  )
}

export default App
