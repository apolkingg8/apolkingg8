# Resume

Hi, I'm Eddie Hsu, an indie developer in Taiwan. 8+ year experiences, skilled in web & cross-platform apps.
* Contact Me: [apolkingg8@gmail.com](mailto:apolkingg8@gmail.com)
* Product Hunt: https://www.producthunt.com/@eddiehsu/made
* Medium: https://medium.com/@kingapol

## Skill
List some of my skilled/preferred stuff. Find more `Skill tags` in above section.
* **Core pick**: React, MobX, TypeScript, Rust
* **Front-end**: Next.js, Material-ui
* **Back-end**: Express, GraphQL, TypeORM
* **Cross-platform**: Electron, React Native, Tizen, WebOS
* **Service**: Usually use GCP, some experience in AWS


## Job

### Early career (2011 ~ 2014)
I like to try new things and take the challenge, so I tried many domains.

`SmartTV(Samsung & Panasonic)`, `MySQL`, `jQuery, Backbone and other classic stuff`

### Plustek (2014 ~ 2016)
Front-end developer. Build [a NAS-like storage system](https://plustek.com/tw/products/file-management-solution/edoc-series/index.php) but focus on documents for companies & schools.

`Ionic`, `React Native`, `Front-end`, `JAVA/Obj-c`

### KKStream (2016 ~ 2017)
Full-stack developer. Build modularize CMS for digital assets.

`Next.js`, `GraphQL`, `Golang`, `gRPC`, `AWS`

### QCDN (2018 ~ 2019)
Full-stack developer. Build CDN services, dashboard, optimize back-end performance and reduce GCP cost.

`GCP`, `WebOS`, `Tizen`, `Backend performance`

### Indie developer (2019~)
Currently, I'm an indie developer, working on Tasmap & Tiat2. Check more below.


## Made
I love to make something. For practice skill, for the requirement from myself, to show my ideal, or just for fun. You can check some of them on my [PH page](https://www.producthunt.com/@eddiehsu/made).

### [Tiat](https://tiat.app)
Tiat是我最早製作的圖片管理軟體，著重於效能以及搜尋功能。
Tiat使用RocksDB作為主資料庫，在大量的非順序讀取上非常迅速，這也讓他可以在百萬等級的承載量之下依然保持效能。
此外，我在Tiat中實做了以圖搜圖以及「Draw to search」的功能，讓使用者可以僅藉著朦朧的印象尋找想要的圖片。
Tiat開發至今已超過兩年，儘管因為v2的開發而暫停更新，每個月仍有數千名使用者持續使用中。

![Tiat](assets/TiatWeb.jpeg)

* App: `Electron`, `RocksDB`, `Image recognition`
* Service: `Golang`, `GCP(both Web & CI/CD)`

### [PackPanel](https://packpanel.island68.dev)
PackPanel是一個實驗性質的作品，試著用機器學習的技術來處理本機檔案分類的問題。
我建立了一個學習模型以及簡單的UI，當使用者把某些檔案歸類某個集合的時候，PackPanel會分析這些檔案的特徵值並更新模型。
在下次有新的未分類檔案加入時，PackPanel會試著把它分類到對應的集合。

![PackPanel](assets/PackPanelWeb.jpeg)

Step 1 | Step 2 | Step 3
:---:|:---:|:---:
![](assets/packpanel_demo_0.webp) | ![](assets/packpanel_demo_1.webp) | ![](assets/packpanel_demo_2.webp)

* `Electron`, `Tensorflow`, `File similarity`

### [Markdium](https://markdium.dev)
Markdium就如他的名字，是一個把Markdown轉換並發佈到Medium的工具。工程師最常使用的格式是Markdown，而最常使用的平台則是Medium，所以我建構了一個兩者之間的轉橋樑。
由於Medium並不支援內建的Code highlight，所以Markdium會自動把code block轉換為gist的形式，再嵌入至Medium中。

![Markdium](assets/Markdium.jpeg)

Markdown editor | Connect with GitHub | Publish to Medium
:---:|:---:|:---:
![](assets/markdium_demo_0.webp) | ![](assets/markdium_demo_1.webp) | ![](assets/markdium_demo_2.webp)

* Front-end: `Next.js`, `Markdown editor and parser`
* Back-end: `Express`, `GCP(Cloud Run, Cloud function, Cloud SQL)`

### [Tasmap](https://tasmap.app)
Tasmap是一個可客製化的故事地圖。你可以客製化屬於自己的地圖，編寫自己的故事，並且讓地圖跟故事之間互動。
在2020年發布時，Tasmap在Product Hunt獲得了很高的評價。即使受到COVID-19的影響，Tasmap在過去的一年間，依然為來自數十個國家、數千名的旅行者、在地嚮導以及資料視覺化工作者們提供了一個兼具美觀與實用的故事地圖平台。
Tasmap是我的第一個收費產品，除了金流之外，我在這之中也累積了許多關於前端效能，以及色彩設計的經驗。

![Tasmap](assets/tasmap_demo_0.webp)

Dark|Light|Sakura|Macha|Hokusai|Hanafuda
:---:|:---:|:---:|:---:|:---:|:---:
![](assets/tasmap_demo_1.webp)|![](assets/tasmap_demo_2.webp)|![](assets/tasmap_demo_3.webp)|![](assets/tasmap_demo_4.webp)|![](assets/tasmap_demo_5.webp)|![](assets/tasmap_demo_6.webp)

* Front-end: `Next.js`, `PWA`, `MapboxGL`, `Rendering performance(Pixi.js & Konva)`, `Rich text editor`, `Customize map tiles`
* Back-end: `Express`, `GCP(GAE, GCE, Cloud function)`

### Tiat2
Tiat2是一個全新的版本，結合了v1的使用者回饋，在UX設計以及許多方面都更加優化。
搜尋的部分參考了PackPanel中的AI設計經驗，強化了分類及以圖搜圖的功能，同時也加入了語意分析來強化文字搜尋的部分。
在Tiat2中，我把效能繁重的部分以Rust或WASM模組取代，讓整體的效能更上一層樓。
此外，Tiat2是以TDD的方式開發，雖然增加了許多的開發時間，但也增進了穩定性。

* App: `Electron`, `Rust/Rust-wasm`, `TypeORM`, `Image recognition`, `File similarity`
* Service: `GCP(Web & SQL replication)`, `GH action(CI/CD)`

## Non-technical
* 10+ years of experience in baseball. A good hitter but a terrible fielder.
* Tea, milk, beer, and Dr.Pepper. No coffee.
* Love cooking.
