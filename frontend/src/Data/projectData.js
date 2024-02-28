import one from '../assets/svg/projects/ECG.png'
import two from '../assets/svg/projects/OxVirtual.png'
import five from '../assets/svg/projects/five.svg'
import four from '../assets/svg/projects/inoice.png'
import three from '../assets/svg/projects/three.png'


const projectsData = [
    {
        id: 1,
        projectName: 'Pxalm',
        projectDesc: 'The goal of a Pxalm is to accelerate the personal and professional development of mentees. This is achieved by providing mentees with guidance, advice and feedback from mentors with more experience than themselves.',
        tags: ['Angular','MongoDB','Node','Express'],
        code: 'https://mean.stagingsdei.com:9193/',
        demo: 'https://mean.stagingsdei.com:9193/',
        image: three
    },
    {
        id: 2,
        projectName: 'EKG',
        projectDesc: 'The Goal of EKG is to provide platform for patient to submit the ekg report for the review at any time in very flexible manner to save the time of patient and provider.',
        tags: ['Angular','MongoDB','Node','Express'],
        code: 'http://ss.stagingsdei.com:9061/patient-portal',
        demo: 'http://ss.stagingsdei.com:9061',
        image: two
    },
    {
        id: 3,
        projectName: 'OXVirtualCare',
        projectDesc: 'Ox Virtual Care give you access to the widest variety of market leading monitors, the best clinical user experience, and seamless integration with your other clinical systems.',
        tags: ['Angular','MongoDB','Node','Express'],
        code: 'http://54.201.160.69:9135/SuperAdmin/',
        demo: 'http://54.201.160.69:9135/Frontend/',
        image: one
    },
    {
        id: 4,
        projectName: 'Shop with Siddhant',
        projectDesc: 'Shopify is e-commerce website user can shop here whatever they want it is like amazon, flipkart.',
        tags: ['React','MongoDB','Node','Express'],
        code: 'https://github.com/im-engineer/shopify',
        demo: 'https://github.com/im-engineer/shopify',
        image: five
    },
    {
        id: 5,
        projectName: 'Invoice',
        projectDesc: 'A simple invoice management system',
        tags: ['React','MongoDB','Node','Express'],
        code: 'https://github.com/im-engineer/Invoice-management-system',
        demo:'https://github.com/im-engineer/Invoice-management-system',
        image: four
    },
];


export default projectsData;