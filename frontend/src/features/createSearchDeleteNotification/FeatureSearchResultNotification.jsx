import React, { useState } from "react";
import axios from "axios";
import {
    Box, Heading, Text, Button, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer
} from "@chakra-ui/react";
import "../../App.css";
import { Link } from "react-router-dom";
import { useMessage } from "../../hooks/useMessage";
import { instance } from "../../axios/config";

export const FeatureSearchResultNotification = (props) => {

    const { showMessage } = useMessage();

    const { resultNotifications, handleValueDelete } = props;

    const deleteNotification = (id) => {

        instance.delete("/notifications/" + id, { data: resultNotifications })
            .then(response => {
                console.log(response);
                handleValueDelete(id);
                showMessage({
                    title: "削除に成功しました。", status: "success"
                })
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const deadline = new Date(Date.now());
    deadline.setDate(deadline.getDate() - 21);

    return (
        <Box py={5}>
            <Heading size="lg">検索結果</Heading>
            <Text fontSize={"xs"} color={"red.400"}>※ 反応が無く、送付後３週間経過している場合、赤く色付けされます。</Text>
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
                                <Tr key={index} style={(new Date(resultNotifications.postingDate) < deadline) ? (resultNotifications.response === "無し") ? { background: "#ffe4e1" } : {} : {}}>
                                    <Td color={"blue"}>
                                        <Link to={"/EditNotification/" + resultNotifications.id} >{resultNotifications.name}</Link>
                                    </Td>
                                    <Td>{resultNotifications.address}</Td>
                                    <Td>{resultNotifications.postingDate}</Td>
                                    <Td>{resultNotifications.sendingTimes}</Td>
                                    <Td>{resultNotifications.response}</Td>
                                    <Td>
                                        <Button colorScheme='orange' variant='outline' size='sm' onClick={() => deleteNotification(resultNotifications.id)}>
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
