import type { options_DTYPE } from './types/global'

// 增加兼容 pnpm install intersection-observer
export const lazyDom = (options?: options_DTYPE, callBack?: Function) => {
  //找到所有的item标签，放到数组
  const domList = options?.domList || document.querySelectorAll('img')

  // boundingClientRect  返回包含目标元素的边界信息，返回结果与element.getBoundingClientRect() 相同
  // intersectionRatio  返回目标元素出现在可视区的比例
  // intersectionRect  用来描述root和目标元素的相交区域
  // isIntersecting  返回一个布尔值，下列两种操作均会触发callback：1. 如果目标元素出现在root可视区，返回true。2. 如果从root可视区消失，返回false
  // rootBounds  用来描述交叉区域观察者(intersection observer)中的根.
  // target  目标元素：与根出现相交区域改变的元素 (Element)
  // time  返回一个记录从 IntersectionObserver 的时间原点到交叉被触发的时间的时间戳
  const obs = new IntersectionObserver(
    (entries) => {
        entries.forEach((item) => {
          if (item.isIntersecting) {
            Promise.resolve(callBack?.(item)).then(() => obs.unobserve(item.target))
          }
        })
    },
    {
      root: options?.root || null,
      rootMargin: options?.rootMargin || '0px',
      threshold: options?.threshold || 1
    }
  )

  // observe遍历监听所有节点
  domList.forEach((dom) => obs.observe(dom))
}
