import React, { useState } from 'react';

export default function Service() {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            id: 1,
            title: "Web Development",
            description: "Custom web solutions tailored to meet your unique needs, built using cutting-edge technologies like HTML5, CSS3, JavaScript, and more.",
        },
        {
            id: 2,
            title: "Mobile Development",
            description: "Native mobile apps for iOS and Android, designed for a seamless user experience and integrated with your existing systems.",
        },
        {
            id: 3,
            title: "Graphic Design",
            description: "Eye-catching graphics, logos, icons, and infographics that communicate your brand values and enhance your online presence.",
        },
        {
            id: 4,
            title: "Web Design",
            description: "User-friendly website design prioritizing UX and UI, created using the latest design trends and best practices to engage visitors and drive conversions.",
        },
        {
            id: 5,
            title: "Backend Development",
            description: "Robust, scalable backend systems powering your web or mobile application, developed using languages like Python, Ruby, PHP, and Node.js.",
        },
        {
            id: 6,
            title: "UI/UX Design",
            description: "Intuitive interface design balancing form and function, tested and refined through user research and wireframing to ensure a seamless user experience.",
        },
    ];

    return (
        <div className="container mx-auto px-4">
            <div className="text-center p-8">
                <h2 className="text-3xl font-bold">Here is What I Can Offer</h2>
                <p className="text-gray-500 mt-2">
                    These are the Quality services that I offer.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                    <div key={service.id} className="p-4">
                        <div className="border border-gray-200 dark:border-gray-600 p-6 rounded-lg">
                            <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                            {/* <p className="text-gray-500">{service.description}</p>*/} 
                            <button
                                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                                onClick={() => setActiveService(service.id)}
                            >
                                View More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {activeService && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-11/12 sm:w-1/2 md:w-1/3">
                        <h3 className="text-xl font-bold mb-4">
                            {services.find((s) => s.id === activeService).title}
                        </h3>
                        <p className="text-gray-700">
                            {services.find((s) => s.id === activeService).description}
                        </p>
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            onClick={() => setActiveService(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
