# Simple Kakao OAuth 2.0 (REST API)

Make Simple Kakao Oauth 2.0 with Kakao REST API 

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

PUBLIC_RESULT_REDIRECT_URI=http://localhost:8080/login_result               // Setting Redirect URI
PUBLIC_LOGOUT_REDIRECT_URI=http://localhost:8080/                           // Setting Logout Redirect URI
PUBLIC_REST_API_KEY=${Your REST API KEY}                                    // Setting Your REST API KEY
```

2. Install Tech & Run development server

```shell
npm install
npm run dev
```
Open http://localhost:8080 with your browser to see the result.

If you need more imformation please enter my Blog :)

BlogLink: https://gwpaeng.tistory.com/454
