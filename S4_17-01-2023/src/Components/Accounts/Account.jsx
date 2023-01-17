import { useState } from "react";
function TotalAmount() {
  const [amount, setAmount] = useState(0);

  //setState() is Async
  //   const handleDeposite = () => {
  //     // console.log(amount); // 0

  //     setAmount(amount + 100); //100

  //     // console.log(amount); // 0
  //   };

  // batching technique
  //   const handleDeposite = () => {
  //     setAmount(amount + 100); // 0 + 100
  //     setAmount(amount + 100); // 100 + 100
  //     setAmount(amount + 100); // 200 + 100
  //     setAmount(amount + 100); // 300 + 100
  //     setAmount(amount + 100); //400 + 100  // 500
  //   };

  // updater function
  const handleDeposite = () => {
    setAmount((p) => p + 100);
    setAmount((prevState) => prevState + 100);
    setAmount((prevState) => prevState + 100);
    setAmount(500);
  };

  const handlewithdraw = () => {
    setAmount(amount - 100);
  };

  return (
    <div style={{ textAlign: "center", margin: "100px auto" }}>
      <h1>Current : {amount}</h1>
      <button onClick={handleDeposite}>Deposite 100</button> &nbsp;&nbsp;&nbsp;
      <button onClick={handlewithdraw}>Withdraw 100</button>
    </div>
  );
}

export default TotalAmount;
