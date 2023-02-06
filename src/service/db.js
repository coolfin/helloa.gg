const delayedResolve = (data) =>
  new Promise((resolve, reject) => setTimeout(() => resolve(data), 250));

const hellUserBuild = (() => {
  const generateHellUser = () => {
    return {
      ValtanClear: 0,
      VyakissClear: 0,
      SatonClear: 0,
      AbrelClear: 0,
      // hellTotalClear: ValtanClear+VyakissClear+SatonClear+AbrelClear
    };
  };

  return {
    generateHellUser,
  };
})();

//훈서가 넘겨줘야됨

const users = [
  {
    nickname: '8un',
    password: '1234',
    job: 'gunslinger',
    jobname: '건슬링어',
    ValtanClear: 15,
    VyakissClear: 11,
    SatonClear: 4,
    AbrelClear: 0,
  },

  {
    nickname: '쿨핀',
    password: 'test',
    job: 'striker',
    jobname: '스트라이커',
    ValtanClear: 22,
    VyakissClear: 30,
    SatonClear: 16,
    AbrelClear: 1,
  },

  {
    nickname: '폰동규',
    password: '1234123',
    job: 'gunslinger',
    jobname: '건슬링어',
    ValtanClear: 1,
    VyakissClear: 0,
    SatonClear: 0,
    AbrelClear: 0,
  },

  {
    nickname: '예롬',
    password: 'test',
    job: 'bard',
    jobname: '바드',
    ValtanClear: 0,
    VyakissClear: 0,
    SatonClear: 0,
    AbrelClear: 0,
  },

  {
    nickname: '권은비',
    password: '11',
    job: 'glaivier',
    jobname: '창술사',
    ValtanClear: 1,
    VyakissClear: 0,
    SatonClear: 0,
    AbrelClear: 0,
  },

  {
    nickname: 'PSGLeoMessi',
    password: 'test',
    job: 'scouter',
    jobname: '스카우터',
    ValtanClear: 0,
    VyakissClear: 0,
    SatonClear: 0,
    AbrelClear: 0,
  },
];

export const db = (() => {
  const getUsers = () =>
    //비밀번호 제외하고 유저 정보 가져오기
    delayedResolve(users.map(({ password, ...rest }) => rest));

  const addUser = (nickname, password) => {
    const foundUser = users.find((user) => user.nickname === nickname);
    //중복체크
    if (foundUser) {
      throw new Error('이미 존재하는 이메일 입니다.');
    }

    const newUser = {
      nickname,
      password,
      ...hellUserBuild.generateHellUser(),
    };

    users.push(newUser);

    return delayedResolve(newUser);
  };

  const findUser = (nickname, password) => {
    const foundUser = users.find((user) => user.nickname === nickname);

    if (!foundUser) {
      throw new Error('없는 회원정보 입니다.');
    }

    if (foundUser.password !== password) {
      throw new Error(
        '아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.'
      );
    }

    return delayedResolve(foundUser);
  };

  return {
    getUsers,
    addUser,
    findUser,
  };
})();
