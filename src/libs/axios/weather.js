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
    const direccion = (value) => {
        if (value < 22.5) { return 'N' }
        if (value >= 22.5 && value < 45) { return 'NNE' }
        if (value >= 45 && value < 67.5) { return 'NE' }
        if (value >= 67.5 && value < 90) { return 'ENE' }
        if (value >= 90 && value < 112.5) { return 'E' }
        if (value >= 112.5 && value < 135) { return 'ESE' }
        if (value >= 135 && value < 157.5) { return 'SE' }
        if (value >= 157.5 && value < 180) { return 'SSE' }
        if (value >= 180 && value < 202.5) { return 'S' }
        if (value >= 202.5 && value < 225) { return 'SSW' }
        if (value >= 225 && value < 247.5) { return 'SW' }
        if (value >= 247.5 && value < 270) { return 'WSW' }
        if (value >= 270 && value < 292.5) { return 'W' }
        if (value >= 292.5 && value < 315) { return 'WNW' }
        if (value >= 315 && value < 337.5) { return 'NW' }
        if (value > 337.5) { return 'NNW' }
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
                return current.getDate() === date.getDate()
            })
        }
        data.list.forEach(item => {
            const date = new Date(item.dt * 1000)
            if (
                ((current.getDate() < date.getDate()) ||
                    (current.getMonth() <= date.getMonth()) ||
                    (current.getFullYear() <= date.getFullYear())
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