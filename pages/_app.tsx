import { MantineProvider } from "@mantine/core";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import createClient from "../utils/supabase";

export default function App({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  const exampleCheckoutObject = {
    totalAmount: {
      value: 499,
      currency: "PHP",
      details: {
        discount: 0,
        serviceCharge: 0,
        shippingFee: 0,
        tax: 0,
        subtotal: 499,
      },
    },
    buyer: {
      firstName: "John",
      middleName: "Paul",
      lastName: "Doe",
      birthday: "1995-10-24",
      customerSince: "1995-10-24",
      sex: "M",
      contact: {
        phone: "+639181008888",
        email: "merchant@merchantsite.com",
      },
      shippingAddress: {
        firstName: "John",
        middleName: "Paul",
        lastName: "Doe",
        phone: "+639181008888",
        email: "merchant@merchantsite.com",
        line1: "6F Launchpad",
        line2: "Reliance Street",
        city: "Mandaluyong City",
        state: "Metro Manila",
        zipCode: "1552",
        countryCode: "PH",
        shippingType: "ST", // ST - for standard, SD - for same day
      },
      billingAddress: {
        line1: "6F Launchpad",
        line2: "Reliance Street",
        city: "Mandaluyong City",
        state: "Metro Manila",
        zipCode: "1552",
        countryCode: "PH",
      },
    },
    items: [
      {
        name: "One Month Premium Subscription",
        quantity: 1,
        code: "CVG-096732",
        description: "Shoes",
        amount: {
          value: 499,
          details: {
            discount: 0,
            serviceCharge: 0,
            shippingFee: 0,
            tax: 0,
            subtotal: 499,
          },
        },
        totalAmount: {
          value: 499,
          details: {
            discount: 0,
            serviceCharge: 0,
            shippingFee: 0,
            tax: 0,
            subtotal: 499,
          },
        },
      },
    ],
    redirectUrl: {
      success: "http://localhost:3000/pay/success",
      failure: "http://localhost:3000/pay/fail",
      cancel: "http://localhost:3000/pay/cancel",
    },
    requestReferenceNumber: "1551191039",
    metadata: {},
  };
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <SessionContextProvider
        supabaseClient={createClient}
        initialSession={pageProps.initialSession}
      >
        <CartContext.Provider value={exampleCheckoutObject}>
          <Component {...pageProps} />
        </CartContext.Provider>
      </SessionContextProvider>
    </MantineProvider>
  );
}
