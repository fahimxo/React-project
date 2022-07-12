import axios from'axios'

const instance=axios.create({
    baseURL:'https://fahimproject-1-default-rtdb.firebaseio.com',
})
export default instance