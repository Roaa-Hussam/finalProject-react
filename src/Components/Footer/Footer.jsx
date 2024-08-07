import "./footer.Module.css";

function Footer() {
  return (
    <>
      <footer className="bg-gray-300 w-full mt-20">
        <div className="w-full lg:grid lg:grid-cols-3 md:flex sm:flex mb-10">
          <div className="flex flex-col ps-28">
            <button className="text-4xl text-start text-gray-600 hover:text-gray-900">
              HOME
            </button>
            <button className="text-4xl text-start text-gray-600 hover:text-gray-900">
              About Us
            </button>
            <button className="text-4xl text-start text-gray-600 hover:text-gray-900">
              Services
            </button>
            <button className="text-4xl text-start text-gray-600 hover:text-gray-900">
              Price Guide
            </button>
            <button className="text-4xl text-start text-gray-600 hover:text-gray-900">
              Contacts
            </button>
          </div>
          <div>
            <p>
              We understand just how closely connected oral health is to your
              overall health, confidence, and appearance, and we pride ourselves
              on cultivating a friendly, upbeat dental environment where you can
              always feel comfortable in our care.
            </p>
          </div>
          <div className="flex flex-col text-end pe-20 text-gray-600">
            <p>511 SW 10th Ave 1206,</p>
            <p>Portland, OR</p>
            <p>United States</p>
            <a href="#" className="text-gray-900 font-bold hover:text-gray-600">
              <i className="fas fa-phone-alt"></i>+1 800-123-1234
            </a>
            <a href="#" className="text-gray-900 font-bold hover:text-gray-600">
              <i className="fas fa-at"></i>+clinic@example.coms
            </a>
          </div>
        </div>

        <hr />
        <div className="md:flex lg:flex sm:block justify-between ps-28 pe-20 pt-10">
          <p>
            This is a sample website - cmsmasters © 2024 - All Rights Reserved
          </p>
          <div className="text-3xl py-3 px-4 mx-2">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
