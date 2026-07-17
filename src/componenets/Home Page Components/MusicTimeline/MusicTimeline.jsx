import Slider from '@mui/material/Slider';
import musicTimeline from '../../../data/music-timeline/musicTimeline';
import { useState } from 'react';

import './MusicTimeline.css';

const MusicTimeline = ({ year }) => {
    const [activeYear, setActiveYear] = useState(2013);

    const handleActiveYear = (event, updatedYear) => {
        setActiveYear(updatedYear);
    };

    const activeYearData = musicTimeline.find((item) => item.year === activeYear);
    const activeYearRecords = activeYearData ? activeYearData.albums : null;
    const activeYearEvents = activeYearData ? activeYearData.events : null;

    return (
        <div className='musicTimelineDiv'>
            <div className='sliderDiv'>
                <p>Use the slider to view yearly releases and events. </p>
                <Slider
                    aria-label="Music Timeline"
                    onChange={handleActiveYear}
                    value={activeYear}
                    defaultValue={2013}
                    step={1}
                    marks
                    min={2013}
                    max={2026}
                    className='constellationSlider'
                />
            </div>

            <div className='displayText' key={activeYear}>
                <h3>{activeYear}</h3>
                {
                    activeYearEvents && (
                        <div className='activeYearEvents'>
                            <ul>
                                {
                                    activeYearEvents.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
                {
                    activeYearRecords && (
                        <table className='activeYearRecordsTable'>
                            <thead>
                                <tr>
                                    <th>Release Cover</th>
                                    <th>Release Title</th>
                                    <th>Release Type</th>
                                    <th>Release Date</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    activeYearRecords.map((release, index) => (
                                        <tr key={index}>
                                            <td><img src={release.releaseCover}></img></td>
                                            <td>{release?.releaseTitle}</td>
                                            <td>{release?.releaseType}</td>
                                            <td>{release?.releaseDate}</td>
                                            <td>{release?.releaseDescription}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>

        </div>
    );
};

export default MusicTimeline;