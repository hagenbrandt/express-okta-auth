import router from '../item.router'

describe('item router', () => {
  it('has crud routes', () => {
    const routes = [
      { path: '/', method: 'get' },
      { path: '/:id', method: 'get' },
      { path: '/:id', method: 'delete' },
      { path: '/:id', method: 'put' },
      { path: '/', method: 'post' },
    ]

    routes.forEach((route) => {
      const match = router.stack.find(
        (s) => s.route.path === route.path && s.route.methods
      )
      expect(match).toBeTruthy()
    })
  })
})
