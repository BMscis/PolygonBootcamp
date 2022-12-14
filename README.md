# NFT Auction Contract Deployment

<p align="left">
<a href="https://github.com/BMscis/reach-tutorial/" target="_blank" rel="noreferrer">
<img src="https://raw.githubusercontent.com/BMscis/reach-tutorial/Nft-Websocket/src/nftea-assets/assets/article/js-reach-algo-eth.svg" width="100%" height="50px" style="width:100%;height:50px; alt="logo" /></a>
</p>

<p>
<a href="https://www.twitter.com/BMscis" target="_blank" rel="noreferrer">
<img width="203px" height="28px"
src="https://img.shields.io/twitter/follow/BMscis?logo=twitter&style=for-the-badge&color=0891b2&labelColor=1c1917" style="width:203px;height:28px;"/></a>
</p>

> Web3 contract deployment with Reach and JS

This is a repo to work with, upload and Auction NFTs smart contracts using the svelte framework and Reach.
Web 3 NFT Market Place with **Reach** **AWS** and **Svelte**.
...*This was tested on a linux platform with vs-code.

## Prerequisites
Please install or have installed the following:

<ul >
    <li >
    <a href="https://code.visualstudio.com/download" target="_blank" rel="noreferrer"><img style="width:36px;height:36px;margin-right:20px;"
     src="https://raw.githubusercontent.com/BMscis/reach-tutorial/Nft-Websocket/src/nftea-assets/assets/article/vscode.svg" 
    /><p >VsCode</p></a>
    </li>
    <li>
    <a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer"><img style="width:36px;height:36px;margin-right:20px;"
     src="https://raw.githubusercontent.com/BMscis/reach-tutorial/Nft-Websocket/src/nftea-assets/assets/article/nodejs-icon.svg" 
    /><p >NodeJs</p></a>
    </li>
</ul>

## Installation
___

### Clone the repository

```shell
sudo clone https://github.com/BMscis/reach-tutorial.git
```

### Install dependancies
Install all npm dependancies:


```shell
npm install
````

### Start dev environment
1. Run localhost

```shell
npm run dev
```

2. Open the localhost link on the browser.

3. Sign up and wait for authentication code on your email.

> Make sure your password includes digits.

> Once logged in please reload the screen if the NFT's do not apper.

4. Connect to the wallet you created above.

6. Create NFT.

> Alternatively go to [NFTea](https://bmscis.github.io/reach-tutorial/) to see the web version.

## STACK
___

<p>
    <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><span><h4>NODEJS</h4></span><span>
    <img style="width:36px;height:36px;margin-right:20px;" 
    src="https://raw.githubusercontent.com/BMscis/reach-tutorial/Nft-Websocket/src/nftea-assets/assets/article/nodejs-icon.svg" 
    />
    </span></a>
</p>

Nodejs is a JavaScript runtime environment that executes JavaScript code outside of a browser.

<p>
    <a href="https://www.npmjs.com/package/rollup" target="_blank" rel="noreferrer"><span><h4>ROLLUP</h4></span><span>
    <img style="width:36px;height:36px;margin-right:20px;"  
    src="https://raw.githubusercontent.com/BMscis/reach-tutorial/Nft-Websocket/src/nftea-assets/assets/article/rollup-icon.png" 
    />
    </span></a>
</p>

Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. It uses the standardized ES module format.

<p>
    <a href="https://www.javascript.com/" target="_blank" rel="noreferrer"><span><h4>JAVASCRIPT</h4></span><span>
    <img style="width:36px;height:36px;margin-right:20px;" 
    src="https://raw.githubusercontent.com/BMscis/reach-tutorial/Nft-Websocket/src/nftea-assets/assets/article/js-logo.svg" 
    />
    </span></a>
</p>

JavaScript is a dynamic programming language that's used for web development, in web applications, for game development, and lots more.

<p>
    <a href="https://svelte.dev/" target="_blank" rel="noreferrer"><span><h4>SVELTE</h4></span><span>
    <img style="width:36px;height:36px;margin-right:20px;"
    src="https://raw.githubusercontent.com/BMscis/reach-tutorial/Nft-Websocket/src/nftea-assets/assets/article/svelte-icon.svg" 
    />
    </span></a>
</p>

Svelte is a framework for building web applications just as React or VUE.
We used svelte because with svelte we could develop components which functions as a html, has attributes,can be reused and are singularly responsive.

##### [NFT COMPONENTS](https://github.com/BMscis/reach-tutorial/blob/Nft-Algo/src/Components/)

<p align="left">
<img src="https://raw.githubusercontent.com/BMscis/reach-tutorial/Nft-Websocket/src/nftea-assets/assets/article/nftCard.gif" width="40%"  alt="nft-component" />
</p>

With this design, we were able to define one component and reuse it for all possible nfts.
In this sense, the application is a Single Page Application. Meaning the page is separated into components that reload individually and don't require a full page reload.

##### SVELTE STORES

<p align="left">
<img src="https://raw.githubusercontent.com/BMscis/reach-tutorial/Nft-Websocket/src/nftea-assets/assets/article/storesDemo.gif" width="40%"  alt="svelte-store" />
</p>

Svelte also allows writables called stores that can be used to share data between components and can be used to trigger a signle component update when the store value changes.
Watch as the wallet value changes once we connect to the wallet.

### AUTHENTICATION AND STORAGE

<p align="left">
<img src="https://raw.githubusercontent.com/BMscis/reach-tutorial/Nft-Websocket/src/nftea-assets/assets/article/userSignUp.gif" width="60%"  alt="sign-up" />
</p>

Storage and authentication are handled by AWS Amplify.
NFTea uses [Amplify](https://aws.amazon.com/amplify/) to for backend queries.
NFTea uses [Amazon s3](https://aws.amazon.com/s3/) to store images.
NFTea uses [Amazon Authenticate](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/) to authenticate users.

<p>
    <a href="https://reach.sh/us/faq/" target="_blank" rel="noreferrer"><span><h3>REACH</h3></span><span>
    <img style="width:36px;height:36px;margin-right:20px;"
    src="https://raw.githubusercontent.com/BMscis/reach-tutorial/Nft-Websocket/src/nftea-assets/assets/article/reach-icon.svg" 
    />
    </span></a>
</p>

Reach is a blockchain development program that allows us to create and manage smart contracts on the blockchain.
Reach compiles to a javascript module that can be imported into the project just like any other javascript module.

1. Reach smart contract code is written in a javascript like syntax and can be easily tested.

2. Reach allows the programmer to write single code in .sh and it will compile it to mjs. 

3. Reach handles the backend deployment of the contract and therefore it can be used simultaneously with multiple blockchains.


### CONNECT WALLET OPTION

<p align="left">
<img src="https://raw.githubusercontent.com/BMscis/reach-tutorial/Nft-Websocket/src/nftea-assets/assets/article/connectToAlgo.gif" width="60%"  alt="connect-algo" />
</p>

### UPLOAD NFT WITH ETHERIUM

<img src="https://raw.githubusercontent.com/BMscis/reach-tutorial/Nft-Websocket/src/nftea-assets/assets/article/websocketReloadETH.gif" width="60%"  alt="connect-algo" />
</p>

### TESTNET
This app was tested on [Mumbai Polygon Testnet](https://mumbai.polygonscan.com/) and can work with any other ETH network.

Once logged in, a user can create an NFT and start the auction. Any other user can now log in and place a bid.