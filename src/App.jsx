import React from 'react';
import emailjs from 'emailjs-com';

const App = () => {
  const handlesubmit = (e) => {
    e.preventDefault();

 
    const email = e.target[0].value;
    const message = e.target[1].value;

    emailjs.init('JnYbZW802C-skgYRJ');


    emailjs.send('service_4nnua7w', 'template_btigfdl', { email, message })
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.error('FAILED...', err);
      });
  };

  return (
    <div className='h-screen w-full bg-zinc-900 flex justify-center items-center'>
      <div className='w-1/2 h-1/2 bg-zinc-50 rounded-lg shadow-md'>
        <form onSubmit={handlesubmit} className='w-full h-full flex flex-col justify-center items-center gap-y-5'>
          <h1 className='w-full text-center text-3xl text-black font-bold'>Contact Form</h1>
          <input type="email" className='w-1/2 h-10 bg-zinc-300 px-3 text-white' placeholder='email'/>
          <input type="text" className='w-1/2 h-10 bg-zinc-300 px-3 text-white' placeholder='message'/>
          <button type='submit' className='bg-indigo-800 rounded-full px-3 py-2 text-white'>submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
