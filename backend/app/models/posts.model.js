module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define("posts", {
    // 회원식별자    
    usersId: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
    },
    // 제목    
    title: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    // 내용
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    // 요약 내용    
    summary: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    // 썸네일 이미지
    thumbnail: {
      type: Sequelize.STRING(100),      
      type: Sequelize.TEXT,
      allowNull: false,
    },
    // 오디오
    audio: {
      type: Sequelize.STRING(100),      
      type: Sequelize.TEXT,
      allowNull: false,
    },
    // 태그  
    tag: {
      type: Sequelize.TEXT,
      allowNull: false,
    },    
    // 상태
    status: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "publish",
    },
    // 댓글 허용 상태
    commentsStatus: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "open",
    },
    // 게시물 유형
    type: {
      type: Sequelize.STRING(20),
      allowNull: false,
      defaultValue: "post",
    },
    // 댓글 개수
    commentsCount: {
      type: Sequelize.BIGINT(20),
      allowNull: false,
      defaultValue: 0,
    },
    // 아이피 주소
    ipAddress: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
  });

  return Post;
};
