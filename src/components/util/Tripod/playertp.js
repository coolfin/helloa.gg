
export class PlayerTripod {
  static getTripod(id, sk) {
    // 스킬의 인덱스를 받아오면 각 트라이포드 리턴
    const res = TP[id - 1];
   // console.log("res", res[sk]);

    const tpset = [];
    res[sk]?.map((v) => {
      tpset.push([v["name"],v["content"],v["isFive"]]);
      //console.log("inner map : ",tpset);
    })
    return tpset;
  }
}

//TP[i] -> 직업별 스킬 반환
const TP = [
  {
    "날카로운 창": [
      {
        name: "진격",
        isFive: false,
        content: "3.0m 가량 전진한 후 부채꼴 모양으로 공격한다.",
      },

      {
        name: "관통",
        isFive: false,
        content: "찌르는 공격의 폭이 30.0% 좁아지지만 40.0% 더 멀리 찌른다.",
      },

      {
        name: "대회전",
        isFive: false,
        content: "창을 머리 위로 크게 휘둘러 360도 공격을 한다.",
      },
      {
        name: "상처",
        isFive: true,
        content:
          "적중된 적을 4.0초 동안 출혈 상태로 만들어 매 초마다 32의 피해를 준다.",
      },
      {
        name: "무방비 표적",
        isFive: true,
        content: "기절 혹은 무력화 상태의 적에게 80.0% 증가된 피해를 준다.",
      },
      {
        name: "변칙 공격",
        isFive: false,
        content: "공격시 더 이상 적을 밀어내지 않고 오히려 끌어당긴다.",
      },
      {
        name: "멈추지 않는 창격",
        isFive: true,
        content:
          "콤보 조작으로 변경되며 한 번 더 공격하여 145.0%의 추가 피해를 입힌다.",
      },
      {
        name: "창격 강화",
        isFive: true,
        content:
          "공격 길이가 30.0% 증가하고 적에게 주는 피해가 80.0% 증가된다.",
      },
    ],
    "라이징 스피어": [
      {
        name: "돌진",
        isFive: true,
        content: "돌진에 대한 설명",
      },
      {
        name: "빠른 준비",
        isFive: false,
        content: "빠른 준비에 대한 설명",
      },
      {
        name: "기습공격",
        isFive: false,
        content: "기습공격에 대한 설명",
      },
      {
        name: "강화된 일격",
        isFive: true,
        content: "강화된 일격에 대한 설명",
      },
      {
        name: "화염창",
        isFive: true,
        content: "화염창에 대한 설명",
      },
      {
        name: "낙뢰",
        isFive: false,
        content: "낙뢰에 대한 설명",
      },
      {
        name: "대지파편",
        isFive: true,
        content: "대지파편에 대한 설명",
      },
      {
        name: "연쇄폭발",
        isFive: true,
        content: "연쇄폭발에 대한 설명",
      },
    ],
  },
  {},
  {},
];
