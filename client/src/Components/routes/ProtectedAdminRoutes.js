import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/features/userSlice";

export default function ProtectedAdminRoute({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const getUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/users/getuserdata",
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.data));
      } else {
        localStorage.clear();
        <Navigate to="/login" />;
      }
    } catch (error) {
      localStorage.clear();
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  // Check if user exists and is an admin, if not redirect to login
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" />;
  } else if (user && user.isAdmin) {
    // If user exists and is an admin, render children
    return children;
  } else {
    // If user exists but is not an admin, redirect to unauthorized page or any other route
    return <Navigate to="/login" />;
  }
}
