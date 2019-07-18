# st3m_search

## 🚀 Quick Start

1. **Install dependencies**

   ```sh
   yarn install
   ```

2. **Build a webpack bundle**

    dev
   ```sh
   yarn run build
   ```
    prod
   ```sh
   yarn run pack
   ```

2. **Start the development server**

   ```sh
   yarn start
   ```

## 🤷‍ Assumptions and 💪 Decisions 
1. There will be mobile users around the world. Autocorrect should be performed on a server. 
    a. Running binary search on a dictionary is too intensive for mobile devices
    b. There's no algo yet that can compress a unix dictionary enough to send quickly over a 3g network.  
        i. Webpack bundle is large as well, but have to send it. SERVER SIDE RENDERING??
2. We'll have sufficient memory on the server to run fs.readFile on 3mb file. Creating a read stream is not necessary.

## 🧐 What's inside?