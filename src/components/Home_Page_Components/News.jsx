"use client";

import React from 'react'
import { newsData } from '@/helper/Utils'
import NewsCard from '@/components/ResuableComponents/NewsCard'

const News = () => {
  return (
    <section className="pt_pb_3 news_section">
    <NewsCard newsData={newsData.slice(0, 3)} showHeader={true} showFooter={true} button={"Alle News"} buttonLink={"/news"} />
  </section>
  )
}

export default News