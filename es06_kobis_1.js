/* 
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

*/
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

const getKobis = async (date = "20230907") => {
  await fetch(
    `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${date}`
  )
    .then((response) => response.json())
    .then((kobis) => {
      //일별 박스오피스 출력 - 영화순위,영화제목, 개봉일,누적관객수,누적매출액
      let movieList = kobis.boxOfficeResult.dailyBoxOfficeList;
      let movieBox = document.querySelector(".movie-box");
      movieList.map((v) => {
        let { rank, movieNm, openDt, audiAcc, salesAcc, rankOldAndNew, rankInten, movieCd } = v;
        let newOld = rankOldAndNew == "NEW" ? "신규" : "기존";
        let rankUpDown = rankInten > 0 ? `+${rankInten}` : `${rankInten}`;

        return movieBox.insertAdjacentHTML(
          "beforeend",
          `
    <div class="card" style="width: 18rem;">
    <p class="card-img-top">${kobis.boxOfficeResult.boxofficeType}</p>
    <div class="card-body">
      <h5 class="card-title"><strong>${newOld} ${rank}위</strong>(${rankUpDown})</h5>
     <h4 class='title-line'> ${movieNm}</h4>
      <p class="card-text"><p><strong>개봉일</strong> : ${openDt}</p>
    <p><strong>누적관객</strong> : ${audiAcc}명</p>
      <p><strong>누적매출</strong> : ${salesAcc}원</p></p>
      <a href="#" id=${movieCd} class="btn btn-primary">영화상세보기</a>
    </div>
  </div>
  `
        ); //insertAdjacentHTML
      }); //map
      //클래스를 가지고있는테그요소가져오기 >> querySelectorAll(클래스명)
      //for를 이용하여 요소 반환 후이벤트 적용
      let btns = document.querySelectorAll(".btn");
      btns.forEach((v) => {
        v.addEventListener("click", (e) => {
          // alert(v.getAttribute("id"));
          //상세정보를 가지고 있는 api를 호출
          document.querySelectorAll(".card").forEach((v) => {
            v.style.display = "hidden";
          });
          console.log(kobisContent(v.getAttribute("id")));
        });
      });
    }); //kobis
};
getKobis();
document.querySelector(".dateInput").addEventListener("input", () => {
  let dateInput = document.querySelector(".dateInput").value;

  dateInput = dateInput.length == 8 ? dateInput : false;

  getKobis(dateInput);
});

function kobisContent(movieCd) {
  fetch(
    ` http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${movieCd}`
  )
    .then((response) => response.json())
    .then(showMovieContent);
}

function showMovieContent(mcontent) {
  // alert(JSON.stringify(mcontent));
  let movieInfo = mcontent.movieInfoResult.movieInfo;
  let { movieNm, movieNmEn, showTm, openDt } = movieInfo;
  console.log(movieNm);

  document.querySelector(".movie-box").innerHTML = `

 <div class='detail-section'>
    
        <p>제목 ${movieNm}(${movieNmEn})</p>
       <p> 상영시간 ${showTm}분</p>
      <p>  개봉일 ${openDt}</p>
      <button class='back-button'>뒤로가기 버튼</button>
    
 </div>

  `;
  document.querySelector(".detail-section button").addEventListener("click", (e) => {
    console.log("tt");
    document.querySelector(".detail-section").style.display = "none";
  });
}
