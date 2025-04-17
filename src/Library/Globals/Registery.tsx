"use client";

import isPropValid from "@emotion/is-prop-valid";
import {useServerInsertedHTML} from "next/navigation";
import React, {ReactNode, useState} from "react";
import {ServerStyleSheet, StyleSheetManager} from "styled-components";

export default function StyledComponentsRegistry({
                                                     children,
                                                 }: {
    children: ReactNode;
}) {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== "undefined") return <>{children}</>;

    return (
        <StyleSheetManager
            sheet={styledComponentsStyleSheet.instance}
            shouldForwardProp={(propName, elementToBeRendered) => {
                return typeof elementToBeRendered === "string"
                    ? isPropValid(propName) && !["height", "width"].includes(propName)
                    : true;
            }}
        >
            {children}
        </StyleSheetManager>
    );
}
