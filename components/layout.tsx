import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';
import { Container, Stack, Typography } from '@mui/material';
import { ReactElement } from 'react';


const name = 'Zachary Jarnagin';
export const siteTitle = 'Zachary Jarnagin';

export default function Layout({children, home}: {children: ReactElement<any, any>, home: boolean}) {
  return (
    <Container maxWidth='md' sx={{marginBottom: 12}}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Stack alignItems={'center'} sx={{marginBottom: 6, marginTop: 8}}>
        <Image
          priority
          src="/images/profile.png"
          style={{ borderRadius: "50%" }}
          height={144}
          width={144}
          alt=""
        />
        <Typography variant="h3" textAlign={'center'} gutterBottom>{name}</Typography>
      </Stack>
      <main>{children}</main>
      {!home && (
        <Container sx={{ marginTop: 4 }} disableGutters>
          <Link href="/">← Back to home</Link>
        </Container>
      )}
    </Container>
  );
}