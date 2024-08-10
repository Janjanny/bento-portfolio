import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert } from "@material-tailwind/react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaRegTimesCircle } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  let errorText = "";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_l6nchmq", "template_ihsnqz9", form.current, {
        publicKey: "Q2I17AG5lBrwZq4tU",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setFailed(true);
          errorText = error.text;
        },
      );
  };

  return (
    <>
      {success && (
        <Alert
          className="absolute mt-3 w-11/12 left-[50%] translate-x-[-50%]"
          icon={
            <IconContext.Provider value={{ size: "1.5rem", color: "#20E050" }}>
              <FaRegCheckCircle />
            </IconContext.Provider>
          }
          open={success}
          onClose={() => setSuccess(!success)}
        >
          {" "}
          Email sent successfully!
        </Alert>
      )}
      {failed && (
        <Alert
          className="absolute mt-3 w-11/12 left-[50%] translate-x-[-50%]"
          icon={
            <IconContext.Provider value={{ size: "1.5rem", color: "#20E050" }}>
              <FaRegCheckCircle />
            </IconContext.Provider>
          }
          open={failed}
          onClose={() => setFailed(!failed)}
        >
          Error sending email: {errorText}
        </Alert>
      )}
      <div className="w-full h-screen bg-bg-color text-white flex justify-center items-center pt-[4rem]">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col bg-grid-color p-8 gap-6 rounded-lg border border-stroke-color w-[28rem] h-[28rem]"
        >
          <p className="font-[600] text-xl">Contact Me</p>
          <div class="relative w-full min-w-[200px] h-10">
            <input
              class="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-white"
              placeholder=" "
              name="user_name"
              required
            />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">
              Name
            </label>
          </div>

          <div class="relative w-full min-w-[200px] h-10">
            <input
              class="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-white"
              placeholder=" "
              name="user_name"
              required
            />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">
              Email
            </label>
          </div>

          <div class="relative w-full min-w-[200px]">
            <textarea
              class="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-white"
              placeholder=" "
              name="message"
              rows={5}
              required
              style={{ resize: "none" }}
            />
            <label class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white">
              Message
            </label>
          </div>

          <input
            type="submit"
            value="Send Email"
            className="bg-button-color text-sm w-full py-2 cursor-pointer rounded border border-stroke-color hover:border-primary-color hover:shadow hover:shadow-primary-color transition-all ease-in-out active:bg-[#383838] font-[600]"
          />
        </form>
      </div>
    </>
  );
};

export default Contact;
