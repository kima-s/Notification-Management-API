import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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


export const FeatureEditNotification = (props) => {

    const { onClickUpdate, changeNotification, notification } = props;

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
        setName(notification.name);
        setAddress(notification.address);
        setPostingDate(notification.postingDate);
        setSendingTimes(notification.sendingTimes);
        setResponse(notification.response);
    }, [notification])

    useEffect(() => changeNotification(name, address, postingDate, sendingTimes, response), [name, address, postingDate, sendingTimes, response]);

    return (
        <>
            <Wrap spacing={10}>
                <Box>
                    <FormControl>
                        <FormLabel>名前</FormLabel>
                        <Input width={"240px"} placeholder="田中　太郎" value={name} onChange={onChangeName} />
                        <Text fontSize={"xs"} color={"red.400"}>※ 入力必須</Text>
                        <Text fontSize={"xs"} color={"red.400"}>※ 姓と名の間には全角１マス空けてください</Text>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel>住所</FormLabel>
                        <Input width={"240px"} placeholder="東京" value={address} onChange={onChangeAddress} />
                        <Text fontSize={"xs"} color={"red.400"}>※ 入力必須</Text>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel>お知らせ送付日（直近）</FormLabel>
                        <Input width={"240px"} placeholder="2023-12-31（yyyy-mm-dd）" value={postingDate} onChange={onChangePostingDate} />
                        <Text fontSize={"xs"} color={"red.400"}>※ 入力必須</Text>
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
                        <Text fontSize={"xs"} color={"red.400"}>※ 入力必須</Text>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl>
                        <FormLabel>市民からの反応</FormLabel>
                        <Select width={"240px"} placeholder='市民からの反応' value={response} onChange={onChangeResponse}>
                            <option>有り</option>
                            <option>無し</option>
                        </Select>
                        <Text fontSize={"xs"} color={"red.400"}>※ 入力必須</Text>
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
        </>
    )
};