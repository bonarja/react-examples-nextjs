export interface ExampleItem {
    id: number;
    background: string;
    icon: string;
    image: any;
    text: string;
}
export const exampleList: Partial<ExampleItem>[] = [
    {
        id: 1,
        background: "#d4e2e5",
        icon: "label",
        text: `Componentes <br/> (React Hooks)`,
    },
];
