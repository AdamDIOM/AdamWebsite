import { Container } from 'react-bootstrap';
import Box from '../Box/Box';

import './Achievements.css';

export default function Achievements(){
    return (
        <Container className="achievements" id="achievements">
            <h1>Achievements</h1>
            <h2>Find some of my most presitigious achievements listed below</h2>


            <Box
                title="Microsoft Office Specialist World Championship 2018: 3rd Place"
                date="29th July 2018 - 1st August 2018"
                text="Temporary Placeholder Text"
            />

            <Box
                title="Microsoft Office Specialist World Championship 2019: 6th Place"
                date="28th July 2019 - 31st July 2019"
                text={`Competed again, for the second year; in Excel 2016. This time, without the help of a regional Isle of Man final, but instead entering straight as a mainstream competitor needing to earn one of the top scores from the whole of the UK in order to gain a place at the MOS4N, this time held at the British Library on the 14th of June.
                
                The World Championships were held in New York City, NY at the Marriott Marquis, Times Square.`}
            />

        </Container>
    )
    
}