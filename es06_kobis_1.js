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
        let { rank, movieNm, openDt, audiAcc, salesAcc, rankOldAndNew, rankInten } = v;
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
      <a href="#" class="btn btn-primary">영화상세보기</a>
    </div>
  </div>
  `
        );
      });

      document.querySelectorAll(".btn").forEach((v) => {
        v.addEventListener("click", () => {
          alert("연습용 페이지입니다. 상세보기 정보가 없습니다.");
        });
      });
    });
  // .catch();
};
getKobis();
document.querySelector(".dateInput").addEventListener("input", () => {
  let dateInput = document.querySelector(".dateInput").value;

  dateInput = dateInput.length == 8 ? dateInput : false;

  getKobis(dateInput);
});
