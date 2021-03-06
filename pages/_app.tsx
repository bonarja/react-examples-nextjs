import AppProvider from "../context";
import "../styles/globals.css";
import "../node_modules/animate.css";
import Template from "../templates";

function MyApp({ Component, pageProps, template }) {
    return (
        <AppProvider>
            <Template template={template} {...pageProps}>
                <Component />
            </Template>
        </AppProvider>
    );
}

export default MyApp;
