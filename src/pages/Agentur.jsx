import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InnerBnanner from '../components/InnerBanner';
import TalkSection from '../components/TalkSection';

const Agentur = () => {
return (
<main>
<section className="inner_hero_section">
    <InnerBnanner />
</section>
<section className="pt_pb_3 talk_section">
    <TalkSection />
</section>
</main>
);
}

export default Agentur;