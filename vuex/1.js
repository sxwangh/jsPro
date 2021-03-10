import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';
// module - documentCompare
import docCompare from './docCompare';

Vue.use(Vuex);

// store
export default new Vuex.Store({
  state, // 通过store.state.xxx获取状态对象， this.$store.commit('mutations中的方法名')促发状态变更
  getters,
  mutations, // commit 改变state中的状态
  actions,
  modules: {
    docCompare,
  },
});

// -------- state
// computed: {
// ...mapState(['extFileStatus']), // 使用对象展开运算符将此对象混入到外部对象中
// },
// 1.store.state.count 变化的时候, 都会重新求取计算属性
// computed: {
//   count () {
//     return store.state.count
//   }
// }
// 2.通过在根实例中注册 store 选项，该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到
// computed: {
//     count () {
//       return this.$store.state.count
//     }
//   }
// 3.mapState 辅助函数帮助我们生成计算属性
// computed: mapState({
//   // 箭头函数可使代码更简练
//   count: state => state.count,
//
//   // 传字符串参数 'count' 等同于 `state => state.count`
//   countAlias: 'count',
//
//   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
//   countPlusLocalState (state) {
//     return state.count + this.localCount
//   }
// })

// ------- getter 由state派生出的
// mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
// 1.computed: {
//   // 使用对象展开运算符将 getter 混入 computed 对象中
//     ...mapGetters([
//       'doneTodosCount',
//       'anotherGetter',
//       // ...
//     ])
//   }
// 2.
// ...mapGetters({
//   // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
//   doneCount: 'doneTodosCount'
// })

// ------ mutation 唯一改变state的commit入口  同步事务
// 1.可以在组件中使用 this.$store.commit('xxx') 提交 mutation，
// 2.mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store
// methods: {
// ...mapMutations([
//     'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
//
//     // `mapMutations` 也支持载荷：
//     'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
//   ]),
// ...mapMutations({
//     add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
//   })
// }

// ------- action 异步 store.dispatch

// ***----module
// const moduleA = {
//   state: () => ({ ... }),
//   mutations: { ... },
//   actions: { ... },
//   getters: { ... }
// }
//
// const moduleB = {
//   state: () => ({ ... }),
//   mutations: { ... },
//   actions: { ... }
// }
//
// const store = new Vuex.Store({
//   modules: {
//     a: moduleA,
//     b: moduleB
//   }
// })
//
// store.state.a // -> moduleA 的状态
// store.state.b // -> moduleB 的状态
