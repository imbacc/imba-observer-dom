# imba-lazy-dom

### 安装

```
# pnpm
pnpm i imba-lazy-dom
```

### 使用

```
<div class="container">
</div>

<script>
    const domHtml = (i) => `<div class="item">
    <span>${i}</span>
    <img decoding="async" loading="lazy" src="loadingImage" data-src="realImage" />
    </div>`

    let html = ''
    for (let i = 1, j = 20; i < j; i++) {
        html += domHtml(i)
    }
    document.querySelector('.container').innerHTML = html
</script>

例:
import { lazyDom } from '../dist/index.js'

lazyDom({
    domList: document.querySelectorAll('.item'),
    threshold: 0.25
},(item) => {
    // console.log('%c [ item ]-66', 'font-size:14px; background:#41b883; color:#ffffff;', item)
    item.target.setAttribute('observer-state', 'finish')
    item.target.setAttribute("class", "blank item")
})

lazyDom({
    domList: document.querySelectorAll('img'),
    threshold: 0.25
},(item) => {
    // setTimeout(() => {
        // console.log('%c [ item ]-66', 'font-size:14px; background:#41b883; color:#ffffff;', item)
        item.target.setAttribute('observer-state', 'finish')
        item.target.setAttribute("src", item.target.getAttribute('data-src'))
        item.target.style.opacity = 1
    // }, 100)
})
```
