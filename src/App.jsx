import Main from "./components/Main";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const initKakao = () => {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init(process.env.REACT_APP_KAKAO_TOKEN);
        } else {
          kakao.Share.createDefaultButton({
            container: "#kakao-link-btn",
            objectType: "location",
            address: "서울시 중구 마른내로 71",
            addressTitle: "PJ호텔 1층 뮤즈홀",
            content: {
              title: "현명과 수민의 결혼식에 초대합니다.",
              description: "2022년 12월 10일(토) 11시 30분",
              imageUrl:
                  "https://hmsm-wedding.github.io/invitation/images/thumb/12.jpg",
              link: {
                mobileWebUrl: "https://hmsm-wedding.github.io/invitation",
                webUrl: "https://hmsm-wedding.github.io/invitation",
              },
            },
            buttons: [
              {
                title: "청첩장 보기",
                link: {
                  mobileWebUrl: "https://hmsm-wedding.github.io/invitation",
                  webUrl: "https://hmsm-wedding.github.io/invitation",
                },
              },
            ],
          });
        }
      }
    };
    try {
      initKakao(); // 카카오 계정 초기화
    } catch (err) {
      this.errorCatch(err);
    }
  }, []);

  return <Main />;
};

export default App;
