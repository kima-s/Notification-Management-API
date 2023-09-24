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

export const FeatureSearchNotification = (props) => {
    const { handleValueChange } = props;
    const [searchName, setSearchName] = useState("");
    const [searchElapsedDays, setSearchElapsedDays] = useState("");
    const [searchSendingTimes, setSearchSendingTimes] = useState("");
    const [searchResponse, setSearchResponse] = useState("");


    const onChangeSearchName = (e) => setSearchName(e.target.value);
    const onChangeSearchElapsedDays = (e) => setSearchElapsedDays(e.target.value);
    const onChangeSearchSendingTimes = (e) => setSearchSendingTimes(e.target.value);
    const onChangeSearchResponse = (e) => setSearchResponse(e.target.value);

    const onClickSearch = () => {
        axios
            .get("http://localhost:8080/notifications", {
                params:
                    { "name": searchName, "elapsedDays": searchElapsedDays, "sendingTimes": searchSendingTimes, "response": searchResponse }
            })
            .then(response =>
                handleValueChange(response.data)
            )
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <Box py={5}>
            <Heading size="lg">検索条件入力</Heading>
            <Box>
                <Text fontSize="lg">お知らせ送付状況の検索条件を入力してください</Text>
                <br />
                <Wrap spacing={10}>
                    <Box>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input width={"240px"} placeholder="田中　太郎" value={searchName} onChange={onChangeSearchName} />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel>送付後経過日数</FormLabel>
                            <Input width={"240px"} placeholder="21（dd）" value={searchElapsedDays} onChange={onChangeSearchElapsedDays} />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel>お知らせ送付回数</FormLabel>
                            <Select width={"240px"} placeholder='お知らせ送付回数' value={searchSendingTimes} onChange={onChangeSearchSendingTimes}>
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
                            <Select width={"240px"} placeholder='市民からの反応' value={searchResponse} onChange={onChangeSearchResponse}>
                                <option>有り</option>
                                <option>無し</option>
                            </Select>
                        </FormControl>
                    </Box >
                    <Stack spacing={4} direction='row'>
                        <Flex alignItems="flex-end">
                            <Button colorScheme='orange' variant='outline' size='sm' onClick={onClickSearch}>
                                検索
                            </Button>
                        </Flex>
                    </Stack>
                </Wrap>
            </Box>
        </Box>
    );
};