import React from "react";

const page = () => {
  return (
    <section className="flex justify-center">
      <form className='flex flex-col max-w-md gap-4'>
        <input
          type='text'
          placeholder='Name'
          className='p-2 border rounded-md'
        />
        <input
          type='email'
          placeholder='Email'
          className='p-2 border rounded-md'
        />
        <textarea
          placeholder='Message'
          className='p-2 border rounded-md'></textarea>
        <button
          type='submit'
          className='p-2 bg-stone-900 text-stone-300 rounded-md'>
          Send
        </button>
      </form>
    </section>
  );
};

export default page;
