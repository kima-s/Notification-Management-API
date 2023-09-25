import { memo } from "react";
import { Header } from "./Header";

export const HeaderLayout = memo((props) => {
    const { children } = props;

    return (
        <>
            <Header />
            {children}
        </>
    );
});
