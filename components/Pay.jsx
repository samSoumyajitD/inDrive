import React from "react";

const fare = Math.floor(Math.random() * 1000) + 1;

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const displayRazorpay = async (amount) => {
  const res = await loadScript(
    'https://checkout.razorpay.com/v1/checkout.js'
  );

  if (!res) {
    alert('Razorpay SDK failed to load. Are you online?');
    return;
  }

  const options = {
    key: "rzp_test_CiUCBMPSUIQMnJ",
    currency: "INR",
    amount: amount * 100,
    name: "VeloVista",
    description: "Test Transaction",
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert("Ride Booked Successfully");
      alert("OTP"+Math.floor(Math.random() * 10000) + 1);
      

      
    },
    prefill: {
      name: "test Kumar",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const Box = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-2 width-[5rem]">
      <div className="text-xl font-bold sm:text-2xl mb-2 ridedetails">Ride Details</div>

      <p>Away: {Math.floor(Math.random() * 10) + 1} km</p>
      <p>Arrival: {Math.floor(Math.random() * 100) + 1} mins</p>

      <button
        onClick={() => displayRazorpay(Math.floor(Math.random() * 1000) + 1)}
        className="bg-green-500 justify-center items-center text-white font-bold py-2 px-4 rounded-full hover:bg-red-500 mt-auto"
      >
        Book
      </button>
    </div>
  );
};

const BoxContainer = () => {
  const smallScreenBoxes = [];

  for (let i = 0; i < 5; i++) {
    smallScreenBoxes.push(
      <div className="sm:flex w-1/2" key={i}>
        <Box />
      </div>
    );
  }

  return (
    <>
      <h1 className="text-2xl text-white text-center tracking-2 pb-2 font-bold text-gray-800">
        Let The System Allot You A Ride
      </h1>
      <div className="flex justify-center items-center ">
        <button
          onClick={() => displayRazorpay(fare)}
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-500 mt-auto"
        >
          Book
        </button>
      </div>
      <h1 className="text-2xl text-white text-center tracking-2 pt-2 font-bold text-gray-800">
        Choose Your Ride with the best fare
      </h1>
      <div className="flex flex-wrap">
        {/* For large screens (5 boxes in a row) */}
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>
        <div className="hidden sm:flex w-1/5">
          <Box />
        </div>

        {/* For small screens (2 boxes in a row) */}
        <div className="sm:hidden w-1/2">{smallScreenBoxes}</div>
        <div className="sm:hidden w-1/2">{smallScreenBoxes}</div>
      </div>
    </>
  );
};

function Pay() {
  return (
    <div className="container mx-auto p-4">
      <BoxContainer />
    </div>
  );
}

export default Pay;
