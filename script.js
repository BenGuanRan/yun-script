// ==UserScript==
// @name         云班课一键互评
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  云班课一键互评脚本，详见描述页面!
// @author       You
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mosoteach.cn
// @match        https://www.mosoteach.cn/*
// @grant        none
// ==/UserScript==

(function () {
    if (window.location.host !== 'www.mosoteach.cn') return
    async function sleep(time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, time)
        })
    }
    function createButton(text) {
        const button = document.createElement("button");
        button.innerText = text
        button.style.position = 'fixed'
        button.style.height = '50px'
        button.style.backgroundColor = 'red'
        button.style.top = '20px'
        button.style.right = '20px'
        button.style.color = '#ffffff'
        button.style.fontSize = '30px'
        button.style.textAlign = 'center'
        button.style.lineHeight = '50px'
        return button
    }
    function createMask() {
        const mask = document.createElement("div");
        mask.style.position = 'fixed'
        mask.style.width = '100%'
        mask.style.height = '100%'
        mask.style.backgroundColor = 'rgba(0,0,0,.3)'
        mask.style.top = '0'
        mask.innerText = '脚本运行中，请稍后......'
        mask.style.color = '#ffffff'
        mask.style.fontSize = '30px'
        mask.style.textAlign = 'center'
        mask.style.lineHeight = '800px'
        return mask
    }

    ; (() => {
        document.querySelectorAll('.appraise-button').forEach(btn => btn.click())
        const button = createButton('点击一键互评')
        document.body.appendChild(button)
        button.onclick = async () => {
            const mask = createMask()
            document.body.appendChild(mask)
            await sleep(5000)
            document.body.removeChild(mask)
            document.querySelectorAll('.shortcut-score').forEach(p => p.firstChild.click())
            document.querySelectorAll('.button-big').forEach(p => p.click())
        }

    })()
})();