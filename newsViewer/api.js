import { API_KEY } from "./config.js";
const BASE_URL = "https://newsapi.org/v2/";

export const fetchNews = async (country, category) => {
  
    const param = new URLSearchParams({
        country,
        category,
        apikey: API_KEY
    });
    try{
    const url = `${BASE_URL}top-headlines?${param.toString()}`;

    const corsurl = "https://api.allorigins.win/get?url=" + encodeURIComponent(url);

    let response =await fetch(corsurl);
    let data = await response.json();

    const parseData = JSON.parse(data.contents);

    console.log(parseData);
    return parseData;
}
catch(e){
    console.log('error:', e);
}
}