import React, { useReducer, useContext } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axios from "axios";
import * as types from "../types";

const UserState = (props) => {
  const initialState = {
    allUser: null,
  };

  // const { setAlert, clearAlert, setLoading, clearLoading } =
  //   useContext(GlobalContext);

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const updateProfile = async (profile) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/user/updateProfile", profile, config);
      dispatch({ type: types.UPDATE_PROFILE, payload: res.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const updateAboutMe = async (aboutMe) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/user/updateAboutMe", aboutMe, config);
      dispatch({ type: types.UPDATE_ABOUT_ME, payload: res.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const updateSocials = async (socials) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/user/updateSocials", socials, config);
      dispatch({ type: types.UPDATE_SOCIALS, payload: res.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const updateProfessionalInfo = async (professionalInfo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "/api/user/updateProfessionalInfo",
        professionalInfo,
        config
      );
      dispatch({ type: types.UPDATE_PROFESSIONAL_INFO, payload: res.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const updateInterests = async (interests) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "/api/user/updateInterests",
        interests,
        config
      );
      dispatch({ type: types.UPDATE_INTERESTS, payload: res.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const updatePassword = async (passwords) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "/api/user/updatePassword",
        passwords,
        config
      );
      dispatch({ type: types.UPDATE_PASSWORD, payload: res.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };
  
  const getProfile= async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get("/api/user/getProfile", config);
      dispatch({ type: types.GET_PROFILE_SUCCESS, payload: res.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const follow = async (userId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/follow", userId, config);
      dispatch({ type: types.FOLLOW, payload: res.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const unfollow = async (userId) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/unfollow", userId, config);
      dispatch({ type: types.UNFOLLOW, payload: res.data });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <UserContext.Provider
      value={{
        updateProfile,
        updateAboutMe,
        updateSocials,
        updateProfessionalInfo,
        updateInterests,
        updatePassword,
        getProfile,
        allUser: state.allUser,
        follow,
        unfollow,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
