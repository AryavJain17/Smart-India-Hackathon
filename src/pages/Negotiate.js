import React from 'react'
import Navbar from '../components/Navbar'

const Negotiate = () => {
  return (
    <>
    <Navbar/>
    <div className='bg-gradient-to-b from-blue-500 to-blue-900'>
    <div class="chatbox">
        <div class="msg right">Yash : Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
        <div class="msg left">Aryav: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque officia quos exercitationem pariatur dolores vero. </div>
        <div class="msg right">Yash : Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
        <div class="msg left">Aryav: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque officia quos exercitationem pariatur dolores vero. </div>
        <div class="msg right">Yash : Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
        <div class="msg left">Aryav: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eaque officia quos exercitationem pariatur dolores vero. </div>

    </div>
    <div class="send pb-20 fixed bottom-0 w-[900px] justify-center flex mx-80">
        <form action="#" id="send-chatbox">
            <input type="text" name="msgInp" id="msgInp" />
            <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Send
            </button>
        </form>

    </div>
</div>
</>
  )
}

export default Negotiate