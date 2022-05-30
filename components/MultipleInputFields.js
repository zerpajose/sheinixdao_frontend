import { useState } from "react";
import styles from "./styles/MultipleInputFields.module.css";

function MultipleInputFields({childToParent}){

  // const [isDisabled, setIsDisabled] = useState(false);

  const [inputFields, setInputFields] = useState([{
    address:'', 
  }]);

  const addInputField = ()=>{
    setInputFields([...inputFields, {
      address:'',
    }])
  }
  const removeInputFields = (index)=>{
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  }
  const handleChange = (index, evnt)=>{
    const { name, value } = evnt.target;
    
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  }

  const addToWL = ()=>{
    const addresses = [];
    inputFields.forEach(e => {
      addresses.push(e.address);
    });
    childToParent(addresses);
  }

  return(
  
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          {
            inputFields.map((data, index)=>{
              const {address}= data;
              return(
                <div className="row my-3" key={index}>
                  <h3>Whitelisting Addresses</h3>
                  <div className="col">
                    <div className="form-group">
                      <input type="text" onChange={(evnt)=>handleChange(index, evnt)} value={address} name="address" className={styles.input}  placeholder="0x1234...." />
                      {(inputFields.length!==1)? <button className={styles.buttonX} onClick={removeInputFields}>X</button>:''}
                    </div>
                  </div>
                </div>
              )
            })
          }

          <div className="row">
            {(inputFields.length<5)? <div className="col-sm-6"><button className={styles.buttonPlus} onClick={addInputField}>+</button></div>:''}
            <div className="col-sm-6">
              <button className={styles.buttonAdd} onClick={addToWL}>Add to WL</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4"></div>
    </div>
  )
}
export default MultipleInputFields