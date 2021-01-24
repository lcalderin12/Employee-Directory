import axios from "axios";

// const BASEURL = "https://randomuser.me/api/?results=50";
// // const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function() {
//     // return axios.get(BASEURL + query + APIKEY);
//     return axios.get(BASEURL);
//   }
// };


// // const BASEURL = "https://randomuser.me/api/?results=200&nat=us";
// const BASEURL = "https://randomuser.me/api/?results=50";
// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function() {
//        return axios.get(BASEURL);
//   }
// };

const BASEURL = "https://randomuser.me/api/?results=200&nat=us";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
       return axios.get(BASEURL);
  }
};