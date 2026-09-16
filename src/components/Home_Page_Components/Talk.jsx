"use client";

import React from "react";
import { useSelector } from "react-redux";

import TalkSection from "@/components/TalkSection";

const Talk = () => {
  const talkData = useSelector(
    (state) =>
      state.home.data?.hero?.kontaktbereich
  );

  if (!talkData) {
    return null;
  }

  return (
    <section className="pt_pb_3 talk_section">
      <TalkSection talkData={talkData} />
    </section>
  );
};

export default Talk;