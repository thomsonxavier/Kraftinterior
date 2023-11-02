import cover1 from './assets/16.jpg'
import cover2 from './assets/10-1.jpg'
import cover3 from './assets/25.jpg'
import cover4 from './assets/ss.jpg'

// image for project


import img1 from './assets/projects/thumb/1.jpg'
import img2 from './assets/projects/thumb/2.jpg'
import img3 from './assets/projects/thumb/3.jpg'
import img4 from './assets/projects/thumb/4.jpg'


// project 1


import p11 from './assets/projects/p-1/1.jpg'
import p12 from './assets/projects/p-1/2.jpg'
import p13 from './assets/projects/p-1/3.jpg'
import p14 from './assets/projects/p-1/4.jpg'
import p15 from './assets/projects/p-1/5.jpg'
import p16 from './assets/projects/p-1/6.jpg'
import p17 from './assets/projects/p-1/7.jpg'
import p18 from './assets/projects/p-1/8.jpg'
import p19 from './assets/projects/p-1/9.jpg'
import p10 from './assets/projects/p-1/10.jpg'



// logo

import {HiOutlineLightBulb} from 'react-icons/hi'
import {BsLaptop} from 'react-icons/bs'
import {RiPresentationFill} from 'react-icons/ri'
import {MdOutlineRoofing} from 'react-icons/md'

 export  const imageGalleryData = [
    { id: 1, src: cover1, alt: "Image 1" },
    { id: 2, src: cover2, alt: "Image 2" },
    { id: 3, src: cover3, alt: "Image 3" },
    { id: 4, src: cover4, alt: "Image 4" },
  ];

 
 
  
  export const imgsec = [
    {
      id: 1,
      src: HiOutlineLightBulb,
      text: "01 CONSULTATION",
      desc: "We listen to and understand our clients; this communication helps to facilitate an interior design that often exceeds client expectations.",
    },
    {
      id: 2,
      src: BsLaptop,
      text: "02 DESIGN DEVELOPMENT",
      desc: "Each interior design project is refined through a process of fluid development with continuous, valuable input from our clients.",
    },
    {
      id: 3,
      src: RiPresentationFill,
      text: "03 PRESENTATION",
      desc: "Our interior design concepts, ideas, and materials are revealed to our clients in a way that is clearly understood.",
    },
    {
      id: 4,
      src: MdOutlineRoofing,
      text: "04 ORDER & DELIVERY",
      desc: "Furnishings, Fixtures & Equipment ordered and delivered on time is essential to us. Grant Design Group handles every detail, and we oversee the delivery and installation of each item that we order.",
    },
  ];
  



export const projects = [
    {
      id: 'project1',
      title: 'Project 1',
      description: 'Description for Project 1',
      images: [
        p10,
        p11,
        p12,
        p13,
        p14,
        p15,
        p16,
        p17,
        p18,
        p19,
        
      ],
    },
    {
      id: 'project2',
      title: 'Project 2',
      description: 'Description for Project 2',
      images: [
        img2,
        
      ],
    }
    ,
    {
      id: 'project3',
      title: 'Project 3',
      description: 'Description for Project 3',
      images: [
        img3,
        
      ],
      
    },{
        id: 'project4',
        title: 'Project 4',
        description: 'Description for Project 2',
        images: [
            img4,
        ],
        
      },
      {
        id: 'project4',
        title: 'Project 4',
        description: 'Description for Project 2',
        images: [
            img4,
        ],
        
      },
      {
        id: 'project4',
        title: 'Project 4',
        description: 'Description for Project 2',
        images: [
            img4,
        ],
        
      },
    
  ];
  

  
  export const about = {

    about1: {
      title: "ABOUT",
      description:
        "Professional member of the American Society of Interior Designers with more than 35 years experience in Industrial and Interior Design",
    },
    about2: {
      title: "  HOW WE WORK",
      description:
        "Grant Design Group sees interior design as strategy in action, focusing on results.We help our clients envision a better space, and we help them get there successfully.",
    },
    Home: {
      title: " PROJECTS",
    },
    service: {
      title: "SERVICES",
      description:
        "Unique among interior design firms, Grant Design Group utilizes presentation tools that allow our clients to clearly understand and visualize design concepts early on in the project, saving time and investment.",
    },
    service1: {
      title: "PRESENTATION TOOLS",
    },
    service2: {
      title: " HOW WE WORK",
      description:
        "Grant Design Group sees interior design as strategy in action, focused on results.We help our clients envision a better space and we help them get there successfully.",
    },

   

    
  };

  export const contact = {
    contact: {
      title: "GET IN TOUCH WITH US",
      description:
        "Say Hello! Don’t be shy.",
    },

    contact2: {
      title: "OUR OFFICE",
      description:
        `<div>
        <p>5940 S Rainbow Boulevard Suite 4003</p>
        <p>Las Vegas, NV 89118</p>
        <p>Email: tirza@gdglv.com</p>
        <p>Phone: 702 362 6162</p>
      </div>`

      
    },
    
    
    
  };
  

  
