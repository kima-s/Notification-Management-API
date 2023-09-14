import React from "react";
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
import { featureEditNotification } from "../features/editNotification/FeatureEditNotification";


export const EditNotification = () => {
    return (
        <Box px={10} py={5}>
            <featureEditNotification />
        </Box>
    );
};