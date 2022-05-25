import branquelas from '../assets/guissin/branquelas.jpg'
import tons from '/src/assets/guissin/50_tons.jpg'
import hunger from '/src/assets/guissin/hunger.jpg'
import senhor from '../assets/guissin/senhor.jpg'
import titanic from '../assets/guissin/titanic.jpg'
import friends_back from '../assets/guissin/friends-back.jpg'

export interface show {
    category: string;
    classification: number[];
    title: string;
    poster: string;
}

export interface profile {
    username: string;
    image: {
        source: string;
        alt: string;
    };
    color: string;
    main_show: {
        category: string;
        time: string;
        classification: number[];
        title: string;
        description: string;
        background: string;
    },
    shows: show[]
}

export const profiles: Array<profile> = [
    {
        username: 'guissinhu',
        image: {
            source: '',
            alt: 'Imagem de Perfil - Guissi'
        },
        color: '#570EAB',
        main_show: {
            category: 'Comédia',
            time: '10T',
            classification: [1, 1, 1, 1, 0.5],
            title: 'Friends',
            description: 'Seis amigos, três homens e três mulheres, enfrentam a vida e os amores em Nova York e adoram passar o tempo livre na cafeteria Central Perk.',
            background: friends_back
        },
        shows: [
            {
                category: 'Comédia',
                classification: [1, 1, 1],
                title: 'As Branquelas',
                poster: branquelas
            },
            {
                category: 'Suspense',
                classification: [1, 1],
                title: 'Cinquenta Tons de Cinza',
                poster: tons
            },
            {
                category: 'Aventura',
                classification: [1, 1, 1, 1, 0.5],
                title: 'O Senhor dos Anéis: A Sociedade do Anel',
                poster: senhor
            },
            {
                category: 'Ação',
                classification: [1, 1, 1, 0.5],
                title: 'Jogos Vorazes',
                poster: hunger
            },
            {
                category: 'Drama',
                classification: [1, 1, 1, 1],
                title: 'Titanic',
                poster: titanic
            },
        ]
    },
    {
        username: 'xandin',
        image: {
            source: '',
            alt: 'Imagem de Perfil - Xandin'
        },
        color: '#570EAB',
        main_show: {
            category: 'Ficção',
            time: '2T',
            classification: [1, 1, 1, 1],
            title: 'Sense 8',
            description: 'Um grupo de pessoas de todas partes do mundo estão conectadas mentalmente e deverão encontrar algum jeito para sobreviver daqueles que tentam caçá-los.',
            background: 'https://images2.alphacoders.com/810/thumb-1920-810655.jpg'
        },
        shows: [
            {
                category: 'Comédia',
                classification: [1, 1, 1, 1, 0.5],
                title: 'Friends',
                poster: 'https://img.elo7.com.br/product/zoom/26A89B7/big-poster-serie-friends-lo01-tamanho-90x60-cm-nerd.jpg'
            },
            {
                category: 'Ficção',
                classification: [1, 1, 1, 1],
                title: 'The Flash',
                poster: 'http://jovemnerd.com.br/wp-content/uploads/the-flash-season-2-go-time-poster-154100.jpg'
            },
            {
                category: 'Comédia',
                classification: [1, 1, 1, 1, 0.5],
                title: 'Brooklyn Nine-Nine',
                poster: 'https://i.pinimg.com/736x/1f/79/e5/1f79e5a12405b966ecbb7e09ea3ab652.jpg'
            },
            {
                category: 'Musical',
                classification: [1, 1, 1],
                title: 'Teen Beach Movie',
                poster: 'https://br.web.img3.acsta.net/pictures/14/07/01/09/52/514957.jpg'
            },
            {
                category: 'Ação',
                classification: [1, 1, 1, 1],
                title: 'Maze Runner',
                poster: 'https://http2.mlstatic.com/D_NQ_NP_622254-MLB27446224571_052018-O.jpg'
            },
        ]
    },
    {
        username: 'wrnunes',
        image: {
            source: '',
            alt: 'Imagem de Perfil - Wilsão'
        },
        color: '#570EAB',
        main_show: {
            category: '',
            time: '',
            classification: [],
            title: '',
            description: '',
            background: ''
        },
        shows: [
            {
                category: '',
                classification: [],
                title: '',
                poster: ''
            }
        ]
    },
    {
        username: 'gabizera',
        image: {
            source: '',
            alt: 'Imagem de Perfil - Gabi'
        },
        color: '#570EAB',
        main_show: {
            category: '',
            time: '',
            classification: [],
            title: '',
            description: '',
            background: ''
        },
        shows: [
            {
                category: '',
                classification: [],
                title: '',
                poster: ''
            }
        ]
    }
]