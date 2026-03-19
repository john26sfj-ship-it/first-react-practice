import ProductCard from './components/ProductCard.jsx';
import styles from "./App.module.css";

function App() {
  const products = [
  { id: "A001", name: "Wireless Mouse", category: "Electronics", price: 29.99, description: "Ergonomic 2.4GHz wireless mouse." },
  { id: "A002", name: "Mechanical Keyboard", category: "Electronics", price: 89.99, description: "RGB backlit mechanical keyboard." },
  { id: "A003", name: "Coffee Mug", category: "Kitchenware", price: 12.50, description: "12oz ceramic coffee mug." },
  { id: "A004", name: "Yoga Mat", category: "Fitness", price: 25.00, description: "Non-slip eco-friendly yoga mat." },
  { id: "A005", name: "Bluetooth Speaker", category: "Electronics", price: 45.00, description: "Portable waterproof speaker." },
  { id: "A006", name: "Desk Lamp", category: "Home Office", price: 35.00, description: "LED lamp with USB charging port." },
  { id: "A007", name: "Water Bottle", category: "Fitness", price: 18.00, description: "Stainless steel insulated bottle." },
  { id: "A008", name: "Gaming Mousepad", category: "Electronics", price: 15.00, description: "Large cloth mousepad." },
  { id: "A009", name: "Scented Candle", category: "Home Decor", price: 10.00, description: "Lavender scented soy candle." },
  { id: "A010", name: "Backpack", category: "Accessories", price: 55.00, description: "Water-resistant travel backpack." },
  { id: "A011", name: "Wireless Earbuds", category: "Electronics", price: 60.00, description: "True wireless earbuds with charging case." },
  { id: "A012", name: "Wall Clock", category: "Home Decor", price: 22.00, description: "Modern minimalist wall clock." },
  { id: "A013", name: "Running Shoes", category: "Footwear", price: 95.00, description: "Lightweight breathable running shoes." },
  { id: "A014", name: "Smart Watch", category: "Electronics", price: 150.00, description: "Fitness tracker with heart rate monitor." },
  { id: "A015", name: "Laptop Stand", category: "Home Office", price: 40.00, description: "Adjustable aluminum laptop stand." },
  { id: "A016", name: "Coffee Maker", category: "Kitchenware", price: 75.00, description: "12-cup programmable coffee maker." },
  { id: "A017", name: "Sunglasses", category: "Accessories", price: 120.00, description: "Polarized UV protection sunglasses." },
  { id: "A018", name: "Desk Organizer", category: "Home Office", price: 18.00, description: "Mesh metal desk organizer set." },
  { id: "A019", name: "Beach Towel", category: "Home Decor", price: 20.00, description: "Large striped cotton beach towel." },
  { id: "A020", name: "USB-C Cable", category: "Electronics", price: 8.00, description: "6ft fast charging cable." }
];
  return (
    <div className={styles.container}>
      {products.map(product  => {
        return <ProductCard key={product.id} data={product}/>
      })}
    </div>
  )
}

export default App
