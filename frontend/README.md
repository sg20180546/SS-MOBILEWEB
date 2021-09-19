2021.09.18 README

1. https://console.cloud.google.com/apis/
구글 클라우드 콘솔에서 "데스크톱 클라이언트"에서 "CLIENT ID" 와 "CLIENT SECRET"을 얻을수 있습니다

2. https://accounts.google.com/o/oauth2/auth?response_type=code&scope=https://www.googleapis.com/auth/chromewebstore&client_id=$CLIENT_ID&redirect_uri=urn:ietf:wg:oauth:2.0:oob
위 URL에서 client ID와 client secret을 파라미터로 authorization code를 얻을 수 있습니다

3. curl "https://accounts.google.com/o/oauth2/token" -d \"client_id=$CLIENT_ID&client_secret=$CLIENT_SECRET&code=$CODE&grant_type=authorization_code&redirect_uri=urn:ietf:wg:oauth:2.0:oob"
refresh token을 얻을수 있습니다

4. CLIENT ID, CLIENT SECRET, EXTENSION ID(서담서치 웹스토어 주소 마지막 32개), Refresh Token이 준비되었습니다(현재 deploy shell에 저장되어있음)
4가지 정보로 Access token을 가져와서 웹 스토어에 extension.zip을 upload하고 publish 합니다

5. 위 4가지 과정은 모두 bash shell에서(window인 경우 bash shell로 해야함) npm run deploy "{newVersion}" 로 실행됩니다 build -> zip -> deploy

6. 현재 npm run deploy의 parameter가 없으면 manifest version이 업데이트 되지 않은채로 배포까지 진행되는 issue가 있습니다. window 환경의 git bash에서 basic caculator가 사용이 안되서,
이후 리눅스 환경에서 픽스되야할듯합니다
