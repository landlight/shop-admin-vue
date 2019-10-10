
const url = process.env.VUE_APP_ADMIN_URL;

module.exports = {
  devServer: {
    proxy: {
    '^/api': {
        target: url,
        ws: true,
        changeOrigin: true
      }
    } 
  }
}