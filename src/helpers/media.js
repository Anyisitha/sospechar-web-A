import { API_URL } from "./global";

export const fecthProfessionalMedia = async (token) => {
    try {

        const data = [
            {
                "id": "1",
                "title": "VIDEO",
                "description": "¿Cómo funciona un corazon normal frente a un corazon con falla cardiaca? ",
                "file_path": "",
                "thumbnail": require("../assets/images/gene2_1.png"),
                "background": require("../assets/images/gene2_1.png"),
                "subsection": "1",
                "section": "1",
                "type": "3",
                "available": "0"
            },
            {
                "id": "2",
                "title": "INFOGRAFÍA",
                "description": "Impacto local y mundial de la falla cardiaca.",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "2",
                "section": "1",
                "type": "1",
                "available": "0"
            },
            {
                "id": "3",
                "title": "BLOG",
                "description": "Impacto local y mundial de la falla cardiaca.",
                "file_path": "test",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "2",
                "section": "1",
                "type": "4",
                "available": "0"
            },
            {
                "id": "4",
                "title": "PODCAST",
                "description": "Falla cardiaca con fraccion de eyeccion preservada y falla cardiaca con fraccion de eyeccion reducidad.",
                "file_path": "test",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "4",
                "section": "4",
                "type": "2",
                "available": "0"
            },
            {
                "id": "4",
                "title": "BLOG",
                "description": "Falla cardiaca con fraccion de eyeccion preservada y falla cardiaca con fraccion de eyeccion reducidad.",
                "file_path": "test",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "4",
                "section": "4",
                "type": "3",
                "available": "0"
            },
            {
                "id": "4",
                "title": "BLOG",
                "description": "Caso clínico de paciente diagnosticado con falla cardíaca con FEVI preservada.",
                "file_path": "test",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "3",
                "section": "1",
                "type": "4",
                "available": "0"
            },
            {
                "id": "6",
                "title": "VIDEO",
                "description": "¿Cómo funciona un corazon normal frente a un corazon con falla cardiaca? ",
                "file_path": require("../assets/images/Video_eps.mp4"),
                "thumbnail": require("../assets/images/fondo_video.png"),
                "background": require("../assets/images/fondo_video.png"),
                "subsection": "4",
                "section": "1",
                "type": "3",
                "available": "1"
            },
            {
                "id": "11",
                "title": "INFOGRAFIA",
                "description": "¿Que pasa en un corazon con falla cardiaca?",
                "file_path": require("../assets/images/fondo_tercero.png"),
                "thumbnail": require("../assets/images/corzaon_23.png"),
                "background": require("../assets/images/corzaon_23.png"),
                "subsection": "5",
                "section": "4",
                "type": "1",
                "available": "1"
            },
            {
                "id": "13",
                "title": "BLOG",
                "description": "¿Que pasa en un corazon con falla cardiaca?",
                "file_path": require("../assets/images/blog_visual.jpg"),
                "thumbnail": require("../assets/images/activo.png"),
                "background": require("../assets/images/activo.png"),
                "subsection": "5",
                "section": "4",
                "type": "1",
                "available": "1"
            },
            {
                "id": "14",
                "title": "INFOGRAFIA",
                "description": "¿Cuales son los examenes diagnosticos de la falla cardiaca y que se busca en ellos?",
                "file_path": "test",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "6",
                "section": "4",
                "type": "1",
                "available": "0"
            },
            {
                "id": "15",
                "title": "BLOG",
                "description": "¿Cuales son los examenes diagnosticos de la falla cardiaca y que se busca en ellos?",
                "file_path": "test",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "/assets/images/importancia-diagnostico-podcast-bc.png",
                "subsection": "6",
                "section": "4",
                "type": "4",
                "available": "0"
            },
            {
                "id": "16",
                "title": "INFOGRAFÍA",
                "description": "Importancia de la fracción de eyección del ventrículo\r\nizquierdo (FEVI) en la clasificación de la falla cardiaca.",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "5",
                "section": "3",
                "type": "1",
                "available": "0"
            },
            {
                "id": "86",
                "title": "INFOGRAFIA",
                "description": "Otras herramientas útiles para \ndiagnosticar la falla cardiaca. - Herramientas diagnósticas.",
                "file_path": "test",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "/assets/images/herramientas-diagnosticas-podcast-bc.png",
                "subsection": "5",
                "section": "5",
                "type": "2",
                "available": "0"
            },
            {
                "id": "87",
                "title": "BLOG",
                "description": "Importancia del ecocardiograma para establecer \r\nel diagnóstico y clasificación de la falla cardiaca.",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "5",
                "section": "5",
                "type": "1",
                "available": "0"
            },
            {
                "id": "88",
                "title": "INFOGRAFIA",
                "description": "Importancia del ecocardiograma para establecer \r\nel diagnóstico y clasificación de la falla cardiaca.",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "5",
                "section": "5",
                "type": "1",
                "available": "0"
            },
            {
                "id": "89",
                "title": "TEST",
                "description": "Otras herramientas útiles para \ndiagnosticar la falla cardiaca. - Herramientas diagnósticas.",
                "file_path": "test",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "/assets/images/herramientas-diagnosticas-podcast-bc.png",
                "subsection": "6",
                "section": "5",
                "type": "2",
                "available": "0"
            },
            {
                "id": "90",
                "title": "BLOG",
                "description": "Importancia del ecocardiograma para establecer \r\nel diagnóstico y clasificación de la falla cardiaca.",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "6",
                "section": "5",
                "type": "1",
                "available": "0"
            },
            {
                "id": "91",
                "title": "BLOG",
                "description": "Importancia del ecocardiograma para establecer \r\nel diagnóstico y clasificación de la falla cardiaca.",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "6",
                "section": "5",
                "type": "1",
                "available": "0"
            },
            {
                "id": "92",
                "title": "VIDEO",
                "description": "Otras herramientas útiles para \ndiagnosticar la falla cardiaca. - Herramientas diagnósticas.",
                "file_path": "test",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "/assets/images/herramientas-diagnosticas-podcast-bc.png",
                "subsection": "7",
                "section": "5",
                "type": "2",
                "available": "0"
            },
            {
                "id": "93",
                "title": "BLOG",
                "description": "Importancia del ecocardiograma para establecer \r\nel diagnóstico y clasificación de la falla cardiaca.",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "7",
                "section": "5",
                "type": "1",
                "available": "0"
            },
            {
                "id": "94",
                "title": "TEST",
                "description": "Importancia del ecocardiograma para establecer \r\nel diagnóstico y clasificación de la falla cardiaca.",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "7",
                "section": "5",
                "type": "1",
                "available": "0"
            },
            {
                "id": "95",
                "title": "INFOGRAFIA",
                "description": "¿Como se sienten los signos y sintomas en el paciente y como puede identificarlos un cuidador o familiar?",
                "file_path": require("../assets/images/FONDO_TERCER.png"),
                "thumbnail": require("../assets/images/CUCARACHA.png"),
                "background": "Na",
                "subsection": "8",
                "section": "5",
                "type": "1",
                "available": "1"
            },
            {
                "id": "96",
                "title": "BLOG",
                "description": "¿Como se sienten los signos y sintomas en el paciente y como puede identificarlos un cuidador o familiar?",
                "file_path": require("../assets/images/signos_alarmas-100.jpg"),
                "thumbnail": require("../assets/images/FAMILIA00.png"),
                "background": "Na",
                "subsection": "8",
                "section": "5",
                "type": "1",
                "available": "1"
            },
            {
                "id": "97",
                "title": "PODCAST",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "8",
                "section": "5",
                "type": "2",
                "available": "0"
            },
            {
                "id": "98",
                "title": "PODCAST",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "9",
                "section": "5",
                "type": "2",
                "available": "0"
            },
            {
                "id": "99",
                "title": "PODCAST",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "9",
                "section": "5",
                "type": "2",
                "available": "0"
            },
            {
                "id": "100",
                "title": "PODCAST",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "9",
                "section": "5",
                "type": "2",
                "available": "0"
            },
            {
                "id": "101",
                "title": "PODCAST",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "10",
                "section": "7",
                "type": "2",
                "available": "0"
            },
            {
                "id": "102",
                "title": "PODCAST",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "10",
                "section": "7",
                "type": "2",
                "available": "0"
            },
            {
                "id": "103",
                "title": "VIDEO",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": require("../assets/images/gene2_1.png"),
                "background": "Na",
                "subsection": "11",
                "section": "8",
                "type": "2",
                "available": "1"
            },
            {
                "id": "104",
                "title": "PODCAST",
                "description": "Testimonio 1: paciente diagnosticado de manera temprana con falla cardiaca.",
                "file_path": require("../assets/images/Maria_01-03-2022_JP.mp3"),
                "file_path_2": require("../assets/images/Maria_01-03-2022_JP.mp3"),
                "thumbnail": require("../assets/images/circulo_podcast_1.png"),
                "background": "/assets/images/conseso-definicion-cardiaca-poidcast-bc.png",
                "subsection": "12",
                "section": "9",
                "type": "2",
                "available": "1"
            },
            {
                "id": "105",
                "title": "INFOGRAFIA",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "13",
                "section": "10",
                "type": "1",
                "available": "0"
            },
            {
                "id": "105",
                "title": "INFOGRAFIA",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "13",
                "section": "10",
                "type": "1",
                "available": "0"
            },
            {
                "id": "105",
                "title": "INFOGRAFIA",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "13",
                "section": "10",
                "type": "1",
                "available": "0"
            },
            {
                "id": "105",
                "title": "BLOG",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "14",
                "section": "11",
                "type": "1",
                "available": "0"
            },
            {
                "id": "105",
                "title": "BLOG",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "14",
                "section": "11",
                "type": "1",
                "available": "0"
            },
            {
                "id": "105",
                "title": "BLOG",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "14",
                "section": "11",
                "type": "1",
                "available": "0"
            },
            {
                "id": "105",
                "title": "BLOG",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "15",
                "section": "12",
                "type": "1",
                "available": "0"
            },
            {
                "id": "105",
                "title": "PODCAST",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "15",
                "section": "12",
                "type": "2",
                "available": "0"
            },
            {
                "id": "105",
                "title": "TEST",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "15",
                "section": "12",
                "type": "3",
                "available": "0"
            },
            {
                "id": "109",
                "title": "INFOGRAFIA",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "16",
                "section": "13",
                "type": "2",
                "available": "0"
            },
            {
                "id": "110",
                "title": "BLOG",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "16",
                "section": "13",
                "type": "2",
                "available": "0"
            },
            {
                "id": "111",
                "title": "INFOGRAFIA",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "16",
                "section": "13",
                "type": "2",
                "available": "0"
            },
            {
                "id": "109",
                "title": "BLOG",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "17",
                "section": "14",
                "type": "2",
                "available": "0"
            },
            {
                "id": "110",
                "title": "BLOG",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "17",
                "section": "14",
                "type": "2",
                "available": "0"
            },
            {
                "id": "111",
                "title": "BLOG",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "17",
                "section": "14",
                "type": "2",
                "available": "0"
            },
            {
                "id": "111",
                "title": "PODCAST",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "18",
                "section": "15",
                "type": "2",
                "available": "0"
            },
            {
                "id": "111",
                "title": "PODCAST",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "19",
                "section": "16",
                "type": "2",
                "available": "0"
            },
            {
                "id": "111",
                "title": "BLOG",
                "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardiaca",
                "file_path": "/assets/images/infografia-dumi.png",
                "thumbnail": "/assets/images/dumi-1.png",
                "background": "Na",
                "subsection": "20",
                "section": "17",
                "type": "2",
                "available": "0"
            },
        ]

        return data;

        // const url = `${API_URL}Medias/getProfessionalMedias`;

        // const res = await fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
        //         'X-token': token
        //     }
        // });

        // const data = await res.json();

        // if(data.error) {
        //     return data.error;
        // } else {
        //     return data;
        // }

    } catch(error) {
        console.log(error);
    }
};

export const fetchGetAllFavorites = async (token) => {
    try {

        const url = `${API_URL}Medias/getAllFavorites`;

        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-token': token
            }
        });

        const data = res.json();

        return data;

    } catch(error) {
        console.log(error);
    }
}

export const fetchDeleteFavorite = async (token, mediaId) => {
    const url = `${API_URL}Medias/deleteFavorite`;

    const body = new FormData();
    body.append('media_id', mediaId);

    try {
        
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'X-token': token
            },
            body: body
        });

        const data = res.json();

        if(data.error) {
            return data.error;
        } else {
            return data;
        }

    } catch(error) {
        console.log(error);
    }
}

export const fecthVerifyFavorite = async (mediaId) => {
    const url = `${API_URL}Medias/verifyFavoriteMedia`;

    const token = localStorage.getItem('X-token') || '';

    const body = new FormData();
    body.append('media_id', mediaId);

    try {

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'X-token': token
            },
            body: body
        });

        const data = res.json();

        return data;

    } catch(error) {
        console.log(error);
    }
};