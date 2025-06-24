// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
     
//     </>
//   )
// }

// export default App
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddParcel = () => {
  const [parcel, setParcel] = useState({
    type: "document",
    title: "",
    weight: "",
    senderName: "John Doe", // Prefilled
    senderContact: "",
    senderRegion: "",
    senderCenter: "",
    senderAddress: "",
    pickupInstruction: "",
    receiverName: "",
    receiverContact: "",
    receiverRegion: "",
    receiverCenter: "",
    receiverAddress: "",
    deliveryInstruction: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParcel({ ...parcel, [name]: value });
  };

  const calculateCost = () => {
    let base = parcel.type === "document" ? 50 : 100;
    let centerCost = parcel.senderCenter && parcel.receiverCenter ? 20 : 0;
    let weightCost = parcel.weight ? parseFloat(parcel.weight) * 10 : 0;
    return base + centerCost + weightCost;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Required field validation
    for (let key in parcel) {
      if (
        key !== "weight" &&
        key !== "pickupInstruction" &&
        key !== "deliveryInstruction" &&
        parcel[key].trim() === ""
      ) {
        toast.error(`Please fill ${key.replace(/([A-Z])/g, " $1")}`);
        return;
      }
    }

    const cost = calculateCost();

    toast.success(
      <>
        <div>
          <p>Estimated Delivery Cost: <strong>৳{cost}</strong></p>
          <button
            className="btn btn-success mt-2"
            onClick={() => confirmBooking(cost)}
          >
            Confirm Booking
          </button>
        </div>
      </>,
      { autoClose: false }
    );
  };

  const confirmBooking = (cost) => {
    const parcelData = {
      ...parcel,
      cost,
      creation_date: new Date().toISOString(),
    };

    // Save to DB: Replace with API call
    console.log("Booking Confirmed:", parcelData);
    toast.dismiss();
    toast.success("Parcel Booking Confirmed!");
    setParcel({
      ...parcel,
      title: "",
      weight: "",
      senderContact: "",
      senderRegion: "",
      senderCenter: "",
      senderAddress: "",
      pickupInstruction: "",
      receiverName: "",
      receiverContact: "",
      receiverRegion: "",
      receiverCenter: "",
      receiverAddress: "",
      deliveryInstruction: "",
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-base-100 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-1">Add Parcel</h2>
      <p className="text-sm mb-6">Door to Door Delivery – pickup & delivery required</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="form-control col-span-3 flex-row gap-4">
            <label className="label">Type</label>
            <label className="cursor-pointer label">
              <input
                type="radio"
                name="type"
                value="document"
                checked={parcel.type === "document"}
                onChange={handleChange}
                className="radio radio-sm radio-success"
              />
              <span className="label-text ml-2">Document</span>
            </label>
            <label className="cursor-pointer label ml-4">
              <input
                type="radio"
                name="type"
                value="non-document"
                checked={parcel.type === "non-document"}
                onChange={handleChange}
                className="radio radio-sm radio-success"
              />
              <span className="label-text ml-2">Non-Document</span>
            </label>
          </div>
          <input
            type="text"
            name="title"
            placeholder="Parcel Title"
            className="input input-bordered"
            onChange={handleChange}
            value={parcel.title}
          />
          {parcel.type === "non-document" && (
            <input
              type="number"
              name="weight"
              placeholder="Parcel Weight (kg)"
              className="input input-bordered"
              onChange={handleChange}
              value={parcel.weight}
            />
          )}
        </div>

        {/* Sender Info */}
        <h3 className="font-semibold text-lg mt-4">Sender Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="senderName"
            value={parcel.senderName}
            className="input input-bordered"
            readOnly
          />
          <input
            name="senderContact"
            placeholder="Sender Contact"
            className="input input-bordered"
            onChange={handleChange}
            value={parcel.senderContact}
          />
          <select
            name="senderRegion"
            className="select select-bordered"
            onChange={handleChange}
            value={parcel.senderRegion}
          >
            <option value="">Select Region</option>
            <option>Dhaka</option>
            <option>Chittagong</option>
          </select>
          <select
            name="senderCenter"
            className="select select-bordered"
            onChange={handleChange}
            value={parcel.senderCenter}
          >
            <option value="">Select Service Center</option>
            <option>Center A</option>
            <option>Center B</option>
          </select>
          <input
            name="senderAddress"
            placeholder="Sender Address"
            className="input input-bordered"
            onChange={handleChange}
            value={parcel.senderAddress}
          />
          <input
            name="pickupInstruction"
            placeholder="Pickup Instruction"
            className="input input-bordered"
            onChange={handleChange}
            value={parcel.pickupInstruction}
          />
        </div>

        {/* Receiver Info */}
        <h3 className="font-semibold text-lg mt-4">Receiver Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="receiverName"
            placeholder="Receiver Name"
            className="input input-bordered"
            onChange={handleChange}
            value={parcel.receiverName}
          />
          <input
            name="receiverContact"
            placeholder="Receiver Contact"
            className="input input-bordered"
            onChange={handleChange}
            value={parcel.receiverContact}
          />
          <select
            name="receiverRegion"
            className="select select-bordered"
            onChange={handleChange}
            value={parcel.receiverRegion}
          >
            <option value="">Select Region</option>
            <option>Dhaka</option>
            <option>Chittagong</option>
          </select>
          <select
            name="receiverCenter"
            className="select select-bordered"
            onChange={handleChange}
            value={parcel.receiverCenter}
          >
            <option value="">Select Service Center</option>
            <option>Center X</option>
            <option>Center Y</option>
          </select>
          <input
            name="receiverAddress"
            placeholder="Receiver Address"
            className="input input-bordered"
            onChange={handleChange}
            value={parcel.receiverAddress}
          />
          <input
            name="deliveryInstruction"
            placeholder="Delivery Instruction"
            className="input input-bordered"
            onChange={handleChange}
            value={parcel.deliveryInstruction}
          />
        </div>

        <p className="text-xs text-gray-500">* Pickup Time 4pm–7pm approx.</p>

        <button type="submit" className="btn btn-success w-full">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default AddParcel;
