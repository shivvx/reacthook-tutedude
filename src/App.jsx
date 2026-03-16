import ProductList from './components/ProductList/ProductList'
import './App.css'
function App() {
  console.log('App: Component mounting...');
  return (
    <div className="App" data-mount-check="app-mounted">
      <ProductList />
    </div>
  )
}
export default App
