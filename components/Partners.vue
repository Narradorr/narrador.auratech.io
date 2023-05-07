<template>
    <section id="partners" class="container partners__section section">
        <div class="partners__title">
            <h3 class="partners__title_text">НАши партнеры</h3>
        </div>

        <div class="partners__desc">
            Наше партнерство характеризуется взаимовыгодным сотрудничеством, взаимным
            уважением и доверием, что способствует достижению любых целей
        </div>

        <div class="partntes__list">
            <div class="list__item">
                <img class="partner__img" src="img/partners/partner1.png" alt="" />
            </div>
            <div class="list__item">
                <img class="partner__img" src="img/partners/partner2.png" alt="" />
            </div>
            <div class="list__item">
                <img class="partner__img" src="img/partners/partner3.png" alt="" />
            </div>
            <div class="list__item">
                <img class="partner__img" src="img/partners/partner4.png" alt="" />
            </div>
            <div class="list__item">
                <img class="partner__img" src="img/partners/partner5.png" alt="" />
            </div>
        </div>

        <div class="partners__button_block">
            <NuxtLink to="/application">
                <button class="btn qq-button">Стать клиентом</button>
            </NuxtLink>
        </div>

        <div class="partners__dots"></div>
    </section>
</template>

<style lang="scss">
.partners__title {
    font-style: normal;
    font-weight: 500;
    font-size: 2.5em;
    line-height: 2.7em;
    text-transform: uppercase;
    color: #4E4B66;
    margin-bottom: 30px;
    width: 58%;
}


.partners__desc {
    font-style: normal;
    font-weight: 400;
    font-size: 1.125em;
    line-height: 22px;
    color: #000000;
    width: 58%;
}

.partners__dots {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(/img/dots.svg);
    background-position: 72% 94%;
    background-repeat: no-repeat;
    z-index: -1;
}

.partntes__list {
    padding: 140px 0;
    display: flex;
    justify-content: space-between;
}

.partners__button_block {
    display: flex;
    justify-content: center;
}

.partner__img {
    max-width: 170px;
}

@media screen and (orientation: portrait) and (max-width: 880px) {

    .partners__title,
    .partners__desc {
        width: 100%;
    }

    .partntes__list {
        padding: 60px 0;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: space-around;
    }
}
</style>