import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InnerBnanner from '../components/InnerBanner';
import TeamList from '../components/TeamList';

const Team = () => {
return (
<main>
<section className="inner_hero_section">
    <InnerBnanner title={"Nibh vel velit Auctor Aliquet"} heading={ <> Team </> } description={<>Nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,<br /> nisi elit consequat </>}/>
</section>
<section className="team_section pt_pb_3">
    <div className="container">
        <TeamList />
    </div>
</section>
</main>
);
}

export default Team;