import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { userTypes, UserTypeContext } from "contexts/UserTypeContext";

import AdminLayout from "layouts/Admin/Admin.js";
import UserLayout from "layouts/User/User.js";
import PublicLayout from "layouts/Public/Public.js";
import RTLLayout from "layouts/RTL/RTL.js";

export default function RouterWrapper(prop) {
  const [user_type, setUserType] = useState(userTypes.unAuthenticated);

  function changeType(type) {
    setUserType(type);
  }

  const userType = user_type;

  return (
    <UserTypeContext.Provider
      value={{ type: user_type, changeType: changeType }}
    >
      <BrowserRouter>
        <Routes>
          {userType === "unAuthenticated" && (
            <>
              <Route path="/public/*" element={<PublicLayout />} />
              <Route
                path="*"
                element={<Navigate to="/public/signIn" replace />}
              />
            </>
          )}

          {userType === "admin" && (
            <>
              <Route path="/admin/*" element={<AdminLayout />} />
              <Route
                path="*"
                element={<Navigate to="/admin/dashboard" replace />}
              />
            </>
          )}

          {userType === "user" && (
            <>
              <Route path="/user/*" element={<UserLayout />} />
              <Route path="*" element={<Navigate to="/user/icons" replace />} />
            </>
          )}

          {/* <Route path="/rtl/*" element={<RTLLayout />} /> */}
          <Route
            path="*"
            element={<Navigate to="/admin/dashboard" replace />}
          />
        </Routes>
      </BrowserRouter>
    </UserTypeContext.Provider>
  );
}
