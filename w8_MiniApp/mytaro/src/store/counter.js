import { observable } from 'mobx'

const initData = {
  counter: 0,
  counterStore() {
    this.counter++
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  }
}

const counterStore = observable(initData)

export default counterStore

// counterStore.counter += 10;