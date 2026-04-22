export const navLinks = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Contact",
        href: "/contact"
    },
    {
        name: "Vehicles",
        href: "/vehicles"
    },
    {
        name: "Missions",
        href: "/missions"
    },
    {
        name: "Tour",
        href: "/tour"
    }
]

export const statsData = [
    {
        title: "Missions",
        value: "127",
        description: "Successful space missions",
        icon: "Rocket"
    },
    {
        title: "Vehicles Launched", 
        value: "89",
        description: "Spacecraft deployed",
        icon: "Airplane"
    },
    {
        title: "People in Space",
        value: "1,247",
        description: "Astronauts and crew members",
        icon: "User"
    },
    {
        title: "Resources Discovered",
        value: "342",
        description: "Valuable materials and findings",
        icon: "Diamond"
    }
]

export const missionsData = [
    {
        id: 1,
        name: "Artemis III",
        description: "Historic lunar landing mission returning humans to the Moon's South Pole for scientific exploration and resource discovery.",
        date: "2024-12-15",
        status: "Completed",
        crew: 4,
        duration: "14 days",
        image: "/bg.jpg"
    },
    {
        id: 2,
        name: "Mars Orbiter X",
        description: "Advanced orbital reconnaissance mission mapping potential landing sites for future human exploration.",
        date: "2024-11-28",
        status: "In Progress",
        crew: 0,
        duration: "687 days",
        image: "/bg.jpg"
    },
    {
        id: 3,
        name: "Europa Explorer",
        description: "Deep space mission to Jupiter's moon Europa searching for signs of subsurface ocean life.",
        date: "2024-10-10",
        status: "In Progress",
        crew: 0,
        duration: "3 years",
        image: "/bg.jpg"
    },
    {
        id: 4,
        name: "Station Alpha",
        description: "Next-generation space station deployment in low Earth orbit for commercial and research operations.",
        date: "2024-09-22",
        status: "Completed",
        crew: 7,
        duration: "6 months",
        image: "/bg.jpg"
    }
]

export const vehiclesData = [
    {
        id: 1,
        name: "Falcon Heavy",
        type: "Heavy-Lift Rocket",
        description: "World's most powerful operational rocket, capable of carrying over 140,000 pounds to orbit.",
        specs: {
            height: "70 m",
            diameter: "12.2 m",
            mass: "1,420,788 kg",
            payload: "63,800 kg"
        },
        missions: 27,
        status: "Active",
        image: "/ship (1).png"
    },
    {
        id: 2,
        name: "Starship",
        type: "Reusable Spacecraft",
        description: "Next-generation fully reusable spacecraft designed for missions to Mars and beyond.",
        specs: {
            height: "120 m",
            diameter: "9 m",
            mass: "5,000,000 kg",
            payload: "150,000 kg"
        },
        missions: 8,
        status: "Testing",
        image: "/ship (2).png"
    },
    {
        id: 3,
        name: "Dragon Crew",
        type: "Crew Capsule",
        description: "Advanced spacecraft capable of carrying up to 7 astronauts to and from Earth orbit.",
        specs: {
            height: "8.1 m",
            diameter: "4 m",
            mass: "12,000 kg",
            crew: "7 astronauts"
        },
        missions: 45,
        status: "Active",
        image: "/ship (3).png"
    },
    {
        id: 4,
        name: "Falcon 9",
        type: "Medium-Lift Rocket",
        description: "First orbital-class rocket capable of reflight. Reliable workhorse for satellite deployment.",
        specs: {
            height: "70 m",
            diameter: "3.7 m",
            mass: "549,054 kg",
            payload: "22,800 kg"
        },
        missions: 312,
        status: "Active",
        image: "/ship (1).png"
    },
    {
        id: 5,
        name: "Starlink Satellite",
        type: "Communication Satellite",
        description: "Advanced satellite constellation providing global broadband internet coverage.",
        specs: {
            height: "0.3 m",
            width: "11.5 m",
            mass: "295 kg",
            bandwidth: "20 Gbps"
        },
        missions: 85,
        status: "Deploying",
        image: "/ship (2).png"
    },
    {
        id: 6,
        name: "Cargo Dragon",
        type: "Cargo Spacecraft",
        description: "Unmanned spacecraft delivering supplies and scientific experiments to the ISS.",
        specs: {
            height: "8.1 m",
            diameter: "4 m",
            mass: "14,000 kg",
            cargo: "6,000 kg"
        },
        missions: 38,
        status: "Active",
        image: "/ship (3).png"
    }
]

export const tourData = {
    monthlyTours: [
        { month: "Jan", visitors: 1240 },
        { month: "Feb", visitors: 1890 },
        { month: "Mar", visitors: 2340 },
        { month: "Apr", visitors: 3120 }
    ],
    pricing: {
        basePrice: 250000,
        options: {
            premiumTraining: 50000,
            extendedStay: 75000,
            privateGuide: 25000,
            spacewalk: 100000,
            photography: 15000,
            merchandise: 5000
        }
    },
    revenueBreakdown: {
        flights: 65,
        accessories: 25,
        training: 10
    },
    testimonials: [
        {
            id: 1,
            name: "Sarah Chen",
            role: "Software Engineer",
            content: "The space tour was absolutely life-changing! The views of Earth from orbit are something no photo can capture. The training was comprehensive and the crew was incredibly professional.",
            rating: 5,
            avatar: "/tour.png"
        },
        {
            id: 2,
            name: "Marcus Johnson",
            role: "Entrepreneur",
            content: "As someone who's always dreamed of space, this tour exceeded all expectations. The zero-gravity experience alone was worth every penny. Can't wait to go back!",
            rating: 5,
            avatar: "/tour.png"
        },
        {
            id: 3,
            name: "Dr. Elena Rodriguez",
            role: "Research Scientist",
            content: "The scientific insights gained during this tour are invaluable. Being able to conduct experiments in microgravity has advanced my research significantly. Highly recommend for any scientist.",
            rating: 5,
            avatar: "/tour.png"
        }
    ]
}

export const contactData = {
    info: {
        title: "Get in Touch",
        description: "Ready to embark on your space journey? Our team is here to help you make your dreams of space travel a reality.",
        address: "SpaceX Headquarters, 1 Rocket Road, Hawthorne, CA 90250",
        phone: "+1 (310) 363-6000",
        email: "tours@spacex.com",
        hours: "Monday - Friday: 9:00 AM - 6:00 PM PST"
    },
    footer: {
        company: {
            name: "SpaceX Tourism",
            description: "Leading the future of commercial space travel and making the cosmos accessible to everyone."
        },
        links: {
            company: ["About Us", "Careers", "Press", "Investor Relations"],
            services: ["Space Tours", "Mission Planning", "Training Programs", "Corporate Events"],
            support: ["Contact", "FAQ", "Safety", "Terms of Service"],
            legal: ["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Accessibility"]
        },
        social: [
            { name: "Twitter", icon: "twitter", url: "#" },
            { name: "LinkedIn", icon: "linkedin", url: "#" },
            { name: "Instagram", icon: "instagram", url: "#" },
            { name: "YouTube", icon: "youtube", url: "#" }
        ]
    }
}
