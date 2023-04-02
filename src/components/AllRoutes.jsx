/* eslint-disable no-undef */
import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowList from "./ShowList";
import SummaryPage from "./ShowSummary";

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={<ShowList/>}/>
            <Route path="/show/:id" element={<SummaryPage />} />
        </Routes>
    </div>
  )
};
export default MainRoutes;
