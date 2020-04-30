const getState = ({ getStore, getAction, setStore }) => {
    return {
        store: {
            blog: null,
            comentary: null,
            temperatura : null
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
        }
    }
}

export default getState;