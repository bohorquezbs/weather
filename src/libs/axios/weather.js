import instance from "./instance"
const token = import.meta.env.VITE_API_KEY
export async function current(lat = -2.1340, lon = -79.5934) {
    try {
        const { status, data } = await instance.get(`weather?lat=${lat}&lon=${lon}&appid=${token}`)
    return{status,data}
    }
    catch (error) {
        throw error
    }
}

    function forecast() {

    }