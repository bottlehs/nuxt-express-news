module.exports = (sequelize, Sequelize) => {
  const Inquire = sequelize.define("inquires", {
    // 회원 식별자
    usersId: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    // 제목    
    title: {
      type: Sequelize.TEXT,
      allowNull: false,
    },    
    // 질문 내용
    question: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    // 답변 내용
    answer: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    // 상태
    status: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "publish",
    },
    // 아이피 주소
    ipAddress: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },    
  });

  return Inquire;
};
