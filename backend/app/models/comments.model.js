module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comments", {
    // 게시물 식별자
    postsId: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    // 회원 식별자
    usersId: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    // 부모 댓글 식별자
    parent: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    // 댓글 내용
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    // 상태
    status: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "publish",
    },    
    // 댓글 유형
    type: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "comment",
    },
    // 아이피
    ipAddress: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
  });

  return Comment;
};
