
import { Container } from "react-bootstrap";
import Certification from "./Certification";

import './CertificationList.css';

export default function CertificationList(props){
    
    return (        
        <Container className="certifications" id="certifications">
            <h1>Certifications</h1>
            <h2>Find below the professional certifications I have earned</h2>

            {/*<Accordion>
                <Accordion.Toggle eventKey="0">
                <img src={`certification-images/MOS_Word.png`} className="cert-image" alt={`certification badge - MOS_Word`}/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                        <Certification 
                            score={"963"}
                            name={"MOS_Word"}
                            date={"March 2018"} 
                            title={"Microsoft Office Specialist: Word 2016"}
                            url={"https://www.credly.com/badges/b7c3032c-15ae-4c63-9bf1-1134ee55cb2b"}
                        />
                </Accordion.Collapse>
                <Accordion.Toggle eventKey="1">
                <img src={`certification-images/MOS_Word.png`} className="cert-image" alt={`certification badge - MOS_Word`}/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                        <Certification 
                            score={"963"}
                            name={"MOS_Word"}
                            date={"March 2018"} 
                            title={"Microsoft Office Specialist: Word 2016"}
                            url={"https://www.credly.com/badges/b7c3032c-15ae-4c63-9bf1-1134ee55cb2b"}
                        />
                </Accordion.Collapse>
            </Accordion>
            */}
            <Certification 
                score={"963"}
                name={"MOS_Word"}
                date={"March 2018"} 
                title={"Microsoft Office Specialist: Word 2016"}
                url={"https://www.credly.com/badges/b7c3032c-15ae-4c63-9bf1-1134ee55cb2b"}
            />

            <Certification
                score={"888"}
                name={"MOS_Word_Expert"}
                date={"October 2018"} 
                title={"Microsoft Office Specialist: Word 2016 Expert"}
                url={"https://www.credly.com/badges/e33edfdb-9b7a-48ed-be75-1009358f434c"}
            />

            <Certification
                score={"1000"}
                name={"MOS_Excel"}
                date={"May 2019"} 
                title={"Microsoft Office Specialist: Excel 2016"}
                url={"https://www.credly.com/badges/ee39acd4-0f01-4971-b730-b4bf6ab42f46"}
            />

            <Certification
                score={"925"}
                name={"MOS_Excel_Expert"}
                date={"March 2020"} 
                title={"Microsoft Office Specialist: Excel 2016 Expert"}
                url={"https://www.credly.com/badges/acc5913c-6d7a-47b9-bf82-f0948ca50cf4"}
            />

            <Certification
                score={"979"}
                name={"MOS_PowerPoint"}
                date={"July 2020"} 
                title={"Microsoft Office Specialist: PowerPoint 2016"}
                url={"https://www.credly.com/badges/0b856dd2-d2db-426a-bf50-41bb01a2d75f"}
            />
            
            <Certification
                score={"1000"}
                name={"MOS_Access"}
                date={"July 2020"} 
                title={"Microsoft Office Specialist: Access 2016"}
                url={"https://www.credly.com/badges/9f40bf8d-7d5d-477c-97fe-4a2c5214bbf1"}
            />
                    
            <Certification
                name={"MOS_Master"}
                date={"July 2020"} 
                title={"Microsoft Office Specialist: Master (Office 2016"}
                url={"https://www.credly.com/badges/51a2dd16-3a53-49e3-b2d3-9c28fdadeccc"}
            />
                    
            <Certification
                score={"917"}
                name={"ACA_Photoshop"}
                date={"June 2020"} 
                title={"Adobe Certified Associate in Visual Design Using Adobe Photoshop"}
                url={"https://www.credly.com/badges/8cf030fc-e7fd-45b2-95c0-9a24c056d2b0"}
            />
                    
            <Certification
                score={"925"}
                name={"ESB"}
                date={"June 2020"} 
                title={"Entrepreneurship and Small Business Certification (ESB)"}
                url={"https://www.credly.com/badges/e6fe0adf-ab0f-4d64-b434-b642c47c8147"}
            />
                    
            <Certification
                name={"ACE_L1"}
                date={"October 2020"} 
                title={"Adobe Creative Educator Level 1"}
                url={"https://www.credly.com/badges/5877e279-ea9e-4456-99d6-91bd0deab902"}
            />
            
      </Container>
    )
}