export class PlayerSkill {
  static getSkill(id) {
    return SKILL[id - 1];
  }
}

//id로?
const SKILL = [
  // '아래는 각 직업의 스킬들입니다. id: 스킬명': 0,
  [
    "날카로운 창",
    "라이징 스피어",
    "파이어 불릿",
    "대쉬 어퍼 파이어",
    "차지 스팅거",
    "카운터 스피어",
  ],

  ["나선의 3", "포커스 샷"],
];
