import React from 'react';

const AccountNavigation = () => {
  return(
      <>
        <div className="search-holder">
          <ul>
            <li>
              <a href="#"><i className="scape-basic-Globe"></i></a>
            </li>
            <li>
              <a href="#"><i className="scape-basic-Search"></i></a>
            </li>
            <li>
              <a href="#"><i className="scape-basic-Shopping-Cart"></i></a>
            </li>
          </ul>
        </div>
        <div className="account-navigation">
          <ul>
            <li>
              <a href="#" className="btn btn-purple-color">Kayıt Ol</a>
            </li>
            <li>
              <a href="#" className="btn btn-base-color">Giriş Yap</a>
            </li>
          </ul>
        </div>
      </>
  )
}

export default AccountNavigation