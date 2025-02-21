import instance from "./instance"
const token = import.meta.env.VITE_API_KEY
export async function current(lat = -2.1340, lon = -79.5934) {
    try {
        const { status, data } = await instance.get(`weather?lat=${lat}&lon=${lon}&appid=${token}`)
        return { status, data }
    }
    catch (error) {
        throw error
    }
}

export async function forecast(lat = -2.1340, lon = -79.5934) {
    try {
        const { status, data } = await instance.get(`forecast?lat=${lat}&lon=${lon}&appid=${token}`)
        const rs = []
        const current = new Date()
        function exist(item) {
            return rs.some((element) => {
                const date = new Date(element.dt * 1000)
                const current = new Date(item.dt * 1000)
                if (current.getDate() === date.getDate()) {
                    return true

                }
            })
        }
        data.list.forEach(item => {
            const date = new Date(item.dt * 1000)
            if (
                ((current.getDate() < date.getDate()) ||
                (current.getMonth()<date.getMonth()) 
                ) && !exist(item)
            ) {
                rs.push(item)
            }
        })
        console.log(rs)
        return { status, rs }
    }
    catch (error) {
        throw error
    }
}