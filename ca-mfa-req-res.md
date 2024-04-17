`https://ca-dev.ictk.com/kms/admin/public/login/req`


```
{
  header: {
    trId: "020002"
  },
  body: {
    userId: "jeehay",
    uuid: "213ffe25037499b220c47602377147915289b304d765db4943d9c8b92d960a22",
    passwordHash: "21c7ac9f6b23d319b82f424dc325e0091532f997a63001871f6b80b73cdc5c35937078e1468133ba2ebab52ce598a1c527c093fd8053b77cdb7aa2faa68b1179"
  }
}

```



```
{
    "header": {
        "trId": "020002",
        "rtnCode": "020011",
        "rtnMessage": "사용자 정보가 없거나, 인증정보가 일치하지 않습니다.(020011)"
    },
    "body": {
        "sessionId": "d5a82cd087aed98942a9f0e04b3435d9423a38bd827fda6f4c83cf11c2116ef0",
        "mfa": {
            "challenge": null,
            "sessionId": null,
            "mfaOption": 0,
            "token": null
        },
        "token": null,
        "sessionKey": null,
        "userInfo": {
            "userId": "jeehay",
            "userName": null,
            "userLevel": null,
            "failCnt": 3,
            "status": "ACTIVE",
            "email": "jhpark@ictk.com"
        },
        "menuPolicies": [
            {
                "id": "010000",
                "name": "대쉬보드",
                "isAccess": true
            },
            {
                "id": "020000",
                "name": "사용자관리",
                "isAccess": true
            },
            {
                "id": "020001",
                "name": "사용자 목록",
                "isAccess": true
            },
            {
                "id": "020100",
                "name": "사용자 그룹",
                "isAccess": true
            },
            {
                "id": "030000",
                "name": "키관리",
                "isAccess": true
            },
            {
                "id": "030001",
                "name": "마스터키",
                "isAccess": true
            },
            {
                "id": "030100",
                "name": "시스템키",
                "isAccess": true
            },
            {
                "id": "100000",
                "name": "인증서",
                "isAccess": true
            },
            {
                "id": "100001",
                "name": "인증서 관리",
                "isAccess": true
            },
            {
                "id": "100002",
                "name": "인증서 발급",
                "isAccess": true
            },
            {
                "id": "040000",
                "name": "접근통제",
                "isAccess": true
            },
            {
                "id": "050000",
                "name": "감사로그",
                "isAccess": true
            },
            {
                "id": "060000",
                "name": "엑세스키",
                "isAccess": false
            },
            {
                "id": "070000",
                "name": "PC AGENT 관리",
                "isAccess": true
            },
            {
                "id": "080000",
                "name": "설정",
                "isAccess": true
            }
        ],
        "isChangePassword": false
    }
}





```
{
  header: {
    trId: "020002"
  },
  body: {
    userId: "admin",
    uuid: "d5c50d872647bd836fd3ebc207333a6458208c7837d6e14048de567c5cfbc7f3",
    passwordHash: "bdb78ac9864fb550e6c18c78e485edffa72e87c6e6d0d151ecd7e178e5ba371a1419c52848a68a5d64b75d000f5467d559bf65078f77edc4484d525a00a23167"
  }
}


```

`https://ca-dev.ictk.com/kms/admin/public/login/req`

```
{
    "header": {
        "trId": "020002",
        "rtnCode": "000000",
        "rtnMessage": "성공입니다."
    },
    "body": {
        "sessionId": "64989dbdcec813ecaaa53fc1fa010bc420cf090b39fa7bdd1d1fdd154ae33f36",
        "mfa": {
            "challenge": null,
            "sessionId": null,
            "mfaOption": 0,
            "token": null
        },
        "token": {
            "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJpc3MiOiJJQ1RLIiwiUkVHX0RBVEUiOjE3MTIyNzY3MjYsIlVTRVJfSUQiOiJhZG1pbiIsIkFDQ0VTU19MRVZFTCI6IkFETUlOX0NPTlNPTEUiLCJTRVNTSU9OX0lEIjoiNjQ5ODlkYmRjZWM4MTNlY2FhYTUzZmMxZmEwMTBiYzQyMGNmMDkwYjM5ZmE3YmRkMWQxZmRkMTU0YWUzM2YzNiIsImV4cCI6MTcxMjI4MzkyNiwiU0VRIjoiMjc0NGExY2U1NThhNjk2MjAwN2M3MGRhYTk4YWE3OGU3Zjc3ZDUwNmQyOThhOGIyM2UyZTI0Y2JiODdmNzAzNiIsIlVTRVJfTEVWRUwiOiJVU0VSIn0.gCI9IAPP2VYaYeIvC1IS0xwZ9jIwMQsmP51ByEssegtMWMsTBaYyv1AEPyLbMa1JF_xyn7-LPTqWtrd2H6pf8g",
            "expired": "1712283926872",
            "expiredCount": "7200"
        },
        "sessionKey": "fcb28e686bc505a292a2eb85197d9be04c73f9dde0964dd552b742a79224f5f4",
        "userInfo": {
            "userId": "admin",
            "userName": "ADMIN",
            "userLevel": "USER",
            "failCnt": 0,
            "status": "ACTIVE",
            "email": "test1@ictk.com"
        },
        "menuPolicies": [
            {
                "id": "010000",
                "name": "대쉬보드",
                "isAccess": true
            },
            {
                "id": "020000",
                "name": "사용자관리",
                "isAccess": true
            },
            {
                "id": "020001",
                "name": "사용자 목록",
                "isAccess": true
            },
            {
                "id": "020100",
                "name": "사용자 그룹",
                "isAccess": true
            },
            {
                "id": "030000",
                "name": "키관리",
                "isAccess": true
            },
            {
                "id": "030001",
                "name": "마스터키",
                "isAccess": true
            },
            {
                "id": "030100",
                "name": "시스템키",
                "isAccess": true
            },
            {
                "id": "100000",
                "name": "인증서",
                "isAccess": true
            },
            {
                "id": "100001",
                "name": "인증서 관리",
                "isAccess": true
            },
            {
                "id": "100002",
                "name": "인증서 발급",
                "isAccess": true
            },
            {
                "id": "040000",
                "name": "접근통제",
                "isAccess": true
            },
            {
                "id": "050000",
                "name": "감사로그",
                "isAccess": true
            },
            {
                "id": "060000",
                "name": "엑세스키",
                "isAccess": false
            },
            {
                "id": "070000",
                "name": "PC AGENT 관리",
                "isAccess": true
            },
            {
                "id": "080000",
                "name": "설정",
                "isAccess": true
            }
        ],
        "isChangePassword": false
    }
}


```
