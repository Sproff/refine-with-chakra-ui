import React from "react";
import { AppProps } from "next/app";
import type { NextPage } from "next";
import { Refine, GitHubBanner, } from '@refinedev/core';
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
    import { notificationProvider
,RefineThemes
,ThemedLayoutV2} from '@refinedev/chakra-ui';
import routerProvider, { UnsavedChangesNotifier, DocumentTitleHandler } from "@refinedev/nextjs-router";

import dataProvider from "@refinedev/simple-rest";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "@components/header"

const API_URL = "https://api.fake-rest.refine.dev";



export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
     noLayout?: boolean;
 };

 type AppPropsWithLayout = AppProps & {
     Component: NextPageWithLayout;
 };

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
    const renderComponent = () => {
        if (Component.noLayout) {
            return <Component {...pageProps} />;
        }

            return (
                <ThemedLayoutV2
                    Header={() => <Header sticky />}
                >
                    <Component {...pageProps} />
                </ThemedLayoutV2>
            );
    };

    
    
    return (
        <>
        <GitHubBanner />
        <RefineKbarProvider>
            {/* You can change the theme colors here. example: theme={RefineThemes.Magenta} */}
<ChakraProvider theme={RefineThemes.Blue}>
            <DevtoolsProvider>
                <Refine 
                    routerProvider={routerProvider}
                    dataProvider={dataProvider(API_URL)}
notificationProvider={notificationProvider}
                    resources={[
                        {
                            name: "blog_posts",
                            list: "/blog-posts",
                            create: "/blog-posts/create",
                            edit: "/blog-posts/edit/:id",
                            show: "/blog-posts/show/:id",
                            meta: {
                                canDelete: true,
                            },
                        },
                        {
                            name: "categories",
                            list: "/categories",
                            create: "/categories/create",
                            edit: "/categories/edit/:id",
                            show: "/categories/show/:id",
                            meta: {
                                canDelete: true,
                            },
                        }
                    ]}
                    options={{
                        syncWithLocation: true,
                        warnWhenUnsavedChanges: true,
                        useNewQueryKeys: true,
                            projectId: "9Dy3A1-D5rY2s-5YtxUn",
                         
                    }}
                >
                    {renderComponent()}
                    <RefineKbar />
                    <UnsavedChangesNotifier />
                    <DocumentTitleHandler />
                </Refine>
                <DevtoolsPanel />
            </DevtoolsProvider>
                </ChakraProvider>

        </RefineKbarProvider>
        </>
      );
};


export default MyApp;
