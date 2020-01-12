let users = [{
    id: 1,
    nombre: "Pepe"
}, {
    id: 2,
    nombre: "Pepe"
}, {
    id: 3,
    nombre: "Pepe"
}];

let salarios = [{
    idSalario: 1,
    idUser: 1,
    idTipoSalario: 3,
    monto: 1000,
}, {
    idSalario: 2,
    idUser: 2,
    idTipoSalario: 2,
    monto: 2000,
}, {
    idSalario: 3,
    idUser: 3,
    idTipoSalario: 1,
    monto: 3000,
}];

let tiposSalario = [{
    id: 1,
    nombre: "Alto"
}, {
    id: 2,
    nombre: "Medio"
}, {
    id: 3,
    nombre: "Bajo"
}];

let getUser = async(id) => {
    let user = users.find((user) => user.id === id);

    if (!user)
        throw new Error(`No existe un empleado con el ID ${id}`);
    else
        return user;
}

let getSalarioXUser = async(user) => {
    let salario = salarios.find((salario) => salario.idUser === user.id);

    if (!salario)
        throw new Error(`No existe un salario con el ID ${user.id}`);
    else
        return {
            nombre: user.nombre,
            monto: salario.monto,
            id: user.id
        };
}

let getTipoSalarioXSalario = async(salario) => {
    let tipo = tiposSalario.find((tipoSalario) => tipoSalario.id === salario.id);
    if (!tipo)
        throw new Error(`No existe un tipo con el ID ${salario.id}`);
    else
        return {
            nombre: salario.nombre,
            salario: salario.monto,
            tipo: tipo.nombre,
            id: salario.id
        };
}


let getInformacion = async(id) => {
    let user = await getUser(id);
    let salario = await getSalarioXUser(user);
    let tipoSalario = await getTipoSalarioXSalario(salario);

    return `El usuario ${tipoSalario.nombre} con ID ${tipoSalario.id} y un monto de ${tipoSalario.salario} tiene un sueldo ${tipoSalario.tipo}`;
}


//Promesas con Async y await
// getUser(2)
//     .then(user => {
//         return getSalarioXUser(user);
//     })
//     .then(salario => {
//         return getTipoSalarioXSalario(salario);
//     })
//     .then(resp => console.log(resp))
//     .catch(e => console.log(e));


//Con Async y Await
getInformacion(4)
    .then(res => console.log(res))
    .catch(err => console.log(err));