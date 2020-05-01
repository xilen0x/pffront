const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'http://localhost:5000',
            currentUser: null,
            isAuthenticated: false,
            email: '',
            password: '',
            avatar: null,
            nombre: '',
            apellido: '',
            rut: '',
            ciudad: '',
            pais: '',
            oldpassword: '',
            errors: null,
            success: null,
        },
        actions: {
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
                                avatar: null,
                                errors: null
                            })
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push("/dashboard");
                        }
                    })
            },
            updateProfile: (e, history) => {
                e.preventDefault();
                const store = getStore();

                fetch(store.path + '/update-profile/'+ store.currentUser.user.id, {
                    method: 'PUT',
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
                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            history.push("/dashboard");
                        }
                    })
            },
            changePassword: (e, history) => {
                e.preventDefault();
                const store = getStore();
                const { access_token } = store.currentUser;

                fetch(store.path + '/update-profile', {
                    method: 'POST',
                    body: JSON.stringify({
                        oldpassword: store.oldpassword,
                        password: store.password
                    }),
                    headers: {
                        'Content-Type': 'application/json', //estoy enviando en formato json
                        'Authorization': 'Bearer ' + access_token
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