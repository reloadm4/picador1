import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import Form from "./Form";

function SelectReason() {
  const options = [
    { label: "Information technology", value: "to register in exhibition" },
    {
      label: "Product Based",
      value: "to register in publishers conference"
    },

    {
      label: "Manufacturing",
      value: "to register in translation grant"
    },
    { label: "Others", value: "others" }
  ];

  const [selected, setSelected] = useState([]);
  const [disabled, setdisabled] = useState(false);
  return (
    <div className="form__row">
      <span>Please Select type of Company to Register:</span>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select Your Reason for Registration"}
        className={"selectAll"}
      />
    </div>
  );
}

export default SelectReason;
