<script>
import Loading from "../Loading.svelte";
import { connectMyAlgo } from "../../Utilities/connectALGOWallet";
import {connectETHWallet} from "../../Utilities/connectETHWallet"
import { afterUpdate, onDestroy } from "svelte";
import {displayWallet, walletSelect} from "./displayWallet"
import SelectWallet from "./SelectWallet.svelte";
import { get } from "svelte/store";
export let topBarHeight
let clicked = false;
let nftAssetOwnerColor  = "#00000099"
const checkClicked =() =>{
    displayWallet.set(!clicked)
}
const tryConnect = async () => {
    displayWallet.set(true)
    let isConnected
    walletSelect.subscribe(async value => {
        if (value) {
            switch (value) {
                case "ETH":
                isConnected = await connectETHWallet();
                isConnected ? clicked = false : clicked = true;
                isConnected ? displayWallet.set(false) : null
                isConnected ? nftAssetOwnerColor = "#75f20080" :  nftAssetOwnerColor = "#00000099" 
                    break;
                case "ALGO":
                isConnected = await connectMyAlgo();
                isConnected ? clicked = false : clicked = true;
                isConnected ? displayWallet.set(false) : null
                isConnected ? nftAssetOwnerColor = "#75f20080" :  nftAssetOwnerColor = "#00000099" 
            }
        }
    })
    
    return isConnected
}
displayWallet.subscribe(val => {
    val ? clicked = true : clicked = false
})
onDestroy(() => {
    return displayWallet
})
</script>
{#if clicked}
    <Loading margin="20px" isLarge={false}></Loading>
    {#await tryConnect()}
    {:then  result }
        <h1>{result}</h1>
    {:catch error}
        <h1>{error}</h1>
    {/await}
{/if}
<button id="nftAssetOwner-button" class="tr" style="width:24px;height:24px;" on:click={(() => {checkClicked()})}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path id="nftAssetOwner" d="M1,35.7V18.5a5.606,5.606,0,0,1,.7-2.073A3.361,3.361,0,0,1,4.68,15.1H20.573a5.18,5.18,0,0,1,1.216.146,2.207,2.207,0,0,1,1.387,1.244c.619,1.244.224,1.988-1.013,2H5.469a5.856,5.856,0,0,0-.8.037.732.732,0,0,0-.651.756.862.862,0,0,0,.533.939,2.22,2.22,0,0,0,.9.11h17.12c1.28,0,2.016.671,2.336,2.085.021.11.064.232.1.341V36.551c-.565,2.012-1.195,2.537-3.061,2.549H4.669A3.353,3.353,0,0,1,1.7,37.771,5.606,5.606,0,0,1,1,35.7Zm21.013-6.049a1.863,1.863,0,0,0-.451-1.233,1.421,1.421,0,0,0-1.085-.5,1.723,1.723,0,0,0-1.515,1.78,1.638,1.638,0,0,0,1.547,1.72,1.653,1.653,0,0,0,1.5-1.768Z" transform="translate(-1 -15.1)" fill={nftAssetOwnerColor}/>   
</button>
<SelectWallet {topBarHeight} ></SelectWallet>
<style>
    #nftAssetOwner-button{
        margin-right: 32px;
    }
    button:hover #nftAssetOwner{
        fill:var(--spectacular-orange-hover);
    }
    h1{
        display: none;
        width: 0;
        height: 0;
    }
</style>