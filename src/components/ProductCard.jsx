import styles from "./ProductCard.module.css"
import { Button } from "./Button.styled"

export default function ProductCard({data: {name, category, price, description}}) {
  return <div className={styles.container}>
    <h3>{name}</h3>
    <p>{category}</p>
    <h4>{price}$</h4>
    <p>{description}</p>
    <Button primary={true}>Buy</Button>
    <Button primary={false}>Buy</Button>
  </div>
}