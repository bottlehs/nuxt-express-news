module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("faqs", {
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

  return Tutorial;
};
