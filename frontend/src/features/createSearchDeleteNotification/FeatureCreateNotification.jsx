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

export const FeatureCreateNotification = (props) => {

    const { handleValueChange } = props;

    const [newName, setNewName] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newPostingDate, setNewPostingDate] = useState("");
    const [newSendingTimes, setNewSendingTimes] = useState();
    const [newResponse, setNewResponse] = useState("");

    const onChangeName = (e) => setNewName(e.target.value);
    const onChangeAddress = (e) => setNewAddress(e.target.value);
    const onChangePostingDate = (e) => setNewPostingDate(e.target.value);
    const onChangeSendingTimes = (e) => setNewSendingTimes(e.target.value);
    const onChangeResponse = (e) => setNewResponse(e.target.value);

    const onClickRegistration = () => {
        axios
            .post("http://localhost:8080/notifications", { "name": newName, "address": newAddress, "postingDate": newPostingDate, "sendingTimes": newSendingTimes, "response": newResponse })
            .then(response => console.log(response))
            .catch((e) => {
                console.log(e);
            });
        axios
            .get("http://localhost:8080/notifications")
            .then((response) => {
                handleValueChange(response.data);
            })
            .catch(error => console.log(error));
    };

    return (
        <Box py={5}>
            <Heading size="lg">新規お知らせ送付状況登録</Heading>
            <Box>
                <Text fontSize="lg">新規登録するお知らせの送付状況を入力してください</Text>
                <br />
                <Wrap spacing={10}>
                    <Box>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input width={"240px"} placeholder="田中 太郎" value={newName} onChange={onChangeName} />
                            <Text fontSize={"xs"} color={"red.400"}>※ 入力必須</Text>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel>住所</FormLabel>
                            <Input width={"240px"} placeholder="東京" value={newAddress} onChange={onChangeAddress} />
                            <Text fontSize={"xs"} color={"red.400"}>※ 入力必須</Text>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel>お知らせ送付日（直近）</FormLabel>
                            <Input width={"240px"} placeholder="2023-12-31（yyyy-mm-dd）" value={newPostingDate} onChange={onChangePostingDate} />
                            <Text fontSize={"xs"} color={"red.400"}>※ 入力必須</Text>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel>お知らせ送付回数</FormLabel>
                            <Select width={"240px"} placeholder='お知らせ送付回数' value={newSendingTimes} onChange={onChangeSendingTimes}>
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
                            <Select width={"240px"} placeholder='市民からの反応' value={newResponse} onChange={onChangeResponse}>
                                <option>有り</option>
                                <option>無し</option>
                            </Select>
                            <Text fontSize={"xs"} color={"red.400"}>※ 入力必須</Text>
                        </FormControl>
                    </Box>
                </Wrap>
                <br />
                <Stack spacing={4} align='center' direction='row'>
                    <Button colorScheme='teal' size='sm' onClick={onClickRegistration}>
                        登録
                    </Button>
                </Stack>
            </Box>
        </Box>

    );
};