export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, { menu }) {
    state.list.push(menu)
  },
  remove(state, { menu }) {
    state.list.splice(state.list.indexOf(menu), 1)
  },
  addItems(state, { menu, items }) {
    const item = state.list.find((item) => item.id === menu.id)
    if (!item) state.list.push({ ...menu, items })
    else item.items = [...items]
  },
}
