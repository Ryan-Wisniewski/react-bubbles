import React, { useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../_utils_/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" },
  id: ''
};



const ColorList = ({ colors, updateColors }) => {
  // console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  
  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    // e.preventDefault();
    console.log('checkHere', colorToEdit)
    // Make a put request to save your updated color
    // think about where will you get the id from... //color to edit has id
    // where is is saved right now? //to colors which gets mapped.
    axiosWithAuth()
    .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
      .then(res => {
        console.log('res', res)
        // setColorToEdit(colors)
        // setColorToEdit(colorToEdit)
        updateColors(colorToEdit)
        console.log('reeeeee', colorToEdit)
      })
      .catch(err => console.log(err.message))
  };
  
  

  const deleteColor = e => {
    // e.preventDefault();
    // const item = colors.find( thing =>
    //   console.log(thing.id)
    // )
    // console.log(item)
    // if(colorToEdit.id === colorToEdit.id){
      console.log('TRYDIS', e)
    axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/${colorToEdit.id}`)
      .then(res => {
        console.log(res)
        //filter here
        const deleteColor = colors.filter(id => id.id !== e.id)
        console.log('SCREEEEEEEE',deleteColor ,e)
        updateColors(deleteColor)
        
      })
      // .catch(err => console.log(err.response));
  };
// }
  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={() => deleteColor(color)}>
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
