import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#252424',
    color:'white',
    padding: '20px',
    textAlign: 'center',
    
    // position:'absolute',
    left: '0',
    bottom: '0',
    width: '100%',
    
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const socialLinkStyle = {
    margin: '0 10px',
    //color: '#333',
    color:'rgb(236, 223, 207)',
    textDecoration: 'none',
    fontSize: '18px',
  };

  const footerLinksStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const footerLinkItemStyle = {
    display: 'inline',
    marginRight: '15px',
  };

  const footerLinkStyle = {
    textDecoration: 'none',
    //color: '#007BFF',
    color:'rgb(236, 223, 207)'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; {new Date().getFullYear()} Habitat Hunt. All rights reserved.</p>
        <div>
          <a href="https://www.facebook.com/your_facebook_page" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/your_twitter_username" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
            <i className="fab fa-twitter"></i>
          </a>
          {/* <a href="https://www.linkedin.com/in/your_linkedin_profile" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
            <i className="fab fa-linkedin-in"></i>
          </a> */}
          <a href="https://www.instagram.com/devam_krish?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                <i className="fab fa-instagram"></i>
              </a>
        </div>
        <ul style={footerLinksStyle}>
          <li style={footerLinkItemStyle}><a href="/privacy-policy" style={footerLinkStyle}>Privacy Policy</a></li>
          <li style={footerLinkItemStyle}><a href="/terms-of-service" style={footerLinkStyle}>Terms of Service</a></li>
          <li style={footerLinkItemStyle}><a href="/contact-us" style={footerLinkStyle}>Contact Us</a></li>
          {/* <li style={footerLinkItemStyle}><a href="/contact-us" style={footerLinkStyle}>Contact Us</a></li> */}
        
        </ul>
      </div>
    </footer>
  );
};

export default Footer;