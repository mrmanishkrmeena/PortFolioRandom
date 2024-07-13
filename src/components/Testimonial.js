import React from "react";
import TestimonCard from "./subcomponents/TestimonCard";
import img1 from "../assests/icons/client0.jpeg";
import img2 from "../assests/icons/client1.jpeg";
import img3 from "../assests/icons/client2.jpeg";
import img4 from "../assests/icons/client3.jpeg";
import img5 from "../assests/icons/client4.jpeg";
import img6 from "../assests/icons/client5.jpeg";
import img7 from "../assests/icons/client6.jpeg";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <h1>Clients Feedback</h1>
      <div className="testimonial-main">
        <TestimonCard
          imge={img1}
          para="He is so awosme and does his work very efficiently . and the cost  is aslo affordable , and have a clearity of thorts while working . i have taken his help so many times in my works."
          name="Ramesh Chand "
          compony=" CEO At TestTube Ltd."
        />
         <TestimonCard
          imge={img2}
          para="He is so awosme and does his work very efficiently . and the cost  is aslo affordable , and have a clearity of thorts while working . i have taken his help so many times in my works."
           name="Jams Scott"
          compony=" CEO At Rola"
        />
         <TestimonCard
          imge={img3}
          para="He is so awosme and does his work very efficiently . and the cost  is aslo affordable , and have a clearity of thorts while working . i have taken his help so many times in my works."
          name="Raylin williams"
          compony=" CEO At Tungoston"
        />
         <TestimonCard
          imge={img4}
          para="He is so awosme and does his work very efficiently . and the cost  is aslo affordable , and have a clearity of thorts while working . i have taken his help so many times in my works."
          name="Mohan Singh"
          compony=" CEO At HonyWell"
        />
         <TestimonCard
          imge={img5}
          para="He is so awosme and does his work very efficiently . and the cost  is aslo affordable , and have a clearity of thorts while working . i have taken his help so many times in my works."
          name="Kristofer Tabori"
          compony=" CEO At Chappal"
        />
         <TestimonCard
          imge={img6}
          para="He is so awosme and does his work very efficiently . and the cost  is aslo affordable , and have a clearity of thorts while working . i have taken his help so many times in my works."
          name="Riya Aharma"
          compony=" CEO At Beaty.com"
        />
         <TestimonCard
          imge={img7}
          para="He is so awosme and does his work very efficiently . and the cost  is aslo affordable , and have a clearity of thorts while working . i have taken his help so many times in my works."
          name="Ragini Kumari"
          compony=" CEO At LipLast"
        />
      </div>
    </div>
  );
};

export default Testimonial;
