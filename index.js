function isTouchDevice() {
    return (('ontouchstart' in window) ||
       (navigator.maxTouchPoints > 0) ||
       (navigator.msMaxTouchPoints > 0));
}

if (isTouchDevice()) {
    var body = document.querySelector('body')
    while (body.lastChild) {
        body.lastChild.parentNode.removeChild(body.lastChild)
    }
    var m = body.appendChild(document.createElement('div'))
    m.classList.add('mobile')
    m.appendChild(document.createElement('h1')).innerText = 'Пожалуйста, откройте этот сайт с компьютера'
    m.appendChild(document.createElement('p')).innerText = 'Решить этот этап головоломки с мобильного устройства будет почти невозможно. Если возникли проблемы, напишите мне в личные сообщения: https://t.me/eleday_me'
    throw new Error();
}

var pass = document.querySelector('.password')
var pass_lbl = document.querySelector('.manage h3')
var err = document.querySelector('.manage div')
var manage = document.querySelector('.manage')
pass.addEventListener('input', () => {
    if (pass.value == '5478319056') {
        pass.classList.add('corr_password')
        pass_lbl.classList.add('corr_password')
        pass.readOnly = true
        err.classList.add('err')
        err.classList.remove('hide')
    }
    else {
        pass.classList.remove('corr_password')
    }
})

var code = document.querySelector('.code')
var manage = document.querySelector('.manage')
code.addEventListener('input', () => {
    if (Number(code.value.replace("n = 0\nwhile os.path.getsize('tank_info' + name) == 48 or os.path.getsize('tank_info' + name) == 262144:\n    if n > ", "").replace(":\n        bot.send_message(id, 'Произошла ошибка')\n        os.remove('tank_info' + name)\n        os.remove('tank_info' + name.replace('.log', ''))\n        raise\n    n += 1\n    time.sleep(1)", "")) > 240) {
        manage.classList.add('m_hide')

        var tank_info = document.querySelector(".tank_info")
        document.querySelector(".tank_info p").parentNode.removeChild(document.querySelector(".tank_info p"))
        document.querySelector(".tank_info p").parentNode.removeChild(document.querySelector(".tank_info p"))

        var st = tank_info.appendChild(document.createElement('p'))
        st.innerText = 'Статус: Заправка' 
        st.classList.add('st')
        var pm = tank_info.appendChild(document.createElement('p'))
        pm.innerText = 'Загрузка топлива: 89% (~ 367 т)'
        pm.classList.add('pm')
        var m = tank_info.appendChild(document.createElement('p'))
        m.innerText = 'Текущая масса: (~ 385 т)'
        m.classList.add('m')
        tank_info.appendChild(document.createElement('p')).innerText = 'Проверка: нет данных'
        
        setTimeout(() => {
            var refresh_btn = document.querySelector("body").appendChild(document.createElement('button'))
            console.log(refresh_btn);
            refresh_btn.classList.add('refresh_btn')
            console.log(refresh_btn);
            refresh_btn.innerText = 'Запустить проверку'
            console.log(refresh_btn);

            refresh_btn.addEventListener('click', () => {
                refresh_btn.classList.add('refresh_btn_active')
                refresh_btn.innerText = 'Проверка...'
                setTimeout(() => {
                    refresh_btn.innerText = 'Проверка завершена'
    
                    document.querySelector('.second_info p:last-child').innerText = 'Проверка: все в порядке'
                    document.querySelector('.head_info p:last-child').innerText = 'Проверка: все в порядке'
                    document.querySelector('.head_engine_info p:last-child').innerText = 'Проверка: все в порядке'
                    document.querySelector('.tank_info p:last-child').innerText = 'Проверка: все в порядке'
                    document.querySelector('.btm_engines_info p:last-child').innerText = 'Проверка: все в порядке'
    
                    document.querySelector('.second_info .st').innerText = 'Статус: Готова к работе'
                    document.querySelector('.head_engine_info .st').innerText = 'Статус: Готов к работе'
                    document.querySelector('.tank_info .st').innerText = 'Статус: Готов к работе'
                    document.querySelector('.btm_engines_info .st').innerText = 'Статус: Готовы к работе'
    
                    document.querySelector('.second_info .pm').innerText = 'Загрузка топлива: 100% (~ 104 т)'
                    document.querySelector('.second_info .m').innerText = 'Текущая масса: (~ 109 т)'
                    document.querySelector('.tank_info .pm').innerText = 'Загрузка топлива: 100% (~ 409 т)'
                    document.querySelector('.tank_info .m').innerText = 'Текущая масса: 100% (~ 431 т)'

                    var head_info = document.querySelector('.head_info')
                    head_info.appendChild(document.createElement('p')).innerText = 'Все проверки успешно пройдены! Код для Ассистента: gejkrh9'
                }, 30000)
            })
        }, 10000);
    }
})