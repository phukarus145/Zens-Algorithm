import React, { useState } from "react";

function Algorithm() {
  const [input, setInput] = useState("");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const findMax = (str) => {
    const strArr = str ? str.split(" ") : "";
    let mini = 0;
    strArr.forEach((ar, i) => {
      strArr[i] < strArr[mini] ? (mini = i) : console.log('')
    });
    strArr.splice(mini,1)
    console.log(mini)
    console.log(strArr)
    let total = 0
    for (const number of strArr) {
        total += Number(number);
      }
    setMax(total)
  };
  const findMin = (str) => {
    const strArr = str ? str.split(" ") : "";
    let maxi = 0;
    strArr.forEach((ar, i) => {
      strArr[i] > strArr[maxi] ? (maxi = i) : console.log('')
    });
    strArr.splice(maxi,1)
    console.log(maxi)

    console.log(strArr)
    let total = 0
    for (const number of strArr) {
        total += Number(number);
      }
    setMin(total)
  };
  const handleEnter = (e) =>{
    if(e.keyCode === 13) { 
      setInput(e.target.value)
      findMax(e.target.value)
      findMin(e.target.value)
    }
  }
  return (
    <div className="container-xxl">
      <div className="mb-3">
        <label className="form-label">
          input
        </label>
        <input
          type="text"
          onKeyDown={handleEnter}
        />
      </div>
      <div className="mb-3">
        <label >
          output
        </label>
        <input
          type="text"
          disabled
          value={min+" "+ max}
        />
      </div>
    </div>
  );
}

export default Algorithm;
