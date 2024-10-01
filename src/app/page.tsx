/* eslint-disable @typescript-eslint/no-explicit-any */

import Banner from '@/components/home/Banner';
import FlashSell from '@/components/home/FlashSell';
import Header from '@/components/home/Header';
import React from 'react';

const HomePage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banners`, { cache: 'no-store' })
  const data = await res.json();
  const banners = data?.data;
  const bannerImg = banners?.map((banner: any) => {
    return {
      src: banner.url,
      alt: `image ${banner.id}`
    }
  })
  return (
    <div>
      <Banner images={bannerImg} />
      <Header />
      <FlashSell />
    </div>
  );
};

export default HomePage;