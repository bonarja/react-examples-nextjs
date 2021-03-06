import { ExamplesViewStyles } from "./ExamplesView.styled";
import { ExampleItem, exampleList } from "./exampleList";

const Item = ({
    icon,
    text,
    background,
    key,
}: ExampleItem & { key: number }) => {
    return (
        <div
            className="item animate__animated animate__zoomIn"
            style={{
                animationDelay: key * 55 + "ms",
            }}
        >
            <div className="background">
                {background && (
                    <div className="solid cover" style={{ background }}>
                        {icon && <span className="material-icons">{icon}</span>}
                    </div>
                )}
            </div>
            <div className="text">
                {text.split("<br/>").map((line, i) => (
                    <p key={i}>{line}</p>
                ))}
            </div>
        </div>
    );
};

const ExamplesView = () => {
    return (
        <ExamplesViewStyles className="cover">
            <h1 className="title">Ejemplos</h1>
            <div className="itemsList">
                {exampleList.map((item: ExampleItem, i) => (
                    <Item key={i} {...item} />
                ))}
            </div>
        </ExamplesViewStyles>
    );
};
export default ExamplesView;
