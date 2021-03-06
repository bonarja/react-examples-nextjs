import DasboaradTemplate from "./Dashboard/Dashboard.template";
import { useEffect, useState } from "react";
import { useTemplate } from "../context/Template";

const TEMPLATES = {
    dashboard: DasboaradTemplate,
};

const Template = ({ children, template, ...props }) => {
    const [currentTemplate, setCurrentTemplate] = useState(template);
    const stateTemplate = useTemplate().template;

    useEffect(() => {
        stateTemplate && setCurrentTemplate(stateTemplate);
    }, [stateTemplate]);

    const Default = TEMPLATES.dashboard;

    const Component = TEMPLATES[currentTemplate] || Default;
    return <Component {...props}>{children}</Component>;
};

export default Template;
