<template>
    <section id="about" class="container about__section section">
        <div class="about__dots"></div>
        <div class="about__block">
            <div class="about__title">
                auraTech — ведущий поставщик IT оборудования
            </div>
            <div class="about__desc">
                Мы обеспечиваем, упрощаем и ускоряем цифровую трансформацию бизнеса своих клиентов!
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.about__section {
    width: 100%;
    background-image: url('/img/qq.png');
    background-repeat: no-repeat;
    background-position-x: right;
}

.about__desc {
    margin-top: 14px;
    margin-bottom: 24px;
}

.about__section {
    padding-top: 8rem;
    padding-bottom: 4rem;
    position: relative;
}

.about__dots {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100px;
    background-image: url(/img/dots.svg);
    background-position: 0 100%;
    background-repeat: no-repeat;
    z-index: -1;
}

.about__block {
    width: 50%;
}

.about__title {
    font-style: normal;
    font-weight: 500;
    font-size: 4.7em;
    line-height: 91px;
    text-transform: uppercase;
    color: #4E4B66;
}

.about__desc {
    font-style: normal;
    font-weight: 400;
    font-size: 1.333em;
    line-height: 1.333em;
    ;
    color: #4E4B66;
}

@media screen and (orientation: portrait) and (max-width: 1025px) {
    .dg-first-section__text--2 {
        font-size: 3.875em;
    }
}

@media screen and (orientation: portrait) and (max-width: 880px) {
    .about__section {
        padding-top: 60px;
    }

    .section {
        width: 100%;
        padding: 40px 20px !important;
    }

    .about__block {
        width: 100%;
    }

    .about__title {
        font-size: 2em;
        line-height: 1.3em;
    }

    .about__desc {
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
</style>