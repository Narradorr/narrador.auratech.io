<template>
    <section id="advantages" class="container advantages__section section">
        <div class="advantages__title">
            <h3 class="advantages__title_text">
                МЫ ПОСТОЯННО ОПТИМИЗИРУЕМ БИЗНЕС ПРОЦЕССЫ, ЧТО ПОЗВОЛЯЕТ НАМ ОСТАВАТЬСЯ ЛУЧШИМИ НА РЫНКЕ  it услуг
            </h3>
        </div>

        <div class="advantages__chooseus">
            <div class="chooseus_text">Почему выбирают нас</div>
        </div>

        <div class="advantages__blocks">
            <div class="block1 block">
                <div class="card fake"></div>

                <div class="card work-everywhere">
                    <div class="card__img">
                        <img src="img/advantages/work_everywhere.svg" alt="" />
                    </div>
                    <div class="card__title">Работаем везде</div>
                    <div class="card__desc">Работаем на всей территории Казахстана</div>
                </div>
            </div>

            <div class="block2 block">
                <div class="card individual">
                    <div class="card__img">
                        <img src="img/advantages/individual.svg" alt="" />
                    </div>
                    <div class="card__title">Индивидуально</div>
                    <div class="card__desc">
                        Качественно и быстро подберем актуальное оборудование для любой задачи
                    </div>
                </div>

                <div class="card fast">
                    <div class="card__img">
                        <img src="img/advantages/fast.svg" alt="" />
                    </div>
                    <div class="card__title">Оперативно</div>
                    <div class="card__desc">
                        Работаем в формате “Сегодня заказали- завтра получили”
                    </div>
                </div>
            </div>

            <div class="block3 block">
                <div class="card cheep">
                    <div class="card__img">
                        <img src="img/advantages/cheep.svg" alt="" />
                    </div>
                    <div class="card__title">Выгодно</div>
                    <div class="card__desc">
                        Сотрудничаем со всеми ведущими дистрибуторами и вендорами
                    </div>
                </div>

                <div class="card reliably">
                    <div class="card__img">
                        <img src="img/advantages/reliably.svg" alt="" />
                    </div>
                    <div class="card__title">Надежно</div>
                    <div class="card__desc">Только новое брендовое оборудование</div>
                </div>
            </div>
        </div>

        <div class="advantages__dots"></div>
        <div class="advantages__plane"></div>
        <div class="advantages__circle"></div>
    </section>
</template>



<style lang="scss">
.advantages__section {
    position: relative;
    overflow: hidden;
}

.advantages__title {
    width: 85%;
    margin-bottom: 30px;
}

.advantages__title_text {
    font-style: normal;
    font-weight: 500;
    font-size: 2em;
    line-height: 39px;
    text-transform: uppercase;
    color: #4E4B66;
}

.advantages__dots {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100px;
    background-image: url(/img/dots.svg);
    background-position: 0 20%;
    background-repeat: no-repeat;
    z-index: -1;
}

.advantages__circle {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(/img/circle.png);
    background-position: 90% 86%;
    background-repeat: no-repeat;
    z-index: -1;
}

.advantages__plane {
    position: absolute;
    width: 1047px;
    height: 619px;
    left: 12%;
    top: 25%;
    z-index: -1;
    background: #F9F9F9;
    box-shadow: 8px 10px 50px rgba(227, 140, 254, 0.15);
    border-radius: 150px 0px 0px 0px;
}

.advantages__chooseus {
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    background-image: url(/img/advantages_piece.png);
    background-repeat: no-repeat;
    position: absolute;
    top: 36%;
    left: 40px;
    padding-left: 100px;
    height: 180px;
    width: 35%;
    display: flex;
    align-items: center;

    .chooseus_text {
        font-style: normal;
        font-weight: 500;
        font-size: 2.5em;
        line-height: 2, 7em;
        text-transform: uppercase;
        color: #4E4B66;
    }
}

.advantages__blocks {
    display: flex;
    gap: 34px;
    justify-content: center;
}

.block {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.block1 {
    margin-top: 100px;
}

.block2 {
    margin-top: 50px;
}

.block .card {
    width: 308px;
    height: 379px;
    background: #FFFFFF;
    border: 1px solid #F2F2F2;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.05);
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.33);
    border-radius: 40px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    align-items: center;
}

.card__title {
    font-style: normal;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 29px;
    text-align: center;
    color: #000000;

    margin-top: 30px;
    margin-bottom: 40px;
}

.card__desc {
    font-style: normal;
    font-weight: 400;
    font-size: 1em;
    line-height: 140%;
    text-align: center;
    color: #757575;
}

.card.fake {
    opacity: 0;
}

@media screen and (orientation: portrait) and (max-width: 880px) {
    .advantages__chooseus {
        display: none;
    }

    .advantages__blocks {
        display: flex;
        flex-direction: column;
    }

    .card.fake {
        display: none;
    }

    .block1,
    .block2 {
        margin-top: 0;
        // margin-bottom: 20px;
    }

    .advantages__title_text {
        font-size: 1.4em;
    }

    .block .card {
        width: 100%;
    }

    .advantages__plane {
        display: none;
    }
}
</style>