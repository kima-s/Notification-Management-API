import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Box, Heading, FormControl, FormLabel, Input, Text, Wrap, Select, Button, Stack, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
} from "@chakra-ui/react";
import { FeatureCreateNotification } from "../features/createSearchDeleteNotification/FeatureCreateNotification";
import { FeatureSearchNotification } from "../features/createSearchDeleteNotification/FeatureSearchNotification";
import { FeatureSearchResultNotification } from "../features/createSearchDeleteNotification/FeatureSearchResultNotification";

export const CreateSearchDeleteNotification = () => {

    const [resultNotifications, setResultNotifications] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/notifications")
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