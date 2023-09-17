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
import { Link } from "react-router-dom";

export const FeatureSearchResultNotification = (props) => {

    const { resultNotifications, handleValueDelete } = props;

    const deleteNotification = (id) => {
        axios
            .delete("http://localhost:8080/notifications/" + id, { data: resultNotifications })
            .then(response => {
                console.log(response);
                handleValueDelete(id);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <Box py={5}>
            <Heading size="lg">検索結果</Heading>
            <Box>
                <TableContainer>
                    <Table variant='simple' size="sm">
                        <Thead>
                            <Tr>
                                <Th width={"240px"}>名前</Th>
                                <Th width={"240px"}>住所</Th>
                                <Th width={"240px"}>お知らせ送付日（直近）</Th>
                                <Th width={"240px"}>お知らせ送付回数</Th>
                                <Th width={"240px"}>市民からの反応</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {resultNotifications.map((resultNotifications, index) => (
                                <Tr key={index} >
                                    <Td color={"blue"}>
                                        <Link to={"/EditNotification/" + resultNotifications.id} >{resultNotifications.name}</Link>
                                    </Td>
                                    <Td>{resultNotifications.address}</Td>
                                    <Td>{resultNotifications.postingDate}</Td>
                                    <Td>{resultNotifications.sendingTimes}</Td>
                                    <Td>{resultNotifications.response}</Td>
                                    <Td>
                                        <Button colorScheme='teal' size='sm' onClick={() => deleteNotification(resultNotifications.id)}>
                                            削除
                                        </Button>
                                    </Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box >
    )
};