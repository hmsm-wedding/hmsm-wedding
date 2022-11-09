import "../App.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ModalPortal from "./ModalPortal";
import Album from "./Album";
import { useState } from "react";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoNo, setPhotoNo] = useState(0);
  const showAlbum = (no) => {
    setPhotoNo(no);
    setIsOpen(true);
  };
  return (
    <div>
      <Invitation />
      {/*<p>Message</p><br/>*/}
      {/*<Message/>*/}
      {isOpen && (
        <ModalPortal>
          <Album handleClose={() => setIsOpen(false)} />
        </ModalPortal>
      )}
      <Location />
      <Film />
      <Gallery showAlbum={showAlbum} photoNo={photoNo} />
      <Information />
      <Share />
    </div>
  );
};

const isMobile = () => {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

const Message = () => {
  return (
    <>
      <div>
        한 겨울에 얇은 드레스를 입고 <br />
        그마저 찍은 필름은 초점이 나가고 <br />
        이렇게 모든게 어설픈 우리지만, <br />
        <br />
        상대방의 미소를 보려 면사포를 쓰고 <br />
        서로에게 기쁨이 되려 춤을 추던 <br />
        그 마음으로 평생 아끼며 살겠습니다. <br />
        <br />
        따뜻한 봄이 다가오던 겨울 끝자락에 처음 만나 <br />
        포근한 겨울이 시작되는 12월에 부부가 됩니다. <br />
        함께 축복해주세요. <br />
      </div>
    </>
  );
};

const ImageUrl = process.env.PUBLIC_URL + "/images/";
// const ImageUrl = + "/images/";

const Invitation = () => {
  return (
    <div className="section invitation">
      <div className="title">
        <div className="icon">
          <img src={ImageUrl + "heart.png"} alt="하트" />
        </div>
        <div className="wedding">결혼합니다</div>
        <div className="names">
          <p>현명</p>
          <p>
            <img src={ImageUrl + "star.png"} alt="별" />
          </p>
          <p>수민</p>
        </div>
        <div className="schedule">
          <p> 2022.12.10. </p>
          <p>11:30AM</p> <br />
          <p> PJ호텔 뮤즈홀 </p>
        </div>
      </div>
      <div className="illust">
        <img src={ImageUrl + "illust.png"} alt="웨딩사진" />
      </div>
    </div>
  );
};

const Location = () => {
  const hotel = {
    lat: 37.564321832,
    lng: 126.99576693,
    name: encodeURI("pj호텔"),
  };
  const parking = {
    lat: 37.56577149,
    lng: 126.99755172,
    name: encodeURI("을지트윈타워"),
  };

  const handleClick = ({ place, service, type }) => {
    if (!isMobile()) return alert("모바일에서만 지원합니다");
    if (service === "kakao") {
      return `kakaomap://route?&ep=${place.lat},${place.lng}3&by=${type}`;
    }
    if (service === "naver") {
      return `nmap://route/public?dlat=${place.lat}&dlng=${place.lng}&dname=${place.name}`;
    }
    if (service === "tmap") {
      return `tmap://search?name=${place.name}`;
    }
  };

  return (
    <div className="section location">
      <div className="contents">
        <p className="main-title">Location</p>
        <div className="hotel-address">
          <p>서울시 중구 마른내로 71</p>
          <p>PJ호텔 1층 뮤즈홀</p>
        </div>
        <div className="route">
          <a
            href={`nmap://route/public?dlat=${hotel.lat}&dlng=${hotel.lng}&dname=${hotel.name}`}
          >
            <img />
            <p>네이버</p>
          </a>
          <a
            href={`kakaomap://route?&ep=${hotel.lat},${hotel.lng}&by=PUBLICTRANSIT`}
          >
            <img />
            <p>카카오</p>
          </a>
        </div>

        <div className="map">
          <img src={ImageUrl + "map.png"} alt="map" loading="lazy" />
        </div>

        <p className="sub-title">주차</p>

        <div className="parking-address">
          <p>서울시 중구 을지로 170 을지트윈타워</p>
        </div>
        <div className="route">
          <a href={`tmap://search?name=${parking.name}`}>
            <img />
            <p>티맵</p>
          </a>
          <a
            href={`nmap://route/car?dlat=${parking.lat}&dlng=${parking.lng}&dname=${parking.name}`}
          >
            <img />
            <p>네이버</p>
          </a>
          <a href={`kakaomap://route?&ep=${parking.lat},${parking.lng}&by=CAR`}>
            <img />
            <p>카카오</p>
          </a>
        </div>
      </div>
    </div>
  );
};

const Film = () => {
  const images = [];
  for (let i = 1; i <= 16; i++) {
    images.push(
      <SwiperSlide key={`film_${i}`}>
        <img
          src={ImageUrl + `film/${i}.jpg`}
          alt={`film_${i}`}
          loading="lazy"
        />
      </SwiperSlide>
    );
  }
  return (
    <div className="section film">
      <div className="contents">
        <p className="title"># 필름, 사계절, 우리</p>
        <div className="swiper-container">
          <div className="bg">
            <img src={ImageUrl + "film-frame2.png"} alt="필름이미지2" />
            <img src={ImageUrl + "film-frame1.png"} alt="필름이미지1" />
          </div>
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            centeredSlides={true}
            className="film-swiper"
          >
            {images}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const Gallery = ({ showAlbum }) => {
  const images = [];
  for (let i = 1; i <= 12; i++) {
    images.push(`${ImageUrl}studio/${i}.jpg`);
  }
  return (
    <div className="section gallery">
      <div className="contents">
        <p className="title"># 포토갤러리</p>
        <div className="item-wrapper">
          {images.map((url, idx) => (
            <div className="item" key={idx} onClick={() => showAlbum(idx)}>
              <img src={url} alt={`웨딩사진_${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Information = () => {
  const [showName, setShowName] = useState(null);
  const handleShow = (newShowName) => {
    if (newShowName === showName) return setShowName(false);
    setShowName(newShowName);
  };

  const onCopy = async (account) => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText(account);
    } else {
      document.execCommand("copy", true, account);
    }

    alert("복사완료");
  };

  const Account = ({ name, account }) => {
    return (
      <div className="account-item">
        <div>
          <p>{name}</p>
          <p>{account}</p>
        </div>
        <div onClick={() => onCopy(account)}>복사</div>
      </div>
    );
  };

  return (
    <div className="section information">
      <div className="contents">
        <p className="title">마음 전하기</p>
        <div>
          <p className="sub-title" onClick={() => handleShow("groom")}>
            <span>신랑에게</span>{" "}
            <span className={showName === "groom" ? "arrow up" : "arrow down"}>
              {}
            </span>
          </p>
          {showName === "groom" && (
            <div className="account-box">
              <Account name="나영길" account="신한 110-263-23412" />
              <Account name="나영길" account="신한 1ㅘㅓㅚㅓㅏ3412" />
            </div>
          )}
        </div>
        <div className="border" />

        <div>
          <p className="sub-title" onClick={() => handleShow("bride")}>
            <span>신부에게</span>{" "}
            <span className={showName === "bride" ? "arrow up" : "arrow down"}>
              {}
            </span>
          </p>
          {showName === "bride" && (
            <div className="account-box">
              <Account name="나영길" account="신한 110-263-23412" />
              <Account name="나영길" account="신한 110-263-23412" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Share = () => {
  const onCopy = async () => {
    if ("clipboard" in navigator) {
      await navigator.clipboard.writeText('hmsm-wedding.github.io');
    } else {
      document.execCommand("copy", true, 'hmsm-wedding.github.io');
    }

    alert("청첩장 주소 복사완료");
  };
  return (
    <div className="share">
      <div className="content">
        <div>
          <span>카카오톡으로 공유하기</span>
        </div>
        <div onClick={onCopy}>
          <span>청첩장 주소 복사하기</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
