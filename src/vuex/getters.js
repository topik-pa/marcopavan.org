export default {
  getMessage(state) {
    return (state.msg).toUpperCase() //Eventuali computazioni sul valore le inserisco qui
  },
  getUser: state => state.user
}