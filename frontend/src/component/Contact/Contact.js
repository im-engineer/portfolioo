import React, { useState, useRef } from "react";
import { contactToAdmin } from "../../service/service";
import "./Contact.css";
export default function Footer() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    textarea: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };
  const Contact = async () => {
    const { fullname, email, textarea } = input;
    console.log("🚀 ~ file: Contact.js:21 ~ Contact ~ input:", input);
    try {
      const res = await contactToAdmin(fullname, email, textarea);
      console.log("🚀 ~ file: Contact.js:23 ~ Contact ~ res:", res);
      if (res.data.status === true) {
        alert("Message sent");
      } else {
        alert("Failed");
      }
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("Failed to send message");
    }
  };

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    formRef.current.reset();
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
        integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <footer className="text-center text-white" id="contact--page">
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-2">
          {/* <!-- Section: Social media --> */}
          <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="https://www.facebook.com/profile.php?id=100062573145421"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="https://twitter.com/_Sid_d_hant?t=G0M65bYtSIZqPGbRw5h8vw&s=09"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="https://google.com/azmsiddhant1@gmail.com"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="https://www.linkedin.com/in/siddhant-singh-9a47051a2"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            {/* <!-- Github --> */}
            <a
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="https://github.com/siddhantsingh7"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}
        <div className="container">
          <div className="row">
            <div
              className="col-md-4"
              style={{
                backgroundColor: "#89ABE3FF",
                padding: "0.5rem",
                borderRadius: "10px",
              }}
            >
              <h4>
                {" "}
                <i
                  className="fab fa-google"
                  style={{
                    backgroundColor: "#EA738DFF",
                    padding: "0.5rem",
                    borderRadius: "50%",
                  }}
                >
                  {" "}
                </i>
                &nbsp; Contact through email
              </h4>
              <h5 style={{ paddingLeft: "2.3rem" }}>azmsiddhant1@gmail.com</h5>
            </div>
            <div className="col-md-2"></div>
            <div
              className="col-md-4"
              style={{
                backgroundColor: "#89ABE3FF",
                padding: "0.5rem",
                borderRadius: "10px",
                float: "right",
              }}
            >
              <h4>
                {" "}
                <i
                  className="fa fa-phone"
                  style={{
                    backgroundColor: "#EA738DFF",
                    padding: "0.5rem",
                    borderRadius: "50%",
                  }}
                >
                  {" "}
                </i>
                &nbsp; Call me
              </h4>
              <h5 style={{ paddingLeft: "2.3rem" }}>+91 6306654563</h5>
            </div>{" "}
          </div>
        </div>
        {/* Contact Us */}
        <div className="contacts--container">
          <h1>Contacts</h1>
          <div className="contacts-body ">
            {/* <div className="col-md-3 "></div> */}
            <div className="contacts-form">
              <form
                ref={formRef}
                className="form-control"
                onSubmit={(e) => handleSubmit(e)}
                style={{ backgroundColor: "#89ABE3FF", padding: "2rem" }}
              >
                <input
                  className="form-control"
                  placeholder="Name"
                  name="fullname"
                  onChange={(e) => handleChange(e)}
                />
                <br />
                <input
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
                <br />
                <textarea
                  className="form-control"
                  placeholder="Enter Your text here..."
                  name="textarea"
                  onChange={(e) => handleChange(e)}
                />
                <br />
                <button className="btn btn-outline-danger" onClick={Contact}>
                  Submit
                </button>
              </form>
            </div>
            <div></div>
            <div className="contacts-details " style={{ color: "black" }}>
              <h5>About Me</h5>
              <p>
                Siddhant Singh Rajpoot <br /> MEARN Full Stack Developer at{" "}
                <br /> SmartData Enterprises Limited,(CMMI level3) <br />{" "}
                Nagpur,Mihan,441108
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
