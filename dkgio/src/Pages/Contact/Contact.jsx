import React from 'react';
import { AiOutlinePhone, AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import SiteHeader from '../../Components/Common/SiteHeader/SiteHeader';
import './Contact.css'

const Contact = () => {
  return (
      <>
      <SiteHeader />
      <div className='contact container'>
        <div className='contact-column-bigger'>
          <div className='contact-spiel'>
            <h2>Hello! It's me! Broker of pineapples, eater of fruit, spinner of webs and maker of sites. Just kidding. It is me though, 
              the guy who made this site. Normal business hours are 8 - 4 but I don't run a business so that doesn't really matter.
              Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Enim tortor at auctor urna nunc id. Accumsan tortor posuere 
              ac ut consequat semper viverra. Vulputate dignissim suspendisse in est ante in nibh mauris. Curabitur vitae nunc sed velit 
              dignissim sodales ut. In dictum non consectetur a erat nam at lectus urna. Pellentesque dignissim enim sit amet venenatis 
              urna cursus eget nunc. Dictum sit amet justo donec. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin 
              libero. Egestas integer eget aliquet nibh. Orci sagittis eu volutpat odio.  </h2>
          </div>
          <div className='contact-me'>
            <div className='contact-me-row'>
              <AiOutlinePhone size={30}/>
              <h2>1-888-447-5594</h2>
            </div>
            <div className='contact-me-row'>
              <AiOutlineHome size={30} />
              <h2>Muncie, IN</h2>
            </div>
            <div className='contact-me-row'>
              <AiOutlineMail size={30} />
              <h2>urmom@tpl.com</h2>
            </div>
          </div>
        </div>
        <div className='contact-column'>
          <h2>Some otherthing lala hurp de durp o durp i should get a latin text generator or something. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida 
            arcu ac tortor. Et netus et malesuada fames ac turpis egestas. Etiam dignissim diam quis enim lobortis scelerisque 
            fermentum dui faucibus. Senectus et netus et malesuada fames ac. Nisi porta lorem mollis aliquam ut porttitor leo. 
            Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Cras tincidunt lobortis feugiat vivamus at 
            augue eget. Porttitor eget dolor morbi non arcu risus. Aliquet sagittis id consectetur purus. Convallis aenean et tortor 
            at risus viverra adipiscing. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Luctus venenatis 
            lectus magna fringilla urna porttitor rhoncus dolor purus. Commodo odio aenean sed adipiscing diam donec.</h2>
        </div>
      </div>
      </>
  );
};

export default Contact;