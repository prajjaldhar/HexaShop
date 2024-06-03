import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/features/userSlice";

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //   const [isFirstRender, setIsFirstRender] = useState(true);
  //   const [secondRender, setSecondRender] = useState(false);
  const [requestController, setRequestController] = useState(null);

  useEffect(() => {
    // Check if user is already available in localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(setUser(storedUser));
      setIsAuthenticated(true);
      //   setIsFirstRender(false);
      return; // Exit useEffect early if user is available in localStorage
    }

    const source = axios.CancelToken.source();
    setRequestController(source);

    const getUser = async () => {
      try {
        let userData;

        // Attempt to get user data from the first endpoint
        const res1 = await axios.post(
          "/users/getuserdata",
          { token: localStorage.getItem("token") },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            cancelToken: source.token, // Assign cancel token to request
          }
        );

        if (res1.data.success) {
          userData = res1.data.data;
        }
        // else {
        //   // If user data is not found, try getting it from the second endpoint
        //   const res2 = await axios.get("/auth/login/success", {
        //     cancelToken: source.token, // Assign cancel token to request
        //   });
        //   userData = res2.data.user;
        // }

        if (userData) {
          dispatch(setUser(userData));
          setIsAuthenticated(true);
          //   setIsFirstRender(false);
        } else {
          localStorage.clear();
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          // Check if error is not due to cancellation
          localStorage.clear();
          console.log(error);
        }
      }
    };

    getUser(); // Always call getUser on initial render and when user changes

    // Cleanup function
    return () => {
      if (requestController) {
        requestController.cancel("Component unmounted");
      }
    };
  }, [dispatch]);

  // Return children if user is authenticated
  if (isAuthenticated || user) {
    return children;
  } else {
    // Redirect to "/" on the second render or if user is not authenticated
    return <Navigate to="/login" />;
  }
}
