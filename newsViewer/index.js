import TAB_NAME from "./TAB_NAME.js";
import { fetchNews } from "./api.js";
import { API_KEY } from "./config.js";


class APP{
    constructor(){
        console.log(API_KEY);

        if(!API_KEY){
            alert("api키가 올바르지 않습니다.")
        }

        fetchNews('us',"general").then((data)=>{this.displayNews(data.articles);});

        const nav = document.getElementById('nav');
        TAB_NAME.forEach((tab)=> {
            const tabElement = document.createElement("a");
            tabElement.href ="#";
            tabElement.textContent=tab.ko;
            tabElement.addEventListener("click", ()=> this.handleTabClick(tab.en));
            nav.appendChild(tabElement);
        });
    }

    displayNews(articles){
     const section = document.getElementById("news");

     section.innerHTML=""

     articles.forEach((article)=>{
     const articleEle = document.createElement('article');
     const authorInfo = article.author? article.author: "알수없음";
     const imageEle = article.urlToImage ? `<img id="image1" src="${article.urlToImage}">`: " ";
     const descriptEle = article.description ? `<p>${article.description}</p>` : " ";

     articleEle.innerHTML =`
     ${imageEle}
     <h2>${article.title}</h2>
     ${descriptEle}
     <p class ="meta-info">${authorInfo}&nbsp&nbsp&nbsp&nbsp${article.publishedAt}<button class="button-arrow" onclick="window.open('${article.url}', '_blank')"> 뉴스보러가기 -> </button></p>`
     ;
       section.appendChild(articleEle);   
    })
    }

    handleTabClick(tabName){
       this.currentTabName = tabName;
       fetchNews('us',tabName).then((data)=> {this.displayNews(data.articles);}
    ) 
    }
}

const app= new APP();