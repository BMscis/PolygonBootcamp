<script>
import { onDestroy} from "svelte";
import Loading from "../Loading.svelte";
import MenuLabel from "../MenuLabel.svelte";
import MenuButton from "./MenuButton.svelte";
import SuccessIcon from "../SuccessIcon.svelte";
import reachLogo from "../../nftea-assets/assets/article/reach.png";
import { openNFTBox} from "../../Stores/movment";
import IconContainer from "../IconContainer.svelte";
import { topContainer} from "../../Stores/allDimension";
import ConnectedWallet from "../WALLET/ConnectedWallet.svelte";
import { checkUploadNft } from "../../Utilities/utilities";

let loading = false
let topBarWidth
let topBarHeight
let isLarge = true
let menuBlockWidth
let menuBlockHeight
let anchorBlockWidth
let anchorBlockHeight

const unsubscribe = topContainer.subscribe((value) => {
    topBarWidth = value.topBar.width
    topBarHeight = value.topBar.height
    menuBlockWidth = value.menuBlock.width
    menuBlockHeight = value.menuBlock.height
    anchorBlockWidth = value.anchorBlock.width
    anchorBlockHeight = value.anchorBlock.height
    })
const tryLoad = () => {
    if(!loading){
        loading = true
    }
}
const createNftSide = async () => {
    loading = true
    let isUser = await checkUploadNft()
    isUser ? openNFTBox.set(true) : null
    loading = false
    //openSidebar.set(true)
    //tryMountImage.set(true)
    return
}
onDestroy(()=> {unsubscribe})
</script>
<div id="top-bar" style="width:{topBarWidth}px;height:{topBarHeight}px;z-index: 111;">
    <div id="menu-block" style="width: {menuBlockWidth}px;height:{menuBlockHeight}px;">
        <IconContainer isLarge={isLarge} isSmall={!isLarge} innerComponent={MenuButton}></IconContainer>        
    </div>
    <div id="title-block" style="width: {menuBlockWidth}px;height:{menuBlockHeight}px;background-image: url({reachLogo});">
        <h1 id="title"> nft<sub>ea</sub></h1>
    </div>
    <div id="anchor-block" style="width: {anchorBlockWidth}px;height:{anchorBlockHeight}px">
        {#if loading}
        {#await createNftSide() }
        <Loading isLarge={false}></Loading>
        {:then result} 
            <SuccessIcon></SuccessIcon>
        {/await}
        {/if}
        {#if !loading}
        <button id="create-nft" on:click={()=>{tryLoad()}} >
            <MenuLabel label={"Create NFT"} dark={false}></MenuLabel>
        </button>
        {/if}
        <ConnectedWallet {topBarHeight}></ConnectedWallet>
    </div>
</div>
<style>
#anchor-block{
    background-image: linear-gradient(45deg, #2453c2b8, transparent);
}
#title-block{
    background-position-x: 90%;
    background-position-y: 30%;
    background-size: 15%;
    background-repeat: no-repeat;
    background-color: #2453c2;
    }
#top-bar{
        position: sticky;
        top:0;
    }
#create-nft{
    margin-right: 32px;
    padding:5px;
}
</style>