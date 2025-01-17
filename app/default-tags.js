'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function DefaultTags({ title, description = null, keywords = null }) {
  const [baseUrl, setBaseUrl] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    setBaseUrl(`${window?.location?.origin}${pathname}`);
  }, [pathname]);

  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="description" content={description ? description : ''} />
      <meta name="keywords" content={keywords ? keywords : ''} />

      {/* new OG TAG Added below */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="es_ES" />
      
      <link rel="canonical" href={baseUrl} />
      <meta property="og:title" content={title ? title : 'The InnerLight'} />
      <meta property="og:site_name" content="The InnerLight" />
      <meta
        property="og:description"
        content={description ? description : 'Online InnerLight software platform | The InnerLight'}
      />
      {/* Use the correct image URL */}
      {/* <meta property="og:image" content={`${window.location.origin}/logo.png`} /> */}
      <meta property="og:type" content="website" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@InnerLight" />
      <meta property="twitter:title" content={title ? title : 'The InnerLight'} />
      <meta
        property="twitter:description"
        content={description ? description : 'Online InnerLight software platform | The InnerLight'}
      />
      <meta name="twitter:creator" content="The InnerLight" />
      {/* <meta name="twitter:image:src" content={`${window.location.origin}/logo.png`} /> */}
      <meta name="twitter:image:alt" content="The InnerLight" />
      <meta name="twitter:domain" content="innerlightacademy.com" />
    </>
  );
}
