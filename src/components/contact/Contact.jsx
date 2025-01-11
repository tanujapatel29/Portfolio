import React from 'react'

export default function Contact() {
    return (

        <div>
            <div className="container p-8 mx-auto xl:px-0 p-0">
                <div className="container p-8 mx-auto xl:px-0 flex w-full flex-col items-center justify-center text-center">
                    <div className="text-sm font-bold tracking-wider text-purple-600 uppercase">Contact</div>
                    <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Getting in Touch With Me</h2>
                    <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                        Thank you for visiting my website! I am happy to help answer any questions you may have. Please fill out the form below and we'll get back to you as soon as possible.</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto" id="contact">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="name" className="leading-7 text-sm text-gray-600 dark:text-gray-200">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 dark:bg-white focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </input>
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div className="relative">
                                <label for="email" className="leading-7 text-sm text-gray-600 dark:text-gray-200">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 dark:bg-white focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                </input>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label for="message" className="leading-7 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 dark:bg-white focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out">
                                </textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                                Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
