import React, { useContext, useState } from 'react';
import Carousel from '../components/carousel';
import Coment from '../components/coment';
import Cards from '../components/cards';
import News from '../components/news';

const Home = props => {
    const [state, setState] = useState({
        galery: [
            {
                id: 1,
                image: 'https://chile.travel/wp-content/uploads/2016/03/Santiago-shutterstock-TR27.jpg',
                title: "Santiago",
                description: "La gran capital de Chile."
            },
            {
                id: 2,
                image: 'https://image.shutterstock.com/image-photo/torres-del-paine-chile-260nw-1109019650.jpg',
                title: "Torres del Paine, Punta Arenas",
                description: "El imperdible del fin del mundo"
            },
            {
                id: 3,
                image: 'https://miviaje.com/wp-content/uploads/2017/11/laguna-miscanti-san-pedro-atacama.jpg',
                title: "Desierto de Atacama, Norte de Chile",
                description: "Uno de los lugares más aridos del planeta."
            }
        ],
        blog:[
            {
                id: 1,
                image: 'https://miviaje.com/wp-content/uploads/2017/11/laguna-miscanti-san-pedro-atacama.jpg',
                title: "Tramite 1",
                description: "contenido descriptivo de tramite" 
            },
            {
                id: 2,
                image: 'direcion de imagen',
                title: "Tramite 2",
                description: "contenido descriptivo de tramite" 
            },
            {
                id: 3,
                image: 'direcion de imagen',
                title: "Tramite 3",
                description: "contenido descriptivo de tramite" 
            }
        ]
    })

    return (
        <>
            <Carousel slide={state.galery} />
            <h1 className= "title text-center">Home</h1>
            <Cards conte={state.blog} />
            <Coment conte={state.blog} />
            <News conte={state.blog}/>
            
        </>
    )
}

export default Home;