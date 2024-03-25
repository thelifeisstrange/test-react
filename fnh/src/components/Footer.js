import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {


  const instagramUrl = 'https://www.instagram.com/faith_n_heal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==';
 
    const phoneNumber = '7066323671'; // Replace with your phone number
  
    const handlePhoneClick = () => {
      window.location.href = `tel:${phoneNumber}`;
    };
  
  const email = 'faithnheal15@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Pages</h2>
            <Link to='/'>Home</Link>
            <Link to='/'>Our Vision</Link>
            <Link to='/'>Services</Link>            
            <Link to='/'>Testimonials</Link>
            <Link to='/support'>Support</Link>
          </div>

          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <ul style={{display: 'flex'}}>
            <div><svg width="18" height="18" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M192.734 9.60937L152.109 0.234372C147.695 -0.781253 143.164 1.52344 141.367 5.66406L122.617 49.4141C120.977 53.2422 122.07 57.7344 125.312 60.3516L148.984 79.7266C134.922 109.688 110.352 134.609 79.7656 148.945L60.3906 125.273C57.7344 122.031 53.2812 120.937 49.4531 122.578L5.70313 141.328C1.52344 143.164 -0.781248 147.695 0.234377 152.109L9.60938 192.734C10.5859 196.953 14.3359 200 18.75 200C118.789 200 200 118.945 200 18.75C200 14.375 196.992 10.5859 192.734 9.60937Z" fill="white"/>
</svg>
</div><div 
      style={{ 
        color: 'white', 
        marginLeft: '20px', 
        textDecoration: 'none',  
        cursor: 'pointer'       
      }}
      onClick={handlePhoneClick}
      onMouseEnter={(e) => { e.target.style.textDecoration = 'underline'; }}  
      onMouseLeave={(e) => { e.target.style.textDecoration = 'none'; }}       
    >
      {phoneNumber}
    </div>
            </ul>
            <ul style={{display: 'flex', marginTop:"5px"}}>
            <div><svg width="18" height="18" viewBox="0 0 200 152" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M200 21.475V137.383C200 144.917 193.9 151.017 186.367 151.017H154.542V73.75L100 114.667L45.4583 73.75V151.025H13.6333C11.8423 151.025 10.0688 150.672 8.41416 149.986C6.75954 149.301 5.25625 148.296 3.99017 147.029C2.72408 145.762 1.72003 144.258 1.03539 142.603C0.350736 140.948 -0.00109223 139.174 2.5471e-06 137.383V21.475C2.5471e-06 4.61667 19.2417 -5.00833 32.725 5.10834L45.4583 14.6667L100 55.5667L154.542 14.65L167.275 5.10834C180.75 -5 200 4.61667 200 21.475Z" fill="white"/>
</svg>

</div><div 
      style={{ 
        color: 'white', 
        marginLeft: '20px', 
        textDecoration: 'none',  // Initially, no underline
        cursor: 'pointer'       // Change cursor to pointer on hover
      }}
      onClick={handleEmailClick}
      onMouseEnter={(e) => { e.target.style.textDecoration = 'underline'; }}  // Add underline on hover
      onMouseLeave={(e) => { e.target.style.textDecoration = 'none'; }}        // Remove underline when not hovering
    >
      {email}
    </div>
            </ul>
            <ul style={{display: 'flex',marginTop:"5px"}}>
            <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C7.28188 0 6.94312 0.013125 5.87937 0.058125C4.81125 0.110625 4.08875 0.27625 3.45125 0.52375C2.78404 0.775638 2.17979 1.17001 1.68062 1.67938C1.16984 2.17737 0.775248 2.78196 0.525 3.45C0.2775 4.0875 0.111875 4.81 0.059375 5.87813C0.01125 6.9425 0.00125 7.28063 0.00125 9.99875C0.00125 12.7169 0.014375 13.0556 0.059375 14.1194C0.111875 15.1844 0.2775 15.91 0.525 16.5475C0.776888 17.2147 1.17126 17.819 1.68062 18.3181C2.17862 18.8289 2.78321 19.2235 3.45125 19.4738C4.08875 19.7181 4.81437 19.8869 5.87937 19.9394C6.94375 19.9875 7.28188 19.9975 10 19.9975C12.7181 19.9975 13.0569 19.9844 14.1206 19.9394C15.1856 19.8869 15.9112 19.7175 16.5488 19.4738C17.216 19.2219 17.8202 18.8275 18.3194 18.3181C18.8308 17.8207 19.2255 17.2159 19.475 16.5475C19.7194 15.91 19.8881 15.1844 19.9406 14.1194C19.9887 13.055 19.9987 12.7169 19.9987 9.99875C19.9987 7.28063 19.9856 6.94188 19.9406 5.87813C19.8881 4.81313 19.7187 4.08375 19.475 3.45C19.2231 2.78279 18.8287 2.17854 18.3194 1.67938C17.8219 1.16793 17.2172 0.773237 16.5488 0.52375C15.9112 0.27625 15.1856 0.110625 14.1206 0.058125C13.0562 0.01 12.7181 0 10 0ZM10 1.8C12.6694 1.8 12.9881 1.81313 14.0431 1.85813C15.0162 1.90375 15.5463 2.06625 15.8981 2.20375C16.3331 2.36433 16.7269 2.61991 17.0506 2.95188C17.382 3.27427 17.6367 3.66709 17.7956 4.10125C17.9331 4.45313 18.0956 4.98313 18.1412 5.95625C18.1862 7.01125 18.1994 7.33063 18.1994 9.99938C18.1994 12.6681 18.1862 12.9875 18.1375 14.0425C18.085 15.0156 17.9225 15.5456 17.7856 15.8975C17.5962 16.3669 17.385 16.695 17.0362 17.05C16.7114 17.3799 16.3179 17.6342 15.8837 17.795C15.5362 17.9325 14.9987 18.095 14.0219 18.1406C12.9612 18.1856 12.6488 18.1988 9.9725 18.1988C7.29625 18.1988 6.98438 18.1856 5.9225 18.1369C4.94937 18.0844 4.4125 17.9219 4.06063 17.785C3.58563 17.5956 3.26 17.3844 2.91125 17.0356C2.55938 16.6838 2.33562 16.3488 2.16313 15.8831C2.02312 15.5356 1.86312 14.9981 1.81125 14.0213C1.77562 12.9731 1.75875 12.6481 1.75875 9.98438C1.75875 7.32188 1.77562 6.99625 1.81125 5.935C1.86312 4.95813 2.02312 4.42188 2.16313 4.07313C2.33562 3.5975 2.56 3.2725 2.91125 2.92063C3.25938 2.5725 3.58563 2.3475 4.06063 2.17125C4.4125 2.03438 4.93625 1.87188 5.91313 1.82313C6.97375 1.785 7.28625 1.77125 9.95875 1.77125L10 1.8ZM10 4.86688C9.32584 4.86663 8.65824 4.99923 8.03535 5.25711C7.41246 5.51499 6.84649 5.89308 6.36978 6.36978C5.89308 6.84649 5.51499 7.41246 5.25711 8.03535C4.99923 8.65824 4.86663 9.32584 4.86688 10C4.86663 10.6742 4.99923 11.3418 5.25711 11.9647C5.51499 12.5875 5.89308 13.1535 6.36978 13.6302C6.84649 14.1069 7.41246 14.485 8.03535 14.7429C8.65824 15.0008 9.32584 15.1334 10 15.1331C10.6742 15.1334 11.3418 15.0008 11.9647 14.7429C12.5875 14.485 13.1535 14.1069 13.6302 13.6302C14.1069 13.1535 14.485 12.5875 14.7429 11.9647C15.0008 11.3418 15.1334 10.6742 15.1331 10C15.1334 9.32584 15.0008 8.65824 14.7429 8.03535C14.485 7.41246 14.1069 6.84649 13.6302 6.36978C13.1535 5.89308 12.5875 5.51499 11.9647 5.25711C11.3418 4.99923 10.6742 4.86663 10 4.86688ZM10 13.3331C8.1575 13.3331 6.66688 11.8425 6.66688 10C6.66688 8.1575 8.1575 6.66688 10 6.66688C11.8425 6.66688 13.3331 8.1575 13.3331 10C13.3331 11.8425 11.8425 13.3331 10 13.3331ZM16.54 4.66188C16.5397 4.98042 16.4129 5.2858 16.1875 5.51092C15.9622 5.73605 15.6567 5.8625 15.3381 5.8625C15.1806 5.8625 15.0247 5.83148 14.8791 5.7712C14.7336 5.71093 14.6014 5.62258 14.49 5.51121C14.3787 5.39984 14.2903 5.26762 14.23 5.12211C14.1698 4.97659 14.1387 4.82063 14.1387 4.66313C14.1387 4.50562 14.1698 4.34966 14.23 4.20414C14.2903 4.05863 14.3787 3.92641 14.49 3.81504C14.6014 3.70367 14.7336 3.61532 14.8791 3.55505C15.0247 3.49477 15.1806 3.46375 15.3381 3.46375C15.9987 3.46375 16.54 4.00125 16.54 4.66188Z" fill="white"/>
</svg>
</div><a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: 'white',
        marginLeft: '20px',
        textDecoration: 'none',
        cursor: 'pointer'
      }}
    >
      Instagram
    </a>
            </ul>
          </div>
      </div>
      </div>      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo' style={{textAlign:"center"}}>
              Faith N Heal Pysiotherapy and Wellness Zone
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>Faith N Heal ©2024</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
