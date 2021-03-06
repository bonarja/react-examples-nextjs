import React, { useState } from "react";
import type { ReactElement } from "react";

import { TemplateContext } from "./context";

interface Props {
    children: ReactElement;
}

const TemplateProvider = ({ children }: Props) => {
    const [template, setTemplate] = useState(null);
    const [data, setData] = useState({});

    return (
        <TemplateContext.Provider
            value={{
                template,
                setTemplate,
                data,
                setData,
            }}
        >
            {children}
        </TemplateContext.Provider>
    );
};

export default TemplateProvider;
