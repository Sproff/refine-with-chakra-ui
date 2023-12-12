import { ChakraUIEditInferencer } from "@refinedev/inferencer/chakra-ui";
import { GetServerSideProps } from "next";



export default function BlogPostEdit() {
    return <ChakraUIEditInferencer 
/>;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {

    




    return {
        props: {
        },
    };
};
