import React, {useEffect, useRef, useState} from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();
  const [emailText, setEmailText] = useState('hidden');
  const [errorText, setErrorText] = useState('hidden');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jlir4dq', 'template_5eq0z9y', form.current, 'bwyiATuNnSOuFvfU8')
    .then((result) => {
      setEmailText('flex');
    }, (error) => {
        setErrorText('flex');
    });
    e.target.reset();
  };

  return (
    <main data-aos="fade-out" data-aos-duration="3000" className='relative bg-blackk text-light-grey h-full overflow-x-hidden mt-[5.3rem] w-[90%] mx-auto max-w-[800px]'>
       {/* Title */}
      <div className='block pt-16 mb-8'>
        <h1 className="text-white opacity-95 font-bold text-3xl sm:text-5xl flex items-center">Have a project<i className="ri-question-mark"></i> </h1>
        <h1 className="font-bold opacity-80 text-3xl sm:text-5xl flex items-center justify-end pt-2"><hr className='bg-light-grey inline-block w-10 mr-2' />Get in Touch</h1>
      </div>
      {/* Container */}
      <div className="container">
        <div className="">
          <div className="">
            <p className="mb-4 text-xl">Feel free to contact me and I'll get back to you as soon as I can.</p>
            <section className="">
              <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                {/* name  */}
                <input className="font-semibold sm:text-xl bg-transparent border-0 rounded outline-none pt-4 px-2 border-light-grey border-b-2 w-full" placeholder="Name"  id="name" name="name" required />
                {/* email */}
                <input className="font-semibold sm:text-xl bg-transparent border-0 rounded border-light-grey pt-4 px-2 border-b-2 w-full" placeholder="Email" id="email" name="email" type="email" required />   
                {/* subject  */}
                <input className="font-semibold sm:text-xl bg-transparent border-0 rounded border-light-grey pt-4 px-2 border-b-2 w-full" placeholder="Subject" id="subject" name="subject" type="text" required />   
                {/* message textarea */}
                <textarea name="message" className="font-semibold sm:text-xl bg-transparent border-0 rounded pt-4 px-2 border-light-grey border-b-2 w-full" id="message" rows="2" cols="40" placeholder="Write your Message here"></textarea>
                {/* Send button */}
                <button className='bg-light-grey/50 hover:bg-light-grey/20 font-semibold text-lg sm:text-xl cursor-pointer py-2 sm:py-3 w-32 sm:w-40 mx-auto rounded-xl my-8' type="submit">Send</button>
                {/* success text */}
                <div data-aos="fade-in" data-aos-duration="2000" className={`success-text text-xl font-semibold ${emailText} justify-center items-center`}>SENT. I'll get back to you as soon as possible</div>
                {/* error text */}
                <div data-aos="fade-in" data-aos-duration="2000" className={`error-text text-xl font-semibold ${errorText} justify-center items-center`}>Uhmm, couldn't send. Kindly check your internet connection</div>
              </form>
              </section>
          </div>
        </div>
        {/* contentt-right */}
        <div className="py-4 sm:text-xl">
          <p className="hidden sm:inline-block">I will love to hear from you. Whether it's a project, job opportunity or just a chat, feel free to contact me.</p>
          <p className="pt-8 "><span className='text-lg sm:text-2xl font-semibold'>Phone</span><br />
          (+234) 9039930886</p>
          {/* <p className="connect">Connect with Me <span>&rarr;</span> </p> */}
        </div>
          
      </div>
    </main>
  )
}
