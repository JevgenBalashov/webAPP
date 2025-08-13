import { PayPalScriptOptions } from '@paypal/paypal-js';

const paypalScriptOptions: PayPalScriptOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
  currency: 'USD',
  components: 'card-fields,buttons',
};

export default paypalScriptOptions;
