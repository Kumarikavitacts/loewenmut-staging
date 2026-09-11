import React, { useState } from "react";
import { teamMembers } from "../helper/TeamUtil";

const Shape = ({ type, index }) => {
return (
    <span className={`animated-shape shape-${type} shape-index-${index}`}/>
);
};

const TeamList = () => {
const [selectedMember, setSelectedMember] = useState(null);
const openModal = (member) => {
    setSelectedMember(member);
};
const closeModal = () => {
    setSelectedMember(null);
};

const tags = [
    { text: "Glungegumper", color: "yellow" },
    { text: "Tüpfischüsser", color: "blue" },
    { text: "Kapitän", color: "green" },
    { text: "Macher", color: "pink" },
    { text: "Loewenherz", color: "purple" },
];

return (
    <>
    <div className="row g-4">
        {teamMembers.map((member, index) => (
        <div className="col-6 col-lg-4 team-column" key={`${member.name}-${index}`}>
            <div className="team-card" onClick={() => openModal(member)} role="button">
                <div className={`team-image tm-img-bgcolor ${member.color}`}>
                    {/* Animated background elements */}
                    <div className="animated-background">
                        {(member.shapes || ["blob", "wave", "dots"]).map(
                            (shape, shapeIndex) => (
                            <Shape key={shapeIndex} type={shape} index={shapeIndex} />
                            )
                        )}
                    </div>
                    {/* Person */}
                    <img src={member.image} alt={member.name} className="team-person" />
                    {/* Arrow */}
                </div>
                <div className="team-info">
                    <div className="">
                        <div className="team-role">{member.role}</div>
                        <h3>{member.name}</h3>
                    </div>
                    <button className="team-arrow" type="button">
                        <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34" cy="34" r="34" fill="var(--bs-themecolor)"/><path d="M52.9381 34.3368L38.8989 48.9256L36.8233 46.7682L47.3874 35.7894H15.6914V32.76H47.1105L36.5429 21.78L38.6256 19.6152L52.9381 34.3368Z" fill="#373737"/></svg>
                    </button>
                </div>
            </div>
        </div>
        ))}
    </div>

    {/* =========================
          TEAM MODAL
      ========================= */}

    {selectedMember && (
    <div className="team-modal-backdrop" onClick={closeModal}>
        <div className="team-modal" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button type="button" className="team-modal-close" onClick={closeModal} aria-label="Close">
                <img src="./images/modal-close.svg" />
            </button>
            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className={`team-modal-image tm-img-bgcolor ${selectedMember.color}`}>
                        {/* Animated background elements */}
                        <div className="animated-background">
                            {(selectedMember.shapes || ["blob", "wave", "dots"]).map(
                            (shape, shapeIndex) => (
                                <Shape key={shapeIndex} type={shape} index={shapeIndex} />
                            )
                            )}
                        </div>
                        <img src={selectedMember.image} alt={selectedMember.name} className="team-person"/>
                    </div>
                </div>
                {/* Content */}
                <div className="col-md-7">
                    <div className="team-modal-content">
                        <div className="team-role">{selectedMember.role}</div>
                        <h2 className="fs_50 fw-bold">{selectedMember.name}</h2>
                        <div className="tags-wrapper">
                            {tags.map((tag) => (
                                <span key={tag.text} className={`tag tag-${tag.color}`}>{tag.text} </span>
                            ))}
                        </div>
                        <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p>
                        <p>Cursus a sit amet mauris. Morbi et amet accumsan ipsum velit.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )}

    </>
);
};

export default TeamList;