import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import {
    Box, Heading, Text
} from "@chakra-ui/react";
import { FeatureEditNotification } from "../features/editNotification/FeatureEditNotification";
import { useMessage } from "../hooks/useMessage";
import { instance } from "../axios/config";

export const EditNotification = () => {

    const { showMessage } = useMessage();

    const { id } = useParams();

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [postingDate, setPostingDate] = useState("");
    const [sendingTimes, setSendingTimes] = useState();
    const [response, setResponse] = useState("");

    const [notification, setNotification] = useState(
        {
            name: "",
            address: "",
            postingDate: "",
            sendingTimes: "",
            response: "",
        }
    );

    useEffect(() => {
        instance.get("/notifications/" + id)
            .then(response => {
                setNotification(response.data);
            })
            .catch(error => console.log(error))
    }, [id])

    const changeNotification = (name, address, postingDate, sendingTimes, response) => {
        setName(name);
        setAddress(address);
        setPostingDate(postingDate);
        setSendingTimes(sendingTimes);
        setResponse(response);
    };

    const onClickUpdate = async () => {
        await
            instance.patch("/notifications/" + id, {
                name: name,
                address: address,
                postingDate: postingDate,
                sendingTimes: sendingTimes,
                response: response,
            })
                .then(() => showMessage({
                    title: "更新に成功しました。", status: "success"
                }))
                .catch(() => showMessage({
                    title: "更新に失敗しました。入力に誤りがあります。", status: "error"
                }));
        navigate("/")
    }

    return (
        <>
            <Box px={10} py={5}>
                <Box py={5}>
                    <Heading size="lg">お知らせ送付状況更新</Heading>
                    <Box>
                        <Text fontSize="lg">更新するお知らせの送付状況を入力してください</Text>
                        <br />
                        <FeatureEditNotification onClickUpdate={onClickUpdate} changeNotification={changeNotification} notification={notification} />
                    </Box>
                </Box>
            </Box >
        </>
    );
};
