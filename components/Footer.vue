<template>
    <footer id="footer" class="footer">
        <div class="container">
            <div class="row footer__raw">
                <div class="col-md-9">
                    <div class="copyright">
                        <p>© 2023, Auratech.</p>
                        <p>Все права защищены</p>
                    </div>
                    <!-- <YandexMaps /> -->
                    <!-- <img src="/img/map.png" alt=""> -->
                </div>
                <div class="col-md-3">
                    <div class="address">
                        <address>Астана, ул. Д. Кунаева 10. офис 2819. Бизнес центр Emerald Tower</address>
                    </div>
                    <div class="phone">
                        <img src="/img/phone.svg" alt="" />
                        <a href="tel:+77770249314">+7 (777)-024-93-14</a>
                    </div>
                    <div class="email">
                        <img src="/img/email.svg" alt="" />
                        <a href="mailto:info@lorem ipsum">info@auratech.kz</a>
                    </div>
                    <div class="back_call">
                        <NuxtLink to="/contacts">
                            <button class="btn qq-button">Наши контакты</button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


<style lang="scss">
.footer {
    // margin-top: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 56px 32px;
    gap: 20px;
    width: 100%;
    min-height: 352px;
    background: #1D1D1D;
}

.copyright {
    font-family: 'Inter' !important;
    font-style: normal;
    font-weight: 300;
    font-size: 0.875em;
    line-height: 1.25em;
    color: #FFFFFF;
}

.footer__nav_block {
    display: flex;
    justify-content: center;
}

.footer_nav li {
    margin: 16px 0;
}

.footer_nav li:first-child {
    margin: 0;
}

.footer_nav a {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: #FFFFFF;
}

.address {
    font-style: normal;
    font-weight: 400;
    font-size: 0.875em;
    line-height: 20px;
    color: #FFFFFF;
}

.phone,
.email {
    margin: 20px 0;

    a {
        margin-left: 8px;
        font-style: normal;
        font-weight: 500;
        font-size: 1em;
        line-height: 32px;
        color: #FFFFFF;
    }
}

.back_call {
    margin: 10px 0;
}

a {
    text-decoration: none !important;
}

.btn.qqb-button {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 16px;
    gap: 10px;
    background: #0A41FF;
    border-radius: 40px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: #FFFFFF;
}

.btn.qqb-button:hover {
    background-color: #0062cc;
    color: #ffffff;
}

@media (min-width: 1440px) {
    .container {
        max-width: 1440px;
    }
}


@media screen and (orientation: portrait) and (max-width: 880px) {
    .back_call {
        display: flex;
        // flex-direction: column;
        justify-content: flex-end;
    }

    .footer__raw {
        display: flex;
        flex-direction: column-reverse !important;
    }

    .footer__nav_block {
        justify-content: start;
    }
}
</style>
