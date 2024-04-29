import {Header} from "../Header";
import {Personal} from "../Personal";
import {Details} from "../Details";

import './CV.scss'
import {CVData} from "../types.ts";

const cvData: CVData = {
    personal: {
        photo: 'https://placehold.co/400x400?text=MSZ',  //Placeholder.co
        name: 'Michał',
        lastName: 'Sz',
        position: 'Developer',
    },
    details: {
        experience: [
            { year: 2020, description: 'Lorem Ipsum'},
            { year: 2023, description: 'Dolor sit amet'},
        ],
        education: [
            'Lorem Ipsum',
            'Dolor sit amet',
            'Ala ma kota'
        ],
    }
}

const CV = () => {
    return <main className='cv-main'>
        <Header data={cvData.personal}/>
        <Personal data={cvData.personal}/>
        <Details data={cvData.details}/>
    </main>
}

export { CV }