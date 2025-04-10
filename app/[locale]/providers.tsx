"use client"

import { Component, PropsWithChildren } from "react";
// import { I18nProvider } from '../../locales';
import { I18nProviderClient } from "@/locales/client";

export const Providers = (props: PropsWithChildren<{locale: string}>) => {
    return (
        // <I18nProvider locale={pageProps.locale}>
        //   <Component {...pageProps} />
        // </I18nProvider>
        <I18nProviderClient locale={props.locale}>{props.children}</I18nProviderClient>
      )
}