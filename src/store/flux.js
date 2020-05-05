const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'http://localhost:5000',
            currentUser: null,
            isAuthenticated: false,
            email: '',
            password: '',
            nombre: '',
            apellido: '',
            rut: '',
            ciudad: '',
            pais: '',
            oldpassword: '',
            avatar: null,
            errors: null,
            success: null,
            tramits: null,
            tasks: null,
            blod: null,
            comentary: null,
            temperatura: null
        },
        actions: {
            getBlogs: url => {
                fetch(url, {
                    method: 'GET',

                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            blog: data
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getTemperatura: url => {
                fetch(url, {
                    method: 'GET',

                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            temperatura: data
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getComentary: url => {
                fetch(url, {
                    method: 'GET',

                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            comentary: data
                        })
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

            getTramits: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            tramits: data
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

            getTasks: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            tasks: data
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },

            // addTramit: data => {
            // 	const store = getStore();
            // 	fetch( url, {
            // 		method: "POST",
            // 		body: JSON.stringify(data),
            // 		headers: {
            // 			"Content-Type": "application/json"
            // 		}
            // 	})
            // 		.then(resp => resp.json())
            // 		.then(data => {
            // 			getActions().loadContactByAgenda();
            // 		});
            // },

            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },
            handleChangeFile: e => {
                setStore({
                    [e.target.name]: e.target.files[0]
                })
            },
            setProfile: e => {
                const store = getStore();
                setStore({
                    email: store.currentUser.user.email,
                    nombre: store.currentUser.user.nombre,
                    apellido: store.currentUser.user.apellido,
                    rut: store.currentUser.user.rut,
                    ciudad: store.currentUser.user.ciudad,
                    pais: store.currentUser.user.pais
                })
            },
            isAuthenticated: () => {
                if (sessionStorage.getItem('currentUser')) {
                    setStore({
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser')),
                        isAuthenticated: sessionStorage.getItem('isAuthenticated')
                    })
                }
            },
            login: (e, history) => {
                e.preventDefault();
                const store = getStore();

                fetch(store.path + '/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        email: store.email,
                        password: store.password
                    }),
                    headers: {
                        'Content-Type': 'application/json' //estoy enviando en formato json
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            setStore({
                                errors: data
                            })
                        } else {   //una vez logeado, cambio el valor del store:
                            setStore({
                                currentUser: data,
                                isAuthenticated: true,
                                email: '',
                                password: '',
                                errors: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push("/dashboard");
                        }
                    })
            },
            register: (e, history) => {
                e.preventDefault();
                const store = getStore();

                let formData = new FormData();
                formData.append("nombre", store.nombre);
                formData.append("apellido", store.apellido);
                formData.append("email", store.email);
                formData.append("password", store.password);
                formData.append("rut", store.rut);
                formData.append("ciudad", store.ciudad);
                formData.append("pais", store.pais);
                formData.append("avatar", store.avatar);

                fetch(store.path + '/register', {
                    method: 'POST',
                    body: formData
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            setStore({
                                errors: data
                            })
                        } else {   //una vez logeado, cambio el valor del store:
                            setStore({
                                currentUser: data,
                                isAuthenticated: true,
                                nombre: '',
                                apellido: '',
                                email: '',
                                password: '',
                                rut: '',
                                ciudad: '',
                                pais: '',
                                errors: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push("/dashboard");
                        }
                    })
            },
            viewProfile: (e) => {
                e.preventDefault();
                const store = getStore();

                fetch(store.path + '/view-profile/' + store.currentUser.user.id, {
                    method: 'GET',
                    body: JSON.stringify({
                        nombre: store.nombre,
                        apellido: store.apellido,
                        email: store.email,
                        password: store.password,
                        rut: store.rut,
                        ciudad: store.ciudad,
                        pais: store.pais
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            setStore({
                                errors: data
                            })
                        } else {   //una vez logeado, actualizo el store:
                            setStore({
                                currentUser: data,
                                isAuthenticated: true,
                                nombre: '',
                                apellido: '',
                                email: '',
                                password: '',
                                rut: '',
                                ciudad: '',
                                pais: '',
                                errors: null
                            })
                        }
                    })
            },
            changePassword: (e, history) => {
                e.preventDefault();
                const store = getStore();
                const { access_token } = store.currentUser;

                fetch(store.path + '/change-pass', {
                    method: 'PUT',
                    body: JSON.stringify({
                        oldpassword: store.oldpassword,
                        password: store.password
                    }),
                    headers: {
                        'Content-Type': 'application/json', //estoy enviando en formato json
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            setStore({
                                errors: data
                            })
                            if (data.status === 401) {
                                getActions().logout();
                                history.push("/login")
                            }
                        } else {   //una vez logeado, cambio el valor del store:
                            setStore({
                                success: data,
                                oldpassword: '',
                                password: '',
                                errors: null
                            })
                        }
                    })
            },
            updateProfile: (e, history) => {
                e.preventDefault();
                const store = getStore();
                const { access_token } = store.currentUser;

                let formData = new FormData();
                formData.append("nombre", store.nombre);
                formData.append("apellido", store.apellido);
                formData.append("email", store.email);
                formData.append("rut", store.rut);
                formData.append("ciudad", store.ciudad);
                formData.append("pais", store.pais);

                fetch(store.path + '/update-profile/' + store.currentUser.user.id, {
                    method: 'PUT',
                    body: formData,
                    headers : {
                        //'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        if (data.msg) {
                            setStore({
                                errors: data
                            })
                        } else {   //una vez logeado, cambio el valor del store:
                            let datos = Object.assign(store.currentUser, {user:data})
                            setStore({
                                currentUser: datos,
                                isAuthenticated: true,
                                nombre: '',
                                apellido: '',
                                email: '',
                                rut: '',
                                ciudad: '',
                                pais: '',
                                errors: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(datos))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push("/view-profile");
                        }
                    })
            },
            logout: () => {
                setStore({
                    currentUser: null,
                    isAuthenticated: false,
                    email: '',
                    password: '',
                    errors: null
                })
                sessionStorage.removeItem('currentUser');
                sessionStorage.removeItem('isAuthenticated');
            }
        }
    }
}


export default getState;