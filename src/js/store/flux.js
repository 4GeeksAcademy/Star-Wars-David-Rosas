const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			link : "https://www.swapi.tech/api/",
			people : [],
			vehicles : [],
			planets : [],
			detallePeople: [],

		},
		actions: {
			
			Peoplefetch : async()=>{
				const store = getStore();
				const responce = await fetch(`${store.link}/people`)
				if (responce.ok) {
					const data = await responce.json()
					setStore({people : data.results})
				}
			},

			PeopleDetail : async(uid)=>{
				const store = getStore();
				const responce = await fetch(`${store.link}/people/${uid}`)
				if (responce.ok) {
					const data = await responce.json()
					setStore({detallePeople : [data.result]})
				} 

			},
	},
 };
};

export default getState;
