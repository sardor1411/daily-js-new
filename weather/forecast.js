const KEY = 'c01a0799bc1326ea92e3ec8ff7831053'

const getData = async (city) => {
    const base = `https://api.openweathermap.org/data/2.5/weather`
    const query = `?q=${city}&units=metric&appid=${KEY}`
    loader(true)
    const req = await fetch(base + query)
    loader(false)
    const data = await req.json()
    return data
}
