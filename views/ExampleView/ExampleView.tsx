import { useRouter } from "next/router";
import { useEffect } from "react";

const ExampleView = () => {
    const router = useRouter();
    console.log(router);

    useEffect(() => {
        (async () => {
            // const path = `favicon.ico`;
            // const data = await import(path);
            const data = await fetch("/examples/1.md").then((resp) =>
                resp.text()
            );
            console.log(String(data));
        })();
    }, []);

    return <div>pagina de example</div>;
};

export default ExampleView;
