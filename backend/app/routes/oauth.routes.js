module.exports = (app) => {
  const passport = require("passport");
  const oauth = require("../controllers/oauth.controller.js");

  var router = require("express").Router();

  /**
   * @swagger
   * definitions:
   *   Oauth:
   *     type: object
   *     required:
   *       - email
   *       - password
   *     properties:
   *       email:
   *         type: string
   *       password:
   *         type: string
   *   User:
   *     type: object
   *     required:
   *       - email
   *       - password
   *       - username
   *       - firstname
   *       - lastname
   *       - languege
   *       - country
   *     properties:
   *       email:
   *         type: string
   *       password:
   *         type: string
   *       username:
   *         type: string
   *       firstname:
   *         type: string
   *       lastname:
   *         type: string
   *       languege:
   *         type: string
   *       country:
   *         type: string
   *   ResOauth:
   *     type: object
   *     properties:
   *       token:
   *         type: string
   *       refreshToken:
   *         type: string
   *   ResUser:
   *     type: object
   *     properties:
   *       id:
   *         type: number
   *       email:
   *         type: string
   *       username:
   *         type: string
   *       firstname:
   *         type: string
   *       lastname:
   *         type: string
   *       languege:
   *         type: string
   *       country:
   *         type: string
   *       createdAt:
   *         type: string
   *       updateAt:
   *         type: string
   */

  /**
   * @swagger
   * tags:
   *   name: Oauth
   *   description: 인증
   */

  /**
   * @swagger
   * /api/oauth/login:
   *   post:
   *     summary: AccessToken 발급
   *     description: AccessToken 발급
   *     tags: [Oauth]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: param
   *         description: param
   *         in: body
   *         required: true
   *         schema:
   *           $ref: '#/definitions/Oauth'
   *     responses:
   *       200:
   *         description: OK
   *         schema:
   *           $ref: '#/definitions/ResOauth'
   *       201:
   *         $ref: '#/components/res/Created'
   *       204:
   *         $ref: '#/components/res/NoContent'
   *       400:
   *         $ref: '#/components/res/BadRequest'
   *       401:
   *         $ref: '#/components/res/Unauthorized'
   *       404:
   *         $ref: '#/components/res/NotFound'
   *       409:
   *         $ref: '#/components/res/Conflict'
   *       500:
   *         $ref: '#/components/res/InternalServerError'
   */

  router.post("/login", oauth.create);

  /**
   * @swagger
   * /api/oauth/me:
   *   get:
   *     summary: Token 회원 조회
   *     description: Token 회원 조회
   *     tags: [Oauth]
   *     produces:
   *       - application/json
   *     parameters:
   *       - name: email
   *         description: email
   *         in: query
   *       - name: page
   *         description: page
   *         in: query
   *       - name: size
   *         description: size
   *         in: query
   *     responses:
   *       200:
   *         description: OK
   *         schema:
   *           type: array
   *           items:
   *             $ref: '#/definitions/ResUser'
   *       201:
   *         $ref: '#/components/res/Created'
   *       204:
   *         $ref: '#/components/res/NoContent'
   *       400:
   *         $ref: '#/components/res/BadRequest'
   *       401:
   *         $ref: '#/components/res/Unauthorized'
   *       404:
   *         $ref: '#/components/res/NotFound'
   *       409:
   *         $ref: '#/components/res/Conflict'
   *       500:
   *         $ref: '#/components/res/InternalServerError'
   */
  router.get(
    "/me",
    passport.authenticate("jwt", { session: false }),
    oauth.findOne
  );

  app.use("/api/oauth", router);
};
