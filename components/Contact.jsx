import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [travelTime, setTravelTime] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [numberOfLuggages, setNumberOfLuggages] = useState("");
  const [numberOfFoodBreaks, setNumberOfFoodBreaks] = useState("");
  const [intermediatelocation, setVia] = useState("");
  const [contactinfo, setContactinfo] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handlePickupLocationChange = (event) => {
    setPickupLocation(event.target.value);
  };
  const handleContactinfoChange = (event) => {
    setContactinfo(event.target.value);
  };

  const handleDropLocationChange = (event) => {
    setDropLocation(event.target.value);
  };
  const handleViaChange = (event) => { 
    setVia(event.target.value);
  }; 
  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const handleNumberOfLuggagesChange = (event) => {
    setNumberOfLuggages(event.target.value);
  };

  const handleNumberOfFoodBreaksChange = (event) => {
    setNumberOfFoodBreaks(event.target.value);
  };

  const handleStartJourney = () => {
    if (
      pickupLocation.trim() === "" ||
      dropLocation.trim() === "" ||
      numberOfPeople.trim() === "" ||
      numberOfLuggages.trim() === "" ||
      numberOfFoodBreaks.trim() === ""||
      intermediatelocation.trim() === ""||
      contactinfo.trim() === ""
    ) {
      setShowPopup(false);
    } else {
      // Simulate travel time calculation (random time between 1 and 5 hours)
      const randomTime = Math.floor(Math.random() * 5) + 1;
      setTravelTime(randomTime);

      setPickupLocation("");
      setDropLocation("");
      setNumberOfPeople("");
      setNumberOfLuggages("");
      setNumberOfFoodBreaks("");
      setVia("");
     
      setShowPopup(true);
    }
  };

  return (
    <>
      <h1 className="text-5xl text-white text-center tracking-2 pt-10 pb-5 font-bold text-gray-800">
      Book Ride for Your Contact
      </h1>
      <div className="flex justify-center  items-center">
        <div className="code-container bg-white p-8 rounded-3xl shadow-md">
          <input
            type="text"
            placeholder="Pickup Location"
            value={pickupLocation}
            onChange={handlePickupLocationChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Via"
            value={intermediatelocation}
            onChange={handleViaChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />
          
         
          <input
            type="text"
            placeholder="Drop Location"
            value={dropLocation}
            onChange={handleDropLocationChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Contact Info"
            value={contactinfo}
            onChange={handleContactinfoChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            placeholder="Stopage Time at intermediate locations"
            value={numberOfPeople}
            onChange={handleNumberOfPeopleChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            placeholder="Number of People"
            value={numberOfLuggages}
            onChange={handleNumberOfLuggagesChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />

          <input
            type="number"
            placeholder="Number of Food Breaks"
            value={numberOfFoodBreaks}
            onChange={handleNumberOfFoodBreaksChange}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleStartJourney}
            className="w-full px-4 py-2 bg-orange-500 text-white border-none rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:bg-orange-600 hover:translate-y-[-2px] hover:shadow-md"
          >
            Book Cab
          </button>

          {travelTime && (
            <div className="travel-time mt-4 font-bold text-gray-700">
              Estimated Travel Time: {travelTime} hours
            </div>
          )}

          {showPopup && (
          <Link to="/pay">  <div className="popup mt-4 px-8 py-4 bg-blue-500 text-white rounded-md shadow-md text-lg text-center">
              Thanks for Choosing Us! Proceed to Driver Booking 
            </div></Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
