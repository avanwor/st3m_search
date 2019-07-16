# st3m_search

## 🚀 Quick Start

1. **Install dependencies**

   ```sh
   yarn install
   ```

2. **Build a webpack bundle**

   ```sh
   yarn run build
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

## 🧐 What's inside?