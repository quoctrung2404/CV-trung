import React from "react";
import "./App.css";

const CvPage = () => {
  return (
    <div className="cv-container">
      {/* Header */}
      <header className="header">
        <div className="profile-pic">
          <img src="trung.jpg" alt="Trương Đình Quốc Trung" />
        </div>
        <div className="profile-info">
          <h1>TRƯƠNG ĐÌNH QUỐC TRUNG</h1>
          <p>
            <strong>MSV:</strong> 22T1020780-K46J |{" "}
            <strong>Ngày sinh:</strong> 24/04/2004
          </p>
          <p>
            <strong>Sinh viên năm 4 - Ngành CNTT</strong>
            <br />
            Chuyên ngành <strong>Công Nghệ Phần Mềm</strong>
            <br />
            Đại học Khoa Học - Đại học Huế
          </p>
        </div>
      </header>

      {/* Liên hệ */}
      <div className="contact-line">
        <span>
          <i className="fa-solid fa-envelope"></i> quoctrungtrongdinh@gmail.com
        </span>
        <span>
          <i className="fa-solid fa-phone"></i> 091 546 6150
        </span>
        <span>
          <i className="fa-brands fa-github"></i> github.com/quoctrung2404
        </span>
      </div>
      <hr className="blue-line" />

      {/* Main content */}
      <main className="main">
        {/* Cột trái */}
        <div className="left-column">
          <p>
            Là sinh viên năm 4 chuyên ngành{" "}
            <strong className="blue-text">Công Nghệ Phần Mềm</strong>. Với sở
            thích <strong>xây dựng</strong> các giao diện web tương tác, tôi chú
            trọng hiệu suất và trải nghiệm người dùng. Có{" "}
            <strong>kinh nghiệm</strong> làm việc nhóm về các dự án đã làm.
          </p>

          {/* Giáo dục */}
          <div className="box purple">
            <h3>
              GIÁO DỤC <span className="year">| 2022 - nay</span>
            </h3>
            <p>
              <strong>ĐẠI HỌC KHOA HỌC</strong>
              <br />
              <strong>ĐẠI HỌC HUẾ</strong>
              <br />
              <span className="italic blue-text">
                Ngành Công Nghệ Phần Mềm
              </span>
            </p>
          </div>

          {/* Sở thích */}
          <div className="box purple">
            <h3>SỞ THÍCH</h3>
            <ul>
              <li>Bóng đá</li>
              <li>Chơi game</li>
              <li>Nghe nhạc</li>
            </ul>
          </div>

          {/* Kỹ năng */}
          <div className="box purple">
            <h3>KỸ NĂNG</h3>
            <ul className="skills">
              <li>
                <span>Làm việc nhóm</span>
                <div className="bar">
                  <div className="fill" style={{ width: "80%" }}></div>
                </div>
              </li>
              <li>
                <span>Quản lý thời gian</span>
                <div className="bar">
                  <div className="fill" style={{ width: "75%" }}></div>
                </div>
              </li>
              <li>
                <span>Content</span>
                <div className="bar">
                  <div className="fill" style={{ width: "70%" }}></div>
                </div>
              </li>
              <li>
                <span>Capcut, Canva</span>
                <div className="bar">
                  <div className="fill" style={{ width: "65%" }}></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Cột phải */}
        <div className="right-column">
          <div className="box blue timeline">
            <h3>KINH NGHIỆM LÀM VIỆC NHÓM</h3>
            <hr className="black-line" />

            {[
              {
                title: "ĐỒ ÁN CÔNG NGHỆ PHẦN MỀM",
                time: "Hiện tại",
                desc: "Xây dựng Website Hệ thống quản lý phòng khám nha khoa",
              },
              {
                title: "KIỂM ĐỊNH PHẦN MỀM",
                time: "Học kì 1 - năm 3",
                desc: "Xây dựng Website Hệ thống quản lý bán sách online",
              },
              {
                title: "KỸ NGHỆ PHẦN MỀM",
                time: "Học kì 2 - năm 3",
                desc: "Xây dựng hệ thống bán sách online",
              },
              {
                title: "PHÂN TÍCH THIẾT KẾ HỆ THỐNG",
                time: "Học kì 1 - năm 3",
                desc: "Xây dựng hệ thống quản lí phúc khảo bài toán",
              },
            ].map((item, i) => (
              <div className="timeline-item" key={i}>
                <span className="dot"></span>
                <p>
                  <strong className="blue-text">{item.title}</strong>
                  <br />
                  {item.time}
                  <br />
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Kỹ năng nền tảng */}
          <div className="box blue timeline">
            <h3>KỸ NĂNG NỀN TẢNG</h3>
            <hr className="black-line" />

            {[
              "Ngôn ngữ: HTML & CSS",
              "JavaScript",
              "C#.net",
              "Kỹ năng giao tiếp",
              "Kỹ năng làm việc nhóm",
              "Kỹ năng quản lý điều phối thời gian",
            ].map((skill, i) => (
              <div className="timeline-item" key={i}>
                <span className="dot"></span>
                <p className="blue-text">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        Cập nhật lần cuối: 10/2025 • Designed by Trương Đình Quốc Trung
      </footer>
    </div>
  );
};

export default CvPage;
