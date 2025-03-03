"use client"

import addData from "@/app/firebase/firestore/addData";
import { useState } from "react";

export default function HouseList (){

  const [name, setName] = useState("");
  const [house, setHouse] = useState("");
  const [errorMessage, setErrorMessage]= useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    const data = {
      name,
      house
    }
    console.log(data);

    const { result, error } = await addData('users', 'user-id', data)

    if (error) {
      console.log(error)
      return setErrorMessage(error.message)
    }

  }

  return (
    <form onSubmit={handleForm}>

      <label>
        <span>Name:</span>
        <input 
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          name="name"
          id="name"
          required
        />
      </label>

      <label>
        <span>House:</span>
        <input 
          type="house"
          value={house}
          onChange={(e)=>setHouse(e.target.value)}
          required
          name="house"
          id=""
        />
      </label>

      {errorMessage && <div className="error">{errorMessage}</div>}


      <button type="submit" className="btn-primary">
        Submit
      </button>

    </form>
  )

}