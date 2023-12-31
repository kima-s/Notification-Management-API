import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { FeatureCreateNotification } from "./createSearchDeleteNotification/FeatureCreateNotification";
import { FeatureSearchNotification } from "./createSearchDeleteNotification/FeatureSearchNotification";
import { FeatureSearchResultNotification } from "./createSearchDeleteNotification/FeatureSearchResultNotification";
import { instance } from "../axios/config";

export const CreateSearchDeleteNotification = () => {

    const [resultNotifications, setResultNotifications] = useState([]);

    useEffect(() => {
        instance.get("/notifications")
            .then(response => {
                setResultNotifications(response.data);
            })
            .catch(error => console.log(error))
    }, [])

    const handleValueChange = (newValue) => {
        setResultNotifications(newValue);
    };

    const handleValueDelete = (id) => {
        setResultNotifications(resultNotifications.filter((notification) => notification.id !== id));
    };

    return (
        <Box px={10} py={5}>
            <FeatureCreateNotification handleValueChange={handleValueChange} />
            <br />
            <FeatureSearchNotification handleValueChange={handleValueChange} />
            <br />
            <FeatureSearchResultNotification resultNotifications={resultNotifications} handleValueDelete={handleValueDelete} />
        </Box>
    );
};
