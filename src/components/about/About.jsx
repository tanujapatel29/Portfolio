import React from 'react';

export default function About() {
    return (
        <>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left p-8 mx-10">
                    <h2 className="text-sm font-bold tracking-tight text-purple-600 uppercase">About Me</h2>
                    <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Who am I?</h2><h4 className="pt-2 text-xl font-medium text-black dark:text-white sm:text-2xl lg:text-2xl">
                        I am Tanuja Patel, a Web Designer &amp; Software developer</h4>
                    <p className="pt-3 font-body leading-relaxed  text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                        Results-driven Software Developer with over a year of experience delivering high-quality software solutions and enhancing user experiences. Skilled in coding, debugging, and optimizing applications. Proficient in various programming languages, including Java, HTML, CSS, PHP and JavaScript. Strong communicator, adept at translating complex technical concepts into user-friendly terms. Capable of managing multiple projects simultaneously and ensuring timely delivery. Proactive in identifying and implementing improvements to enhance performance and efficiency. Collaborative team player who excels in diverse environments. Committed to continuous learning and staying current with industry trends. Dedicated to developing innovative solutions that meet client needs and drive business success in fast-paced settings.
                    </p>
                    <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                        <div className="flex items-center justify-center sm:justify-start">

                            <p className="font-body text-lg font-semibold uppercase text-grey-20 dark:text-white">
                                Connect with me</p>

                            <div className="hidden sm:block">
                                <i className="bx bx-chevron-right text-2xl text-primary">
                                </i>
                            </div>
                        </div>
                        <div className="flex items-center justify-center ml-3 pt-5 pl-2 sm:justify-start sm:pt-0">
                            <a href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07">
                                </path>
                                </svg>
                            </a>
                            <a href="/" className="pl-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z">
                                </path>
                                </svg>
                            </a>
                            <a href="/" className="pl-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z">
                                    </path>
                                </svg>
                            </a>
                            <a href="/" className="pl-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-2/5 p-8 mt-20" >
                    <div >
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold uppercase text-black dark:text-gray-400">HTML &amp; CSS</h4>
                            <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-gray-200">
                            <div className="h-3 rounded-full bg-blue-500" style={{ width: '85%' }}>
                            </div>
                        </div>

                    </div>
                    <div className="pt-6">
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold uppercase text-black dark:text-gray-400">Java</h4>
                            <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-gray-200">
                            <div className="h-3 rounded-full bg-blue-500" style={{ width: '70%' }}>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6">
                        <div className="flex items-end justify-between">
                            <h4 className="font-body font-semibold uppercase text-black dark:text-gray-400">PHP</h4>
                            <h3 className="font-body text-3xl font-bold text-primary">75%</h3>
                        </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-gray-200">
                            <div className="h-3 rounded-full bg-blue-500" style={{ width: '75%' }}>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6"><div className="flex items-end justify-between">
                        <h4 className="font-body font-semibold uppercase text-black dark:text-gray-400">Javascript</h4>
                        <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
                    </div>
                        <div className="mt-2 h-3 w-full rounded-full bg-gray-200">
                            <div className="h-3 rounded-full bg-blue-500" style={{ width: '98%' }}>

                            </div>
                        </div></div><div className="pt-6"><div className="flex items-end justify-between">

                            <h4 className="font-body font-semibold uppercase text-black dark:text-gray-400">Figma</h4>
                            <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
                        </div><div className="mt-2 h-3 w-full rounded-full bg-gray-200">
                            <div className="h-3 rounded-full bg-blue-500" style={{ width: '70%' }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="mt-8">
                <div class="flex justify-center relative pb-4">
                    <span class="absolute block h-px bg-black bottom-1/2 left-0 right-0 bg-logo-clouds-line">
                    </span><div class="bg-white dark:bg-neutral-900 px-6 py-3 relative">
                        <p class="text-body-sm font-semibold tracking-2 text-neutral-500 dark:text-gray-400">CRAFTED DESIGNS FOR</p>
                    </div>
                </div>
                <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
                    <div class="p-4  transition duration-200 hover:grayscale">
                        <img src="/img/html.png" className=" w-20 mx-auto" loading="lazy" alt="Html" data-nimg="1" width="36" height="36">
                        </img>
                    </div>
                    <div class="p-4  transition duration-200 hover:grayscale">
                        <img src="/img/react.png" class=" w-20 mx-auto" loading="lazy" alt="React" data-nimg="1" width="36" height="36">
                        </img>
                    </div>
                    <div class="p-4  transition duration-200 hover:grayscale">
                        <img src="/img/css.png" class=" w-20 mx-auto" loading="lazy" data-nimg="1"alt="css" width="36" height="36">
                        </img>
                    </div>
                    <div class="p-4  transition duration-200 hover:grayscale">
                        <img src="/img/javascript.png" class=" w-20 mx-auto" loading="lazy" data-nimg="1" alt="Javascript" width="36" height="36">
                        </img>
                    </div>
                    <div class="p-4  transition duration-200 hover:grayscale">
                        <img src="/img/php.png" class=" w-20 mx-auto" loading="lazy" data-nimg="1" alt="php" width="36" height="36">
                        </img>
                    </div>
                    <div class="p-4  transition duration-200 hover:grayscale">
                        <img src="/img/java.png" class="h-12 w-auto mx-auto" loading="lazy" data-nimg="1" alt="java" width="36" height="36">
                        </img>
                    </div>
                </div>
                <div class="flex justify-center relative pb-1">
                    <span class="absolute block h-px bg-black bottom-1/2 left-0 right-0 bg-logo-clouds-line">
                    </span>
                    <div class="bg-white px-6 py-3 relative dark:bg-neutral-900">
                    </div>
                </div>
            </div>
        </>
    )
}
