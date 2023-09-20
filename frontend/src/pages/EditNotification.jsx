import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
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
import { FeatureEditNotification } from "../features/editNotification/FeatureEditNotification";

export const EditNotification = () => {

    const { id } = useParams();

    const navigate = useNavigate()

    const [notification, setNotification] = useState(
        {
            name: "",
            address: "",
            postingDate: "",
            sendingTimes: "",
            response: "",
        }
    );
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [postingDate, setPostingDate] = useState("");
    const [sendingTimes, setSendingTimes] = useState();
    const [response, setResponse] = useState("");

    const onChangeName = (e) => setName(e.target.value);
    const onChangeAddress = (e) => setAddress(e.target.value);
    const onChangePostingDate = (e) => setPostingDate(e.target.value);
    const onChangeSendingTimes = (e) => setSendingTimes(e.target.value);
    const onChangeResponse = (e) => setResponse(e.target.value);

    useEffect(() => {
        axios.get("http://localhost:8080/notifications/" + id)
            .then(response => {
                setNotification(response.data);
            })
            .catch(error => console.log(error))
    }, [id])

    useEffect(() => {
        setName(notification.name);
        setAddress(notification.address);
        setPostingDate(notification.postingDate);
        setSendingTimes(notification.sendingTimes);
        setResponse(notification.response);
    }, [notification])

    const onClickUpdate = () => {
        navigate("/")
        axios
            .patch("http://localhost:8080/notifications/" + id, {
                name: name,
                address: address,
                postingDate: postingDate,
                sendingTimes: sendingTimes,
                response: response,
            })
            .then(response => {
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <>
            <Box px={10} py={5}>
                <Box py={5}>
                    <Heading size="lg">お知らせ送付状況更新</Heading>
                    <Box>
                        <Text fontSize="lg">更新するお知らせの送付状況を入力してください</Text>
                        <br />
                        <Wrap spacing={10}>
                            <Box>
                                <FormControl>
                                    <FormLabel>名前</FormLabel>
                                    <Input width={"240px"} placeholder="田中　太郎" value={name} onChange={onChangeName} />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl>
                                    <FormLabel>住所</FormLabel>
                                    <Input width={"240px"} placeholder="東京" value={address} onChange={onChangeAddress} />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl>
                                    <FormLabel>お知らせ送付日（直近）</FormLabel>
                                    <Input width={"240px"} placeholder="2023-12-31（yyyy-mm-dd）" value={postingDate} onChange={onChangePostingDate} />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl>
                                    <FormLabel>お知らせ送付回数</FormLabel>
                                    <Select width={"240px"} placeholder='お知らせ送付回数' value={sendingTimes} onChange={onChangeSendingTimes}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl>
                                    <FormLabel>市民からの反応</FormLabel>
                                    <Select width={"240px"} placeholder='市民からの反応' value={response} onChange={onChangeResponse}>
                                        <option>有り</option>
                                        <option>無し</option>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Wrap>
                        <br />
                        <Stack spacing={4} align='center' direction='row'>
                            <Link to="/">
                                <Button colorScheme='orange' size='sm' >
                                    戻る
                                </Button>
                            </Link>
                            <Button colorScheme='orange' size='sm' onClick={onClickUpdate}>
                                更新
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Box >
        </>
    );
};