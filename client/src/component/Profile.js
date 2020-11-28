import React, { useState, useEffect, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "../styles/Profile.css";
import { covidContext } from "../App";
import axios from "axios";
import stateList from "../stateList/StateList.json";
import jwt_decode from "jwt-decode";
import Select from "react-select";

const Profile = (props) => {
  const { webtoken } = useContext(covidContext);
  const [webToken, setWebToken] = webtoken;
  const [multiselect, setMultiSelect] = useState([]);
  const [decoded, setDecoded] = useState("");
  const [selectedInput, setSelected] = useState({
    selectedState: [],
    username: "",
  });

  useEffect(() => {
    if (webToken === "") {
      props.history.push({
        pathname: "/login",
      });
    } else {
      var decoded = jwt_decode(webToken);
      setDecoded(decoded);
      const handleProfileBtn = async () => {
        const data = await axios.get(
          `http://localhost:3500/towatchData/${decoded.username}`,
          {
            withCredentials: true,
            validateStatus: () => true,
          }
        );
        if (data.status === 200) {
          setMultiSelect(data.data);
        } else {
          alert(data.data);
        }
      };
      handleProfileBtn();
      setSelected({ ...selectedInput, username: decoded.username });
    }
  }, []);

  const profilestyle = {
    control: (base, state) => ({
      ...base,
      fontSize: 14,
      border: state.isFocused ? 0 : 0,
      width: "100%",
      minWidth: "100%",
      height: "7rem",
      padding: "0 1rem",
      outline: "none",
      backgroundColor: "white",
      boxShadow: "0 10px 35px rgba(0,0,0,.2)",
      overflow: "scroll",
      overflowX: "visible",
    }),
    dropdownIndicator: (base) => ({ ...base, display: "none" }),

    option: (styles, { isFocused }) => {
      return {
        ...styles,
        cursor: "pointer",
        backgroundColor: isFocused ? "rgba(255, 80, 86)" : "white",
        color: isFocused ? "white" : "black",
        lineHeight: 2,
        fontSize: 14,
        width: "25%",
        textAlign: "center",
        zIndex: "0",
      };
    },

    input: (styles) => ({
      ...styles,
      color: "black",
      width: "100vw",
      fontSize: 14,
      zIndex: "0",
      textAlign: "left",
    }),

    menu: (styles) => ({
      ...styles,
      marginTop: 10,
      boxShadow: "0 10px 35px rgba(0,0,0,.2)",
      borderRadius: 0,
      width: "100%",
      minWidth: "100%",
      minHeight: "100%",
      zIndex: "0",
    }),
    multiValue: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#808080" : "rgba(255, 80, 86)",
        fontSize: 15,
        backgroundColor: "rgba(255, 80, 86)",
        color: "white",
        borderRadius: 5,
        padding: "0.3rem",
        cursor: "pointer",
      };
    },
    multiValueLabel: (styles) => ({ ...styles, color: "white" }),
    multiValueRemove: (styles) => ({ ...styles, cursor: "pointer" }),

    menuList: (styles) => ({
      ...styles,
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      width: "100%",
      minHeight: "50vh",
      maxHeight: "70vh",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "rgba(255, 80, 86)",
      width: "50vw",
      minWidth: "300px",
      zIndex: "0",
    }),
  };

  const handleProfileBtn = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      "http://localhost:3500/towatch",
      selectedInput,
      {
        withCredentials: true,
        validateStatus: () => true,
      }
    );
    if (data.status === 200) {
      alert("We have updated your to watch system!");
      props.history.push("/");
    } else {
      alert(data.data);
    }
  };

  const stateLists = stateList.map(({ State }) => {
    return { value: State, label: State };
  });

  const handlemultipleselect = (search) => {
    setMultiSelect(search);
    setSelected({ ...selectedInput, selectedState: search });
  };

  return (
    <div className="Profile">
      <div className="profile-container">
        <div className="profile-top-container">
          <div className="profile-top-sub-container">
            <h1 className="profile-title">PROFILE</h1>
            {/*<p className="profile-username">{decoded.username}</p>*/}
          </div>
          <button
            onClick={handleProfileBtn}
            type="submit"
            className="profile-btn"
          >
            SAVE
          </button>
          <button>Test Button for Email</button>
        </div>
        <div className="profile-select">
          <Select
            options={stateLists}
            placeholder="Select the states that you want to get updated"
            isMulti
            isSearchable={false}
            onChange={handlemultipleselect}
            menuIsOpen
            styles={profilestyle}
            value={multiselect}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
