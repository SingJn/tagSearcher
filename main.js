
/* 맨뒤 숫자는 2 = 6성 1 = 5성, 0 = 1~4성 */
let combinationDBkr = [
    ["6", "시즈", ["뱅가드", "근거리", "코스트+", "딜러", "고급특별채용"]],
    ["6", "샤이닝", ["메딕", "원거리", "서포트", "힐링", "고급특별채용"]],
    ["6", "나이팅게일", ["메딕", "원거리", "힐링", "서포트", "고급특별채용"]],
    ["6", "이프리트", ["캐스터", "원거리", "범위공격", "디버프", "고급특별채용"]],
    ["6", "엑시아", ["스나이퍼", "원거리", "딜러", "고급특별채용"]],
    ["6", "실버애쉬", ["가드", "근거리", "딜러", "서포트", "고급특별채용"]],
    ["6", "호시구마", ["디펜더", "근거리", "딜러", "방어형", "고급특별채용"]],
    ["6", "사리아", ["디펜더", "근거리", "서포트", "방어형", "힐링", "고급특별채용"]],
    ["5", "텍사스", ["뱅가드", "제어형", "근거리", "코스트+", "특별채용"]],
    ["5", "지마", ["뱅가드", "서포트", "근거리", "코스트+", "특별채용"]],
    ["5", "프틸롭시스", ["메딕", "원거리", "힐링", "서포트", "특별채용"]],
    ["5", "사일런스", ["메딕", "원거리", "힐링", "특별채용"]],
    ["5", "와파린", ["메딕", "원거리", "힐링", "서포트", "특별채용"]],
    ["5", "레드", ["스페셜리스트", "근거리", "제어형", "쾌속부활", "특별채용"]],
    ["5", "맨티코어", ["스페셜리스트", "생존형", "근거리", "딜러", "특별채용"]],
    ["5", "클리프하트", ["스페셜리스트", "딜러", "근거리", "강제이동", "특별채용"]],
    ["5", "에프이터", ["스페셜리스트", "감속", "근거리", "강제이동", "특별채용"]],
    ["5", "프로방스", ["스나이퍼", "원거리", "딜러", "특별채용"]],
    ["5", "블루포이즌", ["스나이퍼", "원거리", "딜러", "특별채용"]],
    ["5", "파이어워치", ["스나이퍼", "원거리", "딜러", "누커", "특별채용"]],
    ["5", "메테오라이트", ["스나이퍼", "원거리", "범위공격", "디버프", "특별채용"]],
    ["5", "플래티넘", ["스나이퍼", "원거리", "딜러", "특별채용"]],
    ["5", "프라마닉스", ["서포터", "원거리", "디버프", "특별채용"]],
    ["5", "이스티나", ["서포터", "원거리", "감속", "딜러", "특별채용"]],
    ["5", "메이어", ["서포터", "원거리", "소환", "제어형", "특별채용"]],
    ["5", "스펙터", ["가드", "근거리", "범위공격", "생존형", "특별채용"]],
    ["5", "인드라", ["가드", "근거리", "딜러", "생존형", "특별채용"]],
    ["5", "니어", ["디펜더", "근거리", "방어형", "힐링", "특별채용"]],
    ["5", "리스캄", ["디펜더", "근거리", "방어형", "딜러", "특별채용"]],
    ["5", "벌컨", ["디펜더", "근거리", "딜러", "방어형", "생존형", "특별채용"]],
    ["5", "크루아상", ["디펜더", "근거리", "강제이동", "방어형", "특별채용"]],
    ["4", "스캐빈저", ["뱅가드", "근거리", "코스트+", "딜러"]],
    ["4", "비그나", ["뱅가드", "근거리", "딜러", "코스트+"]],
    ["4", "미르", ["메딕", "원거리", "힐링"]],
    ["4", "퍼퓨머", ["메딕", "원거리", "힐링"]],
    ["4", "헤이즈", ["캐스터", "디버프", "원거리", "딜러"]],
    ["4", "기타노", ["캐스터", "원거리", "범위공격"]],
    ["4", "그라벨", ["스페셜리스트", "근거리", "쾌속부활", "방어형"]],
    ["4", "로프", ["스페셜리스트", "근거리", "강제이동"]],
    ["4", "쇼", ["스페셜리스트", "근거리", "강제이동"]],
    ["4", "시라유키", ["스나이퍼", "원거리", "범위공격", "감속"]],
    ["4", "메테오", ["스나이퍼", "원거리", "딜러", "디버프"]],
    ["4", "제시카", ["스나이퍼", "원거리", "딜러", "생존형"]],
    ["4", "어스스피릿", ["서포터", "원거리", "감속"]],
    ["4", "도베르만", ["가드", "근거리", "서포트", "딜러"]],
    ["4", "에스텔", ["가드", "근거리", "범위공격", "생존형"]],
    ["4", "무스", ["가드", "근거리", "딜러"]],
    ["4", "프로스트리프", ["가드", "근거리", "감속", "딜러"]],
    ["4", "마토이마루", ["가드", "딜러", "근거리", "생존형"]],
    ["4", "쿠오라", ["디펜더", "근거리", "방어형"]],
    ["4", "굼", ["디펜더", "근거리", "방어형", "힐링"]],
    ["4", "마터호른", ["디펜더", "근거리", "방어형"]],
    ["3", "팽", ["뱅가드", "근거리", "코스트+"]],
    ["3", "바닐라", ["뱅가드", "근거리", "코스트+"]],
    ["3", "플룸", ["뱅가드", "근거리", "딜러", "코스트+"]],
    ["3", "히비스커스", ["메딕", "원거리", "힐링"]],
    ["3", "안셀", ["메딕", "원거리", "힐링"]],
    ["3", "라바", ["캐스터", "원거리", "범위공격"]],
    ["3", "스튜어드", ["캐스터", "원거리", "딜러"]],
    ["3", "크루스", ["스나이퍼", "원거리", "딜러"]],
    ["3", "아드나키엘", ["스나이퍼", "원거리", "딜러"]],
    ["3", "오키드", ["서포터", "원거리", "감속"]],
    ["3", "멜란사", ["가드", "근거리", "딜러", "생존형"]],
    ["3", "비글", ["디펜더", "근거리", "방어형"]],
    ["2", "야토", ["뱅가드", "근거리", "신입"]],
    ["2", "듀린", ["캐스터", "원거리", "신입"]],
    ["2", "12F", ["캐스터", "원거리", "신입"]],
    ["2", "레인저", ["스나이퍼", "원거리", "신입"]],
    ["2", "느와르", ["디펜더", "근거리", "신입"]],
    ["1", "Lancet-2", ["메딕", "원거리", "힐링", "로봇"]],
    ["1", "Castle-3", ["가드", "근거리", "서포트", "로봇"]]
];
var combinationDBjp = [
    ["先鋒タイプ", "支援", "★5 지마"],
    ["COST回復", "支援", "★5 지마"],
    ["先鋒タイプ", "牽制", "★5 텍서스"],
    ["COST回復", "牽制", "★5 텍서스"],
    ["爆発力", "★5 파이어워치"],
    ["範囲攻撃", "弱化", "★5 메테오리테"],
    ["医療タイプ", "支援", "★5 프틸롭시스, 와파린"],
    ["支援", "治療", "★5 프틸롭시스, 와파린"],
    ["支援", "遠距離", "★5 프틸롭시스, 와파린"],
    ["重装タイプ", "生存", "★5 불칸"],
    ["防御", "生存", "★5 불칸"],
    ["防御", "火力", "★5 불칸, 리스캄"],
    ["重装タイプ", "強制移動", "★5 크루아상"],
    ["防御", "強制移動", "★5 크루아상"],
    ["弱化", "補助タイプ", "★5 프라마닉스"],
    ["火力", "補助タイプ", "★5 이스티나"],
    ["召喚", "★5 메이어"],
    ["補助タイプ" ,"牽制", "★5 메이어"],
    ["遠距離", "牽制", "★5 메이어"],
    ["牽制", "高速再配置", "★5 레드"],
    ["牽制", "特殊タイプ", "★5 레드"],
    ["特殊タイプ", "火力", "★5 만티코어, 클리프하트"],
    ["特殊タイプ", "生存", "★5 만티코어, 클리프하트"],
    ["特殊タイプ", "減速", "★5 에프이터"],
    ["減速", "強制移動", "★5 에포이터"],
    ["強制移動", "火力", "★5 클리프하트"],
    ["牽制", "★5 레드, 텍사스, 메이어"],
    ["牽制", "近距離", "★5 텍사스, 레드"],
    ["範囲攻撃", "狙撃タイプ", "★4 이상 메테오리테, 시라유키"],
    ["範囲攻撃", "減速", "★4 이상 시라유키"],
    ["生存", "狙撃タイプ", "★4 이상 제시카"],
    ["生存", "遠距離", "★4 이상 제시카"],
    ["弱化", "狙撃タイプ", "★4 이상 메테오리테, 메테오"],
    ["弱化", "術師タイプ", "★4 이상 헤이즈"],
    ["支援", "前衛タイプ", "★4 이상 도베르만"],
    ["支援", "火力" ,"★4 이상 도베르만"],
    ["範囲攻撃", "前衛タイプ", "★4 이상 스펙터, 에스텔"],
    ["範囲攻撃", "生存", "★4 이상 스펙터, 에스텔"],
    ["範囲攻撃", "近距離", "★4 이상 스펙터, 에스텔"],
    ["減速", "前衛タイプ", "★4 이상 프로스트리프"],
    ["治療", "防御", "★4 이상 니어, 굼"],
    ["治療", "重装タイプ", "★4 이상 니어, 굼"],
    ["治療", "近距離", "★4 이상 니어, 굼"],
    ["防御", "男性隊員", "★4 이상 마터호른"],
    ["男性隊員", "重装タイプ", "★4 이상 마터호른"],
    ["男性隊員", "近距離", "★4 이상 마터호른"],
    ["特殊タイプ", "★4 이상 레드, 만티코어, 클리프하트, 에프이터, 쇼, 로프, 그라벨"],
    ["高速再配置", "★4 이상 그라벨, 레드"],
    ["特殊タイプ", "防御", "★4 그라벨"],
    ["高速再配置", "防御", "★4 이상 그라벨"],
    ["特殊タイプ", "強制移動", "★4 이상 클리프하트, 에프이터, 로프, 쇼"],
    ["強制移動", "★4 이상 클리프하트, 에프이터, 로프, 쇼, 크루아상"],
    ["支援", "★4 이상 지마, 프틸롭시스, 와파린, 도베르만"],
    ["弱化", "★4 이상 메테오리테, 프라마닉스, 헤이즈, 메테오"],
    ["弱化", "火力", "★4 이상 헤이즈, 메테오"],
    ["減速", "近距離", "★4 이상 프로스트리프, 에프이터"],
    ["減速", "火力", "★4 이상 이스티나, 프로스트리프"],
    ["支援", "近距離", "★4 이상 도베르만, 지마"],
    ["エリート", "★5 확정"],
    ["上級エリート", "★6 확정"],
    ["初期", "★2 확정"],
    ["ロボット", "★1 Lancet-2"]
];
var resultArray = [];
var array1 = [[]];
var array2 = [];
var array3 = [];
var array4 = [];
var array5 = [];
var array6 = [];

/* default DB로 kr 적용*/
var combinationDB = combinationDBkr;
var languageList = ["jp", "kr"];
var combinationListDB = [];
/* tag 선택시 저장할 배열 */
var tagInput = [];
/* 태그를 몇 개 선택했는지 저장하는 변수 */
var tagInputCount = 0;

/* 언어선택 */
document.getElementById("kr").onclick = function() {
    for(i=0; i<combinationListDB.length; i++) {
        document.getElementById(combinationListDB[i]).remove();
    }
    combinationDB = combinationDBkr;
    document.getElementById("kr").style.fontWeight = "bold";
    document.getElementById("kr").style.opacity = "0.8";
    document.getElementById("jp").style.fontWeight = "400";
    document.getElementById("jp").style.opacity = "0.3";
    conditionArrayMaker();
    buttonMaker();
    refresh();
};
document.getElementById("jp").onclick = function() {
    for(i=0; i<combinationListDB.length; i++) {
        document.getElementById(combinationListDB[i]).remove();
    }
    combinationDB = combinationDBjp;
    document.getElementById("jp").style.fontWeight = "bold";
    document.getElementById("jp").style.opacity = "0.8";
    document.getElementById("kr").style.fontWeight = "400";
    document.getElementById("kr").style.opacity = "0.3";
    conditionArrayMaker();
    buttonMaker();
    refresh();
};

function languageSelecter() {
    for(i=0; i<languageList; i++) {
        document.getElementById(languageList[i]).onclick = function() {
            for(i=0; i<combinationListDB.length; i++) {
                document.getElementById(combinationListDB[i]).remove();
            }
            combinationDB = combinationDBkr; /* 동적변수명을 사용하여 지정할것  combinationDB + lagnuageList[i]*/
            document.getElementById(languageList[i]).style.fontWeight = "bold";
            document.getElementById(languageList[i]).style.opacity = "0.8";
            for(j=0; j<languageList; j++) {
                if(i != j ) {
                    document.getElementById(languageList[j]).style.fontWeight = "400";
                    document.getElementById(languageList[j]).style.opacity = "0.3";
                }
            }    
            conditionArrayMaker();
            buttonMaker();
            refresh();
        };
    }
}

/* make condition array 그리고 가나다순 정렬*/
function conditionArrayMaker() {
combinationListDB = [];
    for (i=0; i<combinationDB.length; i++) {
        for (j=0; j<combinationDB[i][2].length; j++) {
            if (combinationListDB.indexOf(combinationDB[i][2][j]) == -1) {
                combinationListDB.push(combinationDB[i][2][j]);
            }
        }
    }
    combinationListDB = combinationListDB.sort();
}
conditionArrayMaker();//801

/* 입력 태그 개수 추가 */
function inputListMaker(i) {
    if(tagInput.indexOf(i) == -1) {
        tagInput.push(i);
        tagInputCount += 1;
    } else {
        tagInput.splice(tagInput.indexOf(i), 1);
        tagInputCount -= 1;
    }
}

function tagInputCountChecker() {
    /* 입력 태그 개수가 5개가 되면 검색 함수 실행*/
    if(tagInputCount >= 1) {
        searchWithTags();
        document.getElementById("outputArea").style.visibility = "visible";
    } else {
        document.getElementById("outputArea").innerHTML = "";
        document.getElementById("outputArea").style.visibility = "hidden";
    }
    if(tagInputCount >= 1) {
        document.getElementById("refreshButton").style.display = "block";
    }
}

/* outputTextarea update */
function outputUpdate() {
    const parent = document.getElementsByClassName("tags")[0];
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    for(i =0; i<tagInput.length; i++) {
        var inputSpan = document.createElement("button");
        inputSpan.className = "inputSpan";
        // inputSpan.id = taginput[i];
        inputSpan.innerHTML = tagInput[i] + "<span id=\"delete\"> X </span>";
        var tagBody = document.getElementsByClassName("tags")[0];
        tagBody.appendChild(inputSpan);
        inputSpan.addEventListener ("click", function () {
            document.getElementById("outputArea").style.visibility = "hidden";
            innerH = this.innerHTML.slice(0, -28);
            inputListMaker(innerH)
            tagInputCountChecker();
            outputUpdate();
            buttonStatusChanger();
            if(tagInputCount == 0) {
                refresh();
            }
        });
    }
}

/* 버튼 활성화, 비활성화 */
function buttonStatusChanger() {
    for(j=0; j<combinationListDB.length; j++) {
        document.getElementById(combinationListDB[j]).style.backgroundColor = "#0A84FF"
        document.getElementById(combinationListDB[j]).style.boxShadow = "0 2px #0068B8"
    }
    for(i=0; i<tagInput.length; i++) {
        document.getElementById(tagInput[i]).style.backgroundColor = "#082d4a"
        document.getElementById(tagInput[i]).style.boxShadow = "none"
    }
}
/* 버튼 만들기 */
function buttonMaker() {
    for (i=0; i<combinationListDB.length; i++) {
        /* combinationListDB의 요소를 id로 가진 버튼 만들기 */
        var tagButton = document.createElement("button");
        tagButton.innerHTML = combinationListDB[i];
        tagButton.id = combinationListDB[i];
        var body = document.getElementsByClassName("input")[0];
        body.appendChild(tagButton);
        /* 해당 버튼 누를 시, tagInput에 push or splice 그리고 태그 변화 */
        tagButton.addEventListener ("click", function () {
            document.getElementById("outputArea").style.visibility = "hidden";
            inputListMaker(this.id);
            tagInputCountChecker();
            outputUpdate();
            buttonStatusChanger();
            if(tagInputCount == 0) {
                refresh();
            }
        });
    }
}
buttonMaker();


function refresh() {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    tagInput = [];
    tagInputCount = 0;
    buttonStatusChanger();
    outputUpdate();
    var inputSpan = document.createElement("span");
    inputSpan.id = "placeholder";
    inputSpan.innerHTML = "상단에서 5개의 태그를 선택해주세요"; 
    var tagBody = document.getElementsByClassName("tags")[0];
    tagBody.appendChild(inputSpan);
    document.getElementById("outputArea").innerHTML = "";
    document.getElementById("outputArea").style.visibility = "hidden";
    document.getElementById("refreshButton").style.display = "none";
}

document.getElementById("refreshButton").onclick = function() {
    refresh();
};

// input 태그로 combinationDB와 비교 실행
function searchWithTags() {
    sameTagArray = [];
    resultArray = [];
    document.getElementById("outputArea").innerHTML = "";
    for (j in combinationDB) {
        var flag = 1;
        var tArray = [[], []];
        for (tag in tagInput) {
            var conditionArray = combinationDB[j];
            for (i=0; i<conditionArray[2].length; i++) {
                var charStar = conditionArray[0];
                var charName = conditionArray[1];
                var tagInDB = conditionArray[2][i];
                if (tagInDB == tagInput[tag]) {
                    if(sameTagArray.indexOf(tagInput[tag]) == -1) {
                        sameTagArray.push(tagInput[tag]);
                    }
                    if(flag) {
                        tArray[0].push(charStar);
                        tArray[0].push(charName);
                        tArray[1].push(tagInDB);
                        flag = 0;
                    } else {
                        tArray[1].push(tagInDB)
                    }
                }
            }
        }
        if(!flag) {
            if(!(tArray[0][0] == 6 && tArray[1].indexOf("고급특별채용") == -1)) {
                resultArray.push(tArray);
            }
        }
    }
    var mixArray = [];
    switch(sameTagArray.length) {
        case 5:
            for(g = 0; g < sameTagArray.length-4; g++) {
                for(h = g+1; h < sameTagArray.length-3; h++) {
                    for (k = h+1; k < sameTagArray.length-2; k++) {
                        for (i = k+1; i < sameTagArray.length-1; i++) {
                            for (j = i+1; j < sameTagArray.length; j++) {
                                var buffer = [[]];
                                buffer[0].push(sameTagArray[g]);
                                buffer[0].push(sameTagArray[h]);
                                buffer[0].push(sameTagArray[k]);
                                buffer[0].push(sameTagArray[i]);
                                buffer[0].push(sameTagArray[j]);
                                mixArray.push(buffer[0]);
                            }
                        }
                    }
                }    
            }
        case 4:
            for(h = 0; h < sameTagArray.length-3; h++) {
                for (k = h+1; k < sameTagArray.length-2; k++) {
                    for (i = k+1; i < sameTagArray.length-1; i++) {
                        for (j = i+1; j < sameTagArray.length; j++) {
                            var buffer = [[]];
                            buffer[0].push(sameTagArray[h]);
                            buffer[0].push(sameTagArray[k]);
                            buffer[0].push(sameTagArray[i]);
                            buffer[0].push(sameTagArray[j]);
                            mixArray.push(buffer[0]);
                        }
                    }
                }
            } 
        case 3:
            for (k = 0; k < sameTagArray.length-2; k++) {
                for (i = k+1; i < sameTagArray.length-1; i++) {
                    for (j = i+1; j < sameTagArray.length; j++) {
                        var buffer = [[]];
                        buffer[0].push(sameTagArray[k]);
                        buffer[0].push(sameTagArray[i]);
                        buffer[0].push(sameTagArray[j]);
                        mixArray.push(buffer[0]);
                    }
                }
            }
        case 2:
            for (i = 0; i < sameTagArray.length-1; i++) {
                for (j = i+1; j < sameTagArray.length; j++) {
                    var buffer = [[]];
                    buffer[0].push(sameTagArray[i]);
                    buffer[0].push(sameTagArray[j]);
                    mixArray.push(buffer[0]);
                }
            }
        case 1:
            //1
            for (i in sameTagArray) {
                var buffer = [[]];
                buffer[0].push(sameTagArray[i]);
                mixArray.push(buffer[0]);
            }
        case 0:
            //쟌넨
    }
    var mixArray3 = [];
    for(i in mixArray) {
        var flag2 = 0;
        var buffer = [[]];
        var mixArray2 = [[]];
        for(j in resultArray) {
            for(l in mixArray[i]) {
                if(resultArray[j][1].indexOf(mixArray[i][l]) == -1) {
                    break;
                }
                if(mixArray[i].length == Number(l)+1) {
                    buffer[0].push(resultArray[j][0][1]);
                    flag2 += 1;
                } 
            }
        }
        if(flag2) {
            mixArray2[0].push(mixArray[i]);

            //buffer[0]을 캐릭터 등급으로 분리

            mixArray2[0].push(buffer[0]);
            mixArray3.push(mixArray2[0]);
        }

    }
    makeOutputDiv(mixArray3);
}

function charStar(charName) {
    for(z in combinationDB) {
        if(combinationDB[z][1] == charName) {
            return combinationDB[z][0];
        }
    } 
}

function makeOutputDiv(array) {
    for(i in array) {
        var arrayIndex = i;

        /* 껍데기 만들기*/
        var outputDiv = document.createElement("div");
        outputDiv.className = "outputDiv" + arrayIndex;
        outputDiv.style.display = "flex";
        outputDiv.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
        outputDiv.style.borderRadius = "11px";
        outputDiv.style.paddingTop = "12px";
        outputDiv.style.paddingBottom = "12px";
        outputDiv.style.flexDirection = "column";
        outputDiv.style.textAlign = "left";
        outputDiv.style.paddingLeft = "15px";
        outputDiv.style.paddingRight = "15px";
        outputDiv.style.marginBottom = "12px";
        var body = document.getElementById("outputArea");
        body.appendChild(outputDiv);

        var CondDiv = document.createElement("div");
        CondDiv.className = "CondDiv" + arrayIndex;
        var body = document.getElementsByClassName("outputDiv" + arrayIndex)[0];
        body.appendChild(CondDiv);

        var CondResultDiv = document.createElement("div");
        CondResultDiv.className = "CondResultDiv" + arrayIndex;
        CondResultDiv.style.display = "flex";
        CondResultDiv.style.flexWrap = "wrap";
        var body = document.getElementsByClassName("outputDiv" + arrayIndex)[0];
        body.appendChild(CondResultDiv);


        /* 조건(제목) 넣어주기 */
        for(j=0; j<array[i][0].length; j++) {
            var outputCond = document.createElement("span");
            outputCond.className = ("outputCond" + arrayIndex);
            outputCond.innerHTML = array[i][0][j];
            outputCond.style.paddingRight = "8px";
            outputCond.style.opacity = "0.6";
            var body = document.getElementsByClassName("CondDiv" + arrayIndex)[0];
            body.appendChild(outputCond);
        }

        /* 결과(내용) 넣어주기 */
        for(j=0; j<array[i][1].length; j++) {
            var outputResult = document.createElement("span");
            outputResult.className = ("outputResult" + arrayIndex);
            outputResult.innerHTML = array[i][1][j];
            var charStar2 = charStar(array[i][1][j]);
            console.log(charStar2);
            switch(Number(charStar2)) {
                case 1:
                    outputResult.style.color = "rgb(255, 255, 255)";
                    break;
                case 2:
                    outputResult.style.color = "rgb(157, 255, 17)";
                    break;
                case 3:
                    outputResult.style.color = "rgb(86, 142, 255)";
                    break;
                case 4:
                    outputResult.style.color = "rgb(199, 90, 255)";
                    break;
                case 5:
                    outputResult.style.color = "rgb(255, 210, 17)";
                    break;
                case 6:
                    outputResult.style.color = "rgb(255, 78, 17)";
                    break;
            }
            outputResult.style.fontSize = "17px";
            outputResult.style.fontWeight = "bold";
            outputResult.style.paddingRight = "8px";
            var body = document.getElementsByClassName("CondResultDiv" + arrayIndex)[0];
            body.appendChild(outputResult);
        }
    }
}