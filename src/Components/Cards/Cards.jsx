import "./cards.Module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Cards() {
  return (
    <>
      <div className="header pb-12">
        <div className="container ps-10">
          <h1 className=" font-normal text-6xl pb-4 ps-4 ">Doctors</h1>
          <p className="text-gray-500 text-base ps-5">
            Meet the talented team of dentists at our clinic, who are dedicated
            to providing personalized care to each of our patients.
          </p>
        </div>
      </div>
      <div className="doctors-info mb-[50px]">
        <div className="container">
          <div className="doctors">
            <div className="doctor-card  border-solid border-2 bg-gray-100 ">
              <div className="card-header">
                <h3 className="font-medium 	text-2xl ">Mark Hoffman</h3>
                <h6 className="text-gray-400   text-lg pt-2">
                  Cosmetic Dentistry
                </h6>
              </div>
              <div className="card-img  ">
                <img
                  className="rounded-full "
                  src="./img/doc1.jpg"
                  alt="person"
                />
              </div>
              <hr className="line-style" />
              <div className="card-footer">
                <p>Open Profile ↘</p>

                <div className="icon">
                  <FontAwesomeIcon className="i" icon={faTwitter} size="xl" />
                  <FontAwesomeIcon className="i" icon={faLinkedin} size="xl" />
                </div>
              </div>
            </div>
            <div className="doctor-card bg-gray-100">
              <div className="card-header">
                <h3 className="font-medium 	text-2xl ">Anne Middleton</h3>
                <h6 className="text-gray-400  text-lg pt-2">
                  Preventive Dentistry
                </h6>
              </div>
              <div className="card-img">
                <img
                  className="rounded-full "
                  src="./img/doc2.jpg"
                  alt="person"
                />
              </div>
              <hr className="line-style" />
              <div className="card-footer">
                <p>Open Profile ↘</p>
                <div className="icon">
                  <FontAwesomeIcon className="i" icon={faTwitter} size="xl" />
                  <FontAwesomeIcon className="i" icon={faLinkedin} size="xl" />
                </div>
              </div>
            </div>
            <div className="doctor-card bg-gray-100">
              <div className="card-header">
                <h3 className="font-medium 	text-2xl ">John Pierson,RDH</h3>
                <h6 className="text-gray-400  text-lg pt-2">
                  Orthodontic Solutions
                </h6>
              </div>
              <div className="card-img">
                <img
                  className="rounded-full "
                  src="./img/doc3.jpg"
                  alt="person"
                />
              </div>
              <hr className="line-style" />
              <div className="card-footer">
                <p>Open Profile ↘</p>
                <div className="icon">
                  <FontAwesomeIcon className="i" icon={faTwitter} size="xl" />
                  <FontAwesomeIcon className="i" icon={faLinkedin} size="xl" />
                </div>
              </div>
            </div>
            <div className="doctor-card bg-gray-100">
              <div className="card-header">
                <h3 className="font-medium 	text-2xl ">Amy Holland</h3>
                <h6 className="text-gray-400  text-lg pt-2">
                  Specialized Care
                </h6>
              </div>
              <div className="card-img">
                <img
                  className="rounded-full "
                  src="./img/doc4.jpg"
                  alt="person"
                />
              </div>
              <hr className="line-style " />
              <div className="card-footer">
                <p>Open Profile ↘</p>
                <div className="icon">
                  <FontAwesomeIcon className="i" icon={faTwitter} size="xl" />
                  <FontAwesomeIcon className="i" icon={faLinkedin} size="xl" />
                </div>
              </div>
            </div>
            <div className="doctor-card bg-gray-100">
              <div className="card-header">
                <h3 className="font-medium 	text-2xl   ">John Ruiz,MD</h3>
                <h6 className="text-gray-400   text-lg pt-2">
                  Specialized Care
                </h6>
              </div>
              <div className="card-img">
                <img
                  className="rounded-full "
                  src="./img/doc5.jpg"
                  alt="person"
                />
              </div>
              <hr className="line-style" />
              <div className="card-footer">
                <p>Open Profile ↘</p>
                <div className="icon">
                  <FontAwesomeIcon className="i" icon={faTwitter} size="xl" />
                  <FontAwesomeIcon className="i" icon={faLinkedin} size="xl" />
                </div>
              </div>
            </div>
            <div className="doctor-card bg-gray-100">
              <div className="card-header">
                <h3 className="font-medium 	text-2xl ">Tom Adams,RDH</h3>
                <h6 className="text-gray-400  text-lg pt-2">
                  Orthodontic Solutions
                </h6>
              </div>
              <div className="card-img">
                <img
                  className="rounded-full "
                  src="./img/doc6.jpg"
                  alt="person"
                />
              </div>
              <hr className="line-style" />
              <div className="card-footer">
                <p>Open Profile ↘</p>
                <div className="icon">
                  <FontAwesomeIcon className="i" icon={faTwitter} size="xl" />
                  <FontAwesomeIcon className="i" icon={faLinkedin} size="xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
