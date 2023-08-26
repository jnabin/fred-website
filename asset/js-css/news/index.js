let newsList = [
    {
        category: "Press articles and media appearances",
        subTitle: "Leo tempus pellentesque nisl suscipit accumsan placerat parturient.",
        bgImg: "../asset/img/press-article-1-min.png"
    },
    {
        category: "Citizen and organization",
        subTitle: "Leo tempus pellentesque nisl suscipit accumsan placerat parturient.",
        bgImg: "../asset/img/press-article-1-min.png"
    },
    {
        category: "Opinion pieces",
        subTitle: "Leo tempus pellentesque nisl suscipit accumsan placerat parturient.",
        bgImg: "../asset/img/opinion-pieces-min.png"
    },
    {
        category: "Word from the deputy",
        subTitle: "Leo tempus pellentesque nisl suscipit accumsan placerat parturient.",
        bgImg: "../asset/img/word-from-deputy-min.png"
    },
    {
        category: "Citizen and organization",
        subTitle: "Leo tempus pellentesque nisl suscipit accumsan placerat parturient.",
        bgImg: "../asset/img/citizen-organization-min.png"
    },
    {
        category: "Word from the deputy",
        subTitle: "Leo tempus pellentesque nisl suscipit accumsan placerat parturient.",
        bgImg: "../asset/img/word-from-deputy-2-min.png"
    },
    {
        category: "Word from the deputy",
        subTitle: "Leo tempus pellentesque nisl suscipit accumsan placerat parturient.",
        bgImg: "../asset/img/word-from-deputy-3-min.png"
    },
    {
        category: "Press articles and media appearances",
        subTitle: "Leo tempus pellentesque nisl suscipit accumsan placerat parturient.",
        bgImg: "../asset/img/press-article-media-min.png"
    },
    {
        category: "Opinion pieces",
        subTitle: "Leo tempus pellentesque nisl suscipit accumsan placerat parturient.",
        bgImg: "../asset/img/opinion-pieces-2-min.png"
    },
    {
        category: "Word from the deputy",
        subTitle: "Leo tempus pellentesque nisl suscipit accumsan placerat parturient.",
        bgImg: "../asset/img/word-from-deputy-4-min.png"
    },
    {
        category: "Word from the deputy",
        subTitle: "Leo tempus pellentesque nisl suscipit accumsan placerat parturient.",
        bgImg: "../asset/img/word-from-deputy-5-min.png"
    },
    {
        category: "Citizen and organization",
        subTitle: "Leo tempus pellentesque nisl suscipit accumsan placerat parturient.",
        bgImg: "../asset/img/cityzen-organization-2-min.png"
    },
];
selectedNewsCategory = '';
updateNewsList();
var ele = document.getElementsByName('news-category');
    for (i = 0; i < ele.length; i++) {
        ele[i].addEventListener('change', function() {
            console.log(this.value);
            updateNewsList(this.value);
        });
}

function getSelectedCategory() {
    var ele = document.getElementsByName('news-category');
    let value = 'All Articles';
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            value = ele[i].value;
            console.log(value);
            break;
    }

    return value;
}

function getFilteredList(preCategory = null){
    let category = preCategory ? preCategory : getSelectedCategory();
    console.log(category);
    switch (category.toLowerCase()) {
        case 'All Articles'.toLowerCase():
            return newsList;
        case 'Press articles and media appearances'.toLowerCase():
            return newsList.filter(x => x.category.toLowerCase() == 'Press articles and media appearances'.toLowerCase());
        case 'Opinion pieces'.toLowerCase():
            return newsList.filter(x => x.category.toLowerCase() == 'Opinion pieces'.toLowerCase());
        case 'Word from the deputy'.toLowerCase():
            return newsList.filter(x => x.category.toLowerCase() == 'Word from the deputy'.toLowerCase());
        case 'Citizen and organization'.toLowerCase():
            return newsList.filter(x => x.category.toLowerCase() == 'Citizen and organization'.toLowerCase());
        default:
            return newsList;
    }
}   

function updateNewsList(category = null) {
    let newsListContainer = document.getElementById("newsListContainer");
    newsListContainer.innerHTML = '';
    let lists = getFilteredList(category); 
    console.log(lists);
    lists.forEach((item, index) => {
        newsListContainer.innerHTML += `
        <div class="news-item news-item-${index}">
            <img class="news-bg" src="${item.bgImg}" alt="${item.category}" srcset="">
            <div class="news-bg-effect"></div>
            <span class="details-news-btn">
                <a href="./details.html" class="vertical-arrow">
                    <i class="fa-solid fa-arrow-up"></i>
                </a>
            </span>
            <div class="news-content">
                <span class="news-label">
                    ${item.category}
                </span>
                <h5>
                    ${item.subTitle}
                </h5>
            </div>
        </div>
        `

    });
}