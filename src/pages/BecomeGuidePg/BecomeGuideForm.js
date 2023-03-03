import React, { useState, useEffect } from "react";
import axiosInstance from "../../auth/authHandler";
import { baseUrl } from "../../utils/urls";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const BecomeGuideForm = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState("");
  const [places, setPlaces] = useState([]);
  const [placeId, setPlaceId] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`${baseUrl}/places/`).then((res) => {
      console.log(res.data);
      setPlaces(res.data);
    });
  }, []);

  const selectDropDown = (event) => {
    setPlaceId(event.target.value);
  };

  const becomeGuide = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`${baseUrl}/guides/`, {
        name: name,
        desc: desc,
        age: age,
        gender: gender,
        contact: contact,
        address: address,
        user_foreign: window.localStorage.getItem("userId"),
        place_foreign: placeId,
      })
      .then(
        (response) => {
          if (response.status === 201) {
            toast.success("Successfully registered as the Guide....");
            navigate("/");
          }
        },
        (error) => {
          toast.error("Something went wrong");
          console.log(error);
        }
      );
  };
  return (
    <form onSubmit={becomeGuide} className="form_guide">
      <select required name="" id="" classNmae="form_container" value={placeId} onChange={selectDropDown}>
        {places.map((place, index) => {
          return (
            <option key={index} value={parseInt(place.id)}>
              {place.place_name}
            </option>
          );
        })}
      </select>
      <input
        className="guide_input"
        required
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className="guide_input"
        required
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <input
        className="guide_input"
        required
        type="text"
        placeholder="Phone Number"
        value={contact}
        onChange={(e) => {
          setContact(e.target.value);
        }}
      />
      <input
        className="guide_input"
        required
        type="text"
        placeholder="address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <input
      className="guide_input"
        required
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <div>
        <input
        className="guide_radio"
          required
          type="radio"
          id="male_radio"
          name="gender"
          value="Male"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label for="huey">Male</label>
      </div>

      <div>
        <input
        className="guide_radio"
          required
          type="radio"
          id="female_radio"
          name="gender"
          value="Female"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label for="dewey">Female</label>
      </div>

      <div>
        <input
        className="guide_radio"
          required
          type="radio"
          id="others_radio"
          name="gender"
          value="Others"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <label for="louie">Other</label>
      </div>
      <button type="submit" className="g_button">submit</button>
    </form>
  );
};

export default BecomeGuideForm;
