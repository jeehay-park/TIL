let menuPolicies = [
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
]


const arr = menuPolicies.filter(obj => obj.id === "010000")[0];

console.log(arr)



const dashboard = sidebarMenu.filter((obj: {id: string} ) => obj.id === "010000")[0];
const userMain = sidebarMenu.filter((obj: {id: string} ) => obj.id === "020000")[0];
const user = sidebarMenu.filter((obj: {id: string} ) => obj.id === "020001")[0];
const userGroup = sidebarMenu.filter((obj: {id: string} ) => obj.id === "020100")[0];
const keyMain = sidebarMenu.filter((obj: {id: string} ) => obj.id === "030000")[0];
const masterKey = sidebarMenu.filter((obj: {id: string} ) => obj.id === "030001")[0];
const systemKey = sidebarMenu.filter((obj: {id: string} ) => obj.id === "030100")[0];
const certMain = sidebarMenu.filter((obj: {id: string} ) => obj.id === "100000")[0];
const certMgr = sidebarMenu.filter((obj: {id: string} ) => obj.id === "100001")[0];
const certGeneration = sidebarMenu.filter((obj: {id: string} ) => obj.id === "100002")[0];
const accessControl = sidebarMenu.filter((obj: {id: string} ) => obj.id === "040000")[0];
const auditLog = sidebarMenu.filter((obj: {id: string} ) => obj.id === "050000")[0];
const pcAgent = sidebarMenu.filter((obj: {id: string} ) => obj.id === "070000")[0];
const setting = sidebarMenu.filter((obj: {id: string} ) => obj.id === "080000")[0];