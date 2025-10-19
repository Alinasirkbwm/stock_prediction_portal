import React, { useEffect } from "react";
import axios from "axios";
import axiosInstance from "../../../axiosinstance";

const Dashboard = () => {
    const token = localStorage.getItem("accessToken");



    useEffect(() => {
        const fetchProtected = async () => {
            try {
                const response = await axiosInstance.get("protected-view",);
                console.log("find data", response.data);
            } catch (error) {
                console.error("error in fetching:", error);
            }
        };

        fetchProtected();
    }, []);

    return (
        <div>
            <h1 className="text-light">hello</h1>
        </div>
    );
};

export default Dashboard;
