const cache = new Map()

const remote = {
  name: 'remote',
  defaultValue: {},

  fn(instance) {
    const {state} = instance
    const {remote} = instance.props

    return {
      onCreate() {
        state.isLoading = false
        state.isLoaded = false
      },

      onTrigger() {
        if (state.isLoaded || state.isLoading) return

        const {url, useCache} = remote
        if (!url) return

        const {content} = cache.get(url) || {}
        if (content && useCache) {
          instance.setContent(content)
          return
        }

        state.isLoading = true

        fetch(url)
          .then(response => response.text())
          .then(content => {
            instance.setContent(content)
            state.isLoaded = true
            if (useCache) {
              cache.set(url, {content})
            }
          })
          .catch(() => {
            state.isLoaded = false
          })
          .finally(() => {
            state.isLoading = false
          })
      }
    }
  }
}

export default remote
