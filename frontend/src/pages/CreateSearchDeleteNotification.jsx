import React, { useState } from "react";
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

export const CreateSearchNotification = () => {
    return (
        <Box px={10} py={5}>
            <FeatureCreateNotification />
            <br />
            <FeatureSearchNotification />
            <br />
            <FeatureSearchResultNotification />
        </Box>
    );
};