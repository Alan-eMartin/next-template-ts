import Theme from '@styles/Theme';
import GlobalStyles from '@styles/globalStyles';
import type { AppProps } from 'next/app';
import 'normalize.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyles />
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
