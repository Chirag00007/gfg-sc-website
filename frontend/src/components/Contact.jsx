import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  // Loading after calling
  const [loading, setLoading] = useState(false);

  // Setting error
  const [errors, setErrors] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  //Completion
  const [success, setSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleContact = async (e) => {
    try {
      e.preventDefault();

      const myForm = { name, email, phoneNo, course, message };

      setLoading(true);
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post("/api/contact", myForm, config);
      //Setting success true

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 2000);
      console.log(data);
      setSuccessMsg(`Thanks for contacting Us! ${data.contactMe.name} `);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      setErrors(true);
      setTimeout(() => {
        setErrors(false);
      }, 2000);

      setErrorMsg(error.response.data.message);
    }
  };
  return (
    <>
      {/* contact css in team css  */}
      <div id="contact" className="contact_page relative">
        <form className="contact_form">
          <h1>Contact Form</h1>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name..."
          />
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <input
            required
            type="tel"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            placeholder="Enter Phone Number"
          />
          <input
            required
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Enter your course"
          />
          <textarea
            required
            placeholder="Message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            cols="10"
            rows="4"
          ></textarea>
          <button
            className="mainBtn"
            onClick={handleContact}
            disabled={loading ? true : false}
          >
            {loading ? "Sending...." : "Send Message"}
          </button>
          {errors ? (
            <div className="w-full bg-red-100 text-red-800  text-[12px] px-3 py-3 text-center my-2 rounded-xl">
              {errorMsg}
            </div>
          ) : (
            " "
          )}

          {success ? (
            <div className="w-full bg-green-100 text-green-800  text-[12px] p-3 text-center my-2 rounded-xl">
              {successMsg}
            </div>
          ) : (
            " "
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
