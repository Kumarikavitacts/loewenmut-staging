"use client";

import React from 'react'
import TalkSection from '@/components/TalkSection'
import { useSelector } from 'react-redux';

const Talk = () => {
  const talkData = useSelector((state) => state.home.data?.hero);

  if (!talkData) {
    return null;
  }
  const data =talkData?.kontaktbereich
  return (
    <section className="pt_pb_3 talk_section">
    <TalkSection talkData={data} />
  </section>  )
}

export default Talk