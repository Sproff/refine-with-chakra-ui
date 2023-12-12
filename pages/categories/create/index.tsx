import { ChakraUICreateInferencer } from "@refinedev/inferencer/chakra-ui";
import { GetServerSideProps } from "next";



export default function CategoryCreate() {
    return <ChakraUICreateInferencer 
    />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
    




    return {
        props: {
        },
    };
};
