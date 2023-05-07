<template>
    <header class="header">
        <nav class="navbar navbar-expand-lg items-center mx-4">
            <NuxtLink to="/">
                <div class="navbar-brand"><img src="/img/logo.svg" alt="" /></div>
            </NuxtLink>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="/#advantages">Наши преимущества</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#services">Услуги</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#partners">Партнеры</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contacts">Контакты</a>
                    </li>
                    <li class="nav-item" v-if="!isApp">
                        <NuxtLink to="/application">
                            <button type="button" class="btn btn-primary qq-button">
                                Оставить заявку
                            </button>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'Headerr',
    computed: {
        isApp() {
            return this.$route.name === 'application'
        }
    }
})
</script>

<style lang="scss">
.navbar-brand {
    margin-bottom: 1em;
}

.navbar {
    height: 125px;
    background-color: #ffffff;
}

.nav-item {
    display: flex;
    align-items: center;
}

.nav-item .nav-link {
    text-transform: uppercase;
    font-style: normal;
    font-weight: 500;
    font-size: 1em;
    text-align: right;
    color: #4E4B66;
    padding-left: 20px !important;
    padding-right: 20px !important;
}
</style>