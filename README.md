# 밥먹자 (BapMeokJa)

> 자취생의 식사 일상을 기록하고 관리할 수 있는 귀엽고 직관적인 웹 플랫폼입니다.  
> 사진과 함께 식사 일기를 남기고, 나중에 다시 꺼내볼 수 있는 ‘나만의 식사 다이어리’를 만드는 개인 프로젝트입니다.

---

## 주요 기능

- **회원가입 / 로그인**

  - `localStorage` 기반 간단한 사용자 인증
  - 로그인 유지 및 사용자별 식사 기록 관리

- **식사 기록 (집밥 일기)**

  - 식사 사진 업로드
  - 텍스트 일기 작성
  - 기록 수정 / 삭제 / 리스트 보기
  - 상세 조회

- **UX/UI 기획**
  - 감성적인 디자인과 직관적인 인터페이스
  - 화면 흐름 자체 설계 및 스타일링

---

## 기술 스택

- **HTML5 / CSS3 / JavaScript**
- **localStorage**: 인증 및 데이터 저장 (DB 없이 구현)
- **Vanilla JS 기반 구조**
- **모바일 최적화 (진행 예정)**

---

## 프로젝트 구조

```
BabMeockJa_PROJECT/
├── public/
│   ├── css
│   ├── font
│   ├── img
│   └── js
│       ├── auth             # 로그인/회원가입 로직
│       ├── json             # user.json 등 테스트용 데이터
│       ├── services
│       │   ├── mainBoard    # 메인 게시판 관련 JS
│       │   ├── userBoard    # 식사 기록 CRUD 관련 JS
│       │   ├── userProfile  # 마이페이지, 유저 수정 등 관련 JS
│       └── utils            # 색상 바꾸기 등 공통 유틸
│
├── userBoard/
│   ├── create.html          # 글쓰기
│   ├── list.html            # 식사 기록 리스트
│   ├── modify.html          # 식사 기록 수정
│   └── view.html            # 식사 기록 상세 보기
│
├── userProfile/
│   ├── modify.html          # 내 정보 수정
│   ├── mypage.html          # 마이페이지
│   └── view.html            # 내 정보 상세 보기
│
├── index.html               # 로그인
└── login.html                # 홈 페이지


```

---

## 이슈 및 개선 예정

- **localStorage 인증의 보안 및 다중 사용자 구조 한계**
- **모듈화 부족 → JS 코드가 HTML과 뒤섞여 있음**
- **예외처리 부족** → try/catch 및 사용자 피드백 부족
- **테스트 미흡**

---

## 향후 개선 계획

- Firebase 혹은 Supabase 도입으로 DB 및 인증 구조 고도화
- JS 모듈화 및 구조 리팩토링
- 반응형 웹 + 모바일 대응
- 메뉴 추천 기능: 카테고리 기반 or 랜덤 추천
- 장보기 체크리스트 기능 도입 예정
