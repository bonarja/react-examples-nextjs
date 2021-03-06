import React from "react";
import type { ReactElement } from "react";
import { TemplateProvider } from "./Template";

interface Props {
    children: ReactElement;
}

const AppProvider = ({ children }: Props) => {
    return <TemplateProvider>{children}</TemplateProvider>;
};
export default AppProvider;
