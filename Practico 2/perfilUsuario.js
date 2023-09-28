let perfil = 'ADMINISTRADOR';

switch(perfil){

    case ' ':
        console.log('Debe especificar el perfil del usuario');
    break;

    case 'Administrador':
        console.log('Usted tiene todos los privilegios de uso del sistema1');
    break;

    case 'administrador':
        console.log('Usted tiene todos los privilegios de uso del sistema2');
    break;

    case 'ADMINISTRADOR':
        console.log('Usted tiene todos los privilegios de uso del sistema3');
    break;

    case 'Asistente':
        console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos1');
    break;

    case 'asistente':
        console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos2');
    break;

    case 'ASISTENTE':
        console.log('Usted sólo tiene permisos de registrar, modificar y consultar datos3');
    break;

    case 'Invitado':
        console.log('Usted sólo tiene permisos de consultar datos1');
    break;

    case 'invitado':
        console.log('Usted sólo tiene permisos de consultar datos2');
    break;

    case 'INVITADO':
        console.log('Usted sólo tiene permisos de consultar datos3');
    break;

    default:
        console.log('Debe especificar un perfil válido');
    break;

}