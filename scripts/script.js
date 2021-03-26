import http from 'k6/http';
import { sleep } from 'k6';

// export let options = {
//     stages: [
//       { duration: '30s', target: 10000 },
//       { duration: '15s', target: 1000 },
//       { duration: '5s', target: 100 },
//     ],
// };

// export default function () {
//   http.get('http://localhost:4000/products');
//   sleep(1);
// }

// import http from 'k6/http';
// import { sleep } from 'k6';

/* ---------------------STRESS TEST -------------------- */
export let options = {
  stages: [
    { duration: '2m', target: 10000 }, // below normal load
  //  { duration: '1s', target: 1000 },
   // { duration: '2s', target: 2000 }, // normal load
    //{ duration: '5s', target: 2000 },
    //{ duration: '20s', target: 3000 }, // around the breaking point
    //{ duration: '20s', target: 3000 },
    //{ duration: '10s', target: 4000 }, // beyond the breaking point
    //{ duration: '20s', target: 4000 },
    //{ duration: '50s', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function () {
  http.get('http://localhost:4000/products');
  sleep(1);
}

// export default function () {
//   const BASE_URL = 'https://test-api.k6.io'; // make sure this is not production

//   let responses = http.batch([
//     [
//       'GET',
//       `${BASE_URL}/public/crocodiles/1/`,
//       null,
//       { tags: { name: 'PublicCrocs' } },
//     ],
//     [
//       'GET',
//       `${BASE_URL}/public/crocodiles/2/`,
//       null,
//       { tags: { name: 'PublicCrocs' } },
//     ],
//     [
//       'GET',
//       `${BASE_URL}/public/crocodiles/3/`,
//       null,
//       { tags: { name: 'PublicCrocs' } },
//     ],
//     [
//       'GET',
//       `${BASE_URL}/public/crocodiles/4/`,
//       null,
//       { tags: { name: 'PublicCrocs' } },
//     ],
//   ]);

//   sleep(1);
// }

/* ****************** SPIKE LOAD ************************/

// import http from 'k6/http';
// import { sleep } from 'k6';

// export let options = {
//   stages: [
//     { duration: '10s', target: 100 }, // below normal load
//     { duration: '1m', target: 100 },
//     { duration: '10s', target: 1400 }, // spike to 1400 users
//     { duration: '3m', target: 1400 }, // stay at 1400 for 3 minutes
//     { duration: '10s', target: 100 }, // scale down. Recovery stage.
//     { duration: '3m', target: 100 },
//     { duration: '10s', target: 0 },
//   ],
// };
// export default function () {
//   const BASE_URL = 'https://test-api.k6.io'; // make sure this is not production

//   let responses = http.batch([
//     [
//       'GET',
//       `${BASE_URL}/public/crocodiles/1/`,
//       null,
//       { tags: { name: 'PublicCrocs' } },
//     ],
//     [
//       'GET',
//       `${BASE_URL}/public/crocodiles/2/`,
//       null,
//       { tags: { name: 'PublicCrocs' } },
//     ],
//     [
//       'GET',
//       `${BASE_URL}/public/crocodiles/3/`,
//       null,
//       { tags: { name: 'PublicCrocs' } },
//     ],
//     [
//       'GET',
//       `${BASE_URL}/public/crocodiles/4/`,
//       null,
//       { tags: { name: 'PublicCrocs' } },
//     ],
//   ]);

//   sleep(1);
// }
