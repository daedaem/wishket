import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className={classes.footerFirstSection}>
        {/* <h3>wishket</h3> */}
        <div className={classes.footerItems}>
          <h4>위시켓</h4>
          <p>위시켓 소개</p>
          <p>이용 약관</p>
          <p>개인정보 처리방침</p>
        </div>
        <div className={classes.footerItems}>
          <h4>고객센터</h4>
          <p>클라이언트 고객센처</p>
          <p>파트너스 고객 센터</p>
          <p>이용 요금</p>
        </div>
        <div className={classes.footerItems}>
          <h4>뉴스 센터</h4>
          <p>공지사항</p>
          <p>위시켓 소식</p>
          <p>위시켓 이용 팁</p>
        </div>
        <div className={classes.footerItems}>
          <h4>뉴스 센터</h4>
          <p>공지사항</p>
          <p>위시켓 소식</p>
          <p>위시켓 이용 팁</p>
        </div>
      </div>
      <div className={classes.footerSecondSection}>
        <h4>CONTACT US</h4>
        <p>02-6925-4849(10:00-18:00, 공휴일 제외)</p>
        <p>help@wishket.com</p>
      </div>
    </footer>
  );
};

export default Footer;
