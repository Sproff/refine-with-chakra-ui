import { ChakraUIShowInferencer } from "@refinedev/inferencer/chakra-ui";
import { GetServerSideProps } from "next";



export default function CategoryShow() {
    return <ChakraUIShowInferencer
    />;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {

    




    return {
        props: {
        },
    };
};
