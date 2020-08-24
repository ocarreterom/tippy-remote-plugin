const cache = new Map()

const plugin = {
  name: 'remote',
  defaultValue: false,

  fn (instance) {
    const { state } = instance

    return {
      onCreate () {
        state.isLoading = false
        state.isLoaded = false
      },

      onTrigger () {
        if (state.isLoaded || state.isLoading) return

        const src = instance.props.remote
        if (!src) return

        const { content } = cache.get(src) || {}
        if (content) {
          instance.setContent(content)
          return
        }

        state.isLoading = true

        fetch(src, { credentials: 'same-origin' })
          .then(response => response.text())
          .then(content => {
            instance.setContent(content)
            state.isLoaded = true
            cache.set(src, { content })
          })
          .catch(() => {
            state.isLoaded = false
          })
          .finally(() => {
            state.isLoading = false
          })
      },

      onDestroy () {
        cache.delete(instance.props.remote)
      }
    }
  }
}

export default plugin
