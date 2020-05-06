const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      path: 'http://localhost:5000',
      urlblog: 'http://localhost:5000/blog',
      urlimgblog: 'http://localhost:5000/static/images/blogs/',
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
      blog: null,
      e_titulo: "",
      e_cuerpo: "",
      e_cuerpopro: "",
      e_imagen: "",
      e_cuerpo: "",
      comentary: null,
      temperatura: null,
      e_imagenact: null,
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
            
            setStore({
              blog: data
            })
          })
          .catch(error => {
            console.log(error)
          })
      },
      getblog: (url, index) => {

        fetch(url, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        })
          .then(resp => resp.json())
          .then(data => {
            console.log(data[index].e_imagen)
            setStore({
              blog: data,
              e_titulo: data[index].e_titulo,
              e_cuerpo: data[index].e_cuerpo,
              e_cuerpopro: data[index].e_cuerpopro,
              e_imagen: data[index].e_imagen,
            });
          })
          .catch(error => {
            console.log(error)
          })
      },
      updateblog: (url, history) => {
        let store = getStore()
        let formData = new FormData();
        
           
        formData.append("e_titulo", store.e_titulo);
        formData.append("e_cuerpo", store.e_cuerpo);
        formData.append("e_cuerpopro", store.e_cuerpopro);
        formData.append("e_imagen", store.e_imagen);
        fetch(url, {
          method: 'PUT',
          body: formData

        })
          .then(resp => resp.json())
          .then(data => {
            
            if (data.msg) {
              setStore({
                errors: data
              })
            } else {
              setStore({
                e_titulo: "",
                e_cuerpo: "",
                e_cuerpopro: "",
                e_imagen: null,
                errors: null
              })

              getActions().getBlogs(store.urlblog);
              history.push("/blogs");
            }
          })
      },
      setBlog: (e, history) => {
        e.preventDefault();
        const store = getStore();

        let formData = new FormData();
        formData.append("e_titulo", store.e_titulo);
        formData.append("e_cuerpo", store.e_cuerpo);
        formData.append("e_cuerpopro", store.e_cuerpopro);
        formData.append("e_imagen", store.e_imagen);

        fetch(store.path + '/blog', {
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
            } else {
              setStore({
                e_titulo: "",
                e_cuerpo: "",
                e_cuerpopro: "",
                e_imagen: null,
                errors: null
              })
              getActions().getBlogs(store.urlblog);
              history.push("/blogs");
            }
          })
      },
      deleteBlog: url => {
        const store = getStore();
        fetch(store.path + "/blog" + url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(resp => resp.json())
          .then(data => {
            getActions().getBlogs(store.urlblog);
          });
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
            
            setStore({
              comentary: data
            })
          })
          .catch(error => {
            console.log(error)
          })
      },
      setCommit: (e, history) => {
        e.preventDefault();
        const store = getStore();

        fetch(store.path + '/coment', {
          method: 'POST',
          body: JSON.stringify({
            c_cuerpo: store.c_cuerpo,
            id_user: store.currentUser.user.id,
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
            } else {
              setStore({
                c_cuerpo: '',
                id_user: '',
                errors: null
              })
              getActions().getComentary(store.path + '/coment');
              history.push("/dashboard");
            }
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
      // handleFile: e => {
      //   const store= getStore();
      //   console.log(store.e_imagen)
      //   setStore({
          
      //     [e.target.name]: store.e_imagen
      //   })

      // },
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
        formData.append("email", store.email);
        formData.append("password", store.password);
        formData.append("avatar", store.avatar);

        fetch(store.path + '/register', {
          method: 'POST',
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
      updateProfile: (e, history) => {
        e.preventDefault();
        const store = getStore();

        fetch(store.path + '/update-profile/' + store.currentUser.user.id, {
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

/*JSON.stringify({
            e_titulo: store.e_titulo,
            e_cuerpo: store.e_cuerpo,
            e_cuerpopro: store.e_cuerpopro,
            e_imagen: store.e_imagen,

          }),*/

/*  getTramite: (url, index) => {
    console.log("Entreee!!!")
    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log("Entreee2!!!")
        setStore({
          tramits: data,
          tramit: data[index].tramit,
          description: data[index].description,
          task01: data[index].task01,
          task02: data[index].task02,
          task03: data[index].task03,
          task04: data[index].task04,
          task05: data[index].task05,
          task06: data[index].task06,
          task07: data[index].task07,
          task08: data[index].task08,
          task09: data[index].task09
        });
      })
      .catch(error => {
        console.log(error)
      })
  },

  setTramite: (url, index) => {
        let store = getStore()
        let newTramits = [...store.tramits]
        let newURL = url + newTramits[index].tr_id
        newTramits[index] = {
          tramit: store.tramit,
          description: store.description,
          task01: store.task01,
          task02: store.task02,
          task03: store.task03,
          task04: store.task04,
          task05: store.task05,
          task06: store.task06,
          task07: store.task07,
          task08: store.task08,
          task09: store.task09
        }
        fetch(newURL, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newTramits[index])
        })
          .then(resp => resp.json())
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.log(error)
          })
      },


  setCommit: (e, history) => {
        e.preventDefault();
        const store = getStore();

        fetch(store.path + '/coment', {
          method: 'POST',
          body: JSON.stringify({
            e_cuerpo: store.e_cuerpo,
            id_user: store.currentUser.user.id,
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
            } else {
              setStore({
                e_cuerpo: '',
                id_user: '',
                errors: null
              })
              getActions().getComentary(store.path + '/coment');
              history.push("/dashboard");
            }
          })
      },


      id_user
      */