import { API_URL } from "./global";

export const fecthProfessionalMedia = async (token) => {
    const data = [
        {
            "id": "1",
            "title": "VIDEO",
            "description": "Te mostramos las diferencias entre el funcionamiento de un corazón normal y uno con falla cardíaca.",
            "file_path": require("../assets/images/VidSUB-Boheringer.mp4"),
            "thumbnail": require("../assets/images/VIDEO-BOEHRINGER.png"),
            "background": require("../assets/images/VIDEO-BOEHRINGER.png"),
            "subsection": "1",
            "section": "1",
            "type": "3",
            "available": "1"
        },
        {
            "id": "2",
            "title": "INFOGRAFÍA",
            "description": "Dale un vistazo a las cifras sobre el impacto de la falla cardíaca mundial y localmente",
            "file_path": require("../assets/images/infografia-dumi2.jpg"),
            "thumbnail": require("../assets/images/infografia-cardiaca.png"),
            "background": "Na",
            "subsection": "2",
            "section": "1",
            "type": "1",
            "available": "1"
        },
        {
            "id": "3",
            "title": "BLOG",
            "description": "En este breve escrito te contamos la verdad sobre el impacto de la falla cardíaca mundial y localmente",
            "file_path": "https://sospecharnofalla.com/mail/blog-4/index.html",
            "thumbnail": require("../assets/images/blog-cardiaca.jpg"),
            "background": "Na",
            "subsection": "2",
            "section": "1",
            "type": "1",
            "available": "1"
        },
        {
            "id": "4",
            "title": "PODCAST",
            "description": "Tómate un minuto para escuchar cómo se clasifica la falla cardíaca.",
            "file_path": require("../assets/images/Podcast-FEVI-ICFE-Boheringer.mp3"),
            "thumbnail": require("../assets/images/podcast-banner.jpg"), 
            "background": require("../assets/images/recurso-podcast-falla.png"),
            "subsection": "4",
            "section": "4",
            "type": "2",
            "available": "1",
            "code": `Este material podría contener conceptos u opiniones que son responsabilidad de los autores y no comprometen las opiniones del laboratorio auspiciante. 
            Boehringer Ingelheim S.A., Teléfono: (+601) 319 91 00, e-mail: medfora.co@boehringer-ingelheim.com 
            Dirección: Carrera 11 No. 84A-09 Piso 5, Bogotá D.C. Colombia. 
            Código: PC-CO-103265.`,
        },
        {
            "id": "5",
            "title": "BLOG",
            "description": "Con esta guía básica entenderas los tipos de falla cardíaca.",
            "file_path": "https://sospecharnofalla.com/mail/blog-8/index.html",
            "thumbnail": require("../assets/images/BOEHRINGER-blog.png"),
            "background": "Na",
            "subsection": "4",
            "section": "4",
            "type": "1",
            "available": "1"
        },
        {
            "id": "4000",
            "title": "VIDEO",
            "description": "Tú eres el director de esta película: ¿Cómo puedes prevenir la falla cardíaca?",
            "file_path": "test",
            "thumbnail": require("../assets/images/completo1.png"),
            "background": "Na",
            "subsection": "3",
            "section": "1",
            "type": "4",
            "available": "0"
        },
        {
            "id": "6",
            "title": "VIDEO",
            "description": "Esto es lo que todos deberían saber sobre la falla cardíaca. ",
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
            "title": "INFOGRAFÍA",
            "description": "Mira lo que le pasa al corazón cuando hay una falla cardíaca.",
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
            "description": "Con esta lectura rapida conocerás que le pasa a un corazón con falla cardíaca.",
            "file_path": "https://sospecharnofalla.com/mail/index.html",
            "thumbnail": require("../assets/images/activo.png"),
            "background": require("../assets/images/activo.png"),
            "subsection": "5",
            "section": "4",
            "type": "1",
            "available": "1"
        },
        {
            "id": "14",
            "title": "INFOGRAFÍA",
            "description": "Tienes que conocer estas herramientas, que se usan para detectar la falla cardíaca.",
            "file_path": "test",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "6",
            "section": "4",
            "type": "1",
            "available": "0"
        },
        {
            "id": "15",
            "title": "BLOG",
            "description": "¿Te van a hacer un examen del corazón? Estas son las herramientas que usarán los médicos.",
            "file_path": "test",
            "thumbnail": require("../assets/images/dumi.png"),
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
            "thumbnail": require("../assets/images/dumi-1.png"),
            "background": "Na",
            "subsection": "5",
            "section": "3",
            "type": "1",
            "available": "0"
        },
        {
            "id": "86",
            "title": "INFOGRAFÍA",
            "description": "Consulta aquí los síntomas ante los que debes alarmarte y consultar con tu médico.",
            "file_path": "test",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "/assets/images/herramientas-diagnosticas-podcast-bc.png",
            "subsection": "5",
            "section": "5",
            "type": "2",
            "available": "0"
        },
        {
            "id": "87",
            "title": "BLOG",
            "description": "Con esta breve lectura sabrás ante cuáles síntomas prender las alarmas y consultar con el médico.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "5",
            "section": "5",
            "type": "1",
            "available": "0"
        },
        {
            "id": "88",
            "title": "INFOGRAFÍA",
            "description": "Ingresa para conocer cómo cuidar tu corazón si te diagnosticaron falla cardíaca.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "5",
            "section": "5",
            "type": "1",
            "available": "0"
        },
        {
            "id": "89",
            "title": "TEST",
            "description": "Respondiendo este test descubrirás si te estás cuidando apropiadamente de la falla cardíaca.",
            "file_path": "test",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "/assets/images/herramientas-diagnosticas-podcast-bc.png",
            "subsection": "6",
            "section": "5",
            "type": "2",
            "available": "0"
        },
        {
            "id": "90",
            "title": "BLOG",
            "description": "Entérate de cómo puedes cuidar tu corazón tras el diagnóstico de falla cardíaca.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "6",
            "section": "5",
            "type": "1",
            "available": "0"
        },
        {
            "id": "91",
            "title": "BLOG",
            "description": "No olvides hacerle estas preguntas a tu médico si te diagnosticaron con falla cardíaca.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "6",
            "section": "5",
            "type": "1",
            "available": "0"
        },
        {
            "id": "92",
            "title": "VIDEO",
            "description": "Te contamos la verdad sobre qué tienes que hacer si te diagnostican con falla cardíaca.",
            "file_path": "test",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "/assets/images/herramientas-diagnosticas-podcast-bc.png",
            "subsection": "7",
            "section": "5",
            "type": "2",
            "available": "0"
        },
        {
            "id": "93",
            "title": "BLOG",
            "description": "Si aplicas estas recomendaciones, tu calidad de vida no disminuirá teniendo falla cardíaca",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "7",
            "section": "5",
            "type": "1",
            "available": "0"
        },
        {
            "id": "94",
            "title": "PODCAST",
            "description": "Hablemos de cómo llevar una buena calidad de vida teniendo falla cardíaca.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "7",
            "section": "5",
            "type": "1",
            "available": "0"
        },
        {
            "id": "95",
            "title": "INFOGRAFÍA",
            "description": "Signos y síntomas a los que debe estar atento el cuidador del paciente con falla cardíaca.",
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
            "description": "Si cuidas a un paciente con falla cardíaca, esta información te interesa.",
            "file_path": "https://sospecharnofalla.com/mail/blog-7/index.html",
            "thumbnail": require("../assets/images/FAMILIA00.png"),
            "background": "Na",
            "subsection": "8",
            "section": "5",
            "type": "1",
            "available": "1"
        },
        // {
        //     "id": "97",
        //     "title": "PODCAST",
        //     "description": "Conversemos sobre por qué es importante que el paciente con falla cardíaca tenga el apoyo de su familia y cuidadores.",
        //     "file_path": "/assets/images/infografia-dumi.png",
        //     "thumbnail": require("../assets/images/dumi.png"),
        //     "background": "Na",
        //     "section": "5",
        //     "type": "2",
        //     "subsection": "8",
        //     "available": "0"
        // },
        {
            "id": "98",
            "title": "VIDEO",
            "description": "No te puedes perder esta información sobre cómo identificar los signos y síntomas de un paciente con falla cardíaca.",
            "file_path": require("../assets/images/signos-video.mp4"),
            "thumbnail": require("../assets/images/pacientes-video.png"),
            "background": require("../assets/images/pacientes-video.png"),
            "subsection": "9",
            "section": "5",
            "type": "3",
            "available": "1"
        },
        {
            "id": "99",
            "title": "BLOG",
            "description": "El apoyo de los cuidadores y familiares al paciente con falla cardíaca es fundamental por estos motivos.",
            "file_path": "https://sospecharnofalla.com/mail/blog-ayudar/index.html",
            "thumbnail": require("../assets/images/banner-familiares.jpg"),
            "background": "Na",
            "subsection": "9",
            "section": "5",
            "type": "1",
            "available": "1"
        },
        {
            "id": "100",
            "title": "PODCAST",
            "description": "Importancia de familiares y cuidadores tras el diagnostico de falla cardíaca",
            "info": "La información contenida en este material no pretende reemplazar el consejo médico profesional, consulte siempre a su médico si tiene preguntas y/o preocupaciones acerca de su condición médica. Material educativo exclusivamente para pacientes/público general. Este material está sujeto a derechos de propiedad intelectual. Boehringer Ingelheim S.A., Teléfono: (+601) 319 91 00, e-mail: medfora.co@boehringer-ingelheim.com  Dirección: Carrera 11 No. 84A-09 Piso 5, Bogotá D.C. Colombia. ",
            "file_path": require("../assets/images/Podcast-Cuidadores.mp3"),
            "thumbnail": require("../assets/images/portada-co.png"),
            "background": require("../assets/images/banner-portada-co.png"),
            "subsection": "20",
            "section": "5",
            "type": "2",
            "available": "1",
            "code": "PC-CO-103281",
        },
        {
            "id": "101",
            "title": "INFOGRAFÍA",
            "description": "Ingresa para conocer cuáles enfermedades pueden causar o empeorar la falla cardíaca",
            "file_path": require("../assets/images/info-diabe.jpg"),
            "thumbnail": require("../assets/images/diabetes-infografia.jpg"),
            "background": "Na",
            "subsection": "10",
            "section": "7",
            "type": "1",
            "available": "1"
        },
        {
            "id": "102",
            "title": "BLOG",
            "description": "Expediente no secreto: estas enfermedades causan o empeoran la falla cardíaca",
            "file_path": "https://sospecharnofalla.com/mail/blog-3/index.html",
            "thumbnail": require("../assets/images/blog-cormo.jpg"),
            "background": "Na",
            "subsection": "10",
            "section": "7",
            "type": "1",
            "available": "1"
        },
        {
            "id": "103",
            "title": "VIDEO",
            "description": "A un clic de conocer cuáles enfermedades causan o empeoran la falla cardíaca",
            "file_path": "/assets/images/completo1.png",
            "thumbnail": require("../assets/images/completo1.png"),
            "background": "Na",
            "subsection": "11",
            "section": "8",
            "type": "2",
            "available": "0"
        },
        {
            "id": "104",
            "title": "PODCAST",
            "description": "La prueba más importante de nuestros dectectives: testimonio de un paciente diagnosticado a tiempo con falla cardíaca",
            "file_path": require("../assets/images/Maria_01-03-2022_JP.mp3"),
            "file_path_2": require("../assets/images/Maria_01-03-2022_JP.mp3"),
            "thumbnail": require("../assets/images/circulo_podcast_1.png"),
            "background": require("../assets/images/conseso-definicion-cardiaca-poidcast-bc.png"),
            "subsection": "12",
            "section": "9",
            "type": "2",
            "available": "1",
            "isSecond": true
        },
        {
            "id": "105",
            "title": "INFOGRAFÍA",
            "description": "Te contamos como puedes prevenir la falla cardíaca.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "13",
            "section": "10",
            "type": "1",
            "available": "0"
        },
        {
            "id": "10001",
            "title": "INFOGRAFÍA",
            "description": "Si eres hipertenso y te diagnosticaron falla cardíaca, esta información es para ti.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "13",
            "section": "10",
            "type": "1",
            "available": "0"
        },
        {
            "id": "10002",
            "title": "INFOGRAFÍA",
            "description": "Estás a un paso de saber qué hacer si eres diabético y te diagnosticaron falla cardíaca.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "13",
            "section": "10",
            "type": "1",
            "available": "0"
        },
        {
            "id": "10003",
            "title": "BLOG",
            "description": "Esta información te puede salvar la vida.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "14",
            "section": "11",
            "type": "1",
            "available": "0"
        },
        {
            "id": "10004",
            "title": "BLOG",
            "description": "Aquí te mostramos qué debes hacer si eres hipertenso y te diagnosticaron falla cardíaca.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "14",
            "section": "11",
            "type": "1",
            "available": "0"
        },
        {
            "id": "10005",
            "title": "BLOG",
            "description": "Esto es lo que debes hacer si eres diabético y te diagnosticaron falla cardíaca.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "14",
            "section": "11",
            "type": "1",
            "available": "0"
        },
        {
            "id": "10006",
            "title": "BLOG",
            "description": "Lo que pensabas hasta el momento sobre la falla cardíaca puede ser falso: ingresa para saber la verdad.",
            "file_path": "https://sospecharnofalla.com/mail/mail-2/index.html",
            "thumbnail": require("../assets/images/nitos-blog.jpg"),
            "background": "Na",
            "subsection": "15",
            "section": "12",
            "type": "1",
            "available": "1"
        },
        {
            "id": "10007",
            "title": "TEST",
            "description": "Responde estas preguntas para descubrir si la falla cardíaca te esta acechando.",
            "file_path": "https://app-test.sospecharnofalla.com/",
            "thumbnail": require("../assets/images/test-1.png"),
            "background": "Na",
            "subsection": "15",
            "section": "12",
            "type": "3",
            "available": "1"
        },
        {
            "id": "10008",
            "title": "PODCAST",
            "description": "¿Hacer ejercicio si tienes falla cardíaca es riesgoso? Averígualo aquí.",
            "file_path": require("../assets/images/podcast-corazon.wav"),
            "text2": "La importancia de llegar a un consenso sobre la definición de la enfermedad para poder diagnosticarla y tratarla.",
            "thumbnail": require("../assets/images/podcast-manza.jpg"),
            "background": require("../assets/images/manzanapodcast.png"),
            "subsection": "15",
            "section": "12",
            "type": "2",
            "available": "1",
            "code": "PC-CO-103134",
            "isSecond": false
        },
        {
            "id": "109",
            "title": "INFOGRAFÍA",
            "description": "Conmemoremos el Día Mundial de la falla Cardíaca con estos datos históricos.",
            "file_path": require("../assets/images/dia-blog.jpg"),
            "thumbnail": require("../assets/images/dia-mundial.jpg"),
            "background": "Na",
            "subsection": "16",
            "section": "13",
            "type": "1",
            "available": "1"
        },
        {
            "id": "110",
            "title": "BLOG",
            "description": "¿Quíen descubrío cómo funciona la falla Cardíaca? Descubralo aquí.",
            "file_path": "https://sospecharnofalla.com/mail/blog-6/index.html",
            "thumbnail": require("../assets/images/banner-mundial.jpg"),
            "background": "Na",
            "subsection": "16",
            "section": "13",
            "type": "1",
            "available": "1"
        },
        {
            "id": "111",
            "title": "INFOGRAFÍA",
            "description": "Cuántas veces al día late el corazón? Ingresa para averiguarlo.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "16",
            "section": "13",
            "type": "2",
            "available": "0"
        },
        {
            "id": "109",
            "title": "BLOG",
            "description": "Día mundial del Corazón: descubre  qué pensaban las culturas antiguas sobre este órgano.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "17",
            "section": "14",
            "type": "2",
            "available": "0"
        },
        {
            "id": "1100",
            "title": "BLOG",
            "description": "Descubre aquí cual es la enfermedad que tiene mayor relación con la falla cardíaca.",
            "file_path": "https://sospecharnofalla.com/mail/blog-5/index.html",
            "thumbnail": require("../assets/images/diamundial-blog.jpg"),
            "background": "Na",
            "subsection": "17",
            "section": "14",
            "type": "1",
            "available": "1"
        },
        {
            "id": "10009",
            "title": "BLOG",
            "description": "Conmemoramos el día mundial de una de las enfermedades que aumenta el riesgo de sufrir falla cardíaca ",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "17",
            "section": "14",
            "type": "2",
            "available": "0"
        },
        {
            "id": "100010",
            "title": "PODCAST",
            "description": "Pongámosle corazón a la prevención: Día Mundial de la Hipertensión.",
            "text2": "La importancia de llegar a un consenso sobre la definición de la enfermedad para poder diagnosticarla y tratarla.",
            "file_path": require("../assets/images/Día Mundial .wav"),
            "thumbnail": require("../assets/images/podcast-magen.jpg"),
            "background": require("../assets/images/podcast-hiper.png"),
            "subsection": "18",
            "section": "15",
            "type": "2",
            "available": "1",
            "code": "PC-CO-103135"
        },
        {
            "id": "100011",
            "title": "PODCAST",
            "description": "En conmemoracion del Día Mundial de la Díabetes, te damos acceso a esta información exclusiva.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "19",
            "section": "16",
            "type": "2",
            "available": "0"
        },
        {
            "id": "100012",
            "title": "BLOG",
            "description": "Te contamos toda la verdad sobre qué debes hacer si te diagnostican falla cardíaca.",
            "file_path": "/assets/images/infografia-dumi.png",
            "thumbnail": require("../assets/images/dumi.png"),
            "background": "Na",
            "subsection": "20",
            "section": "17",
            "type": "2",
            "available": "0"
        },
    ]

    return data;
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