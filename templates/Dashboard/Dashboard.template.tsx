import { DashboardStyles } from "./Dashboard.Styled";

const Header = ({ title }) => {
    const DEFAULT_TITLE = "React Examples";
    return (
        <div className="header">
            <div className="title">{title || DEFAULT_TITLE}</div>
        </div>
    );
};

const DasboaradTemplate = ({ children, ...props }) => {
    const { title } = props;

    return (
        <DashboardStyles headerSize={50}>
            <div className="window animate__animated animate__slideInDown">
                <div className="wrapContent">
                    <Header title={title} />
                    <div className="content">{children}</div>
                </div>
            </div>
        </DashboardStyles>
    );
};

export default DasboaradTemplate;
