import React from 'react'
import logo from '../assets/qht-logo-final.png';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='container-fluid px-3 px-md-5 pb-5 pb-md-0 pt-5' style={{backgroundColor:"#3d4536"}} id='footer'>
                <div className='row justify-content-between'>
                    <div className='col-md-4'>
                        <div>
                            <a className="navbar-brand" href="#"><img src={logo} width="200" alt="" /></a>
                        </div>
                        <div>
                            <h6 className='foot-branch text-white'>North India Branch</h6>
                            <h6 className='f-link'>QHT Clinic,521, Model Colony, Haridwar, Uttrakhand</h6>
                            <h6 className='f-link pt-2'>D-15, Outer Ring Rd, Prashant Vihar, Sectore 14, Rohini, New Delhi, Delhi, 110085</h6>
                        </div>
                        <div>
                            <h6 className='foot-branch text-white'>South India Branch</h6>
                            <h6 className='f-link'>QHT Clinic Opposite Hotel Park Hyatt Road No. 2 Banjara Hills, Hyderabad, Telangana</h6>
                        </div>
                        <div className='py-2'>
                            <h6 className='f-a'>+91-9084726916</h6>
                            <h6 className='f-a'>hello@qhtclinic.com</h6>
                            <div style={{ display: 'flex', gap: '20px', fontSize: '20px' }}>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram color="#ffffff" />
                                </a>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebookF color="#ffffff" />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn color="#ffffff" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7'>
                        <div className='row border-bottom'>
                            <div className="col-md-6">
                                <h4 className='text-white my-3'>Our Services</h4>
                                <ul className='list-unstyled'>
                                    <li>Hair Transplant For Men
                                    </li><li>Hairline Reconstruction
                                    </li><li>Failed Hair Transplant Repair
                                    </li><li>Body Hair Transplant
                                    </li><li>Minimal Shave Hair Transplantation
                                    </li><li>Beard Hair Transplant
                                    </li><li>Dense Hair Implantation   </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h4 className='text-white my-3'>Company Links</h4>
                                <ul className='list-unstyled'>
                                    <li>About Us
                                    </li><li>Hair Transplant with QHT Technique
                                    </li><li>Gallery
                                    </li><li>Blogs
                                    </li><li>Faq
                                    </li><li>Contact Us
                                    </li><li>Medical Tourism</li>
                                </ul>
                            </div>
                        </div>
                        <div className='row border-bottom'>
                            <h4 className='text-white my-3'>In Your City</h4>
                            <ul className='list-unstyled column-md-3'>
                                <li>Hair Transplant in Delhi
                                </li><li>Hair Transplant in Bangalore
                                </li><li>Hair Transplant in Lucknow
                                </li><li>Hair Transplant In Chennai
                                </li><li>Hair Transplant In Hyderabad
                                </li><li>Hair Transplant in Kolkata
                                </li><li>Hair Transplant In Jaipur
                                </li><li>Hair Transplant in Ghaziabad
                                </li><li>Hair Transplant In Mumbai</li>
                            </ul>
                        </div>
                        <div className='row'>
                            <h4 className='text-white my-3'>In Your Country</h4>
                            <ul className='list-unstyled column-md-3'>
                                <li>Hair Transplant In India
                                </li><li>Hair Transplant In Germany
                                </li><li>Hair Transplant In Canada
                                </li><li>Hair Transplant In Australia
                                </li><li>Hair Transplant In Switzerland
                                </li><li>Hair Transplant In Japan
                                </li><li>Hair Transplant in China
                                </li><li>Hair Transplant In New Zealand
                                </li><li>Hair Transplant In Mexico  </li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-top mt-3 pb-2 pt-4'>
                        <p className='text-center text-md-start'>
                        © 2025 QHT Regrow Hair &nbsp; l &nbsp; Privacy Policy &nbsp; l &nbsp; Terms & Conditions
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer