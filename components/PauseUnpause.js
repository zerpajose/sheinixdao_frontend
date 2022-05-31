import styles from "./styles/PauseUnpause.module.css";

function PauseUnpause({paused, doPause, doUnpause}){

  if(paused){
    return(
      <button className={styles.button} onClick={()=>doUnpause()}>Unpause</button>
    )
  }
  else{
    return(
      <button className={styles.button} onClick={()=>doPause()}>Pause</button>
    )
  }

}

export default PauseUnpause;