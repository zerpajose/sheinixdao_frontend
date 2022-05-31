import styles from "./styles/Withdraw.module.css";

function Withdraw({doWithdraw}){
  return(
    <button className={styles.button} onClick={()=>doWithdraw()}>Withdraw</button>
  )
}
export default Withdraw;