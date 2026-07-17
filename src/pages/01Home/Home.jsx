// data
import memInfo from "../../data/members-home-page-images/memInfo";

import rmProfile from "../../data/members-home-page-pop-up/01rm";
import jinProfile from "../../data/members-home-page-pop-up/02jin";
import sugaProfile from "../../data/members-home-page-pop-up/03suga";
import jhopeProfile from "../../data/members-home-page-pop-up/04jhope";
import jiminProfile from "../../data/members-home-page-pop-up/05jimin";
import vProfile from "../../data/members-home-page-pop-up/06v";
import jungkookProfile from "../../data/members-home-page-pop-up/07jungkook";

import arirangAlbumCover from "../../static/images/home-page/arirang-album-cover.jpg";

// components
import MemberCardHomePage from "../../componenets/Home Page Components/MemberCardHomePage/MemberCardHomePage";
import MemberModal from "../../componenets/Home Page Components/MemberModal/MemberModal";
import Placeholder from "../../componenets/Home Page Components/MemberModal/MemberModalPlaceholder";
import MusicTimeline from "../../componenets/Home Page Components/MusicTimeline/MusicTimeline";

// css
import './Home.css';

// hooks
import { useState, useEffect } from "react";

import ScrollTop from "../../componenets/ScrollTop/ScrollTop";

const memberProfiles = [...rmProfile, ...jinProfile, ...sugaProfile, ...jhopeProfile, ...jiminProfile, ...vProfile, ...jungkookProfile]

function Home() {
    // Track which member modal is active - null means closed
    const [selectedMember, setSelectedMember] = useState(null);

    const handleOpenModal = (id) => {
        const memberId = memberProfiles.find((member) => member.id === id);

        if (!memberId) {
            console.warn(`No member profile found for id: ${id}`);
            setSelectedMember(id);
            return;
        }

        setSelectedMember(memberId.id);
    };

    const handleCloseModal = () => {
        setSelectedMember(null);
    };


    // Freezes the home screen when the modal is open
    useEffect(() => {
        (selectedMember) ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';

        // Clean up function - to avoid leaks
        return () => { document.body.style.overflow = 'unset'; }
    }, [selectedMember]);

    return (
        <>
            <div className={`homeContent ${selectedMember ? 'blurBackground' : ''}`}>
                <section className="homeHeroSection">
                    <p className="quoteText">"The starlight shines brighter in the deepest night"</p>
                    <div className="quoteAuthor">
                        <span>— "Mikrokosmos"  (English Translation) </span>
                        <span>MAP OF THE SOUL: PERSONA, BTS</span>
                    </div>
                </section>

                <hr></hr>

                <section className="membersSection">
                    <h2>MEET THE ARTISTS</h2>
                    <br></br>
                    <p>Click a member card to explore their story.</p>

                    <div className="memberList">
                        {
                            memInfo.map((member, index) =>
                            (
                                <div
                                    key={index}
                                    className="memberModalWrapper"
                                    onClick={() => {
                                        handleOpenModal(member.id);
                                    }}>

                                    <MemberCardHomePage
                                        member={member} />
                                </div>

                            ))
                        }
                    </div>

                    <div className="memberModal">
                        {
                            // ORIGINAL - TO BE UNCOMMENTED AFTER POPULATION OF ALL ARRAYS

                            // (selectedMember !== null) && (
                            //     <MemberModal
                            //         key={selectedMember}
                            //         member={memberProfiles.find(profile => profile.id === selectedMember)}
                            //         onClose={handleCloseModal} />)

                            (selectedMember !== null && selectedMember === 1) && (
                                <MemberModal
                                    key={selectedMember}
                                    member={memberProfiles.find(profile => profile.id === selectedMember)}
                                    onClose={handleCloseModal} />)
                        }

                        {
                            (selectedMember !== null && selectedMember !== 1) && (
                                <Placeholder
                                    key={selectedMember}
                                    onClose={handleCloseModal} />)
                        }
                    </div>
                </section>

                <hr></hr>

                <section className="musicTimelineSection">
                    <h2>MUSIC TIMELINE</h2>
                    <MusicTimeline />
                </section>

                <hr></hr>

                <section className="messageSection">
                    <h2>THE MESSAGE</h2>
                    <div className="messageSectionContent">
                        <p>From their debut, BTS has crafted a resonant sonic universe that breaks boundaries,
                            using their music to speak directly to the hearts of a global audience. Their diverse
                            discography serves as a mirror to the human experience, deeply exploring universal
                            themes of youth, the pains of growth, the search for identity, the importance of self-love,
                            and the pursuit of dreams. By vulnerably sharing their own struggles and triumphs, they
                            transcend language barriers, proving that raw, honest emotion needs no translation. This
                            enduring message of healing and resilience is beautifully encapsulated in their monumental
                            2026 comeback album, ARIRANG. Drawing inspiration from the traditional Korean folk song of
                            the same name, the album symbolizes a powerful return to their roots while capturing timeless
                            sentiments of separation, reunion, and perseverance. <br /><br /> BTS reminds people all
                            over the world that no matter how arduous the journey, we are never truly walking alone.</p>

                        <img src={arirangAlbumCover}></img>
                    </div>
                </section>

                <hr></hr>

                {/* TO BE UNCOMMENTED LATER */}
                {/* <section className="infoSection" style={{ height: "400px" }}>
                    <h2>INFO SECTION</h2>

                </section>

                <hr></hr> */}

                <section className="futureSection">
                    <h2>FUTURE</h2>
                    <p>As BTS enters a new chapter, The Purple Echo will continue documenting their evolving today. <br /> 보라해 (Translation: Purple You 💜)</p>
                </section>


            </div>
            <ScrollTop isGlobal={true}></ScrollTop>
        </>
    );
}

export default Home;