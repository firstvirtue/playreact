import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import './app.scss';

function App() {

  // ### STATE
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    window.sendMessage = (type, param) => {
      console.log('유휴!', type, param);
      setHidden(false);
    }
  }, []);

  // ### EVENT
  const onClick = (e) => {
    setHidden(true);
  }

  return (
    <div className="App">
      {
        hidden ? null
            :
        <div className="layer">
          <button className="btn-close" onClick={onClick}>닫기</button>
          <div className="container">
            <div className="slider">
              {/* [TODO] 슬라이더 */}
              {/* [TODO] 제품박스 */}
              <iframe src="https://test.bandainamcomall.co.kr/iframe_360/box_3d_preview.html?image=rg_force_impulse_gundam_PAC_"></iframe>
              {/*<video src="https://dev.does.kr/test/bandai-gundam/bandai_gundam_360_02.mp4" autoPlay={true} loop={true} playsInline={true} muted={true}></video>*/}
            </div>

            <div className="content">
              <h2 className="title">[메탈빌드] 엑시아 리페어 4</h2>
              <div className="rating"></div>
              <div className="price-wrap">
                <div className=""></div>
                <div className="price">240,000<span>원</span></div>
                <div className="discount">20%</div>
              </div>
              <div className="total-price"></div>
              <a href="https://test.bandainamcomall.co.kr/coding/goods_detail.html" target="_blank" rel="noopener noreferer nofollow">구매하러 가기</a>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
