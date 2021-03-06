import Link from "next/link";

const BtnStyle = {
    padding: 20,
    background: "white",
    display: "inline-block",
    cursor: "pointer",
    borderRadius: 4,
    boxShadow: "0px 8px 13px -6px #cfb5c73d",
};

const Hello = () => {
    return (
        <div>
            <h1 style={{ marginTop: 0 }}>HOLA!</h1>

            <Link href="/examples">
                <a className="cover">
                    <div style={BtnStyle}>mostrar ejemplos</div>
                </a>
            </Link>
        </div>
    );
};

export function getStaticProps() {
    return {
        props: {
            title: "Home",
        },
    };
}

export default Hello;
