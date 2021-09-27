import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter, Switch, Route } from 'react-router-dom';
import { GetAllProducts } from './services/fakestore.service';
import { setProducts } from './store/actions/products';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import Footer from './components/footer/Footer.jsx';
import ScrollToTop from './utility/scroll-to-top';
import ProductDetails from './pages/product-details/ProductDetails';
const Navbar = React.lazy(() => import('./components/navbar/Navbar'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const Products = React.lazy(() => import('./pages/products/Products'));

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
    GetAllProducts().then((response) => {
      dispatch(setProducts(response));
    })
  }, [dispatch]);

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path='/product/:id'><ProductDetails/></Route>
          <Route path='/products'><Products /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </HashRouter>

  )
}

export default App
