import {FaFacebook, FaInstagram, FaSearch, FaTwitter } from 'react-icons/fa'
export default function Banner() {
    return (
        <div className="hero" style={{
            backgroundImage: `url("./images/Photo.png")`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '80vh'}}>
            <div className="" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="" style={{width: '400px', marginLeft:'100px'}}>
                                    <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                        <li stlye={{listStyletype:'none', margin:'5px', color:'white' }}>Home</li>
                        <li stlye={{listStyletype:'none', margin:'5px', color:'white' }}>About</li>
                        <li stlye={{listStyletype:'none', margin:'5px', color:'white' }}>Pages</li>
                        <li stlye={{listStyletype:'none', margin:'5px', color:'white' }}>Projects</li>
                        <li stlye={{listStyletype:'none', margin:'5px', color:'white'}}>Contact</li>
                    </ul>
                </div>
                <div className="">
                    <ul>
                        
                        <li><FaSearch style={{fontSize:'20px', color:'greengit '}} /></li>
                        <li><FaFacebook /></li>
                        <li><FaTwitter/></li>
                        <li><FaInstagram/></li>
                        <li>Contact</li>
                    </ul>
                    btu
                </div>

            </div>
        </div>
    )
}