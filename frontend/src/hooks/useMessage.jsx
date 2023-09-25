import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

export const useMessage = () => {
    const toast = useToast();

    const showMessage = useCallback((props) => {
        const { title, status } = props;
        toast({
            title: title,
            status: status,
            position: "top",
            duration: 3000,
            isClosable: true
        });
    }, [toast]);

    return { showMessage };
};
