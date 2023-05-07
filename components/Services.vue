<template>
    <section id="services" class="container services__section section">
        <div class="services__title">
            <h3 class="services__title_text">Услуги компании</h3>
            <!-- <button class="btn qq-button">Button</button> -->
        </div>

        <div class="services__desc">
            <b>Auratech</b> - это компания, которая предоставляет решения в области
            информационных технологий, включая разработку, внедрение и поддержку
            IT-инфраструктуры для бизнеса.
        </div>

        <div class="services__items">
            <div class="service__item item_left-image">
                <img class="item__image" src="img/item1.jpeg" alt="" />
                <div class="item__block">
                    <div class="item__title">Поставка оборудования</div>
                    <div class="item__desc">
                        Подберем и оперативно поставим оборудование по вашему запросу
                    </div>
                </div>
            </div>

            <div class="service__item item_right-image">
                <img class="item__image" src="img/item2.jpeg" alt="" />
                <div class="item__block">
                    <div class="item__title">It аудит</div>
                    <div class="item__desc">
                        Оценим технологий (ИТ) в организации или компании. Цель IT-аудита -
                        установить, насколько эффективно используются ИТ-ресурсы, а также
                        выявить потенциальные риски и уязвимости в системе информационной
                        безопасности
                    </div>
                </div>
            </div>

            <div class="service__item item_left-image">
                <img class="item__image" src="img/item3.jpeg" alt="" />
                <div class="item__block">
                    <div class="item__title">Настройка вашей it инфраструктуры</div>
                    <div class="item__desc">
                        Настроим и оптимизируем процессы систем и программного обеспечения в
                        компьютерной сети для обеспечения эффективной и безопасной работы
                        бизнеса.
                    </div>
                </div>
            </div>

            <div class="service__item item_right-image">
                <img class="item__image" src="img/item4.jpeg" alt="" />
                <div class="item__block">
                    <div class="item__title">решения под ключ</div>
                    <div class="item__desc">
                        Мы готовы взять на себя как весь проект «с нуля» и реализовать его
                        «под ключ», так и включиться в работу на любом этапе проектного цикла
                        для решения конкретных узкоспециализированных задач
                    </div>
                </div>
            </div>
        </div>

        <div class="services__dots"></div>
    </section>
</template>


<style lang="scss">
.services__title {
    display: flex;
    align-items: center;
    width: 58%;
    justify-content: space-between;
    font-style: normal;
    font-weight: 500;
    font-size: 2.5em;
    line-height: 2.5em;
    text-transform: uppercase;
    color: #4E4B66;

    margin-bottom: 30px;
}

.services__desc {
    font-style: normal;
    font-weight: 400;
    font-size: 1.125em;
    line-height: 1.5em;
    color: #000000;
    margin-bottom: 50px;
    width: 58%;

}

.services__dots {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(/img/dots.svg);
    background-position: 100% 11%;
    background-repeat: no-repeat;
    z-index: -1;
}

.services__items {
    display: flex;
    flex-direction: column;
    gap: 60px;
}

.item__image {
    max-height: 560px;
}

.service__item {
    display: flex;
}

.item_right-image {
    flex-direction: row-reverse;

    .item__block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px 60px 20px 0;
    }
}

.item__block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 20px 20px 80px;

}

.item__title {
    font-style: normal;
    font-weight: 500;
    font-size: 1.5em;
    line-height: 1.5em;
    text-transform: uppercase;
    color: #000000;
    text-align: left;
}

.item__desc {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin-top: 24px;
    margin-bottom: 24px;
    text-align: left;
}

@media screen and (orientation: portrait) and (max-width: 880px) {
    .service__item {
        display: flex;
        flex-direction: column;
    }

    .services__title,
    .services__desc {
        width: 100%;
    }

    .item__block {
        padding: 20px 0;
        justify-content: center;
    }

    .item__title {
        font-size: 1.1em;
    }

    .item__desc {
        font-size: 1em;
    }
}
</style>