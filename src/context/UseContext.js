//Create Context And Provider with a state variable user info

import axios from "axios";
import React, { useEffect } from "react";
import { createContext } from "react";
import AuthHandler from "../auth/authHandler";
import { accountBackendUrl, caBaseUrl } from "../utils/urls";

export const UserContext = createContext();

function UserDetails(props) {
  const [excelId, setExcelId] = React.useState();
  const [profile, setProfile] = React.useState();
  const [referrelId, setReferrelId] = React.useState();
  const [isAmbassador, setIsAmbassador] = React.useState(false);

  const getExcelId = async (access_token) => {
    await axios
      .get(`${accountBackendUrl}/Profile`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => {
        setExcelId(response.data.id);
        return response.data.id;
      });
  };

  useEffect(() => {
    axios.get(`${caBaseUrl}/ambassador`).then(
      (response) => {
        if (response.data) {
          if (response.data.find((item) => item.excelId === excelId)) {
            setIsAmbassador(true);
            setReferrelId(excelId);
            // setReferrelId(response.data);
          } else {
            setIsAmbassador(false);
          }
        }
      },
      (error) => {
        // console.log(error);
      }
    );
  }, [excelId]);

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) {
      AuthHandler.aysncGetAccessToken(
        localStorage.getItem("refreshToken")
      ).then((access_token) => {
        if (access_token) {
          getExcelId(access_token);
        }
      });
    } else {
      let index = window.location.href.indexOf("?");
      const searchString = window.location.href.slice(index);
      const urlParams = new URLSearchParams(searchString);
      const refreshToken = urlParams.get("refreshToken");
      if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
      AuthHandler.aysncGetAccessToken(refreshToken).then((access_token) => {
        if (access_token) {
          getExcelId(access_token);
        }
      });

      if (index >= 0) {
        window.open(window.location.href.slice(0, index), "_self");
      }
    }
    // eslint-disable-next-line
  }, []);

  return (
    <UserContext.Provider
      value={{
        excelId,
        getExcelId,
        profile,
        referrelId,
        setReferrelId,
        setExcelId,
        setProfile,
        setIsAmbassador,
        isAmbassador,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserDetails;