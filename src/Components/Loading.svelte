<script>
  export let dark = true
  export let isLarge = true
  export let margin = "auto"
</script>
<div class="lds-ring" class:small={!isLarge} style="margin: {margin};position:{isLarge?"absolute":"relative"};top: 0;right: 0;left: 0;bottom: 0;">
    <div style="border: 8px solid {dark?"transparent":"#fff"};border-color: {dark?"transparent":"#fff"} transparent transparent transparent;"></div>
    <div style="border: 8px solid {dark?"transparent":"#fff"};border-color: {dark?"transparent":"#fff"} transparent transparent transparent;"></div>
    <div style="border: 8px solid {dark?"transparent":"#fff"};border-color: {dark?"transparent":"#fff"} transparent transparent transparent;"></div>
    <div style="border: 8px solid {dark?"#0000007a":"#fff"};border-color: var(--focus) transparent transparent;"></div>
</div>
<style>
    .lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring.small{
    width: 24px;
    height: 24px;
}
.lds-ring.small div{
    width: 19.2px;
    height: 19.2px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>