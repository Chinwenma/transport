import {FaFacebook, FaInstagram, FaLinkedinIn, FaSearch, FaTwitter } from 'react-icons/fa'
import "./Banner.css"
export default function Banner() {
    return (
        <div className="hero" style={{
            backgroundImage: `url("./images/Photo.png")`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '90vh'}}>
            <div className="" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor:' rgba(9, 18, 66, 0.25)' , fontSize:'14px'}}>
                <div className="" style={{width: '400px', marginLeft:'100px'}}>
                                    <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color:' #FFFFFF' }} >
                        <li stlye={{listStyletype:'none', margin:'5px', }}>Home</li>
                        <li stlye={{listStyletype:'none', margin:'5px', }}>About</li>
                        <li stlye={{listStyletype:'none', margin:'5px', }}>Pages</li>
                        <li stlye={{listStyletype:'none', margin:'5px', }}>Projects</li>
                        <li stlye={{listStyletype:'none', margin:'5px',}}>Contact</li>
                    </ul>
                </div>
                <div className=""  style={{width: '400px', marginRight:'100px' , }}>
                    <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' ,padding:'15px 15px' }}>
                        
                        <li><FaSearch style={{ color:' #FFFFFF'}} /></li>
                        <li><FaInstagram  style={{ color:' #FFFFFF'}} /></li>
                        <li><FaFacebook  style={{ color:' #FFFFFF'}} /></li>
                        <li><FaTwitter style={{ color:' #FFFFFF'}} /></li>
                       <li><FaLinkedinIn style={{ color:' #FFFFFF'}} /></li>
                       <div style={{backgroundColor:'#FFFFFF',padding:'12px', }}> <button style={{fontSize:'12px'}} >Request Quote</button></div>                
                    </ul>     
                </div>
            </div>
            <div className="content">
            <p style={{fontSize:"10px", backgroundColor:' rgba(9, 18, 66, 0.25)', width:"40%", padding:"10px" }}>Logistics & Supply Chain Solutions</p>
            <p style={{fontSize:"40px", fontWeight:"bold"}}>Your Gateway <br /> to any Destination <br /> in the World </p>
            <p style={{fontSize:"13px", fontWeight:"light"}}>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu <br /> no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim <br /> diam interdum nulla, sed laoreet risus lectus. </p>
        <button style={{backgroundColor:"yellow", padding:"10px", color:"black", fontSize: "12px"}} >Explore More</button>
            </div>
        </div>
    )
}