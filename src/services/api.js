export async function getUsers(){
    const res = await fetch("https://randomuser.me/api/?results=10");
    const data = await res.json();
    return data;
}


export async function loginAccount(login){
    try{
        const res = await fetch("http://localhost:8080/api/auth/login",{
            method:"POST",
            body:JSON.stringify(login),
            headers:{
                "content-Type":"application/json"
            }
        });
        const data = await res.json();
        return data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function Coffees(){
    try{
        const res = await fetch("http://localhost:8080/api/coffee/coffees",{
            method:"GET",
        });
        const data = await res.json();
        return data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function crearCoffee(coffee){
    try{
        const token = localStorage.getItem('token');
        const res = await fetch("http://localhost:8080/api/coffee/coffees",{
            method:"POST",
            body:coffee,
            headers:{
                'authorization':'Bearer ' + token,
            },
        });
        const data = await res.json();
        return data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function buscarCoffee(nombre){
    try{
        const res = await fetch(`http://localhost:8080/api/coffee/coffee/buscar?name=${nombre}`,{
            method:"GET",
        });
        const data = await res.json();
        return data;
    }catch(error){
        console.log(error);
        return null;
    }
}



export async function EditarCoffee(coffee){
    try{
        const token = localStorage.getItem('token');
        const res = await fetch("http://localhost:8080/api/coffee/coffee/update",{
            method:"PUT",
            body:JSON.stringify(coffee),
            headers:{
                'Content-Type': 'application/json',
                'authorization':'Bearer ' + token,
            },
        });
        const data = await res.json();
        return data;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function BorrarCoffee(coffeeId){
    try{
        const token = localStorage.getItem('token');
        const res = await fetch(`http://localhost:8080/api/coffee/coffee/delete?id_coffee=${coffeeId}`,{
            method:"DELETE",
            headers:{
                'authorization':'Bearer ' + token,
            },
        });
        return res;
    }catch(error){
        console.log(error);
        return null;
    }
}

export async function crearTestimonios(testimonio){
    try{
        const token = localStorage.getItem('token');
        console.log("testimonio api: ", testimonio)
        const res = await fetch("http://localhost:8080/api/testimonials/ingresar",{
            method:"POST",
            body:JSON.stringify(testimonio),
            headers:{
                'Content-Type': 'application/json',
                'authorization':'Bearer ' + token,
            },
        });
        console.log("respuesta: ", res)
        const data = await res.json();
        return data;
    }catch(error){
        console.log(error);
        return null;
    }
}
export async function listarTestimonios(idCoffee){
    try {
        const token = localStorage.getItem('token');
        const res = await fetch(`http://localhost:8080/api/testimonials/buscar?Id_coffee=${idCoffee}`, {
            method:"GET",
            headers: {
                'authorization':'Bearer '+ token,
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return null;
    }
}

export async function RegistroUser(datos){
    try {
        const res = await fetch("http://localhost:8080/api/auth/create", {
            method:"POST",
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return res;
    } catch (error){
        return null;
    }
}


export async function ListarUsuarios(){
    try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:8080/api/auth/buscar", {
            method:"GET",
            headers:{
                "authorization": "Bearer " + token,
            },
        });
        const data = await res.json();
        return data;
    } catch (error){
        return null;
    }
}

export async function Bloquear(usuario){
    try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:8080/api/auth/bloquear", {
            method:"PUT",
            body: JSON.stringify(usuario),
            headers: {
                "authorization": "Bearer " + token,
                'Content-Type': 'application/json',
            }
        });
        return res;
    } catch (error) {
        return null;
    }
}