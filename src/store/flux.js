const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            path: 'http://localhost:5000',
            currentUser: null,
            username: '',
            password:'',
            errors: null,
            showModal:false
        },
        actions:{
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },
            login: (e, history) => {
                e.preventDefault();
                const store = getStore();
                
                fetch(store.path + '/login', {
                    method: 'POST',
                    body: JSON.stringify({
                        username: store.username,
                        password: store.password
                    }),
                    headers:{
                        'Content-Type':'application/json' //estoy enviando en formato json
                    }
                })
                .then(resp => resp.json())
                 .then(data => {
                    console.log(data)
                    if(data.msg){
                        setStore({
                            errors: data
                        })
                    }else{
                        setStore({
                            currentUser:data,
                            username:'',
                            password:'',
                            errors: null
                        })
                        history.push("/dashboard");
                    }
                })
                const handleCloseModal = () => {
                    setStore({
                        showModal:false
                    })
                }
            }
        }
    }
}

export default getState;