# st3m_search

## 🚀 Quick Start

1. **Install dependencies**

   ```sh
   yarn install
   ```

2. **Build a webpack bundle**

   ```sh
   yarn run pack
   ```

2. **Start the development server**

   ```sh
   yarn start
   ```

## 🤷‍ Assumptions and 💪 Decisions 
1. Spaces do not need to be supported in search
2. Users only want max of 10 gifs based on their search
3. For a search term, a max of 5 vowels will need replacement. 

## 🧐 With more time
1. Get a TLS cert to support the upgrade-insecure-requests CSP and prevent mixed content errors caused by the giphy API. 
2. Implement postgres db with dictionary to take advantage of a btree index and binary search. Evaluate LSTM for autocorrect.
3. Implement compression on server to further reduce bundle size.
