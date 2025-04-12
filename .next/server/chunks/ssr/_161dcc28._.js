module.exports = {

"[project]/.next-internal/server/app/projects/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/projects/[slug]/not-found.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/projects/[slug]/not-found.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/projectData.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getProjectUrl": (()=>getProjectUrl),
    "projectData": (()=>projectData)
});
function getProjectUrl(slug) {
    return `/projects/${slug}`;
}
const projectData = {
    freshify: {
        title: "Freshify",
        description: "Mobile push notifications for your expiring groceries",
        imageUrl: "/images/Freshify.png",
        fullDescription: `
  Every year, households around the world waste over 630 million tonnes of food, costing approximately $1 trillion and contributing 8-10% of global greenhouse gas emissions. This isn't just an environmental crisis, it's hitting families financially as well. A typical American family could save around $1,600 annually by eliminating food waste. The problem exists across cultures and continents, with per capita food waste ranging from 100kg/year in North America to 5kg/year in Sub-Saharan Africa.
  
  Freshify is a mobile app that uses push notifications to remind you when your groceries are about to expire.
  
  Every time you come back from the grocery store, simply snap a photo of your receipt and take a photo of the items, and Freshify will (using GPT-4o's image recognition) automatically detect the items' expiration date and notify you when they're about to expire.
  
  Freshify also comes with a recipe generator, prioritizing ingredients that are about to expire.
  
  Here's a demo video!
  <iframe width="560" height="315" src="https://www.youtube.com/embed/MwFF6PgIQ4w?si=0Bs66-xstlYVwl4t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  
  I implemented the AI backend, the scanning functionalities, including the recipe scanning and image recognition. It was my first time using the OpenAI API, and I was amazed at how well it was able to recognize the items in the image.
  
  View the demo slides [here](https://drive.google.com/file/d/1hh-hWOotCuAQX6DQEiKh8IpNze2cUx6o/view?usp=sharing).
    `,
        technologies: [
            "Expo Go",
            "FastAPI",
            "OpenAI",
            "TypeScript",
            "Supabase",
            "React Native"
        ],
        role: "AI Developer",
        collaborators: [
            {
                name: "Adam Omarali",
                link: "https://www.adamomarali.com/"
            },
            {
                name: "Daniel Li",
                link: "https://www.linkedin.com/in/daniel-hongyi-li/"
            },
            {
                name: "Sami Khdair",
                link: "https://www.linkedin.com/in/sami-khdair/"
            }
        ],
        link: "https://github.com/yiyixuu/freshify",
        linkText: "View Repository",
        color: "bg-gray-900",
        featured: true
    },
    bridge: {
        title: "BRIDGE",
        description: "Voice assistant framework for developers",
        imageUrl: "/images/bridge.png",
        fullDescription: `
  BRIDGE was a hackathon project for Hack the Valley 7. It's a framework to allow developers to integrate custom voice commands into their apps—no native support from Siri, Google Assistant, or Alexa needed.
  
  With BRIDGE, you can define how voice input should interact with your application, making smart assistant-level functionality accessible to the 99.9% of apps that don't have it.
  
  Check out my teammate [Adam](https://www.adamomarali.com/)'s video demoing the hack!
  <iframe width="560" height="315" src="https://www.youtube.com/embed/-WAq_vkbNWE?si=G-jmxtFK5we9iT5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  
  BRIDGE is a continuation of sorts of the [Telenote](/projects/telenote) project, borrowing the voice input and classification technology.
  
    `,
        technologies: [
            "React",
            "Node.js",
            "IBM Watson",
            "Cohere",
            "Notion"
        ],
        role: "Full Stack Developer",
        collaborators: [
            {
                name: "Adam Omarali",
                link: "https://www.adamomarali.com/"
            },
            {
                name: "Navid Farkhondehpay"
            },
            {
                name: "Victor Kondoh",
                link: "https://www.linkedin.com/in/victor-junior-kondoh-a5a814166/"
            }
        ],
        link: "https://devpost.com/software/bridge-u0l4x7",
        linkText: "View Devpost Submission",
        color: "bg-blue-950",
        featured: true
    },
    bdc: {
        title: "Housing Proximity to Amenities in the US",
        description: "Paper on how city design affects demographics and educational performance",
        imageUrl: "/images/bdc.jpeg",
        fullDescription: `
(picture unrelated, I just love Shanghai)

For Stem Fellowship's Big Data Challenge, my team and I analyzed proximity to ammenities and demographic data for a given address in the US. We won 1st place out of 160 teamsand $1000!

I led the data sampling part, where I used [OpenAddresses](https://openaddresses.io/) to simple random sampling 163 counties from 1,936 available and stratified random sampling 1,630 unique addresses. This enabled the analysis of housing proximity to amenities with educational attainment and demographic relationships.

We then used the Geoapify API to get the distance to the nearest amenity, and used ArcGIS to get education and demographic data for analysis for each address sampled.

Here's my teammate Adam explaining our project in detail:
<iframe width="560" height="315" src="https://www.youtube.com/embed/SSu8a05wwQI?si=-2gAs3naStyXv3vf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

And here was our original pitch video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/Jfts_QFvZUg?si=D6PzSLp7S5HDt_fN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`,
        technologies: [
            "Python",
            "OpenAddresses",
            "Geoapify",
            "ArcGIS",
            "LaTeX"
        ],
        role: "Researcher",
        collaborators: [
            {
                name: "Adam Omarali",
                link: "https://www.adamomarali.com/"
            },
            {
                name: "Leo Liu",
                link: "https://leohliu.com/"
            },
            {
                name: "Navid Farkhondehpay"
            },
            {
                name: "James Tian"
            }
        ],
        link: "https://drive.google.com/file/d/1rdfhtmkyJPTMEQ5pbLwHt6uy8v3t5tiu/view",
        linkText: "Read Paper Here",
        color: "bg-gray-900",
        featured: true
    },
    "physics-experiments": {
        title: "Various Physics Experiments",
        description: "from PHY180, PHY293, PHY294",
        imageUrl: "/images/physics.jpeg",
        fullDescription: `
As part of the Engineering Science curriculum, I took 3 physics courses: [PHY180](https://www.physics.utoronto.ca/undergraduate/current-and-prospective-students/undergraduate-courses/elements-of-physics-i/) (Classical Mechanics), [PHY293](https://www.physics.utoronto.ca/undergraduate/current-and-prospective-students/undergraduate-courses/waves-and-modern-physics/) (Waves & Modern Physics), and [PHY294](https://www.physics.utoronto.ca/undergraduate/current-and-prospective-students/undergraduate-courses/quantum-and-thermal-physics/) (Quantum & Thermal Physics). Here are various physics experiments I did in each course and my reports on them.

## PHY180
### Pendulum - [Paper](https://drive.google.com/file/d/1jGUGThsQglmvLwHygEQlEFU2Qb0ysxXC/view?usp=sharing)

For PHY180, I wrote a paper on the physics of a simple pendulum. I investigated the roughly parabolic correlation between a pendulum's drop angle and its period. I then analyzed how the pendulum's amplitude decays over time, which closely followed an exponential function when dropped from low enough angles. From this, I calculated the Quality Factor to quantify damping. Finally, I explored how changing the pendulum's length affects its motion, finding that while length doesn't significantly affect the Q factor, the period increases approximately with a power-law relationship.

<img src="/images/pendulum.png" alt="Pendulum" className="rounded-lg border border-zinc-800" />

## PHY293

### Charge-to-Mass Ratio for the Electron - [Paper](https://drive.google.com/file/d/17liCblhUc09byRuuL5MX6z-OtZGn4kN3/view?usp=sharing)

The charge-to-mass ratio (e/m) of the electron is a fundamental property first measured by J. J. Thomson in 1895, highlighting the behavior of charged particles under electromagnetic forces. In this experiment, the motion of an electron in a uniform magnetic field is studied to determine its e/m ratio.

<img src="/images/chargetomass1.png" alt="Charge-to-Mass Ratio for the Electron" className="rounded-lg border border-zinc-800" />
<img src="/images/chargetomass2.png" alt="Charge-to-Mass Ratio for the Electron" className="rounded-lg border border-zinc-800" />

### Interferometry - [Paper](https://drive.google.com/file/d/1HbUa9vICd9rei3bwiFIP9Lo9wAgOK1gZ/view?usp=sharing)

For the second experiment in PHY293, I measured the wavelength of green and red light using interferometry with a Michelson interferometer. This is a precise technique for measuring small distances, wavelengths, and material properties through light interference patterns. In a Michelson interferometer, light is split into two paths. One directed toward a fixed mirror and the other toward a movable mirror. When these beams recombine, they create an interference pattern with many fringes, sensitive to path length changes. Counting the number of fringes that pass by as the mirror moves allows us to calculate the wavelength of the light.

<img src="/images/interferometer.png" alt="Interferometry" className="rounded-lg border border-zinc-800" />

## PHY294

### Rydberg Constant - [Paper](https://drive.google.com/file/d/1RhK4qMIhfDLvb-j2wXmzULt6HVNJySo9/view?usp=sharing)

In this experiment, we measured the spectral lines of hydrogen using a spectrometer to experimentally determine the Rydberg constant. By observing the Balmer series and plotting the inverse of the squared wavelengths, we obtained a linear relationship that allowed us to extract an experimental Rydberg constant within acceptable uncertainty of the theoretical value. This experiment reinforced the quantized nature of atomic energy levels and the predictive power of the Bohr model.

<img src="/images/rydberg.png" alt="Rydberg Constant" className="rounded-lg border border-zinc-800" />

### Photoelectric Effect - [Paper](https://drive.google.com/file/d/1wO5Ck5qN00lGmOndGUuJVcVDK3CxFI9R/view?usp=sharing)

We investigated the photoelectric effect to determine Planck's constant and verify Einstein's equation. By measuring the stopping voltage for various light frequencies, we found a linear relationship consistent with the photon theory of light. The slope and intercept of the fitted data yielded values for Planck's constant and the work function of the photocathode material. We also confirmed that stopping potential is independent of light intensity, while photocurrent scales with it, further supporting the quantum description of light.

<img src="/images/photoelectric.png" alt="Photoelectric Effect" className="rounded-lg border border-zinc-800" />

### Polarization of Light - [Paper](https://drive.google.com/file/d/147zGH0Sdm0RRHyTmhxyfgO3Ip9BgjcpZ/view?usp=sharing)

This lab explored three core concepts in light polarization: Malus' Law, the effect of inserting a third polarizer, and Brewster's angle. Using a diode laser, polarizers, and a photodetector, we experimentally verified the cos²θ relationship predicted by Malus' Law and observed sinusoidal transmission through three polarizers. We also estimated the Brewster angle for acrylic using reflected light intensity data and bootstrapping to quantify uncertainty, enabling the calculation of its refractive index.

<img src="/images/polarization.png" alt="Polarization of Light" className="rounded-lg border border-zinc-800" />
`,
        technologies: [
            "Python",
            "LabView",
            "LaTeX"
        ],
        role: "Physicist",
        collaborators: [
            {
                name: "Aryan Nehete",
                link: "https://www.linkedin.com/in/aryan-nehete/?originalSubdomain=ca"
            },
            {
                name: "Chase Graci",
                link: "https://www.linkedin.com/in/chase-graci-5a7099232/"
            }
        ],
        link: "https://drive.google.com/drive/folders/12BJBw85iZWYwT6ixSqrp3DInpyKq-hcu?usp=sharing",
        linkText: "View All Reports",
        color: "bg-gray-900",
        featured: true
    },
    "matboard-beam-bridge": {
        title: "Matboard Beam Bridge",
        description: "1200mm long bridge made from 1 piece of matboard",
        fullDescription: `
For the [CIV102](https://orientation.engsci.utoronto.ca/civ102-structures-and-materials/) course project, my team and I designed and constructed a 1200mm long bridge using only a single piece of matboard and contact cement. Here it is in action:

<iframe 
  src="https://www.youtube.com/embed/KxGPTM63LrI" 
  title="Bridge Testing Video"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
></iframe>

Our bridge:
- Supported a peak moving load of **840 N** (over 180 lbs!!)
- Tied for **first place** in our section based on peak load capacity
- Achieved **third place** overall in the cohort for power-to-weight ratio efficiency

I led the cross-sectional design process, which involved:
- Performing extensive structural calculations
- Iterating through multiple design variations
- Optimizing performance through analytical modeling

Initially attempting to use MATLAB and Python for calculations, I pivoted to Google Sheets for efficiency, which proved effective for our analytical needs. The project showcased practical applications of structural engineering principles and the importance of iterative design optimization.

Below are the detailed structural calculations used to optimize our bridge design, including parameters for each section, stress analysis, and safety factors:

<img src="/images/bridge-calculations.png" alt="Bridge structural calculations spreadsheet showing section parameters, stress analysis, and safety factors" className="rounded-lg border border-zinc-800" />
      `,
        imageUrl: "/images/bridge-group.png",
        technologies: [
            "Fusion360",
            "Structural Analysis",
            "Civil Engineering Calculations",
            "Google Sheets"
        ],
        role: "Civil Engineer",
        collaborators: [
            {
                name: "Tiago Ferreira",
                link: "https://www.linkedin.com/in/tiago-ferreira-59a664251/"
            },
            {
                name: "Amely Vorontsov",
                link: "https://www.linkedin.com/in/amelyvorontsov/"
            }
        ],
        link: "https://drive.google.com/file/d/1xIALROID6iFDgDUVxBSVGb0973t5O4ST/view?usp=sharing",
        linkText: "View Project Report",
        color: "bg-indigo-950",
        featured: false
    },
    "integral-music": {
        title: "Rap Music vs Solving Integrals",
        description: "The effect of lyrical rap on speed and accuracy of solving integrals",
        fullDescription: `
I personally can never focus while listening to music, let alone rap music with lots of lyrics. However, many of my friends claim they study better with music, so I decided to put it to the test.

For my Probability & Statistics (ECE286) course project, my team and I decided to investigate the effect of lyrical rap on speed and accuracy of solving integrals. 24 second-year Engineering Science students were assigned to complete a set oftwo Calculus II level integrals with or without the influence of rap music. 

I conducted the data collection and analysis in R Studio. It was my first time using R, so I had to learn as I went along.

Their solution times and accuracy were measured and results showed that the music group had a slightly lower mean score (6.8 vs 7.6 out of 10) and an equal mean time (about 8.5 minutes).

<img src="/images/integral1.png" alt="Integral Music" className="rounded-lg border border-zinc-800" />
<img src="/images/integral2.png" alt="Integral Music" className="rounded-lg border border-zinc-800" />
`,
        imageUrl: "/images/integral.png",
        technologies: [
            "Statistics",
            "R Studio",
            "LaTeX"
        ],
        role: "Data Analyst",
        collaborators: [
            {
                name: "Roy Bou Abboud",
                link: "https://www.linkedin.com/in/roybouabboud/"
            },
            {
                name: "Chase Graci",
                link: "https://www.linkedin.com/in/chase-graci-5a7099232/"
            }
        ],
        link: "https://drive.google.com/file/d/1f9r30FSNV0ad8EKv83iAw3I9VhgCjZGf/view?usp=sharing",
        linkText: "View Project Report",
        color: "bg-indigo-950",
        featured: false
    },
    telenote: {
        title: "Telenote",
        description: "Search history for your brain",
        fullDescription: `
For JAMHacks 6, my team and I built **Telenotes**, which is a mobile app that transforms spoken thoughts into organized notes using natural language processing. The idea stemmed from a simple question: _why do we forget most of our thoughts?_ We wanted to eliminate the friction between thinking and recording ideas, so we built something we'd genuinely use.
Here's a demo video:
<iframe 
  src="https://www.youtube.com/embed/04YeR4AuvsQ?si=W03E937OdBKoAqHY" 
  title="Telenotes Demo Video"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
></iframe>

**Telenote:**
- Converts speech to structured notes using IBM Watson NLP
- Supports command-based classification for rapid thought sorting
- Built with React Native (frontend) and Express.js (backend)

I mainly focused on the frontend, which was my first time coding with JavaScript. This was before any LLMs were released, so learning and coding on the fly was a real challenge.

Despite initial roadblocks with Google's API, switching to IBM Watson led to quick and accurate results. This project deepened my understanding of NLP pipelines, mobile-backend communication, and the importance of designing around user accessibility.
`,
        imageUrl: "/images/telenote.png",
        technologies: [
            "React Native",
            "Node.js",
            "IBM Watson",
            "Express.js",
            "Expo Go"
        ],
        role: "Front End Developer",
        collaborators: [
            {
                name: "Adam Omarali",
                link: "https://www.adamomarali.com/"
            },
            {
                name: "Leo Liu",
                link: "https://leohliu.com/"
            },
            {
                name: "Kody Neldner",
                link: "https://www.linkedin.com/in/kody-neldner/?originalSubdomain=ca"
            }
        ],
        link: "https://devpost.com/software/telenotes",
        linkText: "View Devpost Submission",
        color: "bg-zinc-900",
        featured: false
    },
    waldio: {
        title: "Wald.io",
        description: "Competitive online multiplayer Where's Waldo?",
        imageUrl: "/images/waldio.jpg",
        fullDescription: `
What if you could play Where's Waldo with your friends online, and every map was custom generated by AI? This was our project for Michigan Hacks 16.

Our inspiration was online games like Scribbl.io and Gartic Phone, but with a Where's Waldo twist. Additionally, before each match, players can input custom themes and DALL·E will generate a custom background image in the style of Where's Waldo and randomly insert Waldo somewhere on the map. First person to find him wins!
`,
        technologies: [
            "React",
            "Express.js",
            "Firebase",
            "JavaScript",
            "Node.js",
            "Socket.io",
            "DALL·E"
        ],
        role: "Front End & AI Developer",
        collaborators: [
            {
                name: "Adam Omarali",
                link: "https://www.adamomarali.com/"
            },
            {
                name: "Leo Liu",
                link: "https://leohliu.com/"
            },
            {
                name: "Stanley Liu",
                link: "https://www.linkedin.com/in/stanley-liu-44798a237/"
            }
        ],
        link: "https://devpost.com/software/wald-io",
        linkText: "View Devpost Submission",
        color: "bg-gray-900",
        featured: false
    },
    "exam-cal": {
        title: "Exam Calendar Export Tool",
        description: "iCal export tool for UofT Engineering Exams",
        imageUrl: "/images/exam.png",
        fullDescription: `
This is a project was inspired by [SWErikCodes'](https://www.linkedin.com/in/erik-cupsa/) [McGill Exam Scheduler](https://mcgillscheduler.vercel.app/).

I personally always wanted to be able to import my exam schedule into my Google Calendar, but UofT doesn't offer an official API for this. So, I built this tool to scrape the exam schedule released by the Registrar and export it as an iCal file.

Since I published this tool, it has had 150+ users!

The site is coded with Python and hosted on Streamlit. Once the user selects their courses, the tool generates an iCal file complete with all the details of the exams, including the location (based on last name), time, and duration.

I even got some feedback from the Dean of Engineering himself!

<img src="/images/exam_feedback.png" alt="Exam Calendar Export Tool" className="rounded-lg border border-zinc-800" />
`,
        technologies: [
            "Python",
            "Streamlit",
            "Pandas",
            "ics"
        ],
        role: "Full Stack Developer",
        link: "https://skule-exams.streamlit.app/",
        linkText: "Try it out!",
        color: "bg-gray-900",
        featured: false
    },
    "luminescent-vortex": {
        title: "Luminescent Vortex",
        description: "Therapeutic toy for children with disabilities",
        imageUrl: "/images/vortex.jpeg",
        fullDescription: `
As part of the my Tech Design class in high school, I got to create a toy for children with disabilities at Sunny View Public School.

<iframe width="560" height="315" src="https://youtube.com/embed/tmaF7U5VSIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Look at that satisfying vortex!

The inspiration for this project is a [magnetic stirrer](https://en.wikipedia.org/wiki/Magnetic_stirrer) used in chemistry labs. A small magnetic stir bar in liquid is rotated by an motor, controlled by a button, creating a vortex that is so mesmerizing to watch.

To build this toy, I tore apart a cheap magnetic stirrer and used the motor and stir bar. The liquid I used is tonic water, which illuminates under UV light. I then CADed a water tight enclosure using rubber gaskets, added a button, and a flexible UV lamp. I then machined the parts on a lathe and drill press (and also manually threaded the support shafts... not fun), and delivered the final product to the school.

`,
        technologies: [
            "Fusion 360",
            "Machining"
        ],
        role: "Designer",
        color: "bg-gray-900",
        featured: false
    },
    "ace-the-case": {
        title: "Ace the Case",
        description: "Deloitte x UTESCA Case Competition",
        imageUrl: "/images/acethecase.jpg",
        fullDescription: `
A couple of my friends and I participated in the Deloitte x [UTESCA](https://www.utesca.ca/) Case Competition, where we took home 2nd place and $150!

The competition was judged by Deloitte consultants, and the case was about a construction/engineering company, ElectroNovate, that needed a new project management system. We pitched our recommendation, as well as a year long implementation plan using different analysis methods I learned at PwC.

Here's my team winning second place! (I had to leave before the awards ceremony unfortunately)

<img src="/images/acethecase_win.jpg" alt="Ace the Case" className="rounded-lg border border-zinc-800" />
`,
        technologies: [
            "PowerPoint",
            "Consulting"
        ],
        role: "Consultant",
        collaborators: [
            {
                name: "Roy Bou Abboud",
                link: "https://www.linkedin.com/in/roybouabboud/"
            },
            {
                name: "Chase Graci",
                link: "https://www.linkedin.com/in/chase-graci-5a7099232/"
            },
            {
                name: "Aryan Nehete",
                link: "https://www.linkedin.com/in/aryan-nehete/?originalSubdomain=ca"
            }
        ],
        link: "https://drive.google.com/file/d/1J29xE3tyttM2j0LO-bNOdXYUxlplUpmf/view?usp=sharing",
        linkText: "View Slide Deck",
        color: "bg-gray-900",
        featured: false
    },
    qfc: {
        title: "Algorithmic Trading Case Competition",
        description: "Hosted by the Quant Finance Club",
        imageUrl: "/images/qfc.png",
        fullDescription: `
I competed in the Quant Finance Club's Algorithmic Trading Case Competition, where my team and I built a simple trading strategy that uses first and second order derivatives to predict peaks and trouphs (RSI, Returns, Volatility).

We ranked 1st of out 14 teams by profit margins! (16% return on $100k)
`,
        technologies: [
            "Python",
            "Quantitative Finance"
        ],
        role: "Quant Developer",
        collaborators: [
            {
                name: "Ariel Khait",
                link: "https://arielkhait.github.io/"
            },
            {
                name: "Paolo Riverin",
                link: "https://www.linkedin.com/in/paolo-riverin-252b03224/"
            },
            {
                name: "Harrison Bell",
                link: "https://www.linkedin.com/in/harrisonrbell/"
            },
            {
                name: "Alec Maanavi",
                link: "https://www.linkedin.com/in/alexander-maanavi-637628254/"
            }
        ],
        link: "https://drive.google.com/file/d/1HlJRz1GPjJUNXcbWTCi85hDZdS7C5YmK/view?usp=sharing",
        linkText: "View Slide Deck",
        color: "bg-gray-900",
        featured: false
    },
    future: {
        title: "Future Projects",
        description: "Projects I have planned/am working on",
        imageUrl: "/images/future.png",
        fullDescription: `
I'm always working on something new! Here are some of the things I'm working on:

- [Habot](https://kyumlee.com/future/), led by [Kyum Lee](https://kyumlee.com/), a habit learning wheel based robot that can climb stairs
  - I'm working as a mechanical engineer, designing the leg assembly that allows the stair climbing

- Starting a [RIVAL Robotics Competition](https://www.rivalrobotics.co/) Team @ UofT
`,
        technologies: [
            "Fusion 360"
        ],
        role: "Engineer",
        color: "bg-gray-900",
        featured: false
    }
};
}}),
"[project]/src/components/nav/MainNav.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MainNav": (()=>MainNav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const MainNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MainNav() from the server but MainNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/nav/MainNav.tsx <module evaluation>", "MainNav");
}}),
"[project]/src/components/nav/MainNav.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MainNav": (()=>MainNav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const MainNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MainNav() from the server but MainNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/nav/MainNav.tsx", "MainNav");
}}),
"[project]/src/components/nav/MainNav.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$MainNav$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/nav/MainNav.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$MainNav$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/nav/MainNav.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$MainNav$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/footer/Footer.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Footer": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Footer() from the server but Footer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/footer/Footer.tsx <module evaluation>", "Footer");
}}),
"[project]/src/components/footer/Footer.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Footer": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Footer() from the server but Footer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/footer/Footer.tsx", "Footer");
}}),
"[project]/src/components/footer/Footer.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/footer/Footer.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/footer/Footer.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/projects/[slug]/ProjectDetail.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProjectDetail": (()=>ProjectDetail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ProjectDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProjectDetail() from the server but ProjectDetail is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/projects/[slug]/ProjectDetail.tsx <module evaluation>", "ProjectDetail");
}}),
"[project]/src/app/projects/[slug]/ProjectDetail.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProjectDetail": (()=>ProjectDetail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ProjectDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProjectDetail() from the server but ProjectDetail is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/projects/[slug]/ProjectDetail.tsx", "ProjectDetail");
}}),
"[project]/src/app/projects/[slug]/ProjectDetail.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/projects/[slug]/ProjectDetail.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/projects/[slug]/ProjectDetail.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/ui/scroll-area.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScrollArea": (()=>ScrollArea),
    "ScrollBar": (()=>ScrollBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ScrollArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ScrollArea() from the server but ScrollArea is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/scroll-area.tsx <module evaluation>", "ScrollArea");
const ScrollBar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ScrollBar() from the server but ScrollBar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/scroll-area.tsx <module evaluation>", "ScrollBar");
}}),
"[project]/src/components/ui/scroll-area.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScrollArea": (()=>ScrollArea),
    "ScrollBar": (()=>ScrollBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ScrollArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ScrollArea() from the server but ScrollArea is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/scroll-area.tsx", "ScrollArea");
const ScrollBar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ScrollBar() from the server but ScrollBar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/scroll-area.tsx", "ScrollBar");
}}),
"[project]/src/components/ui/scroll-area.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectPage),
    "dynamic": (()=>dynamic),
    "generateMetadata": (()=>generateMetadata),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projectData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/projectData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$MainNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/nav/MainNav.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/footer/Footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/projects/[slug]/ProjectDetail.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const dynamic = "force-static";
function generateStaticParams() {
    return Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projectData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectData"]).map((slug)=>({
            slug
        }));
}
async function generateMetadata(props) {
    const { slug } = await props.params;
    if (!Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projectData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectData"]).includes(slug)) {
        return {
            title: "Project Not Found"
        };
    }
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projectData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectData"][slug];
    return {
        title: project.title,
        description: project.description
    };
}
async function ProjectPage(props) {
    const { slug } = await props.params;
    if (!Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projectData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectData"]).includes(slug)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$projectData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectData"][slug];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$MainNav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MainNav"], {}, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ScrollArea"], {
                className: "flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "bg-black pt-16 pb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$projects$2f5b$slug$5d2f$ProjectDetail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectDetail"], {
                            project: {
                                ...project,
                                collaborators: project.collaborators?.map((c)=>({
                                        name: c.name,
                                        link: c.link || ''
                                    }))
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$footer$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                            fileName: "[project]/src/app/projects/[slug]/page.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/[slug]/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/projects/[slug]/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/projects/[slug]/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_161dcc28._.js.map