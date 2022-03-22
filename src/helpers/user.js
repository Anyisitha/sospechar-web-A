import { API_URL } from "./global";

export const fecthLogin = async (email, password) => {
    const body = new FormData();
    body.append('email', email);
    body.append('password', password);

    const url = `${API_URL}Usuarios/login`;

    try {
        const res = await fetch(url, {
            method: 'POST',
            body: body
        });

        const data = await res.json();

        if (data.error) {
            return false
        } else {
            return data;
        }

    } catch (error) {
        console.log(error);
    }
};

export const fetchRegisterUser = async (name, lastName, card, institution, email, password, phone, country, city, professionalType, especialistType) => {
    const body = new FormData();
    body.append('name', name);
    body.append('last_name', lastName);
    body.append('card', card);
    body.append('institution', institution);
    body.append('email', email);
    body.append('password', password);
    body.append('phone', phone);
    body.append('country', country);
    body.append('city', city);
    body.append('professional_type', professionalType);
    body.append('especialist_type', especialistType);

    const url = `${API_URL}Usuarios/register`;

    try {
        const res = await fetch(url, {
            method: 'POST',
            body: body
        });

        const data = await res.json();

        if (data.error) {
            if (data.error === 'email duplicado') {
                return 'duplicado';
            } else {
                return false;
            }
        } else {
            return 'guardado';
        }


    } catch (error) {
        console.log(error);
    }
};

export const updateUserData = async (name, lastName, institution, phone) => {
    const url = `${API_URL}Usuarios/updateData`;
    const token = localStorage.getItem('X-token') || '';

    const body = new FormData();
    body.append('name', name);
    body.append('last_name', lastName);
    body.append('institution', institution);
    body.append('phone', phone);

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
            console.log(data.error);
        } else {
            return data;
        }

    } catch(error) {
        console.log(error);
    }
}

export const fecthToken = async (token) => {

    const url = `${API_URL}Usuarios/verifyToken`;

    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'X-token': token
            }
        });

        const data = await res.json();

        if (data.error) {
            return false;
        } else {
            return data;
        }


    } catch (error) {
        console.log(error);
    }
};

export const fetchSetFavoriteItem = async (itemId) => {
    const url = `${API_URL}Usuarios/setFavorite`;
    const token = localStorage.getItem('X-token') || '';

    const body = new FormData();
    body.append('item-id', itemId);

    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'X-token': token
            },
            body: body
        });

        const data = await res.json();

        if (data.error) {
            if (data.error === 'duplicado') {
                return data.error
            } else {
                return false;
            }
        } else {
            return 'guardado';
        }

    } catch (error) {
        console.log(error);
    }

}