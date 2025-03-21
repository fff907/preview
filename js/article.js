const newsArticles = [
    { title: "Real Soundでの記事一覧", img: "images/author.png", link: "https://realsound.jp/person/about/945255", date: "2025-02-17" },
    { title: "TRILLでの記事一覧", img: "images/trill.jpg", link: "https://trilltrill.jp/search?keyword=%E6%B8%85%E6%B0%B4%E4%B9%85%E7%BE%8E%E5%AD%90", date: "2025-02-12" },
    { title: "U-NEXT SQUAREでの記事一覧", img: "images/square-ogp.png", link: "https://square.unext.jp/member/Kumiko-Shimizu/1", date: "2025-02-02" },
    { title: "Saitaでの記事一覧", img: "images/author.png", link: "https://saita-puls.com/author/167", date: "2025-01-25" },
    { title: "ケヴィン・ベーコンは“誰とでも繋がっている”名俳優？ 長く、幅広く、ハリウッドで輝き続ける軌跡をたどる | WEBザテレビジョン", img: "images/Kevin.png", link: "https://thetv.jp/news/detail/1214850/", date: "2024-08-30" },
    { title: "海外ドラマNAVIでの記事一覧", img: "images/kaigai_drama_navi.jpg", link: "https://dramanavi.net/?author=75", date: "2024-01-05" },
    { title: "『ゆとりですがなにか インターナショナル』松坂桃李インタビュー | SCREEN ONLINE", img: "images/yutori_xlarge.jpg", link: "https://screenonline.jp/_ct/17657579", date: "2023-10-12" },
    { title: "【前】内田有紀！千本ノックな撮影現場のサスペンス | ハルメクカルチャー", img: "images/yuki_utida.jpg", link: "https://halmek.co.jp/favorite/c/hobby/9561", date: "2023-04-26" },
    { title: "今こそ見たい！心温まるヒューマンドラマ「サンフランシスコの空の下」―あの有名俳優たちの出世作となった名作―", img: "images/SanFrancisco.jpg", link: "https://www.axn.co.jp/column/zggidr3px0ynhm9l.html", date: "2023-01-20" },
    { title: "『Dr. House』のヒュー・ローリーが多才ぶりを発揮！アガサ・クリスティー原作『なぜ、エヴァンズに頼まなかったのか？』を映像化！", img: "images/DrHouse.jpg", link: "https://www.mystery.co.jp/column/41ghm5ht0yljtzi4.html", date: "2022-11-18" },
    { title: "800人以上の奴隷を解放した、「最高の女性」が心に刻まれる。 | Pen Online", img: "images/cinema_harriet.jpg", link: "https://www.pen-online.jp/article/003000.html", date: "2020-03-27" },
    { title: "【短期連載】いびつな家族のカタチを描く傑作邦画3選 Vol.3「台風家族」 | SCREEN ONLINE", img: "images/family_xlarge.jpg", link: "https://screenonline.jp/_ct/17351255", date: "2020-03-20" },
    { title: "仕事場での“女の涙”はすべてを狂わせる | PRESIDENT WOMAN Online", img: "images/merry.jpg", link: "https://president.jp/articles/-/27597", date: "2019-02-08" },
    { title: "『クリミナル・マインド』マシュー×森久保 初対談（前編）“日米リード役”が意気投合", img: "images/criminal.jpg", link: "https://www.crank-in.net/interview/58149", date: "2018-08-13" },
    { title: "日経xwomanでの記事一覧", img: "images/ogimage.png", link: "https://woman.nikkei.com/atcl/author/00002/", date: "2018-03-20" },
    { title: "愛する人がトランスジェンダーに 「リリーのすべて」 | 日本経済新聞", img: "images/Lilly.jpg", link: "https://www.nikkei.com/article/DGXMZO98497620W6A310C1000000/", date: "2016-03-19" },
    { title: "実在したオンチの歌姫、メリル・ストリープが熱演 | 日本経済新聞", img: "images/madam.jpg", link: "https://www.nikkei.com/article/DGXMZO09779030R21C16A1000000/", date: "2016-11-30" }
  ];

const newsGrid = document.querySelector(".news-grid");
const loadMoreBtn = document.getElementById("loadMore");
const newsMoreContainer = document.querySelector(".news-more");

let itemsPerPage = 3; // 初期表示数
let currentIndex = 0;

// **記事を追加する関数**
function loadNews() {
    const nextItems = newsArticles.slice(currentIndex, currentIndex + itemsPerPage);

    nextItems.forEach(article => {
        const articleHTML = `
            <div class="news-card">
                <img src="${article.img}" alt="${article.title}">
                <div class="news-info">
                    <div class="news-title">
                        <p class="news-date">${article.date}</p> <!-- 手入力の日付を表示 -->
                        <h3>${article.title}</h3>
                    </div>
                    <a href="${article.link}" target="_blank" class="read-more">続きを読む</a>
                </div>
            </div>
        `;
        newsGrid.innerHTML += articleHTML;
    });

    currentIndex += itemsPerPage;

    // **記事がまだあるなら「もっと見る」ボタンを表示**
    if (currentIndex < newsArticles.length) {
        newsMoreContainer.style.display = "block";
    } else {
        newsMoreContainer.remove(); // 余計な余白を作らないよう完全削除
    }
}

// **初回ロード（最初の3記事を表示）**
loadNews();

// **ボタンを押したら次の記事を追加**
loadMoreBtn.addEventListener("click", loadNews);