const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      tramits: null,
      tasks: null,
    },
    actions: {

      getTramits: url => {
        fetch( url, {
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
        fetch( url, {
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
    }
  }
}

export default getState;