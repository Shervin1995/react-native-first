const fetchAPI = 'https://juniortargets.herokuapp.com/api/home';

export const data = fetch(fetchAPI).then((res) => {
    return res;
}).catch((e)=> { console.log(e); });