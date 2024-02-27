"use client";
import React, { useState } from "react";

const EmailSection = () => {
  const [statusMsg, setStatusMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg("Sending...");
    const data = {
      firstName: e.target.firstName.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(response.status);

    if (response.status === 200) {
      setStatusMsg("Message sent!");
      setTimeout(() => {
        setStatusMsg("");
        e.target.firstName.value = "";
        e.target.email.value = "";
        e.target.subject.value = "";
        e.target.message.value = "";
      }, 8000);
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute bottom-0 -right-0 transform translate-x-1/2 translate-y-1/2"></div>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-0 -left-4 transform -translate-x-1/2"></div>
      <div className="z-10 relative">
        <h5 className="text-xl font-bold text-white my-2">
          Shoot Me a Message!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I am currently looking for many different things. 
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com" target="_blank">
            {/* GitHub SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group/gitIcon hover:border-2 hover:border-white rounded-full transition-all"
              viewBox="0 0 512 512"
              width={32}
              height={32}
            >
              <path
                className="fill-white group-hover/gitIcon:fill-purple-600 grannyShift"
                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
              />
            </svg>
            {/* <Image src={gitHubLogo} alt="Github Icon" width={24} height={24} /> */}
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="group/linkdIcon hover:border-2 hover:border-white rounded-md transition-all"
              viewBox="0 0 512 512"
              width={32}
              height={32}
            >
              <path
                className="fill-white group-hover/linkdIcon:fill-purple-600 grannyShift"
                d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
              />
            </svg>
            {/* <Image src={linkdInLogo} alt="LinkdIn Icon" width={28} height={28}/> */}
          </a>
        </div>
      </div>
      <form className="flex flex-col gap-4 z-20" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="text-white block mb-2 text-sm font-meduim"
          >
            First name
          </label>
          <input
            className="bg-[#18191E] border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            type="text"
            id="firstName"
            name="firstName"
            required
            placeholder="First name"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-meduim"
          >
            Your email
          </label>
          <input
            className="bg-[#18191E] border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            type="email"
            id="email"
            name="email"
            required
            placeholder="youremail@email.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="text-white block mb-2 text-sm font-meduim"
          >
            Subject
          </label>
          <input
            className="bg-[#18191E] border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            type="text"
            id="subject"
            name="subject"
            required
            placeholder="Email subject"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="text-white block mb-2 text-sm font-meduim"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="What say ye?"
            className="bg-[#18191E] border-[#33353f] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Send Message
        </button>
        <p
          className={
            statusMsg == "Message sent!" ? "text-green-600" : "text-blue-600"
          }
        >
          {statusMsg}
        </p>
      </form>
    </section>
  );
};

export default EmailSection;
