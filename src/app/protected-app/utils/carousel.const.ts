import { ICarouselItem } from "../interfaces/carousel-interface-item";

export const CAROUSEL_DATA_ITEMS: ICarouselItem[] = [
    {
        id: 1,
        title :{
            first: 'TITLE 1',
            second: 'Principal'
        },
        subtitle: 'Descripcion de prueba para imagen',
        link: '/',
        image: 'https://hips.hearstapps.com/hmg-prod/images/dutch-fabio-jakobsen-of-quick-step-alpha-vinyl-belgian-wout-news-photo-1657223707.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*'
    },
    {
        id: 2,
        title :{
            first: 'TITLE 2',
            second: 'Principal 2'
        },
        subtitle: 'Descripcion de prueba para imagen 2',
        link: '/',
        image: 'https://monterreysecreto.com/wp-content/uploads/2022/06/ciclismo-monterrey.jpg'
    },
    {
        id: 3,
        title :{
            first: 'TITLE 3',
            second: 'Principal 3'
        },
        subtitle: 'Descripcion de prueba para imagen 3',
        link: '/',
        image: 'https://www.eleconomista.com.mx/__export/1640138470115/sites/eleconomista/img/2021/12/21/gerardo_ulloa_especial.jpg_554688468.jpg'
    }
]