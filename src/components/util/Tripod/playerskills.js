export const playerskills = (() => {
    const getSkill = (id) => {
        return SKILL[id];
    }

    return {
        getSkill,
    };
})();


//id로?
const SKILL = [
    {
        "아래는 각 직업의 스킬들입니다. 스킬명 : level":0,
    },

    {
        "나선의 2":0,
        "포커스 샷":0,
    },

    {
        "나선의 3":0,
        "포커스 샷":0,
    },

]