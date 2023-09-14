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

export const FeatureEditNotification = () => {

    return (
        <Box py={5}>
            <Heading size="lg">お知らせ送付状況更新</Heading>
            <Box>
                <Text fontSize="lg">更新するお知らせの送付状況を入力してください</Text>
                <br />
                <Wrap spacing={10}>
                    <Box>
                        <FormControl>
                            <FormLabel>名前</FormLabel>
                            <Input width={"240px"} placeholder="田中 太郎" />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel>住所</FormLabel>
                            <Input width={"240px"} placeholder="東京" />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel>お知らせ送付日（直近）</FormLabel>
                            <Input width={"240px"} placeholder="2023-12-31（yyyy-mm-dd）" />
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl>
                            <FormLabel>お知らせ送付回数</FormLabel>
                            <Select width={"240px"} placeholder='お知らせ送付回数'>
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
                            <Select width={"240px"} placeholder='市民からの反応'>
                                <option>有り</option>
                                <option>無し</option>
                            </Select>
                        </FormControl>
                    </Box>
                </Wrap>
                <br />
                <Stack spacing={4} align='center' direction='row'>
                    <Button colorScheme='teal' size='sm'>
                        戻る
                    </Button>
                    <Button colorScheme='teal' size='sm'>
                        更新
                    </Button>
                </Stack>
            </Box>
        </Box>
    )
};