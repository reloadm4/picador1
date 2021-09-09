import React from "react";
import "./Form.css";
import SelectReason from "./SelectReason";
import CountryCity from "./CountryCity";
import useForm from "./useForm";
import validate from "../ValidateInfo";




function Form() {
  const { handleChange, inputs, handleSubmit, errors } = useForm(validate);

  return (
    
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form__row">
          <SelectReason />
          <h2>Upload your Profile Image</h2>
          <input type="file" />
          <input
            type="text"
            name="firstname"
            placeholder="First Name (in english)*"
            value={inputs.firstname}
            onChange={handleChange}
            className={`${errors.firstname} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />

          <input
            type="text"
            name="lastname"
            placeholder="Last Name (in english)*"
            value={inputs.lastname}
            onChange={handleChange}
            className={`${errors.lastname} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <h2> Job Title </h2>

          <input
            type="text"
            name="jobtitle"
            placeholder="Job Title *"
            value={inputs.jobtitle}
            onChange={handleChange}
            className={`${errors.jobtitle} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <h2> Company Name </h2>
          <input
            type="text"
            name="companyname"
            placeholder="Company Name *"
            value={inputs.companyname}
            onChange={handleChange}
            className={`${errors.companyname} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <h2> Select Country </h2>
          <CountryCity />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={inputs.email}
            onChange={handleChange}
            className={`${errors.email} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          
          <h2> Add Website </h2>
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={inputs.website}
            onChange={handleChange}
            className=""
            autoComplete="off"
          />
          <h2> Add Phone Number </h2>
          <input
            type="number"
            name="phone"
            placeholder="+91 0000000000"
            value={inputs.phone}
            onChange={handleChange}
            className={`${errors.phone} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />

          <input
            type="number"
            name="mobile"
            placeholder="+91 0000000000"
            value={inputs.mobile}
            onChange={handleChange}
            className={`${errors.mobile} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <h2> P.O Box </h2>
          <input
            type="text"
            name="postbox"
            placeholder="P.O.BOX *"
            value={inputs.postbox}
            onChange={handleChange}
            className={`${errors.postbox} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <h2> Add Address </h2>
          <input
            type="textarea"
            name="address"
            placeholder="Address"
            value={inputs.address}
            onChange={handleChange}
            className=""
            autoComplete="off"
          />
          <h2> Pick a Name </h2>
          <input
            type="text"
            name="username"
            placeholder="User Name *"
            value={inputs.username}
            onChange={handleChange}
            className={`${errors.username} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <h2>Set a Password</h2>
          <input
            type="password"
            name="password"
            placeholder="Password *"
            value={inputs.password}
            onChange={handleChange}
            className={`${errors.password} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <h2> Confirm Password </h2>
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password *"
            value={inputs.password2}
            onChange={handleChange}
            className={`${errors.password2} ? "error" : "success"`}
            onBlur={handleSubmit}
            autoComplete="off"
          />
          <h2>Industry</h2>
          <input
            type="textarea"
            name="Industry"
            placeholder="Industry"
            value={inputs.industry}
            onChange={handleChange}
            className=""
            autoComplete="off"
          />
          <h2>Messenger</h2>
          <input
            type="textarea"
            name="messenger link"
            placeholder="Messenger Link"
            value={inputs.messenger}
            onChange={handleChange}
            className=""
            autoComplete="off"
          />
          <button>RESET</button>
          <button>SUBMIT</button>
          <button>NEXT</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
