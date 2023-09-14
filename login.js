/* submit 전 폼체크 validation check(유효성체크) */
function form_check() {}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".login-form").addEventListener("submit", (e) => {
    let name = document.getElementById("login-name");
    let id = document.getElementById("login-id");
    let pw = document.querySelector("#login-pw");
    let pwCF = document.querySelector("#login-pw-cf");
    let birth = document.getElementById("login-birth");
    let tel = document.getElementById("login-tel");
    let agree = document.getElementById("agree");
    function text_color_change() {
      err_text.style.color = "red";
    }
    /* 유효성체크(비어있을떄>갯수체크) */
    /* 이름 유효성체크 */
    if (name.value == "") {
      var err_text = document.querySelector(".err-name");
      err_text.innerHTML = "이름을 입력해주세요";
      text_color_change();
      name.focus();
      return false;
    }
    /*---------------아이디 유효성체크 ---------------*/
    if (id.value == "") {
      /* 아이디 공백여부 */
      e.preventDefault();
      var err_text = document.querySelector(".err-id");
      err_text.innerHTML = "아이디을 입력해주세요";
      text_color_change();
      id.focus();
      return false;
    }

    if (id.value.length < 4 || id.value.length > 12) {
      /* 아이디 길이 */
      var err_text = document.querySelector(".err-id");
      err_text.innerHTML = "아이디는 *4~12글자까지만 입력 가능합니다 ";
      text_color_change();
      id.focus();
      return false;
    }

    /* ----------생년월일 유효성체크 */
    if (birth.value.length !== 8) {
      e.preventDefault();
      alert("생년월일은 숫자 8자리 입력해주세요 ex) 19700101");
      return false;
    }
    /*----------- 전화번호 유효성체크---------- */
    if (tel.value.includes("-")) {
      e.preventDefault();
      var err_text = document.querySelector(".err-tel");
      err_text.innerHTML = "'-' 없이 입력해주세요 ";
      text_color_change();
      id.focus();
      return false;
    }
    /* ------------약관동의 유효성체크------ */
    if (!agree.checked) {
      e.preventDefault();

      alert("약관동의 필수입니다.");
      return false;
    }

    if (pw.value !== pwCF.value) {
      e.preventDefault();
      alert("비밀번호가 일치하지 않습니다");
      pw.focus();
      return false;
    }
  });

  /* -------이메일 선택----- */
  document.getElementById("이메일선택").addEventListener("change", (e) => {
    document.querySelector(".domain").value = e.currentTarget.value;
  });
  /* ----주소검색 이벤트 ----- */
  document.getElementById("search-addr").addEventListener("click", function address() {
    new daum.Postcode({
      oncomplete: function (data) {
        var roadAddr = data.roadAddress;
        var extraRoadAddr = "";

        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraRoadAddr += data.bname;
        }

        if (data.buildingName !== "" && data.apartment === "Y") {
          extraRoadAddr += extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }

        if (extraRoadAddr !== "") {
          extraRoadAddr = " (" + extraRoadAddr + ")";
        }

        document.getElementById("sample4_postcode").value = data.zonecode;
        document.getElementById("sample4_roadAddress").value = roadAddr;
        document.getElementById("sample4_jibunAddress").value = data.jibunAddress;

        if (roadAddr !== "") {
          document.getElementById("sample4_extraAddress").value = extraRoadAddr;
        } else {
          document.getElementById("sample4_extraAddress").value = "";
        }

        var guideTextBox = document.getElementById("guide");

        if (data.autoRoadAddress) {
          var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
          guideTextBox.innerHTML = "(예상 도로명 주소 : " + expRoadAddr + ")";
          guideTextBox.style.display = "block";
        } else if (data.autoJibunAddress) {
          var expJibunAddr = data.autoJibunAddress;
          guideTextBox.innerHTML = "(예상 지번 주소 : " + expJibunAddr + ")";
          guideTextBox.style.display = "block";
        } else {
          guideTextBox.innerHTML = "";
          guideTextBox.style.display = "none";
        }
      },
    }).open();
  });
}); //시작
