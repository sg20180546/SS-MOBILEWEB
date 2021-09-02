
CLIENT_ID='702855654476-1ukct5oerheiri709hg6o81g6sdejgi7.apps.googleusercontent.com'

CLIENT_SECRET='7qqZAW3mk1p1m1cz2k81wq9D'

REFRESH_TOKEN='1//0enNXREAHoIYJCgYIARAAGA4SNwF-L9Ir4RoUcuLRQtEnHqpqovklBf9aMjwkVldqsQhDzY-XC3lGgHjvcjCydspPw71OPFpPXos'

EXTENSION_ID='ckdohophommpcidkmlcgofdnhkcogfel'
curl "https://accounts.google.com/o/oauth2/token" -d "client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token&redirect_uri=urn:ietf:wg:oauth:2.0:oob"

# jq: command not found
ACCESS_TOKEN=$(curl "https://accounts.google.com/o/oauth2/token" -d "client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&refresh_token=${REFRESH_TOKEN}&grant_type=refresh_token&redirect_uri=urn:ietf:wg:oauth:2.0:oob"  |jq .access_token)


curl -H "Authorization: Bearer ${ACCESS_TOKEN}" -H "x-goog-api-version: 2" -X PUT -T extension.zip -v "https://www.googleapis.com/upload/chromewebstore/v1.1/items/${EXTENSION_ID}"


curl -H "Authorization: Bearer ${ACCESS_TOKEN}" -H "x-goog-api-version: 2" -H "Content-Length: 0" -X POST -v "https://www.googleapis.com/chromewebstore/v1.1/items/${EXTENSION_ID}/publish"



# curl -H "Authorization: Bearer ${ACCESS_TOKEN}" -H "x-goog-api-version: 2" -X PUT -T extension.zip -v "https://www.googleapis.com/uploa
# curl -H "Authorization: Bearer ${ACCESS_TOKEN}" -H "x-goog-api-version: 2" -H "Content-Length: 0" -X POST -v "https://www.googleapis.com/chromewebstore/v1.1/items/${EXTENSION_ID}/publish"