import { useState } from "react";
import styles from "./styles/ChangeMintPrice.module.css"

function ChangeMintPrice({doChangeMintPrice}){

  const [newPrice, setNewPrice] = useState(0.0);

  const data = "Hola you";

  const handleChange = (evnt)=>{
    const { value } = evnt.target;

    setNewPrice(value);
  }

  return(
    <div>
      <input className={styles.input} onChange={(evnt)=>handleChange(evnt)} placeholder="Eg 0.001" type="number"></input>
      <button className={styles.button} onClick={() => doChangeMintPrice(newPrice)}>Update</button>
    </div>
  )
}
export default ChangeMintPrice;
