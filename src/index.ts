import { proxy } from './vanilla.ts'
// export * from './react.ts'

const store = proxy({ count: 1 })
const root = document.querySelector('#app')!
const countBtn = root.querySelector<HTMLButtonElement>('#count')!

function update() {
  countBtn.innerText = store.count.toString()
}

countBtn.onclick = () => {
  store.count += 1
  update()
}

update()
