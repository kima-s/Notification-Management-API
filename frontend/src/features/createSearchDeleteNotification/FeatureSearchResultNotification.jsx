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

export const FeatureSearchResultNotification = () => {

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
                            <Tr>
                                <Td>A</Td>
                                <Td>B</Td>
                                <Td>C</Td>
                                <Td>D</Td>
                                <Td>E</Td>
                                <Td>
                                    <Button colorScheme='teal' size='sm'>
                                        削除
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>A</Td>
                                <Td>B</Td>
                                <Td>C</Td>
                                <Td>D</Td>
                                <Td>E</Td>
                                <Td>
                                    <Button colorScheme='teal' size='sm'>
                                        削除
                                    </Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>A</Td>
                                <Td>B</Td>
                                <Td>C</Td>
                                <Td>D</Td>
                                <Td>E</Td>
                                <Td>
                                    <Button colorScheme='teal' size='sm'>
                                        削除
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    )
};