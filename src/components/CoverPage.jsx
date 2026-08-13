import React from 'react';
import './CoverPage.css';

function CoverPage({ show, onContinue }) {
  return (
    <div className={`cover-page ${show ? 'visible' : ''}`}>
      <div className="cover-page-border"></div>

      <div className="cv-sash-wrapper">
        <div className="cv-sash">
          <div className="cv-sash-border"></div>
          <div className="cv-sash-content">
            <span className="cv-sash-logo">🎓</span>
            <span className="cv-sash-title">UIT</span>
            <span className="cv-sash-sub">ĐẠI HỌC CÔNG NGHỆ THÔNG TIN</span>
          </div>
          <div className="cv-sash-fold"></div>
          <div className="cv-sash-tail"></div>
        </div>
      </div>

      <div className="cover-page-inner">
        <div className="cv-corner cv-corner-tl"></div>
        <div className="cv-corner cv-corner-tr"></div>
        <div className="cv-corner cv-corner-bl"></div>
        <div className="cv-corner cv-corner-br"></div>

        <div className="cv-ornament-top">
          <span className="cv-orn-dot"></span>
          <span className="cv-orn-line"></span>
          <span className="cv-orn-diamond">◇</span>
          <span className="cv-orn-line"></span>
          <span className="cv-orn-dot"></span>
        </div>

        <div className="cv-top-section">
          <p className="cv-sub-department">TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN</p>
          <h1 className="cv-school-name">UNIVERSITY OF IT</h1>
          <p className="cv-school-en">College of Information Technology</p>
        </div>

        <div className="cv-divider">
          <span className="cv-divider-line"></span>
          <span className="cv-divider-star">✦</span>
          <span className="cv-divider-line"></span>
        </div>

        <div className="cv-middle-section">
          <p className="cv-presents">trân trọng kính mời</p>
          <img className="cv-invite-logo" src="/logo.png" alt="Logo" />
          <h2 className="cv-student-name">Nguyễn Văn A</h2>
          <div className="cv-name-underline">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="cv-ceremony">
          <p className="cv-ceremony-en">GRADUATION CEREMONY</p>
          <p className="cv-ceremony-vi">Lễ tốt nghiệp</p>
        </div>

        <div className="cv-ornament-bottom">
          <span className="cv-orn-dot"></span>
          <span className="cv-orn-line"></span>
          <span className="cv-orn-diamond">◇</span>
          <span className="cv-orn-line"></span>
          <span className="cv-orn-dot"></span>
        </div>

        <div className="cv-bottom-section">
          <p className="cv-term">Khóa tốt nghiệp 2026</p>
          <p className="cv-location">Ngày 15 tháng 11 năm 2026 · Hội trường A1</p>
        </div>

        <button className="cv-continue-btn" onClick={onContinue}>
          <span className="cv-btn-shine"></span>
          <span className="cv-btn-text">TIẾP TỤC</span>
          <span className="cv-btn-arrow">→</span>
        </button>
      </div>
    </div>
  );
}

export default CoverPage;