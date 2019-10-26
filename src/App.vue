<template>
  <div id="app">
    <nav class="navbar sticky-top navbar-light shadow-sm p-3 rounded-bottom" style="background-color: #388200">
        <span class="navbar-brand h1" style="color:#FEF2E4">
            <img src="" style="background: purple" width="30" height="30"
                 class="d-inline-block align-top" alt="">
            PRUNE
        </span>
        <span class="navbar-brand h1" style="color:#FEF2E4">
            BBT
        </span>
    </nav>
    <div id="view" class="container mt-4" style="height: 70vh;">
        <router-view></router-view>
    </div>
    <nav class="navbar fixed-bottom navbar-light shadow-sm rounded-top border-top" style="background-color: #388200">
        <div class="container">
            <router-link to="suggestions">
                <a class="nav-item nav-link">
                    <img src="./assets/icons/chef-blank.png" height="30vh" width="30vw">
                </a>
            </router-link>
            <router-link to="myKitchen">
                <a class="nav-item nav-link">
                    <img src="./assets/icons/fridge-blank.png" height="30vh" width="30vw">
                </a>
            </router-link>
            <router-link to="scanFood">
                <a class="nav-item nav-link">
                    <img src="./assets/icons/camera-blank.png" height="30vh" width="30vw">
                </a>
            </router-link>
            <router-link to="favoritesRecipes">
                <a class="nav-item nav-link">
                    <img src="./assets/icons/heart-blank.png" height="30vh" width="30vw">
                </a>
            </router-link>
            <router-link to="about">
                <a class="nav-item nav-link">
                    <img src="./assets/icons/gears-blank.png" height="30vh" width="30vw">
                </a>
            </router-link>
        </div>
    </nav>
</div>
</template>

<style>
html, body, #app {
    height: 100vh;
    width: 100vw;
}

body {
    background-color: #e4dacb;
}

.router-link-active {
    border-bottom: 3px solid #F5BE41;
}

#view > div {
    overflow-x: hidden;
    overflow-y: auto;
    height: inherit;
}
</style>
