import React, { useLayoutEffect, useState, useRef } from 'react';
import HeaderDefault from './header-default';
import HeaderSticky from './header-sticky';
import Announcement from './announcement';
import './_header.scss';


const Header = () => {
  const ref = useRef(null);
  const sticky = useStickyHeader(200);
  const headerClasses = `pre-header ${sticky ? 'sticky' : ''}`;
  
  const getSelectionHeader = () => {
    if(sticky){
      return (<HeaderSticky />)
    }else{
      return (<HeaderDefault />)
    }
  };
    return(
      <>
        <div className="header-background">
          <div id="header" className="header">
              <Announcement />
              <div ref={ref} className={headerClasses}>
                { getSelectionHeader() }
              </div>
            </div> 
        </div>
      </>
    )
}


function useStickyHeader(offset = 0) {
  const [stick, setStick] = useState(false);
  
  const handleScroll = () => {
    setStick( window.scrollY > offset );
  };
  
  useLayoutEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });
  
  return stick;
}


export default Header