import Swal from 'sweetalert2'

export const hanldeCopyClipboard = (text) => {
    let aux = document.createElement('input');
    aux.setAttribute('value', text);

    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Link copiado!',
        toast: true,
        showConfirmButton: false,
        timer: 1500
    });

    document.body.removeChild(aux);
}