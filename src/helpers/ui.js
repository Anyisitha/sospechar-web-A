import { API_URL } from "./global";

export const fetchInputDataTypes = async (dataToGet) => { //getProfessionalTypes || getEspecialistTypes || getCountries
    try {
        const res = await fetch(`${API_URL}UI/${dataToGet}`);
        const data = await res.json();

        return data;
    } catch(error) {
        console.log(error);
    }
};

export const fetchCitiesByCountry = async (countryId) => { 
    try {
        const res = await fetch(`${API_URL}UI/getCities?pais_id=${countryId}`);
        const data = await res.json();

        return data;
    } catch(error) {
        console.log(error);
    }
};