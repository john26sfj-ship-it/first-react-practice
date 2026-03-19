import styles from "./ProductCard.module.css"

export default function ProductCard({data: {name, category, price, description}}) {
  return <div className={styles.container}>
    <h3>{name}</h3>
    <p>{category}</p>
    <h4>{price}$</h4>
    <p>{description}</p>
  </div>
}