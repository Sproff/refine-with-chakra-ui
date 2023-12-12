import { ChakraUIListInferencer } from "@refinedev/inferencer/chakra-ui";
import { GetServerSideProps } from "next";




export default function BlogPostList() {
    return <ChakraUIListInferencer 
/>;
}

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {





    return {
        props: {
        },
    };
};
