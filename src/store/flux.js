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
      tramites: null,        //Aqui estoy haciendo GET a toda la informacion en tabla tramites
      tarea: null,          //Aqui estoy haciendo GET a toda la informacion en tabla tarea
      titulo: '',           //Aqui estoy haciendo POST a la variable de nombre "titulo" de la tabla tasks
      infointro: '',        //Aqui estoy haciendo POST a la variable de nombre "infointro" de la tabla tasks
      infocorps: '',        //Aqui estoy haciendo POST a la variable de nombre "infocorps" de la tabla tasks
      infofoot: '',         //Aqui estoy haciendo POST a la variable de nombre "infofoot" de la tabla tasks
      task: '',
      status: '',
      // RETROCESO:  
      // tramit: '',           //Aqui estoy haciendo POST a la variable de nombre "tramit" de la tabla tramits
      // description: '',      //Aqui estoy haciendo POST a la variable de nombre "description" de la tabla tramits
      // task01: '',           //Aqui estoy haciendo POST a la variable de nombre "task01" de la tabla tramits
      // statust01: '',        //Aqui estoy haciendo POST a la variable de nombre "statust01" de la tabla tramits para cambio de estado
      // task02: '',           //Aqui estoy haciendo POST a la variable de nombre "task02" de la tabla tramits
      // statust02: '',        //Aqui estoy haciendo POST a la variable de nombre "statust02" de la tabla tramits para cambio de estado
      // task03: '',           //Aqui estoy haciendo POST a la variable de nombre "task03" de la tabla tramits
      // statust03: '',        //Aqui estoy haciendo POST a la variable de nombre "statust03" de la tabla tramits para cambio de estado
      // task04: '',           //Aqui estoy haciendo POST a la variable de nombre "task04" de la tabla tramits
      // statust04: '',        //Aqui estoy haciendo POST a la variable de nombre "statust04" de la tabla tramits para cambio de estado
      // task05: '',           //Aqui estoy haciendo POST a la variable de nombre "task05" de la tabla tramits
      // statust05: '',        //Aqui estoy haciendo POST a la variable de nombre "statust05" de la tabla tramits para cambio de estado
      // task06: '',           //Aqui estoy haciendo POST a la variable de nombre "task06" de la tabla tramits
      // statust06: '',        //Aqui estoy haciendo POST a la variable de nombre "statust06" de la tabla tramits para cambio de estado
      // task07: '',           //Aqui estoy haciendo POST a la variable de nombre "task07" de la tabla tramits
      // statust07: '',        //Aqui estoy haciendo POST a la variable de nombre "statust07" de la tabla tramits para cambio de estado
      // task08: '',           //Aqui estoy haciendo POST a la variable de nombre "task08" de la tabla tramits
      // statust08: '',        //Aqui estoy haciendo POST a la variable de nombre "statust08" de la tabla tramits para cambio de estado
      // task09: '',           //Aqui estoy haciendo POST a la variable de nombre "task09" de la tabla tramits
      // statust09: '',        //Aqui estoy haciendo POST a la variable de nombre "statust09" de la tabla tramits para cambio de estado
      tramiteactual: null,
      currentTask: null,
      tareactual: null,
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
      

      // AQUI COMIENZAN LOS METODOS DE TRAMITES

      getTramites: url => {
        fetch(url, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        })
          .then(resp => resp.json())
          .then(data => {
            setStore({
              tramites: data,
            });
          })
          .catch(error => {
            console.log(error)
          })
      },

      getActualTramites: (url, index) => {
        fetch(url, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        })
          .then(resp => resp.json())
          .then(data => {
            setStore({
              tramites: data,
              titulo: data[index].titulo,
              infointro: data[index].infointro,
              infocorps: data[index].infocorps,
              infofoot: data[index].infofoot
            });
          })
          .catch(error => {
            console.log(error)
          })
      },

      addTramit: (e, history) => {
        e.preventDefault();
        const store = getStore();

        fetch(store.path + '/tramites', {
          method: 'POST',
          body: JSON.stringify({
            titulo: store.titulo,
            infointro: store.infointro,
            infocorps: store.infocorps,
            infofoot: store.infofoot
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
                titulo: '',
                infointro: '',
                infocorps: '',
                infofoot: '',
                errors: null
              })
              getActions().getTramites(store.path + '/tramites');
              history.push("/dashboard");
            }
          })
      },


      setTramite: (url, index) => {
        let store = getStore()
        let newTramits = [...store.tramites]
        let newURL = url + newTramits[index].id
        newTramits[index] = {
          titulo: store.titulo,
          infointro: store.infointro,
          infocorps: store.infocorps,
          infofoot: store.infofoot
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


      deleteTramite: (url, history) => {
        const store = getStore();
        fetch(store.path + "/tramites" + url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(resp => resp.json())
          .then(data => {
            getActions().getTramites(store.path + '/tramites');
          });
      },


      // AQUI COMIENZAN LOS METODOS DE TAREAS      

      // getTareas: url => {
      //   fetch(url, {
      //     method: 'GET',
      //     headers: {
      //       'content-type': 'application/json'
      //     }
      //   })
      //     .then(resp => resp.json())
      //     .then(data => {
      //       setStore({
      //         tareas: data,
      //       });
      //     })
      //     .catch(error => {
      //       console.log(error)
      //     })
      // },


      addTask: (e, history) => {
        e.preventDefault();
        const store = getStore();

        fetch(`${store.path}/tareaintotramite/${store.currentTask}`, {
          method: 'POST',
          body: JSON.stringify({
            task: store.task,
            status: store.status
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
                task: '',
                tramiteactual: '',
                errors: null
              })
              getActions().getTramites(store.path + '/tareaintotramite');
              history.push("/dashboard/adminuptask");
            }
          })
      },


      getActualTareas: (url, index) => {
        fetch(url, {
          method: 'GET',
          headers: {
            'content-type': 'application/json'
          }
        })
          .then(resp => resp.json())
          .then(data => {
            setStore({
              tramites: data,
              task: data[index].task
            });
          })
          .catch(error => {
            console.log(error)
          })
      },


      setTarea: (url, index) => {
        let store = getStore()
        let newTask = [...store.tarea]
        let newURL = url + newTask[index].id
        newTask[index] = {
          task: store.task
        }
        fetch(newURL, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newTask[index])
        })
          .then(resp => resp.json())
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.log(error)
          })
      },


      deleteTareas: (url, history) => {
        const store = getStore();
        console.log(url)
        fetch(store.path + "/tareas" + url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(resp => resp.json())
          .then(data => {
            getActions().getTareas(store.path + '/tareas');
          });
      },


      // AQUI COMIENZAN LOS METODOS DE TAREATRAMITE

      // getTareaTramite: url => {
      //   fetch(url, {
      //     method: 'GET',
      //     headers: {
      //       'content-type': 'application/json'
      //     }
      //   })
      //     .then(resp => resp.json())
      //     .then(data => {
      //       setStore({
      //         tareas: data,
      //       });
      //     })
      //     .catch(error => {
      //       console.log(error)
      //     })
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
          headers: {
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
              let datos = Object.assign(store.currentUser, { user: data })
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
    },
      

      setCurrentTramite: (index) => {
      setStore({
        tramiteactual: index,
      })
    },

    setCurrentTareas: (index) => {
      setStore({
        tareactual: index,
      })
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




// addTask: (e, history) => {
      //   e.preventDefault();
      //   const store = getStore();

      //   fetch(store.path + '/tareas', {
      //     method: 'POST',
      //     body: JSON.stringify({
      //       titulo: store.titulo,
      //       infointro: store.infointro,
      //       infocorps: store.infocorps,
      //       infofoot: store.infofoot
      //     }),
      //     headers: {
      //       'Content-Type': 'application/json' //estoy enviando en formato json
      //     }
      //   })
      //     .then(resp => resp.json())
      //     .then(data => {
      //       console.log(data)
      //       if (data.msg) {
      //         setStore({
      //           errors: data
      //         })
      //       } else {   //una vez logeado, cambio el valor del store:
      //         setStore({
      //           titulo: '',
      //           infointro: '',
      //           infocorps: '',
      //           infofoot: '',
      //           errors: null
      //         })
      //         getActions().getTask(store.path + '/tareas');
      //         history.push("/dashboard");
      //       }
      //     })
      // },


      // 


      // addTramit: (e, history) => {
      //   e.preventDefault();
      //   const store = getStore();

      //   fetch(store.path + '/tareas', {
      //     method: 'POST',
      //     body: JSON.stringify({
      //       tramit: store.tramit,
      //       description: store.description
      //     }),
      //     headers: {
      //       'Content-Type': 'application/json' //estoy enviando en formato json
      //     }
      //   })
      //     .then(resp => resp.json())
      //     .then(data => {
      //       console.log(data)
      //       if (data.msg) {
      //         setStore({
      //           errors: data
      //         })
      //       } else {   //una vez logeado, cambio el valor del store:
      //         setStore({
      //           tramit: '',
      //           description: '',
      //           errors: null
      //         })
      //         history.push("/dashboard");
      //       }
      //     })
      // },

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
