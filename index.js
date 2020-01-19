const remote = {
  name: 'remote',

  fn (instance) {
    return {
      onCreate() {
        instance.state.isLoading = false
      },
      
      onShow () {
        const { state } = instance
        if (state.isLoading) return

        const url = instance.reference.getAttribute('data-src')
        if (!url) return

        state.isLoading = true

        fetch(url)
          .then(res => res.text())
          .then(content => {
            instance.setContent(content)
          })
          .finally(() => {
            state.isLoading = false
          })
      }
    }
  }
}

export default remote
