# Simple Kakao And Naver OAuth 2.0 (REST API)

Make Simple Kakao And Naver Oauth 2.0 with Kakao And Naver REST API 

## What is inside?

- [SvelteKit](https://kit.svelte.dev/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

## Getting Start

1. set `.env` file

Check REST API URL, Redirect URI and Your REST API KEY in Kakao developers page and Write in `.env` file

```
PUBLIC_KAKAO_OAUTH_AUTHORIZE_URL=https://kauth.kakao.com/oauth/authorize/   // Authorize REST API URL
PUBLIC_KAKAO_OAUTH_TOKEN_URL=https://kauth.kakao.com/oauth/token            // Token REST API URL
PUBLIC_KAKAO_OAUTH_LOGOUT_URL=https://kauth.kakao.com/oauth/logout          // Logout REST API URL
PUBLIC_KAKAO_USER_INFO_URL=https://kapi.kakao.com/v2/user/me                // Get User Info REST API URL

PUBLIC_NAVER_OAUTH_AUTHORIZE_URL=https://nid.naver.com/oauth2.0/authorize   // Authorize REST API URL
PUBLIC_NAVER_OAUTH_TOKEN_URL=https://nid.naver.com/oauth2.0/token           // Token REST API URL
PUBLIC_NAVER_USER_INFO_URL=	https://openapi.naver.com/v1/nid/me             // Get User Info REST API URL

PUBLIC_KAKAO_REDIRECT_URI=${Your KaKao Redirect URI}                        // Setting Kakao Redirect URI
PUBLIC_NAVER_REDIRECT_URI=${Your Naver Redirect URI}                        // Setting Naver Redirect URI
PUBLIC_LOGOUT_REDIRECT_URI=${Your Logout Redirect URI}                      // Setting Logout Redirect URI

PUBLIC_KAKAO_CLIENT_ID=${Your Kakao REST API KEY}                           // Setting Your Kakao REST API KEY
PUBLIC_NAVER_CLIENT_ID=${Your Naver Client id}                              // Setting Your Naver Client Id
PUBLIC_NAVER_CLIENT_SECRET=${Your Naver Client secret}                      // Setting Your Naver Client secret
```

2. Install Tech & Run development server

```shell
npm install
npm run dev
```
Open http://localhost:8080 with your browser to see the result.

If you need more imformation please enter my Blog :)

BlogLink:
- 개념: https://gwpaeng.tistory.com/454
- 구현: https://gwpaeng.tistory.com/455
