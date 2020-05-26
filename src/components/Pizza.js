import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';

// set account information schema
const formSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(2, "Username must be at least 6 characters long.")
    .required("Username is must"),
  size: Yup
    .string()
    .required("Size is required"),
  instructions: Yup
    .string()
    .required("Size is required")
});

export default function Pizza(props) {
  const [formData, setFormData] = useState({
    name: "",
    size: "",
    pepperoni: false,
    saugage: false,
    dicedtomatos: false,
    blackolives: false,
    instructions: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    size: "",
  })
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [users, setUsers] = useState([]);

  const onInputChange = e => {
    e.persist();

    const newFormData = {
      ...formData, [e.target.id]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    }
    validateChange(e);
    setFormData(newFormData);
  }

  const validateChange = e => {
    if (e.target.type !== "checkbox") {
      Yup
      .reach(formSchema, e.target.id)
      .validate(e.target.value)
      .then(valid => {
        setErrors({...errors, [e.target.id]: ""})
      })
      .catch(err => {
        setErrors({...errors, [e.target.id]: err.errors[0]})
      })
    }
  }

  useEffect(() => {
    formSchema.isValid(formData)
      .then(valid => {
        setButtonDisabled(!valid);
      });
  }, [formData]);

  const formSubmit = e => {
    e.preventDefault();
    axios.post('https://reqres.in/api/users', formData)
      .then(res => {
        if (res.data.name) { setUsers([...users, res.data.name]) }
        setFormData({
          name: "",
          size: "",
          pepperoni: false,
          saugage: false,
          dicedtomatos: false,
          blackolives: false,
          instructions: ""
        })
      })
  }
  
  return <>
    <div className="container">
      <h3 class="col-12 text-danger mt-4">Pizza Order</h3>
      <div className="card my-4">
        <div className="card-header">
          Order Form
        </div>
        <div className="card-body">
          <form onSubmit={formSubmit}>
            <div className="row">
              <div className="col-12">
                <h5 className="card-title bg-danger py-2 px-2 text-white">Name</h5>
                <p className="card-text px-2">Your name with at least 2 characters.</p>
              </div>
              <div className="col-sm-7 mt-2 mb-2">
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name"
                    value={formData.name}
                    placeholder="Name" 
                    onChange={onInputChange} 
                  />
                  {errors.name.length > 0 ? <p className="mt-2 text-danger">{errors.name}</p> : null}
                </div>
              </div>
              <div className="col-12">
                <h5 className="card-title bg-danger py-2 px-2 text-white">Choice of Size</h5>
                <p className="card-text px-2">Required</p>
              </div>
              <div className="col-sm-7 mt-2 mb-2">
                <div className="form-group">
                  <select 
                    className="custom-select my-1 mr-md-2" 
                    id="size"
                    value={formData.size ? formData.size : ""}
                    onChange={onInputChange}
                  >
                    <option value="">Choose...</option>
                    <option value="sm">Small Pizza: 8-10 inches with 6 slices</option>
                    <option value="md">Medium Pizza: 12 inches with 8 slices</option>
                    <option value="lg">Large Pizza: 14 inch with 10 slices</option>
                    <option value="xl">Extra-large Pizza: 16-18 inch with 12 slices</option>
                  </select>
                  {errors.size.length > 0 ? <p className="mt-2 text-danger">{errors.size}</p> : null}
                </div>
              </div>
              <div className="col-12">
                <h5 className="card-title bg-danger py-2 px-2 text-white">Add Toppings</h5>
                <p className="card-text px-2">Choose up to 10.</p>
              </div>
              <div className="col-sm-6 mt-2">
                <div className="form-check">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="pepperoni" 
                    onChange={onInputChange}
                    checked={formData.pepperoni}
                    />
                  <label className="form-check-label" htmlFor="pepperoni">Pepperoni</label>
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <div className="form-check">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="saugage" 
                    onChange={onInputChange}
                    checked={formData.saugage}
                    />
                  <label className="form-check-label" htmlFor="saugage">Saugage</label>
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <div className="form-check">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="dicedtomatos" 
                    onChange={onInputChange}
                    checked={formData.dicedtomatos}
                    />
                  <label className="form-check-label" htmlFor="dicedtomatos">Diced Tomatos</label>
                </div>
              </div>
              <div className="col-sm-6 mt-2">
                <div className="form-check">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="blackolives" 
                    onChange={onInputChange}
                    checked={formData.blackolives}
                    />
                  <label className="form-check-label" htmlFor="blackolives">Black Olives</label>
                </div>
              </div>
              <div className="col-12 mt-4">
                <h5 className="card-title bg-danger py-2 px-2 text-white">Special Instructions</h5>
                <p className="card-text px-2">Anything else you'd like to add?</p>
              </div>
              <div className="col-sm-7 mt-3 mb-2">
                <div className="form-group">
                  <input 
                    type="text"
                    className="form-control" 
                    id="instructions"
                    value={formData.instructions}
                    placeholder="Special Instructions" 
                    onChange={onInputChange} 
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              data-cy="submit" 
              className={`btn btn-${buttonDisabled ? "secondary disabled-button" : "info"} mt-4 mb-4`}
              disabled={buttonDisabled}
            >
              Submit
            </button>
          </form>
          <pre className="card-text">{users.length > 0 ? JSON.stringify(users, null, 2) : null}</pre>
        </div>
      </div>
    </div>
  </>
}