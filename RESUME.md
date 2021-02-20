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

### [Tiat](https://tiat.app) (2018)
Tiat is the first software I made, a picture management software that focuses on performance and search.
Tiat uses RocksDB as the main database, which is very fast on a large number of non-sequential reads, which also allows him to maintain performance under the million-level capacity.
In addition, I have implemented the functions of "Search by pitcure" and "Draw to search" in Tiat, allowing users to find the pictures they want with only a dim impression.
Tiat has been developed for more than two years. Although the update is suspended due to the development of v2, thousands of users are still using it every month.

![Tiat](assets/TiatWeb.jpeg)

* App: `Electron`, `RocksDB`, `Image recognition`
* Service: `Golang`, `GCP(both Web & CI/CD)`

### [PackPanel](https://packpanel.island68.dev) (2019)
PackPanel is an experimental project, trying to use machine learning technology to solve the problem of local file classification.
I created a learning model and simple UI. When the user classifies certain files into a certain collection, PackPanel will analyze the characteristic values of these files and update the model.
Next time a new uncategorized file is added, PackPanel will try to classify it into similar collections.

![PackPanel](assets/PackPanelWeb.jpeg)

Step 1 | Step 2 | Step 3
:---:|:---:|:---:
![](assets/packpanel_demo_0.webp) | ![](assets/packpanel_demo_1.webp) | ![](assets/packpanel_demo_2.webp)

* `Electron`, `Tensorflow`, `File similarity`

### [Markdium](https://markdium.dev) (2019)
Just like its name, Markdium is a tool for converting and publishing from Markdown to Medium.
The most commonly used format by developers is Markdown, and the most popular article platform is Medium, so I built a bridge between the two.
Since Medium does not support the built-in Code highlight, Markdium will automatically convert the code block to Gist and embed into Medium.

![Markdium](assets/Markdium.jpeg)

Markdown editor | Connect with GitHub | Publish to Medium
:---:|:---:|:---:
![](assets/markdium_demo_0.webp) | ![](assets/markdium_demo_1.webp) | ![](assets/markdium_demo_2.webp)

* Front-end: `Next.js`, `Markdown editor and parser`
* Back-end: `Express`, `GCP(Cloud Run, Cloud function, Cloud SQL)`

### [Tasmap](https://tasmap.app) (2019~2020)
Tasmap是一個可客製化的故事地圖。你可以客製化屬於自己的地圖，編寫自己的故事，並且讓地圖跟故事之間互動。
在2020年發布時，Tasmap在Product Hunt獲得了很高的評價。
即使受到COVID-19的影響，Tasmap在過去的一年間，依然為來自數十個國家、數千名的旅行者、在地嚮導以及資料視覺化工作者們提供了一個兼具美觀與實用的故事地圖平台。
Tasmap是我的第一個收費產品，除了金流之外，我在這之中也累積了許多關於前端效能，以及色彩設計的經驗。

![Tasmap](assets/tasmap_demo_0.webp)

Dark|Light|Sakura|Macha|Hokusai|Hanafuda
:---:|:---:|:---:|:---:|:---:|:---:
![](assets/tasmap_demo_1.webp)|![](assets/tasmap_demo_2.webp)|![](assets/tasmap_demo_3.webp)|![](assets/tasmap_demo_4.webp)|![](assets/tasmap_demo_5.webp)|![](assets/tasmap_demo_6.webp)

* Front-end: `Next.js`, `PWA`, `MapboxGL`, `Rendering performance(Pixi.js & Konva)`, `Rich text editor`, `Customize map tiles`
* Back-end: `Express`, `GCP(GAE, GCE, Cloud function)`

### Tiat2 (2020~2021)
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
