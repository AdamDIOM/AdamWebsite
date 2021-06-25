import { Container } from 'react-bootstrap';
import Box from '../Box/Box';

import './News.css';

export default function News(){
    return (
        <Container className="news" id="news">
            <h1>Adam in the News</h1>
            <h2>This section contains different links to articles about me</h2>
            <Box
                title="Isle of Man teenager proves he’s one of the best Word users in the world"
                date="13th August 2018"
                text={`"15-year-old Adam Drummond won a bronze medal at the Microsoft Office Specialist World Championship, taking home a cheque for $1,500."`}
                link="https://news.microsoft.com/en-gb/2018/08/13/uk-teenager-proves-hes-one-of-the-best-word-users-in-the-world/"
            />
        </Container>
    ) 
}