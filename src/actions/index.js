// import { easyMartBackendURL, endPoints } from '../util/ServerConnection'
// const cartUrl = `${easyMartBackendURL['url']}/${endPoints['getCart']}`;

export const signUserIn = (profile) => {
  console.log('is it here?', profile);
  return {
    type: 'SIGNIN_USER',
    profile,
  };
};

// export const getBrands =() => {
//     return  function(dispatch) {
//         console.log('fetching brands')

//         return  axios({
//             method: 'get',
//             url: `${easyMartBackendURL['url']}/${endPoints['getBrands']}`,
//         }).then(response => dispatch(
//             { type: "GET_BRANDS", brands: response.data.data.data }
//         )).catch(error => dispatch(
//             { type: "ERROR", errorMsg: "Unable to fetch brands" }
//         ))

//     }
// }
