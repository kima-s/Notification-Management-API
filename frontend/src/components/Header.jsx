import { HStack, Heading } from "@chakra-ui/react";

export const Header = () => {

    return (
        <HStack background="orange.300" px={7} py={2} spacing={5}>
            <Heading size="lg" color="white">✉️ お知らせ送付状況管理アプリ</Heading>
        </HStack>
    )
};
