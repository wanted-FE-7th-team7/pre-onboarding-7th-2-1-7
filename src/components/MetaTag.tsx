import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cars } from '../interfaces/Cars';

interface Props {
  car: Cars;
}

const MetaTag = ({ car }: Props) => {
  const {
    amount,
    attribute: { brand, name, imageUrl },
  } = car;

  const title = `${brand} - ${name}`;
  const description = '월' + amount.toLocaleString() + '원부터';
  const url = window.location.href;
  const keywords = '알티모빌리티';

  return (
    car && (
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />

        <link rel="canonical" href={url} />
      </Helmet>
    )
  );
};

export default MetaTag;
