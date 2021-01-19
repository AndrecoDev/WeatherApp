export const getCities = async (url) => {
    const resp = await fetch(url);
    const cities = await resp.json();
    return cities;
}
