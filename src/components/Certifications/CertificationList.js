import { Container } from "react-bootstrap";
import Certification from "./Certification";

import './CertificationList.css';

export default function CertificationList(props){
    return (
        
        <Container className="certifications">
            <h1>Certifications</h1>
            <Certification 
                score={"963"}
                name={"MOS_Word"} 
                url={"https://www.credly.com/badges/b7c3032c-15ae-4c63-9bf1-1134ee55cb2b"}>
                    Microsoft Office Specialist: Word 2016
            </Certification>
            <Certification
                score={"888"}
                name={"MOS_Word_Expert"}
                url={"https://www.credly.com/badges/e33edfdb-9b7a-48ed-be75-1009358f434c"}>
                    Microsoft Office Specialist: Word 2016 Expert
            </Certification>
            <Certification
                score={"1000"}
                name={"MOS_Excel"}
                url={"https://www.credly.com/badges/ee39acd4-0f01-4971-b730-b4bf6ab42f46"}>
                    Microsoft Office Specialist: Excel 2016
            </Certification>
            <Certification
                score={"925"}
                name={"MOS_Excel_Expert"}
                url={"https://www.credly.com/badges/acc5913c-6d7a-47b9-bf82-f0948ca50cf4"}>
                    Microsoft Office Specialist: Excel 2016 Expert
            </Certification>
            <Certification
                score={"979"}
                name={"MOS_PowerPoint"}
                url={"https://www.credly.com/badges/0b856dd2-d2db-426a-bf50-41bb01a2d75f"}>
                    Microsoft Office Specialist: PowerPoint 2016
            </Certification>
            <Certification
                score={"1000"}
                name={"MOS_Access"}
                url={"https://www.credly.com/badges/9f40bf8d-7d5d-477c-97fe-4a2c5214bbf1"}>
                    Microsoft Office Specialist: Access 2016
            </Certification>
            <Certification
                name={"MOS_Master"}
                url={"https://www.credly.com/badges/51a2dd16-3a53-49e3-b2d3-9c28fdadeccc"}>
                    Microsoft Office Specialist: Master (Office 2016)
            </Certification>
            <Certification
                score={"917"}
                name={"ACA_Photoshop"}
                url={"https://www.credly.com/badges/8cf030fc-e7fd-45b2-95c0-9a24c056d2b0"}>
                    Adobe Certified Associate in Visual Design Using Adobe Photoshop
            </Certification>
            <Certification
                score={"925"}
                name={"ESB"}
                url={"https://www.credly.com/badges/e6fe0adf-ab0f-4d64-b434-b642c47c8147"}>
                    Entrepreneurship and Small Business Certification (ESB)
            </Certification>
            <Certification
                name={"ACE_L1"}
                url={"https://www.credly.com/badges/5877e279-ea9e-4456-99d6-91bd0deab902"}>
                    Adobe Creative Educator Level 1
            </Certification>
      </Container>
    )
}