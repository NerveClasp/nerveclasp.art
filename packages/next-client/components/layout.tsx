import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import logo from '../public/android-icon-48x48.png';
import Link from 'next/link';

export const siteTitle = 'NerveClasp.art';

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  const menuItems = [
    { label: 'Home', url: '/' },
    { label: 'Blog', url: '/blog' },
    { label: 'Contact', url: '/contact' },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal website/portfolio of Romka (NerveClasp) Horokhov"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josephine+Sans&display=swap"
          rel="stylesheet"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div>
          <Image src={logo} width={48} height={48} alt="NerveClasp.art logo" />
        </div>
        <ul className={styles.topMenu}>
          {menuItems.map(({ label, url }) => (
            <li key={label} className={styles.topMenuItem}>
              <Link href={url}>
                <a>{label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
