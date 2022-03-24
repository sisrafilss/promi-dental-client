import React from 'react';
import { Link } from 'react-router-dom';

const HomeSIngleService = ({ icon, title, description, border_class}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-6 col-md-6">
            <div className={border_class ? `service-box ${border_class} text-center mb-30` : 'service-box text-center mb-30'}>
               <div className="service-thumb">
                  <img src={`img/services/${icon}.jpg`} alt=""/>
               </div>
               <div className="service-content">
                  <h3><Link to="/servicesDetails">{title}</Link></h3>
                  <p>{description?.slice(0, 140)}...</p>
                  <Link className="service-link" to="/servicesDetails">Read More</Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSIngleService;