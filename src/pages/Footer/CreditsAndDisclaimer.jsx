import { useEffect } from 'react';

import './CreditsAndDisclaimer.css';
import ScrollTop from "../../componenets/ScrollTop/ScrollTop";

const CreditsAndDisclaimer = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <>
            <div className="legalContainer">
                <h1>Credits &amp; Disclaimer</h1>
                <hr />

                <section className="creditsSection">
                    <h2>Credits &amp; Attributions</h2>
                    <table className='purposeTable'>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Project Overview:</strong>
                                </td>
                                <td>
                                    The Purple Echo is an independent, fan-created media archive developed by Shruti Mali. 
                                    This platform celebrates the artistic journey and cultural impact of BTS while serving 
                                    as a professional software engineering portfolio project.
                                </td>
                            </tr>
                        </tbody>
                    </table>


                    <div className="intellectualProperty">
                        <h3><strong>Intellectual Property Notice:</strong></h3>
                        <table className='creditsSectionTable'>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Official Media:</strong>
                                    </td>
                                    <td>
                                        All trademarks, logos, member names, album titles, promotional materials, album artwork, 
                                        photographs, and music videos remain the exclusive property of BIGHIT MUSIC, HYBE, and 
                                        their respective copyright holders.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>Musical Content:</strong>
                                    </td>
                                    <td>
                                        Lyrics, translated lyrics, and related musical assets belong to their rightful copyright 
                                        owners. Third-party English translations are credited where applicable.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <strong>External Routing:</strong>
                                    </td>
                                    <td>
                                        Outbound links direct users exclusively to official BTS platforms, verified streaming 
                                        services, and official social media channels.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <hr />

                <section className="disclaimerSection">
                    <h2>Disclaimer</h2>

                    <table className='disclaimerSectionTable'>
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Purpose &amp; Scope:</strong>
                                </td>
                                <td>
                                    This website is an unofficial, non-commercial fan archive built strictly for educational 
                                    and informational purposes.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Non-Affiliation:</strong>
                                </td>
                                <td>
                                    The Purple Echo is completely independent. It is not affiliated with, authorized by, 
                                    sponsored by, or endorsed by BTS, BIGHIT MUSIC, HYBE, or any of their subsidiary organizations.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Content Maintenance:</strong>
                                </td>
                                <td>
                                    All information is compiled from public sources and maintained in good faith. Content may be 
                                    updated, expanded, or corrected without notice as the archive grows.
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Corrections &amp; Contact:</strong>
                                </td>
                                <td>
                                    If you identify inaccurate information, missing attributions, or have copyright concerns 
                                    regarding any material displayed, please 
                                    <a href="mailto:shrutijmali08@gmail.com" className="emailLink">contact the website owner</a> 
                                    for immediate review.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
            <ScrollTop isGlobal={true}></ScrollTop>
        </>
    );
};

export default CreditsAndDisclaimer;
