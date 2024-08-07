function Sign() {
  return (
    <>
      <section className=" flex ">
        <div className="ps-[50px] max-w-[50%] lg:grid lg:grid-cols-1  ">
          <div className="mt-8  w-50 ">
            <img
              className="w-full rounded-lg"
              src="./img/dental.jpg"
              alt="Dental Image 1"
            />
            <br />
            <div className="flex mt-3">
              <img
                className=" dent w-1/2  rounded pe-10"
                src="img/doc5.jpg"
                alt="Dental Image 2"
              />
              <img
                className="w-1/2  rounded-lg"
                src="img/dental2.jpg"
                alt="Dental Image 3"
              />
            </div>
          </div>
        </div>
        <div className="  me-5  ms-10 w-full mt-2 ps-10 rounded-[20px] bg-[#004a5e] text-[#fff]  ">
          <form className=" max-w-xl mt-10  ps-10">
            <h2 className=" font-[600] text-[42px]">
              Sign up for
              <br /> appointment
            </h2>
            <p className="pt-4 pb-10">
              With years of experience and a commitment to continuing education,
              our doctors are experts in their field and strive to deliver the
              highest standard of dental care.
            </p>
            <div>
              <div>
                <label
                  htmlFor=" TREATMENT"
                  className=" text-base font-medium  w-auto text-[#95b4bc]  mb-3 mt-3"
                >
                  TREATMENT
                </label>
                <input
                  type="text"
                  className=" shadow-sm  border-[#336e7e]  text-sm rounded-lg   w-full p-2 mt-2 bg-[#336e7e]  "
                  placeholder="select Treatment"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor=" text"
                  className="block mb-2 text-base font-medium  w-auto text-[#95b4bc] mt-3  "
                >
                  Doctor
                </label>
                <input
                  type="text"
                  className="shadow-sm  border-[#336e7e]  text-sm rounded-lg  block w-full p-2  bg-[#336e7e]"
                  placeholder="select Doctor"
                  required=""
                />
              </div>
            </div>
            <div className="flex mt-6 ">
              <div className="me-4 ">
                <label
                  htmlFor=" name"
                  className=" mb-2 text-base font-medium  w-auto text-[#95b4bc]  "
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className=" shadow-sm  border-[#336e7e]  text-sm rounded-lg  mt-1 block w-full p-2  bg-[#336e7e]  "
                  placeholder="Your Name"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor=" phone"
                  className=" mb-2 text-base font-medium  w-auto text-[#95b4bc]  "
                >
                  Your Phone
                </label>
                <input
                  type="tel"
                  className="shadow-sm  border-[#336e7e]  text-sm rounded-lg  mt-1 block w-full p-2 bg-[#336e7e]"
                  placeholder="Your Phone"
                  required=""
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium  w-auto text-[#95b4bc] "
              >
                Your Email
              </label>
              <input
                type="email"
                className="shadow-sm  border-[#336e7e]  text-sm rounded-lg  block w-full p-2  bg-[#336e7e]"
                required=""
              />
            </div>
            <button
              type="submit "
              className="text-black mt-5 rounded-lg bg-[#cbf2fe] p-4 text-base font-medium mb-5"
            >
              Make an Appointment
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
export default Sign;
