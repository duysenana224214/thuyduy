import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-08-22T15:30:00').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      if (distance < 0) { clearInterval(timer); return; }
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setShowContent(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 6000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const confettiColors = ['#c9a96e', '#ffd700', '#8b6914', '#ff6b6b', '#48dbfb', '#ff9ff3', '#54a0ff', '#5f27cd'];
  const confettiPieces = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
    size: Math.random() * 8 + 4,
    rotation: Math.random() * 360,
    shape: Math.random() > 0.5 ? 'circle' : 'rect',
  }));

  return (
    <div className="app">
      <div className="bg-overlay"></div>
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {showConfetti && (
        <div className="confetti-container">
          {confettiPieces.map((piece) => (
            <div key={piece.id} className={`confetti-piece ${piece.shape}`} style={{
              left: `${piece.left}%`,
              backgroundColor: piece.color,
              width: `${piece.size}px`,
              height: piece.shape === 'rect' ? `${piece.size * 0.6}px` : `${piece.size}px`,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
            }} />
          ))}
        </div>
      )}

      <div className="floating-caps">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="floating-cap" style={{
            left: `${15 + i * 14}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + Math.random() * 3}s`,
            fontSize: `${24 + Math.random() * 16}px`,
            opacity: 0.15 + Math.random() * 0.15,
          }}>🎓</div>
        ))}
      </div>

      {/* Main Card - front → inner content */}
      <div className={`invitation-card ${isOpen ? 'open' : ''}`} onMouseMove={handleMouseMove}>
        <div className="corner-deco top-left"></div>
        <div className="corner-deco top-right"></div>
        <div className="corner-deco bottom-left"></div>
        <div className="corner-deco bottom-right"></div>

        {/* Front Cover - flips like a book page */}
        <div className={`card-front ${isOpen ? 'hidden' : ''}`}>
          <div className="card-front-inner">
            <div className="cover-border-glow"></div>
            <div className="cover-content">

              <div className="school-sash">
                <div className="sash-slider">
                  <div className="sash-track">
                    <div className="sash-content">
                      <span className="sash-text">★🏛️ UIT - TRƯỜNG ĐẠI HỌC NAM CẦN THƠ 🏛️★</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cover-icon-wrapper">
                <div className="cover-icon-ring"><div className="cover-icon-inner">🎓</div></div>
              </div>

              <div className="cover-text-group">
                <p className="cover-label" backgroundColor="red">✦ GRADUATION ✦</p>
                <h1 >THƯ MỜI</h1>
                <img className="cover-invite-logo" src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" />
                <div className="cover-title-underline"><span></span><span></span><span></span></div>
                <p className="cover-label">LỄ TỐT NGHIỆP</p>
              </div>

              <div className="cover-divider"><span>❀</span><span>✦</span><span>❀</span></div>
              <p className="cover-text">Kính mời bạn đến chia vui cùng tôi</p>

              <button className="open-btn" onClick={handleOpen}>
                <span className="btn-shine"></span>
                <span className="btn-text">MỞ THIỆP</span>
                <span className="btn-icon">💌</span>
              </button>
            </div>
          </div>
        </div>

        {/* Inner Content - appears after page flip */}
        <div className={`card-inner ${showContent ? 'visible' : ''}`}>
          <div className="card-inner-bg"></div>
          <div className="inner-scroll">
            <div className="inner-banner">
              <div className="banner-gold-line"></div>
              <div className="banner-content">
                <span className="banner-icon">🎓</span>
                <span className="banner-text">GRADUATION 2026</span>
                <span className="banner-icon">🎓</span>
              </div>
              <div className="banner-gold-line"></div>
            </div>

            <div className="inner-header">
              <div className="header-ornament left"><span></span><span></span><span></span></div>
              <div className="header-text-group">
                <p className="greeting">Kính gửi</p>
                <h2 className="guest-name">Bạn Thân Mến</h2>
                <div className="guest-name-line"></div>
              </div>
              <div className="header-ornament right"><span></span><span></span><span></span></div>
            </div>
            <img className="cover-invite-logo" src={`${import.meta.env.BASE_URL}anhthuyduy2.png`} alt="anhthuyduy2" />
            <div className="inner-content">
              <div className="invite-text-box">
                <span className="quote-mark left">"</span>
                <p className="invite-text">Tôi rất vui mừng được thông báo rằng tôi đã hoàn thành chương trình học và sẽ tham dự</p>
                <span className="quote-mark right">"</span>
              </div>

              <div className="countdown-section">
                <p className="countdown-label">✧ Đếm ngược đến ngày tốt nghiệp ✧</p>
                <div className="countdown-grid">
                  {['Ngày','Giờ','Phút','Giây'].map((unit, i) => {
                    const vals = [countdown.days, countdown.hours, countdown.minutes, countdown.seconds];
                    return (
                      <React.Fragment key={unit}>
                        {i > 0 && <div className="countdown-sep">:</div>}
                        <div className="countdown-item">
                          <div className="countdown-value">
                            <span className="countdown-num">{String(vals[i]).padStart(2, '0')}</span>
                            <div className="countdown-shine"></div>
                          </div>
                          <span className="countdown-unit">{unit}</span>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              <div className="ceremony-box">
                <div className="ceremony-ribbon"><span>🎉 LỄ TỐT NGHIỆP 🎉</span></div>
                <div className="ceremony-details">
                  <div className="detail-card">
                    <div className="detail-icon-wrap"><span className="detail-icon-bg"><span className="detail-icon">📅</span></span></div>
                    <div className="detail-info">
                      <span className="detail-label">Thời gian</span>
                      <span className="detail-value">15:30</span>
                      <span className="detail-sub">Thứ Bảy, ngày 22 tháng 8 năm 2026</span>
                    </div>
                  </div>
                  <div className="detail-divider"><span>✧</span></div>
                  <div className="detail-card">
                    <div className="detail-icon-wrap"><span className="detail-icon-bg"><span className="detail-icon">📍</span></span></div>
                    <div className="detail-info">
                      <span className="detail-label">Địa điểm</span>
                      <span className="detail-value">Hội trường I</span>
                      <span className="detail-sub">Trường Đại học Nam Cần Thơ</span>
                      <span className="detail-sub">Số 168, Nguyễn Văn Cừ (nối dài), P. An Bình, TP. Cần Thơ</span>
                    </div>
                  </div>
                </div>
              </div>
              <img className="cover-invite-logo" src={`${import.meta.env.BASE_URL}anhthuyduy3.png`} alt="anhthuduy" />
              <div className="invite-text-box second">
                <p className="invite-text">Sự hiện diện của bạn là niềm vinh dự và hạnh phúc lớn lao đối với tôi. Rất mong được đón tiếp bạn trong ngày trọng đại này!</p>
              </div>
            </div>

            <div className="graduate-info">
              <div className="graduate-frame">
                <div className="graduate-avatar">👩‍🎓</div>
                <div className="graduate-details">
                  <h2 className="graduate-name">Nguyễn Thúy Duy</h2>
                  <p className="graduate-major">Kỹ Sư Công Nghệ Thông Tin</p>
                  <p className="graduate-school">Trường Đại học Nam Cần Thơ</p>
                </div>
              </div>
            </div>

            <div className="inner-footer">
              <div className="footer-ornament">
                <span className="footer-line-thick"></span>
                <span className="footer-star">✦</span>
                <span className="footer-line-thick"></span>
              </div>
              <p className="footer-text">"Hành trình vạn dặm bắt đầu từ một bước chân"</p>
              <p className="footer-author">— Lão Tử</p>
            </div>

            <div className="wish-section">
              <div className="wish-header">
                <div className="wish-header-line"></div>
                <div className="wish-header-content">
                  <span className="wish-header-icon">💌</span>
                  <h3 className="wish-title">GỬI LỜI CHÚC</h3>
                </div>
                <div className="wish-header-line"></div>
              </div>
              <p className="wish-desc">Hãy để lại lời chúc của bạn, tôi sẽ nhận được và rất trân trọng từng lời chúc!</p>
              <form className="wish-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <div className="input-icon">👤</div>
                  <input type="text" className="wish-input" placeholder="Tên của bạn *" value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <div className="input-icon">📱</div>
                    <input type="tel" className="wish-input" placeholder="Số điện thoại" value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div className="input-group">
                    <div className="input-icon">✉️</div>
                    <input type="email" className="wish-input" placeholder="Email" value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>
                <div className="input-group textarea-group">
                  <div className="textarea-icon">💭</div>
                  <textarea className="wish-textarea" placeholder="Lời chúc của bạn *" value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} maxLength={500} required />
                  <span className="char-count">{formData.message.length}/500</span>
                </div>
                <button type="submit" className="wish-submit-btn">
                  <span className="btn-bg-hover"></span>
                  <span>🎉 Gửi lời chúc</span>
                </button>
              </form>
              {submitted && (
                <div className="wish-success">
                  <div className="success-check">✓</div>
                  <div className="success-text">
                    <span className="success-title">Đã gửi thành công!</span>
                    <span className="success-desc">Cảm ơn bạn rất nhiều! Tôi sẽ nhận được lời chúc của bạn. ❤️</span>
                  </div>
                </div>
              )}
            </div>

            <div className="bottom-banner">
              <div className="banner-gold-line"></div>
              <div className="banner-content">
                <span className="banner-small">✦</span>
                <span className="banner-small">❀</span>
                <span className="banner-small">✦</span>
              </div>
              <div className="banner-gold-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;