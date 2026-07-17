import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AiFillCloseSquare } from 'react-icons/ai';
import { SocialIcon } from 'react-social-icons';

import './MemberModal.css'
import ScrollReveal from '../../ScrollReveal/ScrollReveal';
import ScrollTop from '../../ScrollTop/ScrollTop';
import Carousel from '../../Carousel/Carousel';

function MemberModal({ member, onClose }) {

    const modalRef = useRef(null);

    // Filtering and storing the awards in multiple arrays 
    const featuredAwards = member.awards.filter(award => (award.featured === true));
    const selectedAwards = member.awards.filter(award => (award.selected === true));
    const restAwards = member.awards.filter(award => ((award.featured === false) && (award.selected === false)));

    // Sorting the array based on category and the year
    const sortedRestAwards = restAwards.toSorted((a, b) => {
        const categoryCompare = a.category.localeCompare(b.category);

        if (categoryCompare !== 0) {
            return categoryCompare;
        }

        return b.year - a.year;
    });

    // Creating a portal to display the pop up dialogue box design
    return createPortal(
        <div className='backdropOverlay' onClick={onClose}>
            <div className='modalContainer' onClick={(e) => e.stopPropagation()}>
                <article className='wholeContainer'
                    onClick={(e) => e.stopPropagation()}
                    ref={modalRef}>
                    <section className='header'>
                        <div className='nameAndRole'>
                            <h1>{member.stageName}</h1>
                            <h3>{member.role}</h3>
                        </div>
                        <AiFillCloseSquare className='closeButton' onClick={onClose}></AiFillCloseSquare>
                    </section>

                    <section className='heroSection'>
                        <img src={member.mainImage} alt={member.stageName}></img>

                        <div className='heroText'>
                            <h2>{member.quote}</h2>
                            <h4>{member.quoteSaidWhen}</h4>
                            <hr />

                            <div className='biodata'>
                                <div>
                                    <p><b>Name:</b> {member.name}</p>
                                    <p><b>Birthdate:</b> {member.birthdate}</p>
                                </div>
                                <div className='ageAndHeight'>
                                    <p><b>Age:</b> {member.age}</p>
                                    <p style={{ margin: '10px 10px 15px 30px' }}><b>Height:</b> {member.height}</p>
                                </div>
                            </div>
                            <div className='socials'>
                                {member.socials?.spotify && (
                                    <SocialIcon url={member.socials.spotify} target="_blank" rel="noopener noreferrer" onClick={(e) => {
                                        e.preventDefault(); // Blocks the default router/same-tab behavior
                                        window.open(member.socials.spotify, '_blank', 'noopener,noreferrer');
                                    }} />
                                )}
                                {member.socials?.youtube && (
                                    <SocialIcon url={member.socials.youtube} target="_blank" rel="noopener noreferrer" onClick={(e) => {
                                        e.preventDefault(); // Blocks the default router/same-tab behavior
                                        window.open(member.socials.youtube, '_blank', 'noopener,noreferrer');
                                    }} />
                                )}
                                {member.socials?.instagram && (
                                    <SocialIcon url={member.socials.instagram} target="_blank" rel="noopener noreferrer" onClick={(e) => {
                                        e.preventDefault(); // Blocks the default router/same-tab behavior
                                        window.open(member.socials.instagram, '_blank', 'noopener,noreferrer');
                                    }} />
                                )}
                                {member.socials?.tiktok && (
                                    <SocialIcon url={member.socials.tiktok} target="_blank" rel="noopener noreferrer" onClick={(e) => {
                                        e.preventDefault(); // Blocks the default router/same-tab behavior
                                        window.open(member.socials.tiktok, '_blank', 'noopener,noreferrer');
                                    }} />
                                )}
                            </div>
                            <hr />
                        </div>
                    </section>

                    <section className='introSection'>
                        <div>
                            <h2>WHO?</h2>
                            <p>{member.whoIsHe}</p>
                        </div>
                        <img src={member.introSectionImages} alt={member.stageName}></img>
                    </section>

                    <hr />

                    <ScrollReveal>
                        <section className='discographySection'>
                            <div>
                                <h2>DISCOGRAPHY</h2>
                                <ol>
                                    {
                                        member.discography?.map((pointer, index) => (
                                            <li key={index}>{pointer}</li>
                                        ))
                                    }
                                </ol>
                            </div>
                            <Carousel className="carousel" data={member.discographyImages}></Carousel>
                        </section>

                        <hr />
                    </ScrollReveal>

                    {/* NO FLEX BOX */}
                    <ScrollReveal>
                        <section className='bt21Section'>
                            <h2>BT21 CHARACTER</h2>
                            <p>BT21 is a globally popular character brand created by
                                the K-pop group BTS in collaboration with LINE FRIENDS. </p>
                            <img src={member.bt21Images}></img>
                            <div className='bt21SectionText'>
                                <div className='bt21SectionIntro'>
                                    <p><b>Name: </b>{member.bt21?.name}</p>
                                    <p><b>Animal: </b>{member.bt21?.animal}</p>
                                </div>
                                <div className='bt21SectionDescription'>
                                    <p>{member.bt21?.description}</p>
                                </div>
                            </div>
                        </section>

                        <hr />
                    </ScrollReveal>

                    <ScrollReveal>
                        <section className='achievementsSection'>
                            <h2>ACHIEVEMENTS</h2>
                            <ExpandableText
                                data={member.achievements}
                                type="list"
                                maxLength={4}></ExpandableText>
                        </section>

                        <hr />
                    </ScrollReveal>

                    <ScrollReveal>
                        <section className='awardsSection'>
                            <h2>AWARDS</h2>

                            <h3>Featured Awards</h3>
                            <table className='featuredAwardsTable'>
                                <thead>
                                    <tr>
                                        <th>Award</th>
                                        <th>Year</th>
                                        <th>Category</th>
                                        <th>Recipient</th>
                                        <th>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        featuredAwards.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.award}</td>
                                                <td>{item.year}</td>
                                                <td>{item.category}</td>
                                                <td>{item.recipient}</td>
                                                <td>{item.result}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                            <hr></hr>
                            <table className='selectedAwardsTable'>
                                <thead>
                                    <tr>
                                        <th>Award</th>
                                        <th>Year</th>
                                        <th>Category</th>
                                        <th>Recipient</th>
                                        <th>Result</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        selectedAwards.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.award}</td>
                                                <td>{item.year}</td>
                                                <td>{item.category}</td>
                                                <td>{item.recipient}</td>
                                                <td>{item.result}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                            <ExpandableText
                                data={sortedRestAwards}
                                type="awardsTable"
                                maxLength={0}></ExpandableText>
                        </section>

                        <hr />
                    </ScrollReveal>

                    <ScrollReveal>
                        <section className='philanthropicSection'>
                            <Carousel className="carousel" data={member.philanthropicSectionImages}></Carousel>

                            <div className='philanthropicSectionText'>
                                <h2>PHILANTHROPY</h2>

                                <ExpandableText
                                    data={member.philanthropy}
                                    type="list"
                                    maxLength={4}>
                                </ExpandableText>
                            </div>
                        </section>

                        <hr />
                    </ScrollReveal>

                    <ScrollReveal>
                        <section className='endorsementsSection'>
                            <Carousel className="carousel" data={member.endorsementImages}></Carousel>

                            <div className='endorsementSectionText'>
                                <h2>ENDORSEMENTS</h2>

                                <ExpandableText
                                    data={member.endorsements}
                                    type="endorsementTable"
                                    maxLength={7}></ExpandableText>
                            </div>
                        </section>
                    </ScrollReveal>

                </article>
                <ScrollTop container={modalRef}></ScrollTop>

            </div>
        </div>
        , document.getElementById('modalRoot'));
}


// Show more/less section
function ExpandableText({ data, type, maxLength }) {

    const [isExpanded, setExpandableText] = useState(false);
    const buttonRef = useRef(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        if (hasInteracted && !isExpanded && buttonRef.current) {
            const parentSection = buttonRef.current.closest('section');
            const modalContainer = buttonRef.current.closest('.wholeContainer');

            if (parentSection && modalContainer) {
                const sectionRect = parentSection.getBoundingClientRect();
                const containerRect = modalContainer.getBoundingClientRect();

                const offset = sectionRect.top - containerRect.top;

                modalContainer.scrollTo({
                    top: modalContainer.scrollTop + offset - 30,
                    behavior: "smooth"
                });
            }
        }
    }, [isExpanded, hasInteracted]);


    const handleToggle = () => {
        setHasInteracted(true);
        setExpandableText(!isExpanded);
    }

    let visibleData;

    if (isExpanded) {
        visibleData = data;
    }
    else {
        visibleData = data.slice(0, maxLength);
    }

    return (
        <>
            {
                type === "list" && (
                    <ul>
                        {
                            visibleData?.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>)
            }

            {
                type === "endorsementTable" && (
                    <table className='endorsementTable'>
                        <thead>
                            <tr>
                                <th>Organization</th>
                                <th>Role</th>
                                <th>Year</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                visibleData?.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.organization}</td>
                                        <td>{item.role}</td>
                                        <td>{item.year}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table >
                )
            }

            {
                type === "awardsTable" && (
                    <table className='restAwardsTable'>
                        <tbody>
                            {
                                visibleData?.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.award}</td>
                                        <td>{item.year}</td>
                                        <td>{item.category}</td>
                                        <td>{item.recipient}</td>
                                        <td>{item.result}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }

            {
                (data.length > maxLength) && (
                    <div className='expandButtonDiv' >
                        <button className='expandButton'
                            ref={buttonRef}
                            onClick={handleToggle}>
                            {
                                isExpanded ? "Show Less" : "Show More"
                            }
                        </button>
                    </div>
                )
            }

        </>
    );
}

export default MemberModal;