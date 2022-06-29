<template>
    <div class="sy-app__footer">
        <div class="qrcode"></div>
        <p class="des">帮助10W人入门并进阶前端</p>
    </div>
</template>

<script lang="ts">
export default {
    
}
</script>

<style>
.sy-app__footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #fff;
    padding: 20px 0;
}

.sy-app__footer .qrcode {
    display: inline-block;
    flex-shrink: 0;
    width: 7.5rem;
    height: 7.5rem;
    background-image: url("https://i.loli.net/2021/10/24/5xVjvMeidaT2UBn.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
}

.sy-app__footer .des {
    padding: 10px;
    color: #555;
}
</style>