import { ExampleListViewStyles } from "./ExampleListView.styled";
import { ExampleItem, exampleList } from "./ExampleList";
import Link from "next/link";

const Item = ({
    id,
    icon,
    text,
    background,
    key,
}: ExampleItem & { key: number }) => {
    return (
        <Link href={`/example/${id}`}>
            <div
                className="item animate__animated animate__zoomIn"
                style={{
                    animationDelay: key * 55 + "ms",
                }}
            >
                <div className="background">
                    {background && (
                        <div className="solid cover" style={{ background }}>
                            {icon && (
                                <span className="material-icons">{icon}</span>
                            )}
                        </div>
                    )}
                </div>
                <div className="text">
                    {text.split("<br/>").map((line, i) => (
                        <p key={i}>{line}</p>
                    ))}
                </div>
            </div>
        </Link>
    );
};

const ExampleListView = () => {
    return (
        <ExampleListViewStyles className="cover">
            <h1 className="title">Ejemplos</h1>
            <div className="itemsList">
                {exampleList.map((item: ExampleItem) => (
                    <Item key={item.id} {...item} />
                ))}
            </div>
        </ExampleListViewStyles>
    );
};
export default ExampleListView;
