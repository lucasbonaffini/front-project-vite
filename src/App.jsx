import './App.css'
import Card from './Components/Card';
import Hello  from './Components/Hello'

import {Form} from './Form'

const products = [
  {
    id: 0,
    name: "Macbook Air 13 Chip M1 256gb",
    image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    price: "$ 7999.00",
  },
  {
    id: 1,
    name: "Echo Dot (4ª Gen)",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    price: "$ 379.00",
  },
  {
    id: 2,
    name: "Ip Inalambric Camera 360°",
    image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    price: "$ 199.00",
  },
  {
    id: 3,
    name: "Zigbee Intelligent Digital Electronic Lock",
    image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    price: "$ 1599.00",
  },
];

function App() {
  
  return (
    <>
      <h1>Hello, World!</h1>
    
      <Hello hello='John'/>
      <Form name={"Lucas"} lastname={"Bonaffini"} email={"lucas@bona.com"}/>
      <div className="card">
        <button onClick={() => alert("Click")}>
          Click!
        </button>
        <p>
        <iframe src="https://giphy.com/embed/PtYCDDO41h7WgR6C3O" width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/miamiheat-miami-heat-PtYCDDO41h7WgR6C3O">Jimmy Butler</a></p>
        </p>
      </div>
      <p className="read-the-docs">
        Group 3
      </p>
      <div className='card'>
        <h1>Products</h1>
        <ul>
          <Card item={products}/>
        </ul>
      </div>
    </>
  )
}

export default App
