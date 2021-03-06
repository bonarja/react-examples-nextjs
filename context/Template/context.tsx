import React, { createContext } from "react";

export const TemplateContext = createContext({});
export function useTemplate() {
    const context = React.useContext(TemplateContext);
    if (context === undefined) {
        throw new Error("useTemplate must be used within an TemplateProvider");
    }
    return context as {
        setTemplate: Function;
        template: string;
        data: any;
        setData: Function;
    };
}
