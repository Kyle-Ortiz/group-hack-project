import { Button, TextField } from '@mui/material';
import { useState } from 'react'
import React from 'react';
import Link from 'next/link'


const firstState = {
     "itemName" : "",
     "description" : "",
     "sku" : "",
     "price": ""
    }

function Item() {
     //add error toggling if any field is left blank?
     const [itemForm, setItemForm] = useState(firstState)
     const inputChange = (e) => {
          setItemForm({...itemForm, 
              [e.target.name] : e.target.value}
          )
     }
     const submit = (e) => {
          //send form to backend for account creation
          setItemForm(firstState)
     }
  return <form className="form">
               <div >
                    <h1 className="form-header">Add Item</h1>
               </div>
              <TextField required className="text-field" id="outlined-basic4" name="itemName" value={itemForm.itemName} onChange={(e)=> inputChange(e)} label="Item Name" variant="outlined" />
              <TextField required className="text-field" id="outlined-basic5" name="description"value={itemForm.description} onChange={(e) => inputChange(e)} label="Description" variant="outlined" />
              <TextField required className="text-field" id="outlined-basic6" name="sku"value={itemForm.sku} onChange={(e) => inputChange(e)} label="SKU" variant="outlined" />
              <TextField required className="text-field" id="outlined-basic7" name="price"value={itemForm.price} onChange={(e) => inputChange(e)} label="Price" variant="outlined" />
              <Button id="signup-button" color="success" onClick={submit}variant="contained">Add Item</Button>
          </form>;
}

export default Item;
