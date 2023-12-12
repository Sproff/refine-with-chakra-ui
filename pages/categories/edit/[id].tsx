import { ChakraUIEditInferencer } from "@refinedev/inferencer/chakra-ui";
import { GetServerSideProps } from "next";



export default function CategoryEdit() {
    return <ChakraUIEditInferencer 
    />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {

    




    return {
        props: {
        },
    };
};
