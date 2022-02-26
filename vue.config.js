const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'Muna',
    themeColor: '#e40085',
    manifestOptions: {
      background_color: '#00ada8'
    }
  }
})
