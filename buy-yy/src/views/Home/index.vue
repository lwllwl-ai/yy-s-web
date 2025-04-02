<template>
    
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
    <!-- <Homepanel title="yy极力推荐" subtitle="十分值得">

    </Homepanel>
    <Homepanel title="yy极力推荐" subtitle="十分值得">

    </Homepanel> -->
    
</template>

<script setup>

import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
// import Homepanel from "./components/Homepanel.vue";
</script>